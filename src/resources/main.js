!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=19)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.monkeypatch=function(e,t,n){var r=e.prototype[t];e.prototype[t]=function(){r.apply(this,arguments),n.call(this)}},t.uniqueId=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"uid")+Math.random().toString(36).substr(2)+r++},t.isUrl=function(e){return/^https?:\/\//.test(e)};var r=0},function(e,t){e.exports=jQuery},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._events=new Map}return r(e,[{key:"on",value:function(e,t){this._events.has(e)||this._events.set(e,[]),this._events.get(e).push(t)}},{key:"off",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(this._events)if(t&&this._events.has(e)){var n=this._events.get(e).filter(function(e){return e!==t});n.length>0?this._events.set(e,n):this._events.delete(e)}else this._events.delete(e)}},{key:"trigger",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this._events&&this._events.has(e)&&(n=Object.assign(n,{type:e}),this._events.get(e).forEach(function(e){return e.call(t,n)}))}}]),e}();t.default=i},function(e,t){e.exports=Craft},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var i,o=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?e:(i=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}},function(e,t,n){var r,i,o={},s=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=r.apply(this,arguments)),i}),a=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var n=function(e){return document.querySelector(e)}.call(this,e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),u=null,d=0,l=[],f=n(4);function c(e,t){for(var n=0;n<e.length;n++){var r=e[n],i=o[r.id];if(i){i.refs++;for(var s=0;s<i.parts.length;s++)i.parts[s](r.parts[s]);for(;s<r.parts.length;s++)i.parts.push(g(r.parts[s],t))}else{var a=[];for(s=0;s<r.parts.length;s++)a.push(g(r.parts[s],t));o[r.id]={id:r.id,refs:1,parts:a}}}}function h(e,t){for(var n=[],r={},i=0;i<e.length;i++){var o=e[i],s=t.base?o[0]+t.base:o[0],a={css:o[1],media:o[2],sourceMap:o[3]};r[s]?r[s].parts.push(a):n.push(r[s]={id:s,parts:[a]})}return n}function p(e,t){var n=a(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=l[l.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),l.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=a(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,i)}}function v(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=l.indexOf(e);t>=0&&l.splice(t,1)}function m(e){var t=document.createElement("style");return void 0===e.attrs.type&&(e.attrs.type="text/css"),b(t,e.attrs),p(e,t),t}function b(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function g(e,t){var n,r,i,o;if(t.transform&&e.css){if(!(o=t.transform(e.css)))return function(){};e.css=o}if(t.singleton){var s=d++;n=u||(u=m(t)),r=w.bind(null,n,s,!1),i=w.bind(null,n,s,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",b(t,e.attrs),p(e,t),t}(t),r=function(e,t,n){var r=n.css,i=n.sourceMap,o=void 0===t.convertToAbsoluteUrls&&i;(t.convertToAbsoluteUrls||o)&&(r=f(r)),i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var s=new Blob([r],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,n,t),i=function(){v(n),n.href&&URL.revokeObjectURL(n.href)}):(n=m(t),r=function(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),i=function(){v(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=s()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=h(e,t);return c(n,t),function(e){for(var r=[],i=0;i<n.length;i++){var s=n[i];(a=o[s.id]).refs--,r.push(a)}for(e&&c(h(e,t),t),i=0;i<r.length;i++){var a;if(0===(a=r[i]).refs){for(var u=0;u<a.parts.length;u++)a.parts[u]();delete o[a.id]}}}};var y,_=(y=[],function(e,t){return y[e]=t,y.filter(Boolean).join("\n")});function w(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=_(t,i);else{var o=document.createTextNode(i),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(o,s[t]):e.appendChild(o)}}},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n,r=e[1]||"",i=e[3];if(!i)return r;if(t&&"function"==typeof btoa){var o=(n=i,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),s=i.sources.map(function(e){return"/*# sourceURL="+i.sourceRoot+e+" */"});return[r].concat(s).concat([o]).join("\n")}return[r].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<e.length;i++){var s=e[i];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=s(n(1)),o=s(n(3));function s(e){return e&&e.__esModule?e:{default:e}}var a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var t=o.default.t("embeddedassets","Embed");this.$element=(0,i.default)('<div class="embedded-assets_button btn" data-icon="globe">'+t+"</div>")}return r(e,[{key:"destroy",value:function(){this.$element.remove(),this.$element=null}},{key:"setActive",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.$element.toggleClass("active",e)}}]),e}();t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=u(n(1)),o=u(n(3)),s=u(n(2)),a=n(0);function u(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){return-1};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));n._getFolderId=e;var r=(0,a.uniqueId)(),s=(0,a.uniqueId)(),u=(0,a.uniqueId)(),d=o.default.getActionUrl("embeddedassets/actions/save");return n.$element=(0,i.default)('\n\t\t\t<form class="embedded-assets_form" action="'+d+'" method="post">\n\t\t\t\t<div class="embedded-assets_form_field">\n\t\t\t\t\t<label for="'+r+'">URL</label>\n\t\t\t\t\t<input type="text" placeholder="http://" id="'+r+'" name="url" autocomplete="off" spellcheck="false">\n\t\t\t\t</div>\n\t\t\t\t<div id="'+s+'" class="embedded-assets_form_body">\n\t\t\t\t\t<iframe id="'+u+'" src="about:blank"></iframe>\n\t\t\t\t\t<div class="spinner"></div>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t'),n.$input=n.$element.find("#"+r),n.$body=n.$element.find("#"+s),n.$preview=n.$element.find("#"+u),n.$element.on("submit",function(e){e.preventDefault();var t=n._url===n.$input.val();"idle"===n._state||"saving"!==n._state&&!t?n.request():"requested"===n._state&&t&&n.save()}),n.$input.on("change blur",function(){return n.request()}),n.$input.on("paste",function(e){var t=(e.clipboardData||e.originalEvent.clipboardData||window.clipboardData).getData("text");n.request(t)}),n._monitorPreviewHeight(),n.setState("idle"),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s.default),r(t,[{key:"destroy",value:function(){this.$element.remove(),this.$element=null,this.$input=null,this.$body=null,this.$preview=null,this._$warningTrigger&&(this._$warningTrigger.remove(),this._$warningTrigger=null),this._warningHud&&(this._warningHud.hide(),this._warningHud.$hud.remove(),this._warningHud.$shade.remove(),this._warningHud=null),cancelAnimationFrame(this._previewMonitor),this.trigger("destroy")}},{key:"request",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.$input.val();if("saving"!==this._state&&this._url!==t)if(this._url=t,(0,a.isUrl)(t)){var n=function(){return e._url===t&&"requesting"===e._state};this.setState("requesting"),this._setPreview(t).then(function(){n()&&e.setState("requested"),e._setupWarning()}).catch(function(){n()&&(o.default.cp.displayError(o.default.t("embeddedassets","Could not retrieve embed information.")),e.setState("idle"))})}else this.setState("idle")}},{key:"focus",value:function(){this.$input[0].select(),this.$input[0].focus()}},{key:"clear",value:function(){this.$input.val(""),this.trigger("clear"),this.setState("idle")}},{key:"save",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.$input.val(),n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this._getFolderId();o.default.queueActionRequest("embeddedassets/actions/save",{url:t,folderId:n},function(t,n){"saving"===e._state&&"success"===n&&t.success?(e.clear(),e.trigger("save",t.payload)):(t&&t.error&&o.default.cp.displayError(t.error),e.setState("requested"))}),this.setState("saving")}},{key:"setState",value:function(e){switch(this._state=e,this.$element.attr("data-state",e),e){case"idle":this._url="",this.trigger("idle");break;case"requesting":this.trigger("requesting");break;case"requested":this.trigger("requested");break;case"saving":this.trigger("saving")}}},{key:"_setPreview",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15e3;return new Promise(function(r,i){var s=t.$preview[0].contentWindow;if(s){var u=Boolean(e),d="about:blank";if(u){var l=(0,a.uniqueId)("embeddedAssets_"),f=function(){return delete window[l]};d=o.default.getActionUrl("embeddedassets/actions/preview",{url:e,callback:l}),window[l]=function(){r(),f()},setTimeout(function(){i(),f()},n)}s.location.replace(d),u||r()}else i()})}},{key:"_getCurrentPreviewUrl",value:function(){var e=this.$preview[0].contentWindow,t=e?e.location.href:"";return t.indexOf("embeddedassets")>0&&t}},{key:"_monitorPreviewHeight",value:function(){var e=this,t=0;!function n(){if(Boolean(e._getCurrentPreviewUrl())&&e.$preview[0].contentDocument){var r=(0,i.default)(e.$preview[0].contentDocument.body);e.$body.css("height",r.height()+"px")}else e.$body.css("height","");var o=e.$body.height();t!==o&&(e.trigger("resize",{previousHeight:t,nextHeight:o}),t=o),e._previewMonitor=requestAnimationFrame(n)}()}},{key:"_setupWarning",value:function(){var e=this;if(Boolean(this._getCurrentPreviewUrl())&&this.$preview[0].contentDocument){var t=(0,i.default)(this.$preview[0].contentWindow),n=(0,i.default)(this.$preview[0].contentDocument).find("#warning");n.off(".embeddedassets"),n.on("click.embeddedassets",function(){var r=e.$preview.offset(),s=r.top,a=r.left,u=t.scrollTop(),d=n.offset(),l=s-u+d.top,f=a+d.left,c=n.outerWidth(),h=n.outerHeight();if(e._$warningTrigger||(e._$warningTrigger=(0,i.default)("<div>").css({position:"absolute",display:"none"}),Garnish.$bod.append(e._$warningTrigger)),e._$warningTrigger.css({display:"block",top:l+"px",left:f+"px",width:c+"px",height:h+"px"}),e._warningHud)e._warningHud.show();else{var p=o.default.t("embeddedassets","This information is coming from an untrusted source."),v=o.default.t("embeddedassets","As a security measure embed codes will not be shown."),m=(0,i.default)("\n\t\t\t\t\t\t<p><strong>"+p+"</strong></p>\n\t\t\t\t\t\t<p>"+v+"</p>\n\t\t\t\t\t");e._warningHud=new Garnish.HUD(e._$warningTrigger,m,{hudClass:"hud info-hud",closeOtherHUDs:!1,onHide:function(){return e._$warningTrigger.css("display","none")}})}})}}}]),t}();t.default=d},function(e,t){e.exports=Garnish},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=d(n(1)),o=d(n(14)),s=d(n(2)),a=d(n(13)),u=n(0);function d(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){return-1};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n._getFolderId=e,n.form=null,n.hud=null,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s.default),r(t,[{key:"create",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};n=Object.assign({hudClass:"hud embedded-assets_hud",mainClass:"embedded-assets_hud_main",minBodyWidth:400},n);var r=(0,u.uniqueId)(),s=(0,u.uniqueId)(),d=(0,u.uniqueId)(),l=Craft.t("app","Cancel"),f=Craft.t("app","Save");this.$footer=(0,i.default)('\n\t\t\t<div class="hud-footer embedded-assets_hud_footer">\n\t\t\t\t<div class="buttons right">\n\t\t\t\t\t<div id="'+r+'" class="btn">'+l+'</div>\n\t\t\t\t\t<div id="'+s+'" class="btn submit">'+f+'</div>\n\t\t\t\t\t<div id="'+d+'" class="spinner hidden"></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t'),this.$cancel=this.$footer.find("#"+r),this.$save=this.$footer.find("#"+s),this.$spinner=this.$footer.find("#"+d),this.form=new a.default(this._getFolderId),this.hud=new o.default.HUD(e,this.form.$element.add(this.$footer),n),this.trigger("create"),this.$save.on("click",function(e){return t.$save.hasClass("disabled")&&e.stopImmediatePropagation()}),this.$cancel.on("click",function(){return t.form.clear()}),this.$save.on("click",function(){return t.form.save()}),this.form.on("submit",function(){return t.form.save()}),this.form.on("save",function(e){return t.trigger("save",e)}),this.hud.on("show",function(){return t.trigger("show")}),this.hud.on("hide",function(){return t.trigger("hide")}),this.form.on("clear",function(){return t.hide()}),this.form.on("save",function(){return t.hide()}),this.hud.on("show",function(){return t.form.request()}),this.hud.on("show",function(){return t.form.focus()}),this.hud.on("hide",function(){return t.form.setState("idle")}),this.hideFooter(),this.form.on("idle",function(){return t.hideFooter()}),this.form.on("requesting",function(){return t.hideFooter()}),this.form.on("requested",function(){return t.showFooter()}),this.form.on("idle",function(){return t.setSaving(!1)}),this.form.on("requesting",function(){return t.setSaving(!1)}),this.form.on("requested",function(){return t.setSaving(!1)}),this.form.on("saving",function(){return t.setSaving()}),this.form.on("resize",function(){return t.hud.updateSizeAndPosition()})}},{key:"destroy",value:function(){this.$footer&&(this.$footer.remove(),this.$footer=null),this.form&&(this.form.destroy(),this.form=null),this.hud&&(this.hud.hide(),this.hud.$hud.remove(),this.hud.$shade.remove(),this.hud=null),cancelAnimationFrame(this._monitor),this.trigger("destroy")}},{key:"show",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.hud?(this.hud.setSettings(t),this.hud.$trigger=(0,i.default)(e),this.hud.showing?this.hud.queueUpdateSizeAndPosition():this.hud.show()):(this.create(e,t),this.form.focus()),this.trigger("show")}},{key:"hide",value:function(){this.hud&&this.hud.hide(),this.trigger("hide")}},{key:"hideFooter",value:function(){this.hud&&this.hud.$hud.removeClass("show-footer")}},{key:"showFooter",value:function(){this.hud&&this.hud.$hud.addClass("show-footer")}},{key:"setSaving",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.$save.toggleClass("disabled",e),this.$spinner.toggleClass("hidden",!e)}}]),t}();t.default=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=s(n(2)),o=s(n(15));function s(e){return e&&e.__esModule?e:{default:e}}var a=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e._currentGetFolderId=function(){return-1},e.modal=new o.default(function(){return e._getFolderId()}),e.buttons=[],e.modal.on("hide",function(){return e.buttons.forEach(function(e){return e.setActive(!1)})}),e.modal.on("save",function(t){return e.trigger("save",t)}),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default),r(t,[{key:"destroy",value:function(){this.modal.destroy(),this.modal=null,this.trigger("destroy")}},{key:"addButton",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["bottom","top","left","right"],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){return-1};this.buttons.push(e),e.$element.on("click",function(){t.modal&&(t._currentGetFolderId=r,t.buttons.forEach(function(t){return t.setActive(t===e)}),t.modal.show(e.$element,{orientations:n}))}),this.trigger("addButton",{button:e})}},{key:"removeButton",value:function(e){this.buttons=this.buttons.filter(function(t){return t!==e}),this.trigger("removeButton",{button:e})}},{key:"_getFolderId",value:function(){return this._currentGetFolderId()}}]),t}();t.default=a},function(e,t,n){(e.exports=n(6)(!1)).push([e.i,"#header .embedded-assets_button {\n  position: relative;\n  overflow: hidden;\n  margin-right: 7px; }\n\n.embedded-assets_form_field {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  padding: 0 24px;\n  box-shadow: 0 1px rgba(0, 0, 20, 0.1); }\n  .embedded-assets_form_field > label,\n  .embedded-assets_form_field > input {\n    padding: 22px 0;\n    font-size: 14px;\n    line-height: 20px; }\n  .embedded-assets_form_field > label {\n    order: 1;\n    padding-right: 14px;\n    font-weight: normal;\n    color: #8f98a3;\n    cursor: text;\n    user-select: none; }\n  .embedded-assets_form_field > input {\n    order: 2;\n    flex: 1;\n    box-sizing: border-box;\n    display: block;\n    border-radius: 0;\n    border: 0;\n    background: transparent;\n    color: #29323d;\n    appearance: none;\n    outline: 0; }\n\n.embedded-assets_form_body {\n  position: relative;\n  overflow: hidden;\n  transition: height 0.3s; }\n  .embedded-assets_form_body > iframe,\n  .embedded-assets_form_body > .spinner {\n    opacity: 0;\n    transition: opacity 0.3s; }\n  .embedded-assets_form_body > iframe {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%; }\n  .embedded-assets_form_body > .spinner {\n    pointer-events: none;\n    position: absolute;\n    top: 47.5px;\n    left: 50%;\n    transform: translate(-50%, -50%); }\n  .embedded-assets_form[data-state='idle'] .embedded-assets_form_body {\n    height: 0 !important; }\n  .embedded-assets_form[data-state='requesting'] .embedded-assets_form_body {\n    height: 95px !important; }\n    .embedded-assets_form[data-state='requesting'] .embedded-assets_form_body > .spinner {\n      opacity: 1; }\n  .embedded-assets_form[data-state='requested'] .embedded-assets_form_body,\n  .embedded-assets_form[data-state='saving'] .embedded-assets_form_body {\n    height: 300px; }\n    .embedded-assets_form[data-state='requested'] .embedded-assets_form_body > iframe,\n    .embedded-assets_form[data-state='saving'] .embedded-assets_form_body > iframe {\n      opacity: 1; }\n\n.embedded-assets_hud_main {\n  transition: padding-bottom 0.3s; }\n\n.embedded-assets_hud_footer {\n  position: absolute !important;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  transform: translateY(100%);\n  transition: transform 0.3s; }\n\n.embedded-assets_hud.show-footer .embedded-assets_hud_main {\n  padding-bottom: 46px; }\n\n.embedded-assets_hud.show-footer .embedded-assets_hud_footer {\n  opacity: 1;\n  transform: none; }\n\n.embedded-assets_label {\n  display: block;\n  line-height: 16px;\n  white-space: nowrap; }\n  .embedded-assets_label > img {\n    display: inline-block;\n    width: 16px;\n    height: 16px;\n    margin-right: 10px;\n    vertical-align: middle;\n    object-fit: contain; }\n\n.hud .image-preview > img {\n  max-width: 380px;\n  max-height: 190px; }\n\n.elementthumb > img {\n  width: 100%; }\n",""])},function(e,t,n){var r=n(17);"string"==typeof r&&(r=[[e.i,r,""]]);n(5)(r,{hmr:!0,transform:void 0,insertInto:void 0}),r.locals&&(e.exports=r.locals)},function(e,t,n){"use strict";n(18);var r=a(n(3)),i=a(n(16)),o=a(n(12)),s=n(0);function a(e){return e&&e.__esModule?e:{default:e}}var u=new i.default;(0,s.monkeypatch)(r.default.AssetIndex,"init",function(){var e=this,t=new o.default,n=this.$uploadButton,r=n.closest("#header").length>0,i=n.closest(".modal").length>0,s=void 0;r?(this.$uploadButton.before(t.$element),s=["bottom","left","right","top"]):i&&(this.$uploadButton.after(t.$element),s=["top","right","bottom","left"]),u.addButton(t,s,function(){return 0|e.getDefaultSourceKey().split(":")[1]});var a=[];u.on("save",function(t){a.push(t.assetId),e.updateElements()}),this.on("updateElements",function(){a.forEach(function(t){return e.view.selectElementById(t)}),a=[]})}),(0,s.monkeypatch)(r.default.AssetEditor,"updateForm",function(){}),window.EmbeddedAssets=u}]);