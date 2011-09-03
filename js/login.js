// JQUERY NOCONFLICT
var $ = jQuery.noConflict();

// GET URL VARS PLUGIN
// http://jquery-howto.blogspot.com/2009/09/get-url-parameters-values-with-jquery.html
$.extend({getUrlVars:function(){for(var a=[],b,d=window.location.href.slice(window.location.href.indexOf("?")+1).split("&"),c=0;c<d.length;c++)b=d[c].split("="),a.push(b[0]),a[b[0]]=b[1];return a},getUrlVar:function(a){return $.getUrlVars()[a]}});

/*jslint vars: true*/
/*global localStorage: false, jQuery: false, window: false*/

// NOTESTACK HOMEPAGE CODE
// BRITT O'HALLORAN (britt.j.ohalloran@gmail.com)
var notestack = (function () {
	
	// JS STRICT MODE
	"use strict";
	
	// CONSOLE LOG (DEV MODE)
	var consoleLog = function (msg) {
		//console.log(msg);
	};
	
	// ATTEMPT LOGIN
	var sn_login = function (email, password) {
		localStorage.setItem('email', email);
		$.ajax('/sn.php', {
			type: 'POST',
			data: {'action': 'login', 'email': email, 'password': password},
			complete: function (response) {
				//console.log(data);
				consoleLog(response);
				var token = $.parseJSON(response.responseText).token;
				if (token === '') { // error authenticating
					$('.login_message').slideUp(200);
					$('.login').effect('shake', {times: 3}, 100);
					
				} else { // good token, save and login
					localStorage.setItem('token', token); // store token locally
					localStorage.setItem('tokenDate', ((new Date()).getTime() / 1000));
					window.location = "/+/";
				}
			},
			error: function (jqXHR, textStatus, errorThrown) {
		        consoleLog(jqXHR);
		        consoleLog("textStatus:" + textStatus);
		        consoleLog("error:" + errorThrown);
		    }
		});
	};
	
	// ON LOAD
	$(function () {
	
		var i, len, localnotes, index;
	
		// EVALUATE LOCALSTORAGE
		if (localStorage.email) {
			$('.email').val(localStorage.email);
		}
		if (localStorage.index) {
			index = $.parseJSON(localStorage.index);
			localnotes = 0;
			for (i = 0, len = index.data.length; i < len; i += 1) {
				if (index.data[i].deleted === 0) {
					localnotes += 1;
				}
			}
			$('.under_message').hide().html('found ' + localnotes + " local notes | <a class='clear_data' href='#'>clear local data</a>").fadeIn(2000);
		}
		if ($.getUrlVar('login') === 'expired') {
			$('.login_message').text('Your simplenote login has expired, please login again.').slideDown('fast');
		} else if (localStorage.token) {
			$('.login_message').html('<a href="/+/" tabindex=1>' + localStorage.email + '</a>').slideDown('fast');
			$('.login_inner form').hide();
		}
		
		// ON PASSWORD FOCUS
		$('.password').focus(function () {
			$('.login_message').text('press enter to login').slideDown('fast');
		});
		
		// ON PASSWORD - ENTER
		$('.password').keypress(function (e) {
			if (e.which === 13) {
				sn_login($('.email').val().trim(), $('.password').val().trim());
				$('.login_message').text('authenticating').slideDown('fast');
			}
		});
	
		// ON CLICK 'CLEAR DATA'
		$('.clear_data').click(function () {
			localStorage.clear();
			window.location = '/';
			return false;
		});
		
	});

}()); // CLOSE NOTESTACK NAMESPACE