/*jslint adsafe: false, bitwise: true, browser: true, cap: false, css: false,
  debug: false, devel: true, eqeqeq: true, es5: false, evil: false,
  forin: false, fragment: false, immed: true, laxbreak: false, newcap: true,
  nomen: false, on: false, onevar: true, passfail: false, plusplus: true,
  regexp: false, rhino: true, safe: false, strict: false, sub: false,
  undef: true, white: false, widget: false, windows: false */
/*global jQuery: false, window: false */
"use strict";


/*
* (c) 2010 Carlo Zottmann
* http://github.com/carlo/simplenote-js
*
* Permission is hereby granted, free of charge, to any person
* obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without
* restriction, including without limitation the rights to use,
* copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the
* Software is furnished to do so, subject to the following
* conditions:
*
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
* OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
* HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
* WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
* FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
* OTHER DEALINGS IN THE SOFTWARE.
*/


/**
* SimpleNote API wrapper module.
*
* @module     simplenote-js
*/


/**
* SimpleNote API wrapper class.
*
* Please note that the SimpleNote API expects everything to be UTF-8, and so
* does simplenote-js.
*
* @class      SimpleNote
* @requires   jquery
* @constructor
*/

function SimpleNote() {
  
  var $ = window.jQuery,
  

  /**
  * The simplenote-js version number.
  *
  * @property   _version
  * @type       String
  * @final
  * @private
  */
  
  _version = "1.0.1",
  
  
  /**
  * After a successful login, this variable holds the account email address
  * required for all subsequent API requests.
  *
  * @property   _email
  * @type       String
  * @private
  */
  
  _email = "",
  

  /**
  * After a successful login, this variable holds the auth token required for
  * all subsequent API requests.
  *
  * @property   _token
  * @type       String
  * @private
  */
  
  _token = "",
  
  
  /**
  * Contains the base URL of the API.
  *
  * @property   _baseURL
  * @type       String
  * @final
  * @private
  */
  
  _baseURL = "https://simple-note.appspot.com/api",

  
  /**
  * Contains the OpenData table used for all YQL calls.
  *
  * @property   _yqlTableURL
  * @type       String
  * @default    http://github.com/carlo/simplenote-js/raw/master/src/yql_simplenote.xml
  * @private
  */
  
  _yqlTableURL = "http://github.com/carlo/simplenote-js/raw/master/src/yql_simplenote.xml",
  
  
  /**
  * Contains the table name used in YQL query.
  *
  * @property   _yqlTableName
  * @type       String
  * @final
  * @private
  */
  
  _yqlTableName = "snjs" + ( new Date() ).getTime(),
  

  /**
  * Enables console output of debugging messages.
  *
  * @property   _debugEnabled
  * @type       Boolean
  * @default    false
  * @private
  */
  
  _debugEnabled = false;
  
  
  if ( !$.base64 ) {
    throw "FATAL ERROR: jQuery.base64 is not available!";
  }
  
  
  function log() {
    log.history = log.history || [];   // store logs to an array for reference
    log.history.push( arguments );
    if ( window.console && _debugEnabled ) {
      console.log( Array.prototype.slice.call( arguments ) );
    }
  }

  
  /**
  * Deletes both `_email` and `_token` variables.
  *
  * @method     _clearCredentials
  * @private
  */
  
  function _clearCredentials() {
    _email = "";
    _token = "";
  }
  
  
  /**
  * Returns a boolean showing whether the user is currently logged in or not.
  *
  * @method     _isLoggedIn
  * @return     {Boolean}
  * @private
  */
  
  function _isLoggedIn() {
    return ( !!_email && !!_token );
  }


  /**
  * Throws an exception if either the internal email or token aren't set
  * (which means the user's not logged in).
  *
  * @method     _throwUnlessLoggedIn
  * @private
  */
  
  function _throwUnlessLoggedIn() {
    if ( !_isLoggedIn() ) {
      throw "AuthError";
    }
  }


  /**
  * Accepts a YQL query and returns the related YQL URL.
  *
  * @method     _getYQLURL
  * @param      query {String} YQL query
  * @private
  */
  
  function _getYQLURL( query ) {
    return [
      "https://query.yahooapis.com/v1/public/yql?q=",
      encodeURIComponent( query ),
      "&diagnostics=true",
      "&format=json",
      "&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys"
    ].join( "" );
  }


  /**
  * Returns an error code for a passed HTTP status.
  * 
  * @method     _getErrorCode
  * @param      status {String} The HTTP status code returned by YQL.
  * @private
  */

  function _getErrorCode( status ) {
    var codes = {
      "400": "bad_request",
      "401": "unauthorized",
      "403": "forbidden",
      "404": "not_found",
      "500": "server_error"
    };

    status = String( status );
    
    return codes[ status ] || "unknown_error";
  }  // _getErrorCode
 

  /**
  * Proxy method abstracting most YQL calls.
  *
  * @method     _queryYQL
  * @param      caller {String} Name of the calling method.  Used for log
  *             output.
  * @param      query {String} The YQL query.
  * @param      cbSuccess {Function} The on-success callback.
  * @param      cbError {Function} The on-error callback.
  * @param      context {Object} The context of the callbacks mentioned above.
  * @private
  */
  
  function _queryYQL( caller, query, cbSuccess, cbError, context ) {
    $.ajax({
      url: _getYQLURL( query ),
      context: context,
      success: function( data, status, req ) {
        var yqlStatus,
          yqlStatusCode,
          res;
        
        if ( !data || !data.query || !data.query.results || !data.query.results.result ) {
          log( caller + " error #1", data );
          cbError( "yql_error" );
          return;
        }
        
        yqlStatus = data.query.results.result.status;
        
        if ( yqlStatus !== "200" ) {
          yqlStatusCode = _getErrorCode( yqlStatus );

          if ( yqlStatus === "401" ) {
            _clearCredentials();
          }

          log( caller + " error #2", yqlStatusCode, data );
          cbError( yqlStatusCode );
          return;
        }

        log( caller + " success", data );
        
        res = data.query.results.result;
        
        if ( typeof res.response === "string" ) {
          res.response = /^[\[\{]/.test( res.response ) ? $.parseJSON( res.response ) : res.response;
        }

        cbSuccess( res );
      },
      error: function( req, status, error ) {
        log( caller + " error #3", req, status, error );
        cbError( "unknown" );
      },
      dataType: "jsonp",
      scriptCharset: "utf-8"
    });
  }
  
  
  /**
  * Parses a SN-supplied timestamp and returns a `Date` object.
  *
  * @method     _parseTimestamp
  * @param      timestamp {String} 
  * @returns    {Date}
  * @private
  */
  
  function _parseTimestamp( string ) {
    if ( !( /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\.\d{6}$/.test( string ) ) ) {
      throw "ArgumentError: string must be in the correct form (for example, '2008-12-18 04:04:20.554442')";
    }
    
    var seg = string.split( /[^\d]/g ),
      d = new Date();
    
    d.setUTCFullYear( seg[ 0 ] );
    d.setUTCMonth( seg[ 1 ] - 1 );
    d.setUTCDate( seg[ 2 ] );
    d.setUTCHours( seg[ 3 ] );
    d.setUTCMinutes( seg[ 4 ] );
    d.setUTCSeconds( seg[ 5 ] );
    d.setUTCMilliseconds( seg[ 6 ].substr( 0, 3 ) );

    return d;
  }
  
  
  /**
  * Authenticates the client.  The request is made asynchronously via YQL.
  * Throws an exception if one of the arguments is missing or empty.
  *
  * @method     _authenticate
  * @param      config.email {String} SimpleNote account email address
  * @param      config.password {String} SimpleNote account password
  * @param      config.success {Function} callback function to be called on
  *             successful authentication (optional)
  * @param      config.error {Function} callback function to be called on
  *             failure, is passed a plain text error string (optional)
  * @private
  */
  
  function _authenticate( obj ) {
    if ( !obj || !obj.email || !obj.password ) {
      throw "ArgumentError: email and password required";
    }
    
    var query,
      config = $.extend({
        success: function() {
          alert( "SimpleNote auth success" );
        },
        error: function( errorCode ) {
          alert( "SimpleNote auth error: " + errorCode );
        }
      }, obj );
      
    query = [
      "USE '", _yqlTableURL, "' AS ", _yqlTableName, "; ",
      "SELECT * FROM ", _yqlTableName, " ",
      "WHERE path='/login' ",
      "AND method='post' ",
      "AND data='",
        $.base64.encode(
          $.param({ email: config.email, password: config.password })
        ),
      "'"
    ].join( "" );
    
    log( "_authenticate", query );
    
    function __cbSuccess( result ) {
      _email = config.email;
      _token = $.trim( result.response );
      config.success();
    }
    
    function __cbError( code ) {
      _clearCredentials();
      config.error( code );
    }
    
    _queryYQL( "_authenticate", query, __cbSuccess, __cbError, this );
  }  // _authenticate
  
  
  /**
  * Checks if the passed argument is an object and has `error` and `success`
  * keys which are functions.  Throws an `ArgumentError` exception on failure.
  *
  * @method     _validateRetrievalConfig
  * @param      obj {Object} The object to validate.
  * @private
  */
  
  function _validateRetrievalConfig( obj ) {
    if ( !$.isPlainObject( obj ) ) {
      throw "ArgumentError: argument must be object";
    }
    
    if ( !$.isFunction( obj.success ) || !$.isFunction( obj.error ) ) {
      throw "ArgumentError: callbacks missing";
    }
  }

  
  /**
  * Returns an index of all notes.  This method will return a JSON object with
  * three main properties for each note: `key`, `modify`, and `deleted`.  Some
  * notes may be marked `deleted`; these notes will be removed permanently
  * the next time the client synchronizes with the server.
  *
  * Throws an exception if one of the arguments is missing or empty.
  *
  * The index will be returned as an array containing hashes.  The hashes
  * contain the following keys:
  *
  * * `deleted`: true | false
  * * `key`: the note ID
  * * `modify`: a string containing the last-modified date
  *
  * @method     _retrieveIndex
  * @method     retrieveIndex
  * @param      config.success {Function} callback function to be called on
  *             success; the callback will be passed the array containing the
  *             notes index
  * @param      config.error {Function} callback function to be called on
  *             failure, is passed a plain text error string
  * @private
  */
  
  function _retrieveIndex( obj ) {
    _throwUnlessLoggedIn();
    _validateRetrievalConfig( obj );

    var query,
      config = $.extend({
        success: function( json ) {},
        error: function( errorString ) {}
      }, obj );
      
    query = [
      "USE '", _yqlTableURL, "' AS ", _yqlTableName, "; ",
      "SELECT * FROM ", _yqlTableName, " ",
      "WHERE path='/index' ",
      "AND data='", $.param({ email: _email, auth: _token }), "'"
    ].join( "" );
    
    log( "_retrieveIndex", query );
    
    function __cbSuccess( result ) {
      var res = result.response;
      
      $.each( res, function( i, note ) {
        note.modify = _parseTimestamp( note.modify );
        res[ i ] = note;
      });
      
      config.success( result.response );
    }
    
    _queryYQL( "_retrieveIndex", query, __cbSuccess, config.error, this );
  }  // _retrieveIndex


  /**
  * Returns notes containing a particular term.  Throws an exception if one of
  * the arguments is missing or empty.
  *
  * This method will return a JSON object with two keys, `notes` (containing
  * an array with found notes) and `totalRecords` (showing the total number of
  * search results).
  *
  * Each note is represented as an object containing two keys, `key` (the note
  * ID) and `body` (the note string).
  *
  * @method     _searchNotes
  * @param      config.query {String} search string
  * @param      config.maxResults {Int} (optional): max number of results
  *             (default: 10)
  * @param      config.offset {Int} (optional) index offset
  * @param      config.success {Function} callback function to be called on
  *             success; the callback will be passed the array containing the
  *             notes index
  * @param      config.error {Function} callback function to be called on
  *             failure, is passed a clear text error string.
  * @private
  */

  function _searchNotes( obj ) {
    _throwUnlessLoggedIn();
    _validateRetrievalConfig( obj );

    if ( !obj.query ) {
      throw "ArgumentError: query is missing";
    }

    var query,
      config = $.extend({
        success: function( json ) {},
        error: function( errorString ) {}
      }, obj );

    config.query = $.trim( config.query );
    
    if ( typeof config.maxResults !== "number" ) {
      config.maxResults = 10;
    }

    if ( typeof config.offset !== "number" ) {
      config.offset = 0;
    }

    query = [
      "USE '", _yqlTableURL, "' AS ", _yqlTableName, "; ",
      "SELECT * FROM ", _yqlTableName, " ",
      "WHERE path='/search' ",
      "AND data='",
      $.param({
        email: _email,
        auth: _token,
        query: config.query,
        results: config.maxResults,
        offset: config.offset
      }), "'"
    ].join( "" );
    
    log( "_searchNotes", query );
    
    function __cbSuccess( result ) {
      var res = result.response.Response,
        hash = {
          totalRecords: Number( res.totalRecords ),
          notes: []
        },
        numResults = ( hash.totalRecords > 0 ) ? res.Results.length : 0,
        i;
      
      for ( i = 0; i < numResults; i += 1 ) {
        hash.notes.push({
          key: res.Results[ i ].key,
          body: res.Results[ i ].content
        });
      }

      config.success( hash );
    }
    
    _queryYQL( "_searchNotes", query, __cbSuccess, config.error, this );
  }
  
  
  /**
  * Retrieves and returns a single note to the supplied callback function as a
  * hash in the following form:
  *
  *     {
  *       body: "my example note",
  *       key: "agtzaW1wbG0LCxIETm90ZRjoBAw",
  *       modifydate: Sat Aug 28 2010 13:24:35 GMT+0200 (CEST),
  *       createdate: Sat Aug 28 2010 13:24:32 GMT+0200 (CEST),
  *       deleted: false
  *     }  
  *
  * Throws an exception if one of the arguments is missing or empty.
  *
  * @method     _retrieveNote
  * @param      config.key {String} the note ID
  * @param      config.success {Function} callback function to be called on
  *             success; the callback will be passed the note hash
  * @param      config.error {Function} callback function to be called on
  *             failure, is passed a clear text error string.
  * @private
  */
  
  function _retrieveNote( obj ) {
    _throwUnlessLoggedIn();
    _validateRetrievalConfig( obj );

    if ( !obj.key ) {
      throw "ArgumentError: key is missing";
    }

    var query,
      config = $.extend({
        success: function( json ) {},
        error: function( errorString ) {}
      }, obj );
      
    query = [
      "USE '", _yqlTableURL, "' AS ", _yqlTableName, "; ",
      "SELECT * FROM ", _yqlTableName, " ",
      "WHERE path='/note' ",
      "AND data='", $.param({ email: _email, auth: _token, key: config.key }), "'"
    ].join( "" );
    
    log( "_retrieveNote", query );
    
    function __cbSuccess( result ) {
      config.success({
        body: $.trim( result.response ),
        key: result.headers[ "note-key" ],
        modifydate: _parseTimestamp( result.headers[ "note-modifydate" ] ),
        createdate: _parseTimestamp( result.headers[ "note-createdate" ] ),
        deleted: ( result.headers[ "note-deleted" ].toLowerCase() === "true" )
      });
    }
    
    _queryYQL( "_retrieveNote", query, __cbSuccess, config.error, this );
  }  // _retrieveNote


  /**
  * Creates a new note.  Returns the new note ID.  Throws an exception if one
  * of the arguments is missing or empty.
  *
  * @method     _createNote
  * @param      config.body {String} the note body
  * @param      config.success {Function} callback function to be called on
  *             success; the callback will be passed the note ID string
  * @param      config.error {Function} callback function to be called on
  *             failure, is passed a clear text error string.
  * @private
  */
  
  function _createNote( obj ) {
    _throwUnlessLoggedIn();
    _validateRetrievalConfig( obj );

    if ( !obj.body ) {
      throw "ArgumentError: body is missing";
    }

    var query,
      config = $.extend({
        success: function( json ) {},
        error: function( errorString ) {}
      }, obj );
    
    config.body = $.trim( config.body );
      
    query = [
      "USE '", _yqlTableURL, "' AS ", _yqlTableName, "; ",
      "SELECT * FROM ", _yqlTableName, " ",
      "WHERE path='/note?", $.param({ email: _email, auth: _token }), "' ",
      "AND data='", $.base64.encode( config.body ), "' ",
      "AND method='post'"
    ].join( "" );
    
    log( "_createNote", query );
    
    function __cbSuccess( result ) {
      config.success( $.trim( result.response ) );
    }
    
    _queryYQL( "_createNote", query, __cbSuccess, config.error, this );
  }  // _createNote


  /**
  * Updates an existing note.  Returns the note ID on success.  Throws an
  * exception if one of the arguments is missing or empty.
  *
  * @method     _updateNote
  * @param      config.key {String} the ID of the note to update
  * @param      config.body {String} the note body
  * @param      config.success {Function} callback function to be called on
  *             success; the callback will be passed the note ID string
  * @param      config.error {Function} callback function to be called on
  *             failure, is passed a clear text error string.
  * @private
  */
  
  function _updateNote( obj ) {
    _throwUnlessLoggedIn();
    _validateRetrievalConfig( obj );

    if ( !obj.body ) {
      throw "ArgumentError: body is missing";
    }

    if ( !obj.key ) {
      throw "ArgumentError: key is missing";
    }

    var query,
      config = $.extend({
        success: function( json ) {},
        error: function( errorString ) {}
      }, obj );
      
    config.body = $.trim( config.body );

    query = [
      "USE '", _yqlTableURL, "' AS ", _yqlTableName, "; ",
      "SELECT * FROM ", _yqlTableName, " ",
      "WHERE path='/note?", $.param({ email: _email, auth: _token, key: config.key }), "' ",
      "AND data='", $.base64.encode( config.body ), "' ",
      "AND method='post'"
    ].join( "" );
    
    log( "_updateNote", query );
    
    function __cbSuccess( result ) {
      config.success( $.trim( result.response ) );
    }
    
    _queryYQL( "_updateNote", query, __cbSuccess, config.error, this );
  }  // _updateNote

  
  /**
  * Deletes an existing note.  Throws an exception if one of the arguments is
  * missing or empty.
  *
  * @method     _deleteNote
  * @param      config.key {String} the ID of the note to delete
  * @param      config.permanently {Boolean} set to `true` if you want to not
  *             only mark the note as deleted on the server but to delete it
  *             right away (see SN API docs)
  * @param      config.success {Function} callback function to be called on
  *             success; the callback will be passed the note ID string
  * @param      config.error {Function} callback function to be called on
  *             failure, is passed a clear text error string.
  * @private
  */
  
  function _deleteNote( obj ) {
    _throwUnlessLoggedIn();
    _validateRetrievalConfig( obj );

    if ( !obj.key ) {
      throw "ArgumentError: key is missing";
    }

    var query,
      config = $.extend({
        success: function( json ) {},
        error: function( errorString ) {}
      }, obj );
      
    query = [
      "USE '", _yqlTableURL, "' AS ", _yqlTableName, "; ",
      "SELECT * FROM ", _yqlTableName, " ",
      "WHERE path='/delete' ",
      "AND data='",
      $.param({
        email: _email,
        auth: _token,
        key: config.key,
        dead: ( config.permanently === true ) ? "1" : ""
      }),
      "' "
    ].join( "" );
    
    log( "_deleteNote", query );
    
    function __cbSuccess( result ) {
      config.success( $.trim( result.response ) );
    }
    
    _queryYQL( "_deleteNote", query, __cbSuccess, config.error, this );
  }  // _deleteNote




  // ============ PUBLIC METHODS & PROPERTIES ================================



  
  /**
  * Authenticates the client.  The request is made asynchronously via YQL.
  * Throws an exception if one of the arguments is missing or empty.
  *
  * @method     auth
  * @param      config.email {String} SimpleNote account email address
  * @param      config.password {String} SimpleNote account password
  * @param      config.success {Function} callback function to be called on
  *             successful authentication (optional)
  * @param      config.error {Function} callback function to be called on
  *             failure, is passed a plain text error string (optional)
  */
  
  this.auth = function( config ) {
    _authenticate( config );
  };
  
  
  /**
  * Returns an index of all notes.  This method will return a JSON object with
  * three main properties for each note: `key`, `modify`, and `deleted`.  Some
  * notes may be marked `deleted`; these notes will be removed permanently
  * the next time the client synchronizes with the server.
  *
  * Throws an exception if one of the arguments is missing or empty.
  *
  * @method     retrieveIndex
  * @param      config.success {Function} callback function to be called on
  *             success; the callback will be passed the array containing the
  *             notes index
  * @param      config.error {Function} callback function to be called on
  *             failure, is passed a plain text error string
  */

  this.retrieveIndex = function( obj ) {
    _retrieveIndex( obj );
  };
  
  
  /**
  * Returns notes containing a particular term.  Throws an exception if one of
  * the arguments is missing or empty.
  *
  * This method will return a JSON object with two keys, `notes` (containing
  * an array with found notes) and `totalRecords` (showing the total number of
  * search results).
  *
  * Each note is represented as an object containing two keys, `key` (the note
  * ID) and `body` (the note string).
  *
  * @method     searchNotes
  * @param      config.query {String} search string
  * @param      config.maxResults {Int} (optional): max number of results
  *             (default: 10)
  * @param      config.offset {Int} (optional) index offset
  * @param      config.success {Function} callback function to be called on
  *             success; the callback will be passed the array containing the
  *             notes index
  * @param      config.error {Function} callback function to be called on
  *             failure, is passed a clear text error string.
  */

  this.searchNotes = function( obj ) {
    _searchNotes( obj );
  };
  
  
  /**
  * Retrieves and returns a single note as a hash in the following form:
  *
  *     {
  *       body: "my example note",
  *       key: "agtzaW1wbG0LCxIETm90ZRjoBAw",
  *       modifydate: "2008-12-18 04:04:20.554442",
  *       createdate: "2008-12-18 04:04:20.554442",
  *       deleted: false
  *     }  
  *
  * Throws an exception if one of the arguments is missing or empty.
  *
  * @method     retrieveNote
  * @param      config.key {String} the note ID
  * @param      config.success {Function} callback function to be called on
  *             success; the callback will be passed the note hash
  * @param      config.error {Function} callback function to be called on
  *             failure, is passed a clear text error string.
  */

  this.retrieveNote = function( obj ) {
    _retrieveNote( obj );
  };
  
  
  /**
  * Creates a new note.  Returns the new note ID.  Throws an exception if one
  * of the arguments is missing or empty.
  *
  * @method     createNote
  * @param      config.body {String} the note body
  * @param      config.success {Function} callback function to be called on
  *             success; the callback will be passed the note ID string
  * @param      config.error {Function} callback function to be called on
  *             failure, is passed a clear text error string.
  */
  
  this.createNote = function( obj ) {
    _createNote( obj );
  };
  
  
  /**
  * Updates an existing note.  Returns the note ID on success.  Throws an
  * exception if one of the arguments is missing or empty.
  *
  * @method     updateNote
  * @param      config.key {String} the ID of the note to update
  * @param      config.body {String} the note body
  * @param      config.success {Function} callback function to be called on
  *             success; the callback will be passed the note ID string
  * @param      config.error {Function} callback function to be called on
  *             failure, is passed a clear text error string.
  */
  
  this.updateNote = function( obj ) {
    _updateNote( obj );
  };
  
  
  /**
  * Deletes an existing note.  Throws an exception if one of the arguments is
  * missing or empty.
  *
  * @method     deleteNote
  * @param      config.key {String} the ID of the note to delete
  * @param      config.permanently {Boolean} set to `true` if you want to not
  *             only mark the note as deleted on the server but to delete it
  *             right away (see SN API docs)
  * @param      config.success {Function} callback function to be called on
  *             success; the callback will be passed the note ID string
  * @param      config.error {Function} callback function to be called on
  *             failure, is passed a clear text error string.
  */
  
  this.deleteNote = function( obj ) {
    _deleteNote( obj );
  };
  
  
  /**
  * Returns a boolean showing whether the user is currently logged in or not.
  *
  * @method     isLoggedIn
  * @return     {Boolean}
  */

  this.isLoggedIn = function() {
    return _isLoggedIn();
  };
    

  /**
  * Returns auth details, i.e. an object containing the current email address
  * and auth token returned by the API after a successful login.
  *
  * @method     getAuthDetails
  * @return     {Object} Auth info.
  */
  
  this.getAuthDetails = function() {
    return {
      token: _token,
      email: _email
    };
  };
  
  
  /**
  * Sets the Open Data table used in all YQL requests.  Usually, you'll want
  * to put the Open Data table XML file (see `yql_simplenote.xml`) on a server
  * controlled by you so you have full control over it.  If you do that, you
  * can tell `SimpleNote` to use it by setting the new URL with this method.
  *
  * @method     setOpenDataTable
  */
  
  this.setOpenDataTable = function( url ) {
    _yqlTableURL = url;
  };
  
  
  /**
  * Returns the Open Data table used in all YQL requests.
  *
  * @method     getOpenDataTable
  * @return     {String} Open Data Table URL.
  */
  
  this.getOpenDataTable = function() {
    return _yqlTableURL;
  };
  
  
  /**
  * Enables console output of debugging messages.
  *
  * @method     enableDebug
  * @param      bool {Boolean} Enable/disable debugging.
  */
  
  this.enableDebug = function( bool ) {
    _debugEnabled = !!bool;
  };


  /**
  * Returns the simplenote-js version number.
  *
  * @property   VERSION
  * @type       String
  * @final
  */
  
  this.VERSION = _version;
  

  /*
  this.debug = {
    showToken: function() {
      return $.param({
        auth: _token,
        email: _email
      });
    }
  };
  */
  
}