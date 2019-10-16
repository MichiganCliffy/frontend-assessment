
;
;
/*! jquery-1.8.2.min.js */ 
;
;
/*! jQuery v1.8.2 jquery.com | jquery.org/license */
(function(a,b){function G(a){var b=F[a]={};return p.each(a.split(s),function(a,c){b[c]=!0}),b}function J(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(I,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:+d+""===d?+d:H.test(d)?p.parseJSON(d):d}catch(f){}p.data(a,c,d)}else d=b}return d}function K(a){var b;for(b in a){if(b==="data"&&p.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function ba(){return!1}function bb(){return!0}function bh(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function bi(a,b){do a=a[b];while(a&&a.nodeType!==1);return a}function bj(a,b,c){b=b||0;if(p.isFunction(b))return p.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return p.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=p.grep(a,function(a){return a.nodeType===1});if(be.test(b))return p.filter(b,d,!c);b=p.filter(b,d)}return p.grep(a,function(a,d){return p.inArray(a,b)>=0===c})}function bk(a){var b=bl.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function bC(a,b){return a.getElementsByTagName(b)[0]||a.appendChild(a.ownerDocument.createElement(b))}function bD(a,b){if(b.nodeType!==1||!p.hasData(a))return;var c,d,e,f=p._data(a),g=p._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;d<e;d++)p.event.add(b,c,h[c][d])}g.data&&(g.data=p.extend({},g.data))}function bE(a,b){var c;if(b.nodeType!==1)return;b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase(),c==="object"?(b.parentNode&&(b.outerHTML=a.outerHTML),p.support.html5Clone&&a.innerHTML&&!p.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):c==="input"&&bv.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):c==="option"?b.selected=a.defaultSelected:c==="input"||c==="textarea"?b.defaultValue=a.defaultValue:c==="script"&&b.text!==a.text&&(b.text=a.text),b.removeAttribute(p.expando)}function bF(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bG(a){bv.test(a.type)&&(a.defaultChecked=a.checked)}function bY(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=bW.length;while(e--){b=bW[e]+c;if(b in a)return b}return d}function bZ(a,b){return a=b||a,p.css(a,"display")==="none"||!p.contains(a.ownerDocument,a)}function b$(a,b){var c,d,e=[],f=0,g=a.length;for(;f<g;f++){c=a[f];if(!c.style)continue;e[f]=p._data(c,"olddisplay"),b?(!e[f]&&c.style.display==="none"&&(c.style.display=""),c.style.display===""&&bZ(c)&&(e[f]=p._data(c,"olddisplay",cc(c.nodeName)))):(d=bH(c,"display"),!e[f]&&d!=="none"&&p._data(c,"olddisplay",d))}for(f=0;f<g;f++){c=a[f];if(!c.style)continue;if(!b||c.style.display==="none"||c.style.display==="")c.style.display=b?e[f]||"":"none"}return a}function b_(a,b,c){var d=bP.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function ca(a,b,c,d){var e=c===(d?"border":"content")?4:b==="width"?1:0,f=0;for(;e<4;e+=2)c==="margin"&&(f+=p.css(a,c+bV[e],!0)),d?(c==="content"&&(f-=parseFloat(bH(a,"padding"+bV[e]))||0),c!=="margin"&&(f-=parseFloat(bH(a,"border"+bV[e]+"Width"))||0)):(f+=parseFloat(bH(a,"padding"+bV[e]))||0,c!=="padding"&&(f+=parseFloat(bH(a,"border"+bV[e]+"Width"))||0));return f}function cb(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=!0,f=p.support.boxSizing&&p.css(a,"boxSizing")==="border-box";if(d<=0||d==null){d=bH(a,b);if(d<0||d==null)d=a.style[b];if(bQ.test(d))return d;e=f&&(p.support.boxSizingReliable||d===a.style[b]),d=parseFloat(d)||0}return d+ca(a,b,c||(f?"border":"content"),e)+"px"}function cc(a){if(bS[a])return bS[a];var b=p("<"+a+">").appendTo(e.body),c=b.css("display");b.remove();if(c==="none"||c===""){bI=e.body.appendChild(bI||p.extend(e.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!bJ||!bI.createElement)bJ=(bI.contentWindow||bI.contentDocument).document,bJ.write("<!doctype html><html><body>"),bJ.close();b=bJ.body.appendChild(bJ.createElement(a)),c=bH(b,"display"),e.body.removeChild(bI)}return bS[a]=c,c}function ci(a,b,c,d){var e;if(p.isArray(b))p.each(b,function(b,e){c||ce.test(a)?d(a,e):ci(a+"["+(typeof e=="object"?b:"")+"]",e,c,d)});else if(!c&&p.type(b)==="object")for(e in b)ci(a+"["+e+"]",b[e],c,d);else d(a,b)}function cz(a){return function(b,c){typeof b!="string"&&(c=b,b="*");var d,e,f,g=b.toLowerCase().split(s),h=0,i=g.length;if(p.isFunction(c))for(;h<i;h++)d=g[h],f=/^\+/.test(d),f&&(d=d.substr(1)||"*"),e=a[d]=a[d]||[],e[f?"unshift":"push"](c)}}function cA(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h,i=a[f],j=0,k=i?i.length:0,l=a===cv;for(;j<k&&(l||!h);j++)h=i[j](c,d,e),typeof h=="string"&&(!l||g[h]?h=b:(c.dataTypes.unshift(h),h=cA(a,c,d,e,h,g)));return(l||!h)&&!g["*"]&&(h=cA(a,c,d,e,"*",g)),h}function cB(a,c){var d,e,f=p.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((f[d]?a:e||(e={}))[d]=c[d]);e&&p.extend(!0,a,e)}function cC(a,c,d){var e,f,g,h,i=a.contents,j=a.dataTypes,k=a.responseFields;for(f in k)f in d&&(c[k[f]]=d[f]);while(j[0]==="*")j.shift(),e===b&&(e=a.mimeType||c.getResponseHeader("content-type"));if(e)for(f in i)if(i[f]&&i[f].test(e)){j.unshift(f);break}if(j[0]in d)g=j[0];else{for(f in d){if(!j[0]||a.converters[f+" "+j[0]]){g=f;break}h||(h=f)}g=g||h}if(g)return g!==j[0]&&j.unshift(g),d[g]}function cD(a,b){var c,d,e,f,g=a.dataTypes.slice(),h=g[0],i={},j=0;a.dataFilter&&(b=a.dataFilter(b,a.dataType));if(g[1])for(c in a.converters)i[c.toLowerCase()]=a.converters[c];for(;e=g[++j];)if(e!=="*"){if(h!=="*"&&h!==e){c=i[h+" "+e]||i["* "+e];if(!c)for(d in i){f=d.split(" ");if(f[1]===e){c=i[h+" "+f[0]]||i["* "+f[0]];if(c){c===!0?c=i[d]:i[d]!==!0&&(e=f[0],g.splice(j--,0,e));break}}}if(c!==!0)if(c&&a["throws"])b=c(b);else try{b=c(b)}catch(k){return{state:"parsererror",error:c?k:"No conversion from "+h+" to "+e}}}h=e}return{state:"success",data:b}}function cL(){try{return new a.XMLHttpRequest}catch(b){}}function cM(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function cU(){return setTimeout(function(){cN=b},0),cN=p.now()}function cV(a,b){p.each(b,function(b,c){var d=(cT[b]||[]).concat(cT["*"]),e=0,f=d.length;for(;e<f;e++)if(d[e].call(a,b,c))return})}function cW(a,b,c){var d,e=0,f=0,g=cS.length,h=p.Deferred().always(function(){delete i.elem}),i=function(){var b=cN||cU(),c=Math.max(0,j.startTime+j.duration-b),d=1-(c/j.duration||0),e=0,f=j.tweens.length;for(;e<f;e++)j.tweens[e].run(d);return h.notifyWith(a,[j,d,c]),d<1&&f?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:p.extend({},b),opts:p.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:cN||cU(),duration:c.duration,tweens:[],createTween:function(b,c,d){var e=p.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(e),e},stop:function(b){var c=0,d=b?j.tweens.length:0;for(;c<d;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;cX(k,j.opts.specialEasing);for(;e<g;e++){d=cS[e].call(j,a,k,j.opts);if(d)return d}return cV(j,k),p.isFunction(j.opts.start)&&j.opts.start.call(a,j),p.fx.timer(p.extend(i,{anim:j,queue:j.opts.queue,elem:a})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}function cX(a,b){var c,d,e,f,g;for(c in a){d=p.camelCase(c),e=b[d],f=a[c],p.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=p.cssHooks[d];if(g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}}function cY(a,b,c){var d,e,f,g,h,i,j,k,l=this,m=a.style,n={},o=[],q=a.nodeType&&bZ(a);c.queue||(j=p._queueHooks(a,"fx"),j.unqueued==null&&(j.unqueued=0,k=j.empty.fire,j.empty.fire=function(){j.unqueued||k()}),j.unqueued++,l.always(function(){l.always(function(){j.unqueued--,p.queue(a,"fx").length||j.empty.fire()})})),a.nodeType===1&&("height"in b||"width"in b)&&(c.overflow=[m.overflow,m.overflowX,m.overflowY],p.css(a,"display")==="inline"&&p.css(a,"float")==="none"&&(!p.support.inlineBlockNeedsLayout||cc(a.nodeName)==="inline"?m.display="inline-block":m.zoom=1)),c.overflow&&(m.overflow="hidden",p.support.shrinkWrapBlocks||l.done(function(){m.overflow=c.overflow[0],m.overflowX=c.overflow[1],m.overflowY=c.overflow[2]}));for(d in b){f=b[d];if(cP.exec(f)){delete b[d];if(f===(q?"hide":"show"))continue;o.push(d)}}g=o.length;if(g){h=p._data(a,"fxshow")||p._data(a,"fxshow",{}),q?p(a).show():l.done(function(){p(a).hide()}),l.done(function(){var b;p.removeData(a,"fxshow",!0);for(b in n)p.style(a,b,n[b])});for(d=0;d<g;d++)e=o[d],i=l.createTween(e,q?h[e]:0),n[e]=h[e]||p.style(a,e),e in h||(h[e]=i.start,q&&(i.end=i.start,i.start=e==="width"||e==="height"?1:0))}}function cZ(a,b,c,d,e){return new cZ.prototype.init(a,b,c,d,e)}function c$(a,b){var c,d={height:a},e=0;b=b?1:0;for(;e<4;e+=2-b)c=bV[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function da(a){return p.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}var c,d,e=a.document,f=a.location,g=a.navigator,h=a.jQuery,i=a.$,j=Array.prototype.push,k=Array.prototype.slice,l=Array.prototype.indexOf,m=Object.prototype.toString,n=Object.prototype.hasOwnProperty,o=String.prototype.trim,p=function(a,b){return new p.fn.init(a,b,c)},q=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,r=/\S/,s=/\s+/,t=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,u=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^[\],:{}\s]*$/,x=/(?:^|:|,)(?:\s*\[)+/g,y=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,z=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,A=/^-ms-/,B=/-([\da-z])/gi,C=function(a,b){return(b+"").toUpperCase()},D=function(){e.addEventListener?(e.removeEventListener("DOMContentLoaded",D,!1),p.ready()):e.readyState==="complete"&&(e.detachEvent("onreadystatechange",D),p.ready())},E={};p.fn=p.prototype={constructor:p,init:function(a,c,d){var f,g,h,i;if(!a)return this;if(a.nodeType)return this.context=this[0]=a,this.length=1,this;if(typeof a=="string"){a.charAt(0)==="<"&&a.charAt(a.length-1)===">"&&a.length>=3?f=[null,a,null]:f=u.exec(a);if(f&&(f[1]||!c)){if(f[1])return c=c instanceof p?c[0]:c,i=c&&c.nodeType?c.ownerDocument||c:e,a=p.parseHTML(f[1],i,!0),v.test(f[1])&&p.isPlainObject(c)&&this.attr.call(a,c,!0),p.merge(this,a);g=e.getElementById(f[2]);if(g&&g.parentNode){if(g.id!==f[2])return d.find(a);this.length=1,this[0]=g}return this.context=e,this.selector=a,this}return!c||c.jquery?(c||d).find(a):this.constructor(c).find(a)}return p.isFunction(a)?d.ready(a):(a.selector!==b&&(this.selector=a.selector,this.context=a.context),p.makeArray(a,this))},selector:"",jquery:"1.8.2",length:0,size:function(){return this.length},toArray:function(){return k.call(this)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=p.merge(this.constructor(),a);return d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")"),d},each:function(a,b){return p.each(this,a,b)},ready:function(a){return p.ready.promise().done(a),this},eq:function(a){return a=+a,a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(k.apply(this,arguments),"slice",k.call(arguments).join(","))},map:function(a){return this.pushStack(p.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:j,sort:[].sort,splice:[].splice},p.fn.init.prototype=p.fn,p.extend=p.fn.extend=function(){var a,c,d,e,f,g,h=arguments[0]||{},i=1,j=arguments.length,k=!1;typeof h=="boolean"&&(k=h,h=arguments[1]||{},i=2),typeof h!="object"&&!p.isFunction(h)&&(h={}),j===i&&(h=this,--i);for(;i<j;i++)if((a=arguments[i])!=null)for(c in a){d=h[c],e=a[c];if(h===e)continue;k&&e&&(p.isPlainObject(e)||(f=p.isArray(e)))?(f?(f=!1,g=d&&p.isArray(d)?d:[]):g=d&&p.isPlainObject(d)?d:{},h[c]=p.extend(k,g,e)):e!==b&&(h[c]=e)}return h},p.extend({noConflict:function(b){return a.$===p&&(a.$=i),b&&a.jQuery===p&&(a.jQuery=h),p},isReady:!1,readyWait:1,holdReady:function(a){a?p.readyWait++:p.ready(!0)},ready:function(a){if(a===!0?--p.readyWait:p.isReady)return;if(!e.body)return setTimeout(p.ready,1);p.isReady=!0;if(a!==!0&&--p.readyWait>0)return;d.resolveWith(e,[p]),p.fn.trigger&&p(e).trigger("ready").off("ready")},isFunction:function(a){return p.type(a)==="function"},isArray:Array.isArray||function(a){return p.type(a)==="array"},isWindow:function(a){return a!=null&&a==a.window},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):E[m.call(a)]||"object"},isPlainObject:function(a){if(!a||p.type(a)!=="object"||a.nodeType||p.isWindow(a))return!1;try{if(a.constructor&&!n.call(a,"constructor")&&!n.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||n.call(a,d)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},error:function(a){throw new Error(a)},parseHTML:function(a,b,c){var d;return!a||typeof a!="string"?null:(typeof b=="boolean"&&(c=b,b=0),b=b||e,(d=v.exec(a))?[b.createElement(d[1])]:(d=p.buildFragment([a],b,c?null:[]),p.merge([],(d.cacheable?p.clone(d.fragment):d.fragment).childNodes)))},parseJSON:function(b){if(!b||typeof b!="string")return null;b=p.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(w.test(b.replace(y,"@").replace(z,"]").replace(x,"")))return(new Function("return "+b))();p.error("Invalid JSON: "+b)},parseXML:function(c){var d,e;if(!c||typeof c!="string")return null;try{a.DOMParser?(e=new DOMParser,d=e.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(f){d=b}return(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&p.error("Invalid XML: "+c),d},noop:function(){},globalEval:function(b){b&&r.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(A,"ms-").replace(B,C)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,c,d){var e,f=0,g=a.length,h=g===b||p.isFunction(a);if(d){if(h){for(e in a)if(c.apply(a[e],d)===!1)break}else for(;f<g;)if(c.apply(a[f++],d)===!1)break}else if(h){for(e in a)if(c.call(a[e],e,a[e])===!1)break}else for(;f<g;)if(c.call(a[f],f,a[f++])===!1)break;return a},trim:o&&!o.call("ï»¿Â ")?function(a){return a==null?"":o.call(a)}:function(a){return a==null?"":(a+"").replace(t,"")},makeArray:function(a,b){var c,d=b||[];return a!=null&&(c=p.type(a),a.length==null||c==="string"||c==="function"||c==="regexp"||p.isWindow(a)?j.call(d,a):p.merge(d,a)),d},inArray:function(a,b,c){var d;if(b){if(l)return l.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=c.length,e=a.length,f=0;if(typeof d=="number")for(;f<d;f++)a[e++]=c[f];else while(c[f]!==b)a[e++]=c[f++];return a.length=e,a},grep:function(a,b,c){var d,e=[],f=0,g=a.length;c=!!c;for(;f<g;f++)d=!!b(a[f],f),c!==d&&e.push(a[f]);return e},map:function(a,c,d){var e,f,g=[],h=0,i=a.length,j=a instanceof p||i!==b&&typeof i=="number"&&(i>0&&a[0]&&a[i-1]||i===0||p.isArray(a));if(j)for(;h<i;h++)e=c(a[h],h,d),e!=null&&(g[g.length]=e);else for(f in a)e=c(a[f],f,d),e!=null&&(g[g.length]=e);return g.concat.apply([],g)},guid:1,proxy:function(a,c){var d,e,f;return typeof c=="string"&&(d=a[c],c=a,a=d),p.isFunction(a)?(e=k.call(arguments,2),f=function(){return a.apply(c,e.concat(k.call(arguments)))},f.guid=a.guid=a.guid||p.guid++,f):b},access:function(a,c,d,e,f,g,h){var i,j=d==null,k=0,l=a.length;if(d&&typeof d=="object"){for(k in d)p.access(a,c,k,d[k],1,g,e);f=1}else if(e!==b){i=h===b&&p.isFunction(e),j&&(i?(i=c,c=function(a,b,c){return i.call(p(a),c)}):(c.call(a,e),c=null));if(c)for(;k<l;k++)c(a[k],d,i?e.call(a[k],k,c(a[k],d)):e,h);f=1}return f?a:j?c.call(a):l?c(a[0],d):g},now:function(){return(new Date).getTime()}}),p.ready.promise=function(b){if(!d){d=p.Deferred();if(e.readyState==="complete")setTimeout(p.ready,1);else if(e.addEventListener)e.addEventListener("DOMContentLoaded",D,!1),a.addEventListener("load",p.ready,!1);else{e.attachEvent("onreadystatechange",D),a.attachEvent("onload",p.ready);var c=!1;try{c=a.frameElement==null&&e.documentElement}catch(f){}c&&c.doScroll&&function g(){if(!p.isReady){try{c.doScroll("left")}catch(a){return setTimeout(g,50)}p.ready()}}()}}return d.promise(b)},p.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){E["[object "+b+"]"]=b.toLowerCase()}),c=p(e);var F={};p.Callbacks=function(a){a=typeof a=="string"?F[a]||G(a):p.extend({},a);var c,d,e,f,g,h,i=[],j=!a.once&&[],k=function(b){c=a.memory&&b,d=!0,h=f||0,f=0,g=i.length,e=!0;for(;i&&h<g;h++)if(i[h].apply(b[0],b[1])===!1&&a.stopOnFalse){c=!1;break}e=!1,i&&(j?j.length&&k(j.shift()):c?i=[]:l.disable())},l={add:function(){if(i){var b=i.length;(function d(b){p.each(b,function(b,c){var e=p.type(c);e==="function"&&(!a.unique||!l.has(c))?i.push(c):c&&c.length&&e!=="string"&&d(c)})})(arguments),e?g=i.length:c&&(f=b,k(c))}return this},remove:function(){return i&&p.each(arguments,function(a,b){var c;while((c=p.inArray(b,i,c))>-1)i.splice(c,1),e&&(c<=g&&g--,c<=h&&h--)}),this},has:function(a){return p.inArray(a,i)>-1},empty:function(){return i=[],this},disable:function(){return i=j=c=b,this},disabled:function(){return!i},lock:function(){return j=b,c||l.disable(),this},locked:function(){return!j},fireWith:function(a,b){return b=b||[],b=[a,b.slice?b.slice():b],i&&(!d||j)&&(e?j.push(b):k(b)),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!d}};return l},p.extend({Deferred:function(a){var b=[["resolve","done",p.Callbacks("once memory"),"resolved"],["reject","fail",p.Callbacks("once memory"),"rejected"],["notify","progress",p.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return p.Deferred(function(c){p.each(b,function(b,d){var f=d[0],g=a[b];e[d[1]](p.isFunction(g)?function(){var a=g.apply(this,arguments);a&&p.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f+"With"](this===e?c:this,[a])}:c[f])}),a=null}).promise()},promise:function(a){return a!=null?p.extend(a,d):d}},e={};return d.pipe=d.then,p.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[a^1][2].disable,b[2][2].lock),e[f[0]]=g.fire,e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=k.call(arguments),d=c.length,e=d!==1||a&&p.isFunction(a.promise)?d:0,f=e===1?a:p.Deferred(),g=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?k.call(arguments):d,c===h?f.notifyWith(b,c):--e||f.resolveWith(b,c)}},h,i,j;if(d>1){h=new Array(d),i=new Array(d),j=new Array(d);for(;b<d;b++)c[b]&&p.isFunction(c[b].promise)?c[b].promise().done(g(b,j,c)).fail(f.reject).progress(g(b,i,h)):--e}return e||f.resolveWith(j,c),f.promise()}}),p.support=function(){var b,c,d,f,g,h,i,j,k,l,m,n=e.createElement("div");n.setAttribute("className","t"),n.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",c=n.getElementsByTagName("*"),d=n.getElementsByTagName("a")[0],d.style.cssText="top:1px;float:left;opacity:.5";if(!c||!c.length)return{};f=e.createElement("select"),g=f.appendChild(e.createElement("option")),h=n.getElementsByTagName("input")[0],b={leadingWhitespace:n.firstChild.nodeType===3,tbody:!n.getElementsByTagName("tbody").length,htmlSerialize:!!n.getElementsByTagName("link").length,style:/top/.test(d.getAttribute("style")),hrefNormalized:d.getAttribute("href")==="/a",opacity:/^0.5/.test(d.style.opacity),cssFloat:!!d.style.cssFloat,checkOn:h.value==="on",optSelected:g.selected,getSetAttribute:n.className!=="t",enctype:!!e.createElement("form").enctype,html5Clone:e.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",boxModel:e.compatMode==="CSS1Compat",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},h.checked=!0,b.noCloneChecked=h.cloneNode(!0).checked,f.disabled=!0,b.optDisabled=!g.disabled;try{delete n.test}catch(o){b.deleteExpando=!1}!n.addEventListener&&n.attachEvent&&n.fireEvent&&(n.attachEvent("onclick",m=function(){b.noCloneEvent=!1}),n.cloneNode(!0).fireEvent("onclick"),n.detachEvent("onclick",m)),h=e.createElement("input"),h.value="t",h.setAttribute("type","radio"),b.radioValue=h.value==="t",h.setAttribute("checked","checked"),h.setAttribute("name","t"),n.appendChild(h),i=e.createDocumentFragment(),i.appendChild(n.lastChild),b.checkClone=i.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=h.checked,i.removeChild(h),i.appendChild(n);if(n.attachEvent)for(k in{submit:!0,change:!0,focusin:!0})j="on"+k,l=j in n,l||(n.setAttribute(j,"return;"),l=typeof n[j]=="function"),b[k+"Bubbles"]=l;return p(function(){var c,d,f,g,h="padding:0;margin:0;border:0;display:block;overflow:hidden;",i=e.getElementsByTagName("body")[0];if(!i)return;c=e.createElement("div"),c.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",i.insertBefore(c,i.firstChild),d=e.createElement("div"),c.appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",f=d.getElementsByTagName("td"),f[0].style.cssText="padding:0;margin:0;border:0;display:none",l=f[0].offsetHeight===0,f[0].style.display="",f[1].style.display="none",b.reliableHiddenOffsets=l&&f[0].offsetHeight===0,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",b.boxSizing=d.offsetWidth===4,b.doesNotIncludeMarginInBodyOffset=i.offsetTop!==1,a.getComputedStyle&&(b.pixelPosition=(a.getComputedStyle(d,null)||{}).top!=="1%",b.boxSizingReliable=(a.getComputedStyle(d,null)||{width:"4px"}).width==="4px",g=e.createElement("div"),g.style.cssText=d.style.cssText=h,g.style.marginRight=g.style.width="0",d.style.width="1px",d.appendChild(g),b.reliableMarginRight=!parseFloat((a.getComputedStyle(g,null)||{}).marginRight)),typeof d.style.zoom!="undefined"&&(d.innerHTML="",d.style.cssText=h+"width:1px;padding:1px;display:inline;zoom:1",b.inlineBlockNeedsLayout=d.offsetWidth===3,d.style.display="block",d.style.overflow="visible",d.innerHTML="<div></div>",d.firstChild.style.width="5px",b.shrinkWrapBlocks=d.offsetWidth!==3,c.style.zoom=1),i.removeChild(c),c=d=f=g=null}),i.removeChild(n),c=d=f=g=h=i=n=null,b}();var H=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,I=/([A-Z])/g;p.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(p.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){return a=a.nodeType?p.cache[a[p.expando]]:a[p.expando],!!a&&!K(a)},data:function(a,c,d,e){if(!p.acceptData(a))return;var f,g,h=p.expando,i=typeof c=="string",j=a.nodeType,k=j?p.cache:a,l=j?a[h]:a[h]&&h;if((!l||!k[l]||!e&&!k[l].data)&&i&&d===b)return;l||(j?a[h]=l=p.deletedIds.pop()||p.guid++:l=h),k[l]||(k[l]={},j||(k[l].toJSON=p.noop));if(typeof c=="object"||typeof c=="function")e?k[l]=p.extend(k[l],c):k[l].data=p.extend(k[l].data,c);return f=k[l],e||(f.data||(f.data={}),f=f.data),d!==b&&(f[p.camelCase(c)]=d),i?(g=f[c],g==null&&(g=f[p.camelCase(c)])):g=f,g},removeData:function(a,b,c){if(!p.acceptData(a))return;var d,e,f,g=a.nodeType,h=g?p.cache:a,i=g?a[p.expando]:p.expando;if(!h[i])return;if(b){d=c?h[i]:h[i].data;if(d){p.isArray(b)||(b in d?b=[b]:(b=p.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,f=b.length;e<f;e++)delete d[b[e]];if(!(c?K:p.isEmptyObject)(d))return}}if(!c){delete h[i].data;if(!K(h[i]))return}g?p.cleanData([a],!0):p.support.deleteExpando||h!=h.window?delete h[i]:h[i]=null},_data:function(a,b,c){return p.data(a,b,c,!0)},acceptData:function(a){var b=a.nodeName&&p.noData[a.nodeName.toLowerCase()];return!b||b!==!0&&a.getAttribute("classid")===b}}),p.fn.extend({data:function(a,c){var d,e,f,g,h,i=this[0],j=0,k=null;if(a===b){if(this.length){k=p.data(i);if(i.nodeType===1&&!p._data(i,"parsedAttrs")){f=i.attributes;for(h=f.length;j<h;j++)g=f[j].name,g.indexOf("data-")||(g=p.camelCase(g.substring(5)),J(i,g,k[g]));p._data(i,"parsedAttrs",!0)}}return k}return typeof a=="object"?this.each(function(){p.data(this,a)}):(d=a.split(".",2),d[1]=d[1]?"."+d[1]:"",e=d[1]+"!",p.access(this,function(c){if(c===b)return k=this.triggerHandler("getData"+e,[d[0]]),k===b&&i&&(k=p.data(i,a),k=J(i,a,k)),k===b&&d[1]?this.data(d[0]):k;d[1]=c,this.each(function(){var b=p(this);b.triggerHandler("setData"+e,d),p.data(this,a,c),b.triggerHandler("changeData"+e,d)})},null,c,arguments.length>1,null,!1))},removeData:function(a){return this.each(function(){p.removeData(this,a)})}}),p.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=p._data(a,b),c&&(!d||p.isArray(c)?d=p._data(a,b,p.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=p.queue(a,b),d=c.length,e=c.shift(),f=p._queueHooks(a,b),g=function(){p.dequeue(a,b)};e==="inprogress"&&(e=c.shift(),d--),e&&(b==="fx"&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return p._data(a,c)||p._data(a,c,{empty:p.Callbacks("once memory").add(function(){p.removeData(a,b+"queue",!0),p.removeData(a,c,!0)})})}}),p.fn.extend({queue:function(a,c){var d=2;return typeof a!="string"&&(c=a,a="fx",d--),arguments.length<d?p.queue(this[0],a):c===b?this:this.each(function(){var b=p.queue(this,a,c);p._queueHooks(this,a),a==="fx"&&b[0]!=="inprogress"&&p.dequeue(this,a)})},dequeue:function(a){return this.each(function(){p.dequeue(this,a)})},delay:function(a,b){return a=p.fx?p.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){var d,e=1,f=p.Deferred(),g=this,h=this.length,i=function(){--e||f.resolveWith(g,[g])};typeof a!="string"&&(c=a,a=b),a=a||"fx";while(h--)d=p._data(g[h],a+"queueHooks"),d&&d.empty&&(e++,d.empty.add(i));return i(),f.promise(c)}});var L,M,N,O=/[\t\r\n]/g,P=/\r/g,Q=/^(?:button|input)$/i,R=/^(?:button|input|object|select|textarea)$/i,S=/^a(?:rea|)$/i,T=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,U=p.support.getSetAttribute;p.fn.extend({attr:function(a,b){return p.access(this,p.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){p.removeAttr(this,a)})},prop:function(a,b){return p.access(this,p.prop,a,b,arguments.length>1)},removeProp:function(a){return a=p.propFix[a]||a,this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,f,g,h;if(p.isFunction(a))return this.each(function(b){p(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(s);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{f=" "+e.className+" ";for(g=0,h=b.length;g<h;g++)f.indexOf(" "+b[g]+" ")<0&&(f+=b[g]+" ");e.className=p.trim(f)}}}return this},removeClass:function(a){var c,d,e,f,g,h,i;if(p.isFunction(a))return this.each(function(b){p(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(s);for(h=0,i=this.length;h<i;h++){e=this[h];if(e.nodeType===1&&e.className){d=(" "+e.className+" ").replace(O," ");for(f=0,g=c.length;f<g;f++)while(d.indexOf(" "+c[f]+" ")>=0)d=d.replace(" "+c[f]+" "," ");e.className=a?p.trim(d):""}}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";return p.isFunction(a)?this.each(function(c){p(this).toggleClass(a.call(this,c,this.className,b),b)}):this.each(function(){if(c==="string"){var e,f=0,g=p(this),h=b,i=a.split(s);while(e=i[f++])h=d?h:!g.hasClass(e),g[h?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&p._data(this,"__className__",this.className),this.className=this.className||a===!1?"":p._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(O," ").indexOf(b)>=0)return!0;return!1},val:function(a){var c,d,e,f=this[0];if(!arguments.length){if(f)return c=p.valHooks[f.type]||p.valHooks[f.nodeName.toLowerCase()],c&&"get"in c&&(d=c.get(f,"value"))!==b?d:(d=f.value,typeof d=="string"?d.replace(P,""):d==null?"":d);return}return e=p.isFunction(a),this.each(function(d){var f,g=p(this);if(this.nodeType!==1)return;e?f=a.call(this,d,g.val()):f=a,f==null?f="":typeof f=="number"?f+="":p.isArray(f)&&(f=p.map(f,function(a){return a==null?"":a+""})),c=p.valHooks[this.type]||p.valHooks[this.nodeName.toLowerCase()];if(!c||!("set"in c)||c.set(this,f,"value")===b)this.value=f})}}),p.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,f=a.selectedIndex,g=[],h=a.options,i=a.type==="select-one";if(f<0)return null;c=i?f:0,d=i?f+1:h.length;for(;c<d;c++){e=h[c];if(e.selected&&(p.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!p.nodeName(e.parentNode,"optgroup"))){b=p(e).val();if(i)return b;g.push(b)}}return i&&!g.length&&h.length?p(h[f]).val():g},set:function(a,b){var c=p.makeArray(b);return p(a).find("option").each(function(){this.selected=p.inArray(p(this).val(),c)>=0}),c.length||(a.selectedIndex=-1),c}}},attrFn:{},attr:function(a,c,d,e){var f,g,h,i=a.nodeType;if(!a||i===3||i===8||i===2)return;if(e&&p.isFunction(p.fn[c]))return p(a)[c](d);if(typeof a.getAttribute=="undefined")return p.prop(a,c,d);h=i!==1||!p.isXMLDoc(a),h&&(c=c.toLowerCase(),g=p.attrHooks[c]||(T.test(c)?M:L));if(d!==b){if(d===null){p.removeAttr(a,c);return}return g&&"set"in g&&h&&(f=g.set(a,d,c))!==b?f:(a.setAttribute(c,d+""),d)}return g&&"get"in g&&h&&(f=g.get(a,c))!==null?f:(f=a.getAttribute(c),f===null?b:f)},removeAttr:function(a,b){var c,d,e,f,g=0;if(b&&a.nodeType===1){d=b.split(s);for(;g<d.length;g++)e=d[g],e&&(c=p.propFix[e]||e,f=T.test(e),f||p.attr(a,e,""),a.removeAttribute(U?e:c),f&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(Q.test(a.nodeName)&&a.parentNode)p.error("type property can't be changed");else if(!p.support.radioValue&&b==="radio"&&p.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}},value:{get:function(a,b){return L&&p.nodeName(a,"button")?L.get(a,b):b in a?a.value:null},set:function(a,b,c){if(L&&p.nodeName(a,"button"))return L.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,f,g,h=a.nodeType;if(!a||h===3||h===8||h===2)return;return g=h!==1||!p.isXMLDoc(a),g&&(c=p.propFix[c]||c,f=p.propHooks[c]),d!==b?f&&"set"in f&&(e=f.set(a,d,c))!==b?e:a[c]=d:f&&"get"in f&&(e=f.get(a,c))!==null?e:a[c]},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):R.test(a.nodeName)||S.test(a.nodeName)&&a.href?0:b}}}}),M={get:function(a,c){var d,e=p.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;return b===!1?p.removeAttr(a,c):(d=p.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase())),c}},U||(N={name:!0,id:!0,coords:!0},L=p.valHooks.button={get:function(a,c){var d;return d=a.getAttributeNode(c),d&&(N[c]?d.value!=="":d.specified)?d.value:b},set:function(a,b,c){var d=a.getAttributeNode(c);return d||(d=e.createAttribute(c),a.setAttributeNode(d)),d.value=b+""}},p.each(["width","height"],function(a,b){p.attrHooks[b]=p.extend(p.attrHooks[b],{set:function(a,c){if(c==="")return a.setAttribute(b,"auto"),c}})}),p.attrHooks.contenteditable={get:L.get,set:function(a,b,c){b===""&&(b="false"),L.set(a,b,c)}}),p.support.hrefNormalized||p.each(["href","src","width","height"],function(a,c){p.attrHooks[c]=p.extend(p.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),p.support.style||(p.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=b+""}}),p.support.optSelected||(p.propHooks.selected=p.extend(p.propHooks.selected,{get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}})),p.support.enctype||(p.propFix.enctype="encoding"),p.support.checkOn||p.each(["radio","checkbox"],function(){p.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),p.each(["radio","checkbox"],function(){p.valHooks[this]=p.extend(p.valHooks[this],{set:function(a,b){if(p.isArray(b))return a.checked=p.inArray(p(a).val(),b)>=0}})});var V=/^(?:textarea|input|select)$/i,W=/^([^\.]*|)(?:\.(.+)|)$/,X=/(?:^|\s)hover(\.\S+|)\b/,Y=/^key/,Z=/^(?:mouse|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=function(a){return p.event.special.hover?a:a.replace(X,"mouseenter$1 mouseleave$1")};p.event={add:function(a,c,d,e,f){var g,h,i,j,k,l,m,n,o,q,r;if(a.nodeType===3||a.nodeType===8||!c||!d||!(g=p._data(a)))return;d.handler&&(o=d,d=o.handler,f=o.selector),d.guid||(d.guid=p.guid++),i=g.events,i||(g.events=i={}),h=g.handle,h||(g.handle=h=function(a){return typeof p!="undefined"&&(!a||p.event.triggered!==a.type)?p.event.dispatch.apply(h.elem,arguments):b},h.elem=a),c=p.trim(_(c)).split(" ");for(j=0;j<c.length;j++){k=W.exec(c[j])||[],l=k[1],m=(k[2]||"").split(".").sort(),r=p.event.special[l]||{},l=(f?r.delegateType:r.bindType)||l,r=p.event.special[l]||{},n=p.extend({type:l,origType:k[1],data:e,handler:d,guid:d.guid,selector:f,needsContext:f&&p.expr.match.needsContext.test(f),namespace:m.join(".")},o),q=i[l];if(!q){q=i[l]=[],q.delegateCount=0;if(!r.setup||r.setup.call(a,e,m,h)===!1)a.addEventListener?a.addEventListener(l,h,!1):a.attachEvent&&a.attachEvent("on"+l,h)}r.add&&(r.add.call(a,n),n.handler.guid||(n.handler.guid=d.guid)),f?q.splice(q.delegateCount++,0,n):q.push(n),p.event.global[l]=!0}a=null},global:{},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,q,r=p.hasData(a)&&p._data(a);if(!r||!(m=r.events))return;b=p.trim(_(b||"")).split(" ");for(f=0;f<b.length;f++){g=W.exec(b[f])||[],h=i=g[1],j=g[2];if(!h){for(h in m)p.event.remove(a,h+b[f],c,d,!0);continue}n=p.event.special[h]||{},h=(d?n.delegateType:n.bindType)||h,o=m[h]||[],k=o.length,j=j?new RegExp("(^|\\.)"+j.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(l=0;l<o.length;l++)q=o[l],(e||i===q.origType)&&(!c||c.guid===q.guid)&&(!j||j.test(q.namespace))&&(!d||d===q.selector||d==="**"&&q.selector)&&(o.splice(l--,1),q.selector&&o.delegateCount--,n.remove&&n.remove.call(a,q));o.length===0&&k!==o.length&&((!n.teardown||n.teardown.call(a,j,r.handle)===!1)&&p.removeEvent(a,h,r.handle),delete m[h])}p.isEmptyObject(m)&&(delete r.handle,p.removeData(a,"events",!0))},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,f,g){if(!f||f.nodeType!==3&&f.nodeType!==8){var h,i,j,k,l,m,n,o,q,r,s=c.type||c,t=[];if($.test(s+p.event.triggered))return;s.indexOf("!")>=0&&(s=s.slice(0,-1),i=!0),s.indexOf(".")>=0&&(t=s.split("."),s=t.shift(),t.sort());if((!f||p.event.customEvent[s])&&!p.event.global[s])return;c=typeof c=="object"?c[p.expando]?c:new p.Event(s,c):new p.Event(s),c.type=s,c.isTrigger=!0,c.exclusive=i,c.namespace=t.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+t.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,m=s.indexOf(":")<0?"on"+s:"";if(!f){h=p.cache;for(j in h)h[j].events&&h[j].events[s]&&p.event.trigger(c,d,h[j].handle.elem,!0);return}c.result=b,c.target||(c.target=f),d=d!=null?p.makeArray(d):[],d.unshift(c),n=p.event.special[s]||{};if(n.trigger&&n.trigger.apply(f,d)===!1)return;q=[[f,n.bindType||s]];if(!g&&!n.noBubble&&!p.isWindow(f)){r=n.delegateType||s,k=$.test(r+s)?f:f.parentNode;for(l=f;k;k=k.parentNode)q.push([k,r]),l=k;l===(f.ownerDocument||e)&&q.push([l.defaultView||l.parentWindow||a,r])}for(j=0;j<q.length&&!c.isPropagationStopped();j++)k=q[j][0],c.type=q[j][1],o=(p._data(k,"events")||{})[c.type]&&p._data(k,"handle"),o&&o.apply(k,d),o=m&&k[m],o&&p.acceptData(k)&&o.apply&&o.apply(k,d)===!1&&c.preventDefault();return c.type=s,!g&&!c.isDefaultPrevented()&&(!n._default||n._default.apply(f.ownerDocument,d)===!1)&&(s!=="click"||!p.nodeName(f,"a"))&&p.acceptData(f)&&m&&f[s]&&(s!=="focus"&&s!=="blur"||c.target.offsetWidth!==0)&&!p.isWindow(f)&&(l=f[m],l&&(f[m]=null),p.event.triggered=s,f[s](),p.event.triggered=b,l&&(f[m]=l)),c.result}return},dispatch:function(c){c=p.event.fix(c||a.event);var d,e,f,g,h,i,j,l,m,n,o=(p._data(this,"events")||{})[c.type]||[],q=o.delegateCount,r=k.call(arguments),s=!c.exclusive&&!c.namespace,t=p.event.special[c.type]||{},u=[];r[0]=c,c.delegateTarget=this;if(t.preDispatch&&t.preDispatch.call(this,c)===!1)return;if(q&&(!c.button||c.type!=="click"))for(f=c.target;f!=this;f=f.parentNode||this)if(f.disabled!==!0||c.type!=="click"){h={},j=[];for(d=0;d<q;d++)l=o[d],m=l.selector,h[m]===b&&(h[m]=l.needsContext?p(m,this).index(f)>=0:p.find(m,this,null,[f]).length),h[m]&&j.push(l);j.length&&u.push({elem:f,matches:j})}o.length>q&&u.push({elem:this,matches:o.slice(q)});for(d=0;d<u.length&&!c.isPropagationStopped();d++){i=u[d],c.currentTarget=i.elem;for(e=0;e<i.matches.length&&!c.isImmediatePropagationStopped();e++){l=i.matches[e];if(s||!c.namespace&&!l.namespace||c.namespace_re&&c.namespace_re.test(l.namespace))c.data=l.data,c.handleObj=l,g=((p.event.special[l.origType]||{}).handle||l.handler).apply(i.elem,r),g!==b&&(c.result=g,g===!1&&(c.preventDefault(),c.stopPropagation()))}}return t.postDispatch&&t.postDispatch.call(this,c),c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,c){var d,f,g,h=c.button,i=c.fromElement;return a.pageX==null&&c.clientX!=null&&(d=a.target.ownerDocument||e,f=d.documentElement,g=d.body,a.pageX=c.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=c.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?c.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0),a}},fix:function(a){if(a[p.expando])return a;var b,c,d=a,f=p.event.fixHooks[a.type]||{},g=f.props?this.props.concat(f.props):this.props;a=p.Event(d);for(b=g.length;b;)c=g[--b],a[c]=d[c];return a.target||(a.target=d.srcElement||e),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,f.filter?f.filter(a,d):a},special:{load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){p.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=p.extend(new p.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?p.event.trigger(e,null,b):p.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},p.event.handle=p.event.dispatch,p.removeEvent=e.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]=="undefined"&&(a[d]=null),a.detachEvent(d,c))},p.Event=function(a,b){if(this instanceof p.Event)a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?bb:ba):this.type=a,b&&p.extend(this,b),this.timeStamp=a&&a.timeStamp||p.now(),this[p.expando]=!0;else return new p.Event(a,b)},p.Event.prototype={preventDefault:function(){this.isDefaultPrevented=bb;var a=this.originalEvent;if(!a)return;a.preventDefault?a.preventDefault():a.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=bb;var a=this.originalEvent;if(!a)return;a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=bb,this.stopPropagation()},isDefaultPrevented:ba,isPropagationStopped:ba,isImmediatePropagationStopped:ba},p.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){p.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj,g=f.selector;if(!e||e!==d&&!p.contains(d,e))a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b;return c}}}),p.support.submitBubbles||(p.event.special.submit={setup:function(){if(p.nodeName(this,"form"))return!1;p.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=p.nodeName(c,"input")||p.nodeName(c,"button")?c.form:b;d&&!p._data(d,"_submit_attached")&&(p.event.add(d,"submit._submit",function(a){a._submit_bubble=!0}),p._data(d,"_submit_attached",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&p.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){if(p.nodeName(this,"form"))return!1;p.event.remove(this,"._submit")}}),p.support.changeBubbles||(p.event.special.change={setup:function(){if(V.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")p.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),p.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),p.event.simulate("change",this,a,!0)});return!1}p.event.add(this,"beforeactivate._change",function(a){var b=a.target;V.test(b.nodeName)&&!p._data(b,"_change_attached")&&(p.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&p.event.simulate("change",this.parentNode,a,!0)}),p._data(b,"_change_attached",!0))})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){return p.event.remove(this,"._change"),!V.test(this.nodeName)}}),p.support.focusinBubbles||p.each({focus:"focusin",blur:"focusout"},function(a,b){var c=0,d=function(a){p.event.simulate(b,a.target,p.event.fix(a),!0)};p.event.special[b]={setup:function(){c++===0&&e.addEventListener(a,d,!0)},teardown:function(){--c===0&&e.removeEventListener(a,d,!0)}}}),p.fn.extend({on:function(a,c,d,e,f){var g,h;if(typeof a=="object"){typeof c!="string"&&(d=d||c,c=b);for(h in a)this.on(h,c,d,a[h],f);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=ba;else if(!e)return this;return f===1&&(g=e,e=function(a){return p().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=p.guid++)),this.each(function(){p.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,c,d){var e,f;if(a&&a.preventDefault&&a.handleObj)return e=a.handleObj,p(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,e.handler),this;if(typeof a=="object"){for(f in a)this.off(f,c,a[f]);return this}if(c===!1||typeof c=="function")d=c,c=b;return d===!1&&(d=ba),this.each(function(){p.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){return p(this.context).on(a,this.selector,b,c),this},die:function(a,b){return p(this.context).off(a,this.selector||"**",b),this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length===1?this.off(a,"**"):this.off(b,a||"**",c)},trigger:function(a,b){return this.each(function(){p.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return p.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||p.guid++,d=0,e=function(c){var e=(p._data(this,"lastToggle"+a.guid)||0)%d;return p._data(this,"lastToggle"+a.guid,e+1),c.preventDefault(),b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){p.fn[b]=function(a,c){return c==null&&(c=a,a=null),arguments.length>0?this.on(b,null,a,c):this.trigger(b)},Y.test(b)&&(p.event.fixHooks[b]=p.event.keyHooks),Z.test(b)&&(p.event.fixHooks[b]=p.event.mouseHooks)}),function(a,b){function bc(a,b,c,d){c=c||[],b=b||r;var e,f,i,j,k=b.nodeType;if(!a||typeof a!="string")return c;if(k!==1&&k!==9)return[];i=g(b);if(!i&&!d)if(e=P.exec(a))if(j=e[1]){if(k===9){f=b.getElementById(j);if(!f||!f.parentNode)return c;if(f.id===j)return c.push(f),c}else if(b.ownerDocument&&(f=b.ownerDocument.getElementById(j))&&h(b,f)&&f.id===j)return c.push(f),c}else{if(e[2])return w.apply(c,x.call(b.getElementsByTagName(a),0)),c;if((j=e[3])&&_&&b.getElementsByClassName)return w.apply(c,x.call(b.getElementsByClassName(j),0)),c}return bp(a.replace(L,"$1"),b,c,d,i)}function bd(a){return function(b){var c=b.nodeName.toLowerCase();return c==="input"&&b.type===a}}function be(a){return function(b){var c=b.nodeName.toLowerCase();return(c==="input"||c==="button")&&b.type===a}}function bf(a){return z(function(b){return b=+b,z(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function bg(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}function bh(a,b){var c,d,f,g,h,i,j,k=C[o][a];if(k)return b?0:k.slice(0);h=a,i=[],j=e.preFilter;while(h){if(!c||(d=M.exec(h)))d&&(h=h.slice(d[0].length)),i.push(f=[]);c=!1;if(d=N.exec(h))f.push(c=new q(d.shift())),h=h.slice(c.length),c.type=d[0].replace(L," ");for(g in e.filter)(d=W[g].exec(h))&&(!j[g]||(d=j[g](d,r,!0)))&&(f.push(c=new q(d.shift())),h=h.slice(c.length),c.type=g,c.matches=d);if(!c)break}return b?h.length:h?bc.error(a):C(a,i).slice(0)}function bi(a,b,d){var e=b.dir,f=d&&b.dir==="parentNode",g=u++;return b.first?function(b,c,d){while(b=b[e])if(f||b.nodeType===1)return a(b,c,d)}:function(b,d,h){if(!h){var i,j=t+" "+g+" ",k=j+c;while(b=b[e])if(f||b.nodeType===1){if((i=b[o])===k)return b.sizset;if(typeof i=="string"&&i.indexOf(j)===0){if(b.sizset)return b}else{b[o]=k;if(a(b,d,h))return b.sizset=!0,b;b.sizset=!1}}}else while(b=b[e])if(f||b.nodeType===1)if(a(b,d,h))return b}}function bj(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function bk(a,b,c,d,e){var f,g=[],h=0,i=a.length,j=b!=null;for(;h<i;h++)if(f=a[h])if(!c||c(f,d,e))g.push(f),j&&b.push(h);return g}function bl(a,b,c,d,e,f){return d&&!d[o]&&(d=bl(d)),e&&!e[o]&&(e=bl(e,f)),z(function(f,g,h,i){if(f&&e)return;var j,k,l,m=[],n=[],o=g.length,p=f||bo(b||"*",h.nodeType?[h]:h,[],f),q=a&&(f||!b)?bk(p,m,a,h,i):p,r=c?e||(f?a:o||d)?[]:g:q;c&&c(q,r,h,i);if(d){l=bk(r,n),d(l,[],h,i),j=l.length;while(j--)if(k=l[j])r[n[j]]=!(q[n[j]]=k)}if(f){j=a&&r.length;while(j--)if(k=r[j])f[m[j]]=!(g[m[j]]=k)}else r=bk(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):w.apply(g,r)})}function bm(a){var b,c,d,f=a.length,g=e.relative[a[0].type],h=g||e.relative[" "],i=g?1:0,j=bi(function(a){return a===b},h,!0),k=bi(function(a){return y.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==l)||((b=c).nodeType?j(a,c,d):k(a,c,d))}];for(;i<f;i++)if(c=e.relative[a[i].type])m=[bi(bj(m),c)];else{c=e.filter[a[i].type].apply(null,a[i].matches);if(c[o]){d=++i;for(;d<f;d++)if(e.relative[a[d].type])break;return bl(i>1&&bj(m),i>1&&a.slice(0,i-1).join("").replace(L,"$1"),c,i<d&&bm(a.slice(i,d)),d<f&&bm(a=a.slice(d)),d<f&&a.join(""))}m.push(c)}return bj(m)}function bn(a,b){var d=b.length>0,f=a.length>0,g=function(h,i,j,k,m){var n,o,p,q=[],s=0,u="0",x=h&&[],y=m!=null,z=l,A=h||f&&e.find.TAG("*",m&&i.parentNode||i),B=t+=z==null?1:Math.E;y&&(l=i!==r&&i,c=g.el);for(;(n=A[u])!=null;u++){if(f&&n){for(o=0;p=a[o];o++)if(p(n,i,j)){k.push(n);break}y&&(t=B,c=++g.el)}d&&((n=!p&&n)&&s--,h&&x.push(n))}s+=u;if(d&&u!==s){for(o=0;p=b[o];o++)p(x,q,i,j);if(h){if(s>0)while(u--)!x[u]&&!q[u]&&(q[u]=v.call(k));q=bk(q)}w.apply(k,q),y&&!h&&q.length>0&&s+b.length>1&&bc.uniqueSort(k)}return y&&(t=B,l=z),x};return g.el=0,d?z(g):g}function bo(a,b,c,d){var e=0,f=b.length;for(;e<f;e++)bc(a,b[e],c,d);return c}function bp(a,b,c,d,f){var g,h,j,k,l,m=bh(a),n=m.length;if(!d&&m.length===1){h=m[0]=m[0].slice(0);if(h.length>2&&(j=h[0]).type==="ID"&&b.nodeType===9&&!f&&e.relative[h[1].type]){b=e.find.ID(j.matches[0].replace(V,""),b,f)[0];if(!b)return c;a=a.slice(h.shift().length)}for(g=W.POS.test(a)?-1:h.length-1;g>=0;g--){j=h[g];if(e.relative[k=j.type])break;if(l=e.find[k])if(d=l(j.matches[0].replace(V,""),R.test(h[0].type)&&b.parentNode||b,f)){h.splice(g,1),a=d.length&&h.join("");if(!a)return w.apply(c,x.call(d,0)),c;break}}}return i(a,m)(d,b,f,c,R.test(a)),c}function bq(){}var c,d,e,f,g,h,i,j,k,l,m=!0,n="undefined",o=("sizcache"+Math.random()).replace(".",""),q=String,r=a.document,s=r.documentElement,t=0,u=0,v=[].pop,w=[].push,x=[].slice,y=[].indexOf||function(a){var b=0,c=this.length;for(;b<c;b++)if(this[b]===a)return b;return-1},z=function(a,b){return a[o]=b==null||b,a},A=function(){var a={},b=[];return z(function(c,d){return b.push(c)>e.cacheLength&&delete a[b.shift()],a[c]=d},a)},B=A(),C=A(),D=A(),E="[\\x20\\t\\r\\n\\f]",F="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",G=F.replace("w","w#"),H="([*^$|!~]?=)",I="\\["+E+"*("+F+")"+E+"*(?:"+H+E+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+G+")|)|)"+E+"*\\]",J=":("+F+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+I+")|[^:]|\\\\.)*|.*))\\)|)",K=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+E+"*((?:-\\d)?\\d*)"+E+"*\\)|)(?=[^-]|$)",L=new RegExp("^"+E+"+|((?:^|[^\\\\])(?:\\\\.)*)"+E+"+$","g"),M=new RegExp("^"+E+"*,"+E+"*"),N=new RegExp("^"+E+"*([\\x20\\t\\r\\n\\f>+~])"+E+"*"),O=new RegExp(J),P=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,Q=/^:not/,R=/[\x20\t\r\n\f]*[+~]/,S=/:not\($/,T=/h\d/i,U=/input|select|textarea|button/i,V=/\\(?!\\)/g,W={ID:new RegExp("^#("+F+")"),CLASS:new RegExp("^\\.("+F+")"),NAME:new RegExp("^\\[name=['\"]?("+F+")['\"]?\\]"),TAG:new RegExp("^("+F.replace("w","w*")+")"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+J),POS:new RegExp(K,"i"),CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+E+"*(even|odd|(([+-]|)(\\d*)n|)"+E+"*(?:([+-]|)"+E+"*(\\d+)|))"+E+"*\\)|)","i"),needsContext:new RegExp("^"+E+"*[>+~]|"+K,"i")},X=function(a){var b=r.createElement("div");try{return a(b)}catch(c){return!1}finally{b=null}},Y=X(function(a){return a.appendChild(r.createComment("")),!a.getElementsByTagName("*").length}),Z=X(function(a){return a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!==n&&a.firstChild.getAttribute("href")==="#"}),$=X(function(a){a.innerHTML="<select></select>";var b=typeof a.lastChild.getAttribute("multiple");return b!=="boolean"&&b!=="string"}),_=X(function(a){return a.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!a.getElementsByClassName||!a.getElementsByClassName("e").length?!1:(a.lastChild.className="e",a.getElementsByClassName("e").length===2)}),ba=X(function(a){a.id=o+0,a.innerHTML="<a name='"+o+"'></a><div name='"+o+"'></div>",s.insertBefore(a,s.firstChild);var b=r.getElementsByName&&r.getElementsByName(o).length===2+r.getElementsByName(o+0).length;return d=!r.getElementById(o),s.removeChild(a),b});try{x.call(s.childNodes,0)[0].nodeType}catch(bb){x=function(a){var b,c=[];for(;b=this[a];a++)c.push(b);return c}}bc.matches=function(a,b){return bc(a,null,null,b)},bc.matchesSelector=function(a,b){return bc(b,null,null,[a]).length>0},f=bc.getText=function(a){var b,c="",d=0,e=a.nodeType;if(e){if(e===1||e===9||e===11){if(typeof a.textContent=="string")return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=f(a)}else if(e===3||e===4)return a.nodeValue}else for(;b=a[d];d++)c+=f(b);return c},g=bc.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?b.nodeName!=="HTML":!1},h=bc.contains=s.contains?function(a,b){var c=a.nodeType===9?a.documentElement:a,d=b&&b.parentNode;return a===d||!!(d&&d.nodeType===1&&c.contains&&c.contains(d))}:s.compareDocumentPosition?function(a,b){return b&&!!(a.compareDocumentPosition(b)&16)}:function(a,b){while(b=b.parentNode)if(b===a)return!0;return!1},bc.attr=function(a,b){var c,d=g(a);return d||(b=b.toLowerCase()),(c=e.attrHandle[b])?c(a):d||$?a.getAttribute(b):(c=a.getAttributeNode(b),c?typeof a[b]=="boolean"?a[b]?b:null:c.specified?c.value:null:null)},e=bc.selectors={cacheLength:50,createPseudo:z,match:W,attrHandle:Z?{}:{href:function(a){return a.getAttribute("href",2)},type:function(a){return a.getAttribute("type")}},find:{ID:d?function(a,b,c){if(typeof b.getElementById!==n&&!c){var d=b.getElementById(a);return d&&d.parentNode?[d]:[]}}:function(a,c,d){if(typeof c.getElementById!==n&&!d){var e=c.getElementById(a);return e?e.id===a||typeof e.getAttributeNode!==n&&e.getAttributeNode("id").value===a?[e]:b:[]}},TAG:Y?function(a,b){if(typeof b.getElementsByTagName!==n)return b.getElementsByTagName(a)}:function(a,b){var c=b.getElementsByTagName(a);if(a==="*"){var d,e=[],f=0;for(;d=c[f];f++)d.nodeType===1&&e.push(d);return e}return c},NAME:ba&&function(a,b){if(typeof b.getElementsByName!==n)return b.getElementsByName(name)},CLASS:_&&function(a,b,c){if(typeof b.getElementsByClassName!==n&&!c)return b.getElementsByClassName(a)}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(V,""),a[3]=(a[4]||a[5]||"").replace(V,""),a[2]==="~="&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),a[1]==="nth"?(a[2]||bc.error(a[0]),a[3]=+(a[3]?a[4]+(a[5]||1):2*(a[2]==="even"||a[2]==="odd")),a[4]=+(a[6]+a[7]||a[2]==="odd")):a[2]&&bc.error(a[0]),a},PSEUDO:function(a){var b,c;if(W.CHILD.test(a[0]))return null;if(a[3])a[2]=a[3];else if(b=a[4])O.test(b)&&(c=bh(b,!0))&&(c=b.indexOf(")",b.length-c)-b.length)&&(b=b.slice(0,c),a[0]=a[0].slice(0,c)),a[2]=b;return a.slice(0,3)}},filter:{ID:d?function(a){return a=a.replace(V,""),function(b){return b.getAttribute("id")===a}}:function(a){return a=a.replace(V,""),function(b){var c=typeof b.getAttributeNode!==n&&b.getAttributeNode("id");return c&&c.value===a}},TAG:function(a){return a==="*"?function(){return!0}:(a=a.replace(V,"").toLowerCase(),function(b){return b.nodeName&&b.nodeName.toLowerCase()===a})},CLASS:function(a){var b=B[o][a];return b||(b=B(a,new RegExp("(^|"+E+")"+a+"("+E+"|$)"))),function(a){return b.test(a.className||typeof a.getAttribute!==n&&a.getAttribute("class")||"")}},ATTR:function(a,b,c){return function(d,e){var f=bc.attr(d,a);return f==null?b==="!=":b?(f+="",b==="="?f===c:b==="!="?f!==c:b==="^="?c&&f.indexOf(c)===0:b==="*="?c&&f.indexOf(c)>-1:b==="$="?c&&f.substr(f.length-c.length)===c:b==="~="?(" "+f+" ").indexOf(c)>-1:b==="|="?f===c||f.substr(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d){return a==="nth"?function(a){var b,e,f=a.parentNode;if(c===1&&d===0)return!0;if(f){e=0;for(b=f.firstChild;b;b=b.nextSibling)if(b.nodeType===1){e++;if(a===b)break}}return e-=d,e===c||e%c===0&&e/c>=0}:function(b){var c=b;switch(a){case"only":case"first":while(c=c.previousSibling)if(c.nodeType===1)return!1;if(a==="first")return!0;c=b;case"last":while(c=c.nextSibling)if(c.nodeType===1)return!1;return!0}}},PSEUDO:function(a,b){var c,d=e.pseudos[a]||e.setFilters[a.toLowerCase()]||bc.error("unsupported pseudo: "+a);return d[o]?d(b):d.length>1?(c=[a,a,"",b],e.setFilters.hasOwnProperty(a.toLowerCase())?z(function(a,c){var e,f=d(a,b),g=f.length;while(g--)e=y.call(a,f[g]),a[e]=!(c[e]=f[g])}):function(a){return d(a,0,c)}):d}},pseudos:{not:z(function(a){var b=[],c=[],d=i(a.replace(L,"$1"));return d[o]?z(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)if(f=g[h])a[h]=!(b[h]=f)}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:z(function(a){return function(b){return bc(a,b).length>0}}),contains:z(function(a){return function(b){return(b.textContent||b.innerText||f(b)).indexOf(a)>-1}}),enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&!!a.checked||b==="option"&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},parent:function(a){return!e.pseudos.empty(a)},empty:function(a){var b;a=a.firstChild;while(a){if(a.nodeName>"@"||(b=a.nodeType)===3||b===4)return!1;a=a.nextSibling}return!0},header:function(a){return T.test(a.nodeName)},text:function(a){var b,c;return a.nodeName.toLowerCase()==="input"&&(b=a.type)==="text"&&((c=a.getAttribute("type"))==null||c.toLowerCase()===b)},radio:bd("radio"),checkbox:bd("checkbox"),file:bd("file"),password:bd("password"),image:bd("image"),submit:be("submit"),reset:be("reset"),button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&a.type==="button"||b==="button"},input:function(a){return U.test(a.nodeName)},focus:function(a){var b=a.ownerDocument;return a===b.activeElement&&(!b.hasFocus||b.hasFocus())&&(!!a.type||!!a.href)},active:function(a){return a===a.ownerDocument.activeElement},first:bf(function(a,b,c){return[0]}),last:bf(function(a,b,c){return[b-1]}),eq:bf(function(a,b,c){return[c<0?c+b:c]}),even:bf(function(a,b,c){for(var d=0;d<b;d+=2)a.push(d);return a}),odd:bf(function(a,b,c){for(var d=1;d<b;d+=2)a.push(d);return a}),lt:bf(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:bf(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},j=s.compareDocumentPosition?function(a,b){return a===b?(k=!0,0):(!a.compareDocumentPosition||!b.compareDocumentPosition?a.compareDocumentPosition:a.compareDocumentPosition(b)&4)?-1:1}:function(a,b){if(a===b)return k=!0,0;if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,h=b.parentNode,i=g;if(g===h)return bg(a,b);if(!g)return-1;if(!h)return 1;while(i)e.unshift(i),i=i.parentNode;i=h;while(i)f.unshift(i),i=i.parentNode;c=e.length,d=f.length;for(var j=0;j<c&&j<d;j++)if(e[j]!==f[j])return bg(e[j],f[j]);return j===c?bg(a,f[j],-1):bg(e[j],b,1)},[0,0].sort(j),m=!k,bc.uniqueSort=function(a){var b,c=1;k=m,a.sort(j);if(k)for(;b=a[c];c++)b===a[c-1]&&a.splice(c--,1);return a},bc.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},i=bc.compile=function(a,b){var c,d=[],e=[],f=D[o][a];if(!f){b||(b=bh(a)),c=b.length;while(c--)f=bm(b[c]),f[o]?d.push(f):e.push(f);f=D(a,bn(e,d))}return f},r.querySelectorAll&&function(){var a,b=bp,c=/'|\\/g,d=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,e=[":focus"],f=[":active",":focus"],h=s.matchesSelector||s.mozMatchesSelector||s.webkitMatchesSelector||s.oMatchesSelector||s.msMatchesSelector;X(function(a){a.innerHTML="<select><option selected=''></option></select>",a.querySelectorAll("[selected]").length||e.push("\\["+E+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),a.querySelectorAll(":checked").length||e.push(":checked")}),X(function(a){a.innerHTML="<p test=''></p>",a.querySelectorAll("[test^='']").length&&e.push("[*^$]="+E+"*(?:\"\"|'')"),a.innerHTML="<input type='hidden'/>",a.querySelectorAll(":enabled").length||e.push(":enabled",":disabled")}),e=new RegExp(e.join("|")),bp=function(a,d,f,g,h){if(!g&&!h&&(!e||!e.test(a))){var i,j,k=!0,l=o,m=d,n=d.nodeType===9&&a;if(d.nodeType===1&&d.nodeName.toLowerCase()!=="object"){i=bh(a),(k=d.getAttribute("id"))?l=k.replace(c,"\\$&"):d.setAttribute("id",l),l="[id='"+l+"'] ",j=i.length;while(j--)i[j]=l+i[j].join("");m=R.test(a)&&d.parentNode||d,n=i.join(",")}if(n)try{return w.apply(f,x.call(m.querySelectorAll(n),0)),f}catch(p){}finally{k||d.removeAttribute("id")}}return b(a,d,f,g,h)},h&&(X(function(b){a=h.call(b,"div");try{h.call(b,"[test!='']:sizzle"),f.push("!=",J)}catch(c){}}),f=new RegExp(f.join("|")),bc.matchesSelector=function(b,c){c=c.replace(d,"='$1']");if(!g(b)&&!f.test(c)&&(!e||!e.test(c)))try{var i=h.call(b,c);if(i||a||b.document&&b.document.nodeType!==11)return i}catch(j){}return bc(c,null,null,[b]).length>0})}(),e.pseudos.nth=e.pseudos.eq,e.filters=bq.prototype=e.pseudos,e.setFilters=new bq,bc.attr=p.attr,p.find=bc,p.expr=bc.selectors,p.expr[":"]=p.expr.pseudos,p.unique=bc.uniqueSort,p.text=bc.getText,p.isXMLDoc=bc.isXML,p.contains=bc.contains}(a);var bc=/Until$/,bd=/^(?:parents|prev(?:Until|All))/,be=/^.[^:#\[\.,]*$/,bf=p.expr.match.needsContext,bg={children:!0,contents:!0,next:!0,prev:!0};p.fn.extend({find:function(a){var b,c,d,e,f,g,h=this;if(typeof a!="string")return p(a).filter(function(){for(b=0,c=h.length;b<c;b++)if(p.contains(h[b],this))return!0});g=this.pushStack("","find",a);for(b=0,c=this.length;b<c;b++){d=g.length,p.find(a,this[b],g);if(b>0)for(e=d;e<g.length;e++)for(f=0;f<d;f++)if(g[f]===g[e]){g.splice(e--,1);break}}return g},has:function(a){var b,c=p(a,this),d=c.length;return this.filter(function(){for(b=0;b<d;b++)if(p.contains(this,c[b]))return!0})},not:function(a){return this.pushStack(bj(this,a,!1),"not",a)},filter:function(a){return this.pushStack(bj(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?bf.test(a)?p(a,this.context).index(this[0])>=0:p.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c,d=0,e=this.length,f=[],g=bf.test(a)||typeof a!="string"?p(a,b||this.context):0;for(;d<e;d++){c=this[d];while(c&&c.ownerDocument&&c!==b&&c.nodeType!==11){if(g?g.index(c)>-1:p.find.matchesSelector(c,a)){f.push(c);break}c=c.parentNode}}return f=f.length>1?p.unique(f):f,this.pushStack(f,"closest",a)},index:function(a){return a?typeof a=="string"?p.inArray(this[0],p(a)):p.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(a,b){var c=typeof a=="string"?p(a,b):p.makeArray(a&&a.nodeType?[a]:a),d=p.merge(this.get(),c);return this.pushStack(bh(c[0])||bh(d[0])?d:p.unique(d))},addBack:function(a){return this.add(a==null?this.prevObject:this.prevObject.filter(a))}}),p.fn.andSelf=p.fn.addBack,p.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return p.dir(a,"parentNode")},parentsUntil:function(a,b,c){return p.dir(a,"parentNode",c)},next:function(a){return bi(a,"nextSibling")},prev:function(a){return bi(a,"previousSibling")},nextAll:function(a){return p.dir(a,"nextSibling")},prevAll:function(a){return p.dir(a,"previousSibling")},nextUntil:function(a,b,c){return p.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return p.dir(a,"previousSibling",c)},siblings:function(a){return p.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return p.sibling(a.firstChild)},contents:function(a){return p.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:p.merge([],a.childNodes)}},function(a,b){p.fn[a]=function(c,d){var e=p.map(this,b,c);return bc.test(a)||(d=c),d&&typeof d=="string"&&(e=p.filter(d,e)),e=this.length>1&&!bg[a]?p.unique(e):e,this.length>1&&bd.test(a)&&(e=e.reverse()),this.pushStack(e,a,k.call(arguments).join(","))}}),p.extend({filter:function(a,b,c){return c&&(a=":not("+a+")"),b.length===1?p.find.matchesSelector(b[0],a)?[b[0]]:[]:p.find.matches(a,b)},dir:function(a,c,d){var e=[],f=a[c];while(f&&f.nodeType!==9&&(d===b||f.nodeType!==1||!p(f).is(d)))f.nodeType===1&&e.push(f),f=f[c];return e},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var bl="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",bm=/ jQuery\d+="(?:null|\d+)"/g,bn=/^\s+/,bo=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bp=/<([\w:]+)/,bq=/<tbody/i,br=/<|&#?\w+;/,bs=/<(?:script|style|link)/i,bt=/<(?:script|object|embed|option|style)/i,bu=new RegExp("<(?:"+bl+")[\\s/>]","i"),bv=/^(?:checkbox|radio)$/,bw=/checked\s*(?:[^=]|=\s*.checked.)/i,bx=/\/(java|ecma)script/i,by=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,bz={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bA=bk(e),bB=bA.appendChild(e.createElement("div"));bz.optgroup=bz.option,bz.tbody=bz.tfoot=bz.colgroup=bz.caption=bz.thead,bz.th=bz.td,p.support.htmlSerialize||(bz._default=[1,"X<div>","</div>"]),p.fn.extend({text:function(a){return p.access(this,function(a){return a===b?p.text(this):this.empty().append((this[0]&&this[0].ownerDocument||e).createTextNode(a))},null,a,arguments.length)},wrapAll:function(a){if(p.isFunction(a))return this.each(function(b){p(this).wrapAll(a.call(this,b))});if(this[0]){var b=p(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return p.isFunction(a)?this.each(function(b){p(this).wrapInner(a.call(this,b))}):this.each(function(){var b=p(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=p.isFunction(a);return this.each(function(c){p(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){p.nodeName(this,"body")||p(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){(this.nodeType===1||this.nodeType===11)&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){(this.nodeType===1||this.nodeType===11)&&this.insertBefore(a,this.firstChild)})},before:function(){if(!bh(this[0]))return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=p.clean(arguments);return this.pushStack(p.merge(a,this),"before",this.selector)}},after:function(){if(!bh(this[0]))return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=p.clean(arguments);return this.pushStack(p.merge(this,a),"after",this.selector)}},remove:function(a,b){var c,d=0;for(;(c=this[d])!=null;d++)if(!a||p.filter(a,[c]).length)!b&&c.nodeType===1&&(p.cleanData(c.getElementsByTagName("*")),p.cleanData([c])),c.parentNode&&c.parentNode.removeChild(c);return this},empty:function(){var a,b=0;for(;(a=this[b])!=null;b++){a.nodeType===1&&p.cleanData(a.getElementsByTagName("*"));while(a.firstChild)a.removeChild(a.firstChild)}return this},clone:function(a,b){return a=a==null?!1:a,b=b==null?a:b,this.map(function(){return p.clone(this,a,b)})},html:function(a){return p.access(this,function(a){var c=this[0]||{},d=0,e=this.length;if(a===b)return c.nodeType===1?c.innerHTML.replace(bm,""):b;if(typeof a=="string"&&!bs.test(a)&&(p.support.htmlSerialize||!bu.test(a))&&(p.support.leadingWhitespace||!bn.test(a))&&!bz[(bp.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(bo,"<$1></$2>");try{for(;d<e;d++)c=this[d]||{},c.nodeType===1&&(p.cleanData(c.getElementsByTagName("*")),c.innerHTML=a);c=0}catch(f){}}c&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(a){return bh(this[0])?this.length?this.pushStack(p(p.isFunction(a)?a():a),"replaceWith",a):this:p.isFunction(a)?this.each(function(b){var c=p(this),d=c.html();c.replaceWith(a.call(this,b,d))}):(typeof a!="string"&&(a=p(a).detach()),this.each(function(){var b=this.nextSibling,c=this.parentNode;p(this).remove(),b?p(b).before(a):p(c).append(a)}))},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){a=[].concat.apply([],a);var e,f,g,h,i=0,j=a[0],k=[],l=this.length;if(!p.support.checkClone&&l>1&&typeof j=="string"&&bw.test(j))return this.each(function(){p(this).domManip(a,c,d)});if(p.isFunction(j))return this.each(function(e){var f=p(this);a[0]=j.call(this,e,c?f.html():b),f.domManip(a,c,d)});if(this[0]){e=p.buildFragment(a,this,k),g=e.fragment,f=g.firstChild,g.childNodes.length===1&&(g=f);if(f){c=c&&p.nodeName(f,"tr");for(h=e.cacheable||l-1;i<l;i++)d.call(c&&p.nodeName(this[i],"table")?bC(this[i],"tbody"):this[i],i===h?g:p.clone(g,!0,!0))}g=f=null,k.length&&p.each(k,function(a,b){b.src?p.ajax?p.ajax({url:b.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):p.error("no ajax"):p.globalEval((b.text||b.textContent||b.innerHTML||"").replace(by,"")),b.parentNode&&b.parentNode.removeChild(b)})}return this}}),p.buildFragment=function(a,c,d){var f,g,h,i=a[0];return c=c||e,c=!c.nodeType&&c[0]||c,c=c.ownerDocument||c,a.length===1&&typeof i=="string"&&i.length<512&&c===e&&i.charAt(0)==="<"&&!bt.test(i)&&(p.support.checkClone||!bw.test(i))&&(p.support.html5Clone||!bu.test(i))&&(g=!0,f=p.fragments[i],h=f!==b),f||(f=c.createDocumentFragment(),p.clean(a,c,f,d),g&&(p.fragments[i]=h&&f)),{fragment:f,cacheable:g}},p.fragments={},p.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){p.fn[a]=function(c){var d,e=0,f=[],g=p(c),h=g.length,i=this.length===1&&this[0].parentNode;if((i==null||i&&i.nodeType===11&&i.childNodes.length===1)&&h===1)return g[b](this[0]),this;for(;e<h;e++)d=(e>0?this.clone(!0):this).get(),p(g[e])[b](d),f=f.concat(d);return this.pushStack(f,a,g.selector)}}),p.extend({clone:function(a,b,c){var d,e,f,g;p.support.html5Clone||p.isXMLDoc(a)||!bu.test("<"+a.nodeName+">")?g=a.cloneNode(!0):(bB.innerHTML=a.outerHTML,bB.removeChild(g=bB.firstChild));if((!p.support.noCloneEvent||!p.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!p.isXMLDoc(a)){bE(a,g),d=bF(a),e=bF(g);for(f=0;d[f];++f)e[f]&&bE(d[f],e[f])}if(b){bD(a,g);if(c){d=bF(a),e=bF(g);for(f=0;d[f];++f)bD(d[f],e[f])}}return d=e=null,g},clean:function(a,b,c,d){var f,g,h,i,j,k,l,m,n,o,q,r,s=b===e&&bA,t=[];if(!b||typeof b.createDocumentFragment=="undefined")b=e;for(f=0;(h=a[f])!=null;f++){typeof h=="number"&&(h+="");if(!h)continue;if(typeof h=="string")if(!br.test(h))h=b.createTextNode(h);else{s=s||bk(b),l=b.createElement("div"),s.appendChild(l),h=h.replace(bo,"<$1></$2>"),i=(bp.exec(h)||["",""])[1].toLowerCase(),j=bz[i]||bz._default,k=j[0],l.innerHTML=j[1]+h+j[2];while(k--)l=l.lastChild;if(!p.support.tbody){m=bq.test(h),n=i==="table"&&!m?l.firstChild&&l.firstChild.childNodes:j[1]==="<table>"&&!m?l.childNodes:[];for(g=n.length-1;g>=0;--g)p.nodeName(n[g],"tbody")&&!n[g].childNodes.length&&n[g].parentNode.removeChild(n[g])}!p.support.leadingWhitespace&&bn.test(h)&&l.insertBefore(b.createTextNode(bn.exec(h)[0]),l.firstChild),h=l.childNodes,l.parentNode.removeChild(l)}h.nodeType?t.push(h):p.merge(t,h)}l&&(h=l=s=null);if(!p.support.appendChecked)for(f=0;(h=t[f])!=null;f++)p.nodeName(h,"input")?bG(h):typeof h.getElementsByTagName!="undefined"&&p.grep(h.getElementsByTagName("input"),bG);if(c){q=function(a){if(!a.type||bx.test(a.type))return d?d.push(a.parentNode?a.parentNode.removeChild(a):a):c.appendChild(a)};for(f=0;(h=t[f])!=null;f++)if(!p.nodeName(h,"script")||!q(h))c.appendChild(h),typeof h.getElementsByTagName!="undefined"&&(r=p.grep(p.merge([],h.getElementsByTagName("script")),q),t.splice.apply(t,[f+1,0].concat(r)),f+=r.length)}return t},cleanData:function(a,b){var c,d,e,f,g=0,h=p.expando,i=p.cache,j=p.support.deleteExpando,k=p.event.special;for(;(e=a[g])!=null;g++)if(b||p.acceptData(e)){d=e[h],c=d&&i[d];if(c){if(c.events)for(f in c.events)k[f]?p.event.remove(e,f):p.removeEvent(e,f,c.handle);i[d]&&(delete i[d],j?delete e[h]:e.removeAttribute?e.removeAttribute(h):e[h]=null,p.deletedIds.push(d))}}}}),function(){var a,b;p.uaMatch=function(a){a=a.toLowerCase();var b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},a=p.uaMatch(g.userAgent),b={},a.browser&&(b[a.browser]=!0,b.version=a.version),b.chrome?b.webkit=!0:b.webkit&&(b.safari=!0),p.browser=b,p.sub=function(){function a(b,c){return new a.fn.init(b,c)}p.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function c(c,d){return d&&d instanceof p&&!(d instanceof a)&&(d=a(d)),p.fn.init.call(this,c,d,b)},a.fn.init.prototype=a.fn;var b=a(e);return a}}();var bH,bI,bJ,bK=/alpha\([^)]*\)/i,bL=/opacity=([^)]*)/,bM=/^(top|right|bottom|left)$/,bN=/^(none|table(?!-c[ea]).+)/,bO=/^margin/,bP=new RegExp("^("+q+")(.*)$","i"),bQ=new RegExp("^("+q+")(?!px)[a-z%]+$","i"),bR=new RegExp("^([-+])=("+q+")","i"),bS={},bT={position:"absolute",visibility:"hidden",display:"block"},bU={letterSpacing:0,fontWeight:400},bV=["Top","Right","Bottom","Left"],bW=["Webkit","O","Moz","ms"],bX=p.fn.toggle;p.fn.extend({css:function(a,c){return p.access(this,function(a,c,d){return d!==b?p.style(a,c,d):p.css(a,c)},a,c,arguments.length>1)},show:function(){return b$(this,!0)},hide:function(){return b$(this)},toggle:function(a,b){var c=typeof a=="boolean";return p.isFunction(a)&&p.isFunction(b)?bX.apply(this,arguments):this.each(function(){(c?a:bZ(this))?p(this).show():p(this).hide()})}}),p.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bH(a,"opacity");return c===""?"1":c}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":p.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!a||a.nodeType===3||a.nodeType===8||!a.style)return;var f,g,h,i=p.camelCase(c),j=a.style;c=p.cssProps[i]||(p.cssProps[i]=bY(j,i)),h=p.cssHooks[c]||p.cssHooks[i];if(d===b)return h&&"get"in h&&(f=h.get(a,!1,e))!==b?f:j[c];g=typeof d,g==="string"&&(f=bR.exec(d))&&(d=(f[1]+1)*f[2]+parseFloat(p.css(a,c)),g="number");if(d==null||g==="number"&&isNaN(d))return;g==="number"&&!p.cssNumber[i]&&(d+="px");if(!h||!("set"in h)||(d=h.set(a,d,e))!==b)try{j[c]=d}catch(k){}},css:function(a,c,d,e){var f,g,h,i=p.camelCase(c);return c=p.cssProps[i]||(p.cssProps[i]=bY(a.style,i)),h=p.cssHooks[c]||p.cssHooks[i],h&&"get"in h&&(f=h.get(a,!0,e)),f===b&&(f=bH(a,c)),f==="normal"&&c in bU&&(f=bU[c]),d||e!==b?(g=parseFloat(f),d||p.isNumeric(g)?g||0:f):f},swap:function(a,b,c){var d,e,f={};for(e in b)f[e]=a.style[e],a.style[e]=b[e];d=c.call(a);for(e in b)a.style[e]=f[e];return d}}),a.getComputedStyle?bH=function(b,c){var d,e,f,g,h=a.getComputedStyle(b,null),i=b.style;return h&&(d=h[c],d===""&&!p.contains(b.ownerDocument,b)&&(d=p.style(b,c)),bQ.test(d)&&bO.test(c)&&(e=i.width,f=i.minWidth,g=i.maxWidth,i.minWidth=i.maxWidth=i.width=d,d=h.width,i.width=e,i.minWidth=f,i.maxWidth=g)),d}:e.documentElement.currentStyle&&(bH=function(a,b){var c,d,e=a.currentStyle&&a.currentStyle[b],f=a.style;return e==null&&f&&f[b]&&(e=f[b]),bQ.test(e)&&!bM.test(b)&&(c=f.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),f.left=b==="fontSize"?"1em":e,e=f.pixelLeft+"px",f.left=c,d&&(a.runtimeStyle.left=d)),e===""?"auto":e}),p.each(["height","width"],function(a,b){p.cssHooks[b]={get:function(a,c,d){if(c)return a.offsetWidth===0&&bN.test(bH(a,"display"))?p.swap(a,bT,function(){return cb(a,b,d)}):cb(a,b,d)},set:function(a,c,d){return b_(a,c,d?ca(a,b,d,p.support.boxSizing&&p.css(a,"boxSizing")==="border-box"):0)}}}),p.support.opacity||(p.cssHooks.opacity={get:function(a,b){return bL.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=p.isNumeric(b)?"alpha(opacity="+b*100+")":"",f=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&p.trim(f.replace(bK,""))===""&&c.removeAttribute){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bK.test(f)?f.replace(bK,e):f+" "+e}}),p(function(){p.support.reliableMarginRight||(p.cssHooks.marginRight={get:function(a,b){return p.swap(a,{display:"inline-block"},function(){if(b)return bH(a,"marginRight")})}}),!p.support.pixelPosition&&p.fn.position&&p.each(["top","left"],function(a,b){p.cssHooks[b]={get:function(a,c){if(c){var d=bH(a,b);return bQ.test(d)?p(a).position()[b]+"px":d}}}})}),p.expr&&p.expr.filters&&(p.expr.filters.hidden=function(a){return a.offsetWidth===0&&a.offsetHeight===0||!p.support.reliableHiddenOffsets&&(a.style&&a.style.display||bH(a,"display"))==="none"},p.expr.filters.visible=function(a){return!p.expr.filters.hidden(a)}),p.each({margin:"",padding:"",border:"Width"},function(a,b){p.cssHooks[a+b]={expand:function(c){var d,e=typeof c=="string"?c.split(" "):[c],f={};for(d=0;d<4;d++)f[a+bV[d]+b]=e[d]||e[d-2]||e[0];return f}},bO.test(a)||(p.cssHooks[a+b].set=b_)});var cd=/%20/g,ce=/\[\]$/,cf=/\r?\n/g,cg=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,ch=/^(?:select|textarea)/i;p.fn.extend({serialize:function(){return p.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?p.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||ch.test(this.nodeName)||cg.test(this.type))}).map(function(a,b){var c=p(this).val();return c==null?null:p.isArray(c)?p.map(c,function(a,c){return{name:b.name,value:a.replace(cf,"\r\n")}}):{name:b.name,value:c.replace(cf,"\r\n")}}).get()}}),p.param=function(a,c){var d,e=[],f=function(a,b){b=p.isFunction(b)?b():b==null?"":b,e[e.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=p.ajaxSettings&&p.ajaxSettings.traditional);if(p.isArray(a)||a.jquery&&!p.isPlainObject(a))p.each(a,function(){f(this.name,this.value)});else for(d in a)ci(d,a[d],c,f);return e.join("&").replace(cd,"+")};var cj,ck,cl=/#.*$/,cm=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,cn=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,co=/^(?:GET|HEAD)$/,cp=/^\/\//,cq=/\?/,cr=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,cs=/([?&])_=[^&]*/,ct=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,cu=p.fn.load,cv={},cw={},cx=["*/"]+["*"];try{ck=f.href}catch(cy){ck=e.createElement("a"),ck.href="",ck=ck.href}cj=ct.exec(ck.toLowerCase())||[],p.fn.load=function(a,c,d){if(typeof a!="string"&&cu)return cu.apply(this,arguments);if(!this.length)return this;var e,f,g,h=this,i=a.indexOf(" ");return i>=0&&(e=a.slice(i,a.length),a=a.slice(0,i)),p.isFunction(c)?(d=c,c=b):c&&typeof c=="object"&&(f="POST"),p.ajax({url:a,type:f,dataType:"html",data:c,complete:function(a,b){d&&h.each(d,g||[a.responseText,b,a])}}).done(function(a){g=arguments,h.html(e?p("<div>").append(a.replace(cr,"")).find(e):a)}),this},p.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){p.fn[b]=function(a){return this.on(b,a)}}),p.each(["get","post"],function(a,c){p[c]=function(a,d,e,f){return p.isFunction(d)&&(f=f||e,e=d,d=b),p.ajax({type:c,url:a,data:d,success:e,dataType:f})}}),p.extend({getScript:function(a,c){return p.get(a,b,c,"script")},getJSON:function(a,b,c){return p.get(a,b,c,"json")},ajaxSetup:function(a,b){return b?cB(a,p.ajaxSettings):(b=a,a=p.ajaxSettings),cB(a,b),a},ajaxSettings:{url:ck,isLocal:cn.test(cj[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":cx},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":p.parseJSON,"text xml":p.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:cz(cv),ajaxTransport:cz(cw),ajax:function(a,c){function y(a,c,f,i){var k,s,t,u,w,y=c;if(v===2)return;v=2,h&&clearTimeout(h),g=b,e=i||"",x.readyState=a>0?4:0,f&&(u=cC(l,x,f));if(a>=200&&a<300||a===304)l.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(p.lastModified[d]=w),w=x.getResponseHeader("Etag"),w&&(p.etag[d]=w)),a===304?(y="notmodified",k=!0):(k=cD(l,u),y=k.state,s=k.data,t=k.error,k=!t);else{t=y;if(!y||a)y="error",a<0&&(a=0)}x.status=a,x.statusText=(c||y)+"",k?o.resolveWith(m,[s,y,x]):o.rejectWith(m,[x,y,t]),x.statusCode(r),r=b,j&&n.trigger("ajax"+(k?"Success":"Error"),[x,l,k?s:t]),q.fireWith(m,[x,y]),j&&(n.trigger("ajaxComplete",[x,l]),--p.active||p.event.trigger("ajaxStop"))}typeof a=="object"&&(c=a,a=b),c=c||{};var d,e,f,g,h,i,j,k,l=p.ajaxSetup({},c),m=l.context||l,n=m!==l&&(m.nodeType||m instanceof p)?p(m):p.event,o=p.Deferred(),q=p.Callbacks("once memory"),r=l.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,setRequestHeader:function(a,b){if(!v){var c=a.toLowerCase();a=u[c]=u[c]||a,t[a]=b}return this},getAllResponseHeaders:function(){return v===2?e:null},getResponseHeader:function(a){var c;if(v===2){if(!f){f={};while(c=cm.exec(e))f[c[1].toLowerCase()]=c[2]}c=f[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){return v||(l.mimeType=a),this},abort:function(a){return a=a||w,g&&g.abort(a),y(0,a),this}};o.promise(x),x.success=x.done,x.error=x.fail,x.complete=q.add,x.statusCode=function(a){if(a){var b;if(v<2)for(b in a)r[b]=[r[b],a[b]];else b=a[x.status],x.always(b)}return this},l.url=((a||l.url)+"").replace(cl,"").replace(cp,cj[1]+"//"),l.dataTypes=p.trim(l.dataType||"*").toLowerCase().split(s),l.crossDomain==null&&(i=ct.exec(l.url.toLowerCase())||!1,l.crossDomain=i&&i.join(":")+(i[3]?"":i[1]==="http:"?80:443)!==cj.join(":")+(cj[3]?"":cj[1]==="http:"?80:443)),l.data&&l.processData&&typeof l.data!="string"&&(l.data=p.param(l.data,l.traditional)),cA(cv,l,c,x);if(v===2)return x;j=l.global,l.type=l.type.toUpperCase(),l.hasContent=!co.test(l.type),j&&p.active++===0&&p.event.trigger("ajaxStart");if(!l.hasContent){l.data&&(l.url+=(cq.test(l.url)?"&":"?")+l.data,delete l.data),d=l.url;if(l.cache===!1){var z=p.now(),A=l.url.replace(cs,"$1_="+z);l.url=A+(A===l.url?(cq.test(l.url)?"&":"?")+"_="+z:"")}}(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",l.contentType),l.ifModified&&(d=d||l.url,p.lastModified[d]&&x.setRequestHeader("If-Modified-Since",p.lastModified[d]),p.etag[d]&&x.setRequestHeader("If-None-Match",p.etag[d])),x.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+(l.dataTypes[0]!=="*"?", "+cx+"; q=0.01":""):l.accepts["*"]);for(k in l.headers)x.setRequestHeader(k,l.headers[k]);if(!l.beforeSend||l.beforeSend.call(m,x,l)!==!1&&v!==2){w="abort";for(k in{success:1,error:1,complete:1})x[k](l[k]);g=cA(cw,l,c,x);if(!g)y(-1,"No Transport");else{x.readyState=1,j&&n.trigger("ajaxSend",[x,l]),l.async&&l.timeout>0&&(h=setTimeout(function(){x.abort("timeout")},l.timeout));try{v=1,g.send(t,y)}catch(B){if(v<2)y(-1,B);else throw B}}return x}return x.abort()},active:0,lastModified:{},etag:{}});var cE=[],cF=/\?/,cG=/(=)\?(?=&|$)|\?\?/,cH=p.now();p.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=cE.pop()||p.expando+"_"+cH++;return this[a]=!0,a}}),p.ajaxPrefilter("json jsonp",function(c,d,e){var f,g,h,i=c.data,j=c.url,k=c.jsonp!==!1,l=k&&cG.test(j),m=k&&!l&&typeof i=="string"&&!(c.contentType||"").indexOf("application/x-www-form-urlencoded")&&cG.test(i);if(c.dataTypes[0]==="jsonp"||l||m)return f=c.jsonpCallback=p.isFunction(c.jsonpCallback)?c.jsonpCallback():c.jsonpCallback,g=a[f],l?c.url=j.replace(cG,"$1"+f):m?c.data=i.replace(cG,"$1"+f):k&&(c.url+=(cF.test(j)?"&":"?")+c.jsonp+"="+f),c.converters["script json"]=function(){return h||p.error(f+" was not called"),h[0]},c.dataTypes[0]="json",a[f]=function(){h=arguments},e.always(function(){a[f]=g,c[f]&&(c.jsonpCallback=d.jsonpCallback,cE.push(f)),h&&p.isFunction(g)&&g(h[0]),h=g=b}),"script"}),p.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){return p.globalEval(a),a}}}),p.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),p.ajaxTransport("script",function(a){if(a.crossDomain){var c,d=e.head||e.getElementsByTagName("head")[0]||e.documentElement;return{send:function(f,g){c=e.createElement("script"),c.async="async",a.scriptCharset&&(c.charset=a.scriptCharset),c.src=a.url,c.onload=c.onreadystatechange=function(a,e){if(e||!c.readyState||/loaded|complete/.test(c.readyState))c.onload=c.onreadystatechange=null,d&&c.parentNode&&d.removeChild(c),c=b,e||g(200,"success")},d.insertBefore(c,d.firstChild)},abort:function(){c&&c.onload(0,1)}}}});var cI,cJ=a.ActiveXObject?function(){for(var a in cI)cI[a](0,1)}:!1,cK=0;p.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&cL()||cM()}:cL,function(a){p.extend(p.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(p.ajaxSettings.xhr()),p.support.ajax&&p.ajaxTransport(function(c){if(!c.crossDomain||p.support.cors){var d;return{send:function(e,f){var g,h,i=c.xhr();c.username?i.open(c.type,c.url,c.async,c.username,c.password):i.open(c.type,c.url,c.async);if(c.xhrFields)for(h in c.xhrFields)i[h]=c.xhrFields[h];c.mimeType&&i.overrideMimeType&&i.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(h in e)i.setRequestHeader(h,e[h])}catch(j){}i.send(c.hasContent&&c.data||null),d=function(a,e){var h,j,k,l,m;try{if(d&&(e||i.readyState===4)){d=b,g&&(i.onreadystatechange=p.noop,cJ&&delete cI[g]);if(e)i.readyState!==4&&i.abort();else{h=i.status,k=i.getAllResponseHeaders(),l={},m=i.responseXML,m&&m.documentElement&&(l.xml=m);try{l.text=i.responseText}catch(a){}try{j=i.statusText}catch(n){j=""}!h&&c.isLocal&&!c.crossDomain?h=l.text?200:404:h===1223&&(h=204)}}}catch(o){e||f(-1,o)}l&&f(h,j,l,k)},c.async?i.readyState===4?setTimeout(d,0):(g=++cK,cJ&&(cI||(cI={},p(a).unload(cJ)),cI[g]=d),i.onreadystatechange=d):d()},abort:function(){d&&d(0,1)}}}});var cN,cO,cP=/^(?:toggle|show|hide)$/,cQ=new RegExp("^(?:([-+])=|)("+q+")([a-z%]*)$","i"),cR=/queueHooks$/,cS=[cY],cT={"*":[function(a,b){var c,d,e=this.createTween(a,b),f=cQ.exec(b),g=e.cur(),h=+g||0,i=1,j=20;if(f){c=+f[2],d=f[3]||(p.cssNumber[a]?"":"px");if(d!=="px"&&h){h=p.css(e.elem,a,!0)||c||1;do i=i||".5",h=h/i,p.style(e.elem,a,h+d);while(i!==(i=e.cur()/g)&&i!==1&&--j)}e.unit=d,e.start=h,e.end=f[1]?h+(f[1]+1)*c:c}return e}]};p.Animation=p.extend(cW,{tweener:function(a,b){p.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");var c,d=0,e=a.length;for(;d<e;d++)c=a[d],cT[c]=cT[c]||[],cT[c].unshift(b)},prefilter:function(a,b){b?cS.unshift(a):cS.push(a)}}),p.Tween=cZ,cZ.prototype={constructor:cZ,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(p.cssNumber[c]?"":"px")},cur:function(){var a=cZ.propHooks[this.prop];return a&&a.get?a.get(this):cZ.propHooks._default.get(this)},run:function(a){var b,c=cZ.propHooks[this.prop];return this.options.duration?this.pos=b=p.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):cZ.propHooks._default.set(this),this}},cZ.prototype.init.prototype=cZ.prototype,cZ.propHooks={_default:{get:function(a){var b;return a.elem[a.prop]==null||!!a.elem.style&&a.elem.style[a.prop]!=null?(b=p.css(a.elem,a.prop,!1,""),!b||b==="auto"?0:b):a.elem[a.prop]},set:function(a){p.fx.step[a.prop]?p.fx.step[a.prop](a):a.elem.style&&(a.elem.style[p.cssProps[a.prop]]!=null||p.cssHooks[a.prop])?p.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},cZ.propHooks.scrollTop=cZ.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},p.each(["toggle","show","hide"],function(a,b){var c=p.fn[b];p.fn[b]=function(d,e,f){return d==null||typeof d=="boolean"||!a&&p.isFunction(d)&&p.isFunction(e)?c.apply(this,arguments):this.animate(c$(b,!0),d,e,f)}}),p.fn.extend({fadeTo:function(a,b,c,d){return this.filter(bZ).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=p.isEmptyObject(a),f=p.speed(b,c,d),g=function(){var b=cW(this,p.extend({},a),f);e&&b.stop(!0)};return e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,c,d){var e=function(a){var b=a.stop;delete a.stop,b(d)};return typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,c=a!=null&&a+"queueHooks",f=p.timers,g=p._data(this);if(c)g[c]&&g[c].stop&&e(g[c]);else for(c in g)g[c]&&g[c].stop&&cR.test(c)&&e(g[c]);for(c=f.length;c--;)f[c].elem===this&&(a==null||f[c].queue===a)&&(f[c].anim.stop(d),b=!1,f.splice(c,1));(b||!d)&&p.dequeue(this,a)})}}),p.each({slideDown:c$("show"),slideUp:c$("hide"),slideToggle:c$("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){p.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),p.speed=function(a,b,c){var d=a&&typeof a=="object"?p.extend({},a):{complete:c||!c&&b||p.isFunction(a)&&a,duration:a,easing:c&&b||b&&!p.isFunction(b)&&b};d.duration=p.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in p.fx.speeds?p.fx.speeds[d.duration]:p.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";return d.old=d.complete,d.complete=function(){p.isFunction(d.old)&&d.old.call(this),d.queue&&p.dequeue(this,d.queue)},d},p.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},p.timers=[],p.fx=cZ.prototype.init,p.fx.tick=function(){var a,b=p.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||p.fx.stop()},p.fx.timer=function(a){a()&&p.timers.push(a)&&!cO&&(cO=setInterval(p.fx.tick,p.fx.interval))},p.fx.interval=13,p.fx.stop=function(){clearInterval(cO),cO=null},p.fx.speeds={slow:600,fast:200,_default:400},p.fx.step={},p.expr&&p.expr.filters&&(p.expr.filters.animated=function(a){return p.grep(p.timers,function(b){return a===b.elem}).length});var c_=/^(?:body|html)$/i;p.fn.offset=function(a){if(arguments.length)return a===b?this:this.each(function(b){p.offset.setOffset(this,a,b)});var c,d,e,f,g,h,i,j={top:0,left:0},k=this[0],l=k&&k.ownerDocument;if(!l)return;return(d=l.body)===k?p.offset.bodyOffset(k):(c=l.documentElement,p.contains(c,k)?(typeof k.getBoundingClientRect!="undefined"&&(j=k.getBoundingClientRect()),e=da(l),f=c.clientTop||d.clientTop||0,g=c.clientLeft||d.clientLeft||0,h=e.pageYOffset||c.scrollTop,i=e.pageXOffset||c.scrollLeft,{top:j.top+h-f,left:j.left+i-g}):j)},p.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;return p.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(p.css(a,"marginTop"))||0,c+=parseFloat(p.css(a,"marginLeft"))||0),{top:b,left:c}},setOffset:function(a,b,c){var d=p.css(a,"position");d==="static"&&(a.style.position="relative");var e=p(a),f=e.offset(),g=p.css(a,"top"),h=p.css(a,"left"),i=(d==="absolute"||d==="fixed")&&p.inArray("auto",[g,h])>-1,j={},k={},l,m;i?(k=e.position(),l=k.top,m=k.left):(l=parseFloat(g)||0,m=parseFloat(h)||0),p.isFunction(b)&&(b=b.call(a,c,f)),b.top!=null&&(j.top=b.top-f.top+l),b.left!=null&&(j.left=b.left-f.left+m),"using"in b?b.using.call(a,j):e.css(j)}},p.fn.extend({position:function(){if(!this[0])return;var a=this[0],b=this.offsetParent(),c=this.offset(),d=c_.test(b[0].nodeName)?{top:0,left:0}:b.offset();return c.top-=parseFloat(p.css(a,"marginTop"))||0,c.left-=parseFloat(p.css(a,"marginLeft"))||0,d.top+=parseFloat(p.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(p.css(b[0],"borderLeftWidth"))||0,{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||e.body;while(a&&!c_.test(a.nodeName)&&p.css(a,"position")==="static")a=a.offsetParent;return a||e.body})}}),p.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,c){var d=/Y/.test(c);p.fn[a]=function(e){return p.access(this,function(a,e,f){var g=da(a);if(f===b)return g?c in g?g[c]:g.document.documentElement[e]:a[e];g?g.scrollTo(d?p(g).scrollLeft():f,d?f:p(g).scrollTop()):a[e]=f},a,e,arguments.length,null)}}),p.each({Height:"height",Width:"width"},function(a,c){p.each({padding:"inner"+a,content:c,"":"outer"+a},function(d,e){p.fn[e]=function(e,f){var g=arguments.length&&(d||typeof e!="boolean"),h=d||(e===!0||f===!0?"margin":"border");return p.access(this,function(c,d,e){var f;return p.isWindow(c)?c.document.documentElement["client"+a]:c.nodeType===9?(f=c.documentElement,Math.max(c.body["scroll"+a],f["scroll"+a],c.body["offset"+a],f["offset"+a],f["client"+a])):e===b?p.css(c,d,e,h):p.style(c,d,e,h)},c,g?e:b,g,null)}})}),a.jQuery=a.$=p,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return p})})(window);
;
;
/*! jquery-ui-1.9.1.custom.min.js */ 
;
;
/*! jQuery UI - v1.9.1 - 2012-11-05
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.position.js, jquery.ui.draggable.js, jquery.ui.resizable.js, jquery.ui.sortable.js
* Copyright (c) 2012 jQuery Foundation and other contributors Licensed MIT */
(function(e,t){function i(t,n){var r,i,o,u=t.nodeName.toLowerCase();return"area"===u?(r=t.parentNode,i=r.name,!t.href||!i||r.nodeName.toLowerCase()!=="map"?!1:(o=e("img[usemap=#"+i+"]")[0],!!o&&s(o))):(/input|select|textarea|button|object/.test(u)?!t.disabled:"a"===u?t.href||n:n)&&s(t)}function s(t){return e.expr.filters.visible(t)&&!e(t).parents().andSelf().filter(function(){return e.css(this,"visibility")==="hidden"}).length}var n=0,r=/^ui-id-\d+$/;e.ui=e.ui||{};if(e.ui.version)return;e.extend(e.ui,{version:"1.9.1",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({_focus:e.fn.focus,focus:function(t,n){return typeof t=="number"?this.each(function(){var r=this;setTimeout(function(){e(r).focus(),n&&n.call(r)},t)}):this._focus.apply(this,arguments)},scrollParent:function(){var t;return e.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?t=this.parents().filter(function(){return/(relative|absolute|fixed)/.test(e.css(this,"position"))&&/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0):t=this.parents().filter(function(){return/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!t.length?e(document):t},zIndex:function(n){if(n!==t)return this.css("zIndex",n);if(this.length){var r=e(this[0]),i,s;while(r.length&&r[0]!==document){i=r.css("position");if(i==="absolute"||i==="relative"||i==="fixed"){s=parseInt(r.css("zIndex"),10);if(!isNaN(s)&&s!==0)return s}r=r.parent()}}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++n)})},removeUniqueId:function(){return this.each(function(){r.test(this.id)&&e(this).removeAttr("id")})}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(n,r){function u(t,n,r,s){return e.each(i,function(){n-=parseFloat(e.css(t,"padding"+this))||0,r&&(n-=parseFloat(e.css(t,"border"+this+"Width"))||0),s&&(n-=parseFloat(e.css(t,"margin"+this))||0)}),n}var i=r==="Width"?["Left","Right"]:["Top","Bottom"],s=r.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+r]=function(n){return n===t?o["inner"+r].call(this):this.each(function(){e(this).css(s,u(this,n)+"px")})},e.fn["outer"+r]=function(t,n){return typeof t!="number"?o["outer"+r].call(this,t):this.each(function(){e(this).css(s,u(this,t,!0,n)+"px")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(n){return!!e.data(n,t)}}):function(t,n,r){return!!e.data(t,r[3])},focusable:function(t){return i(t,!isNaN(e.attr(t,"tabindex")))},tabbable:function(t){var n=e.attr(t,"tabindex"),r=isNaN(n);return(r||n>=0)&&i(t,!r)}}),e(function(){var t=document.body,n=t.appendChild(n=document.createElement("div"));n.offsetHeight,e.extend(n.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0}),e.support.minHeight=n.offsetHeight===100,e.support.selectstart="onselectstart"in n,t.removeChild(n).style.display="none"}),function(){var t=/msie ([\w.]+)/.exec(navigator.userAgent.toLowerCase())||[];e.ui.ie=t.length?!0:!1,e.ui.ie6=parseFloat(t[1],10)===6}(),e.fn.extend({disableSelection:function(){return this.bind((e.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(e){e.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),e.extend(e.ui,{plugin:{add:function(t,n,r){var i,s=e.ui[t].prototype;for(i in r)s.plugins[i]=s.plugins[i]||[],s.plugins[i].push([n,r[i]])},call:function(e,t,n){var r,i=e.plugins[t];if(!i||!e.element[0].parentNode||e.element[0].parentNode.nodeType===11)return;for(r=0;r<i.length;r++)e.options[i[r][0]]&&i[r][1].apply(e.element,n)}},contains:e.contains,hasScroll:function(t,n){if(e(t).css("overflow")==="hidden")return!1;var r=n&&n==="left"?"scrollLeft":"scrollTop",i=!1;return t[r]>0?!0:(t[r]=1,i=t[r]>0,t[r]=0,i)},isOverAxis:function(e,t,n){return e>t&&e<t+n},isOver:function(t,n,r,i,s,o){return e.ui.isOverAxis(t,r,s)&&e.ui.isOverAxis(n,i,o)}})})(jQuery);(function(e,t){var n=0,r=Array.prototype.slice,i=e.cleanData;e.cleanData=function(t){for(var n=0,r;(r=t[n])!=null;n++)try{e(r).triggerHandler("remove")}catch(s){}i(t)},e.widget=function(t,n,r){var i,s,o,u,a=t.split(".")[0];t=t.split(".")[1],i=a+"-"+t,r||(r=n,n=e.Widget),e.expr[":"][i.toLowerCase()]=function(t){return!!e.data(t,i)},e[a]=e[a]||{},s=e[a][t],o=e[a][t]=function(e,t){if(!this._createWidget)return new o(e,t);arguments.length&&this._createWidget(e,t)},e.extend(o,s,{version:r.version,_proto:e.extend({},r),_childConstructors:[]}),u=new n,u.options=e.widget.extend({},u.options),e.each(r,function(t,i){e.isFunction(i)&&(r[t]=function(){var e=function(){return n.prototype[t].apply(this,arguments)},r=function(e){return n.prototype[t].apply(this,e)};return function(){var t=this._super,n=this._superApply,s;return this._super=e,this._superApply=r,s=i.apply(this,arguments),this._super=t,this._superApply=n,s}}())}),o.prototype=e.widget.extend(u,{widgetEventPrefix:u.widgetEventPrefix||t},r,{constructor:o,namespace:a,widgetName:t,widgetBaseClass:i,widgetFullName:i}),s?(e.each(s._childConstructors,function(t,n){var r=n.prototype;e.widget(r.namespace+"."+r.widgetName,o,n._proto)}),delete s._childConstructors):n._childConstructors.push(o),e.widget.bridge(t,o)},e.widget.extend=function(n){var i=r.call(arguments,1),s=0,o=i.length,u,a;for(;s<o;s++)for(u in i[s])a=i[s][u],i[s].hasOwnProperty(u)&&a!==t&&(e.isPlainObject(a)?n[u]=e.isPlainObject(n[u])?e.widget.extend({},n[u],a):e.widget.extend({},a):n[u]=a);return n},e.widget.bridge=function(n,i){var s=i.prototype.widgetFullName;e.fn[n]=function(o){var u=typeof o=="string",a=r.call(arguments,1),f=this;return o=!u&&a.length?e.widget.extend.apply(null,[o].concat(a)):o,u?this.each(function(){var r,i=e.data(this,s);if(!i)return e.error("cannot call methods on "+n+" prior to initialization; "+"attempted to call method '"+o+"'");if(!e.isFunction(i[o])||o.charAt(0)==="_")return e.error("no such method '"+o+"' for "+n+" widget instance");r=i[o].apply(i,a);if(r!==i&&r!==t)return f=r&&r.jquery?f.pushStack(r.get()):r,!1}):this.each(function(){var t=e.data(this,s);t?t.option(o||{})._init():new i(o,this)}),f}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,r){r=e(r||this.defaultElement||this)[0],this.element=e(r),this.uuid=n++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this.bindings=e(),this.hoverable=e(),this.focusable=e(),r!==this&&(e.data(r,this.widgetName,this),e.data(r,this.widgetFullName,this),this._on(this.element,{remove:function(e){e.target===r&&this.destroy()}}),this.document=e(r.style?r.ownerDocument:r.document||r),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(n,r){var i=n,s,o,u;if(arguments.length===0)return e.widget.extend({},this.options);if(typeof n=="string"){i={},s=n.split("."),n=s.shift();if(s.length){o=i[n]=e.widget.extend({},this.options[n]);for(u=0;u<s.length-1;u++)o[s[u]]=o[s[u]]||{},o=o[s[u]];n=s.pop();if(r===t)return o[n]===t?null:o[n];o[n]=r}else{if(r===t)return this.options[n]===t?null:this.options[n];i[n]=r}}return this._setOptions(i),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,e==="disabled"&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!t).attr("aria-disabled",t),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(t,n){var r,i=this;n?(t=r=e(t),this.bindings=this.bindings.add(t)):(n=t,t=this.element,r=this.widget()),e.each(n,function(n,s){function o(){if(i.options.disabled===!0||e(this).hasClass("ui-state-disabled"))return;return(typeof s=="string"?i[s]:s).apply(i,arguments)}typeof s!="string"&&(o.guid=s.guid=s.guid||o.guid||e.guid++);var u=n.match(/^(\w+)\s*(.*)$/),a=u[1]+i.eventNamespace,f=u[2];f?r.delegate(f,a,o):t.bind(a,o)})},_off:function(e,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(t).undelegate(t)},_delay:function(e,t){function n(){return(typeof e=="string"?r[e]:e).apply(r,arguments)}var r=this;return setTimeout(n,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,n,r){var i,s,o=this.options[t];r=r||{},n=e.Event(n),n.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),n.target=this.element[0],s=n.originalEvent;if(s)for(i in s)i in n||(n[i]=s[i]);return this.element.trigger(n,r),!(e.isFunction(o)&&o.apply(this.element[0],[n].concat(r))===!1||n.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,n){e.Widget.prototype["_"+t]=function(r,i,s){typeof i=="string"&&(i={effect:i});var o,u=i?i===!0||typeof i=="number"?n:i.effect||n:t;i=i||{},typeof i=="number"&&(i={duration:i}),o=!e.isEmptyObject(i),i.complete=s,i.delay&&r.delay(i.delay),o&&e.effects&&(e.effects.effect[u]||e.uiBackCompat!==!1&&e.effects[u])?r[t](i):u!==t&&r[u]?r[u](i.duration,i.easing,s):r.queue(function(n){e(this)[t](),s&&s.call(r[0]),n()})}}),e.uiBackCompat!==!1&&(e.Widget.prototype._getCreateOptions=function(){return e.metadata&&e.metadata.get(this.element[0])[this.widgetName]})})(jQuery);(function(e,t){var n=!1;e(document).mouseup(function(e){n=!1}),e.widget("ui.mouse",{version:"1.9.1",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.bind("mousedown."+this.widgetName,function(e){return t._mouseDown(e)}).bind("click."+this.widgetName,function(n){if(!0===e.data(n.target,t.widgetName+".preventClickEvent"))return e.removeData(n.target,t.widgetName+".preventClickEvent"),n.stopImmediatePropagation(),!1}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(t){if(n)return;this._mouseStarted&&this._mouseUp(t),this._mouseDownEvent=t;var r=this,i=t.which===1,s=typeof this.options.cancel=="string"&&t.target.nodeName?e(t.target).closest(this.options.cancel).length:!1;if(!i||s||!this._mouseCapture(t))return!0;this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){r.mouseDelayMet=!0},this.options.delay));if(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)){this._mouseStarted=this._mouseStart(t)!==!1;if(!this._mouseStarted)return t.preventDefault(),!0}return!0===e.data(t.target,this.widgetName+".preventClickEvent")&&e.removeData(t.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return r._mouseMove(e)},this._mouseUpDelegate=function(e){return r._mouseUp(e)},e(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),t.preventDefault(),n=!0,!0},_mouseMove:function(t){return!e.ui.ie||document.documentMode>=9||!!t.button?this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,t)!==!1,this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted):this._mouseUp(t)},_mouseUp:function(t){return e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&e.data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),!1},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(e){return this.mouseDelayMet},_mouseStart:function(e){},_mouseDrag:function(e){},_mouseStop:function(e){},_mouseCapture:function(e){return!0}})})(jQuery);(function(e,t){function h(e,t,n){return[parseInt(e[0],10)*(l.test(e[0])?t/100:1),parseInt(e[1],10)*(l.test(e[1])?n/100:1)]}function p(t,n){return parseInt(e.css(t,n),10)||0}e.ui=e.ui||{};var n,r=Math.max,i=Math.abs,s=Math.round,o=/left|center|right/,u=/top|center|bottom/,a=/[\+\-]\d+%?/,f=/^\w+/,l=/%$/,c=e.fn.position;e.position={scrollbarWidth:function(){if(n!==t)return n;var r,i,s=e("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),o=s.children()[0];return e("body").append(s),r=o.offsetWidth,s.css("overflow","scroll"),i=o.offsetWidth,r===i&&(i=s[0].clientWidth),s.remove(),n=r-i},getScrollInfo:function(t){var n=t.isWindow?"":t.element.css("overflow-x"),r=t.isWindow?"":t.element.css("overflow-y"),i=n==="scroll"||n==="auto"&&t.width<t.element[0].scrollWidth,s=r==="scroll"||r==="auto"&&t.height<t.element[0].scrollHeight;return{width:i?e.position.scrollbarWidth():0,height:s?e.position.scrollbarWidth():0}},getWithinInfo:function(t){var n=e(t||window),r=e.isWindow(n[0]);return{element:n,isWindow:r,offset:n.offset()||{left:0,top:0},scrollLeft:n.scrollLeft(),scrollTop:n.scrollTop(),width:r?n.width():n.outerWidth(),height:r?n.height():n.outerHeight()}}},e.fn.position=function(t){if(!t||!t.of)return c.apply(this,arguments);t=e.extend({},t);var n,l,d,v,m,g=e(t.of),y=e.position.getWithinInfo(t.within),b=e.position.getScrollInfo(y),w=g[0],E=(t.collision||"flip").split(" "),S={};return w.nodeType===9?(l=g.width(),d=g.height(),v={top:0,left:0}):e.isWindow(w)?(l=g.width(),d=g.height(),v={top:g.scrollTop(),left:g.scrollLeft()}):w.preventDefault?(t.at="left top",l=d=0,v={top:w.pageY,left:w.pageX}):(l=g.outerWidth(),d=g.outerHeight(),v=g.offset()),m=e.extend({},v),e.each(["my","at"],function(){var e=(t[this]||"").split(" "),n,r;e.length===1&&(e=o.test(e[0])?e.concat(["center"]):u.test(e[0])?["center"].concat(e):["center","center"]),e[0]=o.test(e[0])?e[0]:"center",e[1]=u.test(e[1])?e[1]:"center",n=a.exec(e[0]),r=a.exec(e[1]),S[this]=[n?n[0]:0,r?r[0]:0],t[this]=[f.exec(e[0])[0],f.exec(e[1])[0]]}),E.length===1&&(E[1]=E[0]),t.at[0]==="right"?m.left+=l:t.at[0]==="center"&&(m.left+=l/2),t.at[1]==="bottom"?m.top+=d:t.at[1]==="center"&&(m.top+=d/2),n=h(S.at,l,d),m.left+=n[0],m.top+=n[1],this.each(function(){var o,u,a=e(this),f=a.outerWidth(),c=a.outerHeight(),w=p(this,"marginLeft"),x=p(this,"marginTop"),T=f+w+p(this,"marginRight")+b.width,N=c+x+p(this,"marginBottom")+b.height,C=e.extend({},m),k=h(S.my,a.outerWidth(),a.outerHeight());t.my[0]==="right"?C.left-=f:t.my[0]==="center"&&(C.left-=f/2),t.my[1]==="bottom"?C.top-=c:t.my[1]==="center"&&(C.top-=c/2),C.left+=k[0],C.top+=k[1],e.support.offsetFractions||(C.left=s(C.left),C.top=s(C.top)),o={marginLeft:w,marginTop:x},e.each(["left","top"],function(r,i){e.ui.position[E[r]]&&e.ui.position[E[r]][i](C,{targetWidth:l,targetHeight:d,elemWidth:f,elemHeight:c,collisionPosition:o,collisionWidth:T,collisionHeight:N,offset:[n[0]+k[0],n[1]+k[1]],my:t.my,at:t.at,within:y,elem:a})}),e.fn.bgiframe&&a.bgiframe(),t.using&&(u=function(e){var n=v.left-C.left,s=n+l-f,o=v.top-C.top,u=o+d-c,h={target:{element:g,left:v.left,top:v.top,width:l,height:d},element:{element:a,left:C.left,top:C.top,width:f,height:c},horizontal:s<0?"left":n>0?"right":"center",vertical:u<0?"top":o>0?"bottom":"middle"};l<f&&i(n+s)<l&&(h.horizontal="center"),d<c&&i(o+u)<d&&(h.vertical="middle"),r(i(n),i(s))>r(i(o),i(u))?h.important="horizontal":h.important="vertical",t.using.call(this,e,h)}),a.offset(e.extend(C,{using:u}))})},e.ui.position={fit:{left:function(e,t){var n=t.within,i=n.isWindow?n.scrollLeft:n.offset.left,s=n.width,o=e.left-t.collisionPosition.marginLeft,u=i-o,a=o+t.collisionWidth-s-i,f;t.collisionWidth>s?u>0&&a<=0?(f=e.left+u+t.collisionWidth-s-i,e.left+=u-f):a>0&&u<=0?e.left=i:u>a?e.left=i+s-t.collisionWidth:e.left=i:u>0?e.left+=u:a>0?e.left-=a:e.left=r(e.left-o,e.left)},top:function(e,t){var n=t.within,i=n.isWindow?n.scrollTop:n.offset.top,s=t.within.height,o=e.top-t.collisionPosition.marginTop,u=i-o,a=o+t.collisionHeight-s-i,f;t.collisionHeight>s?u>0&&a<=0?(f=e.top+u+t.collisionHeight-s-i,e.top+=u-f):a>0&&u<=0?e.top=i:u>a?e.top=i+s-t.collisionHeight:e.top=i:u>0?e.top+=u:a>0?e.top-=a:e.top=r(e.top-o,e.top)}},flip:{left:function(e,t){var n=t.within,r=n.offset.left+n.scrollLeft,s=n.width,o=n.isWindow?n.scrollLeft:n.offset.left,u=e.left-t.collisionPosition.marginLeft,a=u-o,f=u+t.collisionWidth-s-o,l=t.my[0]==="left"?-t.elemWidth:t.my[0]==="right"?t.elemWidth:0,c=t.at[0]==="left"?t.targetWidth:t.at[0]==="right"?-t.targetWidth:0,h=-2*t.offset[0],p,d;if(a<0){p=e.left+l+c+h+t.collisionWidth-s-r;if(p<0||p<i(a))e.left+=l+c+h}else if(f>0){d=e.left-t.collisionPosition.marginLeft+l+c+h-o;if(d>0||i(d)<f)e.left+=l+c+h}},top:function(e,t){var n=t.within,r=n.offset.top+n.scrollTop,s=n.height,o=n.isWindow?n.scrollTop:n.offset.top,u=e.top-t.collisionPosition.marginTop,a=u-o,f=u+t.collisionHeight-s-o,l=t.my[1]==="top",c=l?-t.elemHeight:t.my[1]==="bottom"?t.elemHeight:0,h=t.at[1]==="top"?t.targetHeight:t.at[1]==="bottom"?-t.targetHeight:0,p=-2*t.offset[1],d,v;a<0?(v=e.top+c+h+p+t.collisionHeight-s-r,e.top+c+h+p>a&&(v<0||v<i(a))&&(e.top+=c+h+p)):f>0&&(d=e.top-t.collisionPosition.marginTop+c+h+p-o,e.top+c+h+p>f&&(d>0||i(d)<f)&&(e.top+=c+h+p))}},flipfit:{left:function(){e.ui.position.flip.left.apply(this,arguments),e.ui.position.fit.left.apply(this,arguments)},top:function(){e.ui.position.flip.top.apply(this,arguments),e.ui.position.fit.top.apply(this,arguments)}}},function(){var t,n,r,i,s,o=document.getElementsByTagName("body")[0],u=document.createElement("div");t=document.createElement(o?"div":"body"),r={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},o&&e.extend(r,{position:"absolute",left:"-1000px",top:"-1000px"});for(s in r)t.style[s]=r[s];t.appendChild(u),n=o||document.documentElement,n.insertBefore(t,n.firstChild),u.style.cssText="position: absolute; left: 10.7432222px;",i=e(u).offset().left,e.support.offsetFractions=i>10&&i<11,t.innerHTML="",n.removeChild(t)}(),e.uiBackCompat!==!1&&function(e){var n=e.fn.position;e.fn.position=function(r){if(!r||!r.offset)return n.call(this,r);var i=r.offset.split(" "),s=r.at.split(" ");return i.length===1&&(i[1]=i[0]),/^\d/.test(i[0])&&(i[0]="+"+i[0]),/^\d/.test(i[1])&&(i[1]="+"+i[1]),s.length===1&&(/left|center|right/.test(s[0])?s[1]="center":(s[1]=s[0],s[0]="center")),n.call(this,e.extend(r,{at:s[0]+i[0]+" "+s[1]+i[1],offset:t}))}}(jQuery)})(jQuery);(function(e,t){e.widget("ui.draggable",e.ui.mouse,{version:"1.9.1",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1},_create:function(){this.options.helper=="original"&&!/^(?:r|a|f)/.test(this.element.css("position"))&&(this.element[0].style.position="relative"),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._mouseInit()},_destroy:function(){this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._mouseDestroy()},_mouseCapture:function(t){var n=this.options;return this.helper||n.disabled||e(t.target).is(".ui-resizable-handle")?!1:(this.handle=this._getHandle(t),this.handle?(e(n.iframeFix===!0?"iframe":n.iframeFix).each(function(){e('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1e3}).css(e(this).offset()).appendTo("body")}),!0):!1)},_mouseStart:function(t){var n=this.options;return this.helper=this._createHelper(t),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),e.ui.ddmanager&&(e.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(),this.offset=this.positionAbs=this.element.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},e.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.originalPosition=this.position=this._generatePosition(t),this.originalPageX=t.pageX,this.originalPageY=t.pageY,n.cursorAt&&this._adjustOffsetFromHelper(n.cursorAt),n.containment&&this._setContainment(),this._trigger("start",t)===!1?(this._clear(),!1):(this._cacheHelperProportions(),e.ui.ddmanager&&!n.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this._mouseDrag(t,!0),e.ui.ddmanager&&e.ui.ddmanager.dragStart(this,t),!0)},_mouseDrag:function(t,n){this.position=this._generatePosition(t),this.positionAbs=this._convertPositionTo("absolute");if(!n){var r=this._uiHash();if(this._trigger("drag",t,r)===!1)return this._mouseUp({}),!1;this.position=r.position}if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||this.options.axis!="x")this.helper[0].style.top=this.position.top+"px";return e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),!1},_mouseStop:function(t){var n=!1;e.ui.ddmanager&&!this.options.dropBehaviour&&(n=e.ui.ddmanager.drop(this,t)),this.dropped&&(n=this.dropped,this.dropped=!1);var r=this.element[0],i=!1;while(r&&(r=r.parentNode))r==document&&(i=!0);if(!i&&this.options.helper==="original")return!1;if(this.options.revert=="invalid"&&!n||this.options.revert=="valid"&&n||this.options.revert===!0||e.isFunction(this.options.revert)&&this.options.revert.call(this.element,n)){var s=this;e(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){s._trigger("stop",t)!==!1&&s._clear()})}else this._trigger("stop",t)!==!1&&this._clear();return!1},_mouseUp:function(t){return e("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)}),e.ui.ddmanager&&e.ui.ddmanager.dragStop(this,t),e.ui.mouse.prototype._mouseUp.call(this,t)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(t){var n=!this.options.handle||!e(this.options.handle,this.element).length?!0:!1;return e(this.options.handle,this.element).find("*").andSelf().each(function(){this==t.target&&(n=!0)}),n},_createHelper:function(t){var n=this.options,r=e.isFunction(n.helper)?e(n.helper.apply(this.element[0],[t])):n.helper=="clone"?this.element.clone().removeAttr("id"):this.element;return r.parents("body").length||r.appendTo(n.appendTo=="parent"?this.element[0].parentNode:n.appendTo),r[0]!=this.element[0]&&!/(fixed|absolute)/.test(r.css("position"))&&r.css("position","absolute"),r},_adjustOffsetFromHelper:function(t){typeof t=="string"&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var t=this.offsetParent.offset();this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop());if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&e.ui.ie)t={top:0,left:0};return{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var e=this.element.position();return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:e.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t=this.options;t.containment=="parent"&&(t.containment=this.helper[0].parentNode);if(t.containment=="document"||t.containment=="window")this.containment=[t.containment=="document"?0:e(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,t.containment=="document"?0:e(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,(t.containment=="document"?0:e(window).scrollLeft())+e(t.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(t.containment=="document"?0:e(window).scrollTop())+(e(t.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(t.containment)&&t.containment.constructor!=Array){var n=e(t.containment),r=n[0];if(!r)return;var i=n.offset(),s=e(r).css("overflow")!="hidden";this.containment=[(parseInt(e(r).css("borderLeftWidth"),10)||0)+(parseInt(e(r).css("paddingLeft"),10)||0),(parseInt(e(r).css("borderTopWidth"),10)||0)+(parseInt(e(r).css("paddingTop"),10)||0),(s?Math.max(r.scrollWidth,r.offsetWidth):r.offsetWidth)-(parseInt(e(r).css("borderLeftWidth"),10)||0)-(parseInt(e(r).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(s?Math.max(r.scrollHeight,r.offsetHeight):r.offsetHeight)-(parseInt(e(r).css("borderTopWidth"),10)||0)-(parseInt(e(r).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relative_container=n}else t.containment.constructor==Array&&(this.containment=t.containment)},_convertPositionTo:function(t,n){n||(n=this.position);var r=t=="absolute"?1:-1,i=this.options,s=this.cssPosition!="absolute"||this.scrollParent[0]!=document&&!!e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,o=/(html|body)/i.test(s[0].tagName);return{top:n.top+this.offset.relative.top*r+this.offset.parent.top*r-(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():o?0:s.scrollTop())*r,left:n.left+this.offset.relative.left*r+this.offset.parent.left*r-(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():o?0:s.scrollLeft())*r}},_generatePosition:function(t){var n=this.options,r=this.cssPosition!="absolute"||this.scrollParent[0]!=document&&!!e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,i=/(html|body)/i.test(r[0].tagName),s=t.pageX,o=t.pageY;if(this.originalPosition){var u;if(this.containment){if(this.relative_container){var a=this.relative_container.offset();u=[this.containment[0]+a.left,this.containment[1]+a.top,this.containment[2]+a.left,this.containment[3]+a.top]}else u=this.containment;t.pageX-this.offset.click.left<u[0]&&(s=u[0]+this.offset.click.left),t.pageY-this.offset.click.top<u[1]&&(o=u[1]+this.offset.click.top),t.pageX-this.offset.click.left>u[2]&&(s=u[2]+this.offset.click.left),t.pageY-this.offset.click.top>u[3]&&(o=u[3]+this.offset.click.top)}if(n.grid){var f=n.grid[1]?this.originalPageY+Math.round((o-this.originalPageY)/n.grid[1])*n.grid[1]:this.originalPageY;o=u?f-this.offset.click.top<u[1]||f-this.offset.click.top>u[3]?f-this.offset.click.top<u[1]?f+n.grid[1]:f-n.grid[1]:f:f;var l=n.grid[0]?this.originalPageX+Math.round((s-this.originalPageX)/n.grid[0])*n.grid[0]:this.originalPageX;s=u?l-this.offset.click.left<u[0]||l-this.offset.click.left>u[2]?l-this.offset.click.left<u[0]?l+n.grid[0]:l-n.grid[0]:l:l}}return{top:o-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():i?0:r.scrollTop()),left:s-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():i?0:r.scrollLeft())}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]!=this.element[0]&&!this.cancelHelperRemoval&&this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1},_trigger:function(t,n,r){return r=r||this._uiHash(),e.ui.plugin.call(this,t,[n,r]),t=="drag"&&(this.positionAbs=this._convertPositionTo("absolute")),e.Widget.prototype._trigger.call(this,t,n,r)},plugins:{},_uiHash:function(e){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),e.ui.plugin.add("draggable","connectToSortable",{start:function(t,n){var r=e(this).data("draggable"),i=r.options,s=e.extend({},n,{item:r.element});r.sortables=[],e(i.connectToSortable).each(function(){var n=e.data(this,"sortable");n&&!n.options.disabled&&(r.sortables.push({instance:n,shouldRevert:n.options.revert}),n.refreshPositions(),n._trigger("activate",t,s))})},stop:function(t,n){var r=e(this).data("draggable"),i=e.extend({},n,{item:r.element});e.each(r.sortables,function(){this.instance.isOver?(this.instance.isOver=0,r.cancelHelperRemoval=!0,this.instance.cancelHelperRemoval=!1,this.shouldRevert&&(this.instance.options.revert=!0),this.instance._mouseStop(t),this.instance.options.helper=this.instance.options._helper,r.options.helper=="original"&&this.instance.currentItem.css({top:"auto",left:"auto"})):(this.instance.cancelHelperRemoval=!1,this.instance._trigger("deactivate",t,i))})},drag:function(t,n){var r=e(this).data("draggable"),i=this,s=function(t){var n=this.offset.click.top,r=this.offset.click.left,i=this.positionAbs.top,s=this.positionAbs.left,o=t.height,u=t.width,a=t.top,f=t.left;return e.ui.isOver(i+n,s+r,a,f,o,u)};e.each(r.sortables,function(s){var o=!1,u=this;this.instance.positionAbs=r.positionAbs,this.instance.helperProportions=r.helperProportions,this.instance.offset.click=r.offset.click,this.instance._intersectsWith(this.instance.containerCache)&&(o=!0,e.each(r.sortables,function(){return this.instance.positionAbs=r.positionAbs,this.instance.helperProportions=r.helperProportions,this.instance.offset.click=r.offset.click,this!=u&&this.instance._intersectsWith(this.instance.containerCache)&&e.ui.contains(u.instance.element[0],this.instance.element[0])&&(o=!1),o})),o?(this.instance.isOver||(this.instance.isOver=1,this.instance.currentItem=e(i).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item",!0),this.instance.options._helper=this.instance.options.helper,this.instance.options.helper=function(){return n.helper[0]},t.target=this.instance.currentItem[0],this.instance._mouseCapture(t,!0),this.instance._mouseStart(t,!0,!0),this.instance.offset.click.top=r.offset.click.top,this.instance.offset.click.left=r.offset.click.left,this.instance.offset.parent.left-=r.offset.parent.left-this.instance.offset.parent.left,this.instance.offset.parent.top-=r.offset.parent.top-this.instance.offset.parent.top,r._trigger("toSortable",t),r.dropped=this.instance.element,r.currentItem=r.element,this.instance.fromOutside=r),this.instance.currentItem&&this.instance._mouseDrag(t)):this.instance.isOver&&(this.instance.isOver=0,this.instance.cancelHelperRemoval=!0,this.instance.options.revert=!1,this.instance._trigger("out",t,this.instance._uiHash(this.instance)),this.instance._mouseStop(t,!0),this.instance.options.helper=this.instance.options._helper,this.instance.currentItem.remove(),this.instance.placeholder&&this.instance.placeholder.remove(),r._trigger("fromSortable",t),r.dropped=!1)})}}),e.ui.plugin.add("draggable","cursor",{start:function(t,n){var r=e("body"),i=e(this).data("draggable").options;r.css("cursor")&&(i._cursor=r.css("cursor")),r.css("cursor",i.cursor)},stop:function(t,n){var r=e(this).data("draggable").options;r._cursor&&e("body").css("cursor",r._cursor)}}),e.ui.plugin.add("draggable","opacity",{start:function(t,n){var r=e(n.helper),i=e(this).data("draggable").options;r.css("opacity")&&(i._opacity=r.css("opacity")),r.css("opacity",i.opacity)},stop:function(t,n){var r=e(this).data("draggable").options;r._opacity&&e(n.helper).css("opacity",r._opacity)}}),e.ui.plugin.add("draggable","scroll",{start:function(t,n){var r=e(this).data("draggable");r.scrollParent[0]!=document&&r.scrollParent[0].tagName!="HTML"&&(r.overflowOffset=r.scrollParent.offset())},drag:function(t,n){var r=e(this).data("draggable"),i=r.options,s=!1;if(r.scrollParent[0]!=document&&r.scrollParent[0].tagName!="HTML"){if(!i.axis||i.axis!="x")r.overflowOffset.top+r.scrollParent[0].offsetHeight-t.pageY<i.scrollSensitivity?r.scrollParent[0].scrollTop=s=r.scrollParent[0].scrollTop+i.scrollSpeed:t.pageY-r.overflowOffset.top<i.scrollSensitivity&&(r.scrollParent[0].scrollTop=s=r.scrollParent[0].scrollTop-i.scrollSpeed);if(!i.axis||i.axis!="y")r.overflowOffset.left+r.scrollParent[0].offsetWidth-t.pageX<i.scrollSensitivity?r.scrollParent[0].scrollLeft=s=r.scrollParent[0].scrollLeft+i.scrollSpeed:t.pageX-r.overflowOffset.left<i.scrollSensitivity&&(r.scrollParent[0].scrollLeft=s=r.scrollParent[0].scrollLeft-i.scrollSpeed)}else{if(!i.axis||i.axis!="x")t.pageY-e(document).scrollTop()<i.scrollSensitivity?s=e(document).scrollTop(e(document).scrollTop()-i.scrollSpeed):e(window).height()-(t.pageY-e(document).scrollTop())<i.scrollSensitivity&&(s=e(document).scrollTop(e(document).scrollTop()+i.scrollSpeed));if(!i.axis||i.axis!="y")t.pageX-e(document).scrollLeft()<i.scrollSensitivity?s=e(document).scrollLeft(e(document).scrollLeft()-i.scrollSpeed):e(window).width()-(t.pageX-e(document).scrollLeft())<i.scrollSensitivity&&(s=e(document).scrollLeft(e(document).scrollLeft()+i.scrollSpeed))}s!==!1&&e.ui.ddmanager&&!i.dropBehaviour&&e.ui.ddmanager.prepareOffsets(r,t)}}),e.ui.plugin.add("draggable","snap",{start:function(t,n){var r=e(this).data("draggable"),i=r.options;r.snapElements=[],e(i.snap.constructor!=String?i.snap.items||":data(draggable)":i.snap).each(function(){var t=e(this),n=t.offset();this!=r.element[0]&&r.snapElements.push({item:this,width:t.outerWidth(),height:t.outerHeight(),top:n.top,left:n.left})})},drag:function(t,n){var r=e(this).data("draggable"),i=r.options,s=i.snapTolerance,o=n.offset.left,u=o+r.helperProportions.width,a=n.offset.top,f=a+r.helperProportions.height;for(var l=r.snapElements.length-1;l>=0;l--){var c=r.snapElements[l].left,h=c+r.snapElements[l].width,p=r.snapElements[l].top,d=p+r.snapElements[l].height;if(!(c-s<o&&o<h+s&&p-s<a&&a<d+s||c-s<o&&o<h+s&&p-s<f&&f<d+s||c-s<u&&u<h+s&&p-s<a&&a<d+s||c-s<u&&u<h+s&&p-s<f&&f<d+s)){r.snapElements[l].snapping&&r.options.snap.release&&r.options.snap.release.call(r.element,t,e.extend(r._uiHash(),{snapItem:r.snapElements[l].item})),r.snapElements[l].snapping=!1;continue}if(i.snapMode!="inner"){var v=Math.abs(p-f)<=s,m=Math.abs(d-a)<=s,g=Math.abs(c-u)<=s,y=Math.abs(h-o)<=s;v&&(n.position.top=r._convertPositionTo("relative",{top:p-r.helperProportions.height,left:0}).top-r.margins.top),m&&(n.position.top=r._convertPositionTo("relative",{top:d,left:0}).top-r.margins.top),g&&(n.position.left=r._convertPositionTo("relative",{top:0,left:c-r.helperProportions.width}).left-r.margins.left),y&&(n.position.left=r._convertPositionTo("relative",{top:0,left:h}).left-r.margins.left)}var b=v||m||g||y;if(i.snapMode!="outer"){var v=Math.abs(p-a)<=s,m=Math.abs(d-f)<=s,g=Math.abs(c-o)<=s,y=Math.abs(h-u)<=s;v&&(n.position.top=r._convertPositionTo("relative",{top:p,left:0}).top-r.margins.top),m&&(n.position.top=r._convertPositionTo("relative",{top:d-r.helperProportions.height,left:0}).top-r.margins.top),g&&(n.position.left=r._convertPositionTo("relative",{top:0,left:c}).left-r.margins.left),y&&(n.position.left=r._convertPositionTo("relative",{top:0,left:h-r.helperProportions.width}).left-r.margins.left)}!r.snapElements[l].snapping&&(v||m||g||y||b)&&r.options.snap.snap&&r.options.snap.snap.call(r.element,t,e.extend(r._uiHash(),{snapItem:r.snapElements[l].item})),r.snapElements[l].snapping=v||m||g||y||b}}}),e.ui.plugin.add("draggable","stack",{start:function(t,n){var r=e(this).data("draggable").options,i=e.makeArray(e(r.stack)).sort(function(t,n){return(parseInt(e(t).css("zIndex"),10)||0)-(parseInt(e(n).css("zIndex"),10)||0)});if(!i.length)return;var s=parseInt(i[0].style.zIndex)||0;e(i).each(function(e){this.style.zIndex=s+e}),this[0].style.zIndex=s+i.length}}),e.ui.plugin.add("draggable","zIndex",{start:function(t,n){var r=e(n.helper),i=e(this).data("draggable").options;r.css("zIndex")&&(i._zIndex=r.css("zIndex")),r.css("zIndex",i.zIndex)},stop:function(t,n){var r=e(this).data("draggable").options;r._zIndex&&e(n.helper).css("zIndex",r._zIndex)}})})(jQuery);(function(e,t){e.widget("ui.resizable",e.ui.mouse,{version:"1.9.1",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:1e3},_create:function(){var t=this,n=this.options;this.element.addClass("ui-resizable"),e.extend(this,{_aspectRatio:!!n.aspectRatio,aspectRatio:n.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:n.helper||n.ghost||n.animate?n.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)&&(this.element.wrap(e('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("resizable",this.element.data("resizable")),this.elementIsWrapper=!0,this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")}),this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0}),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css({margin:this.originalElement.css("margin")}),this._proportionallyResize()),this.handles=n.handles||(e(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se");if(this.handles.constructor==String){this.handles=="all"&&(this.handles="n,e,s,w,se,sw,ne,nw");var r=this.handles.split(",");this.handles={};for(var i=0;i<r.length;i++){var s=e.trim(r[i]),o="ui-resizable-"+s,u=e('<div class="ui-resizable-handle '+o+'"></div>');u.css({zIndex:n.zIndex}),"se"==s&&u.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),this.handles[s]=".ui-resizable-"+s,this.element.append(u)}}this._renderAxis=function(t){t=t||this.element;for(var n in this.handles){this.handles[n].constructor==String&&(this.handles[n]=e(this.handles[n],this.element).show());if(this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)){var r=e(this.handles[n],this.element),i=0;i=/sw|ne|nw|se|n|s/.test(n)?r.outerHeight():r.outerWidth();var s=["padding",/ne|nw|n/.test(n)?"Top":/se|sw|s/.test(n)?"Bottom":/^e$/.test(n)?"Right":"Left"].join("");t.css(s,i),this._proportionallyResize()}if(!e(this.handles[n]).length)continue}},this._renderAxis(this.element),this._handles=e(".ui-resizable-handle",this.element).disableSelection(),this._handles.mouseover(function(){if(!t.resizing){if(this.className)var e=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);t.axis=e&&e[1]?e[1]:"se"}}),n.autoHide&&(this._handles.hide(),e(this.element).addClass("ui-resizable-autohide").mouseenter(function(){if(n.disabled)return;e(this).removeClass("ui-resizable-autohide"),t._handles.show()}).mouseleave(function(){if(n.disabled)return;t.resizing||(e(this).addClass("ui-resizable-autohide"),t._handles.hide())})),this._mouseInit()},_destroy:function(){this._mouseDestroy();var t=function(t){e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};if(this.elementIsWrapper){t(this.element);var n=this.element;this.originalElement.css({position:n.css("position"),width:n.outerWidth(),height:n.outerHeight(),top:n.css("top"),left:n.css("left")}).insertAfter(n),n.remove()}return this.originalElement.css("resize",this.originalResizeStyle),t(this.originalElement),this},_mouseCapture:function(t){var n=!1;for(var r in this.handles)e(this.handles[r])[0]==t.target&&(n=!0);return!this.options.disabled&&n},_mouseStart:function(t){var r=this.options,i=this.element.position(),s=this.element;this.resizing=!0,this.documentScroll={top:e(document).scrollTop(),left:e(document).scrollLeft()},(s.is(".ui-draggable")||/absolute/.test(s.css("position")))&&s.css({position:"absolute",top:i.top,left:i.left}),this._renderProxy();var o=n(this.helper.css("left")),u=n(this.helper.css("top"));r.containment&&(o+=e(r.containment).scrollLeft()||0,u+=e(r.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:o,top:u},this.size=this._helper?{width:s.outerWidth(),height:s.outerHeight()}:{width:s.width(),height:s.height()},this.originalSize=this._helper?{width:s.outerWidth(),height:s.outerHeight()}:{width:s.width(),height:s.height()},this.originalPosition={left:o,top:u},this.sizeDiff={width:s.outerWidth()-s.width(),height:s.outerHeight()-s.height()},this.originalMousePosition={left:t.pageX,top:t.pageY},this.aspectRatio=typeof r.aspectRatio=="number"?r.aspectRatio:this.originalSize.width/this.originalSize.height||1;var a=e(".ui-resizable-"+this.axis).css("cursor");return e("body").css("cursor",a=="auto"?this.axis+"-resize":a),s.addClass("ui-resizable-resizing"),this._propagate("start",t),!0},_mouseDrag:function(e){var t=this.helper,n=this.options,r={},i=this,s=this.originalMousePosition,o=this.axis,u=e.pageX-s.left||0,a=e.pageY-s.top||0,f=this._change[o];if(!f)return!1;var l=f.apply(this,[e,u,a]);this._updateVirtualBoundaries(e.shiftKey);if(this._aspectRatio||e.shiftKey)l=this._updateRatio(l,e);return l=this._respectSize(l,e),this._propagate("resize",e),t.css({top:this.position.top+"px",left:this.position.left+"px",width:this.size.width+"px",height:this.size.height+"px"}),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),this._updateCache(l),this._trigger("resize",e,this.ui()),!1},_mouseStop:function(t){this.resizing=!1;var n=this.options,r=this;if(this._helper){var i=this._proportionallyResizeElements,s=i.length&&/textarea/i.test(i[0].nodeName),o=s&&e.ui.hasScroll(i[0],"left")?0:r.sizeDiff.height,u=s?0:r.sizeDiff.width,a={width:r.helper.width()-u,height:r.helper.height()-o},f=parseInt(r.element.css("left"),10)+(r.position.left-r.originalPosition.left)||null,l=parseInt(r.element.css("top"),10)+(r.position.top-r.originalPosition.top)||null;n.animate||this.element.css(e.extend(a,{top:l,left:f})),r.helper.height(r.size.height),r.helper.width(r.size.width),this._helper&&!n.animate&&this._proportionallyResize()}return e("body").css("cursor","auto"),this.element.removeClass("ui-resizable-resizing"),this._propagate("stop",t),this._helper&&this.helper.remove(),!1},_updateVirtualBoundaries:function(e){var t=this.options,n,i,s,o,u;u={minWidth:r(t.minWidth)?t.minWidth:0,maxWidth:r(t.maxWidth)?t.maxWidth:Infinity,minHeight:r(t.minHeight)?t.minHeight:0,maxHeight:r(t.maxHeight)?t.maxHeight:Infinity};if(this._aspectRatio||e)n=u.minHeight*this.aspectRatio,s=u.minWidth/this.aspectRatio,i=u.maxHeight*this.aspectRatio,o=u.maxWidth/this.aspectRatio,n>u.minWidth&&(u.minWidth=n),s>u.minHeight&&(u.minHeight=s),i<u.maxWidth&&(u.maxWidth=i),o<u.maxHeight&&(u.maxHeight=o);this._vBoundaries=u},_updateCache:function(e){var t=this.options;this.offset=this.helper.offset(),r(e.left)&&(this.position.left=e.left),r(e.top)&&(this.position.top=e.top),r(e.height)&&(this.size.height=e.height),r(e.width)&&(this.size.width=e.width)},_updateRatio:function(e,t){var n=this.options,i=this.position,s=this.size,o=this.axis;return r(e.height)?e.width=e.height*this.aspectRatio:r(e.width)&&(e.height=e.width/this.aspectRatio),o=="sw"&&(e.left=i.left+(s.width-e.width),e.top=null),o=="nw"&&(e.top=i.top+(s.height-e.height),e.left=i.left+(s.width-e.width)),e},_respectSize:function(e,t){var n=this.helper,i=this._vBoundaries,s=this._aspectRatio||t.shiftKey,o=this.axis,u=r(e.width)&&i.maxWidth&&i.maxWidth<e.width,a=r(e.height)&&i.maxHeight&&i.maxHeight<e.height,f=r(e.width)&&i.minWidth&&i.minWidth>e.width,l=r(e.height)&&i.minHeight&&i.minHeight>e.height;f&&(e.width=i.minWidth),l&&(e.height=i.minHeight),u&&(e.width=i.maxWidth),a&&(e.height=i.maxHeight);var c=this.originalPosition.left+this.originalSize.width,h=this.position.top+this.size.height,p=/sw|nw|w/.test(o),d=/nw|ne|n/.test(o);f&&p&&(e.left=c-i.minWidth),u&&p&&(e.left=c-i.maxWidth),l&&d&&(e.top=h-i.minHeight),a&&d&&(e.top=h-i.maxHeight);var v=!e.width&&!e.height;return v&&!e.left&&e.top?e.top=null:v&&!e.top&&e.left&&(e.left=null),e},_proportionallyResize:function(){var t=this.options;if(!this._proportionallyResizeElements.length)return;var n=this.helper||this.element;for(var r=0;r<this._proportionallyResizeElements.length;r++){var i=this._proportionallyResizeElements[r];if(!this.borderDif){var s=[i.css("borderTopWidth"),i.css("borderRightWidth"),i.css("borderBottomWidth"),i.css("borderLeftWidth")],o=[i.css("paddingTop"),i.css("paddingRight"),i.css("paddingBottom"),i.css("paddingLeft")];this.borderDif=e.map(s,function(e,t){var n=parseInt(e,10)||0,r=parseInt(o[t],10)||0;return n+r})}i.css({height:n.height()-this.borderDif[0]-this.borderDif[2]||0,width:n.width()-this.borderDif[1]-this.borderDif[3]||0})}},_renderProxy:function(){var t=this.element,n=this.options;this.elementOffset=t.offset();if(this._helper){this.helper=this.helper||e('<div style="overflow:hidden;"></div>');var r=e.ui.ie6?1:0,i=e.ui.ie6?2:-1;this.helper.addClass(this._helper).css({width:this.element.outerWidth()+i,height:this.element.outerHeight()+i,position:"absolute",left:this.elementOffset.left-r+"px",top:this.elementOffset.top-r+"px",zIndex:++n.zIndex}),this.helper.appendTo("body").disableSelection()}else this.helper=this.element},_change:{e:function(e,t,n){return{width:this.originalSize.width+t}},w:function(e,t,n){var r=this.options,i=this.originalSize,s=this.originalPosition;return{left:s.left+t,width:i.width-t}},n:function(e,t,n){var r=this.options,i=this.originalSize,s=this.originalPosition;return{top:s.top+n,height:i.height-n}},s:function(e,t,n){return{height:this.originalSize.height+n}},se:function(t,n,r){return e.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[t,n,r]))},sw:function(t,n,r){return e.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[t,n,r]))},ne:function(t,n,r){return e.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[t,n,r]))},nw:function(t,n,r){return e.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[t,n,r]))}},_propagate:function(t,n){e.ui.plugin.call(this,t,[n,this.ui()]),t!="resize"&&this._trigger(t,n,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),e.ui.plugin.add("resizable","alsoResize",{start:function(t,n){var r=e(this).data("resizable"),i=r.options,s=function(t){e(t).each(function(){var t=e(this);t.data("resizable-alsoresize",{width:parseInt(t.width(),10),height:parseInt(t.height(),10),left:parseInt(t.css("left"),10),top:parseInt(t.css("top"),10)})})};typeof i.alsoResize=="object"&&!i.alsoResize.parentNode?i.alsoResize.length?(i.alsoResize=i.alsoResize[0],s(i.alsoResize)):e.each(i.alsoResize,function(e){s(e)}):s(i.alsoResize)},resize:function(t,n){var r=e(this).data("resizable"),i=r.options,s=r.originalSize,o=r.originalPosition,u={height:r.size.height-s.height||0,width:r.size.width-s.width||0,top:r.position.top-o.top||0,left:r.position.left-o.left||0},a=function(t,r){e(t).each(function(){var t=e(this),i=e(this).data("resizable-alsoresize"),s={},o=r&&r.length?r:t.parents(n.originalElement[0]).length?["width","height"]:["width","height","top","left"];e.each(o,function(e,t){var n=(i[t]||0)+(u[t]||0);n&&n>=0&&(s[t]=n||null)}),t.css(s)})};typeof i.alsoResize=="object"&&!i.alsoResize.nodeType?e.each(i.alsoResize,function(e,t){a(e,t)}):a(i.alsoResize)},stop:function(t,n){e(this).removeData("resizable-alsoresize")}}),e.ui.plugin.add("resizable","animate",{stop:function(t,n){var r=e(this).data("resizable"),i=r.options,s=r._proportionallyResizeElements,o=s.length&&/textarea/i.test(s[0].nodeName),u=o&&e.ui.hasScroll(s[0],"left")?0:r.sizeDiff.height,a=o?0:r.sizeDiff.width,f={width:r.size.width-a,height:r.size.height-u},l=parseInt(r.element.css("left"),10)+(r.position.left-r.originalPosition.left)||null,c=parseInt(r.element.css("top"),10)+(r.position.top-r.originalPosition.top)||null;r.element.animate(e.extend(f,c&&l?{top:c,left:l}:{}),{duration:i.animateDuration,easing:i.animateEasing,step:function(){var n={width:parseInt(r.element.css("width"),10),height:parseInt(r.element.css("height"),10),top:parseInt(r.element.css("top"),10),left:parseInt(r.element.css("left"),10)};s&&s.length&&e(s[0]).css({width:n.width,height:n.height}),r._updateCache(n),r._propagate("resize",t)}})}}),e.ui.plugin.add("resizable","containment",{start:function(t,r){var i=e(this).data("resizable"),s=i.options,o=i.element,u=s.containment,a=u instanceof e?u.get(0):/parent/.test(u)?o.parent().get(0):u;if(!a)return;i.containerElement=e(a);if(/document/.test(u)||u==document)i.containerOffset={left:0,top:0},i.containerPosition={left:0,top:0},i.parentData={element:e(document),left:0,top:0,width:e(document).width(),height:e(document).height()||document.body.parentNode.scrollHeight};else{var f=e(a),l=[];e(["Top","Right","Left","Bottom"]).each(function(e,t){l[e]=n(f.css("padding"+t))}),i.containerOffset=f.offset(),i.containerPosition=f.position(),i.containerSize={height:f.innerHeight()-l[3],width:f.innerWidth()-l[1]};var c=i.containerOffset,h=i.containerSize.height,p=i.containerSize.width,d=e.ui.hasScroll(a,"left")?a.scrollWidth:p,v=e.ui.hasScroll(a)?a.scrollHeight:h;i.parentData={element:a,left:c.left,top:c.top,width:d,height:v}}},resize:function(t,n){var r=e(this).data("resizable"),i=r.options,s=r.containerSize,o=r.containerOffset,u=r.size,a=r.position,f=r._aspectRatio||t.shiftKey,l={top:0,left:0},c=r.containerElement;c[0]!=document&&/static/.test(c.css("position"))&&(l=o),a.left<(r._helper?o.left:0)&&(r.size.width=r.size.width+(r._helper?r.position.left-o.left:r.position.left-l.left),f&&(r.size.height=r.size.width/r.aspectRatio),r.position.left=i.helper?o.left:0),a.top<(r._helper?o.top:0)&&(r.size.height=r.size.height+(r._helper?r.position.top-o.top:r.position.top),f&&(r.size.width=r.size.height*r.aspectRatio),r.position.top=r._helper?o.top:0),r.offset.left=r.parentData.left+r.position.left,r.offset.top=r.parentData.top+r.position.top;var h=Math.abs((r._helper?r.offset.left-l.left:r.offset.left-l.left)+r.sizeDiff.width),p=Math.abs((r._helper?r.offset.top-l.top:r.offset.top-o.top)+r.sizeDiff.height),d=r.containerElement.get(0)==r.element.parent().get(0),v=/relative|absolute/.test(r.containerElement.css("position"));d&&v&&(h-=r.parentData.left),h+r.size.width>=r.parentData.width&&(r.size.width=r.parentData.width-h,f&&(r.size.height=r.size.width/r.aspectRatio)),p+r.size.height>=r.parentData.height&&(r.size.height=r.parentData.height-p,f&&(r.size.width=r.size.height*r.aspectRatio))},stop:function(t,n){var r=e(this).data("resizable"),i=r.options,s=r.position,o=r.containerOffset,u=r.containerPosition,a=r.containerElement,f=e(r.helper),l=f.offset(),c=f.outerWidth()-r.sizeDiff.width,h=f.outerHeight()-r.sizeDiff.height;r._helper&&!i.animate&&/relative/.test(a.css("position"))&&e(this).css({left:l.left-u.left-o.left,width:c,height:h}),r._helper&&!i.animate&&/static/.test(a.css("position"))&&e(this).css({left:l.left-u.left-o.left,width:c,height:h})}}),e.ui.plugin.add("resizable","ghost",{start:function(t,n){var r=e(this).data("resizable"),i=r.options,s=r.size;r.ghost=r.originalElement.clone(),r.ghost.css({opacity:.25,display:"block",position:"relative",height:s.height,width:s.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass(typeof i.ghost=="string"?i.ghost:""),r.ghost.appendTo(r.helper)},resize:function(t,n){var r=e(this).data("resizable"),i=r.options;r.ghost&&r.ghost.css({position:"relative",height:r.size.height,width:r.size.width})},stop:function(t,n){var r=e(this).data("resizable"),i=r.options;r.ghost&&r.helper&&r.helper.get(0).removeChild(r.ghost.get(0))}}),e.ui.plugin.add("resizable","grid",{resize:function(t,n){var r=e(this).data("resizable"),i=r.options,s=r.size,o=r.originalSize,u=r.originalPosition,a=r.axis,f=i._aspectRatio||t.shiftKey;i.grid=typeof i.grid=="number"?[i.grid,i.grid]:i.grid;var l=Math.round((s.width-o.width)/(i.grid[0]||1))*(i.grid[0]||1),c=Math.round((s.height-o.height)/(i.grid[1]||1))*(i.grid[1]||1);/^(se|s|e)$/.test(a)?(r.size.width=o.width+l,r.size.height=o.height+c):/^(ne)$/.test(a)?(r.size.width=o.width+l,r.size.height=o.height+c,r.position.top=u.top-c):/^(sw)$/.test(a)?(r.size.width=o.width+l,r.size.height=o.height+c,r.position.left=u.left-l):(r.size.width=o.width+l,r.size.height=o.height+c,r.position.top=u.top-c,r.position.left=u.left-l)}});var n=function(e){return parseInt(e,10)||0},r=function(e){return!isNaN(parseInt(e,10))}})(jQuery);(function(e,t){e.widget("ui.sortable",e.ui.mouse,{version:"1.9.1",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3},_create:function(){var e=this.options;this.containerCache={},this.element.addClass("ui-sortable"),this.refresh(),this.floating=this.items.length?e.axis==="x"||/left|right/.test(this.items[0].item.css("float"))||/inline|table-cell/.test(this.items[0].item.css("display")):!1,this.offset=this.element.offset(),this._mouseInit(),this.ready=!0},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled"),this._mouseDestroy();for(var e=this.items.length-1;e>=0;e--)this.items[e].item.removeData(this.widgetName+"-item");return this},_setOption:function(t,n){t==="disabled"?(this.options[t]=n,this.widget().toggleClass("ui-sortable-disabled",!!n)):e.Widget.prototype._setOption.apply(this,arguments)},_mouseCapture:function(t,n){var r=this;if(this.reverting)return!1;if(this.options.disabled||this.options.type=="static")return!1;this._refreshItems(t);var i=null,s=e(t.target).parents().each(function(){if(e.data(this,r.widgetName+"-item")==r)return i=e(this),!1});e.data(t.target,r.widgetName+"-item")==r&&(i=e(t.target));if(!i)return!1;if(this.options.handle&&!n){var o=!1;e(this.options.handle,i).find("*").andSelf().each(function(){this==t.target&&(o=!0)});if(!o)return!1}return this.currentItem=i,this._removeCurrentsFromItems(),!0},_mouseStart:function(t,n,r){var i=this.options;this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(t),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},e.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(t),this.originalPageX=t.pageX,this.originalPageY=t.pageY,i.cursorAt&&this._adjustOffsetFromHelper(i.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!=this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),i.containment&&this._setContainment(),i.cursor&&(e("body").css("cursor")&&(this._storedCursor=e("body").css("cursor")),e("body").css("cursor",i.cursor)),i.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",i.opacity)),i.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",i.zIndex)),this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",t,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions();if(!r)for(var s=this.containers.length-1;s>=0;s--)this.containers[s]._trigger("activate",t,this._uiHash(this));return e.ui.ddmanager&&(e.ui.ddmanager.current=this),e.ui.ddmanager&&!i.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this.dragging=!0,this.helper.addClass("ui-sortable-helper"),this._mouseDrag(t),!0},_mouseDrag:function(t){this.position=this._generatePosition(t),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs);if(this.options.scroll){var n=this.options,r=!1;this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-t.pageY<n.scrollSensitivity?this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop+n.scrollSpeed:t.pageY-this.overflowOffset.top<n.scrollSensitivity&&(this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop-n.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-t.pageX<n.scrollSensitivity?this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft+n.scrollSpeed:t.pageX-this.overflowOffset.left<n.scrollSensitivity&&(this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft-n.scrollSpeed)):(t.pageY-e(document).scrollTop()<n.scrollSensitivity?r=e(document).scrollTop(e(document).scrollTop()-n.scrollSpeed):e(window).height()-(t.pageY-e(document).scrollTop())<n.scrollSensitivity&&(r=e(document).scrollTop(e(document).scrollTop()+n.scrollSpeed)),t.pageX-e(document).scrollLeft()<n.scrollSensitivity?r=e(document).scrollLeft(e(document).scrollLeft()-n.scrollSpeed):e(window).width()-(t.pageX-e(document).scrollLeft())<n.scrollSensitivity&&(r=e(document).scrollLeft(e(document).scrollLeft()+n.scrollSpeed))),r!==!1&&e.ui.ddmanager&&!n.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t)}this.positionAbs=this._convertPositionTo("absolute");if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||this.options.axis!="x")this.helper[0].style.top=this.position.top+"px";for(var i=this.items.length-1;i>=0;i--){var s=this.items[i],o=s.item[0],u=this._intersectsWithPointer(s);if(!u)continue;if(s.instance!==this.currentContainer)continue;if(o!=this.currentItem[0]&&this.placeholder[u==1?"next":"prev"]()[0]!=o&&!e.contains(this.placeholder[0],o)&&(this.options.type=="semi-dynamic"?!e.contains(this.element[0],o):!0)){this.direction=u==1?"down":"up";if(this.options.tolerance!="pointer"&&!this._intersectsWithSides(s))break;this._rearrange(t,s),this._trigger("change",t,this._uiHash());break}}return this._contactContainers(t),e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),this._trigger("sort",t,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(t,n){if(!t)return;e.ui.ddmanager&&!this.options.dropBehaviour&&e.ui.ddmanager.drop(this,t);if(this.options.revert){var r=this,i=this.placeholder.offset();this.reverting=!0,e(this.helper).animate({left:i.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollLeft),top:i.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollTop)},parseInt(this.options.revert,10)||500,function(){r._clear(t)})}else this._clear(t,n);return!1},cancel:function(){if(this.dragging){this._mouseUp({target:null}),this.options.helper=="original"?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):this.currentItem.show();for(var t=this.containers.length-1;t>=0;t--)this.containers[t]._trigger("deactivate",null,this._uiHash(this)),this.containers[t].containerCache.over&&(this.containers[t]._trigger("out",null,this._uiHash(this)),this.containers[t].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.options.helper!="original"&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),e.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?e(this.domPosition.prev).after(this.currentItem):e(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(t){var n=this._getItemsAsjQuery(t&&t.connected),r=[];return t=t||{},e(n).each(function(){var n=(e(t.item||this).attr(t.attribute||"id")||"").match(t.expression||/(.+)[-=_](.+)/);n&&r.push((t.key||n[1]+"[]")+"="+(t.key&&t.expression?n[1]:n[2]))}),!r.length&&t.key&&r.push(t.key+"="),r.join("&")},toArray:function(t){var n=this._getItemsAsjQuery(t&&t.connected),r=[];return t=t||{},n.each(function(){r.push(e(t.item||this).attr(t.attribute||"id")||"")}),r},_intersectsWith:function(e){var t=this.positionAbs.left,n=t+this.helperProportions.width,r=this.positionAbs.top,i=r+this.helperProportions.height,s=e.left,o=s+e.width,u=e.top,a=u+e.height,f=this.offset.click.top,l=this.offset.click.left,c=r+f>u&&r+f<a&&t+l>s&&t+l<o;return this.options.tolerance=="pointer"||this.options.forcePointerForContainers||this.options.tolerance!="pointer"&&this.helperProportions[this.floating?"width":"height"]>e[this.floating?"width":"height"]?c:s<t+this.helperProportions.width/2&&n-this.helperProportions.width/2<o&&u<r+this.helperProportions.height/2&&i-this.helperProportions.height/2<a},_intersectsWithPointer:function(t){var n=this.options.axis==="x"||e.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,t.top,t.height),r=this.options.axis==="y"||e.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,t.left,t.width),i=n&&r,s=this._getDragVerticalDirection(),o=this._getDragHorizontalDirection();return i?this.floating?o&&o=="right"||s=="down"?2:1:s&&(s=="down"?2:1):!1},_intersectsWithSides:function(t){var n=e.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,t.top+t.height/2,t.height),r=e.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,t.left+t.width/2,t.width),i=this._getDragVerticalDirection(),s=this._getDragHorizontalDirection();return this.floating&&s?s=="right"&&r||s=="left"&&!r:i&&(i=="down"&&n||i=="up"&&!n)},_getDragVerticalDirection:function(){var e=this.positionAbs.top-this.lastPositionAbs.top;return e!=0&&(e>0?"down":"up")},_getDragHorizontalDirection:function(){var e=this.positionAbs.left-this.lastPositionAbs.left;return e!=0&&(e>0?"right":"left")},refresh:function(e){return this._refreshItems(e),this.refreshPositions(),this},_connectWith:function(){var e=this.options;return e.connectWith.constructor==String?[e.connectWith]:e.connectWith},_getItemsAsjQuery:function(t){var n=[],r=[],i=this._connectWith();if(i&&t)for(var s=i.length-1;s>=0;s--){var o=e(i[s]);for(var u=o.length-1;u>=0;u--){var a=e.data(o[u],this.widgetName);a&&a!=this&&!a.options.disabled&&r.push([e.isFunction(a.options.items)?a.options.items.call(a.element):e(a.options.items,a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),a])}}r.push([e.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):e(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]);for(var s=r.length-1;s>=0;s--)r[s][0].each(function(){n.push(this)});return e(n)},_removeCurrentsFromItems:function(){var t=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=e.grep(this.items,function(e){for(var n=0;n<t.length;n++)if(t[n]==e.item[0])return!1;return!0})},_refreshItems:function(t){this.items=[],this.containers=[this];var n=this.items,r=[[e.isFunction(this.options.items)?this.options.items.call(this.element[0],t,{item:this.currentItem}):e(this.options.items,this.element),this]],i=this._connectWith();if(i&&this.ready)for(var s=i.length-1;s>=0;s--){var o=e(i[s]);for(var u=o.length-1;u>=0;u--){var a=e.data(o[u],this.widgetName);a&&a!=this&&!a.options.disabled&&(r.push([e.isFunction(a.options.items)?a.options.items.call(a.element[0],t,{item:this.currentItem}):e(a.options.items,a.element),a]),this.containers.push(a))}}for(var s=r.length-1;s>=0;s--){var f=r[s][1],l=r[s][0];for(var u=0,c=l.length;u<c;u++){var h=e(l[u]);h.data(this.widgetName+"-item",f),n.push({item:h,instance:f,width:0,height:0,left:0,top:0})}}},refreshPositions:function(t){this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());for(var n=this.items.length-1;n>=0;n--){var r=this.items[n];if(r.instance!=this.currentContainer&&this.currentContainer&&r.item[0]!=this.currentItem[0])continue;var i=this.options.toleranceElement?e(this.options.toleranceElement,r.item):r.item;t||(r.width=i.outerWidth(),r.height=i.outerHeight());var s=i.offset();r.left=s.left,r.top=s.top}if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(var n=this.containers.length-1;n>=0;n--){var s=this.containers[n].element.offset();this.containers[n].containerCache.left=s.left,this.containers[n].containerCache.top=s.top,this.containers[n].containerCache.width=this.containers[n].element.outerWidth(),this.containers[n].containerCache.height=this.containers[n].element.outerHeight()}return this},_createPlaceholder:function(t){t=t||this;var n=t.options;if(!n.placeholder||n.placeholder.constructor==String){var r=n.placeholder;n.placeholder={element:function(){var n=e(document.createElement(t.currentItem[0].nodeName)).addClass(r||t.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];return r||(n.style.visibility="hidden"),n},update:function(e,i){if(r&&!n.forcePlaceholderSize)return;i.height()||i.height(t.currentItem.innerHeight()-parseInt(t.currentItem.css("paddingTop")||0,10)-parseInt(t.currentItem.css("paddingBottom")||0,10)),i.width()||i.width(t.currentItem.innerWidth()-parseInt(t.currentItem.css("paddingLeft")||0,10)-parseInt(t.currentItem.css("paddingRight")||0,10))}}}t.placeholder=e(n.placeholder.element.call(t.element,t.currentItem)),t.currentItem.after(t.placeholder),n.placeholder.update(t,t.placeholder)},_contactContainers:function(t){var n=null,r=null;for(var i=this.containers.length-1;i>=0;i--){if(e.contains(this.currentItem[0],this.containers[i].element[0]))continue;if(this._intersectsWith(this.containers[i].containerCache)){if(n&&e.contains(this.containers[i].element[0],n.element[0]))continue;n=this.containers[i],r=i}else this.containers[i].containerCache.over&&(this.containers[i]._trigger("out",t,this._uiHash(this)),this.containers[i].containerCache.over=0)}if(!n)return;if(this.containers.length===1)this.containers[r]._trigger("over",t,this._uiHash(this)),this.containers[r].containerCache.over=1;else{var s=1e4,o=null,u=this.containers[r].floating?"left":"top",a=this.containers[r].floating?"width":"height",f=this.positionAbs[u]+this.offset.click[u];for(var l=this.items.length-1;l>=0;l--){if(!e.contains(this.containers[r].element[0],this.items[l].item[0]))continue;if(this.items[l].item[0]==this.currentItem[0])continue;var c=this.items[l].item.offset()[u],h=!1;Math.abs(c-f)>Math.abs(c+this.items[l][a]-f)&&(h=!0,c+=this.items[l][a]),Math.abs(c-f)<s&&(s=Math.abs(c-f),o=this.items[l],this.direction=h?"up":"down")}if(!o&&!this.options.dropOnEmpty)return;this.currentContainer=this.containers[r],o?this._rearrange(t,o,null,!0):this._rearrange(t,null,this.containers[r].element,!0),this._trigger("change",t,this._uiHash()),this.containers[r]._trigger("change",t,this._uiHash(this)),this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[r]._trigger("over",t,this._uiHash(this)),this.containers[r].containerCache.over=1}},_createHelper:function(t){var n=this.options,r=e.isFunction(n.helper)?e(n.helper.apply(this.element[0],[t,this.currentItem])):n.helper=="clone"?this.currentItem.clone():this.currentItem;return r.parents("body").length||e(n.appendTo!="parent"?n.appendTo:this.currentItem[0].parentNode)[0].appendChild(r[0]),r[0]==this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(r[0].style.width==""||n.forceHelperSize)&&r.width(this.currentItem.width()),(r[0].style.height==""||n.forceHelperSize)&&r.height(this.currentItem.height()),r},_adjustOffsetFromHelper:function(t){typeof t=="string"&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var t=this.offsetParent.offset();this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop());if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&e.ui.ie)t={top:0,left:0};return{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var e=this.currentItem.position();return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:e.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t=this.options;t.containment=="parent"&&(t.containment=this.helper[0].parentNode);if(t.containment=="document"||t.containment=="window")this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,e(t.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(e(t.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(t.containment)){var n=e(t.containment)[0],r=e(t.containment).offset(),i=e(n).css("overflow")!="hidden";this.containment=[r.left+(parseInt(e(n).css("borderLeftWidth"),10)||0)+(parseInt(e(n).css("paddingLeft"),10)||0)-this.margins.left,r.top+(parseInt(e(n).css("borderTopWidth"),10)||0)+(parseInt(e(n).css("paddingTop"),10)||0)-this.margins.top,r.left+(i?Math.max(n.scrollWidth,n.offsetWidth):n.offsetWidth)-(parseInt(e(n).css("borderLeftWidth"),10)||0)-(parseInt(e(n).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,r.top+(i?Math.max(n.scrollHeight,n.offsetHeight):n.offsetHeight)-(parseInt(e(n).css("borderTopWidth"),10)||0)-(parseInt(e(n).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]}},_convertPositionTo:function(t,n){n||(n=this.position);var r=t=="absolute"?1:-1,i=this.options,s=this.cssPosition!="absolute"||this.scrollParent[0]!=document&&!!e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,o=/(html|body)/i.test(s[0].tagName);return{top:n.top+this.offset.relative.top*r+this.offset.parent.top*r-(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():o?0:s.scrollTop())*r,left:n.left+this.offset.relative.left*r+this.offset.parent.left*r-(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():o?0:s.scrollLeft())*r}},_generatePosition:function(t){var n=this.options,r=this.cssPosition!="absolute"||this.scrollParent[0]!=document&&!!e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,i=/(html|body)/i.test(r[0].tagName);this.cssPosition=="relative"&&(this.scrollParent[0]==document||this.scrollParent[0]==this.offsetParent[0])&&(this.offset.relative=this._getRelativeOffset());var s=t.pageX,o=t.pageY;if(this.originalPosition){this.containment&&(t.pageX-this.offset.click.left<this.containment[0]&&(s=this.containment[0]+this.offset.click.left),t.pageY-this.offset.click.top<this.containment[1]&&(o=this.containment[1]+this.offset.click.top),t.pageX-this.offset.click.left>this.containment[2]&&(s=this.containment[2]+this.offset.click.left),t.pageY-this.offset.click.top>this.containment[3]&&(o=this.containment[3]+this.offset.click.top));if(n.grid){var u=this.originalPageY+Math.round((o-this.originalPageY)/n.grid[1])*n.grid[1];o=this.containment?u-this.offset.click.top<this.containment[1]||u-this.offset.click.top>this.containment[3]?u-this.offset.click.top<this.containment[1]?u+n.grid[1]:u-n.grid[1]:u:u;var a=this.originalPageX+Math.round((s-this.originalPageX)/n.grid[0])*n.grid[0];s=this.containment?a-this.offset.click.left<this.containment[0]||a-this.offset.click.left>this.containment[2]?a-this.offset.click.left<this.containment[0]?a+n.grid[0]:a-n.grid[0]:a:a}}return{top:o-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():i?0:r.scrollTop()),left:s-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():i?0:r.scrollLeft())}},_rearrange:function(e,t,n,r){n?n[0].appendChild(this.placeholder[0]):t.item[0].parentNode.insertBefore(this.placeholder[0],this.direction=="down"?t.item[0]:t.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var i=this.counter;this._delay(function(){i==this.counter&&this.refreshPositions(!r)})},_clear:function(t,n){this.reverting=!1;var r=[];!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null;if(this.helper[0]==this.currentItem[0]){for(var i in this._storedCSS)if(this._storedCSS[i]=="auto"||this._storedCSS[i]=="static")this._storedCSS[i]="";this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show();this.fromOutside&&!n&&r.push(function(e){this._trigger("receive",e,this._uiHash(this.fromOutside))}),(this.fromOutside||this.domPosition.prev!=this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!=this.currentItem.parent()[0])&&!n&&r.push(function(e){this._trigger("update",e,this._uiHash())}),this!==this.currentContainer&&(n||(r.push(function(e){this._trigger("remove",e,this._uiHash())}),r.push(function(e){return function(t){e._trigger("receive",t,this._uiHash(this))}}.call(this,this.currentContainer)),r.push(function(e){return function(t){e._trigger("update",t,this._uiHash(this))}}.call(this,this.currentContainer))));for(var i=this.containers.length-1;i>=0;i--)n||r.push(function(e){return function(t){e._trigger("deactivate",t,this._uiHash(this))}}.call(this,this.containers[i])),this.containers[i].containerCache.over&&(r.push(function(e){return function(t){e._trigger("out",t,this._uiHash(this))}}.call(this,this.containers[i])),this.containers[i].containerCache.over=0);this._storedCursor&&e("body").css("cursor",this._storedCursor),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex",this._storedZIndex=="auto"?"":this._storedZIndex),this.dragging=!1;if(this.cancelHelperRemoval){if(!n){this._trigger("beforeStop",t,this._uiHash());for(var i=0;i<r.length;i++)r[i].call(this,t);this._trigger("stop",t,this._uiHash())}return this.fromOutside=!1,!1}n||this._trigger("beforeStop",t,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.helper[0]!=this.currentItem[0]&&this.helper.remove(),this.helper=null;if(!n){for(var i=0;i<r.length;i++)r[i].call(this,t);this._trigger("stop",t,this._uiHash())}return this.fromOutside=!1,!0},_trigger:function(){e.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()},_uiHash:function(t){var n=t||this;return{helper:n.helper,placeholder:n.placeholder||e([]),position:n.position,originalPosition:n.originalPosition,offset:n.positionAbs,item:n.currentItem,sender:t?t.element:null}}})})(jQuery);
;
;
/*! lodash.min.js */ 
;
;
/**
* @license
* Lo-Dash 2.4.1 (Custom Build) lodash.com/license | Underscore.js 1.5.2 underscorejs.org/LICENSE
* Build: `lodash -o ./dist/lodash.compat.js`
*/
;(function(){function n(n,t,e){e=(e||0)-1;for(var r=n?n.length:0;++e<r;)if(n[e]===t)return e;return-1}function t(t,e){var r=typeof e;if(t=t.l,"boolean"==r||null==e)return t[e]?0:-1;"number"!=r&&"string"!=r&&(r="object");var u="number"==r?e:b+e;return t=(t=t[r])&&t[u],"object"==r?t&&-1<n(t,e)?0:-1:t?0:-1}function e(n){var t=this.l,e=typeof n;if("boolean"==e||null==n)t[n]=true;else{"number"!=e&&"string"!=e&&(e="object");var r="number"==e?n:b+n,t=t[e]||(t[e]={});"object"==e?(t[r]||(t[r]=[])).push(n):t[r]=true
}}function r(n){return n.charCodeAt(0)}function u(n,t){for(var e=n.m,r=t.m,u=-1,o=e.length;++u<o;){var a=e[u],i=r[u];if(a!==i){if(a>i||typeof a=="undefined")return 1;if(a<i||typeof i=="undefined")return-1}}return n.n-t.n}function o(n){var t=-1,r=n.length,u=n[0],o=n[r/2|0],a=n[r-1];if(u&&typeof u=="object"&&o&&typeof o=="object"&&a&&typeof a=="object")return false;for(u=l(),u["false"]=u["null"]=u["true"]=u.undefined=false,o=l(),o.k=n,o.l=u,o.push=e;++t<r;)o.push(n[t]);return o}function a(n){return"\\"+Y[n]
}function i(){return v.pop()||[]}function l(){return y.pop()||{k:null,l:null,m:null,"false":false,n:0,"null":false,number:null,object:null,push:null,string:null,"true":false,undefined:false,o:null}}function f(n){return typeof n.toString!="function"&&typeof(n+"")=="string"}function c(n){n.length=0,v.length<w&&v.push(n)}function p(n){var t=n.l;t&&p(t),n.k=n.l=n.m=n.object=n.number=n.string=n.o=null,y.length<w&&y.push(n)}function s(n,t,e){t||(t=0),typeof e=="undefined"&&(e=n?n.length:0);var r=-1;e=e-t||0;for(var u=Array(0>e?0:e);++r<e;)u[r]=n[t+r];
return u}function g(e){function v(n){return n&&typeof n=="object"&&!qe(n)&&we.call(n,"__wrapped__")?n:new y(n)}function y(n,t){this.__chain__=!!t,this.__wrapped__=n}function w(n){function t(){if(r){var n=s(r);je.apply(n,arguments)}if(this instanceof t){var o=nt(e.prototype),n=e.apply(o,n||arguments);return xt(n)?n:o}return e.apply(u,n||arguments)}var e=n[0],r=n[2],u=n[4];return ze(t,n),t}function Y(n,t,e,r,u){if(e){var o=e(n);if(typeof o!="undefined")return o}if(!xt(n))return n;var a=he.call(n);if(!V[a]||!Le.nodeClass&&f(n))return n;
var l=Te[a];switch(a){case L:case z:return new l(+n);case W:case M:return new l(n);case J:return o=l(n.source,S.exec(n)),o.lastIndex=n.lastIndex,o}if(a=qe(n),t){var p=!r;r||(r=i()),u||(u=i());for(var g=r.length;g--;)if(r[g]==n)return u[g];o=a?l(n.length):{}}else o=a?s(n):Ye({},n);return a&&(we.call(n,"index")&&(o.index=n.index),we.call(n,"input")&&(o.input=n.input)),t?(r.push(n),u.push(o),(a?Xe:tr)(n,function(n,a){o[a]=Y(n,t,e,r,u)}),p&&(c(r),c(u)),o):o}function nt(n){return xt(n)?Se(n):{}}function tt(n,t,e){if(typeof n!="function")return Ht;
if(typeof t=="undefined"||!("prototype"in n))return n;var r=n.__bindData__;if(typeof r=="undefined"&&(Le.funcNames&&(r=!n.name),r=r||!Le.funcDecomp,!r)){var u=be.call(n);Le.funcNames||(r=!A.test(u)),r||(r=B.test(u),ze(n,r))}if(false===r||true!==r&&1&r[1])return n;switch(e){case 1:return function(e){return n.call(t,e)};case 2:return function(e,r){return n.call(t,e,r)};case 3:return function(e,r,u){return n.call(t,e,r,u)};case 4:return function(e,r,u,o){return n.call(t,e,r,u,o)}}return Mt(n,t)}function et(n){function t(){var n=l?a:this;
if(u){var h=s(u);je.apply(h,arguments)}return(o||c)&&(h||(h=s(arguments)),o&&je.apply(h,o),c&&h.length<i)?(r|=16,et([e,p?r:-4&r,h,null,a,i])):(h||(h=arguments),f&&(e=n[g]),this instanceof t?(n=nt(e.prototype),h=e.apply(n,h),xt(h)?h:n):e.apply(n,h))}var e=n[0],r=n[1],u=n[2],o=n[3],a=n[4],i=n[5],l=1&r,f=2&r,c=4&r,p=8&r,g=e;return ze(t,n),t}function rt(e,r){var u=-1,a=ht(),i=e?e.length:0,l=i>=_&&a===n,f=[];if(l){var c=o(r);c?(a=t,r=c):l=false}for(;++u<i;)c=e[u],0>a(r,c)&&f.push(c);return l&&p(r),f}function ot(n,t,e,r){r=(r||0)-1;
for(var u=n?n.length:0,o=[];++r<u;){var a=n[r];if(a&&typeof a=="object"&&typeof a.length=="number"&&(qe(a)||dt(a))){t||(a=ot(a,t,e));var i=-1,l=a.length,f=o.length;for(o.length+=l;++i<l;)o[f++]=a[i]}else e||o.push(a)}return o}function at(n,t,e,r,u,o){if(e){var a=e(n,t);if(typeof a!="undefined")return!!a}if(n===t)return 0!==n||1/n==1/t;if(n===n&&!(n&&X[typeof n]||t&&X[typeof t]))return false;if(null==n||null==t)return n===t;var l=he.call(n),p=he.call(t);if(l==T&&(l=G),p==T&&(p=G),l!=p)return false;switch(l){case L:case z:return+n==+t;
case W:return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case J:case M:return n==ie(t)}if(p=l==$,!p){var s=we.call(n,"__wrapped__"),g=we.call(t,"__wrapped__");if(s||g)return at(s?n.__wrapped__:n,g?t.__wrapped__:t,e,r,u,o);if(l!=G||!Le.nodeClass&&(f(n)||f(t)))return false;if(l=!Le.argsObject&&dt(n)?oe:n.constructor,s=!Le.argsObject&&dt(t)?oe:t.constructor,l!=s&&!(jt(l)&&l instanceof l&&jt(s)&&s instanceof s)&&"constructor"in n&&"constructor"in t)return false}for(l=!u,u||(u=i()),o||(o=i()),s=u.length;s--;)if(u[s]==n)return o[s]==t;
var h=0,a=true;if(u.push(n),o.push(t),p){if(s=n.length,h=t.length,(a=h==s)||r)for(;h--;)if(p=s,g=t[h],r)for(;p--&&!(a=at(n[p],g,e,r,u,o)););else if(!(a=at(n[h],g,e,r,u,o)))break}else nr(t,function(t,i,l){return we.call(l,i)?(h++,a=we.call(n,i)&&at(n[i],t,e,r,u,o)):void 0}),a&&!r&&nr(n,function(n,t,e){return we.call(e,t)?a=-1<--h:void 0});return u.pop(),o.pop(),l&&(c(u),c(o)),a}function it(n,t,e,r,u){(qe(t)?Dt:tr)(t,function(t,o){var a,i,l=t,f=n[o];if(t&&((i=qe(t))||er(t))){for(l=r.length;l--;)if(a=r[l]==t){f=u[l];
break}if(!a){var c;e&&(l=e(f,t),c=typeof l!="undefined")&&(f=l),c||(f=i?qe(f)?f:[]:er(f)?f:{}),r.push(t),u.push(f),c||it(f,t,e,r,u)}}else e&&(l=e(f,t),typeof l=="undefined"&&(l=t)),typeof l!="undefined"&&(f=l);n[o]=f})}function lt(n,t){return n+de(Fe()*(t-n+1))}function ft(e,r,u){var a=-1,l=ht(),f=e?e.length:0,s=[],g=!r&&f>=_&&l===n,h=u||g?i():s;for(g&&(h=o(h),l=t);++a<f;){var v=e[a],y=u?u(v,a,e):v;(r?!a||h[h.length-1]!==y:0>l(h,y))&&((u||g)&&h.push(y),s.push(v))}return g?(c(h.k),p(h)):u&&c(h),s}function ct(n){return function(t,e,r){var u={};
if(e=v.createCallback(e,r,3),qe(t)){r=-1;for(var o=t.length;++r<o;){var a=t[r];n(u,a,e(a,r,t),t)}}else Xe(t,function(t,r,o){n(u,t,e(t,r,o),o)});return u}}function pt(n,t,e,r,u,o){var a=1&t,i=4&t,l=16&t,f=32&t;if(!(2&t||jt(n)))throw new le;l&&!e.length&&(t&=-17,l=e=false),f&&!r.length&&(t&=-33,f=r=false);var c=n&&n.__bindData__;return c&&true!==c?(c=s(c),c[2]&&(c[2]=s(c[2])),c[3]&&(c[3]=s(c[3])),!a||1&c[1]||(c[4]=u),!a&&1&c[1]&&(t|=8),!i||4&c[1]||(c[5]=o),l&&je.apply(c[2]||(c[2]=[]),e),f&&Ee.apply(c[3]||(c[3]=[]),r),c[1]|=t,pt.apply(null,c)):(1==t||17===t?w:et)([n,t,e,r,u,o])
}function st(){Q.h=F,Q.b=Q.c=Q.g=Q.i="",Q.e="t",Q.j=true;for(var n,t=0;n=arguments[t];t++)for(var e in n)Q[e]=n[e];t=Q.a,Q.d=/^[^,]+/.exec(t)[0],n=ee,t="return function("+t+"){",e=Q;var r="var n,t="+e.d+",E="+e.e+";if(!t)return E;"+e.i+";";e.b?(r+="var u=t.length;n=-1;if("+e.b+"){",Le.unindexedChars&&(r+="if(s(t)){t=t.split('')}"),r+="while(++n<u){"+e.g+";}}else{"):Le.nonEnumArgs&&(r+="var u=t.length;n=-1;if(u&&p(t)){while(++n<u){n+='';"+e.g+";}}else{"),Le.enumPrototypes&&(r+="var G=typeof t=='function';"),Le.enumErrorProps&&(r+="var F=t===k||t instanceof Error;");
var u=[];if(Le.enumPrototypes&&u.push('!(G&&n=="prototype")'),Le.enumErrorProps&&u.push('!(F&&(n=="message"||n=="name"))'),e.j&&e.f)r+="var C=-1,D=B[typeof t]&&v(t),u=D?D.length:0;while(++C<u){n=D[C];",u.length&&(r+="if("+u.join("&&")+"){"),r+=e.g+";",u.length&&(r+="}"),r+="}";else if(r+="for(n in t){",e.j&&u.push("m.call(t, n)"),u.length&&(r+="if("+u.join("&&")+"){"),r+=e.g+";",u.length&&(r+="}"),r+="}",Le.nonEnumShadows){for(r+="if(t!==A){var i=t.constructor,r=t===(i&&i.prototype),f=t===J?I:t===k?j:L.call(t),x=y[f];",k=0;7>k;k++)r+="n='"+e.h[k]+"';if((!(r&&x[n])&&m.call(t,n))",e.j||(r+="||(!x[n]&&t[n]!==A[n])"),r+="){"+e.g+"}";
r+="}"}return(e.b||Le.nonEnumArgs)&&(r+="}"),r+=e.c+";return E",n("d,j,k,m,o,p,q,s,v,A,B,y,I,J,L",t+r+"}")(tt,q,ce,we,d,dt,qe,kt,Q.f,pe,X,$e,M,se,he)}function gt(n){return Ve[n]}function ht(){var t=(t=v.indexOf)===zt?n:t;return t}function vt(n){return typeof n=="function"&&ve.test(n)}function yt(n){var t,e;return!n||he.call(n)!=G||(t=n.constructor,jt(t)&&!(t instanceof t))||!Le.argsClass&&dt(n)||!Le.nodeClass&&f(n)?false:Le.ownLast?(nr(n,function(n,t,r){return e=we.call(r,t),false}),false!==e):(nr(n,function(n,t){e=t
}),typeof e=="undefined"||we.call(n,e))}function mt(n){return He[n]}function dt(n){return n&&typeof n=="object"&&typeof n.length=="number"&&he.call(n)==T||false}function bt(n,t,e){var r=We(n),u=r.length;for(t=tt(t,e,3);u--&&(e=r[u],false!==t(n[e],e,n)););return n}function _t(n){var t=[];return nr(n,function(n,e){jt(n)&&t.push(e)}),t.sort()}function wt(n){for(var t=-1,e=We(n),r=e.length,u={};++t<r;){var o=e[t];u[n[o]]=o}return u}function jt(n){return typeof n=="function"}function xt(n){return!(!n||!X[typeof n])
}function Ct(n){return typeof n=="number"||n&&typeof n=="object"&&he.call(n)==W||false}function kt(n){return typeof n=="string"||n&&typeof n=="object"&&he.call(n)==M||false}function Et(n){for(var t=-1,e=We(n),r=e.length,u=Zt(r);++t<r;)u[t]=n[e[t]];return u}function Ot(n,t,e){var r=-1,u=ht(),o=n?n.length:0,a=false;return e=(0>e?Be(0,o+e):e)||0,qe(n)?a=-1<u(n,t,e):typeof o=="number"?a=-1<(kt(n)?n.indexOf(t,e):u(n,t,e)):Xe(n,function(n){return++r<e?void 0:!(a=n===t)}),a}function St(n,t,e){var r=true;if(t=v.createCallback(t,e,3),qe(n)){e=-1;
for(var u=n.length;++e<u&&(r=!!t(n[e],e,n)););}else Xe(n,function(n,e,u){return r=!!t(n,e,u)});return r}function At(n,t,e){var r=[];if(t=v.createCallback(t,e,3),qe(n)){e=-1;for(var u=n.length;++e<u;){var o=n[e];t(o,e,n)&&r.push(o)}}else Xe(n,function(n,e,u){t(n,e,u)&&r.push(n)});return r}function It(n,t,e){if(t=v.createCallback(t,e,3),!qe(n)){var r;return Xe(n,function(n,e,u){return t(n,e,u)?(r=n,false):void 0}),r}e=-1;for(var u=n.length;++e<u;){var o=n[e];if(t(o,e,n))return o}}function Dt(n,t,e){if(t&&typeof e=="undefined"&&qe(n)){e=-1;
for(var r=n.length;++e<r&&false!==t(n[e],e,n););}else Xe(n,t,e);return n}function Nt(n,t,e){var r=n,u=n?n.length:0;if(t=t&&typeof e=="undefined"?t:tt(t,e,3),qe(n))for(;u--&&false!==t(n[u],u,n););else{if(typeof u!="number")var o=We(n),u=o.length;else Le.unindexedChars&&kt(n)&&(r=n.split(""));Xe(n,function(n,e,a){return e=o?o[--u]:--u,t(r[e],e,a)})}return n}function Bt(n,t,e){var r=-1,u=n?n.length:0,o=Zt(typeof u=="number"?u:0);if(t=v.createCallback(t,e,3),qe(n))for(;++r<u;)o[r]=t(n[r],r,n);else Xe(n,function(n,e,u){o[++r]=t(n,e,u)
});return o}function Pt(n,t,e){var u=-1/0,o=u;if(typeof t!="function"&&e&&e[t]===n&&(t=null),null==t&&qe(n)){e=-1;for(var a=n.length;++e<a;){var i=n[e];i>o&&(o=i)}}else t=null==t&&kt(n)?r:v.createCallback(t,e,3),Xe(n,function(n,e,r){e=t(n,e,r),e>u&&(u=e,o=n)});return o}function Rt(n,t,e,r){var u=3>arguments.length;if(t=v.createCallback(t,r,4),qe(n)){var o=-1,a=n.length;for(u&&(e=n[++o]);++o<a;)e=t(e,n[o],o,n)}else Xe(n,function(n,r,o){e=u?(u=false,n):t(e,n,r,o)});return e}function Ft(n,t,e,r){var u=3>arguments.length;
return t=v.createCallback(t,r,4),Nt(n,function(n,r,o){e=u?(u=false,n):t(e,n,r,o)}),e}function Tt(n){var t=-1,e=n?n.length:0,r=Zt(typeof e=="number"?e:0);return Dt(n,function(n){var e=lt(0,++t);r[t]=r[e],r[e]=n}),r}function $t(n,t,e){var r;if(t=v.createCallback(t,e,3),qe(n)){e=-1;for(var u=n.length;++e<u&&!(r=t(n[e],e,n)););}else Xe(n,function(n,e,u){return!(r=t(n,e,u))});return!!r}function Lt(n,t,e){var r=0,u=n?n.length:0;if(typeof t!="number"&&null!=t){var o=-1;for(t=v.createCallback(t,e,3);++o<u&&t(n[o],o,n);)r++
}else if(r=t,null==r||e)return n?n[0]:h;return s(n,0,Pe(Be(0,r),u))}function zt(t,e,r){if(typeof r=="number"){var u=t?t.length:0;r=0>r?Be(0,u+r):r||0}else if(r)return r=Kt(t,e),t[r]===e?r:-1;return n(t,e,r)}function qt(n,t,e){if(typeof t!="number"&&null!=t){var r=0,u=-1,o=n?n.length:0;for(t=v.createCallback(t,e,3);++u<o&&t(n[u],u,n);)r++}else r=null==t||e?1:Be(0,t);return s(n,r)}function Kt(n,t,e,r){var u=0,o=n?n.length:u;for(e=e?v.createCallback(e,r,1):Ht,t=e(t);u<o;)r=u+o>>>1,e(n[r])<t?u=r+1:o=r;
return u}function Wt(n,t,e,r){return typeof t!="boolean"&&null!=t&&(r=e,e=typeof t!="function"&&r&&r[t]===n?null:t,t=false),null!=e&&(e=v.createCallback(e,r,3)),ft(n,t,e)}function Gt(){for(var n=1<arguments.length?arguments:arguments[0],t=-1,e=n?Pt(ar(n,"length")):0,r=Zt(0>e?0:e);++t<e;)r[t]=ar(n,t);return r}function Jt(n,t){var e=-1,r=n?n.length:0,u={};for(t||!r||qe(n[0])||(t=[]);++e<r;){var o=n[e];t?u[o]=t[e]:o&&(u[o[0]]=o[1])}return u}function Mt(n,t){return 2<arguments.length?pt(n,17,s(arguments,2),null,t):pt(n,1,null,null,t)
}function Vt(n,t,e){var r,u,o,a,i,l,f,c=0,p=false,s=true;if(!jt(n))throw new le;if(t=Be(0,t)||0,true===e)var g=true,s=false;else xt(e)&&(g=e.leading,p="maxWait"in e&&(Be(t,e.maxWait)||0),s="trailing"in e?e.trailing:s);var v=function(){var e=t-(ir()-a);0<e?l=Ce(v,e):(u&&me(u),e=f,u=l=f=h,e&&(c=ir(),o=n.apply(i,r),l||u||(r=i=null)))},y=function(){l&&me(l),u=l=f=h,(s||p!==t)&&(c=ir(),o=n.apply(i,r),l||u||(r=i=null))};return function(){if(r=arguments,a=ir(),i=this,f=s&&(l||!g),false===p)var e=g&&!l;else{u||g||(c=a);
var h=p-(a-c),m=0>=h;m?(u&&(u=me(u)),c=a,o=n.apply(i,r)):u||(u=Ce(y,h))}return m&&l?l=me(l):l||t===p||(l=Ce(v,t)),e&&(m=true,o=n.apply(i,r)),!m||l||u||(r=i=null),o}}function Ht(n){return n}function Ut(n,t,e){var r=true,u=t&&_t(t);t&&(e||u.length)||(null==e&&(e=t),o=y,t=n,n=v,u=_t(t)),false===e?r=false:xt(e)&&"chain"in e&&(r=e.chain);var o=n,a=jt(o);Dt(u,function(e){var u=n[e]=t[e];a&&(o.prototype[e]=function(){var t=this.__chain__,e=this.__wrapped__,a=[e];if(je.apply(a,arguments),a=u.apply(n,a),r||t){if(e===a&&xt(a))return this;
a=new o(a),a.__chain__=t}return a})})}function Qt(){}function Xt(n){return function(t){return t[n]}}function Yt(){return this.__wrapped__}e=e?ut.defaults(Z.Object(),e,ut.pick(Z,R)):Z;var Zt=e.Array,ne=e.Boolean,te=e.Date,ee=e.Function,re=e.Math,ue=e.Number,oe=e.Object,ae=e.RegExp,ie=e.String,le=e.TypeError,fe=[],ce=e.Error.prototype,pe=oe.prototype,se=ie.prototype,ge=e._,he=pe.toString,ve=ae("^"+ie(he).replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/toString| for [^\]]+/g,".*?")+"$"),ye=re.ceil,me=e.clearTimeout,de=re.floor,be=ee.prototype.toString,_e=vt(_e=oe.getPrototypeOf)&&_e,we=pe.hasOwnProperty,je=fe.push,xe=pe.propertyIsEnumerable,Ce=e.setTimeout,ke=fe.splice,Ee=fe.unshift,Oe=function(){try{var n={},t=vt(t=oe.defineProperty)&&t,e=t(n,n,n)&&t
}catch(r){}return e}(),Se=vt(Se=oe.create)&&Se,Ae=vt(Ae=Zt.isArray)&&Ae,Ie=e.isFinite,De=e.isNaN,Ne=vt(Ne=oe.keys)&&Ne,Be=re.max,Pe=re.min,Re=e.parseInt,Fe=re.random,Te={};Te[$]=Zt,Te[L]=ne,Te[z]=te,Te[K]=ee,Te[G]=oe,Te[W]=ue,Te[J]=ae,Te[M]=ie;var $e={};$e[$]=$e[z]=$e[W]={constructor:true,toLocaleString:true,toString:true,valueOf:true},$e[L]=$e[M]={constructor:true,toString:true,valueOf:true},$e[q]=$e[K]=$e[J]={constructor:true,toString:true},$e[G]={constructor:true},function(){for(var n=F.length;n--;){var t,e=F[n];
for(t in $e)we.call($e,t)&&!we.call($e[t],e)&&($e[t][e]=false)}}(),y.prototype=v.prototype;var Le=v.support={};!function(){var n=function(){this.x=1},t={0:1,length:1},r=[];n.prototype={valueOf:1,y:1};for(var u in new n)r.push(u);for(u in arguments);Le.argsClass=he.call(arguments)==T,Le.argsObject=arguments.constructor==oe&&!(arguments instanceof Zt),Le.enumErrorProps=xe.call(ce,"message")||xe.call(ce,"name"),Le.enumPrototypes=xe.call(n,"prototype"),Le.funcDecomp=!vt(e.WinRTError)&&B.test(g),Le.funcNames=typeof ee.name=="string",Le.nonEnumArgs=0!=u,Le.nonEnumShadows=!/valueOf/.test(r),Le.ownLast="x"!=r[0],Le.spliceObjects=(fe.splice.call(t,0,1),!t[0]),Le.unindexedChars="xx"!="x"[0]+oe("x")[0];
try{Le.nodeClass=!(he.call(document)==G&&!({toString:0}+""))}catch(o){Le.nodeClass=true}}(1),v.templateSettings={escape:/<%-([\s\S]+?)%>/g,evaluate:/<%([\s\S]+?)%>/g,interpolate:I,variable:"",imports:{_:v}},Se||(nt=function(){function n(){}return function(t){if(xt(t)){n.prototype=t;var r=new n;n.prototype=null}return r||e.Object()}}());var ze=Oe?function(n,t){U.value=t,Oe(n,"__bindData__",U)}:Qt;Le.argsClass||(dt=function(n){return n&&typeof n=="object"&&typeof n.length=="number"&&we.call(n,"callee")&&!xe.call(n,"callee")||false
});var qe=Ae||function(n){return n&&typeof n=="object"&&typeof n.length=="number"&&he.call(n)==$||false},Ke=st({a:"z",e:"[]",i:"if(!(B[typeof z]))return E",g:"E.push(n)"}),We=Ne?function(n){return xt(n)?Le.enumPrototypes&&typeof n=="function"||Le.nonEnumArgs&&n.length&&dt(n)?Ke(n):Ne(n):[]}:Ke,Ge={a:"g,e,K",i:"e=e&&typeof K=='undefined'?e:d(e,K,3)",b:"typeof u=='number'",v:We,g:"if(e(t[n],n,g)===false)return E"},Je={a:"z,H,l",i:"var a=arguments,b=0,c=typeof l=='number'?2:a.length;while(++b<c){t=a[b];if(t&&B[typeof t]){",v:We,g:"if(typeof E[n]=='undefined')E[n]=t[n]",c:"}}"},Me={i:"if(!B[typeof t])return E;"+Ge.i,b:false},Ve={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},He=wt(Ve),Ue=ae("("+We(He).join("|")+")","g"),Qe=ae("["+We(Ve).join("")+"]","g"),Xe=st(Ge),Ye=st(Je,{i:Je.i.replace(";",";if(c>3&&typeof a[c-2]=='function'){var e=d(a[--c-1],a[c--],2)}else if(c>2&&typeof a[c-1]=='function'){e=a[--c]}"),g:"E[n]=e?e(E[n],t[n]):t[n]"}),Ze=st(Je),nr=st(Ge,Me,{j:false}),tr=st(Ge,Me);
jt(/x/)&&(jt=function(n){return typeof n=="function"&&he.call(n)==K});var er=_e?function(n){if(!n||he.call(n)!=G||!Le.argsClass&&dt(n))return false;var t=n.valueOf,e=vt(t)&&(e=_e(t))&&_e(e);return e?n==e||_e(n)==e:yt(n)}:yt,rr=ct(function(n,t,e){we.call(n,e)?n[e]++:n[e]=1}),ur=ct(function(n,t,e){(we.call(n,e)?n[e]:n[e]=[]).push(t)}),or=ct(function(n,t,e){n[e]=t}),ar=Bt,ir=vt(ir=te.now)&&ir||function(){return(new te).getTime()},lr=8==Re(j+"08")?Re:function(n,t){return Re(kt(n)?n.replace(D,""):n,t||0)};
return v.after=function(n,t){if(!jt(t))throw new le;return function(){return 1>--n?t.apply(this,arguments):void 0}},v.assign=Ye,v.at=function(n){var t=arguments,e=-1,r=ot(t,true,false,1),t=t[2]&&t[2][t[1]]===n?1:r.length,u=Zt(t);for(Le.unindexedChars&&kt(n)&&(n=n.split(""));++e<t;)u[e]=n[r[e]];return u},v.bind=Mt,v.bindAll=function(n){for(var t=1<arguments.length?ot(arguments,true,false,1):_t(n),e=-1,r=t.length;++e<r;){var u=t[e];n[u]=pt(n[u],1,null,null,n)}return n},v.bindKey=function(n,t){return 2<arguments.length?pt(t,19,s(arguments,2),null,n):pt(t,3,null,null,n)
},v.chain=function(n){return n=new y(n),n.__chain__=true,n},v.compact=function(n){for(var t=-1,e=n?n.length:0,r=[];++t<e;){var u=n[t];u&&r.push(u)}return r},v.compose=function(){for(var n=arguments,t=n.length;t--;)if(!jt(n[t]))throw new le;return function(){for(var t=arguments,e=n.length;e--;)t=[n[e].apply(this,t)];return t[0]}},v.constant=function(n){return function(){return n}},v.countBy=rr,v.create=function(n,t){var e=nt(n);return t?Ye(e,t):e},v.createCallback=function(n,t,e){var r=typeof n;if(null==n||"function"==r)return tt(n,t,e);
if("object"!=r)return Xt(n);var u=We(n),o=u[0],a=n[o];return 1!=u.length||a!==a||xt(a)?function(t){for(var e=u.length,r=false;e--&&(r=at(t[u[e]],n[u[e]],null,true)););return r}:function(n){return n=n[o],a===n&&(0!==a||1/a==1/n)}},v.curry=function(n,t){return t=typeof t=="number"?t:+t||n.length,pt(n,4,null,null,null,t)},v.debounce=Vt,v.defaults=Ze,v.defer=function(n){if(!jt(n))throw new le;var t=s(arguments,1);return Ce(function(){n.apply(h,t)},1)},v.delay=function(n,t){if(!jt(n))throw new le;var e=s(arguments,2);
return Ce(function(){n.apply(h,e)},t)},v.difference=function(n){return rt(n,ot(arguments,true,true,1))},v.filter=At,v.flatten=function(n,t,e,r){return typeof t!="boolean"&&null!=t&&(r=e,e=typeof t!="function"&&r&&r[t]===n?null:t,t=false),null!=e&&(n=Bt(n,e,r)),ot(n,t)},v.forEach=Dt,v.forEachRight=Nt,v.forIn=nr,v.forInRight=function(n,t,e){var r=[];nr(n,function(n,t){r.push(t,n)});var u=r.length;for(t=tt(t,e,3);u--&&false!==t(r[u--],r[u],n););return n},v.forOwn=tr,v.forOwnRight=bt,v.functions=_t,v.groupBy=ur,v.indexBy=or,v.initial=function(n,t,e){var r=0,u=n?n.length:0;
if(typeof t!="number"&&null!=t){var o=u;for(t=v.createCallback(t,e,3);o--&&t(n[o],o,n);)r++}else r=null==t||e?1:t||r;return s(n,0,Pe(Be(0,u-r),u))},v.intersection=function(){for(var e=[],r=-1,u=arguments.length,a=i(),l=ht(),f=l===n,s=i();++r<u;){var g=arguments[r];(qe(g)||dt(g))&&(e.push(g),a.push(f&&g.length>=_&&o(r?e[r]:s)))}var f=e[0],h=-1,v=f?f.length:0,y=[];n:for(;++h<v;){var m=a[0],g=f[h];if(0>(m?t(m,g):l(s,g))){for(r=u,(m||s).push(g);--r;)if(m=a[r],0>(m?t(m,g):l(e[r],g)))continue n;y.push(g)
}}for(;u--;)(m=a[u])&&p(m);return c(a),c(s),y},v.invert=wt,v.invoke=function(n,t){var e=s(arguments,2),r=-1,u=typeof t=="function",o=n?n.length:0,a=Zt(typeof o=="number"?o:0);return Dt(n,function(n){a[++r]=(u?t:n[t]).apply(n,e)}),a},v.keys=We,v.map=Bt,v.mapValues=function(n,t,e){var r={};return t=v.createCallback(t,e,3),tr(n,function(n,e,u){r[e]=t(n,e,u)}),r},v.max=Pt,v.memoize=function(n,t){if(!jt(n))throw new le;var e=function(){var r=e.cache,u=t?t.apply(this,arguments):b+arguments[0];return we.call(r,u)?r[u]:r[u]=n.apply(this,arguments)
};return e.cache={},e},v.merge=function(n){var t=arguments,e=2;if(!xt(n))return n;if("number"!=typeof t[2]&&(e=t.length),3<e&&"function"==typeof t[e-2])var r=tt(t[--e-1],t[e--],2);else 2<e&&"function"==typeof t[e-1]&&(r=t[--e]);for(var t=s(arguments,1,e),u=-1,o=i(),a=i();++u<e;)it(n,t[u],r,o,a);return c(o),c(a),n},v.min=function(n,t,e){var u=1/0,o=u;if(typeof t!="function"&&e&&e[t]===n&&(t=null),null==t&&qe(n)){e=-1;for(var a=n.length;++e<a;){var i=n[e];i<o&&(o=i)}}else t=null==t&&kt(n)?r:v.createCallback(t,e,3),Xe(n,function(n,e,r){e=t(n,e,r),e<u&&(u=e,o=n)
});return o},v.omit=function(n,t,e){var r={};if(typeof t!="function"){var u=[];nr(n,function(n,t){u.push(t)});for(var u=rt(u,ot(arguments,true,false,1)),o=-1,a=u.length;++o<a;){var i=u[o];r[i]=n[i]}}else t=v.createCallback(t,e,3),nr(n,function(n,e,u){t(n,e,u)||(r[e]=n)});return r},v.once=function(n){var t,e;if(!jt(n))throw new le;return function(){return t?e:(t=true,e=n.apply(this,arguments),n=null,e)}},v.pairs=function(n){for(var t=-1,e=We(n),r=e.length,u=Zt(r);++t<r;){var o=e[t];u[t]=[o,n[o]]}return u
},v.partial=function(n){return pt(n,16,s(arguments,1))},v.partialRight=function(n){return pt(n,32,null,s(arguments,1))},v.pick=function(n,t,e){var r={};if(typeof t!="function")for(var u=-1,o=ot(arguments,true,false,1),a=xt(n)?o.length:0;++u<a;){var i=o[u];i in n&&(r[i]=n[i])}else t=v.createCallback(t,e,3),nr(n,function(n,e,u){t(n,e,u)&&(r[e]=n)});return r},v.pluck=ar,v.property=Xt,v.pull=function(n){for(var t=arguments,e=0,r=t.length,u=n?n.length:0;++e<r;)for(var o=-1,a=t[e];++o<u;)n[o]===a&&(ke.call(n,o--,1),u--);
return n},v.range=function(n,t,e){n=+n||0,e=typeof e=="number"?e:+e||1,null==t&&(t=n,n=0);var r=-1;t=Be(0,ye((t-n)/(e||1)));for(var u=Zt(t);++r<t;)u[r]=n,n+=e;return u},v.reject=function(n,t,e){return t=v.createCallback(t,e,3),At(n,function(n,e,r){return!t(n,e,r)})},v.remove=function(n,t,e){var r=-1,u=n?n.length:0,o=[];for(t=v.createCallback(t,e,3);++r<u;)e=n[r],t(e,r,n)&&(o.push(e),ke.call(n,r--,1),u--);return o},v.rest=qt,v.shuffle=Tt,v.sortBy=function(n,t,e){var r=-1,o=qe(t),a=n?n.length:0,f=Zt(typeof a=="number"?a:0);
for(o||(t=v.createCallback(t,e,3)),Dt(n,function(n,e,u){var a=f[++r]=l();o?a.m=Bt(t,function(t){return n[t]}):(a.m=i())[0]=t(n,e,u),a.n=r,a.o=n}),a=f.length,f.sort(u);a--;)n=f[a],f[a]=n.o,o||c(n.m),p(n);return f},v.tap=function(n,t){return t(n),n},v.throttle=function(n,t,e){var r=true,u=true;if(!jt(n))throw new le;return false===e?r=false:xt(e)&&(r="leading"in e?e.leading:r,u="trailing"in e?e.trailing:u),H.leading=r,H.maxWait=t,H.trailing=u,Vt(n,t,H)},v.times=function(n,t,e){n=-1<(n=+n)?n:0;var r=-1,u=Zt(n);
for(t=tt(t,e,1);++r<n;)u[r]=t(r);return u},v.toArray=function(n){return n&&typeof n.length=="number"?Le.unindexedChars&&kt(n)?n.split(""):s(n):Et(n)},v.transform=function(n,t,e,r){var u=qe(n);if(null==e)if(u)e=[];else{var o=n&&n.constructor;e=nt(o&&o.prototype)}return t&&(t=v.createCallback(t,r,4),(u?Xe:tr)(n,function(n,r,u){return t(e,n,r,u)})),e},v.union=function(){return ft(ot(arguments,true,true))},v.uniq=Wt,v.values=Et,v.where=At,v.without=function(n){return rt(n,s(arguments,1))},v.wrap=function(n,t){return pt(t,16,[n])
},v.xor=function(){for(var n=-1,t=arguments.length;++n<t;){var e=arguments[n];if(qe(e)||dt(e))var r=r?ft(rt(r,e).concat(rt(e,r))):e}return r||[]},v.zip=Gt,v.zipObject=Jt,v.collect=Bt,v.drop=qt,v.each=Dt,v.eachRight=Nt,v.extend=Ye,v.methods=_t,v.object=Jt,v.select=At,v.tail=qt,v.unique=Wt,v.unzip=Gt,Ut(v),v.clone=function(n,t,e,r){return typeof t!="boolean"&&null!=t&&(r=e,e=t,t=false),Y(n,t,typeof e=="function"&&tt(e,r,1))},v.cloneDeep=function(n,t,e){return Y(n,true,typeof t=="function"&&tt(t,e,1))},v.contains=Ot,v.escape=function(n){return null==n?"":ie(n).replace(Qe,gt)
},v.every=St,v.find=It,v.findIndex=function(n,t,e){var r=-1,u=n?n.length:0;for(t=v.createCallback(t,e,3);++r<u;)if(t(n[r],r,n))return r;return-1},v.findKey=function(n,t,e){var r;return t=v.createCallback(t,e,3),tr(n,function(n,e,u){return t(n,e,u)?(r=e,false):void 0}),r},v.findLast=function(n,t,e){var r;return t=v.createCallback(t,e,3),Nt(n,function(n,e,u){return t(n,e,u)?(r=n,false):void 0}),r},v.findLastIndex=function(n,t,e){var r=n?n.length:0;for(t=v.createCallback(t,e,3);r--;)if(t(n[r],r,n))return r;
return-1},v.findLastKey=function(n,t,e){var r;return t=v.createCallback(t,e,3),bt(n,function(n,e,u){return t(n,e,u)?(r=e,false):void 0}),r},v.has=function(n,t){return n?we.call(n,t):false},v.identity=Ht,v.indexOf=zt,v.isArguments=dt,v.isArray=qe,v.isBoolean=function(n){return true===n||false===n||n&&typeof n=="object"&&he.call(n)==L||false},v.isDate=function(n){return n&&typeof n=="object"&&he.call(n)==z||false},v.isElement=function(n){return n&&1===n.nodeType||false},v.isEmpty=function(n){var t=true;if(!n)return t;var e=he.call(n),r=n.length;
return e==$||e==M||(Le.argsClass?e==T:dt(n))||e==G&&typeof r=="number"&&jt(n.splice)?!r:(tr(n,function(){return t=false}),t)},v.isEqual=function(n,t,e,r){return at(n,t,typeof e=="function"&&tt(e,r,2))},v.isFinite=function(n){return Ie(n)&&!De(parseFloat(n))},v.isFunction=jt,v.isNaN=function(n){return Ct(n)&&n!=+n},v.isNull=function(n){return null===n},v.isNumber=Ct,v.isObject=xt,v.isPlainObject=er,v.isRegExp=function(n){return n&&X[typeof n]&&he.call(n)==J||false},v.isString=kt,v.isUndefined=function(n){return typeof n=="undefined"
},v.lastIndexOf=function(n,t,e){var r=n?n.length:0;for(typeof e=="number"&&(r=(0>e?Be(0,r+e):Pe(e,r-1))+1);r--;)if(n[r]===t)return r;return-1},v.mixin=Ut,v.noConflict=function(){return e._=ge,this},v.noop=Qt,v.now=ir,v.parseInt=lr,v.random=function(n,t,e){var r=null==n,u=null==t;return null==e&&(typeof n=="boolean"&&u?(e=n,n=1):u||typeof t!="boolean"||(e=t,u=true)),r&&u&&(t=1),n=+n||0,u?(t=n,n=0):t=+t||0,e||n%1||t%1?(e=Fe(),Pe(n+e*(t-n+parseFloat("1e-"+((e+"").length-1))),t)):lt(n,t)},v.reduce=Rt,v.reduceRight=Ft,v.result=function(n,t){if(n){var e=n[t];
return jt(e)?n[t]():e}},v.runInContext=g,v.size=function(n){var t=n?n.length:0;return typeof t=="number"?t:We(n).length},v.some=$t,v.sortedIndex=Kt,v.template=function(n,t,e){var r=v.templateSettings;n=ie(n||""),e=Ze({},e,r);var u,o=Ze({},e.imports,r.imports),r=We(o),o=Et(o),i=0,l=e.interpolate||N,f="__p+='",l=ae((e.escape||N).source+"|"+l.source+"|"+(l===I?O:N).source+"|"+(e.evaluate||N).source+"|$","g");n.replace(l,function(t,e,r,o,l,c){return r||(r=o),f+=n.slice(i,c).replace(P,a),e&&(f+="'+__e("+e+")+'"),l&&(u=true,f+="';"+l+";\n__p+='"),r&&(f+="'+((__t=("+r+"))==null?'':__t)+'"),i=c+t.length,t
}),f+="';",l=e=e.variable,l||(e="obj",f="with("+e+"){"+f+"}"),f=(u?f.replace(x,""):f).replace(C,"$1").replace(E,"$1;"),f="function("+e+"){"+(l?"":e+"||("+e+"={});")+"var __t,__p='',__e=_.escape"+(u?",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}":";")+f+"return __p}";try{var c=ee(r,"return "+f).apply(h,o)}catch(p){throw p.source=f,p}return t?c(t):(c.source=f,c)},v.unescape=function(n){return null==n?"":ie(n).replace(Ue,mt)},v.uniqueId=function(n){var t=++m;return ie(null==n?"":n)+t
},v.all=St,v.any=$t,v.detect=It,v.findWhere=It,v.foldl=Rt,v.foldr=Ft,v.include=Ot,v.inject=Rt,Ut(function(){var n={};return tr(v,function(t,e){v.prototype[e]||(n[e]=t)}),n}(),false),v.first=Lt,v.last=function(n,t,e){var r=0,u=n?n.length:0;if(typeof t!="number"&&null!=t){var o=u;for(t=v.createCallback(t,e,3);o--&&t(n[o],o,n);)r++}else if(r=t,null==r||e)return n?n[u-1]:h;return s(n,Be(0,u-r))},v.sample=function(n,t,e){return n&&typeof n.length!="number"?n=Et(n):Le.unindexedChars&&kt(n)&&(n=n.split("")),null==t||e?n?n[lt(0,n.length-1)]:h:(n=Tt(n),n.length=Pe(Be(0,t),n.length),n)
},v.take=Lt,v.head=Lt,tr(v,function(n,t){var e="sample"!==t;v.prototype[t]||(v.prototype[t]=function(t,r){var u=this.__chain__,o=n(this.__wrapped__,t,r);return u||null!=t&&(!r||e&&typeof t=="function")?new y(o,u):o})}),v.VERSION="2.4.1",v.prototype.chain=function(){return this.__chain__=true,this},v.prototype.toString=function(){return ie(this.__wrapped__)},v.prototype.value=Yt,v.prototype.valueOf=Yt,Xe(["join","pop","shift"],function(n){var t=fe[n];v.prototype[n]=function(){var n=this.__chain__,e=t.apply(this.__wrapped__,arguments);
return n?new y(e,n):e}}),Xe(["push","reverse","sort","unshift"],function(n){var t=fe[n];v.prototype[n]=function(){return t.apply(this.__wrapped__,arguments),this}}),Xe(["concat","slice","splice"],function(n){var t=fe[n];v.prototype[n]=function(){return new y(t.apply(this.__wrapped__,arguments),this.__chain__)}}),Le.spliceObjects||Xe(["pop","shift","splice"],function(n){var t=fe[n],e="splice"==n;v.prototype[n]=function(){var n=this.__chain__,r=this.__wrapped__,u=t.apply(r,arguments);return 0===r.length&&delete r[0],n||e?new y(u,n):u
}}),v}var h,v=[],y=[],m=0,d={},b=+new Date+"",_=75,w=40,j=" \t\x0B\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000",x=/\b__p\+='';/g,C=/\b(__p\+=)''\+/g,E=/(__e\(.*?\)|\b__t\))\+'';/g,O=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,S=/\w*$/,A=/^\s*function[ \n\r\t]+\w/,I=/<%=([\s\S]+?)%>/g,D=RegExp("^["+j+"]*0+(?=.$)"),N=/($^)/,B=/\bthis\b/,P=/['\n\r\t\u2028\u2029\\]/g,R="Array Boolean Date Error Function Math Number Object RegExp String _ attachEvent clearTimeout isFinite isNaN parseInt setTimeout".split(" "),F="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),T="[object Arguments]",$="[object Array]",L="[object Boolean]",z="[object Date]",q="[object Error]",K="[object Function]",W="[object Number]",G="[object Object]",J="[object RegExp]",M="[object String]",V={};
V[K]=false,V[T]=V[$]=V[L]=V[z]=V[W]=V[G]=V[J]=V[M]=true;var H={leading:false,maxWait:0,trailing:false},U={configurable:false,enumerable:false,value:null,writable:false},Q={a:"",b:null,c:"",d:"",e:"",v:null,g:"",h:null,support:null,i:"",j:false},X={"boolean":false,"function":true,object:true,number:false,string:false,undefined:false},Y={"\\":"\\","'":"'","\n":"n","\r":"r","\t":"t","\u2028":"u2028","\u2029":"u2029"},Z=X[typeof window]&&window||this,nt=X[typeof exports]&&exports&&!exports.nodeType&&exports,tt=X[typeof module]&&module&&!module.nodeType&&module,et=tt&&tt.exports===nt&&nt,rt=X[typeof global]&&global;
!rt||rt.global!==rt&&rt.window!==rt||(Z=rt);var ut=g();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(Z._=ut, define(function(){return ut})):nt&&tt?et?(tt.exports=ut)._=ut:nt._=ut:Z._=ut}).call(this);
;
;
/*! moment.min.js */ 
;
;
(function(e){function O(e,t){return function(n){return j(e.call(this,n),t)}}function M(e){return function(t){return this.lang().ordinal(e.call(this,t))}}function _(){}function D(e){H(this,e)}function P(e){var t=this._data={},n=e.years||e.year||e.y||0,r=e.months||e.month||e.M||0,i=e.weeks||e.week||e.w||0,s=e.days||e.day||e.d||0,o=e.hours||e.hour||e.h||0,u=e.minutes||e.minute||e.m||0,a=e.seconds||e.second||e.s||0,f=e.milliseconds||e.millisecond||e.ms||0;this._milliseconds=f+a*1e3+u*6e4+o*36e5,this._days=s+i*7,this._months=r+n*12,t.milliseconds=f%1e3,a+=B(f/1e3),t.seconds=a%60,u+=B(a/60),t.minutes=u%60,o+=B(u/60),t.hours=o%24,s+=B(o/24),s+=i*7,t.days=s%30,r+=B(s/30),t.months=r%12,n+=B(r/12),t.years=n}function H(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}function B(e){return e<0?Math.ceil(e):Math.floor(e)}function j(e,t){var n=e+"";while(n.length<t)n="0"+n;return n}function F(e,t,n){var r=t._milliseconds,i=t._days,s=t._months,o;r&&e._d.setTime(+e+r*n),i&&e.date(e.date()+i*n),s&&(o=e.date(),e.date(1).month(e.month()+s*n).date(Math.min(o,e.daysInMonth())))}function I(e){return Object.prototype.toString.call(e)==="[object Array]"}function q(e,t){var n=Math.min(e.length,t.length),r=Math.abs(e.length-t.length),i=0,s;for(s=0;s<n;s++)~~e[s]!==~~t[s]&&i++;return i+r}function R(e,t){return t.abbr=e,s[e]||(s[e]=new _),s[e].set(t),s[e]}function U(e){return e?(!s[e]&&o&&require("./lang/"+e),s[e]):t.fn._lang}function z(e){return e.match(/\[.*\]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function W(e){var t=e.match(a),n,r;for(n=0,r=t.length;n<r;n++)A[t[n]]?t[n]=A[t[n]]:t[n]=z(t[n]);return function(i){var s="";for(n=0;n<r;n++)s+=typeof t[n].call=="function"?t[n].call(i,e):t[n];return s}}function X(e,t){function r(t){return e.lang().longDateFormat(t)||t}var n=5;while(n--&&f.test(t))t=t.replace(f,r);return C[t]||(C[t]=W(t)),C[t](e)}function V(e){switch(e){case"DDDD":return p;case"YYYY":return d;case"YYYYY":return v;case"S":case"SS":case"SSS":case"DDD":return h;case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":case"a":case"A":return m;case"X":return b;case"Z":case"ZZ":return g;case"T":return y;case"MM":case"DD":case"YY":case"HH":case"hh":case"mm":case"ss":case"M":case"D":case"d":case"H":case"h":case"m":case"s":return c;default:return new RegExp(e.replace("\\",""))}}function $(e,t,n){var r,i,s=n._a;switch(e){case"M":case"MM":s[1]=t==null?0:~~t-1;break;case"MMM":case"MMMM":r=U(n._l).monthsParse(t),r!=null?s[1]=r:n._isValid=!1;break;case"D":case"DD":case"DDD":case"DDDD":t!=null&&(s[2]=~~t);break;case"YY":s[0]=~~t+(~~t>68?1900:2e3);break;case"YYYY":case"YYYYY":s[0]=~~t;break;case"a":case"A":n._isPm=(t+"").toLowerCase()==="pm";break;case"H":case"HH":case"h":case"hh":s[3]=~~t;break;case"m":case"mm":s[4]=~~t;break;case"s":case"ss":s[5]=~~t;break;case"S":case"SS":case"SSS":s[6]=~~(("0."+t)*1e3);break;case"X":n._d=new Date(parseFloat(t)*1e3);break;case"Z":case"ZZ":n._useUTC=!0,r=(t+"").match(x),r&&r[1]&&(n._tzh=~~r[1]),r&&r[2]&&(n._tzm=~~r[2]),r&&r[0]==="+"&&(n._tzh=-n._tzh,n._tzm=-n._tzm)}t==null&&(n._isValid=!1)}function J(e){var t,n,r=[];if(e._d)return;for(t=0;t<7;t++)e._a[t]=r[t]=e._a[t]==null?t===2?1:0:e._a[t];r[3]+=e._tzh||0,r[4]+=e._tzm||0,n=new Date(0),e._useUTC?(n.setUTCFullYear(r[0],r[1],r[2]),n.setUTCHours(r[3],r[4],r[5],r[6])):(n.setFullYear(r[0],r[1],r[2]),n.setHours(r[3],r[4],r[5],r[6])),e._d=n}function K(e){var t=e._f.match(a),n=e._i,r,i;e._a=[];for(r=0;r<t.length;r++)i=(V(t[r]).exec(n)||[])[0],i&&(n=n.slice(n.indexOf(i)+i.length)),A[t[r]]&&$(t[r],i,e);e._isPm&&e._a[3]<12&&(e._a[3]+=12),e._isPm===!1&&e._a[3]===12&&(e._a[3]=0),J(e)}function Q(e){var t,n,r,i=99,s,o,u;while(e._f.length){t=H({},e),t._f=e._f.pop(),K(t),n=new D(t);if(n.isValid()){r=n;break}u=q(t._a,n.toArray()),u<i&&(i=u,r=n)}H(e,r)}function G(e){var t,n=e._i;if(w.exec(n)){e._f="YYYY-MM-DDT";for(t=0;t<4;t++)if(S[t][1].exec(n)){e._f+=S[t][0];break}g.exec(n)&&(e._f+=" Z"),K(e)}else e._d=new Date(n)}function Y(t){var n=t._i,r=u.exec(n);n===e?t._d=new Date:r?t._d=new Date(+r[1]):typeof n=="string"?G(t):I(n)?(t._a=n.slice(0),J(t)):t._d=n instanceof Date?new Date(+n):new Date(n)}function Z(e,t,n,r,i){return i.relativeTime(t||1,!!n,e,r)}function et(e,t,n){var i=r(Math.abs(e)/1e3),s=r(i/60),o=r(s/60),u=r(o/24),a=r(u/365),f=i<45&&["s",i]||s===1&&["m"]||s<45&&["mm",s]||o===1&&["h"]||o<22&&["hh",o]||u===1&&["d"]||u<=25&&["dd",u]||u<=45&&["M"]||u<345&&["MM",r(u/30)]||a===1&&["y"]||["yy",a];return f[2]=t,f[3]=e>0,f[4]=n,Z.apply({},f)}function tt(e,n,r){var i=r-n,s=r-e.day();return s>i&&(s-=7),s<i-7&&(s+=7),Math.ceil(t(e).add("d",s).dayOfYear()/7)}function nt(e){var n=e._i,r=e._f;return n===null||n===""?null:(typeof n=="string"&&(e._i=n=U().preparse(n)),t.isMoment(n)?(e=H({},n),e._d=new Date(+n._d)):r?I(r)?Q(e):K(e):Y(e),new D(e))}function rt(e,n){t.fn[e]=t.fn[e+"s"]=function(e){var t=this._isUTC?"UTC":"";return e!=null?(this._d["set"+t+n](e),this):this._d["get"+t+n]()}}function it(e){t.duration.fn[e]=function(){return this._data[e]}}function st(e,n){t.duration.fn["as"+e]=function(){return+this/n}}var t,n="2.0.0",r=Math.round,i,s={},o=typeof module!="undefined"&&module.exports,u=/^\/?Date\((\-?\d+)/i,a=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYY|YYYY|YY|a|A|hh?|HH?|mm?|ss?|SS?S?|X|zz?|ZZ?|.)/g,f=/(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,l=/([0-9a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)/gi,c=/\d\d?/,h=/\d{1,3}/,p=/\d{3}/,d=/\d{1,4}/,v=/[+\-]?\d{1,6}/,m=/[0-9]*[a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF]+\s*?[\u0600-\u06FF]+/i,g=/Z|[\+\-]\d\d:?\d\d/i,y=/T/i,b=/[\+\-]?\d+(\.\d{1,3})?/,w=/^\s*\d{4}-\d\d-\d\d((T| )(\d\d(:\d\d(:\d\d(\.\d\d?\d?)?)?)?)?([\+\-]\d\d:?\d\d)?)?/,E="YYYY-MM-DDTHH:mm:ssZ",S=[["HH:mm:ss.S",/(T| )\d\d:\d\d:\d\d\.\d{1,3}/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],x=/([\+\-]|\d\d)/gi,T="Month|Date|Hours|Minutes|Seconds|Milliseconds".split("|"),N={Milliseconds:1,Seconds:1e3,Minutes:6e4,Hours:36e5,Days:864e5,Months:2592e6,Years:31536e6},C={},k="DDD w W M D d".split(" "),L="M D H h m s w W".split(" "),A={M:function(){return this.month()+1},MMM:function(e){return this.lang().monthsShort(this,e)},MMMM:function(e){return this.lang().months(this,e)},D:function(){return this.date()},DDD:function(){return this.dayOfYear()},d:function(){return this.day()},dd:function(e){return this.lang().weekdaysMin(this,e)},ddd:function(e){return this.lang().weekdaysShort(this,e)},dddd:function(e){return this.lang().weekdays(this,e)},w:function(){return this.week()},W:function(){return this.isoWeek()},YY:function(){return j(this.year()%100,2)},YYYY:function(){return j(this.year(),4)},YYYYY:function(){return j(this.year(),5)},a:function(){return this.lang().meridiem(this.hours(),this.minutes(),!0)},A:function(){return this.lang().meridiem(this.hours(),this.minutes(),!1)},H:function(){return this.hours()},h:function(){return this.hours()%12||12},m:function(){return this.minutes()},s:function(){return this.seconds()},S:function(){return~~(this.milliseconds()/100)},SS:function(){return j(~~(this.milliseconds()/10),2)},SSS:function(){return j(this.milliseconds(),3)},Z:function(){var e=-this.zone(),t="+";return e<0&&(e=-e,t="-"),t+j(~~(e/60),2)+":"+j(~~e%60,2)},ZZ:function(){var e=-this.zone(),t="+";return e<0&&(e=-e,t="-"),t+j(~~(10*e/6),4)},X:function(){return this.unix()}};while(k.length)i=k.pop(),A[i+"o"]=M(A[i]);while(L.length)i=L.pop(),A[i+i]=O(A[i],2);A.DDDD=O(A.DDD,3),_.prototype={set:function(e){var t,n;for(n in e)t=e[n],typeof t=="function"?this[n]=t:this["_"+n]=t},_months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),months:function(e){return this._months[e.month()]},_monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),monthsShort:function(e){return this._monthsShort[e.month()]},monthsParse:function(e){var n,r,i,s;this._monthsParse||(this._monthsParse=[]);for(n=0;n<12;n++){this._monthsParse[n]||(r=t([2e3,n]),i="^"+this.months(r,"")+"|^"+this.monthsShort(r,""),this._monthsParse[n]=new RegExp(i.replace(".",""),"i"));if(this._monthsParse[n].test(e))return n}},_weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdays:function(e){return this._weekdays[e.day()]},_weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysShort:function(e){return this._weekdaysShort[e.day()]},_weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),weekdaysMin:function(e){return this._weekdaysMin[e.day()]},_longDateFormat:{LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D YYYY",LLL:"MMMM D YYYY LT",LLLL:"dddd, MMMM D YYYY LT"},longDateFormat:function(e){var t=this._longDateFormat[e];return!t&&this._longDateFormat[e.toUpperCase()]&&(t=this._longDateFormat[e.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(e){return e.slice(1)}),this._longDateFormat[e]=t),t},meridiem:function(e,t,n){return e>11?n?"pm":"PM":n?"am":"AM"},_calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[last] dddd [at] LT",sameElse:"L"},calendar:function(e,t){var n=this._calendar[e];return typeof n=="function"?n.apply(t):n},_relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},relativeTime:function(e,t,n,r){var i=this._relativeTime[n];return typeof i=="function"?i(e,t,n,r):i.replace(/%d/i,e)},pastFuture:function(e,t){var n=this._relativeTime[e>0?"future":"past"];return typeof n=="function"?n(t):n.replace(/%s/i,t)},ordinal:function(e){return this._ordinal.replace("%d",e)},_ordinal:"%d",preparse:function(e){return e},postformat:function(e){return e},week:function(e){return tt(e,this._week.dow,this._week.doy)},_week:{dow:0,doy:6}},t=function(e,t,n){return nt({_i:e,_f:t,_l:n,_isUTC:!1})},t.utc=function(e,t,n){return nt({_useUTC:!0,_isUTC:!0,_l:n,_i:e,_f:t})},t.unix=function(e){return t(e*1e3)},t.duration=function(e,n){var r=t.isDuration(e),i=typeof e=="number",s=r?e._data:i?{}:e,o;return i&&(n?s[n]=e:s.milliseconds=e),o=new P(s),r&&e.hasOwnProperty("_lang")&&(o._lang=e._lang),o},t.version=n,t.defaultFormat=E,t.lang=function(e,n){var r;if(!e)return t.fn._lang._abbr;n?R(e,n):s[e]||U(e),t.duration.fn._lang=t.fn._lang=U(e)},t.langData=function(e){return e&&e._lang&&e._lang._abbr&&(e=e._lang._abbr),U(e)},t.isMoment=function(e){return e instanceof D},t.isDuration=function(e){return e instanceof P},t.fn=D.prototype={clone:function(){return t(this)},valueOf:function(){return+this._d},unix:function(){return Math.floor(+this._d/1e3)},toString:function(){return this.format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},toDate:function(){return this._d},toJSON:function(){return t.utc(this).format("YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")},toArray:function(){var e=this;return[e.year(),e.month(),e.date(),e.hours(),e.minutes(),e.seconds(),e.milliseconds()]},isValid:function(){return this._isValid==null&&(this._a?this._isValid=!q(this._a,(this._isUTC?t.utc(this._a):t(this._a)).toArray()):this._isValid=!isNaN(this._d.getTime())),!!this._isValid},utc:function(){return this._isUTC=!0,this},local:function(){return this._isUTC=!1,this},format:function(e){var n=X(this,e||t.defaultFormat);return this.lang().postformat(n)},add:function(e,n){var r;return typeof e=="string"?r=t.duration(+n,e):r=t.duration(e,n),F(this,r,1),this},subtract:function(e,n){var r;return typeof e=="string"?r=t.duration(+n,e):r=t.duration(e,n),F(this,r,-1),this},diff:function(e,n,r){var i=this._isUTC?t(e).utc():t(e).local(),s=(this.zone()-i.zone())*6e4,o,u;return n&&(n=n.replace(/s$/,"")),n==="year"||n==="month"?(o=(this.daysInMonth()+i.daysInMonth())*432e5,u=(this.year()-i.year())*12+(this.month()-i.month()),u+=(this-t(this).startOf("month")-(i-t(i).startOf("month")))/o,n==="year"&&(u/=12)):(o=this-i-s,u=n==="second"?o/1e3:n==="minute"?o/6e4:n==="hour"?o/36e5:n==="day"?o/864e5:n==="week"?o/6048e5:o),r?u:B(u)},from:function(e,n){return t.duration(this.diff(e)).lang(this.lang()._abbr).humanize(!n)},fromNow:function(e){return this.from(t(),e)},calendar:function(){var e=this.diff(t().startOf("day"),"days",!0),n=e<-6?"sameElse":e<-1?"lastWeek":e<0?"lastDay":e<1?"sameDay":e<2?"nextDay":e<7?"nextWeek":"sameElse";return this.format(this.lang().calendar(n,this))},isLeapYear:function(){var e=this.year();return e%4===0&&e%100!==0||e%400===0},isDST:function(){return this.zone()<t([this.year()]).zone()||this.zone()<t([this.year(),5]).zone()},day:function(e){var t=this._isUTC?this._d.getUTCDay():this._d.getDay();return e==null?t:this.add({d:e-t})},startOf:function(e){e=e.replace(/s$/,"");switch(e){case"year":this.month(0);case"month":this.date(1);case"week":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return e==="week"&&this.day(0),this},endOf:function(e){return this.startOf(e).add(e.replace(/s?$/,"s"),1).subtract("ms",1)},isAfter:function(e,n){return n=typeof n!="undefined"?n:"millisecond",+this.clone().startOf(n)>+t(e).startOf(n)},isBefore:function(e,n){return n=typeof n!="undefined"?n:"millisecond",+this.clone().startOf(n)<+t(e).startOf(n)},isSame:function(e,n){return n=typeof n!="undefined"?n:"millisecond",+this.clone().startOf(n)===+t(e).startOf(n)},zone:function(){return this._isUTC?0:this._d.getTimezoneOffset()},daysInMonth:function(){return t.utc([this.year(),this.month()+1,0]).date()},dayOfYear:function(e){var n=r((t(this).startOf("day")-t(this).startOf("year"))/864e5)+1;return e==null?n:this.add("d",e-n)},isoWeek:function(e){var t=tt(this,1,4);return e==null?t:this.add("d",(e-t)*7)},week:function(e){var t=this.lang().week(this);return e==null?t:this.add("d",(e-t)*7)},lang:function(t){return t===e?this._lang:(this._lang=U(t),this)}};for(i=0;i<T.length;i++)rt(T[i].toLowerCase().replace(/s$/,""),T[i]);rt("year","FullYear"),t.fn.days=t.fn.day,t.fn.weeks=t.fn.week,t.fn.isoWeeks=t.fn.isoWeek,t.duration.fn=P.prototype={weeks:function(){return B(this.days()/7)},valueOf:function(){return this._milliseconds+this._days*864e5+this._months*2592e6},humanize:function(e){var t=+this,n=et(t,!e,this.lang());return e&&(n=this.lang().pastFuture(t,n)),this.lang().postformat(n)},lang:t.fn.lang};for(i in N)N.hasOwnProperty(i)&&(st(i,N[i]),it(i.toLowerCase()));st("Weeks",6048e5),t.lang("en",{ordinal:function(e){var t=e%10,n=~~(e%100/10)===1?"th":t===1?"st":t===2?"nd":t===3?"rd":"th";return e+n}}),o&&(module.exports=t),typeof ender=="undefined"&&(this.moment=t),typeof define=="function"&&define.amd&&define("moment",[],function(){return t})}).call(this);
;
;
/*! bootstrap.min.js */ 
;
;
/*!
* Bootstrap.js by @fat & @mdo
* Copyright 2012 Twitter, Inc.
* http://www.apache.org/licenses/LICENSE-2.0.txt
*/
!function(e){e(function(){"use strict";e.support.transition=function(){var e=function(){var e=document.createElement("bootstrap"),t={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},n;for(n in t){if(e.style[n]!==undefined){return t[n]}}}();return e&&{end:e}}()})}(window.jQuery);!function(e){"use strict";var t='[data-dismiss="alert"]',n=function(n){e(n).on("click",t,this.close)};n.prototype.close=function(t){function s(){i.trigger("closed").remove()}var n=e(this),r=n.attr("data-target"),i;if(!r){r=n.attr("href");r=r&&r.replace(/.*(?=#[^\s]*$)/,"")}i=e(r);t&&t.preventDefault();i.length||(i=n.hasClass("alert")?n:n.parent());i.trigger(t=e.Event("close"));if(t.isDefaultPrevented())return;i.removeClass("in");e.support.transition&&i.hasClass("fade")?i.on(e.support.transition.end,s):s()};e.fn.alert=function(t){return this.each(function(){var r=e(this),i=r.data("alert");if(!i)r.data("alert",i=new n(this));if(typeof t=="string")i[t].call(r)})};e.fn.alert.Constructor=n;e(function(){e("body").on("click.alert.data-api",t,n.prototype.close)})}(window.jQuery);!function(e){"use strict";var t=function(t,n){this.$element=e(t);this.options=e.extend({},e.fn.button.defaults,n)};t.prototype.setState=function(e){var t="disabled",n=this.$element,r=n.data(),i=n.is("input")?"val":"html";e=e+"Text";r.resetText||n.data("resetText",n[i]());n[i](r[e]||this.options[e]);setTimeout(function(){e=="loadingText"?n.addClass(t).attr(t,t):n.removeClass(t).removeAttr(t)},0)};t.prototype.toggle=function(){var e=this.$element.closest('[data-toggle="buttons-radio"]');e&&e.find(".active").removeClass("active");this.$element.toggleClass("active")};e.fn.button=function(n){return this.each(function(){var r=e(this),i=r.data("button"),s=typeof n=="object"&&n;if(!i)r.data("button",i=new t(this,s));if(n=="toggle")i.toggle();else if(n)i.setState(n)})};e.fn.button.defaults={loadingText:"loading..."};e.fn.button.Constructor=t;e(function(){e("body").on("click.button.data-api","[data-toggle^=button]",function(t){var n=e(t.target);if(!n.hasClass("btn"))n=n.closest(".btn");n.button("toggle")})})}(window.jQuery);!function(e){"use strict";var t=function(t,n){this.$element=e(t);this.options=n;this.options.slide&&this.slide(this.options.slide);this.options.pause=="hover"&&this.$element.on("mouseenter",e.proxy(this.pause,this)).on("mouseleave",e.proxy(this.cycle,this))};t.prototype={cycle:function(t){if(!t)this.paused=false;this.options.interval&&!this.paused&&(this.interval=setInterval(e.proxy(this.next,this),this.options.interval));return this},to:function(t){var n=this.$element.find(".item.active"),r=n.parent().children(),i=r.index(n),s=this;if(t>r.length-1||t<0)return;if(this.sliding){return this.$element.one("slid",function(){s.to(t)})}if(i==t){return this.pause().cycle()}return this.slide(t>i?"next":"prev",e(r[t]))},pause:function(t){if(!t)this.paused=true;if(this.$element.find(".next, .prev").length&&e.support.transition.end){this.$element.trigger(e.support.transition.end);this.cycle()}clearInterval(this.interval);this.interval=null;return this},next:function(){if(this.sliding)return;return this.slide("next")},prev:function(){if(this.sliding)return;return this.slide("prev")},slide:function(t,n){var r=this.$element.find(".item.active"),i=n||r[t](),s=this.interval,o=t=="next"?"left":"right",u=t=="next"?"first":"last",a=this,f=e.Event("slide",{relatedTarget:i[0]});this.sliding=true;s&&this.pause();i=i.length?i:this.$element.find(".item")[u]();if(i.hasClass("active"))return;if(e.support.transition&&this.$element.hasClass("slide")){this.$element.trigger(f);if(f.isDefaultPrevented())return;i.addClass(t);i[0].offsetWidth;r.addClass(o);i.addClass(o);this.$element.one(e.support.transition.end,function(){i.removeClass([t,o].join(" ")).addClass("active");r.removeClass(["active",o].join(" "));a.sliding=false;setTimeout(function(){a.$element.trigger("slid")},0)})}else{this.$element.trigger(f);if(f.isDefaultPrevented())return;r.removeClass("active");i.addClass("active");this.sliding=false;this.$element.trigger("slid")}s&&this.cycle();return this}};e.fn.carousel=function(n){return this.each(function(){var r=e(this),i=r.data("carousel"),s=e.extend({},e.fn.carousel.defaults,typeof n=="object"&&n),o=typeof n=="string"?n:s.slide;if(!i)r.data("carousel",i=new t(this,s));if(typeof n=="number")i.to(n);else if(o)i[o]();else if(s.interval)i.cycle()})};e.fn.carousel.defaults={interval:5e3,pause:"hover"};e.fn.carousel.Constructor=t;e(function(){e("body").on("click.carousel.data-api","[data-slide]",function(t){var n=e(this),r,i=e(n.attr("data-target")||(r=n.attr("href"))&&r.replace(/.*(?=#[^\s]+$)/,"")),s=!i.data("modal")&&e.extend({},i.data(),n.data());i.carousel(s);t.preventDefault()})})}(window.jQuery);!function(e){"use strict";var t=function(t,n){this.$element=e(t);this.options=e.extend({},e.fn.collapse.defaults,n);if(this.options.parent){this.$parent=e(this.options.parent)}this.options.toggle&&this.toggle()};t.prototype={constructor:t,dimension:function(){var e=this.$element.hasClass("width");return e?"width":"height"},show:function(){var t,n,r,i;if(this.transitioning)return;t=this.dimension();n=e.camelCase(["scroll",t].join("-"));r=this.$parent&&this.$parent.find("> .accordion-group > .in");if(r&&r.length){i=r.data("collapse");if(i&&i.transitioning)return;r.collapse("hide");i||r.data("collapse",null)}this.$element[t](0);this.transition("addClass",e.Event("show"),"shown");e.support.transition&&this.$element[t](this.$element[0][n])},hide:function(){var t;if(this.transitioning)return;t=this.dimension();this.reset(this.$element[t]());this.transition("removeClass",e.Event("hide"),"hidden");this.$element[t](0)},reset:function(e){var t=this.dimension();this.$element.removeClass("collapse")[t](e||"auto")[0].offsetWidth;this.$element[e!==null?"addClass":"removeClass"]("collapse");return this},transition:function(t,n,r){var i=this,s=function(){if(n.type=="show")i.reset();i.transitioning=0;i.$element.trigger(r)};this.$element.trigger(n);if(n.isDefaultPrevented())return;this.transitioning=1;this.$element[t]("in");e.support.transition&&this.$element.hasClass("collapse")?this.$element.one(e.support.transition.end,s):s()},toggle:function(){this[this.$element.hasClass("in")?"hide":"show"]()}};e.fn.collapse=function(n){return this.each(function(){var r=e(this),i=r.data("collapse"),s=typeof n=="object"&&n;if(!i)r.data("collapse",i=new t(this,s));if(typeof n=="string")i[n]()})};e.fn.collapse.defaults={toggle:true};e.fn.collapse.Constructor=t;e(function(){e("body").on("click.collapse.data-api","[data-toggle=collapse]",function(t){var n=e(this),r,i=n.attr("data-target")||t.preventDefault()||(r=n.attr("href"))&&r.replace(/.*(?=#[^\s]+$)/,""),s=e(i).data("collapse")?"toggle":n.data();n[e(i).hasClass("in")?"addClass":"removeClass"]("collapsed");e(i).collapse(s)})})}(window.jQuery);!function(e){"use strict";function r(){i(e(t)).removeClass("open")}function i(t){var n=t.attr("data-target"),r;if(!n){n=t.attr("href");n=n&&/#/.test(n)&&n.replace(/.*(?=#[^\s]*$)/,"")}r=e(n);r.length||(r=t.parent());return r}var t="[data-toggle=dropdown]",n=function(t){var n=e(t).on("click.dropdown.data-api",this.toggle);e("html").on("click.dropdown.data-api",function(){n.parent().removeClass("open")})};n.prototype={constructor:n,toggle:function(t){var n=e(this),s,o;if(n.is(".disabled, :disabled"))return;s=i(n);o=s.hasClass("open");r();if(!o){s.toggleClass("open");n.focus()}return false},keydown:function(t){var n,r,s,o,u,a;if(!/(38|40|27)/.test(t.keyCode))return;n=e(this);t.preventDefault();t.stopPropagation();if(n.is(".disabled, :disabled"))return;o=i(n);u=o.hasClass("open");if(!u||u&&t.keyCode==27)return n.click();r=e("[role=menu] li:not(.divider) a",o);if(!r.length)return;a=r.index(r.filter(":focus"));if(t.keyCode==38&&a>0)a--;if(t.keyCode==40&&a<r.length-1)a++;if(!~a)a=0;r.eq(a).focus()}};e.fn.dropdown=function(t){return this.each(function(){var r=e(this),i=r.data("dropdown");if(!i)r.data("dropdown",i=new n(this));if(typeof t=="string")i[t].call(r)})};e.fn.dropdown.Constructor=n;e(function(){e("html").on("click.dropdown.data-api touchstart.dropdown.data-api",r);e("body").on("click.dropdown touchstart.dropdown.data-api",".dropdown form",function(e){e.stopPropagation()}).on("click.dropdown.data-api touchstart.dropdown.data-api",t,n.prototype.toggle).on("keydown.dropdown.data-api touchstart.dropdown.data-api",t+", [role=menu]",n.prototype.keydown)})}(window.jQuery);!function(e){"use strict";var t=function(t,n){this.options=n;this.$element=e(t).delegate('[data-dismiss="modal"]',"click.dismiss.modal",e.proxy(this.hide,this));this.options.remote&&this.$element.find(".modal-body").load(this.options.remote)};t.prototype={constructor:t,toggle:function(){return this[!this.isShown?"show":"hide"]()},show:function(){var t=this,n=e.Event("show");this.$element.trigger(n);if(this.isShown||n.isDefaultPrevented())return;e("body").addClass("modal-open");this.isShown=true;this.escape();this.backdrop(function(){var n=e.support.transition&&t.$element.hasClass("fade");if(!t.$element.parent().length){t.$element.appendTo(document.body)}t.$element.show();if(n){t.$element[0].offsetWidth}t.$element.addClass("in").attr("aria-hidden",false);t.enforceFocus();n?t.$element.one(e.support.transition.end,function(){t.$element.focus().trigger("shown")}):t.$element.focus().trigger("shown")})},hide:function(t){t&&t.preventDefault();var n=this;t=e.Event("hide");this.$element.trigger(t);if(!this.isShown||t.isDefaultPrevented())return;this.isShown=false;e("body").removeClass("modal-open");this.escape();e(document).off("focusin.modal");this.$element.removeClass("in").attr("aria-hidden",true);e.support.transition&&this.$element.hasClass("fade")?this.hideWithTransition():this.hideModal()},enforceFocus:function(){},escape:function(){var e=this;if(this.isShown&&this.options.keyboard){this.$element.on("keyup.dismiss.modal",function(t){t.which==27&&e.hide()})}else if(!this.isShown){this.$element.off("keyup.dismiss.modal")}},hideWithTransition:function(){var t=this,n=setTimeout(function(){t.$element.off(e.support.transition.end);t.hideModal()},500);this.$element.one(e.support.transition.end,function(){clearTimeout(n);t.hideModal()})},hideModal:function(e){this.$element.hide().trigger("hidden");this.backdrop()},removeBackdrop:function(){this.$backdrop.remove();this.$backdrop=null},backdrop:function(t){var n=this,r=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var i=e.support.transition&&r;this.$backdrop=e('<div class="modal-backdrop '+r+'" />').appendTo(document.body);if(this.options.backdrop!="static"){this.$backdrop.click(e.proxy(this.hide,this))}if(i)this.$backdrop[0].offsetWidth;this.$backdrop.addClass("in");i?this.$backdrop.one(e.support.transition.end,t):t()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");e.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(e.support.transition.end,e.proxy(this.removeBackdrop,this)):this.removeBackdrop()}else if(t){t()}}};e.fn.modal=function(n){return this.each(function(){var r=e(this),i=r.data("modal"),s=e.extend({},e.fn.modal.defaults,r.data(),typeof n=="object"&&n);if(!i)r.data("modal",i=new t(this,s));if(typeof n=="string")i[n]();else if(s.show)i.show()})};e.fn.modal.defaults={backdrop:true,keyboard:true,show:true};e.fn.modal.Constructor=t;e(function(){e("body").on("click.modal.data-api",'[data-toggle="modal"]',function(t){var n=e(this),r=n.attr("href"),i=e(n.attr("data-target")||r&&r.replace(/.*(?=#[^\s]+$)/,"")),s=i.data("modal")?"toggle":e.extend({remote:!/#/.test(r)&&r},i.data(),n.data());t.preventDefault();i.modal(s).one("hide",function(){n.focus()})})})}(window.jQuery);!function(e){"use strict";var t=function(e,t){this.init("tooltip",e,t)};t.prototype={constructor:t,init:function(t,n,r){var i,s;this.type=t;this.$element=e(n);this.options=this.getOptions(r);this.enabled=true;if(this.options.trigger=="click"){this.$element.on("click."+this.type,this.options.selector,e.proxy(this.toggle,this))}else if(this.options.trigger!="manual"){i=this.options.trigger=="hover"?"mouseenter":"focus";s=this.options.trigger=="hover"?"mouseleave":"blur";this.$element.on(i+"."+this.type,this.options.selector,e.proxy(this.enter,this));this.$element.on(s+"."+this.type,this.options.selector,e.proxy(this.leave,this))}this.options.selector?this._options=e.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},getOptions:function(t){t=e.extend({},e.fn[this.type].defaults,t,this.$element.data());if(t.delay&&typeof t.delay=="number"){t.delay={show:t.delay,hide:t.delay}}return t},enter:function(t){var n=e(t.currentTarget)[this.type](this._options).data(this.type);if(!n.options.delay||!n.options.delay.show)return n.show();clearTimeout(this.timeout);n.hoverState="in";this.timeout=setTimeout(function(){if(n.hoverState=="in")n.show()},n.options.delay.show)},leave:function(t){var n=e(t.currentTarget)[this.type](this._options).data(this.type);if(this.timeout)clearTimeout(this.timeout);if(!n.options.delay||!n.options.delay.hide)return n.hide();n.hoverState="out";this.timeout=setTimeout(function(){if(n.hoverState=="out")n.hide()},n.options.delay.hide)},show:function(){var e,t,n,r,i,s,o;if(this.hasContent()&&this.enabled){e=this.tip();this.setContent();if(this.options.animation){e.addClass("fade")}s=typeof this.options.placement=="function"?this.options.placement.call(this,e[0],this.$element[0]):this.options.placement;t=/in/.test(s);e.remove().css({top:0,left:0,display:"block"}).appendTo(t?this.$element:document.body);n=this.getPosition(t);r=e[0].offsetWidth;i=e[0].offsetHeight;switch(t?s.split(" ")[1]:s){case"bottom":o={top:n.top+n.height,left:n.left+n.width/2-r/2};break;case"top":o={top:n.top-i,left:n.left+n.width/2-r/2};break;case"left":o={top:n.top+n.height/2-i/2,left:n.left-r};break;case"right":o={top:n.top+n.height/2-i/2,left:n.left+n.width};break}e.css(o).addClass(s).addClass("in")}},setContent:function(){var e=this.tip(),t=this.getTitle();e.find(".tooltip-inner")[this.options.html?"html":"text"](t);e.removeClass("fade in top bottom left right")},hide:function(){function r(){var t=setTimeout(function(){n.off(e.support.transition.end).remove()},500);n.one(e.support.transition.end,function(){clearTimeout(t);n.remove()})}var t=this,n=this.tip();n.removeClass("in");e.support.transition&&this.$tip.hasClass("fade")?r():n.remove();return this},fixTitle:function(){var e=this.$element;if(e.attr("title")||typeof e.attr("data-original-title")!="string"){e.attr("data-original-title",e.attr("title")||"").removeAttr("title")}},hasContent:function(){return this.getTitle()},getPosition:function(t){return e.extend({},t?{top:0,left:0}:this.$element.offset(),{width:this.$element[0].offsetWidth,height:this.$element[0].offsetHeight})},getTitle:function(){var e,t=this.$element,n=this.options;e=t.attr("data-original-title")||(typeof n.title=="function"?n.title.call(t[0]):n.title);return e},tip:function(){return this.$tip=this.$tip||e(this.options.template)},validate:function(){if(!this.$element[0].parentNode){this.hide();this.$element=null;this.options=null}},enable:function(){this.enabled=true},disable:function(){this.enabled=false},toggleEnabled:function(){this.enabled=!this.enabled},toggle:function(){this[this.tip().hasClass("in")?"hide":"show"]()},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}};e.fn.tooltip=function(n){return this.each(function(){var r=e(this),i=r.data("tooltip"),s=typeof n=="object"&&n;if(!i)r.data("tooltip",i=new t(this,s));if(typeof n=="string")i[n]()})};e.fn.tooltip.Constructor=t;e.fn.tooltip.defaults={animation:true,placement:"top",selector:false,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover",title:"",delay:0,html:true}}(window.jQuery);!function(e){"use strict";var t=function(e,t){this.init("popover",e,t)};t.prototype=e.extend({},e.fn.tooltip.Constructor.prototype,{constructor:t,setContent:function(){var e=this.tip(),t=this.getTitle(),n=this.getContent();e.find(".popover-title")[this.options.html?"html":"text"](t);e.find(".popover-content > *")[this.options.html?"html":"text"](n);e.removeClass("fade top bottom left right in")},hasContent:function(){return this.getTitle()||this.getContent()},getContent:function(){var e,t=this.$element,n=this.options;e=t.attr("data-content")||(typeof n.content=="function"?n.content.call(t[0]):n.content);return e},tip:function(){if(!this.$tip){this.$tip=e(this.options.template)}return this.$tip},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}});e.fn.popover=function(n){return this.each(function(){var r=e(this),i=r.data("popover"),s=typeof n=="object"&&n;if(!i)r.data("popover",i=new t(this,s));if(typeof n=="string")i[n]()})};e.fn.popover.Constructor=t;e.fn.popover.defaults=e.extend({},e.fn.tooltip.defaults,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title"></h3><div class="popover-content"><p></p></div></div></div>'})}(window.jQuery);!function(e){"use strict";function t(t,n){var r=e.proxy(this.process,this),i=e(t).is("body")?e(window):e(t),s;this.options=e.extend({},e.fn.scrollspy.defaults,n);this.$scrollElement=i.on("scroll.scroll-spy.data-api",r);this.selector=(this.options.target||(s=e(t).attr("href"))&&s.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a";this.$body=e("body");this.refresh();this.process()}t.prototype={constructor:t,refresh:function(){var t=this,n;this.offsets=e([]);this.targets=e([]);n=this.$body.find(this.selector).map(function(){var t=e(this),n=t.data("target")||t.attr("href"),r=/^#\w/.test(n)&&e(n);return r&&r.length&&[[r.position().top,n]]||null}).sort(function(e,t){return e[0]-t[0]}).each(function(){t.offsets.push(this[0]);t.targets.push(this[1])})},process:function(){var e=this.$scrollElement.scrollTop()+this.options.offset,t=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,n=t-this.$scrollElement.height(),r=this.offsets,i=this.targets,s=this.activeTarget,o;if(e>=n){return s!=(o=i.last()[0])&&this.activate(o)}for(o=r.length;o--;){s!=i[o]&&e>=r[o]&&(!r[o+1]||e<=r[o+1])&&this.activate(i[o])}},activate:function(t){var n,r;this.activeTarget=t;e(this.selector).parent(".active").removeClass("active");r=this.selector+'[data-target="'+t+'"],'+this.selector+'[href="'+t+'"]';n=e(r).parent("li").addClass("active");if(n.parent(".dropdown-menu").length){n=n.closest("li.dropdown").addClass("active")}n.trigger("activate")}};e.fn.scrollspy=function(n){return this.each(function(){var r=e(this),i=r.data("scrollspy"),s=typeof n=="object"&&n;if(!i)r.data("scrollspy",i=new t(this,s));if(typeof n=="string")i[n]()})};e.fn.scrollspy.Constructor=t;e.fn.scrollspy.defaults={offset:10};e(window).on("load",function(){e('[data-spy="scroll"]').each(function(){var t=e(this);t.scrollspy(t.data())})})}(window.jQuery);!function(e){"use strict";var t=function(t){this.element=e(t)};t.prototype={constructor:t,show:function(){var t=this.element,n=t.closest("ul:not(.dropdown-menu)"),r=t.attr("data-target"),i,s,o;if(!r){r=t.attr("href");r=r&&r.replace(/.*(?=#[^\s]*$)/,"")}if(t.parent("li").hasClass("active"))return;i=n.find(".active a").last()[0];o=e.Event("show",{relatedTarget:i});t.trigger(o);if(o.isDefaultPrevented())return;s=e(r);this.activate(t.parent("li"),n);this.activate(s,s.parent(),function(){t.trigger({type:"shown",relatedTarget:i})})},activate:function(t,n,r){function o(){i.removeClass("active").find("> .dropdown-menu > .active").removeClass("active");t.addClass("active");if(s){t[0].offsetWidth;t.addClass("in")}else{t.removeClass("fade")}if(t.parent(".dropdown-menu")){t.closest("li.dropdown").addClass("active")}r&&r()}var i=n.find("> .active"),s=r&&e.support.transition&&i.hasClass("fade");s?i.one(e.support.transition.end,o):o();i.removeClass("in")}};e.fn.tab=function(n){return this.each(function(){var r=e(this),i=r.data("tab");if(!i)r.data("tab",i=new t(this));if(typeof n=="string")i[n]()})};e.fn.tab.Constructor=t;e(function(){e("body").on("click.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(t){t.preventDefault();e(this).tab("show")})})}(window.jQuery);!function(e){"use strict";var t=function(t,n){this.$element=e(t);this.options=e.extend({},e.fn.typeahead.defaults,n);this.matcher=this.options.matcher||this.matcher;this.sorter=this.options.sorter||this.sorter;this.highlighter=this.options.highlighter||this.highlighter;this.updater=this.options.updater||this.updater;this.$menu=e(this.options.menu).appendTo("body");this.source=this.options.source;this.shown=false;this.listen()};t.prototype={constructor:t,select:function(){var e=this.$menu.find(".active").attr("data-value");this.$element.val(this.updater(e)).change();return this.hide()},updater:function(e){return e},show:function(){var t=e.extend({},this.$element.offset(),{height:this.$element[0].offsetHeight});this.$menu.css({top:t.top+t.height,left:t.left});this.$menu.show();this.shown=true;return this},hide:function(){this.$menu.hide();this.shown=false;return this},lookup:function(t){var n;this.query=this.$element.val();if(!this.query||this.query.length<this.options.minLength){return this.shown?this.hide():this}n=e.isFunction(this.source)?this.source(this.query,e.proxy(this.process,this)):this.source;return n?this.process(n):this},process:function(t){var n=this;t=e.grep(t,function(e){return n.matcher(e)});t=this.sorter(t);if(!t.length){return this.shown?this.hide():this}return this.render(t.slice(0,this.options.items)).show()},matcher:function(e){return~e.toLowerCase().indexOf(this.query.toLowerCase())},sorter:function(e){var t=[],n=[],r=[],i;while(i=e.shift()){if(!i.toLowerCase().indexOf(this.query.toLowerCase()))t.push(i);else if(~i.indexOf(this.query))n.push(i);else r.push(i)}return t.concat(n,r)},highlighter:function(e){var t=this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&");return e.replace(new RegExp("("+t+")","ig"),function(e,t){return"<strong>"+t+"</strong>"})},render:function(t){var n=this;t=e(t).map(function(t,r){t=e(n.options.item).attr("data-value",r);t.find("a").html(n.highlighter(r));return t[0]});t.first().addClass("active");this.$menu.html(t);return this},next:function(t){var n=this.$menu.find(".active").removeClass("active"),r=n.next();if(!r.length){r=e(this.$menu.find("li")[0])}r.addClass("active")},prev:function(e){var t=this.$menu.find(".active").removeClass("active"),n=t.prev();if(!n.length){n=this.$menu.find("li").last()}n.addClass("active")},listen:function(){this.$element.on("blur",e.proxy(this.blur,this)).on("keypress",e.proxy(this.keypress,this)).on("keyup",e.proxy(this.keyup,this));if(e.browser.chrome||e.browser.webkit||e.browser.msie){this.$element.on("keydown",e.proxy(this.keydown,this))}this.$menu.on("click",e.proxy(this.click,this)).on("mouseenter","li",e.proxy(this.mouseenter,this))},move:function(e){if(!this.shown)return;switch(e.keyCode){case 9:case 13:case 27:e.preventDefault();break;case 38:e.preventDefault();this.prev();break;case 40:e.preventDefault();this.next();break}e.stopPropagation()},keydown:function(t){this.suppressKeyPressRepeat=!~e.inArray(t.keyCode,[40,38,9,13,27]);this.move(t)},keypress:function(e){if(this.suppressKeyPressRepeat)return;this.move(e)},keyup:function(e){switch(e.keyCode){case 40:case 38:break;case 9:case 13:if(!this.shown)return;this.select();break;case 27:if(!this.shown)return;this.hide();break;default:this.lookup()}e.stopPropagation();e.preventDefault()},blur:function(e){var t=this;setTimeout(function(){t.hide()},150)},click:function(e){e.stopPropagation();e.preventDefault();this.select()},mouseenter:function(t){this.$menu.find(".active").removeClass("active");e(t.currentTarget).addClass("active")}};e.fn.typeahead=function(n){return this.each(function(){var r=e(this),i=r.data("typeahead"),s=typeof n=="object"&&n;if(!i)r.data("typeahead",i=new t(this,s));if(typeof n=="string")i[n]()})};e.fn.typeahead.defaults={source:[],items:8,menu:'<ul class="typeahead dropdown-menu"></ul>',item:'<li><a href="#"></a></li>',minLength:1};e.fn.typeahead.Constructor=t;e(function(){e("body").on("focus.typeahead.data-api",'[data-provide="typeahead"]',function(t){var n=e(this);if(n.data("typeahead"))return;t.preventDefault();n.typeahead(n.data())})})}(window.jQuery);!function(e){"use strict";var t=function(t,n){this.options=e.extend({},e.fn.affix.defaults,n);this.$window=e(window).on("scroll.affix.data-api",e.proxy(this.checkPosition,this));this.$element=e(t);this.checkPosition()};t.prototype.checkPosition=function(){if(!this.$element.is(":visible"))return;var t=e(document).height(),n=this.$window.scrollTop(),r=this.$element.offset(),i=this.options.offset,s=i.bottom,o=i.top,u="affix affix-top affix-bottom",a;if(typeof i!="object")s=o=i;if(typeof o=="function")o=i.top();if(typeof s=="function")s=i.bottom();a=this.unpin!=null&&n+this.unpin<=r.top?false:s!=null&&r.top+this.$element.height()>=t-s?"bottom":o!=null&&n<=o?"top":false;if(this.affixed===a)return;this.affixed=a;this.unpin=a=="bottom"?r.top-n:null;this.$element.removeClass(u).addClass("affix"+(a?"-"+a:""))};e.fn.affix=function(n){return this.each(function(){var r=e(this),i=r.data("affix"),s=typeof n=="object"&&n;if(!i)r.data("affix",i=new t(this,s));if(typeof n=="string")i[n]()})};e.fn.affix.Constructor=t;e.fn.affix.defaults={offset:0};e(window).on("load",function(){e('[data-spy="affix"]').each(function(){var t=e(this),n=t.data();n.offset=n.offset||{};n.offsetBottom&&(n.offset.bottom=n.offsetBottom);n.offsetTop&&(n.offset.top=n.offsetTop);t.affix(n)})})}(window.jQuery);
;
;
/*! bootstrap-select-1.6.3.js */ 
;
;
(function ($) {
'use strict';
$.expr[':'].icontains = function (obj, index, meta) {
return icontains($(obj).text(), meta[3]);
};
$.expr[':'].aicontains = function (obj, index, meta) {
return icontains($(obj).data('normalizedText') || $(obj).text(), meta[3]);
};
/**
* Actual implementation of the case insensitive search.
* @access private
* @param {String} haystack
* @param {String} needle
* @returns {boolean}
*/
function icontains(haystack, needle) {
return haystack.toUpperCase().indexOf(needle.toUpperCase()) > -1;
}
/**
* Remove all diatrics from the given text.
* @access private
* @param {String} text
* @returns {String}
*/
function normalizeToBase(text) {
var rExps = [
{re: /[\xC0-\xC6]/g, ch: "A"},
{re: /[\xE0-\xE6]/g, ch: "a"},
{re: /[\xC8-\xCB]/g, ch: "E"},
{re: /[\xE8-\xEB]/g, ch: "e"},
{re: /[\xCC-\xCF]/g, ch: "I"},
{re: /[\xEC-\xEF]/g, ch: "i"},
{re: /[\xD2-\xD6]/g, ch: "O"},
{re: /[\xF2-\xF6]/g, ch: "o"},
{re: /[\xD9-\xDC]/g, ch: "U"},
{re: /[\xF9-\xFC]/g, ch: "u"},
{re: /[\xC7-\xE7]/g, ch: "c"},
{re: /[\xD1]/g, ch: "N"},
{re: /[\xF1]/g, ch: "n"}
];
$.each(rExps, function () {
text = text.replace(this.re, this.ch);
});
return text;
}
function htmlEscape(html) {
var escapeMap = {
'&': '&amp;',
'<': '&lt;',
'>': '&gt;',
'"': '&quot;',
"'": '&#x27;',
'`': '&#x60;'
};
var source = '(?:' + Object.keys(escapeMap).join('|') + ')',
testRegexp = new RegExp(source),
replaceRegexp = new RegExp(source, 'g'),
string = html == null ? '' : '' + html;
return testRegexp.test(string) ? string.replace(replaceRegexp, function (match) {
return escapeMap[match];
}) : string;
}
var Selectpicker = function (element, options, e) {
if (e) {
e.stopPropagation();
e.preventDefault();
}
this.$element = $(element);
this.$newElement = null;
this.$button = null;
this.$menu = null;
this.$lis = null;
this.options = options;
if (this.options.title === null) {
this.options.title = this.$element.attr('title');
}
this.val = Selectpicker.prototype.val;
this.render = Selectpicker.prototype.render;
this.refresh = Selectpicker.prototype.refresh;
this.setStyle = Selectpicker.prototype.setStyle;
this.selectAll = Selectpicker.prototype.selectAll;
this.deselectAll = Selectpicker.prototype.deselectAll;
this.destroy = Selectpicker.prototype.remove;
this.remove = Selectpicker.prototype.remove;
this.show = Selectpicker.prototype.show;
this.hide = Selectpicker.prototype.hide;
this.init();
};
Selectpicker.VERSION = '1.6.3';
Selectpicker.DEFAULTS = {
noneSelectedText: 'Nothing selected',
noneResultsText: 'No results match',
countSelectedText: function (numSelected, numTotal) {
return (numSelected == 1) ? "{0} item selected" : "{0} items selected";
},
maxOptionsText: function (numAll, numGroup) {
var arr = [];
arr[0] = (numAll == 1) ? 'Limit reached ({n} item max)' : 'Limit reached ({n} items max)';
arr[1] = (numGroup == 1) ? 'Group limit reached ({n} item max)' : 'Group limit reached ({n} items max)';
return arr;
},
selectAllText: 'Select All',
deselectAllText: 'Deselect All',
multipleSeparator: ', ',
style: 'btn-default',
size: 'auto',
title: null,
selectedTextFormat: 'values',
width: false,
container: false,
hideDisabled: false,
showSubtext: false,
showIcon: true,
showContent: true,
dropupAuto: true,
header: false,
liveSearch: false,
actionsBox: false,
iconBase: 'glyphicon',
tickIcon: 'glyphicon-ok',
maxOptions: false,
mobile: false,
selectOnTab: false,
dropdownAlignRight: false,
searchAccentInsensitive: false
};
Selectpicker.prototype = {
constructor: Selectpicker,
init: function () {
var that = this,
id = this.$element.attr('id');
this.$element.hide();
this.multiple = this.$element.prop('multiple');
this.autofocus = this.$element.prop('autofocus');
this.$newElement = this.createView();
this.$element.after(this.$newElement);
this.$menu = this.$newElement.find('> .dropdown-menu');
this.$button = this.$newElement.find('> button');
this.$searchbox = this.$newElement.find('input');
if (this.options.dropdownAlignRight)
this.$menu.addClass('dropdown-menu-right');
if (typeof id !== 'undefined') {
this.$button.attr('data-id', id);
$('label[for="' + id + '"]').click(function (e) {
e.preventDefault();
that.$button.focus();
});
}
this.checkDisabled();
this.clickListener();
if (this.options.liveSearch) this.liveSearchListener();
this.render();
this.liHeight();
this.setStyle();
this.setWidth();
if (this.options.container) this.selectPosition();
this.$menu.data('this', this);
this.$newElement.data('this', this);
if (this.options.mobile) this.mobile();
},
createDropdown: function () {
var multiple = this.multiple ? ' show-tick' : '',
inputGroup = this.$element.parent().hasClass('input-group') ? ' input-group-btn' : '',
autofocus = this.autofocus ? ' autofocus' : '',
btnSize = this.$element.parents().hasClass('form-group-lg') ? ' btn-lg' : (this.$element.parents().hasClass('form-group-sm') ? ' btn-sm' : '');
var header = this.options.header ? '<div class="popover-title"><button type="button" class="close" aria-hidden="true">&times;</button>' + this.options.header + '</div>' : '';
var searchbox = this.options.liveSearch ? '<div class="bs-searchbox"><input type="text" class="input-block-level form-control" autocomplete="off" /></div>' : '';
var actionsbox = this.options.actionsBox ? '<div class="bs-actionsbox">' +
'<div class="btn-group btn-block">' +
'<button class="actions-btn bs-select-all btn btn-sm btn-default">' +
this.options.selectAllText +
'</button>' +
'<button class="actions-btn bs-deselect-all btn btn-sm btn-default">' +
this.options.deselectAllText +
'</button>' +
'</div>' +
'</div>' : '';
var drop =
'<div class="btn-group bootstrap-select' + multiple + inputGroup + '">' +
'<button type="button" class="btn dropdown-toggle selectpicker' + btnSize + '" data-toggle="dropdown"' + autofocus + '>' +
'<span class="filter-option pull-left"></span>&nbsp;' +
'<span class="caret"></span>' +
'</button>' +
'<div class="dropdown-menu open">' +
header +
searchbox +
actionsbox +
'<ul class="dropdown-menu inner selectpicker" role="menu">' +
'</ul>' +
'</div>' +
'</div>';
return $(drop);
},
createView: function () {
var $drop = this.createDropdown();
var $li = this.createLi();
$drop.find('ul').append($li);
return $drop;
},
reloadLi: function () {
this.destroyLi();
var $li = this.createLi();
this.$menu.find('ul').append($li);
},
destroyLi: function () {
this.$menu.find('li').remove();
},
createLi: function () {
var that = this,
_li = [],
optID = 0;
/**
* @param content
* @param [index]
* @param [classes]
* @returns {string}
*/
var generateLI = function (content, index, classes) {
return '<li' +
(typeof classes !== 'undefined' ? ' class="' + classes + '"' : '') +
(typeof index !== 'undefined' | null === index ? ' data-original-index="' + index + '"' : '') +
'>' + content + '</li>';
};
/**
* @param text
* @param [classes]
* @param [inline]
* @param [optgroup]
* @returns {string}
*/
var generateA = function (text, classes, inline, optgroup) {
var normText = normalizeToBase(htmlEscape(text));
return '<a tabindex="0"' +
(typeof classes !== 'undefined' ? ' class="' + classes + '"' : '') +
(typeof inline !== 'undefined' ? ' style="' + inline + '"' : '') +
(typeof optgroup !== 'undefined' ? 'data-optgroup="' + optgroup + '"' : '') +
' data-normalized-text="' + normText + '"' +
'>' + text +
'<span class="' + that.options.iconBase + ' ' + that.options.tickIcon + ' check-mark"></span>' +
'</a>';
};
this.$element.find('option').each(function () {
var $this = $(this);
var optionClass = $this.attr('class') || '',
inline = $this.attr('style'),
text = $this.data('content') ? $this.data('content') : $this.html(),
subtext = typeof $this.data('subtext') !== 'undefined' ? '<small class="muted text-muted">' + $this.data('subtext') + '</small>' : '',
icon = typeof $this.data('icon') !== 'undefined' ? '<span class="' + that.options.iconBase + ' ' + $this.data('icon') + '"></span> ' : '',
isDisabled = $this.is(':disabled') || $this.parent().is(':disabled'),
index = $this[0].index;
if (icon !== '' && isDisabled) {
icon = '<span>' + icon + '</span>';
}
if (!$this.data('content')) {
text = icon + '<span class="text">' + text + subtext + '</span>';
}
if (that.options.hideDisabled && isDisabled) {
return;
}
if ($this.parent().is('optgroup') && $this.data('divider') !== true) {
if ($this.index() === 0) { // Is it the first option of the optgroup?
optID += 1;
var label = $this.parent().attr('label');
var labelSubtext = typeof $this.parent().data('subtext') !== 'undefined' ? '<small class="muted text-muted">' + $this.parent().data('subtext') + '</small>' : '';
var labelIcon = $this.parent().data('icon') ? '<span class="' + that.options.iconBase + ' ' + $this.parent().data('icon') + '"></span> ' : '';
label = labelIcon + '<span class="text">' + label + labelSubtext + '</span>';
if (index !== 0 && _li.length > 0) { // Is it NOT the first option of the select && are there elements in the dropdown?
_li.push(generateLI('', null, 'divider'));
}
_li.push(generateLI(label, null, 'dropdown-header'));
}
_li.push(generateLI(generateA(text, 'opt ' + optionClass, inline, optID), index));
} else if ($this.data('divider') === true) {
_li.push(generateLI('', index, 'divider'));
} else if ($this.data('hidden') === true) {
_li.push(generateLI(generateA(text, optionClass, inline), index, 'hide is-hidden'));
} else {
_li.push(generateLI(generateA(text, optionClass, inline), index));
}
});
if (!this.multiple && this.$element.find('option:selected').length === 0 && !this.options.title) {
this.$element.find('option').eq(0).prop('selected', true).attr('selected', 'selected');
}
return $(_li.join(''));
},
findLis: function () {
if (this.$lis == null) this.$lis = this.$menu.find('li');
return this.$lis;
},
/**
* @param [updateLi] defaults to true
*/
render: function (updateLi) {
var that = this;
if (updateLi !== false) {
this.$element.find('option').each(function (index) {
that.setDisabled(index, $(this).is(':disabled') || $(this).parent().is(':disabled'));
that.setSelected(index, $(this).is(':selected'));
});
}
this.tabIndex();
var notDisabled = this.options.hideDisabled ? ':not([disabled])' : '';
var selectedItems = this.$element.find('option:selected' + notDisabled).map(function () {
var $this = $(this);
var icon = $this.data('icon') && that.options.showIcon ? '<i class="' + that.options.iconBase + ' ' + $this.data('icon') + '"></i> ' : '';
var subtext;
if (that.options.showSubtext && $this.attr('data-subtext') && !that.multiple) {
subtext = ' <small class="muted text-muted">' + $this.data('subtext') + '</small>';
} else {
subtext = '';
}
if ($this.data('content') && that.options.showContent) {
return $this.data('content');
} else if (typeof $this.attr('title') !== 'undefined') {
return $this.attr('title');
} else {
return icon + $this.html() + subtext;
}
}).toArray();
var title = !this.multiple ? selectedItems[0] : selectedItems.join(this.options.multipleSeparator);
if (this.multiple && this.options.selectedTextFormat.indexOf('count') > -1) {
var max = this.options.selectedTextFormat.split('>');
if ((max.length > 1 && selectedItems.length > max[1]) || (max.length == 1 && selectedItems.length >= 2)) {
notDisabled = this.options.hideDisabled ? ', [disabled]' : '';
var totalCount = this.$element.find('option').not('[data-divider="true"], [data-hidden="true"]' + notDisabled).length,
tr8nText = (typeof this.options.countSelectedText === 'function') ? this.options.countSelectedText(selectedItems.length, totalCount) : this.options.countSelectedText;
title = tr8nText.replace('{0}', selectedItems.length.toString()).replace('{1}', totalCount.toString());
}
}
this.options.title = this.$element.attr('title');
if (this.options.selectedTextFormat == 'static') {
title = this.options.title;
}
if (!title) {
title = typeof this.options.title !== 'undefined' ? this.options.title : this.options.noneSelectedText;
}
this.$button.attr('title', htmlEscape(title));
this.$newElement.find('.filter-option').html(title);
},
/**
* @param [style]
* @param [status]
*/
setStyle: function (style, status) {
if (this.$element.attr('class')) {
this.$newElement.addClass(this.$element.attr('class').replace(/selectpicker|mobile-device|validate\[.*\]/gi, ''));
}
var buttonClass = style ? style : this.options.style;
if (status == 'add') {
this.$button.addClass(buttonClass);
} else if (status == 'remove') {
this.$button.removeClass(buttonClass);
} else {
this.$button.removeClass(this.options.style);
this.$button.addClass(buttonClass);
}
},
liHeight: function () {
if (this.options.size === false) return;
var $selectClone = this.$menu.parent().clone().find('> .dropdown-toggle').prop('autofocus', false).end().appendTo('body'),
$menuClone = $selectClone.addClass('open').find('> .dropdown-menu'),
liHeight = $menuClone.find('li').not('.divider').not('.dropdown-header').filter(':visible').children('a').outerHeight(),
headerHeight = this.options.header ? $menuClone.find('.popover-title').outerHeight() : 0,
searchHeight = this.options.liveSearch ? $menuClone.find('.bs-searchbox').outerHeight() : 0,
actionsHeight = this.options.actionsBox ? $menuClone.find('.bs-actionsbox').outerHeight() : 0;
$selectClone.remove();
this.$newElement
.data('liHeight', liHeight)
.data('headerHeight', headerHeight)
.data('searchHeight', searchHeight)
.data('actionsHeight', actionsHeight);
},
setSize: function () {
this.findLis();
var that = this,
menu = this.$menu,
menuInner = menu.find('.inner'),
selectHeight = this.$newElement.outerHeight(),
liHeight = this.$newElement.data('liHeight'),
headerHeight = this.$newElement.data('headerHeight'),
searchHeight = this.$newElement.data('searchHeight'),
actionsHeight = this.$newElement.data('actionsHeight'),
divHeight = this.$lis.filter('.divider').outerHeight(true),
menuPadding = parseInt(menu.css('padding-top')) +
parseInt(menu.css('padding-bottom')) +
parseInt(menu.css('border-top-width')) +
parseInt(menu.css('border-bottom-width')),
notDisabled = this.options.hideDisabled ? ', .disabled' : '',
$window = $(window),
menuExtras = menuPadding + parseInt(menu.css('margin-top')) + parseInt(menu.css('margin-bottom')) + 2,
menuHeight,
selectOffsetTop,
selectOffsetBot,
posVert = function () {
selectOffsetTop = that.$newElement.offset().top - $window.scrollTop();
selectOffsetBot = $window.height() - selectOffsetTop - selectHeight;
};
posVert();
if (this.options.header) menu.css('padding-top', 0);
if (this.options.size == 'auto') {
var getSize = function () {
var minHeight,
lisVis = that.$lis.not('.hide');
posVert();
menuHeight = selectOffsetBot - menuExtras;
if (that.options.dropupAuto) {
that.$newElement.toggleClass('dropup', (selectOffsetTop > selectOffsetBot) && ((menuHeight - menuExtras) < menu.height()));
}
if (that.$newElement.hasClass('dropup')) {
menuHeight = selectOffsetTop - menuExtras;
}
if ((lisVis.length + lisVis.filter('.dropdown-header').length) > 3) {
minHeight = liHeight * 3 + menuExtras - 2;
} else {
minHeight = 0;
}
menu.css({
'max-height': menuHeight + 'px',
'overflow': 'hidden',
'min-height': minHeight + headerHeight + searchHeight + actionsHeight + 'px'
});
menuInner.css({
'max-height': menuHeight - headerHeight - searchHeight - actionsHeight - menuPadding + 'px',
'overflow-y': 'auto',
'min-height': Math.max(minHeight - menuPadding, 0) + 'px'
});
};
getSize();
this.$searchbox.off('input.getSize propertychange.getSize').on('input.getSize propertychange.getSize', getSize);
$(window).off('resize.getSize').on('resize.getSize', getSize);
$(window).off('scroll.getSize').on('scroll.getSize', getSize);
} else if (this.options.size && this.options.size != 'auto' && menu.find('li' + notDisabled).length > this.options.size) {
var optIndex = this.$lis.not('.divider' + notDisabled).find(' > *').slice(0, this.options.size).last().parent().index();
var divLength = this.$lis.slice(0, optIndex + 1).filter('.divider').length;
menuHeight = liHeight * this.options.size + divLength * divHeight + menuPadding;
if (that.options.dropupAuto) {
this.$newElement.toggleClass('dropup', (selectOffsetTop > selectOffsetBot) && (menuHeight < menu.height()));
}
menu.css({'max-height': menuHeight + headerHeight + searchHeight + actionsHeight + 'px', 'overflow': 'hidden'});
menuInner.css({'max-height': menuHeight - menuPadding + 'px', 'overflow-y': 'auto'});
}
},
setWidth: function () {
if (this.options.width == 'auto') {
this.$menu.css('min-width', '0');
var selectClone = this.$newElement.clone().appendTo('body');
var ulWidth = selectClone.find('> .dropdown-menu').css('width');
var btnWidth = selectClone.css('width', 'auto').find('> button').css('width');
selectClone.remove();
this.$newElement.css('width', Math.max(parseInt(ulWidth), parseInt(btnWidth)) + 'px');
} else if (this.options.width == 'fit') {
this.$menu.css('min-width', '');
this.$newElement.css('width', '').addClass('fit-width');
} else if (this.options.width) {
this.$menu.css('min-width', '');
this.$newElement.css('width', this.options.width);
} else {
this.$menu.css('min-width', '');
this.$newElement.css('width', '');
}
if (this.$newElement.hasClass('fit-width') && this.options.width !== 'fit') {
this.$newElement.removeClass('fit-width');
}
},
selectPosition: function () {
var that = this,
drop = '<div />',
$drop = $(drop),
pos,
actualHeight,
getPlacement = function ($element) {
$drop.addClass($element.attr('class').replace(/form-control/gi, '')).toggleClass('dropup', $element.hasClass('dropup'));
pos = $element.offset();
actualHeight = $element.hasClass('dropup') ? 0 : $element[0].offsetHeight;
$drop.css({
'top': pos.top + actualHeight,
'left': pos.left,
'width': $element[0].offsetWidth,
'position': 'absolute'
});
};
this.$newElement.on('click', function () {
if (that.isDisabled()) {
return;
}
getPlacement($(this));
$drop.appendTo(that.options.container);
$drop.toggleClass('open', !$(this).hasClass('open'));
$drop.append(that.$menu);
});
$(window).resize(function () {
getPlacement(that.$newElement);
});
$(window).on('scroll', function () {
getPlacement(that.$newElement);
});
$('html').on('click', function (e) {
if ($(e.target).closest(that.$newElement).length < 1) {
$drop.removeClass('open');
}
});
},
setSelected: function (index, selected) {
this.findLis();
this.$lis.filter('[data-original-index="' + index + '"]').toggleClass('selected', selected);
},
setDisabled: function (index, disabled) {
this.findLis();
if (disabled) {
this.$lis.filter('[data-original-index="' + index + '"]').addClass('disabled').find('a').attr('href', '#').attr('tabindex', -1);
} else {
this.$lis.filter('[data-original-index="' + index + '"]').removeClass('disabled').find('a').removeAttr('href').attr('tabindex', 0);
}
},
isDisabled: function () {
return this.$element.is(':disabled');
},
checkDisabled: function () {
var that = this;
if (this.isDisabled()) {
this.$button.addClass('disabled').attr('tabindex', -1);
} else {
if (this.$button.hasClass('disabled')) {
this.$button.removeClass('disabled');
}
if (this.$button.attr('tabindex') == -1) {
if (!this.$element.data('tabindex')) this.$button.removeAttr('tabindex');
}
}
this.$button.click(function () {
return !that.isDisabled();
});
},
tabIndex: function () {
if (this.$element.is('[tabindex]')) {
this.$element.data('tabindex', this.$element.attr('tabindex'));
this.$button.attr('tabindex', this.$element.data('tabindex'));
}
},
clickListener: function () {
var that = this;
this.$newElement.on('touchstart.dropdown', '.dropdown-menu', function (e) {
e.stopPropagation();
});
this.$newElement.on('click', function () {
that.setSize();
if (!that.options.liveSearch && !that.multiple) {
setTimeout(function () {
that.$menu.find('.selected a').focus();
}, 10);
}
});
this.$menu.on('click', 'li a', function (e) {
var $this = $(this),
clickedIndex = $this.parent().data('originalIndex'),
prevValue = that.$element.val(),
prevIndex = that.$element.prop('selectedIndex');
if (that.multiple) {
e.stopPropagation();
}
e.preventDefault();
if (!that.isDisabled() && !$this.parent().hasClass('disabled')) {
var $options = that.$element.find('option'),
$option = $options.eq(clickedIndex),
state = $option.prop('selected'),
$optgroup = $option.parent('optgroup'),
maxOptions = that.options.maxOptions,
maxOptionsGrp = $optgroup.data('maxOptions') || false;
if (!that.multiple) { // Deselect all others if not multi select box
$options.prop('selected', false);
$option.prop('selected', true);
that.$menu.find('.selected').removeClass('selected');
that.setSelected(clickedIndex, true);
} else { // Toggle the one we have chosen if we are multi select.
$option.prop('selected', !state);
that.setSelected(clickedIndex, !state);
$this.blur();
if ((maxOptions !== false) || (maxOptionsGrp !== false)) {
var maxReached = maxOptions < $options.filter(':selected').length,
maxReachedGrp = maxOptionsGrp < $optgroup.find('option:selected').length;
if ((maxOptions && maxReached) || (maxOptionsGrp && maxReachedGrp)) {
if (maxOptions && maxOptions == 1) {
$options.prop('selected', false);
$option.prop('selected', true);
that.$menu.find('.selected').removeClass('selected');
that.setSelected(clickedIndex, true);
} else if (maxOptionsGrp && maxOptionsGrp == 1) {
$optgroup.find('option:selected').prop('selected', false);
$option.prop('selected', true);
var optgroupID = $this.data('optgroup');
that.$menu.find('.selected').has('a[data-optgroup="' + optgroupID + '"]').removeClass('selected');
that.setSelected(clickedIndex, true);
} else {
var maxOptionsArr = (typeof that.options.maxOptionsText === 'function') ?
that.options.maxOptionsText(maxOptions, maxOptionsGrp) : that.options.maxOptionsText,
maxTxt = maxOptionsArr[0].replace('{n}', maxOptions),
maxTxtGrp = maxOptionsArr[1].replace('{n}', maxOptionsGrp),
$notify = $('<div class="notify"></div>');
/** @deprecated */
if (maxOptionsArr[2]) {
maxTxt = maxTxt.replace('{var}', maxOptionsArr[2][maxOptions > 1 ? 0 : 1]);
maxTxtGrp = maxTxtGrp.replace('{var}', maxOptionsArr[2][maxOptionsGrp > 1 ? 0 : 1]);
}
$option.prop('selected', false);
that.$menu.append($notify);
if (maxOptions && maxReached) {
$notify.append($('<div>' + maxTxt + '</div>'));
that.$element.trigger('maxReached.bs.select');
}
if (maxOptionsGrp && maxReachedGrp) {
$notify.append($('<div>' + maxTxtGrp + '</div>'));
that.$element.trigger('maxReachedGrp.bs.select');
}
setTimeout(function () {
that.setSelected(clickedIndex, false);
}, 10);
$notify.delay(750).fadeOut(300, function () {
$(this).remove();
});
}
}
}
}
if (!that.multiple) {
that.$button.focus();
} else if (that.options.liveSearch) {
that.$searchbox.focus();
}
if ((prevValue != that.$element.val() && that.multiple) || (prevIndex != that.$element.prop('selectedIndex') && !that.multiple)) {
that.$element.change();
}
}
});
this.$menu.on('click', 'li.disabled a, .popover-title, .popover-title :not(.close)', function (e) {
if (e.target == this) {
e.preventDefault();
e.stopPropagation();
if (!that.options.liveSearch) {
that.$button.focus();
} else {
that.$searchbox.focus();
}
}
});
this.$menu.on('click', 'li.divider, li.dropdown-header', function (e) {
e.preventDefault();
e.stopPropagation();
if (!that.options.liveSearch) {
that.$button.focus();
} else {
that.$searchbox.focus();
}
});
this.$menu.on('click', '.popover-title .close', function () {
that.$button.focus();
});
this.$searchbox.on('click', function (e) {
e.stopPropagation();
});
this.$menu.on('click', '.actions-btn', function (e) {
if (that.options.liveSearch) {
that.$searchbox.focus();
} else {
that.$button.focus();
}
e.preventDefault();
e.stopPropagation();
if ($(this).is('.bs-select-all')) {
that.selectAll();
} else {
that.deselectAll();
}
that.$element.change();
});
this.$element.change(function () {
that.render(false);
});
},
liveSearchListener: function () {
var that = this,
no_results = $('<li class="no-results"></li>');
this.$newElement.on('click.dropdown.data-api touchstart.dropdown.data-api', function () {
that.$menu.find('.active').removeClass('active');
if (!!that.$searchbox.val()) {
that.$searchbox.val('');
that.$lis.not('.is-hidden').removeClass('hide');
if (!!no_results.parent().length) no_results.remove();
}
if (!that.multiple) that.$menu.find('.selected').addClass('active');
setTimeout(function () {
that.$searchbox.focus();
}, 10);
});
this.$searchbox.on('click.dropdown.data-api focus.dropdown.data-api touchend.dropdown.data-api', function (e) {
e.stopPropagation();
});
this.$searchbox.on('input propertychange', function () {
if (that.$searchbox.val()) {
if (that.options.searchAccentInsensitive) {
that.$lis.not('.is-hidden').removeClass('hide').find('a').not(':aicontains(' + normalizeToBase(that.$searchbox.val()) + ')').parent().addClass('hide');
} else {
that.$lis.not('.is-hidden').removeClass('hide').find('a').not(':icontains(' + that.$searchbox.val() + ')').parent().addClass('hide');
}
if (!that.$menu.find('li').filter(':visible:not(.no-results)').length) {
if (!!no_results.parent().length) no_results.remove();
no_results.html(that.options.noneResultsText + ' "' + htmlEscape(that.$searchbox.val()) + '"').show();
that.$menu.find('li').last().after(no_results);
} else if (!!no_results.parent().length) {
no_results.remove();
}
} else {
that.$lis.not('.is-hidden').removeClass('hide');
if (!!no_results.parent().length) no_results.remove();
}
that.$menu.find('li.active').removeClass('active');
that.$menu.find('li').filter(':visible:not(.divider)').eq(0).addClass('active').find('a').focus();
$(this).focus();
});
},
val: function (value) {
if (typeof value !== 'undefined') {
this.$element.val(value);
this.render();
return this.$element;
} else {
return this.$element.val();
}
},
selectAll: function () {
this.findLis();
this.$lis.not('.divider').not('.disabled').not('.selected').filter(':visible').find('a').click();
},
deselectAll: function () {
this.findLis();
this.$lis.not('.divider').not('.disabled').filter('.selected').filter(':visible').find('a').click();
},
keydown: function (e) {
var $this = $(this),
$parent = ($this.is('input')) ? $this.parent().parent() : $this.parent(),
$items,
that = $parent.data('this'),
index,
next,
first,
last,
prev,
nextPrev,
prevIndex,
isActive,
keyCodeMap = {
32: ' ',
48: '0',
49: '1',
50: '2',
51: '3',
52: '4',
53: '5',
54: '6',
55: '7',
56: '8',
57: '9',
59: ';',
65: 'a',
66: 'b',
67: 'c',
68: 'd',
69: 'e',
70: 'f',
71: 'g',
72: 'h',
73: 'i',
74: 'j',
75: 'k',
76: 'l',
77: 'm',
78: 'n',
79: 'o',
80: 'p',
81: 'q',
82: 'r',
83: 's',
84: 't',
85: 'u',
86: 'v',
87: 'w',
88: 'x',
89: 'y',
90: 'z',
96: '0',
97: '1',
98: '2',
99: '3',
100: '4',
101: '5',
102: '6',
103: '7',
104: '8',
105: '9'
};
if (that.options.liveSearch) $parent = $this.parent().parent();
if (that.options.container) $parent = that.$menu;
$items = $('[role=menu] li a', $parent);
isActive = that.$menu.parent().hasClass('open');
if (!isActive && /([0-9]|[A-z])/.test(String.fromCharCode(e.keyCode))) {
if (!that.options.container) {
that.setSize();
that.$menu.parent().addClass('open');
isActive = true;
} else {
that.$newElement.trigger('click');
}
that.$searchbox.focus();
}
if (that.options.liveSearch) {
if (/(^9$|27)/.test(e.keyCode.toString(10)) && isActive && that.$menu.find('.active').length === 0) {
e.preventDefault();
that.$menu.parent().removeClass('open');
that.$button.focus();
}
$items = $('[role=menu] li:not(.divider):not(.dropdown-header):visible', $parent);
if (!$this.val() && !/(38|40)/.test(e.keyCode.toString(10))) {
if ($items.filter('.active').length === 0) {
if (that.options.searchAccentInsensitive) {
$items = that.$newElement.find('li').filter(':aicontains(' + normalizeToBase(keyCodeMap[e.keyCode]) + ')');
} else {
$items = that.$newElement.find('li').filter(':icontains(' + keyCodeMap[e.keyCode] + ')');
}
}
}
}
if (!$items.length) return;
if (/(38|40)/.test(e.keyCode.toString(10))) {
index = $items.index($items.filter(':focus'));
first = $items.parent(':not(.disabled):visible').first().index();
last = $items.parent(':not(.disabled):visible').last().index();
next = $items.eq(index).parent().nextAll(':not(.disabled):visible').eq(0).index();
prev = $items.eq(index).parent().prevAll(':not(.disabled):visible').eq(0).index();
nextPrev = $items.eq(next).parent().prevAll(':not(.disabled):visible').eq(0).index();
if (that.options.liveSearch) {
$items.each(function (i) {
if ($(this).is(':not(.disabled)')) {
$(this).data('index', i);
}
});
index = $items.index($items.filter('.active'));
first = $items.filter(':not(.disabled):visible').first().data('index');
last = $items.filter(':not(.disabled):visible').last().data('index');
next = $items.eq(index).nextAll(':not(.disabled):visible').eq(0).data('index');
prev = $items.eq(index).prevAll(':not(.disabled):visible').eq(0).data('index');
nextPrev = $items.eq(next).prevAll(':not(.disabled):visible').eq(0).data('index');
}
prevIndex = $this.data('prevIndex');
if (e.keyCode == 38) {
if (that.options.liveSearch) index -= 1;
if (index != nextPrev && index > prev) index = prev;
if (index < first) index = first;
if (index == prevIndex) index = last;
}
if (e.keyCode == 40) {
if (that.options.liveSearch) index += 1;
if (index == -1) index = 0;
if (index != nextPrev && index < next) index = next;
if (index > last) index = last;
if (index == prevIndex) index = first;
}
$this.data('prevIndex', index);
if (!that.options.liveSearch) {
$items.eq(index).focus();
} else {
e.preventDefault();
if (!$this.is('.dropdown-toggle')) {
$items.removeClass('active');
$items.eq(index).addClass('active').find('a').focus();
$this.focus();
}
}
} else if (!$this.is('input')) {
var keyIndex = [],
count,
prevKey;
$items.each(function () {
if ($(this).parent().is(':not(.disabled)')) {
if ($.trim($(this).text().toLowerCase()).substring(0, 1) == keyCodeMap[e.keyCode]) {
keyIndex.push($(this).parent().index());
}
}
});
count = $(document).data('keycount');
count++;
$(document).data('keycount', count);
prevKey = $.trim($(':focus').text().toLowerCase()).substring(0, 1);
if (prevKey != keyCodeMap[e.keyCode]) {
count = 1;
$(document).data('keycount', count);
} else if (count >= keyIndex.length) {
$(document).data('keycount', 0);
if (count > keyIndex.length) count = 1;
}
$items.eq(keyIndex[count - 1]).focus();
}
if ((/(13|32)/.test(e.keyCode.toString(10)) || (/(^9$)/.test(e.keyCode.toString(10)) && that.options.selectOnTab)) && isActive) {
if (!/(32)/.test(e.keyCode.toString(10))) e.preventDefault();
if (!that.options.liveSearch) {
$(':focus').click();
} else if (!/(32)/.test(e.keyCode.toString(10))) {
that.$menu.find('.active a').click();
$this.focus();
}
$(document).data('keycount', 0);
}
if ((/(^9$|27)/.test(e.keyCode.toString(10)) && isActive && (that.multiple || that.options.liveSearch)) || (/(27)/.test(e.keyCode.toString(10)) && !isActive)) {
that.$menu.parent().removeClass('open');
that.$button.focus();
}
},
mobile: function () {
this.$element.addClass('mobile-device').appendTo(this.$newElement);
if (this.options.container) this.$menu.hide();
},
refresh: function () {
this.$lis = null;
this.reloadLi();
this.render();
this.setWidth();
this.setStyle();
this.checkDisabled();
this.liHeight();
},
update: function () {
this.reloadLi();
this.setWidth();
this.setStyle();
this.checkDisabled();
this.liHeight();
},
hide: function () {
this.$newElement.hide();
},
show: function () {
this.$newElement.show();
},
remove: function () {
this.$newElement.remove();
this.$element.remove();
}
};
function Plugin(option, event) {
var args = arguments;
var _option = option,
option = args[0],
event = args[1];
[].shift.apply(args);
if (typeof option == 'undefined') {
option = _option;
}
var value;
var chain = this.each(function () {
var $this = $(this);
if ($this.is('select')) {
var data = $this.data('selectpicker'),
options = typeof option == 'object' && option;
if (!data) {
var config = $.extend({}, Selectpicker.DEFAULTS, $.fn.selectpicker.defaults || {}, $this.data(), options);
$this.data('selectpicker', (data = new Selectpicker(this, config, event)));
} else if (options) {
for (var i in options) {
if (options.hasOwnProperty(i)) {
data.options[i] = options[i];
}
}
}
if (typeof option == 'string') {
if (data[option] instanceof Function) {
value = data[option].apply(data, args);
} else {
value = data.options[option];
}
}
}
});
if (typeof value !== 'undefined') {
return value;
} else {
return chain;
}
}
var old = $.fn.selectpicker;
$.fn.selectpicker = Plugin;
$.fn.selectpicker.Constructor = Selectpicker;
$.fn.selectpicker.noConflict = function () {
$.fn.selectpicker = old;
return this;
};
$(document)
.data('keycount', 0)
.on('keydown', '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role=menu], .bs-searchbox input', Selectpicker.prototype.keydown)
.on('focusin.modal', '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role=menu], .bs-searchbox input', function (e) {
e.stopPropagation();
});
$(window).on('load.bs.select.data-api', function () {
$('.selectpicker').each(function () {
var $selectpicker = $(this);
Plugin.call($selectpicker, $selectpicker.data());
})
});
})(jQuery);
;
;
/*! angular.min.js */ 
;
;
/*
AngularJS v1.2.22
(c) 2010-2014 Google, Inc. http://angularjs.org
License: MIT
*/
(function(P,X,s){'use strict';function w(b){return function(){var a=arguments[0],c,a="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.2.22/"+(b?b+"/":"")+a;for(c=1;c<arguments.length;c++)a=a+(1==c?"?":"&")+"p"+(c-1)+"="+encodeURIComponent("function"==typeof arguments[c]?arguments[c].toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof arguments[c]?"undefined":"string"!=typeof arguments[c]?JSON.stringify(arguments[c]):arguments[c]);return Error(a)}}function fb(b){if(null==b||Fa(b))return!1;
var a=b.length;return 1===b.nodeType&&a?!0:C(b)||L(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function r(b,a,c){var d;if(b)if(J(b))for(d in b)"prototype"==d||("length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d))||a.call(c,b[d],d);else if(L(b)||fb(b))for(d=0;d<b.length;d++)a.call(c,b[d],d);else if(b.forEach&&b.forEach!==r)b.forEach(a,c);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d);return b}function Zb(b){var a=[],c;for(c in b)b.hasOwnProperty(c)&&a.push(c);return a.sort()}function Tc(b,
a,c){for(var d=Zb(b),e=0;e<d.length;e++)a.call(c,b[d[e]],d[e]);return d}function $b(b){return function(a,c){b(c,a)}}function gb(){for(var b=la.length,a;b;){b--;a=la[b].charCodeAt(0);if(57==a)return la[b]="A",la.join("");if(90==a)la[b]="0";else return la[b]=String.fromCharCode(a+1),la.join("")}la.unshift("0");return la.join("")}function ac(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function E(b){var a=b.$$hashKey;r(arguments,function(a){a!==b&&r(a,function(a,c){b[c]=a})});ac(b,a);return b}function Z(b){return parseInt(b,
10)}function bc(b,a){return E(new (E(function(){},{prototype:b})),a)}function z(){}function Ga(b){return b}function $(b){return function(){return b}}function F(b){return"undefined"===typeof b}function D(b){return"undefined"!==typeof b}function T(b){return null!=b&&"object"===typeof b}function C(b){return"string"===typeof b}function Ab(b){return"number"===typeof b}function sa(b){return"[object Date]"===ya.call(b)}function J(b){return"function"===typeof b}function hb(b){return"[object RegExp]"===ya.call(b)}
function Fa(b){return b&&b.document&&b.location&&b.alert&&b.setInterval}function Uc(b){return!(!b||!(b.nodeName||b.prop&&b.attr&&b.find))}function Vc(b,a,c){var d=[];r(b,function(b,f,g){d.push(a.call(c,b,f,g))});return d}function Qa(b,a){if(b.indexOf)return b.indexOf(a);for(var c=0;c<b.length;c++)if(a===b[c])return c;return-1}function Ra(b,a){var c=Qa(b,a);0<=c&&b.splice(c,1);return a}function Ha(b,a,c,d){if(Fa(b)||b&&b.$evalAsync&&b.$watch)throw Sa("cpws");if(a){if(b===a)throw Sa("cpi");c=c||[];
d=d||[];if(T(b)){var e=Qa(c,b);if(-1!==e)return d[e];c.push(b);d.push(a)}if(L(b))for(var f=a.length=0;f<b.length;f++)e=Ha(b[f],null,c,d),T(b[f])&&(c.push(b[f]),d.push(e)),a.push(e);else{var g=a.$$hashKey;r(a,function(b,c){delete a[c]});for(f in b)e=Ha(b[f],null,c,d),T(b[f])&&(c.push(b[f]),d.push(e)),a[f]=e;ac(a,g)}}else if(a=b)L(b)?a=Ha(b,[],c,d):sa(b)?a=new Date(b.getTime()):hb(b)?(a=RegExp(b.source,b.toString().match(/[^\/]*$/)[0]),a.lastIndex=b.lastIndex):T(b)&&(a=Ha(b,{},c,d));return a}function ga(b,
a){if(L(b)){a=a||[];for(var c=0;c<b.length;c++)a[c]=b[c]}else if(T(b))for(c in a=a||{},b)!ib.call(b,c)||"$"===c.charAt(0)&&"$"===c.charAt(1)||(a[c]=b[c]);return a||b}function za(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&"object"==c)if(L(b)){if(!L(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!za(b[d],a[d]))return!1;return!0}}else{if(sa(b))return sa(a)&&b.getTime()==a.getTime();if(hb(b)&&hb(a))return b.toString()==a.toString();
if(b&&b.$evalAsync&&b.$watch||a&&a.$evalAsync&&a.$watch||Fa(b)||Fa(a)||L(a))return!1;c={};for(d in b)if("$"!==d.charAt(0)&&!J(b[d])){if(!za(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c.hasOwnProperty(d)&&"$"!==d.charAt(0)&&a[d]!==s&&!J(a[d]))return!1;return!0}return!1}function Bb(b,a){var c=2<arguments.length?Aa.call(arguments,2):[];return!J(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?a.apply(b,c.concat(Aa.call(arguments,0))):a.apply(b,c)}:function(){return arguments.length?
a.apply(b,arguments):a.call(b)}}function Wc(b,a){var c=a;"string"===typeof b&&"$"===b.charAt(0)?c=s:Fa(a)?c="$WINDOW":a&&X===a?c="$DOCUMENT":a&&(a.$evalAsync&&a.$watch)&&(c="$SCOPE");return c}function ta(b,a){return"undefined"===typeof b?s:JSON.stringify(b,Wc,a?"  ":null)}function cc(b){return C(b)?JSON.parse(b):b}function Ta(b){"function"===typeof b?b=!0:b&&0!==b.length?(b=M(""+b),b=!("f"==b||"0"==b||"false"==b||"no"==b||"n"==b||"[]"==b)):b=!1;return b}function ha(b){b=y(b).clone();try{b.empty()}catch(a){}var c=
y("<div>").append(b).html();try{return 3===b[0].nodeType?M(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+M(b)})}catch(d){return M(c)}}function dc(b){try{return decodeURIComponent(b)}catch(a){}}function ec(b){var a={},c,d;r((b||"").split("&"),function(b){b&&(c=b.replace(/\+/g,"%20").split("="),d=dc(c[0]),D(d)&&(b=D(c[1])?dc(c[1]):!0,ib.call(a,d)?L(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}function Cb(b){var a=[];r(b,function(b,d){L(b)?r(b,function(b){a.push(Ba(d,
!0)+(!0===b?"":"="+Ba(b,!0)))}):a.push(Ba(d,!0)+(!0===b?"":"="+Ba(b,!0)))});return a.length?a.join("&"):""}function jb(b){return Ba(b,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function Ba(b,a){return encodeURIComponent(b).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,a?"%20":"+")}function Xc(b,a){function c(a){a&&d.push(a)}var d=[b],e,f,g=["ng:app","ng-app","x-ng-app","data-ng-app"],k=/\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;
r(g,function(a){g[a]=!0;c(X.getElementById(a));a=a.replace(":","\\:");b.querySelectorAll&&(r(b.querySelectorAll("."+a),c),r(b.querySelectorAll("."+a+"\\:"),c),r(b.querySelectorAll("["+a+"]"),c))});r(d,function(a){if(!e){var b=k.exec(" "+a.className+" ");b?(e=a,f=(b[2]||"").replace(/\s+/g,",")):r(a.attributes,function(b){!e&&g[b.name]&&(e=a,f=b.value)})}});e&&a(e,f?[f]:[])}function fc(b,a){var c=function(){b=y(b);if(b.injector()){var c=b[0]===X?"document":ha(b);throw Sa("btstrpd",c);}a=a||[];a.unshift(["$provide",
function(a){a.value("$rootElement",b)}]);a.unshift("ng");c=gc(a);c.invoke(["$rootScope","$rootElement","$compile","$injector","$animate",function(a,b,c,d,e){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return c},d=/^NG_DEFER_BOOTSTRAP!/;if(P&&!d.test(P.name))return c();P.name=P.name.replace(d,"");Ua.resumeBootstrap=function(b){r(b,function(b){a.push(b)});c()}}function kb(b,a){a=a||"_";return b.replace(Yc,function(b,d){return(d?a:"")+b.toLowerCase()})}function Db(b,a,c){if(!b)throw Sa("areq",
a||"?",c||"required");return b}function Va(b,a,c){c&&L(b)&&(b=b[b.length-1]);Db(J(b),a,"not a function, got "+(b&&"object"===typeof b?b.constructor.name||"Object":typeof b));return b}function Ca(b,a){if("hasOwnProperty"===b)throw Sa("badname",a);}function hc(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,f=a.length,g=0;g<f;g++)d=a[g],b&&(b=(e=b)[d]);return!c&&J(b)?Bb(e,b):b}function Eb(b){var a=b[0];b=b[b.length-1];if(a===b)return y(a);var c=[a];do{a=a.nextSibling;if(!a)break;c.push(a)}while(a!==
b);return y(c)}function Zc(b){var a=w("$injector"),c=w("ng");b=b.angular||(b.angular={});b.$$minErr=b.$$minErr||w;return b.module||(b.module=function(){var b={};return function(e,f,g){if("hasOwnProperty"===e)throw c("badname","module");f&&b.hasOwnProperty(e)&&(b[e]=null);return b[e]||(b[e]=function(){function b(a,d,e){return function(){c[e||"push"]([a,d,arguments]);return n}}if(!f)throw a("nomod",e);var c=[],d=[],l=b("$injector","invoke"),n={_invokeQueue:c,_runBlocks:d,requires:f,name:e,provider:b("$provide",
"provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:b("$provide","value"),constant:b("$provide","constant","unshift"),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),config:l,run:function(a){d.push(a);return this}};g&&l(g);return n}())}}())}function $c(b){E(b,{bootstrap:fc,copy:Ha,extend:E,equals:za,element:y,forEach:r,injector:gc,noop:z,bind:Bb,
toJson:ta,fromJson:cc,identity:Ga,isUndefined:F,isDefined:D,isString:C,isFunction:J,isObject:T,isNumber:Ab,isElement:Uc,isArray:L,version:ad,isDate:sa,lowercase:M,uppercase:Ia,callbacks:{counter:0},$$minErr:w,$$csp:Wa});Xa=Zc(P);try{Xa("ngLocale")}catch(a){Xa("ngLocale",[]).provider("$locale",bd)}Xa("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:cd});a.provider("$compile",ic).directive({a:dd,input:jc,textarea:jc,form:ed,script:fd,select:gd,style:hd,option:id,ngBind:jd,ngBindHtml:kd,
ngBindTemplate:ld,ngClass:md,ngClassEven:nd,ngClassOdd:od,ngCloak:pd,ngController:qd,ngForm:rd,ngHide:sd,ngIf:td,ngInclude:ud,ngInit:vd,ngNonBindable:wd,ngPluralize:xd,ngRepeat:yd,ngShow:zd,ngStyle:Ad,ngSwitch:Bd,ngSwitchWhen:Cd,ngSwitchDefault:Dd,ngOptions:Ed,ngTransclude:Fd,ngModel:Gd,ngList:Hd,ngChange:Id,required:kc,ngRequired:kc,ngValue:Jd}).directive({ngInclude:Kd}).directive(Fb).directive(lc);a.provider({$anchorScroll:Ld,$animate:Md,$browser:Nd,$cacheFactory:Od,$controller:Pd,$document:Qd,
$exceptionHandler:Rd,$filter:mc,$interpolate:Sd,$interval:Td,$http:Ud,$httpBackend:Vd,$location:Wd,$log:Xd,$parse:Yd,$rootScope:Zd,$q:$d,$sce:ae,$sceDelegate:be,$sniffer:ce,$templateCache:de,$timeout:ee,$window:fe,$$rAF:ge,$$asyncCallback:he})}])}function Ya(b){return b.replace(ie,function(a,b,d,e){return e?d.toUpperCase():d}).replace(je,"Moz$1")}function Gb(b,a,c,d){function e(b){var e=c&&b?[this.filter(b)]:[this],m=a,h,l,n,p,q,t;if(!d||null!=b)for(;e.length;)for(h=e.shift(),l=0,n=h.length;l<n;l++)for(p=
y(h[l]),m?p.triggerHandler("$destroy"):m=!m,q=0,p=(t=p.children()).length;q<p;q++)e.push(Da(t[q]));return f.apply(this,arguments)}var f=Da.fn[b],f=f.$original||f;e.$original=f;Da.fn[b]=e}function S(b){if(b instanceof S)return b;C(b)&&(b=aa(b));if(!(this instanceof S)){if(C(b)&&"<"!=b.charAt(0))throw Hb("nosel");return new S(b)}if(C(b)){var a=b;b=X;var c;if(c=ke.exec(a))b=[b.createElement(c[1])];else{var d=b,e;b=d.createDocumentFragment();c=[];if(Ib.test(a)){d=b.appendChild(d.createElement("div"));
e=(le.exec(a)||["",""])[1].toLowerCase();e=ba[e]||ba._default;d.innerHTML="<div>&#160;</div>"+e[1]+a.replace(me,"<$1></$2>")+e[2];d.removeChild(d.firstChild);for(a=e[0];a--;)d=d.lastChild;a=0;for(e=d.childNodes.length;a<e;++a)c.push(d.childNodes[a]);d=b.firstChild;d.textContent=""}else c.push(d.createTextNode(a));b.textContent="";b.innerHTML="";b=c}Jb(this,b);y(X.createDocumentFragment()).append(this)}else Jb(this,b)}function Kb(b){return b.cloneNode(!0)}function Ja(b){Lb(b);var a=0;for(b=b.childNodes||
[];a<b.length;a++)Ja(b[a])}function nc(b,a,c,d){if(D(d))throw Hb("offargs");var e=ma(b,"events");ma(b,"handle")&&(F(a)?r(e,function(a,c){Za(b,c,a);delete e[c]}):r(a.split(" "),function(a){F(c)?(Za(b,a,e[a]),delete e[a]):Ra(e[a]||[],c)}))}function Lb(b,a){var c=b.ng339,d=$a[c];d&&(a?delete $a[c].data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),nc(b)),delete $a[c],b.ng339=s))}function ma(b,a,c){var d=b.ng339,d=$a[d||-1];if(D(c))d||(b.ng339=d=++ne,d=$a[d]={}),d[a]=c;else return d&&d[a]}
function Mb(b,a,c){var d=ma(b,"data"),e=D(c),f=!e&&D(a),g=f&&!T(a);d||g||ma(b,"data",d={});if(e)d[a]=c;else if(f){if(g)return d&&d[a];E(d,a)}else return d}function Nb(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" "):!1}function lb(b,a){a&&b.setAttribute&&r(a.split(" "),function(a){b.setAttribute("class",aa((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+aa(a)+" "," ")))})}function mb(b,a){if(a&&b.setAttribute){var c=
(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");r(a.split(" "),function(a){a=aa(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});b.setAttribute("class",aa(c))}}function Jb(b,a){if(a){a=a.nodeName||!D(a.length)||Fa(a)?[a]:a;for(var c=0;c<a.length;c++)b.push(a[c])}}function oc(b,a){return nb(b,"$"+(a||"ngController")+"Controller")}function nb(b,a,c){9==b.nodeType&&(b=b.documentElement);for(a=L(a)?a:[a];b;){for(var d=0,e=a.length;d<e;d++)if((c=y.data(b,a[d]))!==s)return c;b=b.parentNode||11===
b.nodeType&&b.host}}function pc(b){for(var a=0,c=b.childNodes;a<c.length;a++)Ja(c[a]);for(;b.firstChild;)b.removeChild(b.firstChild)}function qc(b,a){var c=ob[a.toLowerCase()];return c&&rc[b.nodeName]&&c}function oe(b,a){var c=function(c,e){c.preventDefault||(c.preventDefault=function(){c.returnValue=!1});c.stopPropagation||(c.stopPropagation=function(){c.cancelBubble=!0});c.target||(c.target=c.srcElement||X);if(F(c.defaultPrevented)){var f=c.preventDefault;c.preventDefault=function(){c.defaultPrevented=
!0;f.call(c)};c.defaultPrevented=!1}c.isDefaultPrevented=function(){return c.defaultPrevented||!1===c.returnValue};var g=ga(a[e||c.type]||[]);r(g,function(a){a.call(b,c)});8>=Q?(c.preventDefault=null,c.stopPropagation=null,c.isDefaultPrevented=null):(delete c.preventDefault,delete c.stopPropagation,delete c.isDefaultPrevented)};c.elem=b;return c}function Ka(b,a){var c=typeof b,d;"function"==c||"object"==c&&null!==b?"function"==typeof(d=b.$$hashKey)?d=b.$$hashKey():d===s&&(d=b.$$hashKey=(a||gb)()):
d=b;return c+":"+d}function ab(b,a){if(a){var c=0;this.nextUid=function(){return++c}}r(b,this.put,this)}function sc(b){var a,c;"function"===typeof b?(a=b.$inject)||(a=[],b.length&&(c=b.toString().replace(pe,""),c=c.match(qe),r(c[1].split(re),function(b){b.replace(se,function(b,c,d){a.push(d)})})),b.$inject=a):L(b)?(c=b.length-1,Va(b[c],"fn"),a=b.slice(0,c)):Va(b,"fn",!0);return a}function gc(b){function a(a){return function(b,c){if(T(b))r(b,$b(a));else return a(b,c)}}function c(a,b){Ca(a,"service");
if(J(b)||L(b))b=n.instantiate(b);if(!b.$get)throw bb("pget",a);return l[a+k]=b}function d(a,b){return c(a,{$get:b})}function e(a){var b=[],c,d,f,k;r(a,function(a){if(!h.get(a)){h.put(a,!0);try{if(C(a))for(c=Xa(a),b=b.concat(e(c.requires)).concat(c._runBlocks),d=c._invokeQueue,f=0,k=d.length;f<k;f++){var g=d[f],m=n.get(g[0]);m[g[1]].apply(m,g[2])}else J(a)?b.push(n.invoke(a)):L(a)?b.push(n.invoke(a)):Va(a,"module")}catch(l){throw L(a)&&(a=a[a.length-1]),l.message&&(l.stack&&-1==l.stack.indexOf(l.message))&&
(l=l.message+"\n"+l.stack),bb("modulerr",a,l.stack||l.message||l);}}});return b}function f(a,b){function c(d){if(a.hasOwnProperty(d)){if(a[d]===g)throw bb("cdep",d+" <- "+m.join(" <- "));return a[d]}try{return m.unshift(d),a[d]=g,a[d]=b(d)}catch(e){throw a[d]===g&&delete a[d],e;}finally{m.shift()}}function d(a,b,e){var f=[],k=sc(a),g,m,h;m=0;for(g=k.length;m<g;m++){h=k[m];if("string"!==typeof h)throw bb("itkn",h);f.push(e&&e.hasOwnProperty(h)?e[h]:c(h))}L(a)&&(a=a[g]);return a.apply(b,f)}return{invoke:d,
instantiate:function(a,b){var c=function(){},e;c.prototype=(L(a)?a[a.length-1]:a).prototype;c=new c;e=d(a,c,b);return T(e)||J(e)?e:c},get:c,annotate:sc,has:function(b){return l.hasOwnProperty(b+k)||a.hasOwnProperty(b)}}}var g={},k="Provider",m=[],h=new ab([],!0),l={$provide:{provider:a(c),factory:a(d),service:a(function(a,b){return d(a,["$injector",function(a){return a.instantiate(b)}])}),value:a(function(a,b){return d(a,$(b))}),constant:a(function(a,b){Ca(a,"constant");l[a]=b;p[a]=b}),decorator:function(a,
b){var c=n.get(a+k),d=c.$get;c.$get=function(){var a=q.invoke(d,c);return q.invoke(b,null,{$delegate:a})}}}},n=l.$injector=f(l,function(){throw bb("unpr",m.join(" <- "));}),p={},q=p.$injector=f(p,function(a){a=n.get(a+k);return q.invoke(a.$get,a)});r(e(b),function(a){q.invoke(a||z)});return q}function Ld(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;r(a,function(a){b||"a"!==M(a.nodeName)||(b=a)});return b}
function f(){var b=c.hash(),d;b?(d=g.getElementById(b))?d.scrollIntoView():(d=e(g.getElementsByName(b)))?d.scrollIntoView():"top"===b&&a.scrollTo(0,0):a.scrollTo(0,0)}var g=a.document;b&&d.$watch(function(){return c.hash()},function(){d.$evalAsync(f)});return f}]}function he(){this.$get=["$$rAF","$timeout",function(b,a){return b.supported?function(a){return b(a)}:function(b){return a(b,0,!1)}}]}function te(b,a,c,d){function e(a){try{a.apply(null,Aa.call(arguments,1))}finally{if(t--,0===t)for(;K.length;)try{K.pop()()}catch(b){c.error(b)}}}
function f(a,b){(function ca(){r(x,function(a){a()});v=b(ca,a)})()}function g(){u=null;A!=k.url()&&(A=k.url(),r(da,function(a){a(k.url())}))}var k=this,m=a[0],h=b.location,l=b.history,n=b.setTimeout,p=b.clearTimeout,q={};k.isMock=!1;var t=0,K=[];k.$$completeOutstandingRequest=e;k.$$incOutstandingRequestCount=function(){t++};k.notifyWhenNoOutstandingRequests=function(a){r(x,function(a){a()});0===t?a():K.push(a)};var x=[],v;k.addPollFn=function(a){F(v)&&f(100,n);x.push(a);return a};var A=h.href,R=a.find("base"),
u=null;k.url=function(a,c){h!==b.location&&(h=b.location);l!==b.history&&(l=b.history);if(a){if(A!=a)return A=a,d.history?c?l.replaceState(null,"",a):(l.pushState(null,"",a),R.attr("href",R.attr("href"))):(u=a,c?h.replace(a):h.href=a),k}else return u||h.href.replace(/%27/g,"'")};var da=[],I=!1;k.onUrlChange=function(a){if(!I){if(d.history)y(b).on("popstate",g);if(d.hashchange)y(b).on("hashchange",g);else k.addPollFn(g);I=!0}da.push(a);return a};k.baseHref=function(){var a=R.attr("href");return a?
a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};var W={},ea="",N=k.baseHref();k.cookies=function(a,b){var d,e,f,k;if(a)b===s?m.cookie=escape(a)+"=;path="+N+";expires=Thu, 01 Jan 1970 00:00:00 GMT":C(b)&&(d=(m.cookie=escape(a)+"="+escape(b)+";path="+N).length+1,4096<d&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!"));else{if(m.cookie!==ea)for(ea=m.cookie,d=ea.split("; "),W={},f=0;f<d.length;f++)e=d[f],k=e.indexOf("="),0<k&&(a=unescape(e.substring(0,
k)),W[a]===s&&(W[a]=unescape(e.substring(k+1))));return W}};k.defer=function(a,b){var c;t++;c=n(function(){delete q[c];e(a)},b||0);q[c]=!0;return c};k.defer.cancel=function(a){return q[a]?(delete q[a],p(a),e(z),!0):!1}}function Nd(){this.$get=["$window","$log","$sniffer","$document",function(b,a,c,d){return new te(b,d,a,c)}]}function Od(){this.$get=function(){function b(b,d){function e(a){a!=n&&(p?p==a&&(p=a.n):p=a,f(a.n,a.p),f(a,n),n=a,n.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in
a)throw w("$cacheFactory")("iid",b);var g=0,k=E({},d,{id:b}),m={},h=d&&d.capacity||Number.MAX_VALUE,l={},n=null,p=null;return a[b]={put:function(a,b){if(h<Number.MAX_VALUE){var c=l[a]||(l[a]={key:a});e(c)}if(!F(b))return a in m||g++,m[a]=b,g>h&&this.remove(p.key),b},get:function(a){if(h<Number.MAX_VALUE){var b=l[a];if(!b)return;e(b)}return m[a]},remove:function(a){if(h<Number.MAX_VALUE){var b=l[a];if(!b)return;b==n&&(n=b.p);b==p&&(p=b.n);f(b.n,b.p);delete l[a]}delete m[a];g--},removeAll:function(){m=
{};g=0;l={};n=p=null},destroy:function(){l=k=m=null;delete a[b]},info:function(){return E({},k,{size:g})}}}var a={};b.info=function(){var b={};r(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function de(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function ic(b,a){var c={},d="Directive",e=/^\s*directive\:\s*([\d\w_\-]+)\s+(.*)$/,f=/(([\d\w_\-]+)(?:\:([^;]+))?;?)/,g=/^(on[a-z]+|formaction)$/;this.directive=function m(a,e){Ca(a,"directive");C(a)?
(Db(e,"directiveFactory"),c.hasOwnProperty(a)||(c[a]=[],b.factory(a+d,["$injector","$exceptionHandler",function(b,d){var e=[];r(c[a],function(c,f){try{var g=b.invoke(c);J(g)?g={compile:$(g)}:!g.compile&&g.link&&(g.compile=$(g.link));g.priority=g.priority||0;g.index=f;g.name=g.name||a;g.require=g.require||g.controller&&g.name;g.restrict=g.restrict||"A";e.push(g)}catch(m){d(m)}});return e}])),c[a].push(e)):r(a,$b(m));return this};this.aHrefSanitizationWhitelist=function(b){return D(b)?(a.aHrefSanitizationWhitelist(b),
this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(b){return D(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};this.$get=["$injector","$interpolate","$exceptionHandler","$http","$templateCache","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,l,n,p,q,t,K,x,v,A,R){function u(a,b,c,d,e){a instanceof y||(a=y(a));r(a,function(b,c){3==b.nodeType&&b.nodeValue.match(/\S+/)&&(a[c]=y(b).wrap("<span></span>").parent()[0])});
var f=I(a,b,a,c,d,e);da(a,"ng-scope");return function(b,c,d,e){Db(b,"scope");var g=c?La.clone.call(a):a;r(d,function(a,b){g.data("$"+b+"Controller",a)});d=0;for(var m=g.length;d<m;d++){var h=g[d].nodeType;1!==h&&9!==h||g.eq(d).data("$scope",b)}c&&c(g,b);f&&f(b,g,g,e);return g}}function da(a,b){try{a.addClass(b)}catch(c){}}function I(a,b,c,d,e,f){function g(a,c,d,e){var f,h,l,q,n,p,t;f=c.length;var x=Array(f);for(q=0;q<f;q++)x[q]=c[q];p=q=0;for(n=m.length;q<n;p++)h=x[p],c=m[q++],f=m[q++],c?(c.scope?
(l=a.$new(),y.data(h,"$scope",l)):l=a,t=c.transcludeOnThisElement?W(a,c.transclude,e):!c.templateOnThisElement&&e?e:!e&&b?W(a,b):null,c(f,l,h,d,t)):f&&f(a,h.childNodes,s,e)}for(var m=[],h,l,q,n,p=0;p<a.length;p++)h=new Ob,l=ea(a[p],[],h,0===p?d:s,e),(f=l.length?G(l,a[p],h,b,c,null,[],[],f):null)&&f.scope&&da(h.$$element,"ng-scope"),h=f&&f.terminal||!(q=a[p].childNodes)||!q.length?null:I(q,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b),m.push(f,h),n=n||f||h,f=null;return n?
g:null}function W(a,b,c){return function(d,e,f){var g=!1;d||(d=a.$new(),g=d.$$transcluded=!0);e=b(d,e,f,c);if(g)e.on("$destroy",function(){d.$destroy()});return e}}function ea(a,b,c,d,g){var h=c.$attr,m;switch(a.nodeType){case 1:ca(b,na(Ma(a).toLowerCase()),"E",d,g);for(var l,q,n,p=a.attributes,t=0,x=p&&p.length;t<x;t++){var K=!1,v=!1;l=p[t];if(!Q||8<=Q||l.specified){m=l.name;q=aa(l.value);l=na(m);if(n=V.test(l))m=kb(l.substr(6),"-");var A=l.replace(/(Start|End)$/,"");l===A+"Start"&&(K=m,v=m.substr(0,
m.length-5)+"end",m=m.substr(0,m.length-6));l=na(m.toLowerCase());h[l]=m;if(n||!c.hasOwnProperty(l))c[l]=q,qc(a,l)&&(c[l]=!0);P(a,b,q,l);ca(b,l,"A",d,g,K,v)}}a=a.className;if(C(a)&&""!==a)for(;m=f.exec(a);)l=na(m[2]),ca(b,l,"C",d,g)&&(c[l]=aa(m[3])),a=a.substr(m.index+m[0].length);break;case 3:w(b,a.nodeValue);break;case 8:try{if(m=e.exec(a.nodeValue))l=na(m[1]),ca(b,l,"M",d,g)&&(c[l]=aa(m[2]))}catch(u){}}b.sort(F);return b}function N(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ia("uterdir",
b,c);1==a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return y(d)}function B(a,b,c){return function(d,e,f,g,m){e=N(e[0],b,c);return a(d,e,f,g,m)}}function G(a,c,d,e,f,g,m,n,p){function x(a,b,c,d){if(a){c&&(a=B(a,c,d));a.require=H.require;a.directiveName=oa;if(I===H||H.$$isolateScope)a=tc(a,{isolateScope:!0});m.push(a)}if(b){c&&(b=B(b,c,d));b.require=H.require;b.directiveName=oa;if(I===H||H.$$isolateScope)b=tc(b,{isolateScope:!0});n.push(b)}}
function K(a,b,c,d){var e,f="data",g=!1;if(C(b)){for(;"^"==(e=b.charAt(0))||"?"==e;)b=b.substr(1),"^"==e&&(f="inheritedData"),g=g||"?"==e;e=null;d&&"data"===f&&(e=d[b]);e=e||c[f]("$"+b+"Controller");if(!e&&!g)throw ia("ctreq",b,a);}else L(b)&&(e=[],r(b,function(b){e.push(K(a,b,c,d))}));return e}function v(a,e,f,g,p){function x(a,b){var c;2>arguments.length&&(b=a,a=s);Ea&&(c=ea);return p(a,b,c)}var A,O,u,R,B,N,ea={},qb;A=c===f?d:ga(d,new Ob(y(f),d.$attr));O=A.$$element;if(I){var Na=/^\s*([@=&])(\??)\s*(\w*)\s*$/;
N=e.$new(!0);!G||G!==I&&G!==I.$$originalDirective?O.data("$isolateScopeNoTemplate",N):O.data("$isolateScope",N);da(O,"ng-isolate-scope");r(I.scope,function(a,c){var d=a.match(Na)||[],f=d[3]||c,g="?"==d[2],d=d[1],m,l,n,p;N.$$isolateBindings[c]=d+f;switch(d){case "@":A.$observe(f,function(a){N[c]=a});A.$$observers[f].$$scope=e;A[f]&&(N[c]=b(A[f])(e));break;case "=":if(g&&!A[f])break;l=q(A[f]);p=l.literal?za:function(a,b){return a===b||a!==a&&b!==b};n=l.assign||function(){m=N[c]=l(e);throw ia("nonassign",
A[f],I.name);};m=N[c]=l(e);N.$watch(function(){var a=l(e);p(a,N[c])||(p(a,m)?n(e,a=N[c]):N[c]=a);return m=a},null,l.literal);break;case "&":l=q(A[f]);N[c]=function(a){return l(e,a)};break;default:throw ia("iscp",I.name,c,a);}})}qb=p&&x;W&&r(W,function(a){var b={$scope:a===I||a.$$isolateScope?N:e,$element:O,$attrs:A,$transclude:qb},c;B=a.controller;"@"==B&&(B=A[a.name]);c=t(B,b);ea[a.name]=c;Ea||O.data("$"+a.name+"Controller",c);a.controllerAs&&(b.$scope[a.controllerAs]=c)});g=0;for(u=m.length;g<u;g++)try{R=
m[g],R(R.isolateScope?N:e,O,A,R.require&&K(R.directiveName,R.require,O,ea),qb)}catch(ca){l(ca,ha(O))}g=e;I&&(I.template||null===I.templateUrl)&&(g=N);a&&a(g,f.childNodes,s,p);for(g=n.length-1;0<=g;g--)try{R=n[g],R(R.isolateScope?N:e,O,A,R.require&&K(R.directiveName,R.require,O,ea),qb)}catch(pb){l(pb,ha(O))}}p=p||{};for(var A=-Number.MAX_VALUE,R,W=p.controllerDirectives,I=p.newIsolateScopeDirective,G=p.templateDirective,ca=p.nonTlbTranscludeDirective,F=!1,E=!1,Ea=p.hasElementTranscludeDirective,w=
d.$$element=y(c),H,oa,U,S=e,Q,P=0,pa=a.length;P<pa;P++){H=a[P];var V=H.$$start,Y=H.$$end;V&&(w=N(c,V,Y));U=s;if(A>H.priority)break;if(U=H.scope)R=R||H,H.templateUrl||(M("new/isolated scope",I,H,w),T(U)&&(I=H));oa=H.name;!H.templateUrl&&H.controller&&(U=H.controller,W=W||{},M("'"+oa+"' controller",W[oa],H,w),W[oa]=H);if(U=H.transclude)F=!0,H.$$tlb||(M("transclusion",ca,H,w),ca=H),"element"==U?(Ea=!0,A=H.priority,U=w,w=d.$$element=y(X.createComment(" "+oa+": "+d[oa]+" ")),c=w[0],Na(f,Aa.call(U,0),c),
S=u(U,e,A,g&&g.name,{nonTlbTranscludeDirective:ca})):(U=y(Kb(c)).contents(),w.empty(),S=u(U,e));if(H.template)if(E=!0,M("template",G,H,w),G=H,U=J(H.template)?H.template(w,d):H.template,U=Z(U),H.replace){g=H;U=Ib.test(U)?y(aa(U)):[];c=U[0];if(1!=U.length||1!==c.nodeType)throw ia("tplrt",oa,"");Na(f,w,c);pa={$attr:{}};U=ea(c,[],pa);var $=a.splice(P+1,a.length-(P+1));I&&pb(U);a=a.concat(U).concat($);D(d,pa);pa=a.length}else w.html(U);if(H.templateUrl)E=!0,M("template",G,H,w),G=H,H.replace&&(g=H),v=z(a.splice(P,
a.length-P),w,d,f,F&&S,m,n,{controllerDirectives:W,newIsolateScopeDirective:I,templateDirective:G,nonTlbTranscludeDirective:ca}),pa=a.length;else if(H.compile)try{Q=H.compile(w,d,S),J(Q)?x(null,Q,V,Y):Q&&x(Q.pre,Q.post,V,Y)}catch(ba){l(ba,ha(w))}H.terminal&&(v.terminal=!0,A=Math.max(A,H.priority))}v.scope=R&&!0===R.scope;v.transcludeOnThisElement=F;v.templateOnThisElement=E;v.transclude=S;p.hasElementTranscludeDirective=Ea;return v}function pb(a){for(var b=0,c=a.length;b<c;b++)a[b]=bc(a[b],{$$isolateScope:!0})}
function ca(b,e,f,g,h,q,n){if(e===h)return null;h=null;if(c.hasOwnProperty(e)){var p;e=a.get(e+d);for(var t=0,x=e.length;t<x;t++)try{p=e[t],(g===s||g>p.priority)&&-1!=p.restrict.indexOf(f)&&(q&&(p=bc(p,{$$start:q,$$end:n})),b.push(p),h=p)}catch(K){l(K)}}return h}function D(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;r(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});r(b,function(b,f){"class"==f?(da(e,b),a["class"]=(a["class"]?a["class"]+" ":
"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function z(a,b,c,d,e,f,g,m){var h=[],l,q,t=b[0],x=a.shift(),K=E({},x,{templateUrl:null,transclude:null,replace:null,$$originalDirective:x}),A=J(x.templateUrl)?x.templateUrl(b,c):x.templateUrl;b.empty();n.get(v.getTrustedResourceUrl(A),{cache:p}).success(function(n){var p,v;n=Z(n);if(x.replace){n=Ib.test(n)?y(aa(n)):[];p=n[0];if(1!=n.length||1!==p.nodeType)throw ia("tplrt",
x.name,A);n={$attr:{}};Na(d,b,p);var u=ea(p,[],n);T(x.scope)&&pb(u);a=u.concat(a);D(c,n)}else p=t,b.html(n);a.unshift(K);l=G(a,p,c,e,b,x,f,g,m);r(d,function(a,c){a==p&&(d[c]=b[0])});for(q=I(b[0].childNodes,e);h.length;){n=h.shift();v=h.shift();var R=h.shift(),B=h.shift(),u=b[0];if(v!==t){var N=v.className;m.hasElementTranscludeDirective&&x.replace||(u=Kb(p));Na(R,y(v),u);da(y(u),N)}v=l.transcludeOnThisElement?W(n,l.transclude,B):B;l(q,n,u,d,v)}h=null}).error(function(a,b,c,d){throw ia("tpload",d.url);
});return function(a,b,c,d,e){a=e;h?(h.push(b),h.push(c),h.push(d),h.push(a)):(l.transcludeOnThisElement&&(a=W(b,l.transclude,e)),l(q,b,c,d,a))}}function F(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function M(a,b,c,d){if(b)throw ia("multidir",b.name,c.name,a,ha(d));}function w(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){var b=a.parent().length;b&&da(a.parent(),"ng-binding");return function(a,c){var e=c.parent(),f=e.data("$binding")||
[];f.push(d);e.data("$binding",f);b||da(e,"ng-binding");a.$watch(d,function(a){c[0].nodeValue=a})}}})}function S(a,b){if("srcdoc"==b)return v.HTML;var c=Ma(a);if("xlinkHref"==b||"FORM"==c&&"action"==b||"IMG"!=c&&("src"==b||"ngSrc"==b))return v.RESOURCE_URL}function P(a,c,d,e){var f=b(d,!0);if(f){if("multiple"===e&&"SELECT"===Ma(a))throw ia("selmulti",ha(a));c.push({priority:100,compile:function(){return{pre:function(c,d,m){d=m.$$observers||(m.$$observers={});if(g.test(e))throw ia("nodomevents");if(f=
b(m[e],!0,S(a,e)))m[e]=f(c),(d[e]||(d[e]=[])).$$inter=!0,(m.$$observers&&m.$$observers[e].$$scope||c).$watch(f,function(a,b){"class"===e&&a!=b?m.$updateClass(a,b):m.$set(e,a)})}}}})}}function Na(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,m;if(a)for(g=0,m=a.length;g<m;g++)if(a[g]==d){a[g++]=c;m=g+e-1;for(var h=a.length;g<h;g++,m++)m<h?a[g]=a[m]:delete a[g];a.length-=e-1;break}f&&f.replaceChild(c,d);a=X.createDocumentFragment();a.appendChild(d);c[y.expando]=d[y.expando];d=1;for(e=b.length;d<e;d++)f=
b[d],y(f).remove(),a.appendChild(f),delete b[d];b[0]=c;b.length=1}function tc(a,b){return E(function(){return a.apply(null,arguments)},a,b)}var Ob=function(a,b){this.$$element=a;this.$attr=b||{}};Ob.prototype={$normalize:na,$addClass:function(a){a&&0<a.length&&A.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&A.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=uc(a,b),d=uc(b,a);0===c.length?A.removeClass(this.$$element,d):0===d.length?A.addClass(this.$$element,c):
A.setClass(this.$$element,c,d)},$set:function(a,b,c,d){var e=qc(this.$$element[0],a);e&&(this.$$element.prop(a,b),d=e);this[a]=b;d?this.$attr[a]=d:(d=this.$attr[a])||(this.$attr[a]=d=kb(a,"-"));e=Ma(this.$$element);if("A"===e&&"href"===a||"IMG"===e&&"src"===a)this[a]=b=R(b,"src"===a);!1!==c&&(null===b||b===s?this.$$element.removeAttr(d):this.$$element.attr(d,b));(c=this.$$observers)&&r(c[a],function(a){try{a(b)}catch(c){l(c)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers={}),
e=d[a]||(d[a]=[]);e.push(b);K.$evalAsync(function(){e.$$inter||b(c[a])});return b}};var pa=b.startSymbol(),Ea=b.endSymbol(),Z="{{"==pa||"}}"==Ea?Ga:function(a){return a.replace(/\{\{/g,pa).replace(/}}/g,Ea)},V=/^ngAttr[A-Z]/;return u}]}function na(b){return Ya(b.replace(ue,""))}function uc(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),f=0;a:for(;f<d.length;f++){for(var g=d[f],k=0;k<e.length;k++)if(g==e[k])continue a;c+=(0<c.length?" ":"")+g}return c}function Pd(){var b={},a=/^(\S+)(\s+as\s+(\w+))?$/;
this.register=function(a,d){Ca(a,"controller");T(a)?E(b,a):b[a]=d};this.$get=["$injector","$window",function(c,d){return function(e,f){var g,k,m;C(e)&&(g=e.match(a),k=g[1],m=g[3],e=b.hasOwnProperty(k)?b[k]:hc(f.$scope,k,!0)||hc(d,k,!0),Va(e,k,!0));g=c.instantiate(e,f);if(m){if(!f||"object"!==typeof f.$scope)throw w("$controller")("noscp",k||e.name,m);f.$scope[m]=g}return g}}]}function Qd(){this.$get=["$window",function(b){return y(b.document)}]}function Rd(){this.$get=["$log",function(b){return function(a,
c){b.error.apply(b,arguments)}}]}function vc(b){var a={},c,d,e;if(!b)return a;r(b.split("\n"),function(b){e=b.indexOf(":");c=M(aa(b.substr(0,e)));d=aa(b.substr(e+1));c&&(a[c]=a[c]?a[c]+", "+d:d)});return a}function wc(b){var a=T(b)?b:s;return function(c){a||(a=vc(b));return c?a[M(c)]||null:a}}function xc(b,a,c){if(J(c))return c(b,a);r(c,function(c){b=c(b,a)});return b}function Ud(){var b=/^\s*(\[|\{[^\{])/,a=/[\}\]]\s*$/,c=/^\)\]\}',?\n/,d={"Content-Type":"application/json;charset=utf-8"},e=this.defaults=
{transformResponse:[function(d){C(d)&&(d=d.replace(c,""),b.test(d)&&a.test(d)&&(d=cc(d)));return d}],transformRequest:[function(a){return T(a)&&"[object File]"!==ya.call(a)&&"[object Blob]"!==ya.call(a)?ta(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:ga(d),put:ga(d),patch:ga(d)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN"},f=this.interceptors=[],g=this.responseInterceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",
function(a,b,c,d,n,p){function q(a){function b(a){var d=E({},a,{data:xc(a.data,a.headers,c.transformResponse)});return 200<=a.status&&300>a.status?d:n.reject(d)}var c={method:"get",transformRequest:e.transformRequest,transformResponse:e.transformResponse},d=function(a){var b=e.headers,c=E({},a.headers),d,f,b=E({},b.common,b[M(a.method)]);a:for(d in b){a=M(d);for(f in c)if(M(f)===a)continue a;c[d]=b[d]}(function(a){var b;r(a,function(c,d){J(c)&&(b=c(),null!=b?a[d]=b:delete a[d])})})(c);return c}(a);
E(c,a);c.headers=d;c.method=Ia(c.method);var f=[function(a){d=a.headers;var c=xc(a.data,wc(d),a.transformRequest);F(c)&&r(d,function(a,b){"content-type"===M(b)&&delete d[b]});F(a.withCredentials)&&!F(e.withCredentials)&&(a.withCredentials=e.withCredentials);return t(a,c,d).then(b,b)},s],g=n.when(c);for(r(v,function(a){(a.request||a.requestError)&&f.unshift(a.request,a.requestError);(a.response||a.responseError)&&f.push(a.response,a.responseError)});f.length;){a=f.shift();var m=f.shift(),g=g.then(a,
m)}g.success=function(a){g.then(function(b){a(b.data,b.status,b.headers,c)});return g};g.error=function(a){g.then(null,function(b){a(b.data,b.status,b.headers,c)});return g};return g}function t(c,f,g){function h(a,b,c,e){B&&(200<=a&&300>a?B.put(y,[a,b,vc(c),e]):B.remove(y));p(b,a,c,e);d.$$phase||d.$apply()}function p(a,b,d,e){b=Math.max(b,0);(200<=b&&300>b?v.resolve:v.reject)({data:a,status:b,headers:wc(d),config:c,statusText:e})}function t(){var a=Qa(q.pendingRequests,c);-1!==a&&q.pendingRequests.splice(a,
1)}var v=n.defer(),r=v.promise,B,G,y=K(c.url,c.params);q.pendingRequests.push(c);r.then(t,t);!c.cache&&!e.cache||(!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method)||(B=T(c.cache)?c.cache:T(e.cache)?e.cache:x);if(B)if(G=B.get(y),D(G)){if(G&&J(G.then))return G.then(t,t),G;L(G)?p(G[1],G[0],ga(G[2]),G[3]):p(G,200,{},"OK")}else B.put(y,r);F(G)&&((G=Pb(c.url)?b.cookies()[c.xsrfCookieName||e.xsrfCookieName]:s)&&(g[c.xsrfHeaderName||e.xsrfHeaderName]=G),a(c.method,y,f,h,g,c.timeout,c.withCredentials,c.responseType));
return r}function K(a,b){if(!b)return a;var c=[];Tc(b,function(a,b){null===a||F(a)||(L(a)||(a=[a]),r(a,function(a){T(a)&&(sa(a)?a=a.toISOString():T(a)&&(a=ta(a)));c.push(Ba(b)+"="+Ba(a))}))});0<c.length&&(a+=(-1==a.indexOf("?")?"?":"&")+c.join("&"));return a}var x=c("$http"),v=[];r(f,function(a){v.unshift(C(a)?p.get(a):p.invoke(a))});r(g,function(a,b){var c=C(a)?p.get(a):p.invoke(a);v.splice(b,0,{response:function(a){return c(n.when(a))},responseError:function(a){return c(n.reject(a))}})});q.pendingRequests=
[];(function(a){r(arguments,function(a){q[a]=function(b,c){return q(E(c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){r(arguments,function(a){q[a]=function(b,c,d){return q(E(d||{},{method:a,url:b,data:c}))}})})("post","put");q.defaults=e;return q}]}function ve(b){if(8>=Q&&(!b.match(/^(get|post|head|put|delete|options)$/i)||!P.XMLHttpRequest))return new P.ActiveXObject("Microsoft.XMLHTTP");if(P.XMLHttpRequest)return new P.XMLHttpRequest;throw w("$httpBackend")("noxhr");}function Vd(){this.$get=
["$browser","$window","$document",function(b,a,c){return we(b,ve,b.defer,a.angular.callbacks,c[0])}]}function we(b,a,c,d,e){function f(a,b,c){var f=e.createElement("script"),g=null;f.type="text/javascript";f.src=a;f.async=!0;g=function(a){Za(f,"load",g);Za(f,"error",g);e.body.removeChild(f);f=null;var k=-1,t="unknown";a&&("load"!==a.type||d[b].called||(a={type:"error"}),t=a.type,k="error"===a.type?404:200);c&&c(k,t)};rb(f,"load",g);rb(f,"error",g);8>=Q&&(f.onreadystatechange=function(){C(f.readyState)&&
/loaded|complete/.test(f.readyState)&&(f.onreadystatechange=null,g({type:"load"}))});e.body.appendChild(f);return g}var g=-1;return function(e,m,h,l,n,p,q,t){function K(){v=g;R&&R();u&&u.abort()}function x(a,d,e,f,g){I&&c.cancel(I);R=u=null;0===d&&(d=e?200:"file"==ua(m).protocol?404:0);a(1223===d?204:d,e,f,g||"");b.$$completeOutstandingRequest(z)}var v;b.$$incOutstandingRequestCount();m=m||b.url();if("jsonp"==M(e)){var A="_"+(d.counter++).toString(36);d[A]=function(a){d[A].data=a;d[A].called=!0};
var R=f(m.replace("JSON_CALLBACK","angular.callbacks."+A),A,function(a,b){x(l,a,d[A].data,"",b);d[A]=z})}else{var u=a(e);u.open(e,m,!0);r(n,function(a,b){D(a)&&u.setRequestHeader(b,a)});u.onreadystatechange=function(){if(u&&4==u.readyState){var a=null,b=null,c="";v!==g&&(a=u.getAllResponseHeaders(),b="response"in u?u.response:u.responseText);v===g&&10>Q||(c=u.statusText);x(l,v||u.status,b,a,c)}};q&&(u.withCredentials=!0);if(t)try{u.responseType=t}catch(da){if("json"!==t)throw da;}u.send(h||null)}if(0<
p)var I=c(K,p);else p&&J(p.then)&&p.then(K)}}function Sd(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function f(f,h,l){for(var n,p,q=0,t=[],K=f.length,x=!1,v=[];q<K;)-1!=(n=f.indexOf(b,q))&&-1!=(p=f.indexOf(a,n+g))?(q!=n&&t.push(f.substring(q,n)),t.push(q=c(x=f.substring(n+g,p))),q.exp=x,q=p+k,x=!0):(q!=K&&t.push(f.substring(q)),q=K);(K=t.length)||(t.push(""),
K=1);if(l&&1<t.length)throw yc("noconcat",f);if(!h||x)return v.length=K,q=function(a){try{for(var b=0,c=K,g;b<c;b++){if("function"==typeof(g=t[b]))if(g=g(a),g=l?e.getTrusted(l,g):e.valueOf(g),null==g)g="";else switch(typeof g){case "string":break;case "number":g=""+g;break;default:g=ta(g)}v[b]=g}return v.join("")}catch(k){a=yc("interr",f,k.toString()),d(a)}},q.exp=f,q.parts=t,q}var g=b.length,k=a.length;f.startSymbol=function(){return b};f.endSymbol=function(){return a};return f}]}function Td(){this.$get=
["$rootScope","$window","$q",function(b,a,c){function d(d,g,k,m){var h=a.setInterval,l=a.clearInterval,n=c.defer(),p=n.promise,q=0,t=D(m)&&!m;k=D(k)?k:0;p.then(null,null,d);p.$$intervalId=h(function(){n.notify(q++);0<k&&q>=k&&(n.resolve(q),l(p.$$intervalId),delete e[p.$$intervalId]);t||b.$apply()},g);e[p.$$intervalId]=n;return p}var e={};d.cancel=function(b){return b&&b.$$intervalId in e?(e[b.$$intervalId].reject("canceled"),a.clearInterval(b.$$intervalId),delete e[b.$$intervalId],!0):!1};return d}]}
function bd(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a"},pluralCat:function(b){return 1===b?"one":"other"}}}}function Qb(b){b=b.split("/");for(var a=b.length;a--;)b[a]=jb(b[a]);return b.join("/")}function zc(b,a,c){b=ua(b,c);a.$$protocol=
b.protocol;a.$$host=b.hostname;a.$$port=Z(b.port)||xe[b.protocol]||null}function Ac(b,a,c){var d="/"!==b.charAt(0);d&&(b="/"+b);b=ua(b,c);a.$$path=decodeURIComponent(d&&"/"===b.pathname.charAt(0)?b.pathname.substring(1):b.pathname);a.$$search=ec(b.search);a.$$hash=decodeURIComponent(b.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function qa(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function cb(b){var a=b.indexOf("#");return-1==a?b:b.substr(0,a)}function Rb(b){return b.substr(0,
cb(b).lastIndexOf("/")+1)}function Bc(b,a){this.$$html5=!0;a=a||"";var c=Rb(b);zc(b,this,b);this.$$parse=function(a){var e=qa(c,a);if(!C(e))throw Sb("ipthprfx",a,c);Ac(e,this,b);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Cb(this.$$search),b=this.$$hash?"#"+jb(this.$$hash):"";this.$$url=Qb(this.$$path)+(a?"?"+a:"")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$rewrite=function(d){var e;if((e=qa(b,d))!==s)return d=e,(e=qa(a,e))!==s?c+(qa("/",e)||e):b+d;if((e=qa(c,
d))!==s)return c+e;if(c==d+"/")return c}}function Tb(b,a){var c=Rb(b);zc(b,this,b);this.$$parse=function(d){var e=qa(b,d)||qa(c,d),e="#"==e.charAt(0)?qa(a,e):this.$$html5?e:"";if(!C(e))throw Sb("ihshprfx",d,a);Ac(e,this,b);d=this.$$path;var f=/^\/[A-Z]:(\/.*)/;0===e.indexOf(b)&&(e=e.replace(b,""));f.exec(e)||(d=(e=f.exec(d))?e[1]:d);this.$$path=d;this.$$compose()};this.$$compose=function(){var c=Cb(this.$$search),e=this.$$hash?"#"+jb(this.$$hash):"";this.$$url=Qb(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=
b+(this.$$url?a+this.$$url:"")};this.$$rewrite=function(a){if(cb(b)==cb(a))return a}}function Ub(b,a){this.$$html5=!0;Tb.apply(this,arguments);var c=Rb(b);this.$$rewrite=function(d){var e;if(b==cb(d))return d;if(e=qa(c,d))return b+a+e;if(c===d+"/")return c};this.$$compose=function(){var c=Cb(this.$$search),e=this.$$hash?"#"+jb(this.$$hash):"";this.$$url=Qb(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+a+this.$$url}}function sb(b){return function(){return this[b]}}function Cc(b,a){return function(c){if(F(c))return this[b];
this[b]=a(c);this.$$compose();return this}}function Wd(){var b="",a=!1;this.hashPrefix=function(a){return D(a)?(b=a,this):b};this.html5Mode=function(b){return D(b)?(a=b,this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement",function(c,d,e,f){function g(a){c.$broadcast("$locationChangeSuccess",k.absUrl(),a)}var k,m,h=d.baseHref(),l=d.url(),n;a?(n=l.substring(0,l.indexOf("/",l.indexOf("//")+2))+(h||"/"),m=e.history?Bc:Ub):(n=cb(l),m=Tb);k=new m(n,"#"+b);k.$$parse(k.$$rewrite(l));var p=
/^\s*(javascript|mailto):/i;f.on("click",function(a){if(!a.ctrlKey&&!a.metaKey&&2!=a.which){for(var e=y(a.target);"a"!==M(e[0].nodeName);)if(e[0]===f[0]||!(e=e.parent())[0])return;var g=e.prop("href");T(g)&&"[object SVGAnimatedString]"===g.toString()&&(g=ua(g.animVal).href);if(!p.test(g)){if(m===Ub){var h=e.attr("href")||e.attr("xlink:href");if(0>h.indexOf("://"))if(g="#"+b,"/"==h[0])g=n+g+h;else if("#"==h[0])g=n+g+(k.path()||"/")+h;else{for(var l=k.path().split("/"),h=h.split("/"),q=0;q<h.length;q++)"."!=
h[q]&&(".."==h[q]?l.pop():h[q].length&&l.push(h[q]));g=n+g+l.join("/")}}l=k.$$rewrite(g);g&&(!e.attr("target")&&l&&!a.isDefaultPrevented())&&(a.preventDefault(),l!=d.url()&&(k.$$parse(l),c.$apply(),P.angular["ff-684208-preventDefault"]=!0))}}});k.absUrl()!=l&&d.url(k.absUrl(),!0);d.onUrlChange(function(a){k.absUrl()!=a&&(c.$evalAsync(function(){var b=k.absUrl();k.$$parse(a);c.$broadcast("$locationChangeStart",a,b).defaultPrevented?(k.$$parse(b),d.url(b)):g(b)}),c.$$phase||c.$digest())});var q=0;c.$watch(function(){var a=
d.url(),b=k.$$replace;q&&a==k.absUrl()||(q++,c.$evalAsync(function(){c.$broadcast("$locationChangeStart",k.absUrl(),a).defaultPrevented?k.$$parse(a):(d.url(k.absUrl(),b),g(a))}));k.$$replace=!1;return q});return k}]}function Xd(){var b=!0,a=this;this.debugEnabled=function(a){return D(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+
":"+a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||z;a=!1;try{a=!!e.apply}catch(m){}return a?function(){var a=[];r(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}function ja(b,a){if("__defineGetter__"===b||"__defineSetter__"===b||"__lookupGetter__"===b||"__lookupSetter__"===b||"__proto__"===
b)throw ka("isecfld",a);return b}function Oa(b,a){if(b){if(b.constructor===b)throw ka("isecfn",a);if(b.document&&b.location&&b.alert&&b.setInterval)throw ka("isecwindow",a);if(b.children&&(b.nodeName||b.prop&&b.attr&&b.find))throw ka("isecdom",a);if(b===Object)throw ka("isecobj",a);}return b}function tb(b,a,c,d,e){e=e||{};a=a.split(".");for(var f,g=0;1<a.length;g++){f=ja(a.shift(),d);var k=b[f];k||(k={},b[f]=k);b=k;b.then&&e.unwrapPromises&&(va(d),"$$v"in b||function(a){a.then(function(b){a.$$v=b})}(b),
b.$$v===s&&(b.$$v={}),b=b.$$v)}f=ja(a.shift(),d);Oa(b,d);Oa(b[f],d);return b[f]=c}function Dc(b,a,c,d,e,f,g){ja(b,f);ja(a,f);ja(c,f);ja(d,f);ja(e,f);return g.unwrapPromises?function(g,m){var h=m&&m.hasOwnProperty(b)?m:g,l;if(null==h)return h;(h=h[b])&&h.then&&(va(f),"$$v"in h||(l=h,l.$$v=s,l.then(function(a){l.$$v=a})),h=h.$$v);if(!a)return h;if(null==h)return s;(h=h[a])&&h.then&&(va(f),"$$v"in h||(l=h,l.$$v=s,l.then(function(a){l.$$v=a})),h=h.$$v);if(!c)return h;if(null==h)return s;(h=h[c])&&h.then&&
(va(f),"$$v"in h||(l=h,l.$$v=s,l.then(function(a){l.$$v=a})),h=h.$$v);if(!d)return h;if(null==h)return s;(h=h[d])&&h.then&&(va(f),"$$v"in h||(l=h,l.$$v=s,l.then(function(a){l.$$v=a})),h=h.$$v);if(!e)return h;if(null==h)return s;(h=h[e])&&h.then&&(va(f),"$$v"in h||(l=h,l.$$v=s,l.then(function(a){l.$$v=a})),h=h.$$v);return h}:function(f,g){var h=g&&g.hasOwnProperty(b)?g:f;if(null==h)return h;h=h[b];if(!a)return h;if(null==h)return s;h=h[a];if(!c)return h;if(null==h)return s;h=h[c];if(!d)return h;if(null==
h)return s;h=h[d];return e?null==h?s:h=h[e]:h}}function Ec(b,a,c){if(Vb.hasOwnProperty(b))return Vb[b];var d=b.split("."),e=d.length,f;if(a.csp)f=6>e?Dc(d[0],d[1],d[2],d[3],d[4],c,a):function(b,f){var g=0,k;do k=Dc(d[g++],d[g++],d[g++],d[g++],d[g++],c,a)(b,f),f=s,b=k;while(g<e);return k};else{var g="var p;\n";r(d,function(b,d){ja(b,c);g+="if(s == null) return undefined;\ns="+(d?"s":'((k&&k.hasOwnProperty("'+b+'"))?k:s)')+'["'+b+'"];\n'+(a.unwrapPromises?'if (s && s.then) {\n pw("'+c.replace(/(["\r\n])/g,
"\\$1")+'");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n':"")});var g=g+"return s;",k=new Function("s","k","pw",g);k.toString=$(g);f=a.unwrapPromises?function(a,b){return k(a,b,va)}:k}"hasOwnProperty"!==b&&(Vb[b]=f);return f}function Yd(){var b={},a={csp:!1,unwrapPromises:!1,logPromiseWarnings:!0};this.unwrapPromises=function(b){return D(b)?(a.unwrapPromises=!!b,this):a.unwrapPromises};this.logPromiseWarnings=function(b){return D(b)?(a.logPromiseWarnings=
b,this):a.logPromiseWarnings};this.$get=["$filter","$sniffer","$log",function(c,d,e){a.csp=d.csp;va=function(b){a.logPromiseWarnings&&!Fc.hasOwnProperty(b)&&(Fc[b]=!0,e.warn("[$parse] Promise found in the expression `"+b+"`. Automatic unwrapping of promises in Angular expressions is deprecated."))};return function(d){var e;switch(typeof d){case "string":if(b.hasOwnProperty(d))return b[d];e=new Wb(a);e=(new db(e,c,a)).parse(d);"hasOwnProperty"!==d&&(b[d]=e);return e;case "function":return d;default:return z}}}]}
function $d(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return ye(function(a){b.$evalAsync(a)},a)}]}function ye(b,a){function c(a){return a}function d(a){return g(a)}var e=function(){var g=[],h,l;return l={resolve:function(a){if(g){var c=g;g=s;h=f(a);c.length&&b(function(){for(var a,b=0,d=c.length;b<d;b++)a=c[b],h.then(a[0],a[1],a[2])})}},reject:function(a){l.resolve(k(a))},notify:function(a){if(g){var c=g;g.length&&b(function(){for(var b,d=0,e=c.length;d<e;d++)b=c[d],b[2](a)})}},
promise:{then:function(b,f,k){var l=e(),K=function(d){try{l.resolve((J(b)?b:c)(d))}catch(e){l.reject(e),a(e)}},x=function(b){try{l.resolve((J(f)?f:d)(b))}catch(c){l.reject(c),a(c)}},v=function(b){try{l.notify((J(k)?k:c)(b))}catch(d){a(d)}};g?g.push([K,x,v]):h.then(K,x,v);return l.promise},"catch":function(a){return this.then(null,a)},"finally":function(a){function b(a,c){var d=e();c?d.resolve(a):d.reject(a);return d.promise}function d(e,f){var g=null;try{g=(a||c)()}catch(k){return b(k,!1)}return g&&
J(g.then)?g.then(function(){return b(e,f)},function(a){return b(a,!1)}):b(e,f)}return this.then(function(a){return d(a,!0)},function(a){return d(a,!1)})}}}},f=function(a){return a&&J(a.then)?a:{then:function(c){var d=e();b(function(){d.resolve(c(a))});return d.promise}}},g=function(a){var b=e();b.reject(a);return b.promise},k=function(c){return{then:function(f,g){var k=e();b(function(){try{k.resolve((J(g)?g:d)(c))}catch(b){k.reject(b),a(b)}});return k.promise}}};return{defer:e,reject:g,when:function(k,
h,l,n){var p=e(),q,t=function(b){try{return(J(h)?h:c)(b)}catch(d){return a(d),g(d)}},K=function(b){try{return(J(l)?l:d)(b)}catch(c){return a(c),g(c)}},x=function(b){try{return(J(n)?n:c)(b)}catch(d){a(d)}};b(function(){f(k).then(function(a){q||(q=!0,p.resolve(f(a).then(t,K,x)))},function(a){q||(q=!0,p.resolve(K(a)))},function(a){q||p.notify(x(a))})});return p.promise},all:function(a){var b=e(),c=0,d=L(a)?[]:{};r(a,function(a,e){c++;f(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},
function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise}}}function ge(){this.$get=["$window","$timeout",function(b,a){var c=b.requestAnimationFrame||b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame,d=b.cancelAnimationFrame||b.webkitCancelAnimationFrame||b.mozCancelAnimationFrame||b.webkitCancelRequestAnimationFrame,e=!!c,f=e?function(a){var b=c(a);return function(){d(b)}}:function(b){var c=a(b,16.66,!1);return function(){a.cancel(c)}};f.supported=e;return f}]}
function Zd(){var b=10,a=w("$rootScope"),c=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$injector","$exceptionHandler","$parse","$browser",function(d,e,f,g){function k(){this.$id=gb();this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this["this"]=this.$root=this;this.$$destroyed=!1;this.$$asyncQueue=[];this.$$postDigestQueue=[];this.$$listeners={};this.$$listenerCount={};this.$$isolateBindings={}}
function m(b){if(p.$$phase)throw a("inprog",p.$$phase);p.$$phase=b}function h(a,b){var c=f(a);Va(c,b);return c}function l(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function n(){}k.prototype={constructor:k,$new:function(a){a?(a=new k,a.$root=this.$root,a.$$asyncQueue=this.$$asyncQueue,a.$$postDigestQueue=this.$$postDigestQueue):(this.$$childScopeClass||(this.$$childScopeClass=function(){this.$$watchers=this.$$nextSibling=this.$$childHead=
this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$id=gb();this.$$childScopeClass=null},this.$$childScopeClass.prototype=this),a=new this.$$childScopeClass);a["this"]=a;a.$parent=this;a.$$prevSibling=this.$$childTail;this.$$childHead?this.$$childTail=this.$$childTail.$$nextSibling=a:this.$$childHead=this.$$childTail=a;return a},$watch:function(a,b,d){var e=h(a,"watch"),f=this.$$watchers,g={fn:b,last:n,get:e,exp:a,eq:!!d};c=null;if(!J(b)){var k=h(b||z,"listener");g.fn=function(a,
b,c){k(c)}}if("string"==typeof a&&e.constant){var m=g.fn;g.fn=function(a,b,c){m.call(this,a,b,c);Ra(f,g)}}f||(f=this.$$watchers=[]);f.unshift(g);return function(){Ra(f,g);c=null}},$watchCollection:function(a,b){var c=this,d,e,g,k=1<b.length,h=0,m=f(a),l=[],p={},n=!0,r=0;return this.$watch(function(){d=m(c);var a,b,f;if(T(d))if(fb(d))for(e!==l&&(e=l,r=e.length=0,h++),a=d.length,r!==a&&(h++,e.length=r=a),b=0;b<a;b++)f=e[b]!==e[b]&&d[b]!==d[b],f||e[b]===d[b]||(h++,e[b]=d[b]);else{e!==p&&(e=p={},r=0,
h++);a=0;for(b in d)d.hasOwnProperty(b)&&(a++,e.hasOwnProperty(b)?(f=e[b]!==e[b]&&d[b]!==d[b],f||e[b]===d[b]||(h++,e[b]=d[b])):(r++,e[b]=d[b],h++));if(r>a)for(b in h++,e)e.hasOwnProperty(b)&&!d.hasOwnProperty(b)&&(r--,delete e[b])}else e!==d&&(e=d,h++);return h},function(){n?(n=!1,b(d,d,c)):b(d,g,c);if(k)if(T(d))if(fb(d)){g=Array(d.length);for(var a=0;a<d.length;a++)g[a]=d[a]}else for(a in g={},d)ib.call(d,a)&&(g[a]=d[a]);else g=d})},$digest:function(){var d,f,g,k,h=this.$$asyncQueue,l=this.$$postDigestQueue,
r,u,s=b,I,W=[],y,N,B;m("$digest");c=null;do{u=!1;for(I=this;h.length;){try{B=h.shift(),B.scope.$eval(B.expression)}catch(G){p.$$phase=null,e(G)}c=null}a:do{if(k=I.$$watchers)for(r=k.length;r--;)try{if(d=k[r])if((f=d.get(I))!==(g=d.last)&&!(d.eq?za(f,g):"number"===typeof f&&"number"===typeof g&&isNaN(f)&&isNaN(g)))u=!0,c=d,d.last=d.eq?Ha(f,null):f,d.fn(f,g===n?f:g,I),5>s&&(y=4-s,W[y]||(W[y]=[]),N=J(d.exp)?"fn: "+(d.exp.name||d.exp.toString()):d.exp,N+="; newVal: "+ta(f)+"; oldVal: "+ta(g),W[y].push(N));
else if(d===c){u=!1;break a}}catch(D){p.$$phase=null,e(D)}if(!(k=I.$$childHead||I!==this&&I.$$nextSibling))for(;I!==this&&!(k=I.$$nextSibling);)I=I.$parent}while(I=k);if((u||h.length)&&!s--)throw p.$$phase=null,a("infdig",b,ta(W));}while(u||h.length);for(p.$$phase=null;l.length;)try{l.shift()()}catch(w){e(w)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this!==p&&(r(this.$$listenerCount,Bb(null,l,this)),a.$$childHead==this&&(a.$$childHead=
this.$$nextSibling),a.$$childTail==this&&(a.$$childTail=this.$$prevSibling),this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling),this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling),this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=this.$root=null,this.$$listeners={},this.$$watchers=this.$$asyncQueue=this.$$postDigestQueue=[],this.$destroy=this.$digest=this.$apply=z,this.$on=this.$watch=function(){return z})}},$eval:function(a,
b){return f(a)(this,b)},$evalAsync:function(a){p.$$phase||p.$$asyncQueue.length||g.defer(function(){p.$$asyncQueue.length&&p.$digest()});this.$$asyncQueue.push({scope:this,expression:a})},$$postDigest:function(a){this.$$postDigestQueue.push(a)},$apply:function(a){try{return m("$apply"),this.$eval(a)}catch(b){e(b)}finally{p.$$phase=null;try{p.$digest()}catch(c){throw e(c),c;}}},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=
0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){c[Qa(c,b)]=null;l(e,1,a)}},$emit:function(a,b){var c=[],d,f=this,g=!1,k={name:a,targetScope:f,stopPropagation:function(){g=!0},preventDefault:function(){k.defaultPrevented=!0},defaultPrevented:!1},h=[k].concat(Aa.call(arguments,1)),m,l;do{d=f.$$listeners[a]||c;k.currentScope=f;m=0;for(l=d.length;m<l;m++)if(d[m])try{d[m].apply(null,h)}catch(p){e(p)}else d.splice(m,1),m--,l--;if(g)break;f=f.$parent}while(f);return k},$broadcast:function(a,
b){for(var c=this,d=this,f={name:a,targetScope:this,preventDefault:function(){f.defaultPrevented=!0},defaultPrevented:!1},g=[f].concat(Aa.call(arguments,1)),k,h;c=d;){f.currentScope=c;d=c.$$listeners[a]||[];k=0;for(h=d.length;k<h;k++)if(d[k])try{d[k].apply(null,g)}catch(m){e(m)}else d.splice(k,1),k--,h--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}return f}};var p=new k;return p}]}function cd(){var b=/^\s*(https?|ftp|mailto|tel|file):/,
a=/^\s*(https?|ftp|file):|data:image\//;this.aHrefSanitizationWhitelist=function(a){return D(a)?(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return D(b)?(a=b,this):a};this.$get=function(){return function(c,d){var e=d?a:b,f;if(!Q||8<=Q)if(f=ua(c).href,""!==f&&!f.match(e))return"unsafe:"+f;return c}}}function ze(b){if("self"===b)return b;if(C(b)){if(-1<b.indexOf("***"))throw wa("iwcard",b);b=b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08").replace("\\*\\*",".*").replace("\\*",
"[^:/.?&;]*");return RegExp("^"+b+"$")}if(hb(b))return RegExp("^"+b.source+"$");throw wa("imatcher");}function Gc(b){var a=[];D(b)&&r(b,function(b){a.push(ze(b))});return a}function be(){this.SCE_CONTEXTS=fa;var b=["self"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&(b=Gc(a));return b};this.resourceUrlBlacklist=function(b){arguments.length&&(a=Gc(b));return a};this.$get=["$injector",function(c){function d(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=
new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var e=function(a){throw wa("unsafe");};c.has("$sanitize")&&(e=c.get("$sanitize"));var f=d(),g={};g[fa.HTML]=d(f);g[fa.CSS]=d(f);g[fa.URL]=d(f);g[fa.JS]=d(f);g[fa.RESOURCE_URL]=d(g[fa.URL]);return{trustAs:function(a,b){var c=g.hasOwnProperty(a)?g[a]:null;if(!c)throw wa("icontext",a,b);if(null===b||b===s||""===b)return b;if("string"!==typeof b)throw wa("itype",
a);return new c(b)},getTrusted:function(c,d){if(null===d||d===s||""===d)return d;var f=g.hasOwnProperty(c)?g[c]:null;if(f&&d instanceof f)return d.$$unwrapTrustedValue();if(c===fa.RESOURCE_URL){var f=ua(d.toString()),l,n,p=!1;l=0;for(n=b.length;l<n;l++)if("self"===b[l]?Pb(f):b[l].exec(f.href)){p=!0;break}if(p)for(l=0,n=a.length;l<n;l++)if("self"===a[l]?Pb(f):a[l].exec(f.href)){p=!1;break}if(p)return d;throw wa("insecurl",d.toString());}if(c===fa.HTML)return e(d);throw wa("unsafe");},valueOf:function(a){return a instanceof
f?a.$$unwrapTrustedValue():a}}}]}function ae(){var b=!0;this.enabled=function(a){arguments.length&&(b=!!a);return b};this.$get=["$parse","$sniffer","$sceDelegate",function(a,c,d){if(b&&c.msie&&8>c.msieDocumentMode)throw wa("iequirks");var e=ga(fa);e.isEnabled=function(){return b};e.trustAs=d.trustAs;e.getTrusted=d.getTrusted;e.valueOf=d.valueOf;b||(e.trustAs=e.getTrusted=function(a,b){return b},e.valueOf=Ga);e.parseAs=function(b,c){var d=a(c);return d.literal&&d.constant?d:function(a,c){return e.getTrusted(b,
d(a,c))}};var f=e.parseAs,g=e.getTrusted,k=e.trustAs;r(fa,function(a,b){var c=M(b);e[Ya("parse_as_"+c)]=function(b){return f(a,b)};e[Ya("get_trusted_"+c)]=function(b){return g(a,b)};e[Ya("trust_as_"+c)]=function(b){return k(a,b)}});return e}]}function ce(){this.$get=["$window","$document",function(b,a){var c={},d=Z((/android (\d+)/.exec(M((b.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||{}).userAgent),f=a[0]||{},g=f.documentMode,k,m=/^(Moz|webkit|O|ms)(?=[A-Z])/,h=f.body&&f.body.style,
l=!1,n=!1;if(h){for(var p in h)if(l=m.exec(p)){k=l[0];k=k.substr(0,1).toUpperCase()+k.substr(1);break}k||(k="WebkitOpacity"in h&&"webkit");l=!!("transition"in h||k+"Transition"in h);n=!!("animation"in h||k+"Animation"in h);!d||l&&n||(l=C(f.body.style.webkitTransition),n=C(f.body.style.webkitAnimation))}return{history:!(!b.history||!b.history.pushState||4>d||e),hashchange:"onhashchange"in b&&(!g||7<g),hasEvent:function(a){if("input"==a&&9==Q)return!1;if(F(c[a])){var b=f.createElement("div");c[a]="on"+
a in b}return c[a]},csp:Wa(),vendorPrefix:k,transitions:l,animations:n,android:d,msie:Q,msieDocumentMode:g}}]}function ee(){this.$get=["$rootScope","$browser","$q","$exceptionHandler",function(b,a,c,d){function e(e,k,m){var h=c.defer(),l=h.promise,n=D(m)&&!m;k=a.defer(function(){try{h.resolve(e())}catch(a){h.reject(a),d(a)}finally{delete f[l.$$timeoutId]}n||b.$apply()},k);l.$$timeoutId=k;f[k]=h;return l}var f={};e.cancel=function(b){return b&&b.$$timeoutId in f?(f[b.$$timeoutId].reject("canceled"),
delete f[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return e}]}function ua(b,a){var c=b;Q&&(V.setAttribute("href",c),c=V.href);V.setAttribute("href",c);return{href:V.href,protocol:V.protocol?V.protocol.replace(/:$/,""):"",host:V.host,search:V.search?V.search.replace(/^\?/,""):"",hash:V.hash?V.hash.replace(/^#/,""):"",hostname:V.hostname,port:V.port,pathname:"/"===V.pathname.charAt(0)?V.pathname:"/"+V.pathname}}function Pb(b){b=C(b)?ua(b):b;return b.protocol===Hc.protocol&&b.host===Hc.host}
function fe(){this.$get=$(P)}function mc(b){function a(d,e){if(T(d)){var f={};r(d,function(b,c){f[c]=a(c,b)});return f}return b.factory(d+c,e)}var c="Filter";this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+c)}}];a("currency",Ic);a("date",Jc);a("filter",Ae);a("json",Be);a("limitTo",Ce);a("lowercase",De);a("number",Kc);a("orderBy",Lc);a("uppercase",Ee)}function Ae(){return function(b,a,c){if(!L(b))return b;var d=typeof c,e=[];e.check=function(a){for(var b=0;b<e.length;b++)if(!e[b](a))return!1;
return!0};"function"!==d&&(c="boolean"===d&&c?function(a,b){return Ua.equals(a,b)}:function(a,b){if(a&&b&&"object"===typeof a&&"object"===typeof b){for(var d in a)if("$"!==d.charAt(0)&&ib.call(a,d)&&c(a[d],b[d]))return!0;return!1}b=(""+b).toLowerCase();return-1<(""+a).toLowerCase().indexOf(b)});var f=function(a,b){if("string"==typeof b&&"!"===b.charAt(0))return!f(a,b.substr(1));switch(typeof a){case "boolean":case "number":case "string":return c(a,b);case "object":switch(typeof b){case "object":return c(a,
b);default:for(var d in a)if("$"!==d.charAt(0)&&f(a[d],b))return!0}return!1;case "array":for(d=0;d<a.length;d++)if(f(a[d],b))return!0;return!1;default:return!1}};switch(typeof a){case "boolean":case "number":case "string":a={$:a};case "object":for(var g in a)(function(b){"undefined"!==typeof a[b]&&e.push(function(c){return f("$"==b?c:c&&c[b],a[b])})})(g);break;case "function":e.push(a);break;default:return b}d=[];for(g=0;g<b.length;g++){var k=b[g];e.check(k)&&d.push(k)}return d}}function Ic(b){var a=
b.NUMBER_FORMATS;return function(b,d){F(d)&&(d=a.CURRENCY_SYM);return Mc(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,2).replace(/\u00A4/g,d)}}function Kc(b){var a=b.NUMBER_FORMATS;return function(b,d){return Mc(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function Mc(b,a,c,d,e){if(null==b||!isFinite(b)||T(b))return"";var f=0>b;b=Math.abs(b);var g=b+"",k="",m=[],h=!1;if(-1!==g.indexOf("e")){var l=g.match(/([\d\.]+)e(-?)(\d+)/);l&&"-"==l[2]&&l[3]>e+1?(g="0",b=0):(k=g,h=!0)}if(h)0<e&&(-1<b&&1>b)&&(k=
b.toFixed(e));else{g=(g.split(Nc)[1]||"").length;F(e)&&(e=Math.min(Math.max(a.minFrac,g),a.maxFrac));b=+(Math.round(+(b.toString()+"e"+e)).toString()+"e"+-e);b=(""+b).split(Nc);g=b[0];b=b[1]||"";var l=0,n=a.lgSize,p=a.gSize;if(g.length>=n+p)for(l=g.length-n,h=0;h<l;h++)0===(l-h)%p&&0!==h&&(k+=c),k+=g.charAt(h);for(h=l;h<g.length;h++)0===(g.length-h)%n&&0!==h&&(k+=c),k+=g.charAt(h);for(;b.length<e;)b+="0";e&&"0"!==e&&(k+=d+b.substr(0,e))}m.push(f?a.negPre:a.posPre);m.push(k);m.push(f?a.negSuf:a.posSuf);
return m.join("")}function Xb(b,a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function Y(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return Xb(e,a,d)}}function ub(b,a){return function(c,d){var e=c["get"+b](),f=Ia(a?"SHORT"+b:b);return d[f][e]}}function Jc(b){function a(a){var b;if(b=a.match(c)){a=new Date(0);var f=0,g=0,k=b[8]?a.setUTCFullYear:a.setFullYear,m=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=
Z(b[9]+b[10]),g=Z(b[9]+b[11]));k.call(a,Z(b[1]),Z(b[2])-1,Z(b[3]));f=Z(b[4]||0)-f;g=Z(b[5]||0)-g;k=Z(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));m.call(a,f,g,k,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e){var f="",g=[],k,m;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;C(c)&&(c=Fe.test(c)?Z(c):a(c));Ab(c)&&(c=new Date(c));if(!sa(c))return c;for(;e;)(m=Ge.exec(e))?(g=g.concat(Aa.call(m,1)),e=g.pop()):
(g.push(e),e=null);r(g,function(a){k=He[a];f+=k?k(c,b.DATETIME_FORMATS):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return f}}function Be(){return function(b){return ta(b,!0)}}function Ce(){return function(b,a){if(!L(b)&&!C(b))return b;a=Infinity===Math.abs(Number(a))?Number(a):Z(a);if(C(b))return a?0<=a?b.slice(0,a):b.slice(a,b.length):"";var c=[],d,e;a>b.length?a=b.length:a<-b.length&&(a=-b.length);0<a?(d=0,e=a):(d=b.length+a,e=b.length);for(;d<e;d++)c.push(b[d]);return c}}function Lc(b){return function(a,
c,d){function e(a,b){return Ta(b)?function(b,c){return a(c,b)}:a}function f(a,b){var c=typeof a,d=typeof b;return c==d?(sa(a)&&sa(b)&&(a=a.valueOf(),b=b.valueOf()),"string"==c&&(a=a.toLowerCase(),b=b.toLowerCase()),a===b?0:a<b?-1:1):c<d?-1:1}if(!L(a)||!c)return a;c=L(c)?c:[c];c=Vc(c,function(a){var c=!1,d=a||Ga;if(C(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))c="-"==a.charAt(0),a=a.substring(1);d=b(a);if(d.constant){var g=d();return e(function(a,b){return f(a[g],b[g])},c)}}return e(function(a,b){return f(d(a),
d(b))},c)});for(var g=[],k=0;k<a.length;k++)g.push(a[k]);return g.sort(e(function(a,b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(0!==e)return e}return 0},d))}}function xa(b){J(b)&&(b={link:b});b.restrict=b.restrict||"AC";return $(b)}function Oc(b,a,c,d){function e(a,c){c=c?"-"+kb(c,"-"):"";d.removeClass(b,(a?vb:wb)+c);d.addClass(b,(a?wb:vb)+c)}var f=this,g=b.parent().controller("form")||xb,k=0,m=f.$error={},h=[];f.$name=a.name||a.ngForm;f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;g.$addControl(f);
b.addClass(Pa);e(!0);f.$addControl=function(a){Ca(a.$name,"input");h.push(a);a.$name&&(f[a.$name]=a)};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];r(m,function(b,c){f.$setValidity(c,!0,a)});Ra(h,a)};f.$setValidity=function(a,b,c){var d=m[a];if(b)d&&(Ra(d,c),d.length||(k--,k||(e(b),f.$valid=!0,f.$invalid=!1),m[a]=!1,e(!0,a),g.$setValidity(a,!0,f)));else{k||e(b);if(d){if(-1!=Qa(d,c))return}else m[a]=d=[],k++,e(!1,a),g.$setValidity(a,!1,f);d.push(c);f.$valid=!1;f.$invalid=
!0}};f.$setDirty=function(){d.removeClass(b,Pa);d.addClass(b,yb);f.$dirty=!0;f.$pristine=!1;g.$setDirty()};f.$setPristine=function(){d.removeClass(b,yb);d.addClass(b,Pa);f.$dirty=!1;f.$pristine=!0;r(h,function(a){a.$setPristine()})}}function ra(b,a,c,d){b.$setValidity(a,c);return c?d:s}function Pc(b,a){var c,d;if(a)for(c=0;c<a.length;++c)if(d=a[c],b[d])return!0;return!1}function Ie(b,a,c,d,e){T(e)&&(b.$$hasNativeValidators=!0,b.$parsers.push(function(f){if(b.$error[a]||Pc(e,d)||!Pc(e,c))return f;
b.$setValidity(a,!1)}))}function zb(b,a,c,d,e,f){var g=a.prop(Je),k=a[0].placeholder,m={};d.$$validityState=g;if(!e.android){var h=!1;a.on("compositionstart",function(a){h=!0});a.on("compositionend",function(){h=!1;l()})}var l=function(e){if(!h){var f=a.val();if(Q&&"input"===(e||m).type&&a[0].placeholder!==k)k=a[0].placeholder;else if(Ta(c.ngTrim||"T")&&(f=aa(f)),e=g&&d.$$hasNativeValidators,d.$viewValue!==f||""===f&&e)b.$$phase?d.$setViewValue(f):b.$apply(function(){d.$setViewValue(f)})}};if(e.hasEvent("input"))a.on("input",
l);else{var n,p=function(){n||(n=f.defer(function(){l();n=null}))};a.on("keydown",function(a){a=a.keyCode;91===a||(15<a&&19>a||37<=a&&40>=a)||p()});if(e.hasEvent("paste"))a.on("paste cut",p)}a.on("change",l);d.$render=function(){a.val(d.$isEmpty(d.$viewValue)?"":d.$viewValue)};var q=c.ngPattern;q&&((e=q.match(/^\/(.*)\/([gim]*)$/))?(q=RegExp(e[1],e[2]),e=function(a){return ra(d,"pattern",d.$isEmpty(a)||q.test(a),a)}):e=function(c){var e=b.$eval(q);if(!e||!e.test)throw w("ngPattern")("noregexp",q,
e,ha(a));return ra(d,"pattern",d.$isEmpty(c)||e.test(c),c)},d.$formatters.push(e),d.$parsers.push(e));if(c.ngMinlength){var t=Z(c.ngMinlength);e=function(a){return ra(d,"minlength",d.$isEmpty(a)||a.length>=t,a)};d.$parsers.push(e);d.$formatters.push(e)}if(c.ngMaxlength){var r=Z(c.ngMaxlength);e=function(a){return ra(d,"maxlength",d.$isEmpty(a)||a.length<=r,a)};d.$parsers.push(e);d.$formatters.push(e)}}function Yb(b,a){b="ngClass"+b;return["$animate",function(c){function d(a,b){var c=[],d=0;a:for(;d<
a.length;d++){for(var e=a[d],l=0;l<b.length;l++)if(e==b[l])continue a;c.push(e)}return c}function e(a){if(!L(a)){if(C(a))return a.split(" ");if(T(a)){var b=[];r(a,function(a,c){a&&(b=b.concat(c.split(" ")))});return b}}return a}return{restrict:"AC",link:function(f,g,k){function m(a,b){var c=g.data("$classCounts")||{},d=[];r(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});g.data("$classCounts",c);return d.join(" ")}function h(b){if(!0===a||f.$index%2===a){var h=e(b||[]);if(!l){var q=
m(h,1);k.$addClass(q)}else if(!za(b,l)){var r=e(l),q=d(h,r),h=d(r,h),h=m(h,-1),q=m(q,1);0===q.length?c.removeClass(g,h):0===h.length?c.addClass(g,q):c.setClass(g,q,h)}}l=ga(b)}var l;f.$watch(k[b],h,!0);k.$observe("class",function(a){h(f.$eval(k[b]))});"ngClass"!==b&&f.$watch("$index",function(c,d){var g=c&1;if(g!==(d&1)){var h=e(f.$eval(k[b]));g===a?(g=m(h,1),k.$addClass(g)):(g=m(h,-1),k.$removeClass(g))}})}}}]}var Je="validity",M=function(b){return C(b)?b.toLowerCase():b},ib=Object.prototype.hasOwnProperty,
Ia=function(b){return C(b)?b.toUpperCase():b},Q,y,Da,Aa=[].slice,Ke=[].push,ya=Object.prototype.toString,Sa=w("ng"),Ua=P.angular||(P.angular={}),Xa,Ma,la=["0","0","0"];Q=Z((/msie (\d+)/.exec(M(navigator.userAgent))||[])[1]);isNaN(Q)&&(Q=Z((/trident\/.*; rv:(\d+)/.exec(M(navigator.userAgent))||[])[1]));z.$inject=[];Ga.$inject=[];var L=function(){return J(Array.isArray)?Array.isArray:function(b){return"[object Array]"===ya.call(b)}}(),aa=function(){return String.prototype.trim?function(b){return C(b)?
b.trim():b}:function(b){return C(b)?b.replace(/^\s\s*/,"").replace(/\s\s*$/,""):b}}();Ma=9>Q?function(b){b=b.nodeName?b:b[0];return b.scopeName&&"HTML"!=b.scopeName?Ia(b.scopeName+":"+b.nodeName):b.nodeName}:function(b){return b.nodeName?b.nodeName:b[0].nodeName};var Wa=function(){if(D(Wa.isActive_))return Wa.isActive_;var b=!(!X.querySelector("[ng-csp]")&&!X.querySelector("[data-ng-csp]"));if(!b)try{new Function("")}catch(a){b=!0}return Wa.isActive_=b},Yc=/[A-Z]/g,ad={full:"1.2.22",major:1,minor:2,
dot:22,codeName:"finicky-pleasure"};S.expando="ng339";var $a=S.cache={},ne=1,rb=P.document.addEventListener?function(b,a,c){b.addEventListener(a,c,!1)}:function(b,a,c){b.attachEvent("on"+a,c)},Za=P.document.removeEventListener?function(b,a,c){b.removeEventListener(a,c,!1)}:function(b,a,c){b.detachEvent("on"+a,c)};S._data=function(b){return this.cache[b[this.expando]]||{}};var ie=/([\:\-\_]+(.))/g,je=/^moz([A-Z])/,Hb=w("jqLite"),ke=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,Ib=/<|&#?\w+;/,le=/<([\w:]+)/,me=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
ba={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ba.optgroup=ba.option;ba.tbody=ba.tfoot=ba.colgroup=ba.caption=ba.thead;ba.th=ba.td;var La=S.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;"complete"===X.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),S(P).on("load",a))},
toString:function(){var b=[];r(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=b?y(this[b]):y(this[this.length+b])},length:0,push:Ke,sort:[].sort,splice:[].splice},ob={};r("multiple selected checked disabled readOnly required open".split(" "),function(b){ob[M(b)]=b});var rc={};r("input select option textarea button form details".split(" "),function(b){rc[Ia(b)]=!0});r({data:Mb,removeData:Lb},function(b,a){S[a]=b});r({data:Mb,inheritedData:nb,scope:function(b){return y.data(b,
"$scope")||nb(b.parentNode||b,["$isolateScope","$scope"])},isolateScope:function(b){return y.data(b,"$isolateScope")||y.data(b,"$isolateScopeNoTemplate")},controller:oc,injector:function(b){return nb(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:Nb,css:function(b,a,c){a=Ya(a);if(D(c))b.style[a]=c;else{var d;8>=Q&&(d=b.currentStyle&&b.currentStyle[a],""===d&&(d="auto"));d=d||b.style[a];8>=Q&&(d=""===d?s:d);return d}},attr:function(b,a,c){var d=M(a);if(ob[d])if(D(c))c?(b[a]=
!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||z).specified?d:s;else if(D(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),null===b?s:b},prop:function(b,a,c){if(D(c))b[a]=c;else return b[a]},text:function(){function b(b,d){var e=a[b.nodeType];if(F(d))return e?b[e]:"";b[e]=d}var a=[];9>Q?(a[1]="innerText",a[3]="nodeValue"):a[1]=a[3]="textContent";b.$dv="";return b}(),val:function(b,a){if(F(a)){if("SELECT"===Ma(b)&&b.multiple){var c=
[];r(b.options,function(a){a.selected&&c.push(a.value||a.text)});return 0===c.length?null:c}return b.value}b.value=a},html:function(b,a){if(F(a))return b.innerHTML;for(var c=0,d=b.childNodes;c<d.length;c++)Ja(d[c]);b.innerHTML=a},empty:pc},function(b,a){S.prototype[a]=function(a,d){var e,f,g=this.length;if(b!==pc&&(2==b.length&&b!==Nb&&b!==oc?a:d)===s){if(T(a)){for(e=0;e<g;e++)if(b===Mb)b(this[e],a);else for(f in a)b(this[e],f,a[f]);return this}e=b.$dv;g=e===s?Math.min(g,1):g;for(f=0;f<g;f++){var k=
b(this[f],a,d);e=e?e+k:k}return e}for(e=0;e<g;e++)b(this[e],a,d);return this}});r({removeData:Lb,dealoc:Ja,on:function a(c,d,e,f){if(D(f))throw Hb("onargs");var g=ma(c,"events"),k=ma(c,"handle");g||ma(c,"events",g={});k||ma(c,"handle",k=oe(c,g));r(d.split(" "),function(d){var f=g[d];if(!f){if("mouseenter"==d||"mouseleave"==d){var l=X.body.contains||X.body.compareDocumentPosition?function(a,c){var d=9===a.nodeType?a.documentElement:a,e=c&&c.parentNode;return a===e||!!(e&&1===e.nodeType&&(d.contains?
d.contains(e):a.compareDocumentPosition&&a.compareDocumentPosition(e)&16))}:function(a,c){if(c)for(;c=c.parentNode;)if(c===a)return!0;return!1};g[d]=[];a(c,{mouseleave:"mouseout",mouseenter:"mouseover"}[d],function(a){var c=a.relatedTarget;c&&(c===this||l(this,c))||k(a,d)})}else rb(c,d,k),g[d]=[];f=g[d]}f.push(e)})},off:nc,one:function(a,c,d){a=y(a);a.on(c,function f(){a.off(c,d);a.off(c,f)});a.on(c,d)},replaceWith:function(a,c){var d,e=a.parentNode;Ja(a);r(new S(c),function(c){d?e.insertBefore(c,
d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];r(a.childNodes,function(a){1===a.nodeType&&c.push(a)});return c},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,c){r(new S(c),function(c){1!==a.nodeType&&11!==a.nodeType||a.appendChild(c)})},prepend:function(a,c){if(1===a.nodeType){var d=a.firstChild;r(new S(c),function(c){a.insertBefore(c,d)})}},wrap:function(a,c){c=y(c)[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:function(a){Ja(a);
var c=a.parentNode;c&&c.removeChild(a)},after:function(a,c){var d=a,e=a.parentNode;r(new S(c),function(a){e.insertBefore(a,d.nextSibling);d=a})},addClass:mb,removeClass:lb,toggleClass:function(a,c,d){c&&r(c.split(" "),function(c){var f=d;F(f)&&(f=!Nb(a,c));(f?mb:lb)(a,c)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){if(a.nextElementSibling)return a.nextElementSibling;for(a=a.nextSibling;null!=a&&1!==a.nodeType;)a=a.nextSibling;return a},find:function(a,c){return a.getElementsByTagName?
a.getElementsByTagName(c):[]},clone:Kb,triggerHandler:function(a,c,d){var e,f;e=c.type||c;var g=(ma(a,"events")||{})[e];g&&(e={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopPropagation:z,type:e,target:a},c.type&&(e=E(e,c)),c=ga(g),f=d?[e].concat(d):[e],r(c,function(c){c.apply(a,f)}))}},function(a,c){S.prototype[c]=function(c,e,f){for(var g,k=0;k<this.length;k++)F(g)?(g=a(this[k],c,e,f),D(g)&&(g=y(g))):Jb(g,a(this[k],c,e,f));
return D(g)?g:this};S.prototype.bind=S.prototype.on;S.prototype.unbind=S.prototype.off});ab.prototype={put:function(a,c){this[Ka(a,this.nextUid)]=c},get:function(a){return this[Ka(a,this.nextUid)]},remove:function(a){var c=this[a=Ka(a,this.nextUid)];delete this[a];return c}};var qe=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,re=/,/,se=/^\s*(_?)(\S+?)\1\s*$/,pe=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,bb=w("$injector"),Le=w("$animate"),Md=["$provide",function(a){this.$$selectors={};this.register=function(c,d){var e=
c+"-animation";if(c&&"."!=c.charAt(0))throw Le("notcsel",c);this.$$selectors[c.substr(1)]=e;a.factory(e,d)};this.classNameFilter=function(a){1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null);return this.$$classNameFilter};this.$get=["$timeout","$$asyncCallback",function(a,d){return{enter:function(a,c,g,k){g?g.after(a):(c&&c[0]||(c=g.parent()),c.append(a));k&&d(k)},leave:function(a,c){a.remove();c&&d(c)},move:function(a,c,d,k){this.enter(a,c,d,k)},addClass:function(a,c,g){c=
C(c)?c:L(c)?c.join(" "):"";r(a,function(a){mb(a,c)});g&&d(g)},removeClass:function(a,c,g){c=C(c)?c:L(c)?c.join(" "):"";r(a,function(a){lb(a,c)});g&&d(g)},setClass:function(a,c,g,k){r(a,function(a){mb(a,c);lb(a,g)});k&&d(k)},enabled:z}}]}],ia=w("$compile");ic.$inject=["$provide","$$sanitizeUriProvider"];var ue=/^(x[\:\-_]|data[\:\-_])/i,yc=w("$interpolate"),Me=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,xe={http:80,https:443,ftp:21},Sb=w("$location");Ub.prototype=Tb.prototype=Bc.prototype={$$html5:!1,$$replace:!1,
absUrl:sb("$$absUrl"),url:function(a,c){if(F(a))return this.$$url;var d=Me.exec(a);d[1]&&this.path(decodeURIComponent(d[1]));(d[2]||d[1])&&this.search(d[3]||"");this.hash(d[5]||"",c);return this},protocol:sb("$$protocol"),host:sb("$$host"),port:sb("$$port"),path:Cc("$$path",function(a){return"/"==a.charAt(0)?a:"/"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;case 1:if(C(a))this.$$search=ec(a);else if(T(a))r(a,function(c,e){null==c&&delete a[e]}),this.$$search=a;else throw Sb("isrcharg");
break;default:F(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:Cc("$$hash",Ga),replace:function(){this.$$replace=!0;return this}};var ka=w("$parse"),Fc={},va,Ne=Function.prototype.call,Oe=Function.prototype.apply,Qc=Function.prototype.bind,eb={"null":function(){return null},"true":function(){return!0},"false":function(){return!1},undefined:z,"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return D(d)?D(e)?d+e:d:D(e)?e:s},"-":function(a,c,d,e){d=d(a,c);e=e(a,c);
return(D(d)?d:0)-(D(e)?e:0)},"*":function(a,c,d,e){return d(a,c)*e(a,c)},"/":function(a,c,d,e){return d(a,c)/e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"^":function(a,c,d,e){return d(a,c)^e(a,c)},"=":z,"===":function(a,c,d,e){return d(a,c)===e(a,c)},"!==":function(a,c,d,e){return d(a,c)!==e(a,c)},"==":function(a,c,d,e){return d(a,c)==e(a,c)},"!=":function(a,c,d,e){return d(a,c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,
c,d,e){return d(a,c)<=e(a,c)},">=":function(a,c,d,e){return d(a,c)>=e(a,c)},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)},"||":function(a,c,d,e){return d(a,c)||e(a,c)},"&":function(a,c,d,e){return d(a,c)&e(a,c)},"|":function(a,c,d,e){return e(a,c)(a,c,d(a,c))},"!":function(a,c,d){return!d(a,c)}},Pe={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},Wb=function(a){this.options=a};Wb.prototype={constructor:Wb,lex:function(a){this.text=a;this.index=0;this.ch=s;this.lastCh=":";for(this.tokens=[];this.index<
this.text.length;){this.ch=this.text.charAt(this.index);if(this.is("\"'"))this.readString(this.ch);else if(this.isNumber(this.ch)||this.is(".")&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(this.ch))this.readIdent();else if(this.is("(){}[].,;:?"))this.tokens.push({index:this.index,text:this.ch}),this.index++;else if(this.isWhitespace(this.ch)){this.index++;continue}else{a=this.ch+this.peek();var c=a+this.peek(2),d=eb[this.ch],e=eb[a],f=eb[c];f?(this.tokens.push({index:this.index,
text:c,fn:f}),this.index+=3):e?(this.tokens.push({index:this.index,text:a,fn:e}),this.index+=2):d?(this.tokens.push({index:this.index,text:this.ch,fn:d}),this.index+=1):this.throwError("Unexpected next character ",this.index,this.index+1)}this.lastCh=this.ch}return this.tokens},is:function(a){return-1!==a.indexOf(this.ch)},was:function(a){return-1!==a.indexOf(this.lastCh)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=
a&&"9">=a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=d||this.index;c=D(c)?"s "+c+"-"+this.index+" ["+this.text.substring(c,d)+"]":" "+d;throw ka("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=M(this.text.charAt(this.index));
if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==d&&this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||e&&this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}a*=1;this.tokens.push({index:c,text:a,literal:!0,constant:!0,fn:function(){return a}})},readIdent:function(){for(var a=this,c="",d=this.index,e,f,g,k;this.index<this.text.length;){k=this.text.charAt(this.index);
if("."===k||this.isIdent(k)||this.isNumber(k))"."===k&&(e=this.index),c+=k;else break;this.index++}if(e)for(f=this.index;f<this.text.length;){k=this.text.charAt(f);if("("===k){g=c.substr(e-d+1);c=c.substr(0,e-d);this.index=f;break}if(this.isWhitespace(k))f++;else break}d={index:d,text:c};if(eb.hasOwnProperty(c))d.fn=eb[c],d.literal=!0,d.constant=!0;else{var m=Ec(c,this.options,this.text);d.fn=E(function(a,c){return m(a,c)},{assign:function(d,e){return tb(d,c,e,a.text,a.options)}})}this.tokens.push(d);
g&&(this.tokens.push({index:e,text:"."}),this.tokens.push({index:e+1,text:g}))},readString:function(a){var c=this.index;this.index++;for(var d="",e=a,f=!1;this.index<this.text.length;){var g=this.text.charAt(this.index),e=e+g;if(f)"u"===g?(f=this.text.substring(this.index+1,this.index+5),f.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+f+"]"),this.index+=4,d+=String.fromCharCode(parseInt(f,16))):d+=Pe[g]||g,f=!1;else if("\\"===g)f=!0;else{if(g===a){this.index++;this.tokens.push({index:c,
text:e,string:d,literal:!0,constant:!0,fn:function(){return d}});return}d+=g}this.index++}this.throwError("Unterminated quote",c)}};var db=function(a,c,d){this.lexer=a;this.$filter=c;this.options=d};db.ZERO=E(function(){return 0},{constant:!0});db.prototype={constructor:db,parse:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.statements();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);a.literal=!!a.literal;a.constant=!!a.constant;return a},primary:function(){var a;
if(this.expect("("))a=this.filterChain(),this.consume(")");else if(this.expect("["))a=this.arrayDeclaration();else if(this.expect("{"))a=this.object();else{var c=this.expect();(a=c.fn)||this.throwError("not a primary expression",c);a.literal=!!c.literal;a.constant=!!c.constant}for(var d;c=this.expect("(","[",".");)"("===c.text?(a=this.functionCall(a,d),d=null):"["===c.text?(d=a,a=this.objectIndex(a)):"."===c.text?(d=a,a=this.fieldAccess(a)):this.throwError("IMPOSSIBLE");return a},throwError:function(a,
c){throw ka("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index));},peekToken:function(){if(0===this.tokens.length)throw ka("ueoe",this.text);return this.tokens[0]},peek:function(a,c,d,e){if(0<this.tokens.length){var f=this.tokens[0],g=f.text;if(g===a||g===c||g===d||g===e||!(a||c||d||e))return f}return!1},expect:function(a,c,d,e){return(a=this.peek(a,c,d,e))?(this.tokens.shift(),a):!1},consume:function(a){this.expect(a)||this.throwError("is unexpected, expecting ["+a+"]",this.peek())},
unaryFn:function(a,c){return E(function(d,e){return a(d,e,c)},{constant:c.constant})},ternaryFn:function(a,c,d){return E(function(e,f){return a(e,f)?c(e,f):d(e,f)},{constant:a.constant&&c.constant&&d.constant})},binaryFn:function(a,c,d){return E(function(e,f){return c(e,f,a,d)},{constant:a.constant&&d.constant})},statements:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.filterChain()),!this.expect(";"))return 1===a.length?a[0]:function(c,d){for(var e,f=
0;f<a.length;f++){var g=a[f];g&&(e=g(c,d))}return e}},filterChain:function(){for(var a=this.expression(),c;;)if(c=this.expect("|"))a=this.binaryFn(a,c.fn,this.filter());else return a},filter:function(){for(var a=this.expect(),c=this.$filter(a.text),d=[];;)if(a=this.expect(":"))d.push(this.expression());else{var e=function(a,e,k){k=[k];for(var m=0;m<d.length;m++)k.push(d[m](a,e));return c.apply(a,k)};return function(){return e}}},expression:function(){return this.assignment()},assignment:function(){var a=
this.ternary(),c,d;return(d=this.expect("="))?(a.assign||this.throwError("implies assignment but ["+this.text.substring(0,d.index)+"] can not be assigned to",d),c=this.ternary(),function(d,f){return a.assign(d,c(d,f),f)}):a},ternary:function(){var a=this.logicalOR(),c,d;if(this.expect("?")){c=this.assignment();if(d=this.expect(":"))return this.ternaryFn(a,c,this.assignment());this.throwError("expected :",d)}else return a},logicalOR:function(){for(var a=this.logicalAND(),c;;)if(c=this.expect("||"))a=
this.binaryFn(a,c.fn,this.logicalAND());else return a},logicalAND:function(){var a=this.equality(),c;if(c=this.expect("&&"))a=this.binaryFn(a,c.fn,this.logicalAND());return a},equality:function(){var a=this.relational(),c;if(c=this.expect("==","!=","===","!=="))a=this.binaryFn(a,c.fn,this.equality());return a},relational:function(){var a=this.additive(),c;if(c=this.expect("<",">","<=",">="))a=this.binaryFn(a,c.fn,this.relational());return a},additive:function(){for(var a=this.multiplicative(),c;c=
this.expect("+","-");)a=this.binaryFn(a,c.fn,this.multiplicative());return a},multiplicative:function(){for(var a=this.unary(),c;c=this.expect("*","/","%");)a=this.binaryFn(a,c.fn,this.unary());return a},unary:function(){var a;return this.expect("+")?this.primary():(a=this.expect("-"))?this.binaryFn(db.ZERO,a.fn,this.unary()):(a=this.expect("!"))?this.unaryFn(a.fn,this.unary()):this.primary()},fieldAccess:function(a){var c=this,d=this.expect().text,e=Ec(d,this.options,this.text);return E(function(c,
d,k){return e(k||a(c,d))},{assign:function(e,g,k){(k=a(e,k))||a.assign(e,k={});return tb(k,d,g,c.text,c.options)}})},objectIndex:function(a){var c=this,d=this.expression();this.consume("]");return E(function(e,f){var g=a(e,f),k=d(e,f),m;ja(k,c.text);if(!g)return s;(g=Oa(g[k],c.text))&&(g.then&&c.options.unwrapPromises)&&(m=g,"$$v"in g||(m.$$v=s,m.then(function(a){m.$$v=a})),g=g.$$v);return g},{assign:function(e,f,g){var k=ja(d(e,g),c.text);(g=Oa(a(e,g),c.text))||a.assign(e,g={});return g[k]=f}})},
functionCall:function(a,c){var d=[];if(")"!==this.peekToken().text){do d.push(this.expression());while(this.expect(","))}this.consume(")");var e=this;return function(f,g){for(var k=[],m=c?c(f,g):f,h=0;h<d.length;h++)k.push(d[h](f,g));h=a(f,g,m)||z;Oa(m,e.text);var l=e.text;if(h){if(h.constructor===h)throw ka("isecfn",l);if(h===Ne||h===Oe||Qc&&h===Qc)throw ka("isecff",l);}k=h.apply?h.apply(m,k):h(k[0],k[1],k[2],k[3],k[4]);return Oa(k,e.text)}},arrayDeclaration:function(){var a=[],c=!0;if("]"!==this.peekToken().text){do{if(this.peek("]"))break;
var d=this.expression();a.push(d);d.constant||(c=!1)}while(this.expect(","))}this.consume("]");return E(function(c,d){for(var g=[],k=0;k<a.length;k++)g.push(a[k](c,d));return g},{literal:!0,constant:c})},object:function(){var a=[],c=!0;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;var d=this.expect(),d=d.string||d.text;this.consume(":");var e=this.expression();a.push({key:d,value:e});e.constant||(c=!1)}while(this.expect(","))}this.consume("}");return E(function(c,d){for(var e={},m=0;m<
a.length;m++){var h=a[m];e[h.key]=h.value(c,d)}return e},{literal:!0,constant:c})}};var Vb={},wa=w("$sce"),fa={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},V=X.createElement("a"),Hc=ua(P.location.href,!0);mc.$inject=["$provide"];Ic.$inject=["$locale"];Kc.$inject=["$locale"];var Nc=".",He={yyyy:Y("FullYear",4),yy:Y("FullYear",2,0,!0),y:Y("FullYear",1),MMMM:ub("Month"),MMM:ub("Month",!0),MM:Y("Month",2,1),M:Y("Month",1,1),dd:Y("Date",2),d:Y("Date",1),HH:Y("Hours",2),H:Y("Hours",
1),hh:Y("Hours",2,-12),h:Y("Hours",1,-12),mm:Y("Minutes",2),m:Y("Minutes",1),ss:Y("Seconds",2),s:Y("Seconds",1),sss:Y("Milliseconds",3),EEEE:ub("Day"),EEE:ub("Day",!0),a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a){a=-1*a.getTimezoneOffset();return a=(0<=a?"+":"")+(Xb(Math[0<a?"floor":"ceil"](a/60),2)+Xb(Math.abs(a%60),2))}},Ge=/((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,Fe=/^\-?\d+$/;Jc.$inject=["$locale"];var De=$(M),Ee=$(Ia);Lc.$inject=
["$parse"];var dd=$({restrict:"E",compile:function(a,c){8>=Q&&(c.href||c.name||c.$set("href",""),a.append(X.createComment("IE fix")));if(!c.href&&!c.xlinkHref&&!c.name)return function(a,c){var f="[object SVGAnimatedString]"===ya.call(c.prop("href"))?"xlink:href":"href";c.on("click",function(a){c.attr(f)||a.preventDefault()})}}}),Fb={};r(ob,function(a,c){if("multiple"!=a){var d=na("ng-"+c);Fb[d]=function(){return{priority:100,link:function(a,f,g){a.$watch(g[d],function(a){g.$set(c,!!a)})}}}}});r(["src",
"srcset","href"],function(a){var c=na("ng-"+a);Fb[c]=function(){return{priority:99,link:function(d,e,f){var g=a,k=a;"href"===a&&"[object SVGAnimatedString]"===ya.call(e.prop("href"))&&(k="xlinkHref",f.$attr[k]="xlink:href",g=null);f.$observe(c,function(a){a&&(f.$set(k,a),Q&&g&&e.prop(g,f[k]))})}}}});var xb={$addControl:z,$removeControl:z,$setValidity:z,$setDirty:z,$setPristine:z};Oc.$inject=["$element","$attrs","$scope","$animate"];var Rc=function(a){return["$timeout",function(c){return{name:"form",
restrict:a?"EAC":"E",controller:Oc,compile:function(){return{pre:function(a,e,f,g){if(!f.action){var k=function(a){a.preventDefault?a.preventDefault():a.returnValue=!1};rb(e[0],"submit",k);e.on("$destroy",function(){c(function(){Za(e[0],"submit",k)},0,!1)})}var m=e.parent().controller("form"),h=f.name||f.ngForm;h&&tb(a,h,g,h);if(m)e.on("$destroy",function(){m.$removeControl(g);h&&tb(a,h,s,h);E(g,xb)})}}}}}]},ed=Rc(),rd=Rc(!0),Qe=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
Re=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,Se=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,Sc={text:zb,number:function(a,c,d,e,f,g){zb(a,c,d,e,f,g);e.$parsers.push(function(a){var c=e.$isEmpty(a);if(c||Se.test(a))return e.$setValidity("number",!0),""===a?null:c?a:parseFloat(a);e.$setValidity("number",!1);return s});Ie(e,"number",Te,null,e.$$validityState);e.$formatters.push(function(a){return e.$isEmpty(a)?"":""+a});d.min&&(a=function(a){var c=parseFloat(d.min);
return ra(e,"min",e.$isEmpty(a)||a>=c,a)},e.$parsers.push(a),e.$formatters.push(a));d.max&&(a=function(a){var c=parseFloat(d.max);return ra(e,"max",e.$isEmpty(a)||a<=c,a)},e.$parsers.push(a),e.$formatters.push(a));e.$formatters.push(function(a){return ra(e,"number",e.$isEmpty(a)||Ab(a),a)})},url:function(a,c,d,e,f,g){zb(a,c,d,e,f,g);a=function(a){return ra(e,"url",e.$isEmpty(a)||Qe.test(a),a)};e.$formatters.push(a);e.$parsers.push(a)},email:function(a,c,d,e,f,g){zb(a,c,d,e,f,g);a=function(a){return ra(e,
"email",e.$isEmpty(a)||Re.test(a),a)};e.$formatters.push(a);e.$parsers.push(a)},radio:function(a,c,d,e){F(d.name)&&c.attr("name",gb());c.on("click",function(){c[0].checked&&a.$apply(function(){e.$setViewValue(d.value)})});e.$render=function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,c,d,e){var f=d.ngTrueValue,g=d.ngFalseValue;C(f)||(f=!0);C(g)||(g=!1);c.on("click",function(){a.$apply(function(){e.$setViewValue(c[0].checked)})});e.$render=function(){c[0].checked=
e.$viewValue};e.$isEmpty=function(a){return a!==f};e.$formatters.push(function(a){return a===f});e.$parsers.push(function(a){return a?f:g})},hidden:z,button:z,submit:z,reset:z,file:z},Te=["badInput"],jc=["$browser","$sniffer",function(a,c){return{restrict:"E",require:"?ngModel",link:function(d,e,f,g){g&&(Sc[M(f.type)]||Sc.text)(d,e,f,g,c,a)}}}],wb="ng-valid",vb="ng-invalid",Pa="ng-pristine",yb="ng-dirty",Ue=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate",function(a,c,d,e,f,g){function k(a,
c){c=c?"-"+kb(c,"-"):"";g.removeClass(e,(a?vb:wb)+c);g.addClass(e,(a?wb:vb)+c)}this.$modelValue=this.$viewValue=Number.NaN;this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$name=d.name;var m=f(d.ngModel),h=m.assign;if(!h)throw w("ngModel")("nonassign",d.ngModel,ha(e));this.$render=z;this.$isEmpty=function(a){return F(a)||""===a||null===a||a!==a};var l=e.inheritedData("$formController")||xb,n=0,p=this.$error={};
e.addClass(Pa);k(!0);this.$setValidity=function(a,c){p[a]!==!c&&(c?(p[a]&&n--,n||(k(!0),this.$valid=!0,this.$invalid=!1)):(k(!1),this.$invalid=!0,this.$valid=!1,n++),p[a]=!c,k(c,a),l.$setValidity(a,c,this))};this.$setPristine=function(){this.$dirty=!1;this.$pristine=!0;g.removeClass(e,yb);g.addClass(e,Pa)};this.$setViewValue=function(d){this.$viewValue=d;this.$pristine&&(this.$dirty=!0,this.$pristine=!1,g.removeClass(e,Pa),g.addClass(e,yb),l.$setDirty());r(this.$parsers,function(a){d=a(d)});this.$modelValue!==
d&&(this.$modelValue=d,h(a,d),r(this.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}}))};var q=this;a.$watch(function(){var c=m(a);if(q.$modelValue!==c){var d=q.$formatters,e=d.length;for(q.$modelValue=c;e--;)c=d[e](c);q.$viewValue!==c&&(q.$viewValue=c,q.$render())}return c})}],Gd=function(){return{require:["ngModel","^?form"],controller:Ue,link:function(a,c,d,e){var f=e[0],g=e[1]||xb;g.$addControl(f);a.$on("$destroy",function(){g.$removeControl(f)})}}},Id=$({require:"ngModel",link:function(a,
c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),kc=function(){return{require:"?ngModel",link:function(a,c,d,e){if(e){d.required=!0;var f=function(a){if(d.required&&e.$isEmpty(a))e.$setValidity("required",!1);else return e.$setValidity("required",!0),a};e.$formatters.push(f);e.$parsers.unshift(f);d.$observe("required",function(){f(e.$viewValue)})}}}},Hd=function(){return{require:"ngModel",link:function(a,c,d,e){var f=(a=/\/(.*)\//.exec(d.ngList))&&RegExp(a[1])||d.ngList||",";
e.$parsers.push(function(a){if(!F(a)){var c=[];a&&r(a.split(f),function(a){a&&c.push(aa(a))});return c}});e.$formatters.push(function(a){return L(a)?a.join(", "):s});e.$isEmpty=function(a){return!a||!a.length}}}},Ve=/^(true|false|\d+)$/,Jd=function(){return{priority:100,compile:function(a,c){return Ve.test(c.ngValue)?function(a,c,f){f.$set("value",a.$eval(f.ngValue))}:function(a,c,f){a.$watch(f.ngValue,function(a){f.$set("value",a)})}}}},jd=xa({compile:function(a){a.addClass("ng-binding");return function(a,
d,e){d.data("$binding",e.ngBind);a.$watch(e.ngBind,function(a){d.text(a==s?"":a)})}}}),ld=["$interpolate",function(a){return function(c,d,e){c=a(d.attr(e.$attr.ngBindTemplate));d.addClass("ng-binding").data("$binding",c);e.$observe("ngBindTemplate",function(a){d.text(a)})}}],kd=["$sce","$parse",function(a,c){return{compile:function(d){d.addClass("ng-binding");return function(d,f,g){f.data("$binding",g.ngBindHtml);var k=c(g.ngBindHtml);d.$watch(function(){return(k(d)||"").toString()},function(c){f.html(a.getTrustedHtml(k(d))||
"")})}}}}],md=Yb("",!0),od=Yb("Odd",0),nd=Yb("Even",1),pd=xa({compile:function(a,c){c.$set("ngCloak",s);a.removeClass("ng-cloak")}}),qd=[function(){return{scope:!0,controller:"@",priority:500}}],lc={};r("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var c=na("ng-"+a);lc[c]=["$parse",function(d){return{compile:function(e,f){var g=d(f[c]);return function(c,d){d.on(M(a),function(a){c.$apply(function(){g(c,
{$event:a})})})}}}}]});var td=["$animate",function(a){return{transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,f,g){var k,m,h;c.$watch(e.ngIf,function(f){Ta(f)?m||(m=c.$new(),g(m,function(c){c[c.length++]=X.createComment(" end ngIf: "+e.ngIf+" ");k={clone:c};a.enter(c,d.parent(),d)})):(h&&(h.remove(),h=null),m&&(m.$destroy(),m=null),k&&(h=Eb(k.clone),a.leave(h,function(){h=null}),k=null))})}}}],ud=["$http","$templateCache","$anchorScroll","$animate","$sce",function(a,
c,d,e,f){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:Ua.noop,compile:function(g,k){var m=k.ngInclude||k.src,h=k.onload||"",l=k.autoscroll;return function(g,k,q,r,K){var x=0,v,A,s,u=function(){A&&(A.remove(),A=null);v&&(v.$destroy(),v=null);s&&(e.leave(s,function(){A=null}),A=s,s=null)};g.$watch(f.parseAsResourceUrl(m),function(f){var m=function(){!D(l)||l&&!g.$eval(l)||d()},q=++x;f?(a.get(f,{cache:c}).success(function(a){if(q===x){var c=g.$new();r.template=a;a=K(c,
function(a){u();e.enter(a,null,k,m)});v=c;s=a;v.$emit("$includeContentLoaded");g.$eval(h)}}).error(function(){q===x&&u()}),g.$emit("$includeContentRequested")):(u(),r.template=null)})}}}}],Kd=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(c,d,e,f){d.html(f.template);a(d.contents())(c)}}}],vd=xa({priority:450,compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),wd=xa({terminal:!0,priority:1E3}),xd=["$locale","$interpolate",function(a,c){var d=
/{}/g;return{restrict:"EA",link:function(e,f,g){var k=g.count,m=g.$attr.when&&f.attr(g.$attr.when),h=g.offset||0,l=e.$eval(m)||{},n={},p=c.startSymbol(),q=c.endSymbol(),t=/^when(Minus)?(.+)$/;r(g,function(a,c){t.test(c)&&(l[M(c.replace("when","").replace("Minus","-"))]=f.attr(g.$attr[c]))});r(l,function(a,e){n[e]=c(a.replace(d,p+k+"-"+h+q))});e.$watch(function(){var c=parseFloat(e.$eval(k));if(isNaN(c))return"";c in l||(c=a.pluralCat(c-h));return n[c](e,f,!0)},function(a){f.text(a)})}}}],yd=["$parse",
"$animate",function(a,c){var d=w("ngRepeat");return{transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,link:function(e,f,g,k,m){var h=g.ngRepeat,l=h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/),n,p,q,t,s,x,v={$id:Ka};if(!l)throw d("iexp",h);g=l[1];k=l[2];(l=l[3])?(n=a(l),p=function(a,c,d){x&&(v[x]=a);v[s]=c;v.$index=d;return n(e,v)}):(q=function(a,c){return Ka(c)},t=function(a){return a});l=g.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);if(!l)throw d("iidexp",
g);s=l[3]||l[1];x=l[2];var A={};e.$watchCollection(k,function(a){var g,k,l=f[0],n,v={},D,B,G,w,C,z,F=[];if(fb(a))C=a,n=p||q;else{n=p||t;C=[];for(G in a)a.hasOwnProperty(G)&&"$"!=G.charAt(0)&&C.push(G);C.sort()}D=C.length;k=F.length=C.length;for(g=0;g<k;g++)if(G=a===C?g:C[g],w=a[G],w=n(G,w,g),Ca(w,"`track by` id"),A.hasOwnProperty(w))z=A[w],delete A[w],v[w]=z,F[g]=z;else{if(v.hasOwnProperty(w))throw r(F,function(a){a&&a.scope&&(A[a.id]=a)}),d("dupes",h,w);F[g]={id:w};v[w]=!1}for(G in A)A.hasOwnProperty(G)&&
(z=A[G],g=Eb(z.clone),c.leave(g),r(g,function(a){a.$$NG_REMOVED=!0}),z.scope.$destroy());g=0;for(k=C.length;g<k;g++){G=a===C?g:C[g];w=a[G];z=F[g];F[g-1]&&(l=F[g-1].clone[F[g-1].clone.length-1]);if(z.scope){B=z.scope;n=l;do n=n.nextSibling;while(n&&n.$$NG_REMOVED);z.clone[0]!=n&&c.move(Eb(z.clone),null,y(l));l=z.clone[z.clone.length-1]}else B=e.$new();B[s]=w;x&&(B[x]=G);B.$index=g;B.$first=0===g;B.$last=g===D-1;B.$middle=!(B.$first||B.$last);B.$odd=!(B.$even=0===(g&1));z.scope||m(B,function(a){a[a.length++]=
X.createComment(" end ngRepeat: "+h+" ");c.enter(a,null,y(l));l=a;z.scope=B;z.clone=a;v[z.id]=z})}A=v})}}}],zd=["$animate",function(a){return function(c,d,e){c.$watch(e.ngShow,function(c){a[Ta(c)?"removeClass":"addClass"](d,"ng-hide")})}}],sd=["$animate",function(a){return function(c,d,e){c.$watch(e.ngHide,function(c){a[Ta(c)?"addClass":"removeClass"](d,"ng-hide")})}}],Ad=xa(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&r(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),Bd=["$animate",
function(a){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(c,d,e,f){var g=[],k=[],m=[],h=[];c.$watch(e.ngSwitch||e.on,function(d){var n,p;n=0;for(p=m.length;n<p;++n)m[n].remove();n=m.length=0;for(p=h.length;n<p;++n){var q=k[n];h[n].$destroy();m[n]=q;a.leave(q,function(){m.splice(n,1)})}k.length=0;h.length=0;if(g=f.cases["!"+d]||f.cases["?"])c.$eval(e.change),r(g,function(d){var e=c.$new();h.push(e);d.transclude(e,function(c){var e=d.element;k.push(c);
a.enter(c,e.parent(),e)})})})}}}],Cd=xa({transclude:"element",priority:800,require:"^ngSwitch",link:function(a,c,d,e,f){e.cases["!"+d.ngSwitchWhen]=e.cases["!"+d.ngSwitchWhen]||[];e.cases["!"+d.ngSwitchWhen].push({transclude:f,element:c})}}),Dd=xa({transclude:"element",priority:800,require:"^ngSwitch",link:function(a,c,d,e,f){e.cases["?"]=e.cases["?"]||[];e.cases["?"].push({transclude:f,element:c})}}),Fd=xa({link:function(a,c,d,e,f){if(!f)throw w("ngTransclude")("orphan",ha(c));f(function(a){c.empty();
c.append(a)})}}),fd=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,d){"text/ng-template"==d.type&&a.put(d.id,c[0].text)}}}],We=w("ngOptions"),Ed=$({terminal:!0}),gd=["$compile","$parse",function(a,c){var d=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,e={$setViewValue:z};return{restrict:"E",require:["select","?ngModel"],
controller:["$element","$scope","$attrs",function(a,c,d){var m=this,h={},l=e,n;m.databound=d.ngModel;m.init=function(a,c,d){l=a;n=d};m.addOption=function(c){Ca(c,'"option value"');h[c]=!0;l.$viewValue==c&&(a.val(c),n.parent()&&n.remove())};m.removeOption=function(a){this.hasOption(a)&&(delete h[a],l.$viewValue==a&&this.renderUnknownOption(a))};m.renderUnknownOption=function(c){c="? "+Ka(c)+" ?";n.val(c);a.prepend(n);a.val(c);n.prop("selected",!0)};m.hasOption=function(a){return h.hasOwnProperty(a)};
c.$on("$destroy",function(){m.renderUnknownOption=z})}],link:function(e,g,k,m){function h(a,c,d,e){d.$render=function(){var a=d.$viewValue;e.hasOption(a)?(z.parent()&&z.remove(),c.val(a),""===a&&x.prop("selected",!0)):F(a)&&x?c.val(""):e.renderUnknownOption(a)};c.on("change",function(){a.$apply(function(){z.parent()&&z.remove();d.$setViewValue(c.val())})})}function l(a,c,d){var e;d.$render=function(){var a=new ab(d.$viewValue);r(c.find("option"),function(c){c.selected=D(a.get(c.value))})};a.$watch(function(){za(e,
d.$viewValue)||(e=ga(d.$viewValue),d.$render())});c.on("change",function(){a.$apply(function(){var a=[];r(c.find("option"),function(c){c.selected&&a.push(c.value)});d.$setViewValue(a)})})}function n(e,f,g){function k(){var a={"":[]},c=[""],d,h,s,t,u;s=g.$modelValue;t=z(e)||[];var C=n?Zb(t):t,F,O,B;O={};B=!1;if(q)if(h=g.$modelValue,x&&L(h))for(B=new ab([]),d={},u=0;u<h.length;u++)d[m]=h[u],B.put(x(e,d),h[u]);else B=new ab(h);u=B;var E,J;for(B=0;F=C.length,B<F;B++){h=B;if(n){h=C[B];if("$"===h.charAt(0))continue;
O[n]=h}O[m]=t[h];d=p(e,O)||"";(h=a[d])||(h=a[d]=[],c.push(d));q?d=D(u.remove(x?x(e,O):r(e,O))):(x?(d={},d[m]=s,d=x(e,d)===x(e,O)):d=s===r(e,O),u=u||d);E=l(e,O);E=D(E)?E:"";h.push({id:x?x(e,O):n?C[B]:B,label:E,selected:d})}q||(w||null===s?a[""].unshift({id:"",label:"",selected:!u}):u||a[""].unshift({id:"?",label:"",selected:!0}));O=0;for(C=c.length;O<C;O++){d=c[O];h=a[d];y.length<=O?(s={element:A.clone().attr("label",d),label:h.label},t=[s],y.push(t),f.append(s.element)):(t=y[O],s=t[0],s.label!=d&&
s.element.attr("label",s.label=d));E=null;B=0;for(F=h.length;B<F;B++)d=h[B],(u=t[B+1])?(E=u.element,u.label!==d.label&&E.text(u.label=d.label),u.id!==d.id&&E.val(u.id=d.id),E[0].selected!==d.selected&&(E.prop("selected",u.selected=d.selected),Q&&E.prop("selected",u.selected))):(""===d.id&&w?J=w:(J=v.clone()).val(d.id).prop("selected",d.selected).attr("selected",d.selected).text(d.label),t.push({element:J,label:d.label,id:d.id,selected:d.selected}),E?E.after(J):s.element.append(J),E=J);for(B++;t.length>
B;)t.pop().element.remove()}for(;y.length>O;)y.pop()[0].element.remove()}var h;if(!(h=t.match(d)))throw We("iexp",t,ha(f));var l=c(h[2]||h[1]),m=h[4]||h[6],n=h[5],p=c(h[3]||""),r=c(h[2]?h[1]:m),z=c(h[7]),x=h[8]?c(h[8]):null,y=[[{element:f,label:""}]];w&&(a(w)(e),w.removeClass("ng-scope"),w.remove());f.empty();f.on("change",function(){e.$apply(function(){var a,c=z(e)||[],d={},h,l,p,t,u,w,v;if(q)for(l=[],t=0,w=y.length;t<w;t++)for(a=y[t],p=1,u=a.length;p<u;p++){if((h=a[p].element)[0].selected){h=h.val();
n&&(d[n]=h);if(x)for(v=0;v<c.length&&(d[m]=c[v],x(e,d)!=h);v++);else d[m]=c[h];l.push(r(e,d))}}else if(h=f.val(),"?"==h)l=s;else if(""===h)l=null;else if(x)for(v=0;v<c.length;v++){if(d[m]=c[v],x(e,d)==h){l=r(e,d);break}}else d[m]=c[h],n&&(d[n]=h),l=r(e,d);g.$setViewValue(l);k()})});g.$render=k;e.$watchCollection(z,k);q&&e.$watchCollection(function(){return g.$modelValue},k)}if(m[1]){var p=m[0];m=m[1];var q=k.multiple,t=k.ngOptions,w=!1,x,v=y(X.createElement("option")),A=y(X.createElement("optgroup")),
z=v.clone();k=0;for(var u=g.children(),C=u.length;k<C;k++)if(""===u[k].value){x=w=u.eq(k);break}p.init(m,w,z);q&&(m.$isEmpty=function(a){return!a||0===a.length});t?n(e,g,m):q?l(e,g,m):h(e,g,m,p)}}}}],id=["$interpolate",function(a){var c={addOption:z,removeOption:z};return{restrict:"E",priority:100,compile:function(d,e){if(F(e.value)){var f=a(d.text(),!0);f||e.$set("value",d.text())}return function(a,d,e){var h=d.parent(),l=h.data("$selectController")||h.parent().data("$selectController");l&&l.databound?
d.prop("selected",!1):l=c;f?a.$watch(f,function(a,c){e.$set("value",a);a!==c&&l.removeOption(c);l.addOption(a)}):l.addOption(e.value);d.on("$destroy",function(){l.removeOption(e.value)})}}}}],hd=$({restrict:"E",terminal:!0});P.angular.bootstrap?console.log("WARNING: Tried to load angular more than once."):((Da=P.jQuery)&&Da.fn.on?(y=Da,E(Da.fn,{scope:La.scope,isolateScope:La.isolateScope,controller:La.controller,injector:La.injector,inheritedData:La.inheritedData}),Gb("remove",!0,!0,!1),Gb("empty",
!1,!1,!1),Gb("html",!1,!1,!0)):y=S,Ua.element=y,$c(Ua),y(X).ready(function(){Xc(X,fc)}))})(window,document);!window.angular.$$csp()&&window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}.ng-animate-block-transitions{transition:0s all!important;-webkit-transition:0s all!important;}.ng-hide-add-active,.ng-hide-remove{display:block!important;}</style>');
;
;
/*! angular-route.min.js */ 
;
;
/*
AngularJS v1.2.22
(c) 2010-2014 Google, Inc. http://angularjs.org
License: MIT
*/
(function(n,e,A){'use strict';function x(s,g,h){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",link:function(a,c,b,f,w){function y(){p&&(p.remove(),p=null);k&&(k.$destroy(),k=null);l&&(h.leave(l,function(){p=null}),p=l,l=null)}function v(){var b=s.current&&s.current.locals;if(e.isDefined(b&&b.$template)){var b=a.$new(),d=s.current;l=w(b,function(d){h.enter(d,null,l||c,function(){!e.isDefined(t)||t&&!a.$eval(t)||g()});y()});k=d.scope=b;k.$emit("$viewContentLoaded");k.$eval(u)}else y()}
var k,l,p,t=b.autoscroll,u=b.onload||"";a.$on("$routeChangeSuccess",v);v()}}}function z(e,g,h){return{restrict:"ECA",priority:-400,link:function(a,c){var b=h.current,f=b.locals;c.html(f.$template);var w=e(c.contents());b.controller&&(f.$scope=a,f=g(b.controller,f),b.controllerAs&&(a[b.controllerAs]=f),c.data("$ngControllerController",f),c.children().data("$ngControllerController",f));w(a)}}}n=e.module("ngRoute",["ng"]).provider("$route",function(){function s(a,c){return e.extend(new (e.extend(function(){},
{prototype:a})),c)}function g(a,e){var b=e.caseInsensitiveMatch,f={originalPath:a,regexp:a},h=f.keys=[];a=a.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)([\?\*])?/g,function(a,e,b,c){a="?"===c?c:null;c="*"===c?c:null;h.push({name:b,optional:!!a});e=e||"";return""+(a?"":e)+"(?:"+(a?e:"")+(c&&"(.+?)"||"([^/]+)")+(a||"")+")"+(a||"")}).replace(/([\/$\*])/g,"\\$1");f.regexp=RegExp("^"+a+"$",b?"i":"");return f}var h={};this.when=function(a,c){h[a]=e.extend({reloadOnSearch:!0},c,a&&g(a,c));if(a){var b=
"/"==a[a.length-1]?a.substr(0,a.length-1):a+"/";h[b]=e.extend({redirectTo:a},g(b,c))}return this};this.otherwise=function(a){this.when(null,a);return this};this.$get=["$rootScope","$location","$routeParams","$q","$injector","$http","$templateCache","$sce",function(a,c,b,f,g,n,v,k){function l(){var d=p(),m=r.current;if(d&&m&&d.$$route===m.$$route&&e.equals(d.pathParams,m.pathParams)&&!d.reloadOnSearch&&!u)m.params=d.params,e.copy(m.params,b),a.$broadcast("$routeUpdate",m);else if(d||m)u=!1,a.$broadcast("$routeChangeStart",
d,m),(r.current=d)&&d.redirectTo&&(e.isString(d.redirectTo)?c.path(t(d.redirectTo,d.params)).search(d.params).replace():c.url(d.redirectTo(d.pathParams,c.path(),c.search())).replace()),f.when(d).then(function(){if(d){var a=e.extend({},d.resolve),c,b;e.forEach(a,function(d,c){a[c]=e.isString(d)?g.get(d):g.invoke(d)});e.isDefined(c=d.template)?e.isFunction(c)&&(c=c(d.params)):e.isDefined(b=d.templateUrl)&&(e.isFunction(b)&&(b=b(d.params)),b=k.getTrustedResourceUrl(b),e.isDefined(b)&&(d.loadedTemplateUrl=
b,c=n.get(b,{cache:v}).then(function(a){return a.data})));e.isDefined(c)&&(a.$template=c);return f.all(a)}}).then(function(c){d==r.current&&(d&&(d.locals=c,e.copy(d.params,b)),a.$broadcast("$routeChangeSuccess",d,m))},function(c){d==r.current&&a.$broadcast("$routeChangeError",d,m,c)})}function p(){var a,b;e.forEach(h,function(f,h){var q;if(q=!b){var g=c.path();q=f.keys;var l={};if(f.regexp)if(g=f.regexp.exec(g)){for(var k=1,p=g.length;k<p;++k){var n=q[k-1],r=g[k];n&&r&&(l[n.name]=r)}q=l}else q=null;
else q=null;q=a=q}q&&(b=s(f,{params:e.extend({},c.search(),a),pathParams:a}),b.$$route=f)});return b||h[null]&&s(h[null],{params:{},pathParams:{}})}function t(a,c){var b=[];e.forEach((a||"").split(":"),function(a,d){if(0===d)b.push(a);else{var e=a.match(/(\w+)(.*)/),f=e[1];b.push(c[f]);b.push(e[2]||"");delete c[f]}});return b.join("")}var u=!1,r={routes:h,reload:function(){u=!0;a.$evalAsync(l)}};a.$on("$locationChangeSuccess",l);return r}]});n.provider("$routeParams",function(){this.$get=function(){return{}}});
n.directive("ngView",x);n.directive("ngView",z);x.$inject=["$route","$anchorScroll","$animate"];z.$inject=["$compile","$controller","$route"]})(window,window.angular);
;
;
/*! angular-resource.min.js */ 
;
;
/*
AngularJS v1.2.22
(c) 2010-2014 Google, Inc. http://angularjs.org
License: MIT
*/
(function(H,a,A){'use strict';function D(p,g){g=g||{};a.forEach(g,function(a,c){delete g[c]});for(var c in p)!p.hasOwnProperty(c)||"$"===c.charAt(0)&&"$"===c.charAt(1)||(g[c]=p[c]);return g}var v=a.$$minErr("$resource"),C=/^(\.[a-zA-Z_$][0-9a-zA-Z_$]*)+$/;a.module("ngResource",["ng"]).factory("$resource",["$http","$q",function(p,g){function c(a,c){this.template=a;this.defaults=c||{};this.urlParams={}}function t(n,w,l){function r(h,d){var e={};d=x({},w,d);s(d,function(b,d){u(b)&&(b=b());var k;if(b&&
b.charAt&&"@"==b.charAt(0)){k=h;var a=b.substr(1);if(null==a||""===a||"hasOwnProperty"===a||!C.test("."+a))throw v("badmember",a);for(var a=a.split("."),f=0,c=a.length;f<c&&k!==A;f++){var g=a[f];k=null!==k?k[g]:A}}else k=b;e[d]=k});return e}function e(a){return a.resource}function f(a){D(a||{},this)}var F=new c(n);l=x({},B,l);s(l,function(h,d){var c=/^(POST|PUT|PATCH)$/i.test(h.method);f[d]=function(b,d,k,w){var q={},n,l,y;switch(arguments.length){case 4:y=w,l=k;case 3:case 2:if(u(d)){if(u(b)){l=
b;y=d;break}l=d;y=k}else{q=b;n=d;l=k;break}case 1:u(b)?l=b:c?n=b:q=b;break;case 0:break;default:throw v("badargs",arguments.length);}var t=this instanceof f,m=t?n:h.isArray?[]:new f(n),z={},B=h.interceptor&&h.interceptor.response||e,C=h.interceptor&&h.interceptor.responseError||A;s(h,function(a,b){"params"!=b&&("isArray"!=b&&"interceptor"!=b)&&(z[b]=G(a))});c&&(z.data=n);F.setUrlParams(z,x({},r(n,h.params||{}),q),h.url);q=p(z).then(function(b){var d=b.data,k=m.$promise;if(d){if(a.isArray(d)!==!!h.isArray)throw v("badcfg",
h.isArray?"array":"object",a.isArray(d)?"array":"object");h.isArray?(m.length=0,s(d,function(b){"object"===typeof b?m.push(new f(b)):m.push(b)})):(D(d,m),m.$promise=k)}m.$resolved=!0;b.resource=m;return b},function(b){m.$resolved=!0;(y||E)(b);return g.reject(b)});q=q.then(function(b){var a=B(b);(l||E)(a,b.headers);return a},C);return t?q:(m.$promise=q,m.$resolved=!1,m)};f.prototype["$"+d]=function(b,a,k){u(b)&&(k=a,a=b,b={});b=f[d].call(this,b,this,a,k);return b.$promise||b}});f.bind=function(a){return t(n,
x({},w,a),l)};return f}var B={get:{method:"GET"},save:{method:"POST"},query:{method:"GET",isArray:!0},remove:{method:"DELETE"},"delete":{method:"DELETE"}},E=a.noop,s=a.forEach,x=a.extend,G=a.copy,u=a.isFunction;c.prototype={setUrlParams:function(c,g,l){var r=this,e=l||r.template,f,p,h=r.urlParams={};s(e.split(/\W/),function(a){if("hasOwnProperty"===a)throw v("badname");!/^\d+$/.test(a)&&(a&&RegExp("(^|[^\\\\]):"+a+"(\\W|$)").test(e))&&(h[a]=!0)});e=e.replace(/\\:/g,":");g=g||{};s(r.urlParams,function(d,
c){f=g.hasOwnProperty(c)?g[c]:r.defaults[c];a.isDefined(f)&&null!==f?(p=encodeURIComponent(f).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"%20").replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+"),e=e.replace(RegExp(":"+c+"(\\W|$)","g"),function(a,c){return p+c})):e=e.replace(RegExp("(/?):"+c+"(\\W|$)","g"),function(a,c,d){return"/"==d.charAt(0)?d:c+d})});e=e.replace(/\/+$/,"")||"/";e=e.replace(/\/\.(?=\w+($|\?))/,".");c.url=e.replace(/\/\\\./,
"/.");s(g,function(a,e){r.urlParams[e]||(c.params=c.params||{},c.params[e]=a)})}};return t}])})(window,window.angular);
;
;
/*! angular-sanitize.min.js */ 
;
;
/*
AngularJS v1.2.22
(c) 2010-2014 Google, Inc. http://angularjs.org
License: MIT
*/
(function(q,g,r){'use strict';function F(a){var d=[];t(d,g.noop).chars(a);return d.join("")}function m(a){var d={};a=a.split(",");var c;for(c=0;c<a.length;c++)d[a[c]]=!0;return d}function G(a,d){function c(a,b,c,h){b=g.lowercase(b);if(u[b])for(;f.last()&&v[f.last()];)e("",f.last());w[b]&&f.last()==b&&e("",b);(h=x[b]||!!h)||f.push(b);var n={};c.replace(H,function(a,b,d,c,e){n[b]=s(d||c||e||"")});d.start&&d.start(b,n,h)}function e(a,b){var c=0,e;if(b=g.lowercase(b))for(c=f.length-1;0<=c&&f[c]!=b;c--);
if(0<=c){for(e=f.length-1;e>=c;e--)d.end&&d.end(f[e]);f.length=c}}"string"!==typeof a&&(a=null===a||"undefined"===typeof a?"":""+a);var b,l,f=[],n=a,h;for(f.last=function(){return f[f.length-1]};a;){h="";l=!0;if(f.last()&&y[f.last()])a=a.replace(RegExp("(.*)<\\s*\\/\\s*"+f.last()+"[^>]*>","i"),function(a,b){b=b.replace(I,"$1").replace(J,"$1");d.chars&&d.chars(s(b));return""}),e("",f.last());else{if(0===a.indexOf("\x3c!--"))b=a.indexOf("--",4),0<=b&&a.lastIndexOf("--\x3e",b)===b&&(d.comment&&d.comment(a.substring(4,
b)),a=a.substring(b+3),l=!1);else if(z.test(a)){if(b=a.match(z))a=a.replace(b[0],""),l=!1}else if(K.test(a)){if(b=a.match(A))a=a.substring(b[0].length),b[0].replace(A,e),l=!1}else L.test(a)&&((b=a.match(B))?(b[4]&&(a=a.substring(b[0].length),b[0].replace(B,c)),l=!1):(h+="<",a=a.substring(1)));l&&(b=a.indexOf("<"),h+=0>b?a:a.substring(0,b),a=0>b?"":a.substring(b),d.chars&&d.chars(s(h)))}if(a==n)throw M("badparse",a);n=a}e()}function s(a){if(!a)return"";var d=N.exec(a);a=d[1];var c=d[3];if(d=d[2])p.innerHTML=
d.replace(/</g,"&lt;"),d="textContent"in p?p.textContent:p.innerText;return a+d+c}function C(a){return a.replace(/&/g,"&amp;").replace(O,function(a){var c=a.charCodeAt(0);a=a.charCodeAt(1);return"&#"+(1024*(c-55296)+(a-56320)+65536)+";"}).replace(P,function(a){return"&#"+a.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}function t(a,d){var c=!1,e=g.bind(a,a.push);return{start:function(a,l,f){a=g.lowercase(a);!c&&y[a]&&(c=a);c||!0!==D[a]||(e("<"),e(a),g.forEach(l,function(c,f){var k=
g.lowercase(f),l="img"===a&&"src"===k||"background"===k;!0!==Q[k]||!0===E[k]&&!d(c,l)||(e(" "),e(f),e('="'),e(C(c)),e('"'))}),e(f?"/>":">"))},end:function(a){a=g.lowercase(a);c||!0!==D[a]||(e("</"),e(a),e(">"));a==c&&(c=!1)},chars:function(a){c||e(C(a))}}}var M=g.$$minErr("$sanitize"),B=/^<((?:[a-zA-Z])[\w:-]*)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*(>?)/,A=/^<\/\s*([\w:-]+)[^>]*>/,H=/([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,L=/^</,
K=/^<\//,I=/\x3c!--(.*?)--\x3e/g,z=/<!DOCTYPE([^>]*?)>/i,J=/<!\[CDATA\[(.*?)]]\x3e/g,O=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,P=/([^\#-~| |!])/g,x=m("area,br,col,hr,img,wbr");q=m("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr");r=m("rp,rt");var w=g.extend({},r,q),u=g.extend({},q,m("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")),v=g.extend({},r,m("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),
y=m("script,style"),D=g.extend({},x,u,v,w),E=m("background,cite,href,longdesc,src,usemap"),Q=g.extend({},E,m("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,target,title,type,valign,value,vspace,width")),p=document.createElement("pre"),N=/^(\s*)([\s\S]*?)(\s*)$/;g.module("ngSanitize",[]).provider("$sanitize",
function(){this.$get=["$$sanitizeUri",function(a){return function(d){var c=[];G(d,t(c,function(c,b){return!/^unsafe/.test(a(c,b))}));return c.join("")}}]});g.module("ngSanitize").filter("linky",["$sanitize",function(a){var d=/((ftp|https?):\/\/|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>]/,c=/^mailto:/;return function(e,b){function l(a){a&&k.push(F(a))}function f(a,c){k.push("<a ");g.isDefined(b)&&(k.push('target="'),k.push(b),k.push('" '));k.push('href="');k.push(a);k.push('">');l(c);k.push("</a>")}
if(!e)return e;for(var n,h=e,k=[],m,p;n=h.match(d);)m=n[0],n[2]==n[3]&&(m="mailto:"+m),p=n.index,l(h.substr(0,p)),f(m,n[0].replace(c,"")),h=h.substring(p+n[0].length);l(h);return a(k.join(""))}}])})(window,window.angular);
;
;
/*! angular-ui.min.js */ 
;
;
/**
* AngularUI - The companion suite for AngularJS
* @version v0.4.0 - 2013-02-15
* @link http://angular-ui.github.com
* @license MIT License, http://www.opensource.org/licenses/MIT
*/
angular.module("ui.config",[]).value("ui.config",{}),angular.module("ui.filters",["ui.config"]),angular.module("ui.directives",["ui.config"]),angular.module("ui",["ui.filters","ui.directives","ui.config"]),angular.module("ui.directives").directive("uiAnimate",["ui.config","$timeout",function(e,t){var n={};return angular.isString(e.animate)?n["class"]=e.animate:e.animate&&(n=e.animate),{restrict:"A",link:function(e,r,i){var s={};i.uiAnimate&&(s=e.$eval(i.uiAnimate),angular.isString(s)&&(s={"class":s})),s=angular.extend({"class":"ui-animate"},n,s),r.addClass(s["class"]),t(function(){r.removeClass(s["class"])},20,!1)}}}]),angular.module("ui.directives").directive("uiCalendar",["ui.config","$parse",function(e,t){return e.uiCalendar=e.uiCalendar||{},{require:"ngModel",restrict:"A",link:function(t,n,r,i){function a(){t.calendar=n.html("");var i=t.calendar.fullCalendar("getView");i&&(i=i.name);var o,u={defaultView:i,eventSources:s};r.uiCalendar?o=t.$eval(r.uiCalendar):o={},angular.extend(u,e.uiCalendar,o),t.calendar.fullCalendar(u)}var s=t.$eval(r.ngModel),o=0,u=function(){var e=t.$eval(r.equalsTracker);return o=0,angular.forEach(s,function(e,t){angular.isArray(e)&&(o+=e.length)}),angular.isNumber(e)?o+s.length+e:o+s.length};a(),t.$watch(u,function(e,t){a()})}}}]),angular.module("ui.directives").directive("uiCodemirror",["ui.config","$timeout",function(e,t){"use strict";var n=["cursorActivity","viewportChange","gutterClick","focus","blur","scroll","update"];return{restrict:"A",require:"ngModel",link:function(r,i,s,o){var u,a,f,l,c;if(i[0].type!=="textarea")throw new Error("uiCodemirror3 can only be applied to a textarea element");u=e.codemirror||{},a=angular.extend({},u,r.$eval(s.uiCodemirror)),f=function(e){return function(t,n){var i=t.getValue();i!==o.$viewValue&&(o.$setViewValue(i),r.$apply()),typeof e=="function"&&e(t,n)}},l=function(){c=CodeMirror.fromTextArea(i[0],a),c.on("change",f(a.onChange));for(var e=0,u=n.length,l;e<u;++e){l=a["on"+n[e].charAt(0).toUpperCase()+n[e].slice(1)];if(l===void 0)continue;if(typeof l!="function")continue;c.on(n[e],l)}o.$formatters.push(function(e){if(angular.isUndefined(e)||e===null)return"";if(angular.isObject(e)||angular.isArray(e))throw new Error("ui-codemirror cannot use an object or an array as a model");return e}),o.$render=function(){c.setValue(o.$viewValue)},s.uiRefresh&&r.$watch(s.uiRefresh,function(e,n){e!==n&&t(c.refresh)})},t(l)}}}]),angular.module("ui.directives").directive("uiCurrency",["ui.config","currencyFilter",function(e,t){var n={pos:"ui-currency-pos",neg:"ui-currency-neg",zero:"ui-currency-zero"};return e.currency&&angular.extend(n,e.currency),{restrict:"EAC",require:"ngModel",link:function(e,r,i,s){var o,u,a;o=angular.extend({},n,e.$eval(i.uiCurrency)),u=function(e){var n;return n=e*1,r.toggleClass(o.pos,n>0),r.toggleClass(o.neg,n<0),r.toggleClass(o.zero,n===0),e===""?r.text(""):r.text(t(n,o.symbol)),!0},s.$render=function(){a=s.$viewValue,r.val(a),u(a)}}}}]),angular.module("ui.directives").directive("uiDate",["ui.config",function(e){"use strict";var t;return t={},angular.isObject(e.date)&&angular.extend(t,e.date),{require:"?ngModel",link:function(t,n,r,i){var s=function(){return angular.extend({},e.date,t.$eval(r.uiDate))},o=function(){var e=s();if(i){var r=function(){t.$apply(function(){var e=n.datepicker("getDate");n.datepicker("setDate",n.val()),i.$setViewValue(e),n.blur()})};if(e.onSelect){var o=e.onSelect;e.onSelect=function(e,n){r(),t.$apply(function(){o(e,n)})}}else e.onSelect=r;n.bind("change",r),i.$render=function(){var e=i.$viewValue;if(angular.isDefined(e)&&e!==null&&!angular.isDate(e))throw new Error("ng-Model value must be a Date object - currently it is a "+typeof e+" - use ui-date-format to convert it from a string");n.datepicker("setDate",e)}}n.datepicker("destroy"),n.datepicker(e),i&&i.$render()};t.$watch(s,o,!0)}}}]).directive("uiDateFormat",["ui.config",function(e){var t={require:"ngModel",link:function(t,n,r,i){var s=r.uiDateFormat||e.dateFormat;s?(i.$formatters.push(function(e){if(angular.isString(e))return $.datepicker.parseDate(s,e)}),i.$parsers.push(function(e){if(e)return $.datepicker.formatDate(s,e)})):(i.$formatters.push(function(e){if(angular.isString(e))return new Date(e)}),i.$parsers.push(function(e){if(e)return e.toISOString()}))}};return t}]),angular.module("ui.directives").directive("uiEvent",["$parse",function(e){return function(t,n,r){var i=t.$eval(r.uiEvent);angular.forEach(i,function(r,i){var s=e(r);n.bind(i,function(e){var n=Array.prototype.slice.call(arguments);n=n.splice(1),t.$apply(function(){s(t,{$event:e,$params:n})})})})}}]),angular.module("ui.directives").directive("uiIf",[function(){return{transclude:"element",priority:1e3,terminal:!0,restrict:"A",compile:function(e,t,n){return function(e,t,r){var i,s;e.$watch(r.uiIf,function(r){i&&(i.remove(),i=undefined),s&&(s.$destroy(),s=undefined),r&&(s=e.$new(),n(s,function(e){i=e,t.after(e)}))})}}}}]),angular.module("ui.directives").directive("uiJq",["ui.config","$timeout",function(t,n){return{restrict:"A",compile:function(r,i){if(!angular.isFunction(r[i.uiJq]))throw new Error('ui-jq: The "'+i.uiJq+'" function does not exist');var s=t.jq&&t.jq[i.uiJq];return function(t,r,i){function u(){n(function(){r[i.uiJq].apply(r,o)},0,!1)}var o=[];i.uiOptions?(o=t.$eval("["+i.uiOptions+"]"),angular.isObject(s)&&angular.isObject(o[0])&&(o[0]=angular.extend({},s,o[0]))):s&&(o=[s]),i.ngModel&&r.is("select,input,textarea")&&r.on("change",function(){r.trigger("input")}),i.uiRefresh&&t.$watch(i.uiRefresh,function(e){u()}),u()}}}}]),angular.module("ui.directives").factory("keypressHelper",["$parse",function(t){var n={8:"backspace",9:"tab",13:"enter",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"insert",46:"delete"},r=function(e){return e.charAt(0).toUpperCase()+e.slice(1)};return function(e,i,s,o){var u,a=[];u=i.$eval(o["ui"+r(e)]),angular.forEach(u,function(e,n){var r,i;i=t(e),angular.forEach(n.split(" "),function(e){r={expression:i,keys:{}},angular.forEach(e.split("-"),function(e){r.keys[e]=!0}),a.push(r)})}),s.bind(e,function(t){var r=t.metaKey||t.altKey,s=t.ctrlKey,o=t.shiftKey,u=t.keyCode;e==="keypress"&&!o&&u>=97&&u<=122&&(u-=32),angular.forEach(a,function(e){var u=e.keys[n[t.keyCode]]||e.keys[t.keyCode.toString()]||!1,a=e.keys.alt||!1,f=e.keys.ctrl||!1,l=e.keys.shift||!1;u&&a==r&&f==s&&l==o&&i.$apply(function(){e.expression(i,{$event:t})})})})}}]),angular.module("ui.directives").directive("uiKeydown",["keypressHelper",function(e){return{link:function(t,n,r){e("keydown",t,n,r)}}}]),angular.module("ui.directives").directive("uiKeypress",["keypressHelper",function(e){return{link:function(t,n,r){e("keypress",t,n,r)}}}]),angular.module("ui.directives").directive("uiKeyup",["keypressHelper",function(e){return{link:function(t,n,r){e("keyup",t,n,r)}}}]),function(){function t(e,t,n,r){angular.forEach(t.split(" "),function(t){var i={type:"map-"+t};google.maps.event.addListener(n,t,function(t){r.triggerHandler(angular.extend({},i,t)),e.$$phase||e.$apply()})})}function n(n,r){e.directive(n,[function(){return{restrict:"A",link:function(e,i,s){e.$watch(s[n],function(n){t(e,r,n,i)})}}}])}var e=angular.module("ui.directives");e.directive("uiMap",["ui.config","$parse",function(e,n){var r="bounds_changed center_changed click dblclick drag dragend dragstart heading_changed idle maptypeid_changed mousemove mouseout mouseover projection_changed resize rightclick tilesloaded tilt_changed zoom_changed",i=e.map||{};return{restrict:"A",link:function(e,s,o){var u=angular.extend({},i,e.$eval(o.uiOptions)),a=new google.maps.Map(s[0],u),f=n(o.uiMap);f.assign(e,a),t(e,r,a,s)}}}]),e.directive("uiMapInfoWindow",["ui.config","$parse","$compile",function(e,n,r){var i="closeclick content_change domready position_changed zindex_changed",s=e.mapInfoWindow||{};return{link:function(e,o,u){var a=angular.extend({},s,e.$eval(u.uiOptions));a.content=o[0];var f=n(u.uiMapInfoWindow),l=f(e);l||(l=new google.maps.InfoWindow(a),f.assign(e,l)),t(e,i,l,o),o.replaceWith("<div></div>");var c=l.open;l.open=function(n,i,s,u,a,f){r(o.contents())(e),c.call(l,n,i,s,u,a,f)}}}}]),n("uiMapMarker","animation_changed click clickable_changed cursor_changed dblclick drag dragend draggable_changed dragstart flat_changed icon_changed mousedown mouseout mouseover mouseup position_changed rightclick shadow_changed shape_changed title_changed visible_changed zindex_changed"),n("uiMapPolyline","click dblclick mousedown mousemove mouseout mouseover mouseup rightclick"),n("uiMapPolygon","click dblclick mousedown mousemove mouseout mouseover mouseup rightclick"),n("uiMapRectangle","bounds_changed click dblclick mousedown mousemove mouseout mouseover mouseup rightclick"),n("uiMapCircle","center_changed click dblclick mousedown mousemove mouseout mouseover mouseup radius_changed rightclick"),n("uiMapGroundOverlay","click dblclick")}(),angular.module("ui.directives").directive("uiMask",[function(){return{require:"ngModel",link:function(e,t,n,r){r.$render=function(){var i=r.$viewValue||"";t.val(i),t.mask(e.$eval(n.uiMask))},r.$parsers.push(function(e){var n=t.isMaskValid()||angular.isUndefined(t.isMaskValid())&&t.val().length>0;return r.$setValidity("mask",n),n?e:undefined}),t.bind("keyup",function(){e.$apply(function(){r.$setViewValue(t.mask())})})}}}]),angular.module("ui.directives").directive("uiReset",["ui.config",function(e){var t=null;return e.reset!==undefined&&(t=e.reset),{require:"ngModel",link:function(e,n,r,i){var s;s=angular.element('<a class="ui-reset" />'),n.wrap('<span class="ui-resetwrap" />').after(s),s.bind("click",function(n){n.preventDefault(),e.$apply(function(){r.uiReset?i.$setViewValue(e.$eval(r.uiReset)):i.$setViewValue(t),i.$render()})})}}}]),angular.module("ui.directives").directive("uiRoute",["$location","$parse",function(e,t){return{restrict:"AC",compile:function(n,r){var i;if(r.uiRoute)i="uiRoute";else if(r.ngHref)i="ngHref";else{if(!r.href)throw new Error("uiRoute missing a route or href property on "+n[0]);i="href"}return function(n,r,s){function a(t){(hash=t.indexOf("#"))>-1&&(t=t.substr(hash+1)),u=function(){o(n,e.path().indexOf(t)>-1)},u()}function f(t){(hash=t.indexOf("#"))>-1&&(t=t.substr(hash+1)),u=function(){var i=new RegExp("^"+t+"$",["i"]);o(n,i.test(e.path()))},u()}var o=t(s.ngModel||s.routeModel||"$uiRoute").assign,u=angular.noop;switch(i){case"uiRoute":s.uiRoute?f(s.uiRoute):s.$observe("uiRoute",f);break;case"ngHref":s.ngHref?a(s.ngHref):s.$observe("ngHref",a);break;case"href":a(s.href)}n.$on("$routeChangeSuccess",function(){u()})}}}}]),angular.module("ui.directives").directive("uiScrollfix",["$window",function(e){"use strict";return{link:function(t,n,r){var i=n.offset().top;r.uiScrollfix?r.uiScrollfix.charAt(0)==="-"?r.uiScrollfix=i-r.uiScrollfix.substr(1):r.uiScrollfix.charAt(0)==="+"&&(r.uiScrollfix=i+parseFloat(r.uiScrollfix.substr(1))):r.uiScrollfix=i,angular.element(e).on("scroll.ui-scrollfix",function(){var t;if(angular.isDefined(e.pageYOffset))t=e.pageYOffset;else{var i=document.compatMode&&document.compatMode!=="BackCompat"?document.documentElement:document.body;t=i.scrollTop}!n.hasClass("ui-scrollfix")&&t>r.uiScrollfix?n.addClass("ui-scrollfix"):n.hasClass("ui-scrollfix")&&t<r.uiScrollfix&&n.removeClass("ui-scrollfix")})}}}]),angular.module("ui.directives").directive("uiSelect2",["ui.config","$timeout",function(e,t){var n={};return e.select2&&angular.extend(n,e.select2),{require:"?ngModel",compile:function(e,r){var i,s,o,u=e.is("select"),a=r.multiple!==undefined;return e.is("select")&&(s=e.find("option[ng-repeat], option[data-ng-repeat]"),s.length&&(o=s.attr("ng-repeat")||s.attr("data-ng-repeat"),i=jQuery.trim(o.split("|")[0]).split(" ").pop())),function(e,r,s,o){var f=angular.extend({},n,e.$eval(s.uiSelect2));u?(delete f.multiple,delete f.initSelection):a&&(f.multiple=!0);if(o){o.$render=function(){u?r.select2("val",o.$modelValue):a?o.$modelValue?angular.isArray(o.$modelValue)?r.select2("data",o.$modelValue):r.select2("val",o.$modelValue):r.select2("data",[]):angular.isObject(o.$modelValue)?r.select2("data",o.$modelValue):r.select2("val",o.$modelValue)},i&&e.$watch(i,function(e,n,i){if(!e)return;t(function(){r.select2("val",o.$viewValue),r.trigger("change")})});if(!u){r.bind("change",function(){e.$apply(function(){o.$setViewValue(r.select2("data"))})});if(f.initSelection){var l=f.initSelection;f.initSelection=function(e,t){l(e,function(e){o.$setViewValue(e),t(e)})}}}}s.$observe("disabled",function(e){r.select2(e&&"disable"||"enable")}),s.ngMultiple&&e.$watch(s.ngMultiple,function(e){r.select2(f)}),r.val(e.$eval(s.ngModel)),t(function(){r.select2(f),!f.initSelection&&!u&&o.$setViewValue(r.select2("data"))})}}}}]),angular.module("ui.directives").directive("uiShow",[function(){return function(e,t,n){e.$watch(n.uiShow,function(e,n){e?t.addClass("ui-show"):t.removeClass("ui-show")})}}]).directive("uiHide",[function(){return function(e,t,n){e.$watch(n.uiHide,function(e,n){e?t.addClass("ui-hide"):t.removeClass("ui-hide")})}}]).directive("uiToggle",[function(){return function(e,t,n){e.$watch(n.uiToggle,function(e,n){e?t.removeClass("ui-hide").addClass("ui-show"):t.removeClass("ui-show").addClass("ui-hide")})}}]),angular.module("ui.directives").directive("uiSortable",["ui.config",function(e){return{require:"?ngModel",link:function(t,n,r,i){var s,o,u,a,f,l,c,h,p;f=angular.extend({},e.sortable,t.$eval(r.uiSortable)),i&&(i.$render=function(){n.sortable("refresh")},u=function(e,t){t.item.sortable={index:t.item.index()}},a=function(e,t){t.item.sortable.resort=i},s=function(e,t){t.item.sortable.relocate=!0,i.$modelValue.splice(t.item.index(),0,t.item.sortable.moved)},o=function(e,t){i.$modelValue.length===1?t.item.sortable.moved=i.$modelValue.splice(0,1)[0]:t.item.sortable.moved=i.$modelValue.splice(t.item.sortable.index,1)[0]},onStop=function(e,n){if(n.item.sortable.resort&&!n.item.sortable.relocate){var r,i;i=n.item.sortable.index,r=n.item.index(),i<r&&r--,n.item.sortable.resort.$modelValue.splice(r,0,n.item.sortable.resort.$modelValue.splice(i,1)[0])}(n.item.sortable.resort||n.item.sortable.relocate)&&t.$apply()},h=f.start,f.start=function(e,t){u(e,t),typeof h=="function"&&h(e,t)},_stop=f.stop,f.stop=function(e,t){onStop(e,t),typeof _stop=="function"&&_stop(e,t)},p=f.update,f.update=function(e,t){a(e,t),typeof p=="function"&&p(e,t)},l=f.receive,f.receive=function(e,t){s(e,t),typeof l=="function"&&l(e,t)},c=f.remove,f.remove=function(e,t){o(e,t),typeof c=="function"&&c(e,t)}),n.sortable(f)}}}]),angular.module("ui.directives").directive("uiTinymce",["ui.config",function(e){return e.tinymce=e.tinymce||{},{require:"ngModel",link:function(t,n,r,i){var s,o={onchange_callback:function(e){e.isDirty()&&(e.save(),i.$setViewValue(n.val()),t.$$phase||t.$apply())},handle_event_callback:function(e){return this.isDirty()&&(this.save(),i.$setViewValue(n.val()),t.$$phase||t.$apply()),!0},setup:function(e){e.onSetContent.add(function(e,r){e.isDirty()&&(e.save(),i.$setViewValue(n.val()),t.$$phase||t.$apply())})}};r.uiTinymce?s=t.$eval(r.uiTinymce):s={},angular.extend(o,e.tinymce,s),setTimeout(function(){n.tinymce(o)})}}}]),angular.module("ui.directives").directive("uiValidate",function(){return{restrict:"A",require:"ngModel",link:function(e,t,n,r){var i,s,o={},u=e.$eval(n.uiValidate);if(!u)return;angular.isString(u)&&(u={validator:u}),angular.forEach(u,function(t,n){i=function(i){return e.$eval(t,{$value:i})?(r.$setValidity(n,!0),i):(r.$setValidity(n,!1),undefined)},o[n]=i,r.$formatters.push(i),r.$parsers.push(i)}),n.uiValidateWatch&&(s=e.$eval(n.uiValidateWatch),angular.isString(s)?e.$watch(s,function(){angular.forEach(o,function(e,t){e(r.$modelValue)})}):angular.forEach(s,function(t,n){e.$watch(t,function(){o[n](r.$modelValue)})}))}}}),angular.module("ui.filters").filter("format",function(){return function(e,t){if(!e)return e;var n=e.toString(),r;return t===undefined?n:!angular.isArray(t)&&!angular.isObject(t)?n.split("$0").join(t):(r=angular.isArray(t)&&"$"||":",angular.forEach(t,function(e,t){n=n.split(r+t).join(e)}),n)}}),angular.module("ui.filters").filter("highlight",function(){return function(e,t,n){return t||angular.isNumber(t)?(e=e.toString(),t=t.toString(),n?e.split(t).join('<span class="ui-match">'+t+"</span>"):e.replace(new RegExp(t,"gi"),'<span class="ui-match">$&</span>')):e}}),angular.module("ui.filters").filter("inflector",function(){function e(e){return e.replace(/^([a-z])|\s+([a-z])/g,function(e){return e.toUpperCase()})}function t(e,t){return e.replace(/[A-Z]/g,function(e){return t+e})}var n={humanize:function(n){return e(t(n," ").split("_").join(" "))},underscore:function(e){return e.substr(0,1).toLowerCase()+t(e.substr(1),"_").toLowerCase().split(" ").join("_")},variable:function(t){return t=t.substr(0,1).toLowerCase()+e(t.split("_").join(" ")).substr(1).split(" ").join(""),t}};return function(e,t,r){return t!==!1&&angular.isString(e)?(t=t||"humanize",n[t](e)):e}}),angular.module("ui.filters").filter("unique",function(){return function(e,t){if(t===!1)return e;if((t||angular.isUndefined(t))&&angular.isArray(e)){var n={},r=[],i=function(e){return angular.isObject(e)&&angular.isString(t)?e[t]:e};angular.forEach(e,function(e){var t,n=!1;for(var s=0;s<r.length;s++)if(angular.equals(i(r[s]),i(e))){n=!0;break}n||r.push(e)}),e=r}return e}});
;
;
/*! jquery.uniform.min.js */ 
;
;
!function(e,t,n){"use strict";function s(e){var t=Array.prototype.slice.call(arguments,1);return e.prop?e.prop.apply(e,t):e.attr.apply(e,t)}function a(e,t,n){var s,a;for(s in n)n.hasOwnProperty(s)&&(a=s.replace(/ |$/g,t.eventNamespace),e.bind(a,n[s]))}function r(e,t,n){a(e,n,{focus:function(){t.addClass(n.focusClass)},blur:function(){t.removeClass(n.focusClass),t.removeClass(n.activeClass)},mouseenter:function(){t.addClass(n.hoverClass)},mouseleave:function(){t.removeClass(n.hoverClass),t.removeClass(n.activeClass)},"mousedown touchbegin":function(){e.is(":disabled")||t.addClass(n.activeClass)},"mouseup touchend":function(){t.removeClass(n.activeClass)}})}function i(e,t){e.removeClass(t.hoverClass+" "+t.focusClass+" "+t.activeClass)}function l(e,t,n){n?e.addClass(t):e.removeClass(t)}function u(e,t,n){var s="checked",a=t.is(":"+s);t.prop?t.prop(s,a):a?t.attr(s,s):t.removeAttr(s),l(e,n.checkedClass,a)}function o(e,t,n){l(e,n.disabledClass,t.is(":disabled"))}function c(e,t,n){switch(n){case"after":return e.after(t),e.next();case"before":return e.before(t),e.prev();case"wrap":return e.wrap(t),e.parent()}return null}function d(e,n,a){var r,i,l;return a||(a={}),a=t.extend({bind:{},divClass:null,divWrap:"wrap",spanClass:null,spanHtml:null,spanWrap:"wrap"},a),r=t("<div />"),i=t("<span />"),n.autoHide&&e.is(":hidden")&&"none"===e.css("display")&&r.hide(),a.divClass&&r.addClass(a.divClass),n.wrapperClass&&r.addClass(n.wrapperClass),a.spanClass&&i.addClass(a.spanClass),l=s(e,"id"),n.useID&&l&&s(r,"id",n.idPrefix+"-"+l),a.spanHtml&&i.html(a.spanHtml),r=c(e,r,a.divWrap),i=c(e,i,a.spanWrap),o(r,e,n),{div:r,span:i}}function f(e,n){var s;return n.wrapperClass?(s=t("<span />").addClass(n.wrapperClass),s=c(e,s,"wrap")):null}function p(){var n,s,a,r;return r="rgb(120,2,153)",s=t('<div style="width:0;height:0;color:'+r+'">'),t("body").append(s),a=s.get(0),n=e.getComputedStyle?e.getComputedStyle(a,"").color:(a.currentStyle||a.style||{}).color,s.remove(),n.replace(/ /g,"")!==r}function m(e){return e?t("<span />").text(e).html():""}function v(){return navigator.cpuClass&&!navigator.product}function h(){return void 0!==e.XMLHttpRequest?!0:!1}function C(e){var t;return e[0].multiple?!0:(t=s(e,"size"),!t||1>=t?!1:!0)}function b(){return!1}function y(e,t){var n="none";a(e,t,{"selectstart dragstart mousedown":b}),e.css({MozUserSelect:n,msUserSelect:n,webkitUserSelect:n,userSelect:n})}function w(e,t,n){var s=e.val();""===s?s=n.fileDefaultHtml:(s=s.split(/[\/\\]+/),s=s[s.length-1]),t.text(s)}function g(e,t,n){var s,a;for(s=[],e.each(function(){var e;for(e in t)Object.prototype.hasOwnProperty.call(t,e)&&(s.push({el:this,name:e,old:this.style[e]}),this.style[e]=t[e])}),n();s.length;)a=s.pop(),a.el.style[a.name]=a.old}function k(e,t){var n;n=e.parents(),n.push(e[0]),n=n.not(":visible"),g(n,{visibility:"hidden",display:"block",position:"absolute"},t)}function H(e,t){return function(){e.unwrap().unwrap().unbind(t.eventNamespace)}}var x=!0,A=!1,W=[{match:function(e){return e.is("a, button, :submit, :reset, input[type='button']")},apply:function(t,n){var l,u,c,f,p;return u=n.submitDefaultHtml,t.is(":reset")&&(u=n.resetDefaultHtml),f=t.is("a, button")?function(){return t.html()||u}:function(){return m(s(t,"value"))||u},c=d(t,n,{divClass:n.buttonClass,spanHtml:f()}),l=c.div,r(t,l,n),p=!1,a(l,n,{"click touchend":function(){var n,a,r,i;p||t.is(":disabled")||(p=!0,t[0].dispatchEvent?(n=document.createEvent("MouseEvents"),n.initEvent("click",!0,!0),a=t[0].dispatchEvent(n),t.is("a")&&a&&(r=s(t,"target"),i=s(t,"href"),r&&"_self"!==r?e.open(i,r):document.location.href=i)):t.click(),p=!1)}}),y(l,n),{remove:function(){return l.after(t),l.remove(),t.unbind(n.eventNamespace),t},update:function(){i(l,n),o(l,t,n),t.detach(),c.span.html(f()).append(t)}}}},{match:function(e){return e.is(":checkbox")},apply:function(e,t){var n,s,l;return n=d(e,t,{divClass:t.checkboxClass}),s=n.div,l=n.span,r(e,s,t),a(e,t,{"click touchend":function(){u(l,e,t)}}),u(l,e,t),{remove:H(e,t),update:function(){i(s,t),l.removeClass(t.checkedClass),u(l,e,t),o(s,e,t)}}}},{match:function(e){return e.is(":file")},apply:function(e,n){function l(){w(e,p,n)}var u,f,p,m;return u=d(e,n,{divClass:n.fileClass,spanClass:n.fileButtonClass,spanHtml:n.fileButtonHtml,spanWrap:"after"}),f=u.div,m=u.span,p=t("<span />").html(n.fileDefaultHtml),p.addClass(n.filenameClass),p=c(e,p,"after"),s(e,"size")||s(e,"size",f.width()/10),r(e,f,n),l(),v()?a(e,n,{click:function(){e.trigger("change"),setTimeout(l,0)}}):a(e,n,{change:l}),y(p,n),y(m,n),{remove:function(){return p.remove(),m.remove(),e.unwrap().unbind(n.eventNamespace)},update:function(){i(f,n),w(e,p,n),o(f,e,n)}}}},{match:function(e){if(e.is("input")){var t=(" "+s(e,"type")+" ").toLowerCase(),n=" color date datetime datetime-local email month number password search tel text time url week ";return n.indexOf(t)>=0}return!1},apply:function(e,t){var n,a;return n=s(e,"type"),e.addClass(t.inputClass),a=f(e,t),r(e,e,t),t.inputAddTypeAsClass&&e.addClass(n),{remove:function(){e.removeClass(t.inputClass),t.inputAddTypeAsClass&&e.removeClass(n),a&&e.unwrap()},update:b}}},{match:function(e){return e.is(":radio")},apply:function(e,n){var l,c,f;return l=d(e,n,{divClass:n.radioClass}),c=l.div,f=l.span,r(e,c,n),a(e,n,{"click touchend":function(){t.uniform.update(t(':radio[name="'+s(e,"name")+'"]'))}}),u(f,e,n),{remove:H(e,n),update:function(){i(c,n),u(f,e,n),o(c,e,n)}}}},{match:function(e){return e.is("select")&&!C(e)?!0:!1},apply:function(e,n){var s,l,u,c;return n.selectAutoWidth&&k(e,function(){c=e.width()}),s=d(e,n,{divClass:n.selectClass,spanHtml:(e.find(":selected:first")||e.find("option:first")).html(),spanWrap:"before"}),l=s.div,u=s.span,n.selectAutoWidth?k(e,function(){g(t([u[0],l[0]]),{display:"block"},function(){var e;e=u.outerWidth()-u.width(),l.width(c+e),u.width(c)})}):l.addClass("fixedWidth"),r(e,l,n),a(e,n,{change:function(){u.html(e.find(":selected").html()),l.removeClass(n.activeClass)},"click touchend":function(){var t=e.find(":selected").html();u.html()!==t&&e.trigger("change")},keyup:function(){u.html(e.find(":selected").html())}}),y(u,n),{remove:function(){return u.remove(),e.unwrap().unbind(n.eventNamespace),e},update:function(){n.selectAutoWidth?(t.uniform.restore(e),e.uniform(n)):(i(l,n),u.html(e.find(":selected").html()),o(l,e,n))}}}},{match:function(e){return e.is("select")&&C(e)?!0:!1},apply:function(e,t){var n;return e.addClass(t.selectMultiClass),n=f(e,t),r(e,e,t),{remove:function(){e.removeClass(t.selectMultiClass),n&&e.unwrap()},update:b}}},{match:function(e){return e.is("textarea")},apply:function(e,t){var n;return e.addClass(t.textareaClass),n=f(e,t),r(e,e,t),{remove:function(){e.removeClass(t.textareaClass),n&&e.unwrap()},update:b}}}];v()&&!h()&&(x=!1),t.uniform={defaults:{activeClass:"active",autoHide:!0,buttonClass:"button",checkboxClass:"checker",checkedClass:"checked",disabledClass:"disabled",eventNamespace:".uniform",fileButtonClass:"action",fileButtonHtml:"Choose File",fileClass:"uploader",fileDefaultHtml:"No file selected",filenameClass:"filename",focusClass:"focus",hoverClass:"hover",idPrefix:"uniform",inputAddTypeAsClass:!0,inputClass:"uniform-input",radioClass:"radio",resetDefaultHtml:"Reset",resetSelector:!1,selectAutoWidth:!0,selectClass:"selector",selectMultiClass:"uniform-multiselect",submitDefaultHtml:"Submit",textareaClass:"uniform",useID:!0,wrapperClass:null},elements:[]},t.fn.uniform=function(n){var s=this;return n=t.extend({},t.uniform.defaults,n),A||(A=!0,p()&&(x=!1)),x?(n.resetSelector&&t(n.resetSelector).mouseup(function(){e.setTimeout(function(){t.uniform.update(s)},10)}),this.each(function(){var e,s,a,r=t(this);if(r.data("uniformed"))return t.uniform.update(r),void 0;for(e=0;e<W.length;e+=1)if(s=W[e],s.match(r,n))return a=s.apply(r,n),r.data("uniformed",a),t.uniform.elements.push(r.get(0)),void 0})):this},t.uniform.restore=t.fn.uniform.restore=function(e){e===n&&(e=t.uniform.elements),t(e).each(function(){var e,n,s=t(this);n=s.data("uniformed"),n&&(n.remove(),e=t.inArray(this,t.uniform.elements),e>=0&&t.uniform.elements.splice(e,1),s.removeData("uniformed"))})},t.uniform.update=t.fn.uniform.update=function(e){e===n&&(e=t.uniform.elements),t(e).each(function(){var e,n=t(this);e=n.data("uniformed"),e&&e.update(n,e.options)})}}(this,jQuery);
;
;
/*! jquery.autosize.js */ 
;
;
(function ($) {
var
defaults = {
className: 'autosizejs',
append: "",
callback: false
},
hidden = 'hidden',
borderBox = 'border-box',
lineHeight = 'lineHeight',
copy = '<textarea tabindex="-1" style="position:absolute; top:-9999px; left:-9999px; right:auto; bottom:auto; -moz-box-sizing:content-box; -webkit-box-sizing:content-box; box-sizing:content-box; word-wrap:break-word; height:0 !important; min-height:0 !important; overflow:hidden;"/>',
copyStyle = [
'fontFamily',
'fontSize',
'fontWeight',
'fontStyle',
'letterSpacing',
'textTransform',
'wordSpacing',
'textIndent'
],
oninput = 'oninput',
onpropertychange = 'onpropertychange',
test = $(copy)[0];
test.setAttribute(oninput, "return");
if ($.isFunction(test[oninput]) || onpropertychange in test) {
$(test).css(lineHeight, '99px');
if ($(test).css(lineHeight) === '99px') {
copyStyle.push(lineHeight);
}
$.fn.autosize = function (options) {
options = $.extend({}, defaults, options || {});
return this.each(function () {
var
ta = this,
$ta = $(ta),
mirror,
minHeight = $ta.height(),
maxHeight = parseInt($ta.css('maxHeight'), 10),
active,
i = copyStyle.length,
resize,
boxOffset = 0,
value = ta.value,
callback = $.isFunction(options.callback);
if ($ta.css('box-sizing') === borderBox || $ta.css('-moz-box-sizing') === borderBox || $ta.css('-webkit-box-sizing') === borderBox){
boxOffset = $ta.outerHeight() - $ta.height();
}
if ($ta.data('mirror') || $ta.data('ismirror')) {
return;
} else {
mirror = $(copy).data('ismirror', true).addClass(options.className)[0];
resize = $ta.css('resize') === 'none' ? 'none' : 'horizontal';
$ta.data('mirror', $(mirror)).css({
overflow: hidden,
overflowY: hidden,
wordWrap: 'break-word',
resize: resize
});
}
maxHeight = maxHeight && maxHeight > 0 ? maxHeight : 9e4;
function adjust() {
var height, overflow, original;
if (!active) {
active = true;
mirror.value = ta.value + options.append;
mirror.style.overflowY = ta.style.overflowY;
original = parseInt(ta.style.height,10);
mirror.style.width = $ta.css('width');
mirror.scrollTop = 0;
mirror.scrollTop = 9e4;
height = mirror.scrollTop;
overflow = hidden;
if (height > maxHeight) {
height = maxHeight;
overflow = 'scroll';
} else if (height < minHeight) {
height = minHeight;
}
height += boxOffset;
ta.style.overflowY = overflow;
if (original !== height) {
ta.style.height = height + 'px';
if (callback) {
options.callback.call(ta);
}
}
setTimeout(function () {
active = false;
}, 1);
}
}
while (i--) {
mirror.style[copyStyle[i]] = $ta.css(copyStyle[i]);
}
$('body').append(mirror);
if (onpropertychange in ta) {
if (oninput in ta) {
ta[oninput] = ta.onkeyup = adjust;
} else {
ta[onpropertychange] = adjust;
}
} else {
ta[oninput] = adjust;
ta.value = '';
ta.value = value;
}
$(window).resize(adjust);
$ta.bind('autosize', adjust);
adjust();
});
};
} else {
$.fn.autosize = function (callback) {
return this;
};
}
}(window.jQuery || window.Zepto));
;
;
/*! jquery.spin.min.js */ 
;
;
(function(t,e){if(typeof exports=="object")module.exports=e();else if(typeof define=="function"&&define.amd)define(e);else t.Spinner=e()})(this,function(){"use strict";var t=["webkit","Moz","ms","O"],e={},i;function o(t,e){var i=document.createElement(t||"div"),o;for(o in e)i[o]=e[o];return i}function n(t){for(var e=1,i=arguments.length;e<i;e++)t.appendChild(arguments[e]);return t}var r=function(){var t=o("style",{type:"text/css"});n(document.getElementsByTagName("head")[0],t);return t.sheet||t.styleSheet}();function s(t,o,n,s){var a=["opacity",o,~~(t*100),n,s].join("-"),f=.01+n/s*100,l=Math.max(1-(1-t)/o*(100-f),t),u=i.substring(0,i.indexOf("Animation")).toLowerCase(),d=u&&"-"+u+"-"||"";if(!e[a]){r.insertRule("@"+d+"keyframes "+a+"{"+"0%{opacity:"+l+"}"+f+"%{opacity:"+t+"}"+(f+.01)+"%{opacity:1}"+(f+o)%100+"%{opacity:"+t+"}"+"100%{opacity:"+l+"}"+"}",r.cssRules.length);e[a]=1}return a}function a(e,i){var o=e.style,n,r;i=i.charAt(0).toUpperCase()+i.slice(1);for(r=0;r<t.length;r++){n=t[r]+i;if(o[n]!==undefined)return n}if(o[i]!==undefined)return i}function f(t,e){for(var i in e)t.style[a(t,i)||i]=e[i];return t}function l(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var o in i)if(t[o]===undefined)t[o]=i[o]}return t}function u(t){var e={x:t.offsetLeft,y:t.offsetTop};while(t=t.offsetParent)e.x+=t.offsetLeft,e.y+=t.offsetTop;return e}function d(t,e){return typeof t=="string"?t:t[e%t.length]}var p={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:"#000",direction:1,speed:1,trail:100,opacity:1/4,fps:20,zIndex:2e9,className:"spinner",top:"auto",left:"auto",position:"relative"};function c(t){if(typeof this=="undefined")return new c(t);this.opts=l(t||{},c.defaults,p)}c.defaults={};l(c.prototype,{spin:function(t){this.stop();var e=this,n=e.opts,r=e.el=f(o(0,{className:n.className}),{position:n.position,width:0,zIndex:n.zIndex}),s=n.radius+n.length+n.width,a,l;if(t){t.insertBefore(r,t.firstChild||null);l=u(t);a=u(r);f(r,{left:(n.left=="auto"?l.x-a.x+(t.offsetWidth>>1):parseInt(n.left,10)+s)+"px",top:(n.top=="auto"?l.y-a.y+(t.offsetHeight>>1):parseInt(n.top,10)+s)+"px"})}r.setAttribute("role","progressbar");e.lines(r,e.opts);if(!i){var d=0,p=(n.lines-1)*(1-n.direction)/2,c,h=n.fps,m=h/n.speed,y=(1-n.opacity)/(m*n.trail/100),g=m/n.lines;(function v(){d++;for(var t=0;t<n.lines;t++){c=Math.max(1-(d+(n.lines-t)*g)%m*y,n.opacity);e.opacity(r,t*n.direction+p,c,n)}e.timeout=e.el&&setTimeout(v,~~(1e3/h))})()}return e},stop:function(){var t=this.el;if(t){clearTimeout(this.timeout);if(t.parentNode)t.parentNode.removeChild(t);this.el=undefined}return this},lines:function(t,e){var r=0,a=(e.lines-1)*(1-e.direction)/2,l;function u(t,i){return f(o(),{position:"absolute",width:e.length+e.width+"px",height:e.width+"px",background:t,boxShadow:i,transformOrigin:"left",transform:"rotate("+~~(360/e.lines*r+e.rotate)+"deg) translate("+e.radius+"px"+",0)",borderRadius:(e.corners*e.width>>1)+"px"})}for(;r<e.lines;r++){l=f(o(),{position:"absolute",top:1+~(e.width/2)+"px",transform:e.hwaccel?"translate3d(0,0,0)":"",opacity:e.opacity,animation:i&&s(e.opacity,e.trail,a+r*e.direction,e.lines)+" "+1/e.speed+"s linear infinite"});if(e.shadow)n(l,f(u("#000","0 0 4px "+"#000"),{top:2+"px"}));n(t,n(l,u(d(e.color,r),"0 0 1px rgba(0,0,0,.1)")))}return t},opacity:function(t,e,i){if(e<t.childNodes.length)t.childNodes[e].style.opacity=i}});function h(){function t(t,e){return o("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',e)}r.addRule(".spin-vml","behavior:url(#default#VML)");c.prototype.lines=function(e,i){var o=i.length+i.width,r=2*o;function s(){return f(t("group",{coordsize:r+" "+r,coordorigin:-o+" "+-o}),{width:r,height:r})}var a=-(i.width+i.length)*2+"px",l=f(s(),{position:"absolute",top:a,left:a}),u;function p(e,r,a){n(l,n(f(s(),{rotation:360/i.lines*e+"deg",left:~~r}),n(f(t("roundrect",{arcsize:i.corners}),{width:o,height:i.width,left:i.radius,top:-i.width>>1,filter:a}),t("fill",{color:d(i.color,e),opacity:i.opacity}),t("stroke",{opacity:0}))))}if(i.shadow)for(u=1;u<=i.lines;u++)p(u,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(u=1;u<=i.lines;u++)p(u);return n(e,l)};c.prototype.opacity=function(t,e,i,o){var n=t.firstChild;o=o.shadow&&o.lines||0;if(n&&e+o<n.childNodes.length){n=n.childNodes[e+o];n=n&&n.firstChild;n=n&&n.firstChild;if(n)n.opacity=i}}}var m=f(o("group"),{behavior:"url(#default#VML)"});if(!a(m,"transform")&&m.adj)h();else i=a(m,"animation");return c});
;
;
/*! raphael-min.js */ 
;
;
(function(n){var e,t,r="0.4.2",f="hasOwnProperty",i=/[\.\/]/,o="*",u=function(){},l=function(n,e){return n-e},s={n:{}},p=function(n,r){n+="";var f,i=t,o=Array.prototype.slice.call(arguments,2),u=p.listeners(n),s=0,a=[],c={},h=[],d=e;e=n,t=0;for(var g=0,v=u.length;v>g;g++)"zIndex"in u[g]&&(a.push(u[g].zIndex),0>u[g].zIndex&&(c[u[g].zIndex]=u[g]));for(a.sort(l);0>a[s];)if(f=c[a[s++]],h.push(f.apply(r,o)),t)return t=i,h;for(g=0;v>g;g++)if(f=u[g],"zIndex"in f)if(f.zIndex==a[s]){if(h.push(f.apply(r,o)),t)break;do if(s++,f=c[a[s]],f&&h.push(f.apply(r,o)),t)break;while(f)}else c[f.zIndex]=f;else if(h.push(f.apply(r,o)),t)break;return t=i,e=d,h.length?h:null};p._events=s,p.listeners=function(n){var e,t,r,f,u,l,p,a,c=n.split(i),h=s,d=[h],g=[];for(f=0,u=c.length;u>f;f++){for(a=[],l=0,p=d.length;p>l;l++)for(h=d[l].n,t=[h[c[f]],h[o]],r=2;r--;)e=t[r],e&&(a.push(e),g=g.concat(e.f||[]));d=a}return g},p.on=function(n,e){if(n+="","function"!=typeof e)return function(){};for(var t=n.split(i),r=s,f=0,o=t.length;o>f;f++)r=r.n,r=r.hasOwnProperty(t[f])&&r[t[f]]||(r[t[f]]={n:{}});for(r.f=r.f||[],f=0,o=r.f.length;o>f;f++)if(r.f[f]==e)return u;return r.f.push(e),function(n){+n==+n&&(e.zIndex=+n)}},p.f=function(n){var e=[].slice.call(arguments,1);return function(){p.apply(null,[n,null].concat(e).concat([].slice.call(arguments,0)))}},p.stop=function(){t=1},p.nt=function(n){return n?RegExp("(?:\\.|\\/|^)"+n+"(?:\\.|\\/|$)").test(e):e},p.nts=function(){return e.split(i)},p.off=p.unbind=function(n,e){if(!n)return p._events=s={n:{}},void 0;var t,r,u,l,a,c,h,d=n.split(i),g=[s];for(l=0,a=d.length;a>l;l++)for(c=0;g.length>c;c+=u.length-2){if(u=[c,1],t=g[c].n,d[l]!=o)t[d[l]]&&u.push(t[d[l]]);else for(r in t)t[f](r)&&u.push(t[r]);g.splice.apply(g,u)}for(l=0,a=g.length;a>l;l++)for(t=g[l];t.n;){if(e){if(t.f){for(c=0,h=t.f.length;h>c;c++)if(t.f[c]==e){t.f.splice(c,1);break}!t.f.length&&delete t.f}for(r in t.n)if(t.n[f](r)&&t.n[r].f){var v=t.n[r].f;for(c=0,h=v.length;h>c;c++)if(v[c]==e){v.splice(c,1);break}!v.length&&delete t.n[r].f}}else{delete t.f;for(r in t.n)t.n[f](r)&&t.n[r].f&&delete t.n[r].f}t=t.n}},p.once=function(n,e){var t=function(){return p.unbind(n,t),e.apply(this,arguments)};return p.on(n,t)},p.version=r,p.toString=function(){return"You are running Eve "+r},"undefined"!=typeof module&&module.exports?module.exports=p:"undefined"!=typeof define?define("eve",[],function(){return p}):n.eve=p})(this);(function(){function t(e){if(t.is(e,"function"))return m?e():eve.on("raphael.DOMload",e);if(t.is(e,N))return t._engine.create[F](t,e.splice(0,3+t.is(e[0],Y))).add(e);var n=Array.prototype.slice.call(arguments,0);if(t.is(n[n.length-1],"function")){var r=n.pop();return m?r.call(t._engine.create[F](t,n)):eve.on("raphael.DOMload",function(){r.call(t._engine.create[F](t,n))})}return t._engine.create[F](t,arguments)}function e(t){if(Object(t)!==t)return t;var n=new t.constructor;for(var r in t)t[k](r)&&(n[r]=e(t[r]));return n}function n(t,e){for(var n=0,r=t.length;r>n;n++)if(t[n]===e)return t.push(t.splice(n,1)[0])}function r(t,e,r){function i(){var a=Array.prototype.slice.call(arguments,0),s=a.join("â"),o=i.cache=i.cache||{},u=i.count=i.count||[];return o[k](s)?(n(u,s),r?r(o[s]):o[s]):(u.length>=1e3&&delete o[u.shift()],u.push(s),o[s]=t[F](e,a),r?r(o[s]):o[s])}return i}function i(){return this.hex}function a(t,e){for(var n=[],r=0,i=t.length;i-2*!e>r;r+=2){var a=[{x:+t[r-2],y:+t[r-1]},{x:+t[r],y:+t[r+1]},{x:+t[r+2],y:+t[r+3]},{x:+t[r+4],y:+t[r+5]}];e?r?i-4==r?a[3]={x:+t[0],y:+t[1]}:i-2==r&&(a[2]={x:+t[0],y:+t[1]},a[3]={x:+t[2],y:+t[3]}):a[0]={x:+t[i-2],y:+t[i-1]}:i-4==r?a[3]=a[2]:r||(a[0]={x:+t[r],y:+t[r+1]}),n.push(["C",(-a[0].x+6*a[1].x+a[2].x)/6,(-a[0].y+6*a[1].y+a[2].y)/6,(a[1].x+6*a[2].x-a[3].x)/6,(a[1].y+6*a[2].y-a[3].y)/6,a[2].x,a[2].y])}return n}function s(t,e,n,r,i){var a=-3*e+9*n-9*r+3*i,s=t*a+6*e-12*n+6*r;return t*s-3*e+3*n}function o(t,e,n,r,i,a,o,u,l){null==l&&(l=1),l=l>1?1:0>l?0:l;for(var h=l/2,c=12,f=[-.1252,.1252,-.3678,.3678,-.5873,.5873,-.7699,.7699,-.9041,.9041,-.9816,.9816],p=[.2491,.2491,.2335,.2335,.2032,.2032,.1601,.1601,.1069,.1069,.0472,.0472],d=0,g=0;c>g;g++){var x=h*f[g]+h,v=s(x,t,n,i,o),m=s(x,e,r,a,u),y=v*v+m*m;d+=p[g]*j.sqrt(y)}return h*d}function u(t,e,n,r,i,a,s,u,l){if(!(0>l||l>o(t,e,n,r,i,a,s,u))){var h,c=1,f=c/2,p=c-f,d=.01;for(h=o(t,e,n,r,i,a,s,u,p);O(h-l)>d;)f/=2,p+=(l>h?1:-1)*f,h=o(t,e,n,r,i,a,s,u,p);return p}}function l(t,e,n,r,i,a,s,o){if(!(D(t,n)<z(i,s)||z(t,n)>D(i,s)||D(e,r)<z(a,o)||z(e,r)>D(a,o))){var u=(t*r-e*n)*(i-s)-(t-n)*(i*o-a*s),l=(t*r-e*n)*(a-o)-(e-r)*(i*o-a*s),h=(t-n)*(a-o)-(e-r)*(i-s);if(h){var c=u/h,f=l/h,p=+c.toFixed(2),d=+f.toFixed(2);if(!(+z(t,n).toFixed(2)>p||p>+D(t,n).toFixed(2)||+z(i,s).toFixed(2)>p||p>+D(i,s).toFixed(2)||+z(e,r).toFixed(2)>d||d>+D(e,r).toFixed(2)||+z(a,o).toFixed(2)>d||d>+D(a,o).toFixed(2)))return{x:c,y:f}}}}function h(e,n,r){var i=t.bezierBBox(e),a=t.bezierBBox(n);if(!t.isBBoxIntersect(i,a))return r?0:[];for(var s=o.apply(0,e),u=o.apply(0,n),h=~~(s/5),c=~~(u/5),f=[],p=[],d={},g=r?0:[],x=0;h+1>x;x++){var v=t.findDotsAtSegment.apply(t,e.concat(x/h));f.push({x:v.x,y:v.y,t:x/h})}for(x=0;c+1>x;x++)v=t.findDotsAtSegment.apply(t,n.concat(x/c)),p.push({x:v.x,y:v.y,t:x/c});for(x=0;h>x;x++)for(var m=0;c>m;m++){var y=f[x],b=f[x+1],_=p[m],w=p[m+1],k=.001>O(b.x-y.x)?"y":"x",B=.001>O(w.x-_.x)?"y":"x",S=l(y.x,y.y,b.x,b.y,_.x,_.y,w.x,w.y);if(S){if(d[S.x.toFixed(4)]==S.y.toFixed(4))continue;d[S.x.toFixed(4)]=S.y.toFixed(4);var C=y.t+O((S[k]-y[k])/(b[k]-y[k]))*(b.t-y.t),F=_.t+O((S[B]-_[B])/(w[B]-_[B]))*(w.t-_.t);C>=0&&1>=C&&F>=0&&1>=F&&(r?g++:g.push({x:S.x,y:S.y,t1:C,t2:F}))}}return g}function c(e,n,r){e=t._path2curve(e),n=t._path2curve(n);for(var i,a,s,o,u,l,c,f,p,d,g=r?0:[],x=0,v=e.length;v>x;x++){var m=e[x];if("M"==m[0])i=u=m[1],a=l=m[2];else{"C"==m[0]?(p=[i,a].concat(m.slice(1)),i=p[6],a=p[7]):(p=[i,a,i,a,u,l,u,l],i=u,a=l);for(var y=0,b=n.length;b>y;y++){var _=n[y];if("M"==_[0])s=c=_[1],o=f=_[2];else{"C"==_[0]?(d=[s,o].concat(_.slice(1)),s=d[6],o=d[7]):(d=[s,o,s,o,c,f,c,f],s=c,o=f);var w=h(p,d,r);if(r)g+=w;else{for(var k=0,B=w.length;B>k;k++)w[k].segment1=x,w[k].segment2=y,w[k].bez1=p,w[k].bez2=d;g=g.concat(w)}}}}}return g}function f(t,e,n,r,i,a){null!=t?(this.a=+t,this.b=+e,this.c=+n,this.d=+r,this.e=+i,this.f=+a):(this.a=1,this.b=0,this.c=0,this.d=1,this.e=0,this.f=0)}function p(){return this.x+P+this.y+P+this.width+" Ã "+this.height}function d(t,e,n,r,i,a){function s(t){return((c*t+h)*t+l)*t}function o(t,e){var n=u(t,e);return((d*n+p)*n+f)*n}function u(t,e){var n,r,i,a,o,u;for(i=t,u=0;8>u;u++){if(a=s(i)-t,e>O(a))return i;if(o=(3*c*i+2*h)*i+l,1e-6>O(o))break;i-=a/o}if(n=0,r=1,i=t,n>i)return n;if(i>r)return r;for(;r>n;){if(a=s(i),e>O(a-t))return i;t>a?n=i:r=i,i=(r-n)/2+n}return i}var l=3*e,h=3*(r-e)-l,c=1-l-h,f=3*n,p=3*(i-n)-f,d=1-f-p;return o(t,1/(200*a))}function g(t,e){var n=[],r={};if(this.ms=e,this.times=1,t){for(var i in t)t[k](i)&&(r[Q(i)]=t[i],n.push(Q(i)));n.sort(le)}this.anim=r,this.top=n[n.length-1],this.percents=n}function x(e,n,r,i,a,s){r=Q(r);var o,u,l,h,c,p,g=e.ms,x={},v={},m={};if(i)for(_=0,w=sn.length;w>_;_++){var y=sn[_];if(y.el.id==n.id&&y.anim==e){y.percent!=r?(sn.splice(_,1),l=1):u=y,n.attr(y.totalOrigin);break}}else i=+v;for(var _=0,w=e.percents.length;w>_;_++){if(e.percents[_]==r||e.percents[_]>i*e.top){r=e.percents[_],c=e.percents[_-1]||0,g=g/e.top*(r-c),h=e.percents[_+1],o=e.anim[r];break}i&&n.attr(e.anim[e.percents[_]])}if(o){if(u)u.initstatus=i,u.start=new Date-u.ms*i;else{for(var B in o)if(o[k](B)&&(ee[k](B)||n.paper.customAttributes[k](B)))switch(x[B]=n.attr(B),null==x[B]&&(x[B]=te[B]),v[B]=o[B],ee[B]){case Y:m[B]=(v[B]-x[B])/g;break;case"colour":x[B]=t.getRGB(x[B]);var S=t.getRGB(v[B]);m[B]={r:(S.r-x[B].r)/g,g:(S.g-x[B].g)/g,b:(S.b-x[B].b)/g};break;case"path":var C=Ie(x[B],v[B]),F=C[1];for(x[B]=C[0],m[B]=[],_=0,w=x[B].length;w>_;_++){m[B][_]=[0];for(var L=1,A=x[B][_].length;A>L;L++)m[B][_][L]=(F[_][L]-x[B][_][L])/g}break;case"transform":var P=n._,I=ze(P[B],v[B]);if(I)for(x[B]=I.from,v[B]=I.to,m[B]=[],m[B].real=!0,_=0,w=x[B].length;w>_;_++)for(m[B][_]=[x[B][_][0]],L=1,A=x[B][_].length;A>L;L++)m[B][_][L]=(v[B][_][L]-x[B][_][L])/g;else{var R=n.matrix||new f,q={_:{transform:P.transform},getBBox:function(){return n.getBBox(1)}};x[B]=[R.a,R.b,R.c,R.d,R.e,R.f],je(q,v[B]),v[B]=q._.transform,m[B]=[(q.matrix.a-R.a)/g,(q.matrix.b-R.b)/g,(q.matrix.c-R.c)/g,(q.matrix.d-R.d)/g,(q.matrix.e-R.e)/g,(q.matrix.f-R.f)/g]}break;case"csv":var j=E(o[B])[M](b),D=E(x[B])[M](b);if("clip-rect"==B)for(x[B]=D,m[B]=[],_=D.length;_--;)m[B][_]=(j[_]-x[B][_])/g;v[B]=j;break;default:for(j=[][T](o[B]),D=[][T](x[B]),m[B]=[],_=n.paper.customAttributes[B].length;_--;)m[B][_]=((j[_]||0)-(D[_]||0))/g}var z=o.easing,O=t.easing_formulas[z];if(!O)if(O=E(z).match(U),O&&5==O.length){var V=O;O=function(t){return d(t,+V[1],+V[2],+V[3],+V[4],g)}}else O=ce;if(p=o.start||e.start||+new Date,y={anim:e,percent:r,timestamp:p,start:p+(e.del||0),status:0,initstatus:i||0,stop:!1,ms:g,easing:O,from:x,diff:m,to:v,el:n,callback:o.callback,prev:c,next:h,repeat:s||e.times,origin:n.attr(),totalOrigin:a},sn.push(y),i&&!u&&!l&&(y.stop=!0,y.start=new Date-g*i,1==sn.length))return un();l&&(y.start=new Date-y.ms*i),1==sn.length&&on(un)}eve("raphael.anim.start."+n.id,n,e)}}function v(t){for(var e=0;sn.length>e;e++)sn[e].el.paper==t&&sn.splice(e--,1)}t.version="2.1.0",t.eve=eve;var m,y,b=/[, ]+/,_={circle:1,rect:1,path:1,ellipse:1,text:1,image:1},w=/\{(\d+)\}/g,k="hasOwnProperty",B={doc:document,win:window},S={was:Object.prototype[k].call(B.win,"Raphael"),is:B.win.Raphael},C=function(){this.ca=this.customAttributes={}},F="apply",T="concat",L="createTouch"in B.doc,A="",P=" ",E=String,M="split",I="click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel"[M](P),R={mousedown:"touchstart",mousemove:"touchmove",mouseup:"touchend"},q=E.prototype.toLowerCase,j=Math,D=j.max,z=j.min,O=j.abs,V=j.pow,X=j.PI,Y="number",G="string",N="array",W=Object.prototype.toString,$=(t._ISURL=/^url\(['"]?([^\)]+?)['"]?\)$/i,/^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i),H={NaN:1,Infinity:1,"-Infinity":1},U=/^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,Z=j.round,Q=parseFloat,J=parseInt,K=E.prototype.toUpperCase,te=t._availableAttrs={"arrow-end":"none","arrow-start":"none",blur:0,"clip-rect":"0 0 1e9 1e9",cursor:"default",cx:0,cy:0,fill:"#fff","fill-opacity":1,font:'10px "Arial"',"font-family":'"Arial"',"font-size":"10","font-style":"normal","font-weight":400,gradient:0,height:0,href:"http://raphaeljs.com/","letter-spacing":0,opacity:1,path:"M0,0",r:0,rx:0,ry:0,src:"",stroke:"#000","stroke-dasharray":"","stroke-linecap":"butt","stroke-linejoin":"butt","stroke-miterlimit":0,"stroke-opacity":1,"stroke-width":1,target:"_blank","text-anchor":"middle",title:"Raphael",transform:"",width:0,x:0,y:0},ee=t._availableAnimAttrs={blur:Y,"clip-rect":"csv",cx:Y,cy:Y,fill:"colour","fill-opacity":Y,"font-size":Y,height:Y,opacity:Y,path:"path",r:Y,rx:Y,ry:Y,stroke:"colour","stroke-opacity":Y,"stroke-width":Y,transform:"transform",width:Y,x:Y,y:Y},ne=/[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,re={hs:1,rg:1},ie=/,?([achlmqrstvxz]),?/gi,ae=/([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,se=/([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,oe=/(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi,ue=(t._radial_gradient=/^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/,{}),le=function(t,e){return Q(t)-Q(e)},he=function(){},ce=function(t){return t},fe=t._rectPath=function(t,e,n,r,i){return i?[["M",t+i,e],["l",n-2*i,0],["a",i,i,0,0,1,i,i],["l",0,r-2*i],["a",i,i,0,0,1,-i,i],["l",2*i-n,0],["a",i,i,0,0,1,-i,-i],["l",0,2*i-r],["a",i,i,0,0,1,i,-i],["z"]]:[["M",t,e],["l",n,0],["l",0,r],["l",-n,0],["z"]]},pe=function(t,e,n,r){return null==r&&(r=n),[["M",t,e],["m",0,-r],["a",n,r,0,1,1,0,2*r],["a",n,r,0,1,1,0,-2*r],["z"]]},de=t._getPath={path:function(t){return t.attr("path")},circle:function(t){var e=t.attrs;return pe(e.cx,e.cy,e.r)},ellipse:function(t){var e=t.attrs;return pe(e.cx,e.cy,e.rx,e.ry)},rect:function(t){var e=t.attrs;return fe(e.x,e.y,e.width,e.height,e.r)},image:function(t){var e=t.attrs;return fe(e.x,e.y,e.width,e.height)},text:function(t){var e=t._getBBox();return fe(e.x,e.y,e.width,e.height)},set:function(t){var e=t._getBBox();return fe(e.x,e.y,e.width,e.height)}},ge=t.mapPath=function(t,e){if(!e)return t;var n,r,i,a,s,o,u;for(t=Ie(t),i=0,s=t.length;s>i;i++)for(u=t[i],a=1,o=u.length;o>a;a+=2)n=e.x(u[a],u[a+1]),r=e.y(u[a],u[a+1]),u[a]=n,u[a+1]=r;return t};if(t._g=B,t.type=B.win.SVGAngle||B.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")?"SVG":"VML","VML"==t.type){var xe,ve=B.doc.createElement("div");if(ve.innerHTML='<v:shape adj="1"/>',xe=ve.firstChild,xe.style.behavior="url(#default#VML)",!xe||"object"!=typeof xe.adj)return t.type=A;ve=null}t.svg=!(t.vml="VML"==t.type),t._Paper=C,t.fn=y=C.prototype=t.prototype,t._id=0,t._oid=0,t.is=function(t,e){return e=q.call(e),"finite"==e?!H[k](+t):"array"==e?t instanceof Array:"null"==e&&null===t||e==typeof t&&null!==t||"object"==e&&t===Object(t)||"array"==e&&Array.isArray&&Array.isArray(t)||W.call(t).slice(8,-1).toLowerCase()==e},t.angle=function(e,n,r,i,a,s){if(null==a){var o=e-r,u=n-i;return o||u?(180+180*j.atan2(-u,-o)/X+360)%360:0}return t.angle(e,n,a,s)-t.angle(r,i,a,s)},t.rad=function(t){return t%360*X/180},t.deg=function(t){return 180*t/X%360},t.snapTo=function(e,n,r){if(r=t.is(r,"finite")?r:10,t.is(e,N)){for(var i=e.length;i--;)if(r>=O(e[i]-n))return e[i]}else{e=+e;var a=n%e;if(r>a)return n-a;if(a>e-r)return n-a+e}return n},t.createUUID=function(t,e){return function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(t,e).toUpperCase()}}(/[xy]/g,function(t){var e=0|16*j.random(),n="x"==t?e:8|3&e;return n.toString(16)}),t.setWindow=function(e){eve("raphael.setWindow",t,B.win,e),B.win=e,B.doc=B.win.document,t._engine.initWin&&t._engine.initWin(B.win)};var me=function(e){if(t.vml){var n,i=/^\s+|\s+$/g;try{var a=new ActiveXObject("htmlfile");a.write("<body>"),a.close(),n=a.body}catch(s){n=createPopup().document.body}var o=n.createTextRange();me=r(function(t){try{n.style.color=E(t).replace(i,A);var e=o.queryCommandValue("ForeColor");return e=(255&e)<<16|65280&e|(16711680&e)>>>16,"#"+("000000"+e.toString(16)).slice(-6)}catch(r){return"none"}})}else{var u=B.doc.createElement("i");u.title="RaphaÃ«l Colour Picker",u.style.display="none",B.doc.body.appendChild(u),me=r(function(t){return u.style.color=t,B.doc.defaultView.getComputedStyle(u,A).getPropertyValue("color")})}return me(e)},ye=function(){return"hsb("+[this.h,this.s,this.b]+")"},be=function(){return"hsl("+[this.h,this.s,this.l]+")"},_e=function(){return this.hex},we=function(e,n,r){if(null==n&&t.is(e,"object")&&"r"in e&&"g"in e&&"b"in e&&(r=e.b,n=e.g,e=e.r),null==n&&t.is(e,G)){var i=t.getRGB(e);e=i.r,n=i.g,r=i.b}return(e>1||n>1||r>1)&&(e/=255,n/=255,r/=255),[e,n,r]},ke=function(e,n,r,i){e*=255,n*=255,r*=255;var a={r:e,g:n,b:r,hex:t.rgb(e,n,r),toString:_e};return t.is(i,"finite")&&(a.opacity=i),a};t.color=function(e){var n;return t.is(e,"object")&&"h"in e&&"s"in e&&"b"in e?(n=t.hsb2rgb(e),e.r=n.r,e.g=n.g,e.b=n.b,e.hex=n.hex):t.is(e,"object")&&"h"in e&&"s"in e&&"l"in e?(n=t.hsl2rgb(e),e.r=n.r,e.g=n.g,e.b=n.b,e.hex=n.hex):(t.is(e,"string")&&(e=t.getRGB(e)),t.is(e,"object")&&"r"in e&&"g"in e&&"b"in e?(n=t.rgb2hsl(e),e.h=n.h,e.s=n.s,e.l=n.l,n=t.rgb2hsb(e),e.v=n.b):(e={hex:"none"},e.r=e.g=e.b=e.h=e.s=e.v=e.l=-1)),e.toString=_e,e},t.hsb2rgb=function(t,e,n,r){this.is(t,"object")&&"h"in t&&"s"in t&&"b"in t&&(n=t.b,e=t.s,t=t.h,r=t.o),t*=360;var i,a,s,o,u;return t=t%360/60,u=n*e,o=u*(1-O(t%2-1)),i=a=s=n-u,t=~~t,i+=[u,o,0,0,o,u][t],a+=[o,u,u,o,0,0][t],s+=[0,0,o,u,u,o][t],ke(i,a,s,r)},t.hsl2rgb=function(t,e,n,r){this.is(t,"object")&&"h"in t&&"s"in t&&"l"in t&&(n=t.l,e=t.s,t=t.h),(t>1||e>1||n>1)&&(t/=360,e/=100,n/=100),t*=360;var i,a,s,o,u;return t=t%360/60,u=2*e*(.5>n?n:1-n),o=u*(1-O(t%2-1)),i=a=s=n-u/2,t=~~t,i+=[u,o,0,0,o,u][t],a+=[o,u,u,o,0,0][t],s+=[0,0,o,u,u,o][t],ke(i,a,s,r)},t.rgb2hsb=function(t,e,n){n=we(t,e,n),t=n[0],e=n[1],n=n[2];var r,i,a,s;return a=D(t,e,n),s=a-z(t,e,n),r=0==s?null:a==t?(e-n)/s:a==e?(n-t)/s+2:(t-e)/s+4,r=60*((r+360)%6)/360,i=0==s?0:s/a,{h:r,s:i,b:a,toString:ye}},t.rgb2hsl=function(t,e,n){n=we(t,e,n),t=n[0],e=n[1],n=n[2];var r,i,a,s,o,u;return s=D(t,e,n),o=z(t,e,n),u=s-o,r=0==u?null:s==t?(e-n)/u:s==e?(n-t)/u+2:(t-e)/u+4,r=60*((r+360)%6)/360,a=(s+o)/2,i=0==u?0:.5>a?u/(2*a):u/(2-2*a),{h:r,s:i,l:a,toString:be}},t._path2string=function(){return this.join(",").replace(ie,"$1")},t._preload=function(t,e){var n=B.doc.createElement("img");n.style.cssText="position:absolute;left:-9999em;top:-9999em",n.onload=function(){e.call(this),this.onload=null,B.doc.body.removeChild(this)},n.onerror=function(){B.doc.body.removeChild(this)},B.doc.body.appendChild(n),n.src=t},t.getRGB=r(function(e){if(!e||(e=E(e)).indexOf("-")+1)return{r:-1,g:-1,b:-1,hex:"none",error:1,toString:i};if("none"==e)return{r:-1,g:-1,b:-1,hex:"none",toString:i};!(re[k](e.toLowerCase().substring(0,2))||"#"==e.charAt())&&(e=me(e));var n,r,a,s,o,u,l=e.match($);return l?(l[2]&&(a=J(l[2].substring(5),16),r=J(l[2].substring(3,5),16),n=J(l[2].substring(1,3),16)),l[3]&&(a=J((o=l[3].charAt(3))+o,16),r=J((o=l[3].charAt(2))+o,16),n=J((o=l[3].charAt(1))+o,16)),l[4]&&(u=l[4][M](ne),n=Q(u[0]),"%"==u[0].slice(-1)&&(n*=2.55),r=Q(u[1]),"%"==u[1].slice(-1)&&(r*=2.55),a=Q(u[2]),"%"==u[2].slice(-1)&&(a*=2.55),"rgba"==l[1].toLowerCase().slice(0,4)&&(s=Q(u[3])),u[3]&&"%"==u[3].slice(-1)&&(s/=100)),l[5]?(u=l[5][M](ne),n=Q(u[0]),"%"==u[0].slice(-1)&&(n*=2.55),r=Q(u[1]),"%"==u[1].slice(-1)&&(r*=2.55),a=Q(u[2]),"%"==u[2].slice(-1)&&(a*=2.55),("deg"==u[0].slice(-3)||"Â°"==u[0].slice(-1))&&(n/=360),"hsba"==l[1].toLowerCase().slice(0,4)&&(s=Q(u[3])),u[3]&&"%"==u[3].slice(-1)&&(s/=100),t.hsb2rgb(n,r,a,s)):l[6]?(u=l[6][M](ne),n=Q(u[0]),"%"==u[0].slice(-1)&&(n*=2.55),r=Q(u[1]),"%"==u[1].slice(-1)&&(r*=2.55),a=Q(u[2]),"%"==u[2].slice(-1)&&(a*=2.55),("deg"==u[0].slice(-3)||"Â°"==u[0].slice(-1))&&(n/=360),"hsla"==l[1].toLowerCase().slice(0,4)&&(s=Q(u[3])),u[3]&&"%"==u[3].slice(-1)&&(s/=100),t.hsl2rgb(n,r,a,s)):(l={r:n,g:r,b:a,toString:i},l.hex="#"+(16777216|a|r<<8|n<<16).toString(16).slice(1),t.is(s,"finite")&&(l.opacity=s),l)):{r:-1,g:-1,b:-1,hex:"none",error:1,toString:i}},t),t.hsb=r(function(e,n,r){return t.hsb2rgb(e,n,r).hex}),t.hsl=r(function(e,n,r){return t.hsl2rgb(e,n,r).hex}),t.rgb=r(function(t,e,n){return"#"+(16777216|n|e<<8|t<<16).toString(16).slice(1)}),t.getColor=function(t){var e=this.getColor.start=this.getColor.start||{h:0,s:1,b:t||.75},n=this.hsb2rgb(e.h,e.s,e.b);return e.h+=.075,e.h>1&&(e.h=0,e.s-=.2,0>=e.s&&(this.getColor.start={h:0,s:1,b:e.b})),n.hex},t.getColor.reset=function(){delete this.start},t.parsePathString=function(e){if(!e)return null;var n=Be(e);if(n.arr)return Ce(n.arr);var r={a:7,c:6,h:1,l:2,m:2,r:4,q:4,s:4,t:2,v:1,z:0},i=[];return t.is(e,N)&&t.is(e[0],N)&&(i=Ce(e)),i.length||E(e).replace(ae,function(t,e,n){var a=[],s=e.toLowerCase();if(n.replace(oe,function(t,e){e&&a.push(+e)}),"m"==s&&a.length>2&&(i.push([e][T](a.splice(0,2))),s="l",e="m"==e?"l":"L"),"r"==s)i.push([e][T](a));else for(;a.length>=r[s]&&(i.push([e][T](a.splice(0,r[s]))),r[s]););}),i.toString=t._path2string,n.arr=Ce(i),i},t.parseTransformString=r(function(e){if(!e)return null;var n=[];return t.is(e,N)&&t.is(e[0],N)&&(n=Ce(e)),n.length||E(e).replace(se,function(t,e,r){var i=[];q.call(e),r.replace(oe,function(t,e){e&&i.push(+e)}),n.push([e][T](i))}),n.toString=t._path2string,n});var Be=function(t){var e=Be.ps=Be.ps||{};return e[t]?e[t].sleep=100:e[t]={sleep:100},setTimeout(function(){for(var n in e)e[k](n)&&n!=t&&(e[n].sleep--,!e[n].sleep&&delete e[n])}),e[t]};t.findDotsAtSegment=function(t,e,n,r,i,a,s,o,u){var l=1-u,h=V(l,3),c=V(l,2),f=u*u,p=f*u,d=h*t+3*c*u*n+3*l*u*u*i+p*s,g=h*e+3*c*u*r+3*l*u*u*a+p*o,x=t+2*u*(n-t)+f*(i-2*n+t),v=e+2*u*(r-e)+f*(a-2*r+e),m=n+2*u*(i-n)+f*(s-2*i+n),y=r+2*u*(a-r)+f*(o-2*a+r),b=l*t+u*n,_=l*e+u*r,w=l*i+u*s,k=l*a+u*o,B=90-180*j.atan2(x-m,v-y)/X;return(x>m||y>v)&&(B+=180),{x:d,y:g,m:{x:x,y:v},n:{x:m,y:y},start:{x:b,y:_},end:{x:w,y:k},alpha:B}},t.bezierBBox=function(e,n,r,i,a,s,o,u){t.is(e,"array")||(e=[e,n,r,i,a,s,o,u]);var l=Me.apply(null,e);return{x:l.min.x,y:l.min.y,x2:l.max.x,y2:l.max.y,width:l.max.x-l.min.x,height:l.max.y-l.min.y}},t.isPointInsideBBox=function(t,e,n){return e>=t.x&&t.x2>=e&&n>=t.y&&t.y2>=n},t.isBBoxIntersect=function(e,n){var r=t.isPointInsideBBox;return r(n,e.x,e.y)||r(n,e.x2,e.y)||r(n,e.x,e.y2)||r(n,e.x2,e.y2)||r(e,n.x,n.y)||r(e,n.x2,n.y)||r(e,n.x,n.y2)||r(e,n.x2,n.y2)||(e.x<n.x2&&e.x>n.x||n.x<e.x2&&n.x>e.x)&&(e.y<n.y2&&e.y>n.y||n.y<e.y2&&n.y>e.y)},t.pathIntersection=function(t,e){return c(t,e)},t.pathIntersectionNumber=function(t,e){return c(t,e,1)},t.isPointInsidePath=function(e,n,r){var i=t.pathBBox(e);return t.isPointInsideBBox(i,n,r)&&1==c(e,[["M",n,r],["H",i.x2+10]],1)%2},t._removedFactory=function(t){return function(){eve("raphael.log",null,"RaphaÃ«l: you are calling to method â"+t+"â of removed object",t)}};var Se=t.pathBBox=function(t){var n=Be(t);if(n.bbox)return e(n.bbox);if(!t)return{x:0,y:0,width:0,height:0,x2:0,y2:0};t=Ie(t);for(var r,i=0,a=0,s=[],o=[],u=0,l=t.length;l>u;u++)if(r=t[u],"M"==r[0])i=r[1],a=r[2],s.push(i),o.push(a);else{var h=Me(i,a,r[1],r[2],r[3],r[4],r[5],r[6]);s=s[T](h.min.x,h.max.x),o=o[T](h.min.y,h.max.y),i=r[5],a=r[6]}var c=z[F](0,s),f=z[F](0,o),p=D[F](0,s),d=D[F](0,o),g=p-c,x=d-f,v={x:c,y:f,x2:p,y2:d,width:g,height:x,cx:c+g/2,cy:f+x/2};return n.bbox=e(v),v},Ce=function(n){var r=e(n);return r.toString=t._path2string,r},Fe=t._pathToRelative=function(e){var n=Be(e);if(n.rel)return Ce(n.rel);t.is(e,N)&&t.is(e&&e[0],N)||(e=t.parsePathString(e));var r=[],i=0,a=0,s=0,o=0,u=0;"M"==e[0][0]&&(i=e[0][1],a=e[0][2],s=i,o=a,u++,r.push(["M",i,a]));for(var l=u,h=e.length;h>l;l++){var c=r[l]=[],f=e[l];if(f[0]!=q.call(f[0]))switch(c[0]=q.call(f[0]),c[0]){case"a":c[1]=f[1],c[2]=f[2],c[3]=f[3],c[4]=f[4],c[5]=f[5],c[6]=+(f[6]-i).toFixed(3),c[7]=+(f[7]-a).toFixed(3);break;case"v":c[1]=+(f[1]-a).toFixed(3);break;case"m":s=f[1],o=f[2];default:for(var p=1,d=f.length;d>p;p++)c[p]=+(f[p]-(p%2?i:a)).toFixed(3)}else{c=r[l]=[],"m"==f[0]&&(s=f[1]+i,o=f[2]+a);for(var g=0,x=f.length;x>g;g++)r[l][g]=f[g]}var v=r[l].length;switch(r[l][0]){case"z":i=s,a=o;break;case"h":i+=+r[l][v-1];break;case"v":a+=+r[l][v-1];break;default:i+=+r[l][v-2],a+=+r[l][v-1]}}return r.toString=t._path2string,n.rel=Ce(r),r},Te=t._pathToAbsolute=function(e){var n=Be(e);if(n.abs)return Ce(n.abs);if(t.is(e,N)&&t.is(e&&e[0],N)||(e=t.parsePathString(e)),!e||!e.length)return[["M",0,0]];var r=[],i=0,s=0,o=0,u=0,l=0;"M"==e[0][0]&&(i=+e[0][1],s=+e[0][2],o=i,u=s,l++,r[0]=["M",i,s]);for(var h,c,f=3==e.length&&"M"==e[0][0]&&"R"==e[1][0].toUpperCase()&&"Z"==e[2][0].toUpperCase(),p=l,d=e.length;d>p;p++){if(r.push(h=[]),c=e[p],c[0]!=K.call(c[0]))switch(h[0]=K.call(c[0]),h[0]){case"A":h[1]=c[1],h[2]=c[2],h[3]=c[3],h[4]=c[4],h[5]=c[5],h[6]=+(c[6]+i),h[7]=+(c[7]+s);break;case"V":h[1]=+c[1]+s;break;case"H":h[1]=+c[1]+i;break;case"R":for(var g=[i,s][T](c.slice(1)),x=2,v=g.length;v>x;x++)g[x]=+g[x]+i,g[++x]=+g[x]+s;r.pop(),r=r[T](a(g,f));break;case"M":o=+c[1]+i,u=+c[2]+s;default:for(x=1,v=c.length;v>x;x++)h[x]=+c[x]+(x%2?i:s)}else if("R"==c[0])g=[i,s][T](c.slice(1)),r.pop(),r=r[T](a(g,f)),h=["R"][T](c.slice(-2));else for(var m=0,y=c.length;y>m;m++)h[m]=c[m];switch(h[0]){case"Z":i=o,s=u;break;case"H":i=h[1];break;case"V":s=h[1];break;case"M":o=h[h.length-2],u=h[h.length-1];default:i=h[h.length-2],s=h[h.length-1]}}return r.toString=t._path2string,n.abs=Ce(r),r},Le=function(t,e,n,r){return[t,e,n,r,n,r]},Ae=function(t,e,n,r,i,a){var s=1/3,o=2/3;return[s*t+o*n,s*e+o*r,s*i+o*n,s*a+o*r,i,a]},Pe=function(t,e,n,i,a,s,o,u,l,h){var c,f=120*X/180,p=X/180*(+a||0),d=[],g=r(function(t,e,n){var r=t*j.cos(n)-e*j.sin(n),i=t*j.sin(n)+e*j.cos(n);return{x:r,y:i}});if(h)B=h[0],S=h[1],w=h[2],k=h[3];else{c=g(t,e,-p),t=c.x,e=c.y,c=g(u,l,-p),u=c.x,l=c.y;var x=(j.cos(X/180*a),j.sin(X/180*a),(t-u)/2),v=(e-l)/2,m=x*x/(n*n)+v*v/(i*i);m>1&&(m=j.sqrt(m),n=m*n,i=m*i);var y=n*n,b=i*i,_=(s==o?-1:1)*j.sqrt(O((y*b-y*v*v-b*x*x)/(y*v*v+b*x*x))),w=_*n*v/i+(t+u)/2,k=_*-i*x/n+(e+l)/2,B=j.asin(((e-k)/i).toFixed(9)),S=j.asin(((l-k)/i).toFixed(9));B=w>t?X-B:B,S=w>u?X-S:S,0>B&&(B=2*X+B),0>S&&(S=2*X+S),o&&B>S&&(B-=2*X),!o&&S>B&&(S-=2*X)}var C=S-B;if(O(C)>f){var F=S,L=u,A=l;S=B+f*(o&&S>B?1:-1),u=w+n*j.cos(S),l=k+i*j.sin(S),d=Pe(u,l,n,i,a,0,o,L,A,[S,F,w,k])}C=S-B;var P=j.cos(B),E=j.sin(B),I=j.cos(S),R=j.sin(S),q=j.tan(C/4),D=4/3*n*q,z=4/3*i*q,V=[t,e],Y=[t+D*E,e-z*P],G=[u+D*R,l-z*I],N=[u,l];if(Y[0]=2*V[0]-Y[0],Y[1]=2*V[1]-Y[1],h)return[Y,G,N][T](d);d=[Y,G,N][T](d).join()[M](",");for(var W=[],$=0,H=d.length;H>$;$++)W[$]=$%2?g(d[$-1],d[$],p).y:g(d[$],d[$+1],p).x;return W},Ee=function(t,e,n,r,i,a,s,o,u){var l=1-u;return{x:V(l,3)*t+3*V(l,2)*u*n+3*l*u*u*i+V(u,3)*s,y:V(l,3)*e+3*V(l,2)*u*r+3*l*u*u*a+V(u,3)*o}},Me=r(function(t,e,n,r,i,a,s,o){var u,l=i-2*n+t-(s-2*i+n),h=2*(n-t)-2*(i-n),c=t-n,f=(-h+j.sqrt(h*h-4*l*c))/2/l,p=(-h-j.sqrt(h*h-4*l*c))/2/l,d=[e,o],g=[t,s];return O(f)>"1e12"&&(f=.5),O(p)>"1e12"&&(p=.5),f>0&&1>f&&(u=Ee(t,e,n,r,i,a,s,o,f),g.push(u.x),d.push(u.y)),p>0&&1>p&&(u=Ee(t,e,n,r,i,a,s,o,p),g.push(u.x),d.push(u.y)),l=a-2*r+e-(o-2*a+r),h=2*(r-e)-2*(a-r),c=e-r,f=(-h+j.sqrt(h*h-4*l*c))/2/l,p=(-h-j.sqrt(h*h-4*l*c))/2/l,O(f)>"1e12"&&(f=.5),O(p)>"1e12"&&(p=.5),f>0&&1>f&&(u=Ee(t,e,n,r,i,a,s,o,f),g.push(u.x),d.push(u.y)),p>0&&1>p&&(u=Ee(t,e,n,r,i,a,s,o,p),g.push(u.x),d.push(u.y)),{min:{x:z[F](0,g),y:z[F](0,d)},max:{x:D[F](0,g),y:D[F](0,d)}}}),Ie=t._path2curve=r(function(t,e){var n=!e&&Be(t);if(!e&&n.curve)return Ce(n.curve);for(var r=Te(t),i=e&&Te(e),a={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},s={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},o=(function(t,e){var n,r;if(!t)return["C",e.x,e.y,e.x,e.y,e.x,e.y];switch(!(t[0]in{T:1,Q:1})&&(e.qx=e.qy=null),t[0]){case"M":e.X=t[1],e.Y=t[2];break;case"A":t=["C"][T](Pe[F](0,[e.x,e.y][T](t.slice(1))));break;case"S":n=e.x+(e.x-(e.bx||e.x)),r=e.y+(e.y-(e.by||e.y)),t=["C",n,r][T](t.slice(1));break;case"T":e.qx=e.x+(e.x-(e.qx||e.x)),e.qy=e.y+(e.y-(e.qy||e.y)),t=["C"][T](Ae(e.x,e.y,e.qx,e.qy,t[1],t[2]));break;case"Q":e.qx=t[1],e.qy=t[2],t=["C"][T](Ae(e.x,e.y,t[1],t[2],t[3],t[4]));break;case"L":t=["C"][T](Le(e.x,e.y,t[1],t[2]));break;case"H":t=["C"][T](Le(e.x,e.y,t[1],e.y));break;case"V":t=["C"][T](Le(e.x,e.y,e.x,t[1]));break;case"Z":t=["C"][T](Le(e.x,e.y,e.X,e.Y))}return t}),u=function(t,e){if(t[e].length>7){t[e].shift();for(var n=t[e];n.length;)t.splice(e++,0,["C"][T](n.splice(0,6)));t.splice(e,1),c=D(r.length,i&&i.length||0)}},l=function(t,e,n,a,s){t&&e&&"M"==t[s][0]&&"M"!=e[s][0]&&(e.splice(s,0,["M",a.x,a.y]),n.bx=0,n.by=0,n.x=t[s][1],n.y=t[s][2],c=D(r.length,i&&i.length||0))},h=0,c=D(r.length,i&&i.length||0);c>h;h++){r[h]=o(r[h],a),u(r,h),i&&(i[h]=o(i[h],s)),i&&u(i,h),l(r,i,a,s,h),l(i,r,s,a,h);var f=r[h],p=i&&i[h],d=f.length,g=i&&p.length;a.x=f[d-2],a.y=f[d-1],a.bx=Q(f[d-4])||a.x,a.by=Q(f[d-3])||a.y,s.bx=i&&(Q(p[g-4])||s.x),s.by=i&&(Q(p[g-3])||s.y),s.x=i&&p[g-2],s.y=i&&p[g-1]}return i||(n.curve=Ce(r)),i?[r,i]:r},null,Ce),Re=(t._parseDots=r(function(e){for(var n=[],r=0,i=e.length;i>r;r++){var a={},s=e[r].match(/^([^:]*):?([\d\.]*)/);if(a.color=t.getRGB(s[1]),a.color.error)return null;a.color=a.color.hex,s[2]&&(a.offset=s[2]+"%"),n.push(a)}for(r=1,i=n.length-1;i>r;r++)if(!n[r].offset){for(var o=Q(n[r-1].offset||0),u=0,l=r+1;i>l;l++)if(n[l].offset){u=n[l].offset;break}u||(u=100,l=i),u=Q(u);for(var h=(u-o)/(l-r+1);l>r;r++)o+=h,n[r].offset=o+"%"}return n}),t._tear=function(t,e){t==e.top&&(e.top=t.prev),t==e.bottom&&(e.bottom=t.next),t.next&&(t.next.prev=t.prev),t.prev&&(t.prev.next=t.next)}),qe=(t._tofront=function(t,e){e.top!==t&&(Re(t,e),t.next=null,t.prev=e.top,e.top.next=t,e.top=t)},t._toback=function(t,e){e.bottom!==t&&(Re(t,e),t.next=e.bottom,t.prev=null,e.bottom.prev=t,e.bottom=t)},t._insertafter=function(t,e,n){Re(t,n),e==n.top&&(n.top=t),e.next&&(e.next.prev=t),t.next=e.next,t.prev=e,e.next=t},t._insertbefore=function(t,e,n){Re(t,n),e==n.bottom&&(n.bottom=t),e.prev&&(e.prev.next=t),t.prev=e.prev,e.prev=t,t.next=e},t.toMatrix=function(t,e){var n=Se(t),r={_:{transform:A},getBBox:function(){return n}};return je(r,e),r.matrix}),je=(t.transformPath=function(t,e){return ge(t,qe(t,e))},t._extractTransform=function(e,n){if(null==n)return e._.transform;n=E(n).replace(/\.{3}|\u2026/g,e._.transform||A);var r=t.parseTransformString(n),i=0,a=0,s=0,o=1,u=1,l=e._,h=new f;if(l.transform=r||[],r)for(var c=0,p=r.length;p>c;c++){var d,g,x,v,m,y=r[c],b=y.length,_=E(y[0]).toLowerCase(),w=y[0]!=_,k=w?h.invert():0;"t"==_&&3==b?w?(d=k.x(0,0),g=k.y(0,0),x=k.x(y[1],y[2]),v=k.y(y[1],y[2]),h.translate(x-d,v-g)):h.translate(y[1],y[2]):"r"==_?2==b?(m=m||e.getBBox(1),h.rotate(y[1],m.x+m.width/2,m.y+m.height/2),i+=y[1]):4==b&&(w?(x=k.x(y[2],y[3]),v=k.y(y[2],y[3]),h.rotate(y[1],x,v)):h.rotate(y[1],y[2],y[3]),i+=y[1]):"s"==_?2==b||3==b?(m=m||e.getBBox(1),h.scale(y[1],y[b-1],m.x+m.width/2,m.y+m.height/2),o*=y[1],u*=y[b-1]):5==b&&(w?(x=k.x(y[3],y[4]),v=k.y(y[3],y[4]),h.scale(y[1],y[2],x,v)):h.scale(y[1],y[2],y[3],y[4]),o*=y[1],u*=y[2]):"m"==_&&7==b&&h.add(y[1],y[2],y[3],y[4],y[5],y[6]),l.dirtyT=1,e.matrix=h}e.matrix=h,l.sx=o,l.sy=u,l.deg=i,l.dx=a=h.e,l.dy=s=h.f,1==o&&1==u&&!i&&l.bbox?(l.bbox.x+=+a,l.bbox.y+=+s):l.dirtyT=1}),De=function(t){var e=t[0];switch(e.toLowerCase()){case"t":return[e,0,0];case"m":return[e,1,0,0,1,0,0];case"r":return 4==t.length?[e,0,t[2],t[3]]:[e,0];case"s":return 5==t.length?[e,1,1,t[3],t[4]]:3==t.length?[e,1,1]:[e,1]}},ze=t._equaliseTransform=function(e,n){n=E(n).replace(/\.{3}|\u2026/g,e),e=t.parseTransformString(e)||[],n=t.parseTransformString(n)||[];for(var r,i,a,s,o=D(e.length,n.length),u=[],l=[],h=0;o>h;h++){if(a=e[h]||De(n[h]),s=n[h]||De(a),a[0]!=s[0]||"r"==a[0].toLowerCase()&&(a[2]!=s[2]||a[3]!=s[3])||"s"==a[0].toLowerCase()&&(a[3]!=s[3]||a[4]!=s[4]))return;for(u[h]=[],l[h]=[],r=0,i=D(a.length,s.length);i>r;r++)r in a&&(u[h][r]=a[r]),r in s&&(l[h][r]=s[r])}return{from:u,to:l}};t._getContainer=function(e,n,r,i){var a;return a=null!=i||t.is(e,"object")?e:B.doc.getElementById(e),null!=a?a.tagName?null==n?{container:a,width:a.style.pixelWidth||a.offsetWidth,height:a.style.pixelHeight||a.offsetHeight}:{container:a,width:n,height:r}:{container:1,x:e,y:n,width:r,height:i}:void 0},t.pathToRelative=Fe,t._engine={},t.path2curve=Ie,t.matrix=function(t,e,n,r,i,a){return new f(t,e,n,r,i,a)},function(e){function n(t){return t[0]*t[0]+t[1]*t[1]}function r(t){var e=j.sqrt(n(t));t[0]&&(t[0]/=e),t[1]&&(t[1]/=e)}e.add=function(t,e,n,r,i,a){var s,o,u,l,h=[[],[],[]],c=[[this.a,this.c,this.e],[this.b,this.d,this.f],[0,0,1]],p=[[t,n,i],[e,r,a],[0,0,1]];for(t&&t instanceof f&&(p=[[t.a,t.c,t.e],[t.b,t.d,t.f],[0,0,1]]),s=0;3>s;s++)for(o=0;3>o;o++){for(l=0,u=0;3>u;u++)l+=c[s][u]*p[u][o];h[s][o]=l}this.a=h[0][0],this.b=h[1][0],this.c=h[0][1],this.d=h[1][1],this.e=h[0][2],this.f=h[1][2]},e.invert=function(){var t=this,e=t.a*t.d-t.b*t.c;return new f(t.d/e,-t.b/e,-t.c/e,t.a/e,(t.c*t.f-t.d*t.e)/e,(t.b*t.e-t.a*t.f)/e)},e.clone=function(){return new f(this.a,this.b,this.c,this.d,this.e,this.f)},e.translate=function(t,e){this.add(1,0,0,1,t,e)},e.scale=function(t,e,n,r){null==e&&(e=t),(n||r)&&this.add(1,0,0,1,n,r),this.add(t,0,0,e,0,0),(n||r)&&this.add(1,0,0,1,-n,-r)},e.rotate=function(e,n,r){e=t.rad(e),n=n||0,r=r||0;var i=+j.cos(e).toFixed(9),a=+j.sin(e).toFixed(9);this.add(i,a,-a,i,n,r),this.add(1,0,0,1,-n,-r)},e.x=function(t,e){return t*this.a+e*this.c+this.e},e.y=function(t,e){return t*this.b+e*this.d+this.f},e.get=function(t){return+this[E.fromCharCode(97+t)].toFixed(4)},e.toString=function(){return t.svg?"matrix("+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)].join()+")":[this.get(0),this.get(2),this.get(1),this.get(3),0,0].join()},e.toFilter=function(){return"progid:DXImageTransform.Microsoft.Matrix(M11="+this.get(0)+", M12="+this.get(2)+", M21="+this.get(1)+", M22="+this.get(3)+", Dx="+this.get(4)+", Dy="+this.get(5)+", sizingmethod='auto expand')"},e.offset=function(){return[this.e.toFixed(4),this.f.toFixed(4)]},e.split=function(){var e={};e.dx=this.e,e.dy=this.f;var i=[[this.a,this.c],[this.b,this.d]];e.scalex=j.sqrt(n(i[0])),r(i[0]),e.shear=i[0][0]*i[1][0]+i[0][1]*i[1][1],i[1]=[i[1][0]-i[0][0]*e.shear,i[1][1]-i[0][1]*e.shear],e.scaley=j.sqrt(n(i[1])),r(i[1]),e.shear/=e.scaley;var a=-i[0][1],s=i[1][1];return 0>s?(e.rotate=t.deg(j.acos(s)),0>a&&(e.rotate=360-e.rotate)):e.rotate=t.deg(j.asin(a)),e.isSimple=!(+e.shear.toFixed(9)||e.scalex.toFixed(9)!=e.scaley.toFixed(9)&&e.rotate),e.isSuperSimple=!+e.shear.toFixed(9)&&e.scalex.toFixed(9)==e.scaley.toFixed(9)&&!e.rotate,e.noRotation=!+e.shear.toFixed(9)&&!e.rotate,e
},e.toTransformString=function(t){var e=t||this[M]();return e.isSimple?(e.scalex=+e.scalex.toFixed(4),e.scaley=+e.scaley.toFixed(4),e.rotate=+e.rotate.toFixed(4),(e.dx||e.dy?"t"+[e.dx,e.dy]:A)+(1!=e.scalex||1!=e.scaley?"s"+[e.scalex,e.scaley,0,0]:A)+(e.rotate?"r"+[e.rotate,0,0]:A)):"m"+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)]}}(f.prototype);var Oe=navigator.userAgent.match(/Version\/(.*?)\s/)||navigator.userAgent.match(/Chrome\/(\d+)/);y.safari="Apple Computer, Inc."==navigator.vendor&&(Oe&&4>Oe[1]||"iP"==navigator.platform.slice(0,2))||"Google Inc."==navigator.vendor&&Oe&&8>Oe[1]?function(){var t=this.rect(-99,-99,this.width+99,this.height+99).attr({stroke:"none"});setTimeout(function(){t.remove()})}:he;for(var Ve=function(){this.returnValue=!1},Xe=function(){return this.originalEvent.preventDefault()},Ye=function(){this.cancelBubble=!0},Ge=function(){return this.originalEvent.stopPropagation()},Ne=function(){return B.doc.addEventListener?function(t,e,n,r){var i=L&&R[e]?R[e]:e,a=function(i){var a=B.doc.documentElement.scrollTop||B.doc.body.scrollTop,s=B.doc.documentElement.scrollLeft||B.doc.body.scrollLeft,o=i.clientX+s,u=i.clientY+a;if(L&&R[k](e))for(var l=0,h=i.targetTouches&&i.targetTouches.length;h>l;l++)if(i.targetTouches[l].target==t){var c=i;i=i.targetTouches[l],i.originalEvent=c,i.preventDefault=Xe,i.stopPropagation=Ge;break}return n.call(r,i,o,u)};return t.addEventListener(i,a,!1),function(){return t.removeEventListener(i,a,!1),!0}}:B.doc.attachEvent?function(t,e,n,r){var i=function(t){t=t||B.win.event;var e=B.doc.documentElement.scrollTop||B.doc.body.scrollTop,i=B.doc.documentElement.scrollLeft||B.doc.body.scrollLeft,a=t.clientX+i,s=t.clientY+e;return t.preventDefault=t.preventDefault||Ve,t.stopPropagation=t.stopPropagation||Ye,n.call(r,t,a,s)};t.attachEvent("on"+e,i);var a=function(){return t.detachEvent("on"+e,i),!0};return a}:void 0}(),We=[],$e=function(t){for(var e,n=t.clientX,r=t.clientY,i=B.doc.documentElement.scrollTop||B.doc.body.scrollTop,a=B.doc.documentElement.scrollLeft||B.doc.body.scrollLeft,s=We.length;s--;){if(e=We[s],L){for(var o,u=t.touches.length;u--;)if(o=t.touches[u],o.identifier==e.el._drag.id){n=o.clientX,r=o.clientY,(t.originalEvent?t.originalEvent:t).preventDefault();break}}else t.preventDefault();var l,h=e.el.node,c=h.nextSibling,f=h.parentNode,p=h.style.display;B.win.opera&&f.removeChild(h),h.style.display="none",l=e.el.paper.getElementByPoint(n,r),h.style.display=p,B.win.opera&&(c?f.insertBefore(h,c):f.appendChild(h)),l&&eve("raphael.drag.over."+e.el.id,e.el,l),n+=a,r+=i,eve("raphael.drag.move."+e.el.id,e.move_scope||e.el,n-e.el._drag.x,r-e.el._drag.y,n,r,t)}},He=function(e){t.unmousemove($e).unmouseup(He);for(var n,r=We.length;r--;)n=We[r],n.el._drag={},eve("raphael.drag.end."+n.el.id,n.end_scope||n.start_scope||n.move_scope||n.el,e);We=[]},Ue=t.el={},Ze=I.length;Ze--;)(function(e){t[e]=Ue[e]=function(n,r){return t.is(n,"function")&&(this.events=this.events||[],this.events.push({name:e,f:n,unbind:Ne(this.shape||this.node||B.doc,e,n,r||this)})),this},t["un"+e]=Ue["un"+e]=function(t){for(var n=this.events||[],r=n.length;r--;)if(n[r].name==e&&n[r].f==t)return n[r].unbind(),n.splice(r,1),!n.length&&delete this.events,this;return this}})(I[Ze]);Ue.data=function(e,n){var r=ue[this.id]=ue[this.id]||{};if(1==arguments.length){if(t.is(e,"object")){for(var i in e)e[k](i)&&this.data(i,e[i]);return this}return eve("raphael.data.get."+this.id,this,r[e],e),r[e]}return r[e]=n,eve("raphael.data.set."+this.id,this,n,e),this},Ue.removeData=function(t){return null==t?ue[this.id]={}:ue[this.id]&&delete ue[this.id][t],this},Ue.getData=function(){return e(ue[this.id]||{})},Ue.hover=function(t,e,n,r){return this.mouseover(t,n).mouseout(e,r||n)},Ue.unhover=function(t,e){return this.unmouseover(t).unmouseout(e)};var Qe=[];Ue.drag=function(e,n,r,i,a,s){function o(o){(o.originalEvent||o).preventDefault();var u=B.doc.documentElement.scrollTop||B.doc.body.scrollTop,l=B.doc.documentElement.scrollLeft||B.doc.body.scrollLeft;this._drag.x=o.clientX+l,this._drag.y=o.clientY+u,this._drag.id=o.identifier,!We.length&&t.mousemove($e).mouseup(He),We.push({el:this,move_scope:i,start_scope:a,end_scope:s}),n&&eve.on("raphael.drag.start."+this.id,n),e&&eve.on("raphael.drag.move."+this.id,e),r&&eve.on("raphael.drag.end."+this.id,r),eve("raphael.drag.start."+this.id,a||i||this,o.clientX+l,o.clientY+u,o)}return this._drag={},Qe.push({el:this,start:o}),this.mousedown(o),this},Ue.onDragOver=function(t){t?eve.on("raphael.drag.over."+this.id,t):eve.unbind("raphael.drag.over."+this.id)},Ue.undrag=function(){for(var e=Qe.length;e--;)Qe[e].el==this&&(this.unmousedown(Qe[e].start),Qe.splice(e,1),eve.unbind("raphael.drag.*."+this.id));!Qe.length&&t.unmousemove($e).unmouseup(He),We=[]},y.circle=function(e,n,r){var i=t._engine.circle(this,e||0,n||0,r||0);return this.__set__&&this.__set__.push(i),i},y.rect=function(e,n,r,i,a){var s=t._engine.rect(this,e||0,n||0,r||0,i||0,a||0);return this.__set__&&this.__set__.push(s),s},y.ellipse=function(e,n,r,i){var a=t._engine.ellipse(this,e||0,n||0,r||0,i||0);return this.__set__&&this.__set__.push(a),a},y.path=function(e){e&&!t.is(e,G)&&!t.is(e[0],N)&&(e+=A);var n=t._engine.path(t.format[F](t,arguments),this);return this.__set__&&this.__set__.push(n),n},y.image=function(e,n,r,i,a){var s=t._engine.image(this,e||"about:blank",n||0,r||0,i||0,a||0);return this.__set__&&this.__set__.push(s),s},y.text=function(e,n,r){var i=t._engine.text(this,e||0,n||0,E(r));return this.__set__&&this.__set__.push(i),i},y.set=function(e){!t.is(e,"array")&&(e=Array.prototype.splice.call(arguments,0,arguments.length));var n=new hn(e);return this.__set__&&this.__set__.push(n),n.paper=this,n.type="set",n},y.setStart=function(t){this.__set__=t||this.set()},y.setFinish=function(){var t=this.__set__;return delete this.__set__,t},y.setSize=function(e,n){return t._engine.setSize.call(this,e,n)},y.setViewBox=function(e,n,r,i,a){return t._engine.setViewBox.call(this,e,n,r,i,a)},y.top=y.bottom=null,y.raphael=t;var Je=function(t){var e=t.getBoundingClientRect(),n=t.ownerDocument,r=n.body,i=n.documentElement,a=i.clientTop||r.clientTop||0,s=i.clientLeft||r.clientLeft||0,o=e.top+(B.win.pageYOffset||i.scrollTop||r.scrollTop)-a,u=e.left+(B.win.pageXOffset||i.scrollLeft||r.scrollLeft)-s;return{y:o,x:u}};y.getElementByPoint=function(t,e){var n=this,r=n.canvas,i=B.doc.elementFromPoint(t,e);if(B.win.opera&&"svg"==i.tagName){var a=Je(r),s=r.createSVGRect();s.x=t-a.x,s.y=e-a.y,s.width=s.height=1;var o=r.getIntersectionList(s,null);o.length&&(i=o[o.length-1])}if(!i)return null;for(;i.parentNode&&i!=r.parentNode&&!i.raphael;)i=i.parentNode;return i==n.canvas.parentNode&&(i=r),i=i&&i.raphael?n.getById(i.raphaelid):null},y.getElementsByBBox=function(e){var n=this.set();return this.forEach(function(r){t.isBBoxIntersect(r.getBBox(),e)&&n.push(r)}),n},y.getById=function(t){for(var e=this.bottom;e;){if(e.id==t)return e;e=e.next}return null},y.forEach=function(t,e){for(var n=this.bottom;n;){if(t.call(e,n)===!1)return this;n=n.next}return this},y.getElementsByPoint=function(t,e){var n=this.set();return this.forEach(function(r){r.isPointInside(t,e)&&n.push(r)}),n},Ue.isPointInside=function(e,n){var r=this.realPath=this.realPath||de[this.type](this);return t.isPointInsidePath(r,e,n)},Ue.getBBox=function(t){if(this.removed)return{};var e=this._;return t?((e.dirty||!e.bboxwt)&&(this.realPath=de[this.type](this),e.bboxwt=Se(this.realPath),e.bboxwt.toString=p,e.dirty=0),e.bboxwt):((e.dirty||e.dirtyT||!e.bbox)&&((e.dirty||!this.realPath)&&(e.bboxwt=0,this.realPath=de[this.type](this)),e.bbox=Se(ge(this.realPath,this.matrix)),e.bbox.toString=p,e.dirty=e.dirtyT=0),e.bbox)},Ue.clone=function(){if(this.removed)return null;var t=this.paper[this.type]().attr(this.attr());return this.__set__&&this.__set__.push(t),t},Ue.glow=function(t){if("text"==this.type)return null;t=t||{};var e={width:(t.width||10)+(+this.attr("stroke-width")||1),fill:t.fill||!1,opacity:t.opacity||.5,offsetx:t.offsetx||0,offsety:t.offsety||0,color:t.color||"#000"},n=e.width/2,r=this.paper,i=r.set(),a=this.realPath||de[this.type](this);a=this.matrix?ge(a,this.matrix):a;for(var s=1;n+1>s;s++)i.push(r.path(a).attr({stroke:e.color,fill:e.fill?e.color:"none","stroke-linejoin":"round","stroke-linecap":"round","stroke-width":+(e.width/n*s).toFixed(3),opacity:+(e.opacity/n).toFixed(3)}));return i.insertBefore(this).translate(e.offsetx,e.offsety)};var Ke=function(e,n,r,i,a,s,l,h,c){return null==c?o(e,n,r,i,a,s,l,h):t.findDotsAtSegment(e,n,r,i,a,s,l,h,u(e,n,r,i,a,s,l,h,c))},tn=function(e,n){return function(r,i,a){r=Ie(r);for(var s,o,u,l,h,c="",f={},p=0,d=0,g=r.length;g>d;d++){if(u=r[d],"M"==u[0])s=+u[1],o=+u[2];else{if(l=Ke(s,o,u[1],u[2],u[3],u[4],u[5],u[6]),p+l>i){if(n&&!f.start){if(h=Ke(s,o,u[1],u[2],u[3],u[4],u[5],u[6],i-p),c+=["C"+h.start.x,h.start.y,h.m.x,h.m.y,h.x,h.y],a)return c;f.start=c,c=["M"+h.x,h.y+"C"+h.n.x,h.n.y,h.end.x,h.end.y,u[5],u[6]].join(),p+=l,s=+u[5],o=+u[6];continue}if(!e&&!n)return h=Ke(s,o,u[1],u[2],u[3],u[4],u[5],u[6],i-p),{x:h.x,y:h.y,alpha:h.alpha}}p+=l,s=+u[5],o=+u[6]}c+=u.shift()+u}return f.end=c,h=e?p:n?f:t.findDotsAtSegment(s,o,u[0],u[1],u[2],u[3],u[4],u[5],1),h.alpha&&(h={x:h.x,y:h.y,alpha:h.alpha}),h}},en=tn(1),nn=tn(),rn=tn(0,1);t.getTotalLength=en,t.getPointAtLength=nn,t.getSubpath=function(t,e,n){if(1e-6>this.getTotalLength(t)-n)return rn(t,e).end;var r=rn(t,n,1);return e?rn(r,e).end:r},Ue.getTotalLength=function(){return"path"==this.type?this.node.getTotalLength?this.node.getTotalLength():en(this.attrs.path):void 0},Ue.getPointAtLength=function(t){return"path"==this.type?nn(this.attrs.path,t):void 0},Ue.getSubpath=function(e,n){return"path"==this.type?t.getSubpath(this.attrs.path,e,n):void 0};var an=t.easing_formulas={linear:function(t){return t},"<":function(t){return V(t,1.7)},">":function(t){return V(t,.48)},"<>":function(t){var e=.48-t/1.04,n=j.sqrt(.1734+e*e),r=n-e,i=V(O(r),1/3)*(0>r?-1:1),a=-n-e,s=V(O(a),1/3)*(0>a?-1:1),o=i+s+.5;return 3*(1-o)*o*o+o*o*o},backIn:function(t){var e=1.70158;return t*t*((e+1)*t-e)},backOut:function(t){t-=1;var e=1.70158;return t*t*((e+1)*t+e)+1},elastic:function(t){return t==!!t?t:V(2,-10*t)*j.sin((t-.075)*2*X/.3)+1},bounce:function(t){var e,n=7.5625,r=2.75;return 1/r>t?e=n*t*t:2/r>t?(t-=1.5/r,e=n*t*t+.75):2.5/r>t?(t-=2.25/r,e=n*t*t+.9375):(t-=2.625/r,e=n*t*t+.984375),e}};an.easeIn=an["ease-in"]=an["<"],an.easeOut=an["ease-out"]=an[">"],an.easeInOut=an["ease-in-out"]=an["<>"],an["back-in"]=an.backIn,an["back-out"]=an.backOut;var sn=[],on=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){setTimeout(t,16)},un=function(){for(var e=+new Date,n=0;sn.length>n;n++){var r=sn[n];if(!r.el.removed&&!r.paused){var i,a,s=e-r.start,o=r.ms,u=r.easing,l=r.from,h=r.diff,c=r.to,f=(r.t,r.el),p={},d={};if(r.initstatus?(s=(r.initstatus*r.anim.top-r.prev)/(r.percent-r.prev)*o,r.status=r.initstatus,delete r.initstatus,r.stop&&sn.splice(n--,1)):r.status=(r.prev+(r.percent-r.prev)*(s/o))/r.anim.top,!(0>s))if(o>s){var g=u(s/o);for(var v in l)if(l[k](v)){switch(ee[v]){case Y:i=+l[v]+g*o*h[v];break;case"colour":i="rgb("+[ln(Z(l[v].r+g*o*h[v].r)),ln(Z(l[v].g+g*o*h[v].g)),ln(Z(l[v].b+g*o*h[v].b))].join(",")+")";break;case"path":i=[];for(var m=0,y=l[v].length;y>m;m++){i[m]=[l[v][m][0]];for(var b=1,_=l[v][m].length;_>b;b++)i[m][b]=+l[v][m][b]+g*o*h[v][m][b];i[m]=i[m].join(P)}i=i.join(P);break;case"transform":if(h[v].real)for(i=[],m=0,y=l[v].length;y>m;m++)for(i[m]=[l[v][m][0]],b=1,_=l[v][m].length;_>b;b++)i[m][b]=l[v][m][b]+g*o*h[v][m][b];else{var w=function(t){return+l[v][t]+g*o*h[v][t]};i=[["m",w(0),w(1),w(2),w(3),w(4),w(5)]]}break;case"csv":if("clip-rect"==v)for(i=[],m=4;m--;)i[m]=+l[v][m]+g*o*h[v][m];break;default:var B=[][T](l[v]);for(i=[],m=f.paper.customAttributes[v].length;m--;)i[m]=+B[m]+g*o*h[v][m]}p[v]=i}f.attr(p),function(t,e,n){setTimeout(function(){eve("raphael.anim.frame."+t,e,n)})}(f.id,f,r.anim)}else{if(function(e,n,r){setTimeout(function(){eve("raphael.anim.frame."+n.id,n,r),eve("raphael.anim.finish."+n.id,n,r),t.is(e,"function")&&e.call(n)})}(r.callback,f,r.anim),f.attr(c),sn.splice(n--,1),r.repeat>1&&!r.next){for(a in c)c[k](a)&&(d[a]=r.totalOrigin[a]);r.el.attr(d),x(r.anim,r.el,r.anim.percents[0],null,r.totalOrigin,r.repeat-1)}r.next&&!r.stop&&x(r.anim,r.el,r.next,null,r.totalOrigin,r.repeat)}}}t.svg&&f&&f.paper&&f.paper.safari(),sn.length&&on(un)},ln=function(t){return t>255?255:0>t?0:t};Ue.animateWith=function(e,n,r,i,a,s){var o=this;if(o.removed)return s&&s.call(o),o;var u=r instanceof g?r:t.animation(r,i,a,s);x(u,o,u.percents[0],null,o.attr());for(var l=0,h=sn.length;h>l;l++)if(sn[l].anim==n&&sn[l].el==e){sn[h-1].start=sn[l].start;break}return o},Ue.onAnimation=function(t){return t?eve.on("raphael.anim.frame."+this.id,t):eve.unbind("raphael.anim.frame."+this.id),this},g.prototype.delay=function(t){var e=new g(this.anim,this.ms);return e.times=this.times,e.del=+t||0,e},g.prototype.repeat=function(t){var e=new g(this.anim,this.ms);return e.del=this.del,e.times=j.floor(D(t,0))||1,e},t.animation=function(e,n,r,i){if(e instanceof g)return e;(t.is(r,"function")||!r)&&(i=i||r||null,r=null),e=Object(e),n=+n||0;var a,s,o={};for(s in e)e[k](s)&&Q(s)!=s&&Q(s)+"%"!=s&&(a=!0,o[s]=e[s]);return a?(r&&(o.easing=r),i&&(o.callback=i),new g({100:o},n)):new g(e,n)},Ue.animate=function(e,n,r,i){var a=this;if(a.removed)return i&&i.call(a),a;var s=e instanceof g?e:t.animation(e,n,r,i);return x(s,a,s.percents[0],null,a.attr()),a},Ue.setTime=function(t,e){return t&&null!=e&&this.status(t,z(e,t.ms)/t.ms),this},Ue.status=function(t,e){var n,r,i=[],a=0;if(null!=e)return x(t,this,-1,z(e,1)),this;for(n=sn.length;n>a;a++)if(r=sn[a],r.el.id==this.id&&(!t||r.anim==t)){if(t)return r.status;i.push({anim:r.anim,status:r.status})}return t?0:i},Ue.pause=function(t){for(var e=0;sn.length>e;e++)sn[e].el.id!=this.id||t&&sn[e].anim!=t||eve("raphael.anim.pause."+this.id,this,sn[e].anim)!==!1&&(sn[e].paused=!0);return this},Ue.resume=function(t){for(var e=0;sn.length>e;e++)if(sn[e].el.id==this.id&&(!t||sn[e].anim==t)){var n=sn[e];eve("raphael.anim.resume."+this.id,this,n.anim)!==!1&&(delete n.paused,this.status(n.anim,n.status))}return this},Ue.stop=function(t){for(var e=0;sn.length>e;e++)sn[e].el.id!=this.id||t&&sn[e].anim!=t||eve("raphael.anim.stop."+this.id,this,sn[e].anim)!==!1&&sn.splice(e--,1);return this},eve.on("raphael.remove",v),eve.on("raphael.clear",v),Ue.toString=function(){return"RaphaÃ«lâs object"};var hn=function(t){if(this.items=[],this.length=0,this.type="set",t)for(var e=0,n=t.length;n>e;e++)!t[e]||t[e].constructor!=Ue.constructor&&t[e].constructor!=hn||(this[this.items.length]=this.items[this.items.length]=t[e],this.length++)},cn=hn.prototype;cn.push=function(){for(var t,e,n=0,r=arguments.length;r>n;n++)t=arguments[n],!t||t.constructor!=Ue.constructor&&t.constructor!=hn||(e=this.items.length,this[e]=this.items[e]=t,this.length++);return this},cn.pop=function(){return this.length&&delete this[this.length--],this.items.pop()},cn.forEach=function(t,e){for(var n=0,r=this.items.length;r>n;n++)if(t.call(e,this.items[n],n)===!1)return this;return this};for(var fn in Ue)Ue[k](fn)&&(cn[fn]=function(t){return function(){var e=arguments;return this.forEach(function(n){n[t][F](n,e)})}}(fn));cn.attr=function(e,n){if(e&&t.is(e,N)&&t.is(e[0],"object"))for(var r=0,i=e.length;i>r;r++)this.items[r].attr(e[r]);else for(var a=0,s=this.items.length;s>a;a++)this.items[a].attr(e,n);return this},cn.clear=function(){for(;this.length;)this.pop()},cn.splice=function(t,e){t=0>t?D(this.length+t,0):t,e=D(0,z(this.length-t,e));var n,r=[],i=[],a=[];for(n=2;arguments.length>n;n++)a.push(arguments[n]);for(n=0;e>n;n++)i.push(this[t+n]);for(;this.length-t>n;n++)r.push(this[t+n]);var s=a.length;for(n=0;s+r.length>n;n++)this.items[t+n]=this[t+n]=s>n?a[n]:r[n-s];for(n=this.items.length=this.length-=e-s;this[n];)delete this[n++];return new hn(i)},cn.exclude=function(t){for(var e=0,n=this.length;n>e;e++)if(this[e]==t)return this.splice(e,1),!0},cn.animate=function(e,n,r,i){(t.is(r,"function")||!r)&&(i=r||null);var a,s,o=this.items.length,u=o,l=this;if(!o)return this;i&&(s=function(){!--o&&i.call(l)}),r=t.is(r,G)?r:s;var h=t.animation(e,n,r,s);for(a=this.items[--u].animate(h);u--;)this.items[u]&&!this.items[u].removed&&this.items[u].animateWith(a,h,h);return this},cn.insertAfter=function(t){for(var e=this.items.length;e--;)this.items[e].insertAfter(t);return this},cn.getBBox=function(){for(var t=[],e=[],n=[],r=[],i=this.items.length;i--;)if(!this.items[i].removed){var a=this.items[i].getBBox();t.push(a.x),e.push(a.y),n.push(a.x+a.width),r.push(a.y+a.height)}return t=z[F](0,t),e=z[F](0,e),n=D[F](0,n),r=D[F](0,r),{x:t,y:e,x2:n,y2:r,width:n-t,height:r-e}},cn.clone=function(t){t=this.paper.set();for(var e=0,n=this.items.length;n>e;e++)t.push(this.items[e].clone());return t},cn.toString=function(){return"RaphaÃ«lâs set"},cn.glow=function(t){var e=this.paper.set();return this.forEach(function(n){var r=n.glow(t);null!=r&&r.forEach(function(t){e.push(t)})}),e},t.registerFont=function(t){if(!t.face)return t;this.fonts=this.fonts||{};var e={w:t.w,face:{},glyphs:{}},n=t.face["font-family"];for(var r in t.face)t.face[k](r)&&(e.face[r]=t.face[r]);if(this.fonts[n]?this.fonts[n].push(e):this.fonts[n]=[e],!t.svg){e.face["units-per-em"]=J(t.face["units-per-em"],10);for(var i in t.glyphs)if(t.glyphs[k](i)){var a=t.glyphs[i];if(e.glyphs[i]={w:a.w,k:{},d:a.d&&"M"+a.d.replace(/[mlcxtrv]/g,function(t){return{l:"L",c:"C",x:"z",t:"m",r:"l",v:"c"}[t]||"M"})+"z"},a.k)for(var s in a.k)a[k](s)&&(e.glyphs[i].k[s]=a.k[s])}}return t},y.getFont=function(e,n,r,i){if(i=i||"normal",r=r||"normal",n=+n||{normal:400,bold:700,lighter:300,bolder:800}[n]||400,t.fonts){var a=t.fonts[e];if(!a){var s=RegExp("(^|\\s)"+e.replace(/[^\w\d\s+!~.:_-]/g,A)+"(\\s|$)","i");for(var o in t.fonts)if(t.fonts[k](o)&&s.test(o)){a=t.fonts[o];break}}var u;if(a)for(var l=0,h=a.length;h>l&&(u=a[l],u.face["font-weight"]!=n||u.face["font-style"]!=r&&u.face["font-style"]||u.face["font-stretch"]!=i);l++);return u}},y.print=function(e,n,r,i,a,s,o){s=s||"middle",o=D(z(o||0,1),-1);var u,l=E(r)[M](A),h=0,c=0,f=A;if(t.is(i,"string")&&(i=this.getFont(i)),i){u=(a||16)/i.face["units-per-em"];for(var p=i.face.bbox[M](b),d=+p[0],g=p[3]-p[1],x=0,v=+p[1]+("baseline"==s?g+ +i.face.descent:g/2),m=0,y=l.length;y>m;m++){if("\n"==l[m])h=0,w=0,c=0,x+=g;else{var _=c&&i.glyphs[l[m-1]]||{},w=i.glyphs[l[m]];h+=c?(_.w||i.w)+(_.k&&_.k[l[m]]||0)+i.w*o:0,c=1}w&&w.d&&(f+=t.transformPath(w.d,["t",h*u,x*u,"s",u,u,d,v,"t",(e-d)/u,(n-v)/u]))}}return this.path(f).attr({fill:"#000",stroke:"none"})},y.add=function(e){if(t.is(e,"array"))for(var n,r=this.set(),i=0,a=e.length;a>i;i++)n=e[i]||{},_[k](n.type)&&r.push(this[n.type]().attr(n));return r},t.format=function(e,n){var r=t.is(n,N)?[0][T](n):arguments;return e&&t.is(e,G)&&r.length-1&&(e=e.replace(w,function(t,e){return null==r[++e]?A:r[e]})),e||A},t.fullfill=function(){var t=/\{([^\}]+)\}/g,e=/(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,n=function(t,n,r){var i=r;return n.replace(e,function(t,e,n,r,a){e=e||r,i&&(e in i&&(i=i[e]),"function"==typeof i&&a&&(i=i()))}),i=(null==i||i==r?t:i)+""};return function(e,r){return(e+"").replace(t,function(t,e){return n(t,e,r)})}}(),t.ninja=function(){return S.was?B.win.Raphael=S.is:delete Raphael,t},t.st=cn,function(e,n,r){function i(){/in/.test(e.readyState)?setTimeout(i,9):t.eve("raphael.DOMload")}null==e.readyState&&e.addEventListener&&(e.addEventListener(n,r=function(){e.removeEventListener(n,r,!1),e.readyState="complete"},!1),e.readyState="loading"),i()}(document,"DOMContentLoaded"),S.was?B.win.Raphael=t:Raphael=t,eve.on("raphael.DOMload",function(){m=!0})})();window.Raphael&&window.Raphael.svg&&function(t){var e="hasOwnProperty",r=String,n=parseFloat,i=parseInt,a=Math,s=a.max,o=a.abs,u=a.pow,h=/[, ]+/,l=t.eve,c="",f=" ",p="http://www.w3.org/1999/xlink",d={block:"M5,0 0,2.5 5,5z",classic:"M5,0 0,2.5 5,5 3.5,3 3.5,2z",diamond:"M2.5,0 5,2.5 2.5,5 0,2.5z",open:"M6,1 1,3.5 6,6",oval:"M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"},g={};t.toString=function(){return"Your browser supports SVG.\nYou are running RaphaÃ«l "+this.version};var v=function(n,i){if(i){"string"==typeof n&&(n=v(n));for(var a in i)i[e](a)&&("xlink:"==a.substring(0,6)?n.setAttributeNS(p,a.substring(6),r(i[a])):n.setAttribute(a,r(i[a])))}else n=t._g.doc.createElementNS("http://www.w3.org/2000/svg",n),n.style&&(n.style.webkitTapHighlightColor="rgba(0,0,0,0)");return n},x=function(e,i){var h="linear",l=e.id+i,f=.5,p=.5,d=e.node,g=e.paper,x=d.style,y=t._g.doc.getElementById(l);if(!y){if(i=r(i).replace(t._radial_gradient,function(t,e,r){if(h="radial",e&&r){f=n(e),p=n(r);var i=2*(p>.5)-1;u(f-.5,2)+u(p-.5,2)>.25&&(p=a.sqrt(.25-u(f-.5,2))*i+.5)&&.5!=p&&(p=p.toFixed(5)-1e-5*i)}return c}),i=i.split(/\s*\-\s*/),"linear"==h){var m=i.shift();if(m=-n(m),isNaN(m))return null;var b=[0,0,a.cos(t.rad(m)),a.sin(t.rad(m))],_=1/(s(o(b[2]),o(b[3]))||1);b[2]*=_,b[3]*=_,0>b[2]&&(b[0]=-b[2],b[2]=0),0>b[3]&&(b[1]=-b[3],b[3]=0)}var w=t._parseDots(i);if(!w)return null;if(l=l.replace(/[\(\)\s,\xb0#]/g,"_"),e.gradient&&l!=e.gradient.id&&(g.defs.removeChild(e.gradient),delete e.gradient),!e.gradient){y=v(h+"Gradient",{id:l}),e.gradient=y,v(y,"radial"==h?{fx:f,fy:p}:{x1:b[0],y1:b[1],x2:b[2],y2:b[3],gradientTransform:e.matrix.invert()}),g.defs.appendChild(y);for(var k=0,C=w.length;C>k;k++)y.appendChild(v("stop",{offset:w[k].offset?w[k].offset:k?"100%":"0%","stop-color":w[k].color||"#fff"}))}}return v(d,{fill:"url(#"+l+")",opacity:1,"fill-opacity":1}),x.fill=c,x.opacity=1,x.fillOpacity=1,1},y=function(t){var e=t.getBBox(1);v(t.pattern,{patternTransform:t.matrix.invert()+" translate("+e.x+","+e.y+")"})},m=function(n,i,a){if("path"==n.type){for(var s,o,u,h,l,f=r(i).toLowerCase().split("-"),p=n.paper,x=a?"end":"start",y=n.node,m=n.attrs,b=m["stroke-width"],_=f.length,w="classic",k=3,C=3,B=5;_--;)switch(f[_]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":w=f[_];break;case"wide":C=5;break;case"narrow":C=2;break;case"long":k=5;break;case"short":k=2}if("open"==w?(k+=2,C+=2,B+=2,u=1,h=a?4:1,l={fill:"none",stroke:m.stroke}):(h=u=k/2,l={fill:m.stroke,stroke:"none"}),n._.arrows?a?(n._.arrows.endPath&&g[n._.arrows.endPath]--,n._.arrows.endMarker&&g[n._.arrows.endMarker]--):(n._.arrows.startPath&&g[n._.arrows.startPath]--,n._.arrows.startMarker&&g[n._.arrows.startMarker]--):n._.arrows={},"none"!=w){var S="raphael-marker-"+w,A="raphael-marker-"+x+w+k+C;t._g.doc.getElementById(S)?g[S]++:(p.defs.appendChild(v(v("path"),{"stroke-linecap":"round",d:d[w],id:S})),g[S]=1);var T,M=t._g.doc.getElementById(A);M?(g[A]++,T=M.getElementsByTagName("use")[0]):(M=v(v("marker"),{id:A,markerHeight:C,markerWidth:k,orient:"auto",refX:h,refY:C/2}),T=v(v("use"),{"xlink:href":"#"+S,transform:(a?"rotate(180 "+k/2+" "+C/2+") ":c)+"scale("+k/B+","+C/B+")","stroke-width":(1/((k/B+C/B)/2)).toFixed(4)}),M.appendChild(T),p.defs.appendChild(M),g[A]=1),v(T,l);var F=u*("diamond"!=w&&"oval"!=w);a?(s=n._.arrows.startdx*b||0,o=t.getTotalLength(m.path)-F*b):(s=F*b,o=t.getTotalLength(m.path)-(n._.arrows.enddx*b||0)),l={},l["marker-"+x]="url(#"+A+")",(o||s)&&(l.d=Raphael.getSubpath(m.path,s,o)),v(y,l),n._.arrows[x+"Path"]=S,n._.arrows[x+"Marker"]=A,n._.arrows[x+"dx"]=F,n._.arrows[x+"Type"]=w,n._.arrows[x+"String"]=i}else a?(s=n._.arrows.startdx*b||0,o=t.getTotalLength(m.path)-s):(s=0,o=t.getTotalLength(m.path)-(n._.arrows.enddx*b||0)),n._.arrows[x+"Path"]&&v(y,{d:Raphael.getSubpath(m.path,s,o)}),delete n._.arrows[x+"Path"],delete n._.arrows[x+"Marker"],delete n._.arrows[x+"dx"],delete n._.arrows[x+"Type"],delete n._.arrows[x+"String"];for(l in g)if(g[e](l)&&!g[l]){var L=t._g.doc.getElementById(l);L&&L.parentNode.removeChild(L)}}},b={"":[0],none:[0],"-":[3,1],".":[1,1],"-.":[3,1,1,1],"-..":[3,1,1,1,1,1],". ":[1,3],"- ":[4,3],"--":[8,3],"- .":[4,3,1,3],"--.":[8,3,1,3],"--..":[8,3,1,3,1,3]},_=function(t,e,n){if(e=b[r(e).toLowerCase()]){for(var i=t.attrs["stroke-width"]||"1",a={round:i,square:i,butt:0}[t.attrs["stroke-linecap"]||n["stroke-linecap"]]||0,s=[],o=e.length;o--;)s[o]=e[o]*i+(o%2?1:-1)*a;v(t.node,{"stroke-dasharray":s.join(",")})}},w=function(n,a){var u=n.node,l=n.attrs,f=u.style.visibility;u.style.visibility="hidden";for(var d in a)if(a[e](d)){if(!t._availableAttrs[e](d))continue;var g=a[d];switch(l[d]=g,d){case"blur":n.blur(g);break;case"href":case"title":case"target":var b=u.parentNode;if("a"!=b.tagName.toLowerCase()){var w=v("a");b.insertBefore(w,u),w.appendChild(u),b=w}"target"==d?b.setAttributeNS(p,"show","blank"==g?"new":g):b.setAttributeNS(p,d,g);break;case"cursor":u.style.cursor=g;break;case"transform":n.transform(g);break;case"arrow-start":m(n,g);break;case"arrow-end":m(n,g,1);break;case"clip-rect":var k=r(g).split(h);if(4==k.length){n.clip&&n.clip.parentNode.parentNode.removeChild(n.clip.parentNode);var B=v("clipPath"),S=v("rect");B.id=t.createUUID(),v(S,{x:k[0],y:k[1],width:k[2],height:k[3]}),B.appendChild(S),n.paper.defs.appendChild(B),v(u,{"clip-path":"url(#"+B.id+")"}),n.clip=S}if(!g){var A=u.getAttribute("clip-path");if(A){var T=t._g.doc.getElementById(A.replace(/(^url\(#|\)$)/g,c));T&&T.parentNode.removeChild(T),v(u,{"clip-path":c}),delete n.clip}}break;case"path":"path"==n.type&&(v(u,{d:g?l.path=t._pathToAbsolute(g):"M0,0"}),n._.dirty=1,n._.arrows&&("startString"in n._.arrows&&m(n,n._.arrows.startString),"endString"in n._.arrows&&m(n,n._.arrows.endString,1)));break;case"width":if(u.setAttribute(d,g),n._.dirty=1,!l.fx)break;d="x",g=l.x;case"x":l.fx&&(g=-l.x-(l.width||0));case"rx":if("rx"==d&&"rect"==n.type)break;case"cx":u.setAttribute(d,g),n.pattern&&y(n),n._.dirty=1;break;case"height":if(u.setAttribute(d,g),n._.dirty=1,!l.fy)break;d="y",g=l.y;case"y":l.fy&&(g=-l.y-(l.height||0));case"ry":if("ry"==d&&"rect"==n.type)break;case"cy":u.setAttribute(d,g),n.pattern&&y(n),n._.dirty=1;break;case"r":"rect"==n.type?v(u,{rx:g,ry:g}):u.setAttribute(d,g),n._.dirty=1;break;case"src":"image"==n.type&&u.setAttributeNS(p,"href",g);break;case"stroke-width":(1!=n._.sx||1!=n._.sy)&&(g/=s(o(n._.sx),o(n._.sy))||1),n.paper._vbSize&&(g*=n.paper._vbSize),u.setAttribute(d,g),l["stroke-dasharray"]&&_(n,l["stroke-dasharray"],a),n._.arrows&&("startString"in n._.arrows&&m(n,n._.arrows.startString),"endString"in n._.arrows&&m(n,n._.arrows.endString,1));break;case"stroke-dasharray":_(n,g,a);break;case"fill":var M=r(g).match(t._ISURL);if(M){B=v("pattern");var F=v("image");B.id=t.createUUID(),v(B,{x:0,y:0,patternUnits:"userSpaceOnUse",height:1,width:1}),v(F,{x:0,y:0,"xlink:href":M[1]}),B.appendChild(F),function(e){t._preload(M[1],function(){var t=this.offsetWidth,r=this.offsetHeight;v(e,{width:t,height:r}),v(F,{width:t,height:r}),n.paper.safari()})}(B),n.paper.defs.appendChild(B),v(u,{fill:"url(#"+B.id+")"}),n.pattern=B,n.pattern&&y(n);break}var L=t.getRGB(g);if(L.error){if(("circle"==n.type||"ellipse"==n.type||"r"!=r(g).charAt())&&x(n,g)){if("opacity"in l||"fill-opacity"in l){var N=t._g.doc.getElementById(u.getAttribute("fill").replace(/^url\(#|\)$/g,c));if(N){var P=N.getElementsByTagName("stop");v(P[P.length-1],{"stop-opacity":("opacity"in l?l.opacity:1)*("fill-opacity"in l?l["fill-opacity"]:1)})}}l.gradient=g,l.fill="none";break}}else delete a.gradient,delete l.gradient,!t.is(l.opacity,"undefined")&&t.is(a.opacity,"undefined")&&v(u,{opacity:l.opacity}),!t.is(l["fill-opacity"],"undefined")&&t.is(a["fill-opacity"],"undefined")&&v(u,{"fill-opacity":l["fill-opacity"]});L[e]("opacity")&&v(u,{"fill-opacity":L.opacity>1?L.opacity/100:L.opacity});case"stroke":L=t.getRGB(g),u.setAttribute(d,L.hex),"stroke"==d&&L[e]("opacity")&&v(u,{"stroke-opacity":L.opacity>1?L.opacity/100:L.opacity}),"stroke"==d&&n._.arrows&&("startString"in n._.arrows&&m(n,n._.arrows.startString),"endString"in n._.arrows&&m(n,n._.arrows.endString,1));break;case"gradient":("circle"==n.type||"ellipse"==n.type||"r"!=r(g).charAt())&&x(n,g);break;case"opacity":l.gradient&&!l[e]("stroke-opacity")&&v(u,{"stroke-opacity":g>1?g/100:g});case"fill-opacity":if(l.gradient){N=t._g.doc.getElementById(u.getAttribute("fill").replace(/^url\(#|\)$/g,c)),N&&(P=N.getElementsByTagName("stop"),v(P[P.length-1],{"stop-opacity":g}));break}default:"font-size"==d&&(g=i(g,10)+"px");var E=d.replace(/(\-.)/g,function(t){return t.substring(1).toUpperCase()});u.style[E]=g,n._.dirty=1,u.setAttribute(d,g)}}C(n,a),u.style.visibility=f},k=1.2,C=function(n,a){if("text"==n.type&&(a[e]("text")||a[e]("font")||a[e]("font-size")||a[e]("x")||a[e]("y"))){var s=n.attrs,o=n.node,u=o.firstChild?i(t._g.doc.defaultView.getComputedStyle(o.firstChild,c).getPropertyValue("font-size"),10):10;if(a[e]("text")){for(s.text=a.text;o.firstChild;)o.removeChild(o.firstChild);for(var h,l=r(a.text).split("\n"),f=[],p=0,d=l.length;d>p;p++)h=v("tspan"),p&&v(h,{dy:u*k,x:s.x}),h.appendChild(t._g.doc.createTextNode(l[p])),o.appendChild(h),f[p]=h}else for(f=o.getElementsByTagName("tspan"),p=0,d=f.length;d>p;p++)p?v(f[p],{dy:u*k,x:s.x}):v(f[0],{dy:0});v(o,{x:s.x,y:s.y}),n._.dirty=1;var g=n._getBBox(),x=s.y-(g.y+g.height/2);x&&t.is(x,"finite")&&v(f[0],{dy:x})}},B=function(e,r){this[0]=this.node=e,e.raphael=!0,this.id=t._oid++,e.raphaelid=this.id,this.matrix=t.matrix(),this.realPath=null,this.paper=r,this.attrs=this.attrs||{},this._={transform:[],sx:1,sy:1,deg:0,dx:0,dy:0,dirty:1},!r.bottom&&(r.bottom=this),this.prev=r.top,r.top&&(r.top.next=this),r.top=this,this.next=null},S=t.el;B.prototype=S,S.constructor=B,t._engine.path=function(t,e){var r=v("path");e.canvas&&e.canvas.appendChild(r);var n=new B(r,e);return n.type="path",w(n,{fill:"none",stroke:"#000",path:t}),n},S.rotate=function(t,e,i){if(this.removed)return this;if(t=r(t).split(h),t.length-1&&(e=n(t[1]),i=n(t[2])),t=n(t[0]),null==i&&(e=i),null==e||null==i){var a=this.getBBox(1);e=a.x+a.width/2,i=a.y+a.height/2}return this.transform(this._.transform.concat([["r",t,e,i]])),this},S.scale=function(t,e,i,a){if(this.removed)return this;if(t=r(t).split(h),t.length-1&&(e=n(t[1]),i=n(t[2]),a=n(t[3])),t=n(t[0]),null==e&&(e=t),null==a&&(i=a),null==i||null==a)var s=this.getBBox(1);return i=null==i?s.x+s.width/2:i,a=null==a?s.y+s.height/2:a,this.transform(this._.transform.concat([["s",t,e,i,a]])),this},S.translate=function(t,e){return this.removed?this:(t=r(t).split(h),t.length-1&&(e=n(t[1])),t=n(t[0])||0,e=+e||0,this.transform(this._.transform.concat([["t",t,e]])),this)},S.transform=function(r){var n=this._;if(null==r)return n.transform;if(t._extractTransform(this,r),this.clip&&v(this.clip,{transform:this.matrix.invert()}),this.pattern&&y(this),this.node&&v(this.node,{transform:this.matrix}),1!=n.sx||1!=n.sy){var i=this.attrs[e]("stroke-width")?this.attrs["stroke-width"]:1;this.attr({"stroke-width":i})}return this},S.hide=function(){return!this.removed&&this.paper.safari(this.node.style.display="none"),this},S.show=function(){return!this.removed&&this.paper.safari(this.node.style.display=""),this},S.remove=function(){if(!this.removed&&this.node.parentNode){var e=this.paper;e.__set__&&e.__set__.exclude(this),l.unbind("raphael.*.*."+this.id),this.gradient&&e.defs.removeChild(this.gradient),t._tear(this,e),"a"==this.node.parentNode.tagName.toLowerCase()?this.node.parentNode.parentNode.removeChild(this.node.parentNode):this.node.parentNode.removeChild(this.node);for(var r in this)this[r]="function"==typeof this[r]?t._removedFactory(r):null;this.removed=!0}},S._getBBox=function(){if("none"==this.node.style.display){this.show();var t=!0}var e={};try{e=this.node.getBBox()}catch(r){}finally{e=e||{}}return t&&this.hide(),e},S.attr=function(r,n){if(this.removed)return this;if(null==r){var i={};for(var a in this.attrs)this.attrs[e](a)&&(i[a]=this.attrs[a]);return i.gradient&&"none"==i.fill&&(i.fill=i.gradient)&&delete i.gradient,i.transform=this._.transform,i}if(null==n&&t.is(r,"string")){if("fill"==r&&"none"==this.attrs.fill&&this.attrs.gradient)return this.attrs.gradient;if("transform"==r)return this._.transform;for(var s=r.split(h),o={},u=0,c=s.length;c>u;u++)r=s[u],o[r]=r in this.attrs?this.attrs[r]:t.is(this.paper.customAttributes[r],"function")?this.paper.customAttributes[r].def:t._availableAttrs[r];return c-1?o:o[s[0]]}if(null==n&&t.is(r,"array")){for(o={},u=0,c=r.length;c>u;u++)o[r[u]]=this.attr(r[u]);return o}if(null!=n){var f={};f[r]=n}else null!=r&&t.is(r,"object")&&(f=r);for(var p in f)l("raphael.attr."+p+"."+this.id,this,f[p]);for(p in this.paper.customAttributes)if(this.paper.customAttributes[e](p)&&f[e](p)&&t.is(this.paper.customAttributes[p],"function")){var d=this.paper.customAttributes[p].apply(this,[].concat(f[p]));this.attrs[p]=f[p];for(var g in d)d[e](g)&&(f[g]=d[g])}return w(this,f),this},S.toFront=function(){if(this.removed)return this;"a"==this.node.parentNode.tagName.toLowerCase()?this.node.parentNode.parentNode.appendChild(this.node.parentNode):this.node.parentNode.appendChild(this.node);var e=this.paper;return e.top!=this&&t._tofront(this,e),this},S.toBack=function(){if(this.removed)return this;var e=this.node.parentNode;return"a"==e.tagName.toLowerCase()?e.parentNode.insertBefore(this.node.parentNode,this.node.parentNode.parentNode.firstChild):e.firstChild!=this.node&&e.insertBefore(this.node,this.node.parentNode.firstChild),t._toback(this,this.paper),this.paper,this},S.insertAfter=function(e){if(this.removed)return this;var r=e.node||e[e.length-1].node;return r.nextSibling?r.parentNode.insertBefore(this.node,r.nextSibling):r.parentNode.appendChild(this.node),t._insertafter(this,e,this.paper),this},S.insertBefore=function(e){if(this.removed)return this;var r=e.node||e[0].node;return r.parentNode.insertBefore(this.node,r),t._insertbefore(this,e,this.paper),this},S.blur=function(e){var r=this;if(0!==+e){var n=v("filter"),i=v("feGaussianBlur");r.attrs.blur=e,n.id=t.createUUID(),v(i,{stdDeviation:+e||1.5}),n.appendChild(i),r.paper.defs.appendChild(n),r._blur=n,v(r.node,{filter:"url(#"+n.id+")"})}else r._blur&&(r._blur.parentNode.removeChild(r._blur),delete r._blur,delete r.attrs.blur),r.node.removeAttribute("filter")},t._engine.circle=function(t,e,r,n){var i=v("circle");t.canvas&&t.canvas.appendChild(i);var a=new B(i,t);return a.attrs={cx:e,cy:r,r:n,fill:"none",stroke:"#000"},a.type="circle",v(i,a.attrs),a},t._engine.rect=function(t,e,r,n,i,a){var s=v("rect");t.canvas&&t.canvas.appendChild(s);var o=new B(s,t);return o.attrs={x:e,y:r,width:n,height:i,r:a||0,rx:a||0,ry:a||0,fill:"none",stroke:"#000"},o.type="rect",v(s,o.attrs),o},t._engine.ellipse=function(t,e,r,n,i){var a=v("ellipse");t.canvas&&t.canvas.appendChild(a);var s=new B(a,t);return s.attrs={cx:e,cy:r,rx:n,ry:i,fill:"none",stroke:"#000"},s.type="ellipse",v(a,s.attrs),s},t._engine.image=function(t,e,r,n,i,a){var s=v("image");v(s,{x:r,y:n,width:i,height:a,preserveAspectRatio:"none"}),s.setAttributeNS(p,"href",e),t.canvas&&t.canvas.appendChild(s);var o=new B(s,t);return o.attrs={x:r,y:n,width:i,height:a,src:e},o.type="image",o},t._engine.text=function(e,r,n,i){var a=v("text");e.canvas&&e.canvas.appendChild(a);var s=new B(a,e);return s.attrs={x:r,y:n,"text-anchor":"middle",text:i,font:t._availableAttrs.font,stroke:"none",fill:"#000"},s.type="text",w(s,s.attrs),s},t._engine.setSize=function(t,e){return this.width=t||this.width,this.height=e||this.height,this.canvas.setAttribute("width",this.width),this.canvas.setAttribute("height",this.height),this._viewBox&&this.setViewBox.apply(this,this._viewBox),this},t._engine.create=function(){var e=t._getContainer.apply(0,arguments),r=e&&e.container,n=e.x,i=e.y,a=e.width,s=e.height;if(!r)throw Error("SVG container not found.");var o,u=v("svg"),h="overflow:hidden;";return n=n||0,i=i||0,a=a||512,s=s||342,v(u,{height:s,version:1.1,width:a,xmlns:"http://www.w3.org/2000/svg"}),1==r?(u.style.cssText=h+"position:absolute;left:"+n+"px;top:"+i+"px",t._g.doc.body.appendChild(u),o=1):(u.style.cssText=h+"position:relative",r.firstChild?r.insertBefore(u,r.firstChild):r.appendChild(u)),r=new t._Paper,r.width=a,r.height=s,r.canvas=u,r.clear(),r._left=r._top=0,o&&(r.renderfix=function(){}),r.renderfix(),r},t._engine.setViewBox=function(t,e,r,n,i){l("raphael.setViewBox",this,this._viewBox,[t,e,r,n,i]);var a,o,u=s(r/this.width,n/this.height),h=this.top,c=i?"meet":"xMinYMin";for(null==t?(this._vbSize&&(u=1),delete this._vbSize,a="0 0 "+this.width+f+this.height):(this._vbSize=u,a=t+f+e+f+r+f+n),v(this.canvas,{viewBox:a,preserveAspectRatio:c});u&&h;)o="stroke-width"in h.attrs?h.attrs["stroke-width"]:1,h.attr({"stroke-width":o}),h._.dirty=1,h._.dirtyT=1,h=h.prev;return this._viewBox=[t,e,r,n,!!i],this},t.prototype.renderfix=function(){var t,e=this.canvas,r=e.style;try{t=e.getScreenCTM()||e.createSVGMatrix()}catch(n){t=e.createSVGMatrix()}var i=-t.e%1,a=-t.f%1;(i||a)&&(i&&(this._left=(this._left+i)%1,r.left=this._left+"px"),a&&(this._top=(this._top+a)%1,r.top=this._top+"px"))},t.prototype.clear=function(){t.eve("raphael.clear",this);for(var e=this.canvas;e.firstChild;)e.removeChild(e.firstChild);this.bottom=this.top=null,(this.desc=v("desc")).appendChild(t._g.doc.createTextNode("Created with RaphaÃ«l "+t.version)),e.appendChild(this.desc),e.appendChild(this.defs=v("defs"))},t.prototype.remove=function(){l("raphael.remove",this),this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas);for(var e in this)this[e]="function"==typeof this[e]?t._removedFactory(e):null};var A=t.st;for(var T in S)S[e](T)&&!A[e](T)&&(A[T]=function(t){return function(){var e=arguments;return this.forEach(function(r){r[t].apply(r,e)})}}(T))}(window.Raphael);window.Raphael&&window.Raphael.vml&&function(t){var e="hasOwnProperty",r=String,i=parseFloat,n=Math,a=n.round,s=n.max,o=n.min,l=n.abs,h="fill",u=/[, ]+/,c=t.eve,f=" progid:DXImageTransform.Microsoft",p=" ",d="",g={M:"m",L:"l",C:"c",Z:"x",m:"t",l:"r",c:"v",z:"x"},v=/([clmz]),?([^clmz]*)/gi,x=/ progid:\S+Blur\([^\)]+\)/g,y=/-?[^,\s-]+/g,m="position:absolute;left:0;top:0;width:1px;height:1px",b=21600,_={path:1,rect:1,image:1},w={circle:1,ellipse:1},k=function(e){var i=/[ahqstv]/gi,n=t._pathToAbsolute;if(r(e).match(i)&&(n=t._path2curve),i=/[clmz]/g,n==t._pathToAbsolute&&!r(e).match(i)){var s=r(e).replace(v,function(t,e,r){var i=[],n="m"==e.toLowerCase(),s=g[e];return r.replace(y,function(t){n&&2==i.length&&(s+=i+g["m"==e?"l":"L"],i=[]),i.push(a(t*b))}),s+i});return s}var o,l,h=n(e);s=[];for(var u=0,c=h.length;c>u;u++){o=h[u],l=h[u][0].toLowerCase(),"z"==l&&(l="x");for(var f=1,x=o.length;x>f;f++)l+=a(o[f]*b)+(f!=x-1?",":d);s.push(l)}return s.join(p)},C=function(e,r,i){var n=t.matrix();return n.rotate(-e,.5,.5),{dx:n.x(r,i),dy:n.y(r,i)}},B=function(t,e,r,i,n,a){var s=t._,o=t.matrix,u=s.fillpos,c=t.node,f=c.style,d=1,g="",v=b/e,x=b/r;if(f.visibility="hidden",e&&r){if(c.coordsize=l(v)+p+l(x),f.rotation=a*(0>e*r?-1:1),a){var y=C(a,i,n);i=y.dx,n=y.dy}if(0>e&&(g+="x"),0>r&&(g+=" y")&&(d=-1),f.flip=g,c.coordorigin=i*-v+p+n*-x,u||s.fillsize){var m=c.getElementsByTagName(h);m=m&&m[0],c.removeChild(m),u&&(y=C(a,o.x(u[0],u[1]),o.y(u[0],u[1])),m.position=y.dx*d+p+y.dy*d),s.fillsize&&(m.size=s.fillsize[0]*l(e)+p+s.fillsize[1]*l(r)),c.appendChild(m)}f.visibility="visible"}};t.toString=function(){return"Your browser doesnât support SVG. Falling down to VML.\nYou are running RaphaÃ«l "+this.version};var S=function(t,e,i){for(var n=r(e).toLowerCase().split("-"),a=i?"end":"start",s=n.length,o="classic",l="medium",h="medium";s--;)switch(n[s]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":o=n[s];break;case"wide":case"narrow":h=n[s];break;case"long":case"short":l=n[s]}var u=t.node.getElementsByTagName("stroke")[0];u[a+"arrow"]=o,u[a+"arrowlength"]=l,u[a+"arrowwidth"]=h},A=function(n,l){n.attrs=n.attrs||{};var c=n.node,f=n.attrs,g=c.style,v=_[n.type]&&(l.x!=f.x||l.y!=f.y||l.width!=f.width||l.height!=f.height||l.cx!=f.cx||l.cy!=f.cy||l.rx!=f.rx||l.ry!=f.ry||l.r!=f.r),x=w[n.type]&&(f.cx!=l.cx||f.cy!=l.cy||f.r!=l.r||f.rx!=l.rx||f.ry!=l.ry),y=n;for(var m in l)l[e](m)&&(f[m]=l[m]);if(v&&(f.path=t._getPath[n.type](n),n._.dirty=1),l.href&&(c.href=l.href),l.title&&(c.title=l.title),l.target&&(c.target=l.target),l.cursor&&(g.cursor=l.cursor),"blur"in l&&n.blur(l.blur),(l.path&&"path"==n.type||v)&&(c.path=k(~r(f.path).toLowerCase().indexOf("r")?t._pathToAbsolute(f.path):f.path),"image"==n.type&&(n._.fillpos=[f.x,f.y],n._.fillsize=[f.width,f.height],B(n,1,1,0,0,0))),"transform"in l&&n.transform(l.transform),x){var C=+f.cx,A=+f.cy,N=+f.rx||+f.r||0,E=+f.ry||+f.r||0;c.path=t.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x",a((C-N)*b),a((A-E)*b),a((C+N)*b),a((A+E)*b),a(C*b))}if("clip-rect"in l){var M=r(l["clip-rect"]).split(u);if(4==M.length){M[2]=+M[2]+ +M[0],M[3]=+M[3]+ +M[1];var z=c.clipRect||t._g.doc.createElement("div"),F=z.style;F.clip=t.format("rect({1}px {2}px {3}px {0}px)",M),c.clipRect||(F.position="absolute",F.top=0,F.left=0,F.width=n.paper.width+"px",F.height=n.paper.height+"px",c.parentNode.insertBefore(z,c),z.appendChild(c),c.clipRect=z)}l["clip-rect"]||c.clipRect&&(c.clipRect.style.clip="auto")}if(n.textpath){var R=n.textpath.style;l.font&&(R.font=l.font),l["font-family"]&&(R.fontFamily='"'+l["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g,d)+'"'),l["font-size"]&&(R.fontSize=l["font-size"]),l["font-weight"]&&(R.fontWeight=l["font-weight"]),l["font-style"]&&(R.fontStyle=l["font-style"])}if("arrow-start"in l&&S(y,l["arrow-start"]),"arrow-end"in l&&S(y,l["arrow-end"],1),null!=l.opacity||null!=l["stroke-width"]||null!=l.fill||null!=l.src||null!=l.stroke||null!=l["stroke-width"]||null!=l["stroke-opacity"]||null!=l["fill-opacity"]||null!=l["stroke-dasharray"]||null!=l["stroke-miterlimit"]||null!=l["stroke-linejoin"]||null!=l["stroke-linecap"]){var P=c.getElementsByTagName(h),I=!1;if(P=P&&P[0],!P&&(I=P=L(h)),"image"==n.type&&l.src&&(P.src=l.src),l.fill&&(P.on=!0),(null==P.on||"none"==l.fill||null===l.fill)&&(P.on=!1),P.on&&l.fill){var j=r(l.fill).match(t._ISURL);if(j){P.parentNode==c&&c.removeChild(P),P.rotate=!0,P.src=j[1],P.type="tile";var q=n.getBBox(1);P.position=q.x+p+q.y,n._.fillpos=[q.x,q.y],t._preload(j[1],function(){n._.fillsize=[this.offsetWidth,this.offsetHeight]})}else P.color=t.getRGB(l.fill).hex,P.src=d,P.type="solid",t.getRGB(l.fill).error&&(y.type in{circle:1,ellipse:1}||"r"!=r(l.fill).charAt())&&T(y,l.fill,P)&&(f.fill="none",f.gradient=l.fill,P.rotate=!1)}if("fill-opacity"in l||"opacity"in l){var D=((+f["fill-opacity"]+1||2)-1)*((+f.opacity+1||2)-1)*((+t.getRGB(l.fill).o+1||2)-1);D=o(s(D,0),1),P.opacity=D,P.src&&(P.color="none")}c.appendChild(P);var O=c.getElementsByTagName("stroke")&&c.getElementsByTagName("stroke")[0],V=!1;!O&&(V=O=L("stroke")),(l.stroke&&"none"!=l.stroke||l["stroke-width"]||null!=l["stroke-opacity"]||l["stroke-dasharray"]||l["stroke-miterlimit"]||l["stroke-linejoin"]||l["stroke-linecap"])&&(O.on=!0),("none"==l.stroke||null===l.stroke||null==O.on||0==l.stroke||0==l["stroke-width"])&&(O.on=!1);var Y=t.getRGB(l.stroke);O.on&&l.stroke&&(O.color=Y.hex),D=((+f["stroke-opacity"]+1||2)-1)*((+f.opacity+1||2)-1)*((+Y.o+1||2)-1);var G=.75*(i(l["stroke-width"])||1);if(D=o(s(D,0),1),null==l["stroke-width"]&&(G=f["stroke-width"]),l["stroke-width"]&&(O.weight=G),G&&1>G&&(D*=G)&&(O.weight=1),O.opacity=D,l["stroke-linejoin"]&&(O.joinstyle=l["stroke-linejoin"]||"miter"),O.miterlimit=l["stroke-miterlimit"]||8,l["stroke-linecap"]&&(O.endcap="butt"==l["stroke-linecap"]?"flat":"square"==l["stroke-linecap"]?"square":"round"),l["stroke-dasharray"]){var W={"-":"shortdash",".":"shortdot","-.":"shortdashdot","-..":"shortdashdotdot",". ":"dot","- ":"dash","--":"longdash","- .":"dashdot","--.":"longdashdot","--..":"longdashdotdot"};O.dashstyle=W[e](l["stroke-dasharray"])?W[l["stroke-dasharray"]]:d}V&&c.appendChild(O)}if("text"==y.type){y.paper.canvas.style.display=d;var X=y.paper.span,H=100,U=f.font&&f.font.match(/\d+(?:\.\d*)?(?=px)/);g=X.style,f.font&&(g.font=f.font),f["font-family"]&&(g.fontFamily=f["font-family"]),f["font-weight"]&&(g.fontWeight=f["font-weight"]),f["font-style"]&&(g.fontStyle=f["font-style"]),U=i(f["font-size"]||U&&U[0])||10,g.fontSize=U*H+"px",y.textpath.string&&(X.innerHTML=r(y.textpath.string).replace(/</g,"&#60;").replace(/&/g,"&#38;").replace(/\n/g,"<br>"));var $=X.getBoundingClientRect();y.W=f.w=($.right-$.left)/H,y.H=f.h=($.bottom-$.top)/H,y.X=f.x,y.Y=f.y+y.H/2,("x"in l||"y"in l)&&(y.path.v=t.format("m{0},{1}l{2},{1}",a(f.x*b),a(f.y*b),a(f.x*b)+1));for(var Z=["x","y","text","font","font-family","font-weight","font-style","font-size"],Q=0,J=Z.length;J>Q;Q++)if(Z[Q]in l){y._.dirty=1;break}switch(f["text-anchor"]){case"start":y.textpath.style["v-text-align"]="left",y.bbx=y.W/2;break;case"end":y.textpath.style["v-text-align"]="right",y.bbx=-y.W/2;break;default:y.textpath.style["v-text-align"]="center",y.bbx=0}y.textpath.style["v-text-kern"]=!0}},T=function(e,a,s){e.attrs=e.attrs||{};var o=(e.attrs,Math.pow),l="linear",h=".5 .5";if(e.attrs.gradient=a,a=r(a).replace(t._radial_gradient,function(t,e,r){return l="radial",e&&r&&(e=i(e),r=i(r),o(e-.5,2)+o(r-.5,2)>.25&&(r=n.sqrt(.25-o(e-.5,2))*(2*(r>.5)-1)+.5),h=e+p+r),d}),a=a.split(/\s*\-\s*/),"linear"==l){var u=a.shift();if(u=-i(u),isNaN(u))return null}var c=t._parseDots(a);if(!c)return null;if(e=e.shape||e.node,c.length){e.removeChild(s),s.on=!0,s.method="none",s.color=c[0].color,s.color2=c[c.length-1].color;for(var f=[],g=0,v=c.length;v>g;g++)c[g].offset&&f.push(c[g].offset+p+c[g].color);s.colors=f.length?f.join():"0% "+s.color,"radial"==l?(s.type="gradientTitle",s.focus="100%",s.focussize="0 0",s.focusposition=h,s.angle=0):(s.type="gradient",s.angle=(270-u)%360),e.appendChild(s)}return 1},N=function(e,r){this[0]=this.node=e,e.raphael=!0,this.id=t._oid++,e.raphaelid=this.id,this.X=0,this.Y=0,this.attrs={},this.paper=r,this.matrix=t.matrix(),this._={transform:[],sx:1,sy:1,dx:0,dy:0,deg:0,dirty:1,dirtyT:1},!r.bottom&&(r.bottom=this),this.prev=r.top,r.top&&(r.top.next=this),r.top=this,this.next=null},E=t.el;N.prototype=E,E.constructor=N,E.transform=function(e){if(null==e)return this._.transform;var i,n=this.paper._viewBoxShift,a=n?"s"+[n.scale,n.scale]+"-1-1t"+[n.dx,n.dy]:d;n&&(i=e=r(e).replace(/\.{3}|\u2026/g,this._.transform||d)),t._extractTransform(this,a+e);var s,o=this.matrix.clone(),l=this.skew,h=this.node,u=~r(this.attrs.fill).indexOf("-"),c=!r(this.attrs.fill).indexOf("url(");if(o.translate(-.5,-.5),c||u||"image"==this.type)if(l.matrix="1 0 0 1",l.offset="0 0",s=o.split(),u&&s.noRotation||!s.isSimple){h.style.filter=o.toFilter();var f=this.getBBox(),g=this.getBBox(1),v=f.x-g.x,x=f.y-g.y;h.coordorigin=v*-b+p+x*-b,B(this,1,1,v,x,0)}else h.style.filter=d,B(this,s.scalex,s.scaley,s.dx,s.dy,s.rotate);else h.style.filter=d,l.matrix=r(o),l.offset=o.offset();return i&&(this._.transform=i),this},E.rotate=function(t,e,n){if(this.removed)return this;if(null!=t){if(t=r(t).split(u),t.length-1&&(e=i(t[1]),n=i(t[2])),t=i(t[0]),null==n&&(e=n),null==e||null==n){var a=this.getBBox(1);e=a.x+a.width/2,n=a.y+a.height/2}return this._.dirtyT=1,this.transform(this._.transform.concat([["r",t,e,n]])),this}},E.translate=function(t,e){return this.removed?this:(t=r(t).split(u),t.length-1&&(e=i(t[1])),t=i(t[0])||0,e=+e||0,this._.bbox&&(this._.bbox.x+=t,this._.bbox.y+=e),this.transform(this._.transform.concat([["t",t,e]])),this)},E.scale=function(t,e,n,a){if(this.removed)return this;if(t=r(t).split(u),t.length-1&&(e=i(t[1]),n=i(t[2]),a=i(t[3]),isNaN(n)&&(n=null),isNaN(a)&&(a=null)),t=i(t[0]),null==e&&(e=t),null==a&&(n=a),null==n||null==a)var s=this.getBBox(1);return n=null==n?s.x+s.width/2:n,a=null==a?s.y+s.height/2:a,this.transform(this._.transform.concat([["s",t,e,n,a]])),this._.dirtyT=1,this},E.hide=function(){return!this.removed&&(this.node.style.display="none"),this},E.show=function(){return!this.removed&&(this.node.style.display=d),this},E._getBBox=function(){return this.removed?{}:{x:this.X+(this.bbx||0)-this.W/2,y:this.Y-this.H,width:this.W,height:this.H}},E.remove=function(){if(!this.removed&&this.node.parentNode){this.paper.__set__&&this.paper.__set__.exclude(this),t.eve.unbind("raphael.*.*."+this.id),t._tear(this,this.paper),this.node.parentNode.removeChild(this.node),this.shape&&this.shape.parentNode.removeChild(this.shape);for(var e in this)this[e]="function"==typeof this[e]?t._removedFactory(e):null;this.removed=!0}},E.attr=function(r,i){if(this.removed)return this;if(null==r){var n={};for(var a in this.attrs)this.attrs[e](a)&&(n[a]=this.attrs[a]);return n.gradient&&"none"==n.fill&&(n.fill=n.gradient)&&delete n.gradient,n.transform=this._.transform,n}if(null==i&&t.is(r,"string")){if(r==h&&"none"==this.attrs.fill&&this.attrs.gradient)return this.attrs.gradient;for(var s=r.split(u),o={},l=0,f=s.length;f>l;l++)r=s[l],o[r]=r in this.attrs?this.attrs[r]:t.is(this.paper.customAttributes[r],"function")?this.paper.customAttributes[r].def:t._availableAttrs[r];return f-1?o:o[s[0]]}if(this.attrs&&null==i&&t.is(r,"array")){for(o={},l=0,f=r.length;f>l;l++)o[r[l]]=this.attr(r[l]);return o}var p;null!=i&&(p={},p[r]=i),null==i&&t.is(r,"object")&&(p=r);for(var d in p)c("raphael.attr."+d+"."+this.id,this,p[d]);if(p){for(d in this.paper.customAttributes)if(this.paper.customAttributes[e](d)&&p[e](d)&&t.is(this.paper.customAttributes[d],"function")){var g=this.paper.customAttributes[d].apply(this,[].concat(p[d]));this.attrs[d]=p[d];for(var v in g)g[e](v)&&(p[v]=g[v])}p.text&&"text"==this.type&&(this.textpath.string=p.text),A(this,p)}return this},E.toFront=function(){return!this.removed&&this.node.parentNode.appendChild(this.node),this.paper&&this.paper.top!=this&&t._tofront(this,this.paper),this},E.toBack=function(){return this.removed?this:(this.node.parentNode.firstChild!=this.node&&(this.node.parentNode.insertBefore(this.node,this.node.parentNode.firstChild),t._toback(this,this.paper)),this)},E.insertAfter=function(e){return this.removed?this:(e.constructor==t.st.constructor&&(e=e[e.length-1]),e.node.nextSibling?e.node.parentNode.insertBefore(this.node,e.node.nextSibling):e.node.parentNode.appendChild(this.node),t._insertafter(this,e,this.paper),this)},E.insertBefore=function(e){return this.removed?this:(e.constructor==t.st.constructor&&(e=e[0]),e.node.parentNode.insertBefore(this.node,e.node),t._insertbefore(this,e,this.paper),this)},E.blur=function(e){var r=this.node.runtimeStyle,i=r.filter;i=i.replace(x,d),0!==+e?(this.attrs.blur=e,r.filter=i+p+f+".Blur(pixelradius="+(+e||1.5)+")",r.margin=t.format("-{0}px 0 0 -{0}px",a(+e||1.5))):(r.filter=i,r.margin=0,delete this.attrs.blur)},t._engine.path=function(t,e){var r=L("shape");r.style.cssText=m,r.coordsize=b+p+b,r.coordorigin=e.coordorigin;var i=new N(r,e),n={fill:"none",stroke:"#000"};t&&(n.path=t),i.type="path",i.path=[],i.Path=d,A(i,n),e.canvas.appendChild(r);var a=L("skew");return a.on=!0,r.appendChild(a),i.skew=a,i.transform(d),i},t._engine.rect=function(e,r,i,n,a,s){var o=t._rectPath(r,i,n,a,s),l=e.path(o),h=l.attrs;return l.X=h.x=r,l.Y=h.y=i,l.W=h.width=n,l.H=h.height=a,h.r=s,h.path=o,l.type="rect",l},t._engine.ellipse=function(t,e,r,i,n){var a=t.path();return a.attrs,a.X=e-i,a.Y=r-n,a.W=2*i,a.H=2*n,a.type="ellipse",A(a,{cx:e,cy:r,rx:i,ry:n}),a},t._engine.circle=function(t,e,r,i){var n=t.path();return n.attrs,n.X=e-i,n.Y=r-i,n.W=n.H=2*i,n.type="circle",A(n,{cx:e,cy:r,r:i}),n},t._engine.image=function(e,r,i,n,a,s){var o=t._rectPath(i,n,a,s),l=e.path(o).attr({stroke:"none"}),u=l.attrs,c=l.node,f=c.getElementsByTagName(h)[0];return u.src=r,l.X=u.x=i,l.Y=u.y=n,l.W=u.width=a,l.H=u.height=s,u.path=o,l.type="image",f.parentNode==c&&c.removeChild(f),f.rotate=!0,f.src=r,f.type="tile",l._.fillpos=[i,n],l._.fillsize=[a,s],c.appendChild(f),B(l,1,1,0,0,0),l},t._engine.text=function(e,i,n,s){var o=L("shape"),l=L("path"),h=L("textpath");i=i||0,n=n||0,s=s||"",l.v=t.format("m{0},{1}l{2},{1}",a(i*b),a(n*b),a(i*b)+1),l.textpathok=!0,h.string=r(s),h.on=!0,o.style.cssText=m,o.coordsize=b+p+b,o.coordorigin="0 0";var u=new N(o,e),c={fill:"#000",stroke:"none",font:t._availableAttrs.font,text:s};u.shape=o,u.path=l,u.textpath=h,u.type="text",u.attrs.text=r(s),u.attrs.x=i,u.attrs.y=n,u.attrs.w=1,u.attrs.h=1,A(u,c),o.appendChild(h),o.appendChild(l),e.canvas.appendChild(o);var f=L("skew");return f.on=!0,o.appendChild(f),u.skew=f,u.transform(d),u},t._engine.setSize=function(e,r){var i=this.canvas.style;return this.width=e,this.height=r,e==+e&&(e+="px"),r==+r&&(r+="px"),i.width=e,i.height=r,i.clip="rect(0 "+e+" "+r+" 0)",this._viewBox&&t._engine.setViewBox.apply(this,this._viewBox),this},t._engine.setViewBox=function(e,r,i,n,a){t.eve("raphael.setViewBox",this,this._viewBox,[e,r,i,n,a]);var o,l,h=this.width,u=this.height,c=1/s(i/h,n/u);return a&&(o=u/n,l=h/i,h>i*o&&(e-=(h-i*o)/2/o),u>n*l&&(r-=(u-n*l)/2/l)),this._viewBox=[e,r,i,n,!!a],this._viewBoxShift={dx:-e,dy:-r,scale:c},this.forEach(function(t){t.transform("...")}),this};var L;t._engine.initWin=function(t){var e=t.document;e.createStyleSheet().addRule(".rvml","behavior:url(#default#VML)");try{!e.namespaces.rvml&&e.namespaces.add("rvml","urn:schemas-microsoft-com:vml"),L=function(t){return e.createElement("<rvml:"+t+' class="rvml">')}}catch(r){L=function(t){return e.createElement("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')}}},t._engine.initWin(t._g.win),t._engine.create=function(){var e=t._getContainer.apply(0,arguments),r=e.container,i=e.height,n=e.width,a=e.x,s=e.y;if(!r)throw Error("VML container not found.");var o=new t._Paper,l=o.canvas=t._g.doc.createElement("div"),h=l.style;return a=a||0,s=s||0,n=n||512,i=i||342,o.width=n,o.height=i,n==+n&&(n+="px"),i==+i&&(i+="px"),o.coordsize=1e3*b+p+1e3*b,o.coordorigin="0 0",o.span=t._g.doc.createElement("span"),o.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;",l.appendChild(o.span),h.cssText=t.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden",n,i),1==r?(t._g.doc.body.appendChild(l),h.left=a+"px",h.top=s+"px",h.position="absolute"):r.firstChild?r.insertBefore(l,r.firstChild):r.appendChild(l),o.renderfix=function(){},o},t.prototype.clear=function(){t.eve("raphael.clear",this),this.canvas.innerHTML=d,this.span=t._g.doc.createElement("span"),this.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;",this.canvas.appendChild(this.span),this.bottom=this.top=null},t.prototype.remove=function(){t.eve("raphael.remove",this),this.canvas.parentNode.removeChild(this.canvas);for(var e in this)this[e]="function"==typeof this[e]?t._removedFactory(e):null;return!0};var M=t.st;for(var z in E)E[e](z)&&!M[e](z)&&(M[z]=function(t){return function(){var e=arguments;return this.forEach(function(r){r[t].apply(r,e)})}}(z))}(window.Raphael);
;
;
/*! raphael-export.js */ 
;
;
/**
* Raphael.Export https://github.com/ElbertF/Raphael.Export
*
* Licensed under the MIT license:
* http://www.opensource.org/licenses/mit-license.php
*
*/
(function(R) {
/**
* Escapes string for XML interpolation
* @param value string or number value to escape
* @returns string escaped
*/
function escapeXML(s) {
if ( typeof s === 'number' ) return s.toString();
var replace = { '&': 'amp', '<': 'lt', '>': 'gt', '"': 'quot', '\'': 'apos' };
for ( var entity in replace ) {
s = s.replace(new RegExp(entity, 'g'), '&' + replace[entity] + ';');
}
return s;
}
/**
* Generic map function
* @param iterable the array or object to be mapped
* @param callback the callback function(element, key)
* @returns array
*/
function map(iterable, callback) {
var mapped = new Array;
for ( var i in iterable ) {
if ( iterable.hasOwnProperty(i) ) {
var value = callback.call(this, iterable[i], i);
if ( value !== null ) mapped.push(value);
}
}
return mapped;
}
/**
* Generic reduce function
* @param iterable array or object to be reduced
* @param callback the callback function(initial, element, i)
* @param initial the initial value
* @return the reduced value
*/
function reduce(iterable, callback, initial) {
for ( var i in iterable ) {
if ( iterable.hasOwnProperty(i) ) {
initial = callback.call(this, initial, iterable[i], i);
}
}
return initial;
}
/**
* Utility method for creating a tag
* @param name the tag name, e.g., 'text'
* @param attrs the attribute string, e.g., name1="val1" name2="val2"
* or attribute map, e.g., { name1 : 'val1', name2 : 'val2' }
* @param content the content string inside the tag
* @returns string of the tag
*/
function tag(name, attrs, matrix, content) {
if ( typeof content === 'undefined' || content === null ) {
content = '';
}
if ( typeof attrs === 'object' ) {
attrs = map(attrs, function(element, name) {
switch ( name ) {
case 'transform':
return;
case 'fill':
if ( element.match(/^hsb/) ) {
var hsb = element.replace(/^hsb\(|\)$/g, '').split(',');
if ( hsb.length === 3 ) {
element = R.hsb2rgb(hsb[0], hsb[1], hsb[2]).toString();
}
}
}
return name + '="' + escapeXML(element) + '"';
}).join(' ');
}
return '<' + name + ( matrix ? ' transform="matrix(' + matrix.toString().replace(/^matrix\(|\)$/g, '') + ')" ' : ' ' ) + attrs + '>' +  content + '</' + name + '>';
}
/**
* @return object the style object
*/
function extractStyle(node) {
return {
font: {
family: node.attrs.font.replace(/^.*?"(\w+)".*$/, '$1'),
size:   typeof node.attrs['font-size'] === 'undefined' ? null : node.attrs['font-size']
}
};
}
/**
* @param style object from style()
* @return string
*/
function styleToString(style) {
return 'font: normal normal normal 10px/normal ' + style.font.family + ( style.font.size === null ? '' : '; font-size: ' + style.font.size);
}
/**
* Computes tspan dy using font size. This formula was empircally determined
* using a best-fit line. Works well in both VML and SVG browsers.
* @param fontSize number
* @return number
*/
function computeTSpanDy(fontSize, line, lines) {
if ( fontSize === null || isNaN(fontSize)) fontSize = 18;
return fontSize * 4.5 / 13 * ( line - .2 - lines / 2 ) * 3.5;
}
var serializer = {
'text': function(node) {
style = extractStyle(node);
var tags = new Array;
var GLOBAL_LINE = -1;
map(node.attrs['text'].split('\n'), function(text, iterable, line) {
line = line || 0;
GLOBAL_LINE += 1;
tags.push(tag(
'text',
reduce(
node.attrs,
function(initial, value, name) {
if ( name !== 'text' && name !== 'w' && name !== 'h' ) {
if ( name === 'font-size') value = value + 'px';
initial[name] = escapeXML(value.toString());
}
return initial;
},
{ style: styleToString(style) + ';' }
),
node.matrix,
tag('tspan', { dy: computeTSpanDy(style.font.size, GLOBAL_LINE + line + 1, node.attrs['text'].split('\n').length) }, null, escapeXML(text) )
));
});
return tags;
},
'path' : function(node) {
var initial = ( node.matrix.a === 1 && node.matrix.d === 1 ) ? {} : { 'transform' : node.matrix.toString() };
return tag(
'path',
reduce(
node.attrs,
function(initial, value, name) {
if ( name === 'path' ) name = 'd';
initial[name] = value.toString();
return initial;
},
{}
),
node.matrix
);
}
};
R.fn.toSVG = function() {
var
paper   = this,
restore = { svg: R.svg, vml: R.vml },
svg     = '<svg style="overflow: hidden; position: relative;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="' + paper.width + '" version="1.1" height="' + paper.height + '">'
;
R.svg = true;
R.vml = false;
for ( var node = paper.bottom; node != null; node = node.next ) {
if ( node.node.style.display === 'none' ) continue;
var attrs = '';
if ( typeof serializer[node.type] === 'function' ) {
svg += serializer[node.type](node);
continue;
}
switch ( node.type ) {
case 'image':
attrs += ' preserveAspectRatio="none"';
break;
}
for ( i in node.attrs ) {
var name = i;
switch ( i ) {
case 'src':
name = 'xlink:href';
break;
case 'transform':
name = '';
break;
}
if ( name ) {
attrs += ' ' + name + '="' + escapeXML(node.attrs[i].toString()) + '"';
}
}
svg += '<' + node.type + ' transform="matrix(' + node.matrix.toString().replace(/^matrix\(|\)$/g, '') + ')"' + attrs + '></' + node.type + '>';
}
svg += '</svg>';
R.svg = restore.svg;
R.vml = restore.vml;
return svg;
};
})(window.Raphael);
;
;
/*! jquery.nicescroll.min.js */ 
;
;
/*
Customized by Josh Siok to keep scrollbars within the bounds of fixed header/footers for mobile skins
*/
/* jquery.nicescroll
-- version 3.4.0
-- copyright 2011-12-13 InuYaksa*2013
-- licensed under the MIT
--
-- http://areaaperta.com/nicescroll
-- https://github.com/inuyaksa/jquery.nicescroll
--
*/
(function(jQuery){
var domfocus = false;
var mousefocus = false;
var zoomactive = false;
var tabindexcounter = 5000;
var ascrailcounter = 2000;
var globalmaxzindex = 0;
var $ = jQuery;  // sandbox
function getScriptPath() {
var scripts=document.getElementsByTagName('script');
var path=scripts[scripts.length-1].src.split('?')[0];
return (path.split('/').length>0) ? path.split('/').slice(0,-1).join('/')+'/' : '';
}
var scriptpath = getScriptPath();
if (!Array.prototype.forEach) {  // JS 1.6 polyfill
Array.prototype.forEach = function(fn, scope) {
for(var i = 0, len = this.length; i < len; ++i) {
fn.call(scope, this[i], i, this);
}
}
}
var vendors = ['ms','moz','webkit','o'];
var setAnimationFrame = window.requestAnimationFrame||false;
var clearAnimationFrame = window.cancelAnimationFrame||false;
vendors.forEach(function(v){
if (!setAnimationFrame) setAnimationFrame = window[v+'RequestAnimationFrame'];
if (!clearAnimationFrame) clearAnimationFrame = window[v+'CancelAnimationFrame']||window[v+'CancelRequestAnimationFrame'];
});
var clsMutationObserver = window.MutationObserver || window.WebKitMutationObserver || false;
var _globaloptions = {
zindex:"auto",
cursoropacitymin:0,
cursoropacitymax:0.5,
cursorcolor:"#424242",
cursorwidth:"5px",
cursorborder: "none",
cursorborderradius: "6px",
scrollspeed:60,
mousescrollstep:8*3,
touchbehavior:false,
hwacceleration:true,
usetransition:true,
boxzoom:false,
dblclickzoom:true,
gesturezoom:true,
grabcursorenabled:true,
autohidemode:true,
background:"",
iframeautoresize:true,
cursorminheight:32,
preservenativescrolling:true,
railoffset:false,
bouncescroll:true,
spacebarenabled:true,
railpadding:{top:0,right:0,left:0,bottom:0},
disableoutline:true,
horizrailenabled:true,
railalign:"right",
railvalign:"bottom",
enabletranslate3d:true,
enablemousewheel:true,
enablekeyboard:true,
smoothscroll:true,
sensitiverail:true,
enablemouselockapi:true,
cursorfixedheight:false,
directionlockdeadzone:6,
hidecursordelay:400,
nativeparentscrolling:true,
enablescrollonselection:true,
overflowx:true,
overflowy:true,
cursordragspeed:0.3,
rtlmode:false,
cursordragontouch:false
}
var browserdetected = false;
var getBrowserDetection = function() {
if (browserdetected) return browserdetected;
var domtest = document.createElement('DIV');
var d = {};
d.haspointerlock = "pointerLockElement" in document || "mozPointerLockElement" in document || "webkitPointerLockElement" in document;
d.isopera = ("opera" in window);
d.isopera12 = (d.isopera&&("getUserMedia" in navigator));
d.isie = (("all" in document) && ("attachEvent" in domtest) && !d.isopera);
d.isieold = (d.isie && !("msInterpolationMode" in domtest.style));  // IE6 and older
d.isie7 = d.isie&&!d.isieold&&(!("documentMode" in document)||(document.documentMode==7));
d.isie8 = d.isie&&("documentMode" in document)&&(document.documentMode==8);
d.isie9 = d.isie&&("performance" in window)&&(document.documentMode>=9);
d.isie10 = d.isie&&("performance" in window)&&(document.documentMode>=10);
d.isie9mobile = /iemobile.9/i.test(navigator.userAgent);  //wp 7.1 mango
if (d.isie9mobile) d.isie9 = false;
d.isie7mobile = (!d.isie9mobile&&d.isie7) && /iemobile/i.test(navigator.userAgent);  //wp 7.0
d.ismozilla = ("MozAppearance" in domtest.style);
d.iswebkit = ("WebkitAppearance" in domtest.style);
d.ischrome = ("chrome" in window);
d.ischrome22 = (d.ischrome&&d.haspointerlock);
d.ischrome26 = (d.ischrome&&("transition" in domtest.style));  // issue with transform detection (maintain prefix)
d.cantouch = ("ontouchstart" in document.documentElement)||("ontouchstart" in window);  // detection for Chrome Touch Emulation
d.hasmstouch = (window.navigator.msPointerEnabled||false);  // IE10+ pointer events
d.ismac = /^mac$/i.test(navigator.platform);
d.isios = (d.cantouch && /iphone|ipad|ipod/i.test(navigator.platform));
d.isios4 = ((d.isios)&&!("seal" in Object));
d.isandroid = (/android/i.test(navigator.userAgent));
d.trstyle = false;
d.hastransform = false;
d.hastranslate3d = false;
d.transitionstyle = false;
d.hastransition = false;
d.transitionend = false;
var check = ['transform','msTransform','webkitTransform','MozTransform','OTransform'];
for(var a=0;a<check.length;a++){
if (typeof domtest.style[check[a]] != "undefined") {
d.trstyle = check[a];
break;
}
}
d.hastransform = (d.trstyle != false);
if (d.hastransform) {
domtest.style[d.trstyle] = "translate3d(1px,2px,3px)";
d.hastranslate3d = /translate3d/.test(domtest.style[d.trstyle]);
}
d.transitionstyle = false;
d.prefixstyle = '';
d.transitionend = false;
var check = ['transition','webkitTransition','MozTransition','OTransition','OTransition','msTransition','KhtmlTransition'];
var prefix = ['','-webkit-','-moz-','-o-','-o','-ms-','-khtml-'];
var evs = ['transitionend','webkitTransitionEnd','transitionend','otransitionend','oTransitionEnd','msTransitionEnd','KhtmlTransitionEnd'];
for(var a=0;a<check.length;a++) {
if (check[a] in domtest.style) {
d.transitionstyle = check[a];
d.prefixstyle = prefix[a];
d.transitionend = evs[a];
break;
}
}
if (d.ischrome26) {  // use always prefix
d.prefixstyle = prefix[1];
}
d.hastransition = (d.transitionstyle);
function detectCursorGrab() {
var lst = ['-moz-grab','-webkit-grab','grab'];
if ((d.ischrome&&!d.ischrome22)||d.isie) lst=[];  // force setting for IE returns false positive and chrome cursor bug
for(var a=0;a<lst.length;a++) {
var p = lst[a];
domtest.style['cursor']=p;
if (domtest.style['cursor']==p) return p;
}
return 'url(http://www.google.com/intl/en_ALL/mapfiles/openhand.cur),n-resize';  // thank you google for custom cursor!
}
d.cursorgrabvalue = detectCursorGrab();
d.hasmousecapture = ("setCapture" in domtest);
d.hasMutationObserver = (clsMutationObserver !== false);
domtest = null;  //memory released
browserdetected = d;
return d;
}
var NiceScrollClass = function(myopt,me) {
var self = this;
this.version = '3.4.0';
this.name = 'nicescroll';
this.me = me;
this.opt = {
doc:$("body"),
win:false
};
$.extend(this.opt,_globaloptions);
this.opt.snapbackspeed = 80;
if (myopt||false) {
for(var a in self.opt) {
if (typeof myopt[a] != "undefined") self.opt[a] = myopt[a];
}
}
this.doc = self.opt.doc;
this.iddoc = (this.doc&&this.doc[0])?this.doc[0].id||'':'';
this.ispage = /BODY|HTML/.test((self.opt.win)?self.opt.win[0].nodeName:this.doc[0].nodeName);
this.haswrapper = (self.opt.win!==false);
this.win = self.opt.win||(this.ispage?$(window):this.doc);
this.docscroll = (this.ispage&&!this.haswrapper)?$(window):this.win;
this.body = $("body");
this.viewport = false;
this.isfixed = false;
this.iframe = false;
this.isiframe = ((this.doc[0].nodeName == 'IFRAME') && (this.win[0].nodeName == 'IFRAME'));
this.istextarea = (this.win[0].nodeName == 'TEXTAREA');
this.forcescreen = false; //force to use screen position on events
this.canshowonmouseevent = (self.opt.autohidemode!="scroll");
this.onmousedown = false;
this.onmouseup = false;
this.onmousemove = false;
this.onmousewheel = false;
this.onkeypress = false;
this.ongesturezoom = false;
this.onclick = false;
this.onscrollstart = false;
this.onscrollend = false;
this.onscrollcancel = false;
this.onzoomin = false;
this.onzoomout = false;
this.view = false;
this.page = false;
this.scroll = {x:0,y:0};
this.scrollratio = {x:0,y:0};
this.cursorheight = 20;
this.scrollvaluemax = 0;
this.checkrtlmode = false;
this.scrollrunning = false;
this.scrollmom = false;
this.observer = false;
this.observerremover = false;  // observer on parent for remove detection
do {
this.id = "ascrail"+(ascrailcounter++);
} while (document.getElementById(this.id));
this.rail = false;
this.cursor = false;
this.cursorfreezed = false;
this.selectiondrag = false;
this.zoom = false;
this.zoomactive = false;
this.hasfocus = false;
this.hasmousefocus = false;
this.visibility = true;
this.locked = false;
this.hidden = false; // rails always hidden
this.cursoractive = true; // user can interact with cursors
this.overflowx = self.opt.overflowx;
this.overflowy = self.opt.overflowy;
this.nativescrollingarea = false;
this.checkarea = 0;
this.events = [];  // event list for unbind
this.saved = {};
this.delaylist = {};
this.synclist = {};
this.lastdeltax = 0;
this.lastdeltay = 0;
this.detected = getBrowserDetection();
var cap = $.extend({},this.detected);
this.canhwscroll = (cap.hastransform&&self.opt.hwacceleration);
this.ishwscroll = (this.canhwscroll&&self.haswrapper);
this.istouchcapable = false;  // desktop devices with touch screen support
if (cap.cantouch&&cap.ischrome&&!cap.isios&&!cap.isandroid) {
this.istouchcapable = true;
cap.cantouch = false;  // parse normal desktop events
}
if (cap.cantouch&&cap.ismozilla&&!cap.isios) {
this.istouchcapable = true;
cap.cantouch = false;  // parse normal desktop events
}
if (!self.opt.enablemouselockapi) {
cap.hasmousecapture = false;
cap.haspointerlock = false;
}
this.delayed = function(name,fn,tm,lazy) {
var dd = self.delaylist[name];
var nw = (new Date()).getTime();
if (!lazy&&dd&&dd.tt) return false;
if (dd&&dd.tt) clearTimeout(dd.tt);
if (dd&&dd.last+tm>nw&&!dd.tt) {
self.delaylist[name] = {
last:nw+tm,
tt:setTimeout(function(){self.delaylist[name].tt=0;fn.call();},tm)
}
}
else if (!dd||!dd.tt) {
self.delaylist[name] = {
last:nw,
tt:0
}
setTimeout(function(){fn.call();},0);
}
};
this.debounced = function(name,fn,tm) {
var dd = self.delaylist[name];
var nw = (new Date()).getTime();
self.delaylist[name] = fn;
if (!dd) {
setTimeout(function(){var fn=self.delaylist[name];self.delaylist[name]=false;fn.call();},tm);
}
}
this.synched = function(name,fn) {
function requestSync() {
if (self.onsync) return;
setAnimationFrame(function(){
self.onsync = false;
for(name in self.synclist){
var fn = self.synclist[name];
if (fn) fn.call(self);
self.synclist[name] = false;
}
});
self.onsync = true;
};
self.synclist[name] = fn;
requestSync();
return name;
};
this.unsynched = function(name) {
if (self.synclist[name]) self.synclist[name] = false;
}
this.css = function(el,pars) {  // save & set
for(var n in pars) {
self.saved.css.push([el,n,el.css(n)]);
el.css(n,pars[n]);
}
};
this.scrollTop = function(val) {
return (typeof val == "undefined") ? self.getScrollTop() : self.setScrollTop(val);
};
this.scrollLeft = function(val) {
return (typeof val == "undefined") ? self.getScrollLeft() : self.setScrollLeft(val);
};
BezierClass = function(st,ed,spd,p1,p2,p3,p4) {
this.st = st;
this.ed = ed;
this.spd = spd;
this.p1 = p1||0;
this.p2 = p2||1;
this.p3 = p3||0;
this.p4 = p4||1;
this.ts = (new Date()).getTime();
this.df = this.ed-this.st;
};
BezierClass.prototype = {
B2:function(t){ return 3*t*t*(1-t) },
B3:function(t){ return 3*t*(1-t)*(1-t) },
B4:function(t){ return (1-t)*(1-t)*(1-t) },
getNow:function(){
var nw = (new Date()).getTime();
var pc = 1-((nw-this.ts)/this.spd);
var bz = this.B2(pc) + this.B3(pc) + this.B4(pc);
return (pc<0) ? this.ed : this.st+Math.round(this.df*bz);
},
update:function(ed,spd){
this.st = this.getNow();
this.ed = ed;
this.spd = spd;
this.ts = (new Date()).getTime();
this.df = this.ed-this.st;
return this;
}
};
if (this.ishwscroll) {
this.doc.translate = {x:0,y:0,tx:"0px",ty:"0px"};
if (cap.hastranslate3d&&cap.isios) this.doc.css("-webkit-backface-visibility","hidden");  // prevent flickering http://stackoverflow.com/questions/3461441/
function getMatrixValues() {
var tr = self.doc.css(cap.trstyle);
if (tr&&(tr.substr(0,6)=="matrix")) {
return tr.replace(/^.*\((.*)\)$/g, "$1").replace(/px/g,'').split(/, +/);
}
return false;
}
this.getScrollTop = function(last) {
if (!last) {
var mtx = getMatrixValues();
if (mtx) return (mtx.length==16) ? -mtx[13] : -mtx[5];  //matrix3d 16 on IE10
if (self.timerscroll&&self.timerscroll.bz) return self.timerscroll.bz.getNow();
}
return self.doc.translate.y;
};
this.getScrollLeft = function(last) {
if (!last) {
var mtx = getMatrixValues();
if (mtx) return (mtx.length==16) ? -mtx[12] : -mtx[4];  //matrix3d 16 on IE10
if (self.timerscroll&&self.timerscroll.bh) return self.timerscroll.bh.getNow();
}
return self.doc.translate.x;
};
if (document.createEvent) {
this.notifyScrollEvent = function(el) {
var e = document.createEvent("UIEvents");
e.initUIEvent("scroll", false, true, window, 1);
el.dispatchEvent(e);
};
}
else if (document.fireEvent) {
this.notifyScrollEvent = function(el) {
var e = document.createEventObject();
el.fireEvent("onscroll");
e.cancelBubble = true;
};
}
else {
this.notifyScrollEvent = function(el,add) {}; //NOPE
}
if (cap.hastranslate3d&&self.opt.enabletranslate3d) {
this.setScrollTop = function(val,silent) {
self.doc.translate.y = val;
self.doc.translate.ty = (val*-1)+"px";
self.doc.css(cap.trstyle,"translate3d("+self.doc.translate.tx+","+self.doc.translate.ty+",0px)");
if (!silent) self.notifyScrollEvent(self.win[0]);
};
this.setScrollLeft = function(val,silent) {
self.doc.translate.x = val;
self.doc.translate.tx = (val*-1)+"px";
self.doc.css(cap.trstyle,"translate3d("+self.doc.translate.tx+","+self.doc.translate.ty+",0px)");
if (!silent) self.notifyScrollEvent(self.win[0]);
};
} else {
this.setScrollTop = function(val,silent) {
self.doc.translate.y = val;
self.doc.translate.ty = (val*-1)+"px";
self.doc.css(cap.trstyle,"translate("+self.doc.translate.tx+","+self.doc.translate.ty+")");
if (!silent) self.notifyScrollEvent(self.win[0]);
};
this.setScrollLeft = function(val,silent) {
self.doc.translate.x = val;
self.doc.translate.tx = (val*-1)+"px";
self.doc.css(cap.trstyle,"translate("+self.doc.translate.tx+","+self.doc.translate.ty+")");
if (!silent) self.notifyScrollEvent(self.win[0]);
};
}
} else {
this.getScrollTop = function() {
return self.docscroll.scrollTop();
};
this.setScrollTop = function(val) {
return self.docscroll.scrollTop(val);
};
this.getScrollLeft = function() {
return self.docscroll.scrollLeft();
};
this.setScrollLeft = function(val) {
return self.docscroll.scrollLeft(val);
};
}
this.getTarget = function(e) {
if (!e) return false;
if (e.target) return e.target;
if (e.srcElement) return e.srcElement;
return false;
};
this.hasParent = function(e,id) {
if (!e) return false;
var el = e.target||e.srcElement||e||false;
while (el && el.id != id) {
el = el.parentNode||false;
}
return (el!==false);
};
function getZIndex() {
var dom = self.win;
if ("zIndex" in dom) return dom.zIndex();  // use jQuery UI method when available
while (dom.length>0) {
if (dom[0].nodeType==9) return false;
var zi = dom.css('zIndex');
if (!isNaN(zi)&&zi!=0) return parseInt(zi);
dom = dom.parent();
}
return false;
};
var _convertBorderWidth = {"thin":1,"medium":3,"thick":5};
function getWidthToPixel(dom,prop,chkheight) {
var wd = dom.css(prop);
var px = parseFloat(wd);
if (isNaN(px)) {
px = _convertBorderWidth[wd]||0;
var brd = (px==3) ? ((chkheight)?(self.win.outerHeight() - self.win.innerHeight()):(self.win.outerWidth() - self.win.innerWidth())) : 1; //DON'T TRUST CSS
if (self.isie8&&px) px+=1;
return (brd) ? px : 0;
}
return px;
};
this.getOffset = function() {
if (self.isfixed) return {top:parseFloat(self.win.css('top')),left:parseFloat(self.win.css('left'))};
if (!self.viewport) return self.win.offset();
var ww = self.win.offset();
var vp = self.viewport.offset();
return {top:ww.top-vp.top+self.viewport.scrollTop(),left:ww.left-vp.left+self.viewport.scrollLeft()};
};
this.updateScrollBar = function(len) {
if (self.ishwscroll) {
self.rail.css({height:self.win.innerHeight()});
if (self.railh) self.railh.css({width:self.win.innerWidth()});
} else {
var wpos = self.getOffset();
var pos = {top:wpos.top,left:wpos.left};
pos.top+= getWidthToPixel(self.win,'border-top-width',true);
var brd = (self.win.outerWidth() - self.win.innerWidth())/2;
pos.left+= (self.rail.align) ? self.win.outerWidth() - getWidthToPixel(self.win,'border-right-width') - self.rail.width : getWidthToPixel(self.win,'border-left-width');
pos.left -= 2; // hack to move the scrollbar over 2px ( instead of using a border. railpadding:right doesn't work. )
var off = self.opt.railoffset;
if (off) {
if (off.top) pos.top+=off.top;
if (self.rail.align&&off.left) pos.left+=off.left;
}
if (!self.locked) self.rail.css({top:pos.top,left:pos.left,height:(len)?len.h:self.win.innerHeight()});
if (self.zoom) {
self.zoom.css({top:pos.top+1,left:(self.rail.align==1) ? pos.left-20 : pos.left+self.rail.width+4});
}
if (self.railh&&!self.locked) {
var pos = {top:wpos.top,left:wpos.left};
var y = (self.railh.align) ? pos.top + getWidthToPixel(self.win,'border-top-width',true) + self.win.innerHeight() - self.railh.height : pos.top + getWidthToPixel(self.win,'border-top-width',true);
var x = pos.left + getWidthToPixel(self.win,'border-left-width');
self.railh.css({top:y,left:x,width:self.railh.width});
}
}
};
this.doRailClick = function(e,dbl,hr) {
var fn,pg,cur,pos;
if (self.locked) return;
self.cancelEvent(e);
if (dbl) {
fn = (hr) ? self.doScrollLeft : self.doScrollTop;
cur = (hr) ? ((e.pageX - self.railh.offset().left - (self.cursorwidth/2)) * self.scrollratio.x) : ((e.pageY - self.rail.offset().top - (self.cursorheight/2)) * self.scrollratio.y);
fn(cur);
} else {
fn = (hr) ? self.doScrollLeftBy : self.doScrollBy;
cur = (hr) ? self.scroll.x : self.scroll.y;
pos = (hr) ? e.pageX - self.railh.offset().left : e.pageY - self.rail.offset().top;
pg = (hr) ? self.view.w : self.view.h;
(cur>=pos) ? fn(pg) : fn(-pg);
}
}
self.hasanimationframe = (setAnimationFrame);
self.hascancelanimationframe = (clearAnimationFrame);
if (!self.hasanimationframe) {
setAnimationFrame=function(fn){return setTimeout(fn,15-Math.floor((+new Date)/1000)%16)}; // 1000/60)};
clearAnimationFrame=clearInterval;
}
else if (!self.hascancelanimationframe) clearAnimationFrame=function(){self.cancelAnimationFrame=true};
this.init = function() {
self.saved.css = [];
if (cap.isie7mobile) return true; // SORRY, DO NOT WORK!
if (cap.hasmstouch) self.css((self.ispage)?$("html"):self.win,{'-ms-touch-action':'none'});
self.zindex = "auto";
if (!self.ispage&&self.opt.zindex=="auto") {
self.zindex = getZIndex()||"auto";
} else {
self.zindex = self.opt.zindex;
}
if (!self.ispage&&self.zindex!="auto") {
if (self.zindex>globalmaxzindex) globalmaxzindex=self.zindex;
}
if (self.isie&&self.zindex==0&&self.opt.zindex=="auto") {  // fix IE auto == 0
self.zindex="auto";
}
/*
self.ispage = true;
self.haswrapper = true;
self.docscroll = $("body");
*/
if (!self.ispage || (!cap.cantouch && !cap.isieold && !cap.isie9mobile)) {
var cont = self.docscroll;
if (self.ispage) cont = (self.haswrapper)?self.win:self.doc;
if (!cap.isie9mobile) self.css(cont,{'overflow-y':'hidden'});
if (self.ispage&&cap.isie7) {
if (self.doc[0].nodeName=='BODY') self.css($("html"),{'overflow-y':'hidden'});  //IE7 double scrollbar issue
else if (self.doc[0].nodeName=='HTML') self.css($("body"),{'overflow-y':'hidden'});  //IE7 double scrollbar issue
}
if (cap.isios&&!self.ispage&&!self.haswrapper) self.css($("body"),{"-webkit-overflow-scrolling":"touch"});  //force hw acceleration
var cursor = $(document.createElement('div'));
cursor.css({
position:"relative",top:0,"float":"right",width:self.opt.cursorwidth,height:"0px",
'background-color':self.opt.cursorcolor,
'background-clip':'padding-box',
'-webkit-border-radius':self.opt.cursorborderradius,
'-moz-border-radius':self.opt.cursorborderradius,
'border-radius':self.opt.cursorborderradius
});
cursor.hborder = parseFloat(cursor.outerHeight() - cursor.innerHeight());
self.cursor = cursor;
var rail = $(document.createElement('div'));
rail.attr('id',self.id);
rail.addClass('nicescroll-rails');
var v,a,kp = ["left","right","top","bottom"];  //"top","bottom"
for(var n in kp) {
a=kp[n];
v = self.opt.railpadding[a];
(v) ? rail.css("padding-"+a,v+"px") : self.opt.railpadding[a] = 0;
}
rail.append(cursor);
rail.width = Math.max(parseFloat(self.opt.cursorwidth),cursor.outerWidth()) + self.opt.railpadding['left'] + self.opt.railpadding['right'];
rail.css({width:rail.width+"px",'zIndex':self.zindex,"background":self.opt.background,cursor:"default"});
rail.visibility = true;
rail.scrollable = true;
rail.align = (self.opt.railalign=="left") ? 0 : 1;
self.rail = rail;
self.rail.drag = false;
var zoom = false;
if (self.opt.boxzoom&&!self.ispage&&!cap.isieold) {
zoom = document.createElement('div');
self.bind(zoom,"click",self.doZoom);
self.zoom = $(zoom);
self.zoom.css({"cursor":"pointer",'z-index':self.zindex,'backgroundImage':'url('+scriptpath+'zoomico.png)','height':18,'width':18,'backgroundPosition':'0px 0px'});
if (self.opt.dblclickzoom) self.bind(self.win,"dblclick",self.doZoom);
if (cap.cantouch&&self.opt.gesturezoom) {
self.ongesturezoom = function(e) {
if (e.scale>1.5) self.doZoomIn(e);
if (e.scale<0.8) self.doZoomOut(e);
return self.cancelEvent(e);
};
self.bind(self.win,"gestureend",self.ongesturezoom);
}
}
self.railh = false;
if (self.opt.horizrailenabled) {
self.css(cont,{'overflow-x':'hidden'});
var cursor = $(document.createElement('div'));
cursor.css({
position:"relative",top:0,height:self.opt.cursorwidth,width:"0px",
'background-color':self.opt.cursorcolor,
'background-clip':'padding-box',
'-webkit-border-radius':self.opt.cursorborderradius,
'-moz-border-radius':self.opt.cursorborderradius,
'border-radius':self.opt.cursorborderradius
});
cursor.wborder = parseFloat(cursor.outerWidth() - cursor.innerWidth());
self.cursorh = cursor;
var railh = $(document.createElement('div'));
railh.attr('id',self.id+'-hr');
railh.addClass('nicescroll-rails');
railh.height = Math.max(parseFloat(self.opt.cursorwidth),cursor.outerHeight());
railh.css({height:railh.height+"px",'zIndex':self.zindex,"background":self.opt.background});
railh.append(cursor);
railh.visibility = true;
railh.scrollable = true;
railh.align = (self.opt.railvalign=="top") ? 0 : 1;
self.railh = railh;
self.railh.drag = false;
}
if (self.ispage) {
rail.css({position:"fixed",top:"0px",height:"100%"});
(rail.align) ? rail.css({right:"0px"}) : rail.css({left:"0px"});
self.body.append(rail);
if (self.railh) {
railh.css({position:"fixed",left:"0px",width:"100%"});
(railh.align) ? railh.css({bottom:"0px"}) : railh.css({top:"0px"});
self.body.append(railh);
}
} else {
if (self.ishwscroll) {
if (self.win.css('position')=='static') self.css(self.win,{'position':'relative'});
var bd = (self.win[0].nodeName == 'HTML') ? self.body : self.win;
if (self.zoom) {
self.zoom.css({position:"absolute",top:1,right:0,"margin-right":rail.width+4});
bd.append(self.zoom);
}
rail.css({position:"absolute",top:0});
(rail.align) ? rail.css({right:0}) : rail.css({left:0});
bd.append(rail);
if (railh) {
railh.css({position:"absolute",left:0,bottom:0});
(railh.align) ? railh.css({bottom:0}) : railh.css({top:0});
bd.append(railh);
}
} else {
self.isfixed = (self.win.css("position")=="fixed");
var rlpos = (self.isfixed) ? "fixed" : "absolute";
if (!self.isfixed) self.viewport = self.getViewport(self.win[0]);
if (self.viewport) {
self.body = self.viewport;
if ((/relative|absolute/.test(self.viewport.css("position")))==false) self.css(self.viewport,{"position":"relative"});
}
rail.css({position:rlpos});
if (self.zoom) self.zoom.css({position:rlpos});
self.updateScrollBar();
self.body.append(rail);
if (self.zoom) self.body.append(self.zoom);
if (self.railh) {
railh.css({position:rlpos});
self.body.append(railh);
}
}
if (cap.isios) self.css(self.win,{'-webkit-tap-highlight-color':'rgba(0,0,0,0)','-webkit-touch-callout':'none'});  // prevent grey layer on click
if (cap.isie&&self.opt.disableoutline) self.win.attr("hideFocus","true");  // IE, prevent dotted rectangle on focused div
if (cap.iswebkit&&self.opt.disableoutline) self.win.css({"outline":"none"});
}
if (self.opt.autohidemode===false) {
self.autohidedom = false;
self.rail.css({opacity:self.opt.cursoropacitymax});
if (self.railh) self.railh.css({opacity:self.opt.cursoropacitymax});
}
else if (self.opt.autohidemode===true) {
self.autohidedom = $().add(self.rail);
if (cap.isie8) self.autohidedom=self.autohidedom.add(self.cursor);
if (self.railh) self.autohidedom=self.autohidedom.add(self.railh);
if (self.railh&&cap.isie8) self.autohidedom=self.autohidedom.add(self.cursorh);
}
else if (self.opt.autohidemode=="scroll") {
self.autohidedom = $().add(self.rail);
if (self.railh) self.autohidedom=self.autohidedom.add(self.railh);
}
else if (self.opt.autohidemode=="cursor") {
self.autohidedom = $().add(self.cursor);
if (self.railh) self.autohidedom=self.autohidedom.add(self.cursorh);
}
else if (self.opt.autohidemode=="hidden") {
self.autohidedom = false;
self.hide();
self.locked = false;
}
if (cap.isie9mobile) {
self.scrollmom = new ScrollMomentumClass2D(self);
/*
var trace = function(msg) {
var db = $("#debug");
if (isNaN(msg)&&(typeof msg != "string")) {
var x = [];
for(var a in msg) {
x.push(a+":"+msg[a]);
}
msg ="{"+x.join(",")+"}";
}
if (db.children().length>0) {
db.children().eq(0).before("<div>"+msg+"</div>");
} else {
db.append("<div>"+msg+"</div>");
}
}
window.onerror = function(msg,url,ln) {
trace("ERR: "+msg+" at "+ln);
}
*/
self.onmangotouch = function(e) {
var py = self.getScrollTop();
var px = self.getScrollLeft();
if ((py == self.scrollmom.lastscrolly)&&(px == self.scrollmom.lastscrollx)) return true;
var dfy = py-self.mangotouch.sy;
var dfx = px-self.mangotouch.sx;
var df = Math.round(Math.sqrt(Math.pow(dfx,2)+Math.pow(dfy,2)));
if (df==0) return;
var dry = (dfy<0)?-1:1;
var drx = (dfx<0)?-1:1;
var tm = +new Date();
if (self.mangotouch.lazy) clearTimeout(self.mangotouch.lazy);
if (((tm-self.mangotouch.tm)>80)||(self.mangotouch.dry!=dry)||(self.mangotouch.drx!=drx)) {
self.scrollmom.stop();
self.scrollmom.reset(px,py);
self.mangotouch.sy = py;
self.mangotouch.ly = py;
self.mangotouch.sx = px;
self.mangotouch.lx = px;
self.mangotouch.dry = dry;
self.mangotouch.drx = drx;
self.mangotouch.tm = tm;
} else {
self.scrollmom.stop();
self.scrollmom.update(self.mangotouch.sx-dfx,self.mangotouch.sy-dfy);
var gap = tm - self.mangotouch.tm;
self.mangotouch.tm = tm;
var ds = Math.max(Math.abs(self.mangotouch.ly-py),Math.abs(self.mangotouch.lx-px));
self.mangotouch.ly = py;
self.mangotouch.lx = px;
if (ds>2) {
self.mangotouch.lazy = setTimeout(function(){
self.mangotouch.lazy = false;
self.mangotouch.dry = 0;
self.mangotouch.drx = 0;
self.mangotouch.tm = 0;
self.scrollmom.doMomentum(30);
},100);
}
}
}
var top = self.getScrollTop();
var lef = self.getScrollLeft();
self.mangotouch = {sy:top,ly:top,dry:0,sx:lef,lx:lef,drx:0,lazy:false,tm:0};
self.bind(self.docscroll,"scroll",self.onmangotouch);
} else {
if (cap.cantouch||self.istouchcapable||self.opt.touchbehavior||cap.hasmstouch) {
self.scrollmom = new ScrollMomentumClass2D(self);
self.ontouchstart = function(e) {
if (e.pointerType&&e.pointerType!=2) return false;
if (!self.locked) {
if (cap.hasmstouch) {
var tg = (e.target) ? e.target : false;
while (tg) {
var nc = $(tg).getNiceScroll();
if ((nc.length>0)&&(nc[0].me == self.me)) break;
if (nc.length>0) return false;
if ((tg.nodeName=='DIV')&&(tg.id==self.id)) break;
tg = (tg.parentNode) ? tg.parentNode : false;
}
}
self.cancelScroll();
var tg = self.getTarget(e);
if (tg) {
var skp = (/INPUT/i.test(tg.nodeName))&&(/range/i.test(tg.type));
if (skp) return self.stopPropagation(e);
}
if (!("clientX" in e) && ("changedTouches" in e)) {
e.clientX = e.changedTouches[0].clientX;
e.clientY = e.changedTouches[0].clientY;
}
if (self.forcescreen) {
var le = e;
var e = {"original":(e.original)?e.original:e};
e.clientX = le.screenX;
e.clientY = le.screenY;
}
self.rail.drag = {x:e.clientX,y:e.clientY,sx:self.scroll.x,sy:self.scroll.y,st:self.getScrollTop(),sl:self.getScrollLeft(),pt:2,dl:false};
if (self.ispage||!self.opt.directionlockdeadzone) {
self.rail.drag.dl = "f";
} else {
var view = {
w:$(window).width(),
h:$(window).height()
};
var page = {
w:Math.max(document.body.scrollWidth,document.documentElement.scrollWidth),
h:Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)
}
var maxh = Math.max(0,page.h - view.h);
var maxw = Math.max(0,page.w - view.w);
if (!self.rail.scrollable&&self.railh.scrollable) self.rail.drag.ck = (maxh>0) ? "v" : false;
else if (self.rail.scrollable&&!self.railh.scrollable) self.rail.drag.ck = (maxw>0) ? "h" : false;
else self.rail.drag.ck = false;
if (!self.rail.drag.ck) self.rail.drag.dl = "f";
}
if (self.opt.touchbehavior&&self.isiframe&&cap.isie) {
var wp = self.win.position();
self.rail.drag.x+=wp.left;
self.rail.drag.y+=wp.top;
}
self.hasmoving = false;
self.lastmouseup = false;
self.scrollmom.reset(e.clientX,e.clientY);
if (!cap.cantouch&&!this.istouchcapable&&!cap.hasmstouch) {
var ip = (tg)?/INPUT|SELECT|TEXTAREA/i.test(tg.nodeName):false;
if (!ip) {
if (!self.ispage&&cap.hasmousecapture) tg.setCapture();
return self.cancelEvent(e);
}
if (/SUBMIT|CANCEL|BUTTON/i.test($(tg).attr('type'))) {
pc = {"tg":tg,"click":false};
self.preventclick = pc;
}
}
}
};
self.ontouchend = function(e) {
if (e.pointerType&&e.pointerType!=2) return false;
if (self.rail.drag&&(self.rail.drag.pt==2)) {
self.scrollmom.doMomentum();
self.rail.drag = false;
if (self.hasmoving) {
self.hasmoving = false;
self.lastmouseup = true;
self.hideCursor();
if (cap.hasmousecapture) document.releaseCapture();
if (!cap.cantouch) return self.cancelEvent(e);
}
}
};
var moveneedoffset = (self.opt.touchbehavior&&self.isiframe&&!cap.hasmousecapture);
self.ontouchmove = function(e,byiframe) {
if (e.pointerType&&e.pointerType!=2) return false;
if (self.rail.drag&&(self.rail.drag.pt==2)) {
if (cap.cantouch&&(typeof e.original == "undefined")) return true;  // prevent ios "ghost" events by clickable elements
self.hasmoving = true;
if (self.preventclick&&!self.preventclick.click) {
self.preventclick.click = self.preventclick.tg.onclick||false;
self.preventclick.tg.onclick = self.onpreventclick;
}
var ev = $.extend({"original":e},e);
e = ev;
if (("changedTouches" in e)) {
e.clientX = e.changedTouches[0].clientX;
e.clientY = e.changedTouches[0].clientY;
}
if (self.forcescreen) {
var le = e;
var e = {"original":(e.original)?e.original:e};
e.clientX = le.screenX;
e.clientY = le.screenY;
}
var ofx = ofy = 0;
if (moveneedoffset&&!byiframe) {
var wp = self.win.position();
ofx=-wp.left;
ofy=-wp.top;
}
var fy = e.clientY + ofy;
var my = (fy-self.rail.drag.y);
var fx = e.clientX + ofx;
var mx = (fx-self.rail.drag.x);
var ny = self.rail.drag.st-my;
if (self.ishwscroll&&self.opt.bouncescroll) {
if (ny<0) {
ny = Math.round(ny/2);
}
else if (ny>self.page.maxh) {
ny = self.page.maxh+Math.round((ny-self.page.maxh)/2);
}
} else {
if (ny<0) {ny=0;fy=0}
if (ny>self.page.maxh) {ny=self.page.maxh;fy=0}
}
if (self.railh&&self.railh.scrollable) {
var nx = self.rail.drag.sl-mx;
if (self.ishwscroll&&self.opt.bouncescroll) {
if (nx<0) {
nx = Math.round(nx/2);
}
else if (nx>self.page.maxw) {
nx = self.page.maxw+Math.round((nx-self.page.maxw)/2);
}
} else {
if (nx<0) {nx=0;fx=0}
if (nx>self.page.maxw) {nx=self.page.maxw;fx=0}
}
}
var grabbed = false;
if (self.rail.drag.dl) {
grabbed = true;
if (self.rail.drag.dl=="v") nx = self.rail.drag.sl;
else if (self.rail.drag.dl=="h") ny = self.rail.drag.st;
} else {
var ay = Math.abs(my);
var ax = Math.abs(mx);
var dz = self.opt.directionlockdeadzone;
if (self.rail.drag.ck=="v") {
if (ay>dz&&(ax<=(ay*0.3))) {
self.rail.drag = false;
return true;
}
else if (ax>dz) {
self.rail.drag.dl="f";
$("body").scrollTop($("body").scrollTop());  // stop iOS native scrolling (when active javascript has blocked)
}
}
else if (self.rail.drag.ck=="h") {
if (ax>dz&&(ay<=(az*0.3))) {
self.rail.drag = false;
return true;
}
else if (ay>dz) {
self.rail.drag.dl="f";
$("body").scrollLeft($("body").scrollLeft());  // stop iOS native scrolling (when active javascript has blocked)
}
}
}
self.synched("touchmove",function(){
if (self.rail.drag&&(self.rail.drag.pt==2)) {
if (self.prepareTransition) self.prepareTransition(0);
if (self.rail.scrollable) self.setScrollTop(ny);
self.scrollmom.update(fx,fy);
if (self.railh&&self.railh.scrollable) {
self.setScrollLeft(nx);
self.showCursor(ny,nx);
} else {
self.showCursor(ny);
}
if (cap.isie10) document.selection.clear();
}
});
if (cap.ischrome&&self.istouchcapable) grabbed=false;  //chrome touch emulation doesn't like!
if (grabbed) return self.cancelEvent(e);
}
};
}
self.onmousedown = function(e,hronly) {
if (self.rail.drag&&self.rail.drag.pt!=1) return;
if (self.locked) return self.cancelEvent(e);
self.cancelScroll();
self.rail.drag = {x:e.clientX,y:e.clientY,sx:self.scroll.x,sy:self.scroll.y,pt:1,hr:(!!hronly)};
var tg = self.getTarget(e);
if (!self.ispage&&cap.hasmousecapture) tg.setCapture();
if (self.isiframe&&!cap.hasmousecapture) {
self.saved["csspointerevents"] = self.doc.css("pointer-events");
self.css(self.doc,{"pointer-events":"none"});
}
return self.cancelEvent(e);
};
self.onmouseup = function(e) {
if (self.rail.drag) {
if (cap.hasmousecapture) document.releaseCapture();
if (self.isiframe&&!cap.hasmousecapture) self.doc.css("pointer-events",self.saved["csspointerevents"]);
if(self.rail.drag.pt!=1)return;
self.rail.drag = false;
return self.cancelEvent(e);
}
};
self.onmousemove = function(e) {
if (self.rail.drag) {
if(self.rail.drag.pt!=1)return;
if (cap.ischrome&&e.which==0) return self.onmouseup(e);
self.cursorfreezed = true;
if (self.rail.drag.hr) {
self.scroll.x = self.rail.drag.sx + (e.clientX-self.rail.drag.x);
if (self.scroll.x<0) self.scroll.x=0;
var mw = self.scrollvaluemaxw;
if (self.scroll.x>mw) self.scroll.x=mw;
} else {
self.scroll.y = self.rail.drag.sy + (e.clientY-self.rail.drag.y);
if (self.scroll.y<0) self.scroll.y=0;
var my = self.scrollvaluemax;
if (self.scroll.y>my) self.scroll.y=my;
}
self.synched('mousemove',function(){
if (self.rail.drag&&(self.rail.drag.pt==1)) {
self.showCursor();
if (self.rail.drag.hr) self.doScrollLeft(Math.round(self.scroll.x*self.scrollratio.x),self.opt.cursordragspeed);
else self.doScrollTop(Math.round(self.scroll.y*self.scrollratio.y),self.opt.cursordragspeed);
}
});
return self.cancelEvent(e);
}
/*
else {
self.checkarea = true;
}
*/
};
if (cap.cantouch||self.opt.touchbehavior) {
self.onpreventclick = function(e) {
if (self.preventclick) {
self.preventclick.tg.onclick = self.preventclick.click;
self.preventclick = false;
return self.cancelEvent(e);
}
}
self.bind(self.win,"mousedown",self.ontouchstart);  // control content dragging
self.onclick = (cap.isios) ? false : function(e) {
if (self.lastmouseup) {
self.lastmouseup = false;
return self.cancelEvent(e);
} else {
return true;
}
};
if (self.opt.grabcursorenabled&&cap.cursorgrabvalue) {
self.css((self.ispage)?self.doc:self.win,{'cursor':cap.cursorgrabvalue});
self.css(self.rail,{'cursor':cap.cursorgrabvalue});
}
} else {
function checkSelectionScroll(e) {
if (!self.selectiondrag || ! self.win) return;
if (e) {
var ww = self.win.outerHeight();
var df = (e.pageY - self.selectiondrag.top);
if (df>0&&df<ww) df=0;
if (df>=ww) df-=ww;
self.selectiondrag.df = df;
}
if (self.selectiondrag.df==0) return;
var rt = -Math.floor(self.selectiondrag.df/6)*2;
self.doScrollBy(rt);
self.debounced("doselectionscroll",function(){checkSelectionScroll()},50);
}
if ("getSelection" in document) {  // A grade - Major browsers
self.hasTextSelected = function() {
return (document.getSelection().rangeCount>0);
}
}
else if ("selection" in document) {  //IE9-
self.hasTextSelected = function() {
return (document.selection.type != "None");
}
}
else {
self.hasTextSelected = function() {  // no support
return false;
}
}
self.onselectionstart = function(e) {
if (self.ispage) return;
self.selectiondrag = self.win.offset();
}
self.onselectionend = function(e) {
self.selectiondrag = false;
}
self.onselectiondrag = function(e) {
if (!self.selectiondrag) return;
if (self.hasTextSelected()) self.debounced("selectionscroll",function(){checkSelectionScroll(e)},250);
}
}
if (cap.hasmstouch) {
self.css(self.rail,{'-ms-touch-action':'none'});
self.css(self.cursor,{'-ms-touch-action':'none'});
self.bind(self.win,"MSPointerDown",self.ontouchstart);
self.bind(document,"MSPointerUp",self.ontouchend);
self.bind(document,"MSPointerMove",self.ontouchmove);
self.bind(self.cursor,"MSGestureHold",function(e){e.preventDefault()});
self.bind(self.cursor,"contextmenu",function(e){e.preventDefault()});
}
if (this.istouchcapable) {  //desktop with screen touch enabled
self.bind(self.win,"touchstart",self.ontouchstart);
self.bind(document,"touchend",self.ontouchend);
self.bind(document,"touchcancel",self.ontouchend);
self.bind(document,"touchmove",self.ontouchmove);
}
self.bind(self.cursor,"mousedown",self.onmousedown);
self.bind(self.cursor,"mouseup",self.onmouseup);
if (self.railh) {
self.bind(self.cursorh,"mousedown",function(e){self.onmousedown(e,true)});
self.bind(self.cursorh,"mouseup",function(e){
if (self.rail.drag&&self.rail.drag.pt==2) return;
self.rail.drag = false;
self.hasmoving = false;
self.hideCursor();
if (cap.hasmousecapture) document.releaseCapture();
return self.cancelEvent(e);
});
}
if (self.opt.cursordragontouch||!cap.cantouch&&!self.opt.touchbehavior) {
self.rail.css({"cursor":"default"});
self.railh&&self.railh.css({"cursor":"default"});
self.jqbind(self.rail,"mouseenter",function() {
if (self.canshowonmouseevent) self.showCursor();
self.rail.active = true;
});
self.jqbind(self.rail,"mouseleave",function() {
self.rail.active = false;
if (!self.rail.drag) self.hideCursor();
});
if (self.opt.sensitiverail) {
self.bind(self.rail,"click",function(e){self.doRailClick(e,false,false)});
self.bind(self.rail,"dblclick",function(e){self.doRailClick(e,true,false)});
self.bind(self.cursor,"click",function(e){self.cancelEvent(e)});
self.bind(self.cursor,"dblclick",function(e){self.cancelEvent(e)});
}
if (self.railh) {
self.jqbind(self.railh,"mouseenter",function() {
if (self.canshowonmouseevent) self.showCursor();
self.rail.active = true;
});
self.jqbind(self.railh,"mouseleave",function() {
self.rail.active = false;
if (!self.rail.drag) self.hideCursor();
});
if (self.opt.sensitiverail) {
self.bind(self.railh, "click", function(e){self.doRailClick(e,false,true)});
self.bind(self.railh, "dblclick", function(e){self.doRailClick(e, true, true) });
self.bind(self.cursorh, "click", function (e) { self.cancelEvent(e) });
self.bind(self.cursorh, "dblclick", function (e) { self.cancelEvent(e) });
}
}
}
if (!cap.cantouch&&!self.opt.touchbehavior) {
self.bind((cap.hasmousecapture)?self.win:document,"mouseup",self.onmouseup);
self.bind(document,"mousemove",self.onmousemove);
if (self.onclick) self.bind(document,"click",self.onclick);
if (!self.ispage&&self.opt.enablescrollonselection) {
self.bind(self.win[0],"mousedown",self.onselectionstart);
self.bind(document,"mouseup",self.onselectionend);
self.bind(self.cursor,"mouseup",self.onselectionend);
if (self.cursorh) self.bind(self.cursorh,"mouseup",self.onselectionend);
self.bind(document,"mousemove",self.onselectiondrag);
}
if (self.zoom) {
self.jqbind(self.zoom,"mouseenter",function() {
if (self.canshowonmouseevent) self.showCursor();
self.rail.active = true;
});
self.jqbind(self.zoom,"mouseleave",function() {
self.rail.active = false;
if (!self.rail.drag) self.hideCursor();
});
}
} else {
self.bind((cap.hasmousecapture)?self.win:document,"mouseup",self.ontouchend);
self.bind(document,"mousemove",self.ontouchmove);
if (self.onclick) self.bind(document,"click",self.onclick);
if (self.opt.cursordragontouch) {
self.bind(self.cursor,"mousedown",self.onmousedown);
self.bind(self.cursor,"mousemove",self.onmousemove);
self.cursorh&&self.bind(self.cursorh,"mousedown",self.onmousedown);
self.cursorh&&self.bind(self.cursorh,"mousemove",self.onmousemove);
}
}
if (self.opt.enablemousewheel) {
if (!self.isiframe) self.bind((cap.isie&&self.ispage) ? document : self.docscroll,"mousewheel",self.onmousewheel);
self.bind(self.rail,"mousewheel",self.onmousewheel);
if (self.railh) self.bind(self.railh,"mousewheel",self.onmousewheelhr);
}
if (!self.ispage&&!cap.cantouch&&!(/HTML|BODY/.test(self.win[0].nodeName))) {
if (!self.win.attr("tabindex")) self.win.attr({"tabindex":tabindexcounter++});
self.jqbind(self.win,"focus",function(e) {
domfocus = (self.getTarget(e)).id||true;
self.hasfocus = true;
if (self.canshowonmouseevent) self.noticeCursor();
});
self.jqbind(self.win,"blur",function(e) {
domfocus = false;
self.hasfocus = false;
});
self.jqbind(self.win,"mouseenter",function(e) {
mousefocus = (self.getTarget(e)).id||true;
self.hasmousefocus = true;
if (self.canshowonmouseevent) self.noticeCursor();
});
self.jqbind(self.win,"mouseleave",function() {
mousefocus = false;
self.hasmousefocus = false;
});
};
}  // !ie9mobile
self.onkeypress = function(e) {
if (self.locked&&self.page.maxh==0) return true;
e = (e) ? e : window.e;
var tg = self.getTarget(e);
if (tg&&/INPUT|TEXTAREA|SELECT|OPTION/.test(tg.nodeName)) {
var tp = tg.getAttribute('type')||tg.type||false;
if ((!tp)||!(/submit|button|cancel/i.tp)) return true;
}
if (self.hasfocus||(self.hasmousefocus&&!domfocus)||(self.ispage&&!domfocus&&!mousefocus)) {
var key = e.keyCode;
if (self.locked&&key!=27) return self.cancelEvent(e);
var ctrl = e.ctrlKey||false;
var shift = e.shiftKey || false;
var ret = false;
switch (key) {
case 38:
case 63233: //safari
self.doScrollBy(24*3);
ret = true;
break;
case 40:
case 63235: //safari
self.doScrollBy(-24*3);
ret = true;
break;
case 37:
case 63232: //safari
if (self.railh) {
(ctrl) ? self.doScrollLeft(0) : self.doScrollLeftBy(24*3);
ret = true;
}
break;
case 39:
case 63234: //safari
if (self.railh) {
(ctrl) ? self.doScrollLeft(self.page.maxw) : self.doScrollLeftBy(-24*3);
ret = true;
}
break;
case 33:
case 63276: // safari
self.doScrollBy(self.view.h);
ret = true;
break;
case 34:
case 63277: // safari
self.doScrollBy(-self.view.h);
ret = true;
break;
case 36:
case 63273: // safari
(self.railh&&ctrl) ? self.doScrollPos(0,0) : self.doScrollTo(0);
ret = true;
break;
case 35:
case 63275: // safari
(self.railh&&ctrl) ? self.doScrollPos(self.page.maxw,self.page.maxh) : self.doScrollTo(self.page.maxh);
ret = true;
break;
case 32:
if (self.opt.spacebarenabled) {
(shift) ? self.doScrollBy(self.view.h) : self.doScrollBy(-self.view.h);
ret = true;
}
break;
case 27: // ESC
if (self.zoomactive) {
self.doZoom();
ret = true;
}
break;
}
if (ret) return self.cancelEvent(e);
}
};
if (self.opt.enablekeyboard) self.bind(document,(cap.isopera&&!cap.isopera12)?"keypress":"keydown",self.onkeypress);
self.bind(window,'resize',self.lazyResize);
self.bind(window,'orientationchange',self.lazyResize);
self.bind(window,"load",self.lazyResize);
if (cap.ischrome&&!self.ispage&&!self.haswrapper) { //chrome void scrollbar bug - it persists in version 26
var currentWidth = self.win.width();
self.win
.width( currentWidth + 1 )
.width()
;
self.win.width( currentWidth );
}
self.onAttributeChange = function(e) {
self.lazyResize(250);
}
if (!self.ispage&&!self.haswrapper) {
if (clsMutationObserver !== false) {
self.observer = new clsMutationObserver(function(mutations) {
mutations.forEach(self.onAttributeChange);
});
self.observer.observe(self.win[0],{childList: true, characterData: false, attributes: true, subtree: false});
self.observerremover = new clsMutationObserver(function(mutations) {
mutations.forEach(function(mo){
if (mo.removedNodes.length>0 && self.win) {
for (var dd in mo.removedNodes) {
if (mo.removedNodes[dd]==self.win[0]) return self.remove();
}
}
});
});
self.observerremover.observe(self.win[0].parentNode,{childList: true, characterData: false, attributes: false, subtree: false});
} else {
self.bind(self.win,(cap.isie&&!cap.isie9)?"propertychange":"DOMAttrModified",self.onAttributeChange);
if (cap.isie9) self.win[0].attachEvent("onpropertychange",self.onAttributeChange); //IE9 DOMAttrModified bug
self.bind(self.win,"DOMNodeRemoved",function(e){
if (e.target==self.win[0]) self.remove();
});
}
}
if (!self.ispage&&self.opt.boxzoom) self.bind(window,"resize",self.resizeZoom);
if (self.istextarea) self.bind(self.win,"mouseup",self.lazyResize);
self.checkrtlmode = true;
self.lazyResize(30);
}
if (this.doc[0].nodeName == 'IFRAME') {
function oniframeload(e) {
self.iframexd = false;
try {
var doc = 'contentDocument' in this ? this.contentDocument : this.contentWindow.document;
var a = doc.domain;
} catch(e){self.iframexd = true;doc=false};
if (self.iframexd) {
if ("console" in window) console.log('NiceScroll error: policy restriced iframe');
return true;  //cross-domain - I can't manage this
}
self.forcescreen = true;
if (self.isiframe) {
self.iframe = {
"doc":$(doc),
"html":self.doc.contents().find('html')[0],
"body":self.doc.contents().find('body')[0]
};
self.getContentSize = function(){
return {
w:Math.max(self.iframe.html.scrollWidth,self.iframe.body.scrollWidth),
h:Math.max(self.iframe.html.scrollHeight,self.iframe.body.scrollHeight)
}
}
self.docscroll = $(self.iframe.body);//$(this.contentWindow);
}
if (!cap.isios&&self.opt.iframeautoresize&&!self.isiframe) {
self.win.scrollTop(0); // reset position
self.doc.height("");  //reset height to fix browser bug
var hh=Math.max(doc.getElementsByTagName('html')[0].scrollHeight,doc.body.scrollHeight);
self.doc.height(hh);
}
self.lazyResize(30);
if (cap.isie7) self.css($(self.iframe.html),{'overflow-y':'hidden'});
self.css($(self.iframe.body),{'overflow-y':'hidden'});
if ('contentWindow' in this) {
self.bind(this.contentWindow,"scroll",self.onscroll);  //IE8 & minor
} else {
self.bind(doc,"scroll",self.onscroll);
}
if (self.opt.enablemousewheel) {
self.bind(doc,"mousewheel",self.onmousewheel);
}
if (self.opt.enablekeyboard) self.bind(doc,(cap.isopera)?"keypress":"keydown",self.onkeypress);
if (cap.cantouch||self.opt.touchbehavior) {
self.bind(doc,"mousedown",self.onmousedown);
self.bind(doc,"mousemove",function(e){
self.onmousemove(e,true)
});
if (self.opt.grabcursorenabled&&cap.cursorgrabvalue) self.css($(doc.body),{'cursor':cap.cursorgrabvalue});
}
self.bind(doc,"mouseup",self.onmouseup);
if (self.zoom) {
if (self.opt.dblclickzoom) self.bind(doc,'dblclick',self.doZoom);
if (self.ongesturezoom) self.bind(doc,"gestureend",self.ongesturezoom);
}
};
if (this.doc[0].readyState&&this.doc[0].readyState=="complete"){
setTimeout(function(){oniframeload.call(self.doc[0],false)},500);
}
self.bind(this.doc,"load",oniframeload);
}
};
this.showCursor = function(py,px) {
if (self.cursortimeout) {
clearTimeout(self.cursortimeout);
self.cursortimeout = 0;
}
if (!self.rail) return;
if (self.autohidedom) {
self.autohidedom.stop().css({opacity:self.opt.cursoropacitymax});
self.cursoractive = true;
}
if (!self.rail.drag||self.rail.drag.pt!=1) {
if ((typeof py != "undefined")&&(py!==false)) {
self.scroll.y = Math.round(self.getScrollTop() * (1/self.scrollratio.y));
}
if (typeof px != "undefined") {
self.scroll.x = Math.round(px * 1/self.scrollratio.x); // JMS: Mod to support content drag with top/bottom padding.
}
}
self.cursor.css({height:self.cursorheight,top:self.scroll.y});
if (self.cursorh) {
(!self.rail.align&&self.rail.visibility) ? self.cursorh.css({width:self.cursorwidth,left:self.scroll.x+self.rail.width}) : self.cursorh.css({width:self.cursorwidth,left:self.scroll.x});
self.cursoractive = true;
}
if (self.zoom) self.zoom.stop().css({opacity:self.opt.cursoropacitymax});
};
this.hideCursor = function(tm) {
if (self.cursortimeout) return;
if (!self.rail) return;
if (!self.autohidedom) return;
self.cursortimeout = setTimeout(function() {
if (!self.rail.active||!self.showonmouseevent) {
self.autohidedom.stop().animate({opacity:self.opt.cursoropacitymin});
if (self.zoom) self.zoom.stop().animate({opacity:self.opt.cursoropacitymin});
self.cursoractive = false;
}
self.cursortimeout = 0;
},tm||self.opt.hidecursordelay);
};
this.noticeCursor = function(tm,py,px) {
self.showCursor(py,px);
if (!self.rail.active) self.hideCursor(tm);
};
this.getContentSize =
(self.ispage) ?
function(){
return {
w:Math.max(document.body.scrollWidth,document.documentElement.scrollWidth),
h:Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)
}
}
: (self.haswrapper) ?
function(){
return {
w:self.doc.outerWidth()+parseInt(self.win.css('paddingLeft'))+parseInt(self.win.css('paddingRight')),
h:self.doc.outerHeight()+parseInt(self.win.css('paddingTop'))+parseInt(self.win.css('paddingBottom'))
}
}
: function() {
return {
w:self.docscroll[0].scrollWidth,
h:self.docscroll[0].scrollHeight
}
};
this.onResize = function(e,page) {
if (!self.win) return false;
if (!self.haswrapper&&!self.ispage) {
if (self.win.css('display')=='none') {
if (self.visibility) self.hideRail().hideRailHr();
return false;
} else {
if (!self.hidden&&!self.visibility) self.showRail().showRailHr();
}
}
var premaxh = self.page.maxh;
var premaxw = self.page.maxw;
var preview = {h:self.view.h,w:self.view.w};
self.view = {
w:(self.ispage) ? self.win.width() : parseInt(self.win[0].clientWidth),
h:(self.ispage) ? self.win.height() : parseInt(self.win[0].clientHeight) - self.opt.railpadding["top"] - self.opt.railpadding["bottom"]
};
self.page = (page) ? page : self.getContentSize();
self.page.maxh = Math.max(0,self.page.h - self.view.h);
self.page.maxw = Math.max(0,self.page.w - self.view.w);
if ((self.page.maxh==premaxh)&&(self.page.maxw==premaxw)&&(self.view.w==preview.w)) {
if (!self.ispage) {
var pos = self.win.offset();
if (self.lastposition) {
var lst = self.lastposition;
if ((lst.top==pos.top)&&(lst.left==pos.left)) return self; //nothing to do
}
self.lastposition = pos;
} else {
return self; //nothing to do
}
}
if (self.page.maxh==0) {
self.hideRail();
self.scrollvaluemax = 0;
self.scroll.y = 0;
self.scrollratio.y = 0;
self.cursorheight = 0;
self.setScrollTop(0);
self.rail.scrollable = false;
} else {
self.rail.scrollable = true;
}
if (self.page.maxw==0) {
self.hideRailHr();
self.scrollvaluemaxw = 0;
self.scroll.x = 0;
self.scrollratio.x = 0;
self.cursorwidth = 0;
self.setScrollLeft(0);
self.railh.scrollable = false;
} else {
self.railh.scrollable = true;
}
self.locked = (self.page.maxh==0)&&(self.page.maxw==0);
if (self.locked) {
if (!self.ispage) self.updateScrollBar(self.view);
return false;
}
if (!self.hidden&&!self.visibility) {
self.showRail().showRailHr();
}
else if (!self.hidden&&!self.railh.visibility) self.showRailHr();
if (self.istextarea&&self.win.css('resize')&&self.win.css('resize')!='none') self.view.h-=20;
self.cursorheight = Math.min(self.view.h,Math.round(self.view.h * (self.view.h / ( self.page.h - self.opt.railpadding["top"] - self.opt.railpadding["bottom"]))));
self.cursorheight = (self.opt.cursorfixedheight) ? self.opt.cursorfixedheight : Math.max(self.opt.cursorminheight,self.cursorheight);
self.cursorheight = self.cursorheight * 1.09; // stupid hack to size the inner rail, but it is working.
self.cursorwidth = Math.min(self.view.w,Math.round(self.view.w * (self.view.w / self.page.w)));
self.cursorwidth = (self.opt.cursorfixedheight) ? self.opt.cursorfixedheight : Math.max(self.opt.cursorminheight,self.cursorwidth);
self.scrollvaluemax = self.view.h-self.cursorheight-self.cursor.hborder;
if (self.railh) {
self.railh.width = (self.page.maxh>0) ? (self.view.w-self.rail.width) : self.view.w;
self.scrollvaluemaxw = self.railh.width-self.cursorwidth-self.cursorh.wborder;
}
if (self.checkrtlmode&&self.railh) {
self.checkrtlmode = false;
if (self.opt.rtlmode&&self.scroll.x==0) self.setScrollLeft(self.page.maxw);
}
if (!self.ispage) self.updateScrollBar(self.view);
self.scrollratio = {
x:(self.page.maxw/self.scrollvaluemaxw),
y:( (self.page.maxh + self.opt.railpadding["top"] + self.opt.railpadding["bottom"]) / (self.scrollvaluemax + self.opt.railpadding["top"] + self.opt.railpadding["bottom"]) )
};
var sy = self.getScrollTop();
if (sy>self.page.maxh) {
self.doScrollTop(self.page.maxh);
} else {
self.scroll.y = Math.round(self.getScrollTop() * (1/self.scrollratio.y));
self.scroll.x = Math.round(self.getScrollLeft() * (1/self.scrollratio.x));
if (self.cursoractive) self.noticeCursor();
}
if (self.scroll.y&&(self.getScrollTop()==0)) self.doScrollTo(Math.floor(self.scroll.y*self.scrollratio.y));
return self;
};
this.resize = self.onResize;
this.lazyResize = function(tm) {   // event debounce
tm = (isNaN(tm)) ? 30 : tm;
self.delayed('resize',self.resize,tm);
return self;
}
function _modernWheelEvent(dom,name,fn,bubble) {
self._bind(dom,name,function(e){
var  e = (e) ? e : window.event;
var event = {
original: e,
target: e.target || e.srcElement,
type: "wheel",
deltaMode: e.type == "MozMousePixelScroll" ? 0 : 1,
deltaX: 0,
deltaZ: 0,
preventDefault: function() {
e.preventDefault ? e.preventDefault() : e.returnValue = false;
return false;
},
stopImmediatePropagation: function() {
(e.stopImmediatePropagation) ? e.stopImmediatePropagation() : e.cancelBubble = true;
}
};
if (name=="mousewheel") {
event.deltaY = - 1/40 * e.wheelDelta;
e.wheelDeltaX && (event.deltaX = - 1/40 * e.wheelDeltaX);
} else {
event.deltaY = e.detail;
}
return fn.call(dom,event);
},bubble);
};
this._bind = function(el,name,fn,bubble) {  // primitive bind
self.events.push({e:el,n:name,f:fn,b:bubble,q:false});
if (el.addEventListener) {
el.addEventListener(name,fn,bubble||false);
}
else if (el.attachEvent) {
el.attachEvent("on"+name,fn);
}
else {
el["on"+name] = fn;
}
};
this.jqbind = function(dom,name,fn) {  // use jquery bind for non-native events (mouseenter/mouseleave)
self.events.push({e:dom,n:name,f:fn,q:true});
$(dom).bind(name,fn);
}
this.bind = function(dom,name,fn,bubble) {  // touch-oriented & fixing jquery bind
var el = ("jquery" in dom) ? dom[0] : dom;
if (name=='mousewheel') {
if ("onwheel" in self.win) {
self._bind(el,"wheel",fn,bubble||false);
} else {
var wname = (typeof document.onmousewheel != "undefined") ? "mousewheel" : "DOMMouseScroll";  // older IE/Firefox
_modernWheelEvent(el,wname,fn,bubble||false);
if (wname=="DOMMouseScroll") _modernWheelEvent(el,"MozMousePixelScroll",fn,bubble||false);  // Firefox legacy
}
}
else if (el.addEventListener) {
if (cap.cantouch && /mouseup|mousedown|mousemove/.test(name)) {  // touch device support
var tt=(name=='mousedown')?'touchstart':(name=='mouseup')?'touchend':'touchmove';
self._bind(el,tt,function(e){
if (e.touches) {
if (e.touches.length<2) {var ev=(e.touches.length)?e.touches[0]:e;ev.original=e;fn.call(this,ev);}
}
else if (e.changedTouches) {var ev=e.changedTouches[0];ev.original=e;fn.call(this,ev);}  //blackberry
},bubble||false);
}
self._bind(el,name,fn,bubble||false);
if (cap.cantouch && name=="mouseup") self._bind(el,"touchcancel",fn,bubble||false);
}
else {
self._bind(el,name,function(e) {
e = e||window.event||false;
if (e) {
if (e.srcElement) e.target=e.srcElement;
}
if (!("pageY" in e)) {
e.pageX = e.clientX + document.documentElement.scrollLeft;
e.pageY = e.clientY + document.documentElement.scrollTop;
}
return ((fn.call(el,e)===false)||bubble===false) ? self.cancelEvent(e) : true;
});
}
};
this._unbind = function(el,name,fn,bub) {  // primitive unbind
if (el.removeEventListener) {
el.removeEventListener(name,fn,bub);
}
else if (el.detachEvent) {
el.detachEvent('on'+name,fn);
} else {
el['on'+name] = false;
}
};
this.unbindAll = function() {
for(var a=0;a<self.events.length;a++) {
var r = self.events[a];
(r.q) ? r.e.unbind(r.n,r.f) : self._unbind(r.e,r.n,r.f,r.b);
}
};
this.cancelEvent = function(e) {
var e = (e.original) ? e.original : (e) ? e : window.event||false;
if (!e) return false;
if(e.preventDefault) e.preventDefault();
if(e.stopPropagation) e.stopPropagation();
if(e.preventManipulation) e.preventManipulation();  //IE10
e.cancelBubble = true;
e.cancel = true;
e.returnValue = false;
return false;
};
this.stopPropagation = function(e) {
var e = (e.original) ? e.original : (e) ? e : window.event||false;
if (!e) return false;
if (e.stopPropagation) return e.stopPropagation();
if (e.cancelBubble) e.cancelBubble=true;
return false;
}
this.showRail = function() {
if ((self.page.maxh!=0)&&(self.ispage||self.win.css('display')!='none')) {
self.visibility = true;
self.rail.visibility = true;
self.rail.css('display','block');
}
return self;
};
this.showRailHr = function() {
if (!self.railh) return self;
if ((self.page.maxw!=0)&&(self.ispage||self.win.css('display')!='none')) {
self.railh.visibility = true;
self.railh.css('display','block');
}
return self;
};
this.hideRail = function() {
self.visibility = false;
self.rail.visibility = false;
self.rail.css('display','none');
return self;
};
this.hideRailHr = function() {
if (!self.railh) return self;
self.railh.visibility = false;
self.railh.css('display','none');
return self;
};
this.show = function() {
self.hidden = false;
self.locked = false;
return self.showRail().showRailHr();
};
this.hide = function() {
self.hidden = true;
self.locked = true;
return self.hideRail().hideRailHr();
};
this.toggle = function() {
return (self.hidden) ? self.show() : self.hide();
};
this.remove = function() {
self.stop();
if (self.cursortimeout) clearTimeout(self.cursortimeout);
self.doZoomOut();
self.unbindAll();
if (self.observer !== false) self.observer.disconnect();
if (self.observerremover !== false) self.observerremover.disconnect();
self.events = [];
if (self.cursor) {
self.cursor.remove();
self.cursor = null;
}
if (self.cursorh) {
self.cursorh.remove();
self.cursorh = null;
}
if (self.rail) {
self.rail.remove();
self.rail = null;
}
if (self.railh) {
self.railh.remove();
self.railh = null;
}
if (self.zoom) {
self.zoom.remove();
self.zoom = null;
}
for(var a=0;a<self.saved.css.length;a++) {
var d=self.saved.css[a];
d[0].css(d[1],(typeof d[2]=="undefined") ? '' : d[2]);
}
self.saved = false;
self.me.data('__nicescroll',''); //erase all traces
self.me = null;
self.doc = null;
self.docscroll = null;
self.win = null;
return self;
};
this.scrollstart = function(fn) {
this.onscrollstart = fn;
return self;
}
this.scrollend = function(fn) {
this.onscrollend = fn;
return self;
}
this.scrollcancel = function(fn) {
this.onscrollcancel = fn;
return self;
}
this.zoomin = function(fn) {
this.onzoomin = fn;
return self;
}
this.zoomout = function(fn) {
this.onzoomout = fn;
return self;
}
this.isScrollable = function(e) {
var dom = (e.target) ? e.target : e;
if (dom.nodeName == 'OPTION') return true;
while (dom&&(dom.nodeType==1)&&!(/BODY|HTML/.test(dom.nodeName))) {
var dd = $(dom);
var ov = dd.css('overflowY')||dd.css('overflowX')||dd.css('overflow')||'';
if (/scroll|auto/.test(ov)) return (dom.clientHeight!=dom.scrollHeight);
dom = (dom.parentNode) ? dom.parentNode : false;
}
return false;
};
this.getViewport = function(me) {
var dom = (me&&me.parentNode) ? me.parentNode : false;
while (dom&&(dom.nodeType==1)&&!(/BODY|HTML/.test(dom.nodeName))) {
var dd = $(dom);
var ov = dd.css('overflowY')||dd.css('overflowX')||dd.css('overflow')||'';
if ((/scroll|auto/.test(ov))&&(dom.clientHeight!=dom.scrollHeight)) return dd;
if (dd.getNiceScroll().length>0) return dd;
dom = (dom.parentNode) ? dom.parentNode : false;
}
return false;
};
function execScrollWheel(e,hr,chkscroll) {
var px,py;
var rt = 1;
if (e.deltaMode==0) {  // PIXEL
px = -Math.floor(e.deltaX*(self.opt.mousescrollstep/(18*3)));
py = -Math.floor(e.deltaY*(self.opt.mousescrollstep/(18*3)));
}
else if (e.deltaMode==1) {  // LINE
px = -Math.floor(e.deltaX*self.opt.mousescrollstep);
py = -Math.floor(e.deltaY*self.opt.mousescrollstep);
}
if (hr&&(px==0)&&py) {  // classic vertical-only mousewheel + browser with x/y support
px = py;
py = 0;
}
if (px) {
if (self.scrollmom) {self.scrollmom.stop()}
self.lastdeltax+=px;
self.debounced("mousewheelx",function(){var dt=self.lastdeltax;self.lastdeltax=0;if(!self.rail.drag){self.doScrollLeftBy(dt)}},120);
}
if (py) {
if (self.opt.nativeparentscrolling&&chkscroll&&!self.ispage&&!self.zoomactive) {
if (py<0) {
if (self.getScrollTop()>=self.page.maxh) return true;
} else {
if (self.getScrollTop()<=0) return true;
}
}
if (self.scrollmom) {self.scrollmom.stop()}
self.lastdeltay+=py;
self.debounced("mousewheely",function(){var dt=self.lastdeltay;self.lastdeltay=0;if(!self.rail.drag){self.doScrollBy(dt)}},120);
}
e.stopImmediatePropagation();
return e.preventDefault();
};
this.onmousewheel = function(e) {
if (self.locked) return true;
if (self.rail.drag) return self.cancelEvent(e);
if (!self.rail.scrollable) {
if (self.railh&&self.railh.scrollable) {
return self.onmousewheelhr(e);
} else {
return true;
}
}
var nw = +(new Date());
var chk = false;
if (self.opt.preservenativescrolling&&((self.checkarea+600)<nw)) {
self.nativescrollingarea = self.isScrollable(e);
chk = true;
}
self.checkarea = nw;
if (self.nativescrollingarea) return true; // this isn't my business
var ret = execScrollWheel(e,false,chk);
if (ret) self.checkarea = 0;
return ret;
};
this.onmousewheelhr = function(e) {
if (self.locked||!self.railh.scrollable) return true;
if (self.rail.drag) return self.cancelEvent(e);
var nw = +(new Date());
var chk = false;
if (self.opt.preservenativescrolling&&((self.checkarea+600)<nw)) {
self.nativescrollingarea = self.isScrollable(e);
chk = true;
}
self.checkarea = nw;
if (self.nativescrollingarea) return true; // this isn't my business
if (self.locked) return self.cancelEvent(e);
return execScrollWheel(e,true,chk);
};
this.stop = function() {
self.cancelScroll();
if (self.scrollmon) self.scrollmon.stop();
self.cursorfreezed = false;
self.scroll.y = Math.round(self.getScrollTop() * (1/self.scrollratio.y));
self.noticeCursor();
return self;
};
this.getTransitionSpeed = function(dif) {
var sp = Math.round(self.opt.scrollspeed*10);
var ex = Math.min(sp,Math.round((dif / 20) * self.opt.scrollspeed));
return (ex>20) ? ex : 0;
}
if (!self.opt.smoothscroll) {
this.doScrollLeft = function(x,spd) {  //direct
var y = self.getScrollTop();
self.doScrollPos(x,y,spd);
}
this.doScrollTop = function(y,spd) {   //direct
var x = self.getScrollLeft();
self.doScrollPos(x,y,spd);
}
this.doScrollPos = function(x,y,spd) {  //direct
var nx = (x>self.page.maxw) ? self.page.maxw : x;
if (nx<0) nx=0;
var ny = (y>self.page.maxh) ? self.page.maxh : y;
if (ny<0) ny=0;
self.synched('scroll',function(){
self.setScrollTop(ny);
self.setScrollLeft(nx);
});
}
this.cancelScroll = function() {}; // direct
}
else if (self.ishwscroll&&cap.hastransition&&self.opt.usetransition) {
this.prepareTransition = function(dif,istime) {
var ex = (istime) ? ((dif>20)?dif:0) : self.getTransitionSpeed(dif);
var trans = (ex) ? cap.prefixstyle+'transform '+ex+'ms ease-out' : '';
if (!self.lasttransitionstyle||self.lasttransitionstyle!=trans) {
self.lasttransitionstyle = trans;
self.doc.css(cap.transitionstyle,trans);
}
return ex;
};
this.doScrollLeft = function(x,spd) {  //trans
var y = (self.scrollrunning) ? self.newscrolly : self.getScrollTop();
self.doScrollPos(x,y,spd);
}
this.doScrollTop = function(y,spd) {   //trans
var x = (self.scrollrunning) ? self.newscrollx : self.getScrollLeft();
self.doScrollPos(x,y,spd);
}
this.doScrollPos = function(x,y,spd) {  //trans
var py = self.getScrollTop();
var px = self.getScrollLeft();
if (((self.newscrolly-py)*(y-py)<0)||((self.newscrollx-px)*(x-px)<0)) self.cancelScroll();  //inverted movement detection
if (self.opt.bouncescroll==false) {
if (y<0) y=0;
else if (y>self.page.maxh) y=self.page.maxh;
if (x<0) x=0;
else if (x>self.page.maxw) x=self.page.maxw;
}
if (self.scrollrunning&&x==self.newscrollx&&y==self.newscrolly) return false;
self.newscrolly = y;
self.newscrollx = x;
self.newscrollspeed = spd||false;
if (self.timer) return false;
self.timer = setTimeout(function(){
var top = self.getScrollTop();
var lft = self.getScrollLeft();
var dst = {};
dst.x = x-lft;
dst.y = y-top;
dst.px = lft;
dst.py = top;
var dd = Math.round(Math.sqrt(Math.pow(dst.x,2)+Math.pow(dst.y,2)));
var ms = (self.newscrollspeed && self.newscrollspeed>1) ? self.newscrollspeed : self.getTransitionSpeed(dd);
if (self.newscrollspeed&&self.newscrollspeed<=1) ms*=self.newscrollspeed;
self.prepareTransition(ms,true);
if (self.timerscroll&&self.timerscroll.tm) clearInterval(self.timerscroll.tm);
if (ms>0) {
if (!self.scrollrunning&&self.onscrollstart) {
var info = {"type":"scrollstart","current":{"x":lft,"y":top},"request":{"x":x,"y":y},"end":{"x":self.newscrollx,"y":self.newscrolly},"speed":ms};
self.onscrollstart.call(self,info);
}
if (cap.transitionend) {
if (!self.scrollendtrapped) {
self.scrollendtrapped = true;
self.bind(self.doc,cap.transitionend,self.onScrollEnd,false); //I have got to do something usefull!!
}
} else {
if (self.scrollendtrapped) clearTimeout(self.scrollendtrapped);
self.scrollendtrapped = setTimeout(self.onScrollEnd,ms);  // simulate transitionend event
}
var py = top;
var px = lft;
self.timerscroll = {
bz: new BezierClass(py,self.newscrolly,ms,0,0,0.58,1),
bh: new BezierClass(px,self.newscrollx,ms,0,0,0.58,1)
};
if (!self.cursorfreezed) self.timerscroll.tm=setInterval(function(){self.showCursor(self.getScrollTop(),self.getScrollLeft())},60);
}
self.synched("doScroll-set",function(){
self.timer = 0;
if (self.scrollendtrapped) self.scrollrunning = true;
self.setScrollTop(self.newscrolly);
self.setScrollLeft(self.newscrollx);
if (!self.scrollendtrapped) self.onScrollEnd();
});
},50);
};
this.cancelScroll = function() {
if (!self.scrollendtrapped) return true;
var py = self.getScrollTop();
var px = self.getScrollLeft();
self.scrollrunning = false;
if (!cap.transitionend) clearTimeout(cap.transitionend);
self.scrollendtrapped = false;
self._unbind(self.doc,cap.transitionend,self.onScrollEnd);
self.prepareTransition(0);
self.setScrollTop(py); // fire event onscroll
if (self.railh) self.setScrollLeft(px);
if (self.timerscroll&&self.timerscroll.tm) clearInterval(self.timerscroll.tm);
self.timerscroll = false;
self.cursorfreezed = false;
self.showCursor(py,px);
return self;
};
this.onScrollEnd = function() {
if (self.scrollendtrapped) self._unbind(self.doc,cap.transitionend,self.onScrollEnd);
self.scrollendtrapped = false;
self.prepareTransition(0);
if (self.timerscroll&&self.timerscroll.tm) clearInterval(self.timerscroll.tm);
self.timerscroll = false;
var py = self.getScrollTop();
var px = self.getScrollLeft();
self.setScrollTop(py);  // fire event onscroll
if (self.railh) self.setScrollLeft(px);  // fire event onscroll left
self.noticeCursor(false,py,px);
self.cursorfreezed = false;
if (py<0) py=0
else if (py>self.page.maxh) py=self.page.maxh;
if (px<0) px=0
else if (px>self.page.maxw) px=self.page.maxw;
if((py!=self.newscrolly)||(px!=self.newscrollx)) return self.doScrollPos(px,py,self.opt.snapbackspeed);
if (self.onscrollend&&self.scrollrunning) {
var info = {"type":"scrollend","current":{"x":px,"y":py},"end":{"x":self.newscrollx,"y":self.newscrolly}};
self.onscrollend.call(self,info);
}
self.scrollrunning = false;
};
} else {
this.doScrollLeft = function(x,spd) {  //no-trans
var y = (self.scrollrunning) ? self.newscrolly : self.getScrollTop();
self.doScrollPos(x,y,spd);
}
this.doScrollTop = function(y,spd) {  //no-trans
var x = (self.scrollrunning) ? self.newscrollx : self.getScrollLeft();
self.doScrollPos(x,y,spd);
}
this.doScrollPos = function(x,y,spd) {  //no-trans
var y = ((typeof y == "undefined")||(y===false)) ? self.getScrollTop(true) : y;
if  ((self.timer)&&(self.newscrolly==y)&&(self.newscrollx==x)) return true;
if (self.timer) clearAnimationFrame(self.timer);
self.timer = 0;
var py = self.getScrollTop();
var px = self.getScrollLeft();
if (((self.newscrolly-py)*(y-py)<0)||((self.newscrollx-px)*(x-px)<0)) self.cancelScroll();  //inverted movement detection
self.newscrolly = y;
self.newscrollx = x;
if (!self.bouncescroll||!self.rail.visibility) {
if (self.newscrolly<0) {
self.newscrolly = 0;
}
else if (self.newscrolly>self.page.maxh) {
self.newscrolly = self.page.maxh;
}
}
if (!self.bouncescroll||!self.railh.visibility) {
if (self.newscrollx<0) {
self.newscrollx = 0;
}
else if (self.newscrollx>self.page.maxw) {
self.newscrollx = self.page.maxw;
}
}
self.dst = {};
self.dst.x = x-px;
self.dst.y = y-py;
self.dst.px = px;
self.dst.py = py;
var dst = Math.round(Math.sqrt(Math.pow(self.dst.x,2)+Math.pow(self.dst.y,2)));
self.dst.ax = self.dst.x / dst;
self.dst.ay = self.dst.y / dst;
var pa = 0;
var pe = dst;
if (self.dst.x==0) {
pa = py;
pe = y;
self.dst.ay = 1;
self.dst.py = 0;
} else if (self.dst.y==0) {
pa = px;
pe = x;
self.dst.ax = 1;
self.dst.px = 0;
}
var ms = self.getTransitionSpeed(dst);
if (spd&&spd<=1) ms*=spd;
if (ms>0) {
self.bzscroll = (self.bzscroll) ? self.bzscroll.update(pe,ms) : new BezierClass(pa,pe,ms,0,1,0,1);
} else {
self.bzscroll = false;
}
if (self.timer) return;
if ((py==self.page.maxh&&y>=self.page.maxh)||(px==self.page.maxw&&x>=self.page.maxw)) self.checkContentSize();
var sync = 1;
function scrolling() {
if (self.cancelAnimationFrame) return true;
self.scrollrunning = true;
sync = 1-sync;
if (sync) return (self.timer = setAnimationFrame(scrolling)||1);
var done = 0;
var sc = sy = self.getScrollTop();
if (self.dst.ay) {
sc = (self.bzscroll) ? self.dst.py + (self.bzscroll.getNow()*self.dst.ay) : self.newscrolly;
var dr=sc-sy;
if ((dr<0&&sc<self.newscrolly)||(dr>0&&sc>self.newscrolly)) sc = self.newscrolly;
self.setScrollTop(sc);
if (sc == self.newscrolly) done=1;
} else {
done=1;
}
var scx = sx = self.getScrollLeft();
if (self.dst.ax) {
scx = (self.bzscroll) ? self.dst.px + (self.bzscroll.getNow()*self.dst.ax) : self.newscrollx;
var dr=scx-sx;
if ((dr<0&&scx<self.newscrollx)||(dr>0&&scx>self.newscrollx)) scx = self.newscrollx;
self.setScrollLeft(scx);
if (scx == self.newscrollx) done+=1;
} else {
done+=1;
}
if (done==2) {
self.timer = 0;
self.cursorfreezed = false;
self.bzscroll = false;
self.scrollrunning = false;
if (sc<0) sc=0;
else if (sc>self.page.maxh) sc=self.page.maxh;
if (scx<0) scx=0;
else if (scx>self.page.maxw) scx=self.page.maxw;
if ((scx!=self.newscrollx)||(sc!=self.newscrolly)) self.doScrollPos(scx,sc);
else {
if (self.onscrollend) {
var info = {"type":"scrollend","current":{"x":sx,"y":sy},"end":{"x":self.newscrollx,"y":self.newscrolly}};
self.onscrollend.call(self,info);
}
}
} else {
self.timer = setAnimationFrame(scrolling)||1;
}
};
self.cancelAnimationFrame=false;
self.timer = 1;
if (self.onscrollstart&&!self.scrollrunning) {
var info = {"type":"scrollstart","current":{"x":px,"y":py},"request":{"x":x,"y":y},"end":{"x":self.newscrollx,"y":self.newscrolly},"speed":ms};
self.onscrollstart.call(self,info);
}
scrolling();
if ((py==self.page.maxh&&y>=py)||(px==self.page.maxw&&x>=px)) self.checkContentSize();
self.noticeCursor();
};
this.cancelScroll = function() {
if (self.timer) clearAnimationFrame(self.timer);
self.timer = 0;
self.bzscroll = false;
self.scrollrunning = false;
return self;
};
}
this.doScrollBy = function(stp,relative) {
var ny = 0;
if (relative) {
ny = Math.floor((self.scroll.y-stp)*self.scrollratio.y)
} else {
var sy = (self.timer) ? self.newscrolly : self.getScrollTop(true);
ny = sy-stp;
}
if (self.bouncescroll) {
var haf = Math.round(self.view.h/2);
if (ny<-haf) ny=-haf
else if (ny>(self.page.maxh+haf)) ny = (self.page.maxh+haf);
}
self.cursorfreezed = false;
py = self.getScrollTop(true);
if (ny<0&&py<=0) return self.noticeCursor();
else if (ny>self.page.maxh&&py>=self.page.maxh) {
self.checkContentSize();
return self.noticeCursor();
}
self.doScrollTop(ny);
};
this.doScrollLeftBy = function(stp,relative) {
var nx = 0;
if (relative) {
nx = Math.floor((self.scroll.x-stp)*self.scrollratio.x)
} else {
var sx = (self.timer) ? self.newscrollx : self.getScrollLeft(true);
nx = sx-stp;
}
if (self.bouncescroll) {
var haf = Math.round(self.view.w/2);
if (nx<-haf) nx=-haf
else if (nx>(self.page.maxw+haf)) nx = (self.page.maxw+haf);
}
self.cursorfreezed = false;
px = self.getScrollLeft(true);
if (nx<0&&px<=0) return self.noticeCursor();
else if (nx>self.page.maxw&&px>=self.page.maxw) return self.noticeCursor();
self.doScrollLeft(nx);
};
this.doScrollTo = function(pos,relative) {
var ny = (relative) ? Math.round(pos*self.scrollratio.y) : pos;
if (ny<0) ny=0
else if (ny>self.page.maxh) ny = self.page.maxh;
self.cursorfreezed = false;
self.doScrollTop(pos);
};
this.checkContentSize = function() {
var pg = self.getContentSize();
if ((pg.h!=self.page.h)||(pg.w!=self.page.w)) self.resize(false,pg);
};
self.onscroll = function(e) {
if (self.rail.drag) return;
if (!self.cursorfreezed) {
self.synched('scroll',function(){
self.scroll.y = Math.round(self.getScrollTop() * (1/self.scrollratio.y));
if( self.scroll.y > self.scrollvaluemax ){
self.scroll.y = self.scrollvaluemax;
}
if (self.railh) self.scroll.x = Math.round(self.getScrollLeft() * (1/self.scrollratio.x));
self.noticeCursor();
});
}
};
self.bind(self.docscroll,"scroll",self.onscroll);
this.doZoomIn = function(e) {
if (self.zoomactive) return;
self.zoomactive = true;
self.zoomrestore = {
style:{}
};
var lst = ['position','top','left','zIndex','backgroundColor','marginTop','marginBottom','marginLeft','marginRight'];
var win = self.win[0].style;
for(var a in lst) {
var pp = lst[a];
self.zoomrestore.style[pp] = (typeof win[pp] != "undefined") ? win[pp] : '';
}
self.zoomrestore.style.width = self.win.css('width');
self.zoomrestore.style.height = self.win.css('height');
self.zoomrestore.padding = {
w:self.win.outerWidth()-self.win.width(),
h:self.win.outerHeight()-self.win.height()
};
if (cap.isios4) {
self.zoomrestore.scrollTop = $(window).scrollTop();
$(window).scrollTop(0);
}
self.win.css({
"position":(cap.isios4)?"absolute":"fixed",
"top":0,
"left":0,
"z-index":globalmaxzindex+100,
"margin":"0px"
});
var bkg = self.win.css("backgroundColor");
if (bkg==""||/transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(bkg)) self.win.css("backgroundColor","#fff");
self.rail.css({"z-index":globalmaxzindex+101});
self.zoom.css({"z-index":globalmaxzindex+102});
self.zoom.css('backgroundPosition','0px -18px');
self.resizeZoom();
if (self.onzoomin) self.onzoomin.call(self);
return self.cancelEvent(e);
};
this.doZoomOut = function(e) {
if (!self.zoomactive) return;
self.zoomactive = false;
self.win.css("margin","");
self.win.css(self.zoomrestore.style);
if (cap.isios4) {
$(window).scrollTop(self.zoomrestore.scrollTop);
}
self.rail.css({"z-index":self.zindex});
self.zoom.css({"z-index":self.zindex});
self.zoomrestore = false;
self.zoom.css('backgroundPosition','0px 0px');
self.onResize();
if (self.onzoomout) self.onzoomout.call(self);
return self.cancelEvent(e);
};
this.doZoom = function(e) {
return (self.zoomactive) ? self.doZoomOut(e) : self.doZoomIn(e);
};
this.resizeZoom = function() {
if (!self.zoomactive) return;
var py = self.getScrollTop(); //preserve scrolling position
self.win.css({
width:$(window).width()-self.zoomrestore.padding.w+"px",
height:$(window).height()-self.zoomrestore.padding.h+"px"
});
self.onResize();
self.setScrollTop(Math.min(self.page.maxh,py));
};
this.init();
$.nicescroll.push(this);
};
var ScrollMomentumClass2D = function(nc) {
var self = this;
this.nc = nc;
this.lastx = 0;
this.lasty = 0;
this.speedx = 0;
this.speedy = 0;
this.lasttime = 0;
this.steptime = 0;
this.snapx = false;
this.snapy = false;
this.demulx = 0;
this.demuly = 0;
this.lastscrollx = -1;
this.lastscrolly = -1;
this.chkx = 0;
this.chky = 0;
this.timer = 0;
this.time = function() {
return +new Date();//beautifull hack
};
this.reset = function(px,py) {
self.stop();
var now = self.time();
self.steptime = 0;
self.lasttime = now;
self.speedx = 0;
self.speedy = 0;
self.lastx = px;
self.lasty = py;
self.lastscrollx = -1;
self.lastscrolly = -1;
};
this.update = function(px,py) {
var now = self.time();
self.steptime = now - self.lasttime;
self.lasttime = now;
var dy = py - self.lasty;
var dx = px - self.lastx;
var sy = self.nc.getScrollTop();
var sx = self.nc.getScrollLeft();
var newy = sy + dy;
var newx = sx + dx;
self.snapx = (newx<0)||(newx>self.nc.page.maxw);
self.snapy = (newy<0)||(newy>self.nc.page.maxh);
self.speedx = dx;
self.speedy = dy;
self.lastx = px;
self.lasty = py;
};
this.stop = function() {
self.nc.unsynched("domomentum2d");
if (self.timer) clearTimeout(self.timer);
self.timer = 0;
self.lastscrollx = -1;
self.lastscrolly = -1;
};
this.doSnapy = function(nx,ny) {
var snap = false;
if (ny<0) {
ny=0;
snap=true;
}
else if (ny>self.nc.page.maxh) {
ny=self.nc.page.maxh;
snap=true;
}
if (nx<0) {
nx=0;
snap=true;
}
else if (nx>self.nc.page.maxw) {
nx=self.nc.page.maxw;
snap=true;
}
if (snap) self.nc.doScrollPos(nx,ny,self.nc.opt.snapbackspeed);
};
this.doMomentum = function(gp) {
var t = self.time();
var l = (gp) ? t+gp : self.lasttime;
var sl = self.nc.getScrollLeft();
var st = self.nc.getScrollTop();
var pageh = self.nc.page.maxh;
var pagew = self.nc.page.maxw;
self.speedx = (pagew>0) ? Math.min(60,self.speedx) : 0;
self.speedy = (pageh>0) ? Math.min(60,self.speedy) : 0;
var chk = l && (t - l) <= 50;
if ((st<0)||(st>pageh)||(sl<0)||(sl>pagew)) chk = false;
var sy = (self.speedy && chk) ? self.speedy : false;
var sx = (self.speedx && chk) ? self.speedx : false;
if (sy||sx) {
var tm = Math.max(16,self.steptime); //timeout granularity
if (tm>50) {  // do smooth
var xm = tm/50;
self.speedx*=xm;
self.speedy*=xm;
tm = 50;
}
self.demulxy = 0;
self.lastscrollx = self.nc.getScrollLeft();
self.chkx = self.lastscrollx;
self.lastscrolly = self.nc.getScrollTop();
self.chky = self.lastscrolly;
var nx = self.lastscrollx;
var ny = self.lastscrolly;
var onscroll = function(){
var df = ((self.time()-t)>600) ? 0.04 : 0.02;
if (self.speedx) {
nx = Math.floor(self.lastscrollx - (self.speedx*(1-self.demulxy)));
self.lastscrollx = nx;
if ((nx<0)||(nx>pagew)) df=0.10;
}
if (self.speedy) {
ny = Math.floor(self.lastscrolly - (self.speedy*(1-self.demulxy)));
self.lastscrolly = ny;
if ((ny<0)||(ny>pageh)) df=0.10;
}
self.demulxy = Math.min(1,self.demulxy+df);
self.nc.synched("domomentum2d",function(){
if (self.speedx) {
var scx = self.nc.getScrollLeft();
if (scx!=self.chkx) self.stop();
self.chkx=nx;
self.nc.setScrollLeft(nx);
}
if (self.speedy) {
var scy = self.nc.getScrollTop();
if (scy!=self.chky) self.stop();
self.chky=ny;
self.nc.setScrollTop(ny);
}
if(!self.timer) {
self.nc.hideCursor();
self.doSnapy(nx,ny);
}
});
if (self.demulxy<1) {
self.timer = setTimeout(onscroll,tm);
} else {
self.stop();
self.nc.hideCursor();
self.doSnapy(nx,ny);
}
};
onscroll();
} else {
self.doSnapy(self.nc.getScrollLeft(),self.nc.getScrollTop());
}
}
};
var _scrollTop = jQuery.fn.scrollTop; // preserve original function
jQuery.cssHooks["pageYOffset"] = {
get: function(elem,computed,extra) {
var nice = $.data(elem,'__nicescroll')||false;
return (nice&&nice.ishwscroll) ? nice.getScrollTop() : _scrollTop.call(elem);
},
set: function(elem,value) {
var nice = $.data(elem,'__nicescroll')||false;
(nice&&nice.ishwscroll) ? nice.setScrollTop(parseInt(value)) : _scrollTop.call(elem,value);
return this;
}
};
/*
$.fx.step["scrollTop"] = function(fx){
$.cssHooks["scrollTop"].set( fx.elem, fx.now + fx.unit );
};
*/
jQuery.fn.scrollTop = function(value) {
if (typeof value == "undefined") {
var nice = (this[0]) ? $.data(this[0],'__nicescroll')||false : false;
return (nice&&nice.ishwscroll) ? nice.getScrollTop() : _scrollTop.call(this);
} else {
return this.each(function() {
var nice = $.data(this,'__nicescroll')||false;
(nice&&nice.ishwscroll) ? nice.setScrollTop(parseInt(value)) : _scrollTop.call($(this),value);
});
}
}
var _scrollLeft = jQuery.fn.scrollLeft; // preserve original function
$.cssHooks.pageXOffset = {
get: function(elem,computed,extra) {
var nice = $.data(elem,'__nicescroll')||false;
return (nice&&nice.ishwscroll) ? nice.getScrollLeft() : _scrollLeft.call(elem);
},
set: function(elem,value) {
var nice = $.data(elem,'__nicescroll')||false;
(nice&&nice.ishwscroll) ? nice.setScrollLeft(parseInt(value)) : _scrollLeft.call(elem,value);
return this;
}
};
/*
$.fx.step["scrollLeft"] = function(fx){
$.cssHooks["scrollLeft"].set( fx.elem, fx.now + fx.unit );
};
*/
jQuery.fn.scrollLeft = function(value) {
if (typeof value == "undefined") {
var nice = (this[0]) ? $.data(this[0],'__nicescroll')||false : false;
return (nice&&nice.ishwscroll) ? nice.getScrollLeft() : _scrollLeft.call(this);
} else {
return this.each(function() {
var nice = $.data(this,'__nicescroll')||false;
(nice&&nice.ishwscroll) ? nice.setScrollLeft(parseInt(value)) : _scrollLeft.call($(this),value);
});
}
}
var NiceScrollArray = function(doms) {
var self = this;
this.length = 0;
this.name = "nicescrollarray";
this.each = function(fn) {
for(var a=0;a<self.length;a++) fn.call(self[a]);
return self;
};
this.push = function(nice) {
self[self.length]=nice;
self.length++;
};
this.eq = function(idx) {
return self[idx];
};
if (doms) {
for(a=0;a<doms.length;a++) {
var nice = $.data(doms[a],'__nicescroll')||false;
if (nice) {
this[this.length]=nice;
this.length++;
}
};
}
return this;
};
function mplex(el,lst,fn) {
for(var a=0;a<lst.length;a++) fn(el,lst[a]);
};
mplex(
NiceScrollArray.prototype,
['show','hide','toggle','onResize','resize','remove','stop','doScrollPos'],
function(e,n) {
e[n] = function(){
var args = arguments;
return this.each(function(){
this[n].apply(this,args);
});
};
}
);
jQuery.fn.getNiceScroll = function(index) {
if (typeof index == "undefined") {
return new NiceScrollArray(this);
} else {
var nice = $.data(this[index],'__nicescroll')||false;
return nice;
}
};
jQuery.extend(jQuery.expr[':'], {
nicescroll: function(a) {
return ($.data(a,'__nicescroll'))?true:false;
}
});
$.fn.niceScroll = function(wrapper,opt) {
if (typeof opt=="undefined") {
if ((typeof wrapper=="object")&&!("jquery" in wrapper)) {
opt = wrapper;
wrapper = false;
}
}
var ret = new NiceScrollArray();
if (typeof opt=="undefined") opt = {};
if (wrapper||false) {
opt.doc = $(wrapper);
opt.win = $(this);
}
var docundef = !("doc" in opt);
if (!docundef&&!("win" in opt)) opt.win = $(this);
this.each(function() {
var nice = $(this).data('__nicescroll')||false;
if (!nice) {
opt.doc = (docundef) ? $(this) : opt.doc;
nice = new NiceScrollClass(opt,$(this));
$(this).data('__nicescroll',nice);
}
ret.push(nice);
});
return (ret.length==1) ? ret[0] : ret;
};
window.NiceScroll = {
getjQuery:function(){return jQuery}
};
if (!$.nicescroll) {
$.nicescroll = new NiceScrollArray();
$.nicescroll.options = _globaloptions;
}
})( jQuery );
;
;
/*! intlTelInput.custom.min.js */ 
;
;
(function(){"use strict";(function(t,n,r,i){function a(e,n){this.element=e;this.options=t.extend({},u,n);this._defaults=u;this.id=o++;this._name=s;this.init()}var s="intlTelInput",o=1,u={preferredCountries:["us","gb"],americaMode:false,onlyCountries:[],defaultStyling:true,autoHideDialCode:true,defaultCountry:""};a.prototype={init:function(){var i=this;if(this.options.onlyCountries.length>0){var s=[],o={};t.each(this.options.onlyCountries,function(e,t){var n=i._getCountryData(t,true);if(n){s.push(n);var r=n["calling-code"];if(o[r]){o[r].push(t)}else{o[r]=[t]}}});n.intlData={countries:s,countryCodes:o}}else{n.intlData=e}var u=[];t.each(this.options.preferredCountries,function(e,t){var n=i._getCountryData(t,false);if(n){u.push(n)}});if(this.options.defaultCountry){this.defaultCountry=this._getCountryData(this.options.defaultCountry,false)}else{this.defaultCountry=u.length?u[0]:intlData.countries[0]}this.telInput=t(this.element);if(!this.options.autoHideDialCode&&this.telInput.val()===""){this._resetToDialCode(this.defaultCountry["calling-code"])}var a="intl-tel-input";if(this.options.defaultStyling){a+=" pretty"}this.telInput.wrap(t("<div>",{"class":a}));var f=t("<div>",{"class":"flag-dropdown f16"}).insertBefore(this.telInput);var l=t("<div>",{"class":"selected-flag"}).appendTo(f);var c=this.defaultCountry.cca2;this.selectedFlagInner=t("<div>",{"class":"flag "+c}).appendTo(l);t("<div>",{"class":"down-arrow"}).appendTo(this.selectedFlagInner);this.countryList=t("<ul>",{"class":"country-list hide"}).appendTo(f);if(u.length){this._appendListItems(u,"preferred");t("<li>",{"class":"divider"}).appendTo(this.countryList)}this._appendListItems(intlData.countries,"");this.countryListItems=this.countryList.children(".country");this.countryListItems.first().addClass("active");if(this.options.autoHideDialCode){this.telInput.focusin(function(){var e=t.trim(i.telInput.val());if(e.length===0){var n=i.selectedFlagInner.attr("class").split(" ")[1];var r=i._getCountryData(n,false);i._resetToDialCode(r["calling-code"])}});this.telInput.focusout(function(){var e=t.trim(i.telInput.val());if(e.length>0){var n=i._getDialCode(e);if("+"+n==e){i.telInput.val("")}}})}this.telInput.keyup(function(){i._updateFlagFromInputVal()});i._updateFlagFromInputVal();l.click(function(e){if(i.countryList.hasClass("hide")){var n=i.countryList.children(".active");i._highlightListItem(n);i.countryList.removeClass("hide");i._scrollTo(n);var s=true;t("html").bind("click.intlTelInput"+i.id,function(e){if(!s){i._closeDropdown()}s=false});t(r).bind("keydown.intlTelInput"+i.id,function(e){if(e.which==38||e.which==40){e.preventDefault();var n=i.countryList.children(".highlight").first();var r=e.which==38?n.prev():n.next();if(r.length){if(r.hasClass("divider")){r=e.which==38?r.prev():r.next()}i._highlightListItem(r);i._scrollTo(r)}}else if(e.which==13){var s=i.countryList.children(".highlight").first();if(s.length){i._selectListItem(s)}}else if(e.which==9||e.which==27){i._closeDropdown()}else if(e.which>=97&&e.which<=122||e.which>=65&&e.which<=90){var o=String.fromCharCode(e.which);var u=i.countryListItems.filter(function(){return t(this).text().charAt(0)==o&&!t(this).hasClass("preferred")});if(u.length){var a=u.filter(".highlight").first();var f;if(a&&a.next()&&a.next().text().charAt(0)==o){f=a.next()}else{f=u.first()}i._highlightListItem(f);i._scrollTo(f)}}})}});this.countryListItems.mouseover(function(){i._highlightListItem(t(this))});this.countryListItems.click(function(e){var n=t(e.currentTarget);i._selectListItem(n)})},_updateFlagFromInputVal:function(){var e=this;var n,r=false;var i=this._getDialCode(this.telInput.val());if(i){var s=intlData.countryCodes[i];t.each(s,function(t,n){if(e.selectedFlagInner.hasClass(n)){r=true}});n=s[0]}else{n=this.defaultCountry.cca2}if(!r){this._selectFlag(n)}},_resetToDialCode:function(e){var t=e=="1"&&this.options.americaMode?"":"+"+e+" ";this.telInput.val(t)},_highlightListItem:function(e){this.countryListItems.removeClass("highlight");e.addClass("highlight")},_getCountryData:function(t,n){var r=n?e.countries:intlData.countries;for(var i=0;i<r.length;i++){if(r[i].cca2==t){return r[i]}}},_selectFlag:function(e){this.selectedFlagInner.attr("class","flag "+e);var t=this.countryListItems.children(".flag."+e).parent();this.countryListItems.removeClass("active");t.addClass("active")},_selectListItem:function(e){var t=e.attr("data-country-code");this._selectFlag(t);var n=this._updateNumber(e.attr("data-dial-code"));this.telInput.val(n);this.telInput.focus()},_closeDropdown:function(){this.countryList.addClass("hide");t(r).unbind("keydown.intlTelInput"+this.id);t("html").unbind("click.intlTelInput"+this.id)},_scrollTo:function(e){var t=this.countryList;var n=t.height();var r=t.offset().top;var i=r+n;var s=e.outerHeight();var o=e.offset().top;var u=o+s;var a=o-r+t.scrollTop();if(o<r){t.scrollTop(a)}else if(u>i){var f=n-s;t.scrollTop(a-f)}},_updateNumber:function(e){var n=this.telInput.val();var r="+"+this._getDialCode(n);var i="+"+e;var s;if(r.length>1){s=n.replace(r,i);if(n==r){s+=" "}}else if(n.length&&n.substr(0,1)!="+"){s=i+" "+t.trim(n)}else{s=i+" "}if(this.options.americaMode&&s.substring(0,3)=="+1 "){s=s.substring(3)}return s},_getDialCode:function(e){var n=t.trim(e).split(" ")[0];if(n.substring(0,1)=="+"){var r=n.replace(/\D/g,"").substring(0,4);for(var i=r.length;i>0;i--){r=r.substring(0,i);if(intlData.countryCodes[r]){return r}}}return""},_appendListItems:function(e,n){var r="";t.each(e,function(e,t){r+="<li class='country "+n+"' data-dial-code='"+t["calling-code"]+"' data-country-code='"+t.cca2+"'>";r+="<div class='flag "+t.cca2+"'></div>";r+="<span class='country-name'>"+t.name+"</span>";r+="<span class='dial-code'>+"+t["calling-code"]+"</span>";r+="</li>"});this.countryList.append(r)},setNumber:function(e){this.telInput.val(e);this._updateFlagFromInputVal()},selectCountry:function(e){if(!this.selectedFlagInner.hasClass(e)){this._selectFlag(e);if(!this.options.autoHideDialCode){var t=this._getCountryData(e,false);this._resetToDialCode(t["calling-code"])}}}};t.fn[s]=function(e){var n=arguments;if(e===i||typeof e==="object"){return this.each(function(){if(!t.data(this,"plugin_"+s)){t.data(this,"plugin_"+s,new a(this,e))}})}else if(typeof e==="string"&&e[0]!=="_"&&e!=="init"){var r;this.each(function(){var i=t.data(this,"plugin_"+s);if(i instanceof a&&typeof i[e]==="function"){r=i[e].apply(i,Array.prototype.slice.call(n,1))}});return r!==i?r:this}};t.fn[s].getCountryData=function(){return e};t.fn[s].setCountryData=function(t){e=t}})(jQuery,window,document);var e={countries:[{name:"Afghanistan",cca2:"af","calling-code":"93"},{name:"Albania",cca2:"al","calling-code":"355"},{name:"Algeria",cca2:"dz","calling-code":"213"},{name:"American Samoa",cca2:"as","calling-code":"1684"},{name:"Andorra",cca2:"ad","calling-code":"376"},{name:"Angola",cca2:"ao","calling-code":"244"},{name:"Anguilla",cca2:"ai","calling-code":"1264"},{name:"Antigua and Barbuda",cca2:"ag","calling-code":"1268"},{name:"Argentina",cca2:"ar","calling-code":"54"},{name:"Armenia",cca2:"am","calling-code":"374"},{name:"Aruba",cca2:"aw","calling-code":"297"},{name:"Australia",cca2:"au","calling-code":"61"},{name:"Austria",cca2:"at","calling-code":"43"},{name:"Azerbaijan",cca2:"az","calling-code":"994"},{name:"Bahamas",cca2:"bs","calling-code":"1242"},{name:"Bahrain",cca2:"bh","calling-code":"973"},{name:"Bangladesh",cca2:"bd","calling-code":"880"},{name:"Barbados",cca2:"bb","calling-code":"1246"},{name:"Belarus",cca2:"by","calling-code":"375"},{name:"Belgium",cca2:"be","calling-code":"32"},{name:"Belize",cca2:"bz","calling-code":"501"},{name:"Benin",cca2:"bj","calling-code":"229"},{name:"Bermuda",cca2:"bm","calling-code":"1441"},{name:"Bhutan",cca2:"bt","calling-code":"975"},{name:"Bolivia",cca2:"bo","calling-code":"591"},{name:"Bosnia and Herzegovina",cca2:"ba","calling-code":"387"},{name:"Botswana",cca2:"bw","calling-code":"267"},{name:"Brazil",cca2:"br","calling-code":"55"},{name:"Brunei",cca2:"bn","calling-code":"673"},{name:"Bulgaria",cca2:"bg","calling-code":"359"},{name:"Burkina Faso",cca2:"bf","calling-code":"226"},{name:"Burundi",cca2:"bi","calling-code":"257"},{name:"Cambodia",cca2:"kh","calling-code":"855"},{name:"Cameroon",cca2:"cm","calling-code":"237"},{name:"Canada",cca2:"ca","calling-code":"1"},{name:"Cape Verde",cca2:"cv","calling-code":"238"},{name:"Cayman Islands",cca2:"ky","calling-code":"1345"},{name:"Central African Republic",cca2:"cf","calling-code":"236"},{name:"Chad",cca2:"td","calling-code":"235"},{name:"Chile",cca2:"cl","calling-code":"56"},{name:"China",cca2:"cn","calling-code":"86"},{name:"Colombia",cca2:"co","calling-code":"57"},{name:"Comoros",cca2:"km","calling-code":"269"},{name:"Congo [DRC]",cca2:"cd","calling-code":"243"},{name:"Congo [Republic]",cca2:"cg","calling-code":"242"},{name:"Cook Islands",cca2:"ck","calling-code":"682"},{name:"Costa Rica",cca2:"cr","calling-code":"506"},{name:"Cote d'Ivoire",cca2:"ci","calling-code":"225"},{name:"Croatia",cca2:"hr","calling-code":"385"},{name:"Cuba",cca2:"cu","calling-code":"53"},{name:"Cyprus",cca2:"cy","calling-code":"357"},{name:"Czech Republic",cca2:"cz","calling-code":"420"},{name:"Denmark",cca2:"dk","calling-code":"45"},{name:"Djibouti",cca2:"dj","calling-code":"253"},{name:"Dominica",cca2:"dm","calling-code":"1767"},{name:"Dominican Republic",cca2:"do","calling-code":"1809"},{name:"Ecuador",cca2:"ec","calling-code":"593"},{name:"Egypt",cca2:"eg","calling-code":"20"},{name:"El Salvador",cca2:"sv","calling-code":"503"},{name:"Equatorial Guinea",cca2:"gq","calling-code":"240"},{name:"Eritrea",cca2:"er","calling-code":"291"},{name:"Estonia",cca2:"ee","calling-code":"372"},{name:"Ethiopia",cca2:"et","calling-code":"251"},{name:"Faroe Islands",cca2:"fo","calling-code":"298"},{name:"Fiji",cca2:"fj","calling-code":"679"},{name:"Finland",cca2:"fi","calling-code":"358"},{name:"France",cca2:"fr","calling-code":"33"},{name:"French Polynesia",cca2:"pf","calling-code":"689"},{name:"Gabon",cca2:"ga","calling-code":"241"},{name:"Gambia",cca2:"gm","calling-code":"220"},{name:"Georgia",cca2:"ge","calling-code":"995"},{name:"Germany",cca2:"de","calling-code":"49"},{name:"Ghana",cca2:"gh","calling-code":"233"},{name:"Gibraltar",cca2:"gi","calling-code":"350"},{name:"Greece",cca2:"gr","calling-code":"30"},{name:"Greenland",cca2:"gl","calling-code":"299"},{name:"Grenada",cca2:"gd","calling-code":"1473"},{name:"Guadeloupe",cca2:"gp","calling-code":"590"},{name:"Guam",cca2:"gu","calling-code":"1671"},{name:"Guatemala",cca2:"gt","calling-code":"502"},{name:"Guernsey",cca2:"gg","calling-code":"44"},{name:"Guinea",cca2:"gn","calling-code":"224"},{name:"Guinea-Bissau",cca2:"gw","calling-code":"245"},{name:"Guyana",cca2:"gy","calling-code":"592"},{name:"Haiti",cca2:"ht","calling-code":"509"},{name:"Honduras",cca2:"hn","calling-code":"504"},{name:"Hong Kong",cca2:"hk","calling-code":"852"},{name:"Hungary",cca2:"hu","calling-code":"36"},{name:"Iceland",cca2:"is","calling-code":"354"},{name:"India",cca2:"in","calling-code":"91"},{name:"Indonesia",cca2:"id","calling-code":"62"},{name:"Iran",cca2:"ir","calling-code":"98"},{name:"Iraq",cca2:"iq","calling-code":"964"},{name:"Ireland",cca2:"ie","calling-code":"353"},{name:"Isle of Man",cca2:"im","calling-code":"44"},{name:"Israel",cca2:"il","calling-code":"972"},{name:"Italy",cca2:"it","calling-code":"39"},{name:"Jamaica",cca2:"jm","calling-code":"1876"},{name:"Japan",cca2:"jp","calling-code":"81"},{name:"Jersey",cca2:"je","calling-code":"44"},{name:"Jordan",cca2:"jo","calling-code":"962"},{name:"Kazakhstan",cca2:"kz","calling-code":"7"},{name:"Kenya",cca2:"ke","calling-code":"254"},{name:"Kiribati",cca2:"ki","calling-code":"686"},{name:"Kuwait",cca2:"kw","calling-code":"965"},{name:"Kyrgyzstan",cca2:"kg","calling-code":"996"},{name:"Laos",cca2:"la","calling-code":"856"},{name:"Latvia",cca2:"lv","calling-code":"371"},{name:"Lebanon",cca2:"lb","calling-code":"961"},{name:"Lesotho",cca2:"ls","calling-code":"266"},{name:"Liberia",cca2:"lr","calling-code":"231"},{name:"Libya",cca2:"ly","calling-code":"218"},{name:"Liechtenstein",cca2:"li","calling-code":"423"},{name:"Lithuania",cca2:"lt","calling-code":"370"},{name:"Luxembourg",cca2:"lu","calling-code":"352"},{name:"Macau",cca2:"mo","calling-code":"853"},{name:"Macedonia [FYROM]",cca2:"mk","calling-code":"389"},{name:"Madagascar",cca2:"mg","calling-code":"261"},{name:"Malawi",cca2:"mw","calling-code":"265"},{name:"Malaysia",cca2:"my","calling-code":"60"},{name:"Maldives",cca2:"mv","calling-code":"960"},{name:"Mali",cca2:"ml","calling-code":"223"},{name:"Malta",cca2:"mt","calling-code":"356"},{name:"Marshall Islands",cca2:"mh","calling-code":"692"},{name:"Martinique",cca2:"mq","calling-code":"596"},{name:"Mauritania",cca2:"mr","calling-code":"222"},{name:"Mauritius",cca2:"mu","calling-code":"230"},{name:"Mexico",cca2:"mx","calling-code":"52"},{name:"Micronesia",cca2:"fm","calling-code":"691"},{name:"Moldova",cca2:"md","calling-code":"373"},{name:"Monaco",cca2:"mc","calling-code":"377"},{name:"Mongolia",cca2:"mn","calling-code":"976"},{name:"Montenegro",cca2:"me","calling-code":"382"},{name:"Montserrat",cca2:"ms","calling-code":"1664"},{name:"Morocco",cca2:"ma","calling-code":"212"},{name:"Mozambique",cca2:"mz","calling-code":"258"},{name:"Myanmar [Burma]",cca2:"mm","calling-code":"95"},{name:"Namibia",cca2:"na","calling-code":"264"},{name:"Nauru",cca2:"nr","calling-code":"674"},{name:"Nepal",cca2:"np","calling-code":"977"},{name:"Netherlands",cca2:"nl","calling-code":"31"},{name:"New Caledonia",cca2:"nc","calling-code":"687"},{name:"New Zealand",cca2:"nz","calling-code":"64"},{name:"Nicaragua",cca2:"ni","calling-code":"505"},{name:"Niger",cca2:"ne","calling-code":"227"},{name:"Nigeria",cca2:"ng","calling-code":"234"},{name:"North Korea",cca2:"kp","calling-code":"850"},{name:"Norway",cca2:"no","calling-code":"47"},{name:"Oman",cca2:"om","calling-code":"968"},{name:"Pakistan",cca2:"pk","calling-code":"92"},{name:"Palau",cca2:"pw","calling-code":"680"},{name:"Palestine",cca2:"ps","calling-code":"970"},{name:"Panama",cca2:"pa","calling-code":"507"},{name:"Papua New Guinea",cca2:"pg","calling-code":"675"},{name:"Paraguay",cca2:"py","calling-code":"595"},{name:"Peru",cca2:"pe","calling-code":"51"},{name:"Philippines",cca2:"ph","calling-code":"63"},{name:"Poland",cca2:"pl","calling-code":"48"},{name:"Portugal",cca2:"pt","calling-code":"351"},{name:"Puerto Rico",cca2:"pr","calling-code":"1787"},{name:"Qatar",cca2:"qa","calling-code":"974"},{name:"Reunion",cca2:"re","calling-code":"262"},{name:"Romania",cca2:"ro","calling-code":"40"},{name:"Russia",cca2:"ru","calling-code":"7"},{name:"Rwanda",cca2:"rw","calling-code":"250"},{name:"Saint Kitts and Nevis",cca2:"kn","calling-code":"1869"},{name:"Saint Lucia",cca2:"lc","calling-code":"1758"},{name:"Saint Vincent and the Grenadines",cca2:"vc","calling-code":"1784"},{name:"Samoa",cca2:"ws","calling-code":"685"},{name:"San Marino",cca2:"sm","calling-code":"378"},{name:"Sao Tome and Principe",cca2:"st","calling-code":"239"},{name:"Saudi Arabia",cca2:"sa","calling-code":"966"},{name:"Senegal",cca2:"sn","calling-code":"221"},{name:"Serbia",cca2:"rs","calling-code":"381"},{name:"Seychelles",cca2:"sc","calling-code":"248"},{name:"Sierra Leone",cca2:"sl","calling-code":"232"},{name:"Singapore",cca2:"sg","calling-code":"65"},{name:"Slovakia",cca2:"sk","calling-code":"421"},{name:"Slovenia",cca2:"si","calling-code":"386"},{name:"Solomon Islands",cca2:"sb","calling-code":"677"},{name:"Somalia",cca2:"so","calling-code":"252"},{name:"South Africa",cca2:"za","calling-code":"27"},{name:"South Korea",cca2:"kr","calling-code":"82"},{name:"Spain",cca2:"es","calling-code":"34"},{name:"Sri Lanka",cca2:"lk","calling-code":"94"},{name:"Sudan",cca2:"sd","calling-code":"249"},{name:"Suriname",cca2:"sr","calling-code":"597"},{name:"Swaziland",cca2:"sz","calling-code":"268"},{name:"Sweden",cca2:"se","calling-code":"46"},{name:"Switzerland",cca2:"ch","calling-code":"41"},{name:"Syria",cca2:"sy","calling-code":"963"},{name:"Taiwan",cca2:"tw","calling-code":"886"},{name:"Tajikistan",cca2:"tj","calling-code":"992"},{name:"Tanzania",cca2:"tz","calling-code":"255"},{name:"Thailand",cca2:"th","calling-code":"66"},{name:"Timor-Leste",cca2:"tl","calling-code":"670"},{name:"Togo",cca2:"tg","calling-code":"228"},{name:"Tonga",cca2:"to","calling-code":"676"},{name:"Trinidad and Tobago",cca2:"tt","calling-code":"1868"},{name:"Tunisia",cca2:"tn","calling-code":"216"},{name:"Turkey",cca2:"tr","calling-code":"90"},{name:"Turkmenistan",cca2:"tm","calling-code":"993"},{name:"Turks and Caicos Islands",cca2:"tc","calling-code":"1649"},{name:"Tuvalu",cca2:"tv","calling-code":"688"},{name:"Uganda",cca2:"ug","calling-code":"256"},{name:"Ukraine",cca2:"ua","calling-code":"380"},{name:"United Arab Emirates",cca2:"ae","calling-code":"971"},{name:"United Kingdom",cca2:"gb","calling-code":"44"},{name:"United States",cca2:"us","calling-code":"1"},{name:"Uruguay",cca2:"uy","calling-code":"598"},{name:"Uzbekistan",cca2:"uz","calling-code":"998"},{name:"Vanuatu",cca2:"vu","calling-code":"678"},{name:"Vatican City",cca2:"va","calling-code":"379"},{name:"Venezuela",cca2:"ve","calling-code":"58"},{name:"Vietnam",cca2:"vn","calling-code":"84"},{name:"British Virgin Islands",cca2:"vg","calling-code":"1284"},{name:"U.S. Virgin Islands",cca2:"vi","calling-code":"1340"},{name:"Western Sahara",cca2:"eh","calling-code":"212"},{name:"Yemen",cca2:"ye","calling-code":"967"},{name:"Zambia",cca2:"zm","calling-code":"260"},{name:"Zimbabwe",cca2:"zw","calling-code":"263"}],countryCodes:{1:["us","ca"],7:["ru","kz"],20:["eg"],27:["za"],30:["gr"],31:["nl"],32:["be"],33:["fr"],34:["es"],36:["hu"],39:["it"],40:["ro"],41:["ch"],43:["at"],44:["gb","gg","im","je"],45:["dk"],46:["se"],47:["no","sj"],48:["pl"],49:["de"],51:["pe"],52:["mx"],53:["cu"],54:["ar"],55:["br"],56:["cl"],57:["co"],58:["ve"],60:["my"],61:["au","cc","cx"],62:["id"],63:["ph"],64:["nz"],65:["sg"],66:["th"],81:["jp"],82:["kr"],84:["vn"],86:["cn"],90:["tr"],91:["in"],92:["pk"],93:["af"],94:["lk"],95:["mm"],98:["ir"],211:["ss"],212:["ma","eh"],213:["dz"],216:["tn"],218:["ly"],220:["gm"],221:["sn"],222:["mr"],223:["ml"],224:["gn"],225:["ci"],226:["bf"],227:["ne"],228:["tg"],229:["bj"],230:["mu"],231:["lr"],232:["sl"],233:["gh"],234:["ng"],235:["td"],236:["cf"],237:["cm"],238:["cv"],239:["st"],240:["gq"],241:["ga"],242:["cg"],243:["cd"],244:["ao"],245:["gw"],246:["io"],247:["ac"],248:["sc"],249:["sd"],250:["rw"],251:["et"],252:["so"],253:["dj"],254:["ke"],255:["tz"],256:["ug"],257:["bi"],258:["mz"],260:["zm"],261:["mg"],262:["re","yt"],263:["zw"],264:["na"],265:["mw"],266:["ls"],267:["bw"],268:["sz"],269:["km"],290:["sh"],291:["er"],297:["aw"],298:["fo"],299:["gl"],350:["gi"],351:["pt"],352:["lu"],353:["ie"],354:["is"],355:["al"],356:["mt"],357:["cy"],358:["fi","ax"],359:["bg"],370:["lt"],371:["lv"],372:["ee"],373:["md"],374:["am"],375:["by"],376:["ad"],377:["mc"],378:["sm"],379:["va"],380:["ua"],381:["rs"],382:["me"],385:["hr"],386:["si"],387:["ba"],389:["mk"],420:["cz"],421:["sk"],423:["li"],500:["fk"],501:["bz"],502:["gt"],503:["sv"],504:["hn"],505:["ni"],506:["cr"],507:["pa"],508:["pm"],509:["ht"],590:["gp","bl","mf"],591:["bo"],592:["gy"],593:["ec"],594:["gf"],595:["py"],596:["mq"],597:["sr"],598:["uy"],599:["cw","bq"],670:["tl"],672:["nf"],673:["bn"],674:["nr"],675:["pg"],676:["to"],677:["sb"],678:["vu"],679:["fj"],680:["pw"],681:["wf"],682:["ck"],683:["nu"],685:["ws"],686:["ki"],687:["nc"],688:["tv"],689:["pf"],690:["tk"],691:["fm"],692:["mh"],850:["kp"],852:["hk"],853:["mo"],855:["kh"],856:["la"],880:["bd"],886:["tw"],960:["mv"],961:["lb"],962:["jo"],963:["sy"],964:["iq"],965:["kw"],966:["sa"],967:["ye"],968:["om"],970:["ps"],971:["ae"],972:["il"],973:["bh"],974:["qa"],975:["bt"],976:["mn"],977:["np"],992:["tj"],993:["tm"],994:["az"],995:["ge"],996:["kg"],998:["uz"],1242:["bs"],1246:["bb"],1264:["ai"],1268:["ag"],1284:["vg"],1340:["vi"],1345:["ky"],1441:["bm"],1473:["gd"],1649:["tc"],1664:["ms"],1671:["gu"],1684:["as"],1758:["lc"],1767:["dm"],1784:["vc"],1787:["pr"],1809:["do"],1868:["tt"],1869:["kn"],1876:["jm"]}}})()
;
;
/*! jquery.animate-shadow-min.js */ 
;
;
/*
Shadow animation 1.11
http://www.bitstorm.org/jquery/shadow-animation/
Copyright 2011, 2013 Edwin Martin <edwin@bitstorm.org>
Contributors: Mark Carver, Xavier Lepretre and Jason Redding
Released under the MIT and GPL licenses.
*/
'use strict';jQuery(function(h){function r(b,m,d){var l=[];h.each(b,function(f){var g=[],e=b[f];f=m[f];e.b&&g.push("inset");"undefined"!==typeof f.left&&g.push(parseFloat(e.left+d*(f.left-e.left))+"px "+parseFloat(e.top+d*(f.top-e.top))+"px");"undefined"!==typeof f.blur&&g.push(parseFloat(e.blur+d*(f.blur-e.blur))+"px");"undefined"!==typeof f.a&&g.push(parseFloat(e.a+d*(f.a-e.a))+"px");if("undefined"!==typeof f.color){var p="rgb"+(h.support.rgba?"a":"")+"("+parseInt(e.color[0]+d*(f.color[0]-e.color[0]),
10)+","+parseInt(e.color[1]+d*(f.color[1]-e.color[1]),10)+","+parseInt(e.color[2]+d*(f.color[2]-e.color[2]),10);h.support.rgba&&(p+=","+parseFloat(e.color[3]+d*(f.color[3]-e.color[3])));g.push(p+")")}l.push(g.join(" "))});return l.join(", ")}function q(b){function m(){var a=/^inset\b/.exec(b.substring(c));return null!==a&&0<a.length?(k.b=!0,c+=a[0].length,!0):!1}function d(){var a=/^(-?[0-9\.]+)(?:px)?\s+(-?[0-9\.]+)(?:px)?(?:\s+(-?[0-9\.]+)(?:px)?)?(?:\s+(-?[0-9\.]+)(?:px)?)?/.exec(b.substring(c));
return null!==a&&0<a.length?(k.left=parseInt(a[1],10),k.top=parseInt(a[2],10),k.blur=a[3]?parseInt(a[3],10):0,k.a=a[4]?parseInt(a[4],10):0,c+=a[0].length,!0):!1}function l(){var a=/^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})/.exec(b.substring(c));if(null!==a&&0<a.length)return k.color=[parseInt(a[1],16),parseInt(a[2],16),parseInt(a[3],16),1],c+=a[0].length,!0;a=/^#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])/.exec(b.substring(c));if(null!==a&&0<a.length)return k.color=[17*parseInt(a[1],16),17*parseInt(a[2],
16),17*parseInt(a[3],16),1],c+=a[0].length,!0;a=/^rgb\(\s*([0-9\.]+)\s*,\s*([0-9\.]+)\s*,\s*([0-9\.]+)\s*\)/.exec(b.substring(c));if(null!==a&&0<a.length)return k.color=[parseInt(a[1],10),parseInt(a[2],10),parseInt(a[3],10),1],c+=a[0].length,!0;a=/^rgba\(\s*([0-9\.]+)\s*,\s*([0-9\.]+)\s*,\s*([0-9\.]+)\s*,\s*([0-9\.]+)\s*\)/.exec(b.substring(c));return null!==a&&0<a.length?(k.color=[parseInt(a[1],10),parseInt(a[2],10),parseInt(a[3],10),parseFloat(a[4])],c+=a[0].length,!0):!1}function f(){var a=/^\s+/.exec(b.substring(c));
null!==a&&0<a.length&&(c+=a[0].length)}function g(){var a=/^\s*,\s*/.exec(b.substring(c));return null!==a&&0<a.length?(c+=a[0].length,!0):!1}function e(a){if(h.isPlainObject(a)){var b,e,c=0,d=[];h.isArray(a.color)&&(e=a.color,c=e.length);for(b=0;4>b;b++)b<c?d.push(e[b]):3===b?d.push(1):d.push(0)}return h.extend({left:0,top:0,blur:0,spread:0},a)}for(var p=[],c=0,n=b.length,k=e();c<n;)if(m())f();else if(d())f();else if(l())f();else if(g())p.push(e(k)),k={};else break;p.push(e(k));return p}h.extend(!0,
h,{support:{rgba:function(){var b=h("script:first"),m=b.css("color"),d=!1;if(/^rgba/.test(m))d=!0;else try{d=m!==b.css("color","rgba(0, 0, 0, 0.5)").css("color"),b.css("color",m)}catch(l){}b.removeAttr("style");return d}()}});var s=h("html").prop("style"),n;h.each(["boxShadow","MozBoxShadow","WebkitBoxShadow"],function(b,h){if("undefined"!==typeof s[h])return n=h,!1});n&&(h.Tween.propHooks.boxShadow={get:function(b){return h(b.elem).css(n)},set:function(b){var m=b.elem.style,d=q(h(b.elem)[0].style[n]||
h(b.elem).css(n)),l=q(b.end),f=Math.max(d.length,l.length),g;for(g=0;g<f;g++)l[g]=h.extend({},d[g],l[g]),d[g]?"color"in d[g]&&!1!==h.isArray(d[g].color)||(d[g].color=l[g].color||[0,0,0,0]):d[g]=q("0 0 0 0 rgba(0,0,0,0)")[0];b.run=function(b){b=r(d,l,b);m[n]=b}}})});
;
;
/*! stacktrace-min-0.4.js */ 
;
;
function printStackTrace(a){var a=a||{guess:!0},b=a.e||null,a=!!a.guess,d=new printStackTrace.implementation,b=d.run(b);return a?d.guessAnonymousFunctions(b):b}printStackTrace.implementation=function(){};
printStackTrace.implementation.prototype={run:function(a,b){a=a||this.createException();b=b||this.mode(a);return"other"===b?this.other(arguments.callee):this[b](a)},createException:function(){try{this.undef()}catch(a){return a}},mode:function(a){return a.arguments&&a.stack?"chrome":a.stack&&a.sourceURL?"safari":"string"===typeof a.message&&"undefined"!==typeof window&&window.opera?!a.stacktrace||-1<a.message.indexOf("\n")&&a.message.split("\n").length>a.stacktrace.split("\n").length?"opera9":!a.stack?
"opera10a":0>a.stacktrace.indexOf("called from line")?"opera10b":"opera11":a.stack?"firefox":"other"},instrumentFunction:function(a,b,d){var a=a||window,c=a[b];a[b]=function(){d.call(this,printStackTrace().slice(4));return a[b]._instrumented.apply(this,arguments)};a[b]._instrumented=c},deinstrumentFunction:function(a,b){a[b].constructor===Function&&(a[b]._instrumented&&a[b]._instrumented.constructor===Function)&&(a[b]=a[b]._instrumented)},chrome:function(a){a=(a.stack+"\n").replace(/^\S[^\(]+?[\n$]/gm,
"").replace(/^\s+(at eval )?at\s+/gm,"").replace(/^([^\(]+?)([\n$])/gm,"{anonymous}()@$1$2").replace(/^Object.<anonymous>\s*\(([^\)]+)\)/gm,"{anonymous}()@$1").split("\n");a.pop();return a},safari:function(a){return a.stack.replace(/\[native code\]\n/m,"").replace(/^@/gm,"{anonymous}()@").split("\n")},firefox:function(a){return a.stack.replace(/(?:\n@:0)?\s+$/m,"").replace(/^[\(@]/gm,"{anonymous}()@").split("\n")},opera11:function(a){for(var b=/^.*line (\d+), column (\d+)(?: in (.+))? in (\S+):$/,
a=a.stacktrace.split("\n"),d=[],c=0,f=a.length;c<f;c+=2){var e=b.exec(a[c]);if(e){var g=e[4]+":"+e[1]+":"+e[2],e=e[3]||"global code",e=e.replace(/<anonymous function: (\S+)>/,"$1").replace(/<anonymous function>/,"{anonymous}");d.push(e+"@"+g+" -- "+a[c+1].replace(/^\s+/,""))}}return d},opera10b:function(a){for(var b=/^(.*)@(.+):(\d+)$/,a=a.stacktrace.split("\n"),d=[],c=0,f=a.length;c<f;c++){var e=b.exec(a[c]);e&&d.push((e[1]?e[1]+"()":"global code")+"@"+e[2]+":"+e[3])}return d},opera10a:function(a){for(var b=
/Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i,a=a.stacktrace.split("\n"),d=[],c=0,f=a.length;c<f;c+=2){var e=b.exec(a[c]);e&&d.push((e[3]||"{anonymous}")+"()@"+e[2]+":"+e[1]+" -- "+a[c+1].replace(/^\s+/,""))}return d},opera9:function(a){for(var b=/Line (\d+).*script (?:in )?(\S+)/i,a=a.message.split("\n"),d=[],c=2,f=a.length;c<f;c+=2){var e=b.exec(a[c]);e&&d.push("{anonymous}()@"+e[2]+":"+e[1]+" -- "+a[c+1].replace(/^\s+/,""))}return d},other:function(a){for(var b=/function\s*([\w\-$]+)?\s*\(/i,
d=[],c,f;a&&a.arguments&&10>d.length;)c=b.test(a.toString())?RegExp.$1||"{anonymous}":"{anonymous}",f=Array.prototype.slice.call(a.arguments||[]),d[d.length]=c+"("+this.stringifyArguments(f)+")",a=a.caller;return d},stringifyArguments:function(a){for(var b=[],d=Array.prototype.slice,c=0;c<a.length;++c){var f=a[c];void 0===f?b[c]="undefined":null===f?b[c]="null":f.constructor&&(f.constructor===Array?b[c]=3>f.length?"["+this.stringifyArguments(f)+"]":"["+this.stringifyArguments(d.call(f,0,1))+"..."+
this.stringifyArguments(d.call(f,-1))+"]":f.constructor===Object?b[c]="#object":f.constructor===Function?b[c]="#function":f.constructor===String?b[c]='"'+f+'"':f.constructor===Number&&(b[c]=f))}return b.join(",")},sourceCache:{},ajax:function(a){var b=this.createXMLHTTPObject();if(b)try{return b.open("GET",a,!1),b.send(null),b.responseText}catch(d){}return""},createXMLHTTPObject:function(){for(var a,b=[function(){return new XMLHttpRequest},function(){return new ActiveXObject("Msxml2.XMLHTTP")},function(){return new ActiveXObject("Msxml3.XMLHTTP")},
function(){return new ActiveXObject("Microsoft.XMLHTTP")}],d=0;d<b.length;d++)try{return a=b[d](),this.createXMLHTTPObject=b[d],a}catch(c){}},isSameDomain:function(a){return"undefined"!==typeof location&&-1!==a.indexOf(location.hostname)},getSource:function(a){a in this.sourceCache||(this.sourceCache[a]=this.ajax(a).split("\n"));return this.sourceCache[a]},guessAnonymousFunctions:function(a){for(var b=0;b<a.length;++b){var d=/^(.*?)(?::(\d+))(?::(\d+))?(?: -- .+)?$/,c=a[b],f=/\{anonymous\}\(.*\)@(.*)/.exec(c);
if(f){var e=d.exec(f[1]);e&&(d=e[1],f=e[2],e=e[3]||0,d&&(this.isSameDomain(d)&&f)&&(d=this.guessAnonymousFunction(d,f,e),a[b]=c.replace("{anonymous}",d)))}}return a},guessAnonymousFunction:function(a,b){var d;try{d=this.findFunctionName(this.getSource(a),b)}catch(c){d="getSource failed with url: "+a+", exception: "+c.toString()}return d},findFunctionName:function(a,b){for(var d=/function\s+([^(]*?)\s*\(([^)]*)\)/,c=/['"]?([0-9A-Za-z_]+)['"]?\s*[:=]\s*function\b/,f=/['"]?([0-9A-Za-z_]+)['"]?\s*[:=]\s*(?:eval|new Function)\b/,
e="",g,j=Math.min(b,20),h,i=0;i<j;++i)if(g=a[b-i-1],h=g.indexOf("//"),0<=h&&(g=g.substr(0,h)),g)if(e=g+e,(g=c.exec(e))&&g[1]||(g=d.exec(e))&&g[1]||(g=f.exec(e))&&g[1])return g[1];return"(?)"}};
;
;
/*! pusher.min.js */ 
;
;
/*!
* Pusher JavaScript Library v1.12.5
* http://pusherapp.com/
*
* Copyright 2011, Pusher
* Released under the MIT licence.
*/
(function(){if(Function.prototype.scopedTo===void 0)Function.prototype.scopedTo=function(a,b){var e=this;return function(){return e.apply(a,Array.prototype.slice.call(b||[]).concat(Array.prototype.slice.call(arguments)))}};var c=function(a,b){this.options=b||{};this.key=a;this.channels=new c.Channels;this.global_emitter=new c.EventsDispatcher;var e=this;this.checkAppKey();this.connection=new c.Connection(this.key,this.options);this.connection.bind("connected",function(){e.subscribeAll()}).bind("message",
function(b){var a=b.event.indexOf("pusher_internal:")===0;if(b.channel){var c;(c=e.channel(b.channel))&&c.emit(b.event,b.data)}a||e.global_emitter.emit(b.event,b.data)}).bind("disconnected",function(){e.channels.disconnect()}).bind("error",function(b){c.warn("Error",b)});c.instances.push(this);c.isReady&&e.connect()};c.instances=[];c.prototype={channel:function(a){return this.channels.find(a)},connect:function(){this.connection.connect()},disconnect:function(){this.connection.disconnect()},bind:function(a,
b){this.global_emitter.bind(a,b);return this},bind_all:function(a){this.global_emitter.bind_all(a);return this},subscribeAll:function(){for(channelName in this.channels.channels)this.channels.channels.hasOwnProperty(channelName)&&this.subscribe(channelName)},subscribe:function(a){var b=this,e=this.channels.add(a,this);this.connection.state==="connected"&&e.authorize(this.connection.socket_id,this.options,function(c,f){c?e.emit("pusher:subscription_error",f):b.send_event("pusher:subscribe",{channel:a,
auth:f.auth,channel_data:f.channel_data})});return e},unsubscribe:function(a){this.channels.remove(a);this.connection.state==="connected"&&this.send_event("pusher:unsubscribe",{channel:a})},send_event:function(a,b,e){return this.connection.send_event(a,b,e)},checkAppKey:function(){(this.key===null||this.key===void 0)&&c.warn("Warning","You must pass your app key when you instantiate Pusher.")}};c.Util={extend:function b(e,c){for(var f in c)e[f]=c[f]&&c[f].constructor&&c[f].constructor===Object?b(e[f]||
{},c[f]):c[f];return e},stringify:function(){for(var b=["Pusher"],e=0;e<arguments.length;e++)typeof arguments[e]==="string"?b.push(arguments[e]):window.JSON==void 0?b.push(arguments[e].toString()):b.push(JSON.stringify(arguments[e]));return b.join(" : ")},arrayIndexOf:function(b,e){var c=Array.prototype.indexOf;if(b==null)return-1;if(c&&b.indexOf===c)return b.indexOf(e);for(i=0,l=b.length;i<l;i++)if(b[i]===e)return i;return-1}};c.debug=function(){c.log&&c.log(c.Util.stringify.apply(this,arguments))};
c.warn=function(){window.console&&window.console.warn?window.console.warn(c.Util.stringify.apply(this,arguments)):c.log&&c.log(c.Util.stringify.apply(this,arguments))};c.VERSION="1.12.5";c.host="ws.pusherapp.com";c.ws_port=80;c.wss_port=443;c.sockjs_host="sockjs.pusher.com";c.sockjs_http_port=80;c.sockjs_https_port=443;c.sockjs_path="/pusher";c.channel_auth_endpoint="/pusher/auth";c.cdn_http="http://js.pusher.com/";c.cdn_https="https://d3dy5gmtp8yhk7.cloudfront.net/";c.dependency_suffix=".min";c.channel_auth_transport=
"ajax";c.activity_timeout=12E4;c.pong_timeout=3E4;c.isReady=!1;c.ready=function(){c.isReady=!0;for(var b=0,e=c.instances.length;b<e;b++)c.instances[b].connect()};this.Pusher=c}).call(this);
(function(){function c(){this._callbacks={}}function a(b){this.callbacks=new c;this.global_callbacks=[];this.failThrough=b}c.prototype.get=function(b){return this._callbacks[this._prefix(b)]};c.prototype.add=function(b,a){var c=this._prefix(b);this._callbacks[c]=this._callbacks[c]||[];this._callbacks[c].push(a)};c.prototype.remove=function(b,c){if(this.get(b)){var a=Pusher.Util.arrayIndexOf(this.get(b),c);this._callbacks[this._prefix(b)].splice(a,1)}};c.prototype._prefix=function(b){return"_"+b};
a.prototype.bind=function(b,c){this.callbacks.add(b,c);return this};a.prototype.unbind=function(b,c){this.callbacks.remove(b,c);return this};a.prototype.emit=function(b,c){for(var a=0;a<this.global_callbacks.length;a++)this.global_callbacks[a](b,c);var f=this.callbacks.get(b);if(f)for(a=0;a<f.length;a++)f[a](c);else this.failThrough&&this.failThrough(b,c);return this};a.prototype.bind_all=function(b){this.global_callbacks.push(b);return this};this.Pusher.EventsDispatcher=a}).call(this);
(function(){function c(b,c,a){if(c[b]!==void 0)c[b](a)}function a(c,a,f){b.EventsDispatcher.call(this);this.state=void 0;this.errors=[];this.stateActions=f;this.transitions=a;this.transition(c)}var b=this.Pusher;a.prototype.transition=function(a,g){var f=this.state,j=this.stateActions;if(f&&b.Util.arrayIndexOf(this.transitions[f],a)==-1)throw this.emit("invalid_transition_attempt",{oldState:f,newState:a}),Error("Invalid transition ["+f+" to "+a+"]");c(f+"Exit",j,g);c(f+"To"+(a.substr(0,1).toUpperCase()+
a.substr(1)),j,g);c(a+"Pre",j,g);this.state=a;this.emit("state_change",{oldState:f,newState:a});c(a+"Post",j,g)};a.prototype.is=function(b){return this.state===b};a.prototype.isNot=function(b){return this.state!==b};b.Util.extend(a.prototype,b.EventsDispatcher.prototype);this.Pusher.Machine=a}).call(this);
(function(){var c=function(){var a=this;Pusher.EventsDispatcher.call(this);window.addEventListener!==void 0&&(window.addEventListener("online",function(){a.emit("online",null)},!1),window.addEventListener("offline",function(){a.emit("offline",null)},!1))};c.prototype.isOnLine=function(){return window.navigator.onLine===void 0?!0:window.navigator.onLine};Pusher.Util.extend(c.prototype,Pusher.EventsDispatcher.prototype);this.Pusher.NetInfo=c}).call(this);
(function(){function c(a){a.connectionWait=0;a.openTimeout=b.TransportType==="native"?4E3:b.TransportType==="flash"?7E3:6E3;a.connectedTimeout=2E3;a.connectionSecure=a.compulsorySecure;a.failedAttempts=0}function a(a,s){function k(){d.openTimeout<j&&(d.openTimeout+=g);d.connectedTimeout<t&&(d.connectedTimeout+=f);if(d.compulsorySecure!==!0)d.connectionSecure=!d.connectionSecure;d.failedAttempts++}function u(a){a=a||document.location.protocol==="https:";return(a?"wss://":"ws://")+b.host+":"+(a?b.wss_port:
b.ws_port)}function v(a){a=a||document.location.protocol==="https:";return(a?"https://":"http://")+b.sockjs_host+":"+(a?b.sockjs_https_port:b.sockjs_http_port)+b.sockjs_path}function m(){d._machine.transition("impermanentlyClosing")}function p(){d._activityTimer&&clearTimeout(d._activityTimer);if(d.ping)d._activityTimer=setTimeout(function(){d.send_event("pusher:ping",{});d._activityTimer=setTimeout(function(){d.socket.close()},d.options.pong_timeout||b.pong_timeout)},d.options.activity_timeout||
b.activity_timeout)}function q(){var b=d.connectionWait;if(b===0&&d.connectedAt){var a=(new Date).getTime()-d.connectedAt;a<1E3&&(b=1E3-a)}return b}function w(b){b=r(b);if(b!==void 0)if(b.event==="pusher:connection_established")d._machine.transition("connected",b.data.socket_id);else if(b.event==="pusher:error"){var a=b.data.code;d.emit("error",{type:"PusherError",data:{code:a,message:b.data.message}});a===4E3?(d.compulsorySecure=!0,d.connectionSecure=!0,d.options.encrypted=!0,m()):a<4100?d._machine.transition("permanentlyClosing"):
a<4200?(d.connectionWait=1E3,d._machine.transition("waiting")):a<4300?m():d._machine.transition("permanentlyClosing")}}function x(a){p();a=r(a);if(a!==void 0){b.debug("Event recd",a);switch(a.event){case "pusher:error":d.emit("error",{type:"PusherError",data:a.data});break;case "pusher:ping":d.send_event("pusher:pong",{})}d.emit("message",a)}}function r(b){try{var a=JSON.parse(b.data);if(typeof a.data==="string")try{a.data=JSON.parse(a.data)}catch(c){if(!(c instanceof SyntaxError))throw c;}return a}catch(e){d.emit("error",
{type:"MessageParseError",error:e,data:b.data})}}function n(){d._machine.transition("waiting")}function o(b){d.emit("error",{type:"WebSocketError",error:b})}function h(a,c){var e=d.state;d.state=a;e!==a&&(b.debug("State changed",e+" -> "+a),d.emit("state_change",{previous:e,current:a}),d.emit(a,c))}var d=this;b.EventsDispatcher.call(this);this.ping=!0;this.options=b.Util.extend({encrypted:!1},s);this.netInfo=new b.NetInfo;this.netInfo.bind("online",function(){d._machine.is("waiting")&&(d._machine.transition("connecting"),
h("connecting"))});this.netInfo.bind("offline",function(){if(d._machine.is("connected"))d.socket.onclose=void 0,d.socket.onmessage=void 0,d.socket.onerror=void 0,d.socket.onopen=void 0,d.socket.close(),d.socket=void 0,d._machine.transition("waiting")});this._machine=new b.Machine("initialized",e,{initializedPre:function(){d.compulsorySecure=d.options.encrypted;d.key=a;d.socket=null;d.socket_id=null;d.state="initialized"},waitingPre:function(){d.netInfo.isOnLine()?(d.failedAttempts<2?h("connecting"):
(h("unavailable"),d.connectionWait=1E4),d.connectionWait>0&&d.emit("connecting_in",q()),d._waitingTimer=setTimeout(function(){d._machine.transition("connecting")},q())):h("unavailable")},waitingExit:function(){clearTimeout(d._waitingTimer)},connectingPre:function(){if(d.netInfo.isOnLine()===!1)d._machine.transition("waiting"),h("unavailable");else{var a="/app/"+d.key+"?protocol=5&client=js&version="+b.VERSION+"&flash="+(b.TransportType==="flash"?"true":"false");if(b.TransportType==="sockjs"){b.debug("Connecting to sockjs",
b.sockjs);var c=v(d.connectionSecure);d.ping=!1;d.socket=new SockJS(c);d.socket.onopen=function(){d.socket.send(JSON.stringify({path:a}));d._machine.transition("open")}}else c=u(d.connectionSecure)+a,b.debug("Connecting",c),d.socket=new b.Transport(c),d.socket.onopen=function(){d._machine.transition("open")};d.socket.onclose=n;d.socket.onerror=o;d._connectingTimer=setTimeout(m,d.openTimeout)}},connectingExit:function(){clearTimeout(d._connectingTimer);d.socket.onopen=void 0},connectingToWaiting:function(){k()},
connectingToImpermanentlyClosing:function(){k()},openPre:function(){d.socket.onmessage=w;d.socket.onerror=o;d.socket.onclose=n;d._openTimer=setTimeout(m,d.connectedTimeout)},openExit:function(){clearTimeout(d._openTimer);d.socket.onmessage=void 0},openToWaiting:function(){k()},openToImpermanentlyClosing:function(){k()},connectedPre:function(b){d.socket_id=b;d.socket.onmessage=x;d.socket.onerror=o;d.socket.onclose=n;c(d);d.connectedAt=(new Date).getTime();p()},connectedPost:function(){h("connected")},
connectedExit:function(){d._activityTimer&&clearTimeout(d._activityTimer);h("disconnected")},impermanentlyClosingPost:function(){if(d.socket)d.socket.onclose=n,d.socket.close()},permanentlyClosingPost:function(){d.socket?(d.socket.onclose=function(){c(d);d._machine.transition("permanentlyClosed")},d.socket.close()):(c(d),d._machine.transition("permanentlyClosed"))},failedPre:function(){h("failed");b.debug("WebSockets are not available in this browser.")},permanentlyClosedPost:function(){h("disconnected")}})}
var b=this.Pusher,e={initialized:["waiting","failed"],waiting:["connecting","permanentlyClosed"],connecting:["open","permanentlyClosing","impermanentlyClosing","waiting"],open:["connected","permanentlyClosing","impermanentlyClosing","waiting"],connected:["permanentlyClosing","waiting"],impermanentlyClosing:["waiting","permanentlyClosing"],permanentlyClosing:["permanentlyClosed"],permanentlyClosed:["waiting","failed"],failed:["permanentlyClosed"]},g=2E3,f=2E3,j=1E4,t=1E4;a.prototype.connect=function(){!this._machine.is("failed")&&
!b.Transport?this._machine.transition("failed"):this._machine.is("initialized")?(c(this),this._machine.transition("waiting")):this._machine.is("waiting")&&this.netInfo.isOnLine()===!0?this._machine.transition("connecting"):this._machine.is("permanentlyClosed")&&(c(this),this._machine.transition("waiting"))};a.prototype.send=function(b){if(this._machine.is("connected")){var a=this;setTimeout(function(){a.socket.send(b)},0);return!0}else return!1};a.prototype.send_event=function(a,c,e){a={event:a,data:c};
e&&(a.channel=e);b.debug("Event sent",a);return this.send(JSON.stringify(a))};a.prototype.disconnect=function(){this._machine.is("permanentlyClosed")||(this._machine.is("waiting")||this._machine.is("failed")?this._machine.transition("permanentlyClosed"):this._machine.transition("permanentlyClosing"))};b.Util.extend(a.prototype,b.EventsDispatcher.prototype);this.Pusher.Connection=a}).call(this);
(function(){Pusher.Channels=function(){this.channels={}};Pusher.Channels.prototype={add:function(a,b){var c=this.find(a);c||(c=Pusher.Channel.factory(a,b),this.channels[a]=c);return c},find:function(a){return this.channels[a]},remove:function(a){delete this.channels[a]},disconnect:function(){for(var a in this.channels)this.channels[a].disconnect()}};Pusher.Channel=function(a,b){var c=this;Pusher.EventsDispatcher.call(this,function(b){Pusher.debug("No callbacks on "+a+" for "+b)});this.pusher=b;this.name=
a;this.subscribed=!1;this.bind("pusher_internal:subscription_succeeded",function(a){c.onSubscriptionSucceeded(a)})};Pusher.Channel.prototype={init:function(){},disconnect:function(){this.subscribed=!1;this.emit("pusher_internal:disconnected")},onSubscriptionSucceeded:function(){this.subscribed=!0;this.emit("pusher:subscription_succeeded")},authorize:function(a,b,c){return c(!1,{})},trigger:function(a,b){return this.pusher.send_event(a,b,this.name)}};Pusher.Util.extend(Pusher.Channel.prototype,Pusher.EventsDispatcher.prototype);
Pusher.Channel.PrivateChannel={authorize:function(a,b,c){var g=this;return(new Pusher.Channel.Authorizer(this,Pusher.channel_auth_transport,b)).authorize(a,function(a,b){a||g.emit("pusher_internal:authorized",b);c(a,b)})}};Pusher.Channel.PresenceChannel={init:function(){this.members=new c(this)},onSubscriptionSucceeded:function(){this.subscribed=!0}};var c=function(a){var b=this,c=function(){this._members_map={};this.count=0;this.me=null};c.call(this);a.bind("pusher_internal:authorized",function(c){var e=
JSON.parse(c.channel_data);a.bind("pusher_internal:subscription_succeeded",function(c){b._members_map=c.presence.hash;b.count=c.presence.count;b.me=b.get(e.user_id);a.emit("pusher:subscription_succeeded",b)})});a.bind("pusher_internal:member_added",function(c){b.get(c.user_id)===null&&b.count++;b._members_map[c.user_id]=c.user_info;a.emit("pusher:member_added",b.get(c.user_id))});a.bind("pusher_internal:member_removed",function(c){var e=b.get(c.user_id);e&&(delete b._members_map[c.user_id],b.count--,
a.emit("pusher:member_removed",e))});a.bind("pusher_internal:disconnected",function(){c.call(b)})};c.prototype={each:function(a){for(var b in this._members_map)a(this.get(b))},get:function(a){return this._members_map.hasOwnProperty(a)?{id:a,info:this._members_map[a]}:null}};Pusher.Channel.factory=function(a,b){var c=new Pusher.Channel(a,b);a.indexOf("private-")===0?Pusher.Util.extend(c,Pusher.Channel.PrivateChannel):a.indexOf("presence-")===0&&(Pusher.Util.extend(c,Pusher.Channel.PrivateChannel),
Pusher.Util.extend(c,Pusher.Channel.PresenceChannel));c.init();return c}}).call(this);
(function(){Pusher.Channel.Authorizer=function(c,a,b){this.channel=c;this.type=a;this.authOptions=(b||{}).auth||{}};Pusher.Channel.Authorizer.prototype={composeQuery:function(c){var c="&socket_id="+encodeURIComponent(c)+"&channel_name="+encodeURIComponent(this.channel.name),a;for(a in this.authOptions.params)c+="&"+encodeURIComponent(a)+"="+encodeURIComponent(this.authOptions.params[a]);return c},authorize:function(c,a){return Pusher.authorizers[this.type].call(this,c,a)}};Pusher.auth_callbacks={};
Pusher.authorizers={ajax:function(c,a){var b;b=Pusher.XHR?new Pusher.XHR:window.XMLHttpRequest?new window.XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");b.open("POST",Pusher.channel_auth_endpoint,!0);b.setRequestHeader("Content-Type","application/x-www-form-urlencoded");for(var e in this.authOptions.headers)b.setRequestHeader(e,this.authOptions.headers[e]);b.onreadystatechange=function(){if(b.readyState==4)if(b.status==200){var c,e=!1;try{c=JSON.parse(b.responseText),e=!0}catch(j){a(!0,"JSON returned from webapp was invalid, yet status code was 200. Data was: "+
b.responseText)}e&&a(!1,c)}else Pusher.warn("Couldn't get auth info from your webapp",b.status),a(!0,b.status)};b.send(this.composeQuery(c));return b},jsonp:function(c,a){this.authOptions.headers!==void 0&&Pusher.warn("Warn","To send headers with the auth request, you must use AJAX, rather than JSONP.");var b=document.createElement("script");Pusher.auth_callbacks[this.channel.name]=function(b){a(!1,b)};b.src=Pusher.channel_auth_endpoint+"?callback="+encodeURIComponent("Pusher.auth_callbacks['"+this.channel.name+
"']")+this.composeQuery(c);var e=document.getElementsByTagName("head")[0]||document.documentElement;e.insertBefore(b,e.firstChild)}}}).call(this);
var _require=function(){function c(a,c){document.addEventListener?a.addEventListener("load",c,!1):a.attachEvent("onreadystatechange",function(){(a.readyState=="loaded"||a.readyState=="complete")&&c()})}function a(a,e){var g=document.getElementsByTagName("head")[0],f=document.createElement("script");f.setAttribute("src",a);f.setAttribute("type","text/javascript");f.setAttribute("async",!0);c(f,function(){e()});g.appendChild(f)}return function(b,c){for(var g=0,f=0;f<b.length;f++)a(b[f],function(){b.length==
++g&&setTimeout(c,0)})}}();
(function(){!window.WebSocket&&window.MozWebSocket&&(window.WebSocket=window.MozWebSocket);if(window.WebSocket)Pusher.Transport=window.WebSocket,Pusher.TransportType="native";var c=(document.location.protocol=="http:"?Pusher.cdn_http:Pusher.cdn_https)+Pusher.VERSION,a=[];window.JSON||a.push(c+"/json2"+Pusher.dependency_suffix+".js");if(!window.WebSocket)window.WEB_SOCKET_DISABLE_AUTO_INITIALIZATION=!0,window.WEB_SOCKET_SUPPRESS_CROSS_DOMAIN_SWF_ERROR=!0,a.push(c+"/flashfallback"+Pusher.dependency_suffix+
".js");var b=function(){return window.WebSocket?function(){Pusher.ready()}:function(){window.WebSocket?(Pusher.Transport=window.WebSocket,Pusher.TransportType="flash",window.WEB_SOCKET_SWF_LOCATION=c+"/WebSocketMain.swf",WebSocket.__addTask(function(){Pusher.ready()}),WebSocket.__initialize()):(sockjsPath=c+"/sockjs"+Pusher.dependency_suffix+".js",_require([sockjsPath],function(){Pusher.Transport=SockJS;Pusher.TransportType="sockjs";Pusher.ready()}))}}(),e=function(a){var b=function(){document.body?
a():setTimeout(b,0)};b()},g=function(){e(b)};a.length>0?_require(a,g):g()})();
;
;
/*! ZeroClipboard.min.js */ 
;
;
/*!
* ZeroClipboard
* The ZeroClipboard library provides an easy way to copy text to the clipboard using an invisible Adobe Flash movie and a JavaScript interface.
* Copyright (c) 2013 Jon Rohan, James M. Greene
* Licensed MIT
* http://zeroclipboard.org/
* v1.2.0-beta.4
*/
!function(){"use strict";var a,b=function(){var a=/\-([a-z])/g,b=function(a,b){return b.toUpperCase()};return function(c){return c.replace(a,b)}}(),c=function(a,c){var d,e,f,g,h,i;if(window.getComputedStyle?d=window.getComputedStyle(a,null).getPropertyValue(c):(e=b(c),d=a.currentStyle?a.currentStyle[e]:a.style[e]),"cursor"===c&&(!d||"auto"===d))for(f=a.tagName.toLowerCase(),g=["a"],h=0,i=g.length;i>h;h++)if(f===g[h])return"pointer";return d},d=function(a){if(p.prototype._singleton){a||(a=window.event);var b;this!==window?b=this:a.target?b=a.target:a.srcElement&&(b=a.srcElement),p.prototype._singleton.setCurrent(b)}},e=function(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent&&a.attachEvent("on"+b,c)},f=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},g=function(a,b){if(a.addClass)return a.addClass(b),a;if(b&&"string"==typeof b){var c=(b||"").split(/\s+/);if(1===a.nodeType)if(a.className){for(var d=" "+a.className+" ",e=a.className,f=0,g=c.length;g>f;f++)d.indexOf(" "+c[f]+" ")<0&&(e+=" "+c[f]);a.className=e.replace(/^\s+|\s+$/g,"")}else a.className=b}return a},h=function(a,b){if(a.removeClass)return a.removeClass(b),a;if(b&&"string"==typeof b||void 0===b){var c=(b||"").split(/\s+/);if(1===a.nodeType&&a.className)if(b){for(var d=(" "+a.className+" ").replace(/[\n\t]/g," "),e=0,f=c.length;f>e;e++)d=d.replace(" "+c[e]+" "," ");a.className=d.replace(/^\s+|\s+$/g,"")}else a.className=""}return a},i=function(){var a,b,c,d=1;return"function"==typeof document.body.getBoundingClientRect&&(a=document.body.getBoundingClientRect(),b=a.right-a.left,c=document.body.offsetWidth,d=Math.round(100*(b/c))/100),d},j=function(a){var b={left:0,top:0,width:0,height:0,zIndex:999999999},d=c(a,"z-index");if(d&&"auto"!==d&&(b.zIndex=parseInt(d,10)),a.getBoundingClientRect){var e,f,g,h=a.getBoundingClientRect();"pageXOffset"in window&&"pageYOffset"in window?(e=window.pageXOffset,f=window.pageYOffset):(g=i(),e=Math.round(document.documentElement.scrollLeft/g),f=Math.round(document.documentElement.scrollTop/g));var j=document.documentElement.clientLeft||0,k=document.documentElement.clientTop||0;b.left=h.left+e-j,b.top=h.top+f-k,b.width="width"in h?h.width:h.right-h.left,b.height="height"in h?h.height:h.bottom-h.top}return b},k=function(a,b){var c=!(b&&b.useNoCache===!1);return c?(-1===a.indexOf("?")?"?":"&")+"nocache="+(new Date).getTime():""},l=function(a){var b=[],c=[];return a.trustedOrigins&&("string"==typeof a.trustedOrigins?c=c.push(a.trustedOrigins):"object"==typeof a.trustedOrigins&&"length"in a.trustedOrigins&&(c=c.concat(a.trustedOrigins))),a.trustedDomains&&("string"==typeof a.trustedDomains?c=c.push(a.trustedDomains):"object"==typeof a.trustedDomains&&"length"in a.trustedDomains&&(c=c.concat(a.trustedDomains))),c.length&&b.push("trustedOrigins="+encodeURIComponent(c.join(","))),"string"==typeof a.amdModuleId&&a.amdModuleId&&b.push("amdModuleId="+encodeURIComponent(a.amdModuleId)),"string"==typeof a.cjsModuleId&&a.cjsModuleId&&b.push("cjsModuleId="+encodeURIComponent(a.cjsModuleId)),b.join("&")},m=function(a,b){if(b.indexOf)return b.indexOf(a);for(var c=0,d=b.length;d>c;c++)if(b[c]===a)return c;return-1},n=function(a){if("string"==typeof a)throw new TypeError("ZeroClipboard doesn't accept query strings.");return a.length?a:[a]},o=function(a,b,c,d,e){e?window.setTimeout(function(){a.call(b,c,d)},0):a.call(b,c,d)},p=function(a,b){if(a&&(p.prototype._singleton||this).glue(a),p.prototype._singleton)return p.prototype._singleton;p.prototype._singleton=this,this.options={};for(var c in s)this.options[c]=s[c];for(var d in b)this.options[d]=b[d];this.handlers={},p.detectFlashSupport()&&v()},q=[];p.prototype.setCurrent=function(b){a=b,this.reposition();var d=b.getAttribute("title");d&&this.setTitle(d);var e=this.options.forceHandCursor===!0||"pointer"===c(b,"cursor");r.call(this,e)},p.prototype.setText=function(a){a&&""!==a&&(this.options.text=a,this.ready()&&this.flashBridge.setText(a))},p.prototype.setTitle=function(a){a&&""!==a&&this.htmlBridge.setAttribute("title",a)},p.prototype.setSize=function(a,b){this.ready()&&this.flashBridge.setSize(a,b)},p.prototype.setHandCursor=function(a){a="boolean"==typeof a?a:!!a,r.call(this,a),this.options.forceHandCursor=a};var r=function(a){this.ready()&&this.flashBridge.setHandCursor(a)};p.version="1.2.0-beta.4";var s={moviePath:"ZeroClipboard.swf",trustedOrigins:null,text:null,hoverClass:"zeroclipboard-is-hover",activeClass:"zeroclipboard-is-active",allowScriptAccess:"sameDomain",useNoCache:!0,forceHandCursor:!1};p.setDefaults=function(a){for(var b in a)s[b]=a[b]},p.destroy=function(){p.prototype._singleton.unglue(q);var a=p.prototype._singleton.htmlBridge;a.parentNode.removeChild(a),delete p.prototype._singleton},p.detectFlashSupport=function(){var a=!1;if("function"==typeof ActiveXObject)try{new ActiveXObject("ShockwaveFlash.ShockwaveFlash")&&(a=!0)}catch(b){}return!a&&navigator.mimeTypes["application/x-shockwave-flash"]&&(a=!0),a};var t=null,u=null,v=function(){var a=p.prototype._singleton,b=document.getElementById("global-zeroclipboard-html-bridge");if(!b){var c={};for(var d in a.options)c[d]=a.options[d];c.amdModuleId=t,c.cjsModuleId=u;var e=l(c),f='      <object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="global-zeroclipboard-flash-bridge" width="100%" height="100%">         <param name="movie" value="'+a.options.moviePath+k(a.options.moviePath,a.options)+'"/>         <param name="allowScriptAccess" value="'+a.options.allowScriptAccess+'"/>         <param name="scale" value="exactfit"/>         <param name="loop" value="false"/>         <param name="menu" value="false"/>         <param name="quality" value="best" />         <param name="bgcolor" value="#ffffff"/>         <param name="wmode" value="transparent"/>         <param name="flashvars" value="'+e+'"/>         <embed src="'+a.options.moviePath+k(a.options.moviePath,a.options)+'"           loop="false" menu="false"           quality="best" bgcolor="#ffffff"           width="100%" height="100%"           name="global-zeroclipboard-flash-bridge"           allowScriptAccess="always"           allowFullScreen="false"           type="application/x-shockwave-flash"           wmode="transparent"           pluginspage="http://www.macromedia.com/go/getflashplayer"           flashvars="'+e+'"           scale="exactfit">         </embed>       </object>';b=document.createElement("div"),b.id="global-zeroclipboard-html-bridge",b.setAttribute("class","global-zeroclipboard-container"),b.setAttribute("data-clipboard-ready",!1),b.style.position="absolute",b.style.left="-9999px",b.style.top="-9999px",b.style.width="15px",b.style.height="15px",b.style.zIndex="9999",b.innerHTML=f,document.body.appendChild(b)}a.htmlBridge=b,a.flashBridge=document["global-zeroclipboard-flash-bridge"]||b.children[0].lastElementChild};p.prototype.resetBridge=function(){this.htmlBridge.style.left="-9999px",this.htmlBridge.style.top="-9999px",this.htmlBridge.removeAttribute("title"),this.htmlBridge.removeAttribute("data-clipboard-text"),h(a,this.options.activeClass),a=null,this.options.text=null},p.prototype.ready=function(){var a=this.htmlBridge.getAttribute("data-clipboard-ready");return"true"===a||a===!0},p.prototype.reposition=function(){if(!a)return!1;var b=j(a);this.htmlBridge.style.top=b.top+"px",this.htmlBridge.style.left=b.left+"px",this.htmlBridge.style.width=b.width+"px",this.htmlBridge.style.height=b.height+"px",this.htmlBridge.style.zIndex=b.zIndex+1,this.setSize(b.width,b.height)},p.dispatch=function(a,b){p.prototype._singleton.receiveEvent(a,b)},p.prototype.on=function(a,b){for(var c=a.toString().split(/\s/g),d=0;d<c.length;d++)a=c[d].toLowerCase().replace(/^on/,""),this.handlers[a]||(this.handlers[a]=b);this.handlers.noflash&&!p.detectFlashSupport()&&this.receiveEvent("onNoFlash",null)},p.prototype.addEventListener=p.prototype.on,p.prototype.off=function(a,b){for(var c=a.toString().split(/\s/g),d=0;d<c.length;d++){a=c[d].toLowerCase().replace(/^on/,"");for(var e in this.handlers)e===a&&this.handlers[e]===b&&delete this.handlers[e]}},p.prototype.removeEventListener=p.prototype.off,p.prototype.receiveEvent=function(b,c){b=b.toString().toLowerCase().replace(/^on/,"");var d=a,e=!0;switch(b){case"load":if(c&&parseFloat(c.flashVersion.replace(",",".").replace(/[^0-9\.]/gi,""))<10)return this.receiveEvent("onWrongFlash",{flashVersion:c.flashVersion}),void 0;this.htmlBridge.setAttribute("data-clipboard-ready",!0);break;case"mouseover":g(d,this.options.hoverClass);break;case"mouseout":h(d,this.options.hoverClass),this.resetBridge();break;case"mousedown":g(d,this.options.activeClass);break;case"mouseup":h(d,this.options.activeClass);break;case"datarequested":var f=d.getAttribute("data-clipboard-target"),i=f?document.getElementById(f):null;if(i){var j=i.value||i.textContent||i.innerText;j&&this.setText(j)}else{var k=d.getAttribute("data-clipboard-text");k&&this.setText(k)}e=!1;break;case"complete":this.options.text=null}if(this.handlers[b]){var l=this.handlers[b];"string"==typeof l&&"function"==typeof window[l]&&(l=window[l]),"function"==typeof l&&o(l,d,this,c,e)}},p.prototype.glue=function(a){a=n(a);for(var b=0;b<a.length;b++)-1==m(a[b],q)&&(q.push(a[b]),e(a[b],"mouseover",d))},p.prototype.unglue=function(a){a=n(a);for(var b=0;b<a.length;b++){f(a[b],"mouseover",d);var c=m(a[b],q);-1!=c&&q.splice(c,1)}},"function"==typeof define&&define.amd?define(["require","exports","module"],function(a,b,c){return t=c&&c.id||null,p}):"undefined"!=typeof module&&module?(u=module.id||null,module.exports=p):window.ZeroClipboard=p}();
;
;
/*! jquery-ui.positioning-patch.js */ 
;
;
(function($){
var _oldflip = $.ui.position.flip;
$.ui.position.flip = {
left: function( position, data ) {
data.elem.removeClass("ui-flipped-left").removeClass("ui-flipped-right").removeClass("ui-flipped-top").removeClass("ui-flipped-bottom");
var within = data.within,
withinOffset = within.offset.left + within.scrollLeft,
outerWidth = within.width,
offsetLeft = within.isWindow ? within.scrollLeft : within.offset.left,
collisionPosLeft = position.left - data.collisionPosition.marginLeft,
overLeft = collisionPosLeft - offsetLeft,
overRight = collisionPosLeft + data.collisionWidth - outerWidth - offsetLeft,
myOffset = data.my[ 0 ] === "left" ?
-data.elemWidth :
data.my[ 0 ] === "right" ?
data.elemWidth :
0,
atOffset = data.at[ 0 ] === "left" ?
data.targetWidth :
data.at[ 0 ] === "right" ?
-data.targetWidth :
0,
offset = -2 * data.offset[ 0 ],
newOverRight,
newOverLeft;
if ( overLeft < 0 ) {
newOverRight = position.left + myOffset + atOffset + offset + data.collisionWidth - outerWidth - withinOffset;
if ( newOverRight < 0 || newOverRight < Math.abs( overLeft ) ) {
data.elem.removeClass("ui-flipped-left").addClass( "ui-flipped-right");
position.left += myOffset + atOffset + offset;
}
}
else if ( overRight > 0 ) {
newOverLeft = position.left - data.collisionPosition.marginLeft + myOffset + atOffset + offset - offsetLeft;
if ( newOverLeft > 0 || Math.abs( newOverLeft ) < overRight ) {
data.elem.removeClass("ui-flipped-right").addClass( "ui-flipped-left");
position.left += myOffset + atOffset + offset;
}
}
},
top: function( position, data ) {
data.elem.removeClass("ui-flipped-left").removeClass("ui-flipped-right").removeClass("ui-flipped-top").removeClass("ui-flipped-bottom");
var within = data.within,
withinOffset = within.offset.top + within.scrollTop,
outerHeight = within.height,
offsetTop = within.isWindow ? within.scrollTop : within.offset.top,
collisionPosTop = position.top - data.collisionPosition.marginTop,
overTop = collisionPosTop - offsetTop,
overBottom = collisionPosTop + data.collisionHeight - outerHeight - offsetTop,
top = data.my[ 1 ] === "top",
myOffset = top ?
-data.elemHeight :
data.my[ 1 ] === "bottom" ?
data.elemHeight :
0,
atOffset = data.at[ 1 ] === "top" ?
data.targetHeight :
data.at[ 1 ] === "bottom" ?
-data.targetHeight :
0,
offset = -2 * data.offset[ 1 ],
newOverTop,
newOverBottom;
if ( overTop < 0 ) {
newOverBottom = position.top + myOffset + atOffset + offset + data.collisionHeight - outerHeight - withinOffset;
if ( ( position.top + myOffset + atOffset + offset) > overTop && ( newOverBottom < 0 || newOverBottom < Math.abs( overTop ) ) ) {
data.elem.addClass( "ui-flipped-bottom");
position.top += myOffset + atOffset + offset;
}
}
else if ( overBottom > 0 ) {
newOverTop = position.top -  data.collisionPosition.marginTop + myOffset + atOffset + offset - offsetTop;
if ( ( position.top + myOffset + atOffset + offset) > overBottom && ( newOverTop > 0 || Math.abs( newOverTop ) < overBottom ) ) {
data.elem.addClass( "ui-flipped-top");
position.top += myOffset + atOffset + offset;
}
}
}
};
})(jQuery);
;
;
/*! nprogress.js */ 
;
;
/*! NProgress (c) 2013, Rico Sta. Cruz
*  http://ricostacruz.com/nprogress */
;(function(factory) {
if (typeof module === 'function') {
module.exports = factory(this.jQuery || require('jquery'));
} else {
this.NProgress = factory(this.jQuery);
}
})(function($) {
var NProgress = {};
NProgress.version = '0.1.2';
var Settings = NProgress.settings = {
minimum: 0.08,
easing: 'ease',
positionUsing: '',
speed: 200,
trickle: true,
trickleRate: 0.02,
trickleSpeed: 800,
showSpinner: true,
template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
};
/**
* Updates configuration.
*
*     NProgress.configure({
*       minimum: 0.1
*     });
*/
NProgress.configure = function(options) {
$.extend(Settings, options);
return this;
};
/**
* Last number.
*/
NProgress.status = null;
/**
* Sets the progress bar status, where `n` is a number from `0.0` to `1.0`.
*
*     NProgress.set(0.4);
*     NProgress.set(1.0);
*/
NProgress.set = function(n) {
var started = NProgress.isStarted();
n = clamp(n, Settings.minimum, 1);
NProgress.status = (n === 1 ? null : n);
var $progress = NProgress.render(!started),
$bar      = $progress.find('[role="bar"]'),
speed     = Settings.speed,
ease      = Settings.easing;
$progress[0].offsetWidth; /* Repaint */
$progress.queue(function(next) {
if (Settings.positionUsing === '') Settings.positionUsing = NProgress.getPositioningCSS();
$bar.css(barPositionCSS(n, speed, ease));
if (n === 1) {
$progress.css({ transition: 'none', opacity: 1 });
$progress[0].offsetWidth; /* Repaint */
setTimeout(function() {
$progress.css({ transition: 'all '+speed+'ms linear', opacity: 0 });
setTimeout(function() {
NProgress.remove();
next();
}, speed);
}, speed);
} else {
setTimeout(next, speed);
}
});
return this;
};
NProgress.isStarted = function() {
return typeof NProgress.status === 'number';
};
/**
* Shows the progress bar.
* This is the same as setting the status to 0%, except that it doesn't go backwards.
*
*     NProgress.start();
*
*/
NProgress.start = function() {
if (!NProgress.status) NProgress.set(0);
var work = function() {
setTimeout(function() {
if (!NProgress.status) return;
NProgress.trickle();
work();
}, Settings.trickleSpeed);
};
if (Settings.trickle) work();
return this;
};
/**
* Hides the progress bar.
* This is the *sort of* the same as setting the status to 100%, with the
* difference being `done()` makes some placebo effect of some realistic motion.
*
*     NProgress.done();
*
* If `true` is passed, it will show the progress bar even if its hidden.
*
*     NProgress.done(true);
*/
NProgress.done = function(force) {
if (!force && !NProgress.status) return this;
return NProgress.inc(0.3 + 0.5 * Math.random()).set(1);
};
/**
* Increments by a random amount.
*/
NProgress.inc = function(amount) {
var n = NProgress.status;
if (!n) {
return NProgress.start();
} else {
if (typeof amount !== 'number') {
amount = (1 - n) * clamp(Math.random() * n, 0.1, 0.95);
}
n = clamp(n + amount, 0, 0.994);
return NProgress.set(n);
}
};
NProgress.trickle = function() {
return NProgress.inc(Math.random() * Settings.trickleRate);
};
/**
* (Internal) renders the progress bar markup based on the `template`
* setting.
*/
NProgress.render = function(fromStart) {
if (NProgress.isRendered()) return $("#nprogress");
$('html').addClass('nprogress-busy');
var $el = $("<div id='nprogress'>")
.html(Settings.template);
var perc = fromStart ? '-100' : toBarPerc(NProgress.status || 0);
$el.find('[role="bar"]').css({
transition: 'all 0 linear',
transform: 'translate3d('+perc+'%,0,0)'
});
if (!Settings.showSpinner)
$el.find('[role="spinner"]').remove();
$el.appendTo(document.body);
return $el;
};
/**
* Removes the element. Opposite of render().
*/
NProgress.remove = function() {
$('html').removeClass('nprogress-busy');
$('#nprogress').remove();
};
/**
* Checks if the progress bar is rendered.
*/
NProgress.isRendered = function() {
return ($("#nprogress").length > 0);
};
/**
* Determine which positioning CSS rule to use.
*/
NProgress.getPositioningCSS = function() {
var bodyStyle = document.body.style;
var vendorPrefix = ('WebkitTransform' in bodyStyle) ? 'Webkit' :
('MozTransform' in bodyStyle) ? 'Moz' :
('msTransform' in bodyStyle) ? 'ms' :
('OTransform' in bodyStyle) ? 'O' : '';
if (vendorPrefix + 'Perspective' in bodyStyle) {
return 'translate3d';
} else if (vendorPrefix + 'Transform' in bodyStyle) {
return 'translate';
} else {
return 'margin';
}
};
/**
* Helpers
*/
function clamp(n, min, max) {
if (n < min) return min;
if (n > max) return max;
return n;
}
/**
* (Internal) converts a percentage (`0..1`) to a bar translateX
* percentage (`-100%..0%`).
*/
function toBarPerc(n) {
return (-1 + n) * 100;
}
/**
* (Internal) returns the correct CSS for changing the bar's
* position given an n percentage, and speed and ease from Settings
*/
function barPositionCSS(n, speed, ease) {
var barCSS;
if (Settings.positionUsing === 'translate3d') {
barCSS = { transform: 'translate3d('+toBarPerc(n)+'%,0,0)' };
} else if (Settings.positionUsing === 'translate') {
barCSS = { transform: 'translate('+toBarPerc(n)+'%,0)' };
} else {
barCSS = { 'margin-left': toBarPerc(n)+'%' };
}
barCSS.transition = 'all '+speed+'ms '+ease;
return barCSS;
}
return NProgress;
});
;
;
/*! filesize.min.js */ 
;
;
/*
2013 Jason Mulligan
@license BSD-3 <https://raw.github.com/avoidwork/filesize.js/master/LICENSE>
@link http://filesizejs.com
@module filesize
@version 2.0.0
*/
(function(r){function f(f,c){var b="",g=!1,l=6,a,h,q,d,m,n,p,e,k;if(isNaN(f))throw Error("Invalid arguments");c=c||{};h=!0===c.bits;e=!0===c.unix;a=void 0!==c.base?c.base:e?2:10;m=void 0!==c.round?c.round:e?1:2;k=void 0!==c.spacer?c.spacer:e?"":" ";d=Number(f);(q=0>d)&&(d=-d);if(0===d)b=e?"0":"0"+k+"B";else for(p=s[a][h?"bits":"bytes"];l--;)if(n=p[l][1],a=p[l][0],d>=n){t.test(a)&&(g=!0,m=0);b=(d/n).toFixed(m);!g&&e?(h&&u.test(a)&&(a=a.toLowerCase()),a=a.charAt(0),g=v.exec(b),h||"k"!==a||(a="K"),null!==
g&&void 0!==g[1]&&w.test(g[1])&&(b=parseInt(b,x)),b+=k+a):e||(b+=k+a);break}q&&(b="-"+b);return b}var u=/b$/,t=/^B$/,x=10,v=/\.(.*)/,w=/^0$/,s={2:{bits:[["B",1],["kb",128],["Mb",131072],["Gb",134217728],["Tb",137438953472],["Pb",0x800000000000]],bytes:[["B",1],["kB",1024],["MB",1048576],["GB",1073741824],["TB",1099511627776],["PB",0x4000000000000]]},10:{bits:[["B",1],["kb",125],["Mb",125E3],["Gb",125E6],["Tb",125E9],["Pb",125E12]],bytes:[["B",1],["kB",1E3],["MB",1E6],["GB",1E9],["TB",1E12],["PB",
1E15]]}};"undefined"!==typeof exports?module.exports=f:"function"===typeof define?define(function(){return f}):r.filesize=f})(this);

;
;
/*! jquery.mousewheel.js */ 
;
;
/*! Copyright (c) 2013 Brandon Aaron (http://brandon.aaron.sh)
* Licensed under the MIT License (LICENSE.txt).
*
* Version: 3.1.6
*
* Requires: jQuery 1.2.2+
*/
(function (factory) {
if ( typeof define === 'function' && define.amd ) {
define(['jquery'], factory);
} else if (typeof exports === 'object') {
module.exports = factory;
} else {
factory(jQuery);
}
}(function ($) {
var toFix  = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'],
toBind = ( 'onwheel' in document || document.documentMode >= 9 ) ?
['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'],
slice  = Array.prototype.slice,
nullLowestDeltaTimeout, lowestDelta;
if ( $.event.fixHooks ) {
for ( var i = toFix.length; i; ) {
$.event.fixHooks[ toFix[--i] ] = $.event.mouseHooks;
}
}
$.event.special.mousewheel = {
version: '3.1.6',
setup: function() {
if ( this.addEventListener ) {
for ( var i = toBind.length; i; ) {
this.addEventListener( toBind[--i], handler, false );
}
} else {
this.onmousewheel = handler;
}
},
teardown: function() {
if ( this.removeEventListener ) {
for ( var i = toBind.length; i; ) {
this.removeEventListener( toBind[--i], handler, false );
}
} else {
this.onmousewheel = null;
}
}
};
$.fn.extend({
mousewheel: function(fn) {
return fn ? this.bind('mousewheel', fn) : this.trigger('mousewheel');
},
unmousewheel: function(fn) {
return this.unbind('mousewheel', fn);
}
});
function handler(event) {
var orgEvent   = event || window.event,
args       = slice.call(arguments, 1),
delta      = 0,
deltaX     = 0,
deltaY     = 0,
absDelta   = 0;
event = $.event.fix(orgEvent);
event.type = 'mousewheel';
if ( 'detail'      in orgEvent ) { deltaY = orgEvent.detail * -1;      }
if ( 'wheelDelta'  in orgEvent ) { deltaY = orgEvent.wheelDelta;       }
if ( 'wheelDeltaY' in orgEvent ) { deltaY = orgEvent.wheelDeltaY;      }
if ( 'wheelDeltaX' in orgEvent ) { deltaX = orgEvent.wheelDeltaX * -1; }
if ( 'axis' in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
deltaX = deltaY * -1;
deltaY = 0;
}
delta = deltaY === 0 ? deltaX : deltaY;
if ( 'deltaY' in orgEvent ) {
deltaY = orgEvent.deltaY * -1;
delta  = deltaY;
}
if ( 'deltaX' in orgEvent ) {
deltaX = orgEvent.deltaX;
if ( deltaY === 0 ) { delta  = deltaX * -1; }
}
if ( deltaY === 0 && deltaX === 0 ) { return; }
absDelta = Math.max( Math.abs(deltaY), Math.abs(deltaX) );
if ( !lowestDelta || absDelta < lowestDelta ) {
lowestDelta = absDelta;
}
delta  = Math[ delta  >= 1 ? 'floor' : 'ceil' ](delta  / lowestDelta);
deltaX = Math[ deltaX >= 1 ? 'floor' : 'ceil' ](deltaX / lowestDelta);
deltaY = Math[ deltaY >= 1 ? 'floor' : 'ceil' ](deltaY / lowestDelta);
event.deltaX = deltaX;
event.deltaY = deltaY;
event.deltaFactor = lowestDelta;
args.unshift(event, delta, deltaX, deltaY);
if (nullLowestDeltaTimeout) { clearTimeout(nullLowestDeltaTimeout); }
nullLowestDeltaTimeout = setTimeout(nullLowestDelta, 200);
return ($.event.dispatch || $.event.handle).apply(this, args);
}
function nullLowestDelta() {
lowestDelta = null;
}
}));
;
;
/*! jquery.specialscroll.js */ 
;
;
/*
James Padolsey
Special scroll events for jQuery
Found here: http://james.padolsey.com/javascript/special-scroll-events-for-jquery/
*/
(function(){
var special = jQuery.event.special,
uid1 = 'D' + (+new Date()),
uid2 = 'D' + (+new Date() + 1);
special.scrollstart = {
setup: function() {
var timer,
handler =  function(evt) {
var _self = this,
_args = arguments;
if (timer) {
clearTimeout(timer);
} else {
evt.type = 'scrollstart';
jQuery.event.handle.apply(_self, _args);
}
timer = setTimeout( function(){
timer = null;
}, special.scrollstop.latency);
};
jQuery(this).bind('scroll', handler).data(uid1, handler);
},
teardown: function(){
jQuery(this).unbind( 'scroll', jQuery(this).data(uid1) );
}
};
special.scrollstop = {
latency: 300,
setup: function() {
var timer,
handler = function(evt) {
var _self = this,
_args = arguments;
if (timer) {
clearTimeout(timer);
}
timer = setTimeout( function(){
timer = null;
evt.type = 'scrollstop';
jQuery.event.handle.apply(_self, _args);
}, special.scrollstop.latency);
};
jQuery(this).bind('scroll', handler).data(uid2, handler);
},
teardown: function() {
jQuery(this).unbind( 'scroll', jQuery(this).data(uid2) );
}
};
})();
;
;
/*! jquery.cookie.js */ 
;
;
/*!
* jQuery Cookie Plugin v1.4.0
* https://github.com/carhartl/jquery-cookie
*
* Copyright 2013 Klaus Hartl
* Released under the MIT license
*/
(function (factory) {
if (typeof define === 'function' && define.amd) {
define(['jquery'], factory);
} else {
factory(jQuery);
}
}(function ($) {
var pluses = /\+/g;
function encode(s) {
return config.raw ? s : encodeURIComponent(s);
}
function decode(s) {
return config.raw ? s : decodeURIComponent(s);
}
function stringifyCookieValue(value) {
return encode(config.json ? JSON.stringify(value) : String(value));
}
function parseCookieValue(s) {
if (s.indexOf('"') === 0) {
s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
}
try {
s = decodeURIComponent(s.replace(pluses, ' '));
return config.json ? JSON.parse(s) : s;
} catch(e) {}
}
function read(s, converter) {
var value = config.raw ? s : parseCookieValue(s);
return $.isFunction(converter) ? converter(value) : value;
}
var config = $.cookie = function (key, value, options) {
if (value !== undefined && !$.isFunction(value)) {
options = $.extend({}, config.defaults, options);
if (typeof options.expires === 'number') {
var days = options.expires, t = options.expires = new Date();
t.setTime(+t + days * 864e+5);
}
return (document.cookie = [
encode(key), '=', stringifyCookieValue(value),
options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
options.path    ? '; path=' + options.path : '',
options.domain  ? '; domain=' + options.domain : '',
options.secure  ? '; secure' : ''
].join(''));
}
var result = key ? undefined : {};
var cookies = document.cookie ? document.cookie.split('; ') : [];
for (var i = 0, l = cookies.length; i < l; i++) {
var parts = cookies[i].split('=');
var name = decode(parts.shift());
var cookie = parts.join('=');
if (key && key === name) {
result = read(cookie, value);
break;
}
if (!key && (cookie = read(cookie)) !== undefined) {
result[name] = cookie;
}
}
return result;
};
config.defaults = {};
$.removeCookie = function (key, options) {
if ($.cookie(key) === undefined) {
return false;
}
$.cookie(key, '', $.extend({}, options, { expires: -1 }));
return !$.cookie(key);
};
}));
;
;
/*! main.js */ 
;
;
var InVision = angular.module( "InVision", [ "ngResource", "ngRoute", "ngSanitize" ] );
(function( ng, app ){
app.constant( "MAX_COMMENT_LIKES_DISPLAYED", 10 );
app.config(
function( $routeProvider ){
var routes = [
{
resource: "/screens",
action: "preview"
},
{
resource: "/screens/:screenID",
action: "preview"
},
{
resource: "/screens/:screenID/comments",
action: "comments"
},
{
resource: "/screens/:screenID/comments/:conversationID",
action: "comments"
}
];
angular.forEach(
routes,
function( route, index, collection ){
$routeProvider.when(
route.resource,
{
resource: route.resource,
action: route.action
}
);
}
);
$routeProvider.otherwise(
{
redirectTo: "/screens"
}
);
}
);
app.config(
function( $httpProvider ) {
var httpInterceptorFor401Response = function( $window, $q, config ) {
var interceptor = function( request ) {
var interceptedResponse = request.then(
function() {
return( request );
},
function( httpResponse ) {
if ( httpResponse.status === 401 ) {
$window.setTimeout(
function() {
$window.location.href = ( "./" + config.share.key );
},
100
);
return( $q.defer().promise );
}
return( request );
}
);
return( interceptedResponse );
};
return( interceptor );
};
var httpInterceptorForHttpActivityTracking = function( httpActivityService ) {
var interceptor = function( request ) {
request.then(
function( httpResponse ) {
var isPostRequest = (httpResponse.config.method !== "GET");
var isBlacklisted = (httpResponse.config.data && ("X-Do-Not-Track-As-Post" in httpResponse.config.data));
var trackAsPost = (isPostRequest && !isBlacklisted);
httpActivityService.requestCompleted( trackAsPost );
},
function( httpResponse ) {
var isPostRequest = (httpResponse.config.method !== "GET");
var isBlacklisted = (httpResponse.config.data && ("X-Do-Not-Track-As-Post" in httpResponse.config.data));
var trackAsPost = (isPostRequest && !isBlacklisted);
httpActivityService.requestCompleted( trackAsPost );
}
);
return( request );
};
return( interceptor );
};
$httpProvider.responseInterceptors.push( httpInterceptorFor401Response );
$httpProvider.responseInterceptors.push( httpInterceptorForHttpActivityTracking );
}
);
app.provider(
"$exceptionHandler",
{
$get: function( errorLogService ) {
return( errorLogService.exceptionHandler );
}
}
);
app.run(
function( $http, httpActivityService, $window ) {
function startInterceptor( data, getHeaders ) {
var isPostRequest = ("Content-Type" in getHeaders());
var isBlacklisted = (ng.isString( data ) && (data.indexOf( "X-Do-Not-Track-As-Post" ) != -1));
var trackAsPost = (isPostRequest && !isBlacklisted);
httpActivityService.requestStarted( trackAsPost );
return( data );
}
function addTimezoneOffsetHeader( data, getHeaders ) {
var headers = getHeaders();
var now = new Date();
if ( now.getTimezoneOffset ) {
headers[ "X-Timezone-Offset" ] = -now.getTimezoneOffset();
}
return( data );
}
function addLoadedAtHeader( data, getHeaders ) {
var headers = getHeaders();
headers[ "X-Page-Loaded-At" ] = addLoadedAtHeader.loadedAt;
return( data );
}
addLoadedAtHeader.loadedAt = ( new Date() ).getTime();
function addReferrerHeader( data, getHeaders ) {
var headers = getHeaders();
headers[ "X-Referrer-Hash" ] = $window.location.hash;
return( data );
}
$http.defaults.transformRequest.push( startInterceptor );
$http.defaults.transformRequest.push( addTimezoneOffsetHeader );
$http.defaults.transformRequest.push( addLoadedAtHeader );
$http.defaults.transformRequest.push( addReferrerHeader );
}
);
})( angular, InVision );
;
;
/*! empty.js */ 
;
;

;
;
/*! conversation-crop-service.js */ 
;
;
(function( ng, app ) {
"use strict";
app.service( "conversationCropService", Service );
/** @ngInject */
function Service( _, $q ) {
var cropImage;
var markerWidth = 20; // hardcoded diameter of markers, helps with placing a circle here at the center when the x/y is actually top/left and not center
var isUnsupported = false; // if we encounter an error with this process, don't keep trying to use canvas cropping
function createConversationImage( conversation, imageSrc, cropWidth, cropHeight, markerRadius ) {
var deferred = $q.defer();
var canvas = document.getElementById("renderCanvas");
if( !('crossOrigin' in new Image() ) ) {
isUnsupported = true;
}
if ( isUnsupported ) {
setTimeout(function() {
deferred.reject( "error" );
},1);
return deferred.promise;
}
try {
var ctx = canvas.getContext("2d");
var baseX = conversation.x;
var baseY = conversation.y;
var sourceX = baseX + markerWidth - (cropWidth / 2);
var sourceY = baseY + markerWidth - (cropHeight / 2);
var loadedImg = new Image();
canvas.width = cropWidth;
canvas.height = cropHeight;
ctx.clearRect( 0, 0, canvas.width, canvas.height);
var centerX = canvas.width / 2;
var centerY = canvas.height / 2;
if ( sourceX < 0 ) {
centerX = Math.abs(sourceX);
sourceX = 0;
}
if ( sourceY < 0 ) {
centerY = Math.abs(sourceY);
sourceY = 0;
}
loadedImg.crossOrigin = "Anonymous";
loadedImg.onload = function() {
if ( sourceX > loadedImg.width ) {
centerX = Math.abs(sourceX);
sourceX = loadedImg.width;
}
if ( sourceY > loadedImg.height ) {
centerY = Math.abs(sourceY);
sourceY = loadedImg.height;
}
ctx.drawImage(loadedImg, sourceX, sourceY, cropWidth, cropHeight, 0, 0, cropWidth, cropHeight );
ctx.beginPath();
ctx.arc( centerX, centerY, markerRadius, 0, 2 * Math.PI, false );
ctx.fillStyle = "#e85267";
ctx.fill();
ctx.lineWidth = 1;
ctx.strokeStyle = "#f5fbfd";	
ctx.stroke();
try {
var dataUrl = canvas.toDataURL("image/png");
} catch( exception ) {
isUnsupported = true;
deferred.reject( exception );
return;
}
deferred.resolve(dataUrl);
};
var augmentedSrc = imageSrc.replace('project-images', 'projects'); // hax replace for local
loadedImg.src = augmentedSrc;
} catch ( exception ) {
isUnsupported = true;
setTimeout(function() {
deferred.reject( exception );
}, 1);
}
return deferred.promise;
}
return({
createConversationImage: createConversationImage
});
}
})( angular, InVision );
;
;
/*! date-helper.js */ 
;
;
(function( ng, app ) {
"use strict";
app.service( "dateHelper", Service );
/** @ngInject */
function Service() {
this.dayAsStringMap = [
{
"long": "Sunday",
"short": "Sun"
},
{
"long": "Monday",
"short": "Mon"
},
{
"long": "Tuesday",
"short": "Tue"
},
{
"long": "Wednesday",
"short": "Wed"
},
{
"long": "Thursday",
"short": "Thr"
},
{
"long": "Friday",
"short": "Fri"
},
{
"long": "Saturday",
"short": "Sat"
}
];
this.monthAsStringMap = [
{
"long": "January",
"short": "Jan"
},
{
"long": "February",
"short": "Feb"
},
{
"long": "March",
"short": "Mar"
},
{
"long": "April",
"short": "Apr"
},
{
"long": "May",
"short": "May"
},
{
"long": "June",
"short": "Jun"
},
{
"long": "July",
"short": "Jul"
},
{
"long": "August",
"short": "Aug"
},
{
"long": "September",
"short": "Sep"
},
{
"long": "October",
"short": "Oct"
},
{
"long": "November",
"short": "Nov"
},
{
"long": "December",
"short": "Dec"
}
];
return( this );
}
Service.prototype = {
add: function( datetime, count, unit ) {
var newDatetime = this.duplicate( datetime );
switch ( unit.toLowerCase() ) {
case "y":
newDatetime.setFullYear( newDatetime.getFullYear() + count );
break;
case "m":
newDatetime.setMonth( newDatetime.getMonth() + count );
break;
case "d":
newDatetime.setDate( newDatetime.getDate() + count );
break;
case "w":
newDatetime.setDate( newDatetime.getDate() + ( count * 7 ) );
break;
case "h":
newDatetime.setTime( newDatetime.getTime() + ( count * 1000 * 60 * 60 ) );
break;
case "n":
newDatetime.setTime( newDatetime.getTime() + ( count * 1000 * 60 ) );
break;
case "s":
newDatetime.setTime( newDatetime.getTime() + ( count * 1000 ) );
break;
case "l":
newDatetime.setTime( newDatetime.getTime() + count );
break;
}
return( newDatetime );
},
addDays: function( datetime, dayCount ) {
var newDatetime = this.duplicate( datetime );
newDatetime.setDate( newDatetime.getDate() + dayCount );
return( newDatetime );
},
addLeadingZero: function( value ) {
if ( value.toString().length === 1 ) {
return( "0" + value );
}
return( value );
},
convertSecondsToMinutes: function( seconds, excludeZeroMinute ) {
var minutes = Math.floor( seconds / 60 );
var remainingSeconds = ( seconds % 60 );
if (
( excludeZeroMinute === true ) &&
( minutes === 0 )
) {
return( ":" + this.addLeadingZero( remainingSeconds ) );
} else {
return( minutes + ":" + this.addLeadingZero( remainingSeconds ) );
}
},
duplicate: function( datetime ) {
return(
new Date( datetime )
);
},
equals: function( date1, date2 ) {
return( date1.getTime() === date2.getTime() );
},
formatDate: function( datetime, dateMask ) {
var self = this;
var date = this.removeTime( datetime );
var result = dateMask.replace(
/M+|m+|d+|yyyy|yy/g,
function( $0 ) {
return(
self.getFormattedDatePart( date, $0 )
);
}
);
return( result );
},
formatRecentDate: function( datetime, dateMask ) {
var date = this.removeTime( datetime );
if ( this.isToday( date ) ) {
return( "Today" );
} else if ( this.isYesterday( date ) ) {
return( "Yesterday" );
} else {
return( this.formatDate( datetime, dateMask ) );
}
},
formatTime: function( datetime, timeMask ) {
var self = this;
var date = this.duplicate( datetime );
var result = timeMask.replace(
/H+|h+|m+|t+|T+/g,
function( $0 ) {
return(
self.getFormattedTimePart( date, $0 )
);
}
);
return( result );
},
getDayOfWeekAsString: function( dayOfWeek, useShortVersion ) {
if ( useShortVersion ) {
return( this.dayAsStringMap[ dayOfWeek ][ "short" ] );
} else {
return( this.dayAsStringMap[ dayOfWeek ][ "long" ] );
}
},
getFormattedDatePart: function( datetime, pattern ) {
switch( pattern ) {
case "D":
case "d":
return( datetime.getDate() );
break;
case "DD":
case "dd":
return( this.addLeadingZero( datetime.getDate() ) );
break;
case "DDD":
return( this.getDayOfWeekAsString( datetime.getDay() ).toUpperCase() );
break;
case "ddd":
return( this.getDayOfWeekAsString( datetime.getDay() ) );
break;
case "dddd":
return( this.getDayOfWeekAsString( datetime.getDay(), true ) );
break;
case "M":
case "m":
return( datetime.getMonth() + 1 );
break;
case "MM":
case "mm":
return( this.addLeadingZero( datetime.getMonth() + 1 ) );
break;
case "MMM":
case "mmm":
return( this.getMonthAsString( datetime.getMonth(), true ) );
break;
case "MMMM":
case "mmmm":
return( this.getMonthAsString( datetime.getMonth(), false ) );
break;
case "YY":
case "yy":
return( this.addLeadingZero( datetime.getFullYear() % 100 ) );
break;
case "YYYY":
case "yyyy":
return( datetime.getFullYear() );
break;
}
return( pattern );
},
getFormattedTimePart: function( datetime, pattern ) {
switch( pattern ) {
case "H":
return( datetime.getHours() );
break;
case "HH":
var value = datetime.getHours();
return( value < 10 ?  "0" + value : value );
break;
case "h":
var value = (datetime.getHours()  % 12);
return( value === 0 ? 12 : value );
break;
case "hh":
var value = (datetime.getHours()  % 12);
value = ( value === 0 ? 12 : value );
return( value < 10 ?  "0" + value : value );
break;
case "M":
case "MM":
case "m":
case "mm":
var value = datetime.getMinutes();
return( value < 10 ? "0" + value : value );
break;
case "T":
return( datetime.getHours() < 12 ? "A" : "P" );
break;
case "TT":
return( datetime.getHours() < 12 ? "AM" : "PM" );
break;
case "t":
return( datetime.getHours() < 12 ? "a" : "p" );
break;
case "tt":
return( datetime.getHours() < 12 ? "am" : "pm" );
break;
}
return( pattern );
},
getMonthAsString: function( month, useShortVersion ) {
if ( useShortVersion ) {
return( this.monthAsStringMap[ month ][ "short" ] );
} else {
return( this.monthAsStringMap[ month ][ "long" ] );
}
},
isRecent: function( datetime, delta, unit ) {
var cutoff = this.add( new Date(), -delta, unit );
return( datetime >= cutoff );
},
isToday: function( datetime ) {
return(
this.equals( datetime, this.today() )
);
},
isYesterday: function( datetime ) {
return(
this.equals( datetime, this.yesterday() )
);
},
notEquals: function( date1, date2 ) {
return( ! this.equals( date1, date2 ) );
},
removeTime: function( datetime ) {
var newDatetime = this.duplicate( datetime );
newDatetime.setHours( 0 );
newDatetime.setMinutes( 0 );
newDatetime.setSeconds( 0 );
newDatetime.setMilliseconds( 0 );
return( newDatetime );
},
today: function() {
return(
this.removeTime( new Date() )
);
},
tomorrow: function() {
return( this.addDays( this.today(), 1 ) );
},
yesterday: function() {
return(
this.addDays( this.today(), -1 )
);
},
formatRelativeWithinMonth: function(time, lang) {
lang = lang || "smallDate";
moment.lang("smallDate", {
relativeTime : {
future : "in %s",
past : "%s ago",
s : "1s",
m : "1m",
mm : "%dm",
h : "1h",
hh : "%dh",
d : "1d",
dd : "%dd",
M : "1mo",
MM : "%d months",
y : "a year",
yy : "%d years"
}
});
moment.lang("expandedDate", {
relativeTime : {
future : "in %s",
past : "%s ago",
s : "1 second",
ss : "%d seconds",
m : "1 minute",
mm : "%d minutes",
h : "1 hour",
hh : "%d hours",
d : "1 day",
dd : "%d days",
M : "1 month",
MM : "%d months",
y : "a year",
yy : "%d years"
}
});
moment.lang("expandedDate", {
relativeTime : {
future : "in %s",
past : "%s ago",
s : "1 second",
ss : "%d seconds",
m : "1 minute",
mm : "%d minutes",
h : "1 hour",
hh : "%d hours",
d : "1 day",
dd : "%d days",
M : "1 month",
MM : "%d months",
y : "a year",
yy : "%d years"
}
});
moment.lang("expandedDate", {
relativeTime : {
future : "in %s",
past : "%s ago",
s : "1 second",
ss : "%d seconds",
m : "1 minute",
mm : "%d minutes",
h : "1 hour",
hh : "%d hours",
d : "1 day",
dd : "%d days",
M : "1 month",
MM : "%d months",
y : "a year",
yy : "%d years"
}
});
var now = moment(),
diff = moment(time).diff(now, "months"),
output;
if ( Math.abs(diff) === 0 ) {
moment.lang( lang );
output = moment(time).fromNow();
moment.lang(false);
} else {
output = moment(time).format("MMM D");
}
return output;
}
};
})( angular, InVision );
;
;
/*! deferred.js */ 
;
;
(function( ng, app ) {
"use strict";
app.factory(
"Deferred",
/** @ngInject */
function( $q, _ ) {
function Deferred() {
var deferred = $q.defer();
var promise = deferred.promise;
var core = {
resolve: deferred.resolve,
reject: deferred.reject,
then: promise.then
};
var isResolved = false;
var isRejected = false;
var updateCallbacks = [];
var mistakeCallbacks = [];
deferred.resolve = function() {
if ( isResolved && !isRejected ) {
for ( var i = 0, length = updateCallbacks.length ; i < length ; i++ ) {
updateCallbacks[ i ].apply( {}, arguments );
}
} else {
isResolved = true;
core.resolve.apply( deferred, arguments )
}
};
deferred.reject = function() {
if ( isResolved ) {
for ( var i = 0, length = mistakeCallbacks.length ; i < length ; i++ ) {
mistakeCallbacks[ i ].apply( {}, arguments );
}
} else {
isRejected = true;
core.reject.apply( deferred, arguments )
}
};
promise.then = function() {
var newPromise = core.then.apply( promise, arguments );
newPromise.update = promise.update;
newPromise.mistake = promise.mistake;
return( newPromise );
};
promise.update = function( callback ) {
updateCallbacks.push( callback );
return( promise );
};
promise.mistake = function( callback ) {
mistakeCallbacks.push( callback );
return( promise );
};
return( deferred );
}
Deferred.handleAllPromises = function( promises, successCallback, errorCallback, runOnce ) {
var handleSuccess = function( index, response ) {
if ( hasError ) {
return;
}
results[ index ] = response;
if ( _.contains( results, null ) ) {
return;
}
successCallback.apply( null, results );
};
var handleError = function( index, response ) {
if ( hasError ) {
return;
}
hasError = true;
errorCallback.call( null, response );
};
var results = [];
for ( var i = 0, length = promises.length ; i < length ; i++ ) {
results.push( null );
}
var hasError = false;
successCallback = ( successCallback || ng.noop );
errorCallback = ( errorCallback || ng.noop );
_.forEach(
promises,
function( promise, index ) {
Deferred.handlePromise(
promise,
function( response ) {
handleSuccess( index, response );
},
function( response ) {
handleError( index, response );
},
runOnce
);
}
);
};
Deferred.handlePromise = function( promise, successCallback, errorCallback, runOnce ) {
var handleSuccess = function( response ) {
if ( hasRun && runOnce ) {
return;
}
hasRun = true;
successCallback( response );
};
var hasRun = false;
successCallback = ( successCallback || ng.noop );
errorCallback = ( errorCallback || ng.noop );
promise.then( handleSuccess, errorCallback );
promise.update( handleSuccess );
promise.mistake( errorCallback );
return( promise );
};
return( Deferred );
}
);
})( angular, InVision );
;
;
/*! error-log-service.js */ 
;
;
(function( ng, app ) {
"use strict";
app.service( "errorLogService", ErrorLogService );
/** @ngInject */
function ErrorLogService( $log, $window, stackTraceService ) {
var debounceLog = {};
var appLoadedAt = ( new Date() ).getTime();
function log( exception ) {
$log.error.apply( $log, arguments );
try {
var errorMessage = exception.toString();
if ( shouldSkipErrorReporting( errorMessage ) ) {
return;
}
var stackTrace = stackTraceService.print({ e: exception });
$.ajax({
type: "POST",
url: "/api/error-log/javascript",
contentType: "application/json",
headers: {
"X-Page-Loaded-At": appLoadedAt
},
data: ng.toJson({
errorUrl: $window.location.href,
errorMessage: errorMessage,
stackTrace: ng.toJson( stackTrace )
})
});
} catch ( loggingError ) {
$log.warn( "Error logging failed" );
$log.log( loggingError );
}
}
function normalizeErrorMessage( message ) {
return(
String( message ).toLowerCase().replace( /[^a-z0-9]+/gi, "_" )
);
}
function shouldSkipErrorReporting( message ) {
var errorKey = ( "debounce_" + normalizeErrorMessage( message ) );
if ( debounceLog.hasOwnProperty( errorKey ) ) {
return( true );
}
debounceLog[ errorKey ] = true;
return( false );
}
return({
exceptionHandler: log
});
}
})( angular, InVision );
;
;
/*! hashkey-copier.js */ 
;
;
(function( ng, app ) {
"use strict";
app.service( "hashKeyCopier", HashKeyCopier );
/** @ngInject */
/** @ngInject */
function HashKeyCopier( _ ) {
function applyHashKeyIndex( hashKeyIndex, target, uniqueIdentifiers ) {
if ( _.isArray( target ) ) {
applyHashKeyIndexToArray( hashKeyIndex, "[]", target, uniqueIdentifiers );
} else if ( _.isObject( target ) ) {
applyHashKeyIndexToObject( hashKeyIndex, ".", target, uniqueIdentifiers );
}
return( target );
}
function applyHashKeyIndexToArray( hashKeyIndex, path, target, uniqueIdentifiers ) {
for ( var i = 0, length = target.length ; i < length ; i++ ) {
var targetItem = target[ i ];
if ( _.isArray( targetItem ) ) {
applyHashKeyIndexToArray( hashKeyIndex, ( path + "[]" ), targetItem, uniqueIdentifiers );
} else if ( _.isObject( targetItem ) ) {
applyHashKeyIndexToObject( hashKeyIndex, ( path + "." ), targetItem, uniqueIdentifiers );
}
}
}
function applyHashKeyIndexToObject( hashKeyIndex, path, target, uniqueIdentifiers ) {
var identifier = getUniqueIdentifierForObject( target, uniqueIdentifiers );
if ( identifier ) {
var hashKeyPath = ( path + target[ identifier ] );
if ( hashKeyIndex.hasOwnProperty( hashKeyPath ) ) {
target[ hashKeyLookup ] = hashKeyIndex[ hashKeyPath ];
path += ( target[ identifier ] + "." );
}
}
for ( var key in target ) {
if ( target.hasOwnProperty( key ) ) {
var targetItem = target[ key ];
if ( _.isArray( targetItem ) ) {
applyHashKeyIndexToArray( hashKeyIndex, ( path + key + "[]" ), targetItem, uniqueIdentifiers );
} else if ( _.isObject( targetItem ) ) {
applyHashKeyIndexToObject( hashKeyIndex, ( path + key + "." ) , targetItem, uniqueIdentifiers );
}
}
}
}
function buildHashKeyIndex( target, uniqueIdentifiers ) {
var hashKeyIndex = {};
if ( _.isArray( target ) ) {
buildHashKeyIndexForArray( hashKeyIndex, "[]", target, uniqueIdentifiers );
} else if ( _.isObject( target ) ) {
buildHashKeyIndexForObject( hashKeyIndex, ".", target, uniqueIdentifiers );
}
return( hashKeyIndex );
}
function buildHashKeyIndexForArray( hashKeyIndex, path, target, uniqueIdentifiers ) {
for ( var i = 0, length = target.length ; i < length ; i++ ) {
var targetItem = target[ i ];
if ( _.isArray( targetItem ) ) {
buildHashKeyIndexForArray( hashKeyIndex, ( path + "[]" ), targetItem, uniqueIdentifiers );
} else if ( _.isObject( targetItem ) ) {
buildHashKeyIndexForObject( hashKeyIndex, ( path + "." ), targetItem, uniqueIdentifiers );
}
}
}
function buildHashKeyIndexForObject( hashKeyIndex, path, target, uniqueIdentifiers ) {
if ( target.hasOwnProperty( hashKeyLookup ) ) {
var identifier = getUniqueIdentifierForObject( target, uniqueIdentifiers );
if ( identifier ) {
hashKeyIndex[ path + target[ identifier ] ] = target[ hashKeyLookup ];
path += ( target[ identifier ] + "." );
}
}
for ( var key in target ) {
if ( target.hasOwnProperty( key ) ) {
var targetItem = target[ key ];
if ( _.isArray( targetItem ) ) {
buildHashKeyIndexForArray( hashKeyIndex, ( path + key + "[]" ), targetItem, uniqueIdentifiers );
} else if ( _.isObject( targetItem ) ) {
buildHashKeyIndexForObject( hashKeyIndex, ( path + key + "." ) , targetItem, uniqueIdentifiers );
}
}
}
}
function copyHashKeys( existing, incoming, uniqueIdentifiers ) {
if ( isExistingDataEmpty( existing ) ) {
return( incoming );
}
if ( ! uniqueIdentifiers ) {
uniqueIdentifiers = [ "id" ];
}
var hashKeyIndex = buildHashKeyIndex( existing, uniqueIdentifiers );
applyHashKeyIndex( hashKeyIndex, incoming, uniqueIdentifiers );
return( incoming );
}
function getUniqueIdentifierForObject( target, uniqueIdentifiers ) {
for ( var i = 0, length = uniqueIdentifiers.length ; i < length ; i++ ) {
var identifier = uniqueIdentifiers[ i ];
if ( target.hasOwnProperty( identifier ) ) {
return( identifier );
}
}
return( null );
}
function isEmptyArray( target ) {
return(
target.hasOwnProperty( "length" ) && 
( target.length === 0 )
);
}
function isExistingDataEmpty( existing ) {
if ( ! existing || isEmptyArray( existing ) ) {
return( true );
}
return( false );
}
var hashKeyLookup = "$$hashKey";
return({
copyHashKeys: copyHashKeys
});
}
})( angular, InVision );
;
;
/*! http-activity-service.js */ 
;
;
(function( ng, app ) {
"use strict";
app.service( "httpActivityService", Service );
/** @ngInject */
function Service() {
this.activeRequestCount = 0;
this.activeGetRequestCount = 0;
this.activePostRequestCount =  0;
return( this );
}
Service.prototype = {
isActive: function() {
return( this.activeRequestCount !== 0 );
},
isActiveWithGet: function() {
return( this.activeGetRequestCount !== 0 );
},
isActiveWithPost: function() {
return( this.activePostRequestCount !== 0 );
},
requestCompleted: function( isPostRequest ) {
if ( isPostRequest ) {
this.activePostRequestCount--;
} else {
this.activeGetRequestCount--;
}
this.activeRequestCount--;
if ( this.activeRequestCount === 0 ) {
this.activeGetRequestCount = 0;
this.activePostRequestCount = 0;
}
return( this.activeRequestCount );
},
requestStarted: function( isPostRequest ) {
if ( isPostRequest ) {
this.activePostRequestCount++;
} else { 
this.activeGetRequestCount++;
}
this.activeRequestCount++;
return( this.activeRequestCount );
}
};
})( angular, InVision );
;
;
/*! image-canvas-service.js */ 
;
;
(function( ng, app ) {
"use strict";
app.service( "imageCanvasService", Service );
/** @ngInject */
function Service( serviceHelper ) {
var cachedColors = {};
function getImageColorAtCoodinates( imageUrl, coordinates, callback ) {
if ( imageUrl in cachedColors ) {
return( callback( cachedColors[ imageUrl ] ) );
}
var colors = [];
var image = new Image();
image.crossOrigin = "Anonymous";
image.onload = function() {
var canvas = document.createElement("canvas");
canvas.width = image.width;
canvas.height = image.height;
var ctx = canvas.getContext( "2d" );
ctx.drawImage( image, 0, 0 );
var imageData = ctx.getImageData( 0, 0, canvas.width, canvas.height );
for ( var i = 0 ; i < coordinates.length ; i++ ) {
var xCoord = coordinates[ i ].x;
var yCoord = coordinates[ i ].y;
var index = ( 4 * ( yCoord * imageData.width + xCoord ) );
var r = imageData.data[ index ];
var g = imageData.data[ index + 1 ];
var b = imageData.data[ index + 2 ];
var a = imageData.data[ index + 3 ];
colors.push( "rgba(" + r + "," + g + "," + b + "," + a + ")" );
}
callback( cachedColors[ imageUrl ] = colors );
imageUrl = coordinates = callback = colors = image = null;
$(canvas).remove();
};
image.src = imageUrl;
}
return({
getImageColorAtCoodinates: getImageColorAtCoodinates
});
}
})( angular, InVision );
;
;
/*! image-route-service.js */ 
;
;
(function( ng, app ) {
"use strict";
app.service( "imageRouteService", Service );
/** @ngInject */
function Service(  ) {
function getProjectMobileDeviceID( projMobileDeviceID ){
if( typeof projMobileDeviceID != "number" ){
projMobileDeviceID = 0;
}
return projMobileDeviceID;
}
function getThumbnailURL( screenID, screenVersion, projectMobileDeviceID ){
return ( "/thumbnails/" + screenID + "/" + screenVersion + "/" + getProjectMobileDeviceID( projectMobileDeviceID ) );
}
function getScreenURL( screenID, screenVersion, projectMobileDeviceID ){
return ( "/screens/" + screenID + "/" + screenVersion + "/" + getProjectMobileDeviceID( projectMobileDeviceID ) );
}
function getHomeScreenURL( homeScreenID, homeScreenVersion, projectMobileDeviceID ){
if( homeScreenID ){
return ( "/thumbnails/" + homeScreenID + "/" + homeScreenVersion + "/" + getProjectMobileDeviceID( projectMobileDeviceID ) );
} else {
return ( "/assets/apps/d/img/blank.png" );
}
}
return({
getScreenURL: getScreenURL,
getThumbnailURL: getThumbnailURL,
getHomeScreenURL: getHomeScreenURL
});
}
})( angular, InVision );
;
;
/*! jquery.js */ 
;
;
(function( ng, app ) {
"use strict";
app.factory( "$", Factory );
function Factory() {
return $;
}
})( angular, InVision );
;
;
/*! lodash.js */ 
;
;
(function( ng, app, _, undefined ) {
"use strict";
app.factory( "_", Factory );
/** @ngInject */
function Factory() {
_.anyWithProperty = function( collection, name, value ) {
var result = _.any(
collection,
function( item ) {
return( item[ name ] === value );
}
);
return( result );
};
_.capitalizeFirstLetter = function( value ) {
if ( ! value ) {
return( "" );
}
return( value.slice( 0, 1 ).toUpperCase() + value.slice( 1 ) );
};
_.containsWithProperty = function( collection, name, value ) {
return( !! this.findWithProperty( collection, name, value ) );
};
_.countWithProperty = function( collection, name, value ) {
var count = 0;
for ( var i = 0 ; i < collection.length ; i++ ) {
if ( collection[ i ][ name ] === value ) {
count++;
}
}
return( count );
};
_.extendExistingProperties = function( destination, source ) {
if ( ! ( destination && source ) ) {
return( destination );
}
var angularKeyPattern = new RegExp( "^\\$+", "i" );
for ( var key in source ) {
if ( 
source.hasOwnProperty( key ) && 
destination.hasOwnProperty( key ) &&
! angularKeyPattern.test( key ) &&
! _.isFunction( source[ key ] )
) {
destination[ key ] = source[ key ];
}
}
return( destination );
};
_.filterWithProperty = function( collection, name, value ) {
var filteredCollection = _.filter(
collection,
function( item ) {
return( item[ name ] === value );
}
);
return( filteredCollection );
};
_.findWithProperty = function( collection, name, value ) {
var result = _.find(
collection,
function( item ) {
return( item[ name ] === value );
}
);
return( result );
};
_.findWithPropertyAndReplace = function( collection, name, value, replacement, operator ) {
if ( ! collection || ( replacement === undefined ) ) {
return( collection );
}
operator = ( operator || ng.noop );
for ( var i = 0, length = collection.length ; i < length ; i++ ) {
var item = collection[ i ];
if ( item[ name ] === value ) {
collection[ i ] = ( operator( replacement, item ) || replacement );
return( collection );
}
}
collection.push( replacement );
return( collection );
};
_.indexOfWithProperty = function( collection, name, value ) {
for ( var i = 0 ; i < collection.length ; i++ ) {
if ( collection[ i ][ name ] === value ) {
return( i );
}
}
return( -1 );
};
_.isValidEmail = function( value ) {
var pattern = /^[^@]+@[^.]+(\.[^.]+)+$/i;
return( pattern.test( value ) );
};
_.notContainsProperty = function( collection, name, value ) {
var filteredCollection = this.filter(
collection,
function( item ) {
return( !_.contains(item[ name ].toLowerCase(), value.toLowerCase()) );
}
);
return( filteredCollection );
};
_.maxProperty = function( collection, name ) {
if ( ! collection.length ) {
return;
}
return(
_.max(
_.pluck( collection, name )
)
);
};
_.minProperty = function( collection, name ) {
return(
_.min(
_.pluck( collection, name )
)
);
};
_.normalizeMixedDataValue = function( value ) {
var padding = "000000000000000";
value = value.replace(
/(\d+)((\.\d+)+)?/g,
function( $0, integer, decimal, repeatDecimal ) {
if ( decimal !== repeatDecimal ) {
return(
padding.slice( integer.length ) +
integer +
decimal
);
}
decimal = ( decimal || ".0" );
return(
padding.slice( integer.length ) +
integer +
decimal +
padding.slice( decimal.length )
);
}
);
return( value );
};
_.rejectWithProperty = function( collection, name, value ) {
var filteredCollection = _.reject(
collection,
function( item ) {
return( item[ name ] === value );
}
);
return( filteredCollection );
};
_.setProperty = function( collection, name, value ) {
this.forEach(
collection,
function( item ) {
item[ name ] = value;
}
);
return( collection );
};
_.similar = function( collectionA, collectionB ) {
var deltaA = _.difference( collectionA, collectionB ).length;
var deltaB = _.difference( collectionB, collectionA ).length;
return( ( deltaA + deltaB ) === 0 );
};
_.sortOnProperty = function( collection, name, direction, caseInsensitive ) {
direction = ( direction || "asc" );
var sortIndicator = ( direction === "asc" ? -1 : 1 );
collection.sort(
function( a, b ) {
if ( caseInsensitive ) {
return( a[ name ].toLowerCase() < b[ name ].toLowerCase() ? sortIndicator : - sortIndicator );
} else {
return( a[ name ] < b[ name ] ? sortIndicator : -sortIndicator );
}
}
);
return( collection );
};
_.sortOnPropertyUsingNaturalOrder = function( collection, name, direction ) {
direction = ( direction || "asc" );
var sortIndicator = ( direction === "asc" ? -1 : 1 );
collection.sort(
function( a, b ) {
var aMixed = _.normalizeMixedDataValue( a.name.toLowerCase() );
var bMixed = _.normalizeMixedDataValue( b.name.toLowerCase() );
return( aMixed < bMixed ? sortIndicator : -sortIndicator );
}
);
return( collection );
};
_.sortOnPropertyUsingLowerCase = function( collection, name, direction ) {
direction = ( direction || "asc" );
var sortIndicator = ( direction === "asc" ? -1 : 1 );
collection.sort(
function( a, b ) {
var nameA = ( a[ name ] || "" ).toLowerCase();
var nameB = ( b[ name ] || "" ).toLowerCase();
if ( nameA < nameB ) {
return( sortIndicator );
} else if ( nameB < nameA ) {
return( -sortIndicator );
}
return( 0 );
}
);
return( collection );
};
_.sumProperty = function( collection, name ) {
var sum = 0;
for ( var i = 0 ; i < collection.length ; i++ ) {
sum += collection[ i ][ name ];
}
return( sum );
};
_.trim = function( value ) {
return(
value.replace( /^\s+|\s+$/g, "" )
);
};
_.withoutProperty = function( collection, name, value ) {
var filteredCollection = this.filter(
collection,
function( item ) {
return( item[ name ] !== value );
}
);
return( filteredCollection );
};
_.withoutPropertyRange = function( collection, name, valueRange ) {
var filteredCollection = this.filter(
collection,
function( item ) {
return( _.indexOf( valueRange, item[ name ] ) === -1 );
}
);
return( filteredCollection );
};
_.withProperty = function( collection, name, value ) {
var filteredCollection = this.filter(
collection,
function( item ) {
return( item[ name ] === value );
}
);
return( filteredCollection );
};
_.withPropertyRange = function( collection, name, valueRange ) {
var filteredCollection = this.filter(
collection,
function( item ) {
return( _.indexOf( valueRange, item[ name ] ) !== -1 );
}
);
return( filteredCollection );
};
return( _ );
}
})( angular, InVision, _ );
;
;
/*! modal-window-request.js */ 
;
;
(function( ng, app ) {
"use strict";
app.service( "modalWindowRequest", ModalWindowRequest );
/** @ngInject */
function ModalWindowRequest() {
function getData( index, defaultValue ) {
if ( arguments.length === 0 ) {
return( modalData );
} else if ( 
( index > modalData.length ) &&
( arguments.length == 2 )
) {
return( defaultValue );
} else {
return( modalData[ index ] );
}
}
function getType() {
return( modalType );
}
function isSuppressFade() {
return( suppressFade === true );
}
function setRequest( newModalType, newModalData, newSuppressFade ) {
modalType = newModalType;
modalData = newModalData;
suppressFade = ( newSuppressFade || false );
}
function setSuppressFade( newSuppressFade ) {
suppressFade = ( newSuppressFade || false );
}
function isSuppressClose() {
return( suppressClose === true );
}
function setSuppressClose( newSuppressClose ) {
suppressClose = ( newSuppressClose || false );
}
var modalType = "";
var modalData = [];
var suppressFade = false;
var suppressClose = false;
return({
getData: getData,
getType: getType,
isSuppressFade: isSuppressFade,
setRequest: setRequest,
setSuppressFade: setSuppressFade,
isSuppressClose: isSuppressClose,
setSuppressClose: setSuppressClose
});
}
})( angular, InVision );
;
;
/*! model-events.js */ 
;
;
(function( ng, app ) {
"use strict";
app.factory( "modelEvents", ModelEventsFactory );
/** @ngInject */
function ModelEventsFactory( PubSub ) {
return( new PubSub() );
}
})( angular, InVision );
;
;
/*! moment.js */ 
;
;
(function( ng, app, moment ) {
"use strict";
app.factory( "moment", Factory );
/** @ngInject */	
function Factory() {
return moment;
}
})( angular, InVision, moment );
;
;
/*! preloader.js */ 
;
;
angular.module('InVision')
.factory('preloader',
function($q, $rootScope) {
function Preloader(imageLocations) {
this.imageLocations = imageLocations;
this.imageCount = this.imageLocations.length;
this.loadCount = 0;
this.states = {
PENDING: 1,
LOADING: 2,
RESOLVED: 3,
REJECTED: 4
};
this.state = this.states.PENDING;
this.deferred = $q.defer();
this.promise = this.deferred.promise;
}
Preloader.preloadImages = function( imageLocations ) {
var preloader = new Preloader( imageLocations );
return preloader.load();
};
Preloader.prototype = {
constructor: Preloader,
isInitiated: function() {
return( this.state !== this.states.PENDING );
},
isRejected: function() {
return( this.state === this.states.REJECTED );
},
isResolved: function() {
return( this.state === this.states.RESOLVED );
},
load: function() {
if ( this.isInitiated() ) {
return( this.promise );
}
this.state = this.states.LOADING;
for ( var i = 0 ; i < this.imageCount ; i++ ) {
this.loadImageLocation( this.imageLocations[ i ] );
}
return( this.promise );
},
handleImageLoad: function handleImageLoad( imageLocation ) {
this.loadCount++;
if ( this.isRejected() ) {
return;
}
this.deferred.notify({
percent: Math.ceil( this.loadCount / this.imageCount * 100 ),
imageLocation: imageLocation
});
if ( this.loadCount === this.imageCount ) {
this.state = this.states.RESOLVED;
this.deferred.resolve( this.imageLocations );
}
},
loadImageLocation: function(imageLocation) {
var preloader = this,
image = new Image();
image.onload = function( event ) {
$rootScope.$apply(function() {
preloader.handleImageLoad(event.target.src);
preloader = null;
image = null;
event = null;
});
};
image.onerror = function( event ) {
preloader.deferred.reject();
};
image.src = imageLocation;
}
};
return Preloader;
});
;
;
/*! pusher.js */ 
;
;
(function( ng, app ) {
"use strict";
app.value( "Pusher", Pusher );
})( angular, InVision );
;
;
/*! render-context.js */ 
;
;
(function( ng, app ) {
"use strict";
app.value( "RenderContext", RenderContext );
/** @ngInject */
function RenderContext( requestContext, actionPrefix, paramNames ) {
this._requestContext = requestContext;
this._actionPrefix = actionPrefix;
this._paramNames = paramNames;
return( this );
}
RenderContext.prototype = {
getNextSection: function() {
return(
this._requestContext.getNextSection( this._actionPrefix )
);
},
isChangeLocal: function() {
return(
this._requestContext.startsWith( this._actionPrefix )
);
},
isChangeRelevant: function() {
if ( ! this._requestContext.startsWith( this._actionPrefix ) ) {
return( false );
}
if ( this._requestContext.hasActionChanged() ) {
return( true ) ;
}
return(
this._paramNames.length && 
this._requestContext.haveParamsChanged( this._paramNames )
);
}
};
})( angular, InVision );
;
;
/*! request-context.js */ 
;
;
(function( ng, app ) {
"use strict";
app.service( "requestContext", RequestContext );
/** @ngInject */
function RequestContext( RenderContext ) {
this.RenderContext = RenderContext;
this._action = "";
this._sections = [];
this._params = {};
this._previousAction = "";
this._previousParams = {};
return( this );
}
RequestContext.prototype = {
getAction: function() {
return( this._action );
},
getNextSection: function( prefix ) {
if ( ! this.startsWith( prefix ) ) {
return( null );
}
if ( prefix === "" ) {
return( this._sections[ 0 ] );
}
var depth = prefix.split( "." ).length;
if ( depth === this._sections.length ) {
return( null );
}
return( this._sections[ depth ] );
},
getParam: function( name ) {
return( this._params[ name ] || null );
},
getParams: function() {
return( this._params || null );
},
getParamAsInt: function( name, defaultValue ) {
var valueAsInt = parseInt( this.getParam( name ) );
if ( isNaN( valueAsInt ) ) {
return( defaultValue || 0 );
} else {
return( valueAsInt );
}
},
getRenderContext: function( requestActionLocation, paramNames ) {
requestActionLocation = (requestActionLocation || "");
paramNames = (paramNames || []);
if ( ! ng.isArray( paramNames ) ) {
paramNames = [ paramNames ];
}
return(
new this.RenderContext( this, requestActionLocation, paramNames )
);
},
hasActionChanged: function() {
return( this._action !== this._previousAction );
},
hasParamChanged: function( paramName, paramValue ) {
if ( ! ng.isUndefined( paramValue ) ) {
return( ! this.isParam( paramName, paramValue ) );
}
if (
!(paramName in this._previousParams) &&
(paramName in this._params)
) {
return( true );
} else if (
(paramName in this._previousParams) &&
!(paramName in this._params)
) {
return( true );
}
return( this._previousParams[ paramName ] !== this._params[ paramName ] );
},
haveParamsChanged: function( paramNames ) {
for ( var i = 0, length = paramNames.length ; i < length ; i++ ) {
if ( this.hasParamChanged( paramNames[ i ] ) ) {
return( true );
}
}
return( false );
},
isParam: function( paramName, paramValue ) {
if (
(paramName in this._params) &&
(this._params[ paramName ] == paramValue)
) {
return( true );
}
return( false );
},
setContext: function( action, routeParams ) {
this._previousAction = this._action;
this._previousParams = this._params;
this._action = action;
this._sections = action.split( "." );
this._params = ng.copy( routeParams );
},
startsWith: function( prefix ) {
if (
!prefix.length || 
(this._action === prefix) ||
(this._action.indexOf( prefix + "." ) === 0)
) {
return( true );
}
return( false );
}
};
})( angular, InVision );
;
;
/*! service-helper.js */ 
;
;
(function( ng, app ) {
"use strict";
app.service( "serviceHelper", ServiceHelper );
/** @ngInject */
function ServiceHelper( Deferred ) {
function executeRequest( options ) {
var resource = options.resource;
var name = options.name;
var parameters = ( options.parameters || {} );
var successCallback = ( options.successCallback || ng.noop );
var errorCallback = ( options.errorCallback || ng.noop );
var deferred = new Deferred();
if( window.location.protocol === "file:" ) {
deferred.resolve();
return deferred.promise;
}
var resourceResponse = resource[ name ]( 
parameters,
function( response ) {
successCallback( response );
deferred.resolve( response );
},
function( response ) {
errorCallback( response );
deferred.reject(
unwrapErrorMessage( response )
);
}
);
return( deferred.promise );
}
function unwrapErrorMessage( errorResponse ) {
try {
var response = ng.fromJson( errorResponse.data );
if ( ng.isString( response ) ) {
response = {
message: response,
code: -1
};
}
} catch ( error ) {
var response = {
message: errorResponse.data,
code: -1
};
}
return( response );
}
return({
executeRequest: executeRequest
});
}
})( angular, InVision );
;
;
/*! stack-trace-service.js */ 
;
;
(function( ng, app, printStackTrace ) {
"use strict";
app.factory( "stackTraceService", Factory );
function Factory() {
return({
print: printStackTrace
});
}
})( angular, InVision, printStackTrace );
;
;
/*! validation-service.js */ 
;
;
(function( ng, app ) {
"use strict";
app.service( "validationService", ValidationService );
/** @ngInject */
function ValidationService() {
this.errorCodes = [
{
code: 400,
message: "Invalid request for this resource."
},
{
code: 400,
message: "Invalid request body content."
},
{
code: 401,
message: "The credentials you provided are not valid."
},
{
code: 403,
message: "Forbidden."
},
{
code: 404,
message: "The requested resource could not be found."
},
{
code: 405,
message: "The requested resource does not support the given method."
},
{
code: 406,
message: "The screen you were attempting to view was not found."
},
{
code: 407,
message: "The project you were attempting to view was not found."
},
{
code: 1100,
message: "Validation failure"
},
{
code: 1101,
message: "Validation failure: missing field"
},
{
code: 1102,
message: "Validation failure: invalid field"
},
{
code: 1103,
message: "Validation failure: already exists"
},
{
code: 5001,
message: "Sorry, you aren't a collaborator on the project you tried to access. Please inform the project owner."
},
{
code: 5002,
message: "Sorry, you aren't a collaborator on the project you tried to access. Would you like to Join this project?"
},
{
code: 500,
message: "Unexpected error"
}
];
return( this );
}
ValidationService.prototype = {
isAlreadyExists: function( error ) {
return( error.code === 1103 );
},
isBadRequest: function( error ) {
return( error.code === 400 );
},
isForbidden: function( error ) {
return( error.code === 403 );
},
isInvalid: function( error ) {
return( error.code === 1100 );
},
isInvalidField: function( error ) {
return( error.code === 1102 );
},
isMissingField: function( error ) {
return( error.code === 1101 );
},
isNotFound: function( error ) {
return( error.code === 404 );
},
isScreenNotFound: function( error ) {
return( error.code === 406 );
},
isProjectNotFound: function( error ) {
return( error.code === 407 );
},
isOverQuota: function( error ) {
return( 
( error.code === 3000 ) ||
( error.code === 3001 )
);
},
isMissingProjectPermission: function( error ) {
return( error.code === 5001 );
},
canJoinProject: function( error ) {
return( error.code === 5002 );
}
};
})( angular, InVision );
;
;
/*! pub-sub.js */ 
;
;
(function( ng, app ) {
"use strict";
app.factory( "PubSub", PubSubFactory );
/** @ngInject */
function PubSubFactory( _ ) {
var PubSub = function() {
function off( eventType, callback ) {
var eventConfig = parseEventConfig( eventType );
if ( ! subscriptions.hasOwnProperty( eventConfig.type ) ) {
return;
}
subscriptions[ eventConfig.type ] = _.reject(
subscriptions[ eventConfig.type ],
function( subscription ) {
if ( callback ) {
return(
( subscription.namespace === eventConfig.namespace ) &&
( subscription.callback === callback )
);
} else {
return( subscription.namespace === eventConfig.namespace );
} 
}
);
}
function on( eventType, callback, context ) {
if ( _.isArray( eventType ) ) {
_.forEach(
eventType,
function( eventType ) {
on( eventType, callback, context );
}
);
return;
}
var eventConfig = parseEventConfig( eventType );
if ( ! subscriptions.hasOwnProperty( eventConfig.type ) ) {
subscriptions[ eventConfig.type ] = [];
}
subscriptions[ eventConfig.type ].push({
namespace: eventConfig.namespace,
callback: callback,
context: ( context || {} )
});
}
function parseEventConfig( eventType ) {
var parts = eventType.split( "." );
return({
type: parts.shift(),
namespace: ( parts.join( "," ) || null )
});
}
function trigger( eventType, eventData ) {
var eventConfig = parseEventConfig( eventType );
if ( eventConfig.type === "*" ) {
throw( new Error( "IllegalEventType" ) );
}
if ( ! subscriptions.hasOwnProperty( eventConfig.type ) ) {
return;
}
var eventArguments = arguments;
eventArguments[ 0 ] = {
type: eventConfig.type,
namespace: eventConfig.namespace
};
_.forEach(
subscriptions[ eventConfig.type ],
function( subscription ) {
if ( 
( eventConfig.namespace === null ) ||
( eventConfig.namespace === subscription.namespace )
) {
subscription.callback.apply( subscription.context, eventArguments );
}
}
);
_.forEach(
subscriptions[ "*" ],
function( subscription ) {
subscription.callback.apply( subscription.context, eventArguments );
}
);
}
var subscriptions = {};
subscriptions[ "*" ] = [];
return({
off: off,
on: on,
trigger: trigger
});
};
return( PubSub );
}
})( angular, InVision );
;
;
/*! app-controller.js */ 
;
;
(function( ng, app ){
"use strict";
app.controller( "AppController", Controller );
/** @ngInject */
function Controller( $scope, $document, $route, $routeParams, $location, $window, $timeout, config, requestContext, sessionService, shareService, projectService, screenService, Deferred, projectViewingService, _, modelEvents, ipInfoService, hotspotService, userPreferenceService, beforeUnloadService ) {
function addScreenToHistory( screenID ) {
if (
screenHistory.length &&
( screenHistory[ screenHistory.length - 1 ] === screenID )
) {
return;
}
screenHistory.push( screenID );
}
function getBrowserCompatibliity() {
var userAgent = $window.navigator.userAgent.toLowerCase();
var isIE6 = ( $window.ieVersion === 6 );
var isIE7 = ( $window.ieVersion === 7 );
var isCompatible = ! ( isIE6 || isIE7 );
var reason = null;
if ( ! isCompatible ) {
reason = "version";
if ( userAgent.search( "trident/(4|5)\.0" ) !== -1 ) {
reason = "mode";
}
}
return({
isCompatible: isCompatible,
isNotCompatible: ! isCompatible,
reason: reason
});
}
function getCurrentScreenID() {
var screenID = requestContext.getParamAsInt( "screenID", $scope.defaultScreenIDForShare );
return( screenID );
}
function getPreviousScreenFromHistory() {
if ( screenHistory.length < 2 ) {
return( null );
}
var currentScreenID = screenHistory.pop();
var previousScreenID = screenHistory.pop();
return( previousScreenID );
}
function getXsrfTokenCookie() {
var cookieString = ( $document.prop( "cookie" ) || "" );
var matches = cookieString.match( /\bXSRF-TOKEN=([^;]+)/i );
return( ( matches && matches[ 1 ] ) || "" );
}
function isRouteRedirect( route ) {
return( ! route.current.action );
}
function loadCountryCode() {
var geolocationInfo = ipInfoService.getGeolocationData();
if( geolocationInfo && geolocationInfo.country && geolocationInfo.country !== "" ) {
$scope.share.countryCode = geolocationInfo.country.toLowerCase();
} else {
$scope.share.countryCode = "us";
}
}
function shouldShowSMSTooltip() {
return;
var hasSeen = $.cookie("hasSeenSMSTooltip");
hasSeen = _.isUndefined( hasSeen ) ? false : hasSeen;
if ( hasSeen === false ) {
$scope.isShowingSmsForm = true;
$.cookie("hasSeenSMSTooltip", true);
}
}
$scope.clearBodyStyle = function() {
$scope.headerStyle = {};
$scope.bodyStyle = {};
};
$scope.closeBrowse = function() {
$scope.isBrowseOpen = false;
};
$scope.closeBrowserCompatibilityAlert = function() {
$scope.browserCompatibility.isCompatible = true;
$scope.browserCompatibility.isNotCompatible = false;
};
$scope.closeLoading = function() {
$scope.isLoadingOpen = false;
$scope.$broadcast( "loadingSequenceCompleted" );
};
$scope.getPercentOfScreensLoaded = function() {
return( percentOfScreensLoaded );
};
$scope.getScreenHistory = function(){
return screenHistory;
}
$scope.navigateToPreviousScreen = function() {
var previousScreenID = getPreviousScreenFromHistory();
if ( previousScreenID ) {
$location.url( "/screens/" + previousScreenID );
$scope.$emit("liveshare.navigateToPreviousScreen", previousScreenID );
}
};
$scope.navigateToScreenComments = function() {
if ( ! share.isCommentingAllowed ) {
return;
}
if ( $scope.isLiveShare ) {
$scope.$emit("liveshare_subscriber.pause", true);
}
var screenID = getCurrentScreenID();
$location.url( "/screens/" + screenID + "/comments" );
};
$scope.navigateToScreenPreview = function() {
var screenID = getCurrentScreenID();
if ( $scope.isLiveShare ) {
$scope.$emit("liveshare_subscriber.pause", false);
}
$location.url( "/screens/" + screenID );
};
$scope.navigateToTargetScreen = function( screenID, maintainScrollPosition ) {
$location.url( "/screens/" + screenID );
$location.search( "maintainScrollPosition", ( maintainScrollPosition ? "true" : "false" ) );
if ( $scope.project.isMobile && ! maintainScrollPosition ) {
$scope.scrollMobileViewport( 0, 0 );
}
$scope.closeBrowse();
$scope.$emit("liveshare.navigateToTargetScreen", screenID, maintainScrollPosition );
};
$scope.navigateToLocationOnScreen = function( screenID, scrollOffset, isSmoothScroll ){
$location.url( "/screens/" + screenID );
var animateTime = 0;
if ( isSmoothScroll ) {
animateTime = 500;
}
var screen = screenService.getScreenByID( screenID);
scrollOffset -= $scope.screen.fixedHeaderHeight;
if ( $scope.project.isMobile ){
scrollOffset = scrollOffset * ( $scope.deviceTemplate.viewportWidth/screen.width);
$scope.scrollMobileViewport( scrollOffset, animateTime );
}else{
scrollOffset = scrollOffset * $scope.getScreenDisplayScale( screen );
$( "body, html" ).animate({
scrollTop: scrollOffset
}, animateTime);
}
$scope.$emit("liveshare.navigateToLocationOnScreen", screenID, scrollOffset, isSmoothScroll );
};
$scope.goToShareStart = function(){
var shareStart = config.share.screenID;
if( shareStart == 0 ){
shareStart = config.screens[0].id;
}
$scope.$broadcast("relaunchMobileApp", config.share.screenID );
$scope.navigateToTargetScreen( shareStart , false );
}
$scope.toggleSmsShareForm = function(){
$scope.isShowingSmsForm = !$scope.isShowingSmsForm;
}
$scope.sendShareSms = function(){
$scope.sms.phoneNumber =$scope.sms.phoneNumber.replace( /[^\d+]+/g, "" );
if ( $scope.sms.phoneNumber.length < 10 ) {
$scope.sms.message = "Invalid phone number.";
return;
}else if ( $scope.sms.phoneNumber.length == 10){
$scope.sms.message = "Please add country code.";
return;
}
$scope.sms.messageSent = false;
$scope.sms.message = "";
Deferred.handlePromise(
shareService.sendSMS( share.id, $scope.sms.phoneNumber),
function( response ) {
$scope.sms.messageSent = true;
if ( $window.localStorage ) {
localStorage.setItem("smsPhoneNumber", $scope.sms.phoneNumber );
}
$timeout(function(){
$scope.sms.messageSent = false;
$scope.sms.message = "";
$scope.isShowingSmsForm = false;
}, 15000);
},
function( response ) {
$scope.sms.message = "Error: Unable to send SMS.";
}
);
}
$scope.openBrowse = function() {
if ( ! share.isLoadAllScreens ) {
return;
}
$scope.isBrowseOpen = true;
};
$scope.openModalWindow = function( type ) {
var modalData = _.toArray( arguments );
var modalType = modalData.shift();
$scope.$broadcast( "openModalWindow", modalType, modalData );
};
$scope.setBodyClass = function( className ) {
if( $scope.share.isEmbed == true ){
$scope.bodyClass = "embed";
return;
}
var bodyClass = $scope.subview;
if ( ! $scope.isLiveShare && $scope.project.isSnap ) {
bodyClass += " share-lite";
};
if( $scope.screen.zoomScrollBehavior === screenService.zoomScrollBehaviors.DISABLE_HORIZONTAL_SCROLLING ){
bodyClass += " disableHorizontalScrolling";
}
$scope.bodyClass = ( bodyClass + " " + className );
};
$scope.setHeaderStyle = function( style ) {
style['background-color'] = null;
$scope.headerStyle = $scope.share.isEmbed ? '' : style;
};
$scope.setBodyStyle = function( style ) {
$scope.bodyStyle = $scope.share.isEmbed ? '' : style;
};
$scope.setPercentOfScreensLoaded = function( percent ) {
if ( percentOfScreensLoaded !== 100 && ! $scope.project.isSnap ) {
$scope.setWindowTitle( percent + "% Loaded" );
}
percentOfScreensLoaded = percent;
};
$scope.setWindowTitle = function( title ) {
$scope.windowTitle = title;
if ( $scope.isLiveShare ) {
$scope.$emit("liveshare.windowTitle", title);
}
};
$scope.toggleBrowse = function() {
$scope.isBrowseOpen = ! $scope.isBrowseOpen;
};
$scope.appliedClass = function(){
if( $scope.subview == "comments"){
return "desktop";
}else{
if( $scope.project.mobileStatusbarIsOpaque && $scope.project.mobileStatusbarIsVisible){
var statusbarClass = "opaque-status-bar";
}else if ( !$scope.project.mobileStatusbarIsOpaque || !$scope.project.mobileStatusbarIsVisible ){
var statusbarClass = "transparent-status-bar";
}
var classNames = $scope.deviceTemplate.className + " " + statusbarClass;
if ($scope.deviceTemplate.mobileSkinColor == 'white' ){
classNames = classNames + " white";
}
if( $scope.project.mobileStatusbarIsVisible ){
classNames = classNames + " statusbarIsVisible";
}
return classNames ;
}
};
$scope.applyScreenDisplayScale = function(){
$scope.screen.displayScale = $scope.getScreenDisplayScale( $scope.screen );
};
$scope.getScreenDisplayScale = function( screen ){
if( $scope.project.isMobile ){
var displayScale = ( $scope.deviceTemplate.viewportWidth / screen.width);
}else if ( !$scope.project.isMobile && screen.clientFilename.indexOf("@2x") > 0 ){
var displayScale = 0.5;
} else if ( ! $scope.project.isMobile && screen.clientFilename.indexOf("@print") > 0 ) {
var displayScale = 0.3333;
} else{
var displayScale = 1;
}
if ( !$scope.project.isMobile &&  screen.zoomScrollBehavior === screenService.zoomScrollBehaviors.ZOOM_OUT_TO_BROWSER_WIDTH){
if( screen.width * displayScale > $(window).width() ){
var displayScale =  $(window).width() / screen.width;
}
}
return displayScale;
};
$scope.getReverseDisplayScale = function( screen ){
if( $scope.project.isMobile ){
var displayScale = ( screen.width / $scope.deviceTemplate.viewportWidth);
}else if ( !$scope.project.isMobile && screen.clientFilename.indexOf("@2x") > 0 ){
var displayScale = 2;
} else if ( ! $scope.project.isMobile && screen.clientFilename.indexOf("@print") > 0 ) {
var displayScale = 3;
} else{
var displayScale = 1;
}
if ( !$scope.project.isMobile && screen.zoomScrollBehavior === screenService.zoomScrollBehaviors.ZOOM_OUT_TO_BROWSER_WIDTH ){
if( screen.width * displayScale > $(window).width() ){
var displayScale =  screen.width / $(window).width();
}
}
return displayScale;
};
$scope.getFixedDesktopHeaderHeight = function(){
var height = $scope.screen.fixedHeaderHeight * $scope.screen.displayScale;
if( $scope.screen.backgroundFrame == true ){
height += 40; // add 40px for the spacing at the top of the frame.
}
return height;
};
$scope.setMobileLoadingForGifIsReady = function( value ){
$scope.mobileLoadingForGifIsReady = value;
};
$scope.setDesktopLoadingForGifIsReady = function( value ){
$scope.desktopLoadingForGifIsReady = value;
};
$scope.setIsTransitioning = function( value ){
$scope.isTransitioning = value;
};
$scope.setTransitionData = function( data ){
$scope.transitionData = data;
};
$scope.setScreen = function( screen ){
if( screen.displayScale == undefined ){
screen.displayScale = $scope.getScreenDisplayScale( screen );
}
if( !$scope.project.isMobile ){
$scope.applyDesktopWrapperOffset( screen );
}
$scope.screen = screen;
};
$scope.applyDesktopWrapperOffset = function( screen ){
var scaledScreenWidth = screen.width * screen.displayScale;
var windowWidth = $(window).width();
if( screen.zoomScrollBehavior == screenService.zoomScrollBehaviors.DISABLE_HORIZONTAL_SCROLLING &&
scaledScreenWidth > windowWidth && $scope.subview == "preview" ){
if ( screen.alignment === "left" ) {
$scope.desktopWrapperOffset = 0;
} else if ( screen.alignment === "right" ) {
$scope.desktopWrapperOffset = ( scaledScreenWidth - windowWidth ) * -1;
} else {
$scope.desktopWrapperOffset = ( ( scaledScreenWidth - windowWidth ) / 2 ) * -1;
}
}else{
$scope.desktopWrapperOffset = 0;
}
};
$scope.updateShareConfig = function(){
var shareID = $scope.share.id;
Deferred.handlePromise(
shareService.getShareConfig( shareID ),
function( response ) {
config.project = response.project;
config.screens = response.screens;
config.metaScreens = response.metaScreens;
config.hotspots = response.hotspots;
config.conversations = response.conversations;
config.comments = response.comments;
config.commentSketches = response.commentsketches;
config.dividers = response.dividers;
config.members = response.members;
config.affiliates = response.affiliates;
$scope.$broadcast( "configUpdated.share", config );
},
function( response ) {
}
);
};
$scope.updateShareUsers = function( shareUsers ){
config.members = shareUsers.members;
config.affiliates = shareUsers.affiliates;
}
$scope.updateDeviceTemplate = function(){
$scope.deviceTemplate = _.withProperty( $scope.deviceTemplates, "mobileDeviceID", config.project.mobileDeviceID )[0];
}
$scope.openScreenAsOverlay = function( screen ) {
screen.displayScale = $scope.getScreenDisplayScale( screen );
$scope.overlayImage = screen.imageUrl;
$scope.overlayHotspots = hotspotService.getHotspotsByScreenID( screen.id );
$scope.overlayScreen = screen;
};
$scope.hideOverlay = function( event ) {
if ( ! _.isUndefined(event) ){
var toElem = event.relatedTarget || event.toElement;
if( $(toElem).hasClass('hotspot') ){
return; //cancel the hide
}
}
if ( $scope.hasOverlay() ) {
$scope.$emit("liveshare.hideOverlay", $scope.screenID );
}
$scope.overlayImage = "";
$scope.overlayScreen = {};
$scope.overlayHotspots = {};
};
$scope.hasOverlay = function() {
return $scope.overlayImage.length > 0 ? true : false;
};
$scope.setHasSeenShareWalkThrough = function( val ){
$scope.hasSeenShareWalkThrough = val;
};
$scope.getHasSeenShareWalkThroughUserPreferenceID = function(){
if( window.location.protocol === "file:" ){
$scope.setHasSeenShareWalkThrough( true );
return;
}
var getByName = userPreferenceService.getPreferenceTypeByName("hasSeenShareWalkThrough", false, "boolean");
getByName.then(function( response1 ) {
$scope.hasSeenShareWalkThroughUserPreferenceID = response1.data.id;
var getHasSeenShareWalkThroughValue = userPreferenceService.getUserPreferenceById( $scope.hasSeenShareWalkThroughUserPreferenceID );
getHasSeenShareWalkThroughValue.then(function( response2 ) {
$scope.setHasSeenShareWalkThrough( response2.data.value === "true" );
});
});
};
var renderContext = requestContext.getRenderContext( "", "screenID" );
var percentOfScreensLoaded = 0;
var screenHistory = [];
var share = shareService.getShare();
$scope.xsrfToken = getXsrfTokenCookie();
$scope.windowTitle = "InVision Share";
$scope.bodyClass = "";
$scope.subview = null;
$scope.isLoadingOpen = true;
$scope.isBrowseOpen = false;
$scope.shouldShowPoweredBy = config.shouldShowPoweredBy;
$scope.isModalOpen = false;
$scope.mobileLoadingForGifIsReady = config.project.isMobile ? false : true;
$scope.desktopLoadingForGifIsReady = ! config.project.isMobile ? false : true;
$scope.enterpriseConfig = config.companyInfo;
if ( shareService.getShare().screenID == 0 ) {
$scope.defaultScreenIDForShare = screenService.getScreens()[0].id;
} else {
$scope.defaultScreenIDForShare = shareService.getShare().screenID;
}
$scope.project= config.project;
$scope.deviceTemplates = config.mobileDevices;
$scope.share = shareService.getShare();
$scope.deviceTemplate = _.withProperty( $scope.deviceTemplates, "mobileDeviceID", config.project.mobileDeviceID )[0];
$scope.appIcon = screenService.getAppIcon();
$scope.loadingScreen = screenService.getLoadingScreen();
$scope.screenID = $scope.defaultScreenIDForShare;
$scope.screen = screenService.getScreenByID( $scope.screenID );
$scope.setScreen( $scope.screen );
$scope.desktopWrapperOffset = 0;
$scope.applyScreenDisplayScale();
$scope.overlayScreen = {};
$scope.overlayImage = "";
$scope.overlayHotspots = {};
$scope.isTransitioning = false;
$scope.transitionData = {};
$scope.isShowingSmsForm = false;
$scope.sms = {};
$scope.sms.phoneNumber = "";
$scope.sms.messageSent = false;
$scope.sms.message = "";
if ( $window.localStorage && localStorage.getItem('smsPhoneNumber') ) {
$scope.sms.phoneNumber = localStorage.getItem("smsPhoneNumber");
}
$scope.branding = config.branding;
$scope.browserCompatibility = getBrowserCompatibliity();
$scope.hasSeenShareWalkThrough = false;
$scope.hasSeenShareWalkThroughUserPreferenceID = 0;
$scope.getHasSeenShareWalkThroughUserPreferenceID();
$scope.shareUser = config.user;
$scope.$on(
"requestContextChanged",
function() {
if ( ! renderContext.isChangeRelevant() ) {
return;
}
$scope.subview = renderContext.getNextSection();
$scope.setBodyClass( "" );
if ( $scope.isLiveShare && $scope.subview == "preview" ) {
$scope.$emit("liveshare_subscriber.pause", false);
}
addScreenToHistory(
requestContext.getParamAsInt( "screenID", $scope.defaultScreenIDForShare )
);
$scope.closeBrowse();
if( $scope.screenID != getCurrentScreenID() ){
$scope.screenID = getCurrentScreenID();
if ( !$scope.isLiveShare ) {
projectViewingService.incrementScreenCount( $scope.share.id );
}
}
}
);
$scope.$on(
"$routeChangeSuccess",
function( event, currentRoute, previousRoute ) {
if ( isRouteRedirect( $route ) ) {
return;
}
requestContext.setContext( $route.current.action, $routeParams );
if (
( renderContext.getNextSection() === "comments" ) &&
! share.isCommentingAllowed
) {
return(
$location.path( "/" )
);
}
$scope.$broadcast( "requestContextChanged", requestContext );
}
);
$scope.$on("modal.isWindowOpen", function( event, isOpen ) {
$scope.isModalOpen = isOpen;
});
$scope.$on("liveshare_subscriber.navigateToPreviousScreen",function( event ) {
$scope.$apply(function() {
$scope.navigateToPreviousScreen();
});
});
$scope.$on("liveshare_subscriber.navigateToTargetScreen", function( event, screenID, maintainScrollPosition ) {
$scope.$apply(function() {
$scope.navigateToTargetScreen( screenID, maintainScrollPosition );
});
} );
$scope.$on("liveshare_subscriber.navigateToLocationOnScreen", function( event, screenID, scrollOffset, isSmoothScroll ) {
$scope.$apply(function() {
$scope.navigateToLocationOnScreen( screenID, scrollOffset, isSmoothScroll );
});
} );
$scope.$watch("isLoadingOpen", function( newVal, oldVal ) {
if ( !newVal && newVal !== oldVal ) {
$scope.$emit("liveshare.currentscreen", $scope.screenID );
}
});
$scope.$watch("screenID", function( newVal, oldVal ) {
if ( newVal !== oldVal ) {
$scope.$emit("liveshare.currentscreen", $scope.screenID );
}
});
$scope.$watch("screen", function( newVal, oldVal ){
if ( newVal !== oldVal ) {
$scope.applyScreenDisplayScale();
}
});
modelEvents.on(
"projectUpdated.share",
function( event, project ) {
if( project.id == config.project.id ){
$scope.updateShareConfig();
}
}
);
modelEvents.on(
"screenUploaded.share",
function( event, screen ) {
if( screen.projectID == config.project.id ){
$scope.updateShareConfig();
}
}
);
modelEvents.on(
"screenConfigUpdated.share",
function( event, screen ) {
if( screen.projectID == config.project.id ){
$scope.updateShareConfig();
}
}
);
modelEvents.on(
"screenDeleted.share",
function( event, screenID, projectID ) {
if( projectID == config.project.id ){
$scope.updateShareConfig();
}
}
);
modelEvents.on(
"commentAdded.share",
function( event, commentID, conversationID, projectID ) {
if( projectID == config.project.id ){
$scope.updateShareConfig();
}
}
);
modelEvents.on(
"commentUpdated.share",
function( event, commentID, conversationID, projectID ) {
if( projectID == config.project.id ){
$scope.updateShareConfig();
}
}
);
modelEvents.on(
"commentDeleted.share",
function( event, commentID, conversationID, projectID ) {
if( projectID == config.project.id ){
$scope.updateShareConfig();
}
}
);
modelEvents.on(
"conversationUpdated.share",
function( event, conversationID, projectID) {
if( projectID == config.project.id ){
$scope.updateShareConfig();
}
}
);
modelEvents.on(
"hotspotCreated.share",
function( event, hotspotID, projectID ){
if( projectID == config.project.id ){
$scope.updateShareConfig();
}
}
);
modelEvents.on(
"hotspotUpdated.share",
function( event, hotspotID, projectID ){
if( projectID == config.project.id ){
$scope.updateShareConfig();
}
}
);
modelEvents.on(
"hotspotDeleted.share",
function( event, hotspotID, projectID ){
if( projectID == config.project.id ){
$scope.updateShareConfig();
}
}
);
$scope.$on(
"configUpdated.share",
function( localConfig ) {
$scope.project = config.project;
}
);
$(window).on("resize.sharePreview", function windowResize(){
$scope.applyScreenDisplayScale();
if( !$scope.project.isMobile ){
$scope.applyDesktopWrapperOffset( $scope.screen );
}
$scope.$apply();
});
beforeUnloadService.push(
this,
function() {
if ( !$scope.isLiveShare ) {
projectViewingService.setEndedAt( $scope.share.id );
}
}
);
shouldShowSMSTooltip();
$timeout(function() {
if ( $window.analytics ) {
analytics.track('Share viewed via desktop');
}
}, 1000);
if ( $scope.project.isMobile ) {
loadCountryCode();
}
}
})( angular, InVision );
;
;
/*! asset-controller.js */ 
;
;
(function( ng, app ){
"use strict";
app.controller( "asset.AssetController", Controller );
/** @ngInject */
function Controller( $scope, $location, config, _ ){
$scope.toggleLinkModal = function() {
$scope.isShowingLinkModal = !$scope.isShowingLinkModal;
};
$scope.isShowingLinkModal = _.isEmpty(config.referrer) ? false : true;
}
})( angular, InVision );
;
;
/*! browse-controller.js */ 
;
;
(function( ng, app ){
"use strict";
app.controller( "browse.BrowseController", Controller );
/** @ngInject */
function Controller( $scope, requestContext, shareService, screenService, sessionService, dateHelper, _ ){
function augmentScreens( screens ) {
for ( var i = 0 ; i < screens.length ; i++ ) {
var screen = screens[ i ];
screen.updatedAtDateLabel = (
dateHelper.formatDate( screen.updatedAt, "mmm d" ) + " at " +
dateHelper.formatTime( screen.updatedAt, "h:mm tt" )
);
}
return( screens );
}
function getScreensInSection( object ) {
if( object.type !== "divider" ) {
return [];
}
var screensInSection = [];
var thisPosition = _.indexOfWithProperty( $scope.displayObjects, "dividerID", object.dividerID );
var objects = $scope.displayObjects.slice( thisPosition + 1 );
var nextDividerPosition = _.indexOfWithProperty( objects, "type", "divider" );
if( nextDividerPosition >= 0 ) {
screensInSection = objects.slice( 0, Math.max( 0, nextDividerPosition ) );
} else {
screensInSection = objects;
}
screensInSection = _.withProperty( screensInSection, "type", "screenObj" );
return( screensInSection );
}
function sortDividers( dividers ) {
return dividers.sort(function (x, y) {
var n = x.position - y.position;
if (n !== 0) {
return n;
}
return x.sort - y.sort;
});
}
$scope.applyScreenNavigation = function( screen ) {
if ( $scope.isLiveShare ) {
$scope.$emit("liveshare.keyboardNavUsed");
}
$scope.navigateToTargetScreen( screen.id );
};
$scope.showSubview = function( subview ) {
$scope.subview = subview;
sessionService.set( "browse.BrowseController.defaultSubview", subview );
};
$scope.mergeScreensAndDividersForDisplay = function(){
var displayObjectsTemp = [];
for( var s = 0; s < $scope.screens.length; s++ ){
var dividers = _.filter( $scope.dividers , function(divider) {
return divider.position  == s;
});
if( dividers.length ){
for( var d = 0; d < dividers.length; d++){
displayObjectsTemp.push( dividers[d] );
}
}
var screenObj = $scope.screens[s];
screenObj.type = "screenObj";
displayObjectsTemp.push( screenObj );
}
var dividers = _.filter( $scope.dividers , function(divider) {
return divider.position  >= $scope.screens.length;
});
if( dividers ){
for (var d = 0; d < dividers.length; d++){
displayObjectsTemp.push( dividers[d] );
}
}
if ( 2 === $scope.project.sortTypeID ) {
displayObjectsTemp = _.sortOnPropertyUsingNaturalOrder(displayObjectsTemp, "name")
}
$scope.displayObjects = displayObjectsTemp;
}
$scope.applyDividerScreenCounts = function(){
angular.forEach(
$scope.displayObjects,
function( displayObject ){
if( displayObject.type === "divider"){
var objectsInSection = getScreensInSection( displayObject );
var screenCount = 0;
angular.forEach( objectsInSection, function( object ){
if( object.type === "screenObj"){
screenCount++;
}
});
displayObject.screenCount = screenCount;
}
}
);
};
$scope.isTabletPortrait = $scope.deviceTemplate.deviceType === "tablet" && $scope.deviceTemplate.orientation === "portrait";
$scope.screenID = requestContext.getParamAsInt( "screenID", $scope.defaultScreenIDForShare );
$scope.screens = augmentScreens( screenService.getScreens() );
$scope.dividers = sortDividers( screenService.getDividers() );
$scope.selectedScreen = _.findWithProperty( $scope.screens, "id", $scope.screenID );
$scope.subview = sessionService.get( "browse.BrowseController.defaultSubview", "thumbnails" );
$scope.excludeComments = ! shareService.getShare().isCommentingAllowed;
$scope.displayObjects = [];
$scope.mergeScreensAndDividersForDisplay();
$scope.applyDividerScreenCounts();
}
})( angular, InVision );
;
;
/*! catchup-toolbar-controller.js */ 
;
;
(function( ng, app ){
"use strict";
app.controller( "comments.CatchupToolbarController", Controller );
/** @ngInject */
function Controller( $scope, $location, requestContext, Deferred, screenService, conversationService, commentService, modelEvents, _ ){
}
})( angular, InVision );
;
;
/*! comments-controller.js */ 
;
;
(function( ng, app ){
"use strict";
app.controller( "comments.CommentsController", Controller );
/** @ngInject */
function Controller( $scope, $sce, requestContext, screenService, conversationService, commentService, sessionService, config, _, $location ){
function applyRemoteData( screen, conversations ) {
$scope.setScreen( screen );
$scope.applyScreenDisplayScale();
$scope.setWindowTitle( screen.name + " - Comments" );
$scope.conversations = conversations;
applyFilters();
updateUnreadConversations();
if ( $scope.unreadConversations.length ){
$scope.showUnreadComments = true;
}
}
function loadRemoteData() {
if ( !$scope.isPresentation ) { // default behavior
var screen = screenService.getScreenByID( $scope.screenID );
} else { // presentations
var slide = $scope.getCurrentSlide();
var screen = screenService.getScreenByID( slide.id );
screen._id = screen.id;
screen.id = screen.screenID;
}
if ( ! screen ) {
return;
}
var conversations = conversationService.getConversationsByScreenID( screen.id );
conversations = markConversationsAsUnread( conversations );
applyRemoteData( screen, conversations );
}
function markConversationsAsUnread( conversations ){
for ( var i = 0 ; i < conversations.length ; i++ ) {
var comments =  commentService.getCommentsByConversationID( conversations[ i ].id );
conversations[ i ].isUnread =  !!( _.withProperty( comments, "isUnread", true).length );
}
return conversations;
}
function navigateToComments() {
$location.path( "/screens/" + $scope.screenID + "/comments" );
}
function applyFilters() {
var conversations = $scope.conversations;
updateFilterCounts();
showConversations( conversations );
applyShowCompletedFilter( conversations );
applyTypeFilter( conversations );
showConversationsNotAffectedByFiltering( conversations );
}
function applyShowCompletedFilter( conversations ) {
if ( ! $scope.filters.showCompleted.value ) {
hideConversations( 
_.withProperty( conversations, "isComplete", true )
);
}
}
function applyTypeFilter( conversations ) {
if ( $scope.filters.type.value === "comments" ) {
hideConversations(
_.withProperty( conversations, "isForDevelopment", true )
);
} else if ( $scope.filters.type.value === "dev-notes" ) {
hideConversations(
_.withProperty( conversations, "isForDevelopment", false )
);
}
}
function showConversations( conversations ) {
_.setProperty( conversations, "isShown", true );
}
function hideConversations( conversations ) {
_.setProperty( conversations, "isShown", false );
}
function showConversationsNotAffectedByFiltering( conversations ) {
showConversations(
_.withPropertyRange( $scope.conversations, "id", conversationIDsNotAffectedByFiltering )
);
}
function clearExcludedConversationIDs() {
conversationIDsNotAffectedByFiltering = [];
}
function excludeConversationIDFromFiltering( id ) {
conversationIDsNotAffectedByFiltering.push( id );
showConversationsNotAffectedByFiltering( $scope.conversations );
}
$scope.startSketchBuilder = function(){
$scope.isShowingSketchBuilder = true;
$scope.isBottomBarShown = false;
$scope.$emit("isShowingSketchBuilder", true);
};
$scope.hideSketchBuilder = function(){
$scope.isShowingSketchBuilder = false;
$scope.isBottomBarShown = true;
$scope.$emit("isShowingSketchBuilder", false);
};
$scope.clearCommentSketches = function(){
$scope.tempSketches = [];
};
$scope.deleteTempSketch = function( tempID ){
$scope.tempSketches = _.withoutProperty( $scope.tempSketches, "tempID", tempID );
};
$scope.startSketchViewer = function( sketch, isTemp, marker ){
if ( sketch.sketchID !== undefined){
sketch.id = sketch.sketchID;
}
$scope.sketchViewerSketch = sketch;
$scope.sketchViewerSketch.svg = $sce.trustAsHtml(sketch.svg);
$scope.sketchViewerMarker = marker;
$scope.sketchViewerSketchIsTemp = ( sketch.tempID !== undefined ? true: false);
$scope.isShowingSketchViewer = true;
$scope.isBottomBarShown = false;
$scope.setSketchImageIsProcessing( false );
};
$scope.closeSketchViewer = function(){
$scope.sketchViewerSketch = {};
$scope.sketchViewerMarker = {};
$scope.sketchViewerSketchIsTemp = false;
$scope.isShowingSketchViewer = false;
$scope.isBottomBarShown = true;
$scope.setSketchImageIsProcessing( false );
};
$scope.setSketchImageIsProcessing = function( isProcessing ){
$scope.sketchImageIsProcessing = isProcessing;
};
$scope.setIsHoveringViewport = function( val ){
$scope.isHoveringViewport = val;
};
$scope.setIsHoveringHotspot = function( val ){
$scope.isHoveringHotspot = val;
};
$scope.setIsShowingConversationMenu = function( val ){
$scope.isShowingConversationMenu = val;
};
$scope.getIsShowingConversationMenu = function() {
return $scope.isShowingConversationMenu;
};
$scope.reloadConversations = function( conversations ){
loadRemoteData();
};
$scope.changeShowCompletedFilter = function() {
clearExcludedConversationIDs();
navigateToComments();
applyFilters();
};
$scope.changeTypeFilter = function( option ) {
clearExcludedConversationIDs();
navigateToComments();
$scope.filters.type = option;
applyFilters();
};
$scope.markConversationAsRead = function( conversation ){
var conversationIndex = _.indexOfWithProperty( $scope.conversations, "id", conversation.id );
$scope.conversations[conversationIndex].isUnread = false;
conversationService.markRead( conversation.id );
var conversations = _.filter(
$scope.conversations,
function( conversation ) {
return(
( conversation.isUnread && ! conversation.isComplete ) 
||
_.contains( visitedUnreadConversationIDs, conversation.id )
);
}
);
$scope.unreadConversations = conversations;
};
function updateFilterCounts() {
var conversations = $scope.conversations;
if ( ! $scope.filters.showCompleted.value ) {
conversations = _.withoutProperty( conversations, "isComplete", true );
}
$scope.typeFilterOptions[ 0 ].count = conversations.length;
$scope.typeFilterOptions[ 1 ].count = _.withProperty( conversations, "isForDevelopment", false ).length;
$scope.typeFilterOptions[ 2 ].count = _.withProperty( conversations, "isForDevelopment", true ).length;
if ( $scope.filters.type.value === "all" ) {
$scope.filters.showCompleted.count = _.withProperty( $scope.conversations, "isComplete", true ).length;
} else if ( $scope.filters.type.value === "comments" ) {
$scope.filters.showCompleted.count = _.where( $scope.conversations, { isForDevelopment: false, isComplete: true } ).length;
} else if ( $scope.filters.type.value === "dev-notes" ) {
$scope.filters.showCompleted.count = _.where( $scope.conversations, { isForDevelopment: true, isComplete: true } ).length;
}
}
function updateUnreadConversations() {
$scope.unreadConversations = _.filter(
$scope.conversations,
function( conversation ) {
return(
( conversation.isUnread && ! conversation.isComplete ) 
||
_.contains( visitedUnreadConversationIDs, conversation.id )
);
}
);
updateVisibleUnreadConversations();
}
function updateVisibleUnreadConversations() {
$scope.visibleUnreadConversations = $scope.unreadConversations;
$scope.hiddenUnreadConversations = [];
if ( $scope.unreadConversations.length > $scope.unreadConversationCapacity ) {
$scope.visibleUnreadConversations = $scope.unreadConversations.slice( 0, $scope.unreadConversationCapacity );
$scope.hiddenUnreadConversations = $scope.unreadConversations.slice( $scope.unreadConversationCapacity );
}
}
$scope.updateUnreadConversationCapacity = function( capacity ) {
$scope.unreadConversationCapacity = capacity;
updateVisibleUnreadConversations();
};
$scope.setConversations = function( conversations ){
$scope.conversations = conversations;
};
var renderContext = requestContext.getRenderContext( "comments", "screenID", "sketchID" );
var conversationIDsNotAffectedByFiltering = [];
var visitedUnreadConversationIDs = [];
if ( !$scope.isPresentation ) {
$scope.screenID = requestContext.getParamAsInt( "screenID", $scope.defaultScreenIDForShare );
} else {
var slide = $scope.getCurrentSlide();
$scope.screenID = slide.screenID;
}
$scope.typeFilterOptions = [
{
label: "All Types",
value: "all",
count: 0
},
{
label: "Comments",
value: "comments",
count: 0
},
{
label: "Dev Notes",
value: "dev-notes",
count: 0
}
];
$scope.filters = {
type: $scope.typeFilterOptions[ 0 ],
showCompleted: {
value: false,
count: 0
}
};
$scope.conversations = [];
$scope.unreadConversations = [];
$scope.visibleUnreadConversations = [];
$scope.hiddenUnreadConversations = [];
$scope.unreadConversationCapacity = 10;
$scope.isShowingSketchBuilder = false;
$scope.isShowingSketchViewer = false;
$scope.sketchViewerSketchIsTemp = false;
$scope.sketchViewerSketch = {};
$scope.sketchViewerMarker = {};
$scope.sketchImageIsProcessing = false;
$scope.tempSketches = [];
$scope.isHoveringViewport = false;
$scope.isHoveringHotspot = false;
$scope.isShowingConversationMenu = false;
$scope.isUserAccountAuthenticated = sessionService.user.isAccountAuthenticated;
$scope.showUnreadComments = false;
$scope.$on(
"loadingSequenceCompleted",
function( event ) {
if ( $scope.screen ) {
$scope.setWindowTitle( $scope.screen.name + " - Comments" );
}
}
);
$scope.$on(
"requestContextChanged",
function() {
if ( ! renderContext.isChangeRelevant() ) {
return;
}
$scope.screenID = requestContext.getParamAsInt( "screenID", $scope.defaultScreenIDForShare );
loadRemoteData();
}
);
$scope.$on(
"configUpdated.share",
function( localConfig ) {
if( localConfig != config ){
loadRemoteData();
}
}
);
loadRemoteData();
}
})( angular, InVision );
;
;
/*! form-controller.js */ 
;
;
(function( ng, app ){
"use strict";
app.controller( "comments.FormController", Controller );
/** @ngInject */
function Controller( $scope, $window, config, companyService, requestContext, Deferred, sessionService, presentationService, shareService, screenService, conversationService, commentService, userService, projectViewingService, dateHelper, projectService, validationService, modelEvents, $timeout, _, conversationCropService ){
function applyRemoteData( share, project, comments, members, affiliates ) {
$scope.share = share;
$scope.project = augmentProject( project );
$scope.comments = augmentComments( comments );
$scope.members = augmentUsers( _.rejectWithProperty( members, "id", $scope.user.id ) );
$scope.affiliates = augmentUsers( affiliates );
$scope.conversationTitle = !$scope.isLiveShare && $scope.project.isSnap ? "Leave Feedback" : $scope.conversationTitle;
$scope.isTeamMember = !! _.findWithProperty( members, "id", $scope.user.id );
$scope.showInternalOptions = ( sessionService.user.isAccountAuthenticated && $scope.isTeamMember );
var membersWithoutUser = _.rejectWithProperty( members, "id", $scope.user.id );
var allUsers = membersWithoutUser.concat( affiliates );
var currentUserID = sessionService.user.id;
if ( comments.length ) {
var preselectedUserIDs = $scope.conversation.subscribers;
$scope.isShowingUserList = false;
$scope.isShowingTeaser = true;
} else {
var defaultUserIDs = _.pluck( membersWithoutUser, "id" );
var preselectedUserIDs = ( sessionService.get( "selectedUserIDs" ) || defaultUserIDs );
$scope.isShowingUserList = ! _.similar( defaultUserIDs, preselectedUserIDs );
$scope.isShowingTeaser = false;
}
_.each(
allUsers,
function( user ) {
user.isSelected = _.contains( preselectedUserIDs, user.id );
}
);
if ( $scope.isInternalConversation || $scope.share.isUserTesting ) {
$scope.selectedUserCount = _.countWithProperty( membersWithoutUser, "isSelected", true );
} else {
$scope.selectedUserCount = _.countWithProperty( allUsers, "isSelected", true );
}
}
function augmentComment( comment, index, collection ) {
var isFirstOrLastN = false,
isCollapsed = false,
isFirstCollapsed = false,
previousCollapsedComments = [];
comment.isOwnedByUser = false;
if ( sessionService.user.isAccountAuthenticated ) {
comment.isOwnedByUser = ( sessionService.user.id === comment.userID );
} else {
comment.isOwnedByUser = ( ( sessionService.user.id === comment.userID ) && userService.isAffiliate( comment.userID ) );
}
isFirstOrLastN = ( index === 0 || index >= ( collection.length - 3 ) );
previousCollapsedComments = _.filterWithProperty( collection.slice( 0, index ), "isCollapsed", true );
isCollapsed = !( isFirstOrLastN || comment.isUnread );
isFirstCollapsed = isCollapsed && ( previousCollapsedComments.length === 0 );
comment.isFirstCollapsed = isFirstCollapsed;
comment.isCollapsed = isCollapsed;
comment.dateLabel = getDateLabel( comment.createdAt );
comment.niceDate = moment( comment.createdAt ).fromNow();
comment.html = commentService.getHtmlForComment( comment.comment );
comment.isEditing = false;
comment.editedComment = comment.comment;
comment.isDeleting = false;
comment.userHasSystemAvatar = userService.isSystemAvatar( comment.userAvatarID );
comment.userInitials = userService.getInitials( comment.userName );
comment.userOnlineStatus = userService.getOnlineStatus( comment.userLastRequestAt );
comment.userFirstName = comment.userName.split(" ")[0];
return( comment );
}
function augmentComments( comments ) {
_.each( comments, augmentComment );
return( comments );
}
function augmentProject( project ) {
project.isOwnedByUser = ( sessionService.user.isAccountAuthenticated && ( project.userID === sessionService.user.id ) );
return( project );
}
function augmentUser( user ) {
user.isSelected = false;
user.initials = userService.getInitials( user.name );
user.onlineStatus = userService.getOnlineStatus( user.lastRequestAt );
user.hasSystemAvatar = userService.isSystemAvatar( user.avatarID );
return( user );
}
function augmentUsers( users ) {
_.each( users, augmentUser );
return( users );
}
function getDateLabel( createdAt ) {
return(
dateHelper.formatRecentDate( createdAt, " mmm d" ) + 
" at " +
dateHelper.formatTime( createdAt, "h:mm TT" )
);
}
function loadRemoteData() {
var share = shareService.getShare();
var project = projectService.getProject();
var comments = commentService.getCommentsByConversationID( $scope.conversation.id );
var members = userService.getMembers();
var affiliates = userService.getAffiliates();
applyRemoteData( share, project, comments, members, affiliates );
}
function saveConversation() {
Deferred.handlePromise(
conversationService.changePrivacy(
$scope.conversation.id,
$scope.conversation.isForDevelopment,
$scope.conversation.isPrivate
),
null,
function( response ) {
$scope.openModalWindow( "error", "For some reason, we couldn't update your conversation. Try refreshing your browser." );
}
);
}
function startConversation() {
function getConversationPromise( dataUrl, isUnsupported) {
return conversationService.startConversation(
$scope.screenID,
$scope.conversation.label,
$scope.conversation.x,
$scope.conversation.y,
$scope.conversation.isForDevelopment,
$scope.conversation.isPrivate,
dataUrl,
isUnsupported
);
}
pushPlaceholderComment($scope.newComment, true);
$timeout(function() {
var tempSketches = $scope.tempSketches;
Deferred.handlePromise(
getConversationPromise( "", true ), // bypass canvas, since we're already calling it in saveComment() below
function( response ) {
$scope.conversation.id = response.id;
$scope.tempSketches = tempSketches;
saveComment();
},
function( response ) {
$scope.openModalWindow( "error", "For some reason, we couldn't save your comment. Try refreshing your browser." );
}
);
}, 1000);
}
function updatePrivacySettings( isForDevelopment, isPrivate ) {
$scope.conversation.isForDevelopment = isForDevelopment;
$scope.conversation.isPrivate = isPrivate;
$scope.isInternalConversation = ( isForDevelopment || isPrivate );
if ( $scope.isInternalConversation || $scope.share.isUserTesting) {
$scope.selectedUserCount = _.countWithProperty( $scope.members, "isSelected", true );
} else {
$scope.selectedUserCount = (
_.countWithProperty( $scope.members, "isSelected", true ) +
_.countWithProperty( $scope.affiliates, "isSelected", true )
);
}
if ( $scope.conversation.id  ) {
saveConversation();
}
}
function pushPlaceholderComment(newComment, isNewConversation) {
isNewConversation = isNewConversation || false;
$scope.isShowingUserList = false;
$scope.newComment = isNewConversation ? newComment : "";
$scope.setMarkersAsClean();
$scope.$broadcast( "invSuccessButton:success" );
var placeholderComment = {
userName: $scope.user.name || "Me",
userAvatarID: $scope.user.avatarID || 0,
userHasSystemAvatar: $scope.user.isAnonymous || $scope.user.hasSystemAvatar,
userInitials: $scope.user.initials || "ME",
dateLabel: "Just Now",
html: commentService.getHtmlForComment( newComment ),
isEditing: false
};
$scope.comments.push(placeholderComment);
}
function saveComment(){
function processCommentSave( dataUrl, isUnsupported ) {
Deferred.handlePromise(
commentService.addComment( $scope.conversation.id, newComment, notify, $scope.tempSketches, dataUrl, isUnsupported ),
function( response ) {
submissionInProgress = false;
if ( !$scope.isLiveShare && !$scope.isPresentation ) {
projectViewingService.incrementCommentCount( $scope.share.id );
} else if ( $scope.isPresentation ) {
projectViewingService.incrementCommentCountForPresentation( $scope.presentation.id );
}
if ( ! _.contains( $scope.conversation.subscribers, $scope.user.id ) ) {
conversationService.addSubscribers( $scope.conversation.id, [ $scope.user.id ] );
}
if( notify.others.length ){
Deferred.handlePromise(
projectService.reloadStakeholders( $scope.project.id ),
function() {
var affiliates = userService.getAffiliates();
var allUserIDs = _.pluck( affiliates, "id" );
var knownUserIDs = _.pluck( $scope.affiliates, "id" );
var newUserIDs = _.difference( allUserIDs, knownUserIDs );
if ( newUserIDs.length ) {
conversationService.addSubscribers( $scope.conversation.id, newUserIDs );
}
if ( newUserIDs.length && ! $scope.comments.length ) {
sessionService.set( "selectedUserIDs", sessionService.get( "selectedUserIDs" ).concat( newUserIDs ) );
}
}
);
}
},
function( error ) {
submissionInProgress = false;
$scope.openModalWindow( "error", "For some reason, we couldn't save your comment. Try refreshing your browser." );
}
);
}
if ( ! $scope.conversation.id ) {
return( startConversation() );
}
if ( $scope.isInternalConversation ) {
_.setProperty( $scope.affiliates, "isSelected", false );
$scope.emailAddresses = "";
}
if ( $scope.share.isUserTesting && ! $scope.comments.length ) {
_.setProperty( $scope.affiliates, "isSelected", false );
$scope.emailAddresses = "";
}
var newComment = $scope.newComment;
pushPlaceholderComment(newComment);
var selectedMembers = _.withProperty( $scope.members, "isSelected", true );
var selectedAffiliates = _.withProperty( $scope.affiliates, "isSelected", true );
var notify = {
members: _.pluck( selectedMembers, "id" ),
stakeholders: _.pluck( selectedAffiliates, "id" ),
others: [],
unsubscribe: []
};
var membersToUnsubscribe = _.withProperty( $scope.members, "isSelected", false );
var stakeholdersToUnsubscribe = _.withProperty( $scope.affiliates, "isSelected", false );
notify.unsubscribe = _.pluck( membersToUnsubscribe, "id" );
notify.unsubscribe = notify.unsubscribe.concat( _.pluck( stakeholdersToUnsubscribe, "id" ) );
if ( _.trim( $scope.emailAddresses ) ) {
notify.others = $scope.emailAddresses.split( /[,;:\s]+/gi );
}
$timeout(function() {
var cropPromise = conversationCropService.createConversationImage( $scope.conversation, $scope.screen.imageUrl, 150, 110, 6 );
cropPromise.then(function( dataUrl ) {
if ( $('html').hasClass("lt-ie9") ) {
dataUrl = "";
}
processCommentSave( dataUrl, $('html').hasClass("lt-ie9") );
}, function( reason ) { // fallback, don't break the ability to comment simply because the canvas crop failed
processCommentSave( "", true );
});
}, 1000);
screenService.alterCommentCount( $scope.conversation.screenID, 1 );
if ( ! $scope.comments.length ) {
var selectedUserIDs = _.pluck( selectedMembers, "id" ).concat( _.pluck( selectedAffiliates, "id" ) );
if (
! _.findWithProperty( $scope.members, "id", $scope.user.id ) &&
! _.findWithProperty( $scope.affiliates, "id", $scope.user.id )
) {
selectedUserIDs.push( $scope.user.id );
}
sessionService.set( "selectedUserIDs", selectedUserIDs );
}
}
$scope.addComment = function() {
if( submissionInProgress ){
return;
}
if ( ! _.trim( $scope.newComment ) && ! $scope.tempSketches.length ) {
return;
}
if ( sessionService.user.isAnonymous ) {
$scope.isIdentifying = true;
return;
}
submissionInProgress = true;
$scope.hasUnauthorizedEmail = false;
if ( 
$scope.emailAddresses && 
config.companyInfo && 
config.companyInfo.permissions && 
config.companyInfo.permissions.requireShareAuth
) {
var emails = $scope.emailAddresses.split( "," );
Deferred.handlePromise(
companyService.assertEmailsAreCompanyMembers( emails ),
function( response ) {
if( ! response.emailsAreMembers ){
submissionInProgress = false;
$scope.hasUnauthorizedEmail = true;
return;
}
saveComment();
},
function( response ){
submissionInProgress = false;
$scope.openModalWindow( "error", "For some reason, we couldn't save your comment. Try refreshing your browser." );
}
);
} else {
saveComment();
}
};
$scope.cancelCommentEdit = function( comment ) {
comment.isEditing = false;
};
$scope.deleteComment = function( comment ) {
Deferred.handlePromise(
commentService.deleteComment( comment.id ),
null,
function( response ) {
$scope.openModalWindow( "error", "For some reason, we couldn't delete your comment. Try refreshing your browser." );
}
);
$scope.comments = _.without( $scope.comments, comment );
screenService.alterCommentCount( $scope.conversation.screenID, -1 );
};
$scope.deleteSketch = function( sketchID ) {
conversationService.deleteSketch( sketchID );
for( var c = 0; c < $scope.comments.length; c++){
$scope.comments[c].sketches = _.rejectWithProperty( $scope.comments[c].sketches, "id", sketchID );
}
};
$scope.editComment = function( comment ) {
_.setProperty( $scope.comments, "isEditing", false );
comment.editedComment = comment.comment;
comment.isEditing = true;
};
$scope.expandComments = function( ) {
var comments = $scope.comments;
_.setProperty( comments, "isCollapsed", false );
};
$scope.getUsersToBeNotified = function() {
var userNames = [];
var pushUserOnStackIfNotified = function( user ) {
if ( user.isSelected ) {
userNames.push( userService.getFirstName( user.name ) );
}
};
_.each( $scope.members, pushUserOnStackIfNotified );
_.each( $scope.affiliates, pushUserOnStackIfNotified );
if ( _.trim( $scope.emailAddresses ) ) {
var others = $scope.emailAddresses.split( /[,;:\s]+/gi );
userNames = userNames.concat( others );
}
return userNames[0];
};
$scope.hideDeleteConfirmation = function( comment ) {
( comment || $scope ).isDeleting = false;
};
$scope.identifyAndAddComment = function() {
$scope.errorMessage = null;
if ( ! $scope.identity.name ) {
return( $scope.errorMessage = "Please enter your name." );
}
if ( ! $scope.identity.email ) {
return( $scope.errorMessage = "Please enter your email." );
}
var promise = Deferred.handlePromise(
( 	
( !$scope.isPresentation ) ? // default 'Share' identify logic
shareService.identify( $scope.identity.name, $scope.identity.email )
: presentationService.identify( $scope.identity.name, $scope.identity.email ) 
),
function( response ) {
$scope.isIdentifying = false;
$scope.canLike = true;
$scope.addComment();
},
function( response ) {
if ( validationService.isInvalidField( response ) ) {
$scope.errorMessage = "Please enter a valid name and email address.";
} else if ( validationService.isForbidden( response ) ) {
$scope.errorMessage = "Hmm, something is funky - it looks like you already identified yourself. Try refreshing your browser - that should fix it.";
} else {
$scope.errorMessage = "Unexpected error.";
}
}
);
};
$scope.isStakeholdersShowing = function(){
return( !! $scope.affiliates.length && !$scope.share.isUserTesting );
};
$scope.removeStakeholder = function( user ){
projectService.removeStakeholderFromProject( user.id );
};
$scope.saveComment = function( comment ) {
var newComment = _.trim( comment.comment );
if ( ! newComment ) {
return( comment.isEditing = false );
}
Deferred.handlePromise(
commentService.updateComment( comment.id, comment.conversationID, newComment ),
null,
function( response ) {
$scope.openModalWindow( "error", "For some reason, we couldn't save your comment. Try refreshing your browser." );
}
);
comment.comment = newComment;
comment.html = commentService.getHtmlForComment( newComment );
comment.isEditing = false;
};
$scope.showDeleteConfirmation = function( comment, isFirstComment ) {
if ( isFirstComment ) {
$scope.isDeleting = true;
} else {
comment.isDeleting = true;
}
};
$scope.submitForm = function() {
if ( $scope.isIdentifying ) {
return( $scope.identifyAndAddComment() );
}
return( $scope.addComment() );
};
$scope.setTypeAsComment = function() {
updatePrivacySettings( false, false );
};
$scope.setTypeAsPrivateComment = function(){
updatePrivacySettings( false, true );
};
$scope.setTypeAsDevNote = function() {
updatePrivacySettings( true, true );
};
$scope.toggleIsForDevelopment = function() {
updatePrivacySettings( ! $scope.conversation.isForDevelopment, $scope.conversation.isPrivate );
};
$scope.toggleIsPrivate = function() {
updatePrivacySettings( $scope.conversation.isForDevelopment, ! $scope.conversation.isPrivate );
};
$scope.toggleLike = function( comment ) {
comment.hasUserLiked = !comment.hasUserLiked;
if( comment.hasUserLiked ) {
comment.numberOfLikes++;
var hasNotLiked = _.isUndefined( _.findWithProperty( comment.likedBy, 'email', sessionService.user.email ) );
if( hasNotLiked ) {
comment.likedBy.unshift( { name: sessionService.user.name, email: sessionService.user.email } );
}
} else {
comment.numberOfLikes--;
comment.likedBy = _.rejectWithProperty( comment.likedBy, "email", sessionService.user.email );
}
comment.likedByList = commentService.formatCommentLikers( comment );
conversationService.toggleCommentLike( comment.id, comment.conversationID );
};
$scope.toggleUserList = function() {
$scope.isShowingUserList = ! $scope.isShowingUserList;
};
$scope.toggleUserSelection = function( user ) {
if ( user.isSelected ) {
$scope.selectedUserCount++;
} else {
$scope.selectedUserCount--;
}
};
$scope.updateConversationStatus = function( conversation ) {
var methodName = ( conversation.isComplete ? "markComplete" : "markIncomplete" );
Deferred.handlePromise(
conversationService[ methodName ]( conversation.id ),
null,
function( response ) {
$scope.openModalWindow( "error", "For some reason, we couldn't update the conversation. Try refreshing your browser." );
}
);
if ( conversation.isComplete ) {
$timeout(
function() {
$scope.closeConversation();
},
250
);
}
};
$scope.notifyOptionSelected = "All";
$scope.checkAll = function() {
_.setProperty( $scope.members, "isSelected", true);
_.setProperty( $scope.affiliates, "isSelected", true);
$scope.hasAllChecked = true;
};
$scope.uncheckAll = function() {
_.setProperty( $scope.members, "isSelected", false);
_.setProperty( $scope.affiliates, "isSelected", false);
$scope.notifyOthers = "";
$scope.hasAllChecked = false;
};
$scope.checkAllCollaborators = function() {
$scope.uncheckAll();
_.setProperty( $scope.members, "isSelected", true);
};
$scope.selectAll = function() {
$scope.checkAll();
$scope.notifyOptionSelected = "All";
};
$scope.selectCollaborators = function() {
$scope.checkAllCollaborators();
$scope.notifyOptionSelected = "Collaborators";
};
$scope.toggleNotifyOption = function() {
if ( $scope.getNotifyCount() > 0 ) {
$scope.uncheckAll();
return;
}
switch(	$scope.notifyOptionSelected ) {
case "All":
$scope.selectAll();
break;
case "Collaborators":
$scope.selectCollaborators();
break;
}
};
$scope.getNotifyCount = function() {
var count = 0;
_.each( $scope.members, function( user ) {
if ( user.isSelected ) {
count++;
}
});
if( ! $scope.conversation.isForDevelopment && ! $scope.conversation.isPrivate ){
_.each( $scope.affiliates, function( user ) {
if ( user.isSelected ) {
count++;
}
});
}
if ( ( $scope.affiliates.length + $scope.members.length ) !== count && $scope.hasAllChecked ) {
$scope.hasAllChecked = false;
}
if ( ( $scope.affiliates.length + $scope.members.length ) === count ) {
$scope.hasAllChecked = true;
}
return count;
};
function handleProjectStakeholderRemoved( event, projectID, userID ){
$scope.affiliates = _.rejectWithProperty( $scope.affiliates, "id", userID );
}
function handleConversationSubscriberUpdate( event, conversationID, notify ) {
if ( conversationID == $scope.conversation.id ) {
var subscribers  = _.uniq( [].concat( notify.members ).concat( notify.stakeholders ) ),
deSelectedMembers,
selectedAffiliates;
$scope.conversation.subscribers = subscribers;
_.setProperty( $scope.members, "isSelected", true );
deSelectedMembers = _.withoutPropertyRange( $scope.members, "id", subscribers );
_.setProperty( deSelectedMembers, "isSelected", false );
if ( notify.resubscribe ) {
projectService.reloadStakeholders( $scope.project.id ).then(function( response ) {
$scope.affiliates = augmentUsers( response );
_.setProperty( $scope.affiliates, "isSelected", false );
selectedAffiliates = _.withPropertyRange( $scope.affiliates, "id", subscribers );
_.setProperty( selectedAffiliates, "isSelected", true );
});
} else {
_.setProperty( $scope.affiliates, "isSelected", false );
selectedAffiliates = _.withPropertyRange( $scope.affiliates, "id", subscribers );
$scope.affiliates = selectedAffiliates;
_.setProperty( selectedAffiliates, "isSelected", true );
}
}
}
$scope.share = null;
$scope.project = null;
$scope.conversation = ( $scope.selectedConversation || $scope.newConversation );
$scope.showInternalOptions = false;
$scope.comments = [];
$scope.user = sessionService.user;
$scope.isDeleting = false;
$scope.isIdentifying = false;
$scope.identity = {
name: "",
email: ""
};
$scope.members = [];
$scope.affiliates = [];
$scope.isShowingUserList = false;
$scope.isInternalConversation = ( $scope.conversation.isForDevelopment || $scope.conversation.isPrivate );
$scope.selectedUserCount = 0;
$scope.isShowingTeaser = true;
$scope.emailAddresses = "";
$scope.newComment = "";
$scope.canLike = !sessionService.user.isAnonymous;
$scope.hasAllChecked = false;
$scope.isTeamMember = false;
$scope.hasUnauthorizedEmail = false;
$scope.errorMessage = null;
$scope.conversationTitle = "Start a conversation"; 
$scope.$on(
"$destroy",
function( event ) {
if ( 
$scope.conversation.id &&
_.findWithProperty( $scope.comments, "isUnread", true )
) {
conversationService.markRead( $scope.conversation.id );
screenService.alterUnreadCommentCount(
$scope.conversation.screenID,
- _.countWithProperty( $scope.comments, "isUnread", true )
);
}
modelEvents.off( "projectStakeholderRemoved.commentsFormController" );
modelEvents.off("conversationSubscribersUpdated.commentsFormController" );
}
);
$scope.$on( "configUpdated.share", function( event, response ){
$scope.members = augmentUsers( _.rejectWithProperty( response.members, "id", $scope.user.id ) );
$scope.affiliates = augmentUsers( response.affiliates );
var membersWithoutUser = _.rejectWithProperty( $scope.members, "id", $scope.user.id );
var allUsers = membersWithoutUser.concat( $scope.affiliates );
if ( $scope.comments.length ) {
var preselectedUserIDs = $scope.conversation.subscribers;
} else {
var defaultUserIDs = _.pluck( membersWithoutUser, "id" );
var preselectedUserIDs = ( sessionService.get( "selectedUserIDs" ) || defaultUserIDs );
}
_.each(
allUsers,
function( user ) {
user.isSelected = _.contains( preselectedUserIDs, user.id );
}
);
});
var submissionInProgress = false;
var unwatchNewComment = $scope.$watch(
"newComment",
function( newValue, oldValue ) {
if ( newValue === oldValue ) {
return;
}
$scope.setMarkersAsDirty();
unwatchNewComment();
}
);
modelEvents.on(
"shareIdentityChanged.commentsFormController",
function( event, user ) {
_.extendExistingProperties( $scope.user, user );
$scope.user.hasSystemAvatar = userService.isSystemAvatar( $scope.user.avatarID );
$scope.user.initials = userService.getInitials( $scope.user.name );
}
);
modelEvents.on( "projectStakeholderRemoved.commentsFormController", handleProjectStakeholderRemoved );
modelEvents.on( "conversationSubscribersUpdated.commentsFormController", handleConversationSubscriberUpdate );
loadRemoteData();
}
})( angular, InVision );
;
;
/*! markers-controller.js */ 
;
;
(function( ng, app ){
"use strict";
app.controller( "comments.MarkersController", Controller );
/** @ngInject */
function Controller( $scope, $location, $timeout, requestContext, Deferred, screenService, conversationService, commentService, conversationCropService, modelEvents, _ ){
function applyData() {
$scope.viewport.width = $scope.screen.width * $scope.screen.displayScale;
$scope.viewport.height = $scope.screen.height * $scope.screen.displayScale;
$scope.viewport.alignment = $scope.screen.alignment;
loadConversation();
}
function loadConversations( screenID ){
$scope.reloadConversations();
applyData();
}
function getNewConversationLabel() {
var maxLabel = 0;
for ( var i = 0, length = $scope.conversations.length ; i < length ; i++ ) {
maxLabel = Math.max( maxLabel, parseInt( $scope.conversations[ i ].label ) );
}
return( maxLabel + 1 );
}
function loadConversation() {
var conversationID = requestContext.getParamAsInt( "conversationID", 0 );
$scope.clearCommentSketches();
$scope.setIsShowingConversationMenu( false );
$scope.selectedConversation = null;
$scope.newConversation = null;
if ( conversationID ) {
$timeout(function() {
$scope.selectedConversation = _.findWithProperty( $scope.conversations, "id", conversationID );
$scope.setIsShowingConversationMenu( true );
if ( ! $scope.selectedConversation ) {
$location.url( "/screens/" + $scope.screenID + "/comments" );
}
});
}
}
$scope.areMarkersDirty = function() {
return( hasActiveMarkerWithDirtyData );
};
$scope.closeConversation = function() {
if( $scope.selectedConversation ){
$scope.markConversationAsRead( $scope.selectedConversation );
}
$scope.newConversation = null;
$scope.selectedConversation = null;
$scope.clearCommentSketches();
$scope.isCommentInputVisible = false;
hasActiveMarkerWithDirtyData = false;
$location.url( "/screens/" + $scope.screenID + "/comments" );
$scope.setIsShowingConversationMenu( false );
};
$scope.closeJustThisConversationPanel = function(currentConversationID) {
if ( ! $scope.selectedConversation ) {
$scope.closeConversation();
return;
}
if ( currentConversationID === $scope.selectedConversation.id ) {
$scope.closeConversation();
}
};
$scope.deleteConversation = function( conversation ) {
var comments = commentService.getCommentsByConversationID( conversation.id );
Deferred.handlePromise(
conversationService.deleteConversation( conversation.id ),
null,
function( response ) {
$scope.openModalWindow( "error", "For some reason, we couldn't delete the conversation. Try refreshing your browser." );
}
);
$scope.setConversations( _.without( $scope.conversations, conversation ) );
$scope.selectedConversation = null;
screenService.alterCommentCount( conversation.screenID, -comments.length );
};
$scope.setMarkersAsDirty = function() {
hasActiveMarkerWithDirtyData = true;
};
$scope.setMarkersAsClean = function() {
hasActiveMarkerWithDirtyData = false;
};
$scope.showNextConversation = function() {
var currentIndex = _.indexOf( $scope.conversations, $scope.selectedConversation );
var nextIndex = ( currentIndex + 1 );
var nextConversation = ( $scope.conversations[ nextIndex ] || _.first( $scope.conversations ) );
$location.url( "/screens/" + $scope.screenID + "/comments/" + nextConversation.id );
};
$scope.showPreviousConversation = function() {
var currentIndex = _.indexOf( $scope.conversations, $scope.selectedConversation );
var previousIndex = ( currentIndex - 1 );
var previousConversation = ( $scope.conversations[ previousIndex ] || _.last( $scope.conversations ) );
$location.url( "/screens/" + $scope.screenID + "/comments/" + previousConversation.id );
};
$scope.startNewConversation = function( x, y ) {
$scope.newConversation = {
id: 0,
x: x / $scope.screen.displayScale,
y: y / $scope.screen.displayScale,
label: getNewConversationLabel(),
screenID: $scope.screenID,
isForDevelopment: false,
isPrivate: false,
isComplete: false,
subscribers: []
};
$scope.isCommentInputVisible = true;
$scope.setIsShowingConversationMenu( true );
};
$scope.updateConversationPosition = function( conversation, x, y ) {
conversation.x = x / $scope.screen.displayScale;
conversation.y = y / $scope.screen.displayScale;
$timeout(function() {
var cropPromise = conversationCropService.createConversationImage( conversation, $scope.screen.imageUrl, 150, 110, 6 );
cropPromise.then(function( dataUrl ) {
if ( $('html').hasClass("lt-ie9") ) {
dataUrl = "";
}
Deferred.handlePromise(
conversationService.changePosition( conversation.id, x / $scope.screen.displayScale, y / $scope.screen.displayScale, dataUrl ),
null,
function( response ) {
$scope.openModalWindow( "error", "For some reason, we couldn't update the position of the conversation. Try refreshing your browser." );
}
);
}, function( reason ) { // don't break the ability to comment due to a failure on the part of canvas
Deferred.handlePromise(
conversationService.changePosition( conversation.id, x / $scope.screen.displayScale, y / $scope.screen.displayScale, "" ),
null,
function( response ) {
$scope.openModalWindow( "error", "For some reason, we couldn't update the position of the conversation. Try refreshing your browser." );
}
);
});
}, 1000);
};
$scope.updateNewConversationPosition = function( x, y ) {
$scope.newConversation.x = x;
$scope.newConversation.y = y;
};
var renderContext = requestContext.getRenderContext( "comments", [ "screenID", "conversationID" ] );
var hasActiveMarkerWithDirtyData = false;
$scope.screenID = requestContext.getParamAsInt( "screenID", $scope.defaultScreenIDForShare );
$scope.selectedConversation = null;
$scope.newConversation = null;
$scope.viewport = {
width: 0,
height: 0,
alignment: "center"
};
$scope.$on(
"$destroy",
function() {
modelEvents.off( "conversationCreated.commentsMarkers" );
modelEvents.off( "conversationUpdated.commentsMarkers" );
}
);
$scope.$on(
"requestContextChanged",
function() {
if ( ! renderContext.isChangeRelevant() ) {
return;
}
hasActiveMarkerWithDirtyData = false;
if ( requestContext.hasParamChanged( "screenID" ) ) {
$scope.screenID = requestContext.getParamAsInt( "screenID", $scope.defaultScreenIDForShare );
loadConversations( $scope.screenID );
} else if ( requestContext.hasParamChanged( "conversationID" ) ) {
loadConversation();
}
}
);
modelEvents.on(
"conversationCreated.commentsMarkers", 
function( event, conversation ) {
if ( conversation.screenID !== $scope.screenID ) {
return;
}
loadConversations( $scope.screenID );
}
);
modelEvents.on(
"conversationUpdated.commentsMarkers",
function( event, conversation ) {
if ( conversation.screenID !== $scope.screenID ) {
return;
}
var cachedConversation = _.findWithProperty( $scope.conversations, "id", conversation.id );
if ( cachedConversation ) {
cachedConversation.isComplete = conversation.isComplete;
cachedConversation.subscribers = conversation.subscribers;
}
}
);
modelEvents.on(
"conversationDeleted.commentsMarkers",
function( event, conversationID ){
if( $scope.selectedConversation ){
if( conversationID == $scope.selectedConversation.id){
$scope.selectedConversation = null;
}
}
}
);
applyData();
}
})( angular, InVision );
;
;
/*! modal-controller.js */ 
;
;
(function( ng, app ){
"use strict";
app.controller( "layouts.ModalController", Controller );
/** @ngInject */
function Controller( $scope, modalWindowRequest, beforeUnloadService, _ ) {
var originalBodyClass = "";
var isPageRefreshing = false;
$scope.subview = null;
$scope.nextSubview = null;
$scope.$on(
"modalWindowHidden",
function( event ) {
$scope.subview = $scope.nextSubview;
$scope.nextSubview = null;
if( $scope.subview === null ) {
$scope.setBodyClass( originalBodyClass );
}
}
);
$scope.$on(
"openModalWindow",
function( event, modalType, modalData ) {
if ( isPageRefreshing ) {
return;
}
if ( $scope.subview === null ) {
modalWindowRequest.setRequest( modalType, modalData );
$scope.subview = modalType;
originalBodyClass = $scope.bodyClass;
$scope.setBodyClass( $scope.bodyClass + " modal-open" );
} else if ( modalType === "error" && $scope.subview === modalType ) {
return;
} else {
modalWindowRequest.setRequest( modalType, modalData, true ); // TRUE == suppress fade
$scope.nextSubview = modalType;
$scope.$broadcast( "closeModalWindowWithoutFade" );
}
}
);
beforeUnloadService.push(
this,
function() {
isPageRefreshing = true;
setTimeout(
function() {
isPageRefreshing = false;
},
1000
);
}
);
}
})( angular, InVision );
;
;
/*! loading-controller.js */ 
;
;
(function( ng, app ){
"use strict";
app.controller( "loading.LoadingController", Controller );
/** @ngInject */
function Controller( $scope ){
$scope.loadingSequenceCompleted = function() {
$scope.closeLoading();
};
$scope.percentLoaded = 0;
$scope.$watch(
function() {
return( $scope.getPercentOfScreensLoaded() );
},
function( newValue ) {
$scope.percentLoaded = newValue;
}
);
}
})( angular, InVision );
;
;
/*! error-controller.js */ 
;
;
(function( ng, app ){
"use strict";
app.controller( "modal.ErrorController", Controller );
/** @ngInject */
function Controller( $scope, modalWindowRequest, _ ) {
$scope.errorMessage = modalWindowRequest.getData( 0 );
}
})( angular, InVision );
;
;
/*! share-tour-controller.js */ 
;
;
(function( ng, app ){
"use strict";
app.controller( "modal.ShareTour", Controller );
function Controller( $scope, userPreferenceService, modelEvents ) {
$scope.closeTour = function(){
$scope.closeModalWindow();
};
modelEvents.trigger( "markHasSeenCommentTooltipFromTour" );
userPreferenceService.setUserPreferenceById( $scope.hasSeenShareWalkThroughUserPreferenceID, "true" );
$scope.setHasSeenShareWalkThrough( true );
}
})( angular, InVision );
;
;
/*! notifications-bar-controller.js */ 
;
;
(function( ng, app ){
"use strict";
app.controller( "notificationsBar.notificationsBarController", Controller );
/** @ngInject */
function Controller( $scope, $timeout, $location, config, Deferred, commentService ) {
function unSubscribeUser(){
if( subscriptionHash.length ){
var projectID = config.project.id;
Deferred.handlePromise(
commentService.unsubscribe( projectID, subscriptionHash ),
function( response ) {
$scope.isChangingNotifications = true;
$scope.wantsEmailNotifications = false;
},
function( response ) {
}
);
}
}
$scope.reSubscribeUser = function(){
if( subscriptionHash.length ){
$scope.isChangingNotifications = true;
var projectID = config.project.id;
Deferred.handlePromise(
commentService.resubscribe( projectID, subscriptionHash ),
function( response ) {
$scope.wantsEmailNotifications = true;
$timeout( $scope.closeEmailNotification, 2500 );
},
function( response ) {
$scope.openModalWindow('error', "There was error re-subscribing you to project. Try refreshing your browser.");
}
);
}
}
$scope.closeEmailNotification = function(){
$scope.isChangingNotifications = false;
}
var subscriptionHash = "";
$scope.isChangingNotifications = false;
$scope.wantsEmailNotifications = null;
if ( $location.search().hasOwnProperty( "unsubscribe" ) ) {
subscriptionHash = $location.search().unsubscribe;
if ( !$scope.project.isSnap ) {
$scope.$on( "loadingSequenceCompleted", function( event ){
unSubscribeUser();
});
} else { // there is no loading sequence for Snaps
unSubscribeUser();
}
$location.search( "unsubscribe", null );
};
}
})( angular, InVision );
;
;
/*! powered-by-controller.js */ 
;
;
(function( ng, app ){
"use strict";
app.controller( "poweredBy.poweredByController", Controller );
/** @ngInject */
function Controller( $scope, requestContext, modelEvents, _ ) {
$scope.announceActivityChange = function( isActive ){
if( !$scope.isShowingComments ) {
$scope.isActive = isActive;
modelEvents.trigger( "poweredByOpacityChange", isActive );	
} else {
$scope.isActive = true;
}
}
var renderContext = requestContext.getRenderContext( "", "screenID" );
$scope.isShowingComments = ( renderContext.getNextSection() === "comments" );
$scope.isActive = false;
$scope.$on(
"$destroy",
function() {
modelEvents.off("toolbarOpacityChange.poweredBy");
}
);
$scope.$on(
"requestContextChanged",
function() {
if ( ! renderContext.isChangeRelevant() ) {
return;
}
$scope.isShowingComments = ( renderContext.getNextSection() === "comments" );
}
);
modelEvents.on( "toolbarOpacityChange.poweredBy", function( event, isActive ){
$scope.isActive = isActive;
});
}
})( angular, InVision );
;
;
/*! preview-controller.js */ 
;
;
(function( ng, app ){
"use strict";
app.controller( "preview.PreviewController", Controller );
/** @ngInject */
function Controller( $scope, $timeout, $window, requestContext, hotspotService, projectService, screenService, sessionService, shareService, _, config ){
function overlayScreen( screenID ) {
var screen = screenService.getScreenByID( screenID );
$scope.openScreenAsOverlay( screen );
$scope.$emit("liveshare.showOverlay", screenID );
}
function applyRemoteData( screen ) {
if ( ! screen ) {
$scope.hotspots = [];
return;
}
$scope.setScreen( screen );
$scope.applyScreenDisplayScale();
$scope.hotspots = hotspotService.getHotspotsByScreenID( $scope.screenID );
convertBottomPositionedHotspots()
if( $scope.project.isMobile ){
$scope.viewport = {
width: screen.width,
height: screen.height,
alignment: screen.alignment
}
$scope.scaledScreen = {
width: screen.width,
height: screen.height
}
}else{
$scope.viewport = {
width: screen.width,
height: screen.height,
alignment: screen.alignment
}
}
$scope.currentScreenIndex = getCurrentScreenIndex();
$scope.setWindowTitle( screen.name );
if ( $scope.isLiveShare ) {
$scope.$emit( "liveshare.screenindex", $scope.currentScreenIndex, $scope.screenCount );
}
}
function convertBottomPositionedHotspots(){
for( var h = 0; h < $scope.hotspots.length; h++){
if( $scope.hotspots[h].isBottomAligned ){
$scope.hotspots[h].y = $scope.screen.height - ( $scope.hotspots[h].y + $scope.hotspots[h].height);
}
}
}
function getCurrentScreenIndex() {
for ( var i = 0; i < $scope.screens.length; i++ ) {
if ( $scope.screens[ i ].id == $scope.screenID ) {
return ( i + 1 );
}
}
return 0;
}
function getSampleProjectStatus( project ) {
return(
project.isSample &&
( project.id !== 75 ) && // Desktop wireframe.
( project.id !== 87 ) && // Desktop hi-fidelity.
( project.id !== 101727 ) && // Mobile hi-fidelity.
( project.id !== 5701 ) // Mobile wireframe.
);
}
function initShareSettings() {
var share = shareService.getShare();
sessionService.set(
"hasFirstScreenHotSpots",
( ! _.isEmpty( $scope.hotspots ) )
);
sessionService.set(
"isSlideshowNavAllowed",
(
! share.isUserTesting &&
share.isLoadAllScreens
)
);
$scope.isUserTesting = share.isUserTesting;
$timeout(function() {
updateSlideshowSettings();
});
}
function loadRemoteData() {
var screen = screenService.getScreenByID( $scope.screenID );
if ( screen ) {
applyRemoteData( screen );
}
}
function updateSlideshowSettings() {
var isSlideshowNavAllowed = sessionService.get( "isSlideshowNavAllowed" );
var hasFirstScreenHotSpots = sessionService.get( "hasFirstScreenHotSpots" );
var isKeyboardNavUsed = sessionService.get( "isKeyboardNavUsed", false );
var hasMultipleScreens = ( $scope.screens.length > 1 );
if (
isSlideshowNavAllowed === true &&
hasMultipleScreens === true &&
(
hasFirstScreenHotSpots === false ||
isKeyboardNavUsed === true
)
) {
sessionService.set( "isShowingSlideshowNav", true );
$scope.isShowingSlideshowNav = true;
}
}
$scope.applyHotspotNavigation = function( hotspot, eventType, event ) {
if ( _.isUndefined(eventType) ) {
eventType = "click";
}
if ( hotspotDebounced && eventType === "hover" ) {
return false;
} else if ( eventType === "hover" ) {
hotspotDebounced = true;
}
if ( eventType === "hover" ) {
clearTimeout(hotspotDebounceTimeout);
hotspotDebounceTimeout = setTimeout(function() {
hotspotDebounced = false;
}, 100);
}
if( $scope.project.isMobile && hotspot.transitionTypeID > 1 ){
if ( hotspot.targetTypeID === hotspotService.targetTypes.previousScreenInSort ) {
var targetScreen = screenService.getPreviousScreen( $scope.screenID );
} else if ( hotspot.targetTypeID === hotspotService.targetTypes.nextScreenInSort ) {
var targetScreen = screenService.getNextScreen( $scope.screenID );
}else if ( hotspot.targetTypeID === hotspotService.targetTypes.lastScreenVisited ) {
var history = $scope.getScreenHistory();
var targetScreen =  screenService.getScreenByID( history[ history.length - 2] ); //go back two steps.
}else{
var targetScreen = screenService.getScreenByID( hotspot.targetScreenID );
}
if( targetScreen && !isNaN(targetScreen.id) ){
targetScreen.displayScale = $scope.getScreenDisplayScale(targetScreen);
var transitionData = {
hotspot: hotspot,
transitionTypeID: hotspot.transitionTypeID,
currentScreen: $scope.screen,
targetScreen: targetScreen,
currentScreenPosition: $scope.getMobileViewportScrollPosition()
};
$scope.setTransitionData( transitionData );
$scope.setIsTransitioning( true );
}
}
if (eventType == "click" && hotspot.eventTypeID == 8 && !$scope.project.isMobile ) {
return false;
} else if ( eventType == "hover" && ( hotspot.eventTypeID != 8 || $scope.project.isMobile ) ) {
return false;
}
if ( $scope.isLiveShare && $scope.isPresenter ) {
$scope.$emit("liveshare.hotspot", hotspot, eventType );
} else if ( $scope.isLiveShare && hotspot.eventTypeID !== 8 ) {
$scope.$emit("liveshare_subscriber.presenterClick");
}
if (hotspot.eventTypeID == 8 && !$scope.project.isMobile ) {
if ( !hotspot.metaData || !hotspot.metaData.stayOnScreen ) { // if we're staying on the current screen, we need an overlay
if( hotspot.targetTypeID === hotspotService.targetTypes.previousScreenInSort ){
var targetScreenID = screenService.getPreviousScreen( hotspot.screenID ).id;
}else if ( hotspot.targetTypeID === hotspotService.targetTypes.nextScreenInSort ){
var targetScreenID = screenService.getNextScreen( hotspot.screenID ).id;
}else{
var targetScreenID = hotspot.targetScreenID;
}
overlayScreen( targetScreenID );
return false;
}
else { // maintain scroll position by default if we're changing screens
hotspot.isScrollTo = true;
}
}
if ( hotspot.targetTypeID === hotspotService.targetTypes.lastScreenVisited ) {
$scope.navigateToPreviousScreen();
} else if ( hotspot.targetTypeID === hotspotService.targetTypes.previousScreenInSort ) {
if( eventType == "clickFromOverlay" ){
var previousScreen = screenService.getPreviousScreen( $scope.overlayScreen.id );
}else{
var previousScreen = screenService.getPreviousScreen( $scope.screenID );
}
$scope.navigateToTargetScreen( previousScreen.id, !! hotspot.isScrollTo );
} else if ( hotspot.targetTypeID === hotspotService.targetTypes.nextScreenInSort ) {
if( eventType == "clickFromOverlay" ){
var nextScreen = screenService.getNextScreen( $scope.overlayScreen.id );
}else{
var nextScreen = screenService.getNextScreen( $scope.screenID );
}
$scope.navigateToTargetScreen( nextScreen.id, !! hotspot.isScrollTo );
} else if ( hotspot.targetTypeID === hotspotService.targetTypes.externalUrl ) {
var targetUrl = hotspot.metaData.url.replace(/&amp;/g, '&');
if ( hotspot.metaData.isOpenInNewWindow ) {
$window.open( targetUrl );
} else {
$window.location.href = targetUrl;
}
} else if ( hotspot.targetTypeID === hotspotService.targetTypes.positionOnScreen ) {
$scope.navigateToLocationOnScreen( hotspot.targetScreenID, hotspot.metaData.scrollOffset, hotspot.metaData.isSmoothScroll );
} else if ( _.isNumber( hotspot.targetScreenID ) ) {
$scope.navigateToTargetScreen( hotspot.targetScreenID, !! hotspot.isScrollTo );
}
};
$scope.keyboardNavUsed = function() {
sessionService.set( "isKeyboardNavUsed", true );
updateSlideshowSettings();
};
$scope.showNextScreen = function() {
var nextScreen = screenService.getNextScreen( $scope.screenID );
$scope.navigateToTargetScreen( nextScreen.id );
};
$scope.showPreviousScreen = function() {
var previousScreen = screenService.getPreviousScreen( $scope.screenID );
$scope.navigateToTargetScreen( previousScreen.id );
};
var renderContext = requestContext.getRenderContext( "preview", "screenID" );
var hotspotTimeout;
var hotspotWatcher = angular.noop;
var hotspotDebounced = false;
var hotspotDebounceTimeout = null;
var firstLoad = true;
$scope.screenID = requestContext.getParamAsInt( "screenID", $scope.defaultScreenIDForShare );
$scope.viewport = {
width: 0,
height: 0,
alignment: "center"
};
$scope.hotspots = [];
$scope.isSampleProject = getSampleProjectStatus( projectService.getProject() );
$scope.project = projectService.getProject();
$scope.isShowingHotspots = false;
$scope.isShowingSlideshowNav = false;
$scope.screens = screenService.getScreens();
$scope.screenCount = $scope.screens.length;
$scope.currentScreenIndex = 0;
$scope.$on(
"loadingSequenceCompleted",
function( event ) {
if ( $scope.screen ) {
$scope.setWindowTitle( $scope.screen.name );
}
}
);
$scope.$on(
"requestContextChanged",
function() {
if ( ! renderContext.isChangeRelevant() ) {
return;
}
$scope.screenID = requestContext.getParamAsInt( "screenID", $scope.defaultScreenIDForShare );
loadRemoteData();
$scope.isShowingHotspots = false;
$scope.hideOverlay();
}
);
if ( $scope.isLiveShare ) {
$scope.$on("liveshare_subscriber.showOverlay",function( event, screenID ) {
overlayScreen( screenID );
});
$scope.$on("liveshare_subscriber.hideOverlay",function( event ) {
$timeout(function() {
$scope.hideOverlay();
},1);
});
$scope.$watch("me.isPresenter", function( isPresenter, old ) {
hotspotWatcher(); // remove the existing watcher
if ( !isPresenter ) {
$scope.isShowingSlideshowNav = false;
sessionService.set("isSlideshowNavAllowed", false);
$scope.hideOverlay();
hotspotWatcher = $scope.$watch("hotspotData", function(data, oldData ) {
if ( data.eventType && data !== oldData && !$scope.liveSharePaused) {
if ( firstLoad ) {
firstLoad = false;
return;
}
clearTimeout(config.navTimeout);
if ( data.eventType == "hideOverlay" ) {
$scope.hideOverlay();
} else {
clearTimeout(hotspotTimeout);
$scope.applyHotspotNavigation( data.hotspot, data.eventType );
hotspotTimeout = setTimeout(function() {
$scope.$emit("liveshare_subscriber.resetSketchpad" );
},100);
}
}
});
} else {
sessionService.set("isSlideshowNavAllowed", true);
$scope.hideOverlay();
}
var firstLoad = true;
});
}
$scope.$watch(
"isShowingSlideshowNav",
function( newValue, oldValue ) {
$scope.$emit("isShowingSlideshowNav", newValue);
}
);
$scope.$on(
"showNextScreen",
function() {
$scope.showNextScreen();
}
);
$scope.$on(
"showPreviousScreen",
function() {
$scope.showPreviousScreen();
}
);
$scope.$on(
"autoRedirectTriggered.share",
function( event, hotspot ){
$scope.applyHotspotNavigation( hotspot, "click" );
}
);
$scope.$on(
"configUpdated.share",
function( localConfig ) {
if( localConfig != config ){
$scope.screens = screenService.getScreens();
$scope.screenCount = $scope.screens.length;
loadRemoteData();
}
}
);
loadRemoteData();
initShareSettings();
}
})( angular, InVision );
;
;
/*! screens-controller.js */ 
;
;
(function( ng, app ){
"use strict";
app.controller( "screens.ScreensController", Controller );
/** @ngInject */
function Controller( $scope, $timeout, $location, requestContext, screenService, hashKeyCopier, projectService, shareService, projectViewingService, hotspotService, _, config ) {
function applyBackgroundStyles( screen, suppressBackgroundOptions ) {
var style = {};
if ( $scope.project.isMobile ){
style[ "background" ] = "#afb2bd top center no-repeat";
} else {
style[ "border-style" ] = "";
style[ "border-image" ] = "none";
style[ "border-width" ] = "";
style[ "height" ] = "";
style[ "border-image-outset" ] = "";
style[ "background-attachment" ] = "";
style[ "background-position" ] = "";
if( ! $scope.project.isSnap ) {
style[ "background-color" ] = ( "#" + ( screen.backgroundColor || "FFFFFF" ) );
} else {
style[ "background-color" ] = "#f9f9fb";
}
if ( screen.backgroundImageUrl ) {
var offsetTop = $scope.subview == "comments" ? "55px" : "0px";
style[ "background-image" ] = ( "url( '" + screen.backgroundImageUrl + "' )" )
switch ( screen.backgroundImagePosition ) {
case "center":
case "50% 0 no-repeat": // TODO: remove after db is updated
style[ "background-position" ] = "50% " + offsetTop;
style[ "background-repeat" ] = "no-repeat";
break;
case "tile":
case "repeat": // TODO: remove after db is updated
style[ "background-position" ] = "0px " + offsetTop;
style[ "background-repeat" ] = "repeat";
break;
case "tile-horizontally":
case "0 0 repeat-x": // TODO: remove after db is updated
style[ "background-position" ] = "0px " + offsetTop;
style[ "background-repeat" ] = "repeat-x";
break;
case "fixed":
style[ "background-attachment" ] = "fixed";
style[ "background-repeat" ] = "no-repeat";
switch ( screen.alignment ){
case "left":
style[ "background-position" ] = "left top";
break;
case "center":
style[ "background-position" ] = "center top";
break;
case "right":
style[ "background-position" ] = "right top";
break;
default:
break;
}
break;
}
}
if( screen.backgroundImageClientFilename.indexOf("@2x") >= 0 ){
style["background-size"] = screen.backgroundImageWidth * 0.5 + "px " + screen.backgroundImageHeight * 0.5 + "px";
} else if ( screen.backgroundImageClientFilename.indexOf("@print") > 0 ) {
style["background-size"] = screen.backgroundImageWidth * 0.3333 + "px " + screen.backgroundImageHeight * 0.3333 + "px";
}
if ( screen.backgroundAutostretch ) {
style[ "background-image" ] = "";
style[ "border-style" ] = "solid";
style[ "border-image" ] = "url('" + screen.imageUrl + "') 0 0 0 " + ( screen.width - 1 ) + " fill stretch";
style[ "border-width" ] = "0px 1px 0px 1px";
style[ "height" ] = screen.height * screen.displayScale;
style[ "border-image-outset" ] = "0% 100%";
style["margin-left"] = "-1px";
style["margin-right"] = "-2px";
} else if ( screen.backgroundFrame ) {
}
}
$scope.setHeaderStyle( angular.copy(style) );
$scope.setBodyStyle( style );
$scope.setBodyClass( screen.backgroundFrame ? "framed" : "" );
}
function augmentScreen( screen ) {
if ( $scope.isPresentation && screen.title ) {
return;
}
screen.isImageLoaded = false;
screen.isGif = /\.gif$/i.test( screen.clientFilename );
screen.displayScale = $scope.getScreenDisplayScale( screen );
screen.now = new Date().getTime();
}
function augmentScreens( screens ) {
_.each( screens, augmentScreen );
return( screens );
}
function getScreensToPreload() {
if ( $scope.project.isMobile ) {
return( $scope.screens );
}
var screens = _.filter(
$scope.screens,
function( screen ) {
return( screen.distanceFromStartScreen <= 1 );
}
);
return( screens );
}
function sortScreensByRelevance( screens ) {
var startScreen = _.findWithProperty( screens, "id", $scope.screenID );
if ( ! startScreen ) {
startScreen = _.findWithProperty( screens, "id", $scope.defaultScreenIDForShare );
}
startScreen.distanceFromStartScreen = 0;
var index = _.indexOf( screens, startScreen );
for ( var i = ( index + 1 ) ; i < screens.length ; i++ ) {
screens[ i ].distanceFromStartScreen = ( i - index );
}
for ( var i = ( index - 1 ) ; i >= 0 ; i-- ) {
if ( i == ( index - 1 ) ) {
screens[ i ].distanceFromStartScreen = ( index - i );
} else {
screens[ i ].distanceFromStartScreen = ( screens.length - 1 - i );
}
}
spiderScreensForNavigationalDistance(
screens,
_.pluck( screens, "id" ),		// List of all the screen IDs (for sort-based hotspots).
startScreen.id,					// Current screen to examine.
1,								// Start depth of spidering.
1								// Max depth of spidering
);
screens.sort(
function( a, b ) {
if ( a.distanceFromStartScreen < b.distanceFromStartScreen ) {
return( -1 );
}
if ( a.distanceFromStartScreen > b.distanceFromStartScreen ) {
return( 1 );
}
return( 0 );
}
);
return( screens );
}
function spiderScreensForNavigationalDistance( screens, allScreenIDs, screenID, depth, maxDepth ) {
if ( depth > maxDepth ) {
return;
}
var hotspots = hotspotService.getHotspotsByScreenID( screenID );
for ( var i = 0 ; i < hotspots.length ; i++ ) {
var hotspot = hotspots[ i ];
if ( hotspot.targetTypeID === hotspotService.targetTypes.screen ) {
var targetScreen = _.findWithProperty( screens, "id", hotspot.targetScreenID );
if ( ! targetScreen ) {
continue;
}
targetScreen.distanceFromStartScreen = Math.min(
targetScreen.distanceFromStartScreen,
( hotspot.templateID ? ( depth + .5 ) : depth )
);
spiderScreensForNavigationalDistance( screens, allScreenIDs, targetScreen.id, ( depth + 1 ), maxDepth );
} else if ( hotspot.targetTypeID === hotspotService.targetTypes.nextScreenInSort ) {
var currentIndex = _.indexOf( allScreenIDs, screenID );
if ( currentIndex < ( screens.length - 1 ) ) {
var targetScreen = screens[ currentIndex + 1 ];
targetScreen.distanceFromStartScreen = Math.min( targetScreen.distanceFromStartScreen, depth );
spiderScreensForNavigationalDistance( screens, allScreenIDs, targetScreen.id, ( depth + 1 ), maxDepth );
}
}
} // END: For.
}
$scope.imageLoadedForScreen = function( screen ) {
if ( !screen ) {
return;
}
screen.isImageLoaded = true;
if ( $scope.getPercentOfScreensLoaded() >= 100 ) {
return;
}
if ( _.findWithProperty( $scope.screensToPreload, "id", screen.id ) ) {
$scope.screensThatHavePreloaded.push( screen );
}
var percent = Math.floor( $scope.screensThatHavePreloaded.length / $scope.screensToPreload.length * 100 );
$scope.setPercentOfScreensLoaded( percent );
}
var renderContext = requestContext.getRenderContext( "", "screenID" );
var numberOfScreensLoaded = 0;
$scope.share = shareService.getShare();
$scope.screenID = requestContext.getParamAsInt( "screenID", $scope.defaultScreenIDForShare );
if ( !$scope.isPresentation ) {
$scope.screens = sortScreensByRelevance( augmentScreens( screenService.getScreens() ) );
} else { // for presentations, $scope.screens is already defined, but we should augment
augmentScreens( $scope.screens );
}
$scope.screensToPreload = getScreensToPreload();
$scope.screensThatHavePreloaded = [];
$scope.project = projectService.getProject();
$scope.selectedScreen = _.findWithProperty( $scope.screens, "id", $scope.screenID );
if ( $scope.selectedScreen ) {
applyBackgroundStyles( $scope.selectedScreen );
} else {
$location.url( "/" );
}
$scope.$on(
"requestContextChanged",
function() {
if ( ! renderContext.isChangeRelevant() ) {
return;
}
var previousScreenID = $scope.screenID;
$scope.screenID = requestContext.getParamAsInt( "screenID", $scope.defaultScreenIDForShare );
if ( previousScreenID !== $scope.screenID ) {
$scope.selectedScreen = _.findWithProperty( $scope.screens, "id", $scope.screenID );
if ( $scope.selectedScreen ) {
applyBackgroundStyles( $scope.selectedScreen );
} else {
return( $location.url( "/" ) );
}
}
}
);
$scope.$watch( "subview", function( newValue, oldValue){
if( newValue != oldValue){
applyBackgroundStyles( $scope.selectedScreen );
}
});
$scope.$on("liveshare_subscriber.toggleSketchMode", function( event, value ) {
if ( !value ) { // if we're fading out, apply the background styles late
/*setTimeout(function() {
applyBackgroundStyles( $scope.selectedScreen, value );
},1100);*/
$timeout(function() {
applyBackgroundStyles( $scope.selectedScreen, value );
},600);
return;
}
applyBackgroundStyles( $scope.selectedScreen, value );
});
$scope.$on(
"configUpdated.share",
function(localConfig){
if( localConfig != config && !$scope.isPresentation ){
$scope.screens = sortScreensByRelevance( augmentScreens( screenService.getScreens() ) );
_.setProperty( $scope.screens, "isImageLoaded", true );
$scope.selectedScreen = _.findWithProperty( $scope.screens, "id", $scope.screenID );
applyBackgroundStyles( $scope.selectedScreen );
}
}
);
$(window).on("resize.shareScreens", function windowResize(){
$scope.screens = sortScreensByRelevance( augmentScreens( screenService.getScreens() ) );
$scope.$apply();
});
}
})( angular, InVision );
;
;
/*! toolbar-controller.js */ 
;
;
(function( ng, app ){
"use strict";
app.controller( "toolbar.ToolbarController", Controller );
/** @ngInject */
function Controller( $scope, requestContext, shareService, conversationService, commentService, modelEvents, config, _ , accountService, screenService, hotspotService, userPreferenceService) {
function applyRemoteData( share, screens, comments, hotspots ) {
$scope.share = share;
$scope.includeBrowseTool = share.isLoadAllScreens;
$scope.includeCommentsTool = share.isCommentingAllowed;
if ( $scope.isLiveShare && !$scope.isPresenter ) {
$scope.includeBrowseTool = false;
}
$scope.commentCount = comments.length;
$scope.unreadCommentCount = _.countWithProperty( comments, "isUnread", true );
tourData.hasMultipleScreens = screens.length > 1;
tourData.hasHotSpots = hotspots.length > 0;
$scope.displayFilename = sanitizePhotoshopFilename( $scope.screen.clientFilename );
}
function loadRemoteData() {
var comments = [];
var conversations = conversationService.getConversationsByScreenID( $scope.screenID );
for ( var i = 0, length = conversations.length ; i < length ; i++ ) {
comments = comments.concat( commentService.getCommentsByConversationID( conversations[ i ].id ) );
}
var screens = screenService.getScreens();
var hotspots = hotspotService.getAllHotSpots();
var share = shareService.getShare();
applyRemoteData( share, screens, comments, hotspots );
}
function sanitizePhotoshopFilename( clientFilename ) {
if ( ! clientFilename ) {
return( "" );
}
return(
clientFilename
.replace( /@2x@2x/i, "@2x" )
.replace( /@print/i, "" )
);
}
$scope.closeIntroduction = function() {
$scope.isShowingIntroduction = false;
$scope.updateActiveStatus();
};
$scope.updateActiveStatus = function() {
$scope.isActive = false;
if ( 
$scope.isUserOverToolbar || 
$scope.isShowingComments || 
$scope.isBrowseOpen || 
$scope.isShowingIntroduction || 
( !$scope.hasSeenCommentsTooltip && !$scope.isLiveShare )
) {
$scope.isActive = true;
}
};
$scope.toggleShareModal = function() {
$scope.isShowingShareModal = !$scope.isShowingShareModal;
}
$scope.hasSeenCommentTooltip = function(){
accountService.markHasSeenCommentTooltip( 1 );
$scope.hasSeenCommentsTooltip = true;
$scope.isActive = false;
modelEvents.trigger( "toolbarOpacityChange", $scope.isActive );
};
$scope.updateIsUserOverToolbar = function( isUserOverToolbar ) {
$scope.isUserOverToolbar = isUserOverToolbar;
$scope.updateActiveStatus();
}
$scope.showShareTour = function(){
$scope.openModalWindow( 'shareTour', tourData );
}
$scope.shouldShowBounceToolTip = function(){
var showBouncyToolTip = false;
if ( $scope.includeCommentsTool && 
!$scope.hasSeenCommentsTooltip &&
!$scope.isLiveShare &&
!$scope.isShareTourRunning ){
showBouncyToolTip = true;
}
return showBouncyToolTip;
}
$scope.shouldShowHelpQuestionMark = function(){
var showHelperQuestionMark = false;
if (!$scope.isLiveShare &&
!$scope.hasSeenShareWalkThrough &&
( $scope.includeCommentsTool || $scope.includeBrowseTool ) ){
showHelperQuestionMark = true;
}
return showHelperQuestionMark;
}
var renderContext = requestContext.getRenderContext( "", "screenID" );
var tourData = { hasMultipleScreens: true, hasHotSpots: true  };
$scope.screenID = requestContext.getParamAsInt( "screenID", $scope.defaultScreenIDForShare );
$scope.displayFilename = "";
$scope.share = null;
$scope.includeBrowseTool = false;
$scope.includeCommentsTool = false;
$scope.isShowingComments = ( renderContext.getNextSection() === "comments" );
$scope.commentCount = 0;
$scope.unreadCommentCount = 0;
$scope.isUserOverToolbar = false;
$scope.isActive = false;
$scope.isShowingIntroduction = false;
$scope.isShowingShareModal = false;
$scope.isShareTourRunning = false;
$scope.tourSubView = "";
$scope.hasSeenTour = false;
$scope.hasSeenCommentsTooltip = ( config.user.hasSeenCommentToolTip || false );
$scope.HomeURI = "http://www.invisionapp.com/?utm_medium=virality&utm_source=Snaps%20CTA";
if ( config.user.id == $scope.screen.userID ) {
$scope.HomeURI = "/d/main#/snaps";
} else if ( config.user.isAccountAuthenticated ) {
$scope.HomeURI = "/";
}
$scope.shareUrl = ( !! $scope.$parent.$parent.share.key ) ? "http://invis.io/" + $scope.$parent.$parent.share.key : null;
$scope.$on(
"$destroy",
function() {
modelEvents.off( "commentCreated.toolbar" );
modelEvents.off( "commentDeleted.toolbar" );
modelEvents.off( "conversationDeleted.toolbar" );
modelEvents.off( "conversationMarkedRead.toolbar" );
modelEvents.off( "poweredByOpacityChange.toolbar" );
modelEvents.off( "shareTourSubview.toolbar" );
modelEvents.off( "shareTour.toolbar" );
modelEvents.off( "markHasSeenCommentTooltipFromTour.toolbar" );
}
);
$scope.$watch(
"isBrowseOpen",
function() {
$scope.updateActiveStatus();
}
);
$scope.$watch(
"isShowingComments",
function( newValue, oldValue ) {
var isAlreadyShowingComments = ( renderContext.getNextSection() === "comments" );
if ( newValue && ! isAlreadyShowingComments ) {
if( $scope.isShowingSmsForm ) {
$scope.toggleSmsShareForm();
}
$scope.navigateToScreenComments();
} else if ( ! newValue && isAlreadyShowingComments ) {
$scope.navigateToScreenPreview();
}
}
);
$scope.$on(
"requestContextChanged",
function() {
if ( ! renderContext.isChangeRelevant() ) {
return;
}
$scope.isShowingComments = ( renderContext.getNextSection() === "comments" );
if ( requestContext.hasParamChanged( "screenID" ) ) {
$scope.screenID = requestContext.getParamAsInt( "screenID", $scope.defaultScreenIDForShare );
loadRemoteData();
}
$scope.updateActiveStatus();
}
);
if ( $scope.isLiveShare ) {
$scope.$watch("isPresenter", function( newVal, oldVal ) {
$scope.includeBrowseTool = newVal;
});
}
modelEvents.on(
[
"commentCreated.toolbar",
"commentDeleted.toolbar"
],
function( event ) {
loadRemoteData();
}
);
modelEvents.on(
[
"conversationDeleted.toolbar",
"conversationMarkedRead.toolbar"
],
function( event, conversationID ) {
loadRemoteData();
}
);
modelEvents.on( 
"poweredByOpacityChange.toolbar", 
function( event, isActive ) {
if( ! $scope.isShowingComments ) {
$scope.isActive = isActive; 
}
}
);
modelEvents.on(
"shareTourSubview.toolbar",
function( event, tourSubView ){
$scope.tourSubView = tourSubView;
}
);
modelEvents.on(
"shareTour.toolbar",
function( event, isShareTourRunning ){
$scope.isShareTourRunning = isShareTourRunning;
$scope.hasSeenTour = true;
if( !isShareTourRunning ){
$scope.tourSubView = "";
}
}
);
modelEvents.on(
"markHasSeenCommentTooltipFromTour.toolbar",
function( event ) {
$scope.hasSeenCommentTooltip();
}
);
$scope.$on(
"configUpdated.share",
function( localConfig ) {
loadRemoteData();
}
);
loadRemoteData();
}
})( angular, InVision );
;
;
/*! add-padding-on-scroll.js */ 
;
;
(function( ng, app ) {
"use strict";
app.directive( "invAddPaddingOnScroll", Directive );
/** @ngInject */
function Directive( $timeout ) {
var linkFunction = function( $scope, element ) {
var $win = $(window),
$body = $("body"),
$element = $(element),
windowHeight = $win.height(),
extraPadding = 50,
hasExtraPadding = false,
scrollDelay = 1000;
function init() {
if ( ( $scope.screen.height * $scope.screen.displayScale ) > windowHeight ) {
$win.on("scroll.invAddPaddingOnScroll", function() {
var scrollBottom = $scope.screen.height * $scope.screen.displayScale;
if ( hasExtraPadding ) {
if ( ( $win.scrollTop() + windowHeight ) < ( scrollBottom - extraPadding ) ) {
removeExtraPadding();
}
} else {
if ( ( $win.scrollTop() + windowHeight ) > scrollBottom ) {
addExtraPadding();
}
}
});
}
}
function destroy() {
$win.off("scroll.invAddPaddingOnScroll");
removeExtraPadding();
}
function addExtraPadding() {
if ( hasExtraPadding ) {
return;
}
hasExtraPadding = true;
$timeout(function() {
$element.css({
paddingBottom: extraPadding
});
}, scrollDelay);
}
function removeExtraPadding() {
if ( ! hasExtraPadding ) {
return;
}
hasExtraPadding = false;
$element.css({
paddingBottom: 0
});
}
$win.on("resize.invAddPaddingOnScroll", function() {
destroy();
$timeout(init);
});
$scope.$on(
"$destroy",
function() {
destroy();
$win.off("resize.invAddPaddingOnScroll");
}
);
$timeout(init);
};
return({
link: linkFunction,
restrict: "A"
});
}
})( angular, InVision );
;
;
/*! autofocus.js */ 
;
;
(function( ng, app ) {
"use strict";
app.directive(
"invAutofocus",
function() {
var linkFunction = function( $scope, element, attributes ) {
function focus() {
setTimeout( 
function() {
target[ 0 ].focus();
}
);
}
var target = $( element );
var modal = target.closest( "div[ inv-modal ]" );
if ( 
( modal.length === 1 ) &&
( modal.is( ".fade" ) && ! modal.is( ".in" ) )
) {
modal.on(
"shown.invAutofocus",
function() {
focus();
}
);
} else if ( target.is( ":visible" ) ) {
focus();
}
$scope.$watch(
function() {
return(
target.is( ":visible" )
);
},
function( newValue, oldValue ) {
if ( 
( newValue === true ) &&
( newValue !== oldValue )
) {
focus();
}
}
);
$scope.$on(
"$destroy",
function() {
modal.off( "shown.invAutofocus" );				
}
);
};
return({
link: linkFunction,
restrict: "A"
});
}
);
})( angular, InVision );
;
;
/*! autosize.js */ 
;
;
(function( ng, app ) {
"use strict";
app.directive(
"invAutosize",
function() {
var linkFunction = function( $scope, element, attributes ) {
function getInitialDelta() {
var content = element.val();
element.val( "" );
var height = element.outerHeight();
var scrollHeight = element[ 0 ].scrollHeight;
var delta = Math.max( 0, ( scrollHeight - height ) );
element.val( content );
return( delta );
}
function resize() {
var height = element.outerHeight();
var scrollHeight = element[ 0 ].scrollHeight;
var scrollableHeight = ( scrollHeight - height - initialDelta );
if ( scrollableHeight <= 0 ) {
return;
}
var newHeight = scrollHeight;
element.height( newHeight );
}
element.addClass( "autosize" );
var initialDelta = getInitialDelta();
element.on(
"keyup.invAutosize",
function( event ) {
if ( element.val() === "" ) {
element.height( initialDelta );
return;
};
resize();
}
);
$scope.$on(
"$destroy",
function() {
element.off( "keypress.invAutosize" );
}
);
};
return({
link: linkFunction,
priority: 2,
restrict: "A"
});
}
);
})( angular, InVision );
;
;
/*! bouncyTooltip.js */ 
;
;
(function( ng, app ) {
"use strict";
app.directive(
"invBouncyTooltip",
function() {
var linkFunction = function( $scope, element, attributes ) {
var target = $( element );
var tooltipInstance = null;
var styleClass = ( attributes.tooltipstyleclass || "" );
var message = ( attributes.msg || "no message" );
var callback = ( attributes.callback || null );
var $tooltip = $('<div class="popover top comment-tip floating '+ styleClass + '"><i></i><div class="arrow"></div><div class="popover-content">' + message + '</div></div>');
$tooltip
.appendTo(target)
.on('mouseenter', function(){
$(this).removeClass('cssRunning').addClass('cssPause');
})
.on('mouseleave', function(){
$(this).removeClass('cssPause').addClass('cssRunning');
});
$('i', $tooltip).on('click', function(){
$tooltip.fadeOut(200, function(){
$tooltip.remove();
if(callback){
$scope.$apply( callback );
}
});
});
$scope.$on(
"$destroy",
function() {
if ( tooltipInstance ) {
tooltipInstance.remove();
}
}
);
};
return({
link: linkFunction,
restrict: "A",
scope: false
});
}
);
})( angular, InVision );
;
;
/*! browse-key-combos.js */ 
;
;
(function( ng, app ) {
"use strict";
app.directive(
"invBrowseKeyCombos",
/** @ngInject */
function( $document, keyComboHelper, _ ) {
var linkFunction = function( $scope, element, attributes, keyCombosController ) {
function closeBrowse() {
$scope.$apply(
function() {
$scope.closeBrowse();
}
);
}
var listenerConfig = {};
listenerConfig[ "keydown.invBrowseKeyCombos" ] = function( event ) {
if ( event.metaKey ) {
return;
}
if ( keyComboHelper.isEscapeKeyEvent( event ) ) {
closeBrowse();
}
};
keyCombosController.addListener( listenerConfig );
$scope.$on(
"$destroy",
function() {
keyCombosController.removeListener( listenerConfig );
}
);
};
return({
link: linkFunction,
require: "^invKeyCombos",
restrict: "A"
});
}
);
})( angular, InVision );
;
;
/*! comments-catchup-toolbar-helper.js */ 
;
;
(function( ng, app ) {
"use strict";
app.directive( "invCommentsCatchupToolbarHelper", Directive );
/** @ngInject */
function Directive( $window, $timeout ) {
var linkFunction = function( $scope, element, attributes ) {
function updateMarkerCapacity() {
var markerWidth = 35;
var calloutWidth = 150;
var hiddenCalloutWidth = 65;
var filterWidth = 400;
var windowWidth = win.width();
var wiggleRoom = 100;
var minMarkerCount = 10;
var availableWidth = ( windowWidth - calloutWidth - hiddenCalloutWidth - filterWidth - wiggleRoom );
var markerCapacity = Math.floor( availableWidth / markerWidth );
$scope.updateUnreadConversationCapacity(
Math.max( markerCapacity, minMarkerCount ) 
);
}
var win = $( $window ).on(
"resize.invCommentsCatchupToolbarHelper", 
function( event ) {
$scope.$apply(
function() {
updateMarkerCapacity();
}
);
}
);
$timeout( updateMarkerCapacity );
$scope.$on(
"$destroy",
function() {
win.off( "resize.invCommentsCatchupToolbarHelper" );
}
);
};
return({
link: linkFunction,
restrict: "A"
});
}
})( angular, InVision );
;
;
/*! comments-cursor-tooltip.js */ 
;
;
(function( ng, app ) {
"use strict";
app.directive(
"invCommentsCursorTooltip",
function() {
var linkFunction = function( $scope, element, attributes ) {
var $document = $(document),
$win = $(window);
$document.on("mousemove.cursorTooltip", function(e){
$(element).css({
left: ( e.pageX - $win.scrollLeft() ) + 15,
top: ( e.pageY - $win.scrollTop() ) - 10
});
});
$scope.$on(
"$destroy",
function() {
$document.off("mousemove.cursorTooltip");
}
);
};
return({
link: linkFunction,
restrict: "A",
scope: false
});
}
);
})( angular, InVision );
;
;
/*! comments-form-key-combos.js */ 
;
;
(function( ng, app ) {
"use strict";
app.directive(
"invCommentsFormKeyCombos",
/** @ngInject */
function( $document, keyComboHelper, _ ) {
var linkFunction = function( $scope, element, attributes, keyCombosController ) {
function closeForm() {
$scope.$apply(
function() {
$scope.closeConversation();
}
);
}
function showNextConversation() {
if ( $scope.areMarkersDirty() ) {
return(
alert( "Oops, you haven't saved your comment!" )
);
}
if ( $scope.conversation.id === 0 ) {
return;
}
$scope.$apply(
function() {
$scope.showNextConversation();
}
);
}
function showPreviousConversation() {
if ( $scope.areMarkersDirty() ) {
return(
alert( "Oops, you haven't saved your comment!" )
);
}
if ( $scope.conversation.id === 0 ) {
return;
}
$scope.$apply(
function() {
$scope.showPreviousConversation();
}
);
}
var listenerConfig = {};
listenerConfig[ "keydown.invCommentsFormKeyCombos" ] = function( event ) {
if ( event.metaKey ) {
return;
}
var target = $( event.target );
if ( keyComboHelper.isEscapeKeyEvent( event ) ) {
closeForm();
} else if ( ! target.is( ":input" ) ) {
if ( keyComboHelper.isLeftArrowKeyEvent( event ) ) {
showPreviousConversation();
} else if ( keyComboHelper.isRightArrowKeyEvent( event ) ) {
showNextConversation();
}
}
};
keyCombosController.addListener( listenerConfig );
$scope.$on(
"$destroy",
function() {
keyCombosController.removeListener( listenerConfig );
}
);
};
return({
link: linkFunction,
require: "^invKeyCombos",
restrict: "A"
});
}
);
})( angular, InVision );
;
;
/*! comments-form.js */ 
;
;
(function( ng, app ) {
"use strict";
app.directive(
"invCommentsForm",
/** @ngInject */
function( $window, $document, $timeout, _ ) {
var linkFunction = function( $scope, element, attributes, markersController ) {
function updatePosition( markerX, markerY ) {
var formWidth = 550,
formPadding = 10;
element.css({
left: ( markerX + "px" ),
top: ( markerY + "px" )
});
var rightmostOffset = ( containerOffset.left + markerX + formWidth + formPadding );
if ( rightmostOffset > documentWidth ) {
element.addClass( "left" );
} else {
element.removeClass( "left" );
}
}
var documentWidth = $document.width();
var viewport = element.closest( "div.viewport" );
var containerOffset = viewport.offset();
markersController.setCallback( updatePosition );
updatePosition( $scope.conversation.x, $scope.conversation.y );
$scope.showCommentInput = function() {
$scope.isCommentInputVisible = true;
$timeout( function(){
element.find( "textarea" ).focus();
});
};
if ( $scope.conversation.id === 0 ) {
$scope.showCommentInput();
$scope.isShowingUserList = true;
}
$( window ).on(
"resize.invCommentsForm",
function( event ) {
documentWidth = $document.width();
containerOffset = viewport.offset();
}
);
$document.on("keydown.invCommentsForm", function(e) {
if ( e.keyCode === 13 && ( e.metaKey || e.ctrlKey ) ) {
$scope.$apply(
function invokeNgSubmitBinding() {
$scope.$eval( attributes.ngSubmit );
}
);
}
});
$scope.$on(
"$destroy",
function() {
markersController.clearCallback();
$document.off( "resize.invCommentsForm" );
$document.off( "keydown.invCommentsForm" );
}
);
};
return({
link: linkFunction,
require: "^invCommentsMarkers",
restrict: "A"
});
}
);
})( angular, InVision );
;
;
/*! comments-key-combos.js */ 
;
;
(function( ng, app ) {
"use strict";
app.directive(
"invCommentsKeyCombos",
/** @ngInject */
function( $document, $location, keyComboHelper, screenService, _ ) {
var linkFunction = function( $scope, element, attributes, keyCombosController ) {
function showBrowse() {
$scope.$apply(
function() {
$scope.openBrowse();
}
);
}
function showNextScreen() {
$scope.$apply(
function() {
var nextScreen = screenService.getNextScreen( $scope.screenID );
$location.url( "/screens/" + nextScreen.id + "/comments" );
}
);
}
function showPreview() {
$scope.$apply(
function() {
$scope.navigateToScreenPreview();
}
);
}
function showPreviousScreen() {
$scope.$apply(
function() {
var previousScreen = screenService.getPreviousScreen( $scope.screenID );
$location.url( "/screens/" + previousScreen.id + "/comments" );
}
);
}
var listenerConfig = {};
listenerConfig[ "keydown.invCommentsKeyCombos" ] = function( event ) {
if ( event.metaKey ) {
return;
}
if ( !$scope.isShowingSketchBuilder && !$scope.isShowingSketchViewer ){
if ( keyComboHelper.isEscapeKeyEvent( event ) ) {
showPreview();
} else if ( keyComboHelper.isLeftArrowKeyEvent( event ) ) {
event.preventDefault();
if ( $scope.isLiveShare && !$scope.isPresenter ) {
return;
}
showPreviousScreen();
} else if ( keyComboHelper.isRightArrowKeyEvent( event ) ) {
event.preventDefault();
if ( $scope.isLiveShare && !$scope.isPresenter ) {
return;
}
showNextScreen();
} else if ( !event.ctrlKey && keyComboHelper.isCharKeyEvent( event, "c" ) ) {
event.preventDefault();
showPreview();
} else if ( 
keyComboHelper.isCharKeyEvent( event, "b" ) ||
keyComboHelper.isCharKeyEvent( event, "j" ) 
) {
event.preventDefault();
if ( $scope.isLiveShare && !$scope.isPresenter ) {
return;
}
showBrowse();
}
}
};
keyCombosController.addListener( listenerConfig );
$scope.$on(
"$destroy",
function() {
keyCombosController.removeListener( listenerConfig );
}
);
};
return({
link: linkFunction,
require: "^invKeyCombos",
restrict: "A"
});
}
);
})( angular, InVision );
;
;
/*! comments-markers.js */ 
;
;
(function( ng, app ) {
"use strict";
app.directive(
"invCommentsMarkers",
/** @ngInject */
function( $document, $location, $timeout, _ ) {
function Controller() {
function announceMarkerPosition( markerX, markerY ) {
if ( ! formPositionCallback ) {
return;
}
formPositionCallback( markerX, markerY );
}
function clearCallback() {
formPositionCallback = null;
}
function setCallback( callback ) {
formPositionCallback = callback;
}
var formPositionCallback = null;
return({
announceMarkerPosition: announceMarkerPosition,
clearCallback: clearCallback,
setCallback: setCallback
});
}
var linkFunction = function( $scope, element, attributes, markersController ) {
function ConversationActivationState( stateManager, marker, initialPageX, initialPageY ) {
function handleMouseMove( event ) {
if ( hasMoved( event.pageX, event.pageY ) ) {
stateManager.gotoState( MovingConversationState, marker, initialPageX, initialPageY, event.pageX, event.pageY );
}
}
function handleMouseUp( event ) {
if ( $scope.areMarkersDirty() ) {
alert( "Oops, you haven't saved your comment!" );
} else {
$scope.$apply(
function() {
$scope.closeConversation();
}
);
}
cancelClick = true;
stateManager.gotoState( ReadyState );
}
function hasMoved( pageX, pageY ) {
var tolerance = 3;
return(
( Math.abs( initialPageX - pageX ) > tolerance ) ||
( Math.abs( initialPageY - pageY ) > tolerance )
);
}
function teardown() {
viewport.off( "mousemove.invCommentMarkers" );
viewport.off( "mouseup.invCommentMarkers" );
}
viewport.on( "mousemove.invCommentMarkers", handleMouseMove );
viewport.on( "mouseup.invCommentMarkers", handleMouseUp );
return( teardown );
}
function MarkerActivationState( stateManager, marker, initialPageX, initialPageY ) {
function handleMouseMove( event ) {
if ( hasMoved( event.pageX, event.pageY ) ) {
stateManager.gotoState( MovingMarkerState, marker, initialPageX, initialPageY, event.pageX, event.pageY );
}
}
function handleMouseUp( event ) {
stateManager.gotoState( ReadyState );
}
function hasMoved( pageX, pageY ) {
var tolerance = 3;
return(
( Math.abs( initialPageX - pageX ) > tolerance ) ||
( Math.abs( initialPageY - pageY ) > tolerance )
);
}
function teardown() {
viewport.off( "mousemove.invCommentMarkers" );
viewport.off( "mouseup.invCommentMarkers" );
}
viewport.on( "mousemove.invCommentMarkers", handleMouseMove );
viewport.on( "mouseup.invCommentMarkers", handleMouseUp );
return( teardown );
}
function MovingConversationState( stateManager, marker, initialPageX, initialPageY, currentPageX, currentPageY ) {
function getLocalPosition( pageX, pageY ) {
var deltaX = ( initialPageX - pageX );
var deltaY = ( initialPageY - pageY );
var newX = ( initialMarkerPosition.left - deltaX );
var newY = ( initialMarkerPosition.top - deltaY );
return({
left: newX,
top: newY
});
}
function handleMouseMove( event ) {
updateMarkerPosition( event.pageX, event.pageY );
}
function handleMouseUp( event ) {
var position = marker.position();
$scope.$apply(
function() {
$scope.updateConversationPosition( marker.scope().conversation, position.left, position.top );
}
);
stateManager.gotoState( ReadyState );
}
function teardown() {
$document.off( "mousemove.invCommentMarkers" );
$document.off( "mouseup.invCommentMarkers" );
marker.removeClass( "activation" );
}
function updateMarkerPosition( pageX, pageY ) {
var localPosition = getLocalPosition( pageX, pageY );
marker.css({
left: ( localPosition.left  + "px" ),
top: ( localPosition.top + "px" )
});
markersController.announceMarkerPosition( localPosition.left, localPosition.top );
}
$document.on( "mousemove.invCommentMarkers", handleMouseMove );
$document.on( "mouseup.invCommentMarkers", handleMouseUp );
var initialMarkerPosition = marker.position();
var containerOffset = viewport.offset();
updateMarkerPosition( currentPageX, currentPageY );
marker.addClass( "activation" );
cancelClick = true;
return( teardown );
}
function MovingMarkerState( stateManager, marker, initialPageX, initialPageY, currentPageX, currentPageY ) {
function getLocalPosition( pageX, pageY ) {
var deltaX = ( initialPageX - pageX );
var deltaY = ( initialPageY - pageY );
var newX = ( initialMarkerPosition.left - deltaX );
var newY = ( initialMarkerPosition.top - deltaY );
return({
left: newX,
top: newY
});
}
function handleMouseMove( event ) {
updateMarkerPosition( event.pageX, event.pageY );
}
function handleMouseUp( event ) {
var position = marker.position();
$scope.$apply(
function() {
$scope.updateConversationPosition( marker.scope().conversation, position.left, position.top );
}
);
stateManager.gotoState( ReadyState );
}
function teardown() {
$document.off( "mousemove.invCommentMarkers" );
$document.off( "mouseup.invCommentMarkers" );
marker.removeClass( "activation" );
}
function updateMarkerPosition( pageX, pageY ) {
var localPosition = getLocalPosition( pageX, pageY );
marker.css({
left: ( localPosition.left + "px" ),
top: ( localPosition.top + "px" )
});
}
$document.on( "mousemove.invCommentMarkers", handleMouseMove );
$document.on( "mouseup.invCommentMarkers", handleMouseUp );
var initialMarkerPosition = marker.position();
updateMarkerPosition( currentPageX, currentPageY );
marker.addClass( "activation" );
cancelClick = true;
return( teardown );
}
function MovingNewConversationState( stateManager, marker, initialPageX, initialPageY, currentPageX, currentPageY ) {
function getLocalPosition( pageX, pageY ) {
var deltaX = ( initialPageX - pageX );
var deltaY = ( initialPageY - pageY );
var newX = ( initialMarkerPosition.left - deltaX );
var newY = ( initialMarkerPosition.top - deltaY );
return({
left: newX,
top: newY
});
}
function handleMouseMove( event ) {
updateMarkerPosition( event.pageX, event.pageY );
}
function handleMouseUp( event ) {
var position = marker.position();
$scope.$apply(
function() {
$scope.updateNewConversationPosition( position.left, position.top );
}
);
stateManager.gotoState( ReadyState );
}
function teardown() {
$document.off( "mousemove.invCommentMarkers" );
$document.off( "mouseup.invCommentMarkers" );
marker.removeClass( "activation" );
}
function updateMarkerPosition( pageX, pageY ) {
var localPosition = getLocalPosition( pageX, pageY );
marker.css({
left: ( localPosition.left + "px" ),
top: ( localPosition.top + "px" )
});
markersController.announceMarkerPosition( localPosition.left, localPosition.top );
}
$document.on( "mousemove.invCommentMarkers", handleMouseMove );
$document.on( "mouseup.invCommentMarkers", handleMouseUp );
var initialMarkerPosition = marker.position();
var containerOffset = viewport.offset();
updateMarkerPosition( currentPageX, currentPageY );
marker.addClass( "activation" );
cancelClick = true;
return( teardown );
}
function NewConversationActivationState( stateManager, marker, initialPageX, initialPageY ) {
function handleMouseMove( event ) {
if ( hasMoved( event.pageX, event.pageY ) ) {
stateManager.gotoState( MovingNewConversationState, marker, initialPageX, initialPageY, event.pageX, event.pageY );
}
}
function handleMouseUp( event ) {
if ( $scope.areMarkersDirty() ) {
alert( "Oops, you haven't saved your comment!" );
} else {
$scope.$apply(
function() {
$scope.closeConversation();
}
);
}
stateManager.gotoState( ReadyState );
}
function hasMoved( pageX, pageY ) {
var tolerance = 3;
return(
( Math.abs( initialPageX - pageX ) > tolerance ) ||
( Math.abs( initialPageY - pageY ) > tolerance )
);
}
function teardown() {
viewport.off( "mousemove.invCommentMarkers" );
viewport.off( "mouseup.invCommentMarkers" );
}
viewport.on( "mousemove.invCommentMarkers", handleMouseMove );
viewport.on( "mouseup.invCommentMarkers", handleMouseUp );
return( teardown );
}
function PotentialMarkerState( stateManager, initialPageX, initialPageY ) {
function handleMouseLeave() {
stateManager.gotoState( ReadyState );
}
function handleMouseUp( event ) {
if ( hasMoved( event.pageX, event.pageY ) ) {
stateManager.gotoState( ReadyState );
} else {
var viewportOffset = viewport.offset();
var x = ( initialPageX - viewportOffset.left - 24 );
var y = ( initialPageY - viewportOffset.top - 24 );
$scope.$apply(
function() {
$scope.startNewConversation( x, y );
}
);
stateManager.gotoState( ReadyState );
}
}
function hasMoved( pageX, pageY ) {
var tolerance = 3;
return(
( Math.abs( initialPageX - pageX ) > tolerance ) ||
( Math.abs( initialPageY - pageY ) > tolerance )
);
}
function teardown() {
viewport.off( "mouseleave.invCommentMarkers" );
viewport.off( "mouseup.invCommentMarkers" );
}
viewport.on( "mouseleave.invCommentMarkers", handleMouseLeave );
viewport.on( "mouseup.invCommentMarkers", handleMouseUp );
return( teardown );
}
function ReadyState( stateManager ) {
function handleMouseDown( event ) {
var target = $( event.target );
if ( target.closest( "form.conversation" ).length ) {
return;
}
if ( target.is( ".marker" ) ) {
handleMouseDownOnMarker( event );
} else if ( target.is( ".viewport" ) ) {
handleMouseDownOnViewport( event );
}
}
function handleMouseDownOnMarker( event ) {
event.preventDefault(); // Prevent any dragging.
var target = $( event.target );
if ( $scope.selectedConversation ) {
if ( $scope.selectedConversation === target.scope().conversation ) {
stateManager.gotoState( ConversationActivationState, target, event.pageX, event.pageY );
} else if ( $scope.areMarkersDirty() ) {
alert( "Oops, you haven't saved your comment!" );
}
} else if ( $scope.newConversation ) {
if ( target.is( ".new-marker" ) ) {
stateManager.gotoState( NewConversationActivationState, target, event.pageX, event.pageY );
} else if ( $scope.areMarkersDirty() ) {
alert( "Oops, you haven't saved your comment!" );
}
} else {
stateManager.gotoState( MarkerActivationState, target, event.pageX, event.pageY );
}
}
function handleMouseDownOnViewport( event ) {
if ( $scope.areMarkersDirty() ) {
return;
} else if ( $scope.selectedConversation || $scope.newConversation ) {
$scope.$apply(
function() {
$scope.closeConversation();
}
);
} else {
stateManager.gotoState( PotentialMarkerState, event.pageX, event.pageY );
}
}
function teardown() {
viewport.off( "mousedown.invCommentMarkers" );
}
viewport.on( "mousedown.invCommentMarkers", handleMouseDown );
return( teardown );
}
function getMarkerByConversationID( id ) {
var marker = viewport.children( "a.marker:not(.new-marker)" )
.filter(
function() {
var conversation = $( this ).scope().conversation;
return( conversation && ( conversation.id == id ) );
}
)
;
return( marker )
}
function scrollToActiveMarkerIfNecessary() {
if ( ! $scope.selectedConversation ) {
return;
}
var marker = getMarkerByConversationID( $scope.selectedConversation.id );
if ( ! marker.length ) {
return;
}
var win = $( window );
var viewTop = win.scrollTop();
var viewBottom = ( viewTop + win.height() );
var viewLeft = win.scrollLeft();
var viewRight = ( viewLeft + win.width() );
var markerOffset = marker.offset();
var markerTop = markerOffset.top;
var markerBottom = ( markerTop + 49 );
var markerLeft = markerOffset.left;
var markerRight = ( markerLeft + 49 );
var markerIsHidden = (
( markerTop <= viewTop ) ||
( markerBottom >= viewBottom ) ||
( markerLeft <= viewLeft ) ||
( markerRight >= viewRight )
);
if ( markerIsHidden ) {
$( "html, body" ).stop( true ).animate(
{
scrollLeft: ( markerLeft - 100 ),
scrollTop: ( markerTop - 100 )
},
500
);
}
}
function measureScrollBarWidth() {
var scrollBarMeasure = $('<div />');
$('body').append(scrollBarMeasure);
scrollBarMeasure
.width(50)
.height(50)
.css({
overflow: 'scroll',
visibility: 'hidden',
position: 'absolute'
});
var scrollBarMeasureContent = $('<div />').height(1);
scrollBarMeasure.append(scrollBarMeasureContent);
var insideWidth = scrollBarMeasureContent.width(),
outsideWidth = scrollBarMeasure.width(),
width = outsideWidth - insideWidth;
scrollBarMeasure.remove();
return width <= 0 ? 8 : width;
}
var stateManager = {
currentStateTeardown: null,
gotoState: function() {
var stateArguments = _.toArray( arguments );
var newStateConstructor = stateArguments.shift();
stateArguments.unshift( stateManager );
if ( stateManager.currentStateTeardown && _.isFunction( stateManager.currentStateTeardown ) ) {
stateManager.currentStateTeardown();
}
stateManager.currentStateTeardown = newStateConstructor.apply( {}, stateArguments );
}
};
element.on(
"click.invCommentMarkers",
"a.marker",
function( event ) {
if ( cancelClick ) {
event.preventDefault();
event.stopPropagation();
cancelClick = false;
}
}
);
$document.on(
"mousedown.invDocumentClick",
function( event ) {
var target = $( event.target),
marker = $('.marker'),
sketch = $('#shareSketchViewer'),
sketchBulder = $('#shareSketchBuilder'),
commentForm = $('.comment-thread-container'),
isCommentForm = commentForm.is(target) || !!commentForm.has(target).length,
isMarker = marker.is(target) || !!marker.has(target).length,
isSketch = sketch.is(target) || !!sketch.has(target).length,
isSketchBuilder = sketchBulder.is(target) || !!sketchBulder.has(target).length,
clientW = Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
clientH = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
if (!isCommentForm &&
!isMarker &&
!isSketch &&
!isSketchBuilder &&
!$scope.areMarkersDirty() &&
$scope.getIsShowingConversationMenu() &&
event.clientY < clientH - sbWidth &&
event.clientX < clientW - sbWidth
) {
$scope.closeConversation();
}
}
);
var viewport = element.children( "div.viewport" );
var cancelClick = false;
var sbWidth = measureScrollBarWidth();
stateManager.gotoState( ReadyState );
$timeout( scrollToActiveMarkerIfNecessary );
$scope.$watch(
"screenID",
function( newValue ) {
cancelClick = false;
stateManager.gotoState( ReadyState );
}
);
$scope.$watch(
"selectedConversation",
function( conversation ) {
if ( ! conversation ) {
return;
}
$timeout( scrollToActiveMarkerIfNecessary );
}
);
$scope.$on(
"$destroy",
function() {
element.off( "click.invCommentMarkers" );
element.off( "mousedown.invCommentMarkers" );
element.off( "mousemove.invCommentMarkers" );
element.off( "mouseup.invCommentMarkers" );
$document.off( "mousedown.invCommentMarkers" );
$document.off( "mousemove.invCommentMarkers" );
$document.off( "mouseup.invCommentMarkers" );
$document.off( "mousedown.invDocumentClick" );
}
);
};
return({
controller: Controller,
link: linkFunction,
require: "invCommentsMarkers",
restrict: "A"
});
}
);
})( angular, InVision );
;
;
/*! confirm-popover.js */ 
;
;
(function( ng, app ) {
"use strict";
app.directive(
"invConfirmPopover",
function() {
var linkFunction = function( $scope, element, attributes ) {
var handleCancelClick = function( event ) {
event.preventDefault();
target.popover( "destroy" );
doc.off( "mousedown.invConfirmPopover" );
doc.off( "click.invConfirmPopover" );
};
var handleConfirmClick = function( event ) {
event.preventDefault();
target.popover( "destroy" );
doc.off( "mousedown.invConfirmPopover" );
doc.off( "click.invConfirmPopover" );
$scope.$apply( confirmExpression );
};
var handleDocumentMousedown = function( event ) {
if ( $( event.target ).closest( "div.popover" ).length ) {
return;
}
target.popover( "destroy" );
doc.off( "mousedown.invConfirmPopover" );
doc.off( "click.invConfirmPopover" );
};
var doc = $( document );
var target = $( element );
var confirmExpression = attributes.onConfirm;
target.on(
"click.invConfirmPopover",
function( event ) {
event.preventDefault();
target.popover({
html: true,
placement: "top",
trigger: "manual",
title: function() {
return( attributes.invConfirmPopover );
},
content: "<a class='btn btn-primary btn-small invConfirmPopoverConfirm'>&nbsp;Yes&nbsp;</a> &nbsp; <a class='btn btn-small invConfirmPopoverCancel'>&nbsp;No&nbsp;</a> "
});
target.tooltip( "hide" );
target.popover( "show" );
doc.on( "mousedown.invConfirmPopover", handleDocumentMousedown );
doc.on( "click.invConfirmPopover", "a.invConfirmPopoverConfirm", handleConfirmClick );
doc.on( "click.invConfirmPopover", "a.invConfirmPopoverCancel", handleCancelClick );
return( false );
}
);
$scope.$on( 
"$destroy",
function() {
target.off( "click.invConfirmPopover" );
target.popover( "destroy" );
doc.off( "mousedown.invConfirmPopover" );
doc.off( "click.invConfirmPopover" );
}
);
};
return({
link: linkFunction,
restrict: "A",
scope: false
});
}
);
})( angular, InVision );
;
;
/*! copy-to-clipboard.js */ 
;
;
(function( ng, app ) {
"use strict";
app.directive(
"invCopyToClipboard",
function( $timeout ) {
var linkFunction = function( $scope, element, attributes ) {
var $element = $(element),
$button = $element.find("button"),
$copiedText = $(".copied");
var clip = new ZeroClipboard( $button , {
moviePath: "/assets/apps/liveshare/js/zeroclipboard/ZeroClipboard.swf"
});
clip.on( "complete", function(clip, args) {
$timeout(function() {
$scope.toggleShareModal();
});
$copiedText.fadeIn(250);
$timeout(function() {
$copiedText.fadeOut(250);
}, 4000);
} );
$scope.$watch("isShowingShareModal", function watchIsShowingModal( _new ) {
if ( _new ) {
$timeout(function() {
$(element).find("input#share_link").select();
});
}
});
$scope.$on(
"$destroy",
function() {
}
);
};
return({
link: linkFunction
});
}
);
})( angular, InVision );
;
;
/*! fade-show.js */ 
;
;
(function( ng, app ) {
"use strict";
app.directive(
"invFadeShow",
function() {
var linkFunction = function( $scope, element, attributes ) {
var duration = ( "fast" || attributes.fadeDuration );
var expression = attributes.invFadeShow;
if ( $scope.$eval( expression ) ) {
element.show();
} else {
element.hide();
}
$scope.$watch(
expression,
function( newValue, oldValue ) {
if ( 
ng.isUndefined( oldValue ) ||
( newValue === oldValue )
) {
return;
}
if ( newValue ) {
element
.stop( true, true )
.fadeIn( duration )
;
} else if ( ! newValue ) {
element
.stop( true, true )
.fadeOut( duration )
;
}
}
);
$scope.$on(
"$destroy",
function() {
}
);
};
return({
link: linkFunction,
restrict: "A"
});
}
);
})( angular, InVision );
;
;
/*! focus.js */ 
;
;
(function( ng, app ) {
"use strict";
app.directive( "invFocus", Directive );
/** @ngInject */
function Directive() {
var linkFunction = function( $scope, element, attributes ) {
element.one(
"focus.invFocus",
function( event ) {
$scope.$apply( attributes.invFocus );
}
);
$scope.$on(
"$destroy",
function() {
element.off( "focus.invFocus" );					
}
);
};
return({
link: linkFunction,
restrict: "A"
});
}
})( angular, InVision );
;
;
/*! history-overlay.js */ 
;
;
(function( ng, app ) {
"use strict";
app.directive( "invHistoryOverlay", Directive );
/** @ngInject */
function Directive( _, $timeout ) {
var linkFunction = function( $scope, element, attributes ) {
var $window = $(window),
$comment = element.parent(),
$icon = $comment.find(".view-history"),
$thumbnail = element.find("img"),
$buttons = element.find("a"),
timer;
$icon.on("mouseenter.history.overlay", function() {
timer = $timeout(function(){
if ( ( element.offset().top - $window.scrollTop() ) <= 47 ) {
element.addClass("flip");
};
}, 1);
element.stop().fadeIn(250);
});
$comment.on("mouseleave.history-overlay", function() {
if ( element.is("hover") ) {
return;
};
element.stop().fadeOut(250, function() {
element.removeClass("flip");
});
});
$scope.$on( "$destroy", function(){
$icon.unbind("mouseenter.history-overlay");
$comment.unbind("mouseleave.history-overlay");
$buttons.unbind("click.history-overlay");
$timeout.cancel( timer );
} );
};
return({
link: linkFunction
});
}
})( angular, InVision );
;
;
/*! i8n-telephone.js */ 
;
;
(function( ng, app ) {
"use strict";
app.directive( "invI8nTelephone", Directive );
/** @ngInject */
function Directive() {
var linkFunction = function( $scope, element, attributes ) {
var defaultCountry = ( $scope[ attributes.countryCode ] || "us" );
$( element ).intlTelInput({
defaultCountry: defaultCountry,
americaMode: false,
defaultStyling: true
});
$scope.$watch( 
attributes.countryCode,
function( newValue, oldValue ) {
if( newValue !== $( element ).intlTelInput("getSelectedCountryData").iso2 ) {
$( element ).intlTelInput("selectCountry", newValue );
}
}
);
$scope.$on(
"$destroy",
function() {			
}
);
};
return({
link: linkFunction,
restrict: "A"
});
}
})( angular, InVision );
;
;
/*! key-combos.js */ 
;
;
(function( ng, app ) {
"use strict";
app.directive(
"invKeyCombos",
/** @ngInject */
function( $document, _ ) {
function Controller( $scope, $element ) {
function addListener( config ) {
var currentConfig = getCurrentConfig();
if ( currentConfig ) {
removeExistingBindings( currentConfig );
}
listeners.push( config );
addNewBindings( config );
}
function addNewBindings( config ) {
for ( var eventType in config ) {
$document.on( eventType, config[ eventType ] );
}
}
function getCurrentConfig() {
var lastIndex = ( listeners.length - 1 );
return( listeners[ lastIndex ] || null );
}
function removeExistingBindings( config ) {
for ( var eventType in config ) {
$document.off( eventType );
}
}
function removeActiveListener() {
removeExistingBindings( listeners.pop() );
var nextConfig = getCurrentConfig();
if ( nextConfig ) {
addNewBindings( nextConfig );
}
}
function removeInactiveListener( config ) {
listeners = _.without( listeners, config );
}
function removeListener( config ) {
var currentConfig = getCurrentConfig();
if ( currentConfig === config ) {
removeActiveListener();
} else {
removeInactiveListener( config );
}
}
var listeners = [];
return({
addListener: addListener,
removeListener: removeListener
});
}
function linkFunction( $scope, element, attributes, controller ) {
}
return({
controller: Controller,
link: linkFunction,
required: "@",
restrict: "A"
});
}
);
})( angular, InVision );
;
;
/*! loading-sequence.js */ 
;
;
(function( ng, app ) {
"use strict";
app.directive(
"invLoadingSequence",
/** @ngInject */
function( $timeout, $, _, config ) {
var linkFunction = function( $scope, element, attributes ) {
function handleEndOfLoadingSequence() {
$scope.$apply(
function() {
$scope.loadingSequenceCompleted();
}
);
}
function setStatus( percentage ) {
var totalImagesInSprite = 20;
var imagesPerRow = 5;
var imageWidth = 258;
var index = Math.ceil( totalImagesInSprite * percentage / 100  ) - 1;
if ( percentage ) {
index = Math.max( 0, index );
}
var row = Math.floor( index / imagesPerRow );
var column = ( index % imagesPerRow );
var xOffset = ( column * (-1 * imageWidth) );
var yOffset = ( row * (-1 * imageWidth) );
dom.status.css( 
"background-position", 
( xOffset + "px " + yOffset + "px" )
);
}
var dom = {
target: element,
loader: element.find( "div.loading-backdrop" ),
status: element.find( "div.status" ),
flyouts: element.find( "div.flyouts" ),
text: element.find(".loading-container")
};
$scope.$watch(
"percentLoaded",
function( newValue ) {
setStatus( newValue );
if ( newValue === 100 ) {
dom.flyouts.show();
$timeout(
function(){
if ( config.isLite === false || config.isLite === undefined ) {
$scope.setDesktopLoadingForGifIsReady( true );
};
dom.text.fadeOut(500, function() {
dom.loader.fadeOut(500);
});
$timeout( handleEndOfLoadingSequence, 1000, false );
},
600, // pause before splitting curtains,
false // No apply.
);
}
}
);
$scope.$on(
"$destroy",
function() {
}
);
};
return({
link: linkFunction,
restrict: "A"
});
}
);
})( angular, InVision );
;
;
/*! mobile-simulated-loading-screen.js */ 
;
;
(function( ng, app ) {
"use strict";
app.directive(
"invMobileSimulatedLoadingScreen",
function( $timeout ) {
var linkFunction = function( $scope, element, attributes ) {
attributes.$observe( "isShareLoaded" , function watchLoaderCompleted( newVal ){
if ( newVal == "false" ){
$timeout( function hideLoadingScreen(){
$scope.setMobileLoadingForGifIsReady( true );
element.fadeOut( 600 );
}, 1000 );
}
});
$scope.$on(
"relaunchMobileApp",
function( event, screenID ){
element.show();
$scope.setMobileLoadingForGifIsReady( false );
$timeout( function hideLoadingScreen(){
$scope.setMobileLoadingForGifIsReady( true );
element.fadeOut( 600 );
}, 1000 );
}
);
};
return({
link: linkFunction,
restrict: "A"
});
}
);
})( angular, InVision );
;
;
/*! mobile-skin.js */ 
;
;
(function( ng, app ) {
"use strict";
app.directive(
"invMobileSkin",
/** @ngInject */
function( $timeout, config ) {
var linkFunction = function( $scope, element, attributes ) {
var positionSkin = function(){
if( config.share.isEmbed == true ){
$(element).css( "margin", "20px 0 0 20px" );
return;
}
var winHeight = $(window).height();
var winWidth = $(window).height();
var skinHeight = $(element).height();
var shadowHeight = 0;  // This is the height of the shaddow at the bottom of every skin image
var bottomBarHeight = 0;
if( ( skinHeight - shadowHeight + 25 ) >= ( winHeight - bottomBarHeight ) ){
var topMargin = "25px";
}else{
var topMargin = ( winHeight - bottomBarHeight - skinHeight + shadowHeight ) / 2;
}
$(element).css( "margin-top", topMargin );
}
if( $scope.deviceTemplate.mobileDeviceID > 0){
$timeout(function(){
positionSkin(); // INIT
});
$(window).on("resize.mobileSkin", positionSkin );
}
$scope.showArrows = true;
$scope.$on(
"$destroy",
function() {
$(window).off("resize.mobileSkin");
}
);
};
return({
link: linkFunction,
restrict: "A"
});
}
);
})( angular, InVision );
;
;
/*! mobile-skins-viewport.js */ 
;
;
(function( ng, app ) {
"use strict";
app.directive( "invMobileSkinsViewport", Directive );
/** @ngInject */
function Directive( $timeout ) {
var linkFunction = function( $scope, element, attributes ) {
function initializeNiceScroll() {
if( applyScroll() ){
$(element).niceScroll({
preservenativescrolling: false,
cursordragontouch: true,
grabcursorenabled: true,
bouncescroll: true,
mousescrollstep: 20,
touchbehavior: true,
horizrailenabled:false,
enablekeyboard: false,
railpadding: { 
top: ( $scope.screen.fixedHeaderHeight * $scope.screen.displayScale) + 3,
right: 0,
left: 0,
bottom: ( $scope.screen.fixedFooterHeight * $scope.screen.displayScale ) + 3
}
});
}
}
$timeout(function(){
initializeNiceScroll();
});
$scope.$parent.getMobileViewportScrollPosition = function(){
return $(element).scrollTop();
};
$scope.$parent.scrollMobileViewport = function( scrollPosition, animateTime, callback ){
if ( !callback ) {
callback = ng.noop;
}
$(element).animate(
{scrollTop: scrollPosition},
animateTime,
callback
);
};
var applyScroll = function(){
if ( !$scope.screen ) { // condition for Presentations
return true;
}
var renderedScreenHeight = $scope.screen.height * $scope.screen.displayScale;
var viewportHeight = element.height();
var sizeDifference = viewportHeight - renderedScreenHeight;
var threshold = 3;
return Math.abs(sizeDifference) > threshold && sizeDifference < 0;
};
var scrollWatcher = angular.noop;
if ( $scope.isLiveShare && !$scope.isLite ) {
$scope.$watch("me.isPresenter", function( isPresenter, old ) {
if ( isPresenter === old ) {
return;
}
scrollWatcher(); // remove the existing watcher
if ( !isPresenter ) {
element.off("scroll.mobileLiveshare");
scrollWatcher = $scope.$on("liveshare_subscriber.scrollMobileViewport", function( event, scrollTop ) {
$scope.$parent.scrollMobileViewport( scrollTop, 100 );
});
} else {
scrollWatcher = angular.noop;
element.on("scroll.mobileLiveshare",function(e, pos) {
$scope.$emit("liveshare.scrollTop", e.target.scrollTop);
});
}
});
}
if ( $scope.isLiveShare || $scope.isPresentation ) {
element.addClass("no-custom-cursor");
element.on("scrollstop.mobileLiveshare", function(e) {
$scope.$emit("liveshare.mobileScroll");
});
$scope.$on("liveshare_subscriber.nicescrollStatus", function enableNiceScroll( event, enabled ) {
if ( enabled ) {
initializeNiceScroll();
} else {
$( element ).getNiceScroll().remove();
}
});
}
$scope.$on(
"$destroy",
function() {
if( applyScroll() ){
$(element).getNiceScroll().remove();
if ( $scope.isLiveShare ) {
element.off("scroll.mobileLiveshare");
element.off("scrollstop.mobileLiveshare");
}
}
}
);
$scope.$watch(
"screen",
function( newValue, oldValue ) {
$timeout(function(){
if ( newValue != oldValue ){
$(element).getNiceScroll().remove();
initializeNiceScroll();
}
});
});
};
return({
link: linkFunction,
restrict: "A"
});
}
})( angular, InVision );
;
;
/*! mobile-slideshow-nav.js */ 
;
;
(function( ng, app ) {
"use strict";
app.directive(
"invMobileSlideshowNav",
function( $timeout, sessionService ) {
var linkFunction = function( $scope, element, attributes ) {
function updateSlideshowSettings() {
var isSlideshowNavAllowed = sessionService.get( "isSlideshowNavAllowed" );
var hasMultipleScreens = $('.screen').length > 1;
if( isSlideshowNavAllowed !== false && hasMultipleScreens ) {
$scope.isShowingMobileSlideshowNav = true;
} else {
$scope.isShowingMobileSlideshowNav = false;
}
}
function setupMobileNav() {
$('.skin').on(
"mouseenter.invMobileSlideshowNav",
function(e) {
if( ! $(e.target).is('.preview-nav img') ) {
$('.preview-nav').removeClass('visible');
}
}
);
$('.skin').on(
"mouseleave.invMobileSlideshowNav",
function(e) {
$('.preview-nav').addClass('visible');
}
);
}
function killEventHandlers() {
$('.skin').off("mouseenter.invMobileSlideshowNav");
$('.skin').off("mouseleave.invMobileSlideshowNav");
}
$scope.showPreviousScreen = function() {
$scope.$broadcast("showPreviousScreen");
$scope.$broadcast("showSlideshowStatus");
};
$scope.showNextScreen = function() {
$scope.$broadcast("showNextScreen");
$scope.$broadcast("showSlideshowStatus");
};
$scope.isShowingMobileSlideshowNav = true;
$scope.$on(
"isShowingSlideshowNav",
function( event, value ) {
updateSlideshowSettings();
}
);
$scope.$on(
"$destroy",
function() {
killEventHandlers();
}
);
$timeout(function() {
setupMobileNav();
updateSlideshowSettings();
});
};
return({
link: linkFunction,
restrict: "A"
});
}
);
})( angular, InVision );
;
;
/*! nice-filesize.js */ 
;
;
(function( ng, app ) {
"use strict";
app.directive(
"invNiceFilesize",
function() {
var linkFunction = function( $scope, element, attributes ) {
$(element).text( filesize(attributes.filesize)  );
};
return({
link: linkFunction,
restrict: "A"
});
}
);
})( angular, InVision );
;
;
/*! notify-text.js */ 
;
;
(function( ng, app ) {
"use strict";
app.directive( "invNotifyText", Directive );
/** @ngInject */
function Directive() {
var linkFunction = function( $scope, element, attributes ) {
var notifyNames = "0 people",
notifyOthers = "";
function setText(names, others) {
$(element).text("Send notification to " + names + " " + others);
}
attributes.$observe("names", function(value) {
value = value || "0 people";
notifyNames = value;
setText(value, notifyOthers);
});
attributes.$observe("others", function(value) {
value = value - 1;
var text = value <= 0 ? "" : "& " + value + " other" + ( value > 1 ? "s" : "" );
notifyOthers = text;
setText(notifyNames, text);
});
};
return({
link: linkFunction,
restrict: "A"
});
}
})( angular, InVision );
;
;
/*! preview-auto-redirect-listener.js */ 
;
;
(function( ng, app ) {
"use strict";
app.directive( "invPreviewAutoRedirectListener", Directive );
/** @ngInject */
function Directive( $, _, $timeout, hotspotService ) {
return {
restrict: 'A',
scope: true, // This is required so the $broadcast only goes down the DOM.
link: function( $scope, element, attributes ){
var timer;
var delayOnLoadTimer;
function getAutoRedirectHotspot( screenID ){
var hotspots = hotspotService.getHotspotsByScreenID( screenID );
var autoRedirectHotspot = _.findWithProperty( hotspots, "eventTypeID", 9 );
if( autoRedirectHotspot != undefined ){
$timeout.cancel( timer );
timer = $timeout( 
function onTimerTimeout(){ 
$scope.$broadcast("autoRedirectTriggered.share", autoRedirectHotspot );
$timeout.cancel( timer );
},
autoRedirectHotspot.metaData.redirectAfter
);
}else{
$timeout.cancel( timer );
}
}
$scope.$watch(
"screen",
function hotspotsChangedFunction( newScreen, oldScreen){
if( attributes.isShareLoaded == "true" ){
getAutoRedirectHotspot( newScreen.id );
}else{
}
}
);
attributes.$observe( "isShareLoaded" , function watchLoaderCompleted( newValue ){
if( newValue == "true" ){
$timeout.cancel( delayOnLoadTimer );
delayOnLoadTimer = $timeout( function waitForLoadingScreenToComplete(){
getAutoRedirectHotspot( $scope.screenID );
}, 2000 );
}
});
$scope.$on(
"$destroy",
function( event ) {
$timeout.cancel( timer );
$timeout.cancel( delayOnLoadTimer );
}
);
}
};
}
})( angular, InVision );
;
;
/*! preview-helper.js */ 
;
;
(function( ng, app ) {
"use strict";
app.directive(
"invPreviewHelper",
/** @ngInject */
function( $document, $timeout, keyComboHelper ) {
var linkFunction = function( $scope, element, attributes, keyCombosController ) {
function flashPreviewHotspots( fadeInDuration, pauseDuration, fadeOutDuration ) {
if ( $scope.isLiveShare && ( !$scope.isPresenter || !$scope.isOwner ) ) {
return;
}
fadeInDuration = ( fadeInDuration || 100 );
pauseDuration = ( pauseDuration || 200 );
fadeOutDuration = ( fadeOutDuration || 200 );
var hotspots = element.closest("body").find( "a.hotspot" );
var isUsingCssFilters = !! $( "html.lt-ie9" ).length;
if ( hotspots.is( ".flashing" ) ) {
return;
}
hotspots
.addClass( "flashing" )
.stop(true)
.fadeTo( fadeInDuration, 1 )
.delay( pauseDuration )
.fadeOut(
fadeOutDuration,
function() {
$( this )
.removeClass( "flashing" )
.css({
display: "",
opacity: "",
filter: "",
zoom: ""
}
);
if ( isUsingCssFilters ) {
this.style.removeAttribute( "filter" );
}
}
)
;
}
function hidePreviewHotspots(fadeOutDuration) {
fadeOutDuration = ( fadeOutDuration || 200 );
var hotspots = element.closest("body").find( "a.hotspot" );
var isUsingCssFilters = !! $( "html.lt-ie9" ).length;
if ( !hotspots.is( ".flashing" ) ) {
return;
}
hotspots
.stop(true)
.fadeOut(
fadeOutDuration,
function() {
$( this )
.removeClass( "flashing" )
.css({
display: "",
opacity: "",
filter: "",
zoom: ""
}
);
if ( isUsingCssFilters ) {
this.style.removeAttribute( "filter" );
}
}
)
;
}
function highlightSlideshowNav() {
if ( $scope.isShowingSlideshowNav !== true ) {
return;
}
showSlideshowStatus();
slideshowNavLeft
.stop( true, true )
.animate( { left: "0px", opacity: 0.5 }, 0 )
.delay( 2800 )
.animate( { left: "-43px", opacity: 0.1 }, 500 )
;
slideshowNavRight
.stop( true, true )
.animate( { right: "0px", opacity: 0.5 }, 0 )
.delay( 2800 )
.animate( { right: "-43px", opacity: 0.1 }, 500 )
;
}
function keyboardNavUsed() {
$scope.keyboardNavUsed();
}
function showBrowse() {
$scope.$apply(
function() {
$scope.openBrowse();
}
);
}
function showComments() {
$scope.$apply(
function() {
$scope.navigateToScreenComments();
}
);
}
function showNextScreen() {
$scope.$apply(
function() {
$scope.showNextScreen();
var forceStatus = !! $scope.project.isMobile;
showSlideshowStatus( forceStatus );
}
);
}
function showPreviewHotspots(fadeInDuration) {
if ( $scope.isLiveShare && ( !$scope.isPresenter || !$scope.isOwner ) ) {
return;
}
fadeInDuration = ( fadeInDuration || 200 );
var hotspots = element.closest("body").find( "a.hotspot" );
var isUsingCssFilters = !! $( "html.lt-ie9" ).length;
if ( hotspots.is( ".flashing" ) ) {
return;
}
hotspots
.addClass( "flashing" )
.stop(true)
.fadeTo( fadeInDuration, .6 );
}
function showPreviousScreen() {
$scope.$apply(
function() {
$scope.showPreviousScreen();
var forceStatus = !! $scope.project.isMobile;
showSlideshowStatus( forceStatus );
}
);
}
function showSlideshowStatus( forceShow ) {
forceShow = !! forceShow;
if ( $scope.isShowingSlideshowNav !== true && ! forceShow ) {
return;
}
slideshowStatus
.stop( true, true )
.show()
.delay( 1000 )
.fadeOut( 500 )
;
}
var slideshowNav = element.find( ".slideshow-nav" );
var slideshowStatus = slideshowNav.find( ".slideshow-status" );
var slideshowButtonLeft = slideshowNav.find( ".button-left" );
var slideshowButtonRight = slideshowNav.find( ".button-right" );
var slideshowNavLeft = slideshowNav.find( ".nav-left" );
var slideshowNavRight = slideshowNav.find( ".nav-right" );
if( ! $scope.isUserTesting ){
element.on(
"click.invPreviewHelper",
function( event ) {
if ( $( event.target ).closest( "a.hotspot" ).length ) {
return;
}
flashPreviewHotspots();
}
);
}
var listenerConfig = {};
listenerConfig[ "keydown.invPreviewKeyCombos" ] = function( event ) {
if(event.target.tagName.toUpperCase() == 'INPUT'){
return;
}
if ( event.metaKey ) {
return;
}
if (
! $scope.isUserTesting &&
(
keyComboHelper.isControlKeyEvent( event ) ||
keyComboHelper.isShiftKeyEvent( event )
)
) {
if ( $scope.isLiveShare && !$scope.isPresenter ) {
return;
}
showPreviewHotspots();
} else if ( keyComboHelper.isLeftArrowKeyEvent( event ) ) {
event.preventDefault();
if ( !$scope.share.isNavigateAllowed || ($scope.isLiveShare && !$scope.isPresenter) ) {
return;
}
if ( $scope.isLiveShare ) {
$scope.$emit("liveshare.keyboardNavUsed");
}
if( $scope.project.isMobile ) {
$('.preview-nav.prev').trigger('click');
} else {
showPreviousScreen();
if ( $scope.isShowingSlideshowNav === true ) {
slideshowNavLeft
.stop( true, true )
.animate( { left: "-43px", opacity: 0.1 }, 0 )
.animate( { opacity: 0.5 }, 200 )
.animate( { opacity: 0.1 }, 200 )
;
slideshowNavRight
.stop( true, true )
.animate( { right: "-43px", opacity: 0.1 }, 200 )
;
}
}
keyboardNavUsed();
} else if ( keyComboHelper.isRightArrowKeyEvent( event ) ) {
event.preventDefault();
if ( !$scope.share.isNavigateAllowed || ($scope.isLiveShare && !$scope.isPresenter) ) {
return;
}
if ( $scope.isLiveShare ) {
$scope.$emit("liveshare.keyboardNavUsed");
}
if( $scope.project.isMobile ) {
$('.preview-nav.next').trigger('click');
} else {
showNextScreen();
if ( $scope.isShowingSlideshowNav === true ) {
slideshowNavRight
.stop( true, true )
.animate( { right: "-43px", opacity: 0.1 }, 0 )
.animate( { opacity: 0.5 }, 200 )
.animate( { opacity: 0.1 }, 200 )
;
slideshowNavLeft
.stop( true, true )
.animate( { left: "-43px", opacity: 0.1 }, 200 )
;
}
}
keyboardNavUsed();
} else if ( !event.ctrlKey && keyComboHelper.isCharKeyEvent( event, "c" ) ) {
if ( $scope.isLiveShare && ( $scope.sharebar.sketch || $scope.sharebar.text ) ) {
return;
}
event.preventDefault();
showComments();
} else if (
keyComboHelper.isCharKeyEvent( event, "b" ) ||
keyComboHelper.isCharKeyEvent( event, "j" )
) {
if ( $scope.isLiveShare && ( !$scope.isPresenter || $scope.sharebar.text ) ) {
return;
}
event.preventDefault();
showBrowse();
}
};
listenerConfig[ "keyup.invPreviewKeyCombos" ] = function( event ) {
hidePreviewHotspots();
};
keyCombosController.addListener( listenerConfig );
slideshowButtonLeft.on(
"click.invPreviewHelper.slideshowButtonLeft",
function( event ) {
showSlideshowStatus();
}
);
slideshowButtonRight.on(
"click.invPreviewHelper.slideshowButtonRight",
function( event ) {
showSlideshowStatus();
}
);
slideshowNavLeft.on(
"mouseenter.invSlideshowNavLeft",
function( event ) {
slideshowNavLeft
.stop()
.animate( { left: "0px", opacity: 0.5 }, 200 )
;
}
);
slideshowNavLeft.on(
"mouseleave.invSlideshowNavLeft",
function( event ) {
slideshowNavLeft
.stop()
.animate( { left: "-43px", opacity: 0.1 }, 200 )
;
}
);
slideshowNavRight.on(
"mouseenter.invSlideshowNavRight",
function( event ) {
slideshowNavRight
.stop()
.animate( { right: "0px", opacity: 0.5 }, 200 )
;
}
);
slideshowNavRight.on(
"mouseleave.invSlideshowNavRight",
function( event ) {
slideshowNavRight
.stop()
.animate( { right: "-43px", opacity: 0.1 }, 200 )
;
}
);
$scope.$on(
"showSlideshowStatus",
function() {
showSlideshowStatus( true );
}
);
$scope.$watch(
"isLoadingOpen",
function( newValue, oldValue ) {
if ( newValue === oldValue ) {
return;
}
if ( ! $scope.isUserTesting && newValue === false ) {
flashPreviewHotspots();
highlightSlideshowNav();
}
}
);
$scope.$watch(
"isShowingSlideshowNav",
function( newValue, oldValue ) {
if ( newValue === oldValue ) {
return;
}
if ( newValue === true && $scope.isLoadingOpen === false ) {
highlightSlideshowNav();
}
}
);
$scope.$on(
"$destroy",
function() {
keyCombosController.removeListener( listenerConfig );
slideshowNavLeft.off( "mouseenter.invSlideshowNavLeft" );
slideshowNavLeft.off( "mouseleave.invSlideshowNavLeft" );
slideshowNavRight.off( "mouseenter.invSlideshowNavRight" );
slideshowNavRight.off( "mouseleave.invSlideshowNavRight" );
slideshowButtonLeft.off( "click.invPreviewHelper.slideshowButtonLeft" );
slideshowButtonRight.off( "click.invPreviewHelper.slideshowButtonRight" );
}
);
};
return({
link: linkFunction,
require: "^invKeyCombos",
restrict: "A"
});
}
);
})( angular, InVision );
;
;
/*! realtime.js */ 
;
;
(function( ng, app ) {
"use strict";
app.directive( "invRealtime", Directive );
/** @ngInject */
function Directive( $window, config, Pusher, modelEvents, _ ) {
function link( $scope, element, attributes ) {
function buildModelEventTriggerArguments( event, eventType, propertyNames ) {
var triggerArguments = _.map(
propertyNames,
function( propertyName ) {
return( event.data[ propertyName ] );
}
);
triggerArguments.unshift( eventType );
return( triggerArguments );
}
function getChannelName( userID ) {
return( "private-user-" + userID );
}
function mapPushEvent( channel, eventType, property1, property2, propertyN ) {
var propertyNames = _.toArray( arguments );
var channel = propertyNames.shift();
var eventType = propertyNames.shift();
channel.bind(
eventType,
function( event ) {
var triggerArguments = buildModelEventTriggerArguments( event, eventType, propertyNames );
$scope.$apply(
function() {
modelEvents.trigger.apply( modelEvents, triggerArguments );
}
);
}
);
}
function subscribeToChannelEvents( channel ) {
mapPushEvent( channel, "screenDeleted", "screenID", "projectID" );
mapPushEvent( channel, "screenUploaded", "screen" );
mapPushEvent( channel, "screenSortNotification", "projectID" );
mapPushEvent( channel, "screenConfigUpdated", "screen");
mapPushEvent( channel, "projectUpdated", "project" );
mapPushEvent( channel, "hotspotCreated", "hotspotID", "projectID" );
mapPushEvent( channel, "hotspotUpdated", "hotspotID", "projectID" );
mapPushEvent( channel, "hotspotDeleted", "hotspotID", "projectID" );
mapPushEvent( channel, "commentAdded", "commentID", "conversationID", "projectID" );
mapPushEvent( channel, "commentUpdated", "commentID", "conversationID", "projectID" );
mapPushEvent( channel, "commentDeleted", "commentID", "conversationID", "projectID" );
mapPushEvent( channel, "conversationAdded", "conversationID", "screenID", "projectID" );
mapPushEvent( channel, "conversationUpdated", "conversationID", "projectID" );
mapPushEvent( channel, "conversationDeleted", "conversationID", "projectID" );
mapPushEvent( channel, "conversationSubscribersUpdated", "conversationID", "notify" );
return( channel );
}
$window.WEB_SOCKET_SUPPRESS_CROSS_DOMAIN_SWF_ERROR = true;
Pusher.channel_auth_endpoint = "/api/pusher/authenticate";
var pusher = new Pusher( config.pusher.appKey );
var userChannel = null
var unwatchUserID = $scope.$watch(
function watchUserIDExpression() {
return( config.user.id );
},
function watchUserID( newUserID, oldUserID ) {
if ( ! config.user.isAnonymous ) {
unwatchUserID();
}
if ( userChannel && oldUserID ) {
pusher.unsubscribe( getChannelName( oldUserID ) );
}
userChannel = subscribeToChannelEvents( pusher.subscribe( getChannelName( newUserID ) ) );
userChannel.bind('pusher:subscription_error', function(status) {
if(status == 403){
pusher.unsubscribe( getChannelName( newUserID ) );
}
});
}
);
/*
$scope.$on(
"$destroy",
function() {
}
);
*/
};
return({
link: link,
restrict: "A"
});
}
})( angular, InVision );
;
;
/*! screen-version-image-scaler.js */ 
;
;
(function( ng, app ) {
"use strict";
app.directive( "invScreenVersionImageScaler", Directive );
/** @ngInject */
function Directive() {
function link( $scope, element, attributes ) {
element.on(
"load.invHistoryImageLoadEvent",
function( event ) {
scaleImage();
}
);
function scaleImage(){
var imageWidth = element[0].naturalWidth;
var imageHeight = element[0].naturalHeight;
var displayScale = $scope.screen.displayScale;
var scaledWidth = displayScale * imageWidth;
var scaledHeight = displayScale * imageHeight;
element.css({ 
height: "auto",
width: scaledWidth + "px"
});
}
$scope.$watch(
"activeVersion.imageUrl",
function( oldImageUrl, newImageUrl ) {
if( oldImageUrl != newImageUrl ) {
scaleImage();
}
}
);
$scope.$watch(
"screen.displayScale",
function( oldDisplayScale, newDisplayScale ){
if( oldDisplayScale != newDisplayScale ){
scaleImage();
} 
}
);
$scope.$on(
"$destroy",
function() {
element.off( "load.invHistoryImageLoadEvent" );					
}
);
}
return({
link: link,
restrict: "A"
});
}
})( angular, InVision );
;
;
/*! screen.js */ 
;
;
(function( ng, app ) {
"use strict";
app.directive(
"invScreen",
/** @ngInject */
function( $timeout, _ ) {
var linkFunction = function( $scope, element, attributes ) {
var imgGifPrev,
imgGif;
function handleImageLoaded() {
element
.off( "load.invScreen" )
.off( "error.invScreen" )
;
$timeout(
function() {
$scope.imageLoadedForScreen( $scope.screen );
}
);
}
function handleScreenSelectionForGif( newValue, oldValue ) {
if ( newValue === oldValue || !newValue || !element.prop( "src" )) {
return;
}
element.attr('src', imgGifPrev.src);
setTimeout(function() {
element.attr('src', imgGif.src);
}, 0);
}
element.on( "load.invScreen", handleImageLoaded );
element.on( "error.invScreen", handleImageLoaded );
if ( $scope.screen && $scope.screen.isGif ) {
if (!imgGif) {
imgGif = new Image();
imgGif.src = $scope.screen.imageUrl;
imgGifPrev = new Image();
}
$scope.$watch('selectedScreen.id', function(val) {
if (val != $scope.screen.id) {
imgGifPrev.src = $scope.selectedScreen.imageUrl;
}
});
$scope.$watch( "( selectedScreen.id == screen.id && mobileLoadingForGifIsReady == true && desktopLoadingForGifIsReady == true && isLoadingOpen == false )", handleScreenSelectionForGif);
}
$scope.$on(
"$destroy",
function() {
element.off( "load.invScreen" );
element.off( "error.invScreen" );
}
);
};
function isIE() {
var ua = window.navigator.userAgent;
var msie = ua.indexOf("MSIE ");
if ( msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./) ){
return true;  // If old IE or new, but just as bad IE 11
}
return false;
}
return({
link: linkFunction,
restrict: "A"
});
}
);
})( angular, InVision );
;
;
/*! screens.js */ 
;
;
(function( ng, app ) {
"use strict";
app.directive(
"invScreens",
/** @ngInject */
function( $window, _, config, $location, screenService ) {
var linkFunction = function( $scope, element, attributes ) {
function handleSelectedScreenChange( screen, isSubviewSwitch ) {
if ( ! screen ) {
return;
}
var screenWidth = screen.width * screen.displayScale;
var screenHeight = screen.height * screen.displayScale;
var isMaintainScrollPosition = (
isFirstScreenChange 
? false 
: ( $location.search().maintainScrollPosition !== "false" )
);
if ( 
( screenWidth <= windowWidth ) &&
( screenHeight <= windowHeight )
) {
return;
}
if ( isMaintainScrollPosition && isSubviewSwitch != true ) {
var targetScrollLeft = $jqWindow.scrollLeft();
} else if ( screen.alignment === "left" ) {
var targetScrollLeft = 0;
} else if ( screen.alignment === "right" ) {
var targetScrollLeft = ( screenWidth - windowWidth );
} else {
var targetScrollLeft = ( ( screenWidth - windowWidth ) / 2 );
}
if ( isMaintainScrollPosition ) {
var targetScrollTop = $jqWindow.scrollTop();
} else {
var targetScrollTop = 0;
}
if( screen.zoomScrollBehavior !== screenService.zoomScrollBehaviors.DISABLE_HORIZONTAL_SCROLLING || $scope.subview == "comments" ){
$jqWindow.scrollLeft( targetScrollLeft );
}
$jqWindow.scrollTop( targetScrollTop );
setTimeout(
function() {
if( screen.zoomScrollBehavior !== screenService.zoomScrollBehaviors.DISABLE_HORIZONTAL_SCROLLING || $scope.subview == "comments" ){
$jqWindow.scrollLeft( targetScrollLeft );
}
$jqWindow.scrollTop( targetScrollTop );
},
0
);
}
var $jqWindow = $( window );
var windowWidth = $jqWindow.width();
var windowHeight = $jqWindow.height();
var isFirstScreenChange = true;
$jqWindow.on(
"resize.invScreens",
function() {
windowWidth = $jqWindow.width();
windowHeight = $jqWindow.height();
}
);
var unwatchLoading = $scope.$watch(
function() {
return( $scope.getPercentOfScreensLoaded() === 100 );
},
function( isLoaded ) {
if ( ! isLoaded ) {
return;
}
unwatchLoading();
$scope.$watch( 
"selectedScreen",
function( newScreen, oldScreen ) {
handleSelectedScreenChange( newScreen, false );
isFirstScreenChange = false;
}
);
}
);
$scope.$watch(
"subview",
function( newSection, oldSection ){
if( newSection == "comments" && oldSection != "comments" ){
handleSelectedScreenChange( $scope.screen, true );
}
}
);
$scope.$on(
"$destroy",
function() {
$jqWindow.off( "resize.invScreens" );
}
);
};
return({
link: linkFunction,
restrict: "A"
});
}
);
})( angular, InVision );
;
;
/*! share-sketch-builder.js */ 
;
;
(function( ng, app ) {
"use strict";
app.directive(
"invShareSketchBuilder",
/** @ngInject */
function( $, $window, modelEvents, _ ) {
return {
restrict: 'A',
transclude: true,
replace: true,
templateUrl: "/assets/apps/share/views/directives/share-sketch-builder.htm",
link: function( $scope, element, attrs ){
var sketchBuilder_window = $(element).find("#builderWindow");
var sketch_tool = $(element).find('.sketch_tool');
var sketchImageWrapper = $(element).find('.sketchImage_wrapper');
var sketch_image = $(element).find('.sketch_image');
var top_bar = $(element).find('#sketchToolbar');
var sketch_toolbar = $(element).find('.tools');
var $whiteboard = $(element).find("#whiteboard_overlay"),
$scrollWrap = $(element).find(".scroll-wrap"),
$body = $("body");
if ( $scope.project.isSnap ) {
$body.addClass("share-lite-sketching");
}
var init_sketch = function(){
sketch_image.on('dragstart', function(event) {
event.preventDefault(); 
});
sketch_tool.on('click', function (e) {
e.preventDefault();
sketch_tool.removeClass('active')
.filter($(this)).addClass('active');
});
sketchImageWrapper.onselectstart = function(){ return false; };
var UndoManager = function () {
var commandStack = [],
index = -1,
undoManagerContext = false,
callback;
function execute(command) {
if (!command) {
return;
}
undoManagerContext = true;
command.f.apply(command.o, command.p);
undoManagerContext = false;
}
function createCommand(undoObj, undoFunc, undoParamsList, undoMsg, redoObj, redoFunc, redoParamsList, redoMsg) {
return {
undo: {
o: undoObj,
f: undoFunc,
p: undoParamsList,
m: undoMsg
},
redo: {
o: redoObj,
f: redoFunc,
p: redoParamsList,
m: redoMsg
}
};
}
return {
/*
Registers an undo and redo command. Both commands are passed as parameters and turned into command objects.
param undoObj: caller of the undo function
param undoFunc: function to be called at myUndoManager.undo
param undoParamsList: (array) parameter list
param undoMsg: message to be used
*/
register: function (undoObj, undoFunc, undoParamsList, undoMsg, redoObj, redoFunc, redoParamsList, redoMsg) {
if (undoManagerContext) {
return;
}
commandStack.splice(index + 1, commandStack.length - index);
commandStack.push(createCommand(undoObj, undoFunc, undoParamsList, undoMsg, redoObj, redoFunc, redoParamsList, redoMsg));
index = commandStack.length - 1;
if (callback) {
callback();
}
},
/*
Pass a function to be called on undo and redo actions.
*/
setCallback: function (callbackFunc) {
callback = callbackFunc;
},
undo: function () {
var command = commandStack[index];
if (!command) {
return;
}
execute(command.undo);
index -= 1;
if (callback) {
callback();
}
},
redo: function () {
var command = commandStack[index + 1];
if (!command) {
return;
}
execute(command.redo);
index += 1;
if (callback) {
callback();
}
},
/*
Clears the memory, losing all stored states.
*/
clear: function () {
var prev_size = commandStack.length;
commandStack = [];
index = -1;
if (callback && (prev_size > 0)) {
callback();
}
},
hasUndo: function () {
return index !== -1;
},
hasRedo: function () {
return index < (commandStack.length - 1);
}
};
};
(function () {
var sketchIMG_width =  sketch_image.width(),
sketchIMG_height = sketch_image.height();
window.div_paper = sketchImageWrapper;
window.paper = new Raphael(div_paper[0], 0, 0);
window.stack = {};
window.glow_stack = {};
window.undo_manager = new UndoManager();
paper.setSize(sketchIMG_width, sketchIMG_height);
/*
div_paper.css({
width: sketchIMG_width
});
*/
$(element).find("a#undo")
.on('click', function (e) {
e.preventDefault();
if (undo_manager.hasUndo()) undo_manager.undo();
});
$(element).find("a#redo")
.on('click', function (e) {
e.preventDefault();
if (undo_manager.hasRedo()) undo_manager.redo();
});
undo_manager.setUndoKeydown = function(  ){
$(document).off('keydown')
.on('keydown', function (e) {
if (e.keyCode == 8 || e.keyCode == 46){
e.preventDefault();
if (undo_manager.hasUndo()) undo_manager.undo();
}
});
};
undo_manager.setCallback(function () {
if (undo_manager.hasUndo()) {
$(element).find("a#undo")
.removeClass('inactive');
} else $(element).find("a#undo")
.addClass('inactive');
if (undo_manager.hasRedo()) {
$(element).find("a#redo")
.removeClass('inactive');
} else $(element).find("a#redo")
.addClass('inactive');
});
var Sketch = function (o) {
if (typeof(o) != 'undefined') $.extend(true, this, o);
var $this = this;
this.startX = 0;
this.startY = 0;
this.offset = this.findPos(div_paper);
$(window)
.resize(function () {
$this.offset = $this.findPos(div_paper);
});
this.el = $(element).find('.sketch_tool');
};
Sketch.prototype.findPos = function (obj) {
obj = obj[0];
var curleft = 0,
curtop = 0;
if (obj.offsetParent) {
do {
curleft += obj.offsetLeft;
curtop += obj.offsetTop;
} while (obj = obj.offsetParent);
return [curleft, curtop];
} else {
return false;
}
};
Sketch.prototype.normalizeContent = function (html, invert) {
if (!invert) {
html = html.replace(/<div>/gi, '\r\n');
html = html.replace(/<\/div>/gi, '');
html = html.replace(/(<br\s*\/?>)/gi, "\r\n");
} else {
html = html.replace(/\r\n/gi, "<br>");
}
return html;
};
Sketch.prototype.getCoords = function (event) {
event = event || window.event;
return {
x: event.clientX  + $scrollWrap.scrollLeft(),  //- $(sketch_image).css("left").replace("px","")
y: event.clientY + $scrollWrap.scrollTop()
};
};
Sketch.prototype.add_glow = function (el) {
/*
glow_stack[el.id] = el.glow({
color: "#000",
width: 2,
opacity: 0.3,
fill: true,
offsety: 2
});
*/
};
var SketchRectangular = function () {
this.figure = null;
return new Sketch(this);
};
SketchRectangular.prototype.redraw = function (event) {
var mousePos = rectangular.getCoords(event);
var currentX = mousePos.x - rectangular.offset[0];
var currentY = mousePos.y - rectangular.offset[1];
var width = currentX - rectangular.startX;
var height = currentY - rectangular.startY;
if (width < 0) {
rectangular.figure.attr({
'x': currentX,
'width': width * -1
});
} else {
rectangular.figure.attr({
'x': rectangular.startX,
'width': width
});
}
if (height < 0) {
rectangular.figure.attr({
'y': currentY,
'height': height * -1
});
} else {
rectangular.figure.attr({
'y': rectangular.startY,
'height': height
});
}
rectangular.figure.attr({
'fill': '#fff',
'fill-opacity': 0
});
};
SketchRectangular.prototype.draw = function () {
var that = this;
this.el.filter('.square')
.on('click', function () {
div_paper.off();
deselectHandObject();
undo_manager.setUndoKeydown();
hand.wrapper.css({
"cursor": "url('/assets/apps/share/img/cursor-square.png') 23 23,crosshair"
});
div_paper.on({
mousedown: function (event) {
event.preventDefault();
var mouseCoords = that.getCoords(event);
that.startX = mouseCoords.x - that.offset[0];
that.startY = mouseCoords.y - that.offset[1];
that.figure = paper.rect(that.startX, that.startY, 0, 0, 10)
.attr({
'stroke': '#f74272',
'stroke-width': 4,
'stroke-opacity': 1
});
div_paper.on('mousemove', that.redraw);
$(document).on( "mouseup.sketchDraw" , function () {
if (that.figure.attr("width") === 0) {
that.figure.remove();
return;
}
if (that.figure) {
that.figure.toFront();
stack[that.figure.id] = that.figure;
undo_manager.register(
that.figure, that.figure.hide, [], 'Hide Rect',
that.figure, that.figure.show, [], 'Show Rect');
}
div_paper.off('mousemove');
$(document).off("mouseup.sketchDraw");
}
);
}
});
});
};
var SketchCircle = function () {
this.figure = null;
return new Sketch(this);
};
SketchCircle.prototype.redraw = function (event) {
var mousePos = circle.getCoords(event);
var currentX = mousePos.x - circle.offset[0];
var currentY = mousePos.y - circle.offset[1];
var width = currentX - circle.startX;
var height = currentY - circle.startY;
var size = width > height ? width : height;
size = size / 2;
hand.wrapper.css({
"cursor": "url('/assets/apps/share/img/cursor-circle.png') 23 23,crosshair"
});
if (size < 0) {
circle.figure.attr({
'cx': circle.startX + size,
'rx': size * -1
});
} else {
circle.figure.attr({
'cx': circle.startX + size,
'rx': size
});
}
if (size < 0) {
circle.figure.attr({
'cy': circle.startY + size,
'ry': size * -1
});
} else {
circle.figure.attr({
'cy': circle.startY + size,
'ry': size
});
}
};
SketchCircle.prototype.draw = function () {
var that = this;
this.el.filter('.circle')
.on('click', function () {
div_paper.off();
deselectHandObject();
undo_manager.setUndoKeydown();
hand.wrapper.css({
"cursor": "url('/assets/apps/share/img/cursor-circle.png') 23 23,crosshair"
});
div_paper.on({
mousedown: function (event) {
event.preventDefault();
var mouseCoords = that.getCoords(event);
that.startX = mouseCoords.x - that.offset[0];
that.startY = mouseCoords.y - that.offset[1];
that.figure = paper.ellipse(that.startX, that.startY, 0, 0)
.attr({
'fill': '#fff',
'fill-opacity': 0,
'stroke': '#f74272',
'stroke-width': 4,
'stroke-opacity': 1
});
div_paper.on('mousemove', that.redraw);
$(document).on( "mouseup.sketchDraw", function () {
if (that.figure.attr("rx") === 0) {
that.figure.remove();
return;
}
if (that.figure) {
stack[that.figure.id] = that.figure;
undo_manager.register(
that.figure, that.figure.hide, [], 'Hide Cirle',
that.figure, that.figure.show, [], 'Show Cirle');
that.figure.toFront();
}
div_paper.off('mousemove');
$(document).off("mouseup.sketchDraw");
});
}
});
});
};
var SketchLine = function () {
this.figure = null;
return new Sketch(this);
};
SketchLine.prototype.redraw = function (event) {
var mousePos = line.getCoords(event);
var currentX = mousePos.x - line.offset[0];
var currentY = mousePos.y - line.offset[1];
line.figure.attr("path", "M" + line.startX + " " + line.startY + "L" + (currentX > 0 ? currentX : 0) + " " + (currentY > 0 ? currentY : 0));
};
SketchLine.prototype.draw = function () {
var that = this;
this.el.filter('.line')
.on('click', function () {
div_paper.off();
deselectHandObject();
undo_manager.setUndoKeydown();
hand.wrapper.css({
"cursor": "url('/assets/apps/share/img/cursor-line.png') 23 23,crosshair"
});
div_paper.on({
mousedown: function (event) {
event.preventDefault();
var mouseCoords = that.getCoords(event);
that.startX = mouseCoords.x - that.offset[0];
that.startY = mouseCoords.y - that.offset[1];
that.figure = paper.path(["M", that.startX, that.startY, "L"])
.attr({
'stroke': '#f74272',
'stroke-width': 4,
'stroke-opacity': 1
});
div_paper.on('mousemove', that.redraw);
$(document).on("mouseup.sketchDraw", function () {
if (that.figure.getTotalLength() === 0) {
that.figure.remove();
return;
}
if (that.figure) {
stack[that.figure.id] = that.figure;
undo_manager.register(
that.figure, that.figure.hide, [], 'Hide Line',
that.figure, that.figure.show, [], 'Show Line');
that.figure.toFront();
}
div_paper.off('mousemove');
$(document).off("mouseup.sketchDraw");
});
}
});
});
};
var SketchArrow = function () {
this.figure = null;
this.has_arrow = false;
return new Sketch(this);
};
SketchArrow.prototype.redraw = function (event) {
var mousePos = arrow.getCoords(event);
var currentX = mousePos.x - arrow.offset[0];
var currentY = mousePos.y - arrow.offset[1];
arrow.figure.attr("path", "M" + arrow.startX + " " + arrow.startY + "L" + (currentX > 0 ? currentX : 0) + " " + (currentY > 0 ? currentY : 0));
if (arrow.figure.getTotalLength() > 10 && !arrow.has_arrow) {
arrow.figure.attr({
"arrow-end": "classic-wide-long",
"stroke-width": 4,
'stroke': '#f74272',
'stroke-opacity': 1
});
arrow.has_arrow = true;
}
};
SketchArrow.prototype.draw = function () {
var that = this;
this.el.filter('.arrow')
.on('click', function () {
div_paper.off();
deselectHandObject();
undo_manager.setUndoKeydown();
hand.wrapper.css({
"cursor": "crosshair"
});
div_paper.on({
mousedown: function (event) {
event.preventDefault();
that.has_arrow = false;
var mouseCoords = that.getCoords(event);
that.startX = mouseCoords.x - that.offset[0];
that.startY = mouseCoords.y - that.offset[1];
that.figure = paper.path(["M", that.startX, that.startY, "L"]);
div_paper.on('mousemove', that.redraw);
},
mouseup: function () {
if (that.figure.getTotalLength() === 0) {
that.figure.remove();
return;
}
stack[that.figure.id] = that.figure;
if (that.figure) {
that.figure.toFront();
that.figure.add_glow = true;
that.figure.hide_arrow = arrow.hide_arrow;
that.figure.show_arrow = arrow.show_arrow;
that.figure.move_arrow = arrow.move_arrow;
that.add_glow(that.figure);
undo_manager.register(
that.figure, that.figure.hide_arrow, [], 'Hide Arrow',
that.figure, that.figure.show_arrow, [], 'Show Arrow');
}
div_paper.off('mousemove');
}
});
});
};
SketchArrow.prototype.hide_arrow = function () {
var glows = glow_stack[this.id];
if (typeof(glows) != 'undefined' && glows.length > 0) glows.hide();
this.hide();
};
SketchArrow.prototype.show_arrow = function () {
var glows = glow_stack[this.id];
if (typeof(glows) != 'undefined' && glows.length > 0) glows.show();
this.show();
};
SketchArrow.prototype.move_arrow = function (position) {
var glows = glow_stack[this.id];
if (typeof(glows) != 'undefined' && glows.length > 0) glows.remove();
this.transform(position);
arrow.add_glow(this);
};
var SketchText = function () {
this.figure = null;
this.toggle = false;
this.editing = false;
this.wrapper = $('.sketchImage_wrapper');
return new Sketch(this);
};
SketchText.prototype.write = function (text, startX, startY, height) {
text = text.replace( /&nbsp;/gi , " ");
text = this.normalizeContent( text );
text = _.unescape( text );
window.text.figure = paper.text(startX, startY + height, text)
.attr({
'font-family': 'Arial',
'font-size': '18px',
'font-weight': 'normal',
'fill': '#f74272',
'fill-opacity': 1,
"text-anchor": "start"
});
undo_manager.register(
window.text.figure, window.text.figure.hide, [], 'Hide Text',
window.text.figure, window.text.figure.show, [], 'Show Text');
};
SketchText.prototype.alignTop = function (t) {
var b = t.getBBox();
var h = Math.abs(b.y2) - Math.abs(b.y) + 1;
t.attr({
'y': b.y + h
});
};
SketchText.prototype.draw = function () {
var that = this;
this.el.filter('.text')
.on('click', function () {
div_paper.off();
that.wrapper.off();
deselectHandObject();
$(document).off('keydown');
hand.wrapper.css({
"cursor": "text"
});
that.wrapper.on('click', function (event) {
event.preventDefault();
event.stopPropagation();
if (that.editing) return;
if (that.toggle) {
that.toggle = false;
return;
} else that.toggle = true;
var mouseCoords = that.getCoords(event);
var startX = mouseCoords.x - that.offset[0] - 2;
var startY = mouseCoords.y - that.offset[1] - 12;
$('<div contenteditable="true" class="type_tool"></div>')
.appendTo($(this))
.css({
top: startY,
left: startX
})
.focus()
.on('blur', function (e) {
e.preventDefault();
e.stopPropagation();
var $this = $(this),
text = that.normalizeContent($this.html(), false);
if (!text.trim()) {
$this.remove();
return;
}
that.write(text, startX, startY, 9);
stack[that.figure.id] = that.figure;
$this.remove();
that.figure.click(function () {
if (hand.move_tool) return;
that.editing = true;
var el = this;
var html = that.normalizeContent(this.attr('text'), true);
var obj = this.getBBox();
var x = obj.x;
var y = obj.y;
this.hide();
html = _.escape( html );
$('<div contenteditable="true" class="type_tool">' + html + '</div>')
.appendTo(that.wrapper)
.css({
top: y,
left: x
})
.focus()
.on('blur', function (e) {
e.preventDefault();
e.stopPropagation();
var $this = $(this),
text = $this.html();
that.editing = false;
that.toggle = true;
if (!text.trim()) {
text = html;
}
text = text.replace( /&nbsp;/gi , " ");
text = _.unescape( text );
undo_manager.register(
el, el.attr, ['text', el.attr('text')], 'Undo Text',
el, el.attr, ['text', text], 'Redo Text');
el.attr('text', that.normalizeContent(text, false));
el.show();
$this.remove();
});
});
});
});
});
};
var SketchHand = function () {
this.figure = null;
this.selected = false;
this.set = paper.set();
this.wrapper = sketchImageWrapper;
return new Sketch(this);
};
SketchHand.prototype.draw = function () {
var that = this;
this.el.filter('.move')
.on({
click: function () {
that.move_tool = true;
that.wrapper.off();
deselectHandObject();
$(document).off('keydown')
.on('keydown', that.deleteKey);
hand.wrapper.css({
"cursor": "default"
});
$(element).off('keydown');
$(element).find("a#delete").off();
that.set = paper.set();
for (var k in stack) {
that.set.push(stack[k]);
}
that.set.drag(that.move, that.start, that.up);
that.set.hover(that.hoverIn, that.hoverOut);
that.set.click(that.clickIn);
that.wrapper.on('click', that.clickOut);
$("a#delete")
.on('click', that.deleteKey);
}
});
this.el.on({
click: function () {
if (!$(this).hasClass('move')) {
$(document).off('keydown');
that.move_tool = false;
that.set.undrag();
$(element).off('keydown');
that.set.unhover(that.hoverIn, that.hoverOut);
}
}
});
};
SketchHand.prototype.clickIn = function () {
deselectHandObject();
this.dx = this.attr("dx");
this.dy = this.attr("dy");
hand.selected = this;
$(element).find("a#delete")
.removeClass('inactive');
this.attr({
'stroke': '#00aeef',
'stroke-opacity': 1
});
};
SketchHand.prototype.deleteKey = function (e) {
if (e.keyCode == 8 || e.keyCode == 46 || e.type == "click") {
e.preventDefault();
undo_manager.register(
hand.selected, (hand.selected.show_arrow) ? hand.selected.show_arrow : hand.selected.show, [], 'Show Object',
hand.selected, (hand.selected.hide_arrow) ? hand.selected.hide_arrow : hand.selected.hide, [], 'Hide Object');
if (hand.selected.hide_arrow) hand.selected.hide_arrow();
else hand.selected.hide();
$(element).find("a#delete").addClass('inactive');
}
};
SketchHand.prototype.clickOut = function (e) {
if (e.target.nodeName === 'svg' && hand.selected) {
if (hand.selected.node.nodeName === "text"){
hand.selected.attr({
'fill': '#f74272',
'fill-opacity': 1,
'stroke': 'none',
'stroke-opacity': 0
});
}else{
hand.selected.attr({
'fill': '#fff',
'fill-opacity': 0,
'stroke': '#f74272',
'stroke-opacity': 1
});
}
$(element).find("a#delete")
.addClass('inactive');
}else if (e.target.nodeName === "tspan"){
hand.selected.attr({
'fill': '#00aeef',
'fill-opacity': 1,
'stroke': '#00aeef',
'stroke-opacity': 1
});
}
};
SketchHand.prototype.start = function () {
deselectHandObject();
this.attr({
'stroke': '#00aeef'
});
this.dx = this.attr("dx");
this.dy = this.attr("dy");
this.previous_pos = this.transform()
.toString();
hand.wrapper.css({
"cursor": "move"
});
this.unhover(hand.hoverIn, hand.hoverOut);
var glows = glow_stack[this.id];
if (typeof(glows) != 'undefined' && glows.length > 0) glows.remove();
};
SketchHand.prototype.move = function (dx, dy) {
this.translate(dx - this.dx, dy - this.dy);
this.dx = dx;
this.dy = dy;
};
SketchHand.prototype.up = function () {
this.attr({
'fill': '#fff',
'fill-opacity': 0,
'stroke': '#f74272',
'stroke-opacity': 1
});
hand.wrapper.css({
"cursor": "default"
});
this.hover(hand.hoverIn, hand.hoverOut);
if (this.add_glow) hand.add_glow(this);
if (this.previous_pos !== this.transform()
.toString()) undo_manager.register(
this, (this.move_arrow) ? this.move_arrow : this.transform, [this.previous_pos], 'Previous Position',
this, (this.move_arrow) ? this.move_arrow : this.transform, [this.transform()
.toString()], 'Current Position');
};
SketchHand.prototype.hoverIn = function () {
hand.wrapper.css({
cursor: 'move'
});
};
SketchHand.prototype.hoverOut = function () {
hand.wrapper.css({
cursor: "default"
});
};
var SketchPencil = function () {
this.figure = null;
this.wrapper = sketchImageWrapper;
this.pathString = null;
this.startX = 0;
this.startY = 0;
return new Sketch(this);
};
SketchPencil.prototype.redraw = function (event) {
var mousePos = pencil.getCoords(event);
var currentX = mousePos.x - pencil.offset[0];
var currentY = mousePos.y - pencil.offset[1];
pencil.pathString += 'l' + (currentX - pencil.startX) + ' ' + (currentY - pencil.startY);
pencil.figure.attr('path', pencil.pathString);
pencil.startX = currentX;
pencil.startY = currentY;
};
SketchPencil.prototype.draw = function () {
var that = this;
this.el.filter('.pencil')
.on('click', function () {
that.set = paper.set();
div_paper.off();
that.wrapper.off();
deselectHandObject();
undo_manager.setUndoKeydown();
hand.wrapper.css({
"cursor": "url('/assets/apps/share/img/cursor-pen.png') 23 23,crosshair"
});
that.wrapper.on('mousedown', function (event) {
event.preventDefault();
var mouseCoords = that.getCoords(event);
that.startX = mouseCoords.x - that.offset[0];
that.startY = mouseCoords.y - that.offset[1];
that.pathString = 'M' + that.startX + ' ' + that.startY + 'l0 0';
that.figure = paper.path(that.pathString);
stack[that.figure.id] = that.figure;
that.figure.attr({
'stroke': '#f74272',
'stroke-linecap': 'round',
'stroke-linejoin': 'round',
'stroke-width': 4,
'stroke-opacity': 1,
'fill-opacity': 0
});
that.wrapper.on('mousemove', that.redraw);
$(document).on('mouseup.sketchDraw', function () {
if (that.figure) {
that.figure.toFront();
undo_manager.register(
that.figure, that.figure.hide, [], 'Hide Pencil',
that.figure, that.figure.show, [], 'Show Pencil');
}
div_paper.off('mousemove');
$(document).off('mouseup.sketchDraw');
});
});
});
};
window.rectangular = new SketchRectangular();
rectangular.draw();
window.circle = new SketchCircle();
circle.draw();
window.line = new SketchLine();
line.draw();
window.arrow = new SketchArrow();
arrow.draw();
window.text = new SketchText();
text.draw();
window.hand = new SketchHand();
hand.draw();
window.pencil = new SketchPencil();
pencil.draw();
})();
$(element).find("#pencil").click();
sizeSketchBuilder();
sketchImageWrapper.find("svg").css({
left : $(sketch_image).css("left")
});
}; // end init_sketch()
var deselectHandObject = function(){
if( hand && hand.selected){
if (hand.selected.node.nodeName === "text"){
hand.selected.attr({
'fill': '#f74272',
'fill-opacity': 1,
'stroke': 'none',
'stroke-opacity': 0
});
}else{
hand.selected.attr({
'stroke': '#f74272',
'fill': '#f74272',
'fill-opacity': 0,
'stroke-opacity': 1
});
}
}
};
var sizeSketchBuilder = function(){
var $builderWindow = sketchBuilder_window,
$wrapper = sketchImageWrapper,
_window = {
height: $(window).height(),
width: $(window).width()
},
_sketch = {
height: sketch_image.height(),
width: sketch_image.width()
},
scrollSize = 15,
windowPadding = 60,
toolbarHeight = 49,
builderCSS = {},
wrapperCSS = {},
scrollCSS = {},
builderClasses = "",
wrapperClasses = "";
var minWidth = ( _sketch.width < 800 ) ? 800 : _sketch.width;
builderCSS = {
height: ( _sketch.height > _window.height ) ? ( _window.height - windowPadding ) : _sketch.height + 81,
width: ( _sketch.width > _window.width ) ? ( _window.width - windowPadding ) : minWidth,
left: "50%",
top: "50%",
marginLeft: "-" + ( minWidth / 2 ) + "px"
};
builderCSS.marginTop = "-" + ( builderCSS.height / 2 ) + "px";
wrapperCSS = {
height: _sketch.height,
width: _sketch.width
};
scrollCSS = {
height: builderCSS.height - toolbarHeight,
width: builderCSS.width
};
if ( _sketch.width > _window.width ) {
builderCSS.height += scrollSize;
builderCSS.left = 0;
builderCSS.marginLeft = windowPadding / 2;
scrollCSS.height += scrollSize;
}
if ( ( _sketch.height + toolbarHeight + windowPadding ) > _window.height ) {
builderCSS.top = 0;
builderCSS.marginTop = windowPadding / 2;
}
$builderWindow.css(builderCSS).addClass(builderClasses);
$wrapper.css(wrapperCSS).addClass(wrapperClasses);
$scrollWrap.css(scrollCSS);
$whiteboard.css({
height: _sketch.height,
width: _sketch.width
});
$whiteboard.appendTo( sketchImageWrapper );
};
var scrollToMatchCurrentScroll = function(){
var topOffset;
if( $scope.project.isMobile ){
topOffset = -75; // Mobile has extra space up top.
}else{
topOffset = 20;
}
var sTop = $(window).scrollTop() + topOffset;
var sLeft = $(window).scrollLeft();
$scrollWrap.scrollTop( sTop ).scrollLeft( sLeft );
}
$scope.whiteboardOpacity = 0;
$scope.whiteboardSelected = 'none';
$scope.setWhiteboardOpacity = function( opacity, name ) {
$scope.whiteboardOpacity = opacity;
$scope.whiteboardSelected = name;
};
$scope.saveSketch = function(){
deselectHandObject();
var svg_string = window.paper.toSVG();
var scale = $scope.getReverseDisplayScale($scope.screen);
var $svg = $.parseXML( svg_string );
var numOfSketchElements = $( $svg ).find("svg").children().size();
var opacity = $scope.whiteboardOpacity;
if ( numOfSketchElements === 0){
$scope.openModalWindow( "error", "Your sketch is empty.  There's nothing to save." );
return;
}
var sketch = {
tempID : $scope.tempSketches.length + 1,
screenID : $scope.screenID,
svg : svg_string,
svgScale : scale,
opacity: opacity
};
$scope.tempSketches.push( sketch );
$scope.hideSketchBuilder();
};
setTimeout( init_sketch, 250 );
$(sketch_image).on("load", function(){
sizeSketchBuilder();
scrollToMatchCurrentScroll();
});
$(window).on("resize.sketchBuilderModal", sizeSketchBuilder );
$scope.$on( "$destroy", function() {
$(window).off("resize.sketchBuilderModal");
$(document).off('keydown');
$body.removeClass("share-lite-sketching");
});
}
};
}
);
})( angular, InVision );
;
;
/*! share-sketch-viewer-image.js */ 
;
;
(function( ng, app ) {
"use strict";
app.directive( "invShareSketchViewerImage", Directive );
/** @ngInject */
function Directive( $, $window, modelEvents ) {
return {
restrict: 'A',
link: function( $scope, element, attrs ){
var retry = 1;
var timer;
var baseURL = "/api/comments/" + $scope.sketchViewerSketch.commentID + "/sketch/" + $scope.sketchViewerSketch.id;
element.bind("error", function(e){
$scope.setSketchImageIsProcessing( true );
$scope.$apply();
if( retry <= 5 ){
timer = setTimeout(function(){
element.attr("src", baseURL + "?retry=" + retry );
retry++
}, 5000);
}
});
element.bind("load", function(e){
$scope.setSketchImageIsProcessing( false );
$scope.$apply();
})
$scope.$on( "$destroy", function() {
$(window).off("resize.sketchViewerModal");
clearTimeout( timer );
});
}
};
}
})( angular, InVision );
;
;
/*! share-sketch-viewer.js */ 
;
;
(function( ng, app ) {
"use strict";
app.directive(
"invShareSketchViewer",
/** @ngInject */
function( $, $window, modelEvents, $timeout ) {
return {
restrict: 'A',
transclude: true,
replace: true,
templateUrl: "/assets/apps/share/views/directives/share-sketch-viewer.htm",
link: function( $scope, element, attrs ){
var resizeSketchViewer = function(){
var overlay = $( element ).find('.modalOverlay');
overlay.css("height", $(window).height() );
overlay.css("width", $(window).width() );
var sketchViewerWindow = $( element ).find(".sketchViewer");
var sketchImageContainer = $( sketchViewerWindow ).find(".imageContainer");
var sketchImage = $( sketchImageContainer ).find("img");
var tempSketchOverlay = $( sketchViewerWindow ).find(".tempSketchOverlay");
var tempSketchSVG  = $( tempSketchOverlay ).find("svg");
var sketchHeight = $scope.screen.height * $scope.screen.displayScale;
var sketchWidth = $scope.screen.width * $scope.screen.displayScale;
var viewerMaxHeight = $(window).height() * .75;
var viewerMaxWidth = $(window).width() * .85;
if ( sketchHeight < viewerMaxHeight){
viewerMaxHeight = sketchHeight;
}
if ( sketchWidth < viewerMaxWidth){
viewerMaxWidth = sketchWidth;
}else{
sketchImage.css( "width", viewerMaxWidth + "px");
}
sketchViewerWindow.css("height", viewerMaxHeight + "px");
sketchViewerWindow.css("width", viewerMaxWidth );
element.find(".isProcessing>p").css({"margin-top": (viewerMaxHeight/2 - 50) + "px"});
var marginTop = ( $(window).height() - viewerMaxHeight ) / 2;
var marginLeft = ( $(window).width() - viewerMaxWidth ) / 2;
sketchViewerWindow.css("margin-top", marginTop );
sketchViewerWindow.css("margin-left", marginLeft );
}
var autoScrollSketchViewer = function(){
var sTop = $scope.sketchViewerMarker.y * $scope.screen.displayScale - ( $(element).find(".sketchViewer").height() / 2 );
var sLeft = $scope.sketchViewerMarker.x * $scope.screen.displayScale - ( $(element).find(".sketchViewer").width() / 2 );
sTop = sTop > 0 ? sTop : 0;
sLeft = sLeft > 0 ? sLeft : 0;
$(element).find('.imageContainer').scrollTop( sTop ).scrollLeft( sLeft );
}
$timeout(function(){
resizeSketchViewer();
autoScrollSketchViewer();
});
$(window).on("resize.sketchViewerModal", function(){
resizeSketchViewer();
autoScrollSketchViewer();
});
$scope.$on( "$destroy", function() {
$(window).off("resize.sketchViewerModal");
});
}
};
}
);
})( angular, InVision );
;
;
/*! slice-helper.js */ 
;
;
(function( ng, app ) {
"use strict";
app.directive(
"invSliceHelper",
function( $document, $timeout, _, screenService ) {
var linkFunction = function( $scope, element, attributes, keyCombosController ) {
var $window = $(window),
$element = $(element),
$screen = $element.find("img");
$window.on("scroll.invSliceHelper", function() {
if ( $screen.width < $window.width || $scope.project.isMobile ) {
return;
}
if( $scope.screen.zoomScrollBehavior == screenService.zoomScrollBehaviors.DISABLE_HORIZONTAL_SCROLLING ){
return;
}else{
$element.css("margin-left", "-" + $(document).scrollLeft() + "px");
}
});
$scope.$on( 
"$destroy",
function() {
$window.off("scroll.invSliceHelper");
}
);
};
return({
link: linkFunction,
restrict: "A"
});
}
);
})( angular, InVision );
;
;
/*! spinner.js */ 
;
;
(function( ng, app ) {
"use strict";
app.directive( "invProgressBar", Directive );
/** @ngInject */
function Directive( $timeout ) {
function link( $scope, element, attributes ) {
var valueToWatch = ( attributes.controlValue || "isLoading" );
if ( $scope[valueToWatch] ) {
NProgress.start();
} else {
NProgress.done();
}
$scope.$watch(
valueToWatch,
function( newValue, oldValue ) {
if ( newValue === oldValue ) {
return;
}
if ( newValue ) {
NProgress.start();
} else {
NProgress.done();
}
}
);
$scope.$on(
"$destroy",
function() {
NProgress.done();
}
);
}
return({
link: link,
restrict: "A"
});
}
})( angular, InVision );
;
;
/*! success-button.js */ 
;
;
(function( ng, app ) {
"use strict";
app.directive( "invSuccessButton", Directive );
/** @ngInject */
function Directive( $timeout ) {
var linkFunction = function( $scope, element, attributes ) {
var $button = $(element),
markup = "<span class=\"success-wrap\">" +
"<span class=\"content\">" + $button.text() + "</span>" +
"<span class=\"success\"></span>" +
"</span>",
delay = attributes.delay || 1500;
$button
.text("")
.addClass("success-button")
.append($(markup));
$scope.$on("invSuccessButton:success", function() {
$button.addClass("success");
$timeout(function() {
$scope.$apply( attributes.afterSuccess );
}, delay);
});
$scope.$on(
"$destroy",
function() {
$button.off("click.invSuccessButton");
}
);
};
return({
link: linkFunction,
restrict: "A"
});
}
})( angular, InVision );
;
;
/*! tinyscrollbar.js */ 
;
;
(function( ng, app ) {
"use strict";
app.directive(
"invTinyscrollbar",
/** @ngInject */
function( $timeout, _ ) {
var linkFunction = function( $scope, element, attributes ) {
function applyConditionalClasses() {
if ( isScrollbarDisabled() ) {
if ( enabledClass ) {
target.removeClass( enabledClass );
}
if ( disabledClass ) {
target.addClass( disabledClass );
}
} else {
if ( enabledClass ) {
target.addClass( enabledClass );
}
if ( disabledClass ) {
target.removeClass( disabledClass );
}
}
}
function isScrollbarDisabled() {
return( scrollbar.is( ".disable" ) );
}
var target = $( element );
target
.wrapInner( "<div class='overview'>" )
.wrapInner( "<div class='viewport'>" )
.prepend( "<div unselectable='on' class='scrollbar unselectable'><div unselectable='on' class='track unselectable'><div unselectable='on' class='thumb unselectable'><div unselectable='on' class='end unselectable'></div></div></div></div>" )
.tinyscrollbar({
axis: "y"
});
;
var viewport = target.children( "div.viewport" );
var overview = viewport.children( "div.overview" );
var scrollbar = target.children( "div.scrollbar" );
var disabledClass = ( attributes.tinyscrollbarDisabledClass || "" );
var enabledClass = ( attributes.tinyscrollbarEnabledClass || "" );
scrollbar.on(
"mousedown.invTinyscrollbar selectstart.invTinyscrollbar",
function( event ) {
event.preventDefault();
}
);
$scope.$watch(
function() {
return( overview.height() );
},
function( newValue ) {
target.tinyscrollbar_update();
applyConditionalClasses();
}
);
$( window ).on(
"resize.invTinyscrollbar",
function( event ) {
target.tinyscrollbar_update();
applyConditionalClasses();
}
);
$scope.$on(
"$destroy",
function() {
target.remove();
scrollbar.off( "mousedown.invTinyscrollbar" );
scrollbar.off( "selectstart.invTinyscrollbar" );
$( window ).off( "resize.invTinyscrollbar" );
}
);
};
return({
link: linkFunction,
restrict: "A"
});
}
);
})( angular, InVision );
;
;
/*! toggle.js */ 
;
;
(function( ng, app ) {
"use strict";
app.directive(
"invToggle",
function() {
var linkFunction = function( $scope, element, attributes, modelController ) {
function applyModelValue( value ) {
if ( value ) {
element
.addClass( "on" )
.removeClass( "off" )
;
} else {
element
.addClass( "off" )
.removeClass( "on" )
;
}
}
function toggle() {
var newValue = ! modelController.$modelValue;
applyModelValue( newValue );
modelController.$setViewValue( newValue );
}
var thumb = element.siblings('.clickable'); //element.find( "a.toggle-thumb" );
thumb.on(
"click.invToggle", 
function( event ) {
event.preventDefault();
$scope.$apply( toggle );
}
);
modelController.$render = function() {
applyModelValue( modelController.$modelValue );
};
$scope.$on(
"$destroy",
function() {
thumb.off( "click.invToggle" );
}
);
};
return({
link: linkFunction,
replace: true,
require: "^ngModel",
restrict: "A",
templateUrl: "/assets/apps/share/views/directives/toggle.htm"
});
}
);
})( angular, InVision );
;
;
/*! toolbar-introduction.js */ 
;
;
(function( ng, app ) {
"use strict";
app.directive(
"invToolbarIntroduction",
/** @ngInject */
function( $, $document, keyComboHelper, _ ) {
/** @ngInject */
var linkFunction = function( $scope, element, attributes, keyCombosController ) {
function closeIntroduction() {
$scope.$apply(
function() {
$scope.closeIntroduction();
}
);
}
var listenerConfig = {};
listenerConfig[ "keydown.invToolbarIntroduction" ] = function( event ) {
if ( event.metaKey ) {
return;
}
if ( keyComboHelper.isEscapeKeyEvent( event ) ) {
closeIntroduction();
}
};
element.on(
"click.invToolbarIntroduction",
function( event ) {
var isInDialog = $( event.target ).closest( "div.dialog" ).length;
if ( ! isInDialog ) {
closeIntroduction();
}
}
);
$scope.$watch(
"isShowingIntroduction",
function( newValue ) {
if ( newValue === true ) {
keyCombosController.addListener( listenerConfig );
} else if ( newValue === false ) {
keyCombosController.removeListener( listenerConfig );
}
}
);
$scope.$on(
"$destroy",
function() {
element.off( "click.invToolbarIntroduction" );
}
);
};
return({
link: linkFunction,
require: "^invKeyCombos",
restrict: "A"
});
}
);
})( angular, InVision );
;
;
/*! toolbar.js */ 
;
;
(function( ng, app ) {
"use strict";
app.directive(
"invToolbar",
/** @ngInject */
function( _ ) {
var linkFunction = function( $scope, element, attributes ) {
element.on(
"mouseenter.invToolbar",
function( event ) {
$scope.$apply(
function() {
$scope.isUserOverToolbar = true;
$scope.updateActiveStatus();
}
);
}
);
element.on(
"mouseleave.invToolbar",
function( event ) {
$scope.$apply(
function() {
$scope.isUserOverToolbar = false;
$scope.updateActiveStatus();
}
);
}
);
$scope.$on(
"$destroy",
function() {
element.off( "mouseenter.invToolbar" );
element.off( "mouseleave.invToolbar" );
}
);
};
return({
link: linkFunction,
restrict: "A"
});
}
);
})( angular, InVision );
;
;
/*! uniform.js */ 
;
;
(function( ng, app ) {
"use strict";
app.directive(
"invUniform",
function() {
var linkFunction = function( $scope, element, attributes ) {
$( element ).uniform();
$scope.$watch(
attributes.ngModel,
function( newValue, oldValue ) {
$.uniform.update( element );
}
);
$scope.$on(
"$destroy",
function() {
}
);
};
return({
link: linkFunction,
restrict: "A",
scope: false
});
}
);
})( angular, InVision );
;
;
/*! video-overlay.js */ 
;
;
(function( ng, app ) {
"use strict";
app.directive( "invVideoOverlay", Directive );
/** @ngInject */
function Directive( $timeout ) {
var linkFunction = function( $scope, element, attributes ) {
var $element = $(element),
playerId = ( attributes.playerId || "unknown"),
videoId = ( attributes.videoId || "unknown" ),
videoWidth = ( attributes.videoWidth || 788 ),
videoHeight = ( attributes.videoHeight || 444 ),
$embed = $('<iframe id="' + videoId + '" src="//fast.wistia.net/embed/iframe/' + videoId + '" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="' + videoWidth + '" height="' + videoHeight + '"></iframe>');
/* Wistia Video */
/********************************************************/
attributes.$observe("playerId", function(newValue) {
playerId = newValue;
$embed.attr("id", newValue);
});
attributes.$observe("videoWidth", function(newValue) {
$embed.attr("width", newValue);
});
attributes.$observe("videoHeight", function(newValue) {
$embed.attr("height", newValue);
});
attributes.$observe("videoId", function(newValue) {
$embed = $('<iframe id="' + playerId + '" src="//fast.wistia.net/embed/iframe/' + newValue + '" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="100%" height="100%"></iframe>');
$element.append($embed);
});
$scope.$on('$destroy', function() {
$embed.remove();
});
};
return({
link: linkFunction,
restrict: "A",
scope: true
});
}
})( angular, InVision );
;
;
/*! account-service.js */ 
;
;
(function( ng, app ) {
"use strict";
app.service( "accountService", Service );
/** @ngInject */
function Service( $resource, serviceHelper, modelEvents ) {
function markLiveShareIntroClosed( hasClosedLiveshareIntro ) {
var promise = serviceHelper.executeRequest({
resource: resource,
name: "markLiveShareIntroClosed",
parameters: {
option: hasClosedLiveshareIntro
},
successCallback: function( response ) {
modelEvents.trigger( "accountUpdated", response );
}
});
return( promise );
}		
function markShareIntroClosed( hasClosedShareIntro ) {
var promise = serviceHelper.executeRequest({
resource: resource,
name: "markShareIntroClosed",
parameters: {
option: hasClosedShareIntro
},
successCallback: function( response ) {
modelEvents.trigger( "accountUpdated", response );
}
});
return( promise );
}
function markHasSeenCommentTooltip( hasSeenCommentTooltip ) {
var promise = serviceHelper.executeRequest({
resource: resource,
name: "markHasSeenCommentTooltip",
parameters: {
hasSeenCommentTooltip: hasSeenCommentTooltip
},
successCallback: function( response ) {
}
});
return( promise );
}
var resource = $resource(
"/api/account/:command",
{
command: "@command"
},
{
markHasSeenCommentTooltip:{
method: "POST",
params: {
command : "mark-has-seen-comment-tooltip"
}
},
markLiveShareIntroClosed: {
method: "POST",
params: {
command: "mark-liveshare-intro-closed"
}
},
markShareIntroClosed: {
method: "POST",
params: {
command: "mark-share-intro-closed"
}
}
}
);
return({
markHasSeenCommentTooltip: markHasSeenCommentTooltip,
markLiveShareIntroClosed: markLiveShareIntroClosed,
markShareIntroClosed: markShareIntroClosed
});
}
})( angular, InVision );
;
;
/*! before-unload-service.js */ 
;
;
(function( ng, app ) {
"use strict";
app.service( "beforeUnloadService", BeforeUnloadService );
/** @ngInject */
function BeforeUnloadService( $window, _ ) {
this.functionQueue = [];
$window.onbeforeunload = ng.bind( this, this.run );
return( this );
}
BeforeUnloadService.prototype = {
run: function( ) {
ng.forEach( this.functionQueue, function( bundle ){
bundle.funcRef.apply( bundle.context, bundle.args );
});
},
push: function( context, funcRef, args ) {
if( _.isUndefined( funcRef ) || !_.isFunction( funcRef ) ) {
funcRef = ng.noop;
}
this.functionQueue.push( {	
context: context,
funcRef: funcRef,
args: args
} );
}
};
})( angular, InVision );
;
;
/*! comment-service.js */ 
;
;
(function( ng, app ) {
"use strict";
app.service( "commentService", CommentService );
/** @ngInject */
function CommentService( $resource, serviceHelper, modelEvents, config, _, MAX_COMMENT_LIKES_DISPLAYED ) {
function addComment( conversationID, comment, notify, sketches, dataUrl, isUnsupported ) {
if ( typeof( isUnsupported ) == "undefined" ) {
isUnsupported = false;
}
if ( isUnsupported ) {
dataUrl = "";
}
var promise = serviceHelper.executeRequest({
resource: resource,
name: "addComment",
parameters: {
conversationID: conversationID,
comment: comment,
notify: notify,
sketches : sketches,
dataUrl: dataUrl,
isUnsupported: isUnsupported
},
successCallback: function( response ) {
modelEvents.trigger( "commentCreated", response );
modelEvents.trigger( "conversationSubscribersUpdated", conversationID, notify );
}
});
return( promise );
}
function deleteComment( commentID ) {
var promise = serviceHelper.executeRequest({
resource: resource,
name: "deleteComment",
parameters: {
id: commentID
},
successCallback: function( response ) {
modelEvents.trigger( "commentDeleted", commentID );
}
});
return( promise );
}
function formatCommentLikers( comment ) {
var likedByList = _.pluck( comment.likedBy, "name" ).join("<br >");
if( comment.numberOfLikes > MAX_COMMENT_LIKES_DISPLAYED ) {
likedByList += "<br >+" + (comment.numberOfLikes - MAX_COMMENT_LIKES_DISPLAYED ) + " more";
}
return likedByList;
}
function getCommentsByConversationID( conversationID ) {
var comments = _.withProperty( config.comments, "conversationID", conversationID );
for (var c = 0, length = comments.length; c < length; c++){
comments[c].sketches = getSketchesByCommentID( comments[c].id );
comments[c].likedByList = formatCommentLikers( comments[c] );
}
return( 
ng.copy( comments )
);
}
function getSketchesByCommentID( commentID ){
var commentSketches = _.withProperty( config.commentSketches, "commentID", commentID );
return(
ng.copy( commentSketches )
);
}
function getHtmlForComment( comment ) {
comment = comment.replace(
/(<)|(>)|(&)|(")/g,
function( $0, lt, gt, amp, quot ) {
if ( lt ) {
return( "&lt;" );
} else if ( gt ) {
return( "&gt;" );
} else if ( amp ) {
return( "&amp;" );
} else if ( quot ) {
return( "&quot;" );
}
}
);
comment = replaceLinks( comment );
comment = comment.replace( /(\r\n?|\n)/g, "<br />" );
return( comment );
}
function replaceLinks( comment ) {
comment = comment.replace(
/((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?Â«Â»ââââ]))/gi, 
function( $0 ){
if ( ( /^javascript:/i ).test( $0 ) ) {
return( "" );
}
var hasProtocol = ( /^\w+:\/\//i ).test( $0 );
var href = ( hasProtocol ? $0 : ( "http://" + $0 ) );
var text = $0;
return(
"<a href=\"" + href + "\" target=\"_blank\">" + text + "</a>"
);
}
);
return( comment );
}
function updateComment( commentID, conversationID, comment ) {
var promise = serviceHelper.executeRequest({
resource: resource,
name: "updateComment",
parameters: {
id: commentID,
conversationID: conversationID,
comment: comment
},
successCallback: function( response ) {
modelEvents.trigger( "commentUpdated", response );
}
});
return( promise );
}
function unsubscribe( projectID, hash ){
var promise = serviceHelper.executeRequest({
resource: resource,
name: "unsubscribe",
parameters: {
id: projectID,
hash: hash
}
});
return( promise );
}
function resubscribe( projectID, hash ){
var promise = serviceHelper.executeRequest({
resource: resource,
name: "resubscribe",
parameters: {
id: projectID,
hash: hash
}
});
return( promise );
}
var resource = $resource(
"/api/comments/:id/:command",
{
id: "@id",
command: "@command"
},
{
addComment: {
method: "POST"
},
deleteComment: {
method: "DELETE"
},
updateComment: {
method: "POST"
},
unsubscribe: {
method: "GET",
params: {
command: "unsubscribe"
}
},
resubscribe: {
method: "GET",
params: {
command: "resubscribe"
}
}
}
);
modelEvents.on(
"commentCreated",
function( event, comment ) {
comment.userAvatarID = comment.avatarID;
for( var cs = 0; cs < comment.sketches.length; cs++ ){
config.commentSketches.push( comment.sketches[cs] );
}
}
);
modelEvents.on(
"commentDeleted",
function( event, commentID ) {
config.comments = _.withoutProperty( config.comments, "id", commentID );
}
);
modelEvents.on(
"commentUpdated",
function( event, comment ) {
var cachedComment = _.findWithProperty( config.comments, "id", comment.id );
if ( cachedComment ) {
_.extendExistingProperties( cachedComment, comment );
}
}
);
modelEvents.on(
"conversationDeleted",
function( event, conversationID ) {
config.comments = _.withoutProperty( config.comments, "conversationID", conversationID );
}
);
modelEvents.on(
"conversationMarkedRead",
function( event, conversationID ) {
var comments = _.withProperty( config.comments, "conversationID", conversationID );
_.setProperty( comments, "isUnread", false );
}
);
return({
addComment: addComment,
deleteComment: deleteComment,
formatCommentLikers: formatCommentLikers,
getCommentsByConversationID: getCommentsByConversationID,
getHtmlForComment: getHtmlForComment,
updateComment: updateComment,
unsubscribe: unsubscribe,
resubscribe: resubscribe
});
}
})( angular, InVision );
;
;
/*! company-service.js */ 
;
;
(function( ng, app ) {
"use strict";
app.service( "companyService", Service );
/** @ngInject */
function Service( $resource, serviceHelper ) {
function assertEmailsAreCompanyMembers( emailArray ) {
var promise = serviceHelper.executeRequest({
resource: resource,
name: "assertEmailsAreCompanyMembers",
parameters: { emails: emailArray }
});
return( promise );
}
var resource = $resource(
"/api/company/:command",
{
command: "@command"
},
{
assertEmailsAreCompanyMembers: {
method: "POST",
params: {
command: "assert-company-email"
}
}
}
);
return({
assertEmailsAreCompanyMembers: assertEmailsAreCompanyMembers
});
}
})( angular, InVision );
;
;
/*! conversation-service.js */ 
;
;
(function( ng, app ) {
"use strict";
app.service( "conversationService", ConversationService );
/** @ngInject */
function ConversationService( $resource, serviceHelper, modelEvents, config, _ ) {
function addSubscribers( conversationID, userIDs ) {
var conversation = _.findWithProperty( config.conversations, "id", conversationID );
if ( conversation ) {
conversation.subscribers = conversation.subscribers.concat( userIDs );
modelEvents.trigger( "conversationUpdated", conversation );
}
}
function changePosition( conversationID, x, y, dataUrl ) {
var promise = serviceHelper.executeRequest({
resource: resource,
name: "changePosition",
parameters: {
id: conversationID,
x: x,
y: y,
dataUrl: dataUrl
},
successCallback: function( response ) {
modelEvents.trigger( "conversationUpdated", response );
}
});
return( promise );
}
function changePrivacy( conversationID, isForDevelopment, isPrivate ) {
var promise = serviceHelper.executeRequest({
resource: resource,
name: "changePrivacy",
parameters: {
id: conversationID,
isForDevelopment: isForDevelopment,
isPrivate: isPrivate
},
successCallback: function( response ) {
modelEvents.trigger( "conversationUpdated", response );
}
});
return( promise );
}
function deleteConversation( conversationID ) {
var promise = serviceHelper.executeRequest({
resource: resource,
name: "deleteConversation",
parameters: {
id: conversationID
},
successCallback: function( response ) {
modelEvents.trigger( "conversationDeleted", conversationID );
}
});
return( promise );
}
function getConversationByID( conversationID ) {
var conversation = _.findWithProperty( config.conversations, "id", conversationID );
return(
ng.copy( conversation )
);
}
function getConversationsByScreenID( screenID ) {
var conversations = _.withProperty( config.conversations, "screenID", screenID );
return( 
ng.copy( conversations )
);
}
function markComplete( conversationID ) {
var promise = serviceHelper.executeRequest({
resource: resource,
name: "markComplete",
parameters: {
id: conversationID
},
successCallback: function( response ) {
modelEvents.trigger( "conversationUpdated", response );
}
});
return( promise );
}
function markIncomplete( conversationID ) {
var promise = serviceHelper.executeRequest({
resource: resource,
name: "markIncomplete",
parameters: {
id: conversationID
},
successCallback: function( response ) {
modelEvents.trigger( "conversationUpdated", response );
}
});
return( promise );
}
function markRead( conversationID ) {
var promise = serviceHelper.executeRequest({
resource: resource,
name: "markRead",
parameters: {
id: conversationID
},
successCallback: function( response ) {
modelEvents.trigger( "conversationMarkedRead", conversationID );
}
});
return( promise );
}
function startConversation( screenID, label, x, y, isForDevelopment, isPrivate, dataUrl, isUnsupported ) {
var promise = serviceHelper.executeRequest({
resource: resource,
name: "startConversation",
parameters: {
screenID: screenID,
label: label,
x: x,
y: y,
isPrivate: isPrivate,
isForDevelopment: isForDevelopment,
isComplete: false,
dataUrl: dataUrl,
isUnsupported: isUnsupported
},
successCallback: function( response ) {
modelEvents.trigger( "conversationCreated", response );
}
});
return( promise );
}
function toggleCommentLike( commentID, conversationID ) {
var promise = serviceHelper.executeRequest({
resource: commentResource,
name: "toggleLike",
parameters: {
commentID: commentID
},
successCallback: function( response ) {
modelEvents.trigger( 
"commentUpdated",
commentID,
conversationID	
);
}
});
return promise;
}
function deleteSketch( sketchID ){
var promise = serviceHelper.executeRequest({
resource: sketchResource,
name: "deleteSketch",
parameters: {sketchID : sketchID},
successCallback: function( response ){
}
});
return promise;
}
var resource = $resource(
"/api/conversations/:id/:command",
{
id: "@id",
command: "@command"
},
{
changePosition: {
method: "POST",
params: {
command: "change-position"
}
},
changePrivacy: {
method: "POST",
params: {
command: "change-privacy"
}
},
deleteConversation: {
method: "DELETE"
},
markComplete: {
method: "POST",
params: {
command: "mark-complete"
}
},
markIncomplete: {
method: "POST",
params: {
command: "mark-incomplete"
}
},
markRead: {
method: "POST",
params: {
command: "mark-read"
}
},
startConversation: {
method: "POST"
}
}
);
var commentResource = $resource(
"/api/comments/:command", 
{
command: "@command"
},
{
toggleLike: {
method: "POST",
params: {
command: "toggle-like"
}	
}
}
);
var sketchResource = $resource(
"/api/comments/:command/:sketchID", 
{
sketchID: "@sketchID",
command: "deleteSketch"
},
{
deleteSketch:{
method: "DELETE",
params: {
command: "deleteSketch"
}
}
}
);
modelEvents.on(
"conversationCreated",
function( event, conversation ) {
config.conversations.push( ng.copy( conversation ) );
}
);
modelEvents.on(
"conversationDeleted",
function( event, conversationID ) {
config.conversations = _.withoutProperty( config.conversations, "id", conversationID );
}
);
modelEvents.on(
"conversationSubscribersUpdated",
function( event, conversationID, notify ) {
var cachedConversation = _.findWithProperty( config.conversations, "id", conversationID );
if ( cachedConversation ) {
cachedConversation.subscribers = [].concat( notify.members ).concat( notify.stakeholders );
modelEvents.trigger( "conversationUpdated", cachedConversation );
}
}
);
modelEvents.on(
"conversationUpdated",
function( event, conversation ) {
var cachedConversation = _.findWithProperty( config.conversations, "id", conversation.id );
if ( cachedConversation ) {
_.extendExistingProperties( cachedConversation, conversation );
}
}
);
return({
addSubscribers: addSubscribers,
changePosition: changePosition,
changePrivacy: changePrivacy,
deleteConversation: deleteConversation,
deleteSketch: deleteSketch,
getConversationByID: getConversationByID,
getConversationsByScreenID: getConversationsByScreenID,
markComplete: markComplete,
markIncomplete: markIncomplete,
markRead: markRead,
startConversation: startConversation,
toggleCommentLike: toggleCommentLike
});
}
})( angular, InVision );
;
;
/*! hotspot-service.js */ 
;
;
(function( ng, app ) {
"use strict";
app.service( "hotspotService", HotspotService );
/** @ngInject */
function HotspotService( config, _ ) {
function getHotspotsByScreenID( screenID ) {
var hotspots = _.withProperty( config.hotspots, "screenID", screenID );
return( 
ng.copy( hotspots )
);
}
function getAllHotSpots(){
return( 
ng.copy( config.hotspots )
);			
}
var eventTypes = {
click: 1,
doubleTap: 2,
pressHold: 3,
swipeRight: 4,
swipeLeft: 5,
swipeUp: 6,
swipeDown: 7,
hover: 8,
autoRedirect: 9
};
var targetTypes = {
screen: 1,
lastScreenVisited: 2,
previousScreenInSort: 3,
nextScreenInSort: 4,
externalUrl: 5,
positionOnScreen: 6
};
var transitionTypes = {
none: 1,
pushRight: 2,
pushLeft: 3,
slideUp: 4,
slideDown: 5,
flipRight: 6,
flipLeft: 7,
dissolve: 8
};
return({
eventTypes: eventTypes,
getHotspotsByScreenID: getHotspotsByScreenID,
targetTypes: targetTypes,
transitionTypes: transitionTypes,
getAllHotSpots: getAllHotSpots
});
}
})( angular, InVision );
;
;
/*! ipinfo-service.js */ 
;
;
(function( ng, app ) {
"use strict";
app.service( "ipInfoService", Service );
/** @ngInject */
function Service( config ) {
function getGeolocationData( parameter ) {
return ( config.ipGeoLocation );
}
return({
getGeolocationData: getGeolocationData
});
}
})( angular, InVision );
;
;
/*! key-combo-helper.js */ 
;
;
(function( ng, app ) {
"use strict";
app.service( "keyComboHelper", KeyComboHelper );
/** @ngInject */
function KeyComboHelper( _ ) {
function isAltKeyEvent( event ) {
validateEventType( "altKey", event );
return( event.which === altKey );
}
function isCharKeyEvent( event, char, maintainCase ) {
var calculatedChar = String.fromCharCode( event.which );
if ( maintainCase ) {
return( char === calculatedChar );
}
return( char.toLowerCase() === calculatedChar.toLowerCase() );
}
function isControlKeyEvent( event ) {
validateEventType( "controlKey", event );
return( event.which === controlKey );
}
function isDownArrowKeyEvent( event ) {
validateEventType( "downArrowKey", event );
return( event.which === downArrowKey );
}
function isEnterKeyEvent( event ) {
validateEventType( "enterKey", event );
return( 
! event.metaKey &&
( event.which === enterKey )
);
}
function isEscapeKeyEvent( event ) {
validateEventType( "escapeKey", event );
return( event.which === escapeKey );
}
function isLeftArrowKeyEvent( event ) {
validateEventType( "leftArrowKey", event );
return( 
! event.metaKey &&
( event.which === leftArrowKey )
);
}
function isRightArrowKeyEvent( event ) {
validateEventType( "rightArrowKey", event );
return( 
! event.metaKey &&
( event.which === rightArrowKey )
);
}
function isShiftKeyEvent( event ) {
validateEventType( "shiftKey", event );
return( event.which === shiftKey );
}
function isSuperKeyEvent( event ) {
validateEventType( "superKey", event );
return( event.which === superKey );
}
function isTabKeyEvent( event ) {
validateEventType( "tabKey", event );
return( event.which === tabKey );
}
function isUpArrowKeyEvent( event ) {
validateEventType( "upArrowKey", event );
return( 
! event.metaKey &&
( event.which === upArrowKey )
);
}
function validateEventType( key, event ) {
if ( 
keyRequirements.hasOwnProperty( key ) &&
( _.indexOf( keyRequirements[ key ], event.type ) === -1 )
) {
throw( new Error( key + " requires " + keyRequirements[ key ].join( " / " ) + " event." ) );
}
}
var altKey = 18;
var controlKey = 17;
var downArrowKey = 40;
var enterKey = 13;
var escapeKey = 27;
var leftArrowKey = 37;
var rightArrowKey = 39;
var shiftKey = 16;
var superKey = 224;
var tabKey = 9;
var upArrowKey = 38;
var keyRequirements = {
altKey: [ "keydown", "keyup" ],
controlKey: [ "keydown", "keyup" ],
downArrowKey: [ "keydown", "keyup" ],
escapeKey: [ "keydown", "keyup" ],
leftArrowKey: [ "keydown", "keyup" ],
rightArrowKey: [ "keydown", "keyup" ],
shiftKey: [ "keydown", "keyup" ],
superKey: [ "keydown", "keyup" ],
tabKey: [ "keydown", "keyup" ],
upArrowKey: [ "keydown", "keyup" ]
};
return({
isAltKeyEvent: isAltKeyEvent,
isCharKeyEvent: isCharKeyEvent,
isControlKeyEvent: isControlKeyEvent,
isDownArrowKeyEvent: isDownArrowKeyEvent,
isEnterKeyEvent: isEnterKeyEvent,
isEscapeKeyEvent: isEscapeKeyEvent,
isLeftArrowKeyEvent: isLeftArrowKeyEvent,
isRightArrowKeyEvent: isRightArrowKeyEvent,
isShiftKeyEvent: isShiftKeyEvent,
isSuperKeyEvent: isSuperKeyEvent,
isTabKeyEvent: isTabKeyEvent,
isUpArrowKeyEvent: isUpArrowKeyEvent
});
}
})( angular, InVision );
;
;
/*! project-service.js */ 
;
;
(function( ng, app ) {
"use strict";
app.service( "projectService", ProjectService );
/** @ngInject */
function ProjectService( config, _, modelEvents, $resource, sessionService, serviceHelper ) {
function getProject() {
return( 
ng.copy( config.project )
);
}
function reloadStakeholders( projectID ) {
var promise = serviceHelper.executeRequest({
resource: resource,
name: "reloadStakeholders",
parameters: {
id: projectID
},
successCallback: function( response ){
config.affiliates = response;
}
});
return( promise );
}
function removeStakeholderFromProject( userID ) {
resource.removeStakeholder({ id: config.project.id, userID: userID }, function() {
modelEvents.trigger( "projectStakeholderRemoved", config.project.id, userID );
config.affiliates = _.rejectWithProperty( config.affiliates, "id", userID );
});
}
var resource = $resource(
"/api/project/:id/:command",
{
id: "@id",
command: "@command"
},
{
reloadStakeholders: {
method: "GET",
isArray: true,
params: {
command: "stakeholders"
}
},
removeStakeholder: {
method: "POST",
params: {
command: "remove-stakeholder"
}
}
}
);
return({
getProject: getProject,
reloadStakeholders: reloadStakeholders,
removeStakeholderFromProject: removeStakeholderFromProject
});
}
})( angular, InVision );
;
;
/*! project-viewing-service.js */ 
;
;
(function( ng, app ) {
"use strict";
app.service( "projectViewingService", ProjectViewingService );
/** @ngInject */
function ProjectViewingService( $resource, serviceHelper, _ ) {
function incrementCommentCount( shareID ) {
var promise = serviceHelper.executeRequest({
resource: resource,
name: "incrementCommentCount",
parameters: {
shareID: shareID
}
});
return( promise );
}
function setEndedAt( shareID ) {
var promise = serviceHelper.executeRequest({
resource: resource,
name: "setEndedAt",
parameters: {
shareID: shareID
}
});
return( promise );
}
function incrementScreenCount( shareID ) {
if ( cachedScreenCountFailure !== null ) {
return( cachedScreenCountFailure );
}
var promise = serviceHelper.executeRequest({
resource: resource,
name: "incrementScreenCount",
parameters: {
shareID: shareID
}
});
promise.then(
null,
function() {
cachedScreenCountFailure = promise;
}
);
return( promise );
}
function incrementCommentCountForPresentation( presentationID ) {
var promise = serviceHelper.executeRequest({
resource: resource2,
name: "incrementCommentCount",
parameters: {
presentationID: presentationID
}
});
return( promise );
}
function incrementSlideCountForPresentation( presentationID ) {
var promise = serviceHelper.executeRequest({
resource: resource2,
name: "incrementSlideCount",
parameters: {
presentationID: presentationID
}
});
return( promise );
}
function incrementCalloutCountForPresentation( presentationID ) {
var promise = serviceHelper.executeRequest({
resource: resource2,
name: "incrementCalloutCount",
parameters: {
presentationID: presentationID
}
});
return( promise );
}
var resource = $resource(
"/api/project-viewing/:shareID/:command",
{
shareID: "@shareID",
command: "@command"
},
{
incrementCommentCount: {
method: "POST",
params: {
command: "increment-comment-count"
}
},
incrementScreenCount: {
method: "POST",
params: {
command: "increment-screen-count"
}
},
setEndedAt: {
method: "POST",
params: {
command: "set-ended-at"
}
}
}
);
var resource2 = $resource(
"/api/project-viewing-presentation/:presentationID/:command",
{
presentationID: "@presentationID",
command: "@command"
},
{
incrementCalloutCount: {
method: "POST",
params: {
command: "increment-callout-count"
}
},
incrementCommentCount: {
method: "POST",
params: {
command: "increment-comment-count"
}
},
incrementSlideCount: {
method: "POST",
params: {
command: "increment-slide-count"
}
}
}
);
var cachedScreenCountFailure = null;
return({
setEndedAt: setEndedAt,
incrementCommentCount: incrementCommentCount,
incrementScreenCount: incrementScreenCount,
incrementSlideCount: incrementSlideCountForPresentation,
incrementCalloutCount: incrementCalloutCountForPresentation,
incrementCommentCountForPresentation: incrementCommentCountForPresentation
});
}
})( angular, InVision );
;
;
/*! screen-service.js */ 
;
;
(function( ng, app ) {
"use strict";
app.service( "screenService", SessionService );
/** @ngInject */
function SessionService( config, _ ) {
function alterCommentCount( screenID, count ) {
var cachedScreen = _.findWithProperty( config.screens, "id", screenID );
if ( cachedScreen ) {
cachedScreen.commentCount += count;
}
}
function alterUnreadCommentCount( screenID, count ) {
var cachedScreen = _.findWithProperty( config.screens, "id", screenID );
if ( cachedScreen ) {
cachedScreen.unreadCommentCount += count;
}
}
function getNextScreen( screenID ) {
var _screens = ng.copy( config.screens );
if ( 2 === config.project.sortTypeID ) {
_screens = _.sortOnPropertyUsingNaturalOrder(_screens, "name");
}
var index = _.indexOfWithProperty( _screens, "id", screenID );
var nextIndex = ( index + 1 );
if ( nextIndex >= _screens.length ) {
nextIndex = 0;
}
return(
ng.copy( _screens[ nextIndex ] )
);
}
function getPreviousScreen( screenID ) {
var _screens = ng.copy( config.screens );
if ( 2 === config.project.sortTypeID ) {
_screens = _.sortOnPropertyUsingNaturalOrder(_screens, "name");
}
var index = _.indexOfWithProperty( _screens, "id", screenID );
var previousIndex = ( index - 1 );
if ( previousIndex < 0 ) {
previousIndex = ( _screens.length - 1 );
}
return(
ng.copy( _screens[ previousIndex ] )
);
}
function getScreenByID( screenID ) {
var screen = _.findWithProperty( config.screens, "id", screenID );
return(
ng.copy( screen )
);
}
function setScreenFixedAreaColors( screenID, fixedHeaderBgColor, fixedFooterBgColor ){
var screen = _.findWithProperty( config.screens, "id", screenID );
screen.fixedHeaderBgColor = fixedHeaderBgColor;
screen.fixedFooterBgColor = fixedFooterBgColor;
}
function getScreens() {
var _screens = ng.copy( config.screens );
if ( 2 === config.project.sortTypeID ) {
_screens = _.sortOnPropertyUsingNaturalOrder(_screens, "name");
}
return _screens;
}
function getDividers() {
return(
ng.copy( config.dividers )
);
}
function getAppIcon(){
return(
ng.copy( config.metaScreens.icon)
);
}
function getLoadingScreen(){
return(
ng.copy( config.metaScreens.splash)
);
}
var zoomScrollBehaviors = {
NORMAL: 1,
DISABLE_HORIZONTAL_SCROLLING: 2,
ZOOM_OUT_TO_BROWSER_WIDTH: 3
}
return({
alterCommentCount: alterCommentCount,
alterUnreadCommentCount: alterUnreadCommentCount,
getNextScreen: getNextScreen,
getPreviousScreen: getPreviousScreen,
getScreenByID: getScreenByID,
getScreens: getScreens,
getDividers: getDividers,
getAppIcon: getAppIcon,
getLoadingScreen: getLoadingScreen,
setScreenFixedAreaColors: setScreenFixedAreaColors,
zoomScrollBehaviors: zoomScrollBehaviors
});
}
})( angular, InVision );
;
;
/*! session-service.js */ 
;
;
(function( ng, app ) {
"use strict";
app.service( "sessionService", SessionService );
/** @ngInject */
function SessionService( $q, $resource, serviceHelper, config, modelEvents, userService, _ ) {
function get( key, defaultValue ) {
var localKey = getDataKey( key );
if ( data.hasOwnProperty( localKey ) ) {
return( data[ localKey ] );
} else if ( ! ng.isUndefined( defaultValue ) ) {
data[ localKey ] = defaultValue;
return( defaultValue );
}
}
function getDataKey( key ) {
return( "session__" + key );
}
function set( key, value ) {
var localKey = getDataKey( key );
data[ localKey ] = value;
}
var user = ng.copy( config.user );
user.hasSystemAvatar = userService.isSystemAvatar( user.avatarID );
user.initials = userService.getInitials( user.name );
var data = {};
modelEvents.on(
"shareIdentityChanged.sessionService",
function( event, identifiedUser ) {
user = ng.copy( identifiedUser );
user.hasSystemAvatar = userService.isSystemAvatar( user.avatarID );
user.initials = userService.getInitials( user.name );
}
);
return({
get: get,
set: set,
user: user
});
}
})( angular, InVision );
;
;
/*! share-service.js */ 
;
;
(function( ng, app ) {
"use strict";
app.service( "shareService", ShareService );
/** @ngInject */
function ShareService( $resource, serviceHelper, config, modelEvents, _ ) {
function getShare() {
return( 
ng.copy( config.share )
);
}
function identify( name, email ) {
var promise = serviceHelper.executeRequest({
resource: resource,
name: "identify",
parameters: {
id: config.share.id,
name: name,
email: email
},
successCallback: function( response ) {
modelEvents.trigger( "shareIdentityChanged", response );
}
});
return( promise );
}
function sendSMS( shareID, phoneNumber ) {
var promise = serviceHelper.executeRequest({
resource: resource,
name: "sendSMS",
parameters: {
id: shareID,
phoneNumber: phoneNumber
}
});
return( promise );
}
function getShareConfig( shareID, noCdnUrls ){
if ( cachedShareConfigFailure !== null ) {
return( cachedShareConfigFailure );
}
if ( !noCdnUrls ) {
noCdnUrls = false;
}
var promise = serviceHelper.executeRequest({
resource: resource,
name: "getShareConfig",
parameters: {
id: shareID,
noCdnUrls: noCdnUrls
}
});
promise.then(
null,
function() {
cachedShareConfigFailure = promise;
}
);
return( promise );
}
var resource = $resource(
"/api/share/:id/:command",
{
id: "@id",
command: "@command"
},
{
identify: {
method: "POST",
params: {
command: "change-identity"
}
},
sendSMS: {
method: "POST",
params: {
command: "send-sms"
}
},
getShareConfig: {
method: "GET",
params: {
command: "get-share-config"
}
}
}
);
var cachedShareConfigFailure = null;
return({
getShare: getShare,
identify: identify,
sendSMS: sendSMS,
getShareConfig: getShareConfig
});
}
})( angular, InVision );
;
;
/*! user-preference-service.js */ 
;
;
(function( ng, app ) {
"use strict";
app.service( "userPreferenceService", Service );
/** @ngInject */
function Service( _, serviceHelper, $resource, modelEvents, $q, config ) {
function cacheType( name, response ) {
cachedTypes[ name.toLowerCase() ] = response;
}
function cacheValue( id, response ) {
cachedValues[ id ] = response;
}
function getCachedType( name ) {
return( cachedTypes[ name.toLowerCase() ] );
}
function getCachedTypeResolution( name ) {
var deferred = $q.defer();
var promise = deferred.promise;
deferred.resolve( getCachedType( name.toLowerCase() ) );
return( promise );
}
function getCachedValue( id ) {
return( cachedValues[ id ] );
}
function getCachedValueResolution( id ) {
var deferred = $q.defer();
var promise = deferred.promise;
deferred.resolve( getCachedValue( id ) );
return( promise );
}
/**
* I get all the details about a specific user preference by it's name
* @param  {string} preferenceName  - name of the preference to lookup
* @param  {boolean} doCreate       - create the preference if it doesn't exist?
* @param  {string} dataType 		- type of data the new preferenceType is
* @param  {string} defaultValue 	- default value of the preference
* @return {object}
*/
function getPreferenceTypeByName( preferenceName, doCreate, dataType, defaultValue ) {
if ( isTypeCached( preferenceName ) ) {
return( getCachedTypeResolution( preferenceName ) );
}
var promise = serviceHelper.executeRequest({
resource: resource,
name: "getPreferenceTypeByName",
parameters: {
preferenceName: preferenceName,
doCreate: doCreate,
dataType: dataType,
defaultValue: defaultValue
},
successCallback: function( response ) {
cacheType( preferenceName, response );
}
});
return( promise );
}
/**
* I get a user's preference based by preference id
* @param  {int} preferenceId   - ID of the preference to lookup
* @return {object}
*/
function getUserPreferenceById( preferenceId ) {
if ( isValueCached( preferenceId ) ) {
return( getCachedValueResolution( preferenceId ) );
}
var promise = serviceHelper.executeRequest({
resource: resource,
name: "getUserPreferenceById",
parameters: {
userPreferenceTypeId: preferenceId
},
successCallback: function( response ) {
if ( ! response.data ) {
response.data = {
name: "",
value: null
};
}
cacheValue( preferenceId, response );
}
});
return( promise );	
}
function isTypeCached( name ) {
return( name.toLowerCase() in cachedTypes );
}
function isValueCached( id ) {
return( cachedValues.hasOwnProperty( id ) );
}
/**
* I set a user's preference
* @param {int} preferenceId   - the id of the preferenceType to set
* @param {any} value          - the value of that preferenceType
*/
function setUserPreferenceById( preferenceId, value ) {
var promise = serviceHelper.executeRequest({
resource: resource,
name: "setUserPreferenceById",
parameters: {
userPreferenceTypeId: preferenceId,
userPreferenceTypeValue : value
},
successCallback: function( response ) {
updateCachedValue( preferenceId, value );
}
});
return( promise );	
}
function updateCachedValue( id, value ) {
if ( isValueCached( id ) ) {
var cachedValue = getCachedValue( id );
cachedValue.exists = "true";
cachedValue.data.value = value;
}
}
function updateTellAFriendTooltipLastViewedAt( dateTimeInMillisecs ) {
var promise = serviceHelper.executeRequest({
resource: resource,
name: "updateTellAFriendTooltipLastViewedAt",
parameters: {
tellAFriendTooltipLastViewedAt: dateTimeInMillisecs
},
successCallback: function( response ) {
modelEvents.trigger( "accountUpdated", response );
}
});
return( promise );
}
function preloadCaches ( userPreferences ){
_.each( userPreferences, function( pref ){
cacheType( pref.preferencetype, {
exists: "true",
data: {
id: pref.preferencetypeid,
preferencedatatype: pref.datatype,
preferencename: pref.preferencetype,
createdAt: pref.createdAt
}
});
cacheValue( pref.preferencetypeid, {
exists: "true",
data: { 
name: pref.preferencetype,
value: pref.preferencevalue,
createdAt: pref.createdAt
} 
});
});
}
var resource = $resource(
"/api/userPreference/:command",
{
command: "@command"
},
{
updateTellAFriendTooltipLastViewedAt: {
method: "POST",
params: {
command: "updateTellAFriendTooltipViewed"
}
},
getPreferenceTypeByName: {
method: "POST",
params: {
command: "getPreferenceTypeByName"
}
},
getUserPreferenceById: {
method: "POST",
params: {
command: "getUserPreferenceById"
}
},
setUserPreferenceById: {
method: "POST",
params: {
command: "setUserPreferenceById"
}
}
}
);
var cachedTypes = {};
var cachedValues = {};
preloadCaches( config.userPreferences );
return({
updateTellAFriendTooltipLastViewedAt: _.memoize( updateTellAFriendTooltipLastViewedAt ),
getPreferenceTypeByName : getPreferenceTypeByName,
getUserPreferenceById : getUserPreferenceById,
setUserPreferenceById : setUserPreferenceById
});
}
})( angular, InVision );
;
;
/*! user-service.js */ 
;
;
(function( ng, app ) {
"use strict";
app.service( "userService", UserService );
/** @ngInject */
function UserService( config, modelEvents, _ ) {
function getAffiliates() {
return(
ng.copy( config.affiliates )
);
}
function getInitials( name ) {
if ( ! name ) {
return( "" );
}
var nameParts = name.replace( /^\s+|\s+$/i, "" ).split( /\s+/i );
var namePartsCount = nameParts.length;
if ( namePartsCount > 1 ) {
return(
nameParts[ 0 ].slice( 0, 1 ) +
nameParts[ namePartsCount - 1 ].slice( 0, 1 )
);
}
return( nameParts[ 0 ].slice( 0, 1 ) );
}
function getFirstName( name ) {
if ( ! name ) {
return( "" );
}
var nameParts = name.replace( /^\s+|\s+$/i, "" ).split( /\s+/i );
return( nameParts[ 0 ] );
}
function getOnlineStatus( lastRequestAt ) {
var now = ( new Date() ).getTime();
var onlineCutoff = ( 10 * 60 * 1000 ); 	// 10 minutes.
var awayCutoff = ( 30 * 60 * 1000 );	// 30 minutes.
if ( lastRequestAt > ( now - onlineCutoff ) ) {
return( "Online" );
} else if ( lastRequestAt > ( now - awayCutoff ) ) {
return( "Away" );
}
return( "Offline" );
}
function getMembers() {
return(
ng.copy( config.members )
);
}
function isAffiliate( userID ) {
for ( var i = 0, length = config.affiliates.length ; i < length ; i++ ) {
if ( config.affiliates[ i ].id === userID ) {
return( true );
}
}
return( false );
}
function isSystemAvatar( avatarID ) {
return( avatarID.indexOf( "00000000" ) === 0 );
}
modelEvents.on(
"shareIdentityChanged.userService",
function( event, user ) {
config.user = ng.copy( user );
var cachedMember = _.findWithProperty( config.members, "id", user.id );
var cachedAffiliate = _.findWithProperty( config.affiliates, "id", user.id );
if ( cachedMember || cachedAffiliate ) {
return;
}
config.affiliates.push( user );
config.affiliates.sort(
function( a, b ) {
return( a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1 );
}
);
}
);
return({
getAffiliates: getAffiliates,
getInitials: getInitials,
getFirstName: getFirstName,
getOnlineStatus: getOnlineStatus,
getMembers: getMembers,
isAffiliate: isAffiliate,
isSystemAvatar: isSystemAvatar
});
}
})( angular, InVision );
;
;
/*! lazier-src.js */ 
;
;
(function( ng, app ) {
"use strict";
app.directive( "invLazierSrc", Directive );
/** @ngInject */
function Directive( $window, $document ) {
var lazyLoader = (function() {
var images = [];
var renderTimer = null;
var renderDelay = 200;
var win = $( $window );
var windowHeight = null;
var isWatchingWindow = false;
function addImage( image ) {
images.push( image );
if ( ! renderTimer ) {
startRenderTimer();
}
if ( ! isWatchingWindow ) {
startWatchingWindow();
}
}
function checkLayout() {
if ( ! renderTimer ) {
startRenderTimer();
}
if ( ! isWatchingWindow ) {
startWatchingWindow();
}
}
function removeImage( image ) {
for ( var i = 0 ; i < images.length ; i++ ) {
if ( images[ i ] === image ) {
images.splice( i, 1 );
break;
}
}
if ( ! images.length ) {
clearRenderTimer();
stopWatchingWindow();
}
}
function checkImages() {
var visible = [];
var hidden = [];
if ( windowHeight === null ) {
windowHeight = win.height();
}
var scrollTop = win.scrollTop();
var topFoldOffset = scrollTop;
var bottomFoldOffset = ( topFoldOffset + windowHeight );
for ( var i = 0 ; i < images.length ; i++ ) {
var image = images[ i ];
if ( image.isVisible( topFoldOffset, bottomFoldOffset ) ) {
visible.push( image );
} else {
hidden.push( image );
}
}
for ( var i = 0 ; i < visible.length ; i++ ) {
visible[ i ].render();
}
images = hidden;
clearRenderTimer();
if ( ! images.length ) {
stopWatchingWindow();
}
}
function clearRenderTimer() {
clearTimeout( renderTimer );
renderTimer = null;
}
function keyPressed() {
if ( ! renderTimer ) {
startRenderTimer();
}
}
function startRenderTimer() {
renderTimer = setTimeout( checkImages, renderDelay );
}
function startWatchingWindow() {
isWatchingWindow = true;
win.on( "resize.invLazierSrc", windowResized );
win.on( "scroll.invLazierSrc", windowScrolled );
$document.on( "keyup.invLazierSrc", keyPressed );
}
function stopWatchingWindow() {
isWatchingWindow = false;
win.off( "resize.invLazierSrc" );
win.off( "scroll.invLazierSrc" );
$document.off( "keyup.invLazierSrc" );
}
function windowResized() {
windowHeight = win.height();
if ( ! renderTimer ) {
startRenderTimer();
}
}
function windowScrolled() {
if ( ! renderTimer ) {
startRenderTimer();
}
}
return({
addImage: addImage,
checkLayout: checkLayout,
removeImage: removeImage
});
})();
function LazyImage( element ) {
this.element = element;
this.offsetElement = this.element;
this.source = null;
this.rendered = false;
this.height = null;
}
LazyImage.prototype = {
isVisible: function( topFoldOffset, bottomFoldOffset ) {
if ( ! this.offsetElement.is( ":visible" ) ) {
return( false );
}
if ( ! this.height ) {
while ( ! ( this.height = this.offsetElement.height() ) ) {
this.offsetElement = this.offsetElement.parent();
}
}
var top = this.offsetElement.offset().top;
var bottom = ( top + this.height );
return(
(
( top <= bottomFoldOffset ) &&
( top >= topFoldOffset )
)
||
(
( bottom <= bottomFoldOffset ) &&
( bottom >= topFoldOffset )
)
||
(
( top <= topFoldOffset ) &&
( bottom >= bottomFoldOffset )
)
);
},
render: function() {
this.rendered = true;
this.renderSource();
},
renderSource: function() {
this.element[ 0 ].src = this.source;
},
setSource: function( newSource ) {
this.source = newSource;
if ( this.rendered ) {
this.renderSource();
}
}
};
function handleIndexChange( newValue, oldValue ) {
if ( newValue === oldValue ) {
return;
}
lazyLoader.checkLayout();
}
function link( $scope, element, attributes ) {
var lazyImage = new LazyImage( element );
lazyLoader.addImage( lazyImage );
attributes.$observe(
"invLazierSrc",
function( newSource ) {
lazyImage.setSource( newSource );
}
);
if ( "$index" in $scope ) {
$scope.$watch( "$index", handleIndexChange );
}
$scope.$on(
"$destroy",
function() {
lazyLoader.removeImage( lazyImage );
}
);
}
return({
link: link,
restrict: "A"
});
}
})( angular, InVision );
;
;
/*! lazy-src.js */ 
;
;
(function( ng, app ) {
"use strict";
app.directive( "invLazySrc", Directive );
/** @ngInject */
function Directive() {
var pendingTimer = null;
var pending = [];
function dequeueHandler() {
for ( var i = 0, length = pending.length ; i < length ; i++ ) {
pending[ i ]();
}
pendingTimer = null;
pending = [];
}
function queueHandler( handler ) {
pending.push( handler );
if ( ! pendingTimer ) {
pendingTimer = setTimeout( dequeueHandler, 100 );
}
}
function isElementVisible( element ) {
if ( ! element.is( ":visible" ) ) {
return( false );
}
var bottomOfScreen = ( win.height() + win.scrollTop() );
return( element.offset().top < bottomOfScreen );
}
var win = $( window );
var doc = $( document );
var link = function( $scope, element, attributes ) {
function examineImage() {
if ( isElementVisible( element ) ) {
showImage();
stopMonitoring();
}
}
function handleWatchCallback( newValue, oldValue ) {
if ( newValue === oldValue ) {
return;
}
examineImage();
}
function setupMonitoring() {
if ( isElementVisible( element ) ) {
return( showImage() );
}
startMonitoring();
}
function showImage() {
element.prop( "src", src );
isVisible = true;
}
function startMonitoring() {
isMonitoring = true;
win.on( "resize", examineImage );
win.on( "scroll", examineImage );
watchDocumentHeight();
watchLazyExpression();					
}
function stopMonitoring() {
isMonitoring = false;
win.off( "resize", examineImage );
win.off( "scroll", examineImage );
unbindLazyWatch();
unbindDocumentWatch();
}
function watchDocumentHeight() {
unbindDocumentWatch = $scope.$watch(
function() {
return( doc.height() )
},
handleWatchCallback
);
}
function watchLazyExpression() {
if ( ! attributes.lazyWatch ) {
return;
}
unbindLazyWatch = $scope.$watch( attributes.lazyWatch, handleWatchCallback );
}
var src = null;
var isMonitoring = false;
var isVisible = false;
var unbindLazyWatch = ng.noop;
var unbindDocumentWatch = ng.noop;
attributes.$observe( 
"invLazySrc",
function( interpolatedSource ) {
src = interpolatedSource;
if ( isVisible ) {
return( showImage() );
}
if ( isMonitoring ) {
return;
}
queueHandler( setupMonitoring );
}
);
$scope.$on(
"$destroy",
function() {
win.off( "resize", examineImage );
win.off( "scroll", examineImage );
}
);
};
return({
link: link,
restrict: "A"
});
}
})( angular, InVision );
;
;
/*! loading.js */ 
;
;
/**
* Loading directive to display loading animation.
* Usage: <span loding="isLoading"></span>
*/
angular.module('InVision')
.directive('loading', function() {
return {
restrict: 'AE',
replace: true,
template: '<div class="loader" ng-show="isLoading">' +
'<div class="spinner">' +
'<div class="bounce1"></div>' +
'<div class="bounce2"></div>' +
'<div class="bounce3">' +
'</div></div></div>',
scope: {
isLoading: '=loading'
}
}
});
;
;
/*! mobile-transition-layer.js */ 
;
;
(function( ng, app ) {
"use strict";
app.directive(
"invMobileTransitionLayer",
/** @ngInject */
function( $timeout, _ ) {
var linkFunction = function( $scope, element ) {
var $element = angular.element(element),
animationDuration = 480,
transitions = {
2: "push-right",
3: "push-left",
4: "slide-up",
5: "slide-down",
6: "flip-right",
7: "flip-left",
8: "dissolve",
9: "flow",
10: "pop",
11: "slide-right",
12: "slide-left",
13: "slide-fade"
},
transitionsWithFadeFixed = [2,3,11,12],
hotspot = $scope.transitionData.hotspot,
transitionTypeID = $scope.transitionData.transitionTypeID,
currentScreenPosition = $scope.transitionData.currentScreenPosition,
currentScreen = $scope.transitionData.currentScreen,
targetScreen = $scope.transitionData.targetScreen;
switch(transitionTypeID){
case 1:
animationDuration = 100;
break;
case 9:
animationDuration = 1100;
break;
}
if ( _.contains([6, 7], transitionTypeID) ) {
animationDuration = 640;
}
$scope.getBackgroundColor = function(screen) {
var color = screen.backgroundColor;
if (!color || color === '0') {
color = screen.extended.fixedFooterBackground;
}
return color.length === 6 ? "#" + color : color;
};
function doTransition(transitionTypeID) {
if (
currentScreen.fixedHeaderHeight &&
currentScreen.fixedHeaderHeight === targetScreen.fixedHeaderHeight &&
_.indexOf(transitionsWithFadeFixed, transitionTypeID) !== -1 ) {
ripOutFixedElements(".fixed-header");
}
if (
currentScreen.fixedFooterHeight &&
currentScreen.fixedFooterHeight === targetScreen.fixedFooterHeight &&
_.indexOf(transitionsWithFadeFixed, transitionTypeID) !== -1 ) {
ripOutFixedElements(".fixed-footer");
}
if ( currentScreenPosition > 0 ) {
var elementsToScroll = ".current-screen > img";
if ( hotspot.isScrollTo || hotspot.hasRubberBandFix ) {
elementsToScroll += ", .target-screen > img";
}
$element.find(elementsToScroll).css({
marginTop: ( currentScreenPosition * -1 ) + "px"
});
}
if ( $scope.isAndroid === true ) {
$timeout(function() {
$element.addClass(transitions[transitionTypeID]);
}, 100);
} else {
$element.addClass(transitions[transitionTypeID]);
}
}
function ripOutFixedElements(elementClass) {
var $fixedElements = $element.find(elementClass);
$($fixedElements[0]).addClass("current");
$($fixedElements[1]).addClass("target");
$fixedElements.addClass("fade-into-each-other");
$element.append($fixedElements);
}
function whichTransitionEvent(){
var t;
var el = document.createElement("fakeelement");
var transitions = {
"animation": "animationend",
"OAnimation": "oAnimationEnd",
"MozAnimation": "animationend",
"WebkitAnimation": "webkitAnimationEnd",
"transition": "transitionend",
"OTransition": "oTransitionEnd",
"MozTransition": "transitionend",
"WebkitTransition": "webkitTransitionEnd"
},
events = [];
for(t in transitions){
if( el.style[t] !== undefined ){
events.push(transitions[t]);
}
}
return events.join(" ");
}
function animationOverCallback() {
$scope.setIsTransitioning( false );
$scope.$apply();
}
doTransition(transitionTypeID, animationDuration);
var transitionEvent = whichTransitionEvent();
if ( transitionEvent && transitionTypeID !== 1 ) {
var elementToWatch = "div.target-screen";
if ( transitionTypeID === 5 ) {
elementToWatch = "div.current-screen";
}
if( transitionTypeID === 11 || transitionTypeID === 12 ){
elementToWatch = "div.inner2";
}
$element
.find(elementToWatch)
.on(transitionEvent,
animationOverCallback);
} else {
$timeout(animationOverCallback, animationDuration);
}
};
return({
link: linkFunction,
restrict: "A",
templateUrl: "/assets/apps/common/views/directives/mobile-transition-layer.htm"
});
}
);
})( angular, InVision );
;
;
/*! modal.js */ 
;
;
(function( ng, app ) {
"use strict";
app.directive( "invModal", Directive );
/** @ngInject */
function Directive( $timeout, $document, modalWindowRequest ) {
var linkFunction = function( $scope, element, attributes ) {
var $element = $(element),
$win = $(window),
isClosedByPlugin = true,
modalType = ( attributes.invModalType || "top" ),
settings = !modalWindowRequest.isSuppressClose() ? {} : {
keyboard: false,
backdrop: "static"
};
if ( modalWindowRequest.isSuppressFade() && $element.is( ".animate" ) ) {
$element.removeClass( "animate" );
$element.on(
"shown.invModal",
function() {
$timeout(function() {
$element.addClass( "animate" );
}, 150);
}
);
}
$element
.addClass("modal")
.modal(settings);
$(".modal-backdrop").addClass("animate-in " + $element.attr("id") );
setModalPosition();
function forcePositive(number) {
return number < 0 ? 0 : number;
}
function setModalPosition() {
$timeout(function() {
if (!$win || !$element) {
return;
}
var newCSS = {
top: $win.scrollTop(),
left: $win.scrollLeft(),
marginLeft: forcePositive( Math.round( ( $win.outerWidth() - $element.outerWidth() ) / 2 ) ),
marginTop: forcePositive( Math.round( ( $win.outerHeight() - $element.outerHeight() ) / 2 ) )
};
$element.css(newCSS).attr( "tabindex", -1 ).addClass("animate-in");
});
}
$element.on( 
"hidden.invModal",
function() {
$scope.$emit( "modalWindowHidden" );
$timeout( ng.noop ); 
}
);
$element.on(
"shown.invModal",
function() {
if ( modalType !== "top" ) {
return;
}
setModalPosition();
$scope.$emit( "modalWindowShown" );
}
);
$win.on("resize.invModal", function modalResize() {
setModalPosition();
});
$document.on("keyup.invModal", function(e) {
if (e.keyCode === 27) {
$scope.closeModalWindow();
}
});
$scope.$on(
"resizeModal",
function() {
setModalPosition();
}
);
$scope.$on(
"closeModalWindowWithoutFade",
function() {
$scope.closeModalWindow( true );
}
);
$scope.$on(
"$destroy",
function() {
$win.off("resize.invModal");
$element.off( "hide.invModal" );
$element.off( "hidden.invModal" );
$element.off( "shown.invModal" );
$element.removeClass("animate-in");
$element.removeClass("animate-out");
$document.off("keyup.invModal");
$scope = element = attributes = $element = $win = forcePositive = setModalPosition = null;
}
);
$scope.closeModalWindow = function( suppressFade ) {
isClosedByPlugin = false;
if ( suppressFade ) {
$(".modal-backdrop").removeClass("animate-in");
$element.modal("hide");
} else {
$element.addClass("animate-out");
$(".modal-backdrop").removeClass("animate-in");
$timeout(function closeModal() {
if ($element) {
$element.modal("hide");
}
}, 200);
}
};
};
return({
link: linkFunction,
restrict: "A"
});
}
})( angular, InVision );
;
;
/*! tooltip.js */ 
;
;
(function( ng, app ) {
"use strict";
app.directive( "invTooltip", Directive );
/** @ngInject */
function Directive( $ ) {
function escapeHtml( str ){
var safeContent = String( str )
.replace( /&/g, "&amp;" )
.replace( /"/g, "&quot;" )
.replace( /'/g, "&apos;" )
.replace( /</g, "&lt;" )
.replace( />/g, "&gt;" )
;
safeContent = safeContent
.replace( /&lt;(br)\s*\/?&gt;/ig, "<$1 />" )
.replace( /&lt;(\/)?(strong|em)&gt;/ig, "<$1$2>" )
;
return( safeContent );
}
function handleMouseEnter( event ) {
$.data( this, "isShowing", true );
}
function handleMouseLeave( event ) {
$.data( this, "isShowing", false );
}
function link( $scope, element, attributes ) {
function tryToKillTooltip () {
if ( tooltipInstance ) {
tooltipInstance.show = ng.noop;
if ( tooltipInstance.$tip ) {
tooltipInstance.$tip.remove();
}
}
element.tooltip( "destroy" );
}
function getOptions() {
return {
placement: function() {
return( element.attr("placement") || "top" );
},
delay: 100,
title: function() {
return( escapeHtml( attributes.invTooltip ) );
},
template: '<div class="tooltip ' +
(attributes.tooltipWidth === 'content' ? 'content-width' : styleClass) +
'"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
};
}
var tooltipInstance = null;
var styleClass = ( attributes.tooltipstyleclass || "" );
element
.on( "mouseenter", handleMouseEnter )
.on( "mouseleave", handleMouseLeave )
;
attributes.$observe(
"invTooltip",
function handleTooltipChange( newValue ) {
if ( element.data('isShowing') ) {
if ( newValue.length > 0 ) {
tooltipInstance.show();
} else {
tooltipInstance.hide();
}
}
}
);
attributes.$observe(
"tooltipDisabled",
function handleTooltipDisabledChange( newValue ) {
newValue = ( newValue || "false" );
var isEnabled = ( newValue === "false" );
if ( isEnabled ) {
var tooltipOptions = getOptions();
element.tooltip( tooltipOptions );
tooltipInstance = element.data( "tooltip" );
} else {
tryToKillTooltip();
}
}
);
$scope.$on(
"$destroy",
function handleDestroyEvent() {
tryToKillTooltip();
$scope = element = attributes = tooltipInstance = styleClass = null;
tryToKillTooltip = getOptions = null;
}
);
}
return({
link: link,
restrict: "A"
});
}
})( angular, InVision );
;
;
/*! image-route-service.js */ 
;
;
(function( ng, app ) {
"use strict";
app.service( "imageRouteService", Service );
/** @ngInject */
function Service(  ) {
function getThumbnailURL( screenID, screenVersion, projectMobileDeviceID ){
return ( "/thumbnails/" + screenID + "/" + screenVersion + "/" + projectMobileDeviceID );
}
function getScreenURL( screenID, screenVersion, projectMobileDeviceID ){
return ( "/screens/" + screenID + "/" + screenVersion + "/" + projectMobileDeviceID );
}
function getHomeScreenURL( homeScreenID, homeScreenVersion, projectMobileDeviceID ){
if( homeScreenID ){
return ( "/thumbnails/" + homeScreenID + "/" + homeScreenVersion + "/" + projectMobileDeviceID );
} else {
return ( "/assets/apps/d/img/add-screens-thumbnail.png" );
}
}
return({
getScreenURL: getScreenURL,
getThumbnailURL: getThumbnailURL,
getHomeScreenURL: getHomeScreenURL
});
}
})( angular, InVision );
;
;
/*! presentation-service.js */ 
;
;
(function( ng, app ) {
"use strict";
app.service( "presentationService", PresentationService );
/** @ngInject */
function PresentationService( $resource, config, Deferred, modelEvents, serviceHelper ) {
function getDefaultPresentation(id) {
var defaultData = $.extend({},newPresentationData);
return $.extend(defaultData, {id: id});
}
function getPresentationsByProjectID( projectID ) {
}
function getShareConfig( presentationKey ){
/*if ( cachedShareConfigFailure !== null ) {
return( cachedShareConfigFailure );
}*/
var promise = serviceHelper.executeRequest({
resource: resource,
name: "getShareConfig",
parameters: {
key: presentationKey
}
});
promise.then(
null,
function() {
cachedShareConfigFailure = promise;
}
);
return( promise );
}
function identify( name, email ) {
var promise = serviceHelper.executeRequest({
resource: resource,
name: "identify",
parameters: {
key: config.presentation.id,
name: name,
email: email
},
successCallback: function( response ) {
modelEvents.trigger( "shareIdentityChanged", response );
}
});
return( promise );
}
function sendEmail( presentationID, emailList, message ) {
var promise = serviceHelper.executeRequest({
resource: resource,
name: "sendEmail",
parameters: {
key: presentationID,
emailList: emailList,
message: message
}
});
return( promise );
}
function updateShareConfig( presentationConfig ){
/*if ( cachedShareConfigFailure !== null ) {
return( cachedShareConfigFailure );
}*/
var promise = serviceHelper.executeRequest({
resource: resource,
name: "updateShareConfig",
parameters: presentationConfig
});
promise.then(
null,
function() {
cachedShareConfigFailure = promise;
}
);
return( promise );
}
var newPresentationData = {
id: 0,
name: "No Title",
description: "",
bgcolor: "#ffffff",
bgimage: "",
bgimage_thumbnail: "",
bgscreen: "",
complementColor: "#000000",
slides: [{
title: true,
name: "Title Screen",
description: ""
}],
scaleToScreen: false,
selected: 0
};
var cachedShareConfigFailure;
var resource = $resource(
"/api/presentation/:key/:command",
{
key: "@key",
command: "@command"
},
{
identify: {
method: "POST",
params: {
command: "change-identity"
}
},
/*sendSMS: {
method: "POST",
params: {
command: "send-sms"
}
},*/
sendEmail: {
method: "POST",
params: {
command: "send-email"
}
},
updateShareConfig: {
method: "POST",
params: {
command: "update-share-config"
}
},
getShareConfig: {
method: "GET",
params: {
command: "get-share-config"
}
}
}
);
return({
create: getDefaultPresentation,
identify: identify,
getPresentationsByProjectID: getPresentationsByProjectID,
getShareConfig: getShareConfig,
sendEmail: sendEmail,
updateShareConfig: updateShareConfig
});
}
})( angular, InVision );
;
;
/*! presentation-console-partial.js */ 
;
;
(function( ng, app ) {
"use strict";
app.service( "presentationConsolePartial", Service );
/** @ngInject */
function Service( $resource, serviceHelper, modelEvents, _ ) {
function activate( projectID, presentationID ) {
var promise = serviceHelper.executeRequest({
resource: resource,
name: "archive",
parameters: {
id: projectID,
presentationID: presentationID
},
successCallback: function( response ) {
},
errorCallback: function() {
}
});
return( promise );
}
function archive( projectID, presentationID ) {
var promise = serviceHelper.executeRequest({
resource: resource,
name: "archive",
parameters: {
id: projectID,
presentationID: presentationID
},
successCallback: function( response ) {
},
errorCallback: function() {
}
});
return( promise );
}
function duplicate( projectID, presentationID ) {
var promise = serviceHelper.executeRequest({
resource: resource,
name: "duplicate",
parameters: {
id: projectID,
presentationID: presentationID
},
successCallback: function( response ) {
},
errorCallback: function() {
}
});
return( promise );
}
function get( projectID, presentationID ) {
var promise = serviceHelper.executeRequest({
resource: resource,
name: "get",
parameters: {
id: projectID,
presentationID: presentationID
},
successCallback: function( response ) {
},
errorCallback: function() {
}
});
return( promise );
}
function getByProjectID( projectID ) {
var promise = serviceHelper.executeRequest({
resource: resource,
name: "getByProjectID",
parameters: {
id: projectID,
presentationID: "all"
},
successCallback: function( response ) {
},
errorCallback: function() {
}
});
return( promise );
}
function remove( projectID, presentationID ) {
var promise = serviceHelper.executeRequest({
resource: resource,
name: "remove",
parameters: {
id: projectID,
presentationID: presentationID
},
successCallback: function( response ) {
},
errorCallback: function() {
}
});
return( promise );
}
function update( projectID, presentation ) {
var promise = serviceHelper.executeRequest({
resource: resource,
name: "update",
parameters: {
id: projectID,
presentationID: presentation.id,
presentation: presentation
},
successCallback: function( response ) {
},
errorCallback: function( error ) {
console.log('error occurred in presentation update', error);
}
});
return( promise );
}
function getCacheKey( projectID ) {
return( projectID );
}
var resource = $resource(
"/api/partials/desktop/console/presentation/:id/:presentationID",
{
id: "@id",
presentationID: "@presentationID"
},
{
archive: {
method: "PUT",
isArray: true
},
get: {
method: "GET",
isArray: false
},
getByProjectID: {
method: "GET",
isArray: true
},
update: {
method: "POST",
isArray: false
},
remove: {
method: "DELETE",
isArray: true
},
duplicate: {
method: "COPY",
isArray: true
}
}
);
return({
activate: activate,
archive: archive,
duplicate: duplicate,
get: get,
removePresentation: remove,
update: update,
getByProjectID: getByProjectID
});
}
})( angular, InVision );