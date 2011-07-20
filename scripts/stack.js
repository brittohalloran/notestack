// ################## PLUGINS ########################## //

// Plugin
// JQUERY.SORTELEMENTS.MIN.JS
jQuery.fn.sortElements=function(){var e=[].sort;return function(f,a){var a=a||function(){return this},g=this.map(function(){var b=a.call(this),c=b.parentNode,d=c.insertBefore(document.createTextNode(""),b.nextSibling);return function(){if(c===this)throw Error("You can't sort elements if any one is a descendant of another.");c.insertBefore(this,d);c.removeChild(d)}});return e.call(this,f).each(function(b){g[b].call(a.call(this))})}}();

// Plugin
// JQUERY.TABBY.MIN.JS
(function(h){h.fn.tabby=function(m){var p=h.extend({},h.fn.tabby.defaults,m),l=h.fn.tabby.pressed;return this.each(function(){$this=h(this);var b=h.meta?h.extend({},p,$this.data()):p;$this.bind("keydown",function(a){var m=h.fn.tabby.catch_kc(a);if(16==m)l.shft=!0;if(17==m)l.ctrl=!0,setTimeout("$.fn.tabby.pressed.ctrl = false;",1E3);if(18==m)l.alt=!0,setTimeout("$.fn.tabby.pressed.alt = false;",1E3);if(9==m&&!l.ctrl&&!l.alt){l.last=m;setTimeout("$.fn.tabby.pressed.last = null;",0);var a=h(a.target).get(0),
i=l.shft,m=a.scrollTop;if(a.setSelectionRange){var d=a.selectionStart,j=a.selectionEnd;if(d==j)if(i)if("\t"==a.value.substring(d-b.tabString.length,d))a.value=a.value.substring(0,d-b.tabString.length)+a.value.substring(d),a.focus(),a.setSelectionRange(d-b.tabString.length,d-b.tabString.length);else{if("\t"==a.value.substring(d,d+b.tabString.length))a.value=a.value.substring(0,d)+a.value.substring(d+b.tabString.length),a.focus(),a.setSelectionRange(d,d)}else a.value=a.value.substring(0,d)+b.tabString+
a.value.substring(d),a.focus(),a.setSelectionRange(d+b.tabString.length,d+b.tabString.length);else{var e=a.value.split("\n"),f=[],g=0,k=0,c;for(c in e)k=g+e[c].length,f.push({start:g,end:k,selected:g<=d&&k>d||k>=j&&g<j||g>d&&k<j}),g=k+1;e=0;for(c in f)if(f[c].selected)if(g=f[c].start+e,i&&b.tabString==a.value.substring(g,g+b.tabString.length))a.value=a.value.substring(0,g)+a.value.substring(g+b.tabString.length),e-=b.tabString.length;else if(!i)a.value=a.value.substring(0,g)+b.tabString+a.value.substring(g),
e+=b.tabString.length;a.focus();a.setSelectionRange(d+(e>0?b.tabString.length:e<0?-b.tabString.length:0),j+e)}}else if(document.selection&&(c=document.selection.createRange(),a==c.parentElement()))if(""==c.text){if(i){i=c.getBookmark();c.moveStart("character",-b.tabString.length);if(b.tabString==c.text)c.text="";else if(c.moveToBookmark(i),c.moveEnd("character",b.tabString.length),b.tabString==c.text)c.text="";c.collapse(!0)}else c.text=b.tabString,c.collapse(!1);c.select()}else{j=c.text;d=j.length;
f=j.split("\r\n");j=document.body.createTextRange();j.moveToElementText(a);j.setEndPoint("EndToStart",c);g=j.text;e=g.split("\r\n");g=g.length;k=document.body.createTextRange();k.moveToElementText(a);k.setEndPoint("StartToEnd",c);var k=k.text,o=document.body.createTextRange();o.moveToElementText(a);o.setEndPoint("StartToEnd",j);var n=o.text,o=h(a).html();h("#r3").text(g+" + "+d+" + "+k.length+" = "+o.length);g+n.length<o.length?(e.push(""),g+=2,i&&b.tabString==f[0].substring(0,b.tabString.length)?
f[0]=f[0].substring(b.tabString.length):i||(f[0]=b.tabString+f[0])):i&&b.tabString==e[e.length-1].substring(0,b.tabString.length)?e[e.length-1]=e[e.length-1].substring(b.tabString.length):i||(e[e.length-1]=b.tabString+e[e.length-1]);for(n=1;n<f.length;n++)i&&b.tabString==f[n].substring(0,b.tabString.length)?f[n]=f[n].substring(b.tabString.length):i||(f[n]=b.tabString+f[n]);1==e.length&&0==g&&(i&&b.tabString==f[0].substring(0,b.tabString.length)?f[0]=f[0].substring(b.tabString.length):i||(f[0]=b.tabString+
f[0]));g+d+k.length<o.length&&f.push("");j.text=e.join("\r\n");c.text=f.join("\r\n");i=document.body.createTextRange();i.moveToElementText(a);0<g?i.setEndPoint("StartToEnd",j):i.setEndPoint("StartToStart",j);i.setEndPoint("EndToEnd",c);i.select()}a.scrollTop=m;return!1}}).bind("keyup",function(a){if(16==h.fn.tabby.catch_kc(a))l.shft=!1}).bind("blur",function(a){9==l.last&&h(a.target).one("focus",function(){l.last=null}).get(0).focus()})})};h.fn.tabby.catch_kc=function(h){return h.keyCode?h.keyCode:
h.charCode?h.charCode:h.which};h.fn.tabby.pressed={shft:!1,ctrl:!1,alt:!1,last:null};h.fn.tabby.defaults={tabString:String.fromCharCode(9)}})(jQuery);

// Plugin
// JQUERY.TAGSINPUT.MIN.JS
(function(c){var a=new Array();var b=new Array();c.fn.addTag=function(f,e){var e=jQuery.extend({focus:false,callback:true},e);this.each(function(){id=c(this).attr("id");var g=c(this).val().split(a[id]);if(g[0]==""){g=new Array()}f=jQuery.trim(f);if(e.unique){skipTag=c(g).tagExist(f)}else{skipTag=false}if(f!=""&&skipTag!=true){c("<span>").addClass("tag").append(c("<span>").text(f).append("&nbsp;&nbsp;"),c("<a>",{href:"#",title:"Removing tag",text:"x"}).click(function(){return c("#"+id).removeTag(escape(f))})).insertBefore("#"+id+"_addTag");g.push(f);c("#"+id+"_tag").val("");if(e.focus){c("#"+id+"_tag").focus()}else{c("#"+id+"_tag").blur()}if(e.callback&&b[id]&&b[id]["onAddTag"]){var j=b[id]["onAddTag"];j(f)}if(b[id]&&b[id]["onChange"]){var h=g.length;var j=b[id]["onChange"];j(c(this),g[h])}}c.fn.tagsInput.updateTagsField(this,g)});return false};c.fn.removeTag=function(e){e=unescape(e);this.each(function(){id=c(this).attr("id");var g=c(this).val().split(a[id]);c("#"+id+"_tagsinput .tag").remove();str="";for(i=0;i<g.length;i++){if(g[i]!=e){str=str+a[id]+g[i]}}c.fn.tagsInput.importTags(this,str);if(b[id]&&b[id]["onRemoveTag"]){var h=b[id]["onRemoveTag"];h(e)}});return false};c.fn.tagExist=function(e){if(jQuery.inArray(e,c(this))==-1){return false}else{return true}};c.fn.importTags=function(e){c("#"+id+"_tagsinput .tag").remove();c.fn.tagsInput.importTags(this,e)};c.fn.tagsInput=function(e){var f=jQuery.extend({interactive:true,defaultText:"add a tag",minChars:0,autocomplete:{selectFirst:false},hide:true,delimiter:" ",unique:true,removeWithBackspace:true},e);this.each(function(){if(f.hide){c(this).hide()}id=c(this).attr("id");data=jQuery.extend({pid:id,real_input:"#"+id,holder:"#"+id+"_tagsinput",input_wrapper:"#"+id+"_addTag",fake_input:"#"+id+"_tag"},f);a[id]=data.delimiter;if(f.onAddTag||f.onRemoveTag||f.onChange){b[id]=new Array();b[id]["onAddTag"]=f.onAddTag;b[id]["onRemoveTag"]=f.onRemoveTag;b[id]["onChange"]=f.onChange}var g='<div id="'+id+'_tagsinput" class="tagsinput"><div id="'+id+'_addTag">';if(f.interactive){g=g+'<input id="'+id+'_tag" value="" data-default="'+f.defaultText+'" />'}g=g+'</div><div class="tags_clear"></div></div>';c(g).insertAfter(this);c(data.holder).css("width",f.width);c(data.holder).css("height",f.height);if(c(data.real_input).val()!=""){c.fn.tagsInput.importTags(c(data.real_input),c(data.real_input).val())}if(f.interactive){c(data.fake_input).val(c(data.fake_input).attr("data-default"));c(data.fake_input).css("color",f.placeholderColor);c(data.holder).bind("click",data,function(h){c(h.data.fake_input).focus()});c(data.fake_input).bind("focus",data,function(h){if(c(h.data.fake_input).val()==c(h.data.fake_input).attr("data-default")){c(h.data.fake_input).val("")}c(h.data.fake_input).css("color","#000000")});if(f.autocomplete_url!=undefined){autocomplete_options={source:f.autocomplete_url};for(attrname in f.autocomplete){autocomplete_options[attrname]=f.autocomplete[attrname]}if(jQuery.Autocompleter!==undefined){c(data.fake_input).autocomplete(f.autocomplete_url,f.autocomplete);c(data.fake_input).bind("result",data,function(h,k,j){if(k){d=k+"";c(h.data.real_input).addTag(d,{focus:true,unique:(f.unique)})}})}else{if(jQuery.ui.autocomplete!==undefined){c(data.fake_input).autocomplete(autocomplete_options);c(data.fake_input).bind("autocompleteselect",data,function(h,j){c(h.data.real_input).addTag(j.item.value,{focus:true,unique:(f.unique)});return false})}}}else{c(data.fake_input).bind("blur",data,function(h){var j=c(this).attr("data-default");if(c(h.data.fake_input).val()!=""&&c(h.data.fake_input).val()!=j){if((h.data.minChars<=c(h.data.fake_input).val().length)&&(!h.data.maxChars||(h.data.maxChars>=c(h.data.fake_input).val().length))){c(h.data.real_input).addTag(c(h.data.fake_input).val(),{focus:true,unique:(f.unique)})}}else{c(h.data.fake_input).val(c(h.data.fake_input).attr("data-default"));c(h.data.fake_input).css("color",f.placeholderColor)}return false})}c(data.fake_input).bind("keypress",data,function(h){if(h.which==h.data.delimiter.charCodeAt(0)||h.which==13){if((h.data.minChars<=c(h.data.fake_input).val().length)&&(!h.data.maxChars||(h.data.maxChars>=c(h.data.fake_input).val().length))){c(h.data.real_input).addTag(c(h.data.fake_input).val(),{focus:true,unique:(f.unique)})}return false}});data.removeWithBackspace&&c(data.fake_input).bind("keydown",function(j){if(j.keyCode==8&&c(this).val()==""){j.preventDefault();var h=c(this).closest(".tagsinput").find(".tag:last").text();var k=c(this).attr("id").replace(/_tag$/,"");h=h.replace(/[\s]+x$/,"");c("#"+k).removeTag(escape(h));c(this).trigger("focus")}});c(data.fake_input).blur()}return false});return this};c.fn.tagsInput.updateTagsField=function(f,e){id=c(f).attr("id");c(f).val(e.join(a[id]))};c.fn.tagsInput.importTags=function(h,j){c(h).val("");id=c(h).attr("id");var e=j.split(a[id]);for(i=0;i<e.length;i++){c(h).addTag(e[i],{focus:false,callback:false})}if(b[id]&&b[id]["onChange"]){var g=b[id]["onChange"];g(h,e[i])}}})(jQuery);

// Plugin
// JQUERY.TIMEAGO.MIN.JS
(function(d){function i(){var a;a=d(this);if(!a.data("timeago")){a.data("timeago",{datetime:e.datetime(a)});var b=d.trim(a.text());b.length>0&&a.attr("title",b)}a=a.data("timeago");isNaN(a.datetime)||d(this).text(f(a.datetime));return this}function f(a){return e.inWords((new Date).getTime()-a.getTime())}d.timeago=function(a){return a instanceof Date?f(a):typeof a==="string"?f(d.timeago.parse(a)):f(d.timeago.datetime(a))};var e=d.timeago;d.extend(d.timeago,{settings:{refreshMillis:6E4,allowFuture:!1,
strings:{prefixAgo:null,prefixFromNow:null,suffixAgo:"ago",suffixFromNow:"from now",seconds:"less than a minute",minute:"about a minute",minutes:"%d minutes",hour:"about an hour",hours:"about %d hours",day:"a day",days:"%d days",month:"about a month",months:"%d months",year:"about a year",years:"%d years",numbers:[]}},inWords:function(a){function b(b,e){return(d.isFunction(b)?b(e,a):b).replace(/%d/i,c.numbers&&c.numbers[e]||e)}var c=this.settings.strings,e=c.prefixAgo,f=c.suffixAgo;if(this.settings.allowFuture){if(a<
0)e=c.prefixFromNow,f=c.suffixFromNow;a=Math.abs(a)}var g=a/1E3,j=g/60,k=j/60,h=k/24,i=h/365,g=g<45&&b(c.seconds,Math.round(g))||g<90&&b(c.minute,1)||j<45&&b(c.minutes,Math.round(j))||j<90&&b(c.hour,1)||k<24&&b(c.hours,Math.round(k))||k<48&&b(c.day,1)||h<30&&b(c.days,Math.floor(h))||h<60&&b(c.month,1)||h<365&&b(c.months,Math.floor(h/30))||i<2&&b(c.year,1)||b(c.years,Math.floor(i));return d.trim([e,g,f].join(" "))},parse:function(a){a=d.trim(a);a=a.replace(/\.\d\d\d+/,"");a=a.replace(/-/,"/").replace(/-/,
"/");a=a.replace(/T/," ").replace(/Z/," UTC");a=a.replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2");return new Date(a)},datetime:function(a){a=d(a).get(0).tagName.toLowerCase()==="time"?d(a).attr("datetime"):d(a).attr("title");return e.parse(a)}});d.fn.timeago=function(){var a=this;a.each(i);var b=e.settings;b.refreshMillis>0&&setInterval(function(){a.each(i)},b.refreshMillis);return a};document.createElement("abbr");document.createElement("time")})(jQuery);

// Plugin
// JQUERY.MOUSEWHEEL.MIN.JS
(function(c){var a=["DOMMouseScroll","mousewheel"];c.event.special.mousewheel={setup:function(){if(this.addEventListener){for(var d=a.length;d;){this.addEventListener(a[--d],b,false)}}else{this.onmousewheel=b}},teardown:function(){if(this.removeEventListener){for(var d=a.length;d;){this.removeEventListener(a[--d],b,false)}}else{this.onmousewheel=null}}};c.fn.extend({mousewheel:function(d){return d?this.bind("mousewheel",d):this.trigger("mousewheel")},unmousewheel:function(d){return this.unbind("mousewheel",d)}});function b(f){var d=[].slice.call(arguments,1),g=0,e=true;f=c.event.fix(f||window.event);f.type="mousewheel";if(f.wheelDelta){g=f.wheelDelta/120}if(f.detail){g=-f.detail/3}d.unshift(f,g);return c.event.handle.apply(this,d)}})(jQuery);

// Plugin
// JQUERY.JQHOTKEYS.MIN.JS
(function(d){function h(g){if(typeof g.data==="string"){var h=g.handler,i=g.data.toLowerCase().split(" ");g.handler=function(a){if(!(this!==a.target&&(/textarea|select/i.test(a.target.nodeName)||a.target.type==="text"))){var b=a.type!=="keypress"&&d.hotkeys.specialKeys[a.which],e=String.fromCharCode(a.which).toLowerCase(),c="",f={};a.altKey&&b!=="alt"&&(c+="alt+");a.ctrlKey&&b!=="ctrl"&&(c+="ctrl+");a.metaKey&&!a.ctrlKey&&b!=="meta"&&(c+="meta+");a.shiftKey&&b!=="shift"&&(c+="shift+");b?f[c+b]=!0:
(f[c+e]=!0,f[c+d.hotkeys.shiftNums[e]]=!0,c==="shift+"&&(f[d.hotkeys.shiftNums[e]]=!0));b=0;for(e=i.length;b<e;b++)if(f[i[b]])return h.apply(this,arguments)}}}}d.hotkeys={version:"0.8",specialKeys:{8:"backspace",9:"tab",13:"return",16:"shift",17:"ctrl",18:"alt",19:"pause",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"insert",46:"del",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9",106:"*",107:"+",
109:"-",110:".",111:"/",112:"f1",113:"f2",114:"f3",115:"f4",116:"f5",117:"f6",118:"f7",119:"f8",120:"f9",121:"f10",122:"f11",123:"f12",144:"numlock",145:"scroll",191:"/",224:"meta"},shiftNums:{"`":"~",1:"!",2:"@",3:"#",4:"$",5:"%",6:"^",7:"&",8:"*",9:"(",0:")","-":"_","=":"+",";":": ","'":'"',",":"<",".":">","/":"?","\\":"|"}};d.each(["keydown","keyup","keypress"],function(){d.event.special[this]={add:h}})})(jQuery);

// DIFF_MATCH_PATCH PLUGIN
(function(){function diff_match_patch(){this.Diff_Timeout=1;this.Diff_EditCost=4;this.Match_Threshold=0.5;this.Match_Distance=1E3;this.Patch_DeleteThreshold=0.5;this.Patch_Margin=4;this.Match_MaxBits=32}
diff_match_patch.prototype.diff_main=function(a,b,c,d){typeof d=="undefined"&&(d=this.Diff_Timeout<=0?Number.MAX_VALUE:(new Date).getTime()+this.Diff_Timeout*1E3);if(a==null||b==null)throw Error("Null input. (diff_main)");if(a==b)return a?[[0,a]]:[];typeof c=="undefined"&&(c=!0);var e=c,f=this.diff_commonPrefix(a,b),c=a.substring(0,f),a=a.substring(f),b=b.substring(f),f=this.diff_commonSuffix(a,b),g=a.substring(a.length-f),a=a.substring(0,a.length-f),b=b.substring(0,b.length-f),a=this.diff_compute_(a,
b,e,d);c&&a.unshift([0,c]);g&&a.push([0,g]);this.diff_cleanupMerge(a);return a};
diff_match_patch.prototype.diff_compute_=function(a,b,c,d){if(!a)return[[1,b]];if(!b)return[[-1,a]];var e=a.length>b.length?a:b,f=a.length>b.length?b:a,g=e.indexOf(f);return g!=-1?(c=[[1,e.substring(0,g)],[0,f],[1,e.substring(g+f.length)]],a.length>b.length&&(c[0][0]=c[2][0]=-1),c):f.length==1?[[-1,a],[1,b]]:(e=this.diff_halfMatch_(a,b))?(f=e[0],a=e[1],g=e[2],b=e[3],e=e[4],f=this.diff_main(f,g,c,d),c=this.diff_main(a,b,c,d),f.concat([[0,e]],c)):c&&a.length>100&&b.length>100?this.diff_lineMode_(a,
b,d):this.diff_bisect_(a,b,d)};
diff_match_patch.prototype.diff_lineMode_=function(a,b,c){var d=this.diff_linesToChars_(a,b),a=d[0],b=d[1],d=d[2],a=this.diff_bisect_(a,b,c);this.diff_charsToLines_(a,d);this.diff_cleanupSemantic(a);a.push([0,""]);for(var e=b=0,f=0,g=d="";b<a.length;){switch(a[b][0]){case 1:f++;g+=a[b][1];break;case -1:e++;d+=a[b][1];break;case 0:if(e>=1&&f>=1){d=this.diff_main(d,g,!1,c);a.splice(b-e-f,e+f);b=b-e-f;for(e=d.length-1;e>=0;e--)a.splice(b,0,d[e]);b+=d.length}e=f=0;g=d=""}b++}a.pop();return a};
diff_match_patch.prototype.diff_bisect_=function(a,b,c){for(var d=a.length,e=b.length,f=Math.ceil((d+e)/2),g=f,h=2*f,j=Array(h),i=Array(h),k=0;k<h;k++)j[k]=-1,i[k]=-1;j[g+1]=0;i[g+1]=0;for(var k=d-e,l=k%2!=0,p=0,r=0,o=0,t=0,v=0;v<f;v++){if((new Date).getTime()>c)break;for(var q=-v+p;q<=v-r;q+=2){var m=g+q,n;n=q==-v||q!=v&&j[m-1]<j[m+1]?j[m+1]:j[m-1]+1;for(var s=n-q;n<d&&s<e&&a.charAt(n)==b.charAt(s);)n++,s++;j[m]=n;if(n>d)r+=2;else if(s>e)p+=2;else if(l&&(m=g+k-q,m>=0&&m<h&&i[m]!=-1)){var u=d-i[m];
if(n>=u)return this.diff_bisectSplit_(a,b,n,s,c)}}for(q=-v+o;q<=v-t;q+=2){m=g+q;u=q==-v||q!=v&&i[m-1]<i[m+1]?i[m+1]:i[m-1]+1;for(n=u-q;u<d&&n<e&&a.charAt(d-u-1)==b.charAt(e-n-1);)u++,n++;i[m]=u;if(u>d)t+=2;else if(n>e)o+=2;else if(!l&&(m=g+k-q,m>=0&&m<h&&j[m]!=-1&&(n=j[m],s=g+n-m,u=d-u,n>=u)))return this.diff_bisectSplit_(a,b,n,s,c)}}return[[-1,a],[1,b]]};
diff_match_patch.prototype.diff_bisectSplit_=function(a,b,c,d,e){var f=a.substring(0,c),g=b.substring(0,d),a=a.substring(c),b=b.substring(d),f=this.diff_main(f,g,!1,e),e=this.diff_main(a,b,!1,e);return f.concat(e)};
diff_match_patch.prototype.diff_linesToChars_=function(a,b){function c(a){for(var b="",c=0,f=-1,g=d.length;f<a.length-1;){f=a.indexOf("\n",c);f==-1&&(f=a.length-1);var p=a.substring(c,f+1),c=f+1;(e.hasOwnProperty?e.hasOwnProperty(p):e[p]!==void 0)?b+=String.fromCharCode(e[p]):(b+=String.fromCharCode(g),e[p]=g,d[g++]=p)}return b}var d=[],e={};d[0]="";var f=c(a),g=c(b);return[f,g,d]};
diff_match_patch.prototype.diff_charsToLines_=function(a,b){for(var c=0;c<a.length;c++){for(var d=a[c][1],e=[],f=0;f<d.length;f++)e[f]=b[d.charCodeAt(f)];a[c][1]=e.join("")}};diff_match_patch.prototype.diff_commonPrefix=function(a,b){if(!a||!b||a.charAt(0)!=b.charAt(0))return 0;for(var c=0,d=Math.min(a.length,b.length),e=d,f=0;c<e;)a.substring(f,e)==b.substring(f,e)?f=c=e:d=e,e=Math.floor((d-c)/2+c);return e};
diff_match_patch.prototype.diff_commonSuffix=function(a,b){if(!a||!b||a.charAt(a.length-1)!=b.charAt(b.length-1))return 0;for(var c=0,d=Math.min(a.length,b.length),e=d,f=0;c<e;)a.substring(a.length-e,a.length-f)==b.substring(b.length-e,b.length-f)?f=c=e:d=e,e=Math.floor((d-c)/2+c);return e};
diff_match_patch.prototype.diff_commonOverlap_=function(a,b){var c=a.length,d=b.length;if(c==0||d==0)return 0;c>d?a=a.substring(c-d):c<d&&(b=b.substring(0,c));c=Math.min(c,d);if(a==b)return c;for(var d=0,e=1;;){var f=a.substring(c-e),f=b.indexOf(f);if(f==-1)return d;e+=f;if(f==0||a.substring(c-e)==b.substring(0,e))d=e,e++}};
diff_match_patch.prototype.diff_halfMatch_=function(a,b){function c(a,b,c){for(var d=a.substring(c,c+Math.floor(a.length/4)),e=-1,g="",h,j,q,m;(e=b.indexOf(d,e+1))!=-1;){var n=f.diff_commonPrefix(a.substring(c),b.substring(e)),s=f.diff_commonSuffix(a.substring(0,c),b.substring(0,e));g.length<s+n&&(g=b.substring(e-s,e)+b.substring(e,e+n),h=a.substring(0,c-s),j=a.substring(c+n),q=b.substring(0,e-s),m=b.substring(e+n))}return g.length*2>=a.length?[h,j,q,m,g]:null}if(this.Diff_Timeout<=0)return null;
var d=a.length>b.length?a:b,e=a.length>b.length?b:a;if(d.length<4||e.length*2<d.length)return null;var f=this,g=c(d,e,Math.ceil(d.length/4)),d=c(d,e,Math.ceil(d.length/2)),h;if(!g&&!d)return null;else h=d?g?g[4].length>d[4].length?g:d:d:g;var j;a.length>b.length?(g=h[0],d=h[1],e=h[2],j=h[3]):(e=h[0],j=h[1],g=h[2],d=h[3]);h=h[4];return[g,d,e,j,h]};
diff_match_patch.prototype.diff_cleanupSemantic=function(a){for(var b=!1,c=[],d=0,e=null,f=0,g=0,h=0,j=0,i=0;f<a.length;)a[f][0]==0?(c[d++]=f,g=j,h=i,i=j=0,e=a[f][1]):(a[f][0]==1?j+=a[f][1].length:i+=a[f][1].length,e!==null&&e.length<=Math.max(g,h)&&e.length<=Math.max(j,i)&&(a.splice(c[d-1],0,[-1,e]),a[c[d-1]+1][0]=1,d--,d--,f=d>0?c[d-1]:-1,i=j=h=g=0,e=null,b=!0)),f++;b&&this.diff_cleanupMerge(a);this.diff_cleanupSemanticLossless(a);for(f=1;f<a.length;){if(a[f-1][0]==-1&&a[f][0]==1){b=a[f-1][1];c=
a[f][1];d=this.diff_commonOverlap_(b,c);if(d>=b.length/2||d>=c.length/2)a.splice(f,0,[0,c.substring(0,d)]),a[f-1][1]=b.substring(0,b.length-d),a[f+1][1]=c.substring(d),f++;f++}f++}};
diff_match_patch.prototype.diff_cleanupSemanticLossless=function(a){function b(a,b){if(!a||!b)return 5;var h=0;if(a.charAt(a.length-1).match(c)||b.charAt(0).match(c))if(h++,a.charAt(a.length-1).match(d)||b.charAt(0).match(d))if(h++,a.charAt(a.length-1).match(e)||b.charAt(0).match(e))h++,(a.match(f)||b.match(g))&&h++;return h}for(var c=/[^a-zA-Z0-9]/,d=/\s/,e=/[\r\n]/,f=/\n\r?\n$/,g=/^\r?\n\r?\n/,h=1;h<a.length-1;){if(a[h-1][0]==0&&a[h+1][0]==0){var j=a[h-1][1],i=a[h][1],k=a[h+1][1],l=this.diff_commonSuffix(j,
i);if(l)var p=i.substring(i.length-l),j=j.substring(0,j.length-l),i=p+i.substring(0,i.length-l),k=p+k;for(var l=j,p=i,r=k,o=b(j,i)+b(i,k);i.charAt(0)===k.charAt(0);){j+=i.charAt(0);var i=i.substring(1)+k.charAt(0),k=k.substring(1),t=b(j,i)+b(i,k);t>=o&&(o=t,l=j,p=i,r=k)}a[h-1][1]!=l&&(l?a[h-1][1]=l:(a.splice(h-1,1),h--),a[h][1]=p,r?a[h+1][1]=r:(a.splice(h+1,1),h--))}h++}};
diff_match_patch.prototype.diff_cleanupEfficiency=function(a){for(var b=!1,c=[],d=0,e="",f=0,g=!1,h=!1,j=!1,i=!1;f<a.length;){if(a[f][0]==0)a[f][1].length<this.Diff_EditCost&&(j||i)?(c[d++]=f,g=j,h=i,e=a[f][1]):(d=0,e=""),j=i=!1;else if(a[f][0]==-1?i=!0:j=!0,e&&(g&&h&&j&&i||e.length<this.Diff_EditCost/2&&g+h+j+i==3))a.splice(c[d-1],0,[-1,e]),a[c[d-1]+1][0]=1,d--,e="",g&&h?(j=i=!0,d=0):(d--,f=d>0?c[d-1]:-1,j=i=!1),b=!0;f++}b&&this.diff_cleanupMerge(a)};
diff_match_patch.prototype.diff_cleanupMerge=function(a){a.push([0,""]);for(var b=0,c=0,d=0,e="",f="",g;b<a.length;)switch(a[b][0]){case 1:d++;f+=a[b][1];b++;break;case -1:c++;e+=a[b][1];b++;break;case 0:c+d>1?(c!==0&&d!==0&&(g=this.diff_commonPrefix(f,e),g!==0&&(b-c-d>0&&a[b-c-d-1][0]==0?a[b-c-d-1][1]+=f.substring(0,g):(a.splice(0,0,[0,f.substring(0,g)]),b++),f=f.substring(g),e=e.substring(g)),g=this.diff_commonSuffix(f,e),g!==0&&(a[b][1]=f.substring(f.length-g)+a[b][1],f=f.substring(0,f.length-
g),e=e.substring(0,e.length-g))),c===0?a.splice(b-c-d,c+d,[1,f]):d===0?a.splice(b-c-d,c+d,[-1,e]):a.splice(b-c-d,c+d,[-1,e],[1,f]),b=b-c-d+(c?1:0)+(d?1:0)+1):b!==0&&a[b-1][0]==0?(a[b-1][1]+=a[b][1],a.splice(b,1)):b++,c=d=0,f=e=""}a[a.length-1][1]===""&&a.pop();c=!1;for(b=1;b<a.length-1;)a[b-1][0]==0&&a[b+1][0]==0&&(a[b][1].substring(a[b][1].length-a[b-1][1].length)==a[b-1][1]?(a[b][1]=a[b-1][1]+a[b][1].substring(0,a[b][1].length-a[b-1][1].length),a[b+1][1]=a[b-1][1]+a[b+1][1],a.splice(b-1,1),c=!0):
a[b][1].substring(0,a[b+1][1].length)==a[b+1][1]&&(a[b-1][1]+=a[b+1][1],a[b][1]=a[b][1].substring(a[b+1][1].length)+a[b+1][1],a.splice(b+1,1),c=!0)),b++;c&&this.diff_cleanupMerge(a)};diff_match_patch.prototype.diff_xIndex=function(a,b){var c=0,d=0,e=0,f=0,g;for(g=0;g<a.length;g++){a[g][0]!==1&&(c+=a[g][1].length);a[g][0]!==-1&&(d+=a[g][1].length);if(c>b)break;e=c;f=d}return a.length!=g&&a[g][0]===-1?f:f+(b-e)};
diff_match_patch.prototype.diff_prettyHtml=function(a){for(var b=[],c=0,d=/&/g,e=/</g,f=/>/g,g=/\n/g,h=0;h<a.length;h++){var j=a[h][0],i=a[h][1],k=i.replace(d,"&amp;").replace(e,"&lt;").replace(f,"&gt;").replace(g,"&para;<br>");switch(j){case 1:b[h]='<ins style="background:#e6ffe6;">'+k+"</ins>";break;case -1:b[h]='<del style="background:#ffe6e6;">'+k+"</del>";break;case 0:b[h]="<span>"+k+"</span>"}j!==-1&&(c+=i.length)}return b.join("")};
diff_match_patch.prototype.diff_text1=function(a){for(var b=[],c=0;c<a.length;c++)a[c][0]!==1&&(b[c]=a[c][1]);return b.join("")};diff_match_patch.prototype.diff_text2=function(a){for(var b=[],c=0;c<a.length;c++)a[c][0]!==-1&&(b[c]=a[c][1]);return b.join("")};diff_match_patch.prototype.diff_levenshtein=function(a){for(var b=0,c=0,d=0,e=0;e<a.length;e++){var f=a[e][0],g=a[e][1];switch(f){case 1:c+=g.length;break;case -1:d+=g.length;break;case 0:b+=Math.max(c,d),d=c=0}}b+=Math.max(c,d);return b};
diff_match_patch.prototype.diff_toDelta=function(a){for(var b=[],c=0;c<a.length;c++)switch(a[c][0]){case 1:b[c]="+"+encodeURI(a[c][1]);break;case -1:b[c]="-"+a[c][1].length;break;case 0:b[c]="="+a[c][1].length}return b.join("\t").replace(/%20/g," ")};
diff_match_patch.prototype.diff_fromDelta=function(a,b){for(var c=[],d=0,e=0,f=b.split(/\t/g),g=0;g<f.length;g++){var h=f[g].substring(1);switch(f[g].charAt(0)){case "+":try{c[d++]=[1,decodeURI(h)]}catch(j){throw Error("Illegal escape in diff_fromDelta: "+h);}break;case "-":case "=":var i=parseInt(h,10);if(isNaN(i)||i<0)throw Error("Invalid number in diff_fromDelta: "+h);h=a.substring(e,e+=i);f[g].charAt(0)=="="?c[d++]=[0,h]:c[d++]=[-1,h];break;default:if(f[g])throw Error("Invalid diff operation in diff_fromDelta: "+
f[g]);}}if(e!=a.length)throw Error("Delta length ("+e+") does not equal source text length ("+a.length+").");return c};diff_match_patch.prototype.match_main=function(a,b,c){if(a==null||b==null||c==null)throw Error("Null input. (match_main)");c=Math.max(0,Math.min(c,a.length));return a==b?0:a.length?a.substring(c,c+b.length)==b?c:this.match_bitap_(a,b,c):-1};
diff_match_patch.prototype.match_bitap_=function(a,b,c){function d(a,d){var e=a/b.length,g=Math.abs(c-d);return!f.Match_Distance?g?1:e:e+g/f.Match_Distance}if(b.length>this.Match_MaxBits)throw Error("Pattern too long for this browser.");var e=this.match_alphabet_(b),f=this,g=this.Match_Threshold,h=a.indexOf(b,c);h!=-1&&(g=Math.min(d(0,h),g),h=a.lastIndexOf(b,c+b.length),h!=-1&&(g=Math.min(d(0,h),g)));for(var j=1<<b.length-1,h=-1,i,k,l=b.length+a.length,p,r=0;r<b.length;r++){i=0;for(k=l;i<k;)d(r,c+
k)<=g?i=k:l=k,k=Math.floor((l-i)/2+i);l=k;i=Math.max(1,c-k+1);var o=Math.min(c+k,a.length)+b.length;k=Array(o+2);for(k[o+1]=(1<<r)-1;o>=i;o--){var t=e[a.charAt(o-1)];k[o]=r===0?(k[o+1]<<1|1)&t:(k[o+1]<<1|1)&t|(p[o+1]|p[o])<<1|1|p[o+1];if(k[o]&j&&(t=d(r,o-1),t<=g))if(g=t,h=o-1,h>c)i=Math.max(1,2*c-h);else break}if(d(r+1,c)>g)break;p=k}return h};
diff_match_patch.prototype.match_alphabet_=function(a){for(var b={},c=0;c<a.length;c++)b[a.charAt(c)]=0;for(c=0;c<a.length;c++)b[a.charAt(c)]|=1<<a.length-c-1;return b};
diff_match_patch.prototype.patch_addContext_=function(a,b){if(b.length!=0){for(var c=b.substring(a.start2,a.start2+a.length1),d=0;b.indexOf(c)!=b.lastIndexOf(c)&&c.length<this.Match_MaxBits-this.Patch_Margin-this.Patch_Margin;)d+=this.Patch_Margin,c=b.substring(a.start2-d,a.start2+a.length1+d);d+=this.Patch_Margin;(c=b.substring(a.start2-d,a.start2))&&a.diffs.unshift([0,c]);(d=b.substring(a.start2+a.length1,a.start2+a.length1+d))&&a.diffs.push([0,d]);a.start1-=c.length;a.start2-=c.length;a.length1+=
c.length+d.length;a.length2+=c.length+d.length}};
diff_match_patch.prototype.patch_make=function(a,b,c){var d;if(typeof a=="string"&&typeof b=="string"&&typeof c=="undefined")d=a,b=this.diff_main(d,b,!0),b.length>2&&(this.diff_cleanupSemantic(b),this.diff_cleanupEfficiency(b));else if(a&&typeof a=="object"&&typeof b=="undefined"&&typeof c=="undefined")b=a,d=this.diff_text1(b);else if(typeof a=="string"&&b&&typeof b=="object"&&typeof c=="undefined")d=a;else if(typeof a=="string"&&typeof b=="string"&&c&&typeof c=="object")d=a,b=c;else throw Error("Unknown call format to patch_make.");
if(b.length===0)return[];for(var c=[],a=new patch_obj,e=0,f=0,g=0,h=d,j=0;j<b.length;j++){var i=b[j][0],k=b[j][1];if(!e&&i!==0)a.start1=f,a.start2=g;switch(i){case 1:a.diffs[e++]=b[j];a.length2+=k.length;d=d.substring(0,g)+k+d.substring(g);break;case -1:a.length1+=k.length;a.diffs[e++]=b[j];d=d.substring(0,g)+d.substring(g+k.length);break;case 0:k.length<=2*this.Patch_Margin&&e&&b.length!=j+1?(a.diffs[e++]=b[j],a.length1+=k.length,a.length2+=k.length):k.length>=2*this.Patch_Margin&&e&&(this.patch_addContext_(a,
h),c.push(a),a=new patch_obj,e=0,h=d,f=g)}i!==1&&(f+=k.length);i!==-1&&(g+=k.length)}e&&(this.patch_addContext_(a,h),c.push(a));return c};diff_match_patch.prototype.patch_deepCopy=function(a){for(var b=[],c=0;c<a.length;c++){var d=a[c],e=new patch_obj;e.diffs=[];for(var f=0;f<d.diffs.length;f++)e.diffs[f]=d.diffs[f].slice();e.start1=d.start1;e.start2=d.start2;e.length1=d.length1;e.length2=d.length2;b[c]=e}return b};
diff_match_patch.prototype.patch_apply=function(a,b){if(a.length==0)return[b,[]];var a=this.patch_deepCopy(a),c=this.patch_addPadding(a),b=c+b+c;this.patch_splitMax(a);for(var d=0,e=[],f=0;f<a.length;f++){var g=a[f].start2+d,h=this.diff_text1(a[f].diffs),j,i=-1;if(h.length>this.Match_MaxBits){if(j=this.match_main(b,h.substring(0,this.Match_MaxBits),g),j!=-1&&(i=this.match_main(b,h.substring(h.length-this.Match_MaxBits),g+h.length-this.Match_MaxBits),i==-1||j>=i))j=-1}else j=this.match_main(b,h,g);
if(j==-1)e[f]=!1,d-=a[f].length2-a[f].length1;else if(e[f]=!0,d=j-g,g=i==-1?b.substring(j,j+h.length):b.substring(j,i+this.Match_MaxBits),h==g)b=b.substring(0,j)+this.diff_text2(a[f].diffs)+b.substring(j+h.length);else if(g=this.diff_main(h,g,!1),h.length>this.Match_MaxBits&&this.diff_levenshtein(g)/h.length>this.Patch_DeleteThreshold)e[f]=!1;else{this.diff_cleanupSemanticLossless(g);for(var h=0,k,i=0;i<a[f].diffs.length;i++){var l=a[f].diffs[i];l[0]!==0&&(k=this.diff_xIndex(g,h));l[0]===1?b=b.substring(0,
j+k)+l[1]+b.substring(j+k):l[0]===-1&&(b=b.substring(0,j+k)+b.substring(j+this.diff_xIndex(g,h+l[1].length)));l[0]!==-1&&(h+=l[1].length)}}}b=b.substring(c.length,b.length-c.length);return[b,e]};
diff_match_patch.prototype.patch_addPadding=function(a){for(var b=this.Patch_Margin,c="",d=1;d<=b;d++)c+=String.fromCharCode(d);for(d=0;d<a.length;d++)a[d].start1+=b,a[d].start2+=b;var d=a[0],e=d.diffs;if(e.length==0||e[0][0]!=0)e.unshift([0,c]),d.start1-=b,d.start2-=b,d.length1+=b,d.length2+=b;else if(b>e[0][1].length){var f=b-e[0][1].length;e[0][1]=c.substring(e[0][1].length)+e[0][1];d.start1-=f;d.start2-=f;d.length1+=f;d.length2+=f}d=a[a.length-1];e=d.diffs;e.length==0||e[e.length-1][0]!=0?(e.push([0,
c]),d.length1+=b,d.length2+=b):b>e[e.length-1][1].length&&(f=b-e[e.length-1][1].length,e[e.length-1][1]+=c.substring(0,f),d.length1+=f,d.length2+=f);return c};
diff_match_patch.prototype.patch_splitMax=function(a){for(var b=this.Match_MaxBits,c=0;c<a.length;c++)if(a[c].length1>b){var d=a[c];a.splice(c--,1);for(var e=d.start1,f=d.start2,g="";d.diffs.length!==0;){var h=new patch_obj,j=!0;h.start1=e-g.length;h.start2=f-g.length;if(g!=="")h.length1=h.length2=g.length,h.diffs.push([0,g]);for(;d.diffs.length!==0&&h.length1<b-this.Patch_Margin;){var g=d.diffs[0][0],i=d.diffs[0][1];g===1?(h.length2+=i.length,f+=i.length,h.diffs.push(d.diffs.shift()),j=!1):g===-1&&
h.diffs.length==1&&h.diffs[0][0]==0&&i.length>2*b?(h.length1+=i.length,e+=i.length,j=!1,h.diffs.push([g,i]),d.diffs.shift()):(i=i.substring(0,b-h.length1-this.Patch_Margin),h.length1+=i.length,e+=i.length,g===0?(h.length2+=i.length,f+=i.length):j=!1,h.diffs.push([g,i]),i==d.diffs[0][1]?d.diffs.shift():d.diffs[0][1]=d.diffs[0][1].substring(i.length))}g=this.diff_text2(h.diffs);g=g.substring(g.length-this.Patch_Margin);i=this.diff_text1(d.diffs).substring(0,this.Patch_Margin);i!==""&&(h.length1+=i.length,
h.length2+=i.length,h.diffs.length!==0&&h.diffs[h.diffs.length-1][0]===0?h.diffs[h.diffs.length-1][1]+=i:h.diffs.push([0,i]));j||a.splice(++c,0,h)}}};diff_match_patch.prototype.patch_toText=function(a){for(var b=[],c=0;c<a.length;c++)b[c]=a[c];return b.join("")};
diff_match_patch.prototype.patch_fromText=function(a){var b=[];if(!a)return b;for(var a=a.split("\n"),c=0,d=/^@@ -(\d+),?(\d*) \+(\d+),?(\d*) @@$/;c<a.length;){var e=a[c].match(d);if(!e)throw Error("Invalid patch string: "+a[c]);var f=new patch_obj;b.push(f);f.start1=parseInt(e[1],10);e[2]===""?(f.start1--,f.length1=1):e[2]=="0"?f.length1=0:(f.start1--,f.length1=parseInt(e[2],10));f.start2=parseInt(e[3],10);e[4]===""?(f.start2--,f.length2=1):e[4]=="0"?f.length2=0:(f.start2--,f.length2=parseInt(e[4],
10));for(c++;c<a.length;){e=a[c].charAt(0);try{var g=decodeURI(a[c].substring(1))}catch(h){throw Error("Illegal escape in patch_fromText: "+g);}if(e=="-")f.diffs.push([-1,g]);else if(e=="+")f.diffs.push([1,g]);else if(e==" ")f.diffs.push([0,g]);else if(e=="@")break;else if(e!=="")throw Error('Invalid patch mode "'+e+'" in: '+g);c++}}return b};function patch_obj(){this.diffs=[];this.start2=this.start1=null;this.length2=this.length1=0}
patch_obj.prototype.toString=function(){var a,b;a=this.length1===0?this.start1+",0":this.length1==1?this.start1+1:this.start1+1+","+this.length1;b=this.length2===0?this.start2+",0":this.length2==1?this.start2+1:this.start2+1+","+this.length2;a=["@@ -"+a+" +"+b+" @@\n"];var c;for(b=0;b<this.diffs.length;b++){switch(this.diffs[b][0]){case 1:c="+";break;case -1:c="-";break;case 0:c=" "}a[b+1]=c+encodeURI(this.diffs[b][1])+"\n"}return a.join("").replace(/%20/g," ")};window.diff_match_patch=diff_match_patch;
window.patch_obj=patch_obj;window.DIFF_DELETE=-1;window.DIFF_INSERT=1;window.DIFF_EQUAL=0;})()

// SHOWDOWN.JS MARKDOWN HANDLER
var Attacklab=Attacklab||{};Attacklab.showdown=Attacklab.showdown||{};
Attacklab.showdown.converter=function(){var u=function(){this.set=function(a,c){this["s_"+a]=c};this.get=function(a){return this["s_"+a]}},i,j,n,o=0;this.makeHtml=function(a){i=new u;j=new u;n=[];a=a.replace(/~/g,"~T");a=a.replace(/\$/g,"~D");a=a.replace(/\r\n/g,"\n");a=a.replace(/\r/g,"\n");a=v("\n\n"+a+"\n\n");a=a.replace(/^[ \t]+$/mg,"");a=w(a);a=D(a);a=p(a);a=x(a);a=a.replace(/~D/g,"$$");return a=a.replace(/~T/g,"~")};var D=function(a){return a=a.replace(/^[ ]{0,3}\[(.+)\]:[ \t]*\n?[ \t]*<?(\S+?)>?(?=\s|$)[ \t]*\n?[ \t]*((\n*)["(](.+?)[")][ \t]*)?(?:\n+)/gm,
function(a,b,d,e,g,h){b=b.toLowerCase();i.set(b,y(d));if(g)return e;else h&&j.set(b,h.replace(/"/g,"&quot;"));return""})},w=function(a){a=a.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del)\b[^\r]*?\n<\/\2>[ \t]*(?=\n+))/gm,l);a=a.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math)\b[^\r]*?.*<\/\2>[ \t]*(?=\n+)\n)/gm,l);a=a.replace(/\n[ ]{0,3}((<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,l);a=a.replace(/\n\n[ ]{0,3}(<!(--(?:|(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>[ \t]*(?=\n{2,}))/g,
l);return a=a.replace(/(?:\n\n)([ ]{0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,l)},l=function(a,c){var b;b=c.replace(/^\n+/,"");b=b.replace(/\n+$/g,"");return b="\n\n~K"+(n.push(b)-1)+"K\n\n"},p=function(a,c){for(var a=E(a),b=z("<hr />"),a=a.replace(/^[ ]{0,2}([ ]?\*[ ]?){3,}[ \t]*$/gm,b),a=a.replace(/^[ ]{0,2}([ ]?-[ ]?){3,}[ \t]*$/gm,b),a=a.replace(/^[ ]{0,2}([ ]?_[ ]?){3,}[ \t]*$/gm,b),a=A(a),a=F(a),a=G(a),a=w(a),b=a.replace(/^\n+/g,""),b=b.replace(/\n+$/g,""),d=b.split(/\n{2,}/g),b=[],e=d.length,
g=0;g<e;g++){var h=d[g];h.search(/~K(\d+)K/g)>=0?b.push(h):h.search(/\S/)>=0&&(h=m(h),h=h.replace(/^([ \t]*)/g,"<p>"),h+="</p>",b.push(h))}if(!c){e=b.length;for(g=0;g<e;g++)for(;b[g].search(/~K(\d+)K/)>=0;)d=n[RegExp.$1],d=d.replace(/\$/g,"$$$$"),b[g]=b[g].replace(/~K\d+K/,d)}return a=b.join("\n\n")},m=function(a){a=H(a);a=I(a);a=a.replace(/\\(\\)/g,q);a=a.replace(/\\([`*_{}\[\]()>#+-.!])/g,q);a=a.replace(/(!\[(.*?)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g,B);a=a.replace(/(!\[(.*?)\]\s?\([ \t]*()<?(\S+?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g,
B);a=a.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g,r);a=a.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\]\([ \t]*()<?((?:\([^)]*\)|[^()])*?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g,r);a=a.replace(/(\[([^\[\]]+)\])()()()()()/g,r);a=J(a);a=y(a);a=a.replace(/(\*\*|__)(?=\S)([^\r]*?\S[\*_]*)\1/g,"<strong>$2</strong>");a=a.replace(/(\*|_)(?=\S)([^\r]*?\S)\1/g,"<em>$2</em>");return a=a.replace(/  +\n/g," <br />\n")},I=function(a){return a=a.replace(/(<[a-z\/!$]("[^"]*"|'[^']*'|[^'">])*>|<!(--(?:|(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>)/gi,
function(a){a=a.replace(/(.)<\/?code>(?=.)/g,"$1`");return a=k(a,"\\`*_")})},r=function(a,c,b,d,e,g,h,f){f==void 0&&(f="");a=d.toLowerCase();if(e=="")if(a==""&&(a=b.toLowerCase().replace(/ ?\n/g," ")),i.get(a)!=void 0)e=i.get(a),j.get(a)!=void 0&&(f=j.get(a));else if(c.search(/\(\s*\)$/m)>-1)e="";else return c;e=k(e,"*_");c='<a href="'+e+'"';f!=""&&(f=f.replace(/"/g,"&quot;"),f=k(f,"*_"),c+=' title="'+f+'"');c+=">"+b+"</a>";return c},B=function(a,c,b,d,e,g,h,f){a=b;d=d.toLowerCase();f||(f="");if(e==
"")if(d==""&&(d=a.toLowerCase().replace(/ ?\n/g," ")),i.get(d)!=void 0)e=i.get(d),j.get(d)!=void 0&&(f=j.get(d));else return c;a=a.replace(/"/g,"&quot;");e=k(e,"*_");c='<img src="'+e+'" alt="'+a+'"';f=f.replace(/"/g,"&quot;");f=k(f,"*_");c+=' title="'+f+'"';c+=" />";return c},E=function(a){a=a.replace(/^(.+)[ \t]*\n=+[ \t]*\n+/gm,function(a,b){return"<h1>"+m(b)+"</h1>\n\n"});a=a.replace(/^(.+)[ \t]*\n-+[ \t]*\n+/gm,function(a,b){return"<h2>"+m(b)+"</h2>\n\n"});return a=a.replace(/^(\#{1,6})[ \t]*(.+?)[ \t]*\#*\n+/gm,
function(a,b,d){a=b.length;return"<h"+a+">"+m(d)+"</h"+a+">\n\n"})},s,A=function(a){a+="~0";var c=/^(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm;o?a=a.replace(c,function(a,c,e){a=e.search(/[*+-]/g)>-1?"ul":"ol";c=s(c,a);c=c.replace(/\s+$/,"");return"<"+a+">"+c+"</"+a+">\n"}):(c=/(\n\n|^\n?)(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/g,a=a.replace(c,function(a,c,e,g){a=g.search(/[*+-]/g)>-1?"ul":"ol";e=s(e,
a);return c+"<"+a+">\n"+e+"</"+a+">\n"}));return a=a.replace(/~0/,"")},K={ol:"\\d+[.]",ul:"[*+-]"};s=function(a,c){o++;a=a.replace(/\n{2,}$/,"\n");a+="~0";var b=K[c],d=!1,a=a.replace(RegExp("(^[ \\t]*)("+b+")[ \\t]+([^\\r]+?(\\n+))(?=(~0|\\1("+b+")[ \\t]+))","gm"),function(a,b,c,f){a=f;(b=/\n\n$/.test(a))||a.search(/\n{2,}/)>-1||d?a=p(t(a),!0):(a=A(t(a)),a=a.replace(/\n$/,""),a=m(a));d=b;return"<li>"+a+"</li>\n"}),a=a.replace(/~0/g,"");o--;return a};var F=function(a){a+="~0";a=a.replace(/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=~0))/g,
function(a,b,d){a=C(t(b));a=v(a);a=a.replace(/^\n+/g,"");a=a.replace(/\n+$/g,"");return"\n\n"+("<pre><code>"+a+"\n</code></pre>")+"\n\n"+d});return a=a.replace(/~0/,"")},z=function(a){a=a.replace(/(^\n+|\n+$)/g,"");return"\n\n~K"+(n.push(a)-1)+"K\n\n"},H=function(a){return a=a.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,function(a,b,d,e){a=e.replace(/^([ \t]*)/g,"");a=a.replace(/[ \t]*$/g,"");a=C(a);return b+"<code>"+a+"</code>"})},C=function(a){a=a.replace(/&/g,"&amp;");a=a.replace(/</g,"&lt;");
a=a.replace(/>/g,"&gt;");return a=k(a,"*_{}[]\\",!1)},G=function(a){return a=a.replace(/((^[ \t]*>[ \t]?.+\n(.+\n)*\n*)+)/gm,function(a,b){var d;d=b.replace(/^[ \t]*>[ \t]?/gm,"~0");d=d.replace(/~0/g,"");d=d.replace(/^[ \t]+$/gm,"");d=p(d);d=d.replace(/(^|\n)/g,"$1  ");d=d.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm,function(a,b){var c;c=b.replace(/^  /mg,"~0");return c=c.replace(/~0/g,"")});return z("<blockquote>\n"+d+"\n</blockquote>")})},y=function(a){a=a.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g,
"&amp;");return a=a.replace(/<(?![a-z\/?\$!])/gi,"&lt;")},J=function(a){a=a.replace(/<((https?|ftp|dict):[^'">\s]+)>/gi,'<a href="$1">$1</a>');return a=a.replace(/<(?:mailto:)?([-.\w]+\@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi,function(a,b){return L(x(b))})},L=function(a){var c=[function(a){return"&#"+a.charCodeAt(0)+";"},function(a){a=a.charCodeAt(0);return"&#x"+("0123456789ABCDEF".charAt(a>>4)+"0123456789ABCDEF".charAt(a&15))+";"},function(a){return a}],a=("mailto:"+a).replace(/./g,function(a){if(a==
"@")a=c[Math.floor(Math.random()*2)](a);else if(a!=":")var d=Math.random(),a=d>0.9?c[2](a):d>0.45?c[1](a):c[0](a);return a});return a=('<a href="'+a+'">'+a+"</a>").replace(/">.+:/g,'">')},x=function(a){return a=a.replace(/~E(\d+)E/g,function(a,b){var d=parseInt(b);return String.fromCharCode(d)})},t=function(a){a=a.replace(/^(\t|[ ]{1,4})/gm,"~0");return a=a.replace(/~0/g,"")},v=function(a){if(!/\t/.test(a))return a;var c=["    ","   ","  "," "],b=0,d;return a.replace(/[\n\t]/g,function(a,g){if(a===
"\n")return b=g+1,a;d=(g-b)%4;b=g+1;return c[d]})},k=function(a,c,b){c="(["+c.replace(/([\[\]\\])/g,"\\$1")+"])";b&&(c="\\\\"+c);return a=a.replace(RegExp(c,"g"),q)},q=function(a,c){return"~E"+c.charCodeAt(0)+"E"}};var Showdown=Attacklab.showdown;Attacklab.fileLoaded&&Attacklab.fileLoaded("showdown.js");


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
	if($('.current').length!=1){
		if($('.selected').length!=1){
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
				console.log($(this).data().version);
				console.log('prev=' + prev);
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
	var postData = {'action': 'sendnote', 'email': email,'token': token,'notekey': noteobject.key,'notebody': JSON.stringify(noteobject)}
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
			if(!("content" in note)){
				note['content'] = noteobject.content;
			};
			if(newnote = 1){
				index = $.parseJSON(localStorage.index);
				for (i=0; i<=index.data.length-1; i++){
					if (index.data[i].key.substr(0,9)=='notestack'){
						$('#list-' + index.data[i].key).remove();
						localStorage.removeItem(index.data[i].key);
						delete index.data[i];
					};
				};
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
function updateAllNotes(){
	return $.Deferred(function(dfd_uan){
		//console.log('iterating through index, showing local, getting if needed');
		index = $.parseJSON(localStorage.index);
		var i, snarray=[], notecount=0;
		for (i=0;i<=index.data.length-1;i++){
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
			};
		};
		$('.note-data').text(notecount + ' notes | ');
		$('.data_notes').text(notecount);
		$('.status').text('Syncing ' + snarray.length + ' notes');
		$('.status-div').addClass('loading');
		$.when.apply(null, snarray).done(function(){
			//console.log('all gets resolved');
			dfd_uan.resolve();
		});
	}).promise();
};

// SYNC INDEX
function syncIndex(postData){
	return $.Deferred(function(dfd_syn){
		$.ajax('/sn.php',{
			type: 'POST',
			data: postData,
			success: function(rawNewIndex){
				newIndex = $.parseJSON(rawNewIndex);
				//console.log('recieved new index with ' + newIndex.count + ' new notes');
				if(localStorage.index){
					existingIndex = $.parseJSON(localStorage.index);
					for (i=0;i<=newIndex.data.length-1;i++){
						for (j=0; j<=existingIndex.data.length-1;j++){
							if(existingIndex.data[j].key==newIndex.data[i].key){
								existingIndex.data.splice(j,1);
								break
							};
						};
						existingIndex.data.unshift(newIndex.data[i]);
					};
					existingIndex.count = existingIndex.data.length;
				}
				else{
					existingIndex = newIndex;
				};
				localStorage.setItem('index',JSON.stringify(existingIndex));
				localStorage.setItem('indexDate',((new Date()).getTime()/1000));
				$.when(updateAllNotes()).done(function(){
					sortNotes();
					refreshCards();	
					if (newIndex.mark){ // theres more to get, ask again
						//console.log('new index had mark, getting again');
						postData['mark'] = newIndex.mark;
						syncIndex(postData);
					}
					else{ // index is updated, now update the notes
						dfd_syn.resolve();
					};
				});
			},
			error: function(msg){
				//console.log('error updating index ' + msg);
				dfd_syn.failure();
			}
		});
	}).promise();
};

// SIMPLENOTE SYNC
function simplenoteSync(){
	return $.Deferred(function(dfd_sim){
		//console.log('syncing with simplenote');
		if (localStorage.tokenDate){
			if (parseFloat((new Date()).getTime()/1000)-parseFloat(localStorage.tokenDate)>72000.0){ // token is expired, re-login
				window.location = '/';
			}
			else{ // token is still good, continue with sync
				//console.log('updating index');
				$('.status').text('Syncing with Simplenote');
				$('.status-div').addClass('loading');
				since = localStorage.indexDate ? localStorage.indexDate : "" ;
				email = localStorage.email;
				token = localStorage.token;
				//console.log('about to enter syncIndex when');
				$.when(syncIndex({
					'action': 'index', 
					'email': email,
					'token': token,
					'since': since,
					'length': 20
				})).done(function(){
					//console.log('simplenoteSync resolved');
					dfd_sim.resolve();
				});
			};
		}
		else{ // 
			//console.log('dont have local index, sending back to login');
			window.location = '/';
		};
	}).promise();
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
function manualSync(){
	$.when(simplenoteSync()).done(function(){
		//console.log('done with all simplenoteSync promises');
		indexDate = stackTime(localStorage.indexDate);
		$('.status').html('synced <abbr class="timeago" title="' + indexDate + '"></abbr>');
		bindTimeago();
		$('.status-div').removeClass('loading');
		sortNotes();
		refreshCards();	
	});
};

// ON PAGE LOAD
var storage = '';
$(function(){
	if(localStorage){
		if(localStorage.storage){
			storage = localStorage.storage;
		};
	}
	else if(sessionStorage){
		if(sessionStorage.storage){
			storage = sessionStorage.storage;
		};
	}
	else{
		window.location = '/';
	};
	// //console.log(getItem('email'));
	if(localStorage.email){
		$('.username').text(localStorage.email);
		if(localStorage.index){
			allLocalToDOM();
			if($('.listnote').length>0){
				sortNotes();
				refreshCards();
			};
		};
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
	newdata = {key: newid, createdate: createdate/1000, modifydate: createdate/1000, systemtags: [], content: "new note"};
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

// CLICK NOTE IN LIST
$(function() {
	$('.listnote').live('click',function(){
		$('.selected').removeClass('selected');
		$(this).addClass('selected');
		$('.current').removeClass('current');
		$('#' + $(this).attr('id').split('list-').pop()).addClass('current');
		reflowCards();
	});
});

// CLICK NON-CURRENT NOTE
$(function() {
	$('.note').live('click',function(){
		$('.current').removeClass('current');
		$(this).addClass('current');
		$('.selected').removeClass('selected');
		$('#list-' + $(this).attr('id')).addClass('selected');
		reflowCards();
	});
});

// CLICK SETTINGS
$(function() {
	$('.settings_icon').click(function() {
		$('.settings').toggleClass('show');
	});
	$('.username').click(function(){
		$('.settings').toggleClass('show');
		$('.settings_pane').removeClass('show');
		$('.settings_pane.data').addClass('show');
	});
});

// CLICK SETTINGS TAB
$(function(){
	$('.settings .tabs a').click(function(){
		$('.settings_pane').removeClass('show');
		$('.settings_pane.' + $(this).text().replace(" ","_")).addClass('show');
		e.preventDefault();
		return false;
	});
});

$(function(){
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
	// CLICK REVERT
	$('.versions-toolbar .revert-version').live('mousedown',function(){
		if( $('.version-select').length==1 ){
			notekey = $('.version-select').attr('id').split('version').shift();
			$('.selected').removeClass('selected');
			$('#list-' + notekey).addClass('selected');
			$('.current').removeClass('current');
			$('#' + notekey).addClass('current');
			reflowCards();
			clearOverlays();
			$('.current textarea').select(); 
		};
	});
});
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

$(function(){
// APPEARANCE SETTINGS
	// LOAD THEME
	if(localStorage.theme){
		themename = localStorage.theme;
		changeTheme(themename);
	}
	else{
		changeTheme('theme-gmail');
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

// BUTTONS
	// NEW NOTE
	$('.addnote').click(function(){createNote();});
	// TAGS
	$('.tags').click(function(){showLabels();});
	// SYNC
	$('.reload').click(function(){manualSync();});
	// CLOSE 'X' BUTTON (LABELS OR VERSIONS)
	$('.close').click(function(){clearOverlays();});
	
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
	return false;
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
		refreshSearch();
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