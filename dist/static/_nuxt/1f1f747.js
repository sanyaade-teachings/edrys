(window.webpackJsonp=window.webpackJsonp||[]).push([[8,6,7],{497:function(e,t,r){var content=r(501);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(20).default)("4a760226",content,!0,{sourceMap:!1})},498:function(e,t,r){"use strict";r.r(t);var n=r(2);r(4),r(46),r(58),r(301),r(179),r(13),r(12),r(14),r(15),r(11),r(16);function o(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var c={name:"Module",props:["role","username","liveClassProxy","scrapedModule"],data:function(){return{}},computed:{iframeOrigin:function(){return new URL(this.scrapedModule.url).origin}},watch:{liveClassProxy:function(){this.updateIframe()},"$store.state.lastRecievedMessage":function(e){null!=e&&this.$refs.iframe.contentWindow.postMessage(function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({event:"message"},e),this.scrapedModule.origin||this.iframeOrigin)}},methods:{updateIframe:function(){this.$refs.iframe.contentWindow.postMessage({event:"update",origin:window.origin,role:this.role,username:this.username,liveClass:JSON.parse(JSON.stringify(this.liveClassProxy)),module:this.scrapedModule,class_id:this.$store.state.class_.id},this.scrapedModule.origin||this.iframeOrigin)}}},d=c,l=r(108),component=Object(l.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{key:e.scrapedModule.url,staticStyle:{height:"100%",width:"100%"}},[r("iframe",{key:e.liveClassProxy.users[e.username].room,ref:"iframe",staticStyle:{height:"100%",width:"100%"},attrs:{src:e.scrapedModule.srcdoc?e.scrapedModule.srcdoc:e.scrapedModule.url.startsWith("data:")?null:e.scrapedModule.url,srcdoc:e.scrapedModule.srcdoc&&e.scrapedModule.url.startsWith("data:")?e.scrapedModule.url:null,allow:"camera; microphone; fullscreen; display-capture; accelerometer; autoplay; encrypted-media; geolocation; gyroscope; magnetometer; midi; serial; vr;",scrolling:"",frameborder:"0"},on:{load:e.updateIframe}})])}),[],!1,null,"eba5e138",null);t.default=component.exports},499:function(e,t,r){"use strict";r.r(t);var n=r(26),o=(r(99),r(83),r(14),r(4),r(61),r(27),r(62),r(84),r(41),r(60),r(32),{name:"Modules",props:["role","username","liveClassProxy"],data:function(){return{}},computed:{roomName:function(){var e;return(null===(e=this.liveClassProxy.users[this.username])||void 0===e?void 0:e.room)||"Station "+this.username},modulesType:function(){return this.roomName.startsWith("Station ")?"station":"chat"},scrapedModules:function(){var e=this;return this.$store.state.scrapedModules.filter((function(t){var r=t.showInCustom?t.showInCustom.split(",").map((function(e){return e.trim()})):t.shownIn;return(r.includes(e.modulesType)||"*"==r)&&("student"!=e.role||!r.includes("teacher-only"))}))}},created:function(){window.addEventListener("message",this.messageHandler)},beforeDestroy:function(){window.removeEventListener("message",this.messageHandler)},mounted:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},methods:{messageHandler:function(e){switch(e.data.event){case"message":this.sendMessage(e.data.subject,e.data.body,e.data.module);break;case"update":this.setToValue(this.liveClassProxy,e.data.path,e.data.value);break;case"echo":console.log("ECHO:",e.data)}},sendMessage:function(e,body,t){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r.$axios.$get("/data/sendMessage/".concat(r.$store.state.class_.id,"?message=").concat(encodeURIComponent(JSON.stringify({from:r.username,subject:e,body:body,module:t}))));case 2:case"end":return n.stop()}}),n)})))()}}}),c=(r(500),r(108)),d=r(143),l=r.n(d),m=r(209),f=r(98),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{key:e.role},[r("div",{staticClass:"items"},e._l(e.scrapedModules,(function(t,i){return r("Module",{key:i,staticClass:"item",attrs:{username:e.username,"live-class-proxy":e.liveClassProxy,scrapedModule:e.scrapedModules[i],role:e.role}})})),1),e._v(" "),e.scrapedModules.length?e._e():r("v-card",["teacher"==e.role||"station"==e.role?r("v-card-text",[e._v("\n      Sorry, looks like you have not loaded up any "+e._s(e.modulesType)+" modules.\n      Add some in the class settings to get started.\n    ")]):e._e(),e._v(" "),"student"==e.role?r("v-card-text",[e._v("\n      Sorry, it looks like the class creators have not added any modules yet.\n    ")]):e._e()],1)],1)}),[],!1,null,"77211400",null);t.default=component.exports;l()(component,{Module:r(498).default}),l()(component,{VCard:m.a,VCardText:f.c})},500:function(e,t,r){"use strict";r(497)},501:function(e,t,r){var n=r(19)(!1);n.push([e.i,".item[data-v-77211400]{height:700px!important}.items[data-v-77211400]{margin:0 auto;display:grid;grid-gap:.4rem}",""]),e.exports=n},512:function(e,t,r){"use strict";r.r(t);var n=r(26),o=(r(99),{name:"Student",props:["liveClassProxy"],computed:{roomName:function(){return this.liveClassProxy.users[this.$store.state.user.email].room}},data:function(){return{liveRoomProxy:{},ready:!1}},mounted:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.ready=!0;case 1:case"end":return t.stop()}}),t)})))()},methods:{}}),c=r(108),d=r(143),l=r.n(d),m=r(209),f=r(98),v=r(610),h=r(539),y=r(611),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-container",[r("div",[e.ready?r("v-row",{attrs:{justify:"center",align:"center"}},[r("v-col",{attrs:{cols:"12",sm:"10",md:"10"}},[r("v-card",[r("v-card-title",[e._v(e._s(e.$store.state.class_.name)+" – "+e._s(e.roomName))]),e._v(" "),r("Modules",{attrs:{role:"student",username:e.$store.state.user.email,"live-class-proxy":e.liveClassProxy}})],1)],1)],1):e._e()],1)])],1)}),[],!1,null,"e2e7cba4",null);t.default=component.exports;l()(component,{Modules:r(499).default}),l()(component,{VCard:m.a,VCardTitle:f.d,VCol:v.a,VContainer:h.a,VRow:y.a})},539:function(e,t,r){"use strict";r(14),r(4),r(13),r(83),r(32),r(302),r(502),r(84),r(86);var n=r(1);var o,c=r(100);t.a=(o="container",n.a.extend({name:"v-".concat(o),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,t){var r=t.props,data=t.data,n=t.children;data.staticClass="".concat(o," ").concat(data.staticClass||"").trim();var c=data.attrs;if(c){data.attrs={};var d=Object.keys(c).filter((function(e){if("slot"===e)return!1;var t=c[e];return e.startsWith("data-")?(data.attrs[e]=t,!1):t||"string"==typeof t}));d.length&&(data.staticClass+=" ".concat(d.join(" ")))}return r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),e(r.tag,data,n)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(e,t){var r,n=t.props,data=t.data,o=t.children,d=data.attrs;return d&&(data.attrs={},r=Object.keys(d).filter((function(e){if("slot"===e)return!1;var t=d[e];return e.startsWith("data-")?(data.attrs[e]=t,!1):t||"string"==typeof t}))),n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),e(n.tag,Object(c.a)(data,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(r||[])}),o)}})}}]);