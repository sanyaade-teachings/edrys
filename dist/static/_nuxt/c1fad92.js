(window.webpackJsonp=window.webpackJsonp||[]).push([[7,6],{494:function(e,t,r){var content=r(501);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(20).default)("27dc2f25",content,!0,{sourceMap:!1})},498:function(e,t,r){"use strict";r.r(t);var n=r(2);r(4),r(53),r(64),r(497),r(295),r(13),r(12),r(14),r(15),r(11),r(16);function o(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var c={name:"Module",props:["role","username","liveClassProxy","scrapedModule"],data:function(){return{}},computed:{iframeOrigin:function(){return new URL(this.scrapedModule.url).origin}},watch:{liveClassProxy:function(){this.updateIframe()},"$store.state.lastRecievedMessage":function(e){null!=e&&this.$refs.iframe.contentWindow.postMessage(function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({event:"message"},e),this.iframeOrigin)}},methods:{updateIframe:function(){this.$refs.iframe.contentWindow.postMessage({event:"update",origin:window.origin,role:this.role,username:this.username,liveClass:JSON.parse(JSON.stringify(this.liveClassProxy)),module:this.scrapedModule,class_id:this.$store.state.class_.id},this.iframeOrigin)}}},l=c,d=r(107),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{key:e.scrapedModule.url,staticStyle:{height:"100%",width:"100%"}},[r("iframe",{key:e.liveClassProxy.users[e.username].room,ref:"iframe",staticStyle:{height:"100%",width:"100%"},attrs:{src:e.scrapedModule.url.startsWith("data:")?null:e.scrapedModule.url,srcdoc:e.scrapedModule.url.startsWith("data:")?e.scrapedModule.url:null,allow:"camera; microphone; fullscreen; display-capture; accelerometer; autoplay; encrypted-media; geolocation; gyroscope; magnetometer; midi; serial; vr;",scrolling:"",frameborder:"0"},on:{load:e.updateIframe}})])}),[],!1,null,"45c47da4",null);t.default=component.exports},499:function(e,t,r){"use strict";r.r(t);var n=r(26),o=(r(98),r(97),r(14),r(4),r(38),r(54),r(33),{name:"Modules",props:["role","username","liveClassProxy"],data:function(){return{}},computed:{roomName:function(){var e;return(null===(e=this.liveClassProxy.users[this.username])||void 0===e?void 0:e.room)||"Station "+this.username},modulesType:function(){return this.roomName.startsWith("Station ")?"station":"chat"},scrapedModules:function(){var e=this;return this.$store.state.scrapedModules.filter((function(t){return(t.shownIn.includes(e.modulesType)||"*"==t.shownIn)&&("student"!=e.role||!t.shownIn.includes("teacher-only"))}))}},created:function(){window.addEventListener("message",this.messageHandler)},beforeDestroy:function(){window.removeEventListener("message",this.messageHandler)},mounted:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},methods:{messageHandler:function(e){switch(e.data.event){case"message":this.sendMessage(e.data.subject,e.data.body,e.data.module);break;case"update":this.setToValue(this.liveClassProxy,e.data.path,e.data.value);break;case"echo":console.log("ECHO:",e.data)}},sendMessage:function(e,body,t){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r.$axios.$get("/data/sendMessage/".concat(r.$store.state.class_.id,"?message=").concat(encodeURIComponent(JSON.stringify({from:r.username,subject:e,body:body,module:t}))));case 2:case"end":return n.stop()}}),n)})))()}}}),c=(r(500),r(107)),l=r(141),d=r.n(l),m=r(206),f=r(96),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{key:e.role},[r("div",{staticClass:"items"},e._l(e.scrapedModules,(function(t,i){return r("Module",{key:i,staticClass:"item",attrs:{username:e.username,"live-class-proxy":e.liveClassProxy,scrapedModule:e.scrapedModules[i],role:e.role}})})),1),e._v(" "),e.scrapedModules.length?e._e():r("v-card",["teacher"==e.role||"station"==e.role?r("v-card-text",[e._v("\n      Sorry, looks like you have not loaded up any "+e._s(e.modulesType)+" modules.\n      Add some in the class settings to get started.\n    ")]):e._e(),e._v(" "),"student"==e.role?r("v-card-text",[e._v("\n      Sorry, it looks like the class creators have not added any modules yet.\n    ")]):e._e()],1)],1)}),[],!1,null,"75f86cc0",null);t.default=component.exports;d()(component,{Module:r(498).default}),d()(component,{VCard:m.a,VCardText:f.c})},500:function(e,t,r){"use strict";r(494)},501:function(e,t,r){var n=r(19)(!1);n.push([e.i,".item[data-v-75f86cc0]{height:700px!important}.items[data-v-75f86cc0]{margin:0 auto;display:grid;grid-gap:.4rem}",""]),e.exports=n}}]);