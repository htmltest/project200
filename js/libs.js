function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}!function(e){"function"==typeof define&&define.amd?define(["jquery"],function(t){return e(t)}):"object"==typeof exports?module.exports=e(require("jquery")):e(jQuery)}(function(S){function e(t){this.$container,this.constraints=null,this.__$tooltip,this.__init(t)}function s(i,o){var n=!0;return S.each(i,function(t,e){return void 0===o[t]||i[t]!==o[t]?n=!1:void 0}),n}function d(t){var e=t.attr("id"),i=e?D.window.document.getElementById(e):null;return i?i===t[0]:S.contains(D.window.document.body,t[0])}function t(){this.__$emitterPrivate=S({}),this.__$emitterPublic=S({}),this.__instancesLatestArr=[],this.__plugins={},this._env=D}var p={animation:"fade",animationDuration:350,content:null,contentAsHTML:!1,contentCloning:!1,debug:!0,delay:300,delayTouch:[300,500],functionInit:null,functionBefore:null,functionReady:null,functionAfter:null,functionFormat:null,IEmin:6,interactive:!1,multiple:!1,parent:null,plugins:["sideTip"],repositionOnScroll:!1,restoration:"none",selfDestruction:!0,theme:[],timer:0,trackerInterval:500,trackOrigin:!1,trackTooltip:!1,trigger:"hover",triggerClose:{click:!1,mouseleave:!1,originClick:!1,scroll:!1,tap:!1,touchleave:!1},triggerOpen:{click:!1,mouseenter:!1,tap:!1,touchstart:!1},updateAnimation:"rotate",zIndex:9999999},n="undefined"!=typeof window?window:null,D={hasTouchCapability:!(!n||!("ontouchstart"in n||n.DocumentTouch&&n.document instanceof n.DocumentTouch||n.navigator.maxTouchPoints)),hasTransitions:function(){if(!n)return!1;var t=(n.document.body||n.document.documentElement).style,e="transition",i=["Moz","Webkit","Khtml","O","ms"];if("string"==typeof t[e])return!0;e=e.charAt(0).toUpperCase()+e.substr(1);for(var o=0;o<i.length;o++)if("string"==typeof t[i[o]+e])return!0;return!1}(),IE:!1,semVer:"4.2.8",window:n};t.prototype={__bridge:function(t,i,o){if(!i[o]){function e(){}e.prototype=t;var n=new e;n.__init&&n.__init(i),S.each(t,function(t,e){0!=t.indexOf("__")&&(i[t]?p.debug&&console.log("The "+t+" method of the "+o+" plugin conflicts with another plugin or native methods"):(i[t]=function(){return n[t].apply(n,Array.prototype.slice.apply(arguments))},i[t].bridged=n))}),i[o]=n}return this},__setWindow:function(t){return D.window=t,this},_getRuler:function(t){return new e(t)},_off:function(){return this.__$emitterPrivate.off.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments)),this},_on:function(){return this.__$emitterPrivate.on.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments)),this},_one:function(){return this.__$emitterPrivate.one.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments)),this},_plugin:function(t){var e=this;if("string"==typeof t){var i=t,o=null;return 0<i.indexOf(".")?o=e.__plugins[i]:S.each(e.__plugins,function(t,e){return e.name.substring(e.name.length-i.length-1)=="."+i?(o=e,!1):void 0}),o}if(t.name.indexOf(".")<0)throw new Error("Plugins must be namespaced");return(e.__plugins[t.name]=t).core&&e.__bridge(t.core,e,t.name),this},_trigger:function(){var t=Array.prototype.slice.apply(arguments);return"string"==typeof t[0]&&(t[0]={type:t[0]}),this.__$emitterPrivate.trigger.apply(this.__$emitterPrivate,t),this.__$emitterPublic.trigger.apply(this.__$emitterPublic,t),this},instances:function(t){var o=[];return S(t||".tooltipstered").each(function(){var i=S(this),t=i.data("tooltipster-ns");t&&S.each(t,function(t,e){o.push(i.data(e))})}),o},instancesLatest:function(){return this.__instancesLatestArr},off:function(){return this.__$emitterPublic.off.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this},on:function(){return this.__$emitterPublic.on.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this},one:function(){return this.__$emitterPublic.one.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this},origins:function(t){return S((t?t+" ":"")+".tooltipstered").toArray()},setDefaults:function(t){return S.extend(p,t),this},triggerHandler:function(){return this.__$emitterPublic.triggerHandler.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this}},S.tooltipster=new t,S.Tooltipster=function(t,e){this.__callbacks={close:[],open:[]},this.__closingTime,this.__Content,this.__contentBcr,this.__destroyed=!1,this.__$emitterPrivate=S({}),this.__$emitterPublic=S({}),this.__enabled=!0,this.__garbageCollector,this.__Geometry,this.__lastPosition,this.__namespace="tooltipster-"+Math.round(1e6*Math.random()),this.__options,this.__$originParents,this.__pointerIsOverOrigin=!1,this.__previousThemes=[],this.__state="closed",this.__timeouts={close:[],open:null},this.__touchEvents=[],this.__tracker=null,this._$origin,this._$tooltip,this.__init(t,e)},S.Tooltipster.prototype={__init:function(t,e){var i=this;if(i._$origin=S(t),i.__options=S.extend(!0,{},p,e),i.__optionsFormat(),!D.IE||D.IE>=i.__options.IEmin){var o=null;if(void 0===i._$origin.data("tooltipster-initialTitle")&&(void 0===(o=i._$origin.attr("title"))&&(o=null),i._$origin.data("tooltipster-initialTitle",o)),null!==i.__options.content)i.__contentSet(i.__options.content);else{var n,s=i._$origin.attr("data-tooltip-content");s&&(n=S(s)),n&&n[0]?i.__contentSet(n.first()):i.__contentSet(o)}i._$origin.removeAttr("title").addClass("tooltipstered"),i.__prepareOrigin(),i.__prepareGC(),S.each(i.__options.plugins,function(t,e){i._plug(e)}),D.hasTouchCapability&&S(D.window.document.body).on("touchmove."+i.__namespace+"-triggerOpen",function(t){i._touchRecordEvent(t)}),i._on("created",function(){i.__prepareTooltip()})._on("repositioned",function(t){i.__lastPosition=t.position})}else i.__options.disabled=!0},__contentInsert:function(){var t=this,e=t._$tooltip.find(".tooltipster-content"),i=t.__Content;return t._trigger({type:"format",content:t.__Content,format:function(t){i=t}}),t.__options.functionFormat&&(i=t.__options.functionFormat.call(t,t,{origin:t._$origin[0]},t.__Content)),"string"!=typeof i||t.__options.contentAsHTML?e.empty().append(i):e.text(i),t},__contentSet:function(t){return t instanceof S&&this.__options.contentCloning&&(t=t.clone(!0)),this.__Content=t,this._trigger({type:"updated",content:t}),this},__destroyError:function(){throw new Error("This tooltip has been destroyed and cannot execute your method call.")},__geometry:function(){var t=this,e=t._$origin,i=t._$origin.is("area");if(i){var o=t._$origin.parent().attr("name");e=S('img[usemap="#'+o+'"]')}var n=e[0].getBoundingClientRect(),s=S(D.window.document),a=S(D.window),r=e,l={available:{document:null,window:null},document:{size:{height:s.height(),width:s.width()}},window:{scroll:{left:D.window.scrollX||D.window.document.documentElement.scrollLeft,top:D.window.scrollY||D.window.document.documentElement.scrollTop},size:{height:a.height(),width:a.width()}},origin:{fixedLineage:!1,offset:{},size:{height:n.bottom-n.top,width:n.right-n.left},usemapImage:i?e[0]:null,windowOffset:{bottom:n.bottom,left:n.left,right:n.right,top:n.top}}};if(i){var c=t._$origin.attr("shape"),d=t._$origin.attr("coords");if(d&&(d=d.split(","),S.map(d,function(t,e){d[e]=parseInt(t)})),"default"!=c)switch(c){case"circle":var p=d[0],u=d[1],h=d[2],f=u-h,g=p-h;l.origin.size.height=2*h,l.origin.size.width=l.origin.size.height,l.origin.windowOffset.left+=g,l.origin.windowOffset.top+=f;break;case"rect":var m=d[0],_=d[1],y=d[2],v=d[3];l.origin.size.height=v-_,l.origin.size.width=y-m,l.origin.windowOffset.left+=m,l.origin.windowOffset.top+=_;break;case"poly":for(var b=0,w=0,k=0,x=0,C="even",T=0;T<d.length;T++){var $=d[T];C="even"==C?(k<$&&(k=$,0===T&&(b=k)),$<b&&(b=$),"odd"):(x<$&&(x=$,1==T&&(w=x)),$<w&&(w=$),"even")}l.origin.size.height=x-w,l.origin.size.width=k-b,l.origin.windowOffset.left+=b,l.origin.windowOffset.top+=w}}for(t._trigger({type:"geometry",edit:function(t){l.origin.size.height=t.height,l.origin.windowOffset.left=t.left,l.origin.windowOffset.top=t.top,l.origin.size.width=t.width},geometry:{height:l.origin.size.height,left:l.origin.windowOffset.left,top:l.origin.windowOffset.top,width:l.origin.size.width}}),l.origin.windowOffset.right=l.origin.windowOffset.left+l.origin.size.width,l.origin.windowOffset.bottom=l.origin.windowOffset.top+l.origin.size.height,l.origin.offset.left=l.origin.windowOffset.left+l.window.scroll.left,l.origin.offset.top=l.origin.windowOffset.top+l.window.scroll.top,l.origin.offset.bottom=l.origin.offset.top+l.origin.size.height,l.origin.offset.right=l.origin.offset.left+l.origin.size.width,l.available.document={bottom:{height:l.document.size.height-l.origin.offset.bottom,width:l.document.size.width},left:{height:l.document.size.height,width:l.origin.offset.left},right:{height:l.document.size.height,width:l.document.size.width-l.origin.offset.right},top:{height:l.origin.offset.top,width:l.document.size.width}},l.available.window={bottom:{height:Math.max(l.window.size.height-Math.max(l.origin.windowOffset.bottom,0),0),width:l.window.size.width},left:{height:l.window.size.height,width:Math.max(l.origin.windowOffset.left,0)},right:{height:l.window.size.height,width:Math.max(l.window.size.width-Math.max(l.origin.windowOffset.right,0),0)},top:{height:Math.max(l.origin.windowOffset.top,0),width:l.window.size.width}};"html"!=r[0].tagName.toLowerCase();){if("fixed"==r.css("position")){l.origin.fixedLineage=!0;break}r=r.parent()}return l},__optionsFormat:function(){return"number"==typeof this.__options.animationDuration&&(this.__options.animationDuration=[this.__options.animationDuration,this.__options.animationDuration]),"number"==typeof this.__options.delay&&(this.__options.delay=[this.__options.delay,this.__options.delay]),"number"==typeof this.__options.delayTouch&&(this.__options.delayTouch=[this.__options.delayTouch,this.__options.delayTouch]),"string"==typeof this.__options.theme&&(this.__options.theme=[this.__options.theme]),null===this.__options.parent?this.__options.parent=S(D.window.document.body):"string"==typeof this.__options.parent&&(this.__options.parent=S(this.__options.parent)),"hover"==this.__options.trigger?(this.__options.triggerOpen={mouseenter:!0,touchstart:!0},this.__options.triggerClose={mouseleave:!0,originClick:!0,touchleave:!0}):"click"==this.__options.trigger&&(this.__options.triggerOpen={click:!0,tap:!0},this.__options.triggerClose={click:!0,tap:!0}),this._trigger("options"),this},__prepareGC:function(){var t=this;return t.__options.selfDestruction?t.__garbageCollector=setInterval(function(){var i=(new Date).getTime();t.__touchEvents=S.grep(t.__touchEvents,function(t,e){return 6e4<i-t.time}),d(t._$origin)||t.close(function(){t.destroy()})},2e4):clearInterval(t.__garbageCollector),t},__prepareOrigin:function(){var e=this;if(e._$origin.off("."+e.__namespace+"-triggerOpen"),D.hasTouchCapability&&e._$origin.on("touchstart."+e.__namespace+"-triggerOpen touchend."+e.__namespace+"-triggerOpen touchcancel."+e.__namespace+"-triggerOpen",function(t){e._touchRecordEvent(t)}),e.__options.triggerOpen.click||e.__options.triggerOpen.tap&&D.hasTouchCapability){var t="";e.__options.triggerOpen.click&&(t+="click."+e.__namespace+"-triggerOpen "),e.__options.triggerOpen.tap&&D.hasTouchCapability&&(t+="touchend."+e.__namespace+"-triggerOpen"),e._$origin.on(t,function(t){e._touchIsMeaningfulEvent(t)&&e._open(t)})}if(e.__options.triggerOpen.mouseenter||e.__options.triggerOpen.touchstart&&D.hasTouchCapability){t="";e.__options.triggerOpen.mouseenter&&(t+="mouseenter."+e.__namespace+"-triggerOpen "),e.__options.triggerOpen.touchstart&&D.hasTouchCapability&&(t+="touchstart."+e.__namespace+"-triggerOpen"),e._$origin.on(t,function(t){!e._touchIsTouchEvent(t)&&e._touchIsEmulatedEvent(t)||(e.__pointerIsOverOrigin=!0,e._openShortly(t))})}if(e.__options.triggerClose.mouseleave||e.__options.triggerClose.touchleave&&D.hasTouchCapability){t="";e.__options.triggerClose.mouseleave&&(t+="mouseleave."+e.__namespace+"-triggerOpen "),e.__options.triggerClose.touchleave&&D.hasTouchCapability&&(t+="touchend."+e.__namespace+"-triggerOpen touchcancel."+e.__namespace+"-triggerOpen"),e._$origin.on(t,function(t){e._touchIsMeaningfulEvent(t)&&(e.__pointerIsOverOrigin=!1)})}return e},__prepareTooltip:function(){var i=this,t=i.__options.interactive?"auto":"";return i._$tooltip.attr("id",i.__namespace).css({"pointer-events":t,zIndex:i.__options.zIndex}),S.each(i.__previousThemes,function(t,e){i._$tooltip.removeClass(e)}),S.each(i.__options.theme,function(t,e){i._$tooltip.addClass(e)}),i.__previousThemes=S.merge([],i.__options.theme),i},__scrollHandler:function(t){var e=this;if(e.__options.triggerClose.scroll)e._close(t);else if(d(e._$origin)&&d(e._$tooltip)){var a=null;if(t.target===D.window.document)e.__Geometry.origin.fixedLineage||e.__options.repositionOnScroll&&e.reposition(t);else{a=e.__geometry();var r=!1;if("fixed"!=e._$origin.css("position")&&e.__$originParents.each(function(t,e){var i=S(e),o=i.css("overflow-x"),n=i.css("overflow-y");if("visible"!=o||"visible"!=n){var s=e.getBoundingClientRect();if("visible"!=o&&(a.origin.windowOffset.left<s.left||a.origin.windowOffset.right>s.right))return!(r=!0);if("visible"!=n&&(a.origin.windowOffset.top<s.top||a.origin.windowOffset.bottom>s.bottom))return!(r=!0)}return"fixed"!=i.css("position")&&void 0}),r)e._$tooltip.css("visibility","hidden");else if(e._$tooltip.css("visibility","visible"),e.__options.repositionOnScroll)e.reposition(t);else{var i=a.origin.offset.left-e.__Geometry.origin.offset.left,o=a.origin.offset.top-e.__Geometry.origin.offset.top;e._$tooltip.css({left:e.__lastPosition.coord.left+i,top:e.__lastPosition.coord.top+o})}}e._trigger({type:"scroll",event:t,geo:a})}return e},__stateSet:function(t){return this.__state=t,this._trigger({type:"state",state:t}),this},__timeoutsClear:function(){return clearTimeout(this.__timeouts.open),this.__timeouts.open=null,S.each(this.__timeouts.close,function(t,e){clearTimeout(e)}),this.__timeouts.close=[],this},__trackerStart:function(){var o=this,n=o._$tooltip.find(".tooltipster-content");return o.__options.trackTooltip&&(o.__contentBcr=n[0].getBoundingClientRect()),o.__tracker=setInterval(function(){if(d(o._$origin)&&d(o._$tooltip)){if(o.__options.trackOrigin){var t=o.__geometry(),e=!1;s(t.origin.size,o.__Geometry.origin.size)&&(o.__Geometry.origin.fixedLineage?s(t.origin.windowOffset,o.__Geometry.origin.windowOffset)&&(e=!0):s(t.origin.offset,o.__Geometry.origin.offset)&&(e=!0)),e||(o.__options.triggerClose.mouseleave?o._close():o.reposition())}if(o.__options.trackTooltip){var i=n[0].getBoundingClientRect();i.height===o.__contentBcr.height&&i.width===o.__contentBcr.width||(o.reposition(),o.__contentBcr=i)}}else o._close()},o.__options.trackerInterval),o},_close:function(i,t,e){var o=this,n=!0;if(o._trigger({type:"close",event:i,stop:function(){n=!1}}),n||e){t&&o.__callbacks.close.push(t),o.__callbacks.open=[],o.__timeoutsClear();function s(){S.each(o.__callbacks.close,function(t,e){e.call(o,o,{event:i,origin:o._$origin[0]})}),o.__callbacks.close=[]}if("closed"!=o.__state){var a=!0,r=(new Date).getTime()+o.__options.animationDuration[1];if("disappearing"==o.__state&&r>o.__closingTime&&0<o.__options.animationDuration[1]&&(a=!1),a){o.__closingTime=r,"disappearing"!=o.__state&&o.__stateSet("disappearing");function l(){clearInterval(o.__tracker),o._trigger({type:"closing",event:i}),o._$tooltip.off("."+o.__namespace+"-triggerClose").removeClass("tooltipster-dying"),S(D.window).off("."+o.__namespace+"-triggerClose"),o.__$originParents.each(function(t,e){S(e).off("scroll."+o.__namespace+"-triggerClose")}),o.__$originParents=null,S(D.window.document.body).off("."+o.__namespace+"-triggerClose"),o._$origin.off("."+o.__namespace+"-triggerClose"),o._off("dismissable"),o.__stateSet("closed"),o._trigger({type:"after",event:i}),o.__options.functionAfter&&o.__options.functionAfter.call(o,o,{event:i,origin:o._$origin[0]}),s()}D.hasTransitions?(o._$tooltip.css({"-moz-animation-duration":o.__options.animationDuration[1]+"ms","-ms-animation-duration":o.__options.animationDuration[1]+"ms","-o-animation-duration":o.__options.animationDuration[1]+"ms","-webkit-animation-duration":o.__options.animationDuration[1]+"ms","animation-duration":o.__options.animationDuration[1]+"ms","transition-duration":o.__options.animationDuration[1]+"ms"}),o._$tooltip.clearQueue().removeClass("tooltipster-show").addClass("tooltipster-dying"),0<o.__options.animationDuration[1]&&o._$tooltip.delay(o.__options.animationDuration[1]),o._$tooltip.queue(l)):o._$tooltip.stop().fadeOut(o.__options.animationDuration[1],l)}}else s()}return o},_off:function(){return this.__$emitterPrivate.off.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments)),this},_on:function(){return this.__$emitterPrivate.on.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments)),this},_one:function(){return this.__$emitterPrivate.one.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments)),this},_open:function(t,e){var i=this;if(!i.__destroying&&d(i._$origin)&&i.__enabled){var o=!0;if("closed"==i.__state&&(i._trigger({type:"before",event:t,stop:function(){o=!1}}),o&&i.__options.functionBefore&&(o=i.__options.functionBefore.call(i,i,{event:t,origin:i._$origin[0]}))),!1!==o&&null!==i.__Content){e&&i.__callbacks.open.push(e),i.__callbacks.close=[],i.__timeoutsClear();function n(){"stable"!=i.__state&&i.__stateSet("stable"),S.each(i.__callbacks.open,function(t,e){e.call(i,i,{origin:i._$origin[0],tooltip:i._$tooltip[0]})}),i.__callbacks.open=[]}var s;if("closed"!==i.__state)s=0,"disappearing"===i.__state?(i.__stateSet("appearing"),D.hasTransitions?(i._$tooltip.clearQueue().removeClass("tooltipster-dying").addClass("tooltipster-show"),0<i.__options.animationDuration[0]&&i._$tooltip.delay(i.__options.animationDuration[0]),i._$tooltip.queue(n)):i._$tooltip.stop().fadeIn(n)):"stable"==i.__state&&n();else{if(i.__stateSet("appearing"),s=i.__options.animationDuration[0],i.__contentInsert(),i.reposition(t,!0),D.hasTransitions?(i._$tooltip.addClass("tooltipster-"+i.__options.animation).addClass("tooltipster-initial").css({"-moz-animation-duration":i.__options.animationDuration[0]+"ms","-ms-animation-duration":i.__options.animationDuration[0]+"ms","-o-animation-duration":i.__options.animationDuration[0]+"ms","-webkit-animation-duration":i.__options.animationDuration[0]+"ms","animation-duration":i.__options.animationDuration[0]+"ms","transition-duration":i.__options.animationDuration[0]+"ms"}),setTimeout(function(){"closed"!=i.__state&&(i._$tooltip.addClass("tooltipster-show").removeClass("tooltipster-initial"),0<i.__options.animationDuration[0]&&i._$tooltip.delay(i.__options.animationDuration[0]),i._$tooltip.queue(n))},0)):i._$tooltip.css("display","none").fadeIn(i.__options.animationDuration[0],n),i.__trackerStart(),S(D.window).on("resize."+i.__namespace+"-triggerClose",function(t){var e=S(document.activeElement);(e.is("input")||e.is("textarea"))&&S.contains(i._$tooltip[0],e[0])||i.reposition(t)}).on("scroll."+i.__namespace+"-triggerClose",function(t){i.__scrollHandler(t)}),i.__$originParents=i._$origin.parents(),i.__$originParents.each(function(t,e){S(e).on("scroll."+i.__namespace+"-triggerClose",function(t){i.__scrollHandler(t)})}),i.__options.triggerClose.mouseleave||i.__options.triggerClose.touchleave&&D.hasTouchCapability){i._on("dismissable",function(t){t.dismissable?t.delay?(c=setTimeout(function(){i._close(t.event)},t.delay),i.__timeouts.close.push(c)):i._close(t):clearTimeout(c)});var a=i._$origin,r="",l="",c=null;i.__options.interactive&&(a=a.add(i._$tooltip)),i.__options.triggerClose.mouseleave&&(r+="mouseenter."+i.__namespace+"-triggerClose ",l+="mouseleave."+i.__namespace+"-triggerClose "),i.__options.triggerClose.touchleave&&D.hasTouchCapability&&(r+="touchstart."+i.__namespace+"-triggerClose",l+="touchend."+i.__namespace+"-triggerClose touchcancel."+i.__namespace+"-triggerClose"),a.on(l,function(t){if(i._touchIsTouchEvent(t)||!i._touchIsEmulatedEvent(t)){var e="mouseleave"==t.type?i.__options.delay:i.__options.delayTouch;i._trigger({delay:e[1],dismissable:!0,event:t,type:"dismissable"})}}).on(r,function(t){!i._touchIsTouchEvent(t)&&i._touchIsEmulatedEvent(t)||i._trigger({dismissable:!1,event:t,type:"dismissable"})})}i.__options.triggerClose.originClick&&i._$origin.on("click."+i.__namespace+"-triggerClose",function(t){i._touchIsTouchEvent(t)||i._touchIsEmulatedEvent(t)||i._close(t)}),(i.__options.triggerClose.click||i.__options.triggerClose.tap&&D.hasTouchCapability)&&setTimeout(function(){if("closed"!=i.__state){var t="",e=S(D.window.document.body);i.__options.triggerClose.click&&(t+="click."+i.__namespace+"-triggerClose "),i.__options.triggerClose.tap&&D.hasTouchCapability&&(t+="touchend."+i.__namespace+"-triggerClose"),e.on(t,function(t){i._touchIsMeaningfulEvent(t)&&(i._touchRecordEvent(t),i.__options.interactive&&S.contains(i._$tooltip[0],t.target)||i._close(t))}),i.__options.triggerClose.tap&&D.hasTouchCapability&&e.on("touchstart."+i.__namespace+"-triggerClose",function(t){i._touchRecordEvent(t)})}},0),i._trigger("ready"),i.__options.functionReady&&i.__options.functionReady.call(i,i,{origin:i._$origin[0],tooltip:i._$tooltip[0]})}if(0<i.__options.timer){c=setTimeout(function(){i._close()},i.__options.timer+s);i.__timeouts.close.push(c)}}}return i},_openShortly:function(t){var e=this,i=!0;if("stable"!=e.__state&&"appearing"!=e.__state&&!e.__timeouts.open&&(e._trigger({type:"start",event:t,stop:function(){i=!1}}),i)){var o=0==t.type.indexOf("touch")?e.__options.delayTouch:e.__options.delay;o[0]?e.__timeouts.open=setTimeout(function(){e.__timeouts.open=null,e.__pointerIsOverOrigin&&e._touchIsMeaningfulEvent(t)?(e._trigger("startend"),e._open(t)):e._trigger("startcancel")},o[0]):(e._trigger("startend"),e._open(t))}return e},_optionsExtract:function(t,e){var o=this,i=S.extend(!0,{},e),n=o.__options[t];return n||(n={},S.each(e,function(t,e){var i=o.__options[t];void 0!==i&&(n[t]=i)})),S.each(i,function(t,e){void 0!==n[t]&&("object"!=typeof e||e instanceof Array||null==e||"object"!=typeof n[t]||n[t]instanceof Array||null==n[t]?i[t]=n[t]:S.extend(i[t],n[t]))}),i},_plug:function(t){var e=S.tooltipster._plugin(t);if(!e)throw new Error('The "'+t+'" plugin is not defined');return e.instance&&S.tooltipster.__bridge(e.instance,this,e.name),this},_touchIsEmulatedEvent:function(t){for(var e=!1,i=(new Date).getTime(),o=this.__touchEvents.length-1;0<=o;o--){var n=this.__touchEvents[o];if(!(i-n.time<500))break;n.target===t.target&&(e=!0)}return e},_touchIsMeaningfulEvent:function(t){return this._touchIsTouchEvent(t)&&!this._touchSwiped(t.target)||!this._touchIsTouchEvent(t)&&!this._touchIsEmulatedEvent(t)},_touchIsTouchEvent:function(t){return 0==t.type.indexOf("touch")},_touchRecordEvent:function(t){return this._touchIsTouchEvent(t)&&(t.time=(new Date).getTime(),this.__touchEvents.push(t)),this},_touchSwiped:function(t){for(var e=!1,i=this.__touchEvents.length-1;0<=i;i--){var o=this.__touchEvents[i];if("touchmove"==o.type){e=!0;break}if("touchstart"==o.type&&t===o.target)break}return e},_trigger:function(){var t=Array.prototype.slice.apply(arguments);return"string"==typeof t[0]&&(t[0]={type:t[0]}),t[0].instance=this,t[0].origin=this._$origin?this._$origin[0]:null,t[0].tooltip=this._$tooltip?this._$tooltip[0]:null,this.__$emitterPrivate.trigger.apply(this.__$emitterPrivate,t),S.tooltipster._trigger.apply(S.tooltipster,t),this.__$emitterPublic.trigger.apply(this.__$emitterPublic,t),this},_unplug:function(i){var o=this;if(o[i]){var t=S.tooltipster._plugin(i);t.instance&&S.each(t.instance,function(t,e){o[t]&&o[t].bridged===o[i]&&delete o[t]}),o[i].__destroy&&o[i].__destroy(),delete o[i]}return o},close:function(t){return this.__destroyed?this.__destroyError():this._close(null,t),this},content:function(t){var e=this;if(void 0===t)return e.__Content;if(e.__destroyed)e.__destroyError();else if(e.__contentSet(t),null!==e.__Content){if("closed"!==e.__state&&(e.__contentInsert(),e.reposition(),e.__options.updateAnimation))if(D.hasTransitions){var i=e.__options.updateAnimation;e._$tooltip.addClass("tooltipster-update-"+i),setTimeout(function(){"closed"!=e.__state&&e._$tooltip.removeClass("tooltipster-update-"+i)},1e3)}else e._$tooltip.fadeTo(200,.5,function(){"closed"!=e.__state&&e._$tooltip.fadeTo(200,1)})}else e._close();return e},destroy:function(){var i=this;if(i.__destroyed)i.__destroyError();else{"closed"!=i.__state?i.option("animationDuration",0)._close(null,null,!0):i.__timeoutsClear(),i._trigger("destroy"),i.__destroyed=!0,i._$origin.removeData(i.__namespace).off("."+i.__namespace+"-triggerOpen"),S(D.window.document.body).off("."+i.__namespace+"-triggerOpen");var t=i._$origin.data("tooltipster-ns");if(t)if(1===t.length){var e=null;"previous"==i.__options.restoration?e=i._$origin.data("tooltipster-initialTitle"):"current"==i.__options.restoration&&(e="string"==typeof i.__Content?i.__Content:S("<div></div>").append(i.__Content).html()),e&&i._$origin.attr("title",e),i._$origin.removeClass("tooltipstered"),i._$origin.removeData("tooltipster-ns").removeData("tooltipster-initialTitle")}else t=S.grep(t,function(t,e){return t!==i.__namespace}),i._$origin.data("tooltipster-ns",t);i._trigger("destroyed"),i._off(),i.off(),i.__Content=null,i.__$emitterPrivate=null,i.__$emitterPublic=null,i.__options.parent=null,i._$origin=null,i._$tooltip=null,S.tooltipster.__instancesLatestArr=S.grep(S.tooltipster.__instancesLatestArr,function(t,e){return i!==t}),clearInterval(i.__garbageCollector)}return i},disable:function(){return this.__destroyed?this.__destroyError():(this._close(),this.__enabled=!1),this},elementOrigin:function(){return this.__destroyed?void this.__destroyError():this._$origin[0]},elementTooltip:function(){return this._$tooltip?this._$tooltip[0]:null},enable:function(){return this.__enabled=!0,this},hide:function(t){return this.close(t)},instance:function(){return this},off:function(){return this.__destroyed||this.__$emitterPublic.off.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this},on:function(){return this.__destroyed?this.__destroyError():this.__$emitterPublic.on.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this},one:function(){return this.__destroyed?this.__destroyError():this.__$emitterPublic.one.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this},open:function(t){return this.__destroyed?this.__destroyError():this._open(null,t),this},option:function(t,e){return void 0===e?this.__options[t]:(this.__destroyed?this.__destroyError():(this.__options[t]=e,this.__optionsFormat(),0<=S.inArray(t,["trigger","triggerClose","triggerOpen"])&&this.__prepareOrigin(),"selfDestruction"===t&&this.__prepareGC()),this)},reposition:function(t,e){var i=this;return i.__destroyed?i.__destroyError():"closed"!=i.__state&&d(i._$origin)&&(e||d(i._$tooltip))&&(e||i._$tooltip.detach(),i.__Geometry=i.__geometry(),i._trigger({type:"reposition",event:t,helper:{geo:i.__Geometry}})),i},show:function(t){return this.open(t)},status:function(){return{destroyed:this.__destroyed,enabled:this.__enabled,open:"closed"!==this.__state,state:this.__state}},triggerHandler:function(){return this.__destroyed?this.__destroyError():this.__$emitterPublic.triggerHandler.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this}},S.fn.tooltipster=function(){var n=Array.prototype.slice.apply(arguments),o="You are using a single HTML element as content for several tooltips. You probably want to set the contentCloning option to TRUE.";if(0===this.length)return this;if("string"==typeof n[0]){var s="#*$~&";return this.each(function(){var t=S(this).data("tooltipster-ns"),e=t?S(this).data(t[0]):null;if(!e)throw new Error("You called Tooltipster's \""+n[0]+'" method on an uninitialized element');if("function"!=typeof e[n[0]])throw new Error('Unknown method "'+n[0]+'"');1<this.length&&"content"==n[0]&&(n[1]instanceof S||"object"==typeof n[1]&&null!=n[1]&&n[1].tagName)&&!e.__options.contentCloning&&e.__options.debug&&console.log(o);var i=e[n[0]](n[1],n[2]);return i!==e||"instance"===n[0]?(s=i,!1):void 0}),"#*$~&"!==s?s:this}S.tooltipster.__instancesLatestArr=[];var t=n[0]&&void 0!==n[0].multiple,a=t&&n[0].multiple||!t&&p.multiple,e=n[0]&&void 0!==n[0].content,i=e&&n[0].content||!e&&p.content,r=n[0]&&void 0!==n[0].contentCloning,l=r&&n[0].contentCloning||!r&&p.contentCloning,c=n[0]&&void 0!==n[0].debug,d=c&&n[0].debug||!c&&p.debug;return 1<this.length&&(i instanceof S||"object"==typeof i&&null!=i&&i.tagName)&&!l&&d&&console.log(o),this.each(function(){var t=!1,e=S(this),i=e.data("tooltipster-ns"),o=null;i?a?t=!0:d&&(console.log("Tooltipster: one or more tooltips are already attached to the element below. Ignoring."),console.log(this)):t=!0,t&&(o=new S.Tooltipster(this,n[0]),(i=i||[]).push(o.__namespace),e.data("tooltipster-ns",i),e.data(o.__namespace,o),o.__options.functionInit&&o.__options.functionInit.call(o,o,{origin:this}),o._trigger("init")),S.tooltipster.__instancesLatestArr.push(o)}),this},e.prototype={__init:function(t){this.__$tooltip=t,this.__$tooltip.css({left:0,overflow:"hidden",position:"absolute",top:0}).find(".tooltipster-content").css("overflow","auto"),this.$container=S('<div class="tooltipster-ruler"></div>').append(this.__$tooltip).appendTo(D.window.document.body)},__forceRedraw:function(){var t=this.__$tooltip.parent();this.__$tooltip.detach(),this.__$tooltip.appendTo(t)},constrain:function(t,e){return this.constraints={width:t,height:e},this.__$tooltip.css({display:"block",height:"",overflow:"auto",width:t}),this},destroy:function(){this.__$tooltip.detach().find(".tooltipster-content").css({display:"",overflow:""}),this.$container.remove()},free:function(){return this.constraints=null,this.__$tooltip.css({display:"",height:"",overflow:"visible",width:""}),this},measure:function(){this.__forceRedraw();var t=this.__$tooltip[0].getBoundingClientRect(),e={size:{height:t.height||t.bottom-t.top,width:t.width||t.right-t.left}};if(this.constraints){var i=this.__$tooltip.find(".tooltipster-content"),o=this.__$tooltip.outerHeight(),n=i[0].getBoundingClientRect(),s={height:o<=this.constraints.height,width:t.width<=this.constraints.width&&n.width>=i[0].scrollWidth-1};e.fits=s.height&&s.width}return D.IE&&D.IE<=11&&e.size.width!==D.window.document.documentElement.clientWidth&&(e.size.width=Math.ceil(e.size.width)+1),e}};var i=navigator.userAgent.toLowerCase();-1!=i.indexOf("msie")?D.IE=parseInt(i.split("msie")[1]):-1!==i.toLowerCase().indexOf("trident")&&-1!==i.indexOf(" rv:11")?D.IE=11:-1!=i.toLowerCase().indexOf("edge/")&&(D.IE=parseInt(i.toLowerCase().split("edge/")[1]));var o="tooltipster.sideTip";return S.tooltipster._plugin({name:o,instance:{__defaults:function(){return{arrow:!0,distance:6,functionPosition:null,maxWidth:null,minIntersection:16,minWidth:0,position:null,side:"top",viewportAware:!0}},__init:function(t){var e=this;e.__instance=t,e.__namespace="tooltipster-sideTip-"+Math.round(1e6*Math.random()),e.__previousState="closed",e.__options,e.__optionsFormat(),e.__instance._on("state."+e.__namespace,function(t){"closed"==t.state?e.__close():"appearing"==t.state&&"closed"==e.__previousState&&e.__create(),e.__previousState=t.state}),e.__instance._on("options."+e.__namespace,function(){e.__optionsFormat()}),e.__instance._on("reposition."+e.__namespace,function(t){e.__reposition(t.event,t.helper)})},__close:function(){this.__instance.content()instanceof S&&this.__instance.content().detach(),this.__instance._$tooltip.remove(),this.__instance._$tooltip=null},__create:function(){var t=S('<div class="tooltipster-base tooltipster-sidetip"><div class="tooltipster-box"><div class="tooltipster-content"></div></div><div class="tooltipster-arrow"><div class="tooltipster-arrow-uncropped"><div class="tooltipster-arrow-border"></div><div class="tooltipster-arrow-background"></div></div></div></div>');this.__options.arrow||t.find(".tooltipster-box").css("margin",0).end().find(".tooltipster-arrow").hide(),this.__options.minWidth&&t.css("min-width",this.__options.minWidth+"px"),this.__options.maxWidth&&t.css("max-width",this.__options.maxWidth+"px"),this.__instance._$tooltip=t,this.__instance._trigger("created")},__destroy:function(){this.__instance._off("."+self.__namespace)},__optionsFormat:function(){var t=this;if(t.__options=t.__instance._optionsExtract(o,t.__defaults()),t.__options.position&&(t.__options.side=t.__options.position),"object"!=typeof t.__options.distance&&(t.__options.distance=[t.__options.distance]),t.__options.distance.length<4&&(void 0===t.__options.distance[1]&&(t.__options.distance[1]=t.__options.distance[0]),void 0===t.__options.distance[2]&&(t.__options.distance[2]=t.__options.distance[0]),void 0===t.__options.distance[3]&&(t.__options.distance[3]=t.__options.distance[1])),t.__options.distance={top:t.__options.distance[0],right:t.__options.distance[1],bottom:t.__options.distance[2],left:t.__options.distance[3]},"string"==typeof t.__options.side){t.__options.side=[t.__options.side,{top:"bottom",right:"left",bottom:"top",left:"right"}[t.__options.side]],"left"==t.__options.side[0]||"right"==t.__options.side[0]?t.__options.side.push("top","bottom"):t.__options.side.push("right","left")}6===S.tooltipster._env.IE&&!0!==t.__options.arrow&&(t.__options.arrow=!1)},__reposition:function(l,c){var e,d=this,p=d.__targetFind(c),u=[];d.__instance._$tooltip.detach();var i=d.__instance._$tooltip.clone(),h=S.tooltipster._getRuler(i),f=!1,t=d.__instance.option("animation");switch(t&&i.removeClass("tooltipster-"+t),S.each(["window","document"],function(t,n){var s=null;if(d.__instance._trigger({container:n,helper:c,satisfied:f,takeTest:function(t){s=t},results:u,type:"positionTest"}),1==s||0!=s&&0==f&&("window"!=n||d.__options.viewportAware))for(t=0;t<d.__options.side.length;t++){var a={horizontal:0,vertical:0},r=d.__options.side[t];"top"==r||"bottom"==r?a.vertical=d.__options.distance[r]:a.horizontal=d.__options.distance[r],d.__sideChange(i,r),S.each(["natural","constrained"],function(t,e){if(s=null,d.__instance._trigger({container:n,event:l,helper:c,mode:e,results:u,satisfied:f,side:r,takeTest:function(t){s=t},type:"positionTest"}),1==s||0!=s&&0==f){var i={container:n,distance:a,fits:null,mode:e,outerSize:null,side:r,size:null,target:p[r],whole:null},o=("natural"==e?h.free():h.constrain(c.geo.available[n][r].width-a.horizontal,c.geo.available[n][r].height-a.vertical)).measure();if(i.size=o.size,i.outerSize={height:o.size.height+a.vertical,width:o.size.width+a.horizontal},"natural"==e?c.geo.available[n][r].width>=i.outerSize.width&&c.geo.available[n][r].height>=i.outerSize.height?i.fits=!0:i.fits=!1:i.fits=o.fits,"window"==n&&(i.fits?i.whole="top"==r||"bottom"==r?c.geo.origin.windowOffset.right>=d.__options.minIntersection&&c.geo.window.size.width-c.geo.origin.windowOffset.left>=d.__options.minIntersection:c.geo.origin.windowOffset.bottom>=d.__options.minIntersection&&c.geo.window.size.height-c.geo.origin.windowOffset.top>=d.__options.minIntersection:i.whole=!1),u.push(i),i.whole)f=!0;else if("natural"==i.mode&&(i.fits||i.size.width<=c.geo.available[n][r].width))return!1}})}}),d.__instance._trigger({edit:function(t){u=t},event:l,helper:c,results:u,type:"positionTested"}),u.sort(function(t,e){return t.whole&&!e.whole?-1:!t.whole&&e.whole?1:t.whole&&e.whole?(i=d.__options.side.indexOf(t.side))<(o=d.__options.side.indexOf(e.side))?-1:o<i?1:"natural"==t.mode?-1:1:t.fits&&!e.fits?-1:!t.fits&&e.fits?1:t.fits&&e.fits?(i=d.__options.side.indexOf(t.side))<(o=d.__options.side.indexOf(e.side))?-1:o<i?1:"natural"==t.mode?-1:1:"document"==t.container&&"bottom"==t.side&&"natural"==t.mode?-1:1;var i,o}),(e=u[0]).coord={},e.side){case"left":case"right":e.coord.top=Math.floor(e.target-e.size.height/2);break;case"bottom":case"top":e.coord.left=Math.floor(e.target-e.size.width/2)}switch(e.side){case"left":e.coord.left=c.geo.origin.windowOffset.left-e.outerSize.width;break;case"right":e.coord.left=c.geo.origin.windowOffset.right+e.distance.horizontal;break;case"top":e.coord.top=c.geo.origin.windowOffset.top-e.outerSize.height;break;case"bottom":e.coord.top=c.geo.origin.windowOffset.bottom+e.distance.vertical}"window"==e.container?"top"==e.side||"bottom"==e.side?e.coord.left<0?0<=c.geo.origin.windowOffset.right-this.__options.minIntersection?e.coord.left=0:e.coord.left=c.geo.origin.windowOffset.right-this.__options.minIntersection-1:e.coord.left>c.geo.window.size.width-e.size.width&&(c.geo.origin.windowOffset.left+this.__options.minIntersection<=c.geo.window.size.width?e.coord.left=c.geo.window.size.width-e.size.width:e.coord.left=c.geo.origin.windowOffset.left+this.__options.minIntersection+1-e.size.width):e.coord.top<0?0<=c.geo.origin.windowOffset.bottom-this.__options.minIntersection?e.coord.top=0:e.coord.top=c.geo.origin.windowOffset.bottom-this.__options.minIntersection-1:e.coord.top>c.geo.window.size.height-e.size.height&&(c.geo.origin.windowOffset.top+this.__options.minIntersection<=c.geo.window.size.height?e.coord.top=c.geo.window.size.height-e.size.height:e.coord.top=c.geo.origin.windowOffset.top+this.__options.minIntersection+1-e.size.height):(e.coord.left>c.geo.window.size.width-e.size.width&&(e.coord.left=c.geo.window.size.width-e.size.width),e.coord.left<0&&(e.coord.left=0)),d.__sideChange(i,e.side),c.tooltipClone=i[0],c.tooltipParent=d.__instance.option("parent").parent[0],c.mode=e.mode,c.whole=e.whole,c.origin=d.__instance._$origin[0],c.tooltip=d.__instance._$tooltip[0],delete e.container,delete e.fits,delete e.mode,delete e.outerSize,delete e.whole,e.distance=e.distance.horizontal||e.distance.vertical;var o,n,s,a=S.extend(!0,{},e);if(d.__instance._trigger({edit:function(t){e=t},event:l,helper:c,position:a,type:"position"}),d.__options.functionPosition){var r=d.__options.functionPosition.call(d,d.__instance,c,a);r&&(e=r)}h.destroy(),n="top"==e.side||"bottom"==e.side?(o={prop:"left",val:e.target-e.coord.left},e.size.width-this.__options.minIntersection):(o={prop:"top",val:e.target-e.coord.top},e.size.height-this.__options.minIntersection),o.val<this.__options.minIntersection?o.val=this.__options.minIntersection:o.val>n&&(o.val=n),s=c.geo.origin.fixedLineage?c.geo.origin.windowOffset:{left:c.geo.origin.windowOffset.left+c.geo.window.scroll.left,top:c.geo.origin.windowOffset.top+c.geo.window.scroll.top},e.coord={left:s.left+(e.coord.left-c.geo.origin.windowOffset.left),top:s.top+(e.coord.top-c.geo.origin.windowOffset.top)},d.__sideChange(d.__instance._$tooltip,e.side),c.geo.origin.fixedLineage?d.__instance._$tooltip.css("position","fixed"):d.__instance._$tooltip.css("position",""),d.__instance._$tooltip.css({left:e.coord.left,top:e.coord.top,height:e.size.height,width:e.size.width}).find(".tooltipster-arrow").css({left:"",top:""}).css(o.prop,o.val),d.__instance._$tooltip.appendTo(d.__instance.option("parent")),d.__instance._trigger({type:"repositioned",event:l,position:e})},__sideChange:function(t,e){t.removeClass("tooltipster-bottom").removeClass("tooltipster-left").removeClass("tooltipster-right").removeClass("tooltipster-top").addClass("tooltipster-"+e)},__targetFind:function(t){var e={},i=this.__instance._$origin[0].getClientRects();1<i.length&&1==this.__instance._$origin.css("opacity")&&(this.__instance._$origin.css("opacity",.99),i=this.__instance._$origin[0].getClientRects(),this.__instance._$origin.css("opacity",1));if(i.length<2)e.top=Math.floor(t.geo.origin.windowOffset.left+t.geo.origin.size.width/2),e.bottom=e.top,e.left=Math.floor(t.geo.origin.windowOffset.top+t.geo.origin.size.height/2),e.right=e.left;else{var o=i[0];e.top=Math.floor(o.left+(o.right-o.left)/2),o=2<i.length?i[Math.ceil(i.length/2)-1]:i[0],e.right=Math.floor(o.top+(o.bottom-o.top)/2),o=i[i.length-1],e.bottom=Math.floor(o.left+(o.right-o.left)/2),o=2<i.length?i[Math.ceil((i.length+1)/2)-1]:i[i.length-1],e.left=Math.floor(o.top+(o.bottom-o.top)/2)}return e}}}),S}),function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(k){var s;function t(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},k.extend(this._defaults,this.regional[""]),this.regional.en=k.extend(!0,{},this.regional[""]),this.regional["en-US"]=k.extend(!0,{},this.regional.en),this.dpDiv=i(k("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}function i(t){var e="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return t.on("mouseout",e,function(){k(this).removeClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&k(this).removeClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&k(this).removeClass("ui-datepicker-next-hover")}).on("mouseover",e,a)}function a(){k.datepicker._isDisabledDatepicker((s.inline?s.dpDiv.parent():s.input)[0])||(k(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),k(this).addClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&k(this).addClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&k(this).addClass("ui-datepicker-next-hover"))}function l(t,e){for(var i in k.extend(t,e),e)null==e[i]&&(t[i]=e[i]);return t}k.ui=k.ui||{},k.ui.version="1.12.1",k.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38},k.extend(k.ui,{datepicker:{version:"1.12.1"}}),k.extend(t.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(t){return l(this._defaults,t||{}),this},_attachDatepicker:function(t,e){var i,o=t.nodeName.toLowerCase(),n="div"===o||"span"===o;t.id||(this.uuid+=1,t.id="dp"+this.uuid),(i=this._newInst(k(t),n)).settings=k.extend({},e||{}),"input"===o?this._connectDatepicker(t,i):n&&this._inlineDatepicker(t,i)},_newInst:function(t,e){return{id:t[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1"),input:t,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:e,dpDiv:e?i(k("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}},_connectDatepicker:function(t,e){var i=k(t);e.append=k([]),e.trigger=k([]),i.hasClass(this.markerClassName)||(this._attachments(i,e),i.addClass(this.markerClassName).on("keydown",this._doKeyDown).on("keypress",this._doKeyPress).on("keyup",this._doKeyUp),this._autoSize(e),k.data(t,"datepicker",e),e.settings.disabled&&this._disableDatepicker(t))},_attachments:function(t,e){var i,o=this._get(e,"appendText"),n=this._get(e,"isRTL");e.append&&e.append.remove(),o&&(e.append=k("<span class='"+this._appendClass+"'>"+o+"</span>"),t[n?"before":"after"](e.append)),t.off("focus",this._showDatepicker),e.trigger&&e.trigger.remove(),"focus"!==(i=this._get(e,"showOn"))&&"both"!==i||t.on("focus",this._showDatepicker),"button"!==i&&"both"!==i||(o=this._get(e,"buttonText"),i=this._get(e,"buttonImage"),e.trigger=k(this._get(e,"buttonImageOnly")?k("<img/>").addClass(this._triggerClass).attr({src:i,alt:o,title:o}):k("<button type='button'></button>").addClass(this._triggerClass).html(i?k("<img/>").attr({src:i,alt:o,title:o}):o)),t[n?"before":"after"](e.trigger),e.trigger.on("click",function(){return k.datepicker._datepickerShowing&&k.datepicker._lastInput===t[0]?k.datepicker._hideDatepicker():(k.datepicker._datepickerShowing&&k.datepicker._lastInput!==t[0]&&k.datepicker._hideDatepicker(),k.datepicker._showDatepicker(t[0])),!1}))},_autoSize:function(t){var e,i,o,n,s,a;this._get(t,"autoSize")&&!t.inline&&(s=new Date(2009,11,20),(a=this._get(t,"dateFormat")).match(/[DM]/)&&(e=function(t){for(n=o=i=0;n<t.length;n++)t[n].length>i&&(i=t[n].length,o=n);return o},s.setMonth(e(this._get(t,a.match(/MM/)?"monthNames":"monthNamesShort"))),s.setDate(e(this._get(t,a.match(/DD/)?"dayNames":"dayNamesShort"))+20-s.getDay())),t.input.attr("size",this._formatDate(t,s).length))},_inlineDatepicker:function(t,e){var i=k(t);i.hasClass(this.markerClassName)||(i.addClass(this.markerClassName).append(e.dpDiv),k.data(t,"datepicker",e),this._setDate(e,this._getDefaultDate(e),!0),this._updateDatepicker(e),this._updateAlternate(e),e.settings.disabled&&this._disableDatepicker(t),e.dpDiv.css("display","block"))},_dialogDatepicker:function(t,e,i,o,n){var s,a=this._dialogInst;return a||(this.uuid+=1,s="dp"+this.uuid,this._dialogInput=k("<input type='text' id='"+s+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.on("keydown",this._doKeyDown),k("body").append(this._dialogInput),(a=this._dialogInst=this._newInst(this._dialogInput,!1)).settings={},k.data(this._dialogInput[0],"datepicker",a)),l(a.settings,o||{}),e=e&&e.constructor===Date?this._formatDate(a,e):e,this._dialogInput.val(e),this._pos=n?n.length?n:[n.pageX,n.pageY]:null,this._pos||(s=document.documentElement.clientWidth,o=document.documentElement.clientHeight,e=document.documentElement.scrollLeft||document.body.scrollLeft,n=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[s/2-100+e,o/2-150+n]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),a.settings.onSelect=i,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),k.blockUI&&k.blockUI(this.dpDiv),k.data(this._dialogInput[0],"datepicker",a),this},_destroyDatepicker:function(t){var e,i=k(t),o=k.data(t,"datepicker");i.hasClass(this.markerClassName)&&(e=t.nodeName.toLowerCase(),k.removeData(t,"datepicker"),"input"===e?(o.append.remove(),o.trigger.remove(),i.removeClass(this.markerClassName).off("focus",this._showDatepicker).off("keydown",this._doKeyDown).off("keypress",this._doKeyPress).off("keyup",this._doKeyUp)):"div"!==e&&"span"!==e||i.removeClass(this.markerClassName).empty(),s===o&&(s=null))},_enableDatepicker:function(e){var t,i=k(e),o=k.data(e,"datepicker");i.hasClass(this.markerClassName)&&("input"===(t=e.nodeName.toLowerCase())?(e.disabled=!1,o.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""})):"div"!==t&&"span"!==t||((i=i.children("."+this._inlineClass)).children().removeClass("ui-state-disabled"),i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=k.map(this._disabledInputs,function(t){return t===e?null:t}))},_disableDatepicker:function(e){var t,i=k(e),o=k.data(e,"datepicker");i.hasClass(this.markerClassName)&&("input"===(t=e.nodeName.toLowerCase())?(e.disabled=!0,o.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"})):"div"!==t&&"span"!==t||((i=i.children("."+this._inlineClass)).children().addClass("ui-state-disabled"),i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=k.map(this._disabledInputs,function(t){return t===e?null:t}),this._disabledInputs[this._disabledInputs.length]=e)},_isDisabledDatepicker:function(t){if(!t)return!1;for(var e=0;e<this._disabledInputs.length;e++)if(this._disabledInputs[e]===t)return!0;return!1},_getInst:function(t){try{return k.data(t,"datepicker")}catch(t){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(t,e,i){var o,n,s,a,r=this._getInst(t);if(2===arguments.length&&"string"==typeof e)return"defaults"===e?k.extend({},k.datepicker._defaults):r?"all"===e?k.extend({},r.settings):this._get(r,e):null;o=e||{},"string"==typeof e&&((o={})[e]=i),r&&(this._curInst===r&&this._hideDatepicker(),n=this._getDateDatepicker(t,!0),s=this._getMinMaxDate(r,"min"),a=this._getMinMaxDate(r,"max"),l(r.settings,o),null!==s&&void 0!==o.dateFormat&&void 0===o.minDate&&(r.settings.minDate=this._formatDate(r,s)),null!==a&&void 0!==o.dateFormat&&void 0===o.maxDate&&(r.settings.maxDate=this._formatDate(r,a)),"disabled"in o&&(o.disabled?this._disableDatepicker(t):this._enableDatepicker(t)),this._attachments(k(t),r),this._autoSize(r),this._setDate(r,n),this._updateAlternate(r),this._updateDatepicker(r))},_changeDatepicker:function(t,e,i){this._optionDatepicker(t,e,i)},_refreshDatepicker:function(t){(t=this._getInst(t))&&this._updateDatepicker(t)},_setDateDatepicker:function(t,e){(t=this._getInst(t))&&(this._setDate(t,e),this._updateDatepicker(t),this._updateAlternate(t))},_getDateDatepicker:function(t,e){return(t=this._getInst(t))&&!t.inline&&this._setDateFromField(t,e),t?this._getDate(t):null},_doKeyDown:function(t){var e,i,o=k.datepicker._getInst(t.target),n=!0,s=o.dpDiv.is(".ui-datepicker-rtl");if(o._keyEvent=!0,k.datepicker._datepickerShowing)switch(t.keyCode){case 9:k.datepicker._hideDatepicker(),n=!1;break;case 13:return(i=k("td."+k.datepicker._dayOverClass+":not(."+k.datepicker._currentClass+")",o.dpDiv))[0]&&k.datepicker._selectDay(t.target,o.selectedMonth,o.selectedYear,i[0]),(e=k.datepicker._get(o,"onSelect"))?(i=k.datepicker._formatDate(o),e.apply(o.input?o.input[0]:null,[i,o])):k.datepicker._hideDatepicker(),!1;case 27:k.datepicker._hideDatepicker();break;case 33:k.datepicker._adjustDate(t.target,t.ctrlKey?-k.datepicker._get(o,"stepBigMonths"):-k.datepicker._get(o,"stepMonths"),"M");break;case 34:k.datepicker._adjustDate(t.target,t.ctrlKey?+k.datepicker._get(o,"stepBigMonths"):+k.datepicker._get(o,"stepMonths"),"M");break;case 35:(t.ctrlKey||t.metaKey)&&k.datepicker._clearDate(t.target),n=t.ctrlKey||t.metaKey;break;case 36:(t.ctrlKey||t.metaKey)&&k.datepicker._gotoToday(t.target),n=t.ctrlKey||t.metaKey;break;case 37:(t.ctrlKey||t.metaKey)&&k.datepicker._adjustDate(t.target,s?1:-1,"D"),n=t.ctrlKey||t.metaKey,t.originalEvent.altKey&&k.datepicker._adjustDate(t.target,t.ctrlKey?-k.datepicker._get(o,"stepBigMonths"):-k.datepicker._get(o,"stepMonths"),"M");break;case 38:(t.ctrlKey||t.metaKey)&&k.datepicker._adjustDate(t.target,-7,"D"),n=t.ctrlKey||t.metaKey;break;case 39:(t.ctrlKey||t.metaKey)&&k.datepicker._adjustDate(t.target,s?-1:1,"D"),n=t.ctrlKey||t.metaKey,t.originalEvent.altKey&&k.datepicker._adjustDate(t.target,t.ctrlKey?+k.datepicker._get(o,"stepBigMonths"):+k.datepicker._get(o,"stepMonths"),"M");break;case 40:(t.ctrlKey||t.metaKey)&&k.datepicker._adjustDate(t.target,7,"D"),n=t.ctrlKey||t.metaKey;break;default:n=!1}else 36===t.keyCode&&t.ctrlKey?k.datepicker._showDatepicker(this):n=!1;n&&(t.preventDefault(),t.stopPropagation())},_doKeyPress:function(t){var e,i=k.datepicker._getInst(t.target);if(k.datepicker._get(i,"constrainInput"))return e=k.datepicker._possibleChars(k.datepicker._get(i,"dateFormat")),i=String.fromCharCode(null==t.charCode?t.keyCode:t.charCode),t.ctrlKey||t.metaKey||i<" "||!e||-1<e.indexOf(i)},_doKeyUp:function(t){var e=k.datepicker._getInst(t.target);if(e.input.val()!==e.lastVal)try{k.datepicker.parseDate(k.datepicker._get(e,"dateFormat"),e.input?e.input.val():null,k.datepicker._getFormatConfig(e))&&(k.datepicker._setDateFromField(e),k.datepicker._updateAlternate(e),k.datepicker._updateDatepicker(e))}catch(t){}return!0},_showDatepicker:function(t){var e,i,o,n;"input"!==(t=t.target||t).nodeName.toLowerCase()&&(t=k("input",t.parentNode)[0]),k.datepicker._isDisabledDatepicker(t)||k.datepicker._lastInput===t||(n=k.datepicker._getInst(t),k.datepicker._curInst&&k.datepicker._curInst!==n&&(k.datepicker._curInst.dpDiv.stop(!0,!0),n&&k.datepicker._datepickerShowing&&k.datepicker._hideDatepicker(k.datepicker._curInst.input[0])),!1!==(i=(o=k.datepicker._get(n,"beforeShow"))?o.apply(t,[t,n]):{})&&(l(n.settings,i),n.lastVal=null,k.datepicker._lastInput=t,k.datepicker._setDateFromField(n),k.datepicker._inDialog&&(t.value=""),k.datepicker._pos||(k.datepicker._pos=k.datepicker._findPos(t),k.datepicker._pos[1]+=t.offsetHeight),e=!1,k(t).parents().each(function(){return!(e|="fixed"===k(this).css("position"))}),o={left:k.datepicker._pos[0],top:k.datepicker._pos[1]},k.datepicker._pos=null,n.dpDiv.empty(),n.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),k.datepicker._updateDatepicker(n),o=k.datepicker._checkOffset(n,o,e),n.dpDiv.css({position:k.datepicker._inDialog&&k.blockUI?"static":e?"fixed":"absolute",display:"none",left:o.left+"px",top:o.top+"px"}),n.inline||(i=k.datepicker._get(n,"showAnim"),o=k.datepicker._get(n,"duration"),n.dpDiv.css("z-index",function(t){for(var e,i;t.length&&t[0]!==document;){if(("absolute"===(e=t.css("position"))||"relative"===e||"fixed"===e)&&(i=parseInt(t.css("zIndex"),10),!isNaN(i)&&0!==i))return i;t=t.parent()}return 0}(k(t))+1),k.datepicker._datepickerShowing=!0,k.effects&&k.effects.effect[i]?n.dpDiv.show(i,k.datepicker._get(n,"showOptions"),o):n.dpDiv[i||"show"](i?o:null),k.datepicker._shouldFocusInput(n)&&n.input.trigger("focus"),k.datepicker._curInst=n)))},_updateDatepicker:function(t){this.maxRows=4,(s=t).dpDiv.empty().append(this._generateHTML(t)),this._attachHandlers(t);var e,i=this._getNumberOfMonths(t),o=i[1],n=t.dpDiv.find("."+this._dayOverClass+" a");0<n.length&&a.apply(n.get(0)),t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),1<o&&t.dpDiv.addClass("ui-datepicker-multi-"+o).css("width",17*o+"em"),t.dpDiv[(1!==i[0]||1!==i[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),t.dpDiv[(this._get(t,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),t===k.datepicker._curInst&&k.datepicker._datepickerShowing&&k.datepicker._shouldFocusInput(t)&&t.input.trigger("focus"),t.yearshtml&&(e=t.yearshtml,setTimeout(function(){e===t.yearshtml&&t.yearshtml&&t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml),e=t.yearshtml=null},0))},_shouldFocusInput:function(t){return t.input&&t.input.is(":visible")&&!t.input.is(":disabled")&&!t.input.is(":focus")},_checkOffset:function(t,e,i){var o=t.dpDiv.outerWidth(),n=t.dpDiv.outerHeight(),s=t.input?t.input.outerWidth():0,a=t.input?t.input.outerHeight():0,r=document.documentElement.clientWidth+(i?0:k(document).scrollLeft()),l=document.documentElement.clientHeight+(i?0:k(document).scrollTop());return e.left-=this._get(t,"isRTL")?o-s:0,e.left-=i&&e.left===t.input.offset().left?k(document).scrollLeft():0,e.top-=i&&e.top===t.input.offset().top+a?k(document).scrollTop():0,e.left-=Math.min(e.left,e.left+o>r&&o<r?Math.abs(e.left+o-r):0),e.top-=Math.min(e.top,e.top+n>l&&n<l?Math.abs(n+a):0),e},_findPos:function(t){for(var e=this._getInst(t),i=this._get(e,"isRTL");t&&("hidden"===t.type||1!==t.nodeType||k.expr.filters.hidden(t));)t=t[i?"previousSibling":"nextSibling"];return[(e=k(t).offset()).left,e.top]},_hideDatepicker:function(t){var e,i,o=this._curInst;!o||t&&o!==k.data(t,"datepicker")||this._datepickerShowing&&(e=this._get(o,"showAnim"),i=this._get(o,"duration"),t=function(){k.datepicker._tidyDialog(o)},k.effects&&(k.effects.effect[e]||k.effects[e])?o.dpDiv.hide(e,k.datepicker._get(o,"showOptions"),i,t):o.dpDiv["slideDown"===e?"slideUp":"fadeIn"===e?"fadeOut":"hide"](e?i:null,t),e||t(),this._datepickerShowing=!1,(t=this._get(o,"onClose"))&&t.apply(o.input?o.input[0]:null,[o.input?o.input.val():"",o]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),k.blockUI&&(k.unblockUI(),k("body").append(this.dpDiv))),this._inDialog=!1)},_tidyDialog:function(t){t.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar")},_checkExternalClick:function(t){var e;k.datepicker._curInst&&(e=k(t.target),t=k.datepicker._getInst(e[0]),(e[0].id===k.datepicker._mainDivId||0!==e.parents("#"+k.datepicker._mainDivId).length||e.hasClass(k.datepicker.markerClassName)||e.closest("."+k.datepicker._triggerClass).length||!k.datepicker._datepickerShowing||k.datepicker._inDialog&&k.blockUI)&&(!e.hasClass(k.datepicker.markerClassName)||k.datepicker._curInst===t)||k.datepicker._hideDatepicker())},_adjustDate:function(t,e,i){var o=k(t);t=this._getInst(o[0]);this._isDisabledDatepicker(o[0])||(this._adjustInstDate(t,e+("M"===i?this._get(t,"showCurrentAtPos"):0),i),this._updateDatepicker(t))},_gotoToday:function(t){var e=k(t),i=this._getInst(e[0]);this._get(i,"gotoCurrent")&&i.currentDay?(i.selectedDay=i.currentDay,i.drawMonth=i.selectedMonth=i.currentMonth,i.drawYear=i.selectedYear=i.currentYear):(t=new Date,i.selectedDay=t.getDate(),i.drawMonth=i.selectedMonth=t.getMonth(),i.drawYear=i.selectedYear=t.getFullYear()),this._notifyChange(i),this._adjustDate(e)},_selectMonthYear:function(t,e,i){var o=k(t);(t=this._getInst(o[0]))["selected"+("M"===i?"Month":"Year")]=t["draw"+("M"===i?"Month":"Year")]=parseInt(e.options[e.selectedIndex].value,10),this._notifyChange(t),this._adjustDate(o)},_selectDay:function(t,e,i,o){var n=k(t);k(o).hasClass(this._unselectableClass)||this._isDisabledDatepicker(n[0])||((n=this._getInst(n[0])).selectedDay=n.currentDay=k("a",o).html(),n.selectedMonth=n.currentMonth=e,n.selectedYear=n.currentYear=i,this._selectDate(t,this._formatDate(n,n.currentDay,n.currentMonth,n.currentYear)))},_clearDate:function(t){t=k(t),this._selectDate(t,"")},_selectDate:function(t,e){var i=k(t);t=this._getInst(i[0]);e=null!=e?e:this._formatDate(t),t.input&&t.input.val(e),this._updateAlternate(t),(i=this._get(t,"onSelect"))?i.apply(t.input?t.input[0]:null,[e,t]):t.input&&t.input.trigger("change"),t.inline?this._updateDatepicker(t):(this._hideDatepicker(),this._lastInput=t.input[0],"object"!=typeof t.input[0]&&t.input.trigger("focus"),this._lastInput=null)},_updateAlternate:function(t){var e,i,o=this._get(t,"altField");o&&(e=this._get(t,"altFormat")||this._get(t,"dateFormat"),i=this._getDate(t),t=this.formatDate(e,i,this._getFormatConfig(t)),k(o).val(t))},noWeekends:function(t){return[0<(t=t.getDay())&&t<6,""]},iso8601Week:function(t){var e=new Date(t.getTime());return e.setDate(e.getDate()+4-(e.getDay()||7)),t=e.getTime(),e.setMonth(0),e.setDate(1),Math.floor(Math.round((t-e)/864e5)/7)+1},parseDate:function(e,n,t){if(null==e||null==n)throw"Invalid arguments";if(""===(n="object"==typeof n?n.toString():n+""))return null;function s(t){return(t=w+1<e.length&&e.charAt(w+1)===t)&&w++,t}function i(t){var e=s(t);e="@"===t?14:"!"===t?20:"y"===t&&e?4:"o"===t?3:2,e=new RegExp("^\\d{"+("y"===t?e:1)+","+e+"}");if(!(e=n.substring(d).match(e)))throw"Missing number at position "+d;return d+=e[0].length,parseInt(e[0],10)}function o(t,e,i){var o=-1;e=k.map(s(t)?i:e,function(t,e){return[[e,t]]}).sort(function(t,e){return-(t[1].length-e[1].length)});if(k.each(e,function(t,e){var i=e[1];if(n.substr(d,i.length).toLowerCase()===i.toLowerCase())return o=e[0],d+=i.length,!1}),-1!==o)return o+1;throw"Unknown name at position "+d}function a(){if(n.charAt(d)!==e.charAt(w))throw"Unexpected literal at position "+d;d++}for(var r,l,c,d=0,p="string"!=typeof(p=(t?t.shortYearCutoff:null)||this._defaults.shortYearCutoff)?p:(new Date).getFullYear()%100+parseInt(p,10),u=(t?t.dayNamesShort:null)||this._defaults.dayNamesShort,h=(t?t.dayNames:null)||this._defaults.dayNames,f=(t?t.monthNamesShort:null)||this._defaults.monthNamesShort,g=(t?t.monthNames:null)||this._defaults.monthNames,m=-1,_=-1,y=-1,v=-1,b=!1,w=0;w<e.length;w++)if(b)"'"!==e.charAt(w)||s("'")?a():b=!1;else switch(e.charAt(w)){case"d":y=i("d");break;case"D":o("D",u,h);break;case"o":v=i("o");break;case"m":_=i("m");break;case"M":_=o("M",f,g);break;case"y":m=i("y");break;case"@":m=(c=new Date(i("@"))).getFullYear(),_=c.getMonth()+1,y=c.getDate();break;case"!":m=(c=new Date((i("!")-this._ticksTo1970)/1e4)).getFullYear(),_=c.getMonth()+1,y=c.getDate();break;case"'":s("'")?a():b=!0;break;default:a()}if(d<n.length&&(l=n.substr(d),!/^\s+/.test(l)))throw"Extra/unparsed characters found in date: "+l;if(-1===m?m=(new Date).getFullYear():m<100&&(m+=(new Date).getFullYear()-(new Date).getFullYear()%100+(m<=p?0:-100)),-1<v)for(_=1,y=v;!(y<=(r=this._getDaysInMonth(m,_-1)));)_++,y-=r;if((c=this._daylightSavingAdjust(new Date(m,_-1,y))).getFullYear()!==m||c.getMonth()+1!==_||c.getDate()!==y)throw"Invalid date";return c},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925))*60*60*1e7,formatDate:function(e,t,i){if(!t)return"";function n(t){return(t=a+1<e.length&&e.charAt(a+1)===t)&&a++,t}function o(t,e,i){var o=""+e;if(n(t))for(;o.length<i;)o="0"+o;return o}function s(t,e,i,o){return(n(t)?o:i)[e]}var a,r=(i?i.dayNamesShort:null)||this._defaults.dayNamesShort,l=(i?i.dayNames:null)||this._defaults.dayNames,c=(i?i.monthNamesShort:null)||this._defaults.monthNamesShort,d=(i?i.monthNames:null)||this._defaults.monthNames,p="",u=!1;if(t)for(a=0;a<e.length;a++)if(u)"'"!==e.charAt(a)||n("'")?p+=e.charAt(a):u=!1;else switch(e.charAt(a)){case"d":p+=o("d",t.getDate(),2);break;case"D":p+=s("D",t.getDay(),r,l);break;case"o":p+=o("o",Math.round((new Date(t.getFullYear(),t.getMonth(),t.getDate()).getTime()-new Date(t.getFullYear(),0,0).getTime())/864e5),3);break;case"m":p+=o("m",t.getMonth()+1,2);break;case"M":p+=s("M",t.getMonth(),c,d);break;case"y":p+=n("y")?t.getFullYear():(t.getFullYear()%100<10?"0":"")+t.getFullYear()%100;break;case"@":p+=t.getTime();break;case"!":p+=1e4*t.getTime()+this._ticksTo1970;break;case"'":n("'")?p+="'":u=!0;break;default:p+=e.charAt(a)}return p},_possibleChars:function(e){function t(t){return(t=n+1<e.length&&e.charAt(n+1)===t)&&n++,t}for(var i="",o=!1,n=0;n<e.length;n++)if(o)"'"!==e.charAt(n)||t("'")?i+=e.charAt(n):o=!1;else switch(e.charAt(n)){case"d":case"m":case"y":case"@":i+="0123456789";break;case"D":case"M":return null;case"'":t("'")?i+="'":o=!0;break;default:i+=e.charAt(n)}return i},_get:function(t,e){return(void 0!==t.settings[e]?t.settings:this._defaults)[e]},_setDateFromField:function(t,e){if(t.input.val()!==t.lastVal){var i=this._get(t,"dateFormat"),o=t.lastVal=t.input?t.input.val():null,n=this._getDefaultDate(t),s=n,a=this._getFormatConfig(t);try{s=this.parseDate(i,o,a)||n}catch(t){o=e?"":o}t.selectedDay=s.getDate(),t.drawMonth=t.selectedMonth=s.getMonth(),t.drawYear=t.selectedYear=s.getFullYear(),t.currentDay=o?s.getDate():0,t.currentMonth=o?s.getMonth():0,t.currentYear=o?s.getFullYear():0,this._adjustInstDate(t)}},_getDefaultDate:function(t){return this._restrictMinMax(t,this._determineDate(t,this._get(t,"defaultDate"),new Date))},_determineDate:function(r,t,e){var i,o;return(t=(t=null==t||""===t?e:"string"==typeof t?function(t){try{return k.datepicker.parseDate(k.datepicker._get(r,"dateFormat"),t,k.datepicker._getFormatConfig(r))}catch(t){}for(var e=(t.toLowerCase().match(/^c/)?k.datepicker._getDate(r):null)||new Date,i=e.getFullYear(),o=e.getMonth(),n=e.getDate(),s=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,a=s.exec(t);a;){switch(a[2]||"d"){case"d":case"D":n+=parseInt(a[1],10);break;case"w":case"W":n+=7*parseInt(a[1],10);break;case"m":case"M":o+=parseInt(a[1],10),n=Math.min(n,k.datepicker._getDaysInMonth(i,o));break;case"y":case"Y":i+=parseInt(a[1],10),n=Math.min(n,k.datepicker._getDaysInMonth(i,o))}a=s.exec(t)}return new Date(i,o,n)}(t):"number"==typeof t?isNaN(t)?e:(i=t,(o=new Date).setDate(o.getDate()+i),o):new Date(t.getTime()))&&"Invalid Date"===t.toString()?e:t)&&(t.setHours(0),t.setMinutes(0),t.setSeconds(0),t.setMilliseconds(0)),this._daylightSavingAdjust(t)},_daylightSavingAdjust:function(t){return t?(t.setHours(12<t.getHours()?t.getHours()+2:0),t):null},_setDate:function(t,e,i){var o=!e,n=t.selectedMonth,s=t.selectedYear;e=this._restrictMinMax(t,this._determineDate(t,e,new Date));t.selectedDay=t.currentDay=e.getDate(),t.drawMonth=t.selectedMonth=t.currentMonth=e.getMonth(),t.drawYear=t.selectedYear=t.currentYear=e.getFullYear(),n===t.selectedMonth&&s===t.selectedYear||i||this._notifyChange(t),this._adjustInstDate(t),t.input&&t.input.val(o?"":this._formatDate(t))},_getDate:function(t){return!t.currentYear||t.input&&""===t.input.val()?null:this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay))},_attachHandlers:function(t){var e=this._get(t,"stepMonths"),i="#"+t.id.replace(/\\\\/g,"\\");t.dpDiv.find("[data-handler]").map(function(){var t={prev:function(){k.datepicker._adjustDate(i,-e,"M")},next:function(){k.datepicker._adjustDate(i,+e,"M")},hide:function(){k.datepicker._hideDatepicker()},today:function(){k.datepicker._gotoToday(i)},selectDay:function(){return k.datepicker._selectDay(i,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return k.datepicker._selectMonthYear(i,this,"M"),!1},selectYear:function(){return k.datepicker._selectMonthYear(i,this,"Y"),!1}};k(this).on(this.getAttribute("data-event"),t[this.getAttribute("data-handler")])})},_generateHTML:function(t){var e,i,o,n,s,a,r,l,c,d,p,u,h,f,g,m,_,y,v,b,w,k,x,C,T,$,S,D,M,P,I,A=new Date,E=this._daylightSavingAdjust(new Date(A.getFullYear(),A.getMonth(),A.getDate())),O=this._get(t,"isRTL"),z=this._get(t,"showButtonPanel"),L=this._get(t,"hideIfNoPrevNext"),F=this._get(t,"navigationAsDateFormat"),H=this._getNumberOfMonths(t),j=this._get(t,"showCurrentAtPos"),R=(A=this._get(t,"stepMonths"),1!==H[0]||1!==H[1]),Y=this._daylightSavingAdjust(t.currentDay?new Date(t.currentYear,t.currentMonth,t.currentDay):new Date(9999,9,9)),N=this._getMinMaxDate(t,"min"),W=this._getMinMaxDate(t,"max"),B=t.drawMonth-j,q=t.drawYear;if(B<0&&(B+=12,q--),W)for(e=this._daylightSavingAdjust(new Date(W.getFullYear(),W.getMonth()-H[0]*H[1]+1,W.getDate())),e=N&&e<N?N:e;this._daylightSavingAdjust(new Date(q,B,1))>e;)--B<0&&(B=11,q--);for(t.drawMonth=B,t.drawYear=q,j=this._get(t,"prevText"),j=F?this.formatDate(j,this._daylightSavingAdjust(new Date(q,B-A,1)),this._getFormatConfig(t)):j,i=this._canAdjustMonth(t,-1,q,B)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+j+"'><span class='ui-icon ui-icon-circle-triangle-"+(O?"e":"w")+"'>"+j+"</span></a>":L?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+j+"'><span class='ui-icon ui-icon-circle-triangle-"+(O?"e":"w")+"'>"+j+"</span></a>",j=this._get(t,"nextText"),j=F?this.formatDate(j,this._daylightSavingAdjust(new Date(q,B+A,1)),this._getFormatConfig(t)):j,o=this._canAdjustMonth(t,1,q,B)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+j+"'><span class='ui-icon ui-icon-circle-triangle-"+(O?"w":"e")+"'>"+j+"</span></a>":L?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+j+"'><span class='ui-icon ui-icon-circle-triangle-"+(O?"w":"e")+"'>"+j+"</span></a>",L=this._get(t,"currentText"),j=this._get(t,"gotoCurrent")&&t.currentDay?Y:E,L=F?this.formatDate(L,j,this._getFormatConfig(t)):L,F=t.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(t,"closeText")+"</button>",F=z?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(O?F:"")+(this._isInRange(t,j)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+L+"</button>":"")+(O?"":F)+"</div>":"",n=parseInt(this._get(t,"firstDay"),10),n=isNaN(n)?0:n,s=this._get(t,"showWeek"),a=this._get(t,"dayNames"),r=this._get(t,"dayNamesMin"),l=this._get(t,"monthNames"),c=this._get(t,"monthNamesShort"),d=this._get(t,"beforeShowDay"),p=this._get(t,"showOtherMonths"),u=this._get(t,"selectOtherMonths"),h=this._getDefaultDate(t),f="",m=0;m<H[0];m++){for(_="",this.maxRows=4,y=0;y<H[1];y++){if(v=this._daylightSavingAdjust(new Date(q,B,t.selectedDay)),x=" ui-corner-all",b="",R){if(b+="<div class='ui-datepicker-group",1<H[1])switch(y){case 0:b+=" ui-datepicker-group-first",x=" ui-corner-"+(O?"right":"left");break;case H[1]-1:b+=" ui-datepicker-group-last",x=" ui-corner-"+(O?"left":"right");break;default:b+=" ui-datepicker-group-middle",x=""}b+="'>"}for(b+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+x+"'>"+(/all|left/.test(x)&&0===m?O?o:i:"")+(/all|right/.test(x)&&0===m?O?i:o:"")+this._generateMonthYearHeader(t,B,q,N,W,0<m||0<y,l,c)+"</div><table class='ui-datepicker-calendar'><thead><tr>",w=s?"<th class='ui-datepicker-week-col'>"+this._get(t,"weekHeader")+"</th>":"",g=0;g<7;g++)w+="<th scope='col'"+(5<=(g+n+6)%7?" class='ui-datepicker-week-end'":"")+"><span title='"+a[k=(g+n)%7]+"'>"+r[k]+"</span></th>";for(b+=w+"</tr></thead><tbody>",C=this._getDaysInMonth(q,B),q===t.selectedYear&&B===t.selectedMonth&&(t.selectedDay=Math.min(t.selectedDay,C)),x=(this._getFirstDayOfMonth(q,B)-n+7)%7,C=Math.ceil((x+C)/7),T=R&&this.maxRows>C?this.maxRows:C,this.maxRows=T,$=this._daylightSavingAdjust(new Date(q,B,1-x)),S=0;S<T;S++){for(b+="<tr>",D=s?"<td class='ui-datepicker-week-col'>"+this._get(t,"calculateWeek")($)+"</td>":"",g=0;g<7;g++)M=d?d.apply(t.input?t.input[0]:null,[$]):[!0,""],I=(P=$.getMonth()!==B)&&!u||!M[0]||N&&$<N||W&&W<$,D+="<td class='"+(5<=(g+n+6)%7?" ui-datepicker-week-end":"")+(P?" ui-datepicker-other-month":"")+($.getTime()===v.getTime()&&B===t.selectedMonth&&t._keyEvent||h.getTime()===$.getTime()&&h.getTime()===v.getTime()?" "+this._dayOverClass:"")+(I?" "+this._unselectableClass+" ui-state-disabled":"")+(P&&!p?"":" "+M[1]+($.getTime()===Y.getTime()?" "+this._currentClass:"")+($.getTime()===E.getTime()?" ui-datepicker-today":""))+"'"+(P&&!p||!M[2]?"":" title='"+M[2].replace(/'/g,"&#39;")+"'")+(I?"":" data-handler='selectDay' data-event='click' data-month='"+$.getMonth()+"' data-year='"+$.getFullYear()+"'")+">"+(P&&!p?"&#xa0;":I?"<span class='ui-state-default'>"+$.getDate()+"</span>":"<a class='ui-state-default"+($.getTime()===E.getTime()?" ui-state-highlight":"")+($.getTime()===Y.getTime()?" ui-state-active":"")+(P?" ui-priority-secondary":"")+"' href='#'>"+$.getDate()+"</a>")+"</td>",$.setDate($.getDate()+1),$=this._daylightSavingAdjust($);b+=D+"</tr>"}11<++B&&(B=0,q++),_+=b+="</tbody></table>"+(R?"</div>"+(0<H[0]&&y===H[1]-1?"<div class='ui-datepicker-row-break'></div>":""):"")}f+=_}return f+=F,t._keyEvent=!1,f},_generateMonthYearHeader:function(t,e,i,o,n,s,a,r){var l,c,d,p,u,h,f,g=this._get(t,"changeMonth"),m=this._get(t,"changeYear"),_=this._get(t,"showMonthAfterYear"),y="<div class='ui-datepicker-title'>",v="";if(s||!g)v+="<span class='ui-datepicker-month'>"+a[e]+"</span>";else{for(l=o&&o.getFullYear()===i,c=n&&n.getFullYear()===i,v+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",d=0;d<12;d++)(!l||d>=o.getMonth())&&(!c||d<=n.getMonth())&&(v+="<option value='"+d+"'"+(d===e?" selected='selected'":"")+">"+r[d]+"</option>");v+="</select>"}if(_||(y+=v+(!s&&g&&m?"":"&#xa0;")),!t.yearshtml)if(t.yearshtml="",s||!m)y+="<span class='ui-datepicker-year'>"+i+"</span>";else{for(p=this._get(t,"yearRange").split(":"),u=(new Date).getFullYear(),h=(a=function(t){return t=t.match(/c[+\-].*/)?i+parseInt(t.substring(1),10):t.match(/[+\-].*/)?u+parseInt(t,10):parseInt(t,10),isNaN(t)?u:t})(p[0]),f=Math.max(h,a(p[1]||"")),h=o?Math.max(h,o.getFullYear()):h,f=n?Math.min(f,n.getFullYear()):f,t.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";h<=f;h++)t.yearshtml+="<option value='"+h+"'"+(h===i?" selected='selected'":"")+">"+h+"</option>";t.yearshtml+="</select>",y+=t.yearshtml,t.yearshtml=null}return y+=this._get(t,"yearSuffix"),_&&(y+=(!s&&g&&m?"":"&#xa0;")+v),y+"</div>"},_adjustInstDate:function(t,e,i){var o=t.selectedYear+("Y"===i?e:0),n=t.selectedMonth+("M"===i?e:0);e=Math.min(t.selectedDay,this._getDaysInMonth(o,n))+("D"===i?e:0),e=this._restrictMinMax(t,this._daylightSavingAdjust(new Date(o,n,e)));t.selectedDay=e.getDate(),t.drawMonth=t.selectedMonth=e.getMonth(),t.drawYear=t.selectedYear=e.getFullYear(),"M"!==i&&"Y"!==i||this._notifyChange(t)},_restrictMinMax:function(t,e){var i=this._getMinMaxDate(t,"min");e=i&&e<i?i:e;return(t=this._getMinMaxDate(t,"max"))&&t<e?t:e},_notifyChange:function(t){var e=this._get(t,"onChangeMonthYear");e&&e.apply(t.input?t.input[0]:null,[t.selectedYear,t.selectedMonth+1,t])},_getNumberOfMonths:function(t){return null==(t=this._get(t,"numberOfMonths"))?[1,1]:"number"==typeof t?[1,t]:t},_getMinMaxDate:function(t,e){return this._determineDate(t,this._get(t,e+"Date"),null)},_getDaysInMonth:function(t,e){return 32-this._daylightSavingAdjust(new Date(t,e,32)).getDate()},_getFirstDayOfMonth:function(t,e){return new Date(t,e,1).getDay()},_canAdjustMonth:function(t,e,i,o){var n=this._getNumberOfMonths(t);n=this._daylightSavingAdjust(new Date(i,o+(e<0?e:n[0]*n[1]),1));return e<0&&n.setDate(this._getDaysInMonth(n.getFullYear(),n.getMonth())),this._isInRange(t,n)},_isInRange:function(t,e){var i=this._getMinMaxDate(t,"min"),o=this._getMinMaxDate(t,"max"),n=null,s=null,a=this._get(t,"yearRange");return a&&(t=a.split(":"),a=(new Date).getFullYear(),n=parseInt(t[0],10),s=parseInt(t[1],10),t[0].match(/[+\-].*/)&&(n+=a),t[1].match(/[+\-].*/)&&(s+=a)),(!i||e.getTime()>=i.getTime())&&(!o||e.getTime()<=o.getTime())&&(!n||e.getFullYear()>=n)&&(!s||e.getFullYear()<=s)},_getFormatConfig:function(t){var e=this._get(t,"shortYearCutoff");return{shortYearCutoff:e="string"!=typeof e?e:(new Date).getFullYear()%100+parseInt(e,10),dayNamesShort:this._get(t,"dayNamesShort"),dayNames:this._get(t,"dayNames"),monthNamesShort:this._get(t,"monthNamesShort"),monthNames:this._get(t,"monthNames")}},_formatDate:function(t,e,i,o){return e||(t.currentDay=t.selectedDay,t.currentMonth=t.selectedMonth,t.currentYear=t.selectedYear),e=e?"object"==typeof e?e:this._daylightSavingAdjust(new Date(o,i,e)):this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay)),this.formatDate(this._get(t,"dateFormat"),e,this._getFormatConfig(t))}}),k.fn.datepicker=function(t){if(!this.length)return this;k.datepicker.initialized||(k(document).on("mousedown",k.datepicker._checkExternalClick),k.datepicker.initialized=!0),0===k("#"+k.datepicker._mainDivId).length&&k("body").append(k.datepicker.dpDiv);var e=Array.prototype.slice.call(arguments,1);return"string"==typeof t&&("isDisabled"===t||"getDate"===t||"widget"===t)||"option"===t&&2===arguments.length&&"string"==typeof arguments[1]?k.datepicker["_"+t+"Datepicker"].apply(k.datepicker,[this[0]].concat(e)):this.each(function(){"string"==typeof t?k.datepicker["_"+t+"Datepicker"].apply(k.datepicker,[this].concat(e)):k.datepicker._attachDatepicker(this,t)})},k.datepicker=new t,k.datepicker.initialized=!1,k.datepicker.uuid=(new Date).getTime(),k.datepicker.version="1.12.1",k.datepicker;var d,p,r,u,e,h,f,g,c,m,_,n,y,v,b,o,w,x,C,T,$="ui-effects-",S="ui-effects-style",D="ui-effects-animated",M=k;function P(t,e,i){var o=g[e.type]||{};return null==t?i||!e.def?null:e.def:(t=o.floor?~~t:parseFloat(t),isNaN(t)?e.def:o.mod?(t+o.mod)%o.mod:t<0?0:o.max<t?o.max:t)}function I(o){var n=h(),s=n._rgba=[];return o=o.toLowerCase(),m(e,function(t,e){var i=(i=e.re.exec(o))&&e.parse(i);e=e.space||"rgba";if(i)return i=n[e](i),n[f[e].cache]=i[f[e].cache],s=n._rgba=i._rgba,!1}),s.length?("0,0,0,0"===s.join()&&d.extend(s,r.transparent),n):r[o]}function A(t,e,i){return 6*(i=(i+1)%1)<1?t+(e-t)*i*6:2*i<1?e:3*i<2?t+(e-t)*(2/3-i)*6:t}function E(t){var e,i,o=t.ownerDocument.defaultView?t.ownerDocument.defaultView.getComputedStyle(t,null):t.currentStyle,n={};if(o&&o.length&&o[0]&&o[o[0]])for(i=o.length;i--;)"string"==typeof o[e=o[i]]&&(n[k.camelCase(e)]=o[e]);else for(e in o)"string"==typeof o[e]&&(n[e]=o[e]);return n}function O(t,e,i,o){return k.isPlainObject(t)&&(t=(e=t).effect),t={effect:t},null==e&&(e={}),k.isFunction(e)&&(o=e,i=null,e={}),"number"!=typeof e&&!k.fx.speeds[e]||(o=i,i=e,e={}),k.isFunction(i)&&(o=i,i=null),e&&k.extend(t,e),i=i||e.duration,t.duration=k.fx.off?0:"number"==typeof i?i:i in k.fx.speeds?k.fx.speeds[i]:k.fx.speeds._default,t.complete=o||e.complete,t}function z(t){return!t||"number"==typeof t||k.fx.speeds[t]||"string"==typeof t&&!k.effects.effect[t]||k.isFunction(t)||"object"==typeof t&&!t.effect}function L(t,e){var i=e.outerWidth();e=e.outerHeight(),t=/^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/.exec(t)||["",0,i,e,0];return{top:parseFloat(t[1])||0,right:"auto"===t[2]?i:parseFloat(t[2]),bottom:"auto"===t[3]?e:parseFloat(t[3]),left:parseFloat(t[4])||0}}k.effects={effect:{}},u=/^([\-+])=\s*(\d+\.?\d*)/,e=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[t[1],t[2],t[3],t[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[2.55*t[1],2.55*t[2],2.55*t[3],t[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(t){return[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(t){return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(t){return[t[1],t[2]/100,t[3]/100,t[4]]}}],h=(d=M).Color=function(t,e,i,o){return new d.Color.fn.parse(t,e,i,o)},f={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},g={byte:{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},c=h.support={},F=d("<p>")[0],m=d.each,F.style.cssText="background-color:rgba(1,1,1,.5)",c.rgba=-1<F.style.backgroundColor.indexOf("rgba"),m(f,function(t,e){e.cache="_"+t,e.props.alpha={idx:3,type:"percent",def:1}}),h.fn=d.extend(h.prototype,{parse:function(n,t,e,i){if(n===p)return this._rgba=[null,null,null,null],this;(n.jquery||n.nodeType)&&(n=d(n).css(t),t=p);var s=this,o=d.type(n),a=this._rgba=[];return t!==p&&(n=[n,t,e,i],o="array"),"string"===o?this.parse(I(n)||r._default):"array"===o?(m(f.rgba.props,function(t,e){a[e.idx]=P(n[e.idx],e)}),this):"object"===o?(m(f,n instanceof h?function(t,e){n[e.cache]&&(s[e.cache]=n[e.cache].slice())}:function(t,i){var o=i.cache;m(i.props,function(t,e){if(!s[o]&&i.to){if("alpha"===t||null==n[t])return;s[o]=i.to(s._rgba)}s[o][e.idx]=P(n[t],e,!0)}),s[o]&&d.inArray(null,s[o].slice(0,3))<0&&(s[o][3]=1,i.from&&(s._rgba=i.from(s[o])))}),this):void 0},is:function(t){var n=h(t),s=!0,a=this;return m(f,function(t,e){var i,o=n[e.cache];return o&&(i=a[e.cache]||e.to&&e.to(a._rgba)||[],m(e.props,function(t,e){if(null!=o[e.idx])return s=o[e.idx]===i[e.idx]})),s}),s},_space:function(){var i=[],o=this;return m(f,function(t,e){o[e.cache]&&i.push(t)}),i.pop()},transition:function(t,a){var e=(c=h(t))._space(),i=f[e],r=(t=0===this.alpha()?h("transparent"):this)[i.cache]||i.to(t._rgba),l=r.slice(),c=c[i.cache];return m(i.props,function(t,e){var i=e.idx,o=r[i],n=c[i],s=g[e.type]||{};null!==n&&(null===o?l[i]=n:(s.mod&&(s.mod/2<n-o?o+=s.mod:s.mod/2<o-n&&(o-=s.mod)),l[i]=P((n-o)*a+o,e)))}),this[e](l)},blend:function(t){if(1===this._rgba[3])return this;var e=this._rgba.slice(),i=e.pop(),o=h(t)._rgba;return h(d.map(e,function(t,e){return(1-i)*o[e]+i*t}))},toRgbaString:function(){var t="rgba(",e=d.map(this._rgba,function(t,e){return null==t?2<e?1:0:t});return 1===e[3]&&(e.pop(),t="rgb("),t+e.join()+")"},toHslaString:function(){var t="hsla(",e=d.map(this.hsla(),function(t,e){return null==t&&(t=2<e?1:0),e&&e<3&&(t=Math.round(100*t)+"%"),t});return 1===e[3]&&(e.pop(),t="hsl("),t+e.join()+")"},toHexString:function(t){var e=this._rgba.slice(),i=e.pop();return t&&e.push(~~(255*i)),"#"+d.map(e,function(t){return 1===(t=(t||0).toString(16)).length?"0"+t:t}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),h.fn.parse.prototype=h.fn,f.hsla.to=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e=t[0]/255,i=t[1]/255,o=t[2]/255,n=t[3],s=Math.max(e,i,o),a=Math.min(e,i,o),r=s-a,l=(t=.5*(l=s+a),i=a===s?0:e===s?60*(i-o)/r+360:i===s?60*(o-e)/r+120:60*(e-i)/r+240,0==r?0:t<=.5?r/l:r/(2-l));return[Math.round(i)%360,l,t,null==n?1:n]},f.hsla.from=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e=t[0]/360,i=t[1],o=t[2];t=t[3],o=2*o-(i=o<=.5?o*(1+i):o+i-o*i);return[Math.round(255*A(o,i,e+1/3)),Math.round(255*A(o,i,e)),Math.round(255*A(o,i,e-1/3)),t]},m(f,function(l,t){var s=t.props,a=t.cache,r=t.to,c=t.from;h.fn[l]=function(t){if(r&&!this[a]&&(this[a]=r(this._rgba)),t===p)return this[a].slice();var e,i=d.type(t),o="array"===i||"object"===i?t:arguments,n=this[a].slice();return m(s,function(t,e){null==(t=o["object"===i?t:e.idx])&&(t=n[e.idx]),n[e.idx]=P(t,e)}),c?((e=h(c(n)))[a]=n,e):h(n)},m(s,function(a,r){h.fn[a]||(h.fn[a]=function(t){var e,i=d.type(t),o="alpha"===a?this._hsla?"hsla":"rgba":l,n=this[o](),s=n[r.idx];return"undefined"===i?s:("function"===i&&(t=t.call(this,s),i=d.type(t)),null==t&&r.empty?this:("string"===i&&(e=u.exec(t))&&(t=s+parseFloat(e[2])*("+"===e[1]?1:-1)),n[r.idx]=t,this[o](n)))})})}),h.hook=function(t){t=t.split(" "),m(t,function(t,s){d.cssHooks[s]={set:function(t,e){var i,o,n="";if("transparent"!==e&&("string"!==d.type(e)||(i=I(e)))){if(e=h(i||e),!c.rgba&&1!==e._rgba[3]){for(o="backgroundColor"===s?t.parentNode:t;(""===n||"transparent"===n)&&o&&o.style;)try{n=d.css(o,"backgroundColor"),o=o.parentNode}catch(t){}e=e.blend(n&&"transparent"!==n?n:"_default")}e=e.toRgbaString()}try{t.style[s]=e}catch(t){}}},d.fx.step[s]=function(t){t.colorInit||(t.start=h(t.elem,s),t.end=h(t.end),t.colorInit=!0),d.cssHooks[s].set(t.elem,t.start.transition(t.end,t.pos))}})},h.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor"),d.cssHooks.borderColor={expand:function(i){var o={};return m(["Top","Right","Bottom","Left"],function(t,e){o["border"+e+"Color"]=i}),o}},r=d.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"},v=["add","remove","toggle"],b={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1},k.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(t,e){k.fx.step[e]=function(t){("none"!==t.end&&!t.setAttr||1===t.pos&&!t.setAttr)&&(M.style(t.elem,e,t.end),t.setAttr=!0)}}),k.fn.addBack||(k.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),k.effects.animateClass=function(n,t,e,i){var s=k.speed(t,e,i);return this.queue(function(){function t(){k.each(v,function(t,e){n[e]&&i[e+"Class"](n[e])})}var i=k(this),e=i.attr("class")||"",o=(o=s.children?i.find("*").addBack():i).map(function(){return{el:k(this),start:E(this)}});t(),o=o.map(function(){return this.end=E(this.el[0]),this.diff=function(t,e){var i,o,n={};for(i in e)o=e[i],t[i]!==o&&(b[i]||!k.fx.step[i]&&isNaN(parseFloat(o))||(n[i]=o));return n}(this.start,this.end),this}),i.attr("class",e),o=o.map(function(){var t=this,e=k.Deferred(),i=k.extend({},s,{queue:!1,complete:function(){e.resolve(t)}});return this.el.animate(this.diff,i),e.promise()}),k.when.apply(k,o.get()).done(function(){t(),k.each(arguments,function(){var e=this.el;k.each(this.diff,function(t){e.css(t,"")})}),s.complete.call(i[0])})})},k.fn.extend({addClass:(y=k.fn.addClass,function(t,e,i,o){return e?k.effects.animateClass.call(this,{add:t},e,i,o):y.apply(this,arguments)}),removeClass:(n=k.fn.removeClass,function(t,e,i,o){return 1<arguments.length?k.effects.animateClass.call(this,{remove:t},e,i,o):n.apply(this,arguments)}),toggleClass:(_=k.fn.toggleClass,function(t,e,i,o,n){return"boolean"==typeof e||void 0===e?i?k.effects.animateClass.call(this,e?{add:t}:{remove:t},i,o,n):_.apply(this,arguments):k.effects.animateClass.call(this,{toggle:t},e,i,o)}),switchClass:function(t,e,i,o,n){return k.effects.animateClass.call(this,{add:e,remove:t},i,o,n)}}),k.expr&&k.expr.filters&&k.expr.filters.animated&&(k.expr.filters.animated=(o=k.expr.filters.animated,function(t){return!!k(t).data(D)||o(t)})),!1!==k.uiBackCompat&&k.extend(k.effects,{save:function(t,e){for(var i=0,o=e.length;i<o;i++)null!==e[i]&&t.data($+e[i],t[0].style[e[i]])},restore:function(t,e){for(var i,o=0,n=e.length;o<n;o++)null!==e[o]&&(i=t.data($+e[o]),t.css(e[o],i))},setMode:function(t,e){return"toggle"===e&&(e=t.is(":hidden")?"show":"hide"),e},createWrapper:function(i){if(i.parent().is(".ui-effects-wrapper"))return i.parent();var o={width:i.outerWidth(!0),height:i.outerHeight(!0),float:i.css("float")},t=k("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),e={width:i.width(),height:i.height()},n=document.activeElement;try{n.id}catch(t){n=document.body}return i.wrap(t),i[0]!==n&&!k.contains(i[0],n)||k(n).trigger("focus"),t=i.parent(),"static"===i.css("position")?(t.css({position:"relative"}),i.css({position:"relative"})):(k.extend(o,{position:i.css("position"),zIndex:i.css("z-index")}),k.each(["top","left","bottom","right"],function(t,e){o[e]=i.css(e),isNaN(parseInt(o[e],10))&&(o[e]="auto")}),i.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),i.css(e),t.css(o).show()},removeWrapper:function(t){var e=document.activeElement;return t.parent().is(".ui-effects-wrapper")&&(t.parent().replaceWith(t),t[0]!==e&&!k.contains(t[0],e)||k(e).trigger("focus")),t}}),k.extend(k.effects,{version:"1.12.1",define:function(t,e,i){return i||(i=e,e="effect"),k.effects.effect[t]=i,k.effects.effect[t].mode=e,i},scaledDimensions:function(t,e,i){if(0===e)return{height:0,width:0,outerHeight:0,outerWidth:0};var o="horizontal"!==i?(e||100)/100:1;e="vertical"!==i?(e||100)/100:1;return{height:t.height()*e,width:t.width()*o,outerHeight:t.outerHeight()*e,outerWidth:t.outerWidth()*o}},clipToBox:function(t){return{width:t.clip.right-t.clip.left,height:t.clip.bottom-t.clip.top,left:t.clip.left,top:t.clip.top}},unshift:function(t,e,i){var o=t.queue();1<e&&o.splice.apply(o,[1,0].concat(o.splice(e,i))),t.dequeue()},saveStyle:function(t){t.data(S,t[0].style.cssText)},restoreStyle:function(t){t[0].style.cssText=t.data(S)||"",t.removeData(S)},mode:function(t,e){return t=t.is(":hidden"),"toggle"===e&&(e=t?"show":"hide"),(t?"hide"===e:"show"===e)&&(e="none"),e},getBaseline:function(t,e){var i,o;switch(t[0]){case"top":i=0;break;case"middle":i=.5;break;case"bottom":i=1;break;default:i=t[0]/e.height}switch(t[1]){case"left":o=0;break;case"center":o=.5;break;case"right":o=1;break;default:o=t[1]/e.width}return{x:o,y:i}},createPlaceholder:function(t){var e,i=t.css("position"),o=t.position();return t.css({marginTop:t.css("marginTop"),marginBottom:t.css("marginBottom"),marginLeft:t.css("marginLeft"),marginRight:t.css("marginRight")}).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()),/^(static|relative)/.test(i)&&(i="absolute",e=k("<"+t[0].nodeName+">").insertAfter(t).css({display:/^(inline|ruby)/.test(t.css("display"))?"inline-block":"block",visibility:"hidden",marginTop:t.css("marginTop"),marginBottom:t.css("marginBottom"),marginLeft:t.css("marginLeft"),marginRight:t.css("marginRight"),float:t.css("float")}).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).addClass("ui-effects-placeholder"),t.data($+"placeholder",e)),t.css({position:i,left:o.left,top:o.top}),e},removePlaceholder:function(t){var e=$+"placeholder",i=t.data(e);i&&(i.remove(),t.removeData(e))},cleanUp:function(t){k.effects.restoreStyle(t),k.effects.removePlaceholder(t)},setTransition:function(o,t,n,s){return s=s||{},k.each(t,function(t,e){var i=o.cssUnit(e);0<i[0]&&(s[e]=i[0]*n+i[1])}),s}}),k.fn.extend({effect:function(){function t(t){var e=k(this),i=k.effects.mode(e,r)||s;e.data(D,!0),l.push(i),s&&("show"===i||i===s&&"hide"===i)&&e.show(),s&&"none"===i||k.effects.saveStyle(e),k.isFunction(t)&&t()}var o=O.apply(this,arguments),n=k.effects.effect[o.effect],s=n.mode,e=o.queue,i=e||"fx",a=o.complete,r=o.mode,l=[];return k.fx.off||!n?r?this[r](o.duration,a):this.each(function(){a&&a.call(this)}):!1===e?this.each(t).each(c):this.queue(i,t).queue(i,c);function c(t){var e=k(this);function i(){k.isFunction(a)&&a.call(e[0]),k.isFunction(t)&&t()}o.mode=l.shift(),!1===k.uiBackCompat||s?"none"===o.mode?(e[r](),i()):n.call(e[0],o,function(){e.removeData(D),k.effects.cleanUp(e),"hide"===o.mode&&e.hide(),i()}):(e.is(":hidden")?"hide"===r:"show"===r)?(e[r](),i()):n.call(e[0],o,i)}},show:(C=k.fn.show,function(t){if(z(t))return C.apply(this,arguments);var e=O.apply(this,arguments);return e.mode="show",this.effect.call(this,e)}),hide:(x=k.fn.hide,function(t){if(z(t))return x.apply(this,arguments);var e=O.apply(this,arguments);return e.mode="hide",this.effect.call(this,e)}),toggle:(w=k.fn.toggle,function(t){if(z(t)||"boolean"==typeof t)return w.apply(this,arguments);var e=O.apply(this,arguments);return e.mode="toggle",this.effect.call(this,e)}),cssUnit:function(t){var i=this.css(t),o=[];return k.each(["em","px","%","pt"],function(t,e){0<i.indexOf(e)&&(o=[parseFloat(i),e])}),o},cssClip:function(t){return t?this.css("clip","rect("+t.top+"px "+t.right+"px "+t.bottom+"px "+t.left+"px)"):L(this.css("clip"),this)},transfer:function(t,e){var i=k(this),o="fixed"===(r=k(t.to)).css("position"),n=k("body"),s=o?n.scrollTop():0,a=o?n.scrollLeft():0,r=(n={top:(n=r.offset()).top-s,left:n.left-a,height:r.innerHeight(),width:r.innerWidth()},i.offset()),l=k("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(t.className).css({top:r.top-s,left:r.left-a,height:i.innerHeight(),width:i.innerWidth(),position:o?"fixed":"absolute"}).animate(n,t.duration,t.easing,function(){l.remove(),k.isFunction(e)&&e()})}}),k.fx.step.clip=function(t){t.clipInit||(t.start=k(t.elem).cssClip(),"string"==typeof t.end&&(t.end=L(t.end,t.elem)),t.clipInit=!0),k(t.elem).cssClip({top:t.pos*(t.end.top-t.start.top)+t.start.top,right:t.pos*(t.end.right-t.start.right)+t.start.right,bottom:t.pos*(t.end.bottom-t.start.bottom)+t.start.bottom,left:t.pos*(t.end.left-t.start.left)+t.start.left})},T={},k.each(["Quad","Cubic","Quart","Quint","Expo"],function(e,t){T[t]=function(t){return Math.pow(t,e+2)}}),k.extend(T,{Sine:function(t){return 1-Math.cos(t*Math.PI/2)},Circ:function(t){return 1-Math.sqrt(1-t*t)},Elastic:function(t){return 0===t||1===t?t:-Math.pow(2,8*(t-1))*Math.sin((80*(t-1)-7.5)*Math.PI/15)},Back:function(t){return t*t*(3*t-2)},Bounce:function(t){for(var e,i=4;t<((e=Math.pow(2,--i))-1)/11;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((3*e-2)/22-t,2)}}),k.each(T,function(t,e){k.easing["easeIn"+t]=e,k.easing["easeOut"+t]=function(t){return 1-e(1-t)},k.easing["easeInOut"+t]=function(t){return t<.5?e(2*t)/2:1-e(-2*t+2)/2}});var F=k.effects;k.effects.define("blind","hide",function(t,e){var i={up:["bottom","top"],vertical:["bottom","top"],down:["top","bottom"],left:["right","left"],horizontal:["right","left"],right:["left","right"]},o=k(this),n=t.direction||"up",s=o.cssClip(),a={clip:k.extend({},s)},r=k.effects.createPlaceholder(o);a.clip[i[n][0]]=a.clip[i[n][1]],"show"===t.mode&&(o.cssClip(a.clip),r&&r.css(k.effects.clipToBox(a)),a.clip=s),r&&r.animate(k.effects.clipToBox(a),t.duration,t.easing),o.animate(a,{queue:!1,duration:t.duration,easing:t.easing,complete:e})}),k.effects.define("bounce",function(t,e){var i,o,n=k(this),s="hide"===(d=t.mode),a="show"===d,r=t.direction||"up",l=t.distance,c=t.times||5,d=2*c+(a||s?1:0),p=t.duration/d,u=t.easing,h="up"===r||"down"===r?"top":"left",f="up"===r||"left"===r,g=0;t=n.queue().length;for(k.effects.createPlaceholder(n),r=n.css(h),l=l||n["top"==h?"outerHeight":"outerWidth"]()/3,a&&((o={opacity:1})[h]=r,n.css("opacity",0).css(h,f?2*-l:2*l).animate(o,p,u)),s&&(l/=Math.pow(2,c-1)),(o={})[h]=r;g<c;g++)(i={})[h]=(f?"-=":"+=")+l,n.animate(i,p,u).animate(o,p,u),l=s?2*l:l/2;s&&((i={opacity:0})[h]=(f?"-=":"+=")+l,n.animate(i,p,u)),n.queue(e),k.effects.unshift(n,t,1+d)}),k.effects.define("clip","hide",function(t,e){var i={},o=k(this),n=(s="both"===(a=t.direction||"vertical"))||"horizontal"===a,s=s||"vertical"===a,a=o.cssClip();i.clip={top:s?(a.bottom-a.top)/2:a.top,right:n?(a.right-a.left)/2:a.right,bottom:s?(a.bottom-a.top)/2:a.bottom,left:n?(a.right-a.left)/2:a.left},k.effects.createPlaceholder(o),"show"===t.mode&&(o.cssClip(i.clip),i.clip=a),o.animate(i,{queue:!1,duration:t.duration,easing:t.easing,complete:e})}),k.effects.define("drop","hide",function(t,e){var i=k(this),o="show"===t.mode,n=t.direction||"left",s="up"===n||"down"===n?"top":"left",a="up"===n||"left"===n?"-=":"+=",r="+="==a?"-=":"+=",l={opacity:0};k.effects.createPlaceholder(i),n=t.distance||i["top"==s?"outerHeight":"outerWidth"](!0)/2,l[s]=a+n,o&&(i.css(l),l[s]=r+n,l.opacity=1),i.animate(l,{queue:!1,duration:t.duration,easing:t.easing,complete:e})}),k.effects.define("explode","hide",function(t,e){var i,o,n,s,a,r,l=t.pieces?Math.round(Math.sqrt(t.pieces)):3,c=l,d=k(this),p="show"===t.mode,u=d.show().css("visibility","hidden").offset(),h=Math.ceil(d.outerWidth()/c),f=Math.ceil(d.outerHeight()/l),g=[];function m(){g.push(this),g.length===l*c&&(d.css({visibility:"visible"}),k(g).remove(),e())}for(i=0;i<l;i++)for(s=u.top+i*f,r=i-(l-1)/2,o=0;o<c;o++)n=u.left+o*h,a=o-(c-1)/2,d.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-o*h,top:-i*f}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:h,height:f,left:n+(p?a*h:0),top:s+(p?r*f:0),opacity:p?0:1}).animate({left:n+(p?0:a*h),top:s+(p?0:r*f),opacity:p?1:0},t.duration||500,t.easing,m)}),k.effects.define("fade","toggle",function(t,e){var i="show"===t.mode;k(this).css("opacity",i?0:1).animate({opacity:i?1:0},{queue:!1,duration:t.duration,easing:t.easing,complete:e})}),k.effects.define("fold","hide",function(e,t){var i=k(this),o="show"===(f=e.mode),n="hide"===f,s=e.size||15,a=/([0-9]+)%/.exec(s),r=e.horizFirst?["right","bottom"]:["bottom","right"],l=e.duration/2,c=k.effects.createPlaceholder(i),d=i.cssClip(),p={clip:k.extend({},d)},u={clip:k.extend({},d)},h=[d[r[0]],d[r[1]]],f=i.queue().length;a&&(s=parseInt(a[1],10)/100*h[n?0:1]),p.clip[r[0]]=s,u.clip[r[0]]=s,u.clip[r[1]]=0,o&&(i.cssClip(u.clip),c&&c.css(k.effects.clipToBox(u)),u.clip=d),i.queue(function(t){c&&c.animate(k.effects.clipToBox(p),l,e.easing).animate(k.effects.clipToBox(u),l,e.easing),t()}).animate(p,l,e.easing).animate(u,l,e.easing).queue(t),k.effects.unshift(i,f,4)}),k.effects.define("highlight","show",function(t,e){var i=k(this),o={backgroundColor:i.css("backgroundColor")};"hide"===t.mode&&(o.opacity=0),k.effects.saveStyle(i),i.css({backgroundImage:"none",backgroundColor:t.color||"#ffff99"}).animate(o,{queue:!1,duration:t.duration,easing:t.easing,complete:e})}),k.effects.define("size",function(o,e){var n,i=k(this),t=["fontSize"],s=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],a=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],r=o.mode,l="effect"!==r,c=o.scale||"both",d=o.origin||["middle","center"],p=i.css("position"),u=i.position(),h=k.effects.scaledDimensions(i),f=o.from||h,g=o.to||k.effects.scaledDimensions(i,0);k.effects.createPlaceholder(i),"show"===r&&(r=f,f=g,g=r),n={from:{y:f.height/h.height,x:f.width/h.width},to:{y:g.height/h.height,x:g.width/h.width}},"box"!==c&&"both"!==c||(n.from.y!==n.to.y&&(f=k.effects.setTransition(i,s,n.from.y,f),g=k.effects.setTransition(i,s,n.to.y,g)),n.from.x!==n.to.x&&(f=k.effects.setTransition(i,a,n.from.x,f),g=k.effects.setTransition(i,a,n.to.x,g))),"content"!==c&&"both"!==c||n.from.y!==n.to.y&&(f=k.effects.setTransition(i,t,n.from.y,f),g=k.effects.setTransition(i,t,n.to.y,g)),d&&(d=k.effects.getBaseline(d,h),f.top=(h.outerHeight-f.outerHeight)*d.y+u.top,f.left=(h.outerWidth-f.outerWidth)*d.x+u.left,g.top=(h.outerHeight-g.outerHeight)*d.y+u.top,g.left=(h.outerWidth-g.outerWidth)*d.x+u.left),i.css(f),"content"!==c&&"both"!==c||(s=s.concat(["marginTop","marginBottom"]).concat(t),a=a.concat(["marginLeft","marginRight"]),i.find("*[width]").each(function(){var t=k(this),e={height:(i=k.effects.scaledDimensions(t)).height*n.from.y,width:i.width*n.from.x,outerHeight:i.outerHeight*n.from.y,outerWidth:i.outerWidth*n.from.x},i={height:i.height*n.to.y,width:i.width*n.to.x,outerHeight:i.height*n.to.y,outerWidth:i.width*n.to.x};n.from.y!==n.to.y&&(e=k.effects.setTransition(t,s,n.from.y,e),i=k.effects.setTransition(t,s,n.to.y,i)),n.from.x!==n.to.x&&(e=k.effects.setTransition(t,a,n.from.x,e),i=k.effects.setTransition(t,a,n.to.x,i)),l&&k.effects.saveStyle(t),t.css(e),t.animate(i,o.duration,o.easing,function(){l&&k.effects.restoreStyle(t)})})),i.animate(g,{queue:!1,duration:o.duration,easing:o.easing,complete:function(){var t=i.offset();0===g.opacity&&i.css("opacity",f.opacity),l||(i.css("position","static"===p?"relative":p).offset(t),k.effects.saveStyle(i)),e()}})}),k.effects.define("scale",function(t,e){var i=k(this),o=t.mode;o=parseInt(t.percent,10)||(0===parseInt(t.percent,10)||"effect"!==o?0:100),o=k.extend(!0,{from:k.effects.scaledDimensions(i),to:k.effects.scaledDimensions(i,o,t.direction||"both"),origin:t.origin||["middle","center"]},t);t.fade&&(o.from.opacity=1,o.to.opacity=0),k.effects.effect.size.call(this,o,e)}),k.effects.define("puff","hide",function(t,e){t=k.extend(!0,{},t,{fade:!0,percent:parseInt(t.percent,10)||150}),k.effects.effect.scale.call(this,t,e)}),k.effects.define("pulsate","show",function(t,e){var i=k(this),o="show"===(n=t.mode),n=o||"hide"===n,s=2*(t.times||5)+(n?1:0),a=t.duration/s,r=0,l=1;n=i.queue().length;for(!o&&i.is(":visible")||(i.css("opacity",0).show(),r=1);l<s;l++)i.animate({opacity:r},a,t.easing),r=1-r;i.animate({opacity:r},a,t.easing),i.queue(e),k.effects.unshift(i,n,1+s)}),k.effects.define("shake",function(t,e){var i=1,o=k(this),n=t.direction||"left",s=t.distance||20,a=t.times||3,r=2*a+1,l=Math.round(t.duration/r),c="up"===n||"down"===n?"top":"left",d="up"===n||"left"===n,p={},u={},h={};n=o.queue().length;for(k.effects.createPlaceholder(o),p[c]=(d?"-=":"+=")+s,u[c]=(d?"+=":"-=")+2*s,h[c]=(d?"-=":"+=")+2*s,o.animate(p,l,t.easing);i<a;i++)o.animate(u,l,t.easing).animate(h,l,t.easing);o.animate(u,l,t.easing).animate(p,l/2,t.easing).queue(e),k.effects.unshift(o,n,1+r)}),k.effects.define("slide","show",function(t,e){var i,o,n=k(this),s={up:["bottom","top"],down:["top","bottom"],left:["right","left"],right:["left","right"]},a=t.mode,r=t.direction||"left",l="up"===r||"down"===r?"top":"left",c="up"===r||"left"===r,d=t.distance||n["top"==l?"outerHeight":"outerWidth"](!0),p={};k.effects.createPlaceholder(n),i=n.cssClip(),o=n.position()[l],p[l]=(c?-1:1)*d+o,p.clip=n.cssClip(),p.clip[s[r][1]]=p.clip[s[r][0]],"show"===a&&(n.cssClip(p.clip),n.css(l,p[l]),p.clip=i,p[l]=o),n.animate(p,{queue:!1,duration:t.duration,easing:t.easing,complete:e})}),!1!==k.uiBackCompat&&(F=k.effects.define("transfer",function(t,e){k(this).transfer(t,e)}))}),function(d,a,g,m){"use strict";function i(t,e){var i,o,n=[],s=0;t&&t.isDefaultPrevented()||(t.preventDefault(),(o=(i=(e=t&&t.data?t.data.options:e||{}).$target||g(t.currentTarget)).attr("data-fancybox")||"")?(s=(n=(n=e.selector?g(e.selector):t.data?t.data.items:[]).length?n.filter('[data-fancybox="'+o+'"]'):g('[data-fancybox="'+o+'"]')).index(i))<0&&(s=0):n=[i],g.fancybox.open(n,e,s))}if(d.console=d.console||{info:function(t){}},g){if(g.fn.fancybox)return console.info("fancyBox already initialized");var t={loop:!1,gutter:50,keyboard:!0,arrows:!0,infobar:!0,smallBtn:"auto",toolbar:"auto",buttons:["zoom","thumbs","close"],idleTime:3,protect:!1,modal:!1,image:{preload:!1},ajax:{settings:{data:{fancybox:!0}}},iframe:{tpl:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""></iframe>',preload:!0,css:{},attr:{scrolling:"auto"}},defaultType:"image",animationEffect:"zoom",animationDuration:366,zoomOpacity:"auto",transitionEffect:"fade",transitionDuration:366,slideClass:"",baseClass:"",baseTpl:'<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"></div></div></div>',spinnerTpl:'<div class="fancybox-loading"></div>',errorTpl:'<div class="fancybox-error"><p>{{ERROR}}</p></div>',btnTpl:{download:'<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg viewBox="0 0 40 40"><path d="M13,16 L20,23 L27,16 M20,7 L20,23 M10,24 L10,28 L30,28 L30,24" /></svg></a>',zoom:'<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg viewBox="0 0 40 40"><path d="M18,17 m-8,0 a8,8 0 1,0 16,0 a8,8 0 1,0 -16,0 M24,22 L31,29" /></svg></button>',close:'<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg viewBox="0 0 40 40"><path d="M10,10 L30,30 M30,10 L10,30" /></svg></button>',smallBtn:'<button data-fancybox-close class="fancybox-close-small" title="{{CLOSE}}"><svg viewBox="0 0 32 32"><path d="M10,10 L22,22 M22,10 L10,22"></path></svg></button>',arrowLeft:'<a data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}" href="javascript:;"><svg viewBox="0 0 40 40"><path d="M18,12 L10,20 L18,28 M10,20 L30,20"></path></svg></a>',arrowRight:'<a data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}" href="javascript:;"><svg viewBox="0 0 40 40"><path d="M10,20 L30,20 M22,12 L30,20 L22,28"></path></svg></a>'},parentEl:"body",autoFocus:!1,backFocus:!0,trapFocus:!0,fullScreen:{autoStart:!1},touch:{vertical:!0,momentum:!0},hash:null,media:{},slideShow:{autoStart:!1,speed:4e3},thumbs:{autoStart:!1,hideOnClose:!0,parentEl:".fancybox-container",axis:"y"},wheel:"auto",onInit:g.noop,beforeLoad:g.noop,afterLoad:g.noop,beforeShow:g.noop,afterShow:g.noop,beforeClose:g.noop,afterClose:g.noop,onActivate:g.noop,onDeactivate:g.noop,clickContent:function(t,e){return"image"===t.type&&"zoom"},clickSlide:"close",clickOutside:"close",dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1,mobile:{idleTime:!1,clickContent:function(t,e){return"image"===t.type&&"toggleControls"},clickSlide:function(t,e){return"image"===t.type?"toggleControls":"close"},dblclickContent:function(t,e){return"image"===t.type&&"zoom"},dblclickSlide:function(t,e){return"image"===t.type&&"zoom"}},lang:"en",i18n:{en:{CLOSE:"Close",NEXT:"Next",PREV:"Previous",ERROR:"The requested content cannot be loaded. <br/> Please try again later.",PLAY_START:"Start slideshow",PLAY_STOP:"Pause slideshow",FULL_SCREEN:"Full screen",THUMBS:"Thumbnails",DOWNLOAD:"Download",SHARE:"Share",ZOOM:"Zoom"},de:{CLOSE:"Schliessen",NEXT:"Weiter",PREV:"Zurück",ERROR:"Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es später nochmal.",PLAY_START:"Diaschau starten",PLAY_STOP:"Diaschau beenden",FULL_SCREEN:"Vollbild",THUMBS:"Vorschaubilder",DOWNLOAD:"Herunterladen",SHARE:"Teilen",ZOOM:"Maßstab"}}},n=g(d),r=g(a),s=0,u=d.requestAnimationFrame||d.webkitRequestAnimationFrame||d.mozRequestAnimationFrame||d.oRequestAnimationFrame||function(t){return d.setTimeout(t,1e3/60)},h=function(){var t,e=a.createElement("fakeelement"),i={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(t in i)if(e.style[t]!==m)return i[t];return"transitionend"}(),f=function(t){return t&&t.length&&t[0].offsetHeight},l=function(t,e){var i=g.extend(!0,{},t,e);return g.each(e,function(t,e){g.isArray(e)&&(i[t]=e)}),i},o=function(t,e,i){var o=this;o.opts=l({index:i},g.fancybox.defaults),g.isPlainObject(e)&&(o.opts=l(o.opts,e)),g.fancybox.isMobile&&(o.opts=l(o.opts,o.opts.mobile)),o.id=o.opts.id||++s,o.currIndex=parseInt(o.opts.index,10)||0,o.prevIndex=null,o.prevPos=null,o.currPos=0,o.firstRun=!0,o.group=[],o.slides={},o.addContent(t),o.group.length&&(o.$lastFocus=g(a.activeElement).trigger("blur"),o.init())};g.extend(o.prototype,{init:function(){var t,e,i,o=this,n=o.group[o.currIndex].opts,s=g.fancybox.scrollbarWidth;g.fancybox.getInstance()||!1===n.hideScrollbar||(g("body").addClass("fancybox-active"),!g.fancybox.isMobile&&a.body.scrollHeight>d.innerHeight&&(s===m&&(t=g('<div style="width:100px;height:100px;overflow:scroll;" />').appendTo("body"),s=g.fancybox.scrollbarWidth=t[0].offsetWidth-t[0].clientWidth,t.remove()),g("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar { margin-right: '+s+"px; }</style>"),g("body").addClass("compensate-for-scrollbar"))),i="",g.each(n.buttons,function(t,e){i+=n.btnTpl[e]||""}),e=g(o.translate(o,n.baseTpl.replace("{{buttons}}",i).replace("{{arrows}}",n.btnTpl.arrowLeft+n.btnTpl.arrowRight))).attr("id","fancybox-container-"+o.id).addClass("fancybox-is-hidden").addClass(n.baseClass).data("FancyBox",o).appendTo(n.parentEl),o.$refs={container:e},["bg","inner","infobar","toolbar","stage","caption","navigation"].forEach(function(t){o.$refs[t]=e.find(".fancybox-"+t)}),o.trigger("onInit"),o.activate(),o.jumpTo(o.currIndex)},translate:function(t,e){var o=t.opts.i18n[t.opts.lang];return e.replace(/\{\{(\w+)\}\}/g,function(t,e){var i=o[e];return i===m?t:i})},addContent:function(t){var e,c=this,i=g.makeArray(t);g.each(i,function(t,e){var i,o,n,s,a,r={},l={};g.isPlainObject(e)?l=(r=e).opts||e:"object"===g.type(e)&&g(e).length?(l=(i=g(e)).data()||{},(l=g.extend(!0,{},l,l.options)).$orig=i,r.src=c.opts.src||l.src||i.attr("href"),r.type||r.src||(r.type="inline",r.src=e)):r={type:"html",src:e+""},r.opts=g.extend(!0,{},c.opts,l),g.isArray(l.buttons)&&(r.opts.buttons=l.buttons),o=r.type||r.opts.type,s=r.src||"",!o&&s&&((n=s.match(/\.(mp4|mov|ogv)((\?|#).*)?$/i))?(o="video",r.opts.videoFormat||(r.opts.videoFormat="video/"+("ogv"===n[1]?"ogg":n[1]))):s.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)?o="image":s.match(/\.(pdf)((\?|#).*)?$/i)?o="iframe":"#"===s.charAt(0)&&(o="inline")),o?r.type=o:c.trigger("objectNeedsType",r),r.contentType||(r.contentType=-1<g.inArray(r.type,["html","inline","ajax"])?"html":r.type),r.index=c.group.length,"auto"==r.opts.smallBtn&&(r.opts.smallBtn=-1<g.inArray(r.type,["html","inline","ajax"])),"auto"===r.opts.toolbar&&(r.opts.toolbar=!r.opts.smallBtn),r.opts.$trigger&&r.index===c.opts.index&&(r.opts.$thumb=r.opts.$trigger.find("img:first")),r.opts.$thumb&&r.opts.$thumb.length||!r.opts.$orig||(r.opts.$thumb=r.opts.$orig.find("img:first")),"function"===g.type(r.opts.caption)&&(r.opts.caption=r.opts.caption.apply(e,[c,r])),"function"===g.type(c.opts.caption)&&(r.opts.caption=c.opts.caption.apply(e,[c,r])),r.opts.caption instanceof g||(r.opts.caption=r.opts.caption===m?"":r.opts.caption+""),"ajax"!==r.type||1<(a=s.split(/\s+/,2)).length&&(r.src=a.shift(),r.opts.filter=a.shift()),r.opts.modal&&(r.opts=g.extend(!0,r.opts,{infobar:0,toolbar:0,smallBtn:0,keyboard:0,slideShow:0,fullScreen:0,thumbs:0,touch:0,clickContent:!1,clickSlide:!1,clickOutside:!1,dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1})),c.group.push(r)}),Object.keys(c.slides).length&&(c.updateControls(),(e=c.Thumbs)&&e.isActive&&(e.create(),e.focus()))},addEvents:function(){var o=this;o.removeEvents(),o.$refs.container.on("click.fb-close","[data-fancybox-close]",function(t){t.stopPropagation(),t.preventDefault(),o.close(t)}).on("touchstart.fb-prev click.fb-prev","[data-fancybox-prev]",function(t){t.stopPropagation(),t.preventDefault(),o.previous()}).on("touchstart.fb-next click.fb-next","[data-fancybox-next]",function(t){t.stopPropagation(),t.preventDefault(),o.next()}).on("click.fb","[data-fancybox-zoom]",function(t){o[o.isScaledDown()?"scaleToActual":"scaleToFit"]()}),n.on("orientationchange.fb resize.fb",function(t){t&&t.originalEvent&&"resize"===t.originalEvent.type?u(function(){o.update()}):(o.$refs.stage.hide(),setTimeout(function(){o.$refs.stage.show(),o.update()},g.fancybox.isMobile?600:250))}),r.on("focusin.fb",function(t){var e=g.fancybox?g.fancybox.getInstance():null;e.isClosing||!e.current||!e.current.opts.trapFocus||g(t.target).hasClass("fancybox-container")||g(t.target).is(a)||e&&"fixed"!==g(t.target).css("position")&&!e.$refs.container.has(t.target).length&&(t.stopPropagation(),e.focus())}),r.on("keydown.fb",function(t){var e=o.current,i=t.keyCode||t.which;if(e&&e.opts.keyboard&&!(t.ctrlKey||t.altKey||t.shiftKey||g(t.target).is("input")||g(t.target).is("textarea")))return 8===i||27===i?(t.preventDefault(),void o.close(t)):37===i||38===i?(t.preventDefault(),void o.previous()):39===i||40===i?(t.preventDefault(),void o.next()):void o.trigger("afterKeydown",t,i)}),o.group[o.currIndex].opts.idleTime&&(o.idleSecondsCounter=0,r.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle",function(t){o.idleSecondsCounter=0,o.isIdle&&o.showControls(),o.isIdle=!1}),o.idleInterval=d.setInterval(function(){o.idleSecondsCounter++,o.idleSecondsCounter>=o.group[o.currIndex].opts.idleTime&&!o.isDragging&&(o.isIdle=!0,o.idleSecondsCounter=0,o.hideControls())},1e3))},removeEvents:function(){n.off("orientationchange.fb resize.fb"),r.off("focusin.fb keydown.fb .fb-idle"),this.$refs.container.off(".fb-close .fb-prev .fb-next"),this.idleInterval&&(d.clearInterval(this.idleInterval),this.idleInterval=null)},previous:function(t){return this.jumpTo(this.currPos-1,t)},next:function(t){return this.jumpTo(this.currPos+1,t)},jumpTo:function(t,o){var e,i,n,s,a,r,l,c=this,d=c.group.length;if(!(c.isDragging||c.isClosing||c.isAnimating&&c.firstRun)){if(t=parseInt(t,10),!(i=c.current?c.current.opts.loop:c.opts.loop)&&(t<0||d<=t))return!1;if(e=c.firstRun=!Object.keys(c.slides).length,!(d<2&&!e&&c.isDragging)){if(s=c.current,c.prevIndex=c.currIndex,c.prevPos=c.currPos,n=c.createSlide(t),1<d&&((i||0<n.index)&&c.createSlide(t-1),(i||n.index<d-1)&&c.createSlide(t+1)),c.current=n,c.currIndex=n.index,c.currPos=n.pos,c.trigger("beforeShow",e),c.updateControls(),r=g.fancybox.getTranslate(n.$slide),n.isMoved=(0!==r.left||0!==r.top)&&!n.$slide.hasClass("fancybox-animated"),n.forcedDuration=m,g.isNumeric(o)?n.forcedDuration=o:o=n.opts[e?"animationDuration":"transitionDuration"],o=parseInt(o,10),e)return n.opts.animationEffect&&o&&c.$refs.container.css("transition-duration",o+"ms"),c.$refs.container.removeClass("fancybox-is-hidden"),f(c.$refs.container),c.$refs.container.addClass("fancybox-is-open"),f(c.$refs.container),n.$slide.addClass("fancybox-slide--previous"),c.loadSlide(n),n.$slide.removeClass("fancybox-slide--previous").addClass("fancybox-slide--current"),void c.preload("image");g.each(c.slides,function(t,e){g.fancybox.stop(e.$slide)}),n.$slide.removeClass("fancybox-slide--next fancybox-slide--previous").addClass("fancybox-slide--current"),n.isMoved?(a=Math.round(n.$slide.width()),g.each(c.slides,function(t,e){var i=e.pos-n.pos;g.fancybox.animate(e.$slide,{top:0,left:i*a+i*e.opts.gutter},o,function(){e.$slide.removeAttr("style").removeClass("fancybox-slide--next fancybox-slide--previous"),e.pos===c.currPos&&(n.isMoved=!1,c.complete())})})):c.$refs.stage.children().removeAttr("style"),n.isLoaded?c.revealContent(n):c.loadSlide(n),c.preload("image"),s.pos!==n.pos&&(l="fancybox-slide--"+(s.pos>n.pos?"next":"previous"),s.$slide.removeClass("fancybox-slide--complete fancybox-slide--current fancybox-slide--next fancybox-slide--previous"),s.isComplete=!1,o&&(n.isMoved||n.opts.transitionEffect)&&(n.isMoved?s.$slide.addClass(l):(l="fancybox-animated "+l+" fancybox-fx-"+n.opts.transitionEffect,g.fancybox.animate(s.$slide,l,o,function(){s.$slide.removeClass(l).removeAttr("style")}))))}}},createSlide:function(t){var e,i,o=this;return i=(i=t%o.group.length)<0?o.group.length+i:i,!o.slides[t]&&o.group[i]&&(e=g('<div class="fancybox-slide"></div>').appendTo(o.$refs.stage),o.slides[t]=g.extend(!0,{},o.group[i],{pos:t,$slide:e,isLoaded:!1}),o.updateSlide(o.slides[t])),o.slides[t]},scaleToActual:function(t,e,i){var o,n,s,a,r,l=this,c=l.current,d=c.$content,p=g.fancybox.getTranslate(c.$slide).width,u=g.fancybox.getTranslate(c.$slide).height,h=c.width,f=c.height;!l.isAnimating&&d&&"image"==c.type&&c.isLoaded&&!c.hasError&&(g.fancybox.stop(d),l.isAnimating=!0,t=t===m?.5*p:t,e=e===m?.5*u:e,(o=g.fancybox.getTranslate(d)).top-=g.fancybox.getTranslate(c.$slide).top,o.left-=g.fancybox.getTranslate(c.$slide).left,a=h/o.width,r=f/o.height,n=.5*p-.5*h,s=.5*u-.5*f,p<h&&(0<(n=o.left*a-(t*a-t))&&(n=0),n<p-h&&(n=p-h)),u<f&&(0<(s=o.top*r-(e*r-e))&&(s=0),s<u-f&&(s=u-f)),l.updateCursor(h,f),g.fancybox.animate(d,{top:s,left:n,scaleX:a,scaleY:r},i||330,function(){l.isAnimating=!1}),l.SlideShow&&l.SlideShow.isActive&&l.SlideShow.stop())},scaleToFit:function(t){var e,i=this,o=i.current,n=o.$content;!i.isAnimating&&n&&"image"==o.type&&o.isLoaded&&!o.hasError&&(g.fancybox.stop(n),i.isAnimating=!0,e=i.getFitPos(o),i.updateCursor(e.width,e.height),g.fancybox.animate(n,{top:e.top,left:e.left,scaleX:e.width/n.width(),scaleY:e.height/n.height()},t||330,function(){i.isAnimating=!1}))},getFitPos:function(t){var e,i,o,n,s,a=t.$content,r=t.width||t.opts.width,l=t.height||t.opts.height,c={};return!!(t.isLoaded&&a&&a.length)&&(n={top:parseInt(t.$slide.css("paddingTop"),10),right:parseInt(t.$slide.css("paddingRight"),10),bottom:parseInt(t.$slide.css("paddingBottom"),10),left:parseInt(t.$slide.css("paddingLeft"),10)},e=parseInt(this.$refs.stage.width(),10)-(n.left+n.right),i=parseInt(this.$refs.stage.height(),10)-(n.top+n.bottom),r&&l||(r=e,l=i),o=Math.min(1,e/r,i/l),r=Math.floor(o*r),l=Math.floor(o*l),"image"===t.type?(c.top=Math.floor(.5*(i-l))+n.top,c.left=Math.floor(.5*(e-r))+n.left):"video"===t.contentType&&(r/(s=t.opts.width&&t.opts.height?r/l:t.opts.ratio||16/9)<l?l=r/s:l*s<r&&(r=l*s)),c.width=r,c.height=l,c)},update:function(){var i=this;g.each(i.slides,function(t,e){i.updateSlide(e)})},updateSlide:function(t,e){var i=this,o=t&&t.$content,n=t.width||t.opts.width,s=t.height||t.opts.height;o&&(n||s||"video"===t.contentType)&&!t.hasError&&(g.fancybox.stop(o),g.fancybox.setTranslate(o,i.getFitPos(t)),t.pos===i.currPos&&(i.isAnimating=!1,i.updateCursor())),t.$slide.trigger("refresh"),i.$refs.toolbar.toggleClass("compensate-for-scrollbar",t.$slide.get(0).scrollHeight>t.$slide.get(0).clientHeight),i.trigger("onUpdate",t)},centerSlide:function(t,e){var i,o;this.current&&(i=Math.round(t.$slide.width()),o=t.pos-this.current.pos,g.fancybox.animate(t.$slide,{top:0,left:o*i+o*t.opts.gutter,opacity:1},e===m?0:e,null,!1))},updateCursor:function(t,e){var i,o=this,n=o.current,s=o.$refs.container.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-drag fancybox-can-zoomOut");n&&!o.isClosing&&(i=o.isZoomable(),s.toggleClass("fancybox-is-zoomable",i),g("[data-fancybox-zoom]").prop("disabled",!i),i&&("zoom"===n.opts.clickContent||g.isFunction(n.opts.clickContent)&&"zoom"===n.opts.clickContent(n))?o.isScaledDown(t,e)?s.addClass("fancybox-can-zoomIn"):n.opts.touch?s.addClass("fancybox-can-drag"):s.addClass("fancybox-can-zoomOut"):n.opts.touch&&"video"!==n.contentType&&s.addClass("fancybox-can-drag"))},isZoomable:function(){var t,e=this.current;if(e&&!this.isClosing&&"image"===e.type&&!e.hasError){if(!e.isLoaded)return!0;if(t=this.getFitPos(e),e.width>t.width||e.height>t.height)return!0}return!1},isScaledDown:function(t,e){var i=!1,o=this.current,n=o.$content;return t!==m&&e!==m?i=t<o.width&&e<o.height:n&&(i=(i=g.fancybox.getTranslate(n)).width<o.width&&i.height<o.height),i},canPan:function(){var t,e=!1,i=this.current;return"image"===i.type&&(t=i.$content)&&!i.hasError&&(e=this.getFitPos(i),e=1<Math.abs(t.width()-e.width)||1<Math.abs(t.height()-e.height)),e},loadSlide:function(i){var t,e,o,n=this;if(!i.isLoading&&!i.isLoaded){switch(i.isLoading=!0,n.trigger("beforeLoad",i),t=i.type,(e=i.$slide).off("refresh").trigger("onReset").addClass(i.opts.slideClass),t){case"image":n.setImage(i);break;case"iframe":n.setIframe(i);break;case"html":n.setContent(i,i.src||i.content);break;case"video":n.setContent(i,'<video class="fancybox-video" controls controlsList="nodownload"><source src="'+i.src+'" type="'+i.opts.videoFormat+"\">Your browser doesn't support HTML5 video</video");break;case"inline":g(i.src).length?n.setContent(i,g(i.src)):n.setError(i);break;case"ajax":n.showLoading(i),o=g.ajax(g.extend({},i.opts.ajax.settings,{url:i.src,success:function(t,e){"success"===e&&n.setContent(i,t)},error:function(t,e){t&&"abort"!==e&&n.setError(i)}})),e.one("onReset",function(){o.abort()});break;default:n.setError(i)}return!0}},setImage:function(e){var t,i,o,n,s,a=this,r=e.opts.srcset||e.opts.image.srcset;if(e.timouts=setTimeout(function(){var t=e.$image;!e.isLoading||t&&t[0].complete||e.hasError||a.showLoading(e)},350),r){n=d.devicePixelRatio||1,s=d.innerWidth*n,(o=r.split(",").map(function(t){var o={};return t.trim().split(/\s+/).forEach(function(t,e){var i=parseInt(t.substring(0,t.length-1),10);return 0===e?o.url=t:void(i&&(o.value=i,o.postfix=t[t.length-1]))}),o})).sort(function(t,e){return t.value-e.value});for(var l=0;l<o.length;l++){var c=o[l];if("w"===c.postfix&&c.value>=s||"x"===c.postfix&&c.value>=n){i=c;break}}!i&&o.length&&(i=o[o.length-1]),i&&(e.src=i.url,e.width&&e.height&&"w"==i.postfix&&(e.height=e.width/e.height*i.value,e.width=i.value),e.opts.srcset=r)}e.$content=g('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(e.$slide.addClass("fancybox-slide--image")),t=e.opts.thumb||!(!e.opts.$thumb||!e.opts.$thumb.length)&&e.opts.$thumb.attr("src"),!1!==e.opts.preload&&e.opts.width&&e.opts.height&&t&&(e.width=e.opts.width,e.height=e.opts.height,e.$ghost=g("<img />").one("error",function(){g(this).remove(),e.$ghost=null}).one("load",function(){a.afterLoad(e)}).addClass("fancybox-image").appendTo(e.$content).attr("src",t)),a.setBigImage(e)},setBigImage:function(e){var i=this,o=g("<img />");e.$image=o.one("error",function(){i.setError(e)}).one("load",function(){var t;e.$ghost||(i.resolveImageSlideSize(e,this.naturalWidth,this.naturalHeight),i.afterLoad(e)),e.timouts&&(clearTimeout(e.timouts),e.timouts=null),i.isClosing||(e.opts.srcset&&((t=e.opts.sizes)&&"auto"!==t||(t=(1<e.width/e.height&&1<n.width()/n.height()?"100":Math.round(e.width/e.height*100))+"vw"),o.attr("sizes",t).attr("srcset",e.opts.srcset)),e.$ghost&&setTimeout(function(){e.$ghost&&!i.isClosing&&e.$ghost.hide()},Math.min(300,Math.max(1e3,e.height/1600))),i.hideLoading(e))}).addClass("fancybox-image").attr("src",e.src).appendTo(e.$content),(o[0].complete||"complete"==o[0].readyState)&&o[0].naturalWidth&&o[0].naturalHeight?o.trigger("load"):o[0].error&&o.trigger("error")},resolveImageSlideSize:function(t,e,i){var o=parseInt(t.opts.width,10),n=parseInt(t.opts.height,10);t.width=e,t.height=i,0<o&&(t.width=o,t.height=Math.floor(o*i/e)),0<n&&(t.width=Math.floor(n*e/i),t.height=n)},setIframe:function(n){var s,e=this,a=n.opts.iframe,t=n.$slide;n.$content=g('<div class="fancybox-content'+(a.preload?" fancybox-is-hidden":"")+'"></div>').css(a.css).appendTo(t),t.addClass("fancybox-slide--"+n.contentType),n.$iframe=s=g(a.tpl.replace(/\{rnd\}/g,(new Date).getTime())).attr(a.attr).appendTo(n.$content),a.preload?(e.showLoading(n),s.on("load.fb error.fb",function(t){this.isReady=1,n.$slide.trigger("refresh"),e.afterLoad(n)}),t.on("refresh.fb",function(){var t,e=n.$content,i=a.css.width,o=a.css.height;if(1===s[0].isReady){try{t=s.contents().find("body")}catch(t){}t&&t.length&&t.children().length&&(e.css({width:"",height:""}),i===m&&(i=Math.ceil(Math.max(t[0].clientWidth,t.outerWidth(!0)))),i&&e.width(i),o===m&&(o=Math.ceil(Math.max(t[0].clientHeight,t.outerHeight(!0)))),o&&e.height(o)),e.removeClass("fancybox-is-hidden")}})):this.afterLoad(n),s.attr("src",n.src),t.one("onReset",function(){try{g(this).find("iframe").hide().unbind().attr("src","//about:blank")}catch(t){}g(this).off("refresh.fb").empty(),n.isLoaded=!1})},setContent:function(t,e){var i;this.isClosing||(this.hideLoading(t),t.$content&&g.fancybox.stop(t.$content),t.$slide.empty(),(i=e)&&i.hasOwnProperty&&i instanceof g&&e.parent().length?(e.parent().parent(".fancybox-slide--inline").trigger("onReset"),t.$placeholder=g("<div>").hide().insertAfter(e),e.css("display","inline-block")):t.hasError||("string"!==g.type(e)||3===(e=g("<div>").append(g.trim(e)).contents())[0].nodeType&&(e=g("<div>").html(e)),t.opts.filter&&(e=g("<div>").html(e).find(t.opts.filter))),t.$slide.one("onReset",function(){g(this).find("video,audio").trigger("pause"),t.$placeholder&&(t.$placeholder.after(e.hide()).remove(),t.$placeholder=null),t.$smallBtn&&(t.$smallBtn.remove(),t.$smallBtn=null),t.hasError||(g(this).empty(),t.isLoaded=!1)}),g(e).appendTo(t.$slide),g(e).is("video,audio")&&(g(e).addClass("fancybox-video"),g(e).wrap("<div></div>"),t.contentType="video",t.opts.width=t.opts.width||g(e).attr("width"),t.opts.height=t.opts.height||g(e).attr("height")),t.$content=t.$slide.children().filter("div,form,main,video,audio").first().addClass("fancybox-content"),t.$slide.addClass("fancybox-slide--"+t.contentType),this.afterLoad(t))},setError:function(t){t.hasError=!0,t.$slide.trigger("onReset").removeClass("fancybox-slide--"+t.contentType).addClass("fancybox-slide--error"),t.contentType="html",this.setContent(t,this.translate(t,t.opts.errorTpl)),t.pos===this.currPos&&(this.isAnimating=!1)},showLoading:function(t){(t=t||this.current)&&!t.$spinner&&(t.$spinner=g(this.translate(this,this.opts.spinnerTpl)).appendTo(t.$slide))},hideLoading:function(t){(t=t||this.current)&&t.$spinner&&(t.$spinner.remove(),delete t.$spinner)},afterLoad:function(t){var e=this;e.isClosing||(t.isLoading=!1,t.isLoaded=!0,e.trigger("afterLoad",t),e.hideLoading(t),t.pos===e.currPos&&e.updateCursor(),!t.opts.smallBtn||t.$smallBtn&&t.$smallBtn.length||(t.$smallBtn=g(e.translate(t,t.opts.btnTpl.smallBtn)).prependTo(t.$content)),t.opts.protect&&t.$content&&!t.hasError&&(t.$content.on("contextmenu.fb",function(t){return 2==t.button&&t.preventDefault(),!0}),"image"===t.type&&g('<div class="fancybox-spaceball"></div>').appendTo(t.$content)),e.revealContent(t))},revealContent:function(e){var t,i,o,n,s=this,a=e.$slide,r=!1,l=!1;return t=e.opts[s.firstRun?"animationEffect":"transitionEffect"],o=e.opts[s.firstRun?"animationDuration":"transitionDuration"],o=parseInt(e.forcedDuration===m?o:e.forcedDuration,10),e.pos===s.currPos&&(e.isComplete?t=!1:s.isAnimating=!0),!e.isMoved&&e.pos===s.currPos&&o||(t=!1),"zoom"===t&&(e.pos===s.currPos&&o&&"image"===e.type&&!e.hasError&&(l=s.getThumbPos(e))?r=s.getFitPos(e):t="fade"),"zoom"===t?(r.scaleX=r.width/l.width,r.scaleY=r.height/l.height,"auto"==(n=e.opts.zoomOpacity)&&(n=.1<Math.abs(e.width/e.height-l.width/l.height)),n&&(l.opacity=.1,r.opacity=1),g.fancybox.setTranslate(e.$content.removeClass("fancybox-is-hidden"),l),f(e.$content),void g.fancybox.animate(e.$content,r,o,function(){s.isAnimating=!1,s.complete()})):(s.updateSlide(e),t?(g.fancybox.stop(a),i="fancybox-animated fancybox-slide--"+(e.pos>=s.prevPos?"next":"previous")+" fancybox-fx-"+t,a.removeAttr("style").removeClass("fancybox-slide--current fancybox-slide--next fancybox-slide--previous").addClass(i),e.$content.removeClass("fancybox-is-hidden"),f(a),void g.fancybox.animate(a,"fancybox-slide--current",o,function(t){a.removeClass(i).removeAttr("style"),e.pos===s.currPos&&s.complete()},!0)):(f(a),e.$content.removeClass("fancybox-is-hidden"),void(e.pos===s.currPos&&s.complete())))},getThumbPos:function(t){var e,i=!1,o=t.opts.$thumb,n=o&&o.length&&o[0].ownerDocument===a?o.offset():0;return n&&function(t){for(var e=t[0],o=e.getBoundingClientRect(),i=[];null!==e.parentElement;)"hidden"!==g(e.parentElement).css("overflow")&&"auto"!==g(e.parentElement).css("overflow")||i.push(e.parentElement.getBoundingClientRect()),e=e.parentElement;return i.every(function(t){var e=Math.min(o.right,t.right)-Math.max(o.left,t.left),i=Math.min(o.bottom,t.bottom)-Math.max(o.top,t.top);return 0<e&&0<i})&&0<o.bottom&&0<o.right&&o.left<g(d).width()&&o.top<g(d).height()}(o)&&(e=this.$refs.stage.offset(),i={top:n.top-e.top+parseFloat(o.css("border-top-width")||0),left:n.left-e.left+parseFloat(o.css("border-left-width")||0),width:o.width(),height:o.height(),scaleX:1,scaleY:1}),i},complete:function(){var i=this,t=i.current,o={};!t.isMoved&&t.isLoaded&&(t.isComplete||(t.isComplete=!0,t.$slide.siblings().trigger("onReset"),i.preload("inline"),f(t.$slide),t.$slide.addClass("fancybox-slide--complete"),g.each(i.slides,function(t,e){e.pos>=i.currPos-1&&e.pos<=i.currPos+1?o[e.pos]=e:e&&(g.fancybox.stop(e.$slide),e.$slide.off().remove())}),i.slides=o),i.isAnimating=!1,i.updateCursor(),i.trigger("afterShow"),t.$slide.find("video,audio").filter(":visible:first").trigger("play"),(g(a.activeElement).is("[disabled]")||t.opts.autoFocus&&"image"!=t.type&&"iframe"!==t.type)&&i.focus())},preload:function(t){var e=this,i=e.slides[e.currPos+1],o=e.slides[e.currPos-1];i&&i.type===t&&e.loadSlide(i),o&&o.type===t&&e.loadSlide(o)},focus:function(){var t,e=this.current;this.isClosing||e&&e.isComplete&&e.$content&&((t=e.$content.find("input[autofocus]:enabled:visible:first")).length||(t=e.$content.find("button,:input,[tabindex],a").filter(":enabled:visible:first")),(t=t&&t.length?t:e.$content).trigger("focus"))},activate:function(){var e=this;g(".fancybox-container").each(function(){var t=g(this).data("FancyBox");t&&t.id!==e.id&&!t.isClosing&&(t.trigger("onDeactivate"),t.removeEvents(),t.isVisible=!1)}),e.isVisible=!0,(e.current||e.isIdle)&&(e.update(),e.updateControls()),e.trigger("onActivate"),e.addEvents()},close:function(t,e){function i(){d.cleanUp(t)}var o,n,s,a,r,l,c,d=this,p=d.current;return!d.isClosing&&(!(d.isClosing=!0)===d.trigger("beforeClose",t)?(d.isClosing=!1,u(function(){d.update()}),!1):(d.removeEvents(),p.timouts&&clearTimeout(p.timouts),s=p.$content,o=p.opts.animationEffect,n=g.isNumeric(e)?e:o?p.opts.animationDuration:0,p.$slide.off(h).removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"),p.$slide.siblings().trigger("onReset").remove(),n&&d.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing"),d.hideLoading(p),d.hideControls(),d.updateCursor(),"zoom"!==o||!0!==t&&s&&n&&"image"===p.type&&!p.hasError&&(c=d.getThumbPos(p))||(o="fade"),"zoom"===o?(g.fancybox.stop(s),l={top:(a=g.fancybox.getTranslate(s)).top,left:a.left,scaleX:a.width/c.width,scaleY:a.height/c.height,width:c.width,height:c.height},"auto"==(r=p.opts.zoomOpacity)&&(r=.1<Math.abs(p.width/p.height-c.width/c.height)),r&&(c.opacity=0),g.fancybox.setTranslate(s,l),f(s),g.fancybox.animate(s,c,n,i)):o&&n?!0===t?setTimeout(i,n):g.fancybox.animate(p.$slide.removeClass("fancybox-slide--current"),"fancybox-animated fancybox-slide--previous fancybox-fx-"+o,n,i):i(),!0))},cleanUp:function(t){var e,i=this,o=g("body");i.current.$slide.trigger("onReset"),i.$refs.container.empty().remove(),i.trigger("afterClose",t),i.$lastFocus&&i.current.opts.backFocus&&i.$lastFocus.trigger("focus"),i.current=null,(e=g.fancybox.getInstance())?e.activate():(o.removeClass("fancybox-active compensate-for-scrollbar"),g("#fancybox-style-noscroll").remove())},trigger:function(t,e){var i,o=Array.prototype.slice.call(arguments,1),n=this,s=e&&e.opts?e:n.current;return s?o.unshift(s):s=n,o.unshift(n),g.isFunction(s.opts[t])&&(i=s.opts[t].apply(s,o)),!1===i?i:void("afterClose"!==t&&n.$refs?n.$refs.container.trigger(t+".fb",o):r.trigger(t+".fb",o))},updateControls:function(t){var e=this,i=e.current,o=i.index,n=i.opts.caption,s=e.$refs.container,a=e.$refs.caption;i.$slide.trigger("refresh"),e.$caption=n&&n.length?a.html(n):null,e.isHiddenControls||e.isIdle||e.showControls(),s.find("[data-fancybox-count]").html(e.group.length),s.find("[data-fancybox-index]").html(o+1),s.find("[data-fancybox-prev]").toggleClass("disabled",!i.opts.loop&&o<=0),s.find("[data-fancybox-next]").toggleClass("disabled",!i.opts.loop&&o>=e.group.length-1),"image"===i.type?s.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href",i.opts.image.src||i.src).show():i.opts.toolbar&&s.find("[data-fancybox-download],[data-fancybox-zoom]").hide()},hideControls:function(){this.isHiddenControls=!0,this.$refs.container.removeClass("fancybox-show-infobar fancybox-show-toolbar fancybox-show-caption fancybox-show-nav")},showControls:function(){var t=this,e=t.current?t.current.opts:t.opts,i=t.$refs.container;t.isHiddenControls=!1,t.idleSecondsCounter=0,i.toggleClass("fancybox-show-toolbar",!(!e.toolbar||!e.buttons)).toggleClass("fancybox-show-infobar",!!(e.infobar&&1<t.group.length)).toggleClass("fancybox-show-nav",!!(e.arrows&&1<t.group.length)).toggleClass("fancybox-is-modal",!!e.modal),t.$caption?i.addClass("fancybox-show-caption "):i.removeClass("fancybox-show-caption")},toggleControls:function(){this.isHiddenControls?this.showControls():this.hideControls()}}),g.fancybox={version:"3.3.5",defaults:t,getInstance:function(t){var e=g('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),i=Array.prototype.slice.call(arguments,1);return e instanceof o&&("string"===g.type(t)?e[t].apply(e,i):"function"===g.type(t)&&t.apply(e,i),e)},open:function(t,e,i){return new o(t,e,i)},close:function(t){var e=this.getInstance();e&&(e.close(),!0===t&&this.close())},destroy:function(){this.close(!0),r.add("body").off("click.fb-start","**")},isMobile:a.createTouch!==m&&/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),use3d:(e=a.createElement("div"),d.getComputedStyle&&d.getComputedStyle(e)&&d.getComputedStyle(e).getPropertyValue("transform")&&!(a.documentMode&&a.documentMode<11)),getTranslate:function(t){var e;return!(!t||!t.length)&&{top:(e=t[0].getBoundingClientRect()).top||0,left:e.left||0,width:e.width,height:e.height,opacity:parseFloat(t.css("opacity"))}},setTranslate:function(t,e){var i="",o={};if(t&&e)return e.left===m&&e.top===m||(i=(e.left===m?t.position().left:e.left)+"px, "+(e.top===m?t.position().top:e.top)+"px",i=this.use3d?"translate3d("+i+", 0px)":"translate("+i+")"),e.scaleX!==m&&e.scaleY!==m&&(i=(i.length?i+" ":"")+"scale("+e.scaleX+", "+e.scaleY+")"),i.length&&(o.transform=i),e.opacity!==m&&(o.opacity=e.opacity),e.width!==m&&(o.width=e.width),e.height!==m&&(o.height=e.height),t.css(o)},animate:function(e,i,t,o,n){var s=!1;g.isFunction(t)&&(o=t,t=null),g.isPlainObject(i)||e.removeAttr("style"),g.fancybox.stop(e),e.on(h,function(t){t&&t.originalEvent&&(!e.is(t.originalEvent.target)||"z-index"==t.originalEvent.propertyName)||(g.fancybox.stop(e),s&&g.fancybox.setTranslate(e,s),g.isPlainObject(i)?!1===n&&e.removeAttr("style"):!0!==n&&e.removeClass(i),g.isFunction(o)&&o(t))}),g.isNumeric(t)&&e.css("transition-duration",t+"ms"),g.isPlainObject(i)?(i.scaleX!==m&&i.scaleY!==m&&(s=g.extend({},i,{width:e.width()*i.scaleX,height:e.height()*i.scaleY,scaleX:1,scaleY:1}),delete i.width,delete i.height,e.parent().hasClass("fancybox-slide--image")&&e.parent().addClass("fancybox-is-scaling")),g.fancybox.setTranslate(e,i)):e.addClass(i),e.data("timer",setTimeout(function(){e.trigger("transitionend")},t+16))},stop:function(t){t&&t.length&&(clearTimeout(t.data("timer")),t.off("transitionend").css("transition-duration",""),t.parent().removeClass("fancybox-is-scaling"))}},g.fn.fancybox=function(t){var e;return(e=(t=t||{}).selector||!1)?g("body").off("click.fb-start",e).on("click.fb-start",e,{options:t},i):this.off("click.fb-start").on("click.fb-start",{items:this,options:t},i),this},r.on("click.fb-start","[data-fancybox]",i),r.on("click.fb-start","[data-trigger]",function(t){i(t,{$target:g('[data-fancybox="'+g(t.currentTarget).attr("data-trigger")+'"]').eq(g(t.currentTarget).attr("data-index")||0),$trigger:g(this)})})}var e}(window,document,window.jQuery||jQuery),function(h){"use strict";function f(i,t,e){if(i)return e=e||"","object"===h.type(e)&&(e=h.param(e,!0)),h.each(t,function(t,e){i=i.replace("$"+t,e||"")}),e.length&&(i+=(0<i.indexOf("?")?"&":"?")+e),i}var o={youtube:{matcher:/(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,params:{autoplay:1,autohide:1,fs:1,rel:0,hd:1,wmode:"transparent",enablejsapi:1,html5:1},paramPlace:8,type:"iframe",url:"//www.youtube.com/embed/$4",thumb:"//img.youtube.com/vi/$4/hqdefault.jpg"},vimeo:{matcher:/^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,params:{autoplay:1,hd:1,show_title:1,show_byline:1,show_portrait:0,fullscreen:1,api:1},paramPlace:3,type:"iframe",url:"//player.vimeo.com/video/$2"},instagram:{matcher:/(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,type:"image",url:"//$1/p/$2/media/?size=l"},gmap_place:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,type:"iframe",url:function(t){return"//maps.google."+t[2]+"/?ll="+(t[9]?t[9]+"&z="+Math.floor(t[10])+(t[12]?t[12].replace(/^\//,"&"):""):t[12]+"").replace(/\?/,"&")+"&output="+(t[12]&&0<t[12].indexOf("layer=c")?"svembed":"embed")}},gmap_search:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,type:"iframe",url:function(t){return"//maps.google."+t[2]+"/maps?q="+t[5].replace("query=","q=").replace("api=1","")+"&output=embed"}}};h(document).on("objectNeedsType.fb",function(t,e,n){var i,s,a,r,l,c,d,p=n.src||"",u=!1;i=h.extend(!0,{},o,n.opts.media),h.each(i,function(t,e){if(a=p.match(e.matcher)){if(u=e.type,d=t,c={},e.paramPlace&&a[e.paramPlace]){"?"==(l=a[e.paramPlace])[0]&&(l=l.substring(1)),l=l.split("&");for(var i=0;i<l.length;++i){var o=l[i].split("=",2);2==o.length&&(c[o[0]]=decodeURIComponent(o[1].replace(/\+/g," ")))}}return r=h.extend(!0,{},e.params,n.opts[t],c),p="function"===h.type(e.url)?e.url.call(this,a,r,n):f(e.url,a,r),s="function"===h.type(e.thumb)?e.thumb.call(this,a,r,n):f(e.thumb,a),"youtube"===t?p=p.replace(/&t=((\d+)m)?(\d+)s/,function(t,e,i,o){return"&start="+((i?60*parseInt(i,10):0)+parseInt(o,10))}):"vimeo"===t&&(p=p.replace("&%23","#")),!1}}),u?(n.opts.thumb||n.opts.$thumb&&n.opts.$thumb.length||(n.opts.thumb=s),"iframe"===u&&(n.opts=h.extend(!0,n.opts,{iframe:{preload:!1,attr:{scrolling:"no"}}})),h.extend(n,{type:u,src:p,origSrc:n.src,contentSource:d,contentType:"image"===u?"image":"gmap_place"==d||"gmap_search"==d?"map":"video"})):p&&(n.type=n.opts.defaultType)})}(window.jQuery||jQuery),function(g,r,m){"use strict";function d(t){var e=[];for(var i in t=(t=t.originalEvent||t||g.e).touches&&t.touches.length?t.touches:t.changedTouches&&t.changedTouches.length?t.changedTouches:[t])t[i].pageX?e.push({x:t[i].pageX,y:t[i].pageY}):t[i].clientX&&e.push({x:t[i].clientX,y:t[i].clientY});return e}function _(t,e,i){return e&&t?"x"===i?t.x-e.x:"y"===i?t.y-e.y:Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2)):0}function l(t){if(t.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio')||m.isFunction(t.get(0).onclick)||t.data("selectable"))return 1;for(var e=0,i=t[0].attributes,o=i.length;e<o;e++)if("data-fancybox-"===i[e].nodeName.substr(0,14))return 1}function c(t){for(var e=!1;(i=t.get(0),0,o=g.getComputedStyle(i)["overflow-y"],n=g.getComputedStyle(i)["overflow-x"],s=("scroll"===o||"auto"===o)&&i.scrollHeight>i.clientHeight,a=("scroll"===n||"auto"===n)&&i.scrollWidth>i.clientWidth,!(e=s||a))&&((t=t.parent()).length&&!t.hasClass("fancybox-stage")&&!t.is("body")););var i,o,n,s,a;return e}function i(t){var e=this;e.instance=t,e.$bg=t.$refs.bg,e.$stage=t.$refs.stage,e.$container=t.$refs.container,e.destroy(),e.$container.on("touchstart.fb.touch mousedown.fb.touch",m.proxy(e,"ontouchstart"))}var y=g.requestAnimationFrame||g.webkitRequestAnimationFrame||g.mozRequestAnimationFrame||g.oRequestAnimationFrame||function(t){return g.setTimeout(t,1e3/60)},v=g.cancelAnimationFrame||g.webkitCancelAnimationFrame||g.mozCancelAnimationFrame||g.oCancelAnimationFrame||function(t){g.clearTimeout(t)};i.prototype.destroy=function(){this.$container.off(".fb.touch")},i.prototype.ontouchstart=function(t){var e=this,i=m(t.target),o=e.instance,n=o.current,s=n.$content,a="touchstart"==t.type;if(a&&e.$container.off("mousedown.fb.touch"),(!t.originalEvent||2!=t.originalEvent.button)&&i.length&&!l(i)&&!l(i.parent())&&(i.is("img")||!(t.originalEvent.clientX>i[0].clientWidth+i.offset().left))){if(!n||o.isAnimating||o.isClosing)return t.stopPropagation(),void t.preventDefault();if(e.realPoints=e.startPoints=d(t),e.startPoints.length){if(t.stopPropagation(),e.startEvent=t,e.canTap=!0,e.$target=i,e.$content=s,e.opts=n.opts.touch,e.isPanning=!1,e.isSwiping=!1,e.isZooming=!1,e.isScrolling=!1,e.startTime=(new Date).getTime(),e.distanceX=e.distanceY=e.distance=0,e.canvasWidth=Math.round(n.$slide[0].clientWidth),e.canvasHeight=Math.round(n.$slide[0].clientHeight),e.contentLastPos=null,e.contentStartPos=m.fancybox.getTranslate(e.$content)||{top:0,left:0},e.sliderStartPos=e.sliderLastPos||m.fancybox.getTranslate(n.$slide),e.stagePos=m.fancybox.getTranslate(o.$refs.stage),e.sliderStartPos.top-=e.stagePos.top,e.sliderStartPos.left-=e.stagePos.left,e.contentStartPos.top-=e.stagePos.top,e.contentStartPos.left-=e.stagePos.left,m(r).off(".fb.touch").on(a?"touchend.fb.touch touchcancel.fb.touch":"mouseup.fb.touch mouseleave.fb.touch",m.proxy(e,"ontouchend")).on(a?"touchmove.fb.touch":"mousemove.fb.touch",m.proxy(e,"ontouchmove")),m.fancybox.isMobile&&r.addEventListener("scroll",e.onscroll,!0),!e.opts&&!o.canPan()||!i.is(e.$stage)&&!e.$stage.find(i).length)return void(i.is(".fancybox-image")&&t.preventDefault());m.fancybox.isMobile&&(c(i)||c(i.parent()))||t.preventDefault(),1!==e.startPoints.length&&!n.hasError||(e.instance.canPan()?(m.fancybox.stop(e.$content),e.$content.css("transition-duration",""),e.isPanning=!0):e.isSwiping=!0,e.$container.addClass("fancybox-controls--isGrabbing")),2===e.startPoints.length&&"image"===n.type&&(n.isLoaded||n.$ghost)&&(e.canTap=!1,e.isSwiping=!1,e.isPanning=!1,e.isZooming=!0,m.fancybox.stop(e.$content),e.$content.css("transition-duration",""),e.centerPointStartX=.5*(e.startPoints[0].x+e.startPoints[1].x)-m(g).scrollLeft(),e.centerPointStartY=.5*(e.startPoints[0].y+e.startPoints[1].y)-m(g).scrollTop(),e.percentageOfImageAtPinchPointX=(e.centerPointStartX-e.contentStartPos.left)/e.contentStartPos.width,e.percentageOfImageAtPinchPointY=(e.centerPointStartY-e.contentStartPos.top)/e.contentStartPos.height,e.startDistanceBetweenFingers=_(e.startPoints[0],e.startPoints[1]))}}},i.prototype.onscroll=function(t){this.isScrolling=!0,r.removeEventListener("scroll",this.onscroll,!0)},i.prototype.ontouchmove=function(t){var e=this,i=m(t.target);return void 0!==t.originalEvent.buttons&&0===t.originalEvent.buttons?void e.ontouchend(t):e.isScrolling||!i.is(e.$stage)&&!e.$stage.find(i).length?void(e.canTap=!1):(e.newPoints=d(t),void((e.opts||e.instance.canPan())&&e.newPoints.length&&e.newPoints.length&&(e.isSwiping&&!0===e.isSwiping||t.preventDefault(),e.distanceX=_(e.newPoints[0],e.startPoints[0],"x"),e.distanceY=_(e.newPoints[0],e.startPoints[0],"y"),e.distance=_(e.newPoints[0],e.startPoints[0]),0<e.distance&&(e.isSwiping?e.onSwipe(t):e.isPanning?e.onPan():e.isZooming&&e.onZoom()))))},i.prototype.onSwipe=function(t){var e,o=this,i=o.isSwiping,n=o.sliderStartPos.left||0;if(!0!==i)"x"==i&&(0<o.distanceX&&(o.instance.group.length<2||0===o.instance.current.index&&!o.instance.current.opts.loop)?n+=Math.pow(o.distanceX,.8):o.distanceX<0&&(o.instance.group.length<2||o.instance.current.index===o.instance.group.length-1&&!o.instance.current.opts.loop)?n-=Math.pow(-o.distanceX,.8):n+=o.distanceX),o.sliderLastPos={top:"x"==i?0:o.sliderStartPos.top+o.distanceY,left:n},o.requestId&&(v(o.requestId),o.requestId=null),o.requestId=y(function(){o.sliderLastPos&&(m.each(o.instance.slides,function(t,e){var i=e.pos-o.instance.currPos;m.fancybox.setTranslate(e.$slide,{top:o.sliderLastPos.top,left:o.sliderLastPos.left+i*o.canvasWidth+i*e.opts.gutter})}),o.$container.addClass("fancybox-is-sliding"))});else if(10<Math.abs(o.distance)){if(o.canTap=!1,o.instance.group.length<2&&o.opts.vertical?o.isSwiping="y":o.instance.isDragging||!1===o.opts.vertical||"auto"===o.opts.vertical&&800<m(g).width()?o.isSwiping="x":(e=Math.abs(180*Math.atan2(o.distanceY,o.distanceX)/Math.PI),o.isSwiping=45<e&&e<135?"y":"x"),o.canTap=!1,"y"===o.isSwiping&&m.fancybox.isMobile&&(c(o.$target)||c(o.$target.parent())))return void(o.isScrolling=!0);o.instance.isDragging=o.isSwiping,o.startPoints=o.newPoints,m.each(o.instance.slides,function(t,e){m.fancybox.stop(e.$slide),e.$slide.css("transition-duration",""),e.inTransition=!1,e.pos===o.instance.current.pos&&(o.sliderStartPos.left=m.fancybox.getTranslate(e.$slide).left-m.fancybox.getTranslate(o.instance.$refs.stage).left)}),o.instance.SlideShow&&o.instance.SlideShow.isActive&&o.instance.SlideShow.stop()}},i.prototype.onPan=function(){var t=this;return _(t.newPoints[0],t.realPoints[0])<(m.fancybox.isMobile?10:5)?void(t.startPoints=t.newPoints):(t.canTap=!1,t.contentLastPos=t.limitMovement(),t.requestId&&(v(t.requestId),t.requestId=null),void(t.requestId=y(function(){m.fancybox.setTranslate(t.$content,t.contentLastPos)})))},i.prototype.limitMovement=function(){var t,e,i,o,n,s,a=this,r=a.canvasWidth,l=a.canvasHeight,c=a.distanceX,d=a.distanceY,p=a.contentStartPos,u=p.left,h=p.top,f=p.width,g=p.height;return n=r<f?u+c:u,s=h+d,t=Math.max(0,.5*r-.5*f),e=Math.max(0,.5*l-.5*g),i=Math.min(r-f,.5*r-.5*f),o=Math.min(l-g,.5*l-.5*g),0<c&&t<n&&(n=t-1+Math.pow(-t+u+c,.8)||0),c<0&&n<i&&(n=i+1-Math.pow(i-u-c,.8)||0),0<d&&e<s&&(s=e-1+Math.pow(-e+h+d,.8)||0),d<0&&s<o&&(s=o+1-Math.pow(o-h-d,.8)||0),{top:s,left:n}},i.prototype.limitPosition=function(t,e,i,o){var n=this.canvasWidth,s=this.canvasHeight;return t=n<i?(t=0<t?0:t)<n-i?n-i:t:Math.max(0,n/2-i/2),{top:e=s<o?(e=0<e?0:e)<s-o?s-o:e:Math.max(0,s/2-o/2),left:t}},i.prototype.onZoom=function(){var t=this,e=t.contentStartPos,i=e.width,o=e.height,n=e.left,s=e.top,a=_(t.newPoints[0],t.newPoints[1])/t.startDistanceBetweenFingers,r=Math.floor(i*a),l=Math.floor(o*a),c=(i-r)*t.percentageOfImageAtPinchPointX,d=(o-l)*t.percentageOfImageAtPinchPointY,p=(t.newPoints[0].x+t.newPoints[1].x)/2-m(g).scrollLeft(),u=(t.newPoints[0].y+t.newPoints[1].y)/2-m(g).scrollTop(),h=p-t.centerPointStartX,f={top:s+(d+(u-t.centerPointStartY)),left:n+(c+h),scaleX:a,scaleY:a};t.canTap=!1,t.newWidth=r,t.newHeight=l,t.contentLastPos=f,t.requestId&&(v(t.requestId),t.requestId=null),t.requestId=y(function(){m.fancybox.setTranslate(t.$content,t.contentLastPos)})},i.prototype.ontouchend=function(t){var e=this,i=Math.max((new Date).getTime()-e.startTime,1),o=e.isSwiping,n=e.isPanning,s=e.isZooming,a=e.isScrolling;return e.endPoints=d(t),e.$container.removeClass("fancybox-controls--isGrabbing"),m(r).off(".fb.touch"),r.removeEventListener("scroll",e.onscroll,!0),e.requestId&&(v(e.requestId),e.requestId=null),e.isSwiping=!1,e.isPanning=!1,e.isZooming=!1,e.isScrolling=!1,e.instance.isDragging=!1,e.canTap?e.onTap(t):(e.speed=366,e.velocityX=e.distanceX/i*.5,e.velocityY=e.distanceY/i*.5,e.speedX=Math.max(.5*e.speed,Math.min(1.5*e.speed,1/Math.abs(e.velocityX)*e.speed)),void(n?e.endPanning():s?e.endZooming():e.endSwiping(o,a)))},i.prototype.endSwiping=function(t,e){var i=this,o=!1,n=i.instance.group.length;i.sliderLastPos=null,"y"==t&&!e&&50<Math.abs(i.distanceY)?(m.fancybox.animate(i.instance.current.$slide,{top:i.sliderStartPos.top+i.distanceY+150*i.velocityY,opacity:0},200),o=i.instance.close(!0,200)):"x"==t&&50<i.distanceX&&1<n?o=i.instance.previous(i.speedX):"x"==t&&i.distanceX<-50&&1<n&&(o=i.instance.next(i.speedX)),!1!==o||"x"!=t&&"y"!=t||(e||n<2?i.instance.centerSlide(i.instance.current,150):i.instance.jumpTo(i.instance.current.index)),i.$container.removeClass("fancybox-is-sliding")},i.prototype.endPanning=function(){var t,e,i,o=this;o.contentLastPos&&(e=!1===o.opts.momentum?(t=o.contentLastPos.left,o.contentLastPos.top):(t=o.contentLastPos.left+o.velocityX*o.speed,o.contentLastPos.top+o.velocityY*o.speed),(i=o.limitPosition(t,e,o.contentStartPos.width,o.contentStartPos.height)).width=o.contentStartPos.width,i.height=o.contentStartPos.height,m.fancybox.animate(o.$content,i,330))},i.prototype.endZooming=function(){var t,e,i,o,n=this,s=n.instance.current,a=n.newWidth,r=n.newHeight;n.contentLastPos&&(t=n.contentLastPos.left,o={top:e=n.contentLastPos.top,left:t,width:a,height:r,scaleX:1,scaleY:1},m.fancybox.setTranslate(n.$content,o),a<n.canvasWidth&&r<n.canvasHeight?n.instance.scaleToFit(150):a>s.width||r>s.height?n.instance.scaleToActual(n.centerPointStartX,n.centerPointStartY,150):(i=n.limitPosition(t,e,a,r),m.fancybox.setTranslate(n.$content,m.fancybox.getTranslate(n.$content)),m.fancybox.animate(n.$content,i,150)))},i.prototype.onTap=function(i){function t(t){var e=a.opts[t];if(m.isFunction(e)&&(e=e.apply(s,[a,i])),e)switch(e){case"close":s.close(o.startEvent);break;case"toggleControls":s.toggleControls(!0);break;case"next":s.next();break;case"nextOrClose":1<s.group.length?s.next():s.close(o.startEvent);break;case"zoom":"image"==a.type&&(a.isLoaded||a.$ghost)&&(s.canPan()?s.scaleToFit():s.isScaledDown()?s.scaleToActual(l,c):s.group.length<2&&s.close(o.startEvent))}}var e,o=this,n=m(i.target),s=o.instance,a=s.current,r=i&&d(i)||o.startPoints,l=r[0]?r[0].x-m(g).scrollLeft()-o.stagePos.left:0,c=r[0]?r[0].y-m(g).scrollTop()-o.stagePos.top:0;if((!i.originalEvent||2!=i.originalEvent.button)&&(n.is("img")||!(l>n[0].clientWidth+n.offset().left))){if(n.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container"))e="Outside";else if(n.is(".fancybox-slide"))e="Slide";else{if(!s.current.$content||!s.current.$content.find(n).addBack().filter(n).length)return;e="Content"}if(o.tapped){if(clearTimeout(o.tapped),o.tapped=null,50<Math.abs(l-o.tapX)||50<Math.abs(c-o.tapY))return this;t("dblclick"+e)}else o.tapX=l,o.tapY=c,a.opts["dblclick"+e]&&a.opts["dblclick"+e]!==a.opts["click"+e]?o.tapped=setTimeout(function(){o.tapped=null,t("click"+e)},500):t("click"+e);return this}},m(r).on("onActivate.fb",function(t,e){e&&!e.Guestures&&(e.Guestures=new i(e))})}(window,document,window.jQuery||jQuery),function(a,r){"use strict";r.extend(!0,r.fancybox.defaults,{btnTpl:{slideShow:'<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg viewBox="0 0 40 40"><path d="M13,12 L27,20 L13,27 Z" /><path d="M15,10 v19 M23,10 v19" /></svg></button>'},slideShow:{autoStart:!1,speed:3e3}});function i(t){this.instance=t,this.init()}r.extend(i.prototype,{timer:null,isActive:!1,$button:null,init:function(){var t=this;t.$button=t.instance.$refs.toolbar.find("[data-fancybox-play]").on("click",function(){t.toggle()}),(t.instance.group.length<2||!t.instance.group[t.instance.currIndex].opts.slideShow)&&t.$button.hide()},set:function(t){var e=this;e.instance&&e.instance.current&&(!0===t||e.instance.current.opts.loop||e.instance.currIndex<e.instance.group.length-1)?e.timer=setTimeout(function(){e.isActive&&e.instance.jumpTo((e.instance.currIndex+1)%e.instance.group.length)},e.instance.current.opts.slideShow.speed):(e.stop(),e.instance.idleSecondsCounter=0,e.instance.showControls())},clear:function(){clearTimeout(this.timer),this.timer=null},start:function(){var t=this.instance.current;t&&(this.isActive=!0,this.$button.attr("title",t.opts.i18n[t.opts.lang].PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"),this.set(!0))},stop:function(){var t=this.instance.current;this.clear(),this.$button.attr("title",t.opts.i18n[t.opts.lang].PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"),this.isActive=!1},toggle:function(){this.isActive?this.stop():this.start()}}),r(a).on({"onInit.fb":function(t,e){e&&!e.SlideShow&&(e.SlideShow=new i(e))},"beforeShow.fb":function(t,e,i,o){var n=e&&e.SlideShow;o?n&&i.opts.slideShow.autoStart&&n.start():n&&n.isActive&&n.clear()},"afterShow.fb":function(t,e,i){var o=e&&e.SlideShow;o&&o.isActive&&o.set()},"afterKeydown.fb":function(t,e,i,o,n){var s=e&&e.SlideShow;!s||!i.opts.slideShow||80!==n&&32!==n||r(a.activeElement).is("button,a,input")||(o.preventDefault(),s.toggle())},"beforeClose.fb onDeactivate.fb":function(t,e){var i=e&&e.SlideShow;i&&i.stop()}}),r(a).on("visibilitychange",function(){var t=r.fancybox.getInstance(),e=t&&t.SlideShow;e&&e.isActive&&(a.hidden?e.clear():e.set())})}(document,window.jQuery||jQuery),function(s,i){"use strict";var e=function(){for(var t=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],e={},i=0;i<t.length;i++){var o=t[i];if(o&&o[1]in s){for(var n=0;n<o.length;n++)e[t[0][n]]=o[n];return e}}return!1}();if(e){var o={request:function(t){(t=t||s.documentElement)[e.requestFullscreen](t.ALLOW_KEYBOARD_INPUT)},exit:function(){s[e.exitFullscreen]()},toggle:function(t){t=t||s.documentElement,this.isFullscreen()?this.exit():this.request(t)},isFullscreen:function(){return Boolean(s[e.fullscreenElement])},enabled:function(){return Boolean(s[e.fullscreenEnabled])}};i.extend(!0,i.fancybox.defaults,{btnTpl:{fullScreen:'<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fullscreen" title="{{FULL_SCREEN}}"><svg viewBox="0 0 40 40"><path d="M9,12 v16 h22 v-16 h-22 v8" /></svg></button>'},fullScreen:{autoStart:!1}}),i(s).on({"onInit.fb":function(t,e){e&&e.group[e.currIndex].opts.fullScreen?(e.$refs.container.on("click.fb-fullscreen","[data-fancybox-fullscreen]",function(t){t.stopPropagation(),t.preventDefault(),o.toggle()}),e.opts.fullScreen&&!0===e.opts.fullScreen.autoStart&&o.request(),e.FullScreen=o):e&&e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide()},"afterKeydown.fb":function(t,e,i,o,n){e&&e.FullScreen&&70===n&&(o.preventDefault(),e.FullScreen.toggle())},"beforeClose.fb":function(t,e){e&&e.FullScreen&&e.$refs.container.hasClass("fancybox-is-fullscreen")&&o.exit()}}),i(s).on(e.fullscreenchange,function(){var t=o.isFullscreen(),e=i.fancybox.getInstance();e&&(e.current&&"image"===e.current.type&&e.isAnimating&&(e.current.$content.css("transition","none"),e.isAnimating=!1,e.update(!0,!0,0)),e.trigger("onFullscreenChange",t),e.$refs.container.toggleClass("fancybox-is-fullscreen",t))})}else i&&i.fancybox&&(i.fancybox.defaults.btnTpl.fullScreen=!1)}(document,window.jQuery||jQuery),function(t,s){"use strict";var a="fancybox-thumbs",r=a+"-active";s.fancybox.defaults=s.extend(!0,{btnTpl:{thumbs:'<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg viewBox="0 0 120 120"><path d="M30,30 h14 v14 h-14 Z M50,30 h14 v14 h-14 Z M70,30 h14 v14 h-14 Z M30,50 h14 v14 h-14 Z M50,50 h14 v14 h-14 Z M70,50 h14 v14 h-14 Z M30,70 h14 v14 h-14 Z M50,70 h14 v14 h-14 Z M70,70 h14 v14 h-14 Z" /></svg></button>'},thumbs:{autoStart:!1,hideOnClose:!0,parentEl:".fancybox-container",axis:"y"}},s.fancybox.defaults);function o(t){this.init(t)}s.extend(o.prototype,{$button:null,$grid:null,$list:null,isVisible:!1,isActive:!1,init:function(t){var e,i,o=this;((o.instance=t).Thumbs=o).opts=t.group[t.currIndex].opts.thumbs,e=(e=t.group[0]).opts.thumb||!(!e.opts.$thumb||!e.opts.$thumb.length)&&e.opts.$thumb.attr("src"),1<t.group.length&&(i=(i=t.group[1]).opts.thumb||!(!i.opts.$thumb||!i.opts.$thumb.length)&&i.opts.$thumb.attr("src")),o.$button=t.$refs.toolbar.find("[data-fancybox-thumbs]"),o.opts&&e&&i&&e&&i?(o.$button.show().on("click",function(){o.toggle()}),o.isActive=!0):o.$button.hide()},create:function(){var i,t=this,e=t.instance,o=t.opts.parentEl,n=[];t.$grid||(t.$grid=s('<div class="'+a+" "+a+"-"+t.opts.axis+'"></div>').appendTo(e.$refs.container.find(o).addBack().filter(o)),t.$grid.on("click","li",function(){e.jumpTo(s(this).attr("data-index"))})),t.$list||(t.$list=s("<ul>").appendTo(t.$grid)),s.each(e.group,function(t,e){(i=e.opts.thumb||(e.opts.$thumb?e.opts.$thumb.attr("src"):null))||"image"!==e.type||(i=e.src),n.push('<li data-index="'+t+'" tabindex="0" class="fancybox-thumbs-loading"'+(i&&i.length?' style="background-image:url('+i+')" />':"")+"></li>")}),t.$list[0].innerHTML=n.join(""),"x"===t.opts.axis&&t.$list.width(parseInt(t.$grid.css("padding-right"),10)+e.group.length*t.$list.children().eq(0).outerWidth(!0))},focus:function(t){var e,i,o=this,n=o.$list,s=o.$grid;o.instance.current&&(i=(e=n.children().removeClass(r).filter('[data-index="'+o.instance.current.index+'"]').addClass(r)).position(),"y"===o.opts.axis&&(i.top<0||i.top>n.height()-e.outerHeight())?n.stop().animate({scrollTop:n.scrollTop()+i.top},t):"x"===o.opts.axis&&(i.left<s.scrollLeft()||i.left>s.scrollLeft()+(s.width()-e.outerWidth()))&&n.parent().stop().animate({scrollLeft:i.left},t))},update:function(){var t=this;t.instance.$refs.container.toggleClass("fancybox-show-thumbs",this.isVisible),t.isVisible?(t.$grid||t.create(),t.instance.trigger("onThumbsShow"),t.focus(0)):t.$grid&&t.instance.trigger("onThumbsHide"),t.instance.update()},hide:function(){this.isVisible=!1,this.update()},show:function(){this.isVisible=!0,this.update()},toggle:function(){this.isVisible=!this.isVisible,this.update()}}),s(t).on({"onInit.fb":function(t,e){var i;!e||e.Thumbs||(i=new o(e)).isActive&&!0===i.opts.autoStart&&i.show()},"beforeShow.fb":function(t,e,i,o){var n=e&&e.Thumbs;n&&n.isVisible&&n.focus(o?0:250)},"afterKeydown.fb":function(t,e,i,o,n){var s=e&&e.Thumbs;s&&s.isActive&&71===n&&(o.preventDefault(),s.toggle())},"beforeClose.fb":function(t,e){var i=e&&e.Thumbs;i&&i.isVisible&&!1!==i.opts.hideOnClose&&i.$grid.hide()}})}(document,window.jQuery||jQuery),function(t,s){"use strict";s.extend(!0,s.fancybox.defaults,{btnTpl:{share:'<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg viewBox="0 0 40 40"><path d="M6,30 C8,18 19,16 23,16 L23,16 L23,10 L33,20 L23,29 L23,24 C19,24 8,27 6,30 Z"></svg></button>'},share:{url:function(t,e){return!t.currentHash&&"inline"!==e.type&&"html"!==e.type&&(e.origSrc||e.src)||window.location},tpl:'<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" /></p></div>'}}),s(t).on("click","[data-fancybox-share]",function(){var t,e,i,o=s.fancybox.getInstance(),n=o.current||null;n&&("function"===s.type(n.opts.share.url)&&(t=n.opts.share.url.apply(n,[o,n])),e=n.opts.share.tpl.replace(/\{\{media\}\}/g,"image"===n.type?encodeURIComponent(n.src):"").replace(/\{\{url\}\}/g,encodeURIComponent(t)).replace(/\{\{url_raw\}\}/g,(i={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"},String(t).replace(/[&<>"'`=\/]/g,function(t){return i[t]}))).replace(/\{\{descr\}\}/g,o.$caption?encodeURIComponent(o.$caption.text()):""),s.fancybox.open({src:o.translate(o,e),type:"html",opts:{animationEffect:!1,afterLoad:function(t,e){o.$refs.container.one("beforeClose.fb",function(){t.close(null,0)}),e.$content.find(".fancybox-share__links a").click(function(){return window.open(this.href,"Share","width=550, height=450"),!1})}}}))})}(document,window.jQuery||jQuery),function(s,a,n){"use strict";function r(){var t=a.location.hash.substr(1),e=t.split("-"),i=1<e.length&&/^\+?\d+$/.test(e[e.length-1])&&parseInt(e.pop(-1),10)||1;return{hash:t,index:i<1?1:i,gallery:e.join("-")}}function e(t){""!==t.gallery&&n("[data-fancybox='"+n.escapeSelector(t.gallery)+"']").eq(t.index-1).trigger("click.fb-start")}function l(t){var e,i;return!!t&&(""!==(i=(e=t.current?t.current.opts:t.opts).hash||(e.$orig?e.$orig.data("fancybox"):""))&&i)}n.escapeSelector||(n.escapeSelector=function(t){return(t+"").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,function(t,e){return e?"\0"===t?"�":t.slice(0,-1)+"\\"+t.charCodeAt(t.length-1).toString(16)+" ":"\\"+t})}),n(function(){!1!==n.fancybox.defaults.hash&&(n(s).on({"onInit.fb":function(t,e){var i,o;!1!==e.group[e.currIndex].opts.hash&&(i=r(),(o=l(e))&&i.gallery&&o==i.gallery&&(e.currIndex=i.index-1))},"beforeShow.fb":function(t,e,i,o){var n;!i||!1===i.opts.hash||(n=l(e))&&(e.currentHash=n+(1<e.group.length?"-"+(i.index+1):""),a.location.hash!=="#"+e.currentHash&&(e.origHash||(e.origHash=a.location.hash),e.hashTimer&&clearTimeout(e.hashTimer),e.hashTimer=setTimeout(function(){"replaceState"in a.history?(a.history[o?"pushState":"replaceState"]({},s.title,a.location.pathname+a.location.search+"#"+e.currentHash),o&&(e.hasCreatedHistory=!0)):a.location.hash=e.currentHash,e.hashTimer=null},300)))},"beforeClose.fb":function(t,e,i){!1!==i.opts.hash&&(l(e),e.currentHash&&e.hasCreatedHistory?a.history.back():e.currentHash&&("replaceState"in a.history?a.history.replaceState({},s.title,a.location.pathname+a.location.search+(e.origHash||"")):a.location.hash=e.origHash),e.currentHash=null,clearTimeout(e.hashTimer))}}),n(a).on("hashchange.fb",function(){var o,t=r();n.each(n(".fancybox-container").get().reverse(),function(t,e){var i=n(e).data("FancyBox");if(i.currentHash)return o=i,!1}),o?!o.currentHash||o.currentHash===t.gallery+"-"+t.index||1===t.index&&o.currentHash==t.gallery||(o.currentHash=null,o.close()):""!==t.gallery&&e(t)}),setTimeout(function(){n.fancybox.getInstance()||e(r())},50))})}(document,window,window.jQuery||jQuery),function(t,e){"use strict";var n=(new Date).getTime();e(t).on({"onInit.fb":function(t,o,e){o.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll",function(t){var e=o.current,i=(new Date).getTime();o.group.length<2||!1===e.opts.wheel||"auto"===e.opts.wheel&&"image"!==e.type||(t.preventDefault(),t.stopPropagation(),e.$slide.hasClass("fancybox-animated")||(t=t.originalEvent||t,i-n<250||(n=i,o[(-t.deltaY||-t.deltaX||t.wheelDelta||-t.detail)<0?"next":"previous"]())))})}})}(document,window.jQuery||jQuery);var Sticky=function(){function i(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};_classCallCheck(this,i),this.selector=t,this.elements=[],this.version="1.2.0",this.vp=this.getViewportSize(),this.body=document.querySelector("body"),this.options={wrap:e.wrap||!1,marginTop:e.marginTop||0,stickyFor:e.stickyFor||0,stickyClass:e.stickyClass||null,stickyContainer:e.stickyContainer||"body"},this.updateScrollTopPosition=this.updateScrollTopPosition.bind(this),this.updateScrollTopPosition(),window.addEventListener("load",this.updateScrollTopPosition),window.addEventListener("scroll",this.updateScrollTopPosition),this.run()}return i.prototype.run=function(){var e=this,i=setInterval(function(){if("complete"===document.readyState){clearInterval(i);var t=document.querySelectorAll(e.selector);e.forEach(t,function(t){return e.renderElement(t)})}},10)},i.prototype.renderElement=function(t){var e=this;t.sticky={},t.sticky.active=!1,t.sticky.marginTop=parseInt(t.getAttribute("data-margin-top"))||this.options.marginTop,t.sticky.stickyFor=parseInt(t.getAttribute("data-sticky-for"))||this.options.stickyFor,t.sticky.stickyClass=t.getAttribute("data-sticky-class")||this.options.stickyClass,t.sticky.wrap=!!t.hasAttribute("data-sticky-wrap")||this.options.wrap,t.sticky.stickyContainer=this.options.stickyContainer,t.sticky.container=this.getStickyContainer(t),t.sticky.container.rect=this.getRectangle(t.sticky.container),t.sticky.rect=this.getRectangle(t),"img"===t.tagName.toLowerCase()&&(t.onload=function(){return t.sticky.rect=e.getRectangle(t)}),t.sticky.wrap&&this.wrapElement(t),this.activate(t)},i.prototype.wrapElement=function(t){t.insertAdjacentHTML("beforebegin","<span></span>"),t.previousSibling.appendChild(t)},i.prototype.activate=function(t){t.sticky.rect.top+t.sticky.rect.height<t.sticky.container.rect.top+t.sticky.container.rect.height&&t.sticky.stickyFor<this.vp.width&&!t.sticky.active&&(t.sticky.active=!0),this.elements.indexOf(t)<0&&this.elements.push(t),t.sticky.resizeEvent||(this.initResizeEvents(t),t.sticky.resizeEvent=!0),t.sticky.scrollEvent||(this.initScrollEvents(t),t.sticky.scrollEvent=!0),this.setPosition(t)},i.prototype.initResizeEvents=function(t){var e=this;t.sticky.resizeListener=function(){return e.onResizeEvents(t)},window.addEventListener("resize",t.sticky.resizeListener)},i.prototype.destroyResizeEvents=function(t){window.removeEventListener("resize",t.sticky.resizeListener)},i.prototype.onResizeEvents=function(t){this.vp=this.getViewportSize(),t.sticky.rect=this.getRectangle(t),t.sticky.container.rect=this.getRectangle(t.sticky.container),t.sticky.rect.top+t.sticky.rect.height<t.sticky.container.rect.top+t.sticky.container.rect.height&&t.sticky.stickyFor<this.vp.width&&!t.sticky.active?t.sticky.active=!0:(t.sticky.rect.top+t.sticky.rect.height>=t.sticky.container.rect.top+t.sticky.container.rect.height||t.sticky.stickyFor>=this.vp.width&&t.sticky.active)&&(t.sticky.active=!1),this.setPosition(t)},i.prototype.initScrollEvents=function(t){var e=this;t.sticky.scrollListener=function(){return e.onScrollEvents(t)},window.addEventListener("scroll",t.sticky.scrollListener)},i.prototype.destroyScrollEvents=function(t){window.removeEventListener("scroll",t.sticky.scrollListener)},i.prototype.onScrollEvents=function(t){t.sticky.active&&this.setPosition(t)},i.prototype.setPosition=function(t){this.css(t,{position:"",width:"",top:"",left:""}),this.vp.height<t.sticky.rect.height||!t.sticky.active||(t.sticky.rect.width||(t.sticky.rect=this.getRectangle(t)),t.sticky.wrap&&this.css(t.parentNode,{display:"block",width:t.sticky.rect.width+"px",height:t.sticky.rect.height+"px"}),0===t.sticky.rect.top&&t.sticky.container===this.body?this.css(t,{position:"fixed",top:t.sticky.rect.top+"px",left:t.sticky.rect.left+"px",width:t.sticky.rect.width+"px"}):this.scrollTop>t.sticky.rect.top-t.sticky.marginTop?(this.css(t,{position:"fixed",width:t.sticky.rect.width+"px",left:t.sticky.rect.left+"px"}),this.scrollTop+t.sticky.rect.height+t.sticky.marginTop>t.sticky.container.rect.top+t.sticky.container.offsetHeight?(t.sticky.stickyClass&&t.classList.remove(t.sticky.stickyClass),this.css(t,{top:t.sticky.container.rect.top+t.sticky.container.offsetHeight-(this.scrollTop+t.sticky.rect.height)+"px"})):(t.sticky.stickyClass&&t.classList.add(t.sticky.stickyClass),this.css(t,{top:t.sticky.marginTop+"px"}))):(t.sticky.stickyClass&&t.classList.remove(t.sticky.stickyClass),this.css(t,{position:"",width:"",top:"",left:""}),t.sticky.wrap&&this.css(t.parentNode,{display:"",width:"",height:""})))},i.prototype.update=function(){var e=this;this.forEach(this.elements,function(t){t.sticky.rect=e.getRectangle(t),t.sticky.container.rect=e.getRectangle(t.sticky.container),e.activate(t),e.setPosition(t)})},i.prototype.destroy=function(){var e=this;this.forEach(this.elements,function(t){e.destroyResizeEvents(t),e.destroyScrollEvents(t),delete t.sticky})},i.prototype.getStickyContainer=function(t){for(var e=t.parentNode;!e.hasAttribute("data-sticky-container")&&!e.parentNode.querySelector(t.sticky.stickyContainer)&&e!==this.body;)e=e.parentNode;return e},i.prototype.getRectangle=function(t){this.css(t,{position:"",width:"",top:"",left:""});for(var e=Math.max(t.offsetWidth,t.clientWidth,t.scrollWidth),i=Math.max(t.offsetHeight,t.clientHeight,t.scrollHeight),o=0,n=0;o+=t.offsetTop||0,n+=t.offsetLeft||0,t=t.offsetParent;);return{top:o,left:n,width:e,height:i}},i.prototype.getViewportSize=function(){return{width:Math.max(document.documentElement.clientWidth,window.innerWidth||0),height:Math.max(document.documentElement.clientHeight,window.innerHeight||0)}},i.prototype.updateScrollTopPosition=function(){this.scrollTop=(window.pageYOffset||document.scrollTop)-(document.clientTop||0)||0},i.prototype.forEach=function(t,e){for(var i=0,o=t.length;i<o;i++)e(t[i])},i.prototype.css=function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t.style[i]=e[i])},i}();!function(t,e){"undefined"!=typeof exports?module.exports=e:"function"==typeof define&&define.amd?define([],e):t.Sticky=e}(this,Sticky),function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):"undefined"!=typeof exports?module.exports=t(require("jquery")):t(jQuery)}(function(c){"use strict";var n,a=window.Slick||{};n=0,(a=function(t,e){var i,o=this;o.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:c(t),appendDots:c(t),arrows:!0,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(t,e){return c('<button type="button" data-role="none" role="button" tabindex="0" />').text(e+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},o.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},c.extend(o,o.initials),o.activeBreakpoint=null,o.animType=null,o.animProp=null,o.breakpoints=[],o.breakpointSettings=[],o.cssTransitions=!1,o.focussed=!1,o.interrupted=!1,o.hidden="hidden",o.paused=!0,o.positionProp=null,o.respondTo=null,o.rowCount=1,o.shouldClick=!0,o.$slider=c(t),o.$slidesCache=null,o.transformType=null,o.transitionType=null,o.visibilityChange="visibilitychange",o.windowWidth=0,o.windowTimer=null,i=c(t).data("slick")||{},o.options=c.extend({},o.defaults,e,i),o.currentSlide=o.options.initialSlide,o.originalSettings=o.options,void 0!==document.mozHidden?(o.hidden="mozHidden",o.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(o.hidden="webkitHidden",o.visibilityChange="webkitvisibilitychange"),o.autoPlay=c.proxy(o.autoPlay,o),o.autoPlayClear=c.proxy(o.autoPlayClear,o),o.autoPlayIterator=c.proxy(o.autoPlayIterator,o),o.changeSlide=c.proxy(o.changeSlide,o),o.clickHandler=c.proxy(o.clickHandler,o),o.selectHandler=c.proxy(o.selectHandler,o),o.setPosition=c.proxy(o.setPosition,o),o.swipeHandler=c.proxy(o.swipeHandler,o),o.dragHandler=c.proxy(o.dragHandler,o),o.keyHandler=c.proxy(o.keyHandler,o),o.instanceUid=n++,o.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,o.registerBreakpoints(),o.init(!0)}).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},a.prototype.addSlide=a.prototype.slickAdd=function(t,e,i){var o=this;if("boolean"==typeof e)i=e,e=null;else if(e<0||e>=o.slideCount)return!1;o.unload(),"number"==typeof e?0===e&&0===o.$slides.length?c(t).appendTo(o.$slideTrack):i?c(t).insertBefore(o.$slides.eq(e)):c(t).insertAfter(o.$slides.eq(e)):!0===i?c(t).prependTo(o.$slideTrack):c(t).appendTo(o.$slideTrack),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slides.each(function(t,e){c(e).attr("data-slick-index",t)}),o.$slidesCache=o.$slides,o.reinit()},a.prototype.animateHeight=function(){var t=this;if(1===t.options.slidesToShow&&!0===t.options.adaptiveHeight&&!1===t.options.vertical){var e=t.$slides.eq(t.currentSlide).outerHeight(!0);t.$list.animate({height:e},t.options.speed)}},a.prototype.animateSlide=function(t,e){var i={},o=this;o.animateHeight(),!0===o.options.rtl&&!1===o.options.vertical&&(t=-t),!1===o.transformsEnabled?!1===o.options.vertical?o.$slideTrack.animate({left:t},o.options.speed,o.options.easing,e):o.$slideTrack.animate({top:t},o.options.speed,o.options.easing,e):!1===o.cssTransitions?(!0===o.options.rtl&&(o.currentLeft=-o.currentLeft),c({animStart:o.currentLeft}).animate({animStart:t},{duration:o.options.speed,easing:o.options.easing,step:function(t){t=Math.ceil(t),!1===o.options.vertical?i[o.animType]="translate("+t+"px, 0px)":i[o.animType]="translate(0px,"+t+"px)",o.$slideTrack.css(i)},complete:function(){e&&e.call()}})):(o.applyTransition(),t=Math.ceil(t),!1===o.options.vertical?i[o.animType]="translate3d("+t+"px, 0px, 0px)":i[o.animType]="translate3d(0px,"+t+"px, 0px)",o.$slideTrack.css(i),e&&setTimeout(function(){o.disableTransition(),e.call()},o.options.speed))},a.prototype.getNavTarget=function(){var t=this.options.asNavFor;return t&&null!==t&&(t=c(t).not(this.$slider)),t},a.prototype.asNavFor=function(e){var t=this.getNavTarget();null!==t&&"object"==typeof t&&t.each(function(){var t=c(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},a.prototype.applyTransition=function(t){var e=this,i={};!1===e.options.fade?i[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:i[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(i):e.$slides.eq(t).css(i)},a.prototype.autoPlay=function(){var t=this;t.autoPlayClear(),t.slideCount>t.options.slidesToShow&&(t.autoPlayTimer=setInterval(t.autoPlayIterator,t.options.autoplaySpeed))},a.prototype.autoPlayClear=function(){this.autoPlayTimer&&clearInterval(this.autoPlayTimer)},a.prototype.autoPlayIterator=function(){var t=this,e=t.currentSlide+t.options.slidesToScroll;t.paused||t.interrupted||t.focussed||(!1===t.options.infinite&&(1===t.direction&&t.currentSlide+1===t.slideCount-1?t.direction=0:0===t.direction&&(e=t.currentSlide-t.options.slidesToScroll,t.currentSlide-1==0&&(t.direction=1))),t.slideHandler(e))},a.prototype.buildArrows=function(){var t=this;!0===t.options.arrows&&(t.$prevArrow=c(t.options.prevArrow).addClass("slick-arrow"),t.$nextArrow=c(t.options.nextArrow).addClass("slick-arrow"),t.slideCount>t.options.slidesToShow?(t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.prependTo(t.options.appendArrows),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.appendTo(t.options.appendArrows),!0!==t.options.infinite&&t.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},a.prototype.buildDots=function(){var t,e,i=this;if(!0===i.options.dots&&i.slideCount>i.options.slidesToShow){for(i.$slider.addClass("slick-dotted"),e=c("<ul />").addClass(i.options.dotsClass),t=0;t<=i.getDotCount();t+=1)e.append(c("<li />").append(i.options.customPaging.call(this,i,t)));i.$dots=e.appendTo(i.options.appendDots),i.$dots.find("li").first().addClass("slick-active").attr("aria-hidden","false")}},a.prototype.buildOut=function(){var t=this;t.$slides=t.$slider.children(t.options.slide+":not(.slick-cloned)").addClass("slick-slide"),t.slideCount=t.$slides.length,t.$slides.each(function(t,e){c(e).attr("data-slick-index",t).data("originalStyling",c(e).attr("style")||"")}),t.$slider.addClass("slick-slider"),t.$slideTrack=0===t.slideCount?c('<div class="slick-track"/>').appendTo(t.$slider):t.$slides.wrapAll('<div class="slick-track"/>').parent(),t.$list=t.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),t.$slideTrack.css("opacity",0),!0!==t.options.centerMode&&!0!==t.options.swipeToSlide||(t.options.slidesToScroll=1),c("img[data-lazy]",t.$slider).not("[src]").addClass("slick-loading"),t.setupInfinite(),t.buildArrows(),t.buildDots(),t.updateDots(),t.setSlideClasses("number"==typeof t.currentSlide?t.currentSlide:0),!0===t.options.draggable&&t.$list.addClass("draggable")},a.prototype.buildRows=function(){var t,e,i,o,n,s,a,r=this;if(o=document.createDocumentFragment(),s=r.$slider.children(),1<r.options.rows){for(a=r.options.slidesPerRow*r.options.rows,n=Math.ceil(s.length/a),t=0;t<n;t++){var l=document.createElement("div");for(e=0;e<r.options.rows;e++){var c=document.createElement("div");for(i=0;i<r.options.slidesPerRow;i++){var d=t*a+(e*r.options.slidesPerRow+i);s.get(d)&&c.appendChild(s.get(d))}l.appendChild(c)}o.appendChild(l)}r.$slider.empty().append(o),r.$slider.children().children().children().css({width:100/r.options.slidesPerRow+"%",display:"inline-block"})}},a.prototype.checkResponsive=function(t,e){var i,o,n,s=this,a=!1,r=s.$slider.width(),l=window.innerWidth||c(window).width();if("window"===s.respondTo?n=l:"slider"===s.respondTo?n=r:"min"===s.respondTo&&(n=Math.min(l,r)),s.options.responsive&&s.options.responsive.length&&null!==s.options.responsive){for(i in o=null,s.breakpoints)s.breakpoints.hasOwnProperty(i)&&(!1===s.originalSettings.mobileFirst?n<s.breakpoints[i]&&(o=s.breakpoints[i]):n>s.breakpoints[i]&&(o=s.breakpoints[i]));null!==o?null!==s.activeBreakpoint?o===s.activeBreakpoint&&!e||(s.activeBreakpoint=o,"unslick"===s.breakpointSettings[o]?s.unslick(o):(s.options=c.extend({},s.originalSettings,s.breakpointSettings[o]),!0===t&&(s.currentSlide=s.options.initialSlide),s.refresh(t)),a=o):(s.activeBreakpoint=o,"unslick"===s.breakpointSettings[o]?s.unslick(o):(s.options=c.extend({},s.originalSettings,s.breakpointSettings[o]),!0===t&&(s.currentSlide=s.options.initialSlide),s.refresh(t)),a=o):null!==s.activeBreakpoint&&(s.activeBreakpoint=null,s.options=s.originalSettings,!0===t&&(s.currentSlide=s.options.initialSlide),s.refresh(t),a=o),t||!1===a||s.$slider.trigger("breakpoint",[s,a])}},a.prototype.changeSlide=function(t,e){var i,o,n=this,s=c(t.currentTarget);switch(s.is("a")&&t.preventDefault(),s.is("li")||(s=s.closest("li")),i=n.slideCount%n.options.slidesToScroll!=0?0:(n.slideCount-n.currentSlide)%n.options.slidesToScroll,t.data.message){case"previous":o=0==i?n.options.slidesToScroll:n.options.slidesToShow-i,n.slideCount>n.options.slidesToShow&&n.slideHandler(n.currentSlide-o,!1,e);break;case"next":o=0==i?n.options.slidesToScroll:i,n.slideCount>n.options.slidesToShow&&n.slideHandler(n.currentSlide+o,!1,e);break;case"index":var a=0===t.data.index?0:t.data.index||s.index()*n.options.slidesToScroll;n.slideHandler(n.checkNavigable(a),!1,e),s.children().trigger("focus");break;default:return}},a.prototype.checkNavigable=function(t){var e,i;if(i=0,t>(e=this.getNavigableIndexes())[e.length-1])t=e[e.length-1];else for(var o in e){if(t<e[o]){t=i;break}i=e[o]}return t},a.prototype.cleanUpEvents=function(){var t=this;t.options.dots&&null!==t.$dots&&c("li",t.$dots).off("click.slick",t.changeSlide).off("mouseenter.slick",c.proxy(t.interrupt,t,!0)).off("mouseleave.slick",c.proxy(t.interrupt,t,!1)),t.$slider.off("focus.slick blur.slick"),!0===t.options.arrows&&t.slideCount>t.options.slidesToShow&&(t.$prevArrow&&t.$prevArrow.off("click.slick",t.changeSlide),t.$nextArrow&&t.$nextArrow.off("click.slick",t.changeSlide)),t.$list.off("touchstart.slick mousedown.slick",t.swipeHandler),t.$list.off("touchmove.slick mousemove.slick",t.swipeHandler),t.$list.off("touchend.slick mouseup.slick",t.swipeHandler),t.$list.off("touchcancel.slick mouseleave.slick",t.swipeHandler),t.$list.off("click.slick",t.clickHandler),c(document).off(t.visibilityChange,t.visibility),t.cleanUpSlideEvents(),!0===t.options.accessibility&&t.$list.off("keydown.slick",t.keyHandler),!0===t.options.focusOnSelect&&c(t.$slideTrack).children().off("click.slick",t.selectHandler),c(window).off("orientationchange.slick.slick-"+t.instanceUid,t.orientationChange),c(window).off("resize.slick.slick-"+t.instanceUid,t.resize),c("[draggable!=true]",t.$slideTrack).off("dragstart",t.preventDefault),c(window).off("load.slick.slick-"+t.instanceUid,t.setPosition),c(document).off("ready.slick.slick-"+t.instanceUid,t.setPosition)},a.prototype.cleanUpSlideEvents=function(){var t=this;t.$list.off("mouseenter.slick",c.proxy(t.interrupt,t,!0)),t.$list.off("mouseleave.slick",c.proxy(t.interrupt,t,!1))},a.prototype.cleanUpRows=function(){var t;1<this.options.rows&&((t=this.$slides.children().children()).removeAttr("style"),this.$slider.empty().append(t))},a.prototype.clickHandler=function(t){!1===this.shouldClick&&(t.stopImmediatePropagation(),t.stopPropagation(),t.preventDefault())},a.prototype.destroy=function(t){var e=this;e.autoPlayClear(),e.touchObject={},e.cleanUpEvents(),c(".slick-cloned",e.$slider).detach(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.$prevArrow.length&&(e.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove()),e.$nextArrow&&e.$nextArrow.length&&(e.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove()),e.$slides&&(e.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){c(this).attr("style",c(this).data("originalStyling"))}),e.$slideTrack.children(this.options.slide).detach(),e.$slideTrack.detach(),e.$list.detach(),e.$slider.append(e.$slides)),e.cleanUpRows(),e.$slider.removeClass("slick-slider"),e.$slider.removeClass("slick-initialized"),e.$slider.removeClass("slick-dotted"),e.unslicked=!0,t||e.$slider.trigger("destroy",[e])},a.prototype.disableTransition=function(t){var e={};e[this.transitionType]="",!1===this.options.fade?this.$slideTrack.css(e):this.$slides.eq(t).css(e)},a.prototype.fadeSlide=function(t,e){var i=this;!1===i.cssTransitions?(i.$slides.eq(t).css({zIndex:i.options.zIndex}),i.$slides.eq(t).animate({opacity:1},i.options.speed,i.options.easing,e)):(i.applyTransition(t),i.$slides.eq(t).css({opacity:1,zIndex:i.options.zIndex}),e&&setTimeout(function(){i.disableTransition(t),e.call()},i.options.speed))},a.prototype.fadeSlideOut=function(t){var e=this;!1===e.cssTransitions?e.$slides.eq(t).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(t),e.$slides.eq(t).css({opacity:0,zIndex:e.options.zIndex-2}))},a.prototype.filterSlides=a.prototype.slickFilter=function(t){var e=this;null!==t&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(t).appendTo(e.$slideTrack),e.reinit())},a.prototype.focusHandler=function(){var i=this;i.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*:not(.slick-arrow)",function(t){t.stopImmediatePropagation();var e=c(this);setTimeout(function(){i.options.pauseOnFocus&&(i.focussed=e.is(":focus"),i.autoPlay())},0)})},a.prototype.getCurrent=a.prototype.slickCurrentSlide=function(){return this.currentSlide},a.prototype.getDotCount=function(){var t=this,e=0,i=0,o=0;if(!0===t.options.infinite)for(;e<t.slideCount;)++o,e=i+t.options.slidesToScroll,i+=t.options.slidesToScroll<=t.options.slidesToShow?t.options.slidesToScroll:t.options.slidesToShow;else if(!0===t.options.centerMode)o=t.slideCount;else if(t.options.asNavFor)for(;e<t.slideCount;)++o,e=i+t.options.slidesToScroll,i+=t.options.slidesToScroll<=t.options.slidesToShow?t.options.slidesToScroll:t.options.slidesToShow;else o=1+Math.ceil((t.slideCount-t.options.slidesToShow)/t.options.slidesToScroll);return o-1},a.prototype.getLeft=function(t){var e,i,o,n=this,s=0;return n.slideOffset=0,i=n.$slides.first().outerHeight(!0),!0===n.options.infinite?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=i*n.options.slidesToShow*-1),n.slideCount%n.options.slidesToScroll!=0&&t+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(s=t>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(t-n.slideCount))*n.slideWidth*-1,(n.options.slidesToShow-(t-n.slideCount))*i*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,n.slideCount%n.options.slidesToScroll*i*-1))):t+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(t+n.options.slidesToShow-n.slideCount)*n.slideWidth,s=(t+n.options.slidesToShow-n.slideCount)*i),n.slideCount<=n.options.slidesToShow&&(s=n.slideOffset=0),!0===n.options.centerMode&&!0===n.options.infinite?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:!0===n.options.centerMode&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=!1===n.options.vertical?t*n.slideWidth*-1+n.slideOffset:t*i*-1+s,!0===n.options.variableWidth&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(t):n.$slideTrack.children(".slick-slide").eq(t+n.options.slidesToShow),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,!0===n.options.centerMode&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(t):n.$slideTrack.children(".slick-slide").eq(t+n.options.slidesToShow+1),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,e+=(n.$list.width()-o.outerWidth())/2)),e},a.prototype.getOption=a.prototype.slickGetOption=function(t){return this.options[t]},a.prototype.getNavigableIndexes=function(){var t,e=this,i=0,o=0,n=[];for(t=!1===e.options.infinite?e.slideCount:(i=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,2*e.slideCount);i<t;)n.push(i),i=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return n},a.prototype.getSlick=function(){return this},a.prototype.getSlideCount=function(){var i,o,n=this;return o=!0===n.options.centerMode?n.slideWidth*Math.floor(n.options.slidesToShow/2):0,!0===n.options.swipeToSlide?(n.$slideTrack.find(".slick-slide").each(function(t,e){return e.offsetLeft-o+c(e).outerWidth()/2>-1*n.swipeLeft?(i=e,!1):void 0}),Math.abs(c(i).attr("data-slick-index")-n.currentSlide)||1):n.options.slidesToScroll},a.prototype.goTo=a.prototype.slickGoTo=function(t,e){this.changeSlide({data:{message:"index",index:parseInt(t)}},e)},a.prototype.init=function(t){var e=this;c(e.$slider).hasClass("slick-initialized")||(c(e.$slider).addClass("slick-initialized"),e.buildRows(),e.buildOut(),e.setProps(),e.startLoad(),e.loadSlider(),e.initializeEvents(),e.updateArrows(),e.updateDots(),e.checkResponsive(!0),e.focusHandler()),t&&e.$slider.trigger("init",[e]),!0===e.options.accessibility&&e.initADA(),e.options.autoplay&&(e.paused=!1,e.autoPlay())},a.prototype.initADA=function(){var e=this;e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),e.$slideTrack.attr("role","listbox"),e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){c(this).attr({role:"option","aria-describedby":"slick-slide"+e.instanceUid+t})}),null!==e.$dots&&e.$dots.attr("role","tablist").find("li").each(function(t){c(this).attr({role:"presentation","aria-selected":"false","aria-controls":"navigation"+e.instanceUid+t,id:"slick-slide"+e.instanceUid+t})}).first().attr("aria-selected","true").end().find("button").attr("role","button").end().closest("div").attr("role","toolbar"),e.activateADA()},a.prototype.initArrowEvents=function(){var t=this;!0===t.options.arrows&&t.slideCount>t.options.slidesToShow&&(t.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},t.changeSlide),t.$nextArrow.off("click.slick").on("click.slick",{message:"next"},t.changeSlide))},a.prototype.initDotEvents=function(){var t=this;!0===t.options.dots&&t.slideCount>t.options.slidesToShow&&c("li",t.$dots).on("click.slick",{message:"index"},t.changeSlide),!0===t.options.dots&&!0===t.options.pauseOnDotsHover&&c("li",t.$dots).on("mouseenter.slick",c.proxy(t.interrupt,t,!0)).on("mouseleave.slick",c.proxy(t.interrupt,t,!1))},a.prototype.initSlideEvents=function(){var t=this;t.options.pauseOnHover&&(t.$list.on("mouseenter.slick",c.proxy(t.interrupt,t,!0)),t.$list.on("mouseleave.slick",c.proxy(t.interrupt,t,!1)))},a.prototype.initializeEvents=function(){var t=this;t.initArrowEvents(),t.initDotEvents(),t.initSlideEvents(),t.$list.on("touchstart.slick mousedown.slick",{action:"start"},t.swipeHandler),t.$list.on("touchmove.slick mousemove.slick",{action:"move"},t.swipeHandler),t.$list.on("touchend.slick mouseup.slick",{action:"end"},t.swipeHandler),t.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},t.swipeHandler),t.$list.on("click.slick",t.clickHandler),c(document).on(t.visibilityChange,c.proxy(t.visibility,t)),!0===t.options.accessibility&&t.$list.on("keydown.slick",t.keyHandler),!0===t.options.focusOnSelect&&c(t.$slideTrack).children().on("click.slick",t.selectHandler),c(window).on("orientationchange.slick.slick-"+t.instanceUid,c.proxy(t.orientationChange,t)),c(window).on("resize.slick.slick-"+t.instanceUid,c.proxy(t.resize,t)),c("[draggable!=true]",t.$slideTrack).on("dragstart",t.preventDefault),c(window).on("load.slick.slick-"+t.instanceUid,t.setPosition),c(document).on("ready.slick.slick-"+t.instanceUid,t.setPosition)},a.prototype.initUI=function(){var t=this;!0===t.options.arrows&&t.slideCount>t.options.slidesToShow&&(t.$prevArrow.show(),t.$nextArrow.show()),!0===t.options.dots&&t.slideCount>t.options.slidesToShow&&t.$dots.show()},a.prototype.keyHandler=function(t){var e=this;t.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===t.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}}):39===t.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}}))},a.prototype.lazyLoad=function(){function t(t){c("img[data-lazy]",t).each(function(){var t=c(this),e=c(this).attr("data-lazy"),i=document.createElement("img");i.onload=function(){t.animate({opacity:0},100,function(){t.attr("src",e).animate({opacity:1},200,function(){t.removeAttr("data-lazy").removeClass("slick-loading")}),o.$slider.trigger("lazyLoaded",[o,t,e])})},i.onerror=function(){t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),o.$slider.trigger("lazyLoadError",[o,t,e])},i.src=e})}var e,i,o=this;!0===o.options.centerMode?i=!0===o.options.infinite?(e=o.currentSlide+(o.options.slidesToShow/2+1))+o.options.slidesToShow+2:(e=Math.max(0,o.currentSlide-(o.options.slidesToShow/2+1)),o.options.slidesToShow/2+1+2+o.currentSlide):(e=o.options.infinite?o.options.slidesToShow+o.currentSlide:o.currentSlide,i=Math.ceil(e+o.options.slidesToShow),!0===o.options.fade&&(0<e&&e--,i<=o.slideCount&&i++)),t(o.$slider.find(".slick-slide").slice(e,i)),o.slideCount<=o.options.slidesToShow?t(o.$slider.find(".slick-slide")):o.currentSlide>=o.slideCount-o.options.slidesToShow?t(o.$slider.find(".slick-cloned").slice(0,o.options.slidesToShow)):0===o.currentSlide&&t(o.$slider.find(".slick-cloned").slice(-1*o.options.slidesToShow))},a.prototype.loadSlider=function(){var t=this;t.setPosition(),t.$slideTrack.css({opacity:1}),t.$slider.removeClass("slick-loading"),t.initUI(),"progressive"===t.options.lazyLoad&&t.progressiveLazyLoad()},a.prototype.next=a.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},a.prototype.orientationChange=function(){this.checkResponsive(),this.setPosition()},a.prototype.pause=a.prototype.slickPause=function(){this.autoPlayClear(),this.paused=!0},a.prototype.play=a.prototype.slickPlay=function(){var t=this;t.autoPlay(),t.options.autoplay=!0,t.paused=!1,t.focussed=!1,t.interrupted=!1},a.prototype.postSlide=function(t){var e=this;e.unslicked||(e.$slider.trigger("afterChange",[e,t]),e.animating=!1,e.setPosition(),e.swipeLeft=null,e.options.autoplay&&e.autoPlay(),!0===e.options.accessibility&&e.initADA())},a.prototype.prev=a.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},a.prototype.preventDefault=function(t){t.preventDefault()},a.prototype.progressiveLazyLoad=function(t){t=t||1;var e,i,o,n=this,s=c("img[data-lazy]",n.$slider);s.length?(e=s.first(),i=e.attr("data-lazy"),(o=document.createElement("img")).onload=function(){e.attr("src",i).removeAttr("data-lazy").removeClass("slick-loading"),!0===n.options.adaptiveHeight&&n.setPosition(),n.$slider.trigger("lazyLoaded",[n,e,i]),n.progressiveLazyLoad()},o.onerror=function(){t<3?setTimeout(function(){n.progressiveLazyLoad(t+1)},500):(e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),n.$slider.trigger("lazyLoadError",[n,e,i]),n.progressiveLazyLoad())},o.src=i):n.$slider.trigger("allImagesLoaded",[n])},a.prototype.refresh=function(t){var e,i,o=this;i=o.slideCount-o.options.slidesToShow,!o.options.infinite&&o.currentSlide>i&&(o.currentSlide=i),o.slideCount<=o.options.slidesToShow&&(o.currentSlide=0),e=o.currentSlide,o.destroy(!0),c.extend(o,o.initials,{currentSlide:e}),o.init(),t||o.changeSlide({data:{message:"index",index:e}},!1)},a.prototype.registerBreakpoints=function(){var t,e,i,o=this,n=o.options.responsive||null;if("array"===c.type(n)&&n.length){for(t in o.respondTo=o.options.respondTo||"window",n)if(i=o.breakpoints.length-1,e=n[t].breakpoint,n.hasOwnProperty(t)){for(;0<=i;)o.breakpoints[i]&&o.breakpoints[i]===e&&o.breakpoints.splice(i,1),i--;o.breakpoints.push(e),o.breakpointSettings[e]=n[t].settings}o.breakpoints.sort(function(t,e){return o.options.mobileFirst?t-e:e-t})}},a.prototype.reinit=function(){var t=this;t.$slides=t.$slideTrack.children(t.options.slide).addClass("slick-slide"),t.slideCount=t.$slides.length,t.currentSlide>=t.slideCount&&0!==t.currentSlide&&(t.currentSlide=t.currentSlide-t.options.slidesToScroll),t.slideCount<=t.options.slidesToShow&&(t.currentSlide=0),t.registerBreakpoints(),t.setProps(),t.setupInfinite(),t.buildArrows(),t.updateArrows(),t.initArrowEvents(),t.buildDots(),t.updateDots(),t.initDotEvents(),t.cleanUpSlideEvents(),t.initSlideEvents(),t.checkResponsive(!1,!0),!0===t.options.focusOnSelect&&c(t.$slideTrack).children().on("click.slick",t.selectHandler),t.setSlideClasses("number"==typeof t.currentSlide?t.currentSlide:0),t.setPosition(),t.focusHandler(),t.paused=!t.options.autoplay,t.autoPlay(),t.$slider.trigger("reInit",[t])},a.prototype.resize=function(){var t=this;c(window).width()!==t.windowWidth&&(clearTimeout(t.windowDelay),t.windowDelay=window.setTimeout(function(){t.windowWidth=c(window).width(),t.checkResponsive(),t.unslicked||t.setPosition()},50))},a.prototype.removeSlide=a.prototype.slickRemove=function(t,e,i){var o=this;return t="boolean"==typeof t?!0===(e=t)?0:o.slideCount-1:!0===e?--t:t,!(o.slideCount<1||t<0||t>o.slideCount-1)&&(o.unload(),!0===i?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(t).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,void o.reinit())},a.prototype.setCSS=function(t){var e,i,o=this,n={};!0===o.options.rtl&&(t=-t),e="left"==o.positionProp?Math.ceil(t)+"px":"0px",i="top"==o.positionProp?Math.ceil(t)+"px":"0px",n[o.positionProp]=t,!1===o.transformsEnabled||(!(n={})===o.cssTransitions?n[o.animType]="translate("+e+", "+i+")":n[o.animType]="translate3d("+e+", "+i+", 0px)"),o.$slideTrack.css(n)},a.prototype.setDimensions=function(){var t=this;!1===t.options.vertical?!0===t.options.centerMode&&t.$list.css({padding:"0px "+t.options.centerPadding}):(t.$list.height(t.$slides.first().outerHeight(!0)*t.options.slidesToShow),!0===t.options.centerMode&&t.$list.css({padding:t.options.centerPadding+" 0px"})),t.listWidth=t.$list.width(),t.listHeight=t.$list.height(),!1===t.options.vertical&&!1===t.options.variableWidth?(t.slideWidth=Math.ceil(t.listWidth/t.options.slidesToShow),t.$slideTrack.width(Math.ceil(t.slideWidth*t.$slideTrack.children(".slick-slide").length))):!0===t.options.variableWidth?t.$slideTrack.width(5e3*t.slideCount):(t.slideWidth=Math.ceil(t.listWidth),t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0)*t.$slideTrack.children(".slick-slide").length)));var e=t.$slides.first().outerWidth(!0)-t.$slides.first().width();!1===t.options.variableWidth&&t.$slideTrack.children(".slick-slide").width(t.slideWidth-e)},a.prototype.setFade=function(){var i,o=this;o.$slides.each(function(t,e){i=o.slideWidth*t*-1,!0===o.options.rtl?c(e).css({position:"relative",right:i,top:0,zIndex:o.options.zIndex-2,opacity:0}):c(e).css({position:"relative",left:i,top:0,zIndex:o.options.zIndex-2,opacity:0})}),o.$slides.eq(o.currentSlide).css({zIndex:o.options.zIndex-1,opacity:1})},a.prototype.setHeight=function(){var t=this;if(1===t.options.slidesToShow&&!0===t.options.adaptiveHeight&&!1===t.options.vertical){var e=t.$slides.eq(t.currentSlide).outerHeight(!0);t.$list.css("height",e)}},a.prototype.setOption=a.prototype.slickSetOption=function(){var t,e,i,o,n,s=this,a=!1;if("object"===c.type(arguments[0])?(i=arguments[0],a=arguments[1],n="multiple"):"string"===c.type(arguments[0])&&(o=arguments[1],a=arguments[2],"responsive"===(i=arguments[0])&&"array"===c.type(arguments[1])?n="responsive":void 0!==arguments[1]&&(n="single")),"single"===n)s.options[i]=o;else if("multiple"===n)c.each(i,function(t,e){s.options[t]=e});else if("responsive"===n)for(e in o)if("array"!==c.type(s.options.responsive))s.options.responsive=[o[e]];else{for(t=s.options.responsive.length-1;0<=t;)s.options.responsive[t].breakpoint===o[e].breakpoint&&s.options.responsive.splice(t,1),t--;s.options.responsive.push(o[e])}a&&(s.unload(),s.reinit())},a.prototype.setPosition=function(){var t=this;t.setDimensions(),t.setHeight(),!1===t.options.fade?t.setCSS(t.getLeft(t.currentSlide)):t.setFade(),t.$slider.trigger("setPosition",[t])},a.prototype.setProps=function(){var t=this,e=document.body.style;t.positionProp=!0===t.options.vertical?"top":"left","top"===t.positionProp?t.$slider.addClass("slick-vertical"):t.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0!==t.options.useCSS||(t.cssTransitions=!0),t.options.fade&&("number"==typeof t.options.zIndex?t.options.zIndex<3&&(t.options.zIndex=3):t.options.zIndex=t.defaults.zIndex),void 0!==e.OTransform&&(t.animType="OTransform",t.transformType="-o-transform",t.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(t.animType=!1)),void 0!==e.MozTransform&&(t.animType="MozTransform",t.transformType="-moz-transform",t.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(t.animType=!1)),void 0!==e.webkitTransform&&(t.animType="webkitTransform",t.transformType="-webkit-transform",t.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(t.animType=!1)),void 0!==e.msTransform&&(t.animType="msTransform",t.transformType="-ms-transform",t.transitionType="msTransition",void 0===e.msTransform&&(t.animType=!1)),void 0!==e.transform&&!1!==t.animType&&(t.animType="transform",t.transformType="transform",t.transitionType="transition"),t.transformsEnabled=t.options.useTransform&&null!==t.animType&&!1!==t.animType},a.prototype.setSlideClasses=function(t){var e,i,o,n,s=this;i=s.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),s.$slides.eq(t).addClass("slick-current"),!0===s.options.centerMode?(e=Math.floor(s.options.slidesToShow/2),!0===s.options.infinite&&(e<=t&&t<=s.slideCount-1-e?s.$slides.slice(t-e,t+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=s.options.slidesToShow+t,i.slice(o-e+1,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===t?i.eq(i.length-1-s.options.slidesToShow).addClass("slick-center"):t===s.slideCount-1&&i.eq(s.options.slidesToShow).addClass("slick-center")),s.$slides.eq(t).addClass("slick-center")):0<=t&&t<=s.slideCount-s.options.slidesToShow?s.$slides.slice(t,t+s.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):i.length<=s.options.slidesToShow?i.addClass("slick-active").attr("aria-hidden","false"):(n=s.slideCount%s.options.slidesToShow,o=!0===s.options.infinite?s.options.slidesToShow+t:t,s.options.slidesToShow==s.options.slidesToScroll&&s.slideCount-t<s.options.slidesToShow?i.slice(o-(s.options.slidesToShow-n),o+n).addClass("slick-active").attr("aria-hidden","false"):i.slice(o,o+s.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")),"ondemand"===s.options.lazyLoad&&s.lazyLoad()},a.prototype.setupInfinite=function(){var t,e,i,o=this;if(!0===o.options.fade&&(o.options.centerMode=!1),!0===o.options.infinite&&!1===o.options.fade&&(e=null,o.slideCount>o.options.slidesToShow)){for(i=!0===o.options.centerMode?o.options.slidesToShow+1:o.options.slidesToShow,t=o.slideCount;t>o.slideCount-i;--t)e=t-1,c(o.$slides[e]).clone(!0).attr("id","").attr("data-slick-index",e-o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");for(t=0;t<i;t+=1)e=t,c(o.$slides[e]).clone(!0).attr("id","").attr("data-slick-index",e+o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");o.$slideTrack.find(".slick-cloned").find("[id]").each(function(){c(this).attr("id","")})}},a.prototype.interrupt=function(t){t||this.autoPlay(),this.interrupted=t},a.prototype.selectHandler=function(t){var e=this,i=c(t.target).is(".slick-slide")?c(t.target):c(t.target).parents(".slick-slide"),o=parseInt(i.attr("data-slick-index"));return o=o||0,e.slideCount<=e.options.slidesToShow?(e.setSlideClasses(o),void e.asNavFor(o)):void e.slideHandler(o)},a.prototype.slideHandler=function(t,e,i){var o,n,s,a,r,l=null,c=this;return e=e||!1,!0===c.animating&&!0===c.options.waitForAnimate||!0===c.options.fade&&c.currentSlide===t||c.slideCount<=c.options.slidesToShow?void 0:(!1===e&&c.asNavFor(t),o=t,l=c.getLeft(o),a=c.getLeft(c.currentSlide),c.currentLeft=null===c.swipeLeft?a:c.swipeLeft,!1===c.options.infinite&&!1===c.options.centerMode&&(t<0||t>c.getDotCount()*c.options.slidesToScroll)||!1===c.options.infinite&&!0===c.options.centerMode&&(t<0||t>c.slideCount-c.options.slidesToScroll)?void(!1===c.options.fade&&(o=c.currentSlide,!0!==i?c.animateSlide(a,function(){c.postSlide(o)}):c.postSlide(o))):(c.options.autoplay&&clearInterval(c.autoPlayTimer),n=o<0?c.slideCount%c.options.slidesToScroll!=0?c.slideCount-c.slideCount%c.options.slidesToScroll:c.slideCount+o:o>=c.slideCount?c.slideCount%c.options.slidesToScroll!=0?0:o-c.slideCount:o,c.animating=!0,c.$slider.trigger("beforeChange",[c,c.currentSlide,n]),s=c.currentSlide,c.currentSlide=n,c.setSlideClasses(c.currentSlide),c.options.asNavFor&&((r=(r=c.getNavTarget()).slick("getSlick")).slideCount<=r.options.slidesToShow&&r.setSlideClasses(c.currentSlide)),c.updateDots(),c.updateArrows(),!0===c.options.fade?(!0!==i?(c.fadeSlideOut(s),c.fadeSlide(n,function(){c.postSlide(n)})):c.postSlide(n),void c.animateHeight()):void(!0!==i?c.animateSlide(l,function(){c.postSlide(n)}):c.postSlide(n))))},a.prototype.startLoad=function(){var t=this;!0===t.options.arrows&&t.slideCount>t.options.slidesToShow&&(t.$prevArrow.hide(),t.$nextArrow.hide()),!0===t.options.dots&&t.slideCount>t.options.slidesToShow&&t.$dots.hide(),t.$slider.addClass("slick-loading")},a.prototype.swipeDirection=function(){var t,e,i,o,n=this;return t=n.touchObject.startX-n.touchObject.curX,e=n.touchObject.startY-n.touchObject.curY,i=Math.atan2(e,t),(o=Math.round(180*i/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&0<=o||o<=360&&315<=o?!1===n.options.rtl?"left":"right":135<=o&&o<=225?!1===n.options.rtl?"right":"left":!0===n.options.verticalSwiping?35<=o&&o<=135?"down":"up":"vertical"},a.prototype.swipeEnd=function(t){var e,i,o=this;if(o.dragging=!1,o.interrupted=!1,o.shouldClick=!(10<o.touchObject.swipeLength),void 0===o.touchObject.curX)return!1;if(!0===o.touchObject.edgeHit&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(i=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=i&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,i]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},a.prototype.swipeHandler=function(t){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==t.type.indexOf("mouse")))switch(e.touchObject.fingerCount=t.originalEvent&&void 0!==t.originalEvent.touches?t.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),t.data.action){case"start":e.swipeStart(t);break;case"move":e.swipeMove(t);break;case"end":e.swipeEnd(t)}},a.prototype.swipeMove=function(t){var e,i,o,n,s,a=this;return s=void 0!==t.originalEvent?t.originalEvent.touches:null,!(!a.dragging||s&&1!==s.length)&&(e=a.getLeft(a.currentSlide),a.touchObject.curX=void 0!==s?s[0].pageX:t.clientX,a.touchObject.curY=void 0!==s?s[0].pageY:t.clientY,a.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(a.touchObject.curX-a.touchObject.startX,2))),!0===a.options.verticalSwiping&&(a.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(a.touchObject.curY-a.touchObject.startY,2)))),"vertical"!==(i=a.swipeDirection())?(void 0!==t.originalEvent&&4<a.touchObject.swipeLength&&t.preventDefault(),n=(!1===a.options.rtl?1:-1)*(a.touchObject.curX>a.touchObject.startX?1:-1),!0===a.options.verticalSwiping&&(n=a.touchObject.curY>a.touchObject.startY?1:-1),o=a.touchObject.swipeLength,(a.touchObject.edgeHit=!1)===a.options.infinite&&(0===a.currentSlide&&"right"===i||a.currentSlide>=a.getDotCount()&&"left"===i)&&(o=a.touchObject.swipeLength*a.options.edgeFriction,a.touchObject.edgeHit=!0),!1===a.options.vertical?a.swipeLeft=e+o*n:a.swipeLeft=e+o*(a.$list.height()/a.listWidth)*n,!0===a.options.verticalSwiping&&(a.swipeLeft=e+o*n),!0!==a.options.fade&&!1!==a.options.touchMove&&(!0===a.animating?(a.swipeLeft=null,!1):void a.setCSS(a.swipeLeft))):void 0)},a.prototype.swipeStart=function(t){var e,i=this;return i.interrupted=!0,1!==i.touchObject.fingerCount||i.slideCount<=i.options.slidesToShow?!(i.touchObject={}):(void 0!==t.originalEvent&&void 0!==t.originalEvent.touches&&(e=t.originalEvent.touches[0]),i.touchObject.startX=i.touchObject.curX=void 0!==e?e.pageX:t.clientX,i.touchObject.startY=i.touchObject.curY=void 0!==e?e.pageY:t.clientY,void(i.dragging=!0))},a.prototype.unfilterSlides=a.prototype.slickUnfilter=function(){var t=this;null!==t.$slidesCache&&(t.unload(),t.$slideTrack.children(this.options.slide).detach(),t.$slidesCache.appendTo(t.$slideTrack),t.reinit())},a.prototype.unload=function(){var t=this;c(".slick-cloned",t.$slider).remove(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove(),t.$nextArrow&&t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove(),t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},a.prototype.unslick=function(t){this.$slider.trigger("unslick",[this,t]),this.destroy()},a.prototype.updateArrows=function(){var t=this;Math.floor(t.options.slidesToShow/2),!0===t.options.arrows&&t.slideCount>t.options.slidesToShow&&!t.options.infinite&&(t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===t.currentSlide?(t.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):t.currentSlide>=t.slideCount-t.options.slidesToShow&&!1===t.options.centerMode?(t.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):t.currentSlide>=t.slideCount-1&&!0===t.options.centerMode&&(t.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},a.prototype.updateDots=function(){var t=this;null!==t.$dots&&(t.$dots.find("li").removeClass("slick-active").attr("aria-hidden","true"),t.$dots.find("li").eq(Math.floor(t.currentSlide/t.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden","false"))},a.prototype.visibility=function(){this.options.autoplay&&(document[this.hidden]?this.interrupted=!0:this.interrupted=!1)},c.fn.slick=function(){var t,e,i=this,o=arguments[0],n=Array.prototype.slice.call(arguments,1),s=i.length;for(t=0;t<s;t++)if("object"==typeof o||void 0===o?i[t].slick=new a(i[t],o):e=i[t].slick[o].apply(i[t].slick,n),void 0!==e)return e;return i}});

/*! jQuery UI - v1.12.1+CommonJS - 2018-02-10
 * http://jqueryui.com
 * Includes: widget.js
 * Copyright jQuery Foundation and other contributors; Licensed MIT */

(function( factory ) {
  if ( typeof define === "function" && define.amd ) {

    // AMD. Register as an anonymous module.
    define([ "jquery" ], factory );
  } else if ( typeof exports === "object" ) {

    // Node/CommonJS
    factory( require( "jquery" ) );
  } else {

    // Browser globals
    factory( jQuery );
  }
}(function( $ ) {

  $.ui = $.ui || {};

  var version = $.ui.version = "1.12.1";


  /*!
   * jQuery UI Widget 1.12.1
   * http://jqueryui.com
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   */

  //>>label: Widget
  //>>group: Core
  //>>description: Provides a factory for creating stateful widgets with a common API.
  //>>docs: http://api.jqueryui.com/jQuery.widget/
  //>>demos: http://jqueryui.com/widget/



  var widgetUuid = 0;
  var widgetSlice = Array.prototype.slice;

  $.cleanData = ( function( orig ) {
    return function( elems ) {
      var events, elem, i;
      for ( i = 0; ( elem = elems[ i ] ) != null; i++ ) {
        try {

          // Only trigger remove when necessary to save time
          events = $._data( elem, "events" );
          if ( events && events.remove ) {
            $( elem ).triggerHandler( "remove" );
          }

          // Http://bugs.jquery.com/ticket/8235
        } catch ( e ) {}
      }
      orig( elems );
    };
  } )( $.cleanData );

  $.widget = function( name, base, prototype ) {
    var existingConstructor, constructor, basePrototype;

    // ProxiedPrototype allows the provided prototype to remain unmodified
    // so that it can be used as a mixin for multiple widgets (#8876)
    var proxiedPrototype = {};

    var namespace = name.split( "." )[ 0 ];
    name = name.split( "." )[ 1 ];
    var fullName = namespace + "-" + name;

    if ( !prototype ) {
      prototype = base;
      base = $.Widget;
    }

    if ( $.isArray( prototype ) ) {
      prototype = $.extend.apply( null, [ {} ].concat( prototype ) );
    }

    // Create selector for plugin
    $.expr[ ":" ][ fullName.toLowerCase() ] = function( elem ) {
      return !!$.data( elem, fullName );
    };

    $[ namespace ] = $[ namespace ] || {};
    existingConstructor = $[ namespace ][ name ];
    constructor = $[ namespace ][ name ] = function( options, element ) {

      // Allow instantiation without "new" keyword
      if ( !this._createWidget ) {
        return new constructor( options, element );
      }

      // Allow instantiation without initializing for simple inheritance
      // must use "new" keyword (the code above always passes args)
      if ( arguments.length ) {
        this._createWidget( options, element );
      }
    };

    // Extend with the existing constructor to carry over any static properties
    $.extend( constructor, existingConstructor, {
      version: prototype.version,

      // Copy the object used to create the prototype in case we need to
      // redefine the widget later
      _proto: $.extend( {}, prototype ),

      // Track widgets that inherit from this widget in case this widget is
      // redefined after a widget inherits from it
      _childConstructors: []
    } );

    basePrototype = new base();

    // We need to make the options hash a property directly on the new instance
    // otherwise we'll modify the options hash on the prototype that we're
    // inheriting from
    basePrototype.options = $.widget.extend( {}, basePrototype.options );
    $.each( prototype, function( prop, value ) {
      if ( !$.isFunction( value ) ) {
        proxiedPrototype[ prop ] = value;
        return;
      }
      proxiedPrototype[ prop ] = ( function() {
        function _super() {
          return base.prototype[ prop ].apply( this, arguments );
        }

        function _superApply( args ) {
          return base.prototype[ prop ].apply( this, args );
        }

        return function() {
          var __super = this._super;
          var __superApply = this._superApply;
          var returnValue;

          this._super = _super;
          this._superApply = _superApply;

          returnValue = value.apply( this, arguments );

          this._super = __super;
          this._superApply = __superApply;

          return returnValue;
        };
      } )();
    } );
    constructor.prototype = $.widget.extend( basePrototype, {

      // TODO: remove support for widgetEventPrefix
      // always use the name + a colon as the prefix, e.g., draggable:start
      // don't prefix for widgets that aren't DOM-based
      widgetEventPrefix: existingConstructor ? ( basePrototype.widgetEventPrefix || name ) : name
    }, proxiedPrototype, {
      constructor: constructor,
      namespace: namespace,
      widgetName: name,
      widgetFullName: fullName
    } );

    // If this widget is being redefined then we need to find all widgets that
    // are inheriting from it and redefine all of them so that they inherit from
    // the new version of this widget. We're essentially trying to replace one
    // level in the prototype chain.
    if ( existingConstructor ) {
      $.each( existingConstructor._childConstructors, function( i, child ) {
        var childPrototype = child.prototype;

        // Redefine the child widget using the same prototype that was
        // originally used, but inherit from the new version of the base
        $.widget( childPrototype.namespace + "." + childPrototype.widgetName, constructor,
          child._proto );
      } );

      // Remove the list of existing child constructors from the old constructor
      // so the old child constructors can be garbage collected
      delete existingConstructor._childConstructors;
    } else {
      base._childConstructors.push( constructor );
    }

    $.widget.bridge( name, constructor );

    return constructor;
  };

  $.widget.extend = function( target ) {
    var input = widgetSlice.call( arguments, 1 );
    var inputIndex = 0;
    var inputLength = input.length;
    var key;
    var value;

    for ( ; inputIndex < inputLength; inputIndex++ ) {
      for ( key in input[ inputIndex ] ) {
        value = input[ inputIndex ][ key ];
        if ( input[ inputIndex ].hasOwnProperty( key ) && value !== undefined ) {

          // Clone objects
          if ( $.isPlainObject( value ) ) {
            target[ key ] = $.isPlainObject( target[ key ] ) ?
              $.widget.extend( {}, target[ key ], value ) :

              // Don't extend strings, arrays, etc. with objects
              $.widget.extend( {}, value );

            // Copy everything else by reference
          } else {
            target[ key ] = value;
          }
        }
      }
    }
    return target;
  };

  $.widget.bridge = function( name, object ) {
    var fullName = object.prototype.widgetFullName || name;
    $.fn[ name ] = function( options ) {
      var isMethodCall = typeof options === "string";
      var args = widgetSlice.call( arguments, 1 );
      var returnValue = this;

      if ( isMethodCall ) {

        // If this is an empty collection, we need to have the instance method
        // return undefined instead of the jQuery instance
        if ( !this.length && options === "instance" ) {
          returnValue = undefined;
        } else {
          this.each( function() {
            var methodValue;
            var instance = $.data( this, fullName );

            if ( options === "instance" ) {
              returnValue = instance;
              return false;
            }

            if ( !instance ) {
              return $.error( "cannot call methods on " + name +
                " prior to initialization; " +
                "attempted to call method '" + options + "'" );
            }

            if ( !$.isFunction( instance[ options ] ) || options.charAt( 0 ) === "_" ) {
              return $.error( "no such method '" + options + "' for " + name +
                " widget instance" );
            }

            methodValue = instance[ options ].apply( instance, args );

            if ( methodValue !== instance && methodValue !== undefined ) {
              returnValue = methodValue && methodValue.jquery ?
                returnValue.pushStack( methodValue.get() ) :
                methodValue;
              return false;
            }
          } );
        }
      } else {

        // Allow multiple hashes to be passed on init
        if ( args.length ) {
          options = $.widget.extend.apply( null, [ options ].concat( args ) );
        }

        this.each( function() {
          var instance = $.data( this, fullName );
          if ( instance ) {
            instance.option( options || {} );
            if ( instance._init ) {
              instance._init();
            }
          } else {
            $.data( this, fullName, new object( options, this ) );
          }
        } );
      }

      return returnValue;
    };
  };

  $.Widget = function( /* options, element */ ) {};
  $.Widget._childConstructors = [];

  $.Widget.prototype = {
    widgetName: "widget",
    widgetEventPrefix: "",
    defaultElement: "<div>",

    options: {
      classes: {},
      disabled: false,

      // Callbacks
      create: null
    },

    _createWidget: function( options, element ) {
      element = $( element || this.defaultElement || this )[ 0 ];
      this.element = $( element );
      this.uuid = widgetUuid++;
      this.eventNamespace = "." + this.widgetName + this.uuid;

      this.bindings = $();
      this.hoverable = $();
      this.focusable = $();
      this.classesElementLookup = {};

      if ( element !== this ) {
        $.data( element, this.widgetFullName, this );
        this._on( true, this.element, {
          remove: function( event ) {
            if ( event.target === element ) {
              this.destroy();
            }
          }
        } );
        this.document = $( element.style ?

          // Element within the document
          element.ownerDocument :

          // Element is window or document
          element.document || element );
        this.window = $( this.document[ 0 ].defaultView || this.document[ 0 ].parentWindow );
      }

      this.options = $.widget.extend( {},
        this.options,
        this._getCreateOptions(),
        options );

      this._create();

      if ( this.options.disabled ) {
        this._setOptionDisabled( this.options.disabled );
      }

      this._trigger( "create", null, this._getCreateEventData() );
      this._init();
    },

    _getCreateOptions: function() {
      return {};
    },

    _getCreateEventData: $.noop,

    _create: $.noop,

    _init: $.noop,

    destroy: function() {
      var that = this;

      this._destroy();
      $.each( this.classesElementLookup, function( key, value ) {
        that._removeClass( value, key );
      } );

      // We can probably remove the unbind calls in 2.0
      // all event bindings should go through this._on()
      this.element
        .off( this.eventNamespace )
        .removeData( this.widgetFullName );
      this.widget()
        .off( this.eventNamespace )
        .removeAttr( "aria-disabled" );

      // Clean up events and states
      this.bindings.off( this.eventNamespace );
    },

    _destroy: $.noop,

    widget: function() {
      return this.element;
    },

    option: function( key, value ) {
      var options = key;
      var parts;
      var curOption;
      var i;

      if ( arguments.length === 0 ) {

        // Don't return a reference to the internal hash
        return $.widget.extend( {}, this.options );
      }

      if ( typeof key === "string" ) {

        // Handle nested keys, e.g., "foo.bar" => { foo: { bar: ___ } }
        options = {};
        parts = key.split( "." );
        key = parts.shift();
        if ( parts.length ) {
          curOption = options[ key ] = $.widget.extend( {}, this.options[ key ] );
          for ( i = 0; i < parts.length - 1; i++ ) {
            curOption[ parts[ i ] ] = curOption[ parts[ i ] ] || {};
            curOption = curOption[ parts[ i ] ];
          }
          key = parts.pop();
          if ( arguments.length === 1 ) {
            return curOption[ key ] === undefined ? null : curOption[ key ];
          }
          curOption[ key ] = value;
        } else {
          if ( arguments.length === 1 ) {
            return this.options[ key ] === undefined ? null : this.options[ key ];
          }
          options[ key ] = value;
        }
      }

      this._setOptions( options );

      return this;
    },

    _setOptions: function( options ) {
      var key;

      for ( key in options ) {
        this._setOption( key, options[ key ] );
      }

      return this;
    },

    _setOption: function( key, value ) {
      if ( key === "classes" ) {
        this._setOptionClasses( value );
      }

      this.options[ key ] = value;

      if ( key === "disabled" ) {
        this._setOptionDisabled( value );
      }

      return this;
    },

    _setOptionClasses: function( value ) {
      var classKey, elements, currentElements;

      for ( classKey in value ) {
        currentElements = this.classesElementLookup[ classKey ];
        if ( value[ classKey ] === this.options.classes[ classKey ] ||
          !currentElements ||
          !currentElements.length ) {
          continue;
        }

        // We are doing this to create a new jQuery object because the _removeClass() call
        // on the next line is going to destroy the reference to the current elements being
        // tracked. We need to save a copy of this collection so that we can add the new classes
        // below.
        elements = $( currentElements.get() );
        this._removeClass( currentElements, classKey );

        // We don't use _addClass() here, because that uses this.options.classes
        // for generating the string of classes. We want to use the value passed in from
        // _setOption(), this is the new value of the classes option which was passed to
        // _setOption(). We pass this value directly to _classes().
        elements.addClass( this._classes( {
          element: elements,
          keys: classKey,
          classes: value,
          add: true
        } ) );
      }
    },

    _setOptionDisabled: function( value ) {
      this._toggleClass( this.widget(), this.widgetFullName + "-disabled", null, !!value );

      // If the widget is becoming disabled, then nothing is interactive
      if ( value ) {
        this._removeClass( this.hoverable, null, "ui-state-hover" );
        this._removeClass( this.focusable, null, "ui-state-focus" );
      }
    },

    enable: function() {
      return this._setOptions( { disabled: false } );
    },

    disable: function() {
      return this._setOptions( { disabled: true } );
    },

    _classes: function( options ) {
      var full = [];
      var that = this;

      options = $.extend( {
        element: this.element,
        classes: this.options.classes || {}
      }, options );

      function processClassString( classes, checkOption ) {
        var current, i;
        for ( i = 0; i < classes.length; i++ ) {
          current = that.classesElementLookup[ classes[ i ] ] || $();
          if ( options.add ) {
            current = $( $.unique( current.get().concat( options.element.get() ) ) );
          } else {
            current = $( current.not( options.element ).get() );
          }
          that.classesElementLookup[ classes[ i ] ] = current;
          full.push( classes[ i ] );
          if ( checkOption && options.classes[ classes[ i ] ] ) {
            full.push( options.classes[ classes[ i ] ] );
          }
        }
      }

      this._on( options.element, {
        "remove": "_untrackClassesElement"
      } );

      if ( options.keys ) {
        processClassString( options.keys.match( /\S+/g ) || [], true );
      }
      if ( options.extra ) {
        processClassString( options.extra.match( /\S+/g ) || [] );
      }

      return full.join( " " );
    },

    _untrackClassesElement: function( event ) {
      var that = this;
      $.each( that.classesElementLookup, function( key, value ) {
        if ( $.inArray( event.target, value ) !== -1 ) {
          that.classesElementLookup[ key ] = $( value.not( event.target ).get() );
        }
      } );
    },

    _removeClass: function( element, keys, extra ) {
      return this._toggleClass( element, keys, extra, false );
    },

    _addClass: function( element, keys, extra ) {
      return this._toggleClass( element, keys, extra, true );
    },

    _toggleClass: function( element, keys, extra, add ) {
      add = ( typeof add === "boolean" ) ? add : extra;
      var shift = ( typeof element === "string" || element === null ),
        options = {
          extra: shift ? keys : extra,
          keys: shift ? element : keys,
          element: shift ? this.element : element,
          add: add
        };
      options.element.toggleClass( this._classes( options ), add );
      return this;
    },

    _on: function( suppressDisabledCheck, element, handlers ) {
      var delegateElement;
      var instance = this;

      // No suppressDisabledCheck flag, shuffle arguments
      if ( typeof suppressDisabledCheck !== "boolean" ) {
        handlers = element;
        element = suppressDisabledCheck;
        suppressDisabledCheck = false;
      }

      // No element argument, shuffle and use this.element
      if ( !handlers ) {
        handlers = element;
        element = this.element;
        delegateElement = this.widget();
      } else {
        element = delegateElement = $( element );
        this.bindings = this.bindings.add( element );
      }

      $.each( handlers, function( event, handler ) {
        function handlerProxy() {

          // Allow widgets to customize the disabled handling
          // - disabled as an array instead of boolean
          // - disabled class as method for disabling individual parts
          if ( !suppressDisabledCheck &&
            ( instance.options.disabled === true ||
              $( this ).hasClass( "ui-state-disabled" ) ) ) {
            return;
          }
          return ( typeof handler === "string" ? instance[ handler ] : handler )
            .apply( instance, arguments );
        }

        // Copy the guid so direct unbinding works
        if ( typeof handler !== "string" ) {
          handlerProxy.guid = handler.guid =
            handler.guid || handlerProxy.guid || $.guid++;
        }

        var match = event.match( /^([\w:-]*)\s*(.*)$/ );
        var eventName = match[ 1 ] + instance.eventNamespace;
        var selector = match[ 2 ];

        if ( selector ) {
          delegateElement.on( eventName, selector, handlerProxy );
        } else {
          element.on( eventName, handlerProxy );
        }
      } );
    },

    _off: function( element, eventName ) {
      eventName = ( eventName || "" ).split( " " ).join( this.eventNamespace + " " ) +
        this.eventNamespace;
      element.off( eventName ).off( eventName );

      // Clear the stack to avoid memory leaks (#10056)
      this.bindings = $( this.bindings.not( element ).get() );
      this.focusable = $( this.focusable.not( element ).get() );
      this.hoverable = $( this.hoverable.not( element ).get() );
    },

    _delay: function( handler, delay ) {
      function handlerProxy() {
        return ( typeof handler === "string" ? instance[ handler ] : handler )
          .apply( instance, arguments );
      }
      var instance = this;
      return setTimeout( handlerProxy, delay || 0 );
    },

    _hoverable: function( element ) {
      this.hoverable = this.hoverable.add( element );
      this._on( element, {
        mouseenter: function( event ) {
          this._addClass( $( event.currentTarget ), null, "ui-state-hover" );
        },
        mouseleave: function( event ) {
          this._removeClass( $( event.currentTarget ), null, "ui-state-hover" );
        }
      } );
    },

    _focusable: function( element ) {
      this.focusable = this.focusable.add( element );
      this._on( element, {
        focusin: function( event ) {
          this._addClass( $( event.currentTarget ), null, "ui-state-focus" );
        },
        focusout: function( event ) {
          this._removeClass( $( event.currentTarget ), null, "ui-state-focus" );
        }
      } );
    },

    _trigger: function( type, event, data ) {
      var prop, orig;
      var callback = this.options[ type ];

      data = data || {};
      event = $.Event( event );
      event.type = ( type === this.widgetEventPrefix ?
        type :
        this.widgetEventPrefix + type ).toLowerCase();

      // The original event may come from any element
      // so we need to reset the target on the new event
      event.target = this.element[ 0 ];

      // Copy original event properties over to the new event
      orig = event.originalEvent;
      if ( orig ) {
        for ( prop in orig ) {
          if ( !( prop in event ) ) {
            event[ prop ] = orig[ prop ];
          }
        }
      }

      this.element.trigger( event, data );
      return !( $.isFunction( callback ) &&
        callback.apply( this.element[ 0 ], [ event ].concat( data ) ) === false ||
        event.isDefaultPrevented() );
    }
  };

  $.each( { show: "fadeIn", hide: "fadeOut" }, function( method, defaultEffect ) {
    $.Widget.prototype[ "_" + method ] = function( element, options, callback ) {
      if ( typeof options === "string" ) {
        options = { effect: options };
      }

      var hasOptions;
      var effectName = !options ?
        method :
        options === true || typeof options === "number" ?
        defaultEffect :
        options.effect || defaultEffect;

      options = options || {};
      if ( typeof options === "number" ) {
        options = { duration: options };
      }

      hasOptions = !$.isEmptyObject( options );
      options.complete = callback;

      if ( options.delay ) {
        element.delay( options.delay );
      }

      if ( hasOptions && $.effects && $.effects.effect[ effectName ] ) {
        element[ method ]( options );
      } else if ( effectName !== method && element[ effectName ] ) {
        element[ effectName ]( options.duration, options.easing, callback );
      } else {
        element.queue( function( next ) {
          $( this )[ method ]();
          if ( callback ) {
            callback.call( element[ 0 ] );
          }
          next();
        } );
      }
    };
  } );

  var widget = $.widget;




}));
/*
 * jQuery Iframe Transport Plugin
 * https://github.com/blueimp/jQuery-File-Upload
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

/* global define, require */

(function(factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
    // Register as an anonymous AMD module:
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    // Node/CommonJS:
    factory(require('jquery'));
  } else {
    // Browser globals:
    factory(window.jQuery);
  }
})(function($) {
  'use strict';

  // Helper variable to create unique names for the transport iframes:
  var counter = 0,
    jsonAPI = $,
    jsonParse = 'parseJSON';

  if ('JSON' in window && 'parse' in JSON) {
    jsonAPI = JSON;
    jsonParse = 'parse';
  }

  // The iframe transport accepts four additional options:
  // options.fileInput: a jQuery collection of file input fields
  // options.paramName: the parameter name for the file form data,
  //  overrides the name property of the file input field(s),
  //  can be a string or an array of strings.
  // options.formData: an array of objects with name and value properties,
  //  equivalent to the return data of .serializeArray(), e.g.:
  //  [{name: 'a', value: 1}, {name: 'b', value: 2}]
  // options.initialIframeSrc: the URL of the initial iframe src,
  //  by default set to "javascript:false;"
  $.ajaxTransport('iframe', function(options) {
    if (options.async) {
      // javascript:false as initial iframe src
      // prevents warning popups on HTTPS in IE6:
      // eslint-disable-next-line no-script-url
      var initialIframeSrc = options.initialIframeSrc || 'javascript:false;',
        form,
        iframe,
        addParamChar;
      return {
        send: function(_, completeCallback) {
          form = $('<form style="display:none;"></form>');
          form.attr('accept-charset', options.formAcceptCharset);
          addParamChar = /\?/.test(options.url) ? '&' : '?';
          // XDomainRequest only supports GET and POST:
          if (options.type === 'DELETE') {
            options.url = options.url + addParamChar + '_method=DELETE';
            options.type = 'POST';
          } else if (options.type === 'PUT') {
            options.url = options.url + addParamChar + '_method=PUT';
            options.type = 'POST';
          } else if (options.type === 'PATCH') {
            options.url = options.url + addParamChar + '_method=PATCH';
            options.type = 'POST';
          }
          // IE versions below IE8 cannot set the name property of
          // elements that have already been added to the DOM,
          // so we set the name along with the iframe HTML markup:
          counter += 1;
          iframe = $(
            '<iframe src="' +
              initialIframeSrc +
              '" name="iframe-transport-' +
              counter +
              '"></iframe>'
          ).bind('load', function() {
            var fileInputClones,
              paramNames = $.isArray(options.paramName)
                ? options.paramName
                : [options.paramName];
            iframe.unbind('load').bind('load', function() {
              var response;
              // Wrap in a try/catch block to catch exceptions thrown
              // when trying to access cross-domain iframe contents:
              try {
                response = iframe.contents();
                // Google Chrome and Firefox do not throw an
                // exception when calling iframe.contents() on
                // cross-domain requests, so we unify the response:
                if (!response.length || !response[0].firstChild) {
                  throw new Error();
                }
              } catch (e) {
                response = undefined;
              }
              // The complete callback returns the
              // iframe content document as response object:
              completeCallback(200, 'success', { iframe: response });
              // Fix for IE endless progress bar activity bug
              // (happens on form submits to iframe targets):
              $('<iframe src="' + initialIframeSrc + '"></iframe>').appendTo(
                form
              );
              window.setTimeout(function() {
                // Removing the form in a setTimeout call
                // allows Chrome's developer tools to display
                // the response result
                form.remove();
              }, 0);
            });
            form
              .prop('target', iframe.prop('name'))
              .prop('action', options.url)
              .prop('method', options.type);
            if (options.formData) {
              $.each(options.formData, function(index, field) {
                $('<input type="hidden"/>')
                  .prop('name', field.name)
                  .val(field.value)
                  .appendTo(form);
              });
            }
            if (
              options.fileInput &&
              options.fileInput.length &&
              options.type === 'POST'
            ) {
              fileInputClones = options.fileInput.clone();
              // Insert a clone for each file input field:
              options.fileInput.after(function(index) {
                return fileInputClones[index];
              });
              if (options.paramName) {
                options.fileInput.each(function(index) {
                  $(this).prop('name', paramNames[index] || options.paramName);
                });
              }
              // Appending the file input fields to the hidden form
              // removes them from their original location:
              form
                .append(options.fileInput)
                .prop('enctype', 'multipart/form-data')
                // enctype must be set as encoding for IE:
                .prop('encoding', 'multipart/form-data');
              // Remove the HTML5 form attribute from the input(s):
              options.fileInput.removeAttr('form');
            }
            form.submit();
            // Insert the file input fields at their original location
            // by replacing the clones with the originals:
            if (fileInputClones && fileInputClones.length) {
              options.fileInput.each(function(index, input) {
                var clone = $(fileInputClones[index]);
                // Restore the original name and form properties:
                $(input)
                  .prop('name', clone.prop('name'))
                  .attr('form', clone.attr('form'));
                clone.replaceWith(input);
              });
            }
          });
          form.append(iframe).appendTo(document.body);
        },
        abort: function() {
          if (iframe) {
            // javascript:false as iframe src aborts the request
            // and prevents warning popups on HTTPS in IE6.
            iframe.unbind('load').prop('src', initialIframeSrc);
          }
          if (form) {
            form.remove();
          }
        }
      };
    }
  });

  // The iframe transport returns the iframe content document as response.
  // The following adds converters from iframe to text, json, html, xml
  // and script.
  // Please note that the Content-Type for JSON responses has to be text/plain
  // or text/html, if the browser doesn't include application/json in the
  // Accept header, else IE will show a download dialog.
  // The Content-Type for XML responses on the other hand has to be always
  // application/xml or text/xml, so IE properly parses the XML response.
  // See also
  // https://github.com/blueimp/jQuery-File-Upload/wiki/Setup#content-type-negotiation
  $.ajaxSetup({
    converters: {
      'iframe text': function(iframe) {
        return iframe && $(iframe[0].body).text();
      },
      'iframe json': function(iframe) {
        return iframe && jsonAPI[jsonParse]($(iframe[0].body).text());
      },
      'iframe html': function(iframe) {
        return iframe && $(iframe[0].body).html();
      },
      'iframe xml': function(iframe) {
        var xmlDoc = iframe && iframe[0];
        return xmlDoc && $.isXMLDoc(xmlDoc)
          ? xmlDoc
          : $.parseXML(
              (xmlDoc.XMLDocument && xmlDoc.XMLDocument.xml) ||
                $(xmlDoc.body).html()
            );
      },
      'iframe script': function(iframe) {
        return iframe && $.globalEval($(iframe[0].body).text());
      }
    }
  });
});
/*
 * jQuery File Upload Plugin
 * https://github.com/blueimp/jQuery-File-Upload
 *
 * Copyright 2010, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

/* global define, require */
/* eslint-disable new-cap */

(function(factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
    // Register as an anonymous AMD module:
    define(['jquery', 'jquery-ui/ui/widget'], factory);
  } else if (typeof exports === 'object') {
    // Node/CommonJS:
    factory(require('jquery'), require('./vendor/jquery.ui.widget'));
  } else {
    // Browser globals:
    factory(window.jQuery);
  }
})(function($) {
  'use strict';

  // Detect file input support, based on
  // https://viljamis.com/2012/file-upload-support-on-mobile/
  $.support.fileInput = !(
    new RegExp(
      // Handle devices which give false positives for the feature detection:
      '(Android (1\\.[0156]|2\\.[01]))' +
        '|(Windows Phone (OS 7|8\\.0))|(XBLWP)|(ZuneWP)|(WPDesktop)' +
        '|(w(eb)?OSBrowser)|(webOS)' +
        '|(Kindle/(1\\.0|2\\.[05]|3\\.0))'
    ).test(window.navigator.userAgent) ||
    // Feature detection for all other devices:
    $('<input type="file"/>').prop('disabled')
  );

  // The FileReader API is not actually used, but works as feature detection,
  // as some Safari versions (5?) support XHR file uploads via the FormData API,
  // but not non-multipart XHR file uploads.
  // window.XMLHttpRequestUpload is not available on IE10, so we check for
  // window.ProgressEvent instead to detect XHR2 file upload capability:
  $.support.xhrFileUpload = !!(window.ProgressEvent && window.FileReader);
  $.support.xhrFormDataFileUpload = !!window.FormData;

  // Detect support for Blob slicing (required for chunked uploads):
  $.support.blobSlice =
    window.Blob &&
    (Blob.prototype.slice ||
      Blob.prototype.webkitSlice ||
      Blob.prototype.mozSlice);

  /**
   * Helper function to create drag handlers for dragover/dragenter/dragleave
   *
   * @param {string} type Event type
   * @returns {Function} Drag handler
   */
  function getDragHandler(type) {
    var isDragOver = type === 'dragover';
    return function(e) {
      e.dataTransfer = e.originalEvent && e.originalEvent.dataTransfer;
      var dataTransfer = e.dataTransfer;
      if (
        dataTransfer &&
        $.inArray('Files', dataTransfer.types) !== -1 &&
        this._trigger(type, $.Event(type, { delegatedEvent: e })) !== false
      ) {
        e.preventDefault();
        if (isDragOver) {
          dataTransfer.dropEffect = 'copy';
        }
      }
    };
  }

  // The fileupload widget listens for change events on file input fields defined
  // via fileInput setting and paste or drop events of the given dropZone.
  // In addition to the default jQuery Widget methods, the fileupload widget
  // exposes the "add" and "send" methods, to add or directly send files using
  // the fileupload API.
  // By default, files added via file input selection, paste, drag & drop or
  // "add" method are uploaded immediately, but it is possible to override
  // the "add" callback option to queue file uploads.
  $.widget('blueimp.fileupload', {
    options: {
      // The drop target element(s), by the default the complete document.
      // Set to null to disable drag & drop support:
      dropZone: $(document),
      // The paste target element(s), by the default undefined.
      // Set to a DOM node or jQuery object to enable file pasting:
      pasteZone: undefined,
      // The file input field(s), that are listened to for change events.
      // If undefined, it is set to the file input fields inside
      // of the widget element on plugin initialization.
      // Set to null to disable the change listener.
      fileInput: undefined,
      // By default, the file input field is replaced with a clone after
      // each input field change event. This is required for iframe transport
      // queues and allows change events to be fired for the same file
      // selection, but can be disabled by setting the following option to false:
      replaceFileInput: true,
      // The parameter name for the file form data (the request argument name).
      // If undefined or empty, the name property of the file input field is
      // used, or "files[]" if the file input name property is also empty,
      // can be a string or an array of strings:
      paramName: undefined,
      // By default, each file of a selection is uploaded using an individual
      // request for XHR type uploads. Set to false to upload file
      // selections in one request each:
      singleFileUploads: true,
      // To limit the number of files uploaded with one XHR request,
      // set the following option to an integer greater than 0:
      limitMultiFileUploads: undefined,
      // The following option limits the number of files uploaded with one
      // XHR request to keep the request size under or equal to the defined
      // limit in bytes:
      limitMultiFileUploadSize: undefined,
      // Multipart file uploads add a number of bytes to each uploaded file,
      // therefore the following option adds an overhead for each file used
      // in the limitMultiFileUploadSize configuration:
      limitMultiFileUploadSizeOverhead: 512,
      // Set the following option to true to issue all file upload requests
      // in a sequential order:
      sequentialUploads: false,
      // To limit the number of concurrent uploads,
      // set the following option to an integer greater than 0:
      limitConcurrentUploads: undefined,
      // Set the following option to true to force iframe transport uploads:
      forceIframeTransport: false,
      // Set the following option to the location of a redirect url on the
      // origin server, for cross-domain iframe transport uploads:
      redirect: undefined,
      // The parameter name for the redirect url, sent as part of the form
      // data and set to 'redirect' if this option is empty:
      redirectParamName: undefined,
      // Set the following option to the location of a postMessage window,
      // to enable postMessage transport uploads:
      postMessage: undefined,
      // By default, XHR file uploads are sent as multipart/form-data.
      // The iframe transport is always using multipart/form-data.
      // Set to false to enable non-multipart XHR uploads:
      multipart: true,
      // To upload large files in smaller chunks, set the following option
      // to a preferred maximum chunk size. If set to 0, null or undefined,
      // or the browser does not support the required Blob API, files will
      // be uploaded as a whole.
      maxChunkSize: undefined,
      // When a non-multipart upload or a chunked multipart upload has been
      // aborted, this option can be used to resume the upload by setting
      // it to the size of the already uploaded bytes. This option is most
      // useful when modifying the options object inside of the "add" or
      // "send" callbacks, as the options are cloned for each file upload.
      uploadedBytes: undefined,
      // By default, failed (abort or error) file uploads are removed from the
      // global progress calculation. Set the following option to false to
      // prevent recalculating the global progress data:
      recalculateProgress: true,
      // Interval in milliseconds to calculate and trigger progress events:
      progressInterval: 100,
      // Interval in milliseconds to calculate progress bitrate:
      bitrateInterval: 500,
      // By default, uploads are started automatically when adding files:
      autoUpload: true,
      // By default, duplicate file names are expected to be handled on
      // the server-side. If this is not possible (e.g. when uploading
      // files directly to Amazon S3), the following option can be set to
      // an empty object or an object mapping existing filenames, e.g.:
      // { "image.jpg": true, "image (1).jpg": true }
      // If it is set, all files will be uploaded with unique filenames,
      // adding increasing number suffixes if necessary, e.g.:
      // "image (2).jpg"
      uniqueFilenames: undefined,

      // Error and info messages:
      messages: {
        uploadedBytes: 'Uploaded bytes exceed file size'
      },

      // Translation function, gets the message key to be translated
      // and an object with context specific data as arguments:
      i18n: function(message, context) {
        // eslint-disable-next-line no-param-reassign
        message = this.messages[message] || message.toString();
        if (context) {
          $.each(context, function(key, value) {
            // eslint-disable-next-line no-param-reassign
            message = message.replace('{' + key + '}', value);
          });
        }
        return message;
      },

      // Additional form data to be sent along with the file uploads can be set
      // using this option, which accepts an array of objects with name and
      // value properties, a function returning such an array, a FormData
      // object (for XHR file uploads), or a simple object.
      // The form of the first fileInput is given as parameter to the function:
      formData: function(form) {
        return form.serializeArray();
      },

      // The add callback is invoked as soon as files are added to the fileupload
      // widget (via file input selection, drag & drop, paste or add API call).
      // If the singleFileUploads option is enabled, this callback will be
      // called once for each file in the selection for XHR file uploads, else
      // once for each file selection.
      //
      // The upload starts when the submit method is invoked on the data parameter.
      // The data object contains a files property holding the added files
      // and allows you to override plugin options as well as define ajax settings.
      //
      // Listeners for this callback can also be bound the following way:
      // .bind('fileuploadadd', func);
      //
      // data.submit() returns a Promise object and allows to attach additional
      // handlers using jQuery's Deferred callbacks:
      // data.submit().done(func).fail(func).always(func);
      add: function(e, data) {
        if (e.isDefaultPrevented()) {
          return false;
        }
        if (
          data.autoUpload ||
          (data.autoUpload !== false &&
            $(this).fileupload('option', 'autoUpload'))
        ) {
          data.process().done(function() {
            data.submit();
          });
        }
      },

      // Other callbacks:

      // Callback for the submit event of each file upload:
      // submit: function (e, data) {}, // .bind('fileuploadsubmit', func);

      // Callback for the start of each file upload request:
      // send: function (e, data) {}, // .bind('fileuploadsend', func);

      // Callback for successful uploads:
      // done: function (e, data) {}, // .bind('fileuploaddone', func);

      // Callback for failed (abort or error) uploads:
      // fail: function (e, data) {}, // .bind('fileuploadfail', func);

      // Callback for completed (success, abort or error) requests:
      // always: function (e, data) {}, // .bind('fileuploadalways', func);

      // Callback for upload progress events:
      // progress: function (e, data) {}, // .bind('fileuploadprogress', func);

      // Callback for global upload progress events:
      // progressall: function (e, data) {}, // .bind('fileuploadprogressall', func);

      // Callback for uploads start, equivalent to the global ajaxStart event:
      // start: function (e) {}, // .bind('fileuploadstart', func);

      // Callback for uploads stop, equivalent to the global ajaxStop event:
      // stop: function (e) {}, // .bind('fileuploadstop', func);

      // Callback for change events of the fileInput(s):
      // change: function (e, data) {}, // .bind('fileuploadchange', func);

      // Callback for paste events to the pasteZone(s):
      // paste: function (e, data) {}, // .bind('fileuploadpaste', func);

      // Callback for drop events of the dropZone(s):
      // drop: function (e, data) {}, // .bind('fileuploaddrop', func);

      // Callback for dragover events of the dropZone(s):
      // dragover: function (e) {}, // .bind('fileuploaddragover', func);

      // Callback before the start of each chunk upload request (before form data initialization):
      // chunkbeforesend: function (e, data) {}, // .bind('fileuploadchunkbeforesend', func);

      // Callback for the start of each chunk upload request:
      // chunksend: function (e, data) {}, // .bind('fileuploadchunksend', func);

      // Callback for successful chunk uploads:
      // chunkdone: function (e, data) {}, // .bind('fileuploadchunkdone', func);

      // Callback for failed (abort or error) chunk uploads:
      // chunkfail: function (e, data) {}, // .bind('fileuploadchunkfail', func);

      // Callback for completed (success, abort or error) chunk upload requests:
      // chunkalways: function (e, data) {}, // .bind('fileuploadchunkalways', func);

      // The plugin options are used as settings object for the ajax calls.
      // The following are jQuery ajax settings required for the file uploads:
      processData: false,
      contentType: false,
      cache: false,
      timeout: 0
    },

    // A list of options that require reinitializing event listeners and/or
    // special initialization code:
    _specialOptions: [
      'fileInput',
      'dropZone',
      'pasteZone',
      'multipart',
      'forceIframeTransport'
    ],

    _blobSlice:
      $.support.blobSlice &&
      function() {
        var slice = this.slice || this.webkitSlice || this.mozSlice;
        return slice.apply(this, arguments);
      },

    _BitrateTimer: function() {
      this.timestamp = Date.now ? Date.now() : new Date().getTime();
      this.loaded = 0;
      this.bitrate = 0;
      this.getBitrate = function(now, loaded, interval) {
        var timeDiff = now - this.timestamp;
        if (!this.bitrate || !interval || timeDiff > interval) {
          this.bitrate = (loaded - this.loaded) * (1000 / timeDiff) * 8;
          this.loaded = loaded;
          this.timestamp = now;
        }
        return this.bitrate;
      };
    },

    _isXHRUpload: function(options) {
      return (
        !options.forceIframeTransport &&
        ((!options.multipart && $.support.xhrFileUpload) ||
          $.support.xhrFormDataFileUpload)
      );
    },

    _getFormData: function(options) {
      var formData;
      if ($.type(options.formData) === 'function') {
        return options.formData(options.form);
      }
      if ($.isArray(options.formData)) {
        return options.formData;
      }
      if ($.type(options.formData) === 'object') {
        formData = [];
        $.each(options.formData, function(name, value) {
          formData.push({ name: name, value: value });
        });
        return formData;
      }
      return [];
    },

    _getTotal: function(files) {
      var total = 0;
      $.each(files, function(index, file) {
        total += file.size || 1;
      });
      return total;
    },

    _initProgressObject: function(obj) {
      var progress = {
        loaded: 0,
        total: 0,
        bitrate: 0
      };
      if (obj._progress) {
        $.extend(obj._progress, progress);
      } else {
        obj._progress = progress;
      }
    },

    _initResponseObject: function(obj) {
      var prop;
      if (obj._response) {
        for (prop in obj._response) {
          if (Object.prototype.hasOwnProperty.call(obj._response, prop)) {
            delete obj._response[prop];
          }
        }
      } else {
        obj._response = {};
      }
    },

    _onProgress: function(e, data) {
      if (e.lengthComputable) {
        var now = Date.now ? Date.now() : new Date().getTime(),
          loaded;
        if (
          data._time &&
          data.progressInterval &&
          now - data._time < data.progressInterval &&
          e.loaded !== e.total
        ) {
          return;
        }
        data._time = now;
        loaded =
          Math.floor(
            (e.loaded / e.total) * (data.chunkSize || data._progress.total)
          ) + (data.uploadedBytes || 0);
        // Add the difference from the previously loaded state
        // to the global loaded counter:
        this._progress.loaded += loaded - data._progress.loaded;
        this._progress.bitrate = this._bitrateTimer.getBitrate(
          now,
          this._progress.loaded,
          data.bitrateInterval
        );
        data._progress.loaded = data.loaded = loaded;
        data._progress.bitrate = data.bitrate = data._bitrateTimer.getBitrate(
          now,
          loaded,
          data.bitrateInterval
        );
        // Trigger a custom progress event with a total data property set
        // to the file size(s) of the current upload and a loaded data
        // property calculated accordingly:
        this._trigger(
          'progress',
          $.Event('progress', { delegatedEvent: e }),
          data
        );
        // Trigger a global progress event for all current file uploads,
        // including ajax calls queued for sequential file uploads:
        this._trigger(
          'progressall',
          $.Event('progressall', { delegatedEvent: e }),
          this._progress
        );
      }
    },

    _initProgressListener: function(options) {
      var that = this,
        xhr = options.xhr ? options.xhr() : $.ajaxSettings.xhr();
      // Accesss to the native XHR object is required to add event listeners
      // for the upload progress event:
      if (xhr.upload) {
        $(xhr.upload).bind('progress', function(e) {
          var oe = e.originalEvent;
          // Make sure the progress event properties get copied over:
          e.lengthComputable = oe.lengthComputable;
          e.loaded = oe.loaded;
          e.total = oe.total;
          that._onProgress(e, options);
        });
        options.xhr = function() {
          return xhr;
        };
      }
    },

    _deinitProgressListener: function(options) {
      var xhr = options.xhr ? options.xhr() : $.ajaxSettings.xhr();
      if (xhr.upload) {
        $(xhr.upload).unbind('progress');
      }
    },

    _isInstanceOf: function(type, obj) {
      // Cross-frame instanceof check
      return Object.prototype.toString.call(obj) === '[object ' + type + ']';
    },

    _getUniqueFilename: function(name, map) {
      // eslint-disable-next-line no-param-reassign
      name = String(name);
      if (map[name]) {
        // eslint-disable-next-line no-param-reassign
        name = name.replace(/(?: \(([\d]+)\))?(\.[^.]+)?$/, function(
          _,
          p1,
          p2
        ) {
          var index = p1 ? Number(p1) + 1 : 1;
          var ext = p2 || '';
          return ' (' + index + ')' + ext;
        });
        return this._getUniqueFilename(name, map);
      }
      map[name] = true;
      return name;
    },

    _initXHRData: function(options) {
      var that = this,
        formData,
        file = options.files[0],
        // Ignore non-multipart setting if not supported:
        multipart = options.multipart || !$.support.xhrFileUpload,
        paramName =
          $.type(options.paramName) === 'array'
            ? options.paramName[0]
            : options.paramName;
      options.headers = $.extend({}, options.headers);
      if (options.contentRange) {
        options.headers['Content-Range'] = options.contentRange;
      }
      if (!multipart || options.blob || !this._isInstanceOf('File', file)) {
        options.headers['Content-Disposition'] =
          'attachment; filename="' +
          encodeURI(file.uploadName || file.name) +
          '"';
      }
      if (!multipart) {
        options.contentType = file.type || 'application/octet-stream';
        options.data = options.blob || file;
      } else if ($.support.xhrFormDataFileUpload) {
        if (options.postMessage) {
          // window.postMessage does not allow sending FormData
          // objects, so we just add the File/Blob objects to
          // the formData array and let the postMessage window
          // create the FormData object out of this array:
          formData = this._getFormData(options);
          if (options.blob) {
            formData.push({
              name: paramName,
              value: options.blob
            });
          } else {
            $.each(options.files, function(index, file) {
              formData.push({
                name:
                  ($.type(options.paramName) === 'array' &&
                    options.paramName[index]) ||
                  paramName,
                value: file
              });
            });
          }
        } else {
          if (that._isInstanceOf('FormData', options.formData)) {
            formData = options.formData;
          } else {
            formData = new FormData();
            $.each(this._getFormData(options), function(index, field) {
              formData.append(field.name, field.value);
            });
          }
          if (options.blob) {
            formData.append(
              paramName,
              options.blob,
              file.uploadName || file.name
            );
          } else {
            $.each(options.files, function(index, file) {
              // This check allows the tests to run with
              // dummy objects:
              if (
                that._isInstanceOf('File', file) ||
                that._isInstanceOf('Blob', file)
              ) {
                var fileName = file.uploadName || file.name;
                if (options.uniqueFilenames) {
                  fileName = that._getUniqueFilename(
                    fileName,
                    options.uniqueFilenames
                  );
                }
                formData.append(
                  ($.type(options.paramName) === 'array' &&
                    options.paramName[index]) ||
                    paramName,
                  file,
                  fileName
                );
              }
            });
          }
        }
        options.data = formData;
      }
      // Blob reference is not needed anymore, free memory:
      options.blob = null;
    },

    _initIframeSettings: function(options) {
      var targetHost = $('<a></a>')
        .prop('href', options.url)
        .prop('host');
      // Setting the dataType to iframe enables the iframe transport:
      options.dataType = 'iframe ' + (options.dataType || '');
      // The iframe transport accepts a serialized array as form data:
      options.formData = this._getFormData(options);
      // Add redirect url to form data on cross-domain uploads:
      if (options.redirect && targetHost && targetHost !== location.host) {
        options.formData.push({
          name: options.redirectParamName || 'redirect',
          value: options.redirect
        });
      }
    },

    _initDataSettings: function(options) {
      if (this._isXHRUpload(options)) {
        if (!this._chunkedUpload(options, true)) {
          if (!options.data) {
            this._initXHRData(options);
          }
          this._initProgressListener(options);
        }
        if (options.postMessage) {
          // Setting the dataType to postmessage enables the
          // postMessage transport:
          options.dataType = 'postmessage ' + (options.dataType || '');
        }
      } else {
        this._initIframeSettings(options);
      }
    },

    _getParamName: function(options) {
      var fileInput = $(options.fileInput),
        paramName = options.paramName;
      if (!paramName) {
        paramName = [];
        fileInput.each(function() {
          var input = $(this),
            name = input.prop('name') || 'files[]',
            i = (input.prop('files') || [1]).length;
          while (i) {
            paramName.push(name);
            i -= 1;
          }
        });
        if (!paramName.length) {
          paramName = [fileInput.prop('name') || 'files[]'];
        }
      } else if (!$.isArray(paramName)) {
        paramName = [paramName];
      }
      return paramName;
    },

    _initFormSettings: function(options) {
      // Retrieve missing options from the input field and the
      // associated form, if available:
      if (!options.form || !options.form.length) {
        options.form = $(options.fileInput.prop('form'));
        // If the given file input doesn't have an associated form,
        // use the default widget file input's form:
        if (!options.form.length) {
          options.form = $(this.options.fileInput.prop('form'));
        }
      }
      options.paramName = this._getParamName(options);
      if (!options.url) {
        options.url = options.form.prop('action') || location.href;
      }
      // The HTTP request method must be "POST" or "PUT":
      options.type = (
        options.type ||
        ($.type(options.form.prop('method')) === 'string' &&
          options.form.prop('method')) ||
        ''
      ).toUpperCase();
      if (
        options.type !== 'POST' &&
        options.type !== 'PUT' &&
        options.type !== 'PATCH'
      ) {
        options.type = 'POST';
      }
      if (!options.formAcceptCharset) {
        options.formAcceptCharset = options.form.attr('accept-charset');
      }
    },

    _getAJAXSettings: function(data) {
      var options = $.extend({}, this.options, data);
      this._initFormSettings(options);
      this._initDataSettings(options);
      return options;
    },

    // jQuery 1.6 doesn't provide .state(),
    // while jQuery 1.8+ removed .isRejected() and .isResolved():
    _getDeferredState: function(deferred) {
      if (deferred.state) {
        return deferred.state();
      }
      if (deferred.isResolved()) {
        return 'resolved';
      }
      if (deferred.isRejected()) {
        return 'rejected';
      }
      return 'pending';
    },

    // Maps jqXHR callbacks to the equivalent
    // methods of the given Promise object:
    _enhancePromise: function(promise) {
      promise.success = promise.done;
      promise.error = promise.fail;
      promise.complete = promise.always;
      return promise;
    },

    // Creates and returns a Promise object enhanced with
    // the jqXHR methods abort, success, error and complete:
    _getXHRPromise: function(resolveOrReject, context, args) {
      var dfd = $.Deferred(),
        promise = dfd.promise();
      // eslint-disable-next-line no-param-reassign
      context = context || this.options.context || promise;
      if (resolveOrReject === true) {
        dfd.resolveWith(context, args);
      } else if (resolveOrReject === false) {
        dfd.rejectWith(context, args);
      }
      promise.abort = dfd.promise;
      return this._enhancePromise(promise);
    },

    // Adds convenience methods to the data callback argument:
    _addConvenienceMethods: function(e, data) {
      var that = this,
        getPromise = function(args) {
          return $.Deferred()
            .resolveWith(that, args)
            .promise();
        };
      data.process = function(resolveFunc, rejectFunc) {
        if (resolveFunc || rejectFunc) {
          data._processQueue = this._processQueue = (
            this._processQueue || getPromise([this])
          )
            .then(function() {
              if (data.errorThrown) {
                return $.Deferred()
                  .rejectWith(that, [data])
                  .promise();
              }
              return getPromise(arguments);
            })
            .then(resolveFunc, rejectFunc);
        }
        return this._processQueue || getPromise([this]);
      };
      data.submit = function() {
        if (this.state() !== 'pending') {
          data.jqXHR = this.jqXHR =
            that._trigger(
              'submit',
              $.Event('submit', { delegatedEvent: e }),
              this
            ) !== false && that._onSend(e, this);
        }
        return this.jqXHR || that._getXHRPromise();
      };
      data.abort = function() {
        if (this.jqXHR) {
          return this.jqXHR.abort();
        }
        this.errorThrown = 'abort';
        that._trigger('fail', null, this);
        return that._getXHRPromise(false);
      };
      data.state = function() {
        if (this.jqXHR) {
          return that._getDeferredState(this.jqXHR);
        }
        if (this._processQueue) {
          return that._getDeferredState(this._processQueue);
        }
      };
      data.processing = function() {
        return (
          !this.jqXHR &&
          this._processQueue &&
          that._getDeferredState(this._processQueue) === 'pending'
        );
      };
      data.progress = function() {
        return this._progress;
      };
      data.response = function() {
        return this._response;
      };
    },

    // Parses the Range header from the server response
    // and returns the uploaded bytes:
    _getUploadedBytes: function(jqXHR) {
      var range = jqXHR.getResponseHeader('Range'),
        parts = range && range.split('-'),
        upperBytesPos = parts && parts.length > 1 && parseInt(parts[1], 10);
      return upperBytesPos && upperBytesPos + 1;
    },

    // Uploads a file in multiple, sequential requests
    // by splitting the file up in multiple blob chunks.
    // If the second parameter is true, only tests if the file
    // should be uploaded in chunks, but does not invoke any
    // upload requests:
    _chunkedUpload: function(options, testOnly) {
      options.uploadedBytes = options.uploadedBytes || 0;
      var that = this,
        file = options.files[0],
        fs = file.size,
        ub = options.uploadedBytes,
        mcs = options.maxChunkSize || fs,
        slice = this._blobSlice,
        dfd = $.Deferred(),
        promise = dfd.promise(),
        jqXHR,
        upload;
      if (
        !(
          this._isXHRUpload(options) &&
          slice &&
          (ub || ($.type(mcs) === 'function' ? mcs(options) : mcs) < fs)
        ) ||
        options.data
      ) {
        return false;
      }
      if (testOnly) {
        return true;
      }
      if (ub >= fs) {
        file.error = options.i18n('uploadedBytes');
        return this._getXHRPromise(false, options.context, [
          null,
          'error',
          file.error
        ]);
      }
      // The chunk upload method:
      upload = function() {
        // Clone the options object for each chunk upload:
        var o = $.extend({}, options),
          currentLoaded = o._progress.loaded;
        o.blob = slice.call(
          file,
          ub,
          ub + ($.type(mcs) === 'function' ? mcs(o) : mcs),
          file.type
        );
        // Store the current chunk size, as the blob itself
        // will be dereferenced after data processing:
        o.chunkSize = o.blob.size;
        // Expose the chunk bytes position range:
        o.contentRange =
          'bytes ' + ub + '-' + (ub + o.chunkSize - 1) + '/' + fs;
        // Trigger chunkbeforesend to allow form data to be updated for this chunk
        that._trigger('chunkbeforesend', null, o);
        // Process the upload data (the blob and potential form data):
        that._initXHRData(o);
        // Add progress listeners for this chunk upload:
        that._initProgressListener(o);
        jqXHR = (
          (that._trigger('chunksend', null, o) !== false && $.ajax(o)) ||
          that._getXHRPromise(false, o.context)
        )
          .done(function(result, textStatus, jqXHR) {
            ub = that._getUploadedBytes(jqXHR) || ub + o.chunkSize;
            // Create a progress event if no final progress event
            // with loaded equaling total has been triggered
            // for this chunk:
            if (currentLoaded + o.chunkSize - o._progress.loaded) {
              that._onProgress(
                $.Event('progress', {
                  lengthComputable: true,
                  loaded: ub - o.uploadedBytes,
                  total: ub - o.uploadedBytes
                }),
                o
              );
            }
            options.uploadedBytes = o.uploadedBytes = ub;
            o.result = result;
            o.textStatus = textStatus;
            o.jqXHR = jqXHR;
            that._trigger('chunkdone', null, o);
            that._trigger('chunkalways', null, o);
            if (ub < fs) {
              // File upload not yet complete,
              // continue with the next chunk:
              upload();
            } else {
              dfd.resolveWith(o.context, [result, textStatus, jqXHR]);
            }
          })
          .fail(function(jqXHR, textStatus, errorThrown) {
            o.jqXHR = jqXHR;
            o.textStatus = textStatus;
            o.errorThrown = errorThrown;
            that._trigger('chunkfail', null, o);
            that._trigger('chunkalways', null, o);
            dfd.rejectWith(o.context, [jqXHR, textStatus, errorThrown]);
          })
          .always(function() {
            that._deinitProgressListener(o);
          });
      };
      this._enhancePromise(promise);
      promise.abort = function() {
        return jqXHR.abort();
      };
      upload();
      return promise;
    },

    _beforeSend: function(e, data) {
      if (this._active === 0) {
        // the start callback is triggered when an upload starts
        // and no other uploads are currently running,
        // equivalent to the global ajaxStart event:
        this._trigger('start');
        // Set timer for global bitrate progress calculation:
        this._bitrateTimer = new this._BitrateTimer();
        // Reset the global progress values:
        this._progress.loaded = this._progress.total = 0;
        this._progress.bitrate = 0;
      }
      // Make sure the container objects for the .response() and
      // .progress() methods on the data object are available
      // and reset to their initial state:
      this._initResponseObject(data);
      this._initProgressObject(data);
      data._progress.loaded = data.loaded = data.uploadedBytes || 0;
      data._progress.total = data.total = this._getTotal(data.files) || 1;
      data._progress.bitrate = data.bitrate = 0;
      this._active += 1;
      // Initialize the global progress values:
      this._progress.loaded += data.loaded;
      this._progress.total += data.total;
    },

    _onDone: function(result, textStatus, jqXHR, options) {
      var total = options._progress.total,
        response = options._response;
      if (options._progress.loaded < total) {
        // Create a progress event if no final progress event
        // with loaded equaling total has been triggered:
        this._onProgress(
          $.Event('progress', {
            lengthComputable: true,
            loaded: total,
            total: total
          }),
          options
        );
      }
      response.result = options.result = result;
      response.textStatus = options.textStatus = textStatus;
      response.jqXHR = options.jqXHR = jqXHR;
      this._trigger('done', null, options);
    },

    _onFail: function(jqXHR, textStatus, errorThrown, options) {
      var response = options._response;
      if (options.recalculateProgress) {
        // Remove the failed (error or abort) file upload from
        // the global progress calculation:
        this._progress.loaded -= options._progress.loaded;
        this._progress.total -= options._progress.total;
      }
      response.jqXHR = options.jqXHR = jqXHR;
      response.textStatus = options.textStatus = textStatus;
      response.errorThrown = options.errorThrown = errorThrown;
      this._trigger('fail', null, options);
    },

    _onAlways: function(jqXHRorResult, textStatus, jqXHRorError, options) {
      // jqXHRorResult, textStatus and jqXHRorError are added to the
      // options object via done and fail callbacks
      this._trigger('always', null, options);
    },

    _onSend: function(e, data) {
      if (!data.submit) {
        this._addConvenienceMethods(e, data);
      }
      var that = this,
        jqXHR,
        aborted,
        slot,
        pipe,
        options = that._getAJAXSettings(data),
        send = function() {
          that._sending += 1;
          // Set timer for bitrate progress calculation:
          options._bitrateTimer = new that._BitrateTimer();
          jqXHR =
            jqXHR ||
            (
              ((aborted ||
                that._trigger(
                  'send',
                  $.Event('send', { delegatedEvent: e }),
                  options
                ) === false) &&
                that._getXHRPromise(false, options.context, aborted)) ||
              that._chunkedUpload(options) ||
              $.ajax(options)
            )
              .done(function(result, textStatus, jqXHR) {
                that._onDone(result, textStatus, jqXHR, options);
              })
              .fail(function(jqXHR, textStatus, errorThrown) {
                that._onFail(jqXHR, textStatus, errorThrown, options);
              })
              .always(function(jqXHRorResult, textStatus, jqXHRorError) {
                that._deinitProgressListener(options);
                that._onAlways(
                  jqXHRorResult,
                  textStatus,
                  jqXHRorError,
                  options
                );
                that._sending -= 1;
                that._active -= 1;
                if (
                  options.limitConcurrentUploads &&
                  options.limitConcurrentUploads > that._sending
                ) {
                  // Start the next queued upload,
                  // that has not been aborted:
                  var nextSlot = that._slots.shift();
                  while (nextSlot) {
                    if (that._getDeferredState(nextSlot) === 'pending') {
                      nextSlot.resolve();
                      break;
                    }
                    nextSlot = that._slots.shift();
                  }
                }
                if (that._active === 0) {
                  // The stop callback is triggered when all uploads have
                  // been completed, equivalent to the global ajaxStop event:
                  that._trigger('stop');
                }
              });
          return jqXHR;
        };
      this._beforeSend(e, options);
      if (
        this.options.sequentialUploads ||
        (this.options.limitConcurrentUploads &&
          this.options.limitConcurrentUploads <= this._sending)
      ) {
        if (this.options.limitConcurrentUploads > 1) {
          slot = $.Deferred();
          this._slots.push(slot);
          pipe = slot.then(send);
        } else {
          this._sequence = this._sequence.then(send, send);
          pipe = this._sequence;
        }
        // Return the piped Promise object, enhanced with an abort method,
        // which is delegated to the jqXHR object of the current upload,
        // and jqXHR callbacks mapped to the equivalent Promise methods:
        pipe.abort = function() {
          aborted = [undefined, 'abort', 'abort'];
          if (!jqXHR) {
            if (slot) {
              slot.rejectWith(options.context, aborted);
            }
            return send();
          }
          return jqXHR.abort();
        };
        return this._enhancePromise(pipe);
      }
      return send();
    },

    _onAdd: function(e, data) {
      var that = this,
        result = true,
        options = $.extend({}, this.options, data),
        files = data.files,
        filesLength = files.length,
        limit = options.limitMultiFileUploads,
        limitSize = options.limitMultiFileUploadSize,
        overhead = options.limitMultiFileUploadSizeOverhead,
        batchSize = 0,
        paramName = this._getParamName(options),
        paramNameSet,
        paramNameSlice,
        fileSet,
        i,
        j = 0;
      if (!filesLength) {
        return false;
      }
      if (limitSize && files[0].size === undefined) {
        limitSize = undefined;
      }
      if (
        !(options.singleFileUploads || limit || limitSize) ||
        !this._isXHRUpload(options)
      ) {
        fileSet = [files];
        paramNameSet = [paramName];
      } else if (!(options.singleFileUploads || limitSize) && limit) {
        fileSet = [];
        paramNameSet = [];
        for (i = 0; i < filesLength; i += limit) {
          fileSet.push(files.slice(i, i + limit));
          paramNameSlice = paramName.slice(i, i + limit);
          if (!paramNameSlice.length) {
            paramNameSlice = paramName;
          }
          paramNameSet.push(paramNameSlice);
        }
      } else if (!options.singleFileUploads && limitSize) {
        fileSet = [];
        paramNameSet = [];
        for (i = 0; i < filesLength; i = i + 1) {
          batchSize += files[i].size + overhead;
          if (
            i + 1 === filesLength ||
            batchSize + files[i + 1].size + overhead > limitSize ||
            (limit && i + 1 - j >= limit)
          ) {
            fileSet.push(files.slice(j, i + 1));
            paramNameSlice = paramName.slice(j, i + 1);
            if (!paramNameSlice.length) {
              paramNameSlice = paramName;
            }
            paramNameSet.push(paramNameSlice);
            j = i + 1;
            batchSize = 0;
          }
        }
      } else {
        paramNameSet = paramName;
      }
      data.originalFiles = files;
      $.each(fileSet || files, function(index, element) {
        var newData = $.extend({}, data);
        newData.files = fileSet ? element : [element];
        newData.paramName = paramNameSet[index];
        that._initResponseObject(newData);
        that._initProgressObject(newData);
        that._addConvenienceMethods(e, newData);
        result = that._trigger(
          'add',
          $.Event('add', { delegatedEvent: e }),
          newData
        );
        return result;
      });
      return result;
    },

    _replaceFileInput: function(data) {
      var input = data.fileInput,
        inputClone = input.clone(true),
        restoreFocus = input.is(document.activeElement);
      // Add a reference for the new cloned file input to the data argument:
      data.fileInputClone = inputClone;
      $('<form></form>')
        .append(inputClone)[0]
        .reset();
      // Detaching allows to insert the fileInput on another form
      // without loosing the file input value:
      input.after(inputClone).detach();
      // If the fileInput had focus before it was detached,
      // restore focus to the inputClone.
      if (restoreFocus) {
        inputClone.focus();
      }
      // Avoid memory leaks with the detached file input:
      $.cleanData(input.unbind('remove'));
      // Replace the original file input element in the fileInput
      // elements set with the clone, which has been copied including
      // event handlers:
      this.options.fileInput = this.options.fileInput.map(function(i, el) {
        if (el === input[0]) {
          return inputClone[0];
        }
        return el;
      });
      // If the widget has been initialized on the file input itself,
      // override this.element with the file input clone:
      if (input[0] === this.element[0]) {
        this.element = inputClone;
      }
    },

    _handleFileTreeEntry: function(entry, path) {
      var that = this,
        dfd = $.Deferred(),
        entries = [],
        dirReader,
        errorHandler = function(e) {
          if (e && !e.entry) {
            e.entry = entry;
          }
          // Since $.when returns immediately if one
          // Deferred is rejected, we use resolve instead.
          // This allows valid files and invalid items
          // to be returned together in one set:
          dfd.resolve([e]);
        },
        successHandler = function(entries) {
          that
            ._handleFileTreeEntries(entries, path + entry.name + '/')
            .done(function(files) {
              dfd.resolve(files);
            })
            .fail(errorHandler);
        },
        readEntries = function() {
          dirReader.readEntries(function(results) {
            if (!results.length) {
              successHandler(entries);
            } else {
              entries = entries.concat(results);
              readEntries();
            }
          }, errorHandler);
        };
      // eslint-disable-next-line no-param-reassign
      path = path || '';
      if (entry.isFile) {
        if (entry._file) {
          // Workaround for Chrome bug #149735
          entry._file.relativePath = path;
          dfd.resolve(entry._file);
        } else {
          entry.file(function(file) {
            file.relativePath = path;
            dfd.resolve(file);
          }, errorHandler);
        }
      } else if (entry.isDirectory) {
        dirReader = entry.createReader();
        readEntries();
      } else {
        // Return an empty list for file system items
        // other than files or directories:
        dfd.resolve([]);
      }
      return dfd.promise();
    },

    _handleFileTreeEntries: function(entries, path) {
      var that = this;
      return $.when
        .apply(
          $,
          $.map(entries, function(entry) {
            return that._handleFileTreeEntry(entry, path);
          })
        )
        .then(function() {
          return Array.prototype.concat.apply([], arguments);
        });
    },

    _getDroppedFiles: function(dataTransfer) {
      // eslint-disable-next-line no-param-reassign
      dataTransfer = dataTransfer || {};
      var items = dataTransfer.items;
      if (
        items &&
        items.length &&
        (items[0].webkitGetAsEntry || items[0].getAsEntry)
      ) {
        return this._handleFileTreeEntries(
          $.map(items, function(item) {
            var entry;
            if (item.webkitGetAsEntry) {
              entry = item.webkitGetAsEntry();
              if (entry) {
                // Workaround for Chrome bug #149735:
                entry._file = item.getAsFile();
              }
              return entry;
            }
            return item.getAsEntry();
          })
        );
      }
      return $.Deferred()
        .resolve($.makeArray(dataTransfer.files))
        .promise();
    },

    _getSingleFileInputFiles: function(fileInput) {
      // eslint-disable-next-line no-param-reassign
      fileInput = $(fileInput);
      var entries =
          fileInput.prop('webkitEntries') || fileInput.prop('entries'),
        files,
        value;
      if (entries && entries.length) {
        return this._handleFileTreeEntries(entries);
      }
      files = $.makeArray(fileInput.prop('files'));
      if (!files.length) {
        value = fileInput.prop('value');
        if (!value) {
          return $.Deferred()
            .resolve([])
            .promise();
        }
        // If the files property is not available, the browser does not
        // support the File API and we add a pseudo File object with
        // the input value as name with path information removed:
        files = [{ name: value.replace(/^.*\\/, '') }];
      } else if (files[0].name === undefined && files[0].fileName) {
        // File normalization for Safari 4 and Firefox 3:
        $.each(files, function(index, file) {
          file.name = file.fileName;
          file.size = file.fileSize;
        });
      }
      return $.Deferred()
        .resolve(files)
        .promise();
    },

    _getFileInputFiles: function(fileInput) {
      if (!(fileInput instanceof $) || fileInput.length === 1) {
        return this._getSingleFileInputFiles(fileInput);
      }
      return $.when
        .apply($, $.map(fileInput, this._getSingleFileInputFiles))
        .then(function() {
          return Array.prototype.concat.apply([], arguments);
        });
    },

    _onChange: function(e) {
      var that = this,
        data = {
          fileInput: $(e.target),
          form: $(e.target.form)
        };
      this._getFileInputFiles(data.fileInput).always(function(files) {
        data.files = files;
        if (that.options.replaceFileInput) {
          that._replaceFileInput(data);
        }
        if (
          that._trigger(
            'change',
            $.Event('change', { delegatedEvent: e }),
            data
          ) !== false
        ) {
          that._onAdd(e, data);
        }
      });
    },

    _onPaste: function(e) {
      var items =
          e.originalEvent &&
          e.originalEvent.clipboardData &&
          e.originalEvent.clipboardData.items,
        data = { files: [] };
      if (items && items.length) {
        $.each(items, function(index, item) {
          var file = item.getAsFile && item.getAsFile();
          if (file) {
            data.files.push(file);
          }
        });
        if (
          this._trigger(
            'paste',
            $.Event('paste', { delegatedEvent: e }),
            data
          ) !== false
        ) {
          this._onAdd(e, data);
        }
      }
    },

    _onDrop: function(e) {
      e.dataTransfer = e.originalEvent && e.originalEvent.dataTransfer;
      var that = this,
        dataTransfer = e.dataTransfer,
        data = {};
      if (dataTransfer && dataTransfer.files && dataTransfer.files.length) {
        e.preventDefault();
        this._getDroppedFiles(dataTransfer).always(function(files) {
          data.files = files;
          if (
            that._trigger(
              'drop',
              $.Event('drop', { delegatedEvent: e }),
              data
            ) !== false
          ) {
            that._onAdd(e, data);
          }
        });
      }
    },

    _onDragOver: getDragHandler('dragover'),

    _onDragEnter: getDragHandler('dragenter'),

    _onDragLeave: getDragHandler('dragleave'),

    _initEventHandlers: function() {
      if (this._isXHRUpload(this.options)) {
        this._on(this.options.dropZone, {
          dragover: this._onDragOver,
          drop: this._onDrop,
          // event.preventDefault() on dragenter is required for IE10+:
          dragenter: this._onDragEnter,
          // dragleave is not required, but added for completeness:
          dragleave: this._onDragLeave
        });
        this._on(this.options.pasteZone, {
          paste: this._onPaste
        });
      }
      if ($.support.fileInput) {
        this._on(this.options.fileInput, {
          change: this._onChange
        });
      }
    },

    _destroyEventHandlers: function() {
      this._off(this.options.dropZone, 'dragenter dragleave dragover drop');
      this._off(this.options.pasteZone, 'paste');
      this._off(this.options.fileInput, 'change');
    },

    _destroy: function() {
      this._destroyEventHandlers();
    },

    _setOption: function(key, value) {
      var reinit = $.inArray(key, this._specialOptions) !== -1;
      if (reinit) {
        this._destroyEventHandlers();
      }
      this._super(key, value);
      if (reinit) {
        this._initSpecialOptions();
        this._initEventHandlers();
      }
    },

    _initSpecialOptions: function() {
      var options = this.options;
      if (options.fileInput === undefined) {
        options.fileInput = this.element.is('input[type="file"]')
          ? this.element
          : this.element.find('input[type="file"]');
      } else if (!(options.fileInput instanceof $)) {
        options.fileInput = $(options.fileInput);
      }
      if (!(options.dropZone instanceof $)) {
        options.dropZone = $(options.dropZone);
      }
      if (!(options.pasteZone instanceof $)) {
        options.pasteZone = $(options.pasteZone);
      }
    },

    _getRegExp: function(str) {
      var parts = str.split('/'),
        modifiers = parts.pop();
      parts.shift();
      return new RegExp(parts.join('/'), modifiers);
    },

    _isRegExpOption: function(key, value) {
      return (
        key !== 'url' &&
        $.type(value) === 'string' &&
        /^\/.*\/[igm]{0,3}$/.test(value)
      );
    },

    _initDataAttributes: function() {
      var that = this,
        options = this.options,
        data = this.element.data();
      // Initialize options set via HTML5 data-attributes:
      $.each(this.element[0].attributes, function(index, attr) {
        var key = attr.name.toLowerCase(),
          value;
        if (/^data-/.test(key)) {
          // Convert hyphen-ated key to camelCase:
          key = key.slice(5).replace(/-[a-z]/g, function(str) {
            return str.charAt(1).toUpperCase();
          });
          value = data[key];
          if (that._isRegExpOption(key, value)) {
            value = that._getRegExp(value);
          }
          options[key] = value;
        }
      });
    },

    _create: function() {
      this._initDataAttributes();
      this._initSpecialOptions();
      this._slots = [];
      this._sequence = this._getXHRPromise(true);
      this._sending = this._active = 0;
      this._initProgressObject(this);
      this._initEventHandlers();
    },

    // This method is exposed to the widget API and allows to query
    // the number of active uploads:
    active: function() {
      return this._active;
    },

    // This method is exposed to the widget API and allows to query
    // the widget upload progress.
    // It returns an object with loaded, total and bitrate properties
    // for the running uploads:
    progress: function() {
      return this._progress;
    },

    // This method is exposed to the widget API and allows adding files
    // using the fileupload API. The data parameter accepts an object which
    // must have a files property and can contain additional options:
    // .fileupload('add', {files: filesList});
    add: function(data) {
      var that = this;
      if (!data || this.options.disabled) {
        return;
      }
      if (data.fileInput && !data.files) {
        this._getFileInputFiles(data.fileInput).always(function(files) {
          data.files = files;
          that._onAdd(null, data);
        });
      } else {
        data.files = $.makeArray(data.files);
        this._onAdd(null, data);
      }
    },

    // This method is exposed to the widget API and allows sending files
    // using the fileupload API. The data parameter accepts an object which
    // must have a files or fileInput property and can contain additional options:
    // .fileupload('send', {files: filesList});
    // The method returns a Promise object for the file upload call.
    send: function(data) {
      if (data && !this.options.disabled) {
        if (data.fileInput && !data.files) {
          var that = this,
            dfd = $.Deferred(),
            promise = dfd.promise(),
            jqXHR,
            aborted;
          promise.abort = function() {
            aborted = true;
            if (jqXHR) {
              return jqXHR.abort();
            }
            dfd.reject(null, 'abort', 'abort');
            return promise;
          };
          this._getFileInputFiles(data.fileInput).always(function(files) {
            if (aborted) {
              return;
            }
            if (!files.length) {
              dfd.reject();
              return;
            }
            data.files = files;
            jqXHR = that._onSend(null, data);
            jqXHR.then(
              function(result, textStatus, jqXHR) {
                dfd.resolve(result, textStatus, jqXHR);
              },
              function(jqXHR, textStatus, errorThrown) {
                dfd.reject(jqXHR, textStatus, errorThrown);
              }
            );
          });
          return this._enhancePromise(promise);
        }
        data.files = $.makeArray(data.files);
        if (data.files.length) {
          return this._onSend(null, data);
        }
      }
      return this._getXHRPromise(false, data && data.context);
    }
  });
});

/*! jQuery Validation Plugin - v1.19.2 - 5/23/2020
 * https://jqueryvalidation.org/
 * Copyright (c) 2020 Jörn Zaefferer; Licensed MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof module&&module.exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){a.extend(a.fn,{validate:function(b){if(!this.length)return void(b&&b.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing."));var c=a.data(this[0],"validator");return c?c:(this.attr("novalidate","novalidate"),c=new a.validator(b,this[0]),a.data(this[0],"validator",c),c.settings.onsubmit&&(this.on("click.validate",":submit",function(b){c.submitButton=b.currentTarget,a(this).hasClass("cancel")&&(c.cancelSubmit=!0),void 0!==a(this).attr("formnovalidate")&&(c.cancelSubmit=!0)}),this.on("submit.validate",function(b){function d(){var d,e;return c.submitButton&&(c.settings.submitHandler||c.formSubmitted)&&(d=a("<input type='hidden'/>").attr("name",c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)),!(c.settings.submitHandler&&!c.settings.debug)||(e=c.settings.submitHandler.call(c,c.currentForm,b),d&&d.remove(),void 0!==e&&e)}return c.settings.debug&&b.preventDefault(),c.cancelSubmit?(c.cancelSubmit=!1,d()):c.form()?c.pendingRequest?(c.formSubmitted=!0,!1):d():(c.focusInvalid(),!1)})),c)},valid:function(){var b,c,d;return a(this[0]).is("form")?b=this.validate().form():(d=[],b=!0,c=a(this[0].form).validate(),this.each(function(){b=c.element(this)&&b,b||(d=d.concat(c.errorList))}),c.errorList=d),b},rules:function(b,c){var d,e,f,g,h,i,j=this[0],k="undefined"!=typeof this.attr("contenteditable")&&"false"!==this.attr("contenteditable");if(null!=j&&(!j.form&&k&&(j.form=this.closest("form")[0],j.name=this.attr("name")),null!=j.form)){if(b)switch(d=a.data(j.form,"validator").settings,e=d.rules,f=a.validator.staticRules(j),b){case"add":a.extend(f,a.validator.normalizeRule(c)),delete f.messages,e[j.name]=f,c.messages&&(d.messages[j.name]=a.extend(d.messages[j.name],c.messages));break;case"remove":return c?(i={},a.each(c.split(/\s/),function(a,b){i[b]=f[b],delete f[b]}),i):(delete e[j.name],f)}return g=a.validator.normalizeRules(a.extend({},a.validator.classRules(j),a.validator.attributeRules(j),a.validator.dataRules(j),a.validator.staticRules(j)),j),g.required&&(h=g.required,delete g.required,g=a.extend({required:h},g)),g.remote&&(h=g.remote,delete g.remote,g=a.extend(g,{remote:h})),g}}});var b=function(a){return a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")};a.extend(a.expr.pseudos||a.expr[":"],{blank:function(c){return!b(""+a(c).val())},filled:function(c){var d=a(c).val();return null!==d&&!!b(""+d)},unchecked:function(b){return!a(b).prop("checked")}}),a.validator=function(b,c){this.settings=a.extend(!0,{},a.validator.defaults,b),this.currentForm=c,this.init()},a.validator.format=function(b,c){return 1===arguments.length?function(){var c=a.makeArray(arguments);return c.unshift(b),a.validator.format.apply(this,c)}:void 0===c?b:(arguments.length>2&&c.constructor!==Array&&(c=a.makeArray(arguments).slice(1)),c.constructor!==Array&&(c=[c]),a.each(c,function(a,c){b=b.replace(new RegExp("\\{"+a+"\\}","g"),function(){return c})}),b)},a.extend(a.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",pendingClass:"pending",validClass:"valid",errorElement:"label",focusCleanup:!1,focusInvalid:!0,errorContainer:a([]),errorLabelContainer:a([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(a){this.lastActive=a,this.settings.focusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,a,this.settings.errorClass,this.settings.validClass),this.hideThese(this.errorsFor(a)))},onfocusout:function(a){this.checkable(a)||!(a.name in this.submitted)&&this.optional(a)||this.element(a)},onkeyup:function(b,c){var d=[16,17,18,20,35,36,37,38,39,40,45,144,225];9===c.which&&""===this.elementValue(b)||a.inArray(c.keyCode,d)!==-1||(b.name in this.submitted||b.name in this.invalid)&&this.element(b)},onclick:function(a){a.name in this.submitted?this.element(a):a.parentNode.name in this.submitted&&this.element(a.parentNode)},highlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).addClass(c).removeClass(d):a(b).addClass(c).removeClass(d)},unhighlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).removeClass(c).addClass(d):a(b).removeClass(c).addClass(d)}},setDefaults:function(b){a.extend(a.validator.defaults,b)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",equalTo:"Please enter the same value again.",maxlength:a.validator.format("Please enter no more than {0} characters."),minlength:a.validator.format("Please enter at least {0} characters."),rangelength:a.validator.format("Please enter a value between {0} and {1} characters long."),range:a.validator.format("Please enter a value between {0} and {1}."),max:a.validator.format("Please enter a value less than or equal to {0}."),min:a.validator.format("Please enter a value greater than or equal to {0}."),step:a.validator.format("Please enter a multiple of {0}.")},autoCreateRanges:!1,prototype:{init:function(){function b(b){var c="undefined"!=typeof a(this).attr("contenteditable")&&"false"!==a(this).attr("contenteditable");if(!this.form&&c&&(this.form=a(this).closest("form")[0],this.name=a(this).attr("name")),d===this.form){var e=a.data(this.form,"validator"),f="on"+b.type.replace(/^validate/,""),g=e.settings;g[f]&&!a(this).is(g.ignore)&&g[f].call(e,this,b)}}this.labelContainer=a(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||a(this.currentForm),this.containers=a(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var c,d=this.currentForm,e=this.groups={};a.each(this.settings.groups,function(b,c){"string"==typeof c&&(c=c.split(/\s/)),a.each(c,function(a,c){e[c]=b})}),c=this.settings.rules,a.each(c,function(b,d){c[b]=a.validator.normalizeRule(d)}),a(this.currentForm).on("focusin.validate focusout.validate keyup.validate",":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']",b).on("click.validate","select, option, [type='radio'], [type='checkbox']",b),this.settings.invalidHandler&&a(this.currentForm).on("invalid-form.validate",this.settings.invalidHandler)},form:function(){return this.checkForm(),a.extend(this.submitted,this.errorMap),this.invalid=a.extend({},this.errorMap),this.valid()||a(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var a=0,b=this.currentElements=this.elements();b[a];a++)this.check(b[a]);return this.valid()},element:function(b){var c,d,e=this.clean(b),f=this.validationTargetFor(e),g=this,h=!0;return void 0===f?delete this.invalid[e.name]:(this.prepareElement(f),this.currentElements=a(f),d=this.groups[f.name],d&&a.each(this.groups,function(a,b){b===d&&a!==f.name&&(e=g.validationTargetFor(g.clean(g.findByName(a))),e&&e.name in g.invalid&&(g.currentElements.push(e),h=g.check(e)&&h))}),c=this.check(f)!==!1,h=h&&c,c?this.invalid[f.name]=!1:this.invalid[f.name]=!0,this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),a(b).attr("aria-invalid",!c)),h},showErrors:function(b){if(b){var c=this;a.extend(this.errorMap,b),this.errorList=a.map(this.errorMap,function(a,b){return{message:a,element:c.findByName(b)[0]}}),this.successList=a.grep(this.successList,function(a){return!(a.name in b)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){a.fn.resetForm&&a(this.currentForm).resetForm(),this.invalid={},this.submitted={},this.prepareForm(),this.hideErrors();var b=this.elements().removeData("previousValue").removeAttr("aria-invalid");this.resetElements(b)},resetElements:function(a){var b;if(this.settings.unhighlight)for(b=0;a[b];b++)this.settings.unhighlight.call(this,a[b],this.settings.errorClass,""),this.findByName(a[b].name).removeClass(this.settings.validClass);else a.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(a){var b,c=0;for(b in a)void 0!==a[b]&&null!==a[b]&&a[b]!==!1&&c++;return c},hideErrors:function(){this.hideThese(this.toHide)},hideThese:function(a){a.not(this.containers).text(""),this.addWrapper(a).hide()},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{a(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").trigger("focus").trigger("focusin")}catch(b){}},findLastActive:function(){var b=this.lastActive;return b&&1===a.grep(this.errorList,function(a){return a.element.name===b.name}).length&&b},elements:function(){var b=this,c={};return a(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function(){var d=this.name||a(this).attr("name"),e="undefined"!=typeof a(this).attr("contenteditable")&&"false"!==a(this).attr("contenteditable");return!d&&b.settings.debug&&window.console&&console.error("%o has no name assigned",this),e&&(this.form=a(this).closest("form")[0],this.name=d),this.form===b.currentForm&&(!(d in c||!b.objectLength(a(this).rules()))&&(c[d]=!0,!0))})},clean:function(b){return a(b)[0]},errors:function(){var b=this.settings.errorClass.split(" ").join(".");return a(this.settings.errorElement+"."+b,this.errorContext)},resetInternals:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=a([]),this.toHide=a([])},reset:function(){this.resetInternals(),this.currentElements=a([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(a){this.reset(),this.toHide=this.errorsFor(a)},elementValue:function(b){var c,d,e=a(b),f=b.type,g="undefined"!=typeof e.attr("contenteditable")&&"false"!==e.attr("contenteditable");return"radio"===f||"checkbox"===f?this.findByName(b.name).filter(":checked").val():"number"===f&&"undefined"!=typeof b.validity?b.validity.badInput?"NaN":e.val():(c=g?e.text():e.val(),"file"===f?"C:\\fakepath\\"===c.substr(0,12)?c.substr(12):(d=c.lastIndexOf("/"),d>=0?c.substr(d+1):(d=c.lastIndexOf("\\"),d>=0?c.substr(d+1):c)):"string"==typeof c?c.replace(/\r/g,""):c)},check:function(b){b=this.validationTargetFor(this.clean(b));var c,d,e,f,g=a(b).rules(),h=a.map(g,function(a,b){return b}).length,i=!1,j=this.elementValue(b);"function"==typeof g.normalizer?f=g.normalizer:"function"==typeof this.settings.normalizer&&(f=this.settings.normalizer),f&&(j=f.call(b,j),delete g.normalizer);for(d in g){e={method:d,parameters:g[d]};try{if(c=a.validator.methods[d].call(this,j,b,e.parameters),"dependency-mismatch"===c&&1===h){i=!0;continue}if(i=!1,"pending"===c)return void(this.toHide=this.toHide.not(this.errorsFor(b)));if(!c)return this.formatAndAdd(b,e),!1}catch(k){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+b.id+", check the '"+e.method+"' method.",k),k instanceof TypeError&&(k.message+=".  Exception occurred when checking element "+b.id+", check the '"+e.method+"' method."),k}}if(!i)return this.objectLength(g)&&this.successList.push(b),!0},customDataMessage:function(b,c){return a(b).data("msg"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase())||a(b).data("msg")},customMessage:function(a,b){var c=this.settings.messages[a];return c&&(c.constructor===String?c:c[b])},findDefined:function(){for(var a=0;a<arguments.length;a++)if(void 0!==arguments[a])return arguments[a]},defaultMessage:function(b,c){"string"==typeof c&&(c={method:c});var d=this.findDefined(this.customMessage(b.name,c.method),this.customDataMessage(b,c.method),!this.settings.ignoreTitle&&b.title||void 0,a.validator.messages[c.method],"<strong>Warning: No message defined for "+b.name+"</strong>"),e=/\$?\{(\d+)\}/g;return"function"==typeof d?d=d.call(this,c.parameters,b):e.test(d)&&(d=a.validator.format(d.replace(e,"{$1}"),c.parameters)),d},formatAndAdd:function(a,b){var c=this.defaultMessage(a,b);this.errorList.push({message:c,element:a,method:b.method}),this.errorMap[a.name]=c,this.submitted[a.name]=c},addWrapper:function(a){return this.settings.wrapper&&(a=a.add(a.parent(this.settings.wrapper))),a},defaultShowErrors:function(){var a,b,c;for(a=0;this.errorList[a];a++)c=this.errorList[a],this.settings.highlight&&this.settings.highlight.call(this,c.element,this.settings.errorClass,this.settings.validClass),this.showLabel(c.element,c.message);if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(a=0;this.successList[a];a++)this.showLabel(this.successList[a]);if(this.settings.unhighlight)for(a=0,b=this.validElements();b[a];a++)this.settings.unhighlight.call(this,b[a],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return a(this.errorList).map(function(){return this.element})},showLabel:function(b,c){var d,e,f,g,h=this.errorsFor(b),i=this.idOrName(b),j=a(b).attr("aria-describedby");h.length?(h.removeClass(this.settings.validClass).addClass(this.settings.errorClass),h.html(c)):(h=a("<"+this.settings.errorElement+">").attr("id",i+"-error").addClass(this.settings.errorClass).html(c||""),d=h,this.settings.wrapper&&(d=h.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.length?this.labelContainer.append(d):this.settings.errorPlacement?this.settings.errorPlacement.call(this,d,a(b)):d.insertAfter(b),h.is("label")?h.attr("for",i):0===h.parents("label[for='"+this.escapeCssMeta(i)+"']").length&&(f=h.attr("id"),j?j.match(new RegExp("\\b"+this.escapeCssMeta(f)+"\\b"))||(j+=" "+f):j=f,a(b).attr("aria-describedby",j),e=this.groups[b.name],e&&(g=this,a.each(g.groups,function(b,c){c===e&&a("[name='"+g.escapeCssMeta(b)+"']",g.currentForm).attr("aria-describedby",h.attr("id"))})))),!c&&this.settings.success&&(h.text(""),"string"==typeof this.settings.success?h.addClass(this.settings.success):this.settings.success(h,b)),this.toShow=this.toShow.add(h)},errorsFor:function(b){var c=this.escapeCssMeta(this.idOrName(b)),d=a(b).attr("aria-describedby"),e="label[for='"+c+"'], label[for='"+c+"'] *";return d&&(e=e+", #"+this.escapeCssMeta(d).replace(/\s+/g,", #")),this.errors().filter(e)},escapeCssMeta:function(a){return a.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g,"\\$1")},idOrName:function(a){return this.groups[a.name]||(this.checkable(a)?a.name:a.id||a.name)},validationTargetFor:function(b){return this.checkable(b)&&(b=this.findByName(b.name)),a(b).not(this.settings.ignore)[0]},checkable:function(a){return/radio|checkbox/i.test(a.type)},findByName:function(b){return a(this.currentForm).find("[name='"+this.escapeCssMeta(b)+"']")},getLength:function(b,c){switch(c.nodeName.toLowerCase()){case"select":return a("option:selected",c).length;case"input":if(this.checkable(c))return this.findByName(c.name).filter(":checked").length}return b.length},depend:function(a,b){return!this.dependTypes[typeof a]||this.dependTypes[typeof a](a,b)},dependTypes:{"boolean":function(a){return a},string:function(b,c){return!!a(b,c.form).length},"function":function(a,b){return a(b)}},optional:function(b){var c=this.elementValue(b);return!a.validator.methods.required.call(this,c,b)&&"dependency-mismatch"},startRequest:function(b){this.pending[b.name]||(this.pendingRequest++,a(b).addClass(this.settings.pendingClass),this.pending[b.name]=!0)},stopRequest:function(b,c){this.pendingRequest--,this.pendingRequest<0&&(this.pendingRequest=0),delete this.pending[b.name],a(b).removeClass(this.settings.pendingClass),c&&0===this.pendingRequest&&this.formSubmitted&&this.form()?(a(this.currentForm).submit(),this.submitButton&&a("input:hidden[name='"+this.submitButton.name+"']",this.currentForm).remove(),this.formSubmitted=!1):!c&&0===this.pendingRequest&&this.formSubmitted&&(a(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(b,c){return c="string"==typeof c&&c||"remote",a.data(b,"previousValue")||a.data(b,"previousValue",{old:null,valid:!0,message:this.defaultMessage(b,{method:c})})},destroy:function(){this.resetForm(),a(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur").find(".validate-lessThan-blur").off(".validate-lessThan").removeClass("validate-lessThan-blur").find(".validate-lessThanEqual-blur").off(".validate-lessThanEqual").removeClass("validate-lessThanEqual-blur").find(".validate-greaterThanEqual-blur").off(".validate-greaterThanEqual").removeClass("validate-greaterThanEqual-blur").find(".validate-greaterThan-blur").off(".validate-greaterThan").removeClass("validate-greaterThan-blur")}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(b,c){b.constructor===String?this.classRuleSettings[b]=c:a.extend(this.classRuleSettings,b)},classRules:function(b){var c={},d=a(b).attr("class");return d&&a.each(d.split(" "),function(){this in a.validator.classRuleSettings&&a.extend(c,a.validator.classRuleSettings[this])}),c},normalizeAttributeRule:function(a,b,c,d){/min|max|step/.test(c)&&(null===b||/number|range|text/.test(b))&&(d=Number(d),isNaN(d)&&(d=void 0)),d||0===d?a[c]=d:b===c&&"range"!==b&&(a[c]=!0)},attributeRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)"required"===c?(d=b.getAttribute(c),""===d&&(d=!0),d=!!d):d=f.attr(c),this.normalizeAttributeRule(e,g,c,d);return e.maxlength&&/-1|2147483647|524288/.test(e.maxlength)&&delete e.maxlength,e},dataRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)d=f.data("rule"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase()),""===d&&(d=!0),this.normalizeAttributeRule(e,g,c,d);return e},staticRules:function(b){var c={},d=a.data(b.form,"validator");return d.settings.rules&&(c=a.validator.normalizeRule(d.settings.rules[b.name])||{}),c},normalizeRules:function(b,c){return a.each(b,function(d,e){if(e===!1)return void delete b[d];if(e.param||e.depends){var f=!0;switch(typeof e.depends){case"string":f=!!a(e.depends,c.form).length;break;case"function":f=e.depends.call(c,c)}f?b[d]=void 0===e.param||e.param:(a.data(c.form,"validator").resetElements(a(c)),delete b[d])}}),a.each(b,function(d,e){b[d]=a.isFunction(e)&&"normalizer"!==d?e(c):e}),a.each(["minlength","maxlength"],function(){b[this]&&(b[this]=Number(b[this]))}),a.each(["rangelength","range"],function(){var c;b[this]&&(a.isArray(b[this])?b[this]=[Number(b[this][0]),Number(b[this][1])]:"string"==typeof b[this]&&(c=b[this].replace(/[\[\]]/g,"").split(/[\s,]+/),b[this]=[Number(c[0]),Number(c[1])]))}),a.validator.autoCreateRanges&&(null!=b.min&&null!=b.max&&(b.range=[b.min,b.max],delete b.min,delete b.max),null!=b.minlength&&null!=b.maxlength&&(b.rangelength=[b.minlength,b.maxlength],delete b.minlength,delete b.maxlength)),b},normalizeRule:function(b){if("string"==typeof b){var c={};a.each(b.split(/\s/),function(){c[this]=!0}),b=c}return b},addMethod:function(b,c,d){a.validator.methods[b]=c,a.validator.messages[b]=void 0!==d?d:a.validator.messages[b],c.length<3&&a.validator.addClassRules(b,a.validator.normalizeRule(b))},methods:{required:function(b,c,d){if(!this.depend(d,c))return"dependency-mismatch";if("select"===c.nodeName.toLowerCase()){var e=a(c).val();return e&&e.length>0}return this.checkable(c)?this.getLength(b,c)>0:void 0!==b&&null!==b&&b.length>0},email:function(a,b){return this.optional(b)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)},url:function(a,b){return this.optional(b)||/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(a)},date:function(){var a=!1;return function(b,c){return a||(a=!0,this.settings.debug&&window.console&&console.warn("The `date` method is deprecated and will be removed in version '2.0.0'.\nPlease don't use it, since it relies on the Date constructor, which\nbehaves very differently across browsers and locales. Use `dateISO`\ninstead or one of the locale specific methods in `localizations/`\nand `additional-methods.js`.")),this.optional(c)||!/Invalid|NaN/.test(new Date(b).toString())}}(),dateISO:function(a,b){return this.optional(b)||/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)},number:function(a,b){return this.optional(b)||/^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)},digits:function(a,b){return this.optional(b)||/^\d+$/.test(a)},minlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d},maxlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e<=d},rangelength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d[0]&&e<=d[1]},min:function(a,b,c){return this.optional(b)||a>=c},max:function(a,b,c){return this.optional(b)||a<=c},range:function(a,b,c){return this.optional(b)||a>=c[0]&&a<=c[1]},step:function(b,c,d){var e,f=a(c).attr("type"),g="Step attribute on input type "+f+" is not supported.",h=["text","number","range"],i=new RegExp("\\b"+f+"\\b"),j=f&&!i.test(h.join()),k=function(a){var b=(""+a).match(/(?:\.(\d+))?$/);return b&&b[1]?b[1].length:0},l=function(a){return Math.round(a*Math.pow(10,e))},m=!0;if(j)throw new Error(g);return e=k(d),(k(b)>e||l(b)%l(d)!==0)&&(m=!1),this.optional(c)||m},equalTo:function(b,c,d){var e=a(d);return this.settings.onfocusout&&e.not(".validate-equalTo-blur").length&&e.addClass("validate-equalTo-blur").on("blur.validate-equalTo",function(){a(c).valid()}),b===e.val()},remote:function(b,c,d,e){if(this.optional(c))return"dependency-mismatch";e="string"==typeof e&&e||"remote";var f,g,h,i=this.previousValue(c,e);return this.settings.messages[c.name]||(this.settings.messages[c.name]={}),i.originalMessage=i.originalMessage||this.settings.messages[c.name][e],this.settings.messages[c.name][e]=i.message,d="string"==typeof d&&{url:d}||d,h=a.param(a.extend({data:b},d.data)),i.old===h?i.valid:(i.old=h,f=this,this.startRequest(c),g={},g[c.name]=b,a.ajax(a.extend(!0,{mode:"abort",port:"validate"+c.name,dataType:"json",data:g,context:f.currentForm,success:function(a){var d,g,h,j=a===!0||"true"===a;f.settings.messages[c.name][e]=i.originalMessage,j?(h=f.formSubmitted,f.resetInternals(),f.toHide=f.errorsFor(c),f.formSubmitted=h,f.successList.push(c),f.invalid[c.name]=!1,f.showErrors()):(d={},g=a||f.defaultMessage(c,{method:e,parameters:b}),d[c.name]=i.message=g,f.invalid[c.name]=!0,f.showErrors(d)),i.valid=j,f.stopRequest(c,j)}},d)),"pending")}}});var c,d={};return a.ajaxPrefilter?a.ajaxPrefilter(function(a,b,c){var e=a.port;"abort"===a.mode&&(d[e]&&d[e].abort(),d[e]=c)}):(c=a.ajax,a.ajax=function(b){var e=("mode"in b?b:a.ajaxSettings).mode,f=("port"in b?b:a.ajaxSettings).port;return"abort"===e?(d[f]&&d[f].abort(),d[f]=c.apply(this,arguments),d[f]):c.apply(this,arguments)}),a});

/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */
!function(n){"function"==typeof define&&define.amd?define(["jquery"],n):"object"==typeof module&&module.exports?module.exports=function(e,t){return void 0===t&&(t="undefined"!=typeof window?require("jquery"):require("jquery")(e)),n(t),t}:n(jQuery)}(function(u){var e=function(){if(u&&u.fn&&u.fn.select2&&u.fn.select2.amd)var e=u.fn.select2.amd;var t,n,r,h,o,s,f,g,m,v,y,_,i,a,b;function w(e,t){return i.call(e,t)}function l(e,t){var n,r,i,o,s,a,l,c,u,d,p,h=t&&t.split("/"),f=y.map,g=f&&f["*"]||{};if(e){for(s=(e=e.split("/")).length-1,y.nodeIdCompat&&b.test(e[s])&&(e[s]=e[s].replace(b,"")),"."===e[0].charAt(0)&&h&&(e=h.slice(0,h.length-1).concat(e)),u=0;u<e.length;u++)if("."===(p=e[u]))e.splice(u,1),u-=1;else if(".."===p){if(0===u||1===u&&".."===e[2]||".."===e[u-1])continue;0<u&&(e.splice(u-1,2),u-=2)}e=e.join("/")}if((h||g)&&f){for(u=(n=e.split("/")).length;0<u;u-=1){if(r=n.slice(0,u).join("/"),h)for(d=h.length;0<d;d-=1)if(i=(i=f[h.slice(0,d).join("/")])&&i[r]){o=i,a=u;break}if(o)break;!l&&g&&g[r]&&(l=g[r],c=u)}!o&&l&&(o=l,a=c),o&&(n.splice(0,a,o),e=n.join("/"))}return e}function A(t,n){return function(){var e=a.call(arguments,0);return"string"!=typeof e[0]&&1===e.length&&e.push(null),s.apply(h,e.concat([t,n]))}}function x(t){return function(e){m[t]=e}}function D(e){if(w(v,e)){var t=v[e];delete v[e],_[e]=!0,o.apply(h,t)}if(!w(m,e)&&!w(_,e))throw new Error("No "+e);return m[e]}function c(e){var t,n=e?e.indexOf("!"):-1;return-1<n&&(t=e.substring(0,n),e=e.substring(n+1,e.length)),[t,e]}function S(e){return e?c(e):[]}return e&&e.requirejs||(e?n=e:e={},m={},v={},y={},_={},i=Object.prototype.hasOwnProperty,a=[].slice,b=/\.js$/,f=function(e,t){var n,r=c(e),i=r[0],o=t[1];return e=r[1],i&&(n=D(i=l(i,o))),i?e=n&&n.normalize?n.normalize(e,function(t){return function(e){return l(e,t)}}(o)):l(e,o):(i=(r=c(e=l(e,o)))[0],e=r[1],i&&(n=D(i))),{f:i?i+"!"+e:e,n:e,pr:i,p:n}},g={require:function(e){return A(e)},exports:function(e){var t=m[e];return void 0!==t?t:m[e]={}},module:function(e){return{id:e,uri:"",exports:m[e],config:function(e){return function(){return y&&y.config&&y.config[e]||{}}}(e)}}},o=function(e,t,n,r){var i,o,s,a,l,c,u,d=[],p=typeof n;if(c=S(r=r||e),"undefined"==p||"function"==p){for(t=!t.length&&n.length?["require","exports","module"]:t,l=0;l<t.length;l+=1)if("require"===(o=(a=f(t[l],c)).f))d[l]=g.require(e);else if("exports"===o)d[l]=g.exports(e),u=!0;else if("module"===o)i=d[l]=g.module(e);else if(w(m,o)||w(v,o)||w(_,o))d[l]=D(o);else{if(!a.p)throw new Error(e+" missing "+o);a.p.load(a.n,A(r,!0),x(o),{}),d[l]=m[o]}s=n?n.apply(m[e],d):void 0,e&&(i&&i.exports!==h&&i.exports!==m[e]?m[e]=i.exports:s===h&&u||(m[e]=s))}else e&&(m[e]=n)},t=n=s=function(e,t,n,r,i){if("string"==typeof e)return g[e]?g[e](t):D(f(e,S(t)).f);if(!e.splice){if((y=e).deps&&s(y.deps,y.callback),!t)return;t.splice?(e=t,t=n,n=null):e=h}return t=t||function(){},"function"==typeof n&&(n=r,r=i),r?o(h,e,t,n):setTimeout(function(){o(h,e,t,n)},4),s},s.config=function(e){return s(e)},t._defined=m,(r=function(e,t,n){if("string"!=typeof e)throw new Error("See almond README: incorrect module build, no module name");t.splice||(n=t,t=[]),w(m,e)||w(v,e)||(v[e]=[e,t,n])}).amd={jQuery:!0},e.requirejs=t,e.require=n,e.define=r),e.define("almond",function(){}),e.define("jquery",[],function(){var e=u||$;return null==e&&console&&console.error&&console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."),e}),e.define("select2/utils",["jquery"],function(o){var i={};function u(e){var t=e.prototype,n=[];for(var r in t){"function"==typeof t[r]&&"constructor"!==r&&n.push(r)}return n}i.Extend=function(e,t){var n={}.hasOwnProperty;function r(){this.constructor=e}for(var i in t)n.call(t,i)&&(e[i]=t[i]);return r.prototype=t.prototype,e.prototype=new r,e.__super__=t.prototype,e},i.Decorate=function(r,i){var e=u(i),t=u(r);function o(){var e=Array.prototype.unshift,t=i.prototype.constructor.length,n=r.prototype.constructor;0<t&&(e.call(arguments,r.prototype.constructor),n=i.prototype.constructor),n.apply(this,arguments)}i.displayName=r.displayName,o.prototype=new function(){this.constructor=o};for(var n=0;n<t.length;n++){var s=t[n];o.prototype[s]=r.prototype[s]}function a(e){var t=function(){};e in o.prototype&&(t=o.prototype[e]);var n=i.prototype[e];return function(){return Array.prototype.unshift.call(arguments,t),n.apply(this,arguments)}}for(var l=0;l<e.length;l++){var c=e[l];o.prototype[c]=a(c)}return o};function e(){this.listeners={}}e.prototype.on=function(e,t){this.listeners=this.listeners||{},e in this.listeners?this.listeners[e].push(t):this.listeners[e]=[t]},e.prototype.trigger=function(e){var t=Array.prototype.slice,n=t.call(arguments,1);this.listeners=this.listeners||{},null==n&&(n=[]),0===n.length&&n.push({}),(n[0]._type=e)in this.listeners&&this.invoke(this.listeners[e],t.call(arguments,1)),"*"in this.listeners&&this.invoke(this.listeners["*"],arguments)},e.prototype.invoke=function(e,t){for(var n=0,r=e.length;n<r;n++)e[n].apply(this,t)},i.Observable=e,i.generateChars=function(e){for(var t="",n=0;n<e;n++){t+=Math.floor(36*Math.random()).toString(36)}return t},i.bind=function(e,t){return function(){e.apply(t,arguments)}},i._convertData=function(e){for(var t in e){var n=t.split("-"),r=e;if(1!==n.length){for(var i=0;i<n.length;i++){var o=n[i];(o=o.substring(0,1).toLowerCase()+o.substring(1))in r||(r[o]={}),i==n.length-1&&(r[o]=e[t]),r=r[o]}delete e[t]}}return e},i.hasScroll=function(e,t){var n=o(t),r=t.style.overflowX,i=t.style.overflowY;return(r!==i||"hidden"!==i&&"visible"!==i)&&("scroll"===r||"scroll"===i||(n.innerHeight()<t.scrollHeight||n.innerWidth()<t.scrollWidth))},i.escapeMarkup=function(e){var t={"\\":"&#92;","&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#47;"};return"string"!=typeof e?e:String(e).replace(/[&<>"'\/\\]/g,function(e){return t[e]})},i.appendMany=function(e,t){if("1.7"===o.fn.jquery.substr(0,3)){var n=o();o.map(t,function(e){n=n.add(e)}),t=n}e.append(t)},i.__cache={};var n=0;return i.GetUniqueElementId=function(e){var t=e.getAttribute("data-select2-id");return null==t&&(e.id?(t=e.id,e.setAttribute("data-select2-id",t)):(e.setAttribute("data-select2-id",++n),t=n.toString())),t},i.StoreData=function(e,t,n){var r=i.GetUniqueElementId(e);i.__cache[r]||(i.__cache[r]={}),i.__cache[r][t]=n},i.GetData=function(e,t){var n=i.GetUniqueElementId(e);return t?i.__cache[n]&&null!=i.__cache[n][t]?i.__cache[n][t]:o(e).data(t):i.__cache[n]},i.RemoveData=function(e){var t=i.GetUniqueElementId(e);null!=i.__cache[t]&&delete i.__cache[t],e.removeAttribute("data-select2-id")},i}),e.define("select2/results",["jquery","./utils"],function(h,f){function r(e,t,n){this.$element=e,this.data=n,this.options=t,r.__super__.constructor.call(this)}return f.Extend(r,f.Observable),r.prototype.render=function(){var e=h('<ul class="select2-results__options" role="listbox"></ul>');return this.options.get("multiple")&&e.attr("aria-multiselectable","true"),this.$results=e},r.prototype.clear=function(){this.$results.empty()},r.prototype.displayMessage=function(e){var t=this.options.get("escapeMarkup");this.clear(),this.hideLoading();var n=h('<li role="alert" aria-live="assertive" class="select2-results__option"></li>'),r=this.options.get("translations").get(e.message);n.append(t(r(e.args))),n[0].className+=" select2-results__message",this.$results.append(n)},r.prototype.hideMessages=function(){this.$results.find(".select2-results__message").remove()},r.prototype.append=function(e){this.hideLoading();var t=[];if(null!=e.results&&0!==e.results.length){e.results=this.sort(e.results);for(var n=0;n<e.results.length;n++){var r=e.results[n],i=this.option(r);t.push(i)}this.$results.append(t)}else 0===this.$results.children().length&&this.trigger("results:message",{message:"noResults"})},r.prototype.position=function(e,t){t.find(".select2-results").append(e)},r.prototype.sort=function(e){return this.options.get("sorter")(e)},r.prototype.highlightFirstItem=function(){var e=this.$results.find(".select2-results__option[aria-selected]"),t=e.filter("[aria-selected=true]");0<t.length?t.first().trigger("mouseenter"):e.first().trigger("mouseenter"),this.ensureHighlightVisible()},r.prototype.setClasses=function(){var t=this;this.data.current(function(e){var r=h.map(e,function(e){return e.id.toString()});t.$results.find(".select2-results__option[aria-selected]").each(function(){var e=h(this),t=f.GetData(this,"data"),n=""+t.id;null!=t.element&&t.element.selected||null==t.element&&-1<h.inArray(n,r)?e.attr("aria-selected","true"):e.attr("aria-selected","false")})})},r.prototype.showLoading=function(e){this.hideLoading();var t={disabled:!0,loading:!0,text:this.options.get("translations").get("searching")(e)},n=this.option(t);n.className+=" loading-results",this.$results.prepend(n)},r.prototype.hideLoading=function(){this.$results.find(".loading-results").remove()},r.prototype.option=function(e){var t=document.createElement("li");t.className="select2-results__option";var n={role:"option","aria-selected":"false"},r=window.Element.prototype.matches||window.Element.prototype.msMatchesSelector||window.Element.prototype.webkitMatchesSelector;for(var i in(null!=e.element&&r.call(e.element,":disabled")||null==e.element&&e.disabled)&&(delete n["aria-selected"],n["aria-disabled"]="true"),null==e.id&&delete n["aria-selected"],null!=e._resultId&&(t.id=e._resultId),e.title&&(t.title=e.title),e.children&&(n.role="group",n["aria-label"]=e.text,delete n["aria-selected"]),n){var o=n[i];t.setAttribute(i,o)}if(e.children){var s=h(t),a=document.createElement("strong");a.className="select2-results__group";h(a);this.template(e,a);for(var l=[],c=0;c<e.children.length;c++){var u=e.children[c],d=this.option(u);l.push(d)}var p=h("<ul></ul>",{class:"select2-results__options select2-results__options--nested"});p.append(l),s.append(a),s.append(p)}else this.template(e,t);return f.StoreData(t,"data",e),t},r.prototype.bind=function(t,e){var l=this,n=t.id+"-results";this.$results.attr("id",n),t.on("results:all",function(e){l.clear(),l.append(e.data),t.isOpen()&&(l.setClasses(),l.highlightFirstItem())}),t.on("results:append",function(e){l.append(e.data),t.isOpen()&&l.setClasses()}),t.on("query",function(e){l.hideMessages(),l.showLoading(e)}),t.on("select",function(){t.isOpen()&&(l.setClasses(),l.options.get("scrollAfterSelect")&&l.highlightFirstItem())}),t.on("unselect",function(){t.isOpen()&&(l.setClasses(),l.options.get("scrollAfterSelect")&&l.highlightFirstItem())}),t.on("open",function(){l.$results.attr("aria-expanded","true"),l.$results.attr("aria-hidden","false"),l.setClasses(),l.ensureHighlightVisible()}),t.on("close",function(){l.$results.attr("aria-expanded","false"),l.$results.attr("aria-hidden","true"),l.$results.removeAttr("aria-activedescendant")}),t.on("results:toggle",function(){var e=l.getHighlightedResults();0!==e.length&&e.trigger("mouseup")}),t.on("results:select",function(){var e=l.getHighlightedResults();if(0!==e.length){var t=f.GetData(e[0],"data");"true"==e.attr("aria-selected")?l.trigger("close",{}):l.trigger("select",{data:t})}}),t.on("results:previous",function(){var e=l.getHighlightedResults(),t=l.$results.find("[aria-selected]"),n=t.index(e);if(!(n<=0)){var r=n-1;0===e.length&&(r=0);var i=t.eq(r);i.trigger("mouseenter");var o=l.$results.offset().top,s=i.offset().top,a=l.$results.scrollTop()+(s-o);0===r?l.$results.scrollTop(0):s-o<0&&l.$results.scrollTop(a)}}),t.on("results:next",function(){var e=l.getHighlightedResults(),t=l.$results.find("[aria-selected]"),n=t.index(e)+1;if(!(n>=t.length)){var r=t.eq(n);r.trigger("mouseenter");var i=l.$results.offset().top+l.$results.outerHeight(!1),o=r.offset().top+r.outerHeight(!1),s=l.$results.scrollTop()+o-i;0===n?l.$results.scrollTop(0):i<o&&l.$results.scrollTop(s)}}),t.on("results:focus",function(e){e.element.addClass("select2-results__option--highlighted")}),t.on("results:message",function(e){l.displayMessage(e)}),h.fn.mousewheel&&this.$results.on("mousewheel",function(e){var t=l.$results.scrollTop(),n=l.$results.get(0).scrollHeight-t+e.deltaY,r=0<e.deltaY&&t-e.deltaY<=0,i=e.deltaY<0&&n<=l.$results.height();r?(l.$results.scrollTop(0),e.preventDefault(),e.stopPropagation()):i&&(l.$results.scrollTop(l.$results.get(0).scrollHeight-l.$results.height()),e.preventDefault(),e.stopPropagation())}),this.$results.on("mouseup",".select2-results__option[aria-selected]",function(e){var t=h(this),n=f.GetData(this,"data");"true"!==t.attr("aria-selected")?l.trigger("select",{originalEvent:e,data:n}):l.options.get("multiple")?l.trigger("unselect",{originalEvent:e,data:n}):l.trigger("close",{})}),this.$results.on("mouseenter",".select2-results__option[aria-selected]",function(e){var t=f.GetData(this,"data");l.getHighlightedResults().removeClass("select2-results__option--highlighted"),l.trigger("results:focus",{data:t,element:h(this)})})},r.prototype.getHighlightedResults=function(){return this.$results.find(".select2-results__option--highlighted")},r.prototype.destroy=function(){this.$results.remove()},r.prototype.ensureHighlightVisible=function(){var e=this.getHighlightedResults();if(0!==e.length){var t=this.$results.find("[aria-selected]").index(e),n=this.$results.offset().top,r=e.offset().top,i=this.$results.scrollTop()+(r-n),o=r-n;i-=2*e.outerHeight(!1),t<=2?this.$results.scrollTop(0):(o>this.$results.outerHeight()||o<0)&&this.$results.scrollTop(i)}},r.prototype.template=function(e,t){var n=this.options.get("templateResult"),r=this.options.get("escapeMarkup"),i=n(e,t);null==i?t.style.display="none":"string"==typeof i?t.innerHTML=r(i):h(t).append(i)},r}),e.define("select2/keys",[],function(){return{BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46}}),e.define("select2/selection/base",["jquery","../utils","../keys"],function(n,r,i){function o(e,t){this.$element=e,this.options=t,o.__super__.constructor.call(this)}return r.Extend(o,r.Observable),o.prototype.render=function(){var e=n('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');return this._tabindex=0,null!=r.GetData(this.$element[0],"old-tabindex")?this._tabindex=r.GetData(this.$element[0],"old-tabindex"):null!=this.$element.attr("tabindex")&&(this._tabindex=this.$element.attr("tabindex")),e.attr("title",this.$element.attr("title")),e.attr("tabindex",this._tabindex),e.attr("aria-disabled","false"),this.$selection=e},o.prototype.bind=function(e,t){var n=this,r=e.id+"-results";this.container=e,this.$selection.on("focus",function(e){n.trigger("focus",e)}),this.$selection.on("blur",function(e){n._handleBlur(e)}),this.$selection.on("keydown",function(e){n.trigger("keypress",e),e.which===i.SPACE&&e.preventDefault()}),e.on("results:focus",function(e){n.$selection.attr("aria-activedescendant",e.data._resultId)}),e.on("selection:update",function(e){n.update(e.data)}),e.on("open",function(){n.$selection.attr("aria-expanded","true"),n.$selection.attr("aria-owns",r),n._attachCloseHandler(e)}),e.on("close",function(){n.$selection.attr("aria-expanded","false"),n.$selection.removeAttr("aria-activedescendant"),n.$selection.removeAttr("aria-owns"),n.$selection.trigger("focus"),n._detachCloseHandler(e)}),e.on("enable",function(){n.$selection.attr("tabindex",n._tabindex),n.$selection.attr("aria-disabled","false")}),e.on("disable",function(){n.$selection.attr("tabindex","-1"),n.$selection.attr("aria-disabled","true")})},o.prototype._handleBlur=function(e){var t=this;window.setTimeout(function(){document.activeElement==t.$selection[0]||n.contains(t.$selection[0],document.activeElement)||t.trigger("blur",e)},1)},o.prototype._attachCloseHandler=function(e){n(document.body).on("mousedown.select2."+e.id,function(e){var t=n(e.target).closest(".select2");n(".select2.select2-container--open").each(function(){this!=t[0]&&r.GetData(this,"element").select2("close")})})},o.prototype._detachCloseHandler=function(e){n(document.body).off("mousedown.select2."+e.id)},o.prototype.position=function(e,t){t.find(".selection").append(e)},o.prototype.destroy=function(){this._detachCloseHandler(this.container)},o.prototype.update=function(e){throw new Error("The `update` method must be defined in child classes.")},o.prototype.isEnabled=function(){return!this.isDisabled()},o.prototype.isDisabled=function(){return this.options.get("disabled")},o}),e.define("select2/selection/single",["jquery","./base","../utils","../keys"],function(e,t,n,r){function i(){i.__super__.constructor.apply(this,arguments)}return n.Extend(i,t),i.prototype.render=function(){var e=i.__super__.render.call(this);return e.addClass("select2-selection--single"),e.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'),e},i.prototype.bind=function(t,e){var n=this;i.__super__.bind.apply(this,arguments);var r=t.id+"-container";this.$selection.find(".select2-selection__rendered").attr("id",r).attr("role","textbox").attr("aria-readonly","true"),this.$selection.attr("aria-labelledby",r),this.$selection.on("mousedown",function(e){1===e.which&&n.trigger("toggle",{originalEvent:e})}),this.$selection.on("focus",function(e){}),this.$selection.on("blur",function(e){}),t.on("focus",function(e){t.isOpen()||n.$selection.trigger("focus")})},i.prototype.clear=function(){var e=this.$selection.find(".select2-selection__rendered");e.empty(),e.removeAttr("title")},i.prototype.display=function(e,t){var n=this.options.get("templateSelection");return this.options.get("escapeMarkup")(n(e,t))},i.prototype.selectionContainer=function(){return e("<span></span>")},i.prototype.update=function(e){if(0!==e.length){var t=e[0],n=this.$selection.find(".select2-selection__rendered"),r=this.display(t,n);n.empty().append(r);var i=t.title||t.text;i?n.attr("title",i):n.removeAttr("title")}else this.clear()},i}),e.define("select2/selection/multiple",["jquery","./base","../utils"],function(i,e,l){function n(e,t){n.__super__.constructor.apply(this,arguments)}return l.Extend(n,e),n.prototype.render=function(){var e=n.__super__.render.call(this);return e.addClass("select2-selection--multiple"),e.html('<ul class="select2-selection__rendered"></ul>'),e},n.prototype.bind=function(e,t){var r=this;n.__super__.bind.apply(this,arguments),this.$selection.on("click",function(e){r.trigger("toggle",{originalEvent:e})}),this.$selection.on("click",".select2-selection__choice__remove",function(e){if(!r.isDisabled()){var t=i(this).parent(),n=l.GetData(t[0],"data");r.trigger("unselect",{originalEvent:e,data:n})}})},n.prototype.clear=function(){var e=this.$selection.find(".select2-selection__rendered");e.empty(),e.removeAttr("title")},n.prototype.display=function(e,t){var n=this.options.get("templateSelection");return this.options.get("escapeMarkup")(n(e,t))},n.prototype.selectionContainer=function(){return i('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>')},n.prototype.update=function(e){if(this.clear(),0!==e.length){for(var t=[],n=0;n<e.length;n++){var r=e[n],i=this.selectionContainer(),o=this.display(r,i);i.append(o);var s=r.title||r.text;s&&i.attr("title",s),l.StoreData(i[0],"data",r),t.push(i)}var a=this.$selection.find(".select2-selection__rendered");l.appendMany(a,t)}},n}),e.define("select2/selection/placeholder",["../utils"],function(e){function t(e,t,n){this.placeholder=this.normalizePlaceholder(n.get("placeholder")),e.call(this,t,n)}return t.prototype.normalizePlaceholder=function(e,t){return"string"==typeof t&&(t={id:"",text:t}),t},t.prototype.createPlaceholder=function(e,t){var n=this.selectionContainer();return n.html(this.display(t)),n.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"),n},t.prototype.update=function(e,t){var n=1==t.length&&t[0].id!=this.placeholder.id;if(1<t.length||n)return e.call(this,t);this.clear();var r=this.createPlaceholder(this.placeholder);this.$selection.find(".select2-selection__rendered").append(r)},t}),e.define("select2/selection/allowClear",["jquery","../keys","../utils"],function(i,r,a){function e(){}return e.prototype.bind=function(e,t,n){var r=this;e.call(this,t,n),null==this.placeholder&&this.options.get("debug")&&window.console&&console.error&&console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."),this.$selection.on("mousedown",".select2-selection__clear",function(e){r._handleClear(e)}),t.on("keypress",function(e){r._handleKeyboardClear(e,t)})},e.prototype._handleClear=function(e,t){if(!this.isDisabled()){var n=this.$selection.find(".select2-selection__clear");if(0!==n.length){t.stopPropagation();var r=a.GetData(n[0],"data"),i=this.$element.val();this.$element.val(this.placeholder.id);var o={data:r};if(this.trigger("clear",o),o.prevented)this.$element.val(i);else{for(var s=0;s<r.length;s++)if(o={data:r[s]},this.trigger("unselect",o),o.prevented)return void this.$element.val(i);this.$element.trigger("input").trigger("change"),this.trigger("toggle",{})}}}},e.prototype._handleKeyboardClear=function(e,t,n){n.isOpen()||t.which!=r.DELETE&&t.which!=r.BACKSPACE||this._handleClear(t)},e.prototype.update=function(e,t){if(e.call(this,t),!(0<this.$selection.find(".select2-selection__placeholder").length||0===t.length)){var n=this.options.get("translations").get("removeAllItems"),r=i('<span class="select2-selection__clear" title="'+n()+'">&times;</span>');a.StoreData(r[0],"data",t),this.$selection.find(".select2-selection__rendered").prepend(r)}},e}),e.define("select2/selection/search",["jquery","../utils","../keys"],function(r,a,l){function e(e,t,n){e.call(this,t,n)}return e.prototype.render=function(e){var t=r('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></li>');this.$searchContainer=t,this.$search=t.find("input");var n=e.call(this);return this._transferTabIndex(),n},e.prototype.bind=function(e,t,n){var r=this,i=t.id+"-results";e.call(this,t,n),t.on("open",function(){r.$search.attr("aria-controls",i),r.$search.trigger("focus")}),t.on("close",function(){r.$search.val(""),r.$search.removeAttr("aria-controls"),r.$search.removeAttr("aria-activedescendant"),r.$search.trigger("focus")}),t.on("enable",function(){r.$search.prop("disabled",!1),r._transferTabIndex()}),t.on("disable",function(){r.$search.prop("disabled",!0)}),t.on("focus",function(e){r.$search.trigger("focus")}),t.on("results:focus",function(e){e.data._resultId?r.$search.attr("aria-activedescendant",e.data._resultId):r.$search.removeAttr("aria-activedescendant")}),this.$selection.on("focusin",".select2-search--inline",function(e){r.trigger("focus",e)}),this.$selection.on("focusout",".select2-search--inline",function(e){r._handleBlur(e)}),this.$selection.on("keydown",".select2-search--inline",function(e){if(e.stopPropagation(),r.trigger("keypress",e),r._keyUpPrevented=e.isDefaultPrevented(),e.which===l.BACKSPACE&&""===r.$search.val()){var t=r.$searchContainer.prev(".select2-selection__choice");if(0<t.length){var n=a.GetData(t[0],"data");r.searchRemoveChoice(n),e.preventDefault()}}}),this.$selection.on("click",".select2-search--inline",function(e){r.$search.val()&&e.stopPropagation()});var o=document.documentMode,s=o&&o<=11;this.$selection.on("input.searchcheck",".select2-search--inline",function(e){s?r.$selection.off("input.search input.searchcheck"):r.$selection.off("keyup.search")}),this.$selection.on("keyup.search input.search",".select2-search--inline",function(e){if(s&&"input"===e.type)r.$selection.off("input.search input.searchcheck");else{var t=e.which;t!=l.SHIFT&&t!=l.CTRL&&t!=l.ALT&&t!=l.TAB&&r.handleSearch(e)}})},e.prototype._transferTabIndex=function(e){this.$search.attr("tabindex",this.$selection.attr("tabindex")),this.$selection.attr("tabindex","-1")},e.prototype.createPlaceholder=function(e,t){this.$search.attr("placeholder",t.text)},e.prototype.update=function(e,t){var n=this.$search[0]==document.activeElement;this.$search.attr("placeholder",""),e.call(this,t),this.$selection.find(".select2-selection__rendered").append(this.$searchContainer),this.resizeSearch(),n&&this.$search.trigger("focus")},e.prototype.handleSearch=function(){if(this.resizeSearch(),!this._keyUpPrevented){var e=this.$search.val();this.trigger("query",{term:e})}this._keyUpPrevented=!1},e.prototype.searchRemoveChoice=function(e,t){this.trigger("unselect",{data:t}),this.$search.val(t.text),this.handleSearch()},e.prototype.resizeSearch=function(){this.$search.css("width","25px");var e="";""!==this.$search.attr("placeholder")?e=this.$selection.find(".select2-selection__rendered").width():e=.75*(this.$search.val().length+1)+"em";this.$search.css("width",e)},e}),e.define("select2/selection/eventRelay",["jquery"],function(s){function e(){}return e.prototype.bind=function(e,t,n){var r=this,i=["open","opening","close","closing","select","selecting","unselect","unselecting","clear","clearing"],o=["opening","closing","selecting","unselecting","clearing"];e.call(this,t,n),t.on("*",function(e,t){if(-1!==s.inArray(e,i)){t=t||{};var n=s.Event("select2:"+e,{params:t});r.$element.trigger(n),-1!==s.inArray(e,o)&&(t.prevented=n.isDefaultPrevented())}})},e}),e.define("select2/translation",["jquery","require"],function(t,n){function r(e){this.dict=e||{}}return r.prototype.all=function(){return this.dict},r.prototype.get=function(e){return this.dict[e]},r.prototype.extend=function(e){this.dict=t.extend({},e.all(),this.dict)},r._cache={},r.loadPath=function(e){if(!(e in r._cache)){var t=n(e);r._cache[e]=t}return new r(r._cache[e])},r}),e.define("select2/diacritics",[],function(){return{"Ⓐ":"A","Ａ":"A","À":"A","Á":"A","Â":"A","Ầ":"A","Ấ":"A","Ẫ":"A","Ẩ":"A","Ã":"A","Ā":"A","Ă":"A","Ằ":"A","Ắ":"A","Ẵ":"A","Ẳ":"A","Ȧ":"A","Ǡ":"A","Ä":"A","Ǟ":"A","Ả":"A","Å":"A","Ǻ":"A","Ǎ":"A","Ȁ":"A","Ȃ":"A","Ạ":"A","Ậ":"A","Ặ":"A","Ḁ":"A","Ą":"A","Ⱥ":"A","Ɐ":"A","Ꜳ":"AA","Æ":"AE","Ǽ":"AE","Ǣ":"AE","Ꜵ":"AO","Ꜷ":"AU","Ꜹ":"AV","Ꜻ":"AV","Ꜽ":"AY","Ⓑ":"B","Ｂ":"B","Ḃ":"B","Ḅ":"B","Ḇ":"B","Ƀ":"B","Ƃ":"B","Ɓ":"B","Ⓒ":"C","Ｃ":"C","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","Ç":"C","Ḉ":"C","Ƈ":"C","Ȼ":"C","Ꜿ":"C","Ⓓ":"D","Ｄ":"D","Ḋ":"D","Ď":"D","Ḍ":"D","Ḑ":"D","Ḓ":"D","Ḏ":"D","Đ":"D","Ƌ":"D","Ɗ":"D","Ɖ":"D","Ꝺ":"D","Ǳ":"DZ","Ǆ":"DZ","ǲ":"Dz","ǅ":"Dz","Ⓔ":"E","Ｅ":"E","È":"E","É":"E","Ê":"E","Ề":"E","Ế":"E","Ễ":"E","Ể":"E","Ẽ":"E","Ē":"E","Ḕ":"E","Ḗ":"E","Ĕ":"E","Ė":"E","Ë":"E","Ẻ":"E","Ě":"E","Ȅ":"E","Ȇ":"E","Ẹ":"E","Ệ":"E","Ȩ":"E","Ḝ":"E","Ę":"E","Ḙ":"E","Ḛ":"E","Ɛ":"E","Ǝ":"E","Ⓕ":"F","Ｆ":"F","Ḟ":"F","Ƒ":"F","Ꝼ":"F","Ⓖ":"G","Ｇ":"G","Ǵ":"G","Ĝ":"G","Ḡ":"G","Ğ":"G","Ġ":"G","Ǧ":"G","Ģ":"G","Ǥ":"G","Ɠ":"G","Ꞡ":"G","Ᵹ":"G","Ꝿ":"G","Ⓗ":"H","Ｈ":"H","Ĥ":"H","Ḣ":"H","Ḧ":"H","Ȟ":"H","Ḥ":"H","Ḩ":"H","Ḫ":"H","Ħ":"H","Ⱨ":"H","Ⱶ":"H","Ɥ":"H","Ⓘ":"I","Ｉ":"I","Ì":"I","Í":"I","Î":"I","Ĩ":"I","Ī":"I","Ĭ":"I","İ":"I","Ï":"I","Ḯ":"I","Ỉ":"I","Ǐ":"I","Ȉ":"I","Ȋ":"I","Ị":"I","Į":"I","Ḭ":"I","Ɨ":"I","Ⓙ":"J","Ｊ":"J","Ĵ":"J","Ɉ":"J","Ⓚ":"K","Ｋ":"K","Ḱ":"K","Ǩ":"K","Ḳ":"K","Ķ":"K","Ḵ":"K","Ƙ":"K","Ⱪ":"K","Ꝁ":"K","Ꝃ":"K","Ꝅ":"K","Ꞣ":"K","Ⓛ":"L","Ｌ":"L","Ŀ":"L","Ĺ":"L","Ľ":"L","Ḷ":"L","Ḹ":"L","Ļ":"L","Ḽ":"L","Ḻ":"L","Ł":"L","Ƚ":"L","Ɫ":"L","Ⱡ":"L","Ꝉ":"L","Ꝇ":"L","Ꞁ":"L","Ǉ":"LJ","ǈ":"Lj","Ⓜ":"M","Ｍ":"M","Ḿ":"M","Ṁ":"M","Ṃ":"M","Ɱ":"M","Ɯ":"M","Ⓝ":"N","Ｎ":"N","Ǹ":"N","Ń":"N","Ñ":"N","Ṅ":"N","Ň":"N","Ṇ":"N","Ņ":"N","Ṋ":"N","Ṉ":"N","Ƞ":"N","Ɲ":"N","Ꞑ":"N","Ꞥ":"N","Ǌ":"NJ","ǋ":"Nj","Ⓞ":"O","Ｏ":"O","Ò":"O","Ó":"O","Ô":"O","Ồ":"O","Ố":"O","Ỗ":"O","Ổ":"O","Õ":"O","Ṍ":"O","Ȭ":"O","Ṏ":"O","Ō":"O","Ṑ":"O","Ṓ":"O","Ŏ":"O","Ȯ":"O","Ȱ":"O","Ö":"O","Ȫ":"O","Ỏ":"O","Ő":"O","Ǒ":"O","Ȍ":"O","Ȏ":"O","Ơ":"O","Ờ":"O","Ớ":"O","Ỡ":"O","Ở":"O","Ợ":"O","Ọ":"O","Ộ":"O","Ǫ":"O","Ǭ":"O","Ø":"O","Ǿ":"O","Ɔ":"O","Ɵ":"O","Ꝋ":"O","Ꝍ":"O","Œ":"OE","Ƣ":"OI","Ꝏ":"OO","Ȣ":"OU","Ⓟ":"P","Ｐ":"P","Ṕ":"P","Ṗ":"P","Ƥ":"P","Ᵽ":"P","Ꝑ":"P","Ꝓ":"P","Ꝕ":"P","Ⓠ":"Q","Ｑ":"Q","Ꝗ":"Q","Ꝙ":"Q","Ɋ":"Q","Ⓡ":"R","Ｒ":"R","Ŕ":"R","Ṙ":"R","Ř":"R","Ȑ":"R","Ȓ":"R","Ṛ":"R","Ṝ":"R","Ŗ":"R","Ṟ":"R","Ɍ":"R","Ɽ":"R","Ꝛ":"R","Ꞧ":"R","Ꞃ":"R","Ⓢ":"S","Ｓ":"S","ẞ":"S","Ś":"S","Ṥ":"S","Ŝ":"S","Ṡ":"S","Š":"S","Ṧ":"S","Ṣ":"S","Ṩ":"S","Ș":"S","Ş":"S","Ȿ":"S","Ꞩ":"S","Ꞅ":"S","Ⓣ":"T","Ｔ":"T","Ṫ":"T","Ť":"T","Ṭ":"T","Ț":"T","Ţ":"T","Ṱ":"T","Ṯ":"T","Ŧ":"T","Ƭ":"T","Ʈ":"T","Ⱦ":"T","Ꞇ":"T","Ꜩ":"TZ","Ⓤ":"U","Ｕ":"U","Ù":"U","Ú":"U","Û":"U","Ũ":"U","Ṹ":"U","Ū":"U","Ṻ":"U","Ŭ":"U","Ü":"U","Ǜ":"U","Ǘ":"U","Ǖ":"U","Ǚ":"U","Ủ":"U","Ů":"U","Ű":"U","Ǔ":"U","Ȕ":"U","Ȗ":"U","Ư":"U","Ừ":"U","Ứ":"U","Ữ":"U","Ử":"U","Ự":"U","Ụ":"U","Ṳ":"U","Ų":"U","Ṷ":"U","Ṵ":"U","Ʉ":"U","Ⓥ":"V","Ｖ":"V","Ṽ":"V","Ṿ":"V","Ʋ":"V","Ꝟ":"V","Ʌ":"V","Ꝡ":"VY","Ⓦ":"W","Ｗ":"W","Ẁ":"W","Ẃ":"W","Ŵ":"W","Ẇ":"W","Ẅ":"W","Ẉ":"W","Ⱳ":"W","Ⓧ":"X","Ｘ":"X","Ẋ":"X","Ẍ":"X","Ⓨ":"Y","Ｙ":"Y","Ỳ":"Y","Ý":"Y","Ŷ":"Y","Ỹ":"Y","Ȳ":"Y","Ẏ":"Y","Ÿ":"Y","Ỷ":"Y","Ỵ":"Y","Ƴ":"Y","Ɏ":"Y","Ỿ":"Y","Ⓩ":"Z","Ｚ":"Z","Ź":"Z","Ẑ":"Z","Ż":"Z","Ž":"Z","Ẓ":"Z","Ẕ":"Z","Ƶ":"Z","Ȥ":"Z","Ɀ":"Z","Ⱬ":"Z","Ꝣ":"Z","ⓐ":"a","ａ":"a","ẚ":"a","à":"a","á":"a","â":"a","ầ":"a","ấ":"a","ẫ":"a","ẩ":"a","ã":"a","ā":"a","ă":"a","ằ":"a","ắ":"a","ẵ":"a","ẳ":"a","ȧ":"a","ǡ":"a","ä":"a","ǟ":"a","ả":"a","å":"a","ǻ":"a","ǎ":"a","ȁ":"a","ȃ":"a","ạ":"a","ậ":"a","ặ":"a","ḁ":"a","ą":"a","ⱥ":"a","ɐ":"a","ꜳ":"aa","æ":"ae","ǽ":"ae","ǣ":"ae","ꜵ":"ao","ꜷ":"au","ꜹ":"av","ꜻ":"av","ꜽ":"ay","ⓑ":"b","ｂ":"b","ḃ":"b","ḅ":"b","ḇ":"b","ƀ":"b","ƃ":"b","ɓ":"b","ⓒ":"c","ｃ":"c","ć":"c","ĉ":"c","ċ":"c","č":"c","ç":"c","ḉ":"c","ƈ":"c","ȼ":"c","ꜿ":"c","ↄ":"c","ⓓ":"d","ｄ":"d","ḋ":"d","ď":"d","ḍ":"d","ḑ":"d","ḓ":"d","ḏ":"d","đ":"d","ƌ":"d","ɖ":"d","ɗ":"d","ꝺ":"d","ǳ":"dz","ǆ":"dz","ⓔ":"e","ｅ":"e","è":"e","é":"e","ê":"e","ề":"e","ế":"e","ễ":"e","ể":"e","ẽ":"e","ē":"e","ḕ":"e","ḗ":"e","ĕ":"e","ė":"e","ë":"e","ẻ":"e","ě":"e","ȅ":"e","ȇ":"e","ẹ":"e","ệ":"e","ȩ":"e","ḝ":"e","ę":"e","ḙ":"e","ḛ":"e","ɇ":"e","ɛ":"e","ǝ":"e","ⓕ":"f","ｆ":"f","ḟ":"f","ƒ":"f","ꝼ":"f","ⓖ":"g","ｇ":"g","ǵ":"g","ĝ":"g","ḡ":"g","ğ":"g","ġ":"g","ǧ":"g","ģ":"g","ǥ":"g","ɠ":"g","ꞡ":"g","ᵹ":"g","ꝿ":"g","ⓗ":"h","ｈ":"h","ĥ":"h","ḣ":"h","ḧ":"h","ȟ":"h","ḥ":"h","ḩ":"h","ḫ":"h","ẖ":"h","ħ":"h","ⱨ":"h","ⱶ":"h","ɥ":"h","ƕ":"hv","ⓘ":"i","ｉ":"i","ì":"i","í":"i","î":"i","ĩ":"i","ī":"i","ĭ":"i","ï":"i","ḯ":"i","ỉ":"i","ǐ":"i","ȉ":"i","ȋ":"i","ị":"i","į":"i","ḭ":"i","ɨ":"i","ı":"i","ⓙ":"j","ｊ":"j","ĵ":"j","ǰ":"j","ɉ":"j","ⓚ":"k","ｋ":"k","ḱ":"k","ǩ":"k","ḳ":"k","ķ":"k","ḵ":"k","ƙ":"k","ⱪ":"k","ꝁ":"k","ꝃ":"k","ꝅ":"k","ꞣ":"k","ⓛ":"l","ｌ":"l","ŀ":"l","ĺ":"l","ľ":"l","ḷ":"l","ḹ":"l","ļ":"l","ḽ":"l","ḻ":"l","ſ":"l","ł":"l","ƚ":"l","ɫ":"l","ⱡ":"l","ꝉ":"l","ꞁ":"l","ꝇ":"l","ǉ":"lj","ⓜ":"m","ｍ":"m","ḿ":"m","ṁ":"m","ṃ":"m","ɱ":"m","ɯ":"m","ⓝ":"n","ｎ":"n","ǹ":"n","ń":"n","ñ":"n","ṅ":"n","ň":"n","ṇ":"n","ņ":"n","ṋ":"n","ṉ":"n","ƞ":"n","ɲ":"n","ŉ":"n","ꞑ":"n","ꞥ":"n","ǌ":"nj","ⓞ":"o","ｏ":"o","ò":"o","ó":"o","ô":"o","ồ":"o","ố":"o","ỗ":"o","ổ":"o","õ":"o","ṍ":"o","ȭ":"o","ṏ":"o","ō":"o","ṑ":"o","ṓ":"o","ŏ":"o","ȯ":"o","ȱ":"o","ö":"o","ȫ":"o","ỏ":"o","ő":"o","ǒ":"o","ȍ":"o","ȏ":"o","ơ":"o","ờ":"o","ớ":"o","ỡ":"o","ở":"o","ợ":"o","ọ":"o","ộ":"o","ǫ":"o","ǭ":"o","ø":"o","ǿ":"o","ɔ":"o","ꝋ":"o","ꝍ":"o","ɵ":"o","œ":"oe","ƣ":"oi","ȣ":"ou","ꝏ":"oo","ⓟ":"p","ｐ":"p","ṕ":"p","ṗ":"p","ƥ":"p","ᵽ":"p","ꝑ":"p","ꝓ":"p","ꝕ":"p","ⓠ":"q","ｑ":"q","ɋ":"q","ꝗ":"q","ꝙ":"q","ⓡ":"r","ｒ":"r","ŕ":"r","ṙ":"r","ř":"r","ȑ":"r","ȓ":"r","ṛ":"r","ṝ":"r","ŗ":"r","ṟ":"r","ɍ":"r","ɽ":"r","ꝛ":"r","ꞧ":"r","ꞃ":"r","ⓢ":"s","ｓ":"s","ß":"s","ś":"s","ṥ":"s","ŝ":"s","ṡ":"s","š":"s","ṧ":"s","ṣ":"s","ṩ":"s","ș":"s","ş":"s","ȿ":"s","ꞩ":"s","ꞅ":"s","ẛ":"s","ⓣ":"t","ｔ":"t","ṫ":"t","ẗ":"t","ť":"t","ṭ":"t","ț":"t","ţ":"t","ṱ":"t","ṯ":"t","ŧ":"t","ƭ":"t","ʈ":"t","ⱦ":"t","ꞇ":"t","ꜩ":"tz","ⓤ":"u","ｕ":"u","ù":"u","ú":"u","û":"u","ũ":"u","ṹ":"u","ū":"u","ṻ":"u","ŭ":"u","ü":"u","ǜ":"u","ǘ":"u","ǖ":"u","ǚ":"u","ủ":"u","ů":"u","ű":"u","ǔ":"u","ȕ":"u","ȗ":"u","ư":"u","ừ":"u","ứ":"u","ữ":"u","ử":"u","ự":"u","ụ":"u","ṳ":"u","ų":"u","ṷ":"u","ṵ":"u","ʉ":"u","ⓥ":"v","ｖ":"v","ṽ":"v","ṿ":"v","ʋ":"v","ꝟ":"v","ʌ":"v","ꝡ":"vy","ⓦ":"w","ｗ":"w","ẁ":"w","ẃ":"w","ŵ":"w","ẇ":"w","ẅ":"w","ẘ":"w","ẉ":"w","ⱳ":"w","ⓧ":"x","ｘ":"x","ẋ":"x","ẍ":"x","ⓨ":"y","ｙ":"y","ỳ":"y","ý":"y","ŷ":"y","ỹ":"y","ȳ":"y","ẏ":"y","ÿ":"y","ỷ":"y","ẙ":"y","ỵ":"y","ƴ":"y","ɏ":"y","ỿ":"y","ⓩ":"z","ｚ":"z","ź":"z","ẑ":"z","ż":"z","ž":"z","ẓ":"z","ẕ":"z","ƶ":"z","ȥ":"z","ɀ":"z","ⱬ":"z","ꝣ":"z","Ά":"Α","Έ":"Ε","Ή":"Η","Ί":"Ι","Ϊ":"Ι","Ό":"Ο","Ύ":"Υ","Ϋ":"Υ","Ώ":"Ω","ά":"α","έ":"ε","ή":"η","ί":"ι","ϊ":"ι","ΐ":"ι","ό":"ο","ύ":"υ","ϋ":"υ","ΰ":"υ","ώ":"ω","ς":"σ","’":"'"}}),e.define("select2/data/base",["../utils"],function(r){function n(e,t){n.__super__.constructor.call(this)}return r.Extend(n,r.Observable),n.prototype.current=function(e){throw new Error("The `current` method must be defined in child classes.")},n.prototype.query=function(e,t){throw new Error("The `query` method must be defined in child classes.")},n.prototype.bind=function(e,t){},n.prototype.destroy=function(){},n.prototype.generateResultId=function(e,t){var n=e.id+"-result-";return n+=r.generateChars(4),null!=t.id?n+="-"+t.id.toString():n+="-"+r.generateChars(4),n},n}),e.define("select2/data/select",["./base","../utils","jquery"],function(e,a,l){function n(e,t){this.$element=e,this.options=t,n.__super__.constructor.call(this)}return a.Extend(n,e),n.prototype.current=function(e){var n=[],r=this;this.$element.find(":selected").each(function(){var e=l(this),t=r.item(e);n.push(t)}),e(n)},n.prototype.select=function(i){var o=this;if(i.selected=!0,l(i.element).is("option"))return i.element.selected=!0,void this.$element.trigger("input").trigger("change");if(this.$element.prop("multiple"))this.current(function(e){var t=[];(i=[i]).push.apply(i,e);for(var n=0;n<i.length;n++){var r=i[n].id;-1===l.inArray(r,t)&&t.push(r)}o.$element.val(t),o.$element.trigger("input").trigger("change")});else{var e=i.id;this.$element.val(e),this.$element.trigger("input").trigger("change")}},n.prototype.unselect=function(i){var o=this;if(this.$element.prop("multiple")){if(i.selected=!1,l(i.element).is("option"))return i.element.selected=!1,void this.$element.trigger("input").trigger("change");this.current(function(e){for(var t=[],n=0;n<e.length;n++){var r=e[n].id;r!==i.id&&-1===l.inArray(r,t)&&t.push(r)}o.$element.val(t),o.$element.trigger("input").trigger("change")})}},n.prototype.bind=function(e,t){var n=this;(this.container=e).on("select",function(e){n.select(e.data)}),e.on("unselect",function(e){n.unselect(e.data)})},n.prototype.destroy=function(){this.$element.find("*").each(function(){a.RemoveData(this)})},n.prototype.query=function(r,e){var i=[],o=this;this.$element.children().each(function(){var e=l(this);if(e.is("option")||e.is("optgroup")){var t=o.item(e),n=o.matches(r,t);null!==n&&i.push(n)}}),e({results:i})},n.prototype.addOptions=function(e){a.appendMany(this.$element,e)},n.prototype.option=function(e){var t;e.children?(t=document.createElement("optgroup")).label=e.text:void 0!==(t=document.createElement("option")).textContent?t.textContent=e.text:t.innerText=e.text,void 0!==e.id&&(t.value=e.id),e.disabled&&(t.disabled=!0),e.selected&&(t.selected=!0),e.title&&(t.title=e.title);var n=l(t),r=this._normalizeItem(e);return r.element=t,a.StoreData(t,"data",r),n},n.prototype.item=function(e){var t={};if(null!=(t=a.GetData(e[0],"data")))return t;if(e.is("option"))t={id:e.val(),text:e.text(),disabled:e.prop("disabled"),selected:e.prop("selected"),title:e.prop("title")};else if(e.is("optgroup")){t={text:e.prop("label"),children:[],title:e.prop("title")};for(var n=e.children("option"),r=[],i=0;i<n.length;i++){var o=l(n[i]),s=this.item(o);r.push(s)}t.children=r}return(t=this._normalizeItem(t)).element=e[0],a.StoreData(e[0],"data",t),t},n.prototype._normalizeItem=function(e){e!==Object(e)&&(e={id:e,text:e});return null!=(e=l.extend({},{text:""},e)).id&&(e.id=e.id.toString()),null!=e.text&&(e.text=e.text.toString()),null==e._resultId&&e.id&&null!=this.container&&(e._resultId=this.generateResultId(this.container,e)),l.extend({},{selected:!1,disabled:!1},e)},n.prototype.matches=function(e,t){return this.options.get("matcher")(e,t)},n}),e.define("select2/data/array",["./select","../utils","jquery"],function(e,f,g){function r(e,t){this._dataToConvert=t.get("data")||[],r.__super__.constructor.call(this,e,t)}return f.Extend(r,e),r.prototype.bind=function(e,t){r.__super__.bind.call(this,e,t),this.addOptions(this.convertToOptions(this._dataToConvert))},r.prototype.select=function(n){var e=this.$element.find("option").filter(function(e,t){return t.value==n.id.toString()});0===e.length&&(e=this.option(n),this.addOptions(e)),r.__super__.select.call(this,n)},r.prototype.convertToOptions=function(e){var t=this,n=this.$element.find("option"),r=n.map(function(){return t.item(g(this)).id}).get(),i=[];function o(e){return function(){return g(this).val()==e.id}}for(var s=0;s<e.length;s++){var a=this._normalizeItem(e[s]);if(0<=g.inArray(a.id,r)){var l=n.filter(o(a)),c=this.item(l),u=g.extend(!0,{},a,c),d=this.option(u);l.replaceWith(d)}else{var p=this.option(a);if(a.children){var h=this.convertToOptions(a.children);f.appendMany(p,h)}i.push(p)}}return i},r}),e.define("select2/data/ajax",["./array","../utils","jquery"],function(e,t,o){function n(e,t){this.ajaxOptions=this._applyDefaults(t.get("ajax")),null!=this.ajaxOptions.processResults&&(this.processResults=this.ajaxOptions.processResults),n.__super__.constructor.call(this,e,t)}return t.Extend(n,e),n.prototype._applyDefaults=function(e){var t={data:function(e){return o.extend({},e,{q:e.term})},transport:function(e,t,n){var r=o.ajax(e);return r.then(t),r.fail(n),r}};return o.extend({},t,e,!0)},n.prototype.processResults=function(e){return e},n.prototype.query=function(n,r){var i=this;null!=this._request&&(o.isFunction(this._request.abort)&&this._request.abort(),this._request=null);var t=o.extend({type:"GET"},this.ajaxOptions);function e(){var e=t.transport(t,function(e){var t=i.processResults(e,n);i.options.get("debug")&&window.console&&console.error&&(t&&t.results&&o.isArray(t.results)||console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")),r(t)},function(){"status"in e&&(0===e.status||"0"===e.status)||i.trigger("results:message",{message:"errorLoading"})});i._request=e}"function"==typeof t.url&&(t.url=t.url.call(this.$element,n)),"function"==typeof t.data&&(t.data=t.data.call(this.$element,n)),this.ajaxOptions.delay&&null!=n.term?(this._queryTimeout&&window.clearTimeout(this._queryTimeout),this._queryTimeout=window.setTimeout(e,this.ajaxOptions.delay)):e()},n}),e.define("select2/data/tags",["jquery"],function(u){function e(e,t,n){var r=n.get("tags"),i=n.get("createTag");void 0!==i&&(this.createTag=i);var o=n.get("insertTag");if(void 0!==o&&(this.insertTag=o),e.call(this,t,n),u.isArray(r))for(var s=0;s<r.length;s++){var a=r[s],l=this._normalizeItem(a),c=this.option(l);this.$element.append(c)}}return e.prototype.query=function(e,c,u){var d=this;this._removeOldTags(),null!=c.term&&null==c.page?e.call(this,c,function e(t,n){for(var r=t.results,i=0;i<r.length;i++){var o=r[i],s=null!=o.children&&!e({results:o.children},!0);if((o.text||"").toUpperCase()===(c.term||"").toUpperCase()||s)return!n&&(t.data=r,void u(t))}if(n)return!0;var a=d.createTag(c);if(null!=a){var l=d.option(a);l.attr("data-select2-tag",!0),d.addOptions([l]),d.insertTag(r,a)}t.results=r,u(t)}):e.call(this,c,u)},e.prototype.createTag=function(e,t){var n=u.trim(t.term);return""===n?null:{id:n,text:n}},e.prototype.insertTag=function(e,t,n){t.unshift(n)},e.prototype._removeOldTags=function(e){this.$element.find("option[data-select2-tag]").each(function(){this.selected||u(this).remove()})},e}),e.define("select2/data/tokenizer",["jquery"],function(d){function e(e,t,n){var r=n.get("tokenizer");void 0!==r&&(this.tokenizer=r),e.call(this,t,n)}return e.prototype.bind=function(e,t,n){e.call(this,t,n),this.$search=t.dropdown.$search||t.selection.$search||n.find(".select2-search__field")},e.prototype.query=function(e,t,n){var r=this;t.term=t.term||"";var i=this.tokenizer(t,this.options,function(e){var t=r._normalizeItem(e);if(!r.$element.find("option").filter(function(){return d(this).val()===t.id}).length){var n=r.option(t);n.attr("data-select2-tag",!0),r._removeOldTags(),r.addOptions([n])}!function(e){r.trigger("select",{data:e})}(t)});i.term!==t.term&&(this.$search.length&&(this.$search.val(i.term),this.$search.trigger("focus")),t.term=i.term),e.call(this,t,n)},e.prototype.tokenizer=function(e,t,n,r){for(var i=n.get("tokenSeparators")||[],o=t.term,s=0,a=this.createTag||function(e){return{id:e.term,text:e.term}};s<o.length;){var l=o[s];if(-1!==d.inArray(l,i)){var c=o.substr(0,s),u=a(d.extend({},t,{term:c}));null!=u?(r(u),o=o.substr(s+1)||"",s=0):s++}else s++}return{term:o}},e}),e.define("select2/data/minimumInputLength",[],function(){function e(e,t,n){this.minimumInputLength=n.get("minimumInputLength"),e.call(this,t,n)}return e.prototype.query=function(e,t,n){t.term=t.term||"",t.term.length<this.minimumInputLength?this.trigger("results:message",{message:"inputTooShort",args:{minimum:this.minimumInputLength,input:t.term,params:t}}):e.call(this,t,n)},e}),e.define("select2/data/maximumInputLength",[],function(){function e(e,t,n){this.maximumInputLength=n.get("maximumInputLength"),e.call(this,t,n)}return e.prototype.query=function(e,t,n){t.term=t.term||"",0<this.maximumInputLength&&t.term.length>this.maximumInputLength?this.trigger("results:message",{message:"inputTooLong",args:{maximum:this.maximumInputLength,input:t.term,params:t}}):e.call(this,t,n)},e}),e.define("select2/data/maximumSelectionLength",[],function(){function e(e,t,n){this.maximumSelectionLength=n.get("maximumSelectionLength"),e.call(this,t,n)}return e.prototype.bind=function(e,t,n){var r=this;e.call(this,t,n),t.on("select",function(){r._checkIfMaximumSelected()})},e.prototype.query=function(e,t,n){var r=this;this._checkIfMaximumSelected(function(){e.call(r,t,n)})},e.prototype._checkIfMaximumSelected=function(e,n){var r=this;this.current(function(e){var t=null!=e?e.length:0;0<r.maximumSelectionLength&&t>=r.maximumSelectionLength?r.trigger("results:message",{message:"maximumSelected",args:{maximum:r.maximumSelectionLength}}):n&&n()})},e}),e.define("select2/dropdown",["jquery","./utils"],function(t,e){function n(e,t){this.$element=e,this.options=t,n.__super__.constructor.call(this)}return e.Extend(n,e.Observable),n.prototype.render=function(){var e=t('<span class="select2-dropdown"><span class="select2-results"></span></span>');return e.attr("dir",this.options.get("dir")),this.$dropdown=e},n.prototype.bind=function(){},n.prototype.position=function(e,t){},n.prototype.destroy=function(){this.$dropdown.remove()},n}),e.define("select2/dropdown/search",["jquery","../utils"],function(o,e){function t(){}return t.prototype.render=function(e){var t=e.call(this),n=o('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></span>');return this.$searchContainer=n,this.$search=n.find("input"),t.prepend(n),t},t.prototype.bind=function(e,t,n){var r=this,i=t.id+"-results";e.call(this,t,n),this.$search.on("keydown",function(e){r.trigger("keypress",e),r._keyUpPrevented=e.isDefaultPrevented()}),this.$search.on("input",function(e){o(this).off("keyup")}),this.$search.on("keyup input",function(e){r.handleSearch(e)}),t.on("open",function(){r.$search.attr("tabindex",0),r.$search.attr("aria-controls",i),r.$search.trigger("focus"),window.setTimeout(function(){r.$search.trigger("focus")},0)}),t.on("close",function(){r.$search.attr("tabindex",-1),r.$search.removeAttr("aria-controls"),r.$search.removeAttr("aria-activedescendant"),r.$search.val(""),r.$search.trigger("blur")}),t.on("focus",function(){t.isOpen()||r.$search.trigger("focus")}),t.on("results:all",function(e){null!=e.query.term&&""!==e.query.term||(r.showSearch(e)?r.$searchContainer.removeClass("select2-search--hide"):r.$searchContainer.addClass("select2-search--hide"))}),t.on("results:focus",function(e){e.data._resultId?r.$search.attr("aria-activedescendant",e.data._resultId):r.$search.removeAttr("aria-activedescendant")})},t.prototype.handleSearch=function(e){if(!this._keyUpPrevented){var t=this.$search.val();this.trigger("query",{term:t})}this._keyUpPrevented=!1},t.prototype.showSearch=function(e,t){return!0},t}),e.define("select2/dropdown/hidePlaceholder",[],function(){function e(e,t,n,r){this.placeholder=this.normalizePlaceholder(n.get("placeholder")),e.call(this,t,n,r)}return e.prototype.append=function(e,t){t.results=this.removePlaceholder(t.results),e.call(this,t)},e.prototype.normalizePlaceholder=function(e,t){return"string"==typeof t&&(t={id:"",text:t}),t},e.prototype.removePlaceholder=function(e,t){for(var n=t.slice(0),r=t.length-1;0<=r;r--){var i=t[r];this.placeholder.id===i.id&&n.splice(r,1)}return n},e}),e.define("select2/dropdown/infiniteScroll",["jquery"],function(n){function e(e,t,n,r){this.lastParams={},e.call(this,t,n,r),this.$loadingMore=this.createLoadingMore(),this.loading=!1}return e.prototype.append=function(e,t){this.$loadingMore.remove(),this.loading=!1,e.call(this,t),this.showLoadingMore(t)&&(this.$results.append(this.$loadingMore),this.loadMoreIfNeeded())},e.prototype.bind=function(e,t,n){var r=this;e.call(this,t,n),t.on("query",function(e){r.lastParams=e,r.loading=!0}),t.on("query:append",function(e){r.lastParams=e,r.loading=!0}),this.$results.on("scroll",this.loadMoreIfNeeded.bind(this))},e.prototype.loadMoreIfNeeded=function(){var e=n.contains(document.documentElement,this.$loadingMore[0]);if(!this.loading&&e){var t=this.$results.offset().top+this.$results.outerHeight(!1);this.$loadingMore.offset().top+this.$loadingMore.outerHeight(!1)<=t+50&&this.loadMore()}},e.prototype.loadMore=function(){this.loading=!0;var e=n.extend({},{page:1},this.lastParams);e.page++,this.trigger("query:append",e)},e.prototype.showLoadingMore=function(e,t){return t.pagination&&t.pagination.more},e.prototype.createLoadingMore=function(){var e=n('<li class="select2-results__option select2-results__option--load-more"role="option" aria-disabled="true"></li>'),t=this.options.get("translations").get("loadingMore");return e.html(t(this.lastParams)),e},e}),e.define("select2/dropdown/attachBody",["jquery","../utils"],function(f,a){function e(e,t,n){this.$dropdownParent=f(n.get("dropdownParent")||document.body),e.call(this,t,n)}return e.prototype.bind=function(e,t,n){var r=this;e.call(this,t,n),t.on("open",function(){r._showDropdown(),r._attachPositioningHandler(t),r._bindContainerResultHandlers(t)}),t.on("close",function(){r._hideDropdown(),r._detachPositioningHandler(t)}),this.$dropdownContainer.on("mousedown",function(e){e.stopPropagation()})},e.prototype.destroy=function(e){e.call(this),this.$dropdownContainer.remove()},e.prototype.position=function(e,t,n){t.attr("class",n.attr("class")),t.removeClass("select2"),t.addClass("select2-container--open"),t.css({position:"absolute",top:-999999}),this.$container=n},e.prototype.render=function(e){var t=f("<span></span>"),n=e.call(this);return t.append(n),this.$dropdownContainer=t},e.prototype._hideDropdown=function(e){this.$dropdownContainer.detach()},e.prototype._bindContainerResultHandlers=function(e,t){if(!this._containerResultsHandlersBound){var n=this;t.on("results:all",function(){n._positionDropdown(),n._resizeDropdown()}),t.on("results:append",function(){n._positionDropdown(),n._resizeDropdown()}),t.on("results:message",function(){n._positionDropdown(),n._resizeDropdown()}),t.on("select",function(){n._positionDropdown(),n._resizeDropdown()}),t.on("unselect",function(){n._positionDropdown(),n._resizeDropdown()}),this._containerResultsHandlersBound=!0}},e.prototype._attachPositioningHandler=function(e,t){var n=this,r="scroll.select2."+t.id,i="resize.select2."+t.id,o="orientationchange.select2."+t.id,s=this.$container.parents().filter(a.hasScroll);s.each(function(){a.StoreData(this,"select2-scroll-position",{x:f(this).scrollLeft(),y:f(this).scrollTop()})}),s.on(r,function(e){var t=a.GetData(this,"select2-scroll-position");f(this).scrollTop(t.y)}),f(window).on(r+" "+i+" "+o,function(e){n._positionDropdown(),n._resizeDropdown()})},e.prototype._detachPositioningHandler=function(e,t){var n="scroll.select2."+t.id,r="resize.select2."+t.id,i="orientationchange.select2."+t.id;this.$container.parents().filter(a.hasScroll).off(n),f(window).off(n+" "+r+" "+i)},e.prototype._positionDropdown=function(){var e=f(window),t=this.$dropdown.hasClass("select2-dropdown--above"),n=this.$dropdown.hasClass("select2-dropdown--below"),r=null,i=this.$container.offset();i.bottom=i.top+this.$container.outerHeight(!1);var o={height:this.$container.outerHeight(!1)};o.top=i.top,o.bottom=i.top+o.height;var s=this.$dropdown.outerHeight(!1),a=e.scrollTop(),l=e.scrollTop()+e.height(),c=a<i.top-s,u=l>i.bottom+s,d={left:i.left,top:o.bottom},p=this.$dropdownParent;"static"===p.css("position")&&(p=p.offsetParent());var h={top:0,left:0};(f.contains(document.body,p[0])||p[0].isConnected)&&(h=p.offset()),d.top-=h.top,d.left-=h.left,t||n||(r="below"),u||!c||t?!c&&u&&t&&(r="below"):r="above",("above"==r||t&&"below"!==r)&&(d.top=o.top-h.top-s),null!=r&&(this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--"+r),this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--"+r)),this.$dropdownContainer.css(d)},e.prototype._resizeDropdown=function(){var e={width:this.$container.outerWidth(!1)+"px"};this.options.get("dropdownAutoWidth")&&(e.minWidth=e.width,e.position="relative",e.width="auto"),this.$dropdown.css(e)},e.prototype._showDropdown=function(e){this.$dropdownContainer.appendTo(this.$dropdownParent),this._positionDropdown(),this._resizeDropdown()},e}),e.define("select2/dropdown/minimumResultsForSearch",[],function(){function e(e,t,n,r){this.minimumResultsForSearch=n.get("minimumResultsForSearch"),this.minimumResultsForSearch<0&&(this.minimumResultsForSearch=1/0),e.call(this,t,n,r)}return e.prototype.showSearch=function(e,t){return!(function e(t){for(var n=0,r=0;r<t.length;r++){var i=t[r];i.children?n+=e(i.children):n++}return n}(t.data.results)<this.minimumResultsForSearch)&&e.call(this,t)},e}),e.define("select2/dropdown/selectOnClose",["../utils"],function(o){function e(){}return e.prototype.bind=function(e,t,n){var r=this;e.call(this,t,n),t.on("close",function(e){r._handleSelectOnClose(e)})},e.prototype._handleSelectOnClose=function(e,t){if(t&&null!=t.originalSelect2Event){var n=t.originalSelect2Event;if("select"===n._type||"unselect"===n._type)return}var r=this.getHighlightedResults();if(!(r.length<1)){var i=o.GetData(r[0],"data");null!=i.element&&i.element.selected||null==i.element&&i.selected||this.trigger("select",{data:i})}},e}),e.define("select2/dropdown/closeOnSelect",[],function(){function e(){}return e.prototype.bind=function(e,t,n){var r=this;e.call(this,t,n),t.on("select",function(e){r._selectTriggered(e)}),t.on("unselect",function(e){r._selectTriggered(e)})},e.prototype._selectTriggered=function(e,t){var n=t.originalEvent;n&&(n.ctrlKey||n.metaKey)||this.trigger("close",{originalEvent:n,originalSelect2Event:t})},e}),e.define("select2/i18n/en",[],function(){return{errorLoading:function(){return"The results could not be loaded."},inputTooLong:function(e){var t=e.input.length-e.maximum,n="Please delete "+t+" character";return 1!=t&&(n+="s"),n},inputTooShort:function(e){return"Please enter "+(e.minimum-e.input.length)+" or more characters"},loadingMore:function(){return"Loading more results…"},maximumSelected:function(e){var t="You can only select "+e.maximum+" item";return 1!=e.maximum&&(t+="s"),t},noResults:function(){return"No results found"},searching:function(){return"Searching…"},removeAllItems:function(){return"Remove all items"}}}),e.define("select2/defaults",["jquery","require","./results","./selection/single","./selection/multiple","./selection/placeholder","./selection/allowClear","./selection/search","./selection/eventRelay","./utils","./translation","./diacritics","./data/select","./data/array","./data/ajax","./data/tags","./data/tokenizer","./data/minimumInputLength","./data/maximumInputLength","./data/maximumSelectionLength","./dropdown","./dropdown/search","./dropdown/hidePlaceholder","./dropdown/infiniteScroll","./dropdown/attachBody","./dropdown/minimumResultsForSearch","./dropdown/selectOnClose","./dropdown/closeOnSelect","./i18n/en"],function(c,u,d,p,h,f,g,m,v,y,s,t,_,$,b,w,A,x,D,S,E,C,O,T,q,L,I,j,e){function n(){this.reset()}return n.prototype.apply=function(e){if(null==(e=c.extend(!0,{},this.defaults,e)).dataAdapter){if(null!=e.ajax?e.dataAdapter=b:null!=e.data?e.dataAdapter=$:e.dataAdapter=_,0<e.minimumInputLength&&(e.dataAdapter=y.Decorate(e.dataAdapter,x)),0<e.maximumInputLength&&(e.dataAdapter=y.Decorate(e.dataAdapter,D)),0<e.maximumSelectionLength&&(e.dataAdapter=y.Decorate(e.dataAdapter,S)),e.tags&&(e.dataAdapter=y.Decorate(e.dataAdapter,w)),null==e.tokenSeparators&&null==e.tokenizer||(e.dataAdapter=y.Decorate(e.dataAdapter,A)),null!=e.query){var t=u(e.amdBase+"compat/query");e.dataAdapter=y.Decorate(e.dataAdapter,t)}if(null!=e.initSelection){var n=u(e.amdBase+"compat/initSelection");e.dataAdapter=y.Decorate(e.dataAdapter,n)}}if(null==e.resultsAdapter&&(e.resultsAdapter=d,null!=e.ajax&&(e.resultsAdapter=y.Decorate(e.resultsAdapter,T)),null!=e.placeholder&&(e.resultsAdapter=y.Decorate(e.resultsAdapter,O)),e.selectOnClose&&(e.resultsAdapter=y.Decorate(e.resultsAdapter,I))),null==e.dropdownAdapter){if(e.multiple)e.dropdownAdapter=E;else{var r=y.Decorate(E,C);e.dropdownAdapter=r}if(0!==e.minimumResultsForSearch&&(e.dropdownAdapter=y.Decorate(e.dropdownAdapter,L)),e.closeOnSelect&&(e.dropdownAdapter=y.Decorate(e.dropdownAdapter,j)),null!=e.dropdownCssClass||null!=e.dropdownCss||null!=e.adaptDropdownCssClass){var i=u(e.amdBase+"compat/dropdownCss");e.dropdownAdapter=y.Decorate(e.dropdownAdapter,i)}e.dropdownAdapter=y.Decorate(e.dropdownAdapter,q)}if(null==e.selectionAdapter){if(e.multiple?e.selectionAdapter=h:e.selectionAdapter=p,null!=e.placeholder&&(e.selectionAdapter=y.Decorate(e.selectionAdapter,f)),e.allowClear&&(e.selectionAdapter=y.Decorate(e.selectionAdapter,g)),e.multiple&&(e.selectionAdapter=y.Decorate(e.selectionAdapter,m)),null!=e.containerCssClass||null!=e.containerCss||null!=e.adaptContainerCssClass){var o=u(e.amdBase+"compat/containerCss");e.selectionAdapter=y.Decorate(e.selectionAdapter,o)}e.selectionAdapter=y.Decorate(e.selectionAdapter,v)}e.language=this._resolveLanguage(e.language),e.language.push("en");for(var s=[],a=0;a<e.language.length;a++){var l=e.language[a];-1===s.indexOf(l)&&s.push(l)}return e.language=s,e.translations=this._processTranslations(e.language,e.debug),e},n.prototype.reset=function(){function a(e){return e.replace(/[^\u0000-\u007E]/g,function(e){return t[e]||e})}this.defaults={amdBase:"./",amdLanguageBase:"./i18n/",closeOnSelect:!0,debug:!1,dropdownAutoWidth:!1,escapeMarkup:y.escapeMarkup,language:{},matcher:function e(t,n){if(""===c.trim(t.term))return n;if(n.children&&0<n.children.length){for(var r=c.extend(!0,{},n),i=n.children.length-1;0<=i;i--)null==e(t,n.children[i])&&r.children.splice(i,1);return 0<r.children.length?r:e(t,r)}var o=a(n.text).toUpperCase(),s=a(t.term).toUpperCase();return-1<o.indexOf(s)?n:null},minimumInputLength:0,maximumInputLength:0,maximumSelectionLength:0,minimumResultsForSearch:0,selectOnClose:!1,scrollAfterSelect:!1,sorter:function(e){return e},templateResult:function(e){return e.text},templateSelection:function(e){return e.text},theme:"default",width:"resolve"}},n.prototype.applyFromElement=function(e,t){var n=e.language,r=this.defaults.language,i=t.prop("lang"),o=t.closest("[lang]").prop("lang"),s=Array.prototype.concat.call(this._resolveLanguage(i),this._resolveLanguage(n),this._resolveLanguage(r),this._resolveLanguage(o));return e.language=s,e},n.prototype._resolveLanguage=function(e){if(!e)return[];if(c.isEmptyObject(e))return[];if(c.isPlainObject(e))return[e];var t;t=c.isArray(e)?e:[e];for(var n=[],r=0;r<t.length;r++)if(n.push(t[r]),"string"==typeof t[r]&&0<t[r].indexOf("-")){var i=t[r].split("-")[0];n.push(i)}return n},n.prototype._processTranslations=function(e,t){for(var n=new s,r=0;r<e.length;r++){var i=new s,o=e[r];if("string"==typeof o)try{i=s.loadPath(o)}catch(e){try{o=this.defaults.amdLanguageBase+o,i=s.loadPath(o)}catch(e){t&&window.console&&console.warn&&console.warn('Select2: The language file for "'+o+'" could not be automatically loaded. A fallback will be used instead.')}}else i=c.isPlainObject(o)?new s(o):o;n.extend(i)}return n},n.prototype.set=function(e,t){var n={};n[c.camelCase(e)]=t;var r=y._convertData(n);c.extend(!0,this.defaults,r)},new n}),e.define("select2/options",["require","jquery","./defaults","./utils"],function(r,d,i,p){function e(e,t){if(this.options=e,null!=t&&this.fromElement(t),null!=t&&(this.options=i.applyFromElement(this.options,t)),this.options=i.apply(this.options),t&&t.is("input")){var n=r(this.get("amdBase")+"compat/inputData");this.options.dataAdapter=p.Decorate(this.options.dataAdapter,n)}}return e.prototype.fromElement=function(e){var t=["select2"];null==this.options.multiple&&(this.options.multiple=e.prop("multiple")),null==this.options.disabled&&(this.options.disabled=e.prop("disabled")),null==this.options.dir&&(e.prop("dir")?this.options.dir=e.prop("dir"):e.closest("[dir]").prop("dir")?this.options.dir=e.closest("[dir]").prop("dir"):this.options.dir="ltr"),e.prop("disabled",this.options.disabled),e.prop("multiple",this.options.multiple),p.GetData(e[0],"select2Tags")&&(this.options.debug&&window.console&&console.warn&&console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'),p.StoreData(e[0],"data",p.GetData(e[0],"select2Tags")),p.StoreData(e[0],"tags",!0)),p.GetData(e[0],"ajaxUrl")&&(this.options.debug&&window.console&&console.warn&&console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."),e.attr("ajax--url",p.GetData(e[0],"ajaxUrl")),p.StoreData(e[0],"ajax-Url",p.GetData(e[0],"ajaxUrl")));var n={};function r(e,t){return t.toUpperCase()}for(var i=0;i<e[0].attributes.length;i++){var o=e[0].attributes[i].name,s="data-";if(o.substr(0,s.length)==s){var a=o.substring(s.length),l=p.GetData(e[0],a);n[a.replace(/-([a-z])/g,r)]=l}}d.fn.jquery&&"1."==d.fn.jquery.substr(0,2)&&e[0].dataset&&(n=d.extend(!0,{},e[0].dataset,n));var c=d.extend(!0,{},p.GetData(e[0]),n);for(var u in c=p._convertData(c))-1<d.inArray(u,t)||(d.isPlainObject(this.options[u])?d.extend(this.options[u],c[u]):this.options[u]=c[u]);return this},e.prototype.get=function(e){return this.options[e]},e.prototype.set=function(e,t){this.options[e]=t},e}),e.define("select2/core",["jquery","./options","./utils","./keys"],function(o,c,u,r){var d=function(e,t){null!=u.GetData(e[0],"select2")&&u.GetData(e[0],"select2").destroy(),this.$element=e,this.id=this._generateId(e),t=t||{},this.options=new c(t,e),d.__super__.constructor.call(this);var n=e.attr("tabindex")||0;u.StoreData(e[0],"old-tabindex",n),e.attr("tabindex","-1");var r=this.options.get("dataAdapter");this.dataAdapter=new r(e,this.options);var i=this.render();this._placeContainer(i);var o=this.options.get("selectionAdapter");this.selection=new o(e,this.options),this.$selection=this.selection.render(),this.selection.position(this.$selection,i);var s=this.options.get("dropdownAdapter");this.dropdown=new s(e,this.options),this.$dropdown=this.dropdown.render(),this.dropdown.position(this.$dropdown,i);var a=this.options.get("resultsAdapter");this.results=new a(e,this.options,this.dataAdapter),this.$results=this.results.render(),this.results.position(this.$results,this.$dropdown);var l=this;this._bindAdapters(),this._registerDomEvents(),this._registerDataEvents(),this._registerSelectionEvents(),this._registerDropdownEvents(),this._registerResultsEvents(),this._registerEvents(),this.dataAdapter.current(function(e){l.trigger("selection:update",{data:e})}),e.addClass("select2-hidden-accessible"),e.attr("aria-hidden","true"),this._syncAttributes(),u.StoreData(e[0],"select2",this),e.data("select2",this)};return u.Extend(d,u.Observable),d.prototype._generateId=function(e){return"select2-"+(null!=e.attr("id")?e.attr("id"):null!=e.attr("name")?e.attr("name")+"-"+u.generateChars(2):u.generateChars(4)).replace(/(:|\.|\[|\]|,)/g,"")},d.prototype._placeContainer=function(e){e.insertAfter(this.$element);var t=this._resolveWidth(this.$element,this.options.get("width"));null!=t&&e.css("width",t)},d.prototype._resolveWidth=function(e,t){var n=/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;if("resolve"==t){var r=this._resolveWidth(e,"style");return null!=r?r:this._resolveWidth(e,"element")}if("element"==t){var i=e.outerWidth(!1);return i<=0?"auto":i+"px"}if("style"!=t)return"computedstyle"!=t?t:window.getComputedStyle(e[0]).width;var o=e.attr("style");if("string"!=typeof o)return null;for(var s=o.split(";"),a=0,l=s.length;a<l;a+=1){var c=s[a].replace(/\s/g,"").match(n);if(null!==c&&1<=c.length)return c[1]}return null},d.prototype._bindAdapters=function(){this.dataAdapter.bind(this,this.$container),this.selection.bind(this,this.$container),this.dropdown.bind(this,this.$container),this.results.bind(this,this.$container)},d.prototype._registerDomEvents=function(){var t=this;this.$element.on("change.select2",function(){t.dataAdapter.current(function(e){t.trigger("selection:update",{data:e})})}),this.$element.on("focus.select2",function(e){t.trigger("focus",e)}),this._syncA=u.bind(this._syncAttributes,this),this._syncS=u.bind(this._syncSubtree,this),this.$element[0].attachEvent&&this.$element[0].attachEvent("onpropertychange",this._syncA);var e=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;null!=e?(this._observer=new e(function(e){t._syncA(),t._syncS(null,e)}),this._observer.observe(this.$element[0],{attributes:!0,childList:!0,subtree:!1})):this.$element[0].addEventListener&&(this.$element[0].addEventListener("DOMAttrModified",t._syncA,!1),this.$element[0].addEventListener("DOMNodeInserted",t._syncS,!1),this.$element[0].addEventListener("DOMNodeRemoved",t._syncS,!1))},d.prototype._registerDataEvents=function(){var n=this;this.dataAdapter.on("*",function(e,t){n.trigger(e,t)})},d.prototype._registerSelectionEvents=function(){var n=this,r=["toggle","focus"];this.selection.on("toggle",function(){n.toggleDropdown()}),this.selection.on("focus",function(e){n.focus(e)}),this.selection.on("*",function(e,t){-1===o.inArray(e,r)&&n.trigger(e,t)})},d.prototype._registerDropdownEvents=function(){var n=this;this.dropdown.on("*",function(e,t){n.trigger(e,t)})},d.prototype._registerResultsEvents=function(){var n=this;this.results.on("*",function(e,t){n.trigger(e,t)})},d.prototype._registerEvents=function(){var n=this;this.on("open",function(){n.$container.addClass("select2-container--open")}),this.on("close",function(){n.$container.removeClass("select2-container--open")}),this.on("enable",function(){n.$container.removeClass("select2-container--disabled")}),this.on("disable",function(){n.$container.addClass("select2-container--disabled")}),this.on("blur",function(){n.$container.removeClass("select2-container--focus")}),this.on("query",function(t){n.isOpen()||n.trigger("open",{}),this.dataAdapter.query(t,function(e){n.trigger("results:all",{data:e,query:t})})}),this.on("query:append",function(t){this.dataAdapter.query(t,function(e){n.trigger("results:append",{data:e,query:t})})}),this.on("keypress",function(e){var t=e.which;n.isOpen()?t===r.ESC||t===r.TAB||t===r.UP&&e.altKey?(n.close(e),e.preventDefault()):t===r.ENTER?(n.trigger("results:select",{}),e.preventDefault()):t===r.SPACE&&e.ctrlKey?(n.trigger("results:toggle",{}),e.preventDefault()):t===r.UP?(n.trigger("results:previous",{}),e.preventDefault()):t===r.DOWN&&(n.trigger("results:next",{}),e.preventDefault()):(t===r.ENTER||t===r.SPACE||t===r.DOWN&&e.altKey)&&(n.open(),e.preventDefault())})},d.prototype._syncAttributes=function(){this.options.set("disabled",this.$element.prop("disabled")),this.isDisabled()?(this.isOpen()&&this.close(),this.trigger("disable",{})):this.trigger("enable",{})},d.prototype._isChangeMutation=function(e,t){var n=!1,r=this;if(!e||!e.target||"OPTION"===e.target.nodeName||"OPTGROUP"===e.target.nodeName){if(t)if(t.addedNodes&&0<t.addedNodes.length)for(var i=0;i<t.addedNodes.length;i++){t.addedNodes[i].selected&&(n=!0)}else t.removedNodes&&0<t.removedNodes.length?n=!0:o.isArray(t)&&o.each(t,function(e,t){if(r._isChangeMutation(e,t))return!(n=!0)});else n=!0;return n}},d.prototype._syncSubtree=function(e,t){var n=this._isChangeMutation(e,t),r=this;n&&this.dataAdapter.current(function(e){r.trigger("selection:update",{data:e})})},d.prototype.trigger=function(e,t){var n=d.__super__.trigger,r={open:"opening",close:"closing",select:"selecting",unselect:"unselecting",clear:"clearing"};if(void 0===t&&(t={}),e in r){var i=r[e],o={prevented:!1,name:e,args:t};if(n.call(this,i,o),o.prevented)return void(t.prevented=!0)}n.call(this,e,t)},d.prototype.toggleDropdown=function(){this.isDisabled()||(this.isOpen()?this.close():this.open())},d.prototype.open=function(){this.isOpen()||this.isDisabled()||this.trigger("query",{})},d.prototype.close=function(e){this.isOpen()&&this.trigger("close",{originalEvent:e})},d.prototype.isEnabled=function(){return!this.isDisabled()},d.prototype.isDisabled=function(){return this.options.get("disabled")},d.prototype.isOpen=function(){return this.$container.hasClass("select2-container--open")},d.prototype.hasFocus=function(){return this.$container.hasClass("select2-container--focus")},d.prototype.focus=function(e){this.hasFocus()||(this.$container.addClass("select2-container--focus"),this.trigger("focus",{}))},d.prototype.enable=function(e){this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'),null!=e&&0!==e.length||(e=[!0]);var t=!e[0];this.$element.prop("disabled",t)},d.prototype.data=function(){this.options.get("debug")&&0<arguments.length&&window.console&&console.warn&&console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');var t=[];return this.dataAdapter.current(function(e){t=e}),t},d.prototype.val=function(e){if(this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'),null==e||0===e.length)return this.$element.val();var t=e[0];o.isArray(t)&&(t=o.map(t,function(e){return e.toString()})),this.$element.val(t).trigger("input").trigger("change")},d.prototype.destroy=function(){this.$container.remove(),this.$element[0].detachEvent&&this.$element[0].detachEvent("onpropertychange",this._syncA),null!=this._observer?(this._observer.disconnect(),this._observer=null):this.$element[0].removeEventListener&&(this.$element[0].removeEventListener("DOMAttrModified",this._syncA,!1),this.$element[0].removeEventListener("DOMNodeInserted",this._syncS,!1),this.$element[0].removeEventListener("DOMNodeRemoved",this._syncS,!1)),this._syncA=null,this._syncS=null,this.$element.off(".select2"),this.$element.attr("tabindex",u.GetData(this.$element[0],"old-tabindex")),this.$element.removeClass("select2-hidden-accessible"),this.$element.attr("aria-hidden","false"),u.RemoveData(this.$element[0]),this.$element.removeData("select2"),this.dataAdapter.destroy(),this.selection.destroy(),this.dropdown.destroy(),this.results.destroy(),this.dataAdapter=null,this.selection=null,this.dropdown=null,this.results=null},d.prototype.render=function(){var e=o('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');return e.attr("dir",this.options.get("dir")),this.$container=e,this.$container.addClass("select2-container--"+this.options.get("theme")),u.StoreData(e[0],"element",this.$element),e},d}),e.define("jquery-mousewheel",["jquery"],function(e){return e}),e.define("jquery.select2",["jquery","jquery-mousewheel","./select2/core","./select2/defaults","./select2/utils"],function(i,e,o,t,s){if(null==i.fn.select2){var a=["open","close","destroy"];i.fn.select2=function(t){if("object"==typeof(t=t||{}))return this.each(function(){var e=i.extend(!0,{},t);new o(i(this),e)}),this;if("string"!=typeof t)throw new Error("Invalid arguments for Select2: "+t);var n,r=Array.prototype.slice.call(arguments,1);return this.each(function(){var e=s.GetData(this,"select2");null==e&&window.console&&console.error&&console.error("The select2('"+t+"') method was called on an element that is not using Select2."),n=e[t].apply(e,r)}),-1<i.inArray(t,a)?this:n}}return null==i.fn.select2.defaults&&(i.fn.select2.defaults=t),o}),{define:e.define,require:e.require}}(),t=e.require("jquery.select2");return u.fn.select2.amd=e,t});

/*!
 * clipboard.js v2.0.6
 * https://clipboardjs.com/
 * 
 * Licensed MIT © Zeno Rocha
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ClipboardJS=e():t.ClipboardJS=e()}(this,function(){return o={},r.m=n=[function(t,e){t.exports=function(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var o=window.getSelection(),r=document.createRange();r.selectNodeContents(t),o.removeAllRanges(),o.addRange(r),e=o.toString()}return e}},function(t,e){function n(){}n.prototype={on:function(t,e,n){var o=this.e||(this.e={});return(o[t]||(o[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var o=this;function r(){o.off(t,r),e.apply(n,arguments)}return r._=e,this.on(t,r,n)},emit:function(t){for(var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),o=0,r=n.length;o<r;o++)n[o].fn.apply(n[o].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),o=n[t],r=[];if(o&&e)for(var i=0,a=o.length;i<a;i++)o[i].fn!==e&&o[i].fn._!==e&&r.push(o[i]);return r.length?n[t]=r:delete n[t],this}},t.exports=n,t.exports.TinyEmitter=n},function(t,e,n){var d=n(3),h=n(4);t.exports=function(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!d.string(e))throw new TypeError("Second argument must be a String");if(!d.fn(n))throw new TypeError("Third argument must be a Function");if(d.node(t))return s=e,f=n,(u=t).addEventListener(s,f),{destroy:function(){u.removeEventListener(s,f)}};if(d.nodeList(t))return a=t,c=e,l=n,Array.prototype.forEach.call(a,function(t){t.addEventListener(c,l)}),{destroy:function(){Array.prototype.forEach.call(a,function(t){t.removeEventListener(c,l)})}};if(d.string(t))return o=t,r=e,i=n,h(document.body,o,r,i);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");var o,r,i,a,c,l,u,s,f}},function(t,n){n.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},n.nodeList=function(t){var e=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===e||"[object HTMLCollection]"===e)&&"length"in t&&(0===t.length||n.node(t[0]))},n.string=function(t){return"string"==typeof t||t instanceof String},n.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},function(t,e,n){var a=n(5);function i(t,e,n,o,r){var i=function(e,n,t,o){return function(t){t.delegateTarget=a(t.target,n),t.delegateTarget&&o.call(e,t)}}.apply(this,arguments);return t.addEventListener(n,i,r),{destroy:function(){t.removeEventListener(n,i,r)}}}t.exports=function(t,e,n,o,r){return"function"==typeof t.addEventListener?i.apply(null,arguments):"function"==typeof n?i.bind(null,document).apply(null,arguments):("string"==typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,function(t){return i(t,e,n,o,r)}))}},function(t,e){if("undefined"!=typeof Element&&!Element.prototype.matches){var n=Element.prototype;n.matches=n.matchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector||n.webkitMatchesSelector}t.exports=function(t,e){for(;t&&9!==t.nodeType;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}},function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function a(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function c(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),this.resolveOptions(t),this.initSelection()}var l=(function(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),t}(c,[{key:"resolveOptions",value:function(t){var e=0<arguments.length&&void 0!==t?t:{};this.action=e.action,this.container=e.container,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var t=this,e="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=r()(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=r()(this.target),this.copyText()}},{key:"copyText",value:function(){var e=void 0;try{e=document.execCommand(this.action)}catch(t){e=!1}this.handleResult(e)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(t){var e=0<arguments.length&&void 0!==t?t:"copy";if(this._action=e,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==(void 0===t?"undefined":i(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}]),c),u=n(1),s=n.n(u),f=n(2),d=n.n(f),h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p=function(t,e,n){return e&&y(t.prototype,e),n&&y(t,n),t};function y(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var m=(function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(v,s.a),p(v,[{key:"resolveOptions",value:function(t){var e=0<arguments.length&&void 0!==t?t:{};this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText,this.container="object"===h(e.container)?e.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=d()(t,"click",function(t){return e.onClick(t)})}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new l({action:this.action(e),target:this.target(e),text:this.text(e),container:this.container,trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return b("action",t)}},{key:"defaultTarget",value:function(t){var e=b("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return b("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(t){var e=0<arguments.length&&void 0!==t?t:["copy","cut"],n="string"==typeof e?[e]:e,o=!!document.queryCommandSupported;return n.forEach(function(t){o=o&&!!document.queryCommandSupported(t)}),o}}]),v);function v(t,e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,v);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(v.__proto__||Object.getPrototypeOf(v)).call(this));return n.resolveOptions(e),n.listenClick(t),n}function b(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}e.default=m}],r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=6).default;function r(t){if(o[t])return o[t].exports;var e=o[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,r),e.l=!0,e.exports}var n,o});

/* == jquery mousewheel plugin == Version: 3.1.13, License: MIT License (MIT) */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});
/* == malihu jquery custom scrollbar plugin == Version: 3.1.5, License: MIT License (MIT) */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"undefined"!=typeof module&&module.exports?module.exports=e:e(jQuery,window,document)}(function(e){!function(t){var o="function"==typeof define&&define.amd,a="undefined"!=typeof module&&module.exports,n="https:"==document.location.protocol?"https:":"http:",i="cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js";o||(a?require("jquery-mousewheel")(e):e.event.special.mousewheel||e("head").append(decodeURI("%3Cscript src="+n+"//"+i+"%3E%3C/script%3E"))),t()}(function(){var t,o="mCustomScrollbar",a="mCS",n=".mCustomScrollbar",i={setTop:0,setLeft:0,axis:"y",scrollbarPosition:"inside",scrollInertia:950,autoDraggerLength:!0,alwaysShowScrollbar:0,snapOffset:0,mouseWheel:{enable:!0,scrollAmount:"auto",axis:"y",deltaFactor:"auto",disableOver:["select","option","keygen","datalist","textarea"]},scrollButtons:{scrollType:"stepless",scrollAmount:"auto"},keyboard:{enable:!0,scrollType:"stepless",scrollAmount:"auto"},contentTouchScroll:25,documentTouchScroll:!0,advanced:{autoScrollOnFocus:"input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",updateOnContentResize:!0,updateOnImageLoad:"auto",autoUpdateTimeout:60},theme:"light",callbacks:{onTotalScrollOffset:0,onTotalScrollBackOffset:0,alwaysTriggerOffsets:!0}},r=0,l={},s=window.attachEvent&&!window.addEventListener?1:0,c=!1,d=["mCSB_dragger_onDrag","mCSB_scrollTools_onDrag","mCS_img_loaded","mCS_disabled","mCS_destroyed","mCS_no_scrollbar","mCS-autoHide","mCS-dir-rtl","mCS_no_scrollbar_y","mCS_no_scrollbar_x","mCS_y_hidden","mCS_x_hidden","mCSB_draggerContainer","mCSB_buttonUp","mCSB_buttonDown","mCSB_buttonLeft","mCSB_buttonRight"],u={init:function(t){var t=e.extend(!0,{},i,t),o=f.call(this);if(t.live){var s=t.liveSelector||this.selector||n,c=e(s);if("off"===t.live)return void m(s);l[s]=setTimeout(function(){c.mCustomScrollbar(t),"once"===t.live&&c.length&&m(s)},500)}else m(s);return t.setWidth=t.set_width?t.set_width:t.setWidth,t.setHeight=t.set_height?t.set_height:t.setHeight,t.axis=t.horizontalScroll?"x":p(t.axis),t.scrollInertia=t.scrollInertia>0&&t.scrollInertia<17?17:t.scrollInertia,"object"!=typeof t.mouseWheel&&1==t.mouseWheel&&(t.mouseWheel={enable:!0,scrollAmount:"auto",axis:"y",preventDefault:!1,deltaFactor:"auto",normalizeDelta:!1,invert:!1}),t.mouseWheel.scrollAmount=t.mouseWheelPixels?t.mouseWheelPixels:t.mouseWheel.scrollAmount,t.mouseWheel.normalizeDelta=t.advanced.normalizeMouseWheelDelta?t.advanced.normalizeMouseWheelDelta:t.mouseWheel.normalizeDelta,t.scrollButtons.scrollType=g(t.scrollButtons.scrollType),h(t),e(o).each(function(){var o=e(this);if(!o.data(a)){o.data(a,{idx:++r,opt:t,scrollRatio:{y:null,x:null},overflowed:null,contentReset:{y:null,x:null},bindEvents:!1,tweenRunning:!1,sequential:{},langDir:o.css("direction"),cbOffsets:null,trigger:null,poll:{size:{o:0,n:0},img:{o:0,n:0},change:{o:0,n:0}}});var n=o.data(a),i=n.opt,l=o.data("mcs-axis"),s=o.data("mcs-scrollbar-position"),c=o.data("mcs-theme");l&&(i.axis=l),s&&(i.scrollbarPosition=s),c&&(i.theme=c,h(i)),v.call(this),n&&i.callbacks.onCreate&&"function"==typeof i.callbacks.onCreate&&i.callbacks.onCreate.call(this),e("#mCSB_"+n.idx+"_container img:not(."+d[2]+")").addClass(d[2]),u.update.call(null,o)}})},update:function(t,o){var n=t||f.call(this);return e(n).each(function(){var t=e(this);if(t.data(a)){var n=t.data(a),i=n.opt,r=e("#mCSB_"+n.idx+"_container"),l=e("#mCSB_"+n.idx),s=[e("#mCSB_"+n.idx+"_dragger_vertical"),e("#mCSB_"+n.idx+"_dragger_horizontal")];if(!r.length)return;n.tweenRunning&&Q(t),o&&n&&i.callbacks.onBeforeUpdate&&"function"==typeof i.callbacks.onBeforeUpdate&&i.callbacks.onBeforeUpdate.call(this),t.hasClass(d[3])&&t.removeClass(d[3]),t.hasClass(d[4])&&t.removeClass(d[4]),l.css("max-height","none"),l.height()!==t.height()&&l.css("max-height",t.height()),_.call(this),"y"===i.axis||i.advanced.autoExpandHorizontalScroll||r.css("width",x(r)),n.overflowed=y.call(this),M.call(this),i.autoDraggerLength&&S.call(this),b.call(this),T.call(this);var c=[Math.abs(r[0].offsetTop),Math.abs(r[0].offsetLeft)];"x"!==i.axis&&(n.overflowed[0]?s[0].height()>s[0].parent().height()?B.call(this):(G(t,c[0].toString(),{dir:"y",dur:0,overwrite:"none"}),n.contentReset.y=null):(B.call(this),"y"===i.axis?k.call(this):"yx"===i.axis&&n.overflowed[1]&&G(t,c[1].toString(),{dir:"x",dur:0,overwrite:"none"}))),"y"!==i.axis&&(n.overflowed[1]?s[1].width()>s[1].parent().width()?B.call(this):(G(t,c[1].toString(),{dir:"x",dur:0,overwrite:"none"}),n.contentReset.x=null):(B.call(this),"x"===i.axis?k.call(this):"yx"===i.axis&&n.overflowed[0]&&G(t,c[0].toString(),{dir:"y",dur:0,overwrite:"none"}))),o&&n&&(2===o&&i.callbacks.onImageLoad&&"function"==typeof i.callbacks.onImageLoad?i.callbacks.onImageLoad.call(this):3===o&&i.callbacks.onSelectorChange&&"function"==typeof i.callbacks.onSelectorChange?i.callbacks.onSelectorChange.call(this):i.callbacks.onUpdate&&"function"==typeof i.callbacks.onUpdate&&i.callbacks.onUpdate.call(this)),N.call(this)}})},scrollTo:function(t,o){if("undefined"!=typeof t&&null!=t){var n=f.call(this);return e(n).each(function(){var n=e(this);if(n.data(a)){var i=n.data(a),r=i.opt,l={trigger:"external",scrollInertia:r.scrollInertia,scrollEasing:"mcsEaseInOut",moveDragger:!1,timeout:60,callbacks:!0,onStart:!0,onUpdate:!0,onComplete:!0},s=e.extend(!0,{},l,o),c=Y.call(this,t),d=s.scrollInertia>0&&s.scrollInertia<17?17:s.scrollInertia;c[0]=X.call(this,c[0],"y"),c[1]=X.call(this,c[1],"x"),s.moveDragger&&(c[0]*=i.scrollRatio.y,c[1]*=i.scrollRatio.x),s.dur=ne()?0:d,setTimeout(function(){null!==c[0]&&"undefined"!=typeof c[0]&&"x"!==r.axis&&i.overflowed[0]&&(s.dir="y",s.overwrite="all",G(n,c[0].toString(),s)),null!==c[1]&&"undefined"!=typeof c[1]&&"y"!==r.axis&&i.overflowed[1]&&(s.dir="x",s.overwrite="none",G(n,c[1].toString(),s))},s.timeout)}})}},stop:function(){var t=f.call(this);return e(t).each(function(){var t=e(this);t.data(a)&&Q(t)})},disable:function(t){var o=f.call(this);return e(o).each(function(){var o=e(this);if(o.data(a)){o.data(a);N.call(this,"remove"),k.call(this),t&&B.call(this),M.call(this,!0),o.addClass(d[3])}})},destroy:function(){var t=f.call(this);return e(t).each(function(){var n=e(this);if(n.data(a)){var i=n.data(a),r=i.opt,l=e("#mCSB_"+i.idx),s=e("#mCSB_"+i.idx+"_container"),c=e(".mCSB_"+i.idx+"_scrollbar");r.live&&m(r.liveSelector||e(t).selector),N.call(this,"remove"),k.call(this),B.call(this),n.removeData(a),$(this,"mcs"),c.remove(),s.find("img."+d[2]).removeClass(d[2]),l.replaceWith(s.contents()),n.removeClass(o+" _"+a+"_"+i.idx+" "+d[6]+" "+d[7]+" "+d[5]+" "+d[3]).addClass(d[4])}})}},f=function(){return"object"!=typeof e(this)||e(this).length<1?n:this},h=function(t){var o=["rounded","rounded-dark","rounded-dots","rounded-dots-dark"],a=["rounded-dots","rounded-dots-dark","3d","3d-dark","3d-thick","3d-thick-dark","inset","inset-dark","inset-2","inset-2-dark","inset-3","inset-3-dark"],n=["minimal","minimal-dark"],i=["minimal","minimal-dark"],r=["minimal","minimal-dark"];t.autoDraggerLength=e.inArray(t.theme,o)>-1?!1:t.autoDraggerLength,t.autoExpandScrollbar=e.inArray(t.theme,a)>-1?!1:t.autoExpandScrollbar,t.scrollButtons.enable=e.inArray(t.theme,n)>-1?!1:t.scrollButtons.enable,t.autoHideScrollbar=e.inArray(t.theme,i)>-1?!0:t.autoHideScrollbar,t.scrollbarPosition=e.inArray(t.theme,r)>-1?"outside":t.scrollbarPosition},m=function(e){l[e]&&(clearTimeout(l[e]),$(l,e))},p=function(e){return"yx"===e||"xy"===e||"auto"===e?"yx":"x"===e||"horizontal"===e?"x":"y"},g=function(e){return"stepped"===e||"pixels"===e||"step"===e||"click"===e?"stepped":"stepless"},v=function(){var t=e(this),n=t.data(a),i=n.opt,r=i.autoExpandScrollbar?" "+d[1]+"_expand":"",l=["<div id='mCSB_"+n.idx+"_scrollbar_vertical' class='mCSB_scrollTools mCSB_"+n.idx+"_scrollbar mCS-"+i.theme+" mCSB_scrollTools_vertical"+r+"'><div class='"+d[12]+"'><div id='mCSB_"+n.idx+"_dragger_vertical' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>","<div id='mCSB_"+n.idx+"_scrollbar_horizontal' class='mCSB_scrollTools mCSB_"+n.idx+"_scrollbar mCS-"+i.theme+" mCSB_scrollTools_horizontal"+r+"'><div class='"+d[12]+"'><div id='mCSB_"+n.idx+"_dragger_horizontal' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],s="yx"===i.axis?"mCSB_vertical_horizontal":"x"===i.axis?"mCSB_horizontal":"mCSB_vertical",c="yx"===i.axis?l[0]+l[1]:"x"===i.axis?l[1]:l[0],u="yx"===i.axis?"<div id='mCSB_"+n.idx+"_container_wrapper' class='mCSB_container_wrapper' />":"",f=i.autoHideScrollbar?" "+d[6]:"",h="x"!==i.axis&&"rtl"===n.langDir?" "+d[7]:"";i.setWidth&&t.css("width",i.setWidth),i.setHeight&&t.css("height",i.setHeight),i.setLeft="y"!==i.axis&&"rtl"===n.langDir?"989999px":i.setLeft,t.addClass(o+" _"+a+"_"+n.idx+f+h).wrapInner("<div id='mCSB_"+n.idx+"' class='mCustomScrollBox mCS-"+i.theme+" "+s+"'><div id='mCSB_"+n.idx+"_container' class='mCSB_container' style='position:relative; top:"+i.setTop+"; left:"+i.setLeft+";' dir='"+n.langDir+"' /></div>");var m=e("#mCSB_"+n.idx),p=e("#mCSB_"+n.idx+"_container");"y"===i.axis||i.advanced.autoExpandHorizontalScroll||p.css("width",x(p)),"outside"===i.scrollbarPosition?("static"===t.css("position")&&t.css("position","relative"),t.css("overflow","visible"),m.addClass("mCSB_outside").after(c)):(m.addClass("mCSB_inside").append(c),p.wrap(u)),w.call(this);var g=[e("#mCSB_"+n.idx+"_dragger_vertical"),e("#mCSB_"+n.idx+"_dragger_horizontal")];g[0].css("min-height",g[0].height()),g[1].css("min-width",g[1].width())},x=function(t){var o=[t[0].scrollWidth,Math.max.apply(Math,t.children().map(function(){return e(this).outerWidth(!0)}).get())],a=t.parent().width();return o[0]>a?o[0]:o[1]>a?o[1]:"100%"},_=function(){var t=e(this),o=t.data(a),n=o.opt,i=e("#mCSB_"+o.idx+"_container");if(n.advanced.autoExpandHorizontalScroll&&"y"!==n.axis){i.css({width:"auto","min-width":0,"overflow-x":"scroll"});var r=Math.ceil(i[0].scrollWidth);3===n.advanced.autoExpandHorizontalScroll||2!==n.advanced.autoExpandHorizontalScroll&&r>i.parent().width()?i.css({width:r,"min-width":"100%","overflow-x":"inherit"}):i.css({"overflow-x":"inherit",position:"absolute"}).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({width:Math.ceil(i[0].getBoundingClientRect().right+.4)-Math.floor(i[0].getBoundingClientRect().left),"min-width":"100%",position:"relative"}).unwrap()}},w=function(){var t=e(this),o=t.data(a),n=o.opt,i=e(".mCSB_"+o.idx+"_scrollbar:first"),r=oe(n.scrollButtons.tabindex)?"tabindex='"+n.scrollButtons.tabindex+"'":"",l=["<a href='#' class='"+d[13]+"' "+r+" />","<a href='#' class='"+d[14]+"' "+r+" />","<a href='#' class='"+d[15]+"' "+r+" />","<a href='#' class='"+d[16]+"' "+r+" />"],s=["x"===n.axis?l[2]:l[0],"x"===n.axis?l[3]:l[1],l[2],l[3]];n.scrollButtons.enable&&i.prepend(s[0]).append(s[1]).next(".mCSB_scrollTools").prepend(s[2]).append(s[3])},S=function(){var t=e(this),o=t.data(a),n=e("#mCSB_"+o.idx),i=e("#mCSB_"+o.idx+"_container"),r=[e("#mCSB_"+o.idx+"_dragger_vertical"),e("#mCSB_"+o.idx+"_dragger_horizontal")],l=[n.height()/i.outerHeight(!1),n.width()/i.outerWidth(!1)],c=[parseInt(r[0].css("min-height")),Math.round(l[0]*r[0].parent().height()),parseInt(r[1].css("min-width")),Math.round(l[1]*r[1].parent().width())],d=s&&c[1]<c[0]?c[0]:c[1],u=s&&c[3]<c[2]?c[2]:c[3];r[0].css({height:d,"max-height":r[0].parent().height()-10}).find(".mCSB_dragger_bar").css({"line-height":c[0]+"px"}),r[1].css({width:u,"max-width":r[1].parent().width()-10})},b=function(){var t=e(this),o=t.data(a),n=e("#mCSB_"+o.idx),i=e("#mCSB_"+o.idx+"_container"),r=[e("#mCSB_"+o.idx+"_dragger_vertical"),e("#mCSB_"+o.idx+"_dragger_horizontal")],l=[i.outerHeight(!1)-n.height(),i.outerWidth(!1)-n.width()],s=[l[0]/(r[0].parent().height()-r[0].height()),l[1]/(r[1].parent().width()-r[1].width())];o.scrollRatio={y:s[0],x:s[1]}},C=function(e,t,o){var a=o?d[0]+"_expanded":"",n=e.closest(".mCSB_scrollTools");"active"===t?(e.toggleClass(d[0]+" "+a),n.toggleClass(d[1]),e[0]._draggable=e[0]._draggable?0:1):e[0]._draggable||("hide"===t?(e.removeClass(d[0]),n.removeClass(d[1])):(e.addClass(d[0]),n.addClass(d[1])))},y=function(){var t=e(this),o=t.data(a),n=e("#mCSB_"+o.idx),i=e("#mCSB_"+o.idx+"_container"),r=null==o.overflowed?i.height():i.outerHeight(!1),l=null==o.overflowed?i.width():i.outerWidth(!1),s=i[0].scrollHeight,c=i[0].scrollWidth;return s>r&&(r=s),c>l&&(l=c),[r>n.height(),l>n.width()]},B=function(){var t=e(this),o=t.data(a),n=o.opt,i=e("#mCSB_"+o.idx),r=e("#mCSB_"+o.idx+"_container"),l=[e("#mCSB_"+o.idx+"_dragger_vertical"),e("#mCSB_"+o.idx+"_dragger_horizontal")];if(Q(t),("x"!==n.axis&&!o.overflowed[0]||"y"===n.axis&&o.overflowed[0])&&(l[0].add(r).css("top",0),G(t,"_resetY")),"y"!==n.axis&&!o.overflowed[1]||"x"===n.axis&&o.overflowed[1]){var s=dx=0;"rtl"===o.langDir&&(s=i.width()-r.outerWidth(!1),dx=Math.abs(s/o.scrollRatio.x)),r.css("left",s),l[1].css("left",dx),G(t,"_resetX")}},T=function(){function t(){r=setTimeout(function(){e.event.special.mousewheel?(clearTimeout(r),W.call(o[0])):t()},100)}var o=e(this),n=o.data(a),i=n.opt;if(!n.bindEvents){if(I.call(this),i.contentTouchScroll&&D.call(this),E.call(this),i.mouseWheel.enable){var r;t()}P.call(this),U.call(this),i.advanced.autoScrollOnFocus&&H.call(this),i.scrollButtons.enable&&F.call(this),i.keyboard.enable&&q.call(this),n.bindEvents=!0}},k=function(){var t=e(this),o=t.data(a),n=o.opt,i=a+"_"+o.idx,r=".mCSB_"+o.idx+"_scrollbar",l=e("#mCSB_"+o.idx+",#mCSB_"+o.idx+"_container,#mCSB_"+o.idx+"_container_wrapper,"+r+" ."+d[12]+",#mCSB_"+o.idx+"_dragger_vertical,#mCSB_"+o.idx+"_dragger_horizontal,"+r+">a"),s=e("#mCSB_"+o.idx+"_container");n.advanced.releaseDraggableSelectors&&l.add(e(n.advanced.releaseDraggableSelectors)),n.advanced.extraDraggableSelectors&&l.add(e(n.advanced.extraDraggableSelectors)),o.bindEvents&&(e(document).add(e(!A()||top.document)).unbind("."+i),l.each(function(){e(this).unbind("."+i)}),clearTimeout(t[0]._focusTimeout),$(t[0],"_focusTimeout"),clearTimeout(o.sequential.step),$(o.sequential,"step"),clearTimeout(s[0].onCompleteTimeout),$(s[0],"onCompleteTimeout"),o.bindEvents=!1)},M=function(t){var o=e(this),n=o.data(a),i=n.opt,r=e("#mCSB_"+n.idx+"_container_wrapper"),l=r.length?r:e("#mCSB_"+n.idx+"_container"),s=[e("#mCSB_"+n.idx+"_scrollbar_vertical"),e("#mCSB_"+n.idx+"_scrollbar_horizontal")],c=[s[0].find(".mCSB_dragger"),s[1].find(".mCSB_dragger")];"x"!==i.axis&&(n.overflowed[0]&&!t?(s[0].add(c[0]).add(s[0].children("a")).css("display","block"),l.removeClass(d[8]+" "+d[10])):(i.alwaysShowScrollbar?(2!==i.alwaysShowScrollbar&&c[0].css("display","none"),l.removeClass(d[10])):(s[0].css("display","none"),l.addClass(d[10])),l.addClass(d[8]))),"y"!==i.axis&&(n.overflowed[1]&&!t?(s[1].add(c[1]).add(s[1].children("a")).css("display","block"),l.removeClass(d[9]+" "+d[11])):(i.alwaysShowScrollbar?(2!==i.alwaysShowScrollbar&&c[1].css("display","none"),l.removeClass(d[11])):(s[1].css("display","none"),l.addClass(d[11])),l.addClass(d[9]))),n.overflowed[0]||n.overflowed[1]?o.removeClass(d[5]):o.addClass(d[5])},O=function(t){var o=t.type,a=t.target.ownerDocument!==document&&null!==frameElement?[e(frameElement).offset().top,e(frameElement).offset().left]:null,n=A()&&t.target.ownerDocument!==top.document&&null!==frameElement?[e(t.view.frameElement).offset().top,e(t.view.frameElement).offset().left]:[0,0];switch(o){case"pointerdown":case"MSPointerDown":case"pointermove":case"MSPointerMove":case"pointerup":case"MSPointerUp":return a?[t.originalEvent.pageY-a[0]+n[0],t.originalEvent.pageX-a[1]+n[1],!1]:[t.originalEvent.pageY,t.originalEvent.pageX,!1];case"touchstart":case"touchmove":case"touchend":var i=t.originalEvent.touches[0]||t.originalEvent.changedTouches[0],r=t.originalEvent.touches.length||t.originalEvent.changedTouches.length;return t.target.ownerDocument!==document?[i.screenY,i.screenX,r>1]:[i.pageY,i.pageX,r>1];default:return a?[t.pageY-a[0]+n[0],t.pageX-a[1]+n[1],!1]:[t.pageY,t.pageX,!1]}},I=function(){function t(e,t,a,n){if(h[0].idleTimer=d.scrollInertia<233?250:0,o.attr("id")===f[1])var i="x",s=(o[0].offsetLeft-t+n)*l.scrollRatio.x;else var i="y",s=(o[0].offsetTop-e+a)*l.scrollRatio.y;G(r,s.toString(),{dir:i,drag:!0})}var o,n,i,r=e(this),l=r.data(a),d=l.opt,u=a+"_"+l.idx,f=["mCSB_"+l.idx+"_dragger_vertical","mCSB_"+l.idx+"_dragger_horizontal"],h=e("#mCSB_"+l.idx+"_container"),m=e("#"+f[0]+",#"+f[1]),p=d.advanced.releaseDraggableSelectors?m.add(e(d.advanced.releaseDraggableSelectors)):m,g=d.advanced.extraDraggableSelectors?e(!A()||top.document).add(e(d.advanced.extraDraggableSelectors)):e(!A()||top.document);m.bind("contextmenu."+u,function(e){e.preventDefault()}).bind("mousedown."+u+" touchstart."+u+" pointerdown."+u+" MSPointerDown."+u,function(t){if(t.stopImmediatePropagation(),t.preventDefault(),ee(t)){c=!0,s&&(document.onselectstart=function(){return!1}),L.call(h,!1),Q(r),o=e(this);var a=o.offset(),l=O(t)[0]-a.top,u=O(t)[1]-a.left,f=o.height()+a.top,m=o.width()+a.left;f>l&&l>0&&m>u&&u>0&&(n=l,i=u),C(o,"active",d.autoExpandScrollbar)}}).bind("touchmove."+u,function(e){e.stopImmediatePropagation(),e.preventDefault();var a=o.offset(),r=O(e)[0]-a.top,l=O(e)[1]-a.left;t(n,i,r,l)}),e(document).add(g).bind("mousemove."+u+" pointermove."+u+" MSPointerMove."+u,function(e){if(o){var a=o.offset(),r=O(e)[0]-a.top,l=O(e)[1]-a.left;if(n===r&&i===l)return;t(n,i,r,l)}}).add(p).bind("mouseup."+u+" touchend."+u+" pointerup."+u+" MSPointerUp."+u,function(){o&&(C(o,"active",d.autoExpandScrollbar),o=null),c=!1,s&&(document.onselectstart=null),L.call(h,!0)})},D=function(){function o(e){if(!te(e)||c||O(e)[2])return void(t=0);t=1,b=0,C=0,d=1,y.removeClass("mCS_touch_action");var o=I.offset();u=O(e)[0]-o.top,f=O(e)[1]-o.left,z=[O(e)[0],O(e)[1]]}function n(e){if(te(e)&&!c&&!O(e)[2]&&(T.documentTouchScroll||e.preventDefault(),e.stopImmediatePropagation(),(!C||b)&&d)){g=K();var t=M.offset(),o=O(e)[0]-t.top,a=O(e)[1]-t.left,n="mcsLinearOut";if(E.push(o),W.push(a),z[2]=Math.abs(O(e)[0]-z[0]),z[3]=Math.abs(O(e)[1]-z[1]),B.overflowed[0])var i=D[0].parent().height()-D[0].height(),r=u-o>0&&o-u>-(i*B.scrollRatio.y)&&(2*z[3]<z[2]||"yx"===T.axis);if(B.overflowed[1])var l=D[1].parent().width()-D[1].width(),h=f-a>0&&a-f>-(l*B.scrollRatio.x)&&(2*z[2]<z[3]||"yx"===T.axis);r||h?(U||e.preventDefault(),b=1):(C=1,y.addClass("mCS_touch_action")),U&&e.preventDefault(),w="yx"===T.axis?[u-o,f-a]:"x"===T.axis?[null,f-a]:[u-o,null],I[0].idleTimer=250,B.overflowed[0]&&s(w[0],R,n,"y","all",!0),B.overflowed[1]&&s(w[1],R,n,"x",L,!0)}}function i(e){if(!te(e)||c||O(e)[2])return void(t=0);t=1,e.stopImmediatePropagation(),Q(y),p=K();var o=M.offset();h=O(e)[0]-o.top,m=O(e)[1]-o.left,E=[],W=[]}function r(e){if(te(e)&&!c&&!O(e)[2]){d=0,e.stopImmediatePropagation(),b=0,C=0,v=K();var t=M.offset(),o=O(e)[0]-t.top,a=O(e)[1]-t.left;if(!(v-g>30)){_=1e3/(v-p);var n="mcsEaseOut",i=2.5>_,r=i?[E[E.length-2],W[W.length-2]]:[0,0];x=i?[o-r[0],a-r[1]]:[o-h,a-m];var u=[Math.abs(x[0]),Math.abs(x[1])];_=i?[Math.abs(x[0]/4),Math.abs(x[1]/4)]:[_,_];var f=[Math.abs(I[0].offsetTop)-x[0]*l(u[0]/_[0],_[0]),Math.abs(I[0].offsetLeft)-x[1]*l(u[1]/_[1],_[1])];w="yx"===T.axis?[f[0],f[1]]:"x"===T.axis?[null,f[1]]:[f[0],null],S=[4*u[0]+T.scrollInertia,4*u[1]+T.scrollInertia];var y=parseInt(T.contentTouchScroll)||0;w[0]=u[0]>y?w[0]:0,w[1]=u[1]>y?w[1]:0,B.overflowed[0]&&s(w[0],S[0],n,"y",L,!1),B.overflowed[1]&&s(w[1],S[1],n,"x",L,!1)}}}function l(e,t){var o=[1.5*t,2*t,t/1.5,t/2];return e>90?t>4?o[0]:o[3]:e>60?t>3?o[3]:o[2]:e>30?t>8?o[1]:t>6?o[0]:t>4?t:o[2]:t>8?t:o[3]}function s(e,t,o,a,n,i){e&&G(y,e.toString(),{dur:t,scrollEasing:o,dir:a,overwrite:n,drag:i})}var d,u,f,h,m,p,g,v,x,_,w,S,b,C,y=e(this),B=y.data(a),T=B.opt,k=a+"_"+B.idx,M=e("#mCSB_"+B.idx),I=e("#mCSB_"+B.idx+"_container"),D=[e("#mCSB_"+B.idx+"_dragger_vertical"),e("#mCSB_"+B.idx+"_dragger_horizontal")],E=[],W=[],R=0,L="yx"===T.axis?"none":"all",z=[],P=I.find("iframe"),H=["touchstart."+k+" pointerdown."+k+" MSPointerDown."+k,"touchmove."+k+" pointermove."+k+" MSPointerMove."+k,"touchend."+k+" pointerup."+k+" MSPointerUp."+k],U=void 0!==document.body.style.touchAction&&""!==document.body.style.touchAction;I.bind(H[0],function(e){o(e)}).bind(H[1],function(e){n(e)}),M.bind(H[0],function(e){i(e)}).bind(H[2],function(e){r(e)}),P.length&&P.each(function(){e(this).bind("load",function(){A(this)&&e(this.contentDocument||this.contentWindow.document).bind(H[0],function(e){o(e),i(e)}).bind(H[1],function(e){n(e)}).bind(H[2],function(e){r(e)})})})},E=function(){function o(){return window.getSelection?window.getSelection().toString():document.selection&&"Control"!=document.selection.type?document.selection.createRange().text:0}function n(e,t,o){d.type=o&&i?"stepped":"stepless",d.scrollAmount=10,j(r,e,t,"mcsLinearOut",o?60:null)}var i,r=e(this),l=r.data(a),s=l.opt,d=l.sequential,u=a+"_"+l.idx,f=e("#mCSB_"+l.idx+"_container"),h=f.parent();f.bind("mousedown."+u,function(){t||i||(i=1,c=!0)}).add(document).bind("mousemove."+u,function(e){if(!t&&i&&o()){var a=f.offset(),r=O(e)[0]-a.top+f[0].offsetTop,c=O(e)[1]-a.left+f[0].offsetLeft;r>0&&r<h.height()&&c>0&&c<h.width()?d.step&&n("off",null,"stepped"):("x"!==s.axis&&l.overflowed[0]&&(0>r?n("on",38):r>h.height()&&n("on",40)),"y"!==s.axis&&l.overflowed[1]&&(0>c?n("on",37):c>h.width()&&n("on",39)))}}).bind("mouseup."+u+" dragend."+u,function(){t||(i&&(i=0,n("off",null)),c=!1)})},W=function(){function t(t,a){if(Q(o),!z(o,t.target)){var r="auto"!==i.mouseWheel.deltaFactor?parseInt(i.mouseWheel.deltaFactor):s&&t.deltaFactor<100?100:t.deltaFactor||100,d=i.scrollInertia;if("x"===i.axis||"x"===i.mouseWheel.axis)var u="x",f=[Math.round(r*n.scrollRatio.x),parseInt(i.mouseWheel.scrollAmount)],h="auto"!==i.mouseWheel.scrollAmount?f[1]:f[0]>=l.width()?.9*l.width():f[0],m=Math.abs(e("#mCSB_"+n.idx+"_container")[0].offsetLeft),p=c[1][0].offsetLeft,g=c[1].parent().width()-c[1].width(),v="y"===i.mouseWheel.axis?t.deltaY||a:t.deltaX;else var u="y",f=[Math.round(r*n.scrollRatio.y),parseInt(i.mouseWheel.scrollAmount)],h="auto"!==i.mouseWheel.scrollAmount?f[1]:f[0]>=l.height()?.9*l.height():f[0],m=Math.abs(e("#mCSB_"+n.idx+"_container")[0].offsetTop),p=c[0][0].offsetTop,g=c[0].parent().height()-c[0].height(),v=t.deltaY||a;"y"===u&&!n.overflowed[0]||"x"===u&&!n.overflowed[1]||((i.mouseWheel.invert||t.webkitDirectionInvertedFromDevice)&&(v=-v),i.mouseWheel.normalizeDelta&&(v=0>v?-1:1),(v>0&&0!==p||0>v&&p!==g||i.mouseWheel.preventDefault)&&(t.stopImmediatePropagation(),t.preventDefault()),t.deltaFactor<5&&!i.mouseWheel.normalizeDelta&&(h=t.deltaFactor,d=17),G(o,(m-v*h).toString(),{dir:u,dur:d}))}}if(e(this).data(a)){var o=e(this),n=o.data(a),i=n.opt,r=a+"_"+n.idx,l=e("#mCSB_"+n.idx),c=[e("#mCSB_"+n.idx+"_dragger_vertical"),e("#mCSB_"+n.idx+"_dragger_horizontal")],d=e("#mCSB_"+n.idx+"_container").find("iframe");d.length&&d.each(function(){e(this).bind("load",function(){A(this)&&e(this.contentDocument||this.contentWindow.document).bind("mousewheel."+r,function(e,o){t(e,o)})})}),l.bind("mousewheel."+r,function(e,o){t(e,o)})}},R=new Object,A=function(t){var o=!1,a=!1,n=null;if(void 0===t?a="#empty":void 0!==e(t).attr("id")&&(a=e(t).attr("id")),a!==!1&&void 0!==R[a])return R[a];if(t){try{var i=t.contentDocument||t.contentWindow.document;n=i.body.innerHTML}catch(r){}o=null!==n}else{try{var i=top.document;n=i.body.innerHTML}catch(r){}o=null!==n}return a!==!1&&(R[a]=o),o},L=function(e){var t=this.find("iframe");if(t.length){var o=e?"auto":"none";t.css("pointer-events",o)}},z=function(t,o){var n=o.nodeName.toLowerCase(),i=t.data(a).opt.mouseWheel.disableOver,r=["select","textarea"];return e.inArray(n,i)>-1&&!(e.inArray(n,r)>-1&&!e(o).is(":focus"))},P=function(){var t,o=e(this),n=o.data(a),i=a+"_"+n.idx,r=e("#mCSB_"+n.idx+"_container"),l=r.parent(),s=e(".mCSB_"+n.idx+"_scrollbar ."+d[12]);s.bind("mousedown."+i+" touchstart."+i+" pointerdown."+i+" MSPointerDown."+i,function(o){c=!0,e(o.target).hasClass("mCSB_dragger")||(t=1)}).bind("touchend."+i+" pointerup."+i+" MSPointerUp."+i,function(){c=!1}).bind("click."+i,function(a){if(t&&(t=0,e(a.target).hasClass(d[12])||e(a.target).hasClass("mCSB_draggerRail"))){Q(o);var i=e(this),s=i.find(".mCSB_dragger");if(i.parent(".mCSB_scrollTools_horizontal").length>0){if(!n.overflowed[1])return;var c="x",u=a.pageX>s.offset().left?-1:1,f=Math.abs(r[0].offsetLeft)-u*(.9*l.width())}else{if(!n.overflowed[0])return;var c="y",u=a.pageY>s.offset().top?-1:1,f=Math.abs(r[0].offsetTop)-u*(.9*l.height())}G(o,f.toString(),{dir:c,scrollEasing:"mcsEaseInOut"})}})},H=function(){var t=e(this),o=t.data(a),n=o.opt,i=a+"_"+o.idx,r=e("#mCSB_"+o.idx+"_container"),l=r.parent();r.bind("focusin."+i,function(){var o=e(document.activeElement),a=r.find(".mCustomScrollBox").length,i=0;o.is(n.advanced.autoScrollOnFocus)&&(Q(t),clearTimeout(t[0]._focusTimeout),t[0]._focusTimer=a?(i+17)*a:0,t[0]._focusTimeout=setTimeout(function(){var e=[ae(o)[0],ae(o)[1]],a=[r[0].offsetTop,r[0].offsetLeft],s=[a[0]+e[0]>=0&&a[0]+e[0]<l.height()-o.outerHeight(!1),a[1]+e[1]>=0&&a[0]+e[1]<l.width()-o.outerWidth(!1)],c="yx"!==n.axis||s[0]||s[1]?"all":"none";"x"===n.axis||s[0]||G(t,e[0].toString(),{dir:"y",scrollEasing:"mcsEaseInOut",overwrite:c,dur:i}),"y"===n.axis||s[1]||G(t,e[1].toString(),{dir:"x",scrollEasing:"mcsEaseInOut",overwrite:c,dur:i})},t[0]._focusTimer))})},U=function(){var t=e(this),o=t.data(a),n=a+"_"+o.idx,i=e("#mCSB_"+o.idx+"_container").parent();i.bind("scroll."+n,function(){0===i.scrollTop()&&0===i.scrollLeft()||e(".mCSB_"+o.idx+"_scrollbar").css("visibility","hidden")})},F=function(){var t=e(this),o=t.data(a),n=o.opt,i=o.sequential,r=a+"_"+o.idx,l=".mCSB_"+o.idx+"_scrollbar",s=e(l+">a");s.bind("contextmenu."+r,function(e){e.preventDefault()}).bind("mousedown."+r+" touchstart."+r+" pointerdown."+r+" MSPointerDown."+r+" mouseup."+r+" touchend."+r+" pointerup."+r+" MSPointerUp."+r+" mouseout."+r+" pointerout."+r+" MSPointerOut."+r+" click."+r,function(a){function r(e,o){i.scrollAmount=n.scrollButtons.scrollAmount,j(t,e,o)}if(a.preventDefault(),ee(a)){var l=e(this).attr("class");switch(i.type=n.scrollButtons.scrollType,a.type){case"mousedown":case"touchstart":case"pointerdown":case"MSPointerDown":if("stepped"===i.type)return;c=!0,o.tweenRunning=!1,r("on",l);break;case"mouseup":case"touchend":case"pointerup":case"MSPointerUp":case"mouseout":case"pointerout":case"MSPointerOut":if("stepped"===i.type)return;c=!1,i.dir&&r("off",l);break;case"click":if("stepped"!==i.type||o.tweenRunning)return;r("on",l)}}})},q=function(){function t(t){function a(e,t){r.type=i.keyboard.scrollType,r.scrollAmount=i.keyboard.scrollAmount,"stepped"===r.type&&n.tweenRunning||j(o,e,t)}switch(t.type){case"blur":n.tweenRunning&&r.dir&&a("off",null);break;case"keydown":case"keyup":var l=t.keyCode?t.keyCode:t.which,s="on";if("x"!==i.axis&&(38===l||40===l)||"y"!==i.axis&&(37===l||39===l)){if((38===l||40===l)&&!n.overflowed[0]||(37===l||39===l)&&!n.overflowed[1])return;"keyup"===t.type&&(s="off"),e(document.activeElement).is(u)||(t.preventDefault(),t.stopImmediatePropagation(),a(s,l))}else if(33===l||34===l){if((n.overflowed[0]||n.overflowed[1])&&(t.preventDefault(),t.stopImmediatePropagation()),"keyup"===t.type){Q(o);var f=34===l?-1:1;if("x"===i.axis||"yx"===i.axis&&n.overflowed[1]&&!n.overflowed[0])var h="x",m=Math.abs(c[0].offsetLeft)-f*(.9*d.width());else var h="y",m=Math.abs(c[0].offsetTop)-f*(.9*d.height());G(o,m.toString(),{dir:h,scrollEasing:"mcsEaseInOut"})}}else if((35===l||36===l)&&!e(document.activeElement).is(u)&&((n.overflowed[0]||n.overflowed[1])&&(t.preventDefault(),t.stopImmediatePropagation()),"keyup"===t.type)){if("x"===i.axis||"yx"===i.axis&&n.overflowed[1]&&!n.overflowed[0])var h="x",m=35===l?Math.abs(d.width()-c.outerWidth(!1)):0;else var h="y",m=35===l?Math.abs(d.height()-c.outerHeight(!1)):0;G(o,m.toString(),{dir:h,scrollEasing:"mcsEaseInOut"})}}}var o=e(this),n=o.data(a),i=n.opt,r=n.sequential,l=a+"_"+n.idx,s=e("#mCSB_"+n.idx),c=e("#mCSB_"+n.idx+"_container"),d=c.parent(),u="input,textarea,select,datalist,keygen,[contenteditable='true']",f=c.find("iframe"),h=["blur."+l+" keydown."+l+" keyup."+l];f.length&&f.each(function(){e(this).bind("load",function(){A(this)&&e(this.contentDocument||this.contentWindow.document).bind(h[0],function(e){t(e)})})}),s.attr("tabindex","0").bind(h[0],function(e){t(e)})},j=function(t,o,n,i,r){function l(e){u.snapAmount&&(f.scrollAmount=u.snapAmount instanceof Array?"x"===f.dir[0]?u.snapAmount[1]:u.snapAmount[0]:u.snapAmount);var o="stepped"!==f.type,a=r?r:e?o?p/1.5:g:1e3/60,n=e?o?7.5:40:2.5,s=[Math.abs(h[0].offsetTop),Math.abs(h[0].offsetLeft)],d=[c.scrollRatio.y>10?10:c.scrollRatio.y,c.scrollRatio.x>10?10:c.scrollRatio.x],m="x"===f.dir[0]?s[1]+f.dir[1]*(d[1]*n):s[0]+f.dir[1]*(d[0]*n),v="x"===f.dir[0]?s[1]+f.dir[1]*parseInt(f.scrollAmount):s[0]+f.dir[1]*parseInt(f.scrollAmount),x="auto"!==f.scrollAmount?v:m,_=i?i:e?o?"mcsLinearOut":"mcsEaseInOut":"mcsLinear",w=!!e;return e&&17>a&&(x="x"===f.dir[0]?s[1]:s[0]),G(t,x.toString(),{dir:f.dir[0],scrollEasing:_,dur:a,onComplete:w}),e?void(f.dir=!1):(clearTimeout(f.step),void(f.step=setTimeout(function(){l()},a)))}function s(){clearTimeout(f.step),$(f,"step"),Q(t)}var c=t.data(a),u=c.opt,f=c.sequential,h=e("#mCSB_"+c.idx+"_container"),m="stepped"===f.type,p=u.scrollInertia<26?26:u.scrollInertia,g=u.scrollInertia<1?17:u.scrollInertia;switch(o){case"on":if(f.dir=[n===d[16]||n===d[15]||39===n||37===n?"x":"y",n===d[13]||n===d[15]||38===n||37===n?-1:1],Q(t),oe(n)&&"stepped"===f.type)return;l(m);break;case"off":s(),(m||c.tweenRunning&&f.dir)&&l(!0)}},Y=function(t){var o=e(this).data(a).opt,n=[];return"function"==typeof t&&(t=t()),t instanceof Array?n=t.length>1?[t[0],t[1]]:"x"===o.axis?[null,t[0]]:[t[0],null]:(n[0]=t.y?t.y:t.x||"x"===o.axis?null:t,n[1]=t.x?t.x:t.y||"y"===o.axis?null:t),"function"==typeof n[0]&&(n[0]=n[0]()),"function"==typeof n[1]&&(n[1]=n[1]()),n},X=function(t,o){if(null!=t&&"undefined"!=typeof t){var n=e(this),i=n.data(a),r=i.opt,l=e("#mCSB_"+i.idx+"_container"),s=l.parent(),c=typeof t;o||(o="x"===r.axis?"x":"y");var d="x"===o?l.outerWidth(!1)-s.width():l.outerHeight(!1)-s.height(),f="x"===o?l[0].offsetLeft:l[0].offsetTop,h="x"===o?"left":"top";switch(c){case"function":return t();case"object":var m=t.jquery?t:e(t);if(!m.length)return;return"x"===o?ae(m)[1]:ae(m)[0];case"string":case"number":if(oe(t))return Math.abs(t);if(-1!==t.indexOf("%"))return Math.abs(d*parseInt(t)/100);if(-1!==t.indexOf("-="))return Math.abs(f-parseInt(t.split("-=")[1]));if(-1!==t.indexOf("+=")){var p=f+parseInt(t.split("+=")[1]);return p>=0?0:Math.abs(p)}if(-1!==t.indexOf("px")&&oe(t.split("px")[0]))return Math.abs(t.split("px")[0]);if("top"===t||"left"===t)return 0;if("bottom"===t)return Math.abs(s.height()-l.outerHeight(!1));if("right"===t)return Math.abs(s.width()-l.outerWidth(!1));if("first"===t||"last"===t){var m=l.find(":"+t);return"x"===o?ae(m)[1]:ae(m)[0]}return e(t).length?"x"===o?ae(e(t))[1]:ae(e(t))[0]:(l.css(h,t),void u.update.call(null,n[0]))}}},N=function(t){function o(){return clearTimeout(f[0].autoUpdate),0===l.parents("html").length?void(l=null):void(f[0].autoUpdate=setTimeout(function(){return c.advanced.updateOnSelectorChange&&(s.poll.change.n=i(),s.poll.change.n!==s.poll.change.o)?(s.poll.change.o=s.poll.change.n,void r(3)):c.advanced.updateOnContentResize&&(s.poll.size.n=l[0].scrollHeight+l[0].scrollWidth+f[0].offsetHeight+l[0].offsetHeight+l[0].offsetWidth,s.poll.size.n!==s.poll.size.o)?(s.poll.size.o=s.poll.size.n,void r(1)):!c.advanced.updateOnImageLoad||"auto"===c.advanced.updateOnImageLoad&&"y"===c.axis||(s.poll.img.n=f.find("img").length,s.poll.img.n===s.poll.img.o)?void((c.advanced.updateOnSelectorChange||c.advanced.updateOnContentResize||c.advanced.updateOnImageLoad)&&o()):(s.poll.img.o=s.poll.img.n,void f.find("img").each(function(){n(this)}))},c.advanced.autoUpdateTimeout))}function n(t){function o(e,t){return function(){
return t.apply(e,arguments)}}function a(){this.onload=null,e(t).addClass(d[2]),r(2)}if(e(t).hasClass(d[2]))return void r();var n=new Image;n.onload=o(n,a),n.src=t.src}function i(){c.advanced.updateOnSelectorChange===!0&&(c.advanced.updateOnSelectorChange="*");var e=0,t=f.find(c.advanced.updateOnSelectorChange);return c.advanced.updateOnSelectorChange&&t.length>0&&t.each(function(){e+=this.offsetHeight+this.offsetWidth}),e}function r(e){clearTimeout(f[0].autoUpdate),u.update.call(null,l[0],e)}var l=e(this),s=l.data(a),c=s.opt,f=e("#mCSB_"+s.idx+"_container");return t?(clearTimeout(f[0].autoUpdate),void $(f[0],"autoUpdate")):void o()},V=function(e,t,o){return Math.round(e/t)*t-o},Q=function(t){var o=t.data(a),n=e("#mCSB_"+o.idx+"_container,#mCSB_"+o.idx+"_container_wrapper,#mCSB_"+o.idx+"_dragger_vertical,#mCSB_"+o.idx+"_dragger_horizontal");n.each(function(){Z.call(this)})},G=function(t,o,n){function i(e){return s&&c.callbacks[e]&&"function"==typeof c.callbacks[e]}function r(){return[c.callbacks.alwaysTriggerOffsets||w>=S[0]+y,c.callbacks.alwaysTriggerOffsets||-B>=w]}function l(){var e=[h[0].offsetTop,h[0].offsetLeft],o=[x[0].offsetTop,x[0].offsetLeft],a=[h.outerHeight(!1),h.outerWidth(!1)],i=[f.height(),f.width()];t[0].mcs={content:h,top:e[0],left:e[1],draggerTop:o[0],draggerLeft:o[1],topPct:Math.round(100*Math.abs(e[0])/(Math.abs(a[0])-i[0])),leftPct:Math.round(100*Math.abs(e[1])/(Math.abs(a[1])-i[1])),direction:n.dir}}var s=t.data(a),c=s.opt,d={trigger:"internal",dir:"y",scrollEasing:"mcsEaseOut",drag:!1,dur:c.scrollInertia,overwrite:"all",callbacks:!0,onStart:!0,onUpdate:!0,onComplete:!0},n=e.extend(d,n),u=[n.dur,n.drag?0:n.dur],f=e("#mCSB_"+s.idx),h=e("#mCSB_"+s.idx+"_container"),m=h.parent(),p=c.callbacks.onTotalScrollOffset?Y.call(t,c.callbacks.onTotalScrollOffset):[0,0],g=c.callbacks.onTotalScrollBackOffset?Y.call(t,c.callbacks.onTotalScrollBackOffset):[0,0];if(s.trigger=n.trigger,0===m.scrollTop()&&0===m.scrollLeft()||(e(".mCSB_"+s.idx+"_scrollbar").css("visibility","visible"),m.scrollTop(0).scrollLeft(0)),"_resetY"!==o||s.contentReset.y||(i("onOverflowYNone")&&c.callbacks.onOverflowYNone.call(t[0]),s.contentReset.y=1),"_resetX"!==o||s.contentReset.x||(i("onOverflowXNone")&&c.callbacks.onOverflowXNone.call(t[0]),s.contentReset.x=1),"_resetY"!==o&&"_resetX"!==o){if(!s.contentReset.y&&t[0].mcs||!s.overflowed[0]||(i("onOverflowY")&&c.callbacks.onOverflowY.call(t[0]),s.contentReset.x=null),!s.contentReset.x&&t[0].mcs||!s.overflowed[1]||(i("onOverflowX")&&c.callbacks.onOverflowX.call(t[0]),s.contentReset.x=null),c.snapAmount){var v=c.snapAmount instanceof Array?"x"===n.dir?c.snapAmount[1]:c.snapAmount[0]:c.snapAmount;o=V(o,v,c.snapOffset)}switch(n.dir){case"x":var x=e("#mCSB_"+s.idx+"_dragger_horizontal"),_="left",w=h[0].offsetLeft,S=[f.width()-h.outerWidth(!1),x.parent().width()-x.width()],b=[o,0===o?0:o/s.scrollRatio.x],y=p[1],B=g[1],T=y>0?y/s.scrollRatio.x:0,k=B>0?B/s.scrollRatio.x:0;break;case"y":var x=e("#mCSB_"+s.idx+"_dragger_vertical"),_="top",w=h[0].offsetTop,S=[f.height()-h.outerHeight(!1),x.parent().height()-x.height()],b=[o,0===o?0:o/s.scrollRatio.y],y=p[0],B=g[0],T=y>0?y/s.scrollRatio.y:0,k=B>0?B/s.scrollRatio.y:0}b[1]<0||0===b[0]&&0===b[1]?b=[0,0]:b[1]>=S[1]?b=[S[0],S[1]]:b[0]=-b[0],t[0].mcs||(l(),i("onInit")&&c.callbacks.onInit.call(t[0])),clearTimeout(h[0].onCompleteTimeout),J(x[0],_,Math.round(b[1]),u[1],n.scrollEasing),!s.tweenRunning&&(0===w&&b[0]>=0||w===S[0]&&b[0]<=S[0])||J(h[0],_,Math.round(b[0]),u[0],n.scrollEasing,n.overwrite,{onStart:function(){n.callbacks&&n.onStart&&!s.tweenRunning&&(i("onScrollStart")&&(l(),c.callbacks.onScrollStart.call(t[0])),s.tweenRunning=!0,C(x),s.cbOffsets=r())},onUpdate:function(){n.callbacks&&n.onUpdate&&i("whileScrolling")&&(l(),c.callbacks.whileScrolling.call(t[0]))},onComplete:function(){if(n.callbacks&&n.onComplete){"yx"===c.axis&&clearTimeout(h[0].onCompleteTimeout);var e=h[0].idleTimer||0;h[0].onCompleteTimeout=setTimeout(function(){i("onScroll")&&(l(),c.callbacks.onScroll.call(t[0])),i("onTotalScroll")&&b[1]>=S[1]-T&&s.cbOffsets[0]&&(l(),c.callbacks.onTotalScroll.call(t[0])),i("onTotalScrollBack")&&b[1]<=k&&s.cbOffsets[1]&&(l(),c.callbacks.onTotalScrollBack.call(t[0])),s.tweenRunning=!1,h[0].idleTimer=0,C(x,"hide")},e)}}})}},J=function(e,t,o,a,n,i,r){function l(){S.stop||(x||m.call(),x=K()-v,s(),x>=S.time&&(S.time=x>S.time?x+f-(x-S.time):x+f-1,S.time<x+1&&(S.time=x+1)),S.time<a?S.id=h(l):g.call())}function s(){a>0?(S.currVal=u(S.time,_,b,a,n),w[t]=Math.round(S.currVal)+"px"):w[t]=o+"px",p.call()}function c(){f=1e3/60,S.time=x+f,h=window.requestAnimationFrame?window.requestAnimationFrame:function(e){return s(),setTimeout(e,.01)},S.id=h(l)}function d(){null!=S.id&&(window.requestAnimationFrame?window.cancelAnimationFrame(S.id):clearTimeout(S.id),S.id=null)}function u(e,t,o,a,n){switch(n){case"linear":case"mcsLinear":return o*e/a+t;case"mcsLinearOut":return e/=a,e--,o*Math.sqrt(1-e*e)+t;case"easeInOutSmooth":return e/=a/2,1>e?o/2*e*e+t:(e--,-o/2*(e*(e-2)-1)+t);case"easeInOutStrong":return e/=a/2,1>e?o/2*Math.pow(2,10*(e-1))+t:(e--,o/2*(-Math.pow(2,-10*e)+2)+t);case"easeInOut":case"mcsEaseInOut":return e/=a/2,1>e?o/2*e*e*e+t:(e-=2,o/2*(e*e*e+2)+t);case"easeOutSmooth":return e/=a,e--,-o*(e*e*e*e-1)+t;case"easeOutStrong":return o*(-Math.pow(2,-10*e/a)+1)+t;case"easeOut":case"mcsEaseOut":default:var i=(e/=a)*e,r=i*e;return t+o*(.499999999999997*r*i+-2.5*i*i+5.5*r+-6.5*i+4*e)}}e._mTween||(e._mTween={top:{},left:{}});var f,h,r=r||{},m=r.onStart||function(){},p=r.onUpdate||function(){},g=r.onComplete||function(){},v=K(),x=0,_=e.offsetTop,w=e.style,S=e._mTween[t];"left"===t&&(_=e.offsetLeft);var b=o-_;S.stop=0,"none"!==i&&d(),c()},K=function(){return window.performance&&window.performance.now?window.performance.now():window.performance&&window.performance.webkitNow?window.performance.webkitNow():Date.now?Date.now():(new Date).getTime()},Z=function(){var e=this;e._mTween||(e._mTween={top:{},left:{}});for(var t=["top","left"],o=0;o<t.length;o++){var a=t[o];e._mTween[a].id&&(window.requestAnimationFrame?window.cancelAnimationFrame(e._mTween[a].id):clearTimeout(e._mTween[a].id),e._mTween[a].id=null,e._mTween[a].stop=1)}},$=function(e,t){try{delete e[t]}catch(o){e[t]=null}},ee=function(e){return!(e.which&&1!==e.which)},te=function(e){var t=e.originalEvent.pointerType;return!(t&&"touch"!==t&&2!==t)},oe=function(e){return!isNaN(parseFloat(e))&&isFinite(e)},ae=function(e){var t=e.parents(".mCSB_container");return[e.offset().top-t.offset().top,e.offset().left-t.offset().left]},ne=function(){function e(){var e=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var t=0;t<e.length;t++)if(e[t]+"Hidden"in document)return e[t]+"Hidden";return null}var t=e();return t?document[t]:!1};e.fn[o]=function(t){return u[t]?u[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void e.error("Method "+t+" does not exist"):u.init.apply(this,arguments)},e[o]=function(t){return u[t]?u[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void e.error("Method "+t+" does not exist"):u.init.apply(this,arguments)},e[o].defaults=i,window[o]=!0,e(window).bind("load",function(){e(n)[o](),e.extend(e.expr[":"],{mcsInView:e.expr[":"].mcsInView||function(t){var o,a,n=e(t),i=n.parents(".mCSB_container");if(i.length)return o=i.parent(),a=[i[0].offsetTop,i[0].offsetLeft],a[0]+ae(n)[0]>=0&&a[0]+ae(n)[0]<o.height()-n.outerHeight(!1)&&a[1]+ae(n)[1]>=0&&a[1]+ae(n)[1]<o.width()-n.outerWidth(!1)},mcsInSight:e.expr[":"].mcsInSight||function(t,o,a){var n,i,r,l,s=e(t),c=s.parents(".mCSB_container"),d="exact"===a[3]?[[1,0],[1,0]]:[[.9,.1],[.6,.4]];if(c.length)return n=[s.outerHeight(!1),s.outerWidth(!1)],r=[c[0].offsetTop+ae(s)[0],c[0].offsetLeft+ae(s)[1]],i=[c.parent()[0].offsetHeight,c.parent()[0].offsetWidth],l=[n[0]<i[0]?d[0]:d[1],n[1]<i[1]?d[0]:d[1]],r[0]-i[0]*l[0][0]<0&&r[0]+n[0]-i[0]*l[0][1]>=0&&r[1]-i[1]*l[1][0]<0&&r[1]+n[1]-i[1]*l[1][1]>=0},mcsOverflow:e.expr[":"].mcsOverflow||function(t){var o=e(t).data(a);if(o)return o.overflowed[0]||o.overflowed[1]}})})})});

"use strict";function zoom(t,e,n){t=void 0!==t&&Object.keys(t).length?t:{};var i=(e=void 0!==e&&Object.keys(e).length?e:{}).scaleDefault||2,r=e.scaleDifference||.5,s=e.scaleMax||10,o=e.scaleMin||1,a=e.scrollDisable||!0,u=e.transitionDuration||200,l=e.doubleclickDelay||300,c=!function(){if(["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].indexOf(navigator.platform)>-1||navigator.userAgent.includes("Mac")&&"ontouchend"in document){var t=navigator.userAgent.toLowerCase();if(t.indexOf("safari")>-1&&-1===t.indexOf("chrome"))return!0}return!1}();if(a){var d=!1;try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){d=!0}}))}catch(t){}var h=!!d&&{passive:!1},f="onwheel"in document.createElement("div")?"wheel":"mousewheel"}for(var m,b,g,v,A,p,w,x,E,L,M,F,y,z,Y,X,D,k,H,O,W,P,S,C,N,R,T,B,j,q,V,G,I=t.active||"zoom-active",J="data-scale",K="data-translate-x",Q="data-translate-y",U=t.transition||"zoom-transition",Z=t.visible||"zoom-visible",$=t.zoom||"zoom",_=document.getElementsByClassName($),tt=!1,et=[null],nt=0,it=!1,rt=0,st=[null],ot=0;ot<_.length;ot++)m=_[ot],(b=m.children[0]).setAttribute(J,1),b.setAttribute(K,0),b.setAttribute(Q,0);function at(t,e){!1===lt(t,e)&&(t.className+=" "+e)}function ut(t,e,n){return t>=e&&t<=n}function lt(t,e){var n=new RegExp("(?:^|\\s)"+e+"(?!\\S)","g");return!!t.className.match(n)}function ct(t,e,n,i){i=i||!1;for(var r=0;r<t.length;r++)t[r].addEventListener(e,n,i)}function dt(t,e,n){return t<e?t=e:t>n&&(t=n),t}function ht(t,e,n,i){t.style.cssText=c?"-moz-transform : translate("+e+", "+n+") scale("+i+"); -ms-transform : translate("+e+", "+n+") scale("+i+"); -o-transform : translate("+e+", "+n+") scale("+i+"); -webkit-transform : translate("+e+", "+n+") scale("+i+"); transform : translate3d("+e+", "+n+", 0) scale3d("+i+", "+i+", 1);":"-moz-transform : translate("+e+", "+n+") scale("+i+"); -ms-transform : translate("+e+", "+n+") scale("+i+"); -o-transform : translate("+e+", "+n+") scale("+i+"); -webkit-transform : translate("+e+", "+n+") scale("+i+"); transform : translate("+e+", "+n+") scale("+i+", "+i+")"}function ft(t){(t=t||window.event).preventDefault&&t.preventDefault(),t.returnValue=!1}function mt(t){if({37:1,38:1,39:1,40:1}[t.keyCode])return ft(t),!1}function bt(t,e){var n=new RegExp("(?:^|\\s)"+e+"(?!\\S)","g");t.className=t.className.replace(n,"")}function gt(t,e,n){return(t*n-e)/2}function vt(t){at(t,I),n&&n(t,!0)}function At(t){bt(t,I),n&&n(t,!1)}window.addEventListener("load",function(){for(var t=0;t<_.length;t++)m=_[t],at(b=m.children[0],Z);window.addEventListener("resize",function(){for(var t=0;t<_.length;t++)m=_[t],b=m.children[0],!1!==lt(m,I)&&(g=m.clientHeight,v=m.clientWidth,x=b.clientHeight,E=b.clientWidth,L=parseFloat(b.getAttribute(K)),M=parseFloat(b.getAttribute(Q)),D=gt(E,v,V=i),k=gt(x,g,V),B=E*V>v?dt(L,-1*D,D):0,j=x*V>g?dt(M,-1*k,k):0,1===V&&At(m),b.setAttribute(J,V),b.setAttribute(K,B),b.setAttribute(Q,j),ht(b,B+"px",j+"px",V))})}),ct(_,"mousedown",function(t){if(ft(),!0===it||1!==t.which)return!1;if(m=this,b=this.children[0],y=t.clientX,Y=t.clientY,null===et[0])et[0]=t.target,et[1]=y,et[2]=Y,setTimeout(function(){et=[null]},l);else if(et[0]===t.target&&nt<=5&&!0===ut(y,et[1]-10,et[1]+10)&&!0===ut(Y,et[2]-10,et[2]+10))return at(b,U),!0===lt(m,I)?(b.setAttribute(J,1),b.setAttribute(K,0),b.setAttribute(Q,0),At(m),ht(b,0,0,1)):(P=t.clientX,C=t.clientY,T=(i-1)*(R=1),D=gt(E,v,V=i),k=gt(x,g,V),V<=1?(B=0,j=0):(B=E*V<=v?0:dt(L-(P-A-v/2-L)/(V-T)*T,-1*D,D),j=x*V<=g?0:dt(M-(C-p-g/2-M)/(V-T)*T,-1*k,k)),vt(m),b.setAttribute(J,V),b.setAttribute(K,B),b.setAttribute(Q,j),ht(b,B+"px",j+"px",i)),setTimeout(function(){bt(b,U)},u),et=[null],!1;H=m.getBoundingClientRect(),A=H.left,p=H.top,g=m.clientHeight,v=m.clientWidth,x=b.clientHeight,E=b.clientWidth,L=parseFloat(b.getAttribute(K)),M=parseFloat(b.getAttribute(Q)),w=dt(parseFloat(b.getAttribute(J)),o,s),nt=0,tt=!0}),ct(_,"mouseenter",function(){!function(){if(!a)return!1;window.addEventListener("DOMMouseScroll",ft,!1),window.addEventListener(f,ft,h),window.addEventListener("touchmove",ft,h),window.addEventListener("keydown",mt,!1)}()}),ct(_,"mouseleave",function(){!function(){if(!a)return!1;window.removeEventListener("DOMMouseScroll",ft,!1),window.removeEventListener(f,ft,h),window.removeEventListener("touchmove",ft,h),window.removeEventListener("keydown",mt,!1)}()}),document.addEventListener("mousemove",function(t){if(!0===it||!1===tt)return!1;P=t.clientX,C=t.clientY,D=gt(E,v,V=w),k=gt(x,g,V),B=E*V<=v?0:dt(P-(y-L),-1*D,D),j=x*V<=g?0:dt(C-(Y-M),-1*k,k),nt++,Math.abs(B)===Math.abs(D)&&(L=B,y=P);Math.abs(j)===Math.abs(k)&&(M=j,Y=C);b.setAttribute(J,V),b.setAttribute(K,B),b.setAttribute(Q,j),ht(b,B+"px",j+"px",V)}),document.addEventListener("mouseup",function(){if(!0===it||!1===tt)return!1;tt=!1}),document.addEventListener("touchstart",function(){it=!0}),ct(_,"touchstart",function(t){if(ft(),t.touches.length>2)return!1;if(m=this,b=this.children[0],H=m.getBoundingClientRect(),A=H.left,p=H.top,g=m.clientHeight,v=m.clientWidth,x=b.clientHeight,E=b.clientWidth,y=t.touches[0].clientX,Y=t.touches[0].clientY,w=dt(parseFloat(b.getAttribute(J)),o,s),1===(G=t.touches.length)){if(null===st[0])st[0]=t.target,st[1]=y,st[2]=Y,setTimeout(function(){st=[null]},l);else if(st[0]===t.target&&rt<=1&&!0===ut(y,st[1]-10,st[1]+10)&&!0===ut(Y,st[2]-10,st[2]+10))return at(b,U),!0===lt(m,I)?(b.setAttribute(J,1),b.setAttribute(K,0),b.setAttribute(Q,0),At(m),ht(b,0,0,1)):(P=t.touches[0].clientX,C=t.touches[0].clientY,T=(i-1)*(R=1),D=gt(E,v,V=i),k=gt(x,g,V),V<=1?(B=0,j=0):(B=E*V<=v?0:dt(L-(P-A-v/2-L)/(V-T)*T,-1*D,D),j=x*V<=g?0:dt(M-(C-p-g/2-M)/(V-T)*T,-1*k,k)),vt(m),b.setAttribute(J,V),b.setAttribute(K,B),b.setAttribute(Q,j),ht(b,B+"px",j+"px",i)),setTimeout(function(){bt(b,U)},u),st=[null],!1;L=parseFloat(b.getAttribute(K)),M=parseFloat(b.getAttribute(Q))}else 2===G&&(L=parseFloat(b.getAttribute(K)),M=parseFloat(b.getAttribute(Q)),z=t.touches[1].clientX,X=t.touches[1].clientY,O=(y+z)/2,W=(Y+X)/2,F=Math.sqrt((y-z)*(y-z)+(Y-X)*(Y-X)));rt=0,tt=!0}),document.addEventListener("touchmove",function(t){if(ft(),!1===tt)return!1;P=t.touches[0].clientX,C=t.touches[0].clientY,G=t.touches.length,rt++,G>1?(S=t.touches[1].clientX,N=t.touches[1].clientY,q=Math.sqrt((P-S)*(P-S)+(C-N)*(C-N)),null===F&&(F=q),Math.abs(F-q)>=1&&(V=dt(q/F*w,o,s),D=gt(E,v,V),k=gt(x,g,V),T=V-w,B=E*V<=v?0:dt(L-(O-A-v/2-L)/(V-T)*T,-1*D,D),j=x*V<=g?0:dt(M-(W-p-g/2-M)/(V-T)*T,-1*k,k),V>1?vt(m):At(m),ht(b,B+"px",j+"px",V),F=q,w=V,L=B,M=j)):(D=gt(E,v,V=w),k=gt(x,g,V),B=E*V<=v?0:dt(P-(y-L),-1*D,D),j=x*V<=g?0:dt(C-(Y-M),-1*k,k),Math.abs(B)===Math.abs(D)&&(L=B,y=P),Math.abs(j)===Math.abs(k)&&(M=j,Y=C),b.setAttribute(J,w),b.setAttribute(K,B),b.setAttribute(Q,j),ht(b,B+"px",j+"px",V))},{passive:!1}),document.addEventListener("touchend",function(t){if(G=t.touches.length,!1===tt)return!1;0===G?(b.setAttribute(J,w),b.setAttribute(K,B),b.setAttribute(Q,j),F=null,tt=!1):1===G?(y=t.touches[0].clientX,Y=t.touches[0].clientY):G>1&&(F=null)}),ct(_,"wheel",function(t){if(m=this,b=this.children[0],H=m.getBoundingClientRect(),g=m.clientHeight,v=m.clientWidth,x=b.clientHeight,E=b.clientWidth,A=H.left,p=H.top,w=dt(parseFloat(b.getAttribute(J),o,s)),L=parseFloat(b.getAttribute(K)),M=parseFloat(b.getAttribute(Q)),P=t.clientX,C=t.clientY,R=t.deltaY<0?1:-1,(V=w+(T=r*R))<o||V>s)return!1;D=gt(E,v,V),k=gt(x,g,V),V<=1?(B=0,j=0):(B=E*V<=v?0:dt(L-(P-A-v/2-L)/(V-T)*T,-1*D,D),j=x*V<=g?0:dt(M-(C-p-g/2-M)/(V-T)*T,-1*k,k));V>1?vt(m):At(m);b.setAttribute(J,V),b.setAttribute(K,B),b.setAttribute(Q,j),ht(b,B+"px",j+"px",V)})}"undefined"!=typeof module&&(module.exports={zoom:zoom});