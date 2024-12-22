(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[306],{2306:function(e,t,n){var o,r;void 0!==(o="function"==typeof(r=function(){"use strict";var e=function(){r.log(2,"(COMPATIBILITY NOTICE) -> As of ScrollMagic 2.0.0 you need to use 'new ScrollMagic.Controller()' to create a new controller instance. Use 'new ScrollMagic.Scene()' to instance a scene.")};e.version="2.0.8","undefined"!=typeof window&&window.addEventListener("mousewheel",void 0);var t="data-scrollmagic-pin-spacer";e.Controller=function(o){var i,l,s="ScrollMagic.Controller",a="REVERSE",c="PAUSED",u=n.defaults,f=this,d=r.extend({},u,o),p=[],g=!1,h=0,v=c,m=!0,w=0,y=!0,S=function(){d.refreshInterval>0&&(l=window.setTimeout(F,d.refreshInterval))},E=function(){return d.vertical?r.get.scrollTop(d.container):r.get.scrollLeft(d.container)},b=function(){return d.vertical?r.get.height(d.container):r.get.width(d.container)},R=this._setScrollPos=function(e){d.vertical?m?window.scrollTo(r.get.scrollLeft(),e):d.container.scrollTop=e:m?window.scrollTo(e,r.get.scrollTop()):d.container.scrollLeft=e},T=function(){if(y&&g){var e=r.type.Array(g)?g:p.slice(0);g=!1;var t=h,n=(h=f.scrollPos())-t;0!==n&&(v=n>0?"FORWARD":a),v===a&&e.reverse(),e.forEach(function(t,n){x(3,"updating Scene "+(n+1)+"/"+e.length+" ("+p.length+" total)"),t.update(!0)}),0===e.length&&d.loglevel>=3&&x(3,"updating 0 Scenes (nothing added to controller)")}},C=function(){i=r.rAF(T)},O=function(e){x(3,"event fired causing an update:",e.type),"resize"==e.type&&(w=b(),v=c),!0!==g&&(g=!0,C())},F=function(){if(!m&&w!=b()){var e;try{e=new Event("resize",{bubbles:!1,cancelable:!1})}catch(t){(e=document.createEvent("Event")).initEvent("resize",!1,!1)}d.container.dispatchEvent(e)}p.forEach(function(e,t){e.refresh()}),S()},x=this._log=function(e,t){d.loglevel>=e&&(Array.prototype.splice.call(arguments,1,0,"("+s+") ->"),r.log.apply(window,arguments))};this._options=d;var z=function(e){if(e.length<=1)return e;var t=e.slice(0);return t.sort(function(e,t){return e.scrollOffset()>t.scrollOffset()?1:-1}),t};return this.addScene=function(t){if(r.type.Array(t))t.forEach(function(e,t){f.addScene(e)});else if(t instanceof e.Scene){if(t.controller()!==f)t.addTo(f);else if(0>p.indexOf(t)){for(var n in p.push(t),p=z(p),t.on("shift.controller_sort",function(){p=z(p)}),d.globalSceneOptions)t[n]&&t[n].call(t,d.globalSceneOptions[n]);x(3,"adding Scene (now "+p.length+" total)")}}else x(1,"ERROR: invalid argument supplied for '.addScene()'");return f},this.removeScene=function(e){if(r.type.Array(e))e.forEach(function(e,t){f.removeScene(e)});else{var t=p.indexOf(e);t>-1&&(e.off("shift.controller_sort"),p.splice(t,1),x(3,"removing Scene (now "+p.length+" left)"),e.remove())}return f},this.updateScene=function(t,n){return r.type.Array(t)?t.forEach(function(e,t){f.updateScene(e,n)}):n?t.update(!0):!0!==g&&t instanceof e.Scene&&(-1==(g=g||[]).indexOf(t)&&g.push(t),g=z(g),C()),f},this.update=function(e){return O({type:"resize"}),e&&T(),f},this.scrollTo=function(n,o){if(r.type.Number(n))R.call(d.container,n,o);else if(n instanceof e.Scene)n.controller()===f?f.scrollTo(n.scrollOffset(),o):x(2,"scrollTo(): The supplied scene does not belong to this controller. Scroll cancelled.",n);else if(r.type.Function(n))R=n;else{var i=r.get.elements(n)[0];if(i){for(;i.parentNode.hasAttribute(t);)i=i.parentNode;var l=d.vertical?"top":"left",s=r.get.offset(d.container),a=r.get.offset(i);m||(s[l]-=f.scrollPos()),f.scrollTo(a[l]-s[l],o)}else x(2,"scrollTo(): The supplied argument is invalid. Scroll cancelled.",n)}return f},this.scrollPos=function(e){return arguments.length?(r.type.Function(e)?E=e:x(2,"Provided value for method 'scrollPos' is not a function. To change the current scroll position use 'scrollTo()'."),f):E.call(f)},this.info=function(e){var t={size:w,vertical:d.vertical,scrollPos:h,scrollDirection:v,container:d.container,isDocument:m};return arguments.length?void 0!==t[e]?t[e]:void x(1,'ERROR: option "'+e+'" is not available'):t},this.loglevel=function(e){return arguments.length?(d.loglevel!=e&&(d.loglevel=e),f):d.loglevel},this.enabled=function(e){return arguments.length?(y!=e&&(y=!!e,f.updateScene(p,!0)),f):y},this.destroy=function(e){window.clearTimeout(l);for(var t=p.length;t--;)p[t].destroy(e);return d.container.removeEventListener("resize",O),d.container.removeEventListener("scroll",O),r.cAF(i),x(3,"destroyed "+s+" (reset: "+(e?"true":"false")+")"),null},function(){for(var t in d)u.hasOwnProperty(t)||(x(2,'WARNING: Unknown option "'+t+'"'),delete d[t]);if(d.container=r.get.elements(d.container)[0],!d.container)throw x(1,"ERROR creating object "+s+": No valid scroll container supplied"),s+" init failed.";(m=d.container===window||d.container===document.body||!document.body.contains(d.container))&&(d.container=window),w=b(),d.container.addEventListener("resize",O),d.container.addEventListener("scroll",O);var n=parseInt(d.refreshInterval,10);d.refreshInterval=r.type.Number(n)?n:u.refreshInterval,S(),x(3,"added new "+s+" controller (v"+e.version+")")}(),f};var n={defaults:{container:window,vertical:!0,globalSceneOptions:{},loglevel:2,refreshInterval:100}};e.Controller.addOption=function(e,t){n.defaults[e]=t},e.Controller.extend=function(t){var n=this;e.Controller=function(){return n.apply(this,arguments),this.$super=r.extend({},this),t.apply(this,arguments)||this},r.extend(e.Controller,n),e.Controller.prototype=n.prototype,e.Controller.prototype.constructor=e.Controller},e.Scene=function(n){var i,l,s="ScrollMagic.Scene",a="BEFORE",c="DURING",u="AFTER",f=o.defaults,d=this,p=r.extend({},f,n),g=a,h=0,v={start:0,end:0},m=0,w=!0,y={};this.on=function(e,t){return r.type.Function(t)?(e=e.trim().split(" ")).forEach(function(e){var n=e.split("."),o=n[0],r=n[1];"*"!=o&&(y[o]||(y[o]=[]),y[o].push({namespace:r||"",callback:t}))}):S(1,"ERROR when calling '.on()': Supplied callback for '"+e+"' is not a valid function!"),d},this.off=function(e,t){return e?((e=e.trim().split(" ")).forEach(function(e,n){var o=e.split("."),r=o[0],i=o[1]||"";("*"===r?Object.keys(y):[r]).forEach(function(e){for(var n=y[e]||[],o=n.length;o--;){var r=n[o];r&&(i===r.namespace||"*"===i)&&(!t||t==r.callback)&&n.splice(o,1)}n.length||delete y[e]})}),d):(S(1,"ERROR: Invalid event name supplied."),d)},this.trigger=function(t,n){if(t){var o=t.trim().split("."),r=o[0],i=o[1],l=y[r];S(3,"event fired:",r,n?"->":"",n||""),l&&l.forEach(function(t,o){i&&i!==t.namespace||t.callback.call(d,new e.Event(r,t.namespace,d,n))})}else S(1,"ERROR: Invalid event name supplied.");return d},d.on("change.internal",function(e){"loglevel"!==e.what&&"tweenChanges"!==e.what&&("triggerElement"===e.what?R():"reverse"===e.what&&d.update())}).on("shift.internal",function(e){E(),d.update()});var S=this._log=function(e,t){p.loglevel>=e&&(Array.prototype.splice.call(arguments,1,0,"("+s+") ->"),r.log.apply(window,arguments))};this.addTo=function(t){return t instanceof e.Controller?l!=t&&(l&&l.removeScene(d),l=t,O(),b(!0),R(!0),E(),l.info("container").addEventListener("resize",T),t.addScene(d),d.trigger("add",{controller:l}),S(3,"added "+s+" to controller"),d.update()):S(1,"ERROR: supplied argument of 'addTo()' is not a valid ScrollMagic Controller"),d},this.enabled=function(e){return arguments.length?(w!=e&&(w=!!e,d.update(!0)),d):w},this.remove=function(){if(l){l.info("container").removeEventListener("resize",T);var e=l;l=void 0,e.removeScene(d),d.trigger("remove"),S(3,"removed "+s+" from controller")}return d},this.destroy=function(e){return d.trigger("destroy",{reset:e}),d.remove(),d.off("*.*"),S(3,"destroyed "+s+" (reset: "+(e?"true":"false")+")"),null},this.update=function(e){if(l){if(e){if(l.enabled()&&w){var t,n=l.info("scrollPos");t=p.duration>0?(n-v.start)/(v.end-v.start):n>=v.start?1:0,d.trigger("update",{startPos:v.start,endPos:v.end,scrollPos:n}),d.progress(t)}else _&&g===c&&z(!0)}else l.updateScene(d,!1)}return d},this.refresh=function(){return b(),R(),d},this.progress=function(e){if(!arguments.length)return h;var t=!1,n=g,o=l?l.info("scrollDirection"):"PAUSED",r=p.reverse||e>=h;if(0===p.duration?(t=h!=e,g=0==(h=e<1&&r?0:1)?a:c):e<0&&g!==a&&r?(h=0,g=a,t=!0):e>=0&&e<1&&r?(h=e,g=c,t=!0):e>=1&&g!==u?(h=1,g=u,t=!0):g!==c||r||z(),t){var i={progress:h,state:g,scrollDirection:o},s=g!=n,f=function(e){d.trigger(e,i)};s&&n!==c&&(f("enter"),f(n===a?"start":"end")),f("progress"),s&&g!==c&&(f(g===a?"start":"end"),f("leave"))}return d};var E=function(){v={start:m+p.offset},l&&p.triggerElement&&(v.start-=l.info("size")*p.triggerHook),v.end=v.start+p.duration},b=function(e){if(i){var t="duration";F(t,i.call(d))&&!e&&(d.trigger("change",{what:t,newval:p[t]}),d.trigger("shift",{reason:t}))}},R=function(e){var n=0,o=p.triggerElement;if(l&&(o||m>0)){if(o){if(o.parentNode){for(var i=l.info(),s=r.get.offset(i.container),a=i.vertical?"top":"left";o.parentNode.hasAttribute(t);)o=o.parentNode;var c=r.get.offset(o);i.isDocument||(s[a]-=l.scrollPos()),n=c[a]-s[a]}else S(2,"WARNING: triggerElement was removed from DOM and will be reset to",void 0),d.triggerElement(void 0)}var u=n!=m;m=n,u&&!e&&d.trigger("shift",{reason:"triggerElementPosition"})}},T=function(e){p.triggerHook>0&&d.trigger("shift",{reason:"containerResize"})},C=r.extend(o.validate,{duration:function(e){if(r.type.String(e)&&e.match(/^(\.|\d)*\d+%$/)){var t=parseFloat(e)/100;e=function(){return l?l.info("size")*t:0}}if(r.type.Function(e)){i=e;try{e=parseFloat(i.call(d))}catch(n){e=-1}}if(e=parseFloat(e),!r.type.Number(e)||e<0){if(i)throw i=void 0,['Invalid return value of supplied function for option "duration":',e];throw['Invalid value for option "duration":',e]}return e}}),O=function(e){e=arguments.length?[e]:Object.keys(C),e.forEach(function(e,t){var n;if(C[e])try{n=C[e](p[e])}catch(i){n=f[e];var o=r.type.String(i)?[i]:i;r.type.Array(o)?(o[0]="ERROR: "+o[0],o.unshift(1),S.apply(this,o)):S(1,"ERROR: Problem executing validation callback for option '"+e+"':",i.message)}finally{p[e]=n}})},F=function(e,t){var n=!1,o=p[e];return p[e]!=t&&(p[e]=t,O(e),n=o!=p[e]),n},x=function(e){d[e]||(d[e]=function(t){return arguments.length?("duration"===e&&(i=void 0),F(e,t)&&(d.trigger("change",{what:e,newval:p[e]}),o.shifts.indexOf(e)>-1&&d.trigger("shift",{reason:e})),d):p[e]})};this.controller=function(){return l},this.state=function(){return g},this.scrollOffset=function(){return v.start},this.triggerPosition=function(){var e=p.offset;return l&&(p.triggerElement?e+=m:e+=l.info("size")*d.triggerHook()),e},d.on("shift.internal",function(e){var t="duration"===e.reason;(g===u&&t||g===c&&0===p.duration)&&z(),t&&P()}).on("progress.internal",function(e){z()}).on("add.internal",function(e){P()}).on("destroy.internal",function(e){d.removePin(e.reset)});var z=function(e){if(_&&l){var t=l.info(),n=I.spacer.firstChild;if(e||g!==c){var o={position:I.inFlow?"relative":"absolute",top:0,left:0},i=r.css(n,"position")!=o.position;I.pushFollowers?p.duration>0&&(g===u&&0===parseFloat(r.css(I.spacer,"padding-top"))?i=!0:g===a&&0===parseFloat(r.css(I.spacer,"padding-bottom"))&&(i=!0)):o[t.vertical?"top":"left"]=p.duration*h,r.css(n,o),i&&P()}else{"fixed"!=r.css(n,"position")&&(r.css(n,{position:"fixed"}),P());var s=r.get.offset(I.spacer,!0),f=p.reverse||0===p.duration?t.scrollPos-v.start:Math.round(h*p.duration*10)/10;s[t.vertical?"top":"left"]+=f,r.css(I.spacer.firstChild,{top:s.top,left:s.left})}}},P=function(){if(_&&l&&I.inFlow){var e=g===c,t=l.info("vertical"),n=I.spacer.firstChild,o=r.isMarginCollapseType(r.css(I.spacer,"display")),i={};I.relSize.width||I.relSize.autoFullWidth?e?r.css(_,{width:r.get.width(I.spacer)}):r.css(_,{width:"100%"}):(i["min-width"]=r.get.width(t?_:n,!0,!0),i.width=e?i["min-width"]:"auto"),I.relSize.height?e?r.css(_,{height:r.get.height(I.spacer)-(I.pushFollowers?p.duration:0)}):r.css(_,{height:"100%"}):(i["min-height"]=r.get.height(t?n:_,!0,!o),i.height=e?i["min-height"]:"auto"),I.pushFollowers&&(i["padding"+(t?"Top":"Left")]=p.duration*h,i["padding"+(t?"Bottom":"Right")]=p.duration*(1-h)),r.css(I.spacer,i)}},N=function(){l&&_&&g===c&&!l.info("isDocument")&&z()},A=function(){l&&_&&g===c&&((I.relSize.width||I.relSize.autoFullWidth)&&r.get.width(window)!=r.get.width(I.spacer.parentNode)||I.relSize.height&&r.get.height(window)!=r.get.height(I.spacer.parentNode))&&P()},L=function(e){l&&_&&g===c&&!l.info("isDocument")&&(e.preventDefault(),l._setScrollPos(l.info("scrollPos")-((e.wheelDelta||e[l.info("vertical")?"wheelDeltaY":"wheelDeltaX"])/3||-(30*e.detail))))};this.setPin=function(e,n){var o=n&&n.hasOwnProperty("pushFollowers");if(n=r.extend({},{pushFollowers:!0,spacerClass:"scrollmagic-pin-spacer"},n),!(e=r.get.elements(e)[0]))return S(1,"ERROR calling method 'setPin()': Invalid pin element supplied."),d;if("fixed"===r.css(e,"position"))return S(1,"ERROR calling method 'setPin()': Pin does not work with elements that are positioned 'fixed'."),d;if(_){if(_===e)return d;d.removePin()}var i=(_=e).parentNode.style.display,l=["top","left","bottom","right","margin","marginLeft","marginRight","marginTop","marginBottom"];_.parentNode.style.display="none";var s="absolute"!=r.css(_,"position"),a=r.css(_,l.concat(["display"])),c=r.css(_,["width","height"]);_.parentNode.style.display=i,!s&&n.pushFollowers&&(S(2,"WARNING: If the pinned element is positioned absolutely pushFollowers will be disabled."),n.pushFollowers=!1),window.setTimeout(function(){_&&0===p.duration&&o&&n.pushFollowers&&S(2,"WARNING: pushFollowers =",!0,"has no effect, when scene duration is 0.")},0);var u=_.parentNode.insertBefore(document.createElement("div"),_),f=r.extend(a,{position:s?"relative":"absolute",boxSizing:"content-box",mozBoxSizing:"content-box",webkitBoxSizing:"content-box"});if(s||r.extend(f,r.css(_,["width","height"])),r.css(u,f),u.setAttribute(t,""),r.addClass(u,n.spacerClass),I={spacer:u,relSize:{width:"%"===c.width.slice(-1),height:"%"===c.height.slice(-1),autoFullWidth:"auto"===c.width&&s&&r.isMarginCollapseType(a.display)},pushFollowers:n.pushFollowers,inFlow:s},!_.___origStyle){_.___origStyle={};var g=_.style;l.concat(["width","height","position","boxSizing","mozBoxSizing","webkitBoxSizing"]).forEach(function(e){_.___origStyle[e]=g[e]||""})}return I.relSize.width&&r.css(u,{width:c.width}),I.relSize.height&&r.css(u,{height:c.height}),u.appendChild(_),r.css(_,{position:s?"relative":"absolute",margin:"auto",top:"auto",left:"auto",bottom:"auto",right:"auto"}),(I.relSize.width||I.relSize.autoFullWidth)&&r.css(_,{boxSizing:"border-box",mozBoxSizing:"border-box",webkitBoxSizing:"border-box"}),window.addEventListener("scroll",N),window.addEventListener("resize",N),window.addEventListener("resize",A),_.addEventListener("mousewheel",L),_.addEventListener("DOMMouseScroll",L),S(3,"added pin"),z(),d},this.removePin=function(e){if(_){if(g===c&&z(!0),e||!l){var n=I.spacer.firstChild;if(n.hasAttribute(t)){var o=I.spacer.style,i={};["margin","marginLeft","marginRight","marginTop","marginBottom"].forEach(function(e){i[e]=o[e]||""}),r.css(n,i)}I.spacer.parentNode.insertBefore(n,I.spacer),I.spacer.parentNode.removeChild(I.spacer),_.parentNode.hasAttribute(t)||(r.css(_,_.___origStyle),delete _.___origStyle)}window.removeEventListener("scroll",N),window.removeEventListener("resize",N),window.removeEventListener("resize",A),_.removeEventListener("mousewheel",L),_.removeEventListener("DOMMouseScroll",L),_=void 0,S(3,"removed pin (reset: "+(e?"true":"false")+")")}return d};var _,I,k,M=[];return d.on("destroy.internal",function(e){d.removeClassToggle(e.reset)}),this.setClassToggle=function(e,t){var n=r.get.elements(e);return 0!==n.length&&r.type.String(t)?(M.length>0&&d.removeClassToggle(),k=t,M=n,d.on("enter.internal_class leave.internal_class",function(e){var t="enter"===e.type?r.addClass:r.removeClass;M.forEach(function(e,n){t(e,k)})}),d):(S(1,"ERROR calling method 'setClassToggle()': Invalid "+(0===n.length?"element":"classes")+" supplied."),d)},this.removeClassToggle=function(e){return e&&M.forEach(function(e,t){r.removeClass(e,k)}),d.off("start.internal_class end.internal_class"),k=void 0,M=[],d},function(){for(var e in p)f.hasOwnProperty(e)||(S(2,'WARNING: Unknown option "'+e+'"'),delete p[e]);for(var t in f)x(t);O()}(),d};var o={defaults:{duration:0,offset:0,triggerElement:void 0,triggerHook:.5,reverse:!0,loglevel:2},validate:{offset:function(e){if(e=parseFloat(e),!r.type.Number(e))throw['Invalid value for option "offset":',e];return e},triggerElement:function(e){if(e=e||void 0){var t=r.get.elements(e)[0];if(t&&t.parentNode)e=t;else throw['Element defined in option "triggerElement" was not found:',e]}return e},triggerHook:function(e){var t={onCenter:.5,onEnter:1,onLeave:0};if(r.type.Number(e))e=Math.max(0,Math.min(parseFloat(e),1));else if(e in t)e=t[e];else throw['Invalid value for option "triggerHook": ',e];return e},reverse:function(e){return!!e},loglevel:function(e){if(e=parseInt(e),!r.type.Number(e)||e<0||e>3)throw['Invalid value for option "loglevel":',e];return e}},shifts:["duration","offset","triggerHook"]};e.Scene.addOption=function(t,n,r,i){t in o.defaults?e._util.log(1,"[static] ScrollMagic.Scene -> Cannot add Scene option '"+t+"', because it already exists."):(o.defaults[t]=n,o.validate[t]=r,i&&o.shifts.push(t))},e.Scene.extend=function(t){var n=this;e.Scene=function(){return n.apply(this,arguments),this.$super=r.extend({},this),t.apply(this,arguments)||this},r.extend(e.Scene,n),e.Scene.prototype=n.prototype,e.Scene.prototype.constructor=e.Scene},e.Event=function(e,t,n,o){for(var r in o=o||{})this[r]=o[r];return this.type=e,this.target=this.currentTarget=n,this.namespace=t||"",this.timeStamp=this.timestamp=Date.now(),this};var r=e._util=function(e){var t,n={},o=function(e){return parseFloat(e)||0},r=function(t){return t.currentStyle?t.currentStyle:e.getComputedStyle(t)},i=function(t,n,i,l){if((n=n===document?e:n)===e)l=!1;else if(!g.DomElement(n))return 0;t=t.charAt(0).toUpperCase()+t.substr(1).toLowerCase();var s=(i?n["offset"+t]||n["outer"+t]:n["client"+t]||n["inner"+t])||0;if(i&&l){var a=r(n);s+="Height"===t?o(a.marginTop)+o(a.marginBottom):o(a.marginLeft)+o(a.marginRight)}return s},l=function(e){return e.replace(/^[^a-z]+([a-z])/g,"$1").replace(/-([a-z])/g,function(e){return e[1].toUpperCase()})};n.extend=function(e){for(t=1,e=e||{};t<arguments.length;t++)if(arguments[t])for(var n in arguments[t])arguments[t].hasOwnProperty(n)&&(e[n]=arguments[t][n]);return e},n.isMarginCollapseType=function(e){return["block","flex","list-item","table","-webkit-box"].indexOf(e)>-1};var s=0,a=["ms","moz","webkit","o"],c=e.requestAnimationFrame,u=e.cancelAnimationFrame;for(t=0;!c&&t<a.length;++t)c=e[a[t]+"RequestAnimationFrame"],u=e[a[t]+"CancelAnimationFrame"]||e[a[t]+"CancelRequestAnimationFrame"];c||(c=function(t){var n=new Date().getTime(),o=Math.max(0,16-(n-s)),r=e.setTimeout(function(){t(n+o)},o);return s=n+o,r}),u||(u=function(t){e.clearTimeout(t)}),n.rAF=c.bind(e),n.cAF=u.bind(e);var f=["error","warn","log"],d=e.console||{};for(t=0,d.log=d.log||function(){};t<f.length;t++){var p=f[t];d[p]||(d[p]=d.log)}n.log=function(e){(e>f.length||e<=0)&&(e=f.length);var t=new Date,n=("0"+t.getHours()).slice(-2)+":"+("0"+t.getMinutes()).slice(-2)+":"+("0"+t.getSeconds()).slice(-2)+":"+("00"+t.getMilliseconds()).slice(-3),o=f[e-1],r=Array.prototype.splice.call(arguments,1),i=Function.prototype.bind.call(d[o],d);r.unshift(n),i.apply(d,r)};var g=n.type=function(e){return Object.prototype.toString.call(e).replace(/^\[object (.+)\]$/,"$1").toLowerCase()};g.String=function(e){return"string"===g(e)},g.Function=function(e){return"function"===g(e)},g.Array=function(e){return Array.isArray(e)},g.Number=function(e){return!g.Array(e)&&e-parseFloat(e)+1>=0},g.DomElement=function(e){return"object"==typeof HTMLElement||"function"==typeof HTMLElement?e instanceof HTMLElement||e instanceof SVGElement:e&&"object"==typeof e&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName};var h=n.get={};return h.elements=function(t){var n=[];if(g.String(t))try{t=document.querySelectorAll(t)}catch(o){return n}if("nodelist"===g(t)||g.Array(t)||t instanceof NodeList)for(var r=0,i=n.length=t.length;r<i;r++){var l=t[r];n[r]=g.DomElement(l)?l:h.elements(l)}else(g.DomElement(t)||t===document||t===e)&&(n=[t]);return n},h.scrollTop=function(t){return t&&"number"==typeof t.scrollTop?t.scrollTop:e.pageYOffset||0},h.scrollLeft=function(t){return t&&"number"==typeof t.scrollLeft?t.scrollLeft:e.pageXOffset||0},h.width=function(e,t,n){return i("width",e,t,n)},h.height=function(e,t,n){return i("height",e,t,n)},h.offset=function(e,t){var n={top:0,left:0};if(e&&e.getBoundingClientRect){var o=e.getBoundingClientRect();n.top=o.top,n.left=o.left,t||(n.top+=h.scrollTop(),n.left+=h.scrollLeft())}return n},n.addClass=function(e,t){t&&(e.classList?e.classList.add(t):e.className+=" "+t)},n.removeClass=function(e,t){t&&(e.classList?e.classList.remove(t):e.className=e.className.replace(RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," "))},n.css=function(e,t){if(g.String(t))return r(e)[l(t)];if(g.Array(t)){var n={},o=r(e);return t.forEach(function(e,t){n[e]=o[l(e)]}),n}for(var i in t){var s=t[i];s==parseFloat(s)&&(s+="px"),e.style[l(i)]=s}},n}(window||{});return e.Scene.prototype.addIndicators=function(){return e._util.log(1,"(ScrollMagic.Scene) -> ERROR calling addIndicators() due to missing Plugin 'debug.addIndicators'. Please make sure to include plugins/debug.addIndicators.js"),this},e.Scene.prototype.removeIndicators=function(){return e._util.log(1,"(ScrollMagic.Scene) -> ERROR calling removeIndicators() due to missing Plugin 'debug.addIndicators'. Please make sure to include plugins/debug.addIndicators.js"),this},e.Scene.prototype.setTween=function(){return e._util.log(1,"(ScrollMagic.Scene) -> ERROR calling setTween() due to missing Plugin 'animation.gsap'. Please make sure to include plugins/animation.gsap.js"),this},e.Scene.prototype.removeTween=function(){return e._util.log(1,"(ScrollMagic.Scene) -> ERROR calling removeTween() due to missing Plugin 'animation.gsap'. Please make sure to include plugins/animation.gsap.js"),this},e.Scene.prototype.setVelocity=function(){return e._util.log(1,"(ScrollMagic.Scene) -> ERROR calling setVelocity() due to missing Plugin 'animation.velocity'. Please make sure to include plugins/animation.velocity.js"),this},e.Scene.prototype.removeVelocity=function(){return e._util.log(1,"(ScrollMagic.Scene) -> ERROR calling removeVelocity() due to missing Plugin 'animation.velocity'. Please make sure to include plugins/animation.velocity.js"),this},e})?r.call(t,n,t,e):r)&&(e.exports=o)}}]);