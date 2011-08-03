// ################## PLUGINS ########################## //

// JQUERY.THROTTLE-DEBOUNCE.MIN.JS
(function(b,c){var $=b.jQuery||b.Cowboy||(b.Cowboy={}),a;$.throttle=a=function(e,f,j,i){var h,d=0;if(typeof f!=="boolean"){i=j;j=f;f=c}function g(){var o=this,m=+new Date()-d,n=arguments;function l(){d=+new Date();j.apply(o,n)}function k(){h=c}if(i&&!h){l()}h&&clearTimeout(h);if(i===c&&m>e){l()}else{if(f!==true){h=setTimeout(i?k:l,i===c?e-m:e)}}}if($.guid){g.guid=j.guid=j.guid||$.guid++}return g};$.debounce=function(d,e,f){return f===c?a(d,e,false):a(d,f,e!==false)}})(this);

// JQUERY.SORTELEMENTS.MIN.JS
jQuery.fn.sortElements=function(){var e=[].sort;return function(f,a){var a=a||function(){return this},g=this.map(function(){var b=a.call(this),c=b.parentNode,d=c.insertBefore(document.createTextNode(""),b.nextSibling);return function(){if(c===this)throw Error("You can't sort elements if any one is a descendant of another.");c.insertBefore(this,d);c.removeChild(d)}});return e.call(this,f).each(function(b){g[b].call(a.call(this))})}}();

// JQUERY.TABBY.MIN.JS
(function(h){h.fn.tabby=function(m){var p=h.extend({},h.fn.tabby.defaults,m),l=h.fn.tabby.pressed;return this.each(function(){$this=h(this);var b=h.meta?h.extend({},p,$this.data()):p;$this.bind("keydown",function(a){var m=h.fn.tabby.catch_kc(a);if(16==m)l.shft=!0;if(17==m)l.ctrl=!0,setTimeout("$.fn.tabby.pressed.ctrl = false;",1E3);if(18==m)l.alt=!0,setTimeout("$.fn.tabby.pressed.alt = false;",1E3);if(9==m&&!l.ctrl&&!l.alt){l.last=m;setTimeout("$.fn.tabby.pressed.last = null;",0);var a=h(a.target).get(0),
i=l.shft,m=a.scrollTop;if(a.setSelectionRange){var d=a.selectionStart,j=a.selectionEnd;if(d==j)if(i)if("\t"==a.value.substring(d-b.tabString.length,d))a.value=a.value.substring(0,d-b.tabString.length)+a.value.substring(d),a.focus(),a.setSelectionRange(d-b.tabString.length,d-b.tabString.length);else{if("\t"==a.value.substring(d,d+b.tabString.length))a.value=a.value.substring(0,d)+a.value.substring(d+b.tabString.length),a.focus(),a.setSelectionRange(d,d)}else a.value=a.value.substring(0,d)+b.tabString+
a.value.substring(d),a.focus(),a.setSelectionRange(d+b.tabString.length,d+b.tabString.length);else{var e=a.value.split("\n"),f=[],g=0,k=0,c;for(c in e)k=g+e[c].length,f.push({start:g,end:k,selected:g<=d&&k>d||k>=j&&g<j||g>d&&k<j}),g=k+1;e=0;for(c in f)if(f[c].selected)if(g=f[c].start+e,i&&b.tabString==a.value.substring(g,g+b.tabString.length))a.value=a.value.substring(0,g)+a.value.substring(g+b.tabString.length),e-=b.tabString.length;else if(!i)a.value=a.value.substring(0,g)+b.tabString+a.value.substring(g),
e+=b.tabString.length;a.focus();a.setSelectionRange(d+(e>0?b.tabString.length:e<0?-b.tabString.length:0),j+e)}}else if(document.selection&&(c=document.selection.createRange(),a==c.parentElement()))if(""==c.text){if(i){i=c.getBookmark();c.moveStart("character",-b.tabString.length);if(b.tabString==c.text)c.text="";else if(c.moveToBookmark(i),c.moveEnd("character",b.tabString.length),b.tabString==c.text)c.text="";c.collapse(!0)}else c.text=b.tabString,c.collapse(!1);c.select()}else{j=c.text;d=j.length;
f=j.split("\r\n");j=document.body.createTextRange();j.moveToElementText(a);j.setEndPoint("EndToStart",c);g=j.text;e=g.split("\r\n");g=g.length;k=document.body.createTextRange();k.moveToElementText(a);k.setEndPoint("StartToEnd",c);var k=k.text,o=document.body.createTextRange();o.moveToElementText(a);o.setEndPoint("StartToEnd",j);var n=o.text,o=h(a).html();h("#r3").text(g+" + "+d+" + "+k.length+" = "+o.length);g+n.length<o.length?(e.push(""),g+=2,i&&b.tabString==f[0].substring(0,b.tabString.length)?
f[0]=f[0].substring(b.tabString.length):i||(f[0]=b.tabString+f[0])):i&&b.tabString==e[e.length-1].substring(0,b.tabString.length)?e[e.length-1]=e[e.length-1].substring(b.tabString.length):i||(e[e.length-1]=b.tabString+e[e.length-1]);for(n=1;n<f.length;n++)i&&b.tabString==f[n].substring(0,b.tabString.length)?f[n]=f[n].substring(b.tabString.length):i||(f[n]=b.tabString+f[n]);1==e.length&&0==g&&(i&&b.tabString==f[0].substring(0,b.tabString.length)?f[0]=f[0].substring(b.tabString.length):i||(f[0]=b.tabString+
f[0]));g+d+k.length<o.length&&f.push("");j.text=e.join("\r\n");c.text=f.join("\r\n");i=document.body.createTextRange();i.moveToElementText(a);0<g?i.setEndPoint("StartToEnd",j):i.setEndPoint("StartToStart",j);i.setEndPoint("EndToEnd",c);i.select()}a.scrollTop=m;return!1}}).bind("keyup",function(a){if(16==h.fn.tabby.catch_kc(a))l.shft=!1}).bind("blur",function(a){9==l.last&&h(a.target).one("focus",function(){l.last=null}).get(0).focus()})})};h.fn.tabby.catch_kc=function(h){return h.keyCode?h.keyCode:
h.charCode?h.charCode:h.which};h.fn.tabby.pressed={shft:!1,ctrl:!1,alt:!1,last:null};h.fn.tabby.defaults={tabString:String.fromCharCode(9)}})(jQuery);

// JQUERY.AUTOCOMPLETE.MIN.JS 
(function($){$.fn.extend({autocomplete:function(urlOrData,options){var isUrl=typeof urlOrData=="string";options=$.extend({},$.Autocompleter.defaults,{url:isUrl?urlOrData:null,data:isUrl?null:urlOrData,delay:isUrl?$.Autocompleter.defaults.delay:10,max:options&&!options.scroll?10:150},options);options.highlight=options.highlight||function(value){return value;};options.formatMatch=options.formatMatch||options.formatItem;return this.each(function(){new $.Autocompleter(this,options);});},result:function(handler){return this.bind("result",handler);},search:function(handler){return this.trigger("search",[handler]);},flushCache:function(){return this.trigger("flushCache");},setOptions:function(options){return this.trigger("setOptions",[options]);},unautocomplete:function(){return this.trigger("unautocomplete");}});$.Autocompleter=function(input,options){var KEY={UP:38,DOWN:40,DEL:46,TAB:9,RETURN:13,ESC:27,COMMA:188,PAGEUP:33,PAGEDOWN:34,BACKSPACE:8};var $input=$(input).attr("autocomplete","off").addClass(options.inputClass);var timeout;var previousValue="";var cache=$.Autocompleter.Cache(options);var hasFocus=0;var lastKeyPressCode;var config={mouseDownOnSelect:false};var select=$.Autocompleter.Select(options,input,selectCurrent,config);var blockSubmit;$.browser.opera&&$(input.form).bind("submit.autocomplete",function(){if(blockSubmit){blockSubmit=false;return false;}});$input.bind(($.browser.opera?"keypress":"keydown")+".autocomplete",function(event){hasFocus=1;lastKeyPressCode=event.keyCode;switch(event.keyCode){case KEY.UP:event.preventDefault();if(select.visible()){select.prev();}else{onChange(0,true);}break;case KEY.DOWN:event.preventDefault();if(select.visible()){select.next();}else{onChange(0,true);}break;case KEY.PAGEUP:event.preventDefault();if(select.visible()){select.pageUp();}else{onChange(0,true);}break;case KEY.PAGEDOWN:event.preventDefault();if(select.visible()){select.pageDown();}else{onChange(0,true);}break;case options.multiple&&$.trim(options.multipleSeparator)==","&&KEY.COMMA:case KEY.TAB:case KEY.RETURN:if(selectCurrent()){event.preventDefault();blockSubmit=true;return false;}break;case KEY.ESC:select.hide();break;default:clearTimeout(timeout);timeout=setTimeout(onChange,options.delay);break;}}).focus(function(){hasFocus++;}).blur(function(){hasFocus=0;if(!config.mouseDownOnSelect){hideResults();}}).click(function(){if(hasFocus++>1&&!select.visible()){onChange(0,true);}}).bind("search",function(){var fn=(arguments.length>1)?arguments[1]:null;function findValueCallback(q,data){var result;if(data&&data.length){for(var i=0;i<data.length;i++){if(data[i].result.toLowerCase()==q.toLowerCase()){result=data[i];break;}}}if(typeof fn=="function")fn(result);else $input.trigger("result",result&&[result.data,result.value]);}$.each(trimWords($input.val()),function(i,value){request(value,findValueCallback,findValueCallback);});}).bind("flushCache",function(){cache.flush();}).bind("setOptions",function(){$.extend(options,arguments[1]);if("data"in arguments[1])cache.populate();}).bind("unautocomplete",function(){select.unbind();$input.unbind();$(input.form).unbind(".autocomplete");});function selectCurrent(){var selected=select.selected();if(!selected)return false;var v=selected.result;previousValue=v;if(options.multiple){var words=trimWords($input.val());if(words.length>1){var seperator=options.multipleSeparator.length;var cursorAt=$(input).selection().start;var wordAt,progress=0;$.each(words,function(i,word){progress+=word.length;if(cursorAt<=progress){wordAt=i;return false;}progress+=seperator;});words[wordAt]=v;v=words.join(options.multipleSeparator);}v+=options.multipleSeparator;}$input.val(v);hideResultsNow();$input.trigger("result",[selected.data,selected.value]);return true;}function onChange(crap,skipPrevCheck){if(lastKeyPressCode==KEY.DEL){select.hide();return;}var currentValue=$input.val();if(!skipPrevCheck&&currentValue==previousValue)return;previousValue=currentValue;currentValue=lastWord(currentValue);if(currentValue.length>=options.minChars){$input.addClass(options.loadingClass);if(!options.matchCase)currentValue=currentValue.toLowerCase();request(currentValue,receiveData,hideResultsNow);}else{stopLoading();select.hide();}};function trimWords(value){if(!value)return[""];if(!options.multiple)return[$.trim(value)];return $.map(value.split(options.multipleSeparator),function(word){return $.trim(value).length?$.trim(word):null;});}function lastWord(value){if(!options.multiple)return value;var words=trimWords(value);if(words.length==1)return words[0];var cursorAt=$(input).selection().start;if(cursorAt==value.length){words=trimWords(value)}else{words=trimWords(value.replace(value.substring(cursorAt),""));}return words[words.length-1];}function autoFill(q,sValue){if(options.autoFill&&(lastWord($input.val()).toLowerCase()==q.toLowerCase())&&lastKeyPressCode!=KEY.BACKSPACE){$input.val($input.val()+sValue.substring(lastWord(previousValue).length));$(input).selection(previousValue.length,previousValue.length+sValue.length);}};function hideResults(){clearTimeout(timeout);timeout=setTimeout(hideResultsNow,200);};function hideResultsNow(){var wasVisible=select.visible();select.hide();clearTimeout(timeout);stopLoading();if(options.mustMatch){$input.search(function(result){if(!result){if(options.multiple){var words=trimWords($input.val()).slice(0,-1);$input.val(words.join(options.multipleSeparator)+(words.length?options.multipleSeparator:""));}else{$input.val("");$input.trigger("result",null);}}});}};function receiveData(q,data){if(data&&data.length&&hasFocus){stopLoading();select.display(data,q);autoFill(q,data[0].value);select.show();}else{hideResultsNow();}};function request(term,success,failure){if(!options.matchCase)term=term.toLowerCase();var data=cache.load(term);if(data&&data.length){success(term,data);}else if((typeof options.url=="string")&&(options.url.length>0)){var extraParams={timestamp:+new Date()};$.each(options.extraParams,function(key,param){extraParams[key]=typeof param=="function"?param():param;});$.ajax({mode:"abort",port:"autocomplete"+input.name,dataType:options.dataType,url:options.url,data:$.extend({q:lastWord(term),limit:options.max},extraParams),success:function(data){var parsed=options.parse&&options.parse(data)||parse(data);cache.add(term,parsed);success(term,parsed);}});}else{select.emptyList();failure(term);}};function parse(data){var parsed=[];var rows=data.split("\n");for(var i=0;i<rows.length;i++){var row=$.trim(rows[i]);if(row){row=row.split("|");parsed[parsed.length]={data:row,value:row[0],result:options.formatResult&&options.formatResult(row,row[0])||row[0]};}}return parsed;};function stopLoading(){$input.removeClass(options.loadingClass);};};$.Autocompleter.defaults={inputClass:"ac_input",resultsClass:"ac_results",loadingClass:"ac_loading",minChars:1,delay:400,matchCase:false,matchSubset:true,matchContains:false,cacheLength:10,max:100,mustMatch:false,extraParams:{},selectFirst:true,formatItem:function(row){return row[0];},formatMatch:null,autoFill:false,width:0,multiple:false,multipleSeparator:", ",highlight:function(value,term){return value.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)("+term.replace(/([\^\$\(\)\[\]\{\}\*\.\+\?\|\\])/gi,"\\$1")+")(?![^<>]*>)(?![^&;]+;)","gi"),"<strong>$1</strong>");},scroll:true,scrollHeight:180};$.Autocompleter.Cache=function(options){var data={};var length=0;function matchSubset(s,sub){if(!options.matchCase)s=s.toLowerCase();var i=s.indexOf(sub);if(options.matchContains=="word"){i=s.toLowerCase().search("\\b"+sub.toLowerCase());}if(i==-1)return false;return i==0||options.matchContains;};function add(q,value){if(length>options.cacheLength){flush();}if(!data[q]){length++;}data[q]=value;}function populate(){if(!options.data)return false;var stMatchSets={},nullData=0;if(!options.url)options.cacheLength=1;stMatchSets[""]=[];for(var i=0,ol=options.data.length;i<ol;i++){var rawValue=options.data[i];rawValue=(typeof rawValue=="string")?[rawValue]:rawValue;var value=options.formatMatch(rawValue,i+1,options.data.length);if(value===false)continue;var firstChar=value.charAt(0).toLowerCase();if(!stMatchSets[firstChar])stMatchSets[firstChar]=[];var row={value:value,data:rawValue,result:options.formatResult&&options.formatResult(rawValue)||value};stMatchSets[firstChar].push(row);if(nullData++<options.max){stMatchSets[""].push(row);}};$.each(stMatchSets,function(i,value){options.cacheLength++;add(i,value);});}setTimeout(populate,25);function flush(){data={};length=0;}return{flush:flush,add:add,populate:populate,load:function(q){if(!options.cacheLength||!length)return null;if(!options.url&&options.matchContains){var csub=[];for(var k in data){if(k.length>0){var c=data[k];$.each(c,function(i,x){if(matchSubset(x.value,q)){csub.push(x);}});}}return csub;}else
if(data[q]){return data[q];}else
if(options.matchSubset){for(var i=q.length-1;i>=options.minChars;i--){var c=data[q.substr(0,i)];if(c){var csub=[];$.each(c,function(i,x){if(matchSubset(x.value,q)){csub[csub.length]=x;}});return csub;}}}return null;}};};$.Autocompleter.Select=function(options,input,select,config){var CLASSES={ACTIVE:"ac_over"};var listItems,active=-1,data,term="",needsInit=true,element,list;function init(){if(!needsInit)return;element=$("<div/>").hide().addClass(options.resultsClass).css("position","absolute").appendTo(document.body);list=$("<ul/>").appendTo(element).mouseover(function(event){if(target(event).nodeName&&target(event).nodeName.toUpperCase()=='LI'){active=$("li",list).removeClass(CLASSES.ACTIVE).index(target(event));$(target(event)).addClass(CLASSES.ACTIVE);}}).click(function(event){$(target(event)).addClass(CLASSES.ACTIVE);select();input.focus();return false;}).mousedown(function(){config.mouseDownOnSelect=true;}).mouseup(function(){config.mouseDownOnSelect=false;});if(options.width>0)element.css("width",options.width);needsInit=false;}function target(event){var element=event.target;while(element&&element.tagName!="LI")element=element.parentNode;if(!element)return[];return element;}function moveSelect(step){listItems.slice(active,active+1).removeClass(CLASSES.ACTIVE);movePosition(step);var activeItem=listItems.slice(active,active+1).addClass(CLASSES.ACTIVE);if(options.scroll){var offset=0;listItems.slice(0,active).each(function(){offset+=this.offsetHeight;});if((offset+activeItem[0].offsetHeight-list.scrollTop())>list[0].clientHeight){list.scrollTop(offset+activeItem[0].offsetHeight-list.innerHeight());}else if(offset<list.scrollTop()){list.scrollTop(offset);}}};function movePosition(step){active+=step;if(active<0){active=listItems.size()-1;}else if(active>=listItems.size()){active=0;}}function limitNumberOfItems(available){return options.max&&options.max<available?options.max:available;}function fillList(){list.empty();var max=limitNumberOfItems(data.length);for(var i=0;i<max;i++){if(!data[i])continue;var formatted=options.formatItem(data[i].data,i+1,max,data[i].value,term);if(formatted===false)continue;var li=$("<li/>").html(options.highlight(formatted,term)).addClass(i%2==0?"ac_even":"ac_odd").appendTo(list)[0];$.data(li,"ac_data",data[i]);}listItems=list.find("li");if(options.selectFirst){listItems.slice(0,1).addClass(CLASSES.ACTIVE);active=0;}if($.fn.bgiframe)list.bgiframe();}return{display:function(d,q){init();data=d;term=q;fillList();},next:function(){moveSelect(1);},prev:function(){moveSelect(-1);},pageUp:function(){if(active!=0&&active-8<0){moveSelect(-active);}else{moveSelect(-8);}},pageDown:function(){if(active!=listItems.size()-1&&active+8>listItems.size()){moveSelect(listItems.size()-1-active);}else{moveSelect(8);}},hide:function(){element&&element.hide();listItems&&listItems.removeClass(CLASSES.ACTIVE);active=-1;},visible:function(){return element&&element.is(":visible");},current:function(){return this.visible()&&(listItems.filter("."+CLASSES.ACTIVE)[0]||options.selectFirst&&listItems[0]);},show:function(){var offset=$(input).offset();element.css({width:typeof options.width=="string"||options.width>0?options.width:$(input).width(),top:offset.top+input.offsetHeight,left:offset.left}).show();if(options.scroll){list.scrollTop(0);list.css({maxHeight:options.scrollHeight,overflow:'auto'});if($.browser.msie&&typeof document.body.style.maxHeight==="undefined"){var listHeight=0;listItems.each(function(){listHeight+=this.offsetHeight;});var scrollbarsVisible=listHeight>options.scrollHeight;list.css('height',scrollbarsVisible?options.scrollHeight:listHeight);if(!scrollbarsVisible){listItems.width(list.width()-parseInt(listItems.css("padding-left"))-parseInt(listItems.css("padding-right")));}}}},selected:function(){var selected=listItems&&listItems.filter("."+CLASSES.ACTIVE).removeClass(CLASSES.ACTIVE);return selected&&selected.length&&$.data(selected[0],"ac_data");},emptyList:function(){list&&list.empty();},unbind:function(){element&&element.remove();}};};$.fn.selection=function(start,end){if(start!==undefined){return this.each(function(){if(this.createTextRange){var selRange=this.createTextRange();if(end===undefined||start==end){selRange.move("character",start);selRange.select();}else{selRange.collapse(true);selRange.moveStart("character",start);selRange.moveEnd("character",end);selRange.select();}}else if(this.setSelectionRange){this.setSelectionRange(start,end);}else if(this.selectionStart){this.selectionStart=start;this.selectionEnd=end;}});}var field=this[0];if(field.createTextRange){var range=document.selection.createRange(),orig=field.value,teststring="<->",textLength=range.text.length;range.text=teststring;var caretAt=field.value.indexOf(teststring);field.value=orig;this.selection(caretAt,caretAt+textLength);return{start:caretAt,end:caretAt+textLength}}else if(field.selectionStart!==undefined){return{start:field.selectionStart,end:field.selectionEnd}}};})(jQuery);

// JQUERY.TAGSINPUT.MIN.JS
(function(a){var h=[],f=[];a.fn.addTag=function(c,e){e=jQuery.extend({focus:!1,callback:!0},e);this.each(function(){id=a(this).attr("id");var g=a(this).val().split(h[id]);g[0]==""&&(g=[]);c=jQuery.trim(c);skipTag=e.unique?a(g).tagExist(c):!1;if(c!=""&&skipTag!=!0){a("<span>").addClass("tag").append(a("<span>").text(c).append("&nbsp;&nbsp;"),a("<a>",{href:"#",title:"Removing tag",text:"x"}).click(function(){return a("#"+id).removeTag(escape(c))})).insertBefore("#"+id+"_addTag");g.push(c);a("#"+id+
"_tag").val("");e.focus?a("#"+id+"_tag").focus():a("#"+id+"_tag").blur();if(e.callback&&f[id]&&f[id].onAddTag){var b=f[id].onAddTag;b(c)}if(f[id]&&f[id].onChange){var j=g.length,b=f[id].onChange;b(a(this),g[j])}}a.fn.tagsInput.updateTagsField(this,g)});return!1};a.fn.removeTag=function(c){c=unescape(c);this.each(function(){id=a(this).attr("id");var e=a(this).val().split(h[id]);a("#"+id+"_tagsinput .tag").remove();str="";for(i=0;i<e.length;i++)e[i]!=c&&(str=str+h[id]+e[i]);a.fn.tagsInput.importTags(this,
str);if(f[id]&&f[id].onRemoveTag)(0,f[id].onRemoveTag)(c)});return!1};a.fn.tagExist=function(c){return jQuery.inArray(c,a(this))==-1?!1:!0};a.fn.importTags=function(c){a("#"+id+"_tagsinput .tag").remove();a.fn.tagsInput.importTags(this,c)};a.fn.tagsInput=function(c){var e=jQuery.extend({interactive:!0,defaultText:"add a tag",minChars:0,autocomplete:{selectFirst:!1},hide:!0,delimiter:" ",unique:!0,removeWithBackspace:!0},c);this.each(function(){e.hide&&a(this).hide();id=a(this).attr("id");data=jQuery.extend({pid:id,
real_input:"#"+id,holder:"#"+id+"_tagsinput",input_wrapper:"#"+id+"_addTag",fake_input:"#"+id+"_tag"},e);h[id]=data.delimiter;if(e.onAddTag||e.onRemoveTag||e.onChange)f[id]=[],f[id].onAddTag=e.onAddTag,f[id].onRemoveTag=e.onRemoveTag,f[id].onChange=e.onChange;var c='<div id="'+id+'_tagsinput" class="tagsinput"><div id="'+id+'_addTag">';e.interactive&&(c=c+'<input id="'+id+'_tag" value="" data-default="'+e.defaultText+'" />');c+='</div><div class="tags_clear"></div></div>';a(c).insertAfter(this);a(data.holder).css("width",
e.width);a(data.holder).css("height",e.height);a(data.real_input).val()!=""&&a.fn.tagsInput.importTags(a(data.real_input),a(data.real_input).val());if(e.interactive){a(data.fake_input).val(a(data.fake_input).attr("data-default"));a(data.fake_input).css("color",e.placeholderColor);a(data.holder).bind("click",data,function(b){a(b.data.fake_input).focus()});a(data.fake_input).bind("focus",data,function(b){a(b.data.fake_input).val()==a(b.data.fake_input).attr("data-default")&&a(b.data.fake_input).val("");
a(b.data.fake_input).css("color","#000000")});if(e.autocomplete_url!=void 0){autocomplete_options={source:e.autocomplete_url};for(attrname in e.autocomplete)autocomplete_options[attrname]=e.autocomplete[attrname];jQuery.Autocompleter!==void 0?(a(data.fake_input).autocomplete(e.autocomplete_url,e.autocomplete),a(data.fake_input).bind("result",data,function(b,c){c&&(d=c+"",a(b.data.real_input).addTag(d,{focus:!0,unique:e.unique}))})):jQuery.ui.autocomplete!==void 0&&(a(data.fake_input).autocomplete(autocomplete_options),
a(data.fake_input).bind("autocompleteselect",data,function(b,c){a(b.data.real_input).addTag(c.item.value,{focus:!0,unique:e.unique});return!1}))}else a(data.fake_input).bind("blur",data,function(b){var c=a(this).attr("data-default");a(b.data.fake_input).val()!=""&&a(b.data.fake_input).val()!=c?b.data.minChars<=a(b.data.fake_input).val().length&&(!b.data.maxChars||b.data.maxChars>=a(b.data.fake_input).val().length)&&a(b.data.real_input).addTag(a(b.data.fake_input).val(),{focus:!0,unique:e.unique}):
(a(b.data.fake_input).val(a(b.data.fake_input).attr("data-default")),a(b.data.fake_input).css("color",e.placeholderColor));return!1});a(data.fake_input).bind("keypress",data,function(b){if(b.which==b.data.delimiter.charCodeAt(0)||b.which==13)return b.data.minChars<=a(b.data.fake_input).val().length&&(!b.data.maxChars||b.data.maxChars>=a(b.data.fake_input).val().length)&&a(b.data.real_input).addTag(a(b.data.fake_input).val(),{focus:!0,unique:e.unique}),!1});data.removeWithBackspace&&a(data.fake_input).bind("keydown",
function(b){if(b.keyCode==8&&a(this).val()==""){b.preventDefault();var b=a(this).closest(".tagsinput").find(".tag:last").text(),c=a(this).attr("id").replace(/_tag$/,""),b=b.replace(/[\s]+x$/,"");a("#"+c).removeTag(escape(b));a(this).trigger("focus")}});a(data.fake_input).blur()}return!1});return this};a.fn.tagsInput.updateTagsField=function(c,e){id=a(c).attr("id");a(c).val(e.join(h[id]))};a.fn.tagsInput.importTags=function(c,e){a(c).val("");id=a(c).attr("id");var g=e.split(h[id]);for(i=0;i<g.length;i++)a(c).addTag(g[i],
{focus:!1,callback:!1});if(f[id]&&f[id].onChange)(0,f[id].onChange)(c,g[i])}})(jQuery);

// JQUERY.AUTOSUGGEST.MIN.JS
(function($){$.fn.autoSuggest=function(data,options){var defaults={asHtmlID:false,startText:"Enter Name Here",emptyText:"No Results Found",preFill:{},limitText:"No More Selections Are Allowed",selectedItemProp:"value",selectedValuesProp:"value",searchObjProps:"value",queryParam:"q",retrieveLimit:false,extraParams:"",matchCase:false,minChars:1,keyDelay:400,resultsHighlight:true,neverSubmit:false,selectionLimit:false,showResultList:true,start:function(){},selectionClick:function(elem){},selectionAdded:function(elem){},selectionRemoved:function(elem){elem.remove()},formatList:false,beforeRetrieve:function(string){return string},retrieveComplete:function(data){return data},resultClick:function(data){},resultsComplete:function(){}};var opts=$.extend(defaults,options);var d_type="object";var d_count=0;if(typeof data=="string"){d_type="string";var req_string=data}else{var org_data=data;for(k in data)if(data.hasOwnProperty(k))d_count++}if((d_type=="object"&&d_count>0)||d_type=="string"){return this.each(function(x){if(!opts.asHtmlID){x=x+""+Math.floor(Math.random()*100);var x_id="as-input-"+x}else{x=opts.asHtmlID;var x_id=x}opts.start.call(this);var input=$(this);input.attr("autocomplete","off").addClass("as-input").attr("id",x_id).val(opts.startText);var input_focus=false;input.wrap('<ul class="as-selections" id="as-selections-'+x+'"></ul>').wrap('<li class="as-original" id="as-original-'+x+'"></li>');var selections_holder=$("#as-selections-"+x);var org_li=$("#as-original-"+x);var results_holder=$('<div class="as-results" id="as-results-'+x+'"></div>').hide();var results_ul=$('<ul class="as-list"></ul>');var values_input=$('<input type="hidden" class="as-values" name="as_values_'+x+'" id="as-values-'+x+'" />');var prefill_value="";if(typeof opts.preFill=="string"){var vals=opts.preFill.split(",");for(var i=0;i<vals.length;i++){var v_data={};v_data[opts.selectedValuesProp]=vals[i];if(vals[i]!=""){add_selected_item(v_data,"000"+i)}}prefill_value=opts.preFill}else{prefill_value="";var prefill_count=0;for(k in opts.preFill)if(opts.preFill.hasOwnProperty(k))prefill_count++;if(prefill_count>0){for(var i=0;i<prefill_count;i++){var new_v=opts.preFill[i][opts.selectedValuesProp];if(new_v==undefined){new_v=""}prefill_value=prefill_value+new_v+",";if(new_v!=""){add_selected_item(opts.preFill[i],"000"+i)}}}}if(prefill_value!=""){input.val("");var lastChar=prefill_value.substring(prefill_value.length-1);if(lastChar!=","){prefill_value=prefill_value+","}values_input.val(","+prefill_value);$("li.as-selection-item",selections_holder).addClass("blur").removeClass("selected")}input.after(values_input);selections_holder.click(function(){input_focus=true;input.focus()}).mousedown(function(){input_focus=false}).after(results_holder);var timeout=null;var prev="";var totalSelections=0;var tab_press=false;input.focus(function(){if($(this).val()==opts.startText&&values_input.val()==""){$(this).val("")}else if(input_focus){$("li.as-selection-item",selections_holder).removeClass("blur");if($(this).val()!=""){results_ul.css("width",selections_holder.outerWidth());results_holder.show()}}input_focus=true;return true}).blur(function(){if($(this).val()==""&&values_input.val()==""&&prefill_value==""){$(this).val(opts.startText)}else if(input_focus){$("li.as-selection-item",selections_holder).addClass("blur").removeClass("selected");results_holder.hide()}}).keydown(function(e){lastKeyPressCode=e.keyCode;first_focus=false;switch(e.keyCode){case 38:e.preventDefault();moveSelection("up");break;case 40:e.preventDefault();moveSelection("down");break;case 8:if(input.val()==""){var last=values_input.val().split(",");last=last[last.length-2];selections_holder.children().not(org_li.prev()).removeClass("selected");if(org_li.prev().hasClass("selected")){values_input.val(values_input.val().replace(","+last+",",","));opts.selectionRemoved.call(this,org_li.prev())}else{opts.selectionClick.call(this,org_li.prev());org_li.prev().addClass("selected")}}if(input.val().length==1){results_holder.hide();prev=""}if($(":visible",results_holder).length>0){if(timeout){clearTimeout(timeout)}timeout=setTimeout(function(){keyChange()},opts.keyDelay)}break;case 9:case 188:tab_press=true;var i_input=input.val().replace(/(,)/g,"");if(i_input!=""&&values_input.val().search(","+i_input+",")<0&&i_input.length>=opts.minChars){e.preventDefault();var n_data={};n_data[opts.selectedItemProp]=i_input;n_data[opts.selectedValuesProp]=i_input;var lis=$("li",selections_holder).length;add_selected_item(n_data,"00"+(lis+1));input.val("")}case 13:tab_press=false;var active=$("li.active:first",results_holder);if(active.length>0){active.click();results_holder.hide()}if(opts.neverSubmit||active.length>0){e.preventDefault()}break;default:if(opts.showResultList){if(opts.selectionLimit&&$("li.as-selection-item",selections_holder).length>=opts.selectionLimit){results_ul.html('<li class="as-message">'+opts.limitText+'</li>');results_holder.show()}else{if(timeout){clearTimeout(timeout)}timeout=setTimeout(function(){keyChange()},opts.keyDelay)}}break}});function keyChange(){if(lastKeyPressCode==46||(lastKeyPressCode>8&&lastKeyPressCode<32)){return results_holder.hide()}var string=input.val().replace(/[\\]+|[\/]+/g,"");if(string==prev)return;prev=string;if(string.length>=opts.minChars){selections_holder.addClass("loading");if(d_type=="string"){var limit="";if(opts.retrieveLimit){limit="&limit="+encodeURIComponent(opts.retrieveLimit)}if(opts.beforeRetrieve){string=opts.beforeRetrieve.call(this,string)}$.getJSON(req_string+"?"+opts.queryParam+"="+encodeURIComponent(string)+limit+opts.extraParams,function(data){d_count=0;var new_data=opts.retrieveComplete.call(this,data);for(k in new_data)if(new_data.hasOwnProperty(k))d_count++;processData(new_data,string)})}else{if(opts.beforeRetrieve){string=opts.beforeRetrieve.call(this,string)}processData(org_data,string)}}else{selections_holder.removeClass("loading");results_holder.hide()}}var num_count=0;function processData(data,query){if(!opts.matchCase){query=query.toLowerCase()}var matchCount=0;results_holder.html(results_ul.html("")).hide();for(var i=0;i<d_count;i++){var num=i;num_count++;var forward=false;if(opts.searchObjProps=="value"){var str=data[num].value}else{var str="";var names=opts.searchObjProps.split(",");for(var y=0;y<names.length;y++){var name=$.trim(names[y]);str=str+data[num][name]+" "}}if(str){if(!opts.matchCase){str=str.toLowerCase()}if(str.search(query)!=-1&&values_input.val().search(","+data[num][opts.selectedValuesProp]+",")==-1){forward=true}}if(forward){var formatted=$('<li class="as-result-item" id="as-result-item-'+num+'"></li>').click(function(){var raw_data=$(this).data("data");var number=raw_data.num;if($("#as-selection-"+number,selections_holder).length<=0&&!tab_press){var data=raw_data.attributes;input.val("").focus();prev="";add_selected_item(data,number);opts.resultClick.call(this,raw_data);results_holder.hide()}tab_press=false}).mousedown(function(){input_focus=false}).mouseover(function(){$("li",results_ul).removeClass("active");$(this).addClass("active")}).data("data",{attributes:data[num],num:num_count});var this_data=$.extend({},data[num]);if(!opts.matchCase){var regx=new RegExp("(?![^&;]+;)(?!<[^<>]*)("+query+")(?![^<>]*>)(?![^&;]+;)","gi")}else{var regx=new RegExp("(?![^&;]+;)(?!<[^<>]*)("+query+")(?![^<>]*>)(?![^&;]+;)","g")}if(opts.resultsHighlight){this_data[opts.selectedItemProp]=this_data[opts.selectedItemProp].replace(regx,"<em>$1</em>")}if(!opts.formatList){formatted=formatted.html(this_data[opts.selectedItemProp])}else{formatted=opts.formatList.call(this,this_data,formatted)}results_ul.append(formatted);delete this_data;matchCount++;if(opts.retrieveLimit&&opts.retrieveLimit==matchCount){break}}}selections_holder.removeClass("loading");if(matchCount<=0){results_ul.html('<li class="as-message">'+opts.emptyText+'</li>')}results_ul.css("width",selections_holder.outerWidth());results_holder.show();opts.resultsComplete.call(this)}function add_selected_item(data,num){values_input.val(values_input.val()+data[opts.selectedValuesProp]+",");var item=$('<li class="as-selection-item" id="as-selection-'+num+'"></li>').click(function(){opts.selectionClick.call(this,$(this));selections_holder.children().removeClass("selected");$(this).addClass("selected")}).mousedown(function(){input_focus=false});var close=$('<a class="as-close">&times;</a>').click(function(){values_input.val(values_input.val().replace(","+data[opts.selectedValuesProp]+",",","));opts.selectionRemoved.call(this,item);input_focus=true;input.focus();return false});org_li.before(item.html(data[opts.selectedItemProp]).prepend(close));opts.selectionAdded.call(this,org_li.prev())}function moveSelection(direction){if($(":visible",results_holder).length>0){var lis=$("li",results_holder);if(direction=="down"){var start=lis.eq(0)}else{var start=lis.filter(":last")}var active=$("li.active:first",results_holder);if(active.length>0){if(direction=="down"){start=active.next()}else{start=active.prev()}}lis.removeClass("active");start.addClass("active")}}})}}})(jQuery);

// JQUERY.TIMEAGO.MIN.JS
(function(d){function i(){var a;a=d(this);if(!a.data("timeago")){a.data("timeago",{datetime:e.datetime(a)});var b=d.trim(a.text());b.length>0&&a.attr("title",b)}a=a.data("timeago");isNaN(a.datetime)||d(this).text(f(a.datetime));return this}function f(a){return e.inWords((new Date).getTime()-a.getTime())}d.timeago=function(a){return a instanceof Date?f(a):typeof a==="string"?f(d.timeago.parse(a)):f(d.timeago.datetime(a))};var e=d.timeago;d.extend(d.timeago,{settings:{refreshMillis:6E4,allowFuture:!1,
strings:{prefixAgo:null,prefixFromNow:null,suffixAgo:"ago",suffixFromNow:"from now",seconds:"less than a minute",minute:"about a minute",minutes:"%d minutes",hour:"about an hour",hours:"about %d hours",day:"a day",days:"%d days",month:"about a month",months:"%d months",year:"about a year",years:"%d years",numbers:[]}},inWords:function(a){function b(b,e){return(d.isFunction(b)?b(e,a):b).replace(/%d/i,c.numbers&&c.numbers[e]||e)}var c=this.settings.strings,e=c.prefixAgo,f=c.suffixAgo;if(this.settings.allowFuture){if(a<
0)e=c.prefixFromNow,f=c.suffixFromNow;a=Math.abs(a)}var g=a/1E3,j=g/60,k=j/60,h=k/24,i=h/365,g=g<45&&b(c.seconds,Math.round(g))||g<90&&b(c.minute,1)||j<45&&b(c.minutes,Math.round(j))||j<90&&b(c.hour,1)||k<24&&b(c.hours,Math.round(k))||k<48&&b(c.day,1)||h<30&&b(c.days,Math.floor(h))||h<60&&b(c.month,1)||h<365&&b(c.months,Math.floor(h/30))||i<2&&b(c.year,1)||b(c.years,Math.floor(i));return d.trim([e,g,f].join(" "))},parse:function(a){a=d.trim(a);a=a.replace(/\.\d\d\d+/,"");a=a.replace(/-/,"/").replace(/-/,
"/");a=a.replace(/T/," ").replace(/Z/," UTC");a=a.replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2");return new Date(a)},datetime:function(a){a=d(a).get(0).tagName.toLowerCase()==="time"?d(a).attr("datetime"):d(a).attr("title");return e.parse(a)}});d.fn.timeago=function(){var a=this;a.each(i);var b=e.settings;b.refreshMillis>0&&setInterval(function(){a.each(i)},b.refreshMillis);return a};document.createElement("abbr");document.createElement("time")})(jQuery);

// JQUERY.MOUSEWHEEL.MIN.JS
(function(d){function b(a){var c=[].slice.call(arguments,1),b=0,a=d.event.fix(a||window.event);a.type="mousewheel";a.wheelDelta&&(b=a.wheelDelta/120);a.detail&&(b=-a.detail/3);c.unshift(a,b);return d.event.handle.apply(this,c)}var c=["DOMMouseScroll","mousewheel"];d.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var a=c.length;a;)this.addEventListener(c[--a],b,!1);else this.onmousewheel=b},teardown:function(){if(this.removeEventListener)for(var a=c.length;a;)this.removeEventListener(c[--a],
b,!1);else this.onmousewheel=null}};d.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})})(jQuery);

// JQUERY.JQHOTKEYS.MIN.JS
(function(d){function h(g){if(typeof g.data==="string"){var h=g.handler,i=g.data.toLowerCase().split(" ");g.handler=function(a){if(!(this!==a.target&&(/textarea|select/i.test(a.target.nodeName)||a.target.type==="text"))){var b=a.type!=="keypress"&&d.hotkeys.specialKeys[a.which],e=String.fromCharCode(a.which).toLowerCase(),c="",f={};a.altKey&&b!=="alt"&&(c+="alt+");a.ctrlKey&&b!=="ctrl"&&(c+="ctrl+");a.metaKey&&!a.ctrlKey&&b!=="meta"&&(c+="meta+");a.shiftKey&&b!=="shift"&&(c+="shift+");b?f[c+b]=!0:
(f[c+e]=!0,f[c+d.hotkeys.shiftNums[e]]=!0,c==="shift+"&&(f[d.hotkeys.shiftNums[e]]=!0));b=0;for(e=i.length;b<e;b++)if(f[i[b]])return h.apply(this,arguments)}}}}d.hotkeys={version:"0.8",specialKeys:{8:"backspace",9:"tab",13:"return",16:"shift",17:"ctrl",18:"alt",19:"pause",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"insert",46:"del",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9",106:"*",107:"+",
109:"-",110:".",111:"/",112:"f1",113:"f2",114:"f3",115:"f4",116:"f5",117:"f6",118:"f7",119:"f8",120:"f9",121:"f10",122:"f11",123:"f12",144:"numlock",145:"scroll",191:"/",224:"meta"},shiftNums:{"`":"~",1:"!",2:"@",3:"#",4:"$",5:"%",6:"^",7:"&",8:"*",9:"(",0:")","-":"_","=":"+",";":": ","'":'"',",":"<",".":">","/":"?","\\":"|"}};d.each(["keydown","keyup","keypress"],function(){d.event.special[this]={add:h}})})(jQuery);

// DIFF_MATCH_PATCH PLUGIN
(function(){function i(){this.Diff_Timeout=1;this.Diff_EditCost=4;this.Match_Threshold=0.5;this.Match_Distance=1E3;this.Patch_DeleteThreshold=0.5;this.Patch_Margin=4;this.Match_MaxBits=32}function w(){this.diffs=[];this.start2=this.start1=null;this.length2=this.length1=0}i.prototype.diff_main=function(a,b,c,d){typeof d=="undefined"&&(d=this.Diff_Timeout<=0?Number.MAX_VALUE:(new Date).getTime()+this.Diff_Timeout*1E3);if(a==null||b==null)throw Error("Null input. (diff_main)");if(a==b)return a?[[0,a]]:
[];typeof c=="undefined"&&(c=!0);var e=c,f=this.diff_commonPrefix(a,b),c=a.substring(0,f),a=a.substring(f),b=b.substring(f),f=this.diff_commonSuffix(a,b),g=a.substring(a.length-f),a=a.substring(0,a.length-f),b=b.substring(0,b.length-f),a=this.diff_compute_(a,b,e,d);c&&a.unshift([0,c]);g&&a.push([0,g]);this.diff_cleanupMerge(a);return a};i.prototype.diff_compute_=function(a,b,c,d){if(!a)return[[1,b]];if(!b)return[[-1,a]];var e=a.length>b.length?a:b,f=a.length>b.length?b:a,g=e.indexOf(f);return g!=
-1?(c=[[1,e.substring(0,g)],[0,f],[1,e.substring(g+f.length)]],a.length>b.length&&(c[0][0]=c[2][0]=-1),c):f.length==1?[[-1,a],[1,b]]:(e=this.diff_halfMatch_(a,b))?(f=e[0],a=e[1],g=e[2],b=e[3],e=e[4],f=this.diff_main(f,g,c,d),c=this.diff_main(a,b,c,d),f.concat([[0,e]],c)):c&&a.length>100&&b.length>100?this.diff_lineMode_(a,b,d):this.diff_bisect_(a,b,d)};i.prototype.diff_lineMode_=function(a,b,c){var d=this.diff_linesToChars_(a,b),a=d[0],b=d[1],d=d[2],a=this.diff_bisect_(a,b,c);this.diff_charsToLines_(a,
d);this.diff_cleanupSemantic(a);a.push([0,""]);for(var e=b=0,f=0,g=d="";b<a.length;){switch(a[b][0]){case 1:f++;g+=a[b][1];break;case -1:e++;d+=a[b][1];break;case 0:if(e>=1&&f>=1){d=this.diff_main(d,g,!1,c);a.splice(b-e-f,e+f);b=b-e-f;for(e=d.length-1;e>=0;e--)a.splice(b,0,d[e]);b+=d.length}e=f=0;g=d=""}b++}a.pop();return a};i.prototype.diff_bisect_=function(a,b,c){for(var d=a.length,e=b.length,f=Math.ceil((d+e)/2),g=2*f,h=Array(g),k=Array(g),j=0;j<g;j++)h[j]=-1,k[j]=-1;h[f+1]=0;k[f+1]=0;for(var j=
d-e,p=j%2!=0,r=0,i=0,t=0,n=0,o=0;o<f;o++){if((new Date).getTime()>c)break;for(var s=-o+r;s<=o-i;s+=2){var l=f+s,m;m=s==-o||s!=o&&h[l-1]<h[l+1]?h[l+1]:h[l-1]+1;for(var u=m-s;m<d&&u<e&&a.charAt(m)==b.charAt(u);)m++,u++;h[l]=m;if(m>d)i+=2;else if(u>e)r+=2;else if(p&&(l=f+j-s,l>=0&&l<g&&k[l]!=-1)){var q=d-k[l];if(m>=q)return this.diff_bisectSplit_(a,b,m,u,c)}}for(s=-o+t;s<=o-n;s+=2){l=f+s;q=s==-o||s!=o&&k[l-1]<k[l+1]?k[l+1]:k[l-1]+1;for(m=q-s;q<d&&m<e&&a.charAt(d-q-1)==b.charAt(e-m-1);)q++,m++;k[l]=q;
if(q>d)n+=2;else if(m>e)t+=2;else if(!p&&(l=f+j-s,l>=0&&l<g&&h[l]!=-1&&(m=h[l],u=f+m-l,q=d-q,m>=q)))return this.diff_bisectSplit_(a,b,m,u,c)}}return[[-1,a],[1,b]]};i.prototype.diff_bisectSplit_=function(a,b,c,d,e){var f=a.substring(0,c),g=b.substring(0,d),a=a.substring(c),b=b.substring(d),f=this.diff_main(f,g,!1,e),e=this.diff_main(a,b,!1,e);return f.concat(e)};i.prototype.diff_linesToChars_=function(a,b){function c(a){for(var b="",c=0,f=-1,g=d.length;f<a.length-1;){f=a.indexOf("\n",c);f==-1&&(f=
a.length-1);var i=a.substring(c,f+1),c=f+1;(e.hasOwnProperty?e.hasOwnProperty(i):e[i]!==void 0)?b+=String.fromCharCode(e[i]):(b+=String.fromCharCode(g),e[i]=g,d[g++]=i)}return b}var d=[],e={};d[0]="";var f=c(a),g=c(b);return[f,g,d]};i.prototype.diff_charsToLines_=function(a,b){for(var c=0;c<a.length;c++){for(var d=a[c][1],e=[],f=0;f<d.length;f++)e[f]=b[d.charCodeAt(f)];a[c][1]=e.join("")}};i.prototype.diff_commonPrefix=function(a,b){if(!a||!b||a.charAt(0)!=b.charAt(0))return 0;for(var c=0,d=Math.min(a.length,
b.length),e=d,f=0;c<e;)a.substring(f,e)==b.substring(f,e)?f=c=e:d=e,e=Math.floor((d-c)/2+c);return e};i.prototype.diff_commonSuffix=function(a,b){if(!a||!b||a.charAt(a.length-1)!=b.charAt(b.length-1))return 0;for(var c=0,d=Math.min(a.length,b.length),e=d,f=0;c<e;)a.substring(a.length-e,a.length-f)==b.substring(b.length-e,b.length-f)?f=c=e:d=e,e=Math.floor((d-c)/2+c);return e};i.prototype.diff_commonOverlap_=function(a,b){var c=a.length,d=b.length;if(c==0||d==0)return 0;c>d?a=a.substring(c-d):c<d&&
(b=b.substring(0,c));c=Math.min(c,d);if(a==b)return c;for(var d=0,e=1;;){var f=a.substring(c-e),f=b.indexOf(f);if(f==-1)return d;e+=f;if(f==0||a.substring(c-e)==b.substring(0,e))d=e,e++}};i.prototype.diff_halfMatch_=function(a,b){function c(a,b,c){for(var d=a.substring(c,c+Math.floor(a.length/4)),e=-1,g="",h,k,i,m;(e=b.indexOf(d,e+1))!=-1;){var u=f.diff_commonPrefix(a.substring(c),b.substring(e)),q=f.diff_commonSuffix(a.substring(0,c),b.substring(0,e));g.length<q+u&&(g=b.substring(e-q,e)+b.substring(e,
e+u),h=a.substring(0,c-q),k=a.substring(c+u),i=b.substring(0,e-q),m=b.substring(e+u))}return g.length*2>=a.length?[h,k,i,m,g]:null}if(this.Diff_Timeout<=0)return null;var d=a.length>b.length?a:b,e=a.length>b.length?b:a;if(d.length<4||e.length*2<d.length)return null;var f=this,g=c(d,e,Math.ceil(d.length/4)),d=c(d,e,Math.ceil(d.length/2)),h;if(!g&&!d)return null;else h=d?g?g[4].length>d[4].length?g:d:d:g;var k;a.length>b.length?(g=h[0],d=h[1],e=h[2],k=h[3]):(e=h[0],k=h[1],g=h[2],d=h[3]);h=h[4];return[g,
d,e,k,h]};i.prototype.diff_cleanupSemantic=function(a){for(var b=!1,c=[],d=0,e=null,f=0,g=0,h=0,k=0,j=0;f<a.length;)a[f][0]==0?(c[d++]=f,g=k,h=j,j=k=0,e=a[f][1]):(a[f][0]==1?k+=a[f][1].length:j+=a[f][1].length,e!==null&&e.length<=Math.max(g,h)&&e.length<=Math.max(k,j)&&(a.splice(c[d-1],0,[-1,e]),a[c[d-1]+1][0]=1,d--,d--,f=d>0?c[d-1]:-1,j=k=h=g=0,e=null,b=!0)),f++;b&&this.diff_cleanupMerge(a);this.diff_cleanupSemanticLossless(a);for(f=1;f<a.length;){if(a[f-1][0]==-1&&a[f][0]==1){b=a[f-1][1];c=a[f][1];
d=this.diff_commonOverlap_(b,c);if(d>=b.length/2||d>=c.length/2)a.splice(f,0,[0,c.substring(0,d)]),a[f-1][1]=b.substring(0,b.length-d),a[f+1][1]=c.substring(d),f++;f++}f++}};i.prototype.diff_cleanupSemanticLossless=function(a){function b(a,b){if(!a||!b)return 5;var h=0;if(a.charAt(a.length-1).match(c)||b.charAt(0).match(c))if(h++,a.charAt(a.length-1).match(d)||b.charAt(0).match(d))if(h++,a.charAt(a.length-1).match(e)||b.charAt(0).match(e))h++,(a.match(f)||b.match(g))&&h++;return h}for(var c=/[^a-zA-Z0-9]/,
d=/\s/,e=/[\r\n]/,f=/\n\r?\n$/,g=/^\r?\n\r?\n/,h=1;h<a.length-1;){if(a[h-1][0]==0&&a[h+1][0]==0){var k=a[h-1][1],j=a[h][1],p=a[h+1][1],i=this.diff_commonSuffix(k,j);if(i)var v=j.substring(j.length-i),k=k.substring(0,k.length-i),j=v+j.substring(0,j.length-i),p=v+p;for(var i=k,v=j,t=p,n=b(k,j)+b(j,p);j.charAt(0)===p.charAt(0);){k+=j.charAt(0);var j=j.substring(1)+p.charAt(0),p=p.substring(1),o=b(k,j)+b(j,p);o>=n&&(n=o,i=k,v=j,t=p)}a[h-1][1]!=i&&(i?a[h-1][1]=i:(a.splice(h-1,1),h--),a[h][1]=v,t?a[h+1][1]=
t:(a.splice(h+1,1),h--))}h++}};i.prototype.diff_cleanupEfficiency=function(a){for(var b=!1,c=[],d=0,e="",f=0,g=!1,h=!1,k=!1,j=!1;f<a.length;){if(a[f][0]==0)a[f][1].length<this.Diff_EditCost&&(k||j)?(c[d++]=f,g=k,h=j,e=a[f][1]):(d=0,e=""),k=j=!1;else if(a[f][0]==-1?j=!0:k=!0,e&&(g&&h&&k&&j||e.length<this.Diff_EditCost/2&&g+h+k+j==3))a.splice(c[d-1],0,[-1,e]),a[c[d-1]+1][0]=1,d--,e="",g&&h?(k=j=!0,d=0):(d--,f=d>0?c[d-1]:-1,k=j=!1),b=!0;f++}b&&this.diff_cleanupMerge(a)};i.prototype.diff_cleanupMerge=
function(a){a.push([0,""]);for(var b=0,c=0,d=0,e="",f="",g;b<a.length;)switch(a[b][0]){case 1:d++;f+=a[b][1];b++;break;case -1:c++;e+=a[b][1];b++;break;case 0:c+d>1?(c!==0&&d!==0&&(g=this.diff_commonPrefix(f,e),g!==0&&(b-c-d>0&&a[b-c-d-1][0]==0?a[b-c-d-1][1]+=f.substring(0,g):(a.splice(0,0,[0,f.substring(0,g)]),b++),f=f.substring(g),e=e.substring(g)),g=this.diff_commonSuffix(f,e),g!==0&&(a[b][1]=f.substring(f.length-g)+a[b][1],f=f.substring(0,f.length-g),e=e.substring(0,e.length-g))),c===0?a.splice(b-
c-d,c+d,[1,f]):d===0?a.splice(b-c-d,c+d,[-1,e]):a.splice(b-c-d,c+d,[-1,e],[1,f]),b=b-c-d+(c?1:0)+(d?1:0)+1):b!==0&&a[b-1][0]==0?(a[b-1][1]+=a[b][1],a.splice(b,1)):b++,c=d=0,f=e=""}a[a.length-1][1]===""&&a.pop();c=!1;for(b=1;b<a.length-1;)a[b-1][0]==0&&a[b+1][0]==0&&(a[b][1].substring(a[b][1].length-a[b-1][1].length)==a[b-1][1]?(a[b][1]=a[b-1][1]+a[b][1].substring(0,a[b][1].length-a[b-1][1].length),a[b+1][1]=a[b-1][1]+a[b+1][1],a.splice(b-1,1),c=!0):a[b][1].substring(0,a[b+1][1].length)==a[b+1][1]&&
(a[b-1][1]+=a[b+1][1],a[b][1]=a[b][1].substring(a[b+1][1].length)+a[b+1][1],a.splice(b+1,1),c=!0)),b++;c&&this.diff_cleanupMerge(a)};i.prototype.diff_xIndex=function(a,b){var c=0,d=0,e=0,f=0,g;for(g=0;g<a.length;g++){a[g][0]!==1&&(c+=a[g][1].length);a[g][0]!==-1&&(d+=a[g][1].length);if(c>b)break;e=c;f=d}return a.length!=g&&a[g][0]===-1?f:f+(b-e)};i.prototype.diff_prettyHtml=function(a){for(var b=[],c=0,d=/&/g,e=/</g,f=/>/g,g=/\n/g,h=0;h<a.length;h++){var k=a[h][0],j=a[h][1],i=j.replace(d,"&amp;").replace(e,
"&lt;").replace(f,"&gt;").replace(g,"&para;<br>");switch(k){case 1:b[h]='<ins style="background:#e6ffe6;">'+i+"</ins>";break;case -1:b[h]='<del style="background:#ffe6e6;">'+i+"</del>";break;case 0:b[h]="<span>"+i+"</span>"}k!==-1&&(c+=j.length)}return b.join("")};i.prototype.diff_text1=function(a){for(var b=[],c=0;c<a.length;c++)a[c][0]!==1&&(b[c]=a[c][1]);return b.join("")};i.prototype.diff_text2=function(a){for(var b=[],c=0;c<a.length;c++)a[c][0]!==-1&&(b[c]=a[c][1]);return b.join("")};i.prototype.diff_levenshtein=
function(a){for(var b=0,c=0,d=0,e=0;e<a.length;e++){var f=a[e][1];switch(a[e][0]){case 1:c+=f.length;break;case -1:d+=f.length;break;case 0:b+=Math.max(c,d),d=c=0}}b+=Math.max(c,d);return b};i.prototype.diff_toDelta=function(a){for(var b=[],c=0;c<a.length;c++)switch(a[c][0]){case 1:b[c]="+"+encodeURI(a[c][1]);break;case -1:b[c]="-"+a[c][1].length;break;case 0:b[c]="="+a[c][1].length}return b.join("\t").replace(/%20/g," ")};i.prototype.diff_fromDelta=function(a,b){for(var c=[],d=0,e=0,f=b.split(/\t/g),
g=0;g<f.length;g++){var h=f[g].substring(1);switch(f[g].charAt(0)){case "+":try{c[d++]=[1,decodeURI(h)]}catch(k){throw Error("Illegal escape in diff_fromDelta: "+h);}break;case "-":case "=":var j=parseInt(h,10);if(isNaN(j)||j<0)throw Error("Invalid number in diff_fromDelta: "+h);h=a.substring(e,e+=j);f[g].charAt(0)=="="?c[d++]=[0,h]:c[d++]=[-1,h];break;default:if(f[g])throw Error("Invalid diff operation in diff_fromDelta: "+f[g]);}}if(e!=a.length)throw Error("Delta length ("+e+") does not equal source text length ("+
a.length+").");return c};i.prototype.match_main=function(a,b,c){if(a==null||b==null||c==null)throw Error("Null input. (match_main)");c=Math.max(0,Math.min(c,a.length));return a==b?0:a.length?a.substring(c,c+b.length)==b?c:this.match_bitap_(a,b,c):-1};i.prototype.match_bitap_=function(a,b,c){function d(a,d){var e=a/b.length,g=Math.abs(c-d);return!f.Match_Distance?g?1:e:e+g/f.Match_Distance}if(b.length>this.Match_MaxBits)throw Error("Pattern too long for this browser.");var e=this.match_alphabet_(b),
f=this,g=this.Match_Threshold,h=a.indexOf(b,c);h!=-1&&(g=Math.min(d(0,h),g),h=a.lastIndexOf(b,c+b.length),h!=-1&&(g=Math.min(d(0,h),g)));for(var k=1<<b.length-1,h=-1,j,i,r=b.length+a.length,v,t=0;t<b.length;t++){j=0;for(i=r;j<i;)d(t,c+i)<=g?j=i:r=i,i=Math.floor((r-j)/2+j);r=i;j=Math.max(1,c-i+1);var n=Math.min(c+i,a.length)+b.length;i=Array(n+2);for(i[n+1]=(1<<t)-1;n>=j;n--){var o=e[a.charAt(n-1)];i[n]=t===0?(i[n+1]<<1|1)&o:(i[n+1]<<1|1)&o|(v[n+1]|v[n])<<1|1|v[n+1];if(i[n]&k&&(o=d(t,n-1),o<=g))if(g=
o,h=n-1,h>c)j=Math.max(1,2*c-h);else break}if(d(t+1,c)>g)break;v=i}return h};i.prototype.match_alphabet_=function(a){for(var b={},c=0;c<a.length;c++)b[a.charAt(c)]=0;for(c=0;c<a.length;c++)b[a.charAt(c)]|=1<<a.length-c-1;return b};i.prototype.patch_addContext_=function(a,b){if(b.length!=0){for(var c=b.substring(a.start2,a.start2+a.length1),d=0;b.indexOf(c)!=b.lastIndexOf(c)&&c.length<this.Match_MaxBits-this.Patch_Margin-this.Patch_Margin;)d+=this.Patch_Margin,c=b.substring(a.start2-d,a.start2+a.length1+
d);d+=this.Patch_Margin;(c=b.substring(a.start2-d,a.start2))&&a.diffs.unshift([0,c]);(d=b.substring(a.start2+a.length1,a.start2+a.length1+d))&&a.diffs.push([0,d]);a.start1-=c.length;a.start2-=c.length;a.length1+=c.length+d.length;a.length2+=c.length+d.length}};i.prototype.patch_make=function(a,b,c){var d;if(typeof a=="string"&&typeof b=="string"&&typeof c=="undefined")d=a,b=this.diff_main(d,b,!0),b.length>2&&(this.diff_cleanupSemantic(b),this.diff_cleanupEfficiency(b));else if(a&&typeof a=="object"&&
typeof b=="undefined"&&typeof c=="undefined")b=a,d=this.diff_text1(b);else if(typeof a=="string"&&b&&typeof b=="object"&&typeof c=="undefined")d=a;else if(typeof a=="string"&&typeof b=="string"&&c&&typeof c=="object")d=a,b=c;else throw Error("Unknown call format to patch_make.");if(b.length===0)return[];for(var c=[],a=new w,e=0,f=0,g=0,h=d,k=0;k<b.length;k++){var j=b[k][0],i=b[k][1];if(!e&&j!==0)a.start1=f,a.start2=g;switch(j){case 1:a.diffs[e++]=b[k];a.length2+=i.length;d=d.substring(0,g)+i+d.substring(g);
break;case -1:a.length1+=i.length;a.diffs[e++]=b[k];d=d.substring(0,g)+d.substring(g+i.length);break;case 0:i.length<=2*this.Patch_Margin&&e&&b.length!=k+1?(a.diffs[e++]=b[k],a.length1+=i.length,a.length2+=i.length):i.length>=2*this.Patch_Margin&&e&&(this.patch_addContext_(a,h),c.push(a),a=new w,e=0,h=d,f=g)}j!==1&&(f+=i.length);j!==-1&&(g+=i.length)}e&&(this.patch_addContext_(a,h),c.push(a));return c};i.prototype.patch_deepCopy=function(a){for(var b=[],c=0;c<a.length;c++){var d=a[c],e=new w;e.diffs=
[];for(var f=0;f<d.diffs.length;f++)e.diffs[f]=d.diffs[f].slice();e.start1=d.start1;e.start2=d.start2;e.length1=d.length1;e.length2=d.length2;b[c]=e}return b};i.prototype.patch_apply=function(a,b){if(a.length==0)return[b,[]];var a=this.patch_deepCopy(a),c=this.patch_addPadding(a),b=c+b+c;this.patch_splitMax(a);for(var d=0,e=[],f=0;f<a.length;f++){var g=a[f].start2+d,h=this.diff_text1(a[f].diffs),i,j=-1;if(h.length>this.Match_MaxBits){if(i=this.match_main(b,h.substring(0,this.Match_MaxBits),g),i!=
-1&&(j=this.match_main(b,h.substring(h.length-this.Match_MaxBits),g+h.length-this.Match_MaxBits),j==-1||i>=j))i=-1}else i=this.match_main(b,h,g);if(i==-1)e[f]=!1,d-=a[f].length2-a[f].length1;else if(e[f]=!0,d=i-g,g=j==-1?b.substring(i,i+h.length):b.substring(i,j+this.Match_MaxBits),h==g)b=b.substring(0,i)+this.diff_text2(a[f].diffs)+b.substring(i+h.length);else if(g=this.diff_main(h,g,!1),h.length>this.Match_MaxBits&&this.diff_levenshtein(g)/h.length>this.Patch_DeleteThreshold)e[f]=!1;else{this.diff_cleanupSemanticLossless(g);
for(var h=0,p,j=0;j<a[f].diffs.length;j++){var r=a[f].diffs[j];r[0]!==0&&(p=this.diff_xIndex(g,h));r[0]===1?b=b.substring(0,i+p)+r[1]+b.substring(i+p):r[0]===-1&&(b=b.substring(0,i+p)+b.substring(i+this.diff_xIndex(g,h+r[1].length)));r[0]!==-1&&(h+=r[1].length)}}}b=b.substring(c.length,b.length-c.length);return[b,e]};i.prototype.patch_addPadding=function(a){for(var b=this.Patch_Margin,c="",d=1;d<=b;d++)c+=String.fromCharCode(d);for(d=0;d<a.length;d++)a[d].start1+=b,a[d].start2+=b;var d=a[0],e=d.diffs;
if(e.length==0||e[0][0]!=0)e.unshift([0,c]),d.start1-=b,d.start2-=b,d.length1+=b,d.length2+=b;else if(b>e[0][1].length){var f=b-e[0][1].length;e[0][1]=c.substring(e[0][1].length)+e[0][1];d.start1-=f;d.start2-=f;d.length1+=f;d.length2+=f}d=a[a.length-1];e=d.diffs;e.length==0||e[e.length-1][0]!=0?(e.push([0,c]),d.length1+=b,d.length2+=b):b>e[e.length-1][1].length&&(f=b-e[e.length-1][1].length,e[e.length-1][1]+=c.substring(0,f),d.length1+=f,d.length2+=f);return c};i.prototype.patch_splitMax=function(a){for(var b=
this.Match_MaxBits,c=0;c<a.length;c++)if(a[c].length1>b){var d=a[c];a.splice(c--,1);for(var e=d.start1,f=d.start2,g="";d.diffs.length!==0;){var h=new w,i=!0;h.start1=e-g.length;h.start2=f-g.length;if(g!=="")h.length1=h.length2=g.length,h.diffs.push([0,g]);for(;d.diffs.length!==0&&h.length1<b-this.Patch_Margin;){var g=d.diffs[0][0],j=d.diffs[0][1];g===1?(h.length2+=j.length,f+=j.length,h.diffs.push(d.diffs.shift()),i=!1):g===-1&&h.diffs.length==1&&h.diffs[0][0]==0&&j.length>2*b?(h.length1+=j.length,
e+=j.length,i=!1,h.diffs.push([g,j]),d.diffs.shift()):(j=j.substring(0,b-h.length1-this.Patch_Margin),h.length1+=j.length,e+=j.length,g===0?(h.length2+=j.length,f+=j.length):i=!1,h.diffs.push([g,j]),j==d.diffs[0][1]?d.diffs.shift():d.diffs[0][1]=d.diffs[0][1].substring(j.length))}g=this.diff_text2(h.diffs);g=g.substring(g.length-this.Patch_Margin);j=this.diff_text1(d.diffs).substring(0,this.Patch_Margin);j!==""&&(h.length1+=j.length,h.length2+=j.length,h.diffs.length!==0&&h.diffs[h.diffs.length-1][0]===
0?h.diffs[h.diffs.length-1][1]+=j:h.diffs.push([0,j]));i||a.splice(++c,0,h)}}};i.prototype.patch_toText=function(a){for(var b=[],c=0;c<a.length;c++)b[c]=a[c];return b.join("")};i.prototype.patch_fromText=function(a){var b=[];if(!a)return b;for(var a=a.split("\n"),c=0,d=/^@@ -(\d+),?(\d*) \+(\d+),?(\d*) @@$/;c<a.length;){var e=a[c].match(d);if(!e)throw Error("Invalid patch string: "+a[c]);var f=new w;b.push(f);f.start1=parseInt(e[1],10);e[2]===""?(f.start1--,f.length1=1):e[2]=="0"?f.length1=0:(f.start1--,
f.length1=parseInt(e[2],10));f.start2=parseInt(e[3],10);e[4]===""?(f.start2--,f.length2=1):e[4]=="0"?f.length2=0:(f.start2--,f.length2=parseInt(e[4],10));for(c++;c<a.length;){e=a[c].charAt(0);try{var g=decodeURI(a[c].substring(1))}catch(h){throw Error("Illegal escape in patch_fromText: "+g);}if(e=="-")f.diffs.push([-1,g]);else if(e=="+")f.diffs.push([1,g]);else if(e==" ")f.diffs.push([0,g]);else if(e=="@")break;else if(e!=="")throw Error('Invalid patch mode "'+e+'" in: '+g);c++}}return b};w.prototype.toString=
function(){var a,b;a=this.length1===0?this.start1+",0":this.length1==1?this.start1+1:this.start1+1+","+this.length1;b=this.length2===0?this.start2+",0":this.length2==1?this.start2+1:this.start2+1+","+this.length2;a=["@@ -"+a+" +"+b+" @@\n"];var c;for(b=0;b<this.diffs.length;b++){switch(this.diffs[b][0]){case 1:c="+";break;case -1:c="-";break;case 0:c=" "}a[b+1]=c+encodeURI(this.diffs[b][1])+"\n"}return a.join("").replace(/%20/g," ")};window.diff_match_patch=i;window.patch_obj=w;window.DIFF_DELETE=
-1;window.DIFF_INSERT=1;window.DIFF_EQUAL=0})();

// SHOWDOWN.JS MARKDOWN HANDLER
var Attacklab=Attacklab||{};Attacklab.showdown=Attacklab.showdown||{};
Attacklab.showdown.converter=function(){var u=function(){this.set=function(a,c){this["s_"+a]=c};this.get=function(a){return this["s_"+a]}},i,j,n,o=0;this.makeHtml=function(a){i=new u;j=new u;n=[];a=a.replace(/~/g,"~T");a=a.replace(/\$/g,"~D");a=a.replace(/\r\n/g,"\n");a=a.replace(/\r/g,"\n");a=v("\n\n"+a+"\n\n");a=a.replace(/^[ \t]+$/mg,"");a=w(a);a=D(a);a=p(a);a=x(a);a=a.replace(/~D/g,"$$");return a.replace(/~T/g,"~")};var D=function(a){return a=a.replace(/^[ ]{0,3}\[(.+)\]:[ \t]*\n?[ \t]*<?(\S+?)>?(?=\s|$)[ \t]*\n?[ \t]*((\n*)["(](.+?)[")][ \t]*)?(?:\n+)/gm,
function(a,b,d,e,g,h){b=b.toLowerCase();i.set(b,y(d));if(g)return e;else h&&j.set(b,h.replace(/"/g,"&quot;"));return""})},w=function(a){a=a.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del)\b[^\r]*?\n<\/\2>[ \t]*(?=\n+))/gm,l);a=a.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math)\b[^\r]*?.*<\/\2>[ \t]*(?=\n+)\n)/gm,l);a=a.replace(/\n[ ]{0,3}((<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,l);a=a.replace(/\n\n[ ]{0,3}(<!(--(?:|(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>[ \t]*(?=\n{2,}))/g,
l);return a.replace(/(?:\n\n)([ ]{0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,l)},l=function(a,c){var b;b=c.replace(/^\n+/,"");b=b.replace(/\n+$/g,"");return"\n\n~K"+(n.push(b)-1)+"K\n\n"},p=function(a,c){for(var a=E(a),b=z("<hr />"),a=a.replace(/^[ ]{0,2}([ ]?\*[ ]?){3,}[ \t]*$/gm,b),a=a.replace(/^[ ]{0,2}([ ]?-[ ]?){3,}[ \t]*$/gm,b),a=a.replace(/^[ ]{0,2}([ ]?_[ ]?){3,}[ \t]*$/gm,b),a=A(a),a=F(a),a=G(a),a=w(a),b=a.replace(/^\n+/g,""),b=b.replace(/\n+$/g,""),d=b.split(/\n{2,}/g),b=[],e=d.length,
g=0;g<e;g++){var h=d[g];h.search(/~K(\d+)K/g)>=0?b.push(h):h.search(/\S/)>=0&&(h=m(h),h=h.replace(/^([ \t]*)/g,"<p>"),h+="</p>",b.push(h))}if(!c){e=b.length;for(g=0;g<e;g++)for(;b[g].search(/~K(\d+)K/)>=0;)d=n[RegExp.$1],d=d.replace(/\$/g,"$$$$"),b[g]=b[g].replace(/~K\d+K/,d)}return b.join("\n\n")},m=function(a){a=H(a);a=I(a);a=a.replace(/\\(\\)/g,q);a=a.replace(/\\([`*_{}\[\]()>#+-.!])/g,q);a=a.replace(/(!\[(.*?)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g,B);a=a.replace(/(!\[(.*?)\]\s?\([ \t]*()<?(\S+?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g,
B);a=a.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g,r);a=a.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\]\([ \t]*()<?((?:\([^)]*\)|[^()])*?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g,r);a=a.replace(/(\[([^\[\]]+)\])()()()()()/g,r);a=J(a);a=y(a);a=a.replace(/(\*\*|__)(?=\S)([^\r]*?\S[\*_]*)\1/g,"<strong>$2</strong>");a=a.replace(/(\*|_)(?=\S)([^\r]*?\S)\1/g,"<em>$2</em>");return a.replace(/  +\n/g," <br />\n")},I=function(a){return a=a.replace(/(<[a-z\/!$]("[^"]*"|'[^']*'|[^'">])*>|<!(--(?:|(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>)/gi,
function(a){a=a.replace(/(.)<\/?code>(?=.)/g,"$1`");return k(a,"\\`*_")})},r=function(a,c,b,d,e,g,h,f){f==void 0&&(f="");a=d.toLowerCase();if(e=="")if(a==""&&(a=b.toLowerCase().replace(/ ?\n/g," ")),i.get(a)!=void 0)e=i.get(a),j.get(a)!=void 0&&(f=j.get(a));else if(c.search(/\(\s*\)$/m)>-1)e="";else return c;e=k(e,"*_");c='<a href="'+e+'"';f!=""&&(f=f.replace(/"/g,"&quot;"),f=k(f,"*_"),c+=' title="'+f+'"');c+=">"+b+"</a>";return c},B=function(a,c,b,d,e,g,h,f){a=b;d=d.toLowerCase();f||(f="");if(e==
"")if(d==""&&(d=a.toLowerCase().replace(/ ?\n/g," ")),i.get(d)!=void 0)e=i.get(d),j.get(d)!=void 0&&(f=j.get(d));else return c;a=a.replace(/"/g,"&quot;");e=k(e,"*_");c='<img src="'+e+'" alt="'+a+'"';f=f.replace(/"/g,"&quot;");f=k(f,"*_");c+=' title="'+f+'"';c+=" />";return c},E=function(a){a=a.replace(/^(.+)[ \t]*\n=+[ \t]*\n+/gm,function(a,b){return"<h1>"+m(b)+"</h1>\n\n"});a=a.replace(/^(.+)[ \t]*\n-+[ \t]*\n+/gm,function(a,b){return"<h2>"+m(b)+"</h2>\n\n"});return a=a.replace(/^(\#{1,6})[ \t]*(.+?)[ \t]*\#*\n+/gm,
function(a,b,d){a=b.length;return"<h"+a+">"+m(d)+"</h"+a+">\n\n"})},s,A=function(a){a+="~0";var c=/^(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm;o?a=a.replace(c,function(a,c,e){a=e.search(/[*+-]/g)>-1?"ul":"ol";c=s(c,a);c=c.replace(/\s+$/,"");return"<"+a+">"+c+"</"+a+">\n"}):(c=/(\n\n|^\n?)(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/g,a=a.replace(c,function(a,c,e,g){a=g.search(/[*+-]/g)>-1?"ul":"ol";e=s(e,
a);return c+"<"+a+">\n"+e+"</"+a+">\n"}));return a=a.replace(/~0/,"")},K={ol:"\\d+[.]",ul:"[*+-]"};s=function(a,c){o++;a=a.replace(/\n{2,}$/,"\n");a+="~0";var b=K[c],d=!1,a=a.replace(RegExp("(^[ \\t]*)("+b+")[ \\t]+([^\\r]+?(\\n+))(?=(~0|\\1("+b+")[ \\t]+))","gm"),function(a,b,c,f){a=f;(b=/\n\n$/.test(a))||a.search(/\n{2,}/)>-1||d?a=p(t(a),!0):(a=A(t(a)),a=a.replace(/\n$/,""),a=m(a));d=b;return"<li>"+a+"</li>\n"}),a=a.replace(/~0/g,"");o--;return a};var F=function(a){a+="~0";a=a.replace(/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=~0))/g,
function(a,b,d){a=C(t(b));a=v(a);a=a.replace(/^\n+/g,"");a=a.replace(/\n+$/g,"");return"\n\n"+("<pre><code>"+a+"\n</code></pre>")+"\n\n"+d});return a=a.replace(/~0/,"")},z=function(a){a=a.replace(/(^\n+|\n+$)/g,"");return"\n\n~K"+(n.push(a)-1)+"K\n\n"},H=function(a){return a=a.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,function(a,b,d,e){a=e.replace(/^([ \t]*)/g,"");a=a.replace(/[ \t]*$/g,"");a=C(a);return b+"<code>"+a+"</code>"})},C=function(a){a=a.replace(/&/g,"&amp;");a=a.replace(/</g,"&lt;");
a=a.replace(/>/g,"&gt;");return k(a,"*_{}[]\\",!1)},G=function(a){return a=a.replace(/((^[ \t]*>[ \t]?.+\n(.+\n)*\n*)+)/gm,function(a,b){var d;d=b.replace(/^[ \t]*>[ \t]?/gm,"~0");d=d.replace(/~0/g,"");d=d.replace(/^[ \t]+$/gm,"");d=p(d);d=d.replace(/(^|\n)/g,"$1  ");d=d.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm,function(a,b){return b.replace(/^  /mg,"~0").replace(/~0/g,"")});return z("<blockquote>\n"+d+"\n</blockquote>")})},y=function(a){a=a.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g,"&amp;");return a.replace(/<(?![a-z\/?\$!])/gi,
"&lt;")},J=function(a){a=a.replace(/<((https?|ftp|dict):[^'">\s]+)>/gi,'<a href="$1">$1</a>');return a=a.replace(/<(?:mailto:)?([-.\w]+\@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi,function(a,b){return L(x(b))})},L=function(a){var c=[function(a){return"&#"+a.charCodeAt(0)+";"},function(a){a=a.charCodeAt(0);return"&#x"+("0123456789ABCDEF".charAt(a>>4)+"0123456789ABCDEF".charAt(a&15))+";"},function(a){return a}],a=("mailto:"+a).replace(/./g,function(a){if(a=="@")a=c[Math.floor(Math.random()*2)](a);else if(a!=
":")var d=Math.random(),a=d>0.9?c[2](a):d>0.45?c[1](a):c[0](a);return a});return a=('<a href="'+a+'">'+a+"</a>").replace(/">.+:/g,'">')},x=function(a){return a=a.replace(/~E(\d+)E/g,function(a,b){var d=parseInt(b);return String.fromCharCode(d)})},t=function(a){a=a.replace(/^(\t|[ ]{1,4})/gm,"~0");return a.replace(/~0/g,"")},v=function(a){if(!/\t/.test(a))return a;var c=["    ","   ","  "," "],b=0,d;return a.replace(/[\n\t]/g,function(a,g){if(a==="\n")return b=g+1,a;d=(g-b)%4;b=g+1;return c[d]})},
k=function(a,c,b){c="(["+c.replace(/([\[\]\\])/g,"\\$1")+"])";b&&(c="\\\\"+c);return a.replace(RegExp(c,"g"),q)},q=function(a,c){return"~E"+c.charCodeAt(0)+"E"}};var Showdown=Attacklab.showdown;Attacklab.fileLoaded&&Attacklab.fileLoaded("showdown.js");

// ################################################################ //
// ################################################################ //
// ##################### BRITT STACK ############################## //
// ################################################################ //
// ################################################################ //

// JQUERY NO-CONFLICT
var $ = jQuery.noConflict();

// STORE/ACCESS DATA
function getData(key){
	if (storage=='localStorage'){
		return localStorage[key];
	}
	else{
		return sessionStorage[key];
	};
};
function setData(key, val){
	if (storage=='localStorage'){
		localStorage[key] = val;
	}
	else{
		sessionStorage[key] = val;
	};
};

// REFLOW CARDS
function reflowCards(){
	if($('.current').length != 1){
		if($('.selected').length != 1){
			$('.selected').removeClass('selected');
			$('.listnote:first').addClass('selected');
		}
		else{
			$('#' + $('.selected').data().key).addClass('current');
		};
	};
	$('.prev2').removeClass('prev2');
	$('.prev1').removeClass('prev1');
	$('.next1').removeClass('next1');
	$('.next2').removeClass('next2');
	$('.current').prev('.note').prev('.note').addClass('prev2');
	$('.current').prev('.note').addClass('prev1');
	$('.current').next('.note').addClass('next1');
	$('.current').next('.note').next('.note').addClass('next2');
};

// REFRESH CARDS
function refreshCards(){
	//console.log('refreshing cards');
	if($('.selected').length != 1){
		$('.selected').removeClass('selected');
		$('.listnote:first').addClass('selected');
	};
	$('.note').remove();
	$('.listnote:not(.hide)').each(function(){
		// clone template into note card
		$('#note-template').clone().attr('id', $(this).data().key).addClass('note').appendTo('.window')
		var notecard = $('#' + $(this).data().key);
		// add content to textarea
		notecard.children('.textarea').children('textarea').val($(this).data().content);
		// populate tags
		var tagstring = $(this).data().tags.join(' ');
		var allTagsArr = $.parseJSON(localStorage.tagIndex).tags;
		notecard.children('.tag-area').children('input').attr('id','tag' + $(this).data().key).val(tagstring).tagsInput();
	});
	$('#' + $('.selected').data().key).addClass('current');
	refreshNoteBinds('.note .textarea textarea');
	reflowCards();
};

// SORT NOTES: PINNED, THEN AGE
function sortNotes(){
	//console.log('sorting notes');
	$('.listnote').sortElements(function(a, b){
		if ($(a).hasClass('pinned')){
			if (!$(b).hasClass('pinned')){return -1};
		}else if($(b).hasClass('pinned')){
			if (!$(a).hasClass('pinned')){return 1};
		};
		return parseFloat($(a).data('modifydate')) < parseFloat($(b).data('modifydate')) ? 1 : -1;
	}); 
	return "sorted";
};

// SORT VERSIONS
function sortVersions(){
	$('.version-item').sortElements(function(a, b){
		return parseFloat($(a).data('version')) < parseFloat($(b).data('version')) ? 1 : -1;
	}); 
	return "sorted";
};

// DIFF VERSIONS
function diffVersions(fromtext,totext){
	var dmp = new diff_match_patch();
  	var d = dmp.diff_main(fromtext, totext);
  	dmp.diff_cleanupSemantic(d);
  	var ds = dmp.diff_prettyHtml(d);
	return ds;
};

// GET VERSION OF NOTE
function getNoteVersion(notekey,version){
	return $.Deferred(function(dfd){
		$.ajax('/sn.php',{
			type: 'POST',
			data: {'action': 'noteversion', 'email': email,'token': token,'notekey': notekey, 'noteversion': version},
			success: function(data){
				note = $.parseJSON(data);
				$('#version-template').clone().attr('id',notekey + "version" + note.version).addClass('version-item').appendTo('.versions .versions-left').data(note);
				thisversion = $('#' + notekey + 'version' + note.version);
				//thisversion.children('.version-num').text(note.version);
				thisversion.children('.version-date').html('<abbr class="timeago" title="' + stackTime(note.versiondate) + '"></abbr>');
				bindTimeago();
				sortVersions();
				dfd.resolve();
			},
			error: function(msg){
				return 'false';
			}
		});
	}).promise();
};

// GET ALL VERSIONS OF NOTE
function populateVersions(notekey){
	$('.version-item').remove();
	var verarray = [];
	noteobj = $.parseJSON(localStorage.getItem(notekey));
	curversion = noteobj.version;
	minversion = noteobj.minversion;
	for (i=minversion;i<=curversion;i++){
		verarray.push(getNoteVersion(notekey,i));
	};
	$.when.apply(null, verarray).done(function(){
		//console.log('done with all versions');
		$('.version-item').each(function(){
			if ($(this).data().version > minversion){
				prev = $(this).data().version - 1;
				//console.log($(this).data().version);
				//console.log('prev=' + prev);
				ds = diffVersions($('#' + notekey + "version" + prev ).data().content,$(this).data().content);
				$(this).data('diff',ds);
			};
		});
		$('.versions-right .right-inner').html($('.version-item:first').data().diff);
		$('.version-item:first').addClass('version-select');
	});
};

// DOWNLOAD ONE NOTE
function getNote(notekey){
	return $.Deferred(function(dfd_get){
		//console.log('getting ' + notekey);
		$.ajax('/sn.php',{
			type: 'POST',
			data: {'action': 'note', 'email': email,'token': token,'notekey': notekey},
			success: function(data){
				//console.log('inside get success');
				note = $.parseJSON(data);
				//console.log(note);
				localStorage.setItem(note.key,data);
				localToDOM(note.key);
				dfd_get.resolve();
			},
			error: function(msg){
				//console.log('error getting note ' + notekey + ' error:' + msg);
			}
		});
	}).promise();
};

// UPLOAD/SEND ONE NOTE
function sendNote(noteobject){
	var dfd = $.Deferred();
	var postData = {'action': 'sendnote', 'email': email,'token': token,'notekey': noteobject.key,'notebody': JSON.stringify(noteobject)},
	newnote = 0;
	if(noteobject.key.substr(0,9) == 'notestack'){
		delete postData.notekey;
		delete noteobject.key;
		postData['notebody'] = JSON.stringify(noteobject);
		newnote = 1;
	};
	$.ajax('/sn.php',{
		type: 'POST',
		data: postData,
		success: function(data){
			//console.log('note updated');
			note = $.parseJSON(data);
			//console.log(note);
			if(!("content" in note)){
				note['content'] = noteobject.content;
			};
			if(newnote = 1){
				index = $.parseJSON(localStorage.index);
				for (i=0; i<=index.data.length-1; i++){
					if (index.data[i].key.substr(0,9)=='notestack'){
						//console.log('deleting from index: ' + index.data[i].key);
						$('#list-' + index.data[i].key).remove();
						localStorage.removeItem(index.data[i].key);
						index.data.splice(i,1);
						break
					};
				};
				localStorage.index = JSON.stringify(index);
			};
			localStorage.setItem(note.key,JSON.stringify(note));
			localToDOM(note.key);
			$('#list-' + note.key).addClass('selected');
			sortNotes();
			refreshCards();
			dfd.resolve();
		},
		error: function(msg){
			//console.log('error getting note ' + notekey + ' error:' + msg);
		}
	});
	return dfd.promise();
};

// PROGRESS BAR
function progressBar(percent){
	if($('.status .progress .inner').length==0){
		$('.status').html(
			'<div class="progress"><div class="inner"></div></div>'
		);
	};
	$('.status .progress .inner').css('width',percent + '%');
}; 

// CHECK ALL NOTES FOR UPDATES AGAINST INDEX
function updateAllNotes(){
	return $.Deferred(function(dfd_uan){
		//console.log('iterating through index, showing local, getting if needed');
		index = $.parseJSON(localStorage.index);
		var i=0, set=0, snarray=[], notecount=0, deletedcount=0;
		function updateSome(num){
			for (i=set;i<=set+num;i++){
				progressBar(Math.round(100*(i/index.data.length)));
				//console.log(i);
				if (!index.data[i]){
					console.log('broke at ' + i);
					dfd_uan.resolve();
					var breaker = true;
					break;
				};
				if (localStorage.getItem(index.data[i].key)){
					localNote = $.parseJSON(localStorage.getItem(index.data[i].key));
					if (localNote.key.substr(0,9) == 'notestack'){
						// completely new local note, send it
						snarray.push(sendNote(localNote));
					}
					else{
						if (localNote.syncnum < index.data[i].syncnum){ 
							// new remove version, get it
							snarray.push(getNote(localNote.key));
						}
						else if (localNote.syncnum > index.data[i].syncnum){ 
							// local version is newer, send it
							snarray.push(sendNote(localNote));
						}
						else{ 
							// have latest note, just show it
							localToDOM(localNote.key);
						};
					};
				}
				else{ 
					// completely new remote note, get it
					snarray.push(getNote(index.data[i].key));
				};
				if (index.data[i].deleted==0){
					notecount++;
					//console.log('notecount=' + notecount);
				}
				else if (index.data[i].deleted==1){
					deletedcount++;
				};
			};
			if(breaker == true){return false};
			if(snarray.length>0){
				$.when.apply(null, snarray).done(function(){
					set = set + num + 1;
					snarray = [];
					//console.log('set=' + set);
					sortNotes();
					refreshCards();
					updateSome(num);
				});
			}
			else{
				set = set + num + 1;
				snarray = [];
				//console.log('set=' + set);
				updateSome(num);
			};
		};
		updateSome(20);
		$('.note-data').text(notecount + ' notes | ');
		$('.data_notes').text(notecount);
		$('.data_deleted').text(deletedcount);
		$('.status').text('Syncing ' + snarray.length + ' notes');
		$('.status-div').addClass('loading');
	}).promise();
};

// SYNC INDEX
function syncIndex(postData){
	return $.Deferred(function(dfd_syn){
		$.ajax('/sn.php',{
			type: 'POST',
			data: postData,
			timeout: 5000,
			success: function(rawNewIndex){
				if(rawNewIndex=='401'){
					window.location = '/?login=expired';
				};
				newIndex = $.parseJSON(rawNewIndex);
				console.log('recieved new index with ' + newIndex.count + ' new notes');
				if(localStorage.index){
					existingIndex = $.parseJSON(localStorage.index);
					for (i=0;i<=newIndex.data.length-1;i++){
						for (j=0;j<=existingIndex.data.length-1;j++){
							if(existingIndex.data[j].key==newIndex.data[i].key){
								existingIndex.data.splice(j,1);
								break
							};
						};
						existingIndex.data.push(newIndex.data[i]);
					};
					existingIndex.count = existingIndex.data.length;
				}
				else{
					existingIndex = newIndex;
				};
				localStorage.setItem('mark',newIndex.mark ? newIndex.mark : "DONE");
				console.log(localStorage.mark);
				localStorage.setItem('index',JSON.stringify(existingIndex));
				localStorage.setItem('indexDate',newIndex.time);
				if (localStorage.mark == "DONE"){ 
					localStorage.removeItem('mark');
					console.log('done syncing index');
					dfd_syn.resolve();
				}
				else{ 
					// dfd_syn.reject();
					postData['mark'] = localStorage.mark;
					$.when(syncIndex(postData)).done(function(){
						dfd_syn.resolve();
					});					
				};
			},
			error: function(msg){
				$('.status').text('Working offline. Changes will sync when connected.');
				$('.status-div').removeClass('loading');
			}
		});
		console.log('outside index ajax()');
	}).promise();
};


// GET TAG INDEX
function getTagIndex(){
	return $.Deferred(function(dfd_tag){
		postData = {
			'action': 'tagIndex',
			'email': localStorage.email,
			'token': localStorage.token
		};
		console.log('starting tagIndex pull');
		$.ajax('/sn.php',{
			type: 'POST',
			data: postData,
			timeout: 5000,
			success: function(rawTagIndex){
				localStorage['tagIndex'] = rawTagIndex;
				console.log('stored tagIndex')
				dfd_tag.resolve();
			}
		});
	});
};

// UPDATE NOTE PREVIEW AND PIN
function updateListnote(key){
	thisnote = $('#list-' + key);
	thisnote.removeClass('pinned');
	if (thisnote.data().systemtags.indexOf('pinned')>-1){thisnote.addClass('pinned')};
	titlebreak = thisnote.data().content.indexOf('\n');
	if(titlebreak<0){
		thisnote.children('.title').text(thisnote.data().content.substring(0,100));
		thisnote.children('.preview').text('');
	}
	else{
		thisnote.children('.title').text(thisnote.data().content.substring(0,titlebreak));
		thisnote.children('.preview').text(thisnote.data().content.substr(titlebreak,100));
	};
};

// MOVE ONE NOTE FROM LOCAL STORAGE TO DOM
function localToDOM(key){ // add to DOM from localStorage
	return $.Deferred(function(dfd_ltd){
		//console.log('local to DOM ' + key);
		note = $.parseJSON(localStorage.getItem(key));
		if(note.deleted!=1){
			if($('#list-' + note.key).length>0){
				$('#list-' + note.key).removeData().data(note);
			}
			else{
				$('#listnote-template').clone().attr('id','list-'+note.key).addClass('listnote').appendTo('.list').data(note);
			};
			updateListnote(note.key);
			dfd_ltd.resolve();
		};
	}).promise();
};

// SHOW ALL LOCAL NOTES
function allLocalToDOM(){
	$('.status').text('Loading notes from local storage');
	$('.status-div').addClass('loading');
	if(localStorage.index){
		index = $.parseJSON(localStorage.index);
		//console.log( 'loading ' + index.data.length + ' local notes' );
		for (i=0;i<=(index.data.length-1);i++){
			if(!(localStorage.getItem(index.data[i].key)==null)){
				localToDOM(index.data[i].key);
			};
		};
	};
	//console.log('local notes loaded');
};

// MANUAL SYNC
function manualSync(syncType){
	if(localStorage.token){
		$.when(getTagIndex()).done(function(){
			console.log('done with tag index');
			$('.status').text('Syncing with Simplenote');
			$('.status-div').addClass('loading');
			if(syncType == 'full'){
				since = "";
				mark = "";
			}
			else{
				if(localStorage.mark){
					since = "";
					mark = localStorage.mark;
				}
				else{
					since = localStorage.indexDate ? localStorage.indexDate : "";
					mark = "";
				};
			};
			email = localStorage.email;
			token = localStorage.token;
			$.when(syncIndex({
				'action': 'index',
				'email': email,
				'token': token,
				'since': since,
				'mark' : mark,
				'length': 100
			})).done(function(){
				indexFinish = new Date().getTime();
				console.log('indexTime = ' + (indexFinish - indexStart));
				$.when(updateAllNotes()).done(function(){
					indexDate = stackTime(localStorage.indexDate);
					$('.status').html('synced <abbr class="timeago" title="' + indexDate + '"></abbr>');
					bindTimeago();
					$('.status-div').removeClass('loading');
					sortNotes();
					refreshCards();	
				});
			});
		});
	}
	else{
		window.location = '/';
	};

};

// ON PAGE LOAD
var storage = '',indexStart = '',indexFinish = '';

$(function(){
	if(localStorage.email){
		$('.username').text(localStorage.email);
		if(localStorage.index){
			allLocalToDOM();
			if($('.listnote').length>0){
				sortNotes();
				refreshCards();
			};
		};
		indexStart = new Date().getTime();
		manualSync();
	}
	else{
		window.location = '/';
	};
});

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
// INTERACTIONS ///////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

// NEXT / PREVIOUS NOTE
function nextNote() { 
	//console.log('nextNote ' + $('.selected').nextAll('.listnote:not(.hide):first').length);
	nextOne = $('.selected').nextAll('.listnote:not(.hide):first');
	if(nextOne.length > 0 ) {
		$('.selected').removeClass('selected');
		nextOne.addClass('selected');
		$('.current').removeClass('current').next('.note').addClass('current');
		reflowCards();
		scrollto();
	};
};
function prevNote() {
	//console.log('prevNote');
	prevOne = $('.selected').prevAll('.listnote:not(.hide):first')
	if(prevOne.length>0) {
		$('.selected').removeClass('selected');
		prevOne.addClass('selected');
		$('.current').removeClass('current').prev('.note').addClass('current');
		reflowCards();
		scrollto();
	};
};

// ON NOTE FOCUS
$('.note .textarea textarea').live('focus',function(){
	$('.current .note-directions').addClass('show');
	$('div.current').addClass('highlight');
	$('.window').unmousewheel();
});

// ON NOTE BLUR
$('.note .textarea textarea').live('blur',function(){
	blurkey = $(this).parent().parent().attr('id');
	if ($(this).val() != $('#list-' + blurkey).data().content){
		blurnote = $.parseJSON(localStorage.getItem(blurkey));
		blurnote.content = $(this).val();
		blurnote.modifydate = (new Date()).getTime()/1000;
		blurnote.syncnum = blurnote.syncnum + 1;
		localStorage.setItem(blurkey,JSON.stringify(blurnote));
		localToDOM(blurnote.key);
		manualSync();
	};
	$('.current .note-directions').removeClass('show');
	$('.current').removeClass('highlight');
	mapMousewheel();
});

// TOGGLE PIN
function togglePin(listitem){
	if(listitem.data().systemtags.indexOf('pinned')>-1){
		// remove pin
		listitem.data().systemtags.splice(listitem.data().systemtags.indexOf('pinned'),1);
	}
	else{
		// add pin
		listitem.data().systemtags.push('pinned');
	};
	listitem.data().syncnum = listitem.data().syncnum + 1;
	localStorage.setItem( listitem.data().key, JSON.stringify( listitem.data() ) );
	localToDOM( listitem.data().key );
	sortNotes();
	refreshCards();
};

// CREATE NEW NOTE
function createNote() {
	createdate = (new Date()).getTime();
	newid = 'notestack' + createdate;
	newdata = {key: newid, createdate: createdate/1000, modifydate: createdate/1000, tags: [], systemtags: [], content: "new note"};
	localStorage.setItem(newid, JSON.stringify(newdata));
	index = $.parseJSON(localStorage.index);
	index.data.push(newdata);
	//console.log(index.data);
	localStorage.index = JSON.stringify(index);
	localToDOM( newid );
	sortNotes();
	$('.selected').removeClass('selected');
	$('#list-' + newid).addClass('selected');
	refreshCards();
	$('.current .textarea textarea').select();
};

// SCROLL TO SELECTED
function scrollto(){
	if($('.selected').position().top < 0){
		$('.list').scrollTop($('.list').scrollTop() + $('.selected').position().top);
	};
	if($('.selected').position().top + $('.listnote').height() > $('.list').height()){
		$('.list').scrollTop($('.list').scrollTop() + $('.selected').position().top - $('.list').height() + $('.listnote').height());
	};
};

// TOGGLE SHOWING OF VERSIONS WINDOW
function toggleVersions(notekey){
	if($('.versions').hasClass('show')){
		clearOverlays();
	}
	else{
		fullscreenMode('off');
		$('.versions').addClass('show');
		$('.overlay').addClass('show');
		$('.versions-right .right-inner').html("");
		populateVersions(notekey);
	};
};

// UPDATE TAGS
function updateTags(notekey){
	tags = $('#' + notekey + ' .tag-area input').val().split(' ');
	console.log(tags);
	note = $.parseJSON(localStorage[notekey]);
	if (note.tags != tags){
		note.tags = tags;
		note.syncnum = note.syncnum + 1;
		localStorage[notekey] = JSON.stringify(note);
		localToDOM(notekey);
		manualSync();
	};
};

$(function() {
// APPEARANCE SETTINGS
	// LOAD THEME
	if(localStorage.theme){
		themename = localStorage.theme;
		changeTheme(themename);
	}
	else{
		changeTheme('theme-moleskine'); // default theme
	};
	// CLICK THEME
	$('.appearance .item.theme').click(function(){
		themename = $(this).attr('id');
		$(this).removeClass('dim');
		changeTheme(themename);
	});
	function changeTheme(themename){
		var classes = $('.fullwindow').attr('class').split(" ");
		for (i=0, len=classes.length ; i<len; i++){
			if (classes[i].substr(0,6)=="theme-"){
				classes[i] = "";
			};
		};
		$('.appearance .item.theme').siblings('.theme').addClass('dim');
		$('#' + themename).removeClass('dim');
		$('.fullwindow').attr('class',classes.join(" "));
		$('.fullwindow').addClass(themename);
		localStorage['theme'] = themename;
	};
	// LOAD FONT
	if(localStorage.font){
		fontname = localStorage.font;
		changeFont(fontname);
	}
	else{
		changeFont('font-mono'); // default font
	};
	// CLICK FONT
	$('.appearance .font').click(function(){
		var fontname = $(this).attr('id');
		changeFont(fontname);
	});
	function changeFont(fontname){
		var classes = $('.fullwindow').attr('class').split(" ");
		for (i=0, len=classes.length ; i<len; i++){
			if (classes[i].substr(0,5)=="font-"){
				classes[i] = "";
			};
		};
		$('.appearance .font').siblings('.font').addClass('dim');
		$('#' + fontname).removeClass('dim');
		$('.fullwindow').attr('class',classes.join(" "));
		$('.fullwindow').addClass(fontname);
		localStorage['font'] = fontname;
	};
	// LOAD FONTSIZE
	if(localStorage.fontsize){
		fontsize = localStorage.fontsize;
		changeFontsize(fontsize);
	}
	else{
		changeFontsize('fontsize-12'); // default fontsize
	};
	// CLICK FONTSIZE
	$('.appearance .fontsize').click(function(){
		var fontsize = $(this).attr('id');
		changeFontsize(fontsize);
	});
	function changeFontsize(fontsize){
		var classes = $('.fullwindow').attr('class').split(" ");
		for (i=0, len=classes.length ; i<len; i++){
			if (classes[i].substr(0,9)=="fontsize-"){
				classes[i] = "";
			};
		};
		$('.appearance .fontsize').siblings('.fontsize').addClass('dim');
		$('#' + fontsize).removeClass('dim');
		$('.fullwindow').attr('class',classes.join(" "));
		$('.fullwindow').addClass(fontsize);
		localStorage['fontsize'] = fontsize;
	};
	// LOAD TAG-PREF
	if(localStorage.tagPref == "no-tags"){
		$('.fullwindow').addClass('no-tags');
		$('.tag-pref').addClass('dim');
	};
	// CLICK TAG-PREF
	$('.appearance .tag-pref').click(function(){
		if($(this).hasClass('dim')){
			// enable tags
			$(this).removeClass('dim');
			$('.fullwindow').removeClass('no-tags');
			localStorage.removeItem('tagPref');
		}
		else{
			// disable tags
			$(this).addClass('dim');
			$('.fullwindow').addClass('no-tags');
			localStorage.setItem('tagPref','no-tags');
		};
	});

// BUTTONS
	// NEW NOTE BUTTON
	$('.addnote').click(function(){createNote();});
	// TAGS BUTTON
	$('.tags').click(function(){showLabels();});
	// SYNC BUTTON
	$('.reload').click(function(){manualSync();});
	// CLOSE 'X' BUTTON (LABELS OR VERSIONS)
	$('.close').click(function(){clearOverlays();});
	// NOTE DELETE BUTTON
	$('.delete').live('click',function(){
		$(this).parent().children('.message').toggleClass('show').html('Mark this note as deleted?  <a href="#" class="confirmDelete">Delete</a> / <a href="#" class="cancelDelete">Cancel</a>');
	});
	$('.confirmDelete').live('click',function(){
		notekey = $(this).parent().parent().attr('id');
		deleteNote(notekey);
		return false;
	});
	$('.cancelDelete').live('click',function(){
		$('.message').removeClass('show');
		return false;
	});
	// CLICK NOTE IN LIST
	$('.listnote').live('click',function(){
		$('.selected').removeClass('selected');
		$(this).addClass('selected');
		$('.current').removeClass('current');
		$('#' + $(this).attr('id').split('list-').pop()).addClass('current');
		reflowCards();
	});
	// CLICK NON-CURRENT NOTE
	$('.note').live('click',function(){
		$('.current').removeClass('current');
		$(this).addClass('current');
		$('.selected').removeClass('selected');
		$('#list-' + $(this).attr('id')).addClass('selected');
		reflowCards();
	});
	// CLICK SETTINGS
	$('.settings_icon').click(function() {
		$('.settings').toggleClass('show');
	});
	$('.username').click(function(){
		$('.settings').toggleClass('show');
		$('.settings_pane').removeClass('show');
		$('.settings_pane.data').addClass('show');
	});
	// CLICK SETTINGS TAB
	$('.settings .tabs a').click(function(){
		$('.settings_pane').removeClass('show');
		$('.settings_pane.' + $(this).text().replace(" ","_")).addClass('show');
		e.preventDefault();
		return false;
	});
	// CLICK VERSIONS BUTTON
	$('.versions-button').live('mousedown',function(){
		notekey = $(this).parent().attr('id');
		toggleVersions(notekey);
	});
	// CLICK INDIVIDUAL VERSION
	$('.version-item').live('mousedown',function(){
		if($('.diff-view').hasClass('depressed')){
			$('.versions-right .right-inner').html($(this).data().diff);
		}
		else{
			$('.versions-right .right-inner').html('<textarea disabled="disabled">' + $(this).data().content + '</textarea>');
		}
		$('.version-select').removeClass('version-select');
		$(this).addClass('version-select');
	});
	// CLICK VERSION VIEW BUTTON
	$('.versions-toolbar .diff-view,.versions-toolbar .text-view').live('mousedown',function(){
		$('.versions-toolbar .depressed').removeClass('depressed');
		$(this).addClass('depressed');
		if($('.version-select').length < 1){
			$('.version-item:first').addClass('.version-select');
		};
		if($(this).hasClass('diff-view')){
			$('.versions-right .right-inner').html($('.version-select').data().diff);
		}
		else if ($(this).hasClass('text-view')){
			$('.versions-right .right-inner').html('<textarea disabled="disabled">' + $('.version-select').data().content + '</textarea>');
		};
	});
	// CLICK OUTSIDE OF OVERLAY WINDOW
	$('.overlay').click(function(){
		clearOverlays();
	});
	// CLICK REVERT
	$('.versions-toolbar .revert-version').live('mousedown',function(){
		if( $('.version-select').length==1 ){
			notekey = $('.version-select').attr('id').split('version').shift();
			verContent = $('.version-select').data().content;
			$('.selected').removeClass('selected');
			$('#list-' + notekey).addClass('selected');
			$('.current').removeClass('current');
			$('#' + notekey).addClass('current');
			reflowCards();
			clearOverlays();
			$('.note.current .textarea textarea').val(verContent).focus();
			return false;
		};
	});
	// LOGOUT AND CLEAR DATA
	$('.cleardata').click(function(){
		localStorage.clear();
	});
	
	
// KEYBOARD SHORTCUTS
	//GENERAL SHORTCUTS
	$(document).bind('keydown','esc',function(){clearOverlays();});
	$(document).bind('keydown','j',function(){nextNote();});
	$(document).bind('keydown','right',function(){nextNote();});
	$(document).bind('keydown','down',function(){nextNote();});
	$(document).bind('keydown','k',function(){prevNote();});
	$(document).bind('keydown','left',function(){prevNote();});
	$(document).bind('keydown','up',function(){prevNote();});
	$(document).bind('keydown','return',function(){$('.note.current .textarea textarea').focus(); return false;});
	$(document).bind('keydown','tab',function(){$('.note.current .textarea textarea').focus(); return false;});
	$(document).bind('keydown','shift+/',function(){$('.settings').toggleClass('show');});
	$(document).bind('keydown','/',function(){$('.search input').select();return false;});
	$(document).bind('keydown','c',function(){createNote();return false;});
	$(document).bind('keydown','s',function(){manualSync();return false;});
	$(document).bind('keydown','p',function(){togglePin($('.selected'));});
	$(document).bind('keydown','f',function(){fullscreenMode();});
	$(document).bind('keydown','l',function(){showLabels();return false;});
	$(document).bind('keydown','t',function(){showLabels();return false;});
	$(document).bind('keydown','v',function(){toggleVersions($('.current').attr('id'));return false;});
	
	//FROM WITHIN SEARCH BAR
	$('.search input').bind('keydown','return',function(){$(this).blur();return false;});
	$('.search input').bind('keydown','esc',function(){$(this).val('');refreshSearch();$(this).blur();return false;});
	//$('.search input').bind('keydown','down',function(){nextNote();return false;});
	//$('.search input').bind('keydown','up',function(){prevNote();return false;});
	
	//FROM WITHIN LABEL SEARCH
	$('.labels input').bind('keydown','esc',function(){$(this).val('');$(this).blur();clearOverlays();return false;});
	$('.labels input').bind('keydown','down',function(){nextLabel();return false;});
	$('.labels input').bind('keydown','up',function(){prevLabel();return false;});
	$('.labels input').bind('keydown','return',function(){filterByLabel($('.label-select .name').text());});
	refreshNoteBinds('.note .textarea textarea');
});

function refreshNoteBinds(note_tas){
	//FROM WITHIN NOTE TEXT AREA
	$(note_tas).bind('keydown','esc',function(){$('.note-directions').removeClass('show');$(this).blur();});
	//$(note_tas).bind('keydown','tab',function(){return false;});
	$(note_tas).tabby();
	// MAXIMIZE BUTTON
	$('.maximize').click(function(){
		fullscreenMode();
	});
	// CHANGE TAG
	$('.tagsinput div input').blur(function(){ // TAG CHANGES NOT TRIGGERING CHANGE EVENT
		//console.log('updating tags');
		updateTags($('.current').attr('id'));
	});
};

// DELETE NOTE
function deleteNote(notekey){
	note = $('#list-' + notekey).data()
	note.deleted = 1;
	note.modifydate = (new Date()).getTime()/1000;
	note.syncnum = note.syncnum + 1;
	localStorage.setItem(note.key,JSON.stringify(note));
	$('#list-' + notekey).remove();
	$('#' + notekey).remove();
	$('.listnote:first').addClass('.selected');
	refreshCards();
};

// CLEAR OVERLAYS
function clearOverlays(){
	$('.show:not(.settings_pane)').removeClass('show');
	fullscreenMode("off")
};

// FULLSCREEN MODE
function fullscreenMode(direction){
	if(direction=="off"){
		$('.fullwindow').removeClass('fullscreen-mode');
		$('.overlay').removeClass('show');
	}
	else if(direction=="on"){
		$('.fullwindow').addClass('fullscreen-mode');
		$('.overlay').addClass('show');		
	}
	else{
		$('.fullwindow').toggleClass('fullscreen-mode');
		$('.overlay').toggleClass('show');
	}
};

// LABELS
function showLabels(){
	if($('.labels').hasClass('show')){
		clearOverlays();
	}
	else{
		fullscreenMode('off');
		populateLabels();
		$('.labels').addClass('show');
		$('.overlay').addClass('show');
		$('.labels input').val("").select();
	};
	return false;
	e.preventDefault();
};
function populateLabels(){
	// remove existing labels
	$('.labels .item').remove();
	// collect labels
	var index = $.parseJSON(localStorage.index),
		i=0,
		j=0,
		len=0,
		taglen=0,
		tag = "",
		labelobj = {};
	for (i=0, len = index.data.length; i < len; i++){
		for (j=0, taglen = index.data[i].tags.length; j < taglen; j++){
			tag = index.data[i].tags[j];
			if(labelobj[tag]){
				labelobj[tag]++;
			}
			else{
				labelobj[tag] = 1;
			};
		};
	};
	// put labels in label box
	for (var key in labelobj) {
		if (labelobj.hasOwnProperty(key)) {
			$('#label-template').clone().attr('id',key).addClass('item').appendTo('.labels .items');
			$('#' + key).children('.name').text(key);
			$('#' + key).children('.notecount').text(labelobj[key] + " notes");
		};
	};
	$('.labels .item').sortElements(function(a, b){
		return parseFloat($(a).children('.notecount').text()) < parseFloat($(b).children('.notecount').text()) ? 1 : -1;
	}); 
};
$(function(){
	$('.labels input').keyup(function(e){
		var key = e.which;
		if(key != 38 && key != 40 && key != 13){
			labelSearch();
		};
	});
});
function labelSearch(){
	query = $('.labels input').val().toLowerCase();
	//console.log(query);
	$('.labels .item').each(function(){
		if ($(this).children('.name').text().toLowerCase().indexOf(query) > -1){
			$(this).removeClass('hide');
		}
		else{
			$(this).addClass('hide');
		};
	});
	$('.label-select').removeClass('label-select');
	$('.labels .item:not(.hide):first').addClass('label-select');
};
function prevLabel(){
	prevOne = $('.label-select').prevAll('.item:not(.hide):first');
	if( prevOne.length > 0 ) {
		$('.label-select').removeClass('label-select');
		prevOne.addClass('label-select');
	};
};
function nextLabel(){
	nextOne = $('.label-select').nextAll('.item:not(.hide):first');
	if( nextOne.length > 0 ) {
		$('.label-select').removeClass('label-select');
		nextOne.addClass('label-select');
	};
};

// MOUSEWHEEL
$(function(){
	mapMousewheel();
});
function mapMousewheel(){
	//console.log('mapping mousewheel');
	return false; // MOUSEWHEEL DISABLED!!
	$('.window').mousewheel(function(event,delta){
		if (delta < 0)
			nextNote();
		else if (delta > 0)
			prevNote();
		return false; // prevent default
	});
};

// SEARCH
$(function(){
	$('.search input').keyup(function(){
		$.debounce(250,refreshSearch());
	});
});
function refreshSearch(){
	query = $('.search input').val().toLowerCase();
	$('.listnote').each(function(){
		if ($(this).data().content.toLowerCase().indexOf(query) > -1){
			$(this).removeClass('hide');
		}
		else{
			$(this).addClass('hide');
		};
	});
	$('.selected').removeClass('selected');
	$('.listnote:not(.hide):first').addClass('selected');
	refreshCards();
};

// TIMEAGO
$(function(){
	bindTimeago();
});
function bindTimeago(){
	$(".timeago").timeago();
};

// MAKE LINKS
function makeLinks(){
	currentTextarea = $('.current .textarea textarea').val();
	$('.current .textarea textarea').val(linkify(currentTextarea));
};
// LINKIFY
function linkify(inputText) {
	var replaceText, replacePattern1, replacePattern2, replacePattern3;
	//URLs starting with http://, https://, or ftp://
	replacePattern1 = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
	replacedText = inputText.replace(replacePattern1, '<a href="$1" target="_blank">$1</a>');
	//URLs starting with www. (without // before it, or it'd re-link the ones done above)
	replacePattern2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
	replacedText = replacedText.replace(replacePattern2, '$1<a href="http://$2" target="_blank">$2</a>');
	//Change email addresses to mailto:: links
	replacePattern3 = /(\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6})/gim;
	replacedText = replacedText.replace(replacePattern3, '<a href="mailto:$1">$1</a>');
	return replacedText
};

function stackTime(epoch_seconds){
	offset_dt = (new Date()).getTimezoneOffset() * 60;
	epoch_num = parseFloat(epoch_seconds);
	time_num = (epoch_num + offset_dt) * 1000;
	time_dt = new Date(epoch_num*1000).toISOString();
	return time_dt;
};

function padzero(n) {
	return n < 10 ? '0' + n : n;
};

function pad2zeros(n) {
	if (n < 100) {
		n = '0' + n;
	}
	if (n < 10) {
		n = '0' + n;
	}
	return n;     
};

function toISOString(d) {
  	return d.getUTCFullYear() + '-' +  padzero(d.getUTCMonth() + 1) + '-' + padzero(d.getUTCDate()) + 'T' + padzero(d.getUTCHours()) + ':' +  padzero(d.getUTCMinutes()) + ':' + padzero(d.getUTCSeconds()) + '.' + pad2zeros(d.getUTCMilliseconds()) + 'Z';
};

function fnToISO() {
	var now = new Date();
	alert(toISOString(now));
};