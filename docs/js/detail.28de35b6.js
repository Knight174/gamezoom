(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["detail"],{"01de":function(e,t,n){},"0cb2":function(e,t,n){var r=n("7b0b"),c=Math.floor,a="".replace,i=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,s=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,n,u,o,l){var f=n+e.length,d=u.length,b=s;return void 0!==o&&(o=r(o),b=i),a.call(l,b,(function(r,a){var i;switch(a.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,n);case"'":return t.slice(f);case"<":i=o[a.slice(1,-1)];break;default:var s=+a;if(0===s)return r;if(s>d){var l=c(s/10);return 0===l?r:l<=d?void 0===u[l-1]?a.charAt(1):u[l-1]+a.charAt(1):r}i=u[s-1]}return void 0===i?"":i}))}},1276:function(e,t,n){"use strict";var r=n("d784"),c=n("44e7"),a=n("825a"),i=n("1d80"),s=n("4840"),u=n("8aa5"),o=n("50c4"),l=n("14c3"),f=n("9263"),d=n("d039"),b=[].push,p=Math.min,v=4294967295,h=!d((function(){return!RegExp(v,"y")}));r("split",2,(function(e,t,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var r=String(i(this)),a=void 0===n?v:n>>>0;if(0===a)return[];if(void 0===e)return[r];if(!c(e))return t.call(r,e,a);var s,u,o,l=[],d=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),p=0,h=new RegExp(e.source,d+"g");while(s=f.call(h,r)){if(u=h.lastIndex,u>p&&(l.push(r.slice(p,s.index)),s.length>1&&s.index<r.length&&b.apply(l,s.slice(1)),o=s[0].length,p=u,l.length>=a))break;h.lastIndex===s.index&&h.lastIndex++}return p===r.length?!o&&h.test("")||l.push(""):l.push(r.slice(p)),l.length>a?l.slice(0,a):l}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:t.call(this,e,n)}:t,[function(t,n){var c=i(this),a=void 0==t?void 0:t[e];return void 0!==a?a.call(t,c,n):r.call(String(c),t,n)},function(e,c){var i=n(r,e,this,c,r!==t);if(i.done)return i.value;var f=a(e),d=String(this),b=s(f,RegExp),j=f.unicode,g=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(h?"y":"g"),O=new b(h?f:"^(?:"+f.source+")",g),x=void 0===c?v:c>>>0;if(0===x)return[];if(0===d.length)return null===l(O,d)?[d]:[];var m=0,w=0,E=[];while(w<d.length){O.lastIndex=h?w:0;var I,y=l(O,h?d:d.slice(w));if(null===y||(I=p(o(O.lastIndex+(h?0:w)),d.length))===m)w=u(d,w,j);else{if(E.push(d.slice(m,w)),E.length===x)return E;for(var S=1;S<=y.length-1;S++)if(E.push(y[S]),E.length===x)return E;w=m=I}}return E.push(d.slice(m)),E}]}),!h)},"14c3":function(e,t,n){var r=n("c6b6"),c=n("9263");e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var a=n.call(e,t);if("object"!==typeof a)throw TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==r(e))throw TypeError("RegExp#exec called on incompatible receiver");return c.call(e,t)}},"159b":function(e,t,n){var r=n("da84"),c=n("fdbc"),a=n("17c2"),i=n("9112");for(var s in c){var u=r[s],o=u&&u.prototype;if(o&&o.forEach!==a)try{i(o,"forEach",a)}catch(l){o.forEach=a}}},"17c2":function(e,t,n){"use strict";var r=n("b727").forEach,c=n("a640"),a=c("forEach");e.exports=a?[].forEach:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}},"1a77":function(e,t,n){},"320a":function(e,t,n){"use strict";n("e300")},3300:function(e,t,n){"use strict";n("01de")},"44e7":function(e,t,n){var r=n("861d"),c=n("c6b6"),a=n("b622"),i=a("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[i])?!!t:"RegExp"==c(e))}},5319:function(e,t,n){"use strict";var r=n("d784"),c=n("825a"),a=n("50c4"),i=n("a691"),s=n("1d80"),u=n("8aa5"),o=n("0cb2"),l=n("14c3"),f=Math.max,d=Math.min,b=function(e){return void 0===e?e:String(e)};r("replace",2,(function(e,t,n,r){var p=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,v=r.REPLACE_KEEPS_$0,h=p?"$":"$0";return[function(n,r){var c=s(this),a=void 0==n?void 0:n[e];return void 0!==a?a.call(n,c,r):t.call(String(c),n,r)},function(e,r){if(!p&&v||"string"===typeof r&&-1===r.indexOf(h)){var s=n(t,e,this,r);if(s.done)return s.value}var j=c(e),g=String(this),O="function"===typeof r;O||(r=String(r));var x=j.global;if(x){var m=j.unicode;j.lastIndex=0}var w=[];while(1){var E=l(j,g);if(null===E)break;if(w.push(E),!x)break;var I=String(E[0]);""===I&&(j.lastIndex=u(g,a(j.lastIndex),m))}for(var y="",S=0,_=0;_<w.length;_++){E=w[_];for(var k=String(E[0]),R=f(d(i(E.index),g.length),0),A=[],C=1;C<E.length;C++)A.push(b(E[C]));var D=E.groups;if(O){var N=[k].concat(A,R,g);void 0!==D&&N.push(D);var G=String(r.apply(void 0,N))}else G=o(k,g,R,A,D,r);R>=S&&(y+=g.slice(S,R)+G,S=R+k.length)}return y+g.slice(S)}]}))},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,n){var r=n("1d80"),c=n("5899"),a="["+c+"]",i=RegExp("^"+a+a+"*"),s=RegExp(a+a+"*$"),u=function(e){return function(t){var n=String(r(t));return 1&e&&(n=n.replace(i,"")),2&e&&(n=n.replace(s,"")),n}};e.exports={start:u(1),end:u(2),trim:u(3)}},7156:function(e,t,n){var r=n("861d"),c=n("d2bb");e.exports=function(e,t,n){var a,i;return c&&"function"==typeof(a=t.constructor)&&a!==n&&r(i=a.prototype)&&i!==n.prototype&&c(e,i),e}},"7a63":function(e,t,n){"use strict";n("b71b")},"8aa5":function(e,t,n){"use strict";var r=n("6547").charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},9263:function(e,t,n){"use strict";var r=n("ad6d"),c=n("9f7f"),a=RegExp.prototype.exec,i=String.prototype.replace,s=a,u=function(){var e=/a/,t=/b*/g;return a.call(e,"a"),a.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),o=c.UNSUPPORTED_Y||c.BROKEN_CARET,l=void 0!==/()??/.exec("")[1],f=u||l||o;f&&(s=function(e){var t,n,c,s,f=this,d=o&&f.sticky,b=r.call(f),p=f.source,v=0,h=e;return d&&(b=b.replace("y",""),-1===b.indexOf("g")&&(b+="g"),h=String(e).slice(f.lastIndex),f.lastIndex>0&&(!f.multiline||f.multiline&&"\n"!==e[f.lastIndex-1])&&(p="(?: "+p+")",h=" "+h,v++),n=new RegExp("^(?:"+p+")",b)),l&&(n=new RegExp("^"+p+"$(?!\\s)",b)),u&&(t=f.lastIndex),c=a.call(d?n:f,h),d?c?(c.input=c.input.slice(v),c[0]=c[0].slice(v),c.index=f.lastIndex,f.lastIndex+=c[0].length):f.lastIndex=0:u&&c&&(f.lastIndex=f.global?c.index+c[0].length:t),l&&c&&c.length>1&&i.call(c[0],n,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(c[s]=void 0)})),c}),e.exports=s},"9f50":function(e,t,n){},"9f7f":function(e,t,n){"use strict";var r=n("d039");function c(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=r((function(){var e=c("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=r((function(){var e=c("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},a640:function(e,t,n){"use strict";var r=n("d039");e.exports=function(e,t){var n=[][e];return!!n&&r((function(){n.call(null,t||function(){throw 1},1)}))}},a77a:function(e,t,n){},a7f6:function(e,t,n){"use strict";n("1a77")},a9e3:function(e,t,n){"use strict";var r=n("83ab"),c=n("da84"),a=n("94ca"),i=n("6eeb"),s=n("5135"),u=n("c6b6"),o=n("7156"),l=n("c04e"),f=n("d039"),d=n("7c73"),b=n("241c").f,p=n("06cf").f,v=n("9bf2").f,h=n("58a8").trim,j="Number",g=c[j],O=g.prototype,x=u(d(O))==j,m=function(e){var t,n,r,c,a,i,s,u,o=l(e,!1);if("string"==typeof o&&o.length>2)if(o=h(o),t=o.charCodeAt(0),43===t||45===t){if(n=o.charCodeAt(2),88===n||120===n)return NaN}else if(48===t){switch(o.charCodeAt(1)){case 66:case 98:r=2,c=49;break;case 79:case 111:r=8,c=55;break;default:return+o}for(a=o.slice(2),i=a.length,s=0;s<i;s++)if(u=a.charCodeAt(s),u<48||u>c)return NaN;return parseInt(a,r)}return+o};if(a(j,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var w,E=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof E&&(x?f((function(){O.valueOf.call(n)})):u(n)!=j)?o(new g(m(t)),n,E):m(t)},I=r?b(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),y=0;I.length>y;y++)s(g,w=I[y])&&!s(E,w)&&v(E,w,p(g,w));E.prototype=O,O.constructor=E,i(c,j,E)}},a9f3:function(e,t,n){"use strict";n("a77a")},ac1f:function(e,t,n){"use strict";var r=n("23e7"),c=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==c},{exec:c})},b71b:function(e,t,n){},c84b:function(e,t,n){"use strict";n.r(t);n("b0c0"),n("a4d3"),n("e01a");var r=n("7a23"),c=Object(r["O"])("data-v-bae6e4a0");Object(r["z"])("data-v-bae6e4a0");var a={class:"detail"},i={class:"part banner"},s={class:"part description"},u=Object(r["j"])("h1",{class:"title"},"游戏详情",-1),o={class:"part ask"},l=Object(r["j"])("h1",{class:"title"},"最低系统需求",-1),f={class:"part"},d=Object(r["j"])("h1",{class:"title"},"获取渠道",-1);Object(r["x"])();var b=c((function(e,t,n,c,b,p){var v=Object(r["D"])("Header2"),h=Object(r["D"])("Banner"),j=Object(r["D"])("Type"),g=Object(r["D"])("DetailAsk"),O=Object(r["D"])("AchieveWay"),x=Object(r["D"])("BannerDetail");return Object(r["w"])(),Object(r["f"])(r["a"],null,[Object(r["j"])(v,{title:b.currentGame.name},null,8,["title"]),Object(r["j"])("div",a,[Object(r["j"])("section",i,[Object(r["j"])(h,{imgs:b.currentGame.Attachments,onPassIndex:p.handleIndex},null,8,["imgs","onPassIndex"]),Object(r["j"])(j,{type:b.currentGame.type},null,8,["type"])]),Object(r["j"])("section",s,[u,Object(r["j"])("p",null,Object(r["G"])(b.currentGame.description),1)]),Object(r["j"])("section",o,[l,Object(r["j"])(g,{configs:b.configs},null,8,["configs"])]),Object(r["j"])("section",f,[d,Object(r["j"])(O,{way:b.currentGame.url},null,8,["way"])])]),Object(r["M"])(Object(r["j"])(x,{currentIndex:b.bannerDetailIndex,currentPic:b.currentGame.Attachments,onBannerDetailHd:t[1]||(t[1]=function(e){return b.isShow=!b.isShow})},null,8,["currentIndex","currentPic"]),[[r["J"],b.isShow]])],64)})),p=n("2909"),v=n("1da1"),h=(n("96cf"),n("7db0"),n("d81d"),n("1276"),n("ac1f"),n("159b"),n("5319"),Object(r["O"])("data-v-2badae58")),j=h((function(e,t,n,c,a,i){return Object(r["w"])(),Object(r["f"])("header",null,[Object(r["j"])("span",{class:"material-icons goback",onClick:t[1]||(t[1]=function(){return i.back&&i.back.apply(i,arguments)})}," navigate_before "),Object(r["j"])("h1",null,Object(r["G"])(n.title),1)])})),g={name:"Header2",props:{title:String},methods:{back:function(){return this.$router.go(-1)}}};n("3300");g.render=j,g.__scopeId="data-v-2badae58";var O=g,x=Object(r["O"])("data-v-5b1aff32");Object(r["z"])("data-v-5b1aff32");var m={class:"ask"},w={class:"ask-btns"},E={key:0,class:"content"},I=Object(r["j"])("span",null,"操作系统：",-1),y=Object(r["j"])("span",null,"处理器：",-1),S=Object(r["j"])("span",null,"内存：",-1),_=Object(r["j"])("span",null,"显卡：",-1),k=Object(r["j"])("span",null,"direct_x：",-1),R=Object(r["j"])("span",null,"存储空间：",-1),A={key:1,class:"content"};Object(r["x"])();var C=x((function(e,t,n,c,a,i){return Object(r["w"])(),Object(r["f"])("div",m,[Object(r["j"])("div",w,[Object(r["j"])("div",{class:"btn win",onClick:t[1]||(t[1]=function(e){return a.state=0})},"Windows"),Object(r["j"])("div",{class:"btn mac",onClick:t[2]||(t[2]=function(e){return a.state=1})},"Mac OS X"),Object(r["j"])("div",{class:"btn lin",onClick:t[3]||(t[3]=function(e){return a.state=2})},"SteamOS+Linux")]),a.seen?(Object(r["w"])(),Object(r["f"])("ul",E,[Object(r["j"])("li",null,[I,Object(r["i"])(" "+Object(r["G"])(n.configs[a.state].OS),1)]),Object(r["j"])("li",null,[y,Object(r["i"])(" "+Object(r["G"])(n.configs[a.state].CPU),1)]),Object(r["j"])("li",null,[S,Object(r["i"])(" "+Object(r["G"])(n.configs[a.state].Memery),1)]),Object(r["j"])("li",null,[_,Object(r["i"])(" "+Object(r["G"])(n.configs[a.state].GC),1)]),Object(r["j"])("li",null,[k,Object(r["i"])(" "+Object(r["G"])(n.configs[a.state].DX),1)]),Object(r["j"])("li",null,[R,Object(r["i"])(" "+Object(r["G"])(n.configs[a.state].SC),1)])])):(Object(r["w"])(),Object(r["f"])("div",A))])})),D={name:"DetailAsk",props:{configs:Array},watch:{configs:function(e){e.length&&(this.seen=!0)}},data:function(){return{state:0,seen:!1}}};n("a9f3");D.render=C,D.__scopeId="data-v-5b1aff32";var N=D,G=Object(r["O"])("data-v-ed21bc1e");Object(r["z"])("data-v-ed21bc1e");var P=Object(r["j"])("button",{class:"btn"},"访问 Steam",-1);Object(r["x"])();var T=G((function(e,t,n,c,a,i){return Object(r["w"])(),Object(r["f"])("a",{href:n.way,class:"btn-wrap"},[P],8,["href"])})),$={name:"AchieveWay",props:{way:{type:String,default:"javascript:;"}}};n("7a63");$.render=T,$.__scopeId="data-v-ed21bc1e";var U=$,B=Object(r["O"])("data-v-423e63b0");Object(r["z"])("data-v-423e63b0");var L={class:"banner"};Object(r["x"])();var M=B((function(e,t,n,c,a,i){var s=Object(r["D"])("swiper-slide"),u=Object(r["D"])("swiper");return Object(r["w"])(),Object(r["f"])("div",L,[a.show?(Object(r["w"])(),Object(r["f"])(u,{key:0,"slides-per-view":1,"space-between":50,pagination:{clickable:!0}},{default:B((function(){return[(Object(r["w"])(!0),Object(r["f"])(r["a"],null,Object(r["C"])(n.imgs,(function(e,t){return Object(r["w"])(),Object(r["f"])(s,{key:e.id},{default:B((function(){return[Object(r["j"])("img",{onClick:function(e){return i.emitIndex(t)},class:"imgStyle",src:e.url,alt:e.name},null,8,["onClick","src","alt"])]})),_:2},1024)})),128))]})),_:1})):Object(r["g"])("",!0)])})),F=n("6d3b"),X=n("5dc8"),z=n("029e"),H=n("6577"),K=n("90ea"),V=n("a16a");n("5f67");F["a"].use([X["a"],z["a"],H["a"]]);var W={name:"Banner",props:{imgs:Array},data:function(){return{show:!1,detailImg:""}},watch:{imgs:function(e){e.length&&(this.show=!0)}},components:{Swiper:K["a"],SwiperSlide:V["a"]},methods:{emitIndex:function(e){this.$emit("pass-index",e)}}};n("320a");W.render=M,W.__scopeId="data-v-423e63b0";var Y=W,J=Object(r["O"])("data-v-597b9218"),q=J((function(e,t,n,c,a,i){return Object(r["w"])(),Object(r["f"])(r["c"],{name:"fade",mode:"out-in"},{default:J((function(){return[a.seen?(Object(r["w"])(),Object(r["f"])("div",{key:0,class:"banner-detail",onClick:t[1]||(t[1]=function(t){return e.$emit("banner-detail-hd")})},[Object(r["j"])("img",{src:n.currentPic[n.currentIndex].url},null,8,["src"])])):Object(r["g"])("",!0)]})),_:1})})),Q=(n("a9e3"),{name:"BannerDetail",props:{currentIndex:Number,currentPic:Array},data:function(){return{seen:!1}},watch:{currentIndex:function(e){null!==e&&(this.seen=!0)}}});n("f542");Q.render=q,Q.__scopeId="data-v-597b9218";var Z=Q,ee=Object(r["O"])("data-v-e8df45f4");Object(r["z"])("data-v-e8df45f4");var te={key:0,class:"type"};Object(r["x"])();var ne=ee((function(e,t,n,c,a,i){return a.show?(Object(r["w"])(),Object(r["f"])("div",te,[(Object(r["w"])(!0),Object(r["f"])(r["a"],null,Object(r["C"])(a.typeList,(function(e,t){return Object(r["w"])(),Object(r["f"])("span",{class:"bd",key:t},Object(r["G"])(e),1)})),128))])):Object(r["g"])("",!0)})),re={name:"Type",props:{type:String},data:function(){return{typeList:[],show:!1}},watch:{type:function(e){e.length&&(this.show=!0,this.typeList=e.split(","))}}};n("fcef");re.render=ne,re.__scopeId="data-v-e8df45f4";var ce=re,ae=n("7c15"),ie={name:"Detail",props:{nameen:String},data:function(){return{games:[],currentGame:{},configs:[],bannerDetailIndex:null,isShow:!1}},components:{Header2:O,DetailAsk:N,AchieveWay:U,Banner:Y,Type:ce,BannerDetail:Z},watch:{games:function(e){var t=this;this.currentGame=e.find((function(e){return e.nameen===t.nameen}));var n=[this.currentGame.config_win,this.currentGame.config_mac,this.currentGame.config_lin];this.configs=this.handleConfigItem(n)}},methods:{getData:function(){return Object(v["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(ae["a"])(ae["c"]);case 2:return t=e.sent,e.next=5,t.map((function(e){return e.fields})).sort((function(e,t){return e.id-t.id}));case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))()},handleConfigItem:function(e){for(var t=[],n=e.length,r="",c=function(n){r=e[n];var c=r.split(";");c.forEach((function(e){t[n]||(t[n]={});var r=e.split(":")[0].replace(/\n/,""),c=e.split(":")[1];t[n][r]=c}))},a=0;a<n;a++)c(a);return t},handleIndex:function(e){this.bannerDetailIndex=e,this.isShow=!this.isShow}},created:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getData();case 2:n=t.sent,e.games=Object(p["a"])(n);case 4:case"end":return t.stop()}}),t)})))()}};n("a7f6");ie.render=b,ie.__scopeId="data-v-bae6e4a0";t["default"]=ie},d535:function(e,t,n){},d784:function(e,t,n){"use strict";n("ac1f");var r=n("6eeb"),c=n("d039"),a=n("b622"),i=n("9263"),s=n("9112"),u=a("species"),o=!c((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),l=function(){return"$0"==="a".replace(/./,"$0")}(),f=a("replace"),d=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),b=!c((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));e.exports=function(e,t,n,f){var p=a(e),v=!c((function(){var t={};return t[p]=function(){return 7},7!=""[e](t)})),h=v&&!c((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[u]=function(){return n},n.flags="",n[p]=/./[p]),n.exec=function(){return t=!0,null},n[p](""),!t}));if(!v||!h||"replace"===e&&(!o||!l||d)||"split"===e&&!b){var j=/./[p],g=n(p,""[e],(function(e,t,n,r,c){return t.exec===i?v&&!c?{done:!0,value:j.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}}),{REPLACE_KEEPS_$0:l,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),O=g[0],x=g[1];r(String.prototype,e,O),r(RegExp.prototype,p,2==t?function(e,t){return x.call(e,this,t)}:function(e){return x.call(e,this)})}f&&s(RegExp.prototype[p],"sham",!0)}},e300:function(e,t,n){},f542:function(e,t,n){"use strict";n("d535")},fcef:function(e,t,n){"use strict";n("9f50")}}]);
//# sourceMappingURL=detail.28de35b6.js.map