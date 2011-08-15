// THROTTLE-DEBOUNCE
// http://benalman.com/projects/jquery-throttle-debounce-plugin/
(function(b,c){var $=b.jQuery||b.Cowboy||(b.Cowboy={}),a;$.throttle=a=function(e,f,j,i){var h,d=0;if(typeof f!=="boolean"){i=j;j=f;f=c}function g(){var o=this,m=+new Date()-d,n=arguments;function l(){d=+new Date();j.apply(o,n)}function k(){h=c}if(i&&!h){l()}h&&clearTimeout(h);if(i===c&&m>e){l()}else{if(f!==true){h=setTimeout(i?k:l,i===c?e-m:e)}}}if($.guid){g.guid=j.guid=j.guid||$.guid++}return g};$.debounce=function(d,e,f){return f===c?a(d,e,false):a(d,f,e!==false)}})(this);

// SORTELEMENTS
// http://james.padolsey.com/javascript/sorting-elements-with-jquery/
jQuery.fn.sortElements=function(){var e=[].sort;return function(f,a){var a=a||function(){return this},g=this.map(function(){var b=a.call(this),c=b.parentNode,d=c.insertBefore(document.createTextNode(""),b.nextSibling);return function(){if(c===this)throw Error("You can't sort elements if any one is a descendant of another.");c.insertBefore(this,d);c.removeChild(d)}});return e.call(this,f).each(function(b){g[b].call(a.call(this))})}}();

// JQUERY.TABBY.MIN.JS
// http://teddevito.com/demos/textarea.html
(function(h){h.fn.tabby=function(m){var p=h.extend({},h.fn.tabby.defaults,m),l=h.fn.tabby.pressed;return this.each(function(){$this=h(this);var b=h.meta?h.extend({},p,$this.data()):p;$this.bind("keydown",function(a){var m=h.fn.tabby.catch_kc(a);if(16==m)l.shft=!0;if(17==m)l.ctrl=!0,setTimeout("$.fn.tabby.pressed.ctrl = false;",1E3);if(18==m)l.alt=!0,setTimeout("$.fn.tabby.pressed.alt = false;",1E3);if(9==m&&!l.ctrl&&!l.alt){l.last=m;setTimeout("$.fn.tabby.pressed.last = null;",0);var a=h(a.target).get(0),
i=l.shft,m=a.scrollTop;if(a.setSelectionRange){var d=a.selectionStart,j=a.selectionEnd;if(d==j)if(i)if("\t"==a.value.substring(d-b.tabString.length,d))a.value=a.value.substring(0,d-b.tabString.length)+a.value.substring(d),a.focus(),a.setSelectionRange(d-b.tabString.length,d-b.tabString.length);else{if("\t"==a.value.substring(d,d+b.tabString.length))a.value=a.value.substring(0,d)+a.value.substring(d+b.tabString.length),a.focus(),a.setSelectionRange(d,d)}else a.value=a.value.substring(0,d)+b.tabString+
a.value.substring(d),a.focus(),a.setSelectionRange(d+b.tabString.length,d+b.tabString.length);else{var e=a.value.split("\n"),f=[],g=0,k=0,c;for(c in e)k=g+e[c].length,f.push({start:g,end:k,selected:g<=d&&k>d||k>=j&&g<j||g>d&&k<j}),g=k+1;e=0;for(c in f)if(f[c].selected)if(g=f[c].start+e,i&&b.tabString==a.value.substring(g,g+b.tabString.length))a.value=a.value.substring(0,g)+a.value.substring(g+b.tabString.length),e-=b.tabString.length;else if(!i)a.value=a.value.substring(0,g)+b.tabString+a.value.substring(g),
e+=b.tabString.length;a.focus();a.setSelectionRange(d+(e>0?b.tabString.length:e<0?-b.tabString.length:0),j+e)}}else if(document.selection&&(c=document.selection.createRange(),a==c.parentElement()))if(""==c.text){if(i){i=c.getBookmark();c.moveStart("character",-b.tabString.length);if(b.tabString==c.text)c.text="";else if(c.moveToBookmark(i),c.moveEnd("character",b.tabString.length),b.tabString==c.text)c.text="";c.collapse(!0)}else c.text=b.tabString,c.collapse(!1);c.select()}else{j=c.text;d=j.length;
f=j.split("\r\n");j=document.body.createTextRange();j.moveToElementText(a);j.setEndPoint("EndToStart",c);g=j.text;e=g.split("\r\n");g=g.length;k=document.body.createTextRange();k.moveToElementText(a);k.setEndPoint("StartToEnd",c);var k=k.text,o=document.body.createTextRange();o.moveToElementText(a);o.setEndPoint("StartToEnd",j);var n=o.text,o=h(a).html();h("#r3").text(g+" + "+d+" + "+k.length+" = "+o.length);g+n.length<o.length?(e.push(""),g+=2,i&&b.tabString==f[0].substring(0,b.tabString.length)?
f[0]=f[0].substring(b.tabString.length):i||(f[0]=b.tabString+f[0])):i&&b.tabString==e[e.length-1].substring(0,b.tabString.length)?e[e.length-1]=e[e.length-1].substring(b.tabString.length):i||(e[e.length-1]=b.tabString+e[e.length-1]);for(n=1;n<f.length;n++)i&&b.tabString==f[n].substring(0,b.tabString.length)?f[n]=f[n].substring(b.tabString.length):i||(f[n]=b.tabString+f[n]);1==e.length&&0==g&&(i&&b.tabString==f[0].substring(0,b.tabString.length)?f[0]=f[0].substring(b.tabString.length):i||(f[0]=b.tabString+
f[0]));g+d+k.length<o.length&&f.push("");j.text=e.join("\r\n");c.text=f.join("\r\n");i=document.body.createTextRange();i.moveToElementText(a);0<g?i.setEndPoint("StartToEnd",j):i.setEndPoint("StartToStart",j);i.setEndPoint("EndToEnd",c);i.select()}a.scrollTop=m;return!1}}).bind("keyup",function(a){if(16==h.fn.tabby.catch_kc(a))l.shft=!1}).bind("blur",function(a){9==l.last&&h(a.target).one("focus",function(){l.last=null}).get(0).focus()})})};h.fn.tabby.catch_kc=function(h){return h.keyCode?h.keyCode:
h.charCode?h.charCode:h.which};h.fn.tabby.pressed={shft:!1,ctrl:!1,alt:!1,last:null};h.fn.tabby.defaults={tabString:String.fromCharCode(9)}})(jQuery);

// TAG-IT
// http://aehlke.github.com/tag-it/
(function(b){b.widget("ui.tagit",{options:{itemName:"item",fieldName:"tags",availableTags:[],tagSource:null,removeConfirmation:!1,caseSensitive:!0,allowSpaces:!1,singleField:!1,singleFieldDelimiter:",",singleFieldNode:null,tabIndex:null,onTagAdded:null,onTagRemoved:null,onTagClicked:null},_create:function(){var a=this;this.element.is("input")?(this.tagList=b("<ul></ul>").insertAfter(this.element),this.options.singleField=!0,this.options.singleFieldNode=this.element,this.element.css("display","none")):
this.tagList=this.element.find("ul, ol").andSelf().last();this._tagInput=b('<input type="text" placeholder="add tag">').addClass("ui-widget-content");this.options.tabIndex&&this._tagInput.attr("tabindex",this.options.tabIndex);this.options.tagSource=this.options.tagSource||function(e,c){var d=e.term.toLowerCase(),g=b.grep(a.options.availableTags,function(a){return a.toLowerCase().indexOf(d)===0});c(a._subtractArray(g,a.assignedTags()))};this.tagList.addClass("tagit").addClass("ui-widget ui-widget-content ui-corner-all").append(b('<li class="tagit-new"></li>').append(this._tagInput)).click(function(e){var c=
b(e.target);c.hasClass("tagit-label")?a._trigger("onTagClicked",e,c.closest(".tagit-choice")):a._tagInput.focus()});this.tagList.children("li").each(function(){b(this).hasClass("tagit-new")||(a.createTag(b(this).html(),b(this).attr("class")),b(this).remove())});if(this.options.singleField)if(this.options.singleFieldNode){var c=b(this.options.singleFieldNode),d=c.val().split(this.options.singleFieldDelimiter);c.val("");b.each(d,function(b,c){a.createTag(c)})}else this.options.singleFieldNode=this.tagList.after('<input type="hidden" style="display:none;" value="" name="'+
this.options.fieldName+'">');this._tagInput.keydown(function(c){if(c.which==b.ui.keyCode.BACKSPACE&&a._tagInput.val()===""){var d=a._lastTag();!a.options.removeConfirmation||d.hasClass("remove")?a.removeTag(d):a.options.removeConfirmation&&d.addClass("remove ui-state-highlight")}else a.options.removeConfirmation&&a._lastTag().removeClass("remove ui-state-highlight");if(c.which==b.ui.keyCode.COMMA||c.which==b.ui.keyCode.ENTER||c.which==b.ui.keyCode.TAB&&a._tagInput.val()!==""||c.which==b.ui.keyCode.SPACE&&
a.options.allowSpaces!==!0&&(b.trim(a._tagInput.val()).replace(/^s*/,"").charAt(0)!='"'||b.trim(a._tagInput.val()).charAt(0)=='"'&&b.trim(a._tagInput.val()).charAt(b.trim(a._tagInput.val()).length-1)=='"'&&b.trim(a._tagInput.val()).length-1!==0))c.preventDefault(),a.createTag(a._cleanedInput()),a._tagInput.autocomplete("close")}).blur(function(){a.createTag(a._cleanedInput())});(this.options.availableTags||this.options.tagSource)&&this._tagInput.autocomplete({source:this.options.availableTags,select:function(b,
c){a._tagInput.val()===""&&a.removeTag(a._lastTag(),!1);a.createTag(c.item.value);return!1},position:{my:"left bottom",at:"left top",offset:"3 -5"}})},_cleanedInput:function(){return b.trim(this._tagInput.val().replace(/^"(.*)"$/,"$1"))},_lastTag:function(){return this.tagList.children(".tagit-choice:last")},assignedTags:function(){var a=this,c=[];this.options.singleField?(c=b(this.options.singleFieldNode).val().split(this.options.singleFieldDelimiter),c[0]===""&&(c=[])):this.tagList.children(".tagit-choice").each(function(){c.push(a.tagLabel(this))});
return c},_updateSingleTagsField:function(a){b(this.options.singleFieldNode).val(a.join(this.options.singleFieldDelimiter))},_subtractArray:function(a,c){for(var d=[],e=0;e<a.length;e++)b.inArray(a[e],c)==-1&&d.push(a[e]);return d},tagLabel:function(a){return this.options.singleField?b(a).children(".tagit-label").text():b(a).children("input").val()},_isNew:function(a){var b=this,d=!0;this.tagList.children(".tagit-choice").each(function(){if(b._formatStr(a)==b._formatStr(b.tagLabel(this)))return d=
!1});return d},_formatStr:function(a){if(this.options.caseSensitive)return a;return b.trim(a.toLowerCase())},createTag:function(a,c){that=this;a=b.trim(a);if(!this._isNew(a)||a==="")return!1;var d=b(this.options.onTagClicked?'<a class="tagit-label"></a>':'<span class="tagit-label"></span>').text(a),e=b("<li></li>").addClass("tagit-choice ui-widget-content ui-state-default ui-corner-all").addClass(c).append(d),f=b("<span></span>").addClass("ui-icon ui-icon-close"),f=b('<a><span class="text-icon">\u00d7</span></a>').addClass("close").append(f).click(function(){that.removeTag(e)});
e.append(f);this.options.singleField?(d=this.assignedTags(),d.push(a),this._updateSingleTagsField(d)):(d=d.html(),e.append('<input type="hidden" style="display:none;" value="'+d+'" name="'+this.options.itemName+"["+this.options.fieldName+'][]">'));this._trigger("onTagAdded",null,e);this._tagInput.val("");this._tagInput.parent().before(e)},removeTag:function(a,c){typeof c==="undefined"&&(c=!0);a=b(a);this._trigger("onTagRemoved",null,a);if(this.options.singleField){var d=this.assignedTags(),e=this.tagLabel(a),
d=b.grep(d,function(a){return a!=e});this._updateSingleTagsField(d)}c?a.fadeOut("fast").hide("blind",{direction:"horizontal"},"fast",function(){a.remove()}).dequeue():a.remove()},removeAll:function(){var a=this;this.tagList.children(".tagit-choice").each(function(b,d){a.removeTag(d,!1)})}})})(jQuery);

// TIMEAGO
// http://timeago.yarp.com/
(function(d){function i(){var a;a=d(this);if(!a.data("timeago")){a.data("timeago",{datetime:e.datetime(a)});var b=d.trim(a.text());b.length>0&&a.attr("title",b)}a=a.data("timeago");isNaN(a.datetime)||d(this).text(f(a.datetime));return this}function f(a){return e.inWords((new Date).getTime()-a.getTime())}d.timeago=function(a){return a instanceof Date?f(a):typeof a==="string"?f(d.timeago.parse(a)):f(d.timeago.datetime(a))};var e=d.timeago;d.extend(d.timeago,{settings:{refreshMillis:6E4,allowFuture:!1,
strings:{prefixAgo:null,prefixFromNow:null,suffixAgo:"ago",suffixFromNow:"from now",seconds:"less than a minute",minute:"about a minute",minutes:"%d minutes",hour:"about an hour",hours:"about %d hours",day:"a day",days:"%d days",month:"about a month",months:"%d months",year:"about a year",years:"%d years",numbers:[]}},inWords:function(a){function b(b,e){return(d.isFunction(b)?b(e,a):b).replace(/%d/i,c.numbers&&c.numbers[e]||e)}var c=this.settings.strings,e=c.prefixAgo,f=c.suffixAgo;if(this.settings.allowFuture){if(a<
0)e=c.prefixFromNow,f=c.suffixFromNow;a=Math.abs(a)}var g=a/1E3,j=g/60,k=j/60,h=k/24,i=h/365,g=g<45&&b(c.seconds,Math.round(g))||g<90&&b(c.minute,1)||j<45&&b(c.minutes,Math.round(j))||j<90&&b(c.hour,1)||k<24&&b(c.hours,Math.round(k))||k<48&&b(c.day,1)||h<30&&b(c.days,Math.floor(h))||h<60&&b(c.month,1)||h<365&&b(c.months,Math.floor(h/30))||i<2&&b(c.year,1)||b(c.years,Math.floor(i));return d.trim([e,g,f].join(" "))},parse:function(a){a=d.trim(a);a=a.replace(/\.\d\d\d+/,"");a=a.replace(/-/,"/").replace(/-/,
"/");a=a.replace(/T/," ").replace(/Z/," UTC");a=a.replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2");return new Date(a)},datetime:function(a){a=d(a).get(0).tagName.toLowerCase()==="time"?d(a).attr("datetime"):d(a).attr("title");return e.parse(a)}});d.fn.timeago=function(){var a=this;a.each(i);var b=e.settings;b.refreshMillis>0&&setInterval(function(){a.each(i)},b.refreshMillis);return a};document.createElement("abbr");document.createElement("time")})(jQuery);

// JQHOTKEYS (Keyboard shortcuts)
// https://github.com/jeresig/jquery.hotkeys
(function(d){function h(g){if(typeof g.data==="string"){var h=g.handler,i=g.data.toLowerCase().split(" ");g.handler=function(a){if(!(this!==a.target&&(/textarea|select/i.test(a.target.nodeName)||a.target.type==="text"))){var b=a.type!=="keypress"&&d.hotkeys.specialKeys[a.which],e=String.fromCharCode(a.which).toLowerCase(),c="",f={};a.altKey&&b!=="alt"&&(c+="alt+");a.ctrlKey&&b!=="ctrl"&&(c+="ctrl+");a.metaKey&&!a.ctrlKey&&b!=="meta"&&(c+="meta+");a.shiftKey&&b!=="shift"&&(c+="shift+");b?f[c+b]=!0:
(f[c+e]=!0,f[c+d.hotkeys.shiftNums[e]]=!0,c==="shift+"&&(f[d.hotkeys.shiftNums[e]]=!0));b=0;for(e=i.length;b<e;b++)if(f[i[b]])return h.apply(this,arguments)}}}}d.hotkeys={version:"0.8",specialKeys:{8:"backspace",9:"tab",13:"return",16:"shift",17:"ctrl",18:"alt",19:"pause",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"insert",46:"del",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9",106:"*",107:"+",
109:"-",110:".",111:"/",112:"f1",113:"f2",114:"f3",115:"f4",116:"f5",117:"f6",118:"f7",119:"f8",120:"f9",121:"f10",122:"f11",123:"f12",144:"numlock",145:"scroll",191:"/",224:"meta"},shiftNums:{"`":"~",1:"!",2:"@",3:"#",4:"$",5:"%",6:"^",7:"&",8:"*",9:"(",0:")","-":"_","=":"+",";":": ","'":'"',",":"<",".":">","/":"?","\\":"|"}};d.each(["keydown","keyup","keypress"],function(){d.event.special[this]={add:h}})})(jQuery);

// DIFF_MATCH_PATCH
// http://code.google.com/p/google-diff-match-patch/
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

// PAGEDOWN (Markdown handler)
// http://code.google.com/p/pagedown/
var Markdown;Markdown=typeof exports==="object"&&typeof require==="function"?exports:{};
(function(){function q(d){return d}function s(){return!1}function t(){}function u(){}t.prototype={chain:function(d,h){var j=this[d];if(!j)throw Error("unknown hook "+d);this[d]=j===q?h:function(d){return h(j(d))}},set:function(d,h){if(!this[d])throw Error("unknown hook "+d);this[d]=h},addNoop:function(d){this[d]=q},addFalse:function(d){this[d]=s}};Markdown.HookCollection=t;u.prototype={set:function(d,h){this["s_"+d]=h},get:function(d){return this["s_"+d]}};Markdown.Converter=function(){function d(a){return a=
a.replace(/^[ ]{0,3}\[(.+)\]:[ \t]*\n?[ \t]*<?(\S+?)>?(?=\s|$)[ \t]*\n?[ \t]*((\n*)["(](.+?)[")][ \t]*)?(?:\n+)/gm,function(a,b,c,f,F,d){b=b.toLowerCase();k.set(b,z(c));if(F)return f;else d&&l.set(b,d.replace(/"/g,"&quot;"));return""})}function h(a){a=a.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del)\b[^\r]*?\n<\/\2>[ \t]*(?=\n+))/gm,j);a=a.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math)\b[^\r]*?.*<\/\2>[ \t]*(?=\n+)\n)/gm,
j);a=a.replace(/\n[ ]{0,3}((<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,j);a=a.replace(/\n\n[ ]{0,3}(<!(--(?:|(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>[ \t]*(?=\n{2,}))/g,j);return a=a.replace(/(?:\n\n)([ ]{0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,j)}function j(a,e){var b;b=e.replace(/^\n+/,"");b=b.replace(/\n+$/g,"");return b="\n\n~K"+(o.push(b)-1)+"K\n\n"}function v(a,e){var a=s(a),a=a.replace(/^[ ]{0,2}([ ]?\*[ ]?){3,}[ \t]*$/gm,"<hr />\n"),a=a.replace(/^[ ]{0,2}([ ]?-[ ]?){3,}[ \t]*$/gm,"<hr />\n"),
a=a.replace(/^[ ]{0,2}([ ]?_[ ]?){3,}[ \t]*$/gm,"<hr />\n"),a=A(a),a=G(a),a=H(a),a=h(a),b;b=a.replace(/^\n+/g,"");b=b.replace(/\n+$/g,"");var c=b.split(/\n{2,}/g);b=[];for(var f=c.length,d=0;d<f;d++){var i=c[d];i.search(/~K(\d+)K/g)>=0?b.push(i):i.search(/\S/)>=0&&(i=p(i),i=i.replace(/^([ \t]*)/g,"<p>"),i+="</p>",b.push(i))}if(!e){f=b.length;for(d=0;d<f;d++)for(;b[d].search(/~K(\d+)K/)>=0;)c=o[RegExp.$1],c=c.replace(/\$/g,"$$$$"),b[d]=b[d].replace(/~K\d+K/,c)}return a=b.join("\n\n")}function p(a){a=
I(a);a=q(a);a=a.replace(/\\(\\)/g,w);a=a.replace(/\\([`*_{}\[\]()>#+-.!])/g,w);a=a.replace(/(!\[(.*?)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g,B);a=a.replace(/(!\[(.*?)\]\s?\([ \t]*()<?(\S+?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g,B);a=a.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g,x);a=a.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\]\([ \t]*()<?((?:\([^)]*\)|[^()])*?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g,x);a=a.replace(/(\[([^\[\]]+)\])()()()()()/g,x);a=J(a);a=z(a);a=a.replace(/([\W_]|^)(\*\*|__)(?=\S)([^\r]*?\S[\*_]*)\2([\W_]|$)/g,
"$1<strong>$3</strong>$4");a=a.replace(/([\W_]|^)(\*|_)(?=\S)([^\r\*_]*?\S)\2([\W_]|$)/g,"$1<em>$3</em>$4");return a=a.replace(/  +\n/g," <br>\n")}function q(a){return a=a.replace(/(<[a-z\/!$]("[^"]*"|'[^']*'|[^'">])*>|<!(--(?:|(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>)/gi,function(a){var b=a.replace(/(.)<\/?code>(?=.)/g,"$1`");return b=m(b,a.charAt(1)=="!"?"\\`*_/":"\\`*_")})}function x(a,e,b,c,f,d,i,g){g==void 0&&(g="");a=c.toLowerCase();if(f=="")if(a==""&&(a=b.toLowerCase().replace(/ ?\n/g," ")),k.get(a)!=
void 0)f=k.get(a),l.get(a)!=void 0&&(g=l.get(a));else if(e.search(/\(\s*\)$/m)>-1)f="";else return e;f=K(f);f=m(f,"*_");e='<a href="'+f+'"';g!=""&&(g=g.replace(/"/g,"&quot;"),g=m(g,"*_"),e+=' title="'+g+'"');e+=">"+b+"</a>";return e}function B(a,e,b,c,f,d,i,g){a=b;c=c.toLowerCase();g||(g="");if(f=="")if(c==""&&(c=a.toLowerCase().replace(/ ?\n/g," ")),k.get(c)!=void 0)f=k.get(c),l.get(c)!=void 0&&(g=l.get(c));else return e;a=a.replace(/"/g,"&quot;");f=m(f,"*_");e='<img src="'+f+'" alt="'+a+'"';g=g.replace(/"/g,
"&quot;");g=m(g,"*_");e+=' title="'+g+'"';e+=" />";return e}function s(a){a=a.replace(/^(.+)[ \t]*\n=+[ \t]*\n+/gm,function(a,b){return"<h1>"+p(b)+"</h1>\n\n"});a=a.replace(/^(.+)[ \t]*\n-+[ \t]*\n+/gm,function(a,b){return"<h2>"+p(b)+"</h2>\n\n"});return a=a.replace(/^(\#{1,6})[ \t]*(.+?)[ \t]*\#*\n+/gm,function(a,b,c){a=b.length;return"<h"+a+">"+p(c)+"</h"+a+">\n\n"})}function A(a){a+="~0";var e=/^(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm;r?a=a.replace(e,
function(a,c,e){a=e.search(/[*+-]/g)>-1?"ul":"ol";c=C(c,a);c=c.replace(/\s+$/,"");return"<"+a+">"+c+"</"+a+">\n"}):(e=/(\n\n|^\n?)(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/g,a=a.replace(e,function(a,c,e,d){a=d.search(/[*+-]/g)>-1?"ul":"ol";e=C(e,a);return c+"<"+a+">\n"+e+"</"+a+">\n"}));return a=a.replace(/~0/,"")}function C(a,e){r++;a=a.replace(/\n{2,}$/,"\n");a+="~0";var b=L[e],c=!1,a=a.replace(RegExp("(^[ \\t]*)("+b+")[ \\t]+([^\\r]+?(\\n+))(?=(~0|\\1("+
b+")[ \\t]+))","gm"),function(a,b,e,d){a=d;(b=/\n\n$/.test(a))||a.search(/\n{2,}/)>-1||c?a=v(y(a),!0):(a=A(y(a)),a=a.replace(/\n$/,""),a=p(a));c=b;return"<li>"+a+"</li>\n"}),a=a.replace(/~0/g,"");r--;return a}function G(a){a+="~0";a=a.replace(/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=~0))/g,function(a,b,c){a=D(y(b));a=E(a);a=a.replace(/^\n+/g,"");a=a.replace(/\n+$/g,"");return"\n\n"+("<pre><code>"+a+"\n</code></pre>")+"\n\n"+c});return a=a.replace(/~0/,"")}function M(a){a=a.replace(/(^\n+|\n+$)/g,
"");return"\n\n~K"+(o.push(a)-1)+"K\n\n"}function I(a){return a=a.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,function(a,b,c,d){a=d.replace(/^([ \t]*)/g,"");a=a.replace(/[ \t]*$/g,"");a=D(a);return b+"<code>"+a+"</code>"})}function D(a){a=a.replace(/&/g,"&amp;");a=a.replace(/</g,"&lt;");a=a.replace(/>/g,"&gt;");return a=m(a,"*_{}[]\\",!1)}function H(a){return a=a.replace(/((^[ \t]*>[ \t]?.+\n(.+\n)*\n*)+)/gm,function(a,b){var c;c=b.replace(/^[ \t]*>[ \t]?/gm,"~0");c=c.replace(/~0/g,"");c=c.replace(/^[ \t]+$/gm,
"");c=v(c);c=c.replace(/(^|\n)/g,"$1  ");c=c.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm,function(a,b){var c;c=b.replace(/^  /mg,"~0");return c=c.replace(/~0/g,"")});return M("<blockquote>\n"+c+"\n</blockquote>")})}function z(a){a=a.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g,"&amp;");return a=a.replace(/<(?![a-z\/?\$!])/gi,"&lt;")}function J(a){a=a.replace(/(^|\s)(https?|ftp)(:\/\/[-A-Z0-9+&@#\/%?=~_|\[\]\(\)!:,\.;]*[-A-Z0-9+&@#\/%=~_|\[\]])($|\W)/gi,"$1<$2$3>$4");return a=a.replace(/<((https?|ftp):[^'">\s]+)>/gi,
function(a,b){return'<a href="'+b+'">'+n.plainLinkText(b)+"</a>"})}function N(a){return a=a.replace(/~E(\d+)E/g,function(a,b){var c=parseInt(b);return String.fromCharCode(c)})}function y(a){a=a.replace(/^(\t|[ ]{1,4})/gm,"~0");return a=a.replace(/~0/g,"")}function E(a){if(!/\t/.test(a))return a;var d=["    ","   ","  "," "],b=0,c;return a.replace(/[\n\t]/g,function(a,h){if(a==="\n")return b=h+1,a;c=(h-b)%4;b=h+1;return d[c]})}function K(a){if(!a)return"";var d=a.length;return a.replace(O,function(b,
c){if(b=="~D")return"%24";if(b==":"&&(c==d-1||/[0-9\/]/.test(a.charAt(c+1))))return":";return"%"+b.charCodeAt(0).toString(16)})}function m(a,d,b){d="(["+d.replace(/([\[\]\\])/g,"\\$1")+"])";b&&(d="\\\\"+d);return a=a.replace(RegExp(d,"g"),w)}function w(a,d){return"~E"+d.charCodeAt(0)+"E"}var n=this.hooks=new t;n.addNoop("plainLinkText");n.addNoop("preConversion");n.addNoop("postConversion");var k,l,o,r;this.makeHtml=function(a){if(k)throw Error("Recursive call to converter.makeHtml");k=new u;l=new u;
o=[];r=0;a=n.preConversion(a);a=a.replace(/~/g,"~T");a=a.replace(/\$/g,"~D");a=a.replace(/\r\n/g,"\n");a=a.replace(/\r/g,"\n");a=E("\n\n"+a+"\n\n");a=a.replace(/^[ \t]+$/mg,"");a=h(a);a=d(a);a=v(a);a=N(a);a=a.replace(/~D/g,"$$");a=a.replace(/~T/g,"~");a=n.postConversion(a);o=l=k=null;return a};var L={ol:"\\d+[.]",ul:"[*+-]"},O=/(?:["'*()[\]:]|~D)/g}})();

// NOTESTACK CODE
// http://notestack.me
var notestack = function() {

	// JQUERY NO-CONFLICT
	$ = jQuery.noConflict();

// =====================
//    BASIC UTILITIES
// =====================

	// CLEAR OVERLAYS
	var clearOverlays = function() {
		$('.show:not(.settings_pane)').removeClass('show');
		fullscreenMode("off")
	};
	
	// FULLSCREEN MODE
	var fullscreenMode = function(direction){
		if(direction=="off"){
			$('html body').removeClass('fullscreen-mode');
			$('.overlay').removeClass('show');
		}
		else if(direction=="on"){
			$('html body').addClass('fullscreen-mode');
			$('.overlay').addClass('show');		
		}
		else{
			$('html body').toggleClass('fullscreen-mode');
			$('.overlay').toggleClass('show');
		};
	};
	
	// SEARCH
	var refreshSearch = function() {
		query = $('.search input').val().toLowerCase();
		//console.log(query);
		$('.listnote').each(function(){
			if ($(this).data().content.toLowerCase().indexOf(query) > -1){
				$(this).removeClass('search-hide');
			}
			else{
				$(this).addClass('search-hide');
			};
		});
		if($('.selected:not(.search-hide,.tag-hide)').length==0){
			$('.selected').removeClass('selected');
			$('.listnote:not(.search-hide,.tag-hide):first').addClass('selected');
		};
		refreshCards();
	};

	// STORE/ACCESS DATA
	var getData = function(key) {
		if (storage=='localStorage'){
			return localStorage[key];
		}
		else{
			return sessionStorage[key];
		};
	};
	var setData = function(key, val) {
		if (storage=='localStorage'){
			localStorage[key] = val;
		}
		else{
			sessionStorage[key] = val;
		};
	};
	
	// PROGRESS BAR
	var progressBar = function(percent,callback){
		if($('.status .progress .inner').length==0){
			$('.status').html(
				'<div class="progress"><div class="inner"></div></div>'
			);
		};
		$('.status .progress .inner').animate({'width': percent + '%'},250,callback);
	};
	
	// THROTTLED PROGRESS BAR
	var throttledProgress = $.throttle(500, true, progressBar);
	
	// TIMEAGO
	var bindTimeago = function() {
		$(".timeago").timeago();
	};
	
	// NEWLINE TO BR
	var nl2br = function(str) {     
		return str.replace(/\n/g,"<br>").replace(/\r/g,"");
	};
	
	// STACK TIME
	var stackTime = function(epoch_seconds){
		epoch_num = parseFloat(epoch_seconds);
		time_dt = new Date(epoch_num*1000).toISOString();
		return time_dt;
	};
	var padzero = function(n) {
		return n < 10 ? '0' + n : n;
	};
	var pad2zeros = function(n) {
		if (n < 100) {
			n = '0' + n;
		}
		if (n < 10) {
			n = '0' + n;
		}
		return n;     
	};
	var toISOString = function(d) {
	  	return d.getUTCFullYear() + '-' +  padzero(d.getUTCMonth() + 1) + '-' + padzero(d.getUTCDate()) + 'T' + padzero(d.getUTCHours()) + ':' +  padzero(d.getUTCMinutes()) + ':' + padzero(d.getUTCSeconds()) + '.' + pad2zeros(d.getUTCMilliseconds()) + 'Z';
	};

// ===================
//    NOTE HANDLING
// ===================

	// REFLOW CARDS
	var reflowCards = function() {
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
	var refreshCards = function() {
		//console.log('refreshing cards');
		if($('.selected').length != 1){
			$('.selected').removeClass('selected');
			$('.listnote:first').addClass('selected');
		};
		$('.note').remove();
		var allTagsObj = $.parseJSON(localStorage.tagIndex).tags;
		var allTagsArr = [];
		for (var i in allTagsObj){
			allTagsArr.push(allTagsObj[i].name);
		};
		//console.log(allTagsArr);
		$('.listnote:not(.search-hide,.tag-hide)').each(function(){
			// clone template into note card
			var thisdata = $(this).data();
			$('#note-template').clone().attr('id', thisdata.key).addClass('note').appendTo('.window');
			var notecard = $('#' + thisdata.key);
			// add content to textarea
			notecard.children('.textarea').children('textarea').val(thisdata.content);
			// populate tags
			var tagStr = thisdata.tags.join(' ');
			tagfield = notecard.children('.textarea').children('.tag-area').children('input');
			tagfield.val(tagStr);
			tagfield.tagit({
				"singleFieldDelimiter": " ",
				"availableTags": allTagsArr
			}).tagit({
				"onTagAdded": function(event, tag) {
					updateTags($('.current').attr('id'));
				},
				"onTagRemoved": function(event, tag) {
					tagName = tag.children('.tagit-label').text();
					updateTags($('.current').attr('id'), tagName);					
				}
			});
			if($.inArray("markdown",thisdata.systemtags)>-1){
				toggleMarkdown(thisdata.key,'on');
			};
		});
		$('#' + $('.selected').data().key).addClass('current');
		refreshNoteBinds('.note .textarea textarea');
		reflowCards();
	};
	
	// KEY AND CLICK BINDINGS FOR NOTE CARDS
	var refreshNoteBinds = function(note_tas){
		//FROM WITHIN NOTE TEXT AREA
		$(note_tas).bind('keydown','esc',function(){$('.note-directions').removeClass('show');$(this).blur();});
		$(note_tas).tabby();
		// MAXIMIZE BUTTON
		$('.maximize').click(function(){
			fullscreenMode();
		});
		// ON TAG CHANGE
		$('.tagsinput div input').blur(function(){ 
			updateTags($('.current').attr('id'));
		});
	};
	
	// SORT NOTES: PINNED, THEN MODIFIED
	var sortNotes = function() {
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
	
	// NEXT NOTE
	var nextNote = function() { 
		//console.log('nextNote ' + $('.selected').nextAll('.listnote:not(.hide):first').length);
		nextOne = $('.selected').nextAll('.listnote:not(.search-hide,.tag-hide):first');
		if(nextOne.length > 0 ) {
			$('.selected').removeClass('selected');
			nextOne.addClass('selected');
			$('.current').removeClass('current').next('.note').addClass('current');
			reflowCards();
			scrollto();
		};
	};
	
	// PREVIOUS NOTE
	var prevNote = function() {
		//console.log('prevNote');
		prevOne = $('.selected').prevAll('.listnote:not(.search-hide,.tag-hide):first')
		if(prevOne.length>0) {
			$('.selected').removeClass('selected');
			prevOne.addClass('selected');
			$('.current').removeClass('current').prev('.note').addClass('current');
			reflowCards();
			scrollto();
		};
	};
	
	// TOGGLE MARKDOWN
	var toggleMarkdown = function(notekey, direction, temp) {
		notekey = notekey ? notekey : $('.current').attr('id');
		if(direction == undefined){
			if($('#' + notekey).hasClass('markdown-on')){
				direction = 'off';
			}
			else{
				direction = 'on';
			};
		};
		if(temp != 'temp') temp = 'stick';
		var notecard = $('#' + notekey);
		var listnote = $('#list-' + notekey);
		var listnotedata = listnote.data();
		var ta_div = notecard.children('.textarea');
		if(direction == 'on'){
			notecard.removeClass('markdown-off').addClass('markdown-on');
			var converter = new Markdown.Converter();
			var markhtml = converter.makeHtml('# ' + ta_div.children('textarea').val());
			//markhtml = nl2br(markhtml);
			ta_div.children('textarea').replaceWith('<div class="markdown">' + markhtml + '</div>');
			ta_div.children('.markdown').children('h1:first').addClass('first-h1');
			ta_div.children('.markdown').children('p').each(function(){
				$(this).html(nl2br($(this).html()));
			});
			if($.inArray('markdown',listnotedata.systemtags)<0){
				listnotedata.systemtags.push('markdown');
				listnotedata.syncnum++;
				localStorage.setItem(listnotedata.key,JSON.stringify(listnote.data()));
				localToDOM(listnotedata.key);
				manualSync();
			};
		}
		else if(direction == 'off'){
			notecard.removeClass('markdown-on').addClass('markdown-off');
			var notecontent = listnotedata.content;
			ta_div.children('.markdown').replaceWith('<textarea>' + notecontent + '</textarea>');
			refreshNoteBinds(ta_div.children('textarea'));
			if(temp == 'stick'){
				var mk = indexOf('markdown',listnote.data().systemtags);
				if(mk>-1) listnotedata.systemtags.splice(mk,1);
				listnotedata.syncnum++;
				localStorage.setItem(listnotedata.key,JSON.stringify(listnote.data()));
				localToDOM(listnotedata.key);
				manualSync();
			};
		};
	};
	
	// TOGGLE PIN
	var togglePin = function(listitem) {
		if(listitem == undefined){
			if($('.selected').length>-1){
				listitem = $('.selected');
			};
		};
		if(listitem.data().systemtags.indexOf('pinned')>-1){
			// already pinned, remove pin
			listitem.data().systemtags.splice(listitem.data().systemtags.indexOf('pinned'),1);
		}
		else{
			// not pinned, add pin
			listitem.data().systemtags.push('pinned');
		};
		listitem.data().syncnum = listitem.data().syncnum + 1;
		localStorage.setItem( listitem.data().key, JSON.stringify( listitem.data() ) );
		localToDOM( listitem.data().key );
		sortNotes();
		refreshCards();
	};
	
	// CREATE NEW NOTE
	var createNote = function() {
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
	
	// DELETE NOTE
	var deleteNote = function(notekey) {
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
	
	// SCROLL TO SELECTED NOTE
	var scrollto = function(){
		if($('.selected').position().top < 0){
			$('.list').scrollTop($('.list').scrollTop() + $('.selected').position().top);
		};
		if($('.selected').position().top + $('.listnote').height() > $('.list').height()){
			$('.list').scrollTop($('.list').scrollTop() + $('.selected').position().top - $('.list').height() + $('.listnote').height());
		};
	};
	
	// VIEW ALL NOTES (UNFILTER)
	var viewAll = function(){
		$('html body').removeClass('tag-filter');
		$('.active-tag-filter').remove();
		$('.listnote').removeClass('tag-hide');
		$('.selected').removeClass('selected');
		$('.listnote:not(.search-hide,.tag-hide):first').addClass('selected');
		$('.search input').val('');
		refreshSearch();
	};

// ==============
//    VERSIONS
// ==============
	
	// SORT VERSIONS
	var sortVersions = function() {
		$('.version-item').sortElements(function(a, b){
			return parseFloat($(a).data('version')) < parseFloat($(b).data('version')) ? 1 : -1;
		}); 
		return "sorted";
	};
	
	// DIFF VERSIONS
	var diffVersions = function(fromtext,totext){
		var dmp = new diff_match_patch();
	  	var d = dmp.diff_main(fromtext, totext);
	  	dmp.diff_cleanupSemantic(d);
	  	var ds = dmp.diff_prettyHtml(d);
		return ds;
	};
	
	// GET VERSION OF NOTE
	var getNoteVersion = function(notekey,version){
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
	var populateVersions = function(notekey){
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
					ds = diffVersions($('#' + notekey + "version" + prev ).data().content,$(this).data().content);
					$(this).data('diff',ds);
				}
				else if ($(this).data().version == minversion){
					$(this).data('diff',$(this).data().content);
				};
			});
			$('.versions-right .right-inner').html($('.version-item:first').data().diff);
			$('.version-item:first').addClass('version-select');
		});
	};
	
	// TOGGLE SHOWING OF VERSIONS WINDOW
	var toggleVersions = function(notekey){
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

// ===================
//    TAGS / LABELS
// ===================
	
	// GET TAG INDEX
	var getTagIndex = function(){
		return $.Deferred(function(dfd_tag){
			postData = {
				'action': 'tagIndex',
				'email': localStorage.email,
				'token': localStorage.token
			};
			//console.log('starting tagIndex pull');
			$.ajax('/sn.php',{
				type: 'POST',
				data: postData,
				timeout: 3000,
				success: function(rawTagIndex){
					if(rawTagIndex=='401'){
						window.location = '/?login=expired';
					};
					localStorage['tagIndex'] = rawTagIndex;
					//console.log('stored tagIndex')
					dfd_tag.resolve();
				},
				error: function(msg){
					$('.status').text('Working offline. Changes will sync when connected.');
					$('.status-div').removeClass('loading');
				}
			});
		});
	};
	
	// SHOW LABELS OVERLAY
	var showLabels = function(){
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
	
	// POPULATE LABELS INTO LABEL OVERLAY
	var populateLabels = function(){
		$('.labels .item').remove();
		var tagIndex = $.parseJSON(localStorage.tagIndex);
		var notecount=$('.listnote').length;
		for (i=0;i<tagIndex.count;i++) {
			tagname = tagIndex.tags[i].name;
			tagid = tagname.replace('@', '').replace('.','');
			j=0;
			$('.listnote').each(function(){
				if($.inArray(tagname,$(this).data().tags)>-1){
					console.log(tagname + $(this).data().tags);
					j++;
				};
			});
			$('#label-template').clone().attr('id',tagid).addClass('item').appendTo('.labels .items');
			$('#' + tagid).children('.name').html('<pre>' + tagname + '</pre>');
			$('#' + tagid).children('.notecount').text(j + " notes");
		};
		$('.labels .item').sortElements(function(a, b){
			return parseFloat($(a).children('.notecount').text()) < parseFloat($(b).children('.notecount').text()) ? 1 : -1;
		}); 
	};
	
	// SEARCH FOR LABELS
	var labelSearch = function() {
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
	
	// SELECT PREVIOUS LABEL
	var prevLabel = function() {
		prevOne = $('.label-select').prevAll('.item:not(.hide):first');
		if( prevOne.length > 0 ) {
			$('.label-select').removeClass('label-select');
			prevOne.addClass('label-select');
		};
	};
	
	// SELECT NEXT LABEL
	var nextLabel = function() {
		nextOne = $('.label-select').nextAll('.item:not(.hide):first');
		if( nextOne.length > 0 ) {
			$('.label-select').removeClass('label-select');
			nextOne.addClass('label-select');
		};
	};
	
	// UPDATE TAGS
	var updateTags = function(notekey, deletetag){
		var tags = $('#' + notekey + ' .tag-area input').val().split(' ');
		var indx = tags.indexOf(deletetag);
		if (indx != -1) tags.splice(indx, 1);
		//console.log(tags);
		note = $.parseJSON(localStorage[notekey]);
		if (note.tags != tags){
			note.tags = tags;
			note.syncnum = note.syncnum + 1;
			localStorage[notekey] = JSON.stringify(note);
			localToDOM(notekey);
			manualSync();
		};
	};
	
	// FILTER BY LABEL
	var filterByLabel = function(labelName) {
		$('.labels input').val('').blur()
		unfilterLabel();
		clearOverlays();
		$('html body').addClass('tag-filter');
		$('#tag-filter-template').clone().attr('id','').addClass('active-tag-filter').insertBefore('.list');
		$('.active-tag-filter .inner .tag-filter-label').text(labelName);
		$('.listnote').each(function(){
			if(!($.inArray(labelName,$(this).data().tags) > -1)){
				$(this).addClass('tag-hide');
			}; 
		});
		$('.selected').removeClass('selected');
		$('.listnote:not(.search-hide,.tag-hide):first').addClass('selected');
		refreshCards();
	};
	
	// UNFILTER LABEL
	var unfilterLabel = function() {
		$('html body').removeClass('tag-filter');
		$('.active-tag-filter').remove();
		$('.tag-hide').removeClass('tag-hide');
		$('.selected').removeClass('selected');
		$('.listnote:not(.search-hide,.tag-hide):first').addClass('selected');
		refreshCards();
	};

// =====================
//    SIMPLENOTE SYNC
// =====================

	// DOWNLOAD ONE NOTE
	var getNote = function(notekey){
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
	var sendNote = function(noteobject){
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
	
	// CHECK ALL NOTES FOR UPDATES AGAINST INDEX
	var updateAllNotes = function() {
		return $.Deferred(function(dfd_uan){
			//console.log('iterating through index, showing local, getting if needed');
			index = $.parseJSON(localStorage.index);
			var i=0, set=0, snarray=[], notecount=0, deletedcount=0;
			function updateSome(num){
				for (i=set;i<=set+num;i++){
					throttledProgress(50 + Math.round(50*(i/index.data.length))); 
					if (!index.data[i]){
						//console.log('broke at ' + i);
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
				//console.log('i='+i+' index='+index.data.length);
				//progressBar(50+Math.round(50*(i/index.length)));
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
			//$('.status').text('Syncing ' + snarray.length + ' notes');
			//$('.status-div').addClass('loading');
		}).promise();
	};
	
	// SYNC INDEX
	var syncIndex = function(postData){
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
					//console.log('recieved new index with ' + newIndex.count + ' new notes');
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
					//console.log(localStorage.mark);
					localStorage.setItem('index',JSON.stringify(existingIndex));
					localStorage.setItem('indexDate',newIndex.time);
					if (localStorage.mark == "DONE"){ 
						localStorage.removeItem('mark');
						//console.log('done syncing index');
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
			//console.log('outside index ajax()');
		}).promise();
	};
	
	// MANUAL SYNC
	var manualSync = function(syncType){
		progressBar(5);
		if(localStorage.token){
			$.when(getTagIndex()).done(function(){
				//console.log('done with tag index');
				//$('.status').text('Syncing with Simplenote');
				//$('.status-div').addClass('loading');
				progressBar(25);
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
					progressBar(50);
					indexFinish = new Date().getTime();
					//console.log('indexTime = ' + (indexFinish - indexStart));
					$.when(updateAllNotes()).done(function(){
						progressBar(100,function(){
							//console.log('inside progressBar done');
							indexDate = stackTime(localStorage.indexDate);
							$('.status').html('synced <abbr class="timeago" title="' + indexDate + '"></abbr>');
							bindTimeago();
							$('.status-div').removeClass('loading');
							sortNotes();
							refreshCards();	
						});
					}); // updateAllNotes
				}); // syncIndex
			}); // tagIndex
		}
		else{
			window.location = '/';
		};
	};

// =========================
//    LOADING LOCAL NOTES
// =========================
	
	// UPDATE NOTE PREVIEW AND PIN
	var updateListnote = function(key){
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
	var localToDOM = function(key){ // add to DOM from localStorage
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
	var allLocalToDOM = function(){
		//$('.status').text('Loading notes from local storage');
		//$('.status-div').addClass('loading');
		progressBar(10);
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
	
	// ON PAGE LOAD
	var storage = '',
	indexStart = '',
	indexFinish = '';
	
	// FIRST SYNC ON LOAD
	var notestackLoadSync = function() {
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
	};

// =================================
//    CHANGE APPEARANCE FUNCTIONS
// =================================

	// CHANGE OVERALL THEME
	var changeTheme = function(themename) {
		var classes = $('html body').attr('class').split(" ");
		for (i=0, len=classes.length ; i<len; i++){
			if (classes[i].substr(0,6)=="theme-"){
				classes[i] = "";
			};
		};
		$('.appearance .item.theme').siblings('.theme').addClass('dim');
		$('#' + themename).removeClass('dim');
		$('html body').attr('class',classes.join(" "));
		$('html body').addClass(themename);
		localStorage['theme'] = themename;
	};
	
	// CHANGE FONT
	var changeFont = function(fontname){
		var classes = $('html body').attr('class').split(" ");
		for (i=0, len=classes.length ; i<len; i++){
			if (classes[i].substr(0,5)=="font-"){
				classes[i] = "";
			};
		};
		$('.appearance .font').siblings('.font').addClass('dim');
		$('#' + fontname).removeClass('dim');
		$('html body').attr('class',classes.join(" "));
		$('html body').addClass(fontname);
		localStorage['font'] = fontname;
	};
	
	// CHANGE FONTSIZE
	var changeFontsize = function(fontsize){
		var classes = $('html body').attr('class').split(" ");
		for (i=0, len=classes.length ; i<len; i++){
			if (classes[i].substr(0,9)=="fontsize-"){
				classes[i] = "";
			};
		};
		$('.appearance .fontsize').siblings('.fontsize').addClass('dim');
		$('#' + fontsize).removeClass('dim');
		$('html body').attr('class',classes.join(" "));
		$('html body').addClass(fontsize);
		localStorage['fontsize'] = fontsize;
	};
	
	var notestackLoadInteractions = function() {
		
		// =========================
		//    APPEARANCE SETTINGS
		// =========================
	
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
		
		// LOAD TAG-PREF
		if(localStorage.tagPref == "no-tags"){
			$('html body').addClass('no-tags');
			$('.tag-pref').addClass('dim');
		};
		// CLICK TAG-PREF
		$('.appearance .tag-pref').click(function(){
			if($(this).hasClass('dim')){
				// enable tags
				$(this).removeClass('dim');
				$('html body').removeClass('no-tags');
				localStorage.removeItem('tagPref');
			}
			else{
				// disable tags
				$(this).addClass('dim');
				$('html body').addClass('no-tags');
				localStorage.setItem('tagPref','no-tags');
			};
		});
	
		// ON NOTE FOCUS
		$('.note .textarea textarea').live('focus',function(){
			$('.current .note-directions').addClass('show');
			$('div.current').addClass('highlight');
		});
	
		// ON NOTE BLUR
		$('.note .textarea textarea').live('blur',function(){
			var blurkey = $(this).parent().parent().attr('id');
			var listnotedata = $('#list-' + blurkey).data();
			if ($.inArray('markdown',listnotedata.systemtags)>-1){
				toggleMarkdown(blurkey,'on');
			};
			if ($(this).val() != listnotedata.content){
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
		});
	
		// =============
		//    BUTTONS
		// =============
	
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
		// CLICK NOTE .TEXTAREA (UN-MARKDOWN)
		$('.textarea:not(a)').live('click',function(e){
			if($(e.target).parents('.tag-area').length > 0){return;}; 
			toggleMarkdown($(this).parent().attr('id'),'off','temp');
			$(this).children('textarea').focus();
		});
		// CLICK LINK IN MARKDOWN
		$('.markdown a').live('click',function(e){
			$(this).attr('target',"_blank");
		});
		// CLICK SETTINGS
		$('.settings_icon').click(function() {
			$('.settings').toggleClass('show');
		});
		$('.userdata').click(function(){
			$('.settings').toggleClass('show');
			$('.settings_pane').removeClass('show');
			$('.settings_pane.data').addClass('show');
		});
		// CLICK SETTINGS TAB
		$('.settings .tabs a').click(function(e){
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
		// CLICK TAG FILTER 'X'
		$('.clear-tag-filter').live('mouseup',function(){
			unfilterLabel();
		});
		// CLICK TAG FROM TAG LIST
		$('.labels .item').live('mouseup',function(){
			filterByLabel($(this).attr('id'));
		});
		// CLICK TAG IN NOTE
		$('.tagit-label').live('mouseup',function(){
			filterByLabel($(this).text());
		});
		// CLICK MARKDOWN BUTTON
		$('.markdown-button').live('mouseup',function(){
			toggleMarkdown($(this).parent().attr('id'));
		});
		// CLICK PIN BUTTON
		$('.pin-button').live('mouseup',function(){
			togglePin();
		});
		// CLICK LOGOUT AND CLEAR DATA
		$('.cleardata').click(function(){
			localStorage.clear();
		});
		
		// ========================
		//    KEYBOARD SHORTCUTS
		// ========================
	
		//GENERAL SHORTCUTS
		$(document).bind('keydown','esc',function(){clearOverlays();});
		$(document).bind('keydown','j',function(){nextNote();});
		$(document).bind('keydown','right',function(){nextNote();});
		$(document).bind('keydown','down',function(){nextNote();});
		$(document).bind('keydown','k',function(){prevNote();});
		$(document).bind('keydown','left',function(){prevNote();});
		$(document).bind('keydown','up',function(){prevNote();});
		$(document).bind('keydown','return',function(){if($('.current').hasClass('markdown-on')){toggleMarkdown($('.current').attr('id'),'off','temp');$('.note.current .textarea textarea').focus()}else{$('.note.current .textarea textarea').focus()}; return false;});
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
		$(document).bind('keydown','a',function(){viewAll();return false;});
		$(document).bind('keydown','m',function(){toggleMarkdown();return false;});
		
		//FROM WITHIN SEARCH BAR
		$('.search input').keyup($.debounce(250,refreshSearch));
		$('.search input').bind('keydown','return',function(){$(this).blur();return false;});
		$('.search input').bind('keydown','esc',function(){$(this).val('');refreshSearch();$(this).blur();return false;});
		$('.search input').bind('keydown','down',function(){$(this).blur();nextNote();return false;});
		$('.search input').bind('keydown','up',function(){$(this).blur();prevNote();return false;});
		
		//FROM WITHIN LABEL SEARCH
		$('.labels input').keyup(function(e){
			var key = e.which;
			if(key != 38 && key != 40 && key != 13){
				labelSearch();
			};
		});
		$('.labels input').bind('keydown','esc',function(){$(this).val('');$(this).blur();clearOverlays();return false;});
		$('.labels input').bind('keydown','down',function(){nextLabel();return false;});
		$('.labels input').bind('keydown','up',function(){prevLabel();return false;});
		$('.labels input').bind('keydown','return',function(){filterByLabel($('.label-select .name').text());return false});
		refreshNoteBinds('.note .textarea textarea');
	};
	
	// LOAD EVERYTHING
	$(function(){
		notestackLoadInteractions();
		notestackLoadSync();
	});

}(); // CLOSE 'NOTESTACK' NAMESPACE