(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fb5faf12"],{"0cb2":function(e,t,r){var n=r("7b0b"),c=Math.floor,o="".replace,a=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,i=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,r,u,l,s){var d=r+e.length,f=u.length,h=i;return void 0!==l&&(l=n(l),h=a),o.call(s,h,(function(n,o){var a;switch(o.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,r);case"'":return t.slice(d);case"<":a=l[o.slice(1,-1)];break;default:var i=+o;if(0===i)return n;if(i>f){var s=c(i/10);return 0===s?n:s<=f?void 0===u[s-1]?o.charAt(1):u[s-1]+o.charAt(1):n}a=u[i-1]}return void 0===a?"":a}))}},"14c3":function(e,t,r){var n=r("c6b6"),c=r("9263");e.exports=function(e,t){var r=e.exec;if("function"===typeof r){var o=r.call(e,t);if("object"!==typeof o)throw TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==n(e))throw TypeError("RegExp#exec called on incompatible receiver");return c.call(e,t)}},5319:function(e,t,r){"use strict";var n=r("d784"),c=r("825a"),o=r("50c4"),a=r("a691"),i=r("1d80"),u=r("8aa5"),l=r("0cb2"),s=r("14c3"),d=Math.max,f=Math.min,h=function(e){return void 0===e?e:String(e)};n("replace",2,(function(e,t,r,n){var p=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,v=n.REPLACE_KEEPS_$0,x=p?"$":"$0";return[function(r,n){var c=i(this),o=void 0==r?void 0:r[e];return void 0!==o?o.call(r,c,n):t.call(String(c),r,n)},function(e,n){if(!p&&v||"string"===typeof n&&-1===n.indexOf(x)){var i=r(t,e,this,n);if(i.done)return i.value}var g=c(e),b=String(this),E="function"===typeof n;E||(n=String(n));var O=g.global;if(O){var j=g.unicode;g.lastIndex=0}var k=[];while(1){var N=s(g,b);if(null===N)break;if(k.push(N),!O)break;var m=String(N[0]);""===m&&(g.lastIndex=u(b,o(g.lastIndex),j))}for(var C="",T=0,R=0;R<k.length;R++){N=k[R];for(var S=String(N[0]),$=d(f(a(N.index),b.length),0),_=[],w=1;w<N.length;w++)_.push(h(N[w]));var y=N.groups;if(E){var A=[S].concat(_,$,b);void 0!==y&&A.push(y);var I=String(n.apply(void 0,A))}else I=l(S,b,$,_,y,n);$>=T&&(C+=b.slice(T,$)+I,T=$+S.length)}return C+b.slice(T)}]}))},6547:function(e,t,r){var n=r("a691"),c=r("1d80"),o=function(e){return function(t,r){var o,a,i=String(c(t)),u=n(r),l=i.length;return u<0||u>=l?e?"":void 0:(o=i.charCodeAt(u),o<55296||o>56319||u+1===l||(a=i.charCodeAt(u+1))<56320||a>57343?e?i.charAt(u):o:e?i.slice(u,u+2):a-56320+(o-55296<<10)+65536)}};e.exports={codeAt:o(!1),charAt:o(!0)}},7277:function(e,t,r){"use strict";r.r(t);r("ddb0");var n=r("7a23");const c={class:"inner-page"},o=Object(n["createVNode"])("h1",null,"後台頁面",-1),a={id:"nav"},i=Object(n["createTextVNode"])("回到前台"),u=Object(n["createTextVNode"])(" | "),l=Object(n["createTextVNode"])("後台產品列表"),s=Object(n["createTextVNode"])(" | "),d=Object(n["createTextVNode"])("後台訂單"),f=Object(n["createTextVNode"])(" | "),h=Object(n["createTextVNode"])("優惠券列表"),p=Object(n["createTextVNode"])(" | "),v=Object(n["createTextVNode"])("文章列表"),x=Object(n["createTextVNode"])(" | ");function g(e,t,r,g,b,E){const O=Object(n["resolveComponent"])("router-link"),j=Object(n["resolveComponent"])("router-view");return Object(n["openBlock"])(),Object(n["createBlock"])("div",c,[o,Object(n["createVNode"])("div",a,[Object(n["createVNode"])(O,{to:"/"},{default:Object(n["withCtx"])(()=>[i]),_:1}),u,Object(n["createVNode"])(O,{to:"/admin/products"},{default:Object(n["withCtx"])(()=>[l]),_:1}),s,Object(n["createVNode"])(O,{to:"/admin/orders"},{default:Object(n["withCtx"])(()=>[d]),_:1}),f,Object(n["createVNode"])(O,{to:"/admin/coupons"},{default:Object(n["withCtx"])(()=>[h]),_:1}),p,Object(n["createVNode"])(O,{to:"/admin/news"},{default:Object(n["withCtx"])(()=>[v]),_:1}),x,Object(n["createVNode"])("a",{href:"#",onClick:t[1]||(t[1]=Object(n["withModifiers"])((...t)=>e.signout&&e.signout(...t),["prevent"]))},"登出")]),b.authCheck?(Object(n["openBlock"])(),Object(n["createBlock"])(j,{key:0})):Object(n["createCommentVNode"])("",!0)])}r("5319");var b={data(){return{authCheck:!1}},created(){this.checkLogin()},methods:{checkLogin(){const e=document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,"$1");if(e){this.axios.defaults.headers.common.Authorization=""+e;const t="https://vue3-course-api.hexschool.io/api/user/check";this.axios.post(t,e).then(e=>{e.data.success?(console.log("您已成功登入"),this.authCheck=!0,console.log(this.authCheck)):(alert(e.data.message),this.$router.push("/login"))})}else alert("您尚未登入。"),this.$router.push("/login")},signOut(){document.cookie="token=;expires=;",console.log("token 已清除"),console.log("已經登出"),this.$router.push("/login")}}};b.render=g;t["default"]=b},"8aa5":function(e,t,r){"use strict";var n=r("6547").charAt;e.exports=function(e,t,r){return t+(r?n(e,t).length:1)}},9263:function(e,t,r){"use strict";var n=r("ad6d"),c=r("9f7f"),o=r("5692"),a=RegExp.prototype.exec,i=o("native-string-replace",String.prototype.replace),u=a,l=function(){var e=/a/,t=/b*/g;return a.call(e,"a"),a.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),s=c.UNSUPPORTED_Y||c.BROKEN_CARET,d=void 0!==/()??/.exec("")[1],f=l||d||s;f&&(u=function(e){var t,r,c,o,u=this,f=s&&u.sticky,h=n.call(u),p=u.source,v=0,x=e;return f&&(h=h.replace("y",""),-1===h.indexOf("g")&&(h+="g"),x=String(e).slice(u.lastIndex),u.lastIndex>0&&(!u.multiline||u.multiline&&"\n"!==e[u.lastIndex-1])&&(p="(?: "+p+")",x=" "+x,v++),r=new RegExp("^(?:"+p+")",h)),d&&(r=new RegExp("^"+p+"$(?!\\s)",h)),l&&(t=u.lastIndex),c=a.call(f?r:u,x),f?c?(c.input=c.input.slice(v),c[0]=c[0].slice(v),c.index=u.lastIndex,u.lastIndex+=c[0].length):u.lastIndex=0:l&&c&&(u.lastIndex=u.global?c.index+c[0].length:t),d&&c&&c.length>1&&i.call(c[0],r,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(c[o]=void 0)})),c}),e.exports=u},"9f7f":function(e,t,r){"use strict";var n=r("d039");function c(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=n((function(){var e=c("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=n((function(){var e=c("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,t,r){"use strict";var n=r("23e7"),c=r("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==c},{exec:c})},ad6d:function(e,t,r){"use strict";var n=r("825a");e.exports=function(){var e=n(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},d784:function(e,t,r){"use strict";r("ac1f");var n=r("6eeb"),c=r("9263"),o=r("d039"),a=r("b622"),i=r("9112"),u=a("species"),l=RegExp.prototype,s=!o((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),d=function(){return"$0"==="a".replace(/./,"$0")}(),f=a("replace"),h=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),p=!o((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var r="ab".split(e);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));e.exports=function(e,t,r,f){var v=a(e),x=!o((function(){var t={};return t[v]=function(){return 7},7!=""[e](t)})),g=x&&!o((function(){var t=!1,r=/a/;return"split"===e&&(r={},r.constructor={},r.constructor[u]=function(){return r},r.flags="",r[v]=/./[v]),r.exec=function(){return t=!0,null},r[v](""),!t}));if(!x||!g||"replace"===e&&(!s||!d||h)||"split"===e&&!p){var b=/./[v],E=r(v,""[e],(function(e,t,r,n,o){var a=t.exec;return a===c||a===l.exec?x&&!o?{done:!0,value:b.call(t,r,n)}:{done:!0,value:e.call(r,t,n)}:{done:!1}}),{REPLACE_KEEPS_$0:d,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:h}),O=E[0],j=E[1];n(String.prototype,e,O),n(l,v,2==t?function(e,t){return j.call(e,this,t)}:function(e){return j.call(e,this)})}f&&i(l[v],"sham",!0)}}}]);
//# sourceMappingURL=chunk-fb5faf12.45b9ffb5.js.map