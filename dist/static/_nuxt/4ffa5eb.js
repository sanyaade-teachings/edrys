(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{507:function(t,e,r){var content=r(508);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(20).default)("7132a15d",content,!0,{sourceMap:!1})},508:function(t,e,r){var n=r(19)(!1);n.push([t.i,".theme--light.v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-divider{border-color:hsla(0,0%,100%,.12)}.v-divider{display:block;flex:1 1 0px;max-width:100%;height:0;max-height:0;border:solid;border-width:thin 0 0;transition:inherit}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px)}.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical){margin-left:72px}.v-application--is-rtl .v-divider--inset:not(.v-divider--vertical){margin-right:72px}.v-divider--vertical{align-self:stretch;border:solid;border-width:0 thin 0 0;display:inline-flex;height:inherit;min-height:100%;max-height:100%;max-width:0;width:0;vertical-align:text-bottom;margin:0 -1px}.v-divider--vertical.v-divider--inset{margin-top:8px;min-height:0;max-height:calc(100% - 16px)}",""]),t.exports=n},535:function(t,e,r){var content=r(591);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(20).default)("6ea3b217",content,!0,{sourceMap:!1})},538:function(t,e,r){"use strict";r(14),r(4),r(13),r(97),r(33),r(297),r(502),r(83),r(99);var n=r(1);var o,c=r(100);e.a=(o="container",n.a.extend({name:"v-".concat(o),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,e){var r=e.props,data=e.data,n=e.children;data.staticClass="".concat(o," ").concat(data.staticClass||"").trim();var c=data.attrs;if(c){data.attrs={};var l=Object.keys(c).filter((function(t){if("slot"===t)return!1;var e=c[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));l.length&&(data.staticClass+=" ".concat(l.join(" ")))}return r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),t(r.tag,data,n)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var r,n=e.props,data=e.data,o=e.children,l=data.attrs;return l&&(data.attrs={},r=Object.keys(l).filter((function(t){if("slot"===t)return!1;var e=l[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),t(n.tag,Object(c.a)(data,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(r||[])}),o)}})},556:function(t,e,r){"use strict";r(13),r(12),r(14),r(4),r(15),r(11),r(16);var n=r(2),o=(r(507),r(25));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=o.a.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:l({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:l({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},590:function(t,e,r){"use strict";r(535)},591:function(t,e,r){var n=r(19)(!1);n.push([t.i,".items[data-v-633044e7]{-moz-column-count:3;column-count:3;grid-column-gap:10px;-moz-column-gap:10px;column-gap:10px;padding:0}.item[data-v-633044e7]{display:inline-block;width:100%;margin:5px 0}@media only screen and (max-width:1200px){.items[data-v-633044e7]{-moz-column-count:3;column-count:3}}@media only screen and (max-width:500px){.items[data-v-633044e7]{-moz-column-count:1;column-count:1}}",""]),t.exports=n},608:function(t,e,r){"use strict";r.r(e);var n=r(26),o=(r(98),{name:"IndexPage",data:function(){return{canCreateClass:!1,creatingClass:!1,alertCantCreateClass:!1}},head:function(){return{title:"Home"}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/data/canCreateClass",{timeout:1e3});case 2:return t.canCreateClass=e.sent,e.t0=t.$store,e.next=6,t.$axios.$get("/data/readUser");case 6:e.t1=e.sent,e.t0.commit.call(e.t0,"setUser",e.t1);case 8:case"end":return e.stop()}}),e)})))()},methods:{createClass:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.creatingClass=!0,e.next=3,t.$axios.$get("data/createClass");case 3:r=e.sent,t.$router.push({path:"/class/".concat(encodeURIComponent(r),"#settings")}),t.creatingClass=!1;case 6:case"end":return e.stop()}}),e)})))()}}}),c=(r(590),r(107)),l=r(141),d=r.n(l),v=r(223),h=r(206),m=r(96),f=r(596),C=r(538),x=r(484),y=r(556),w=r(202),_=r(597),O=r(490),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-container",[r("v-row",{attrs:{justify:"center",align:"center"}},[r("v-col",[t.canCreateClass||this.$store.state.user.memberships.length>=1?r("div",{staticClass:"title",staticStyle:{padding:"10px"}},[t._v("\n          My Classes\n        ")]):r("div",{staticClass:"subtitle",staticStyle:{padding:"10px"}},[t._v("\n          Looks like you aren't a part of any classes on this isntance yet.\n          Ask your instructors for an invite link.\n        ")]),t._v(" "),r("div",{staticClass:"items"},[t._l(this.$store.state.user.memberships,(function(e){return r("v-card",{key:e.class_id,staticClass:"item",attrs:{elevation:"2",to:"/class/"+e.class_id,nuxt:""}},[r("v-card-title",[t._v(t._s(e.class_name))]),t._v(" "),r("v-card-subtitle",["student"==e.role?r("span",[t._v("You're a student here")]):"teacher"==e.role?r("span",[t._v("You teach this class")]):t._e()]),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{icon:""}},[r("v-icon",[t._v("mdi-arrow-right-bold")])],1)],1)],1)})),t._v(" "),r("v-card",{directives:[{name:"show",rawName:"v-show",value:t.canCreateClass,expression:"canCreateClass"}],staticClass:"item",attrs:{color:"primary",elevation:"2",disabled:t.creatingClass},on:{click:function(e){t.canCreateClass?t.createClass():t.alertCantCreateClass=!0}}},[r("v-card-title",[t._v("Create a class")]),t._v(" "),r("v-card-subtitle",[t._v("Start teaching now")]),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{icon:"",loading:t.creatingClass,disabled:t.creatingClass}},[r("v-icon",[t._v("mdi-plus")])],1)],1)],1),t._v(" "),r("v-dialog",{attrs:{width:"500"},model:{value:t.alertCantCreateClass,callback:function(e){t.alertCantCreateClass=e},expression:"alertCantCreateClass"}},[r("v-card",[r("v-card-title",[t._v(" Sorry ")]),t._v(" "),r("v-card-text",[t._v("\n                It looks like you're not allowed to create new classes on your\n                current instance. Switch to a new instance and try again.\n              ")]),t._v(" "),r("v-divider"),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){t.alertCantCreateClass=!1}}},[t._v("\n                  OK\n                ")])],1)],1)],1)],2)])],1)],1)],1)}),[],!1,null,"633044e7",null);e.default=component.exports;d()(component,{VBtn:v.a,VCard:h.a,VCardActions:m.a,VCardSubtitle:m.b,VCardText:m.c,VCardTitle:m.d,VCol:f.a,VContainer:C.a,VDialog:x.a,VDivider:y.a,VIcon:w.a,VRow:_.a,VSpacer:O.a})}}]);