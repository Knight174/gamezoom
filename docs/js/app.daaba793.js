(function(e){function t(t){for(var r,c,i=t[0],u=t[1],d=t[2],s=0,l=[];s<i.length;s++)c=i[s],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&l.push(a[c][0]),a[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(l.length)l.shift()();return o.push.apply(o,d||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var i=n[c];0!==a[i]&&(r=!1)}r&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},c={app:0},a={app:0},o=[];function i(e){return u.p+"js/"+({account:"account",detail:"detail",login:"login",notfound:"notfound",shop:"shop"}[e]||e)+"."+{account:"27397316",detail:"28de35b6",login:"d9fdb1a7",notfound:"dbffe303",shop:"4eb7da03"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={account:1,detail:1,login:1,notfound:1,shop:1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=new Promise((function(t,n){for(var r="css/"+({account:"account",detail:"detail",login:"login",notfound:"notfound",shop:"shop"}[e]||e)+"."+{account:"5bac2227",detail:"49008d65",login:"108070be",notfound:"ae6ff47e",shop:"0ab125df"}[e]+".css",a=u.p+r,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var d=o[i],s=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(s===r||s===a))return t()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){d=l[i],s=d.getAttribute("data-href");if(s===r||s===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete c[e],f.parentNode.removeChild(f),n(o)},f.href=a;var b=document.getElementsByTagName("head")[0];b.appendChild(f)})).then((function(){c[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=o);var d,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=i(e);var l=new Error;d=function(t){s.onerror=s.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",l.name="ChunkLoadError",l.type=r,l.request=c,n[1](l)}a[e]=void 0}};var f=setTimeout((function(){d({type:"timeout",target:s})}),12e4);s.onerror=s.onload=d,document.head.appendChild(s)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],s=d.push.bind(d);d.push=t,d=d.slice();for(var l=0;l<d.length;l++)t(d[l]);var f=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"01d1":function(e,t,n){},"0418":function(e,t,n){"use strict";var r=n("7a23"),c=Object(r["O"])("data-v-1f2daa72"),a=c((function(e,t,n,c,a,o){return Object(r["w"])(),Object(r["f"])("header",null,Object(r["G"])(n.title),1)})),o={name:"Header",props:{title:String}};n("5f71");o.render=a,o.__scopeId="data-v-1f2daa72";t["a"]=o},1:function(e,t){},"10e0":function(e,t,n){},"1c67":function(e,t,n){"use strict";n("231f")},2:function(e,t){},"231f":function(e,t,n){},2662:function(e,t,n){},"3a5e":function(e,t,n){"use strict";var r=n("7a23"),c=Object(r["O"])("data-v-934c18c8");Object(r["z"])("data-v-934c18c8");var a={class:"loading"};Object(r["x"])();var o=c((function(e,t,n,c,o,i){var u=Object(r["D"])("RotateCircle");return Object(r["w"])(),Object(r["f"])("div",a,[Object(r["j"])(u),Object(r["j"])("h1",null,Object(r["G"])(o.title),1)])})),i=Object(r["O"])("data-v-0c7c8d09");Object(r["z"])("data-v-0c7c8d09");var u={class:"loader-wrap"},d=Object(r["h"])('<div class="loader-circles" data-v-0c7c8d09><div class="circle" data-v-0c7c8d09></div><div class="circle" data-v-0c7c8d09></div><div class="circle" data-v-0c7c8d09></div><div class="circle" data-v-0c7c8d09></div><div class="circle" data-v-0c7c8d09></div><div class="circle" data-v-0c7c8d09></div><div class="circle" data-v-0c7c8d09></div><div class="circle" data-v-0c7c8d09></div><div class="circle" data-v-0c7c8d09></div><div class="circle" data-v-0c7c8d09></div></div>',1);Object(r["x"])();var s=i((function(e,t,n,c,a,o){return Object(r["w"])(),Object(r["f"])("div",u,[d])})),l={name:"RotateCircle"};n("8460");l.render=s,l.__scopeId="data-v-0c7c8d09";var f=l,b={name:"Loading",data:function(){return{title:"资源加载中..."}},components:{RotateCircle:f}};n("fc1c");b.render=o,b.__scopeId="data-v-934c18c8";t["a"]=b},"3dd3":function(e,t,n){},"4ee2":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function c(e,t,n,c,a,o){var i=Object(r["D"])("router-view");return Object(r["w"])(),Object(r["f"])(i,{key:e.$route.fullPath},{default:Object(r["L"])((function(e){var t=e.Component;return[(Object(r["w"])(),Object(r["f"])(r["b"],{include:"Account"},[(Object(r["w"])(),Object(r["f"])(Object(r["E"])(t)))],1024))]})),_:1})}var a={};n("f4b4");a.render=c;var o=a,i=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),u=(n("b0c0"),n("25f0"),Object(r["O"])("data-v-2c836474"));Object(r["z"])("data-v-2c836474");var d={class:"home"},s=Object(r["j"])("div",{class:"rank"},[Object(r["j"])("h1",null,"Leaderboard"),Object(r["j"])("h3",null,"Top 10")],-1),l={class:"top10"},f=Object(r["j"])("tr",null,[Object(r["j"])("th",null,"排名"),Object(r["j"])("th",null,"游戏名称"),Object(r["j"])("th",null,"游戏类型")],-1);Object(r["x"])();var b=u((function(e,t,n,c,a,o){var i=Object(r["D"])("Header"),b=Object(r["D"])("MySwiper"),p=Object(r["D"])("router-link"),j=Object(r["D"])("Footer"),v=Object(r["D"])("Loading");return Object(r["w"])(),Object(r["f"])(r["a"],null,[Object(r["j"])(i,{title:a.title},null,8,["title"]),Object(r["j"])("div",d,[s,Object(r["j"])(b,{rank:a.games},null,8,["rank"]),Object(r["j"])("table",l,[f,(Object(r["w"])(!0),Object(r["f"])(r["a"],null,Object(r["C"])(a.games,(function(e){return Object(r["w"])(),Object(r["f"])("tr",{key:e.id},[Object(r["j"])("td",null,Object(r["G"])(e.id),1),Object(r["j"])("td",null,[Object(r["j"])(p,{to:{name:"Detail",params:{nameen:e.nameen}}},{default:u((function(){return[Object(r["i"])(Object(r["G"])(e.name),1)]})),_:2},1032,["to"])]),Object(r["j"])("td",null,Object(r["G"])(e.type.toString()),1)])})),128))])]),Object(r["j"])(j),Object(r["M"])(Object(r["j"])(v,null,null,512),[[r["J"],!a.show]])],64)})),p=n("2909"),j=n("1da1"),v=(n("96cf"),n("d81d"),n("0418")),O=n("fd2d"),m=Object(r["O"])("data-v-5667f490"),h=m((function(e,t,n,c,a,o){var i=Object(r["D"])("swiper-slide"),u=Object(r["D"])("swiper",!0);return Object(r["w"])(),Object(r["f"])(u,{"slides-per-view":1,"space-between":50,pagination:{clickable:!0}},{default:m((function(){return[(Object(r["w"])(!0),Object(r["f"])(r["a"],null,Object(r["C"])(n.rank,(function(e){return Object(r["w"])(),Object(r["f"])(i,{key:e.id},{default:m((function(){return[Object(r["j"])("img",{src:e.Attachments[0].url,alt:e.name},null,8,["src","alt"])]})),_:2},1024)})),128))]})),_:1})})),g=n("6d3b"),w=n("5dc8"),y=n("029e"),_=n("6577"),k=n("90ea"),S=n("a16a");n("5f67");g["a"].use([w["a"],y["a"],_["a"]]);var D={name:"MySwiper",props:{rank:Array},components:{Swiper:k["a"],SwiperSlide:S["a"]}};n("a113");D.render=h,D.__scopeId="data-v-5667f490";var x=D,A=n("3a5e"),G=n("7c15"),P={inheritAttrs:!1,name:"Home",data:function(){return{title:"GAME ZOOM",games:[],show:!1}},watch:{games:function(e){e.length?this.show=!this.show:this.show=!1}},components:{Header:v["a"],Footer:O["a"],MySwiper:x,Loading:A["a"]},methods:{getData:function(){var e=this;return Object(j["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(G["b"])(G["d"],10);case 2:return n=t.sent,t.next=5,n.map((function(e){return e.fields})).sort((function(e,t){return e.id-t.id}));case 5:r=t.sent,e.games=Object(p["a"])(r);case 7:case"end":return t.stop()}}),t)})))()}},created:function(){this.getData()}};n("1c67");P.render=b,P.__scopeId="data-v-2c836474";var C=P,E=[{path:"/",name:"Home",component:C,props:!0},{path:"/login",name:"Login",component:function(){return n.e("login").then(n.bind(null,"a55b"))}},{path:"/shop",name:"Shop",component:function(){return n.e("shop").then(n.bind(null,"0fa5"))},meta:{isKeepAlive:!0}},{path:"/detail/:nameen",name:"Detail",component:function(){return n.e("detail").then(n.bind(null,"c84b"))},props:!0},{path:"/account",name:"Account",component:function(){return n.e("account").then(n.bind(null,"77be"))},meta:{requiresAuth:!0}},{path:"/404",alias:"/:pathMatch(.*)*",name:"NotFound",component:function(){return n.e("notfound").then(n.bind(null,"9703"))}}],L=Object(i["a"])({history:Object(i["b"])(""),routes:E});L.beforeEach((function(e,t,n){e.matched.some((function(e){return e.meta.requiresAuth}))&&"ok"!==window.localStorage.getItem("isLogin")?n({name:"Login",query:{redirect:e.fullPath}}):n()}));var M=L,R=(n("4ee2"),n("a07f"),Object(r["e"])(o));R.use(M).mount("#app")},"5f71":function(e,t,n){"use strict";n("01d1")},"6acd":function(e,t,n){},"7c15":function(e,t,n){"use strict";n.d(t,"d",(function(){return o})),n.d(t,"e",(function(){return i})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return s}));var r=n("1da1"),c=(n("7db0"),n("96cf"),n("49e1")),a=new c({apiKey:"keyloGFGjDynz8Y9k"}).base("appnqDEaiNjZDwbku"),o=(a("Table 1"),a("Game Zoom Home")),i=a("Game Zoom Shop"),u=a("Game Zoom Detail"),d=function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.select().firstPage();case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.select({maxRecords:n,view:"Grid view"}).firstPage();case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},8460:function(e,t,n){"use strict";n("6acd")},"94b1":function(e,t,n){"use strict";n("f36f")},a07f:function(e,t,n){},a113:function(e,t,n){"use strict";n("10e0")},f36f:function(e,t,n){},f4b4:function(e,t,n){"use strict";n("2662")},fc1c:function(e,t,n){"use strict";n("3dd3")},fd2d:function(e,t,n){"use strict";var r=n("7a23"),c=Object(r["O"])("data-v-01acf4bb"),a=c((function(e,t,n,a,o,i){var u=Object(r["D"])("router-link");return Object(r["w"])(),Object(r["f"])("footer",null,[Object(r["j"])(u,{class:"bottom-bar-btn",to:{name:"Home"}},{default:c((function(){return[Object(r["i"])(Object(r["G"])(o.bars[0]),1)]})),_:1}),Object(r["j"])(u,{class:"bottom-bar-btn",to:{name:"Shop"}},{default:c((function(){return[Object(r["i"])(Object(r["G"])(o.bars[1]),1)]})),_:1}),Object(r["j"])(u,{class:"bottom-bar-btn",to:{name:"Account"}},{default:c((function(){return[Object(r["i"])(Object(r["G"])(o.bars[2]),1)]})),_:1})])})),o={name:"Footer",data:function(){return{bars:["Home","Shop","Account"]}}};n("94b1");o.render=a,o.__scopeId="data-v-01acf4bb";t["a"]=o}});
//# sourceMappingURL=app.daaba793.js.map