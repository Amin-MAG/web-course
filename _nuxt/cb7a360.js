(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{273:function(t,e,r){var n=r(41),o=r(281);t.exports=n?o:function(t){return Map.prototype.entries.call(t)}},274:function(t,e,r){"use strict";var n=r(318);e.a=n.a},276:function(t,e,r){"use strict";var n=r(316);e.a=n.a},278:function(t,e,r){"use strict";var n=r(2),o=r(4),c=r(77),l=r(29),d=r(188),h=r(183),v=r(187),f=r(13),m=r(3),_=r(129),x=r(79),S=r(130);t.exports=function(t,e,r){var y=-1!==t.indexOf("Map"),E=-1!==t.indexOf("Weak"),I=y?"set":"add",R=o[t],w=R&&R.prototype,T=R,C={},z=function(t){var e=w[t];l(w,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(E&&!f(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return E&&!f(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(E&&!f(t))&&e.call(this,0===t?0:t)}:function(t,r){return e.call(this,0===t?0:t,r),this})};if(c(t,"function"!=typeof R||!(E||w.forEach&&!m((function(){(new R).entries().next()})))))T=r.getConstructor(e,t,y,I),d.REQUIRED=!0;else if(c(t,!0)){var O=new T,A=O[I](E?{}:-0,1)!=O,k=m((function(){O.has(1)})),$=_((function(t){new R(t)})),j=!E&&m((function(){for(var t=new R,e=5;e--;)t[I](e,e);return!t.has(-0)}));$||((T=e((function(e,r){v(e,T,t);var n=S(new R,e,T);return null!=r&&h(r,n[I],{that:n,AS_ENTRIES:y}),n}))).prototype=w,w.constructor=T),(k||j)&&(z("delete"),z("has"),y&&z("get")),(j||A)&&z(I),E&&w.clear&&delete w.clear}return C[t]=T,n({global:!0,forced:T!=R},C),x(T,t),E||r.setStrong(T,t,y),T}},279:function(t,e,r){"use strict";var n=r(19).f,o=r(78),c=r(189),l=r(73),d=r(187),h=r(183),v=r(126),f=r(127),m=r(18),_=r(188).fastKey,x=r(52),S=x.set,y=x.getterFor;t.exports={getConstructor:function(t,e,r,v){var f=t((function(t,n){d(t,f,e),S(t,{type:e,index:o(null),first:void 0,last:void 0,size:0}),m||(t.size=0),null!=n&&h(n,t[v],{that:t,AS_ENTRIES:r})})),x=y(e),E=function(t,e,r){var n,o,c=x(t),l=I(t,e);return l?l.value=r:(c.last=l={index:o=_(e,!0),key:e,value:r,previous:n=c.last,next:void 0,removed:!1},c.first||(c.first=l),n&&(n.next=l),m?c.size++:t.size++,"F"!==o&&(c.index[o]=l)),t},I=function(t,e){var r,n=x(t),o=_(e);if("F"!==o)return n.index[o];for(r=n.first;r;r=r.next)if(r.key==e)return r};return c(f.prototype,{clear:function(){for(var t=x(this),data=t.index,e=t.first;e;)e.removed=!0,e.previous&&(e.previous=e.previous.next=void 0),delete data[e.index],e=e.next;t.first=t.last=void 0,m?t.size=0:this.size=0},delete:function(t){var e=this,r=x(e),n=I(e,t);if(n){var o=n.next,c=n.previous;delete r.index[n.index],n.removed=!0,c&&(c.next=o),o&&(o.previous=c),r.first==n&&(r.first=o),r.last==n&&(r.last=c),m?r.size--:e.size--}return!!n},forEach:function(t){for(var e,r=x(this),n=l(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.next:r.first;)for(n(e.value,e.key,this);e&&e.removed;)e=e.previous},has:function(t){return!!I(this,t)}}),c(f.prototype,r?{get:function(t){var e=I(this,t);return e&&e.value},set:function(t,e){return E(this,0===t?0:t,e)}}:{add:function(t){return E(this,t=0===t?0:t,t)}}),m&&n(f.prototype,"size",{get:function(){return x(this).size}}),f},setStrong:function(t,e,r){var n=e+" Iterator",o=y(e),c=y(n);v(t,e,(function(t,e){S(this,{type:n,target:t,state:o(t),kind:e,last:void 0})}),(function(){for(var t=c(this),e=t.kind,r=t.last;r&&r.removed;)r=r.previous;return t.target&&(t.last=r=r?r.next:t.state.first)?"keys"==e?{value:r.key,done:!1}:"values"==e?{value:r.value,done:!1}:{value:[r.key,r.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),r?"entries":"values",!r,!0),f(e)}}},280:function(t,e,r){"use strict";var n=r(11),o=r(60);t.exports=function(){for(var t,e=n(this),r=o(e.delete),c=!0,l=0,d=arguments.length;l<d;l++)t=r.call(e,arguments[l]),c=c&&t;return!!c}},281:function(t,e,r){var n=r(11),o=r(128);t.exports=function(t){var e=o(t);if("function"!=typeof e)throw TypeError(String(t)+" is not iterable");return n(e.call(t))}},282:function(t,e){t.exports=function(t,e){return t===e||t!=t&&e!=e}},283:function(t,e,r){"use strict";var n=r(278),o=r(279);t.exports=n("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),o)},284:function(t,e,r){"use strict";var n=r(2),o=r(41),c=r(280);n({target:"Map",proto:!0,real:!0,forced:o},{deleteAll:function(){return c.apply(this,arguments)}})},285:function(t,e,r){"use strict";var n=r(2),o=r(41),c=r(11),l=r(73),d=r(273),h=r(183);n({target:"Map",proto:!0,real:!0,forced:o},{every:function(t){var map=c(this),e=d(map),r=l(t,arguments.length>1?arguments[1]:void 0,3);return!h(e,(function(t,e,n){if(!r(e,t,map))return n()}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},286:function(t,e,r){"use strict";var n=r(2),o=r(41),c=r(44),l=r(11),d=r(60),h=r(73),v=r(99),f=r(273),m=r(183);n({target:"Map",proto:!0,real:!0,forced:o},{filter:function(t){var map=l(this),e=f(map),r=h(t,arguments.length>1?arguments[1]:void 0,3),n=new(v(map,c("Map"))),o=d(n.set);return m(e,(function(t,e){r(e,t,map)&&o.call(n,t,e)}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),n}})},287:function(t,e,r){"use strict";var n=r(2),o=r(41),c=r(11),l=r(73),d=r(273),h=r(183);n({target:"Map",proto:!0,real:!0,forced:o},{find:function(t){var map=c(this),e=d(map),r=l(t,arguments.length>1?arguments[1]:void 0,3);return h(e,(function(t,e,n){if(r(e,t,map))return n(e)}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},288:function(t,e,r){"use strict";var n=r(2),o=r(41),c=r(11),l=r(73),d=r(273),h=r(183);n({target:"Map",proto:!0,real:!0,forced:o},{findKey:function(t){var map=c(this),e=d(map),r=l(t,arguments.length>1?arguments[1]:void 0,3);return h(e,(function(t,e,n){if(r(e,t,map))return n(t)}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},289:function(t,e,r){"use strict";var n=r(2),o=r(41),c=r(11),l=r(273),d=r(282),h=r(183);n({target:"Map",proto:!0,real:!0,forced:o},{includes:function(t){return h(l(c(this)),(function(e,r,n){if(d(r,t))return n()}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},290:function(t,e,r){"use strict";var n=r(2),o=r(41),c=r(11),l=r(273),d=r(183);n({target:"Map",proto:!0,real:!0,forced:o},{keyOf:function(t){return d(l(c(this)),(function(e,r,n){if(r===t)return n(e)}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},291:function(t,e,r){"use strict";var n=r(2),o=r(41),c=r(44),l=r(11),d=r(60),h=r(73),v=r(99),f=r(273),m=r(183);n({target:"Map",proto:!0,real:!0,forced:o},{mapKeys:function(t){var map=l(this),e=f(map),r=h(t,arguments.length>1?arguments[1]:void 0,3),n=new(v(map,c("Map"))),o=d(n.set);return m(e,(function(t,e){o.call(n,r(e,t,map),e)}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),n}})},292:function(t,e,r){"use strict";var n=r(2),o=r(41),c=r(44),l=r(11),d=r(60),h=r(73),v=r(99),f=r(273),m=r(183);n({target:"Map",proto:!0,real:!0,forced:o},{mapValues:function(t){var map=l(this),e=f(map),r=h(t,arguments.length>1?arguments[1]:void 0,3),n=new(v(map,c("Map"))),o=d(n.set);return m(e,(function(t,e){o.call(n,t,r(e,t,map))}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),n}})},293:function(t,e,r){"use strict";var n=r(2),o=r(41),c=r(11),l=r(60),d=r(183);n({target:"Map",proto:!0,real:!0,forced:o},{merge:function(t){for(var map=c(this),e=l(map.set),i=0;i<arguments.length;)d(arguments[i++],e,{that:map,AS_ENTRIES:!0});return map}})},294:function(t,e,r){"use strict";var n=r(2),o=r(41),c=r(11),l=r(60),d=r(273),h=r(183);n({target:"Map",proto:!0,real:!0,forced:o},{reduce:function(t){var map=c(this),e=d(map),r=arguments.length<2,n=r?void 0:arguments[1];if(l(t),h(e,(function(e,o){r?(r=!1,n=o):n=t(n,o,e,map)}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),r)throw TypeError("Reduce of empty map with no initial value");return n}})},295:function(t,e,r){"use strict";var n=r(2),o=r(41),c=r(11),l=r(73),d=r(273),h=r(183);n({target:"Map",proto:!0,real:!0,forced:o},{some:function(t){var map=c(this),e=d(map),r=l(t,arguments.length>1?arguments[1]:void 0,3);return h(e,(function(t,e,n){if(r(e,t,map))return n()}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},296:function(t,e,r){"use strict";var n=r(2),o=r(41),c=r(11),l=r(60);n({target:"Map",proto:!0,real:!0,forced:o},{update:function(t,e){var map=c(this),r=arguments.length;l(e);var n=map.has(t);if(!n&&r<3)throw TypeError("Updating absent value");var o=n?map.get(t):l(r>2?arguments[2]:void 0)(t,map);return map.set(t,e(o,t,map)),map}})},298:function(t,e,r){"use strict";var n=r(2),o=r(185);n({target:"String",proto:!0,forced:r(186)("fixed")},{fixed:function(){return o(this,"tt","","")}})},304:function(t,e,r){"use strict";var n=r(2),o=r(185);n({target:"String",proto:!0,forced:r(186)("small")},{small:function(){return o(this,"small","","")}})},305:function(t,e,r){"use strict";var n,o=r(2),c=r(57).f,l=r(22),d=r(132),h=r(24),v=r(133),f=r(41),m="".endsWith,_=Math.min,x=v("endsWith");o({target:"String",proto:!0,forced:!!(f||x||(n=c(String.prototype,"endsWith"),!n||n.writable))&&!x},{endsWith:function(t){var e=String(h(this));d(t);var r=arguments.length>1?arguments[1]:void 0,n=l(e.length),o=void 0===r?n:_(l(r),n),c=String(t);return m?m.call(e,c,o):e.slice(o-c.length,o)===c}})},306:function(t,e,r){var content=r(307);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(43).default)("1cdf85c7",content,!0,{sourceMap:!1})},307:function(t,e,r){var n=r(42)(!1);n.push([t.i,".theme--light.v-image{color:rgba(0,0,0,.87)}.theme--dark.v-image{color:#fff}.v-image{z-index:0}.v-image__image,.v-image__placeholder{z-index:-1;position:absolute;top:0;left:0;width:100%;height:100%}.v-image__image{background-repeat:no-repeat}.v-image__image--preload{filter:blur(2px)}.v-image__image--contain{background-size:contain}.v-image__image--cover{background-size:cover}",""]),t.exports=n},308:function(t,e,r){var content=r(309);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(43).default)("2fba213c",content,!0,{sourceMap:!1})},309:function(t,e,r){var n=r(42)(!1);n.push([t.i,".v-responsive{position:relative;overflow:hidden;flex:1 0 auto;max-width:100%;display:flex}.v-responsive__content{flex:1 0 0px;max-width:100%}.v-application--is-ltr .v-responsive__sizer~.v-responsive__content{margin-left:-100%}.v-application--is-rtl .v-responsive__sizer~.v-responsive__content{margin-right:-100%}.v-responsive__sizer{transition:padding-bottom .2s cubic-bezier(.25,.8,.5,1);flex:1 0 0px}",""]),t.exports=n},314:function(t,e,r){"use strict";var n=r(2),o=r(185);n({target:"String",proto:!0,forced:r(186)("link")},{link:function(t){return o(this,"a","href",t)}})},321:function(t,e,r){var content=r(322);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(43).default)("5db1c400",content,!0,{sourceMap:!1})},322:function(t,e,r){var n=r(42)(!1);n.push([t.i,'.theme--light.v-alert .v-alert--prominent .v-alert__icon:after{background:rgba(0,0,0,.12)}.theme--dark.v-alert .v-alert--prominent .v-alert__icon:after{background:hsla(0,0%,100%,.12)}.v-sheet.v-alert{border-radius:4px}.v-sheet.v-alert:not(.v-sheet--outlined){box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-sheet.v-alert.v-sheet--shaped{border-radius:24px 4px}.v-alert{display:block;font-size:16px;margin-bottom:16px;padding:16px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-alert:not(.v-sheet--tile){border-radius:4px}.v-application--is-ltr .v-alert>.v-alert__content,.v-application--is-ltr .v-alert>.v-icon{margin-right:16px}.v-application--is-rtl .v-alert>.v-alert__content,.v-application--is-rtl .v-alert>.v-icon{margin-left:16px}.v-application--is-ltr .v-alert>.v-icon+.v-alert__content{margin-right:0}.v-application--is-rtl .v-alert>.v-icon+.v-alert__content{margin-left:0}.v-application--is-ltr .v-alert>.v-alert__content+.v-icon{margin-right:0}.v-application--is-rtl .v-alert>.v-alert__content+.v-icon{margin-left:0}.v-alert__border{border-style:solid;border-width:4px;content:"";position:absolute}.v-alert__border:not(.v-alert__border--has-color){opacity:.26}.v-alert__border--left,.v-alert__border--right{bottom:0;top:0}.v-alert__border--bottom,.v-alert__border--top{left:0;right:0}.v-alert__border--bottom{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit;bottom:0}.v-application--is-ltr .v-alert__border--left{border-top-left-radius:inherit;border-bottom-left-radius:inherit;left:0}.v-application--is-ltr .v-alert__border--right,.v-application--is-rtl .v-alert__border--left{border-top-right-radius:inherit;border-bottom-right-radius:inherit;right:0}.v-application--is-rtl .v-alert__border--right{border-top-left-radius:inherit;border-bottom-left-radius:inherit;left:0}.v-alert__border--top{border-top-left-radius:inherit;border-top-right-radius:inherit;top:0}.v-alert__content{flex:1 1 auto}.v-application--is-ltr .v-alert__dismissible{margin:-16px -8px -16px 8px}.v-application--is-rtl .v-alert__dismissible{margin:-16px 8px -16px -8px}.v-alert__icon{align-self:flex-start;border-radius:50%;height:24px;min-width:24px;position:relative}.v-application--is-ltr .v-alert__icon{margin-right:16px}.v-application--is-rtl .v-alert__icon{margin-left:16px}.v-alert__icon.v-icon{font-size:24px}.v-alert__wrapper{align-items:center;border-radius:inherit;display:flex}.v-alert--dense{padding-top:8px;padding-bottom:8px}.v-alert--dense .v-alert__border{border-width:medium}.v-alert--outlined{background:transparent!important;border:thin solid!important}.v-alert--outlined .v-alert__icon{color:inherit!important}.v-alert--prominent .v-alert__icon{align-self:center;height:48px;min-width:48px}.v-alert--prominent .v-alert__icon:after{background:currentColor!important;border-radius:50%;bottom:0;content:"";left:0;opacity:.16;position:absolute;right:0;top:0}.v-alert--prominent .v-alert__icon.v-icon{font-size:32px}.v-alert--text{background:transparent!important}.v-alert--text:before{background-color:currentColor;border-radius:inherit;bottom:0;content:"";left:0;opacity:.12;position:absolute;pointer-events:none;right:0;top:0}',""]),t.exports=n},330:function(t,e,r){"use strict";r.r(e);r(30);var n={name:"Homepage",computed:{assistantsColumns:function(){switch(this.$vuetify.breakpoint.name){case"xs":return 6;case"sm":case"md":return 4;case"lg":case"xl":return 3}},textSize:function(){switch(this.$vuetify.breakpoint.name){case"xs":case"sm":return{charactersTitle:"text-h8",characters:"text-caption"};case"md":case"lg":case"xl":return{charactersTitle:"text-h5",characters:"text-h7"}}}},props:["people"]},o=r(51),c=r(76),l=r.n(c),d=(r(50),r(7)),h=(r(321),r(297)),v=r(274),f=r(276),m=r(300),_=r(124),x=r(0).a.extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),S=r(123),y=r(28);function E(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function I(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?E(Object(source),!0).forEach((function(e){Object(d.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):E(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var R=Object(S.a)(h.a,m.a,x).extend({name:"v-alert",props:{border:{type:String,validator:function(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator:function(t){return"string"==typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder:function(){if(!this.border)return null;var data={staticClass:"v-alert__border",class:Object(d.a)({},"v-alert__border--".concat(this.border),!0)};return this.coloredBorder&&((data=this.setBackgroundColor(this.computedColor,data)).class["v-alert__border--has-color"]=!0),this.$createElement("div",data)},__cachedDismissible:function(){var t=this;if(!this.dismissible)return null;var e=this.iconColor;return this.$createElement(v.a,{staticClass:"v-alert__dismissible",props:{color:e,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(){return t.isActive=!1}}},[this.$createElement(f.a,{props:{color:e}},this.closeIcon)])},__cachedIcon:function(){return this.computedIcon?this.$createElement(f.a,{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes:function(){var t=I(I({},h.a.options.computed.classes.call(this)),{},{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(t["v-alert--border-".concat(this.border)]=!0),t},computedColor:function(){return this.color||this.type},computedIcon:function(){return!1!==this.icon&&("string"==typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$".concat(this.type))},hasColoredIcon:function(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText:function(){return this.text||this.outlined},iconColor:function(){return this.hasColoredIcon?this.computedColor:void 0},isDark:function(){return!(!this.type||this.coloredBorder||this.outlined)||_.a.options.computed.isDark.call(this)}},created:function(){this.$attrs.hasOwnProperty("outline")&&Object(y.a)("outline","outlined",this)},methods:{genWrapper:function(){var t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible];return this.$createElement("div",{staticClass:"v-alert__wrapper"},t)},genContent:function(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert:function(){var data={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};this.coloredBorder||(data=(this.hasText?this.setTextColor:this.setBackgroundColor)(this.computedColor,data));return this.$createElement("div",data,[this.genWrapper()])},toggle:function(){this.isActive=!this.isActive}},render:function(t){var e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}}),w=r(361),T=r(332),C=r(362),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",{staticClass:"mt-4",attrs:{justify:"center",align:"center"}},[r("v-col",{attrs:{lg:"1",xl:"1",md:"1",cols:"0"}}),t._v(" "),r("v-col",{staticClass:"justify-center",attrs:{lg:"10",xl:"10",md:"10",cols:"12"}},[r("v-alert",{attrs:{dense:"",outlined:"",type:"info"}},[r("strong",[t._v("Announcements:")]),t._v(" "),r("br",{staticStyle:{clear:"both"}}),t._v(" "),r("ul",[r("li",[t._v("Announcement 1")]),t._v(" "),r("li",[t._v("Announcement 2")]),t._v(" "),r("li",[t._v("Announcement 3")])])]),t._v(" "),r("div",{staticClass:"mt-6"},[r("div",{staticClass:"text-h5"},[t._v("Course Description")]),t._v(" "),r("div",{staticClass:"mt-2 text-body-1"},[t._v("In higher education in various countries, such as Canada, Israel, Nigeria and\n        the United States, a course is a unit of teaching that typically lasts one academic term, is led by one or\n        more instructors, and has a fixed roster of students. A course usually covers an individual subject.\n      ")])]),t._v(" "),r("v-row",{staticClass:"mt-4"},[r("v-col",{staticClass:"justify-center",attrs:{cols:"4"}},[r("div",{class:""+t.textSize.charactersTitle},[t._v("Professor")]),t._v(" "),r("div",{staticClass:"pa-4 d-flex flex-column align-center justify-center"},[r("v-img",{staticClass:"rounded-circle",attrs:{width:"xs"===this.$vuetify.breakpoint.name?"100%":"75%",src:t.people.professor.image,alt:t.people.professor.name}})],1),t._v(" "),r("div",{class:"mt-2 text-center "+t.textSize.characters},[t._v("\n          "+t._s(t.people.professor.name)+"\n        ")])]),t._v(" "),r("v-col",{attrs:{cols:"8"}},[r("div",{class:""+t.textSize.charactersTitle},[t._v("Teacher Assistants")]),t._v(" "),r("v-row",t._l(t.people.assistants,(function(e,n){return r("v-col",{key:n,staticClass:"justify-center",attrs:{cols:t.assistantsColumns}},[r("div",{staticClass:"pa-4 d-flex flex-column align-center justify-center"},[r("v-img",{staticClass:"rounded-circle",attrs:{width:"100%",src:e.image,alt:e.name}})],1),t._v(" "),r("div",{class:"mt-2 text-center "+t.textSize.characters},[t._v("\n              "+t._s(e.name)+"\n            ")])])})),1)],1)],1)],1),t._v(" "),r("v-col",{attrs:{lg:"1",xl:"1",md:"1",cols:"0"}})],1)}),[],!1,null,"19ffc215",null);e.default=component.exports;l()(component,{VAlert:R,VCol:w.a,VImg:T.a,VRow:C.a})},332:function(t,e,r){"use strict";r(83),r(184),r(305),r(45),r(47);var n=r(23);r(306),r(190);function o(t){t._observe&&(t._observe.observer.unobserve(t),delete t._observe)}var c={inserted:function(t,e){var r=e.modifiers||{},c=e.value,l="object"===Object(n.a)(c)?c:{handler:c,options:{}},d=l.handler,h=l.options,v=new IntersectionObserver((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;if(t._observe){if(d&&(!r.quiet||t._observe.init)){var c=Boolean(e.find((function(t){return t.isIntersecting})));d(e,n,c)}t._observe.init&&r.once?o(t):t._observe.init=!0}}),h);t._observe={init:!1,observer:v},v.observe(t)},unbind:o},l=(r(308),r(299)),d=r(123),h=Object(d.a)(l.a).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),v=r(124),f=r(125),m=r(28),_="undefined"!=typeof window&&"IntersectionObserver"in window;e.a=Object(d.a)(h,v.a).extend({name:"v-img",directives:{intersect:c},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio:function(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc:function(){return this.src&&"object"===Object(n.a)(this.src)?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage:function(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient(".concat(this.gradient,")")),e&&t.push('url("'.concat(e,'")'));var image=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[image]):image}},watch:{src:function(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(t,e,r){if(!_||r||this.eager){if(this.normalisedSrc.lazySrc){var n=new Image;n.src=this.normalisedSrc.lazySrc,this.pollForSize(n,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError:function(){this.hasError=!0,this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,image=new Image;this.image=image,image.onload=function(){image.decode?image.decode().catch((function(e){Object(m.c)("Failed to decode image, trying to render anyway\n\n"+"src: ".concat(t.normalisedSrc.src)+(e.message?"\nOriginal error: ".concat(e.message):""),t)})).then(t.onLoad):t.onLoad()},image.onerror=this.onError,this.hasError=!1,image.src=this.normalisedSrc.src,this.sizes&&(image.sizes=this.sizes),this.normalisedSrc.srcset&&(image.srcset=this.normalisedSrc.srcset),this.aspectRatio||this.pollForSize(image),this.getSrc()},pollForSize:function(img){var t=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,r=function r(){var n=img.naturalHeight,o=img.naturalWidth;n||o?(t.naturalWidth=o,t.calculatedAspectRatio=o/n):img.complete||!t.isLoading||t.hasError||null==e||setTimeout(r,e)};r()},genContent:function(){var content=h.options.methods.genContent.call(this);return this.naturalWidth&&this._b(content.data,"div",{style:{width:"".concat(this.naturalWidth,"px")}}),content},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render:function(t){var e=h.options.render.call(this,t),data=Object(f.a)(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:_?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,data,e.children)}})}}]);