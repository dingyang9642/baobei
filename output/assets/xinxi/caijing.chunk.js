webpackJsonp([1],{212:function(t,e,n){"use strict";var r=n(18),i=(n(219),n(230)),o=n(222),a=n(232),s=n(225),c=r.createClass({displayName:"caijingComponent",getInitialState:function(){return{}},componentWillMount:function(){i.use()},componentWillUnmount:function(){i.unuse()},render:function(){return r.createElement("div",{className:"caijing-box"},r.createElement(o,{selectedItem:"caijing"}),r.createElement(a,null),r.createElement(s,null))}});t.exports=c},217:function(t,e){function n(t,e){var n=t[1]||"",i=t[3];if(!i)return n;if(e&&"function"==typeof btoa){var o=r(i);return[n].concat(i.sources.map(function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"})).concat([o]).join("\n")}return[n].join("\n")}function r(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var r=n(e,t);return e[2]?"@media "+e[2]+"{"+r+"}":r}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<t.length;i++){var a=t[i];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},218:function(t,e,n){function r(t,e){for(var n=0;n<t.length;n++){var r=t[n],i=d[r.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](r.parts[o]);for(;o<r.parts.length;o++)i.parts.push(l(r.parts[o],e))}else{for(var a=[],o=0;o<r.parts.length;o++)a.push(l(r.parts[o],e));d[r.id]={id:r.id,refs:1,parts:a}}}}function i(t,e){for(var n=[],r={},i=0;i<t.length;i++){var o=t[i],a=e.base?o[0]+e.base:o[0],s=o[1],c=o[2],u=o[3],l={css:s,media:c,sourceMap:u};r[a]?r[a].parts.push(l):n.push(r[a]={id:a,parts:[l]})}return n}function o(t,e){var n=v(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=b[b.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),b.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function a(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=b.indexOf(t);e>=0&&b.splice(e,1)}function s(t){var e=document.createElement("style");return t.attrs.type="text/css",u(e,t.attrs),o(t,e),e}function c(t){var e=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",u(e,t.attrs),o(t,e),e}function u(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function l(t,e){var n,r,i,o;if(e.transform&&t.css){if(!(o=e.transform(t.css)))return function(){};t.css=o}if(e.singleton){var u=y++;n=g||(g=s(e)),r=f.bind(null,n,u,!1),i=f.bind(null,n,u,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=c(e),r=p.bind(null,n,e),i=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(e),r=h.bind(null,n),i=function(){a(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else i()}}function f(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=w(e,i);else{var o=document.createTextNode(i),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o)}}function h(t,e){var n=e.css,r=e.media;if(r&&t.setAttribute("media",r),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function p(t,e,n){var r=n.css,i=n.sourceMap,o=void 0===e.convertToAbsoluteUrls&&i;(e.convertToAbsoluteUrls||o)&&(r=x(r)),i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var a=new Blob([r],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}var d={},m=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),v=function(t){var e={};return function(n){return void 0===e[n]&&(e[n]=t.call(this,n)),e[n]}}(function(t){return document.querySelector(t)}),g=null,y=0,b=[],x=n(221);t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||(e.singleton=m()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=i(t,e);return r(n,e),function(t){for(var o=[],a=0;a<n.length;a++){var s=n[a],c=d[s.id];c.refs--,o.push(c)}if(t){r(i(t,e),e)}for(var a=0;a<o.length;a++){var c=o[a];if(0===c.refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete d[c.id]}}}};var w=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},219:function(t,e,n){var r=n(220);"string"==typeof r&&(r=[[t.i,r,""]]);var i={};i.transform=void 0;n(218)(r,i);r.locals&&(t.exports=r.locals)},220:function(t,e,n){e=t.exports=n(217)(void 0),e.push([t.i,'* {\n\tmargin: 0;\n\tpadding: 0;\n\tbox-sizing: border-box;\n\t-webkit-user-select: none;  /* Chrome all / Safari all */\n    -moz-user-select: none;     /* Firefox all */\n    -ms-user-select: none;      /* IE 10+ */\n}\nbody {\n\tbackground-color: #fff;\n\tfont-family:"\\5B8B\\4F53", "\\5FAE\\8F6F\\96C5\\9ED1", "arial";\n}\n\n/*浮动*/\n.left { \n\tfloat: left;\n}\n.right { \n\tfloat: right;\n}\n\n/*清除浮动*/\n.clearfix:after {\n\tcontent: "";\n\tdisplay: block;\n\theight: 0;\n\tvisibility: hidden;\n\tclear: both;\n}\n.clearfix {\n\tzoom:1;\n}    ',""])},221:function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(i))return t;var o;return o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")"})}},222:function(t,e,n){"use strict";var r=n(18),i=n(223),o=n(95),a=n(96),s=o.projectName,c=r.createClass({displayName:"headerComponent",getInitialState:function(){return{selectedItem:"bianmin"}},getDefaultProps:function(){return{selectedItem:"bianmin"}},componentWillMount:function(){i.use()},componentWillUnmount:function(){i.unuse()},componentDidMount:function(){this.setDefaultSelectedItem()},getMenuList:function(){return[{enName:"bianmin",cnName:"便民"},{enName:"caijing",cnName:"财经"},{enName:"shipin",cnName:"视频"},{enName:"lvtu",cnName:"旅途"}]},handleMenuItemClick:function(t){if(t!==this.state.selectedItem){var e="bianmin"===t?"/"+s:"/"+s+"/"+t;a.replace(e)}},setDefaultSelectedItem:function(){var t=this.props.selectedItem;this.setState({selectedItem:t})},render:function(){var t=this,e=this.getMenuList(),n=this.state.selectedItem;return r.createElement("section",{className:"header-box"},r.createElement("ul",{className:"header-items"},e.map(function(e,i){var o=e.enName,a=e.cnName,s=n===o?"header-item-selected":"";return r.createElement("li",{onClick:t.handleMenuItemClick.bind(t,o),key:i,className:"header-item item-"+o+" "+s},a)})))}});t.exports=c},223:function(t,e,n){var r,i=0,o=n(224);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(e.locals=o.locals),e.use=e.ref=function(){return i++||(r=n(218)(o,{})),e},e.unuse=e.unref=function(){i>0&&!--i&&(r(),r=null)}},224:function(t,e,n){e=t.exports=n(217)(void 0),e.push([t.i,".header-items {\n    height: .88rem;\n    line-height: .88rem;\n    background-color: #f4f5f6;\n}\n.header-item {\n\tfloat: left;\n\twidth: 25%;\n    list-style-type: none;\n    text-align: center;\n    color: #333;\n    font-size: .32rem;\n}\n.header-item-selected {\n    color: #f85959;\n}",""])},225:function(t,e,n){"use strict";var r=n(18),i=n(226),o=r.createClass({displayName:"footerComponent",getInitialState:function(){return{}},componentWillMount:function(){i.use()},componentWillUnmount:function(){i.unuse()},render:function(){return r.createElement("div",{className:"footer-box"})}});t.exports=o},226:function(t,e,n){var r,i=0,o=n(227);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(e.locals=o.locals),e.use=e.ref=function(){return i++||(r=n(218)(o,{})),e},e.unuse=e.unref=function(){i>0&&!--i&&(r(),r=null)}},227:function(t,e,n){e=t.exports=n(217)(void 0),e.push([t.i,".footer-box {\n\n}",""])},228:function(t,e){var n=t.exports=function(){function t(t){return null==t?String(t):W[J.call(t)]||"object"}function e(e){return"function"==t(e)}function n(t){return null!=t&&t==t.window}function r(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function i(e){return"object"==t(e)}function o(t){return i(t)&&!n(t)&&Object.getPrototypeOf(t)==Object.prototype}function a(t){return"number"==typeof t.length}function s(t){return A.call(t,function(t){return null!=t})}function c(t){return t.length>0?N.fn.concat.apply([],t):t}function u(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function l(t){return t in I?I[t]:I[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function f(t,e){return"number"!=typeof e||M[u(t)]?e:e+"px"}function h(t){var e,n;return L[t]||(e=k.createElement(t),k.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),L[t]=n),L[t]}function p(t){return"children"in t?O.call(t.children):N.map(t.childNodes,function(t){if(1==t.nodeType)return t})}function d(t,e,n){for(E in e)n&&(o(e[E])||Y(e[E]))?(o(e[E])&&!o(t[E])&&(t[E]={}),Y(e[E])&&!Y(t[E])&&(t[E]=[]),d(t[E],e[E],n)):e[E]!==w&&(t[E]=e[E])}function m(t,e){return null==e?N(t):N(t).filter(e)}function v(t,n,r,i){return e(n)?n.call(t,r,i):n}function g(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function y(t,e){var n=t.className||"",r=n&&n.baseVal!==w;if(e===w)return r?n.baseVal:n;r?n.baseVal=e:t.className=e}function b(t){try{return t?"true"==t||"false"!=t&&("null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?N.parseJSON(t):t):t}catch(e){return t}}function x(t,e){e(t);for(var n=0,r=t.childNodes.length;n<r;n++)x(t.childNodes[n],e)}var w,E,N,S,j,C,T=[],O=T.slice,A=T.filter,k=window.document,L={},I={},M={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},R=/^\s*<(\w+|!)[^>]*>/,P=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,U=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,D=/^(?:body|html)$/i,_=/([A-Z])/g,z=["val","css","html","text","data","width","height","offset"],F=["after","prepend","before","append"],$=k.createElement("table"),q=k.createElement("tr"),B={tr:k.createElement("tbody"),tbody:$,thead:$,tfoot:$,td:q,th:q,"*":k.createElement("div")},Z=/complete|loaded|interactive/,H=/^[\w-]*$/,W={},J=W.toString,V={},X=k.createElement("div"),G={tabindex:"tabIndex",readonly:"readOnly",for:"htmlFor",class:"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},Y=Array.isArray||function(t){return t instanceof Array};return V.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var r,i=t.parentNode,o=!i;return o&&(i=X).appendChild(t),r=~V.qsa(i,e).indexOf(t),o&&X.removeChild(t),r},j=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},C=function(t){return A.call(t,function(e,n){return t.indexOf(e)==n})},V.fragment=function(t,e,n){var r,i,a;return P.test(t)&&(r=N(k.createElement(RegExp.$1))),r||(t.replace&&(t=t.replace(U,"<$1></$2>")),e===w&&(e=R.test(t)&&RegExp.$1),e in B||(e="*"),a=B[e],a.innerHTML=""+t,r=N.each(O.call(a.childNodes),function(){a.removeChild(this)})),o(n)&&(i=N(r),N.each(n,function(t,e){z.indexOf(t)>-1?i[t](e):i.attr(t,e)})),r},V.Z=function(t,e){return t=t||[],t.__proto__=N.fn,t.selector=e||"",t},V.isZ=function(t){return t instanceof V.Z},V.init=function(t,n){var r;if(!t)return V.Z();if("string"==typeof t)if(t=t.trim(),"<"==t[0]&&R.test(t))r=V.fragment(t,RegExp.$1,n),t=null;else{if(n!==w)return N(n).find(t);r=V.qsa(k,t)}else{if(e(t))return N(k).ready(t);if(V.isZ(t))return t;if(Y(t))r=s(t);else if(i(t))r=[t],t=null;else if(R.test(t))r=V.fragment(t.trim(),RegExp.$1,n),t=null;else{if(n!==w)return N(n).find(t);r=V.qsa(k,t)}}return V.Z(r,t)},N=function(t,e){return V.init(t,e)},N.extend=function(t){var e,n=O.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){d(t,n,e)}),t},V.qsa=function(t,e){var n,i="#"==e[0],o=!i&&"."==e[0],a=i||o?e.slice(1):e,s=H.test(a);return r(t)&&s&&i?(n=t.getElementById(a))?[n]:[]:1!==t.nodeType&&9!==t.nodeType?[]:O.call(s&&!i?o?t.getElementsByClassName(a):t.getElementsByTagName(e):t.querySelectorAll(e))},N.contains=k.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},N.type=t,N.isFunction=e,N.isWindow=n,N.isArray=Y,N.isPlainObject=o,N.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},N.inArray=function(t,e,n){return T.indexOf.call(e,t,n)},N.camelCase=j,N.trim=function(t){return null==t?"":String.prototype.trim.call(t)},N.uuid=0,N.support={},N.expr={},N.map=function(t,e){var n,r,i,o=[];if(a(t))for(r=0;r<t.length;r++)null!=(n=e(t[r],r))&&o.push(n);else for(i in t)null!=(n=e(t[i],i))&&o.push(n);return c(o)},N.each=function(t,e){var n,r;if(a(t)){for(n=0;n<t.length;n++)if(!1===e.call(t[n],n,t[n]))return t}else for(r in t)if(!1===e.call(t[r],r,t[r]))return t;return t},N.grep=function(t,e){return A.call(t,e)},window.JSON&&(N.parseJSON=JSON.parse),N.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){W["[object "+e+"]"]=e.toLowerCase()}),N.fn={forEach:T.forEach,reduce:T.reduce,push:T.push,sort:T.sort,indexOf:T.indexOf,concat:T.concat,map:function(t){return N(N.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return N(O.apply(this,arguments))},ready:function(t){return Z.test(k.readyState)&&k.body?t(N):k.addEventListener("DOMContentLoaded",function(){t(N)},!1),this},get:function(t){return t===w?O.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return T.every.call(this,function(e,n){return!1!==t.call(e,n,e)}),this},filter:function(t){return e(t)?this.not(this.not(t)):N(A.call(this,function(e){return V.matches(e,t)}))},add:function(t,e){return N(C(this.concat(N(t,e))))},is:function(t){return this.length>0&&V.matches(this[0],t)},not:function(t){var n=[];if(e(t)&&t.call!==w)this.each(function(e){t.call(this,e)||n.push(this)});else{var r="string"==typeof t?this.filter(t):a(t)&&e(t.item)?O.call(t):N(t);this.forEach(function(t){r.indexOf(t)<0&&n.push(t)})}return N(n)},has:function(t){return this.filter(function(){return i(t)?N.contains(this,t):N(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!i(t)?t:N(t)},last:function(){var t=this[this.length-1];return t&&!i(t)?t:N(t)},find:function(t){var e=this;return t?"object"==typeof t?N(t).filter(function(){var t=this;return T.some.call(e,function(e){return N.contains(e,t)})}):1==this.length?N(V.qsa(this[0],t)):this.map(function(){return V.qsa(this,t)}):N()},closest:function(t,e){var n=this[0],i=!1;for("object"==typeof t&&(i=N(t));n&&!(i?i.indexOf(n)>=0:V.matches(n,t));)n=n!==e&&!r(n)&&n.parentNode;return N(n)},parents:function(t){for(var e=[],n=this;n.length>0;)n=N.map(n,function(t){if((t=t.parentNode)&&!r(t)&&e.indexOf(t)<0)return e.push(t),t});return m(e,t)},parent:function(t){return m(C(this.pluck("parentNode")),t)},children:function(t){return m(this.map(function(){return p(this)}),t)},contents:function(){return this.map(function(){return O.call(this.childNodes)})},siblings:function(t){return m(this.map(function(t,e){return A.call(p(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return N.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=h(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var n=e(t);if(this[0]&&!n)var r=N(t).get(0),i=r.parentNode||this.length>1;return this.each(function(e){N(this).wrapAll(n?t.call(this,e):i?r.cloneNode(!0):r)})},wrapAll:function(t){if(this[0]){N(this[0]).before(t=N(t));for(var e;(e=t.children()).length;)t=e.first();N(t).append(this)}return this},wrapInner:function(t){var n=e(t);return this.each(function(e){var r=N(this),i=r.contents(),o=n?t.call(this,e):t;i.length?i.wrapAll(o):r.append(o)})},unwrap:function(){return this.parent().each(function(){N(this).replaceWith(N(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var e=N(this);(t===w?"none"==e.css("display"):t)?e.show():e.hide()})},prev:function(t){return N(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return N(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var n=this.innerHTML;N(this).empty().append(v(this,t,e,n))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=v(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this[0].textContent:null},attr:function(t,e){var n;return"string"!=typeof t||1 in arguments?this.each(function(n){if(1===this.nodeType)if(i(t))for(E in t)g(this,E,t[E]);else g(this,t,v(this,e,n,this.getAttribute(t)))}):this.length&&1===this[0].nodeType?!(n=this[0].getAttribute(t))&&t in this[0]?this[0][t]:n:w},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){g(this,t)},this)})},prop:function(t,e){return t=G[t]||t,1 in arguments?this.each(function(n){this[t]=v(this,e,n,this[t])}):this[0]&&this[0][t]},data:function(t,e){var n="data-"+t.replace(_,"-$1").toLowerCase(),r=1 in arguments?this.attr(n,e):this.attr(n);return null!==r?b(r):w},val:function(t){return 0 in arguments?this.each(function(e){this.value=v(this,t,e,this.value)}):this[0]&&(this[0].multiple?N(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(t){if(t)return this.each(function(e){var n=N(this),r=v(this,t,e,n.offset()),i=n.offsetParent().offset(),o={top:r.top-i.top,left:r.left-i.left};"static"==n.css("position")&&(o.position="relative"),n.css(o)});if(!this.length)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(e,n){if(arguments.length<2){var r,i=this[0];if(!i)return;if(r=getComputedStyle(i,""),"string"==typeof e)return i.style[j(e)]||r.getPropertyValue(e);if(Y(e)){var o={};return N.each(e,function(t,e){o[e]=i.style[j(e)]||r.getPropertyValue(e)}),o}}var a="";if("string"==t(e))n||0===n?a=u(e)+":"+f(e,n):this.each(function(){this.style.removeProperty(u(e))});else for(E in e)e[E]||0===e[E]?a+=u(E)+":"+f(E,e[E])+";":this.each(function(){this.style.removeProperty(u(E))});return this.each(function(){this.style.cssText+=";"+a})},index:function(t){return t?this.indexOf(N(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return!!t&&T.some.call(this,function(t){return this.test(y(t))},l(t))},addClass:function(t){return t?this.each(function(e){if("className"in this){S=[];var n=y(this);v(this,t,e,n).split(/\s+/g).forEach(function(t){N(this).hasClass(t)||S.push(t)},this),S.length&&y(this,n+(n?" ":"")+S.join(" "))}}):this},removeClass:function(t){return this.each(function(e){if("className"in this){if(t===w)return y(this,"");S=y(this),v(this,t,e,S).split(/\s+/g).forEach(function(t){S=S.replace(l(t)," ")}),y(this,S.trim())}})},toggleClass:function(t,e){return t?this.each(function(n){var r=N(this);v(this,t,n,y(this)).split(/\s+/g).forEach(function(t){(e===w?!r.hasClass(t):e)?r.addClass(t):r.removeClass(t)})}):this},scrollTop:function(t){if(this.length){var e="scrollTop"in this[0];return t===w?e?this[0].scrollTop:this[0].pageYOffset:this.each(e?function(){this.scrollTop=t}:function(){this.scrollTo(this.scrollX,t)})}},scrollLeft:function(t){if(this.length){var e="scrollLeft"in this[0];return t===w?e?this[0].scrollLeft:this[0].pageXOffset:this.each(e?function(){this.scrollLeft=t}:function(){this.scrollTo(t,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),n=this.offset(),r=D.test(e[0].nodeName)?{top:0,left:0}:e.offset();return n.top-=parseFloat(N(t).css("margin-top"))||0,n.left-=parseFloat(N(t).css("margin-left"))||0,r.top+=parseFloat(N(e[0]).css("border-top-width"))||0,r.left+=parseFloat(N(e[0]).css("border-left-width"))||0,{top:n.top-r.top,left:n.left-r.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||k.body;t&&!D.test(t.nodeName)&&"static"==N(t).css("position");)t=t.offsetParent;return t})}},N.fn.detach=N.fn.remove,["width","height"].forEach(function(t){var e=t.replace(/./,function(t){return t[0].toUpperCase()});N.fn[t]=function(i){var o,a=this[0];return i===w?n(a)?a["inner"+e]:r(a)?a.documentElement["scroll"+e]:(o=this.offset())&&o[t]:this.each(function(e){a=N(this),a.css(t,v(this,i,e,a[t]()))})}}),F.forEach(function(e,n){var r=n%2;N.fn[e]=function(){var e,i,o=N.map(arguments,function(n){return e=t(n),"object"==e||"array"==e||null==n?n:V.fragment(n)}),a=this.length>1;return o.length<1?this:this.each(function(t,e){i=r?e:e.parentNode,e=0==n?e.nextSibling:1==n?e.firstChild:2==n?e:null;var s=N.contains(k.documentElement,i);o.forEach(function(t){if(a)t=t.cloneNode(!0);else if(!i)return N(t).remove();i.insertBefore(t,e),s&&x(t,function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},N.fn[r?e+"To":"insert"+(n?"Before":"After")]=function(t){return N(t)[e](this),this}}),V.Z.prototype=N.fn,V.uniq=C,V.deserializeValue=b,N.zepto=V,N}();!function(t){function e(t){return t._zid||(t._zid=h++)}function n(t,n,o,a){if(n=r(n),n.ns)var s=i(n.ns);return(v[e(t)]||[]).filter(function(t){return t&&(!n.e||t.e==n.e)&&(!n.ns||s.test(t.ns))&&(!o||e(t.fn)===e(o))&&(!a||t.sel==a)})}function r(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function i(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function o(t,e){return t.del&&!y&&t.e in b||!!e}function a(t){return x[t]||y&&b[t]||t}function s(n,i,s,c,l,h,p){var d=e(n),m=v[d]||(v[d]=[]);i.split(/\s/).forEach(function(e){if("ready"==e)return t(document).ready(s);var i=r(e);i.fn=s,i.sel=l,i.e in x&&(s=function(e){var n=e.relatedTarget;if(!n||n!==this&&!t.contains(this,n))return i.fn.apply(this,arguments)}),i.del=h;var d=h||s;i.proxy=function(t){if(t=u(t),!t.isImmediatePropagationStopped()){t.data=c;var e=d.apply(n,t._args==f?[t]:[t].concat(t._args));return!1===e&&(t.preventDefault(),t.stopPropagation()),e}},i.i=m.length,m.push(i),"addEventListener"in n&&n.addEventListener(a(i.e),i.proxy,o(i,p))})}function c(t,r,i,s,c){var u=e(t);(r||"").split(/\s/).forEach(function(e){n(t,e,i,s).forEach(function(e){delete v[u][e.i],"removeEventListener"in t&&t.removeEventListener(a(e.e),e.proxy,o(e,c))})})}function u(e,n){return!n&&e.isDefaultPrevented||(n||(n=e),t.each(S,function(t,r){var i=n[t];e[t]=function(){return this[r]=w,i&&i.apply(n,arguments)},e[r]=E}),(n.defaultPrevented!==f?n.defaultPrevented:"returnValue"in n?!1===n.returnValue:n.getPreventDefault&&n.getPreventDefault())&&(e.isDefaultPrevented=w)),e}function l(t){var e,n={originalEvent:t};for(e in t)N.test(e)||t[e]===f||(n[e]=t[e]);return u(n,t)}var f,h=1,p=Array.prototype.slice,d=t.isFunction,m=function(t){return"string"==typeof t},v={},g={},y="onfocusin"in window,b={focus:"focusin",blur:"focusout"},x={mouseenter:"mouseover",mouseleave:"mouseout"};g.click=g.mousedown=g.mouseup=g.mousemove="MouseEvents",t.event={add:s,remove:c},t.proxy=function(n,r){var i=2 in arguments&&p.call(arguments,2);if(d(n)){var o=function(){return n.apply(r,i?i.concat(p.call(arguments)):arguments)};return o._zid=e(n),o}if(m(r))return i?(i.unshift(n[r],n),t.proxy.apply(null,i)):t.proxy(n[r],n);throw new TypeError("expected function")},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,r){return this.on(t,e,n,r,1)};var w=function(){return!0},E=function(){return!1},N=/^([A-Z]|returnValue$|layer[XY]$)/,S={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,n,r,i,o){var a,u,h=this;return e&&!m(e)?(t.each(e,function(t,e){h.on(t,n,r,e,o)}),h):(m(n)||d(i)||!1===i||(i=r,r=n,n=f),(d(r)||!1===r)&&(i=r,r=f),!1===i&&(i=E),h.each(function(f,h){o&&(a=function(t){return c(h,t.type,i),i.apply(this,arguments)}),n&&(u=function(e){var r,o=t(e.target).closest(n,h).get(0);if(o&&o!==h)return r=t.extend(l(e),{currentTarget:o,liveFired:h}),(a||i).apply(o,[r].concat(p.call(arguments,1)))}),s(h,e,i,r,n,u||a)}))},t.fn.off=function(e,n,r){var i=this;return e&&!m(e)?(t.each(e,function(t,e){i.off(t,n,e)}),i):(m(n)||d(r)||!1===r||(r=n,n=f),!1===r&&(r=E),i.each(function(){c(this,e,r,n)}))},t.fn.trigger=function(e,n){return e=m(e)||t.isPlainObject(e)?t.Event(e):u(e),e._args=n,this.each(function(){e.type in b&&"function"==typeof this[e.type]?this[e.type]():"dispatchEvent"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(e,r){var i,o;return this.each(function(a,s){i=l(m(e)?t.Event(e):e),i._args=r,i.target=s,t.each(n(s,e.type||e),function(t,e){if(o=e.proxy(i),i.isImmediatePropagationStopped())return!1})}),o},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return 0 in arguments?this.bind(e,t):this.trigger(e)}}),t.Event=function(t,e){m(t)||(e=t,t=e.type);var n=document.createEvent(g[t]||"Events"),r=!0;if(e)for(var i in e)"bubbles"==i?r=!!e[i]:n[i]=e[i];return n.initEvent(t,r,!0),u(n)}}(n),function(t){function e(e,n,r){var i=t.Event(n);return t(e).trigger(i,r),!i.isDefaultPrevented()}function n(t,n,r,i){if(t.global)return e(n||y,r,i)}function r(e){e.global&&0==t.active++&&n(e,null,"ajaxStart")}function i(e){e.global&&!--t.active&&n(e,null,"ajaxStop")}function o(t,e){var r=e.context;if(!1===e.beforeSend.call(r,t,e)||!1===n(e,r,"ajaxBeforeSend",[t,e]))return!1;n(e,r,"ajaxSend",[t,e])}function a(t,e,r,i){var o=r.context;r.success.call(o,t,"success",e),i&&i.resolveWith(o,[t,"success",e]),n(r,o,"ajaxSuccess",[e,r,t]),c("success",e,r)}function s(t,e,r,i,o){var a=i.context;i.error.call(a,r,e,t),o&&o.rejectWith(a,[r,e,t]),n(i,a,"ajaxError",[r,i,t||e]),c(e,r,i)}function c(t,e,r){var o=r.context;r.complete.call(o,e,t),n(r,o,"ajaxComplete",[e,r]),i(r)}function u(){}function l(t){return t&&(t=t.split(";",2)[0]),t&&(t==N?"html":t==E?"json":x.test(t)?"script":w.test(t)&&"xml")||"text"}function f(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function h(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=f(e.url,e.data),e.data=void 0)}function p(e,n,r,i){return t.isFunction(n)&&(i=r,r=n,n=void 0),t.isFunction(r)||(i=r,r=void 0),{url:e,data:n,success:r,dataType:i}}function d(e,n,r,i){var o,a=t.isArray(n),s=t.isPlainObject(n);t.each(n,function(n,c){o=t.type(c),i&&(n=r?i:i+"["+(s||"object"==o||"array"==o?n:"")+"]"),!i&&a?e.add(c.name,c.value):"array"==o||!r&&"object"==o?d(e,c,r,n):e.add(n,c)})}var m,v,g=0,y=window.document,b=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,x=/^(?:text|application)\/javascript/i,w=/^(?:text|application)\/xml/i,E="application/json",N="text/html",S=/^\s*$/,j=y.createElement("a");j.href=window.location.href,t.active=0,t.ajaxJSONP=function(e,n){if(!("type"in e))return t.ajax(e);var r,i,c=e.jsonpCallback,u=(t.isFunction(c)?c():c)||"jsonp"+ ++g,l=y.createElement("script"),f=window[u],h=function(e){t(l).triggerHandler("error",e||"abort")},p={abort:h};return n&&n.promise(p),t(l).on("load error",function(o,c){clearTimeout(i),t(l).off().remove(),"error"!=o.type&&r?a(r[0],p,e,n):s(null,c||"error",p,e,n),window[u]=f,r&&t.isFunction(f)&&f(r[0]),f=r=void 0}),!1===o(p,e)?(h("abort"),p):(window[u]=function(){r=arguments},l.src=e.url.replace(/\?(.+)=\?/,"?$1="+u),y.head.appendChild(l),e.timeout>0&&(i=setTimeout(function(){h("timeout")},e.timeout)),p)},t.ajaxSettings={type:"GET",beforeSend:u,success:u,error:u,complete:u,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:E,xml:"application/xml, text/xml",html:N,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var n,i=t.extend({},e||{}),c=t.Deferred&&t.Deferred();for(m in t.ajaxSettings)void 0===i[m]&&(i[m]=t.ajaxSettings[m]);r(i),i.crossDomain||(n=y.createElement("a"),n.href=i.url,n.href=n.href,i.crossDomain=j.protocol+"//"+j.host!=n.protocol+"//"+n.host),i.url||(i.url=window.location.toString()),h(i);var p=i.dataType,d=/\?.+=\?/.test(i.url);if(d&&(p="jsonp"),!1!==i.cache&&(e&&!0===e.cache||"script"!=p&&"jsonp"!=p)||(i.url=f(i.url,"_="+Date.now())),"jsonp"==p)return d||(i.url=f(i.url,i.jsonp?i.jsonp+"=?":!1===i.jsonp?"":"callback=?")),t.ajaxJSONP(i,c);var g,b=i.accepts[p],x={},w=function(t,e){x[t.toLowerCase()]=[t,e]},E=/^([\w-]+:)\/\//.test(i.url)?RegExp.$1:window.location.protocol,N=i.xhr(),C=N.setRequestHeader;if(c&&c.promise(N),i.crossDomain||w("X-Requested-With","XMLHttpRequest"),w("Accept",b||"*/*"),(b=i.mimeType||b)&&(b.indexOf(",")>-1&&(b=b.split(",",2)[0]),N.overrideMimeType&&N.overrideMimeType(b)),(i.contentType||!1!==i.contentType&&i.data&&"GET"!=i.type.toUpperCase())&&w("Content-Type",i.contentType||"application/x-www-form-urlencoded"),i.headers)for(v in i.headers)w(v,i.headers[v]);if(N.setRequestHeader=w,N.onreadystatechange=function(){if(4==N.readyState){N.onreadystatechange=u,clearTimeout(g);var e,n=!1;if(N.status>=200&&N.status<300||304==N.status||0==N.status&&"file:"==E){p=p||l(i.mimeType||N.getResponseHeader("content-type")),e=N.responseText;try{"script"==p?(0,eval)(e):"xml"==p?e=N.responseXML:"json"==p&&(e=S.test(e)?null:t.parseJSON(e))}catch(t){n=t}n?s(n,"parsererror",N,i,c):a(e,N,i,c)}else s(N.statusText||null,N.status?"error":"abort",N,i,c)}},!1===o(N,i))return N.abort(),s(null,"abort",N,i,c),N;if(i.xhrFields)for(v in i.xhrFields)N[v]=i.xhrFields[v];var T=!("async"in i)||i.async;N.open(i.type,i.url,T,i.username,i.password);for(v in x)C.apply(N,x[v]);return i.timeout>0&&(g=setTimeout(function(){N.onreadystatechange=u,N.abort(),s(null,"timeout",N,i,c)},i.timeout)),N.send(i.data?i.data:null),N},t.get=function(){return t.ajax(p.apply(null,arguments))},t.post=function(){var e=p.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=p.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,r){if(!this.length)return this;var i,o=this,a=e.split(/\s/),s=p(e,n,r),c=s.success;return a.length>1&&(s.url=a[0],i=a[1]),s.success=function(e){o.html(i?t("<div>").html(e.replace(b,"")).find(i):e),c&&c.apply(o,arguments)},t.ajax(s),this};var C=encodeURIComponent;t.param=function(e,n){var r=[];return r.add=function(e,n){t.isFunction(n)&&(n=n()),null==n&&(n=""),this.push(C(e)+"="+C(n))},d(r,e,n),r.join("&").replace(/%20/g,"+")}}(n),function(t){t.fn.serializeArray=function(){var e,n,r=[],i=function(t){if(t.forEach)return t.forEach(i);r.push({name:e,value:t})};return this[0]&&t.each(this[0].elements,function(r,o){n=o.type,e=o.name,e&&"fieldset"!=o.nodeName.toLowerCase()&&!o.disabled&&"submit"!=n&&"reset"!=n&&"button"!=n&&"file"!=n&&("radio"!=n&&"checkbox"!=n||o.checked)&&i(t(o).val())}),r},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(0 in arguments)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(n),function(t){"__proto__"in{}||t.extend(t.zepto,{Z:function(e,n){return e=e||[],t.extend(e,t.fn),e.selector=n||"",e.__Z=!0,e},isZ:function(e){return"array"===t.type(e)&&"__Z"in e}});try{getComputedStyle(void 0)}catch(t){var e=getComputedStyle;window.getComputedStyle=function(t){try{return e(t)}catch(t){return null}}}}(n)},229:function(t,e,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i={sortArray:function(t,e,n){var r=this.deepCopy(t,[]);return e=!e||"desc"!==e&&"asc"!==e?"desc":e,r.sort(function(t,r){var i=parseFloat(t[n]),o=parseFloat(r[n]);return"asc"===e?i-o:o-i}),r},deepCopy:function(t,e){var e=e||{};for(var n in t)"object"===r(t[n])?(e[n]=t[n].constructor===Array?[]:{},arguments.callee(t[n],e[n])):e[n]=t[n];return e},initArray:function(t,e){for(var n=[],r=0;r<t;r++)n[r]=e;return n},splitArray:function(t){for(var e=t.length,n=[],r=0;r<e;r++)n[r]=this.initArray(e,0);for(var i=0;i<e;i++)n[i][i]=t[i];return n},formatISODateToLocalString:function(t){var e=new Date(t).toISOString().replace(/T/g," ").replace(/-/g,"/").replace(/\.[\d]{3}Z/,""),n=new Date(+new Date(e)+288e5);return n.getFullYear()+"-"+(n.getMonth()+1)+"-"+n.getDate()+" "+n.getHours()+":"+n.getMinutes()+":"+n.getSeconds()}};t.exports=i},230:function(t,e,n){var r,i=0,o=n(231);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(e.locals=o.locals),e.use=e.ref=function(){return i++||(r=n(218)(o,{})),e},e.unuse=e.unref=function(){i>0&&!--i&&(r(),r=null)}},231:function(t,e,n){e=t.exports=n(217)(void 0),e.push([t.i,".caijing-box {\n\t\n}",""])},232:function(t,e,n){"use strict";(function(e){var r=n(18),i=n(95),o=n(229),a=n(233),s=r.createClass({displayName:"contentComponent",getInitialState:function(){return{articles:[]}},componentWillMount:function(){a.use(),this.getArticles(1)},componentWillUnmount:function(){a.unuse()},componentDidMount:function(){},getArticles:function(t){var n=this;e.ajax({type:"GET",url:i.requestUrl.wxArticleUrl,data:{type:"caijing",pageNum:t,pageSize:10},dataType:"json",success:function(t){n.handleArticleResult(t)},error:function(t,e){}})},handleArticleResult:function(t){var e=this;if("0"===t.resultCode){var n=t.result.articles;e.setState({articles:e.state.articles.concat(n)})}},handleArticleResultError:function(){},handleArticleItemClick:function(t){window.location.href=t},render:function(){var t=this,e=t.state.articles;return r.createElement("div",{className:"content-box"},r.createElement("div",{className:"articles-container"},e.map(function(e,n){var i=e.title,a=e.url,s=e.thumb_nail,c=e.release_time?o.formatISODateToLocalString(e.release_time).split(" ")[0]:"",u=e.abstract,l=e.wechat_number;return r.createElement("div",{className:"article-item",onClick:t.handleArticleItemClick.bind(t,a),key:n},r.createElement("div",{className:"article-item-l"},r.createElement("img",{className:"article-item-l-img",src:"http://read.html5.qq.com/image?src=forum&q=5&r=0&imgflag=7&imageUrl="+s})),r.createElement("div",{className:"article-item-r"},r.createElement("span",{className:"article-item-title"},i),r.createElement("span",{className:"article-item-desc"},u),r.createElement("span",{className:"article-item-wx-public-num"},l,"    ",c)))})))}});t.exports=s}).call(e,n(228))},233:function(t,e,n){var r,i=0,o=n(234);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(e.locals=o.locals),e.use=e.ref=function(){return i++||(r=n(218)(o,{})),e},e.unuse=e.unref=function(){i>0&&!--i&&(r(),r=null)}},234:function(t,e,n){e=t.exports=n(217)(void 0),e.push([t.i,".content-box {\n\n}\n.article-item {\n\tpadding: .3rem;\n\tborder-bottom: 1px solid #eee;\n}\n.article-item-l {\n    float: left;\n    width: 1.8rem;\n    height: 1.8rem;\n}\n.article-item-l-img {\n    width: 100%;\n    height: 100%;\n}\n.article-item-r {\n\tmargin-left: 2.1rem;\n}\n.article-item-title {\n\tdisplay: block;\n    font-size: .3rem;\n    color: #222;\n    font-weight: 700;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n    line-height: 1.1;\n    margin-bottom: .1rem;\n}\n.article-item-desc {\n    font-size: .26rem;\n    color: #666;\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n    margin-bottom: .43rem;\n}\n.article-item-wx-public-num {\n    font-size: .22rem;\n    color: #666;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n    line-height: 1.1;\n}",""])}});