(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bf5dcf62"],{ac49:function(e,t,o){"use strict";var n=o("7a23");const r={class:"inner-banner mb-17"},a={class:"text-white h-100 text-7 font-weight-bold\n      d-flex justify-content-center align-items-center\n      position-relative index-carousel"};function i(e,t,o,i,c,d){return Object(n["openBlock"])(),Object(n["createBlock"])("div",r,[Object(n["createVNode"])("div",a,Object(n["toDisplayString"])(o.msg),1)])}var c={props:["msg"],mounted(){console.log(this.msg)}};c.render=i;t["a"]=c},c0cb:function(e,t,o){"use strict";o.r(t);var n=o("7a23");const r={class:"inner-page"},a={class:"table-box container"},i={class:"mx-auto w-80 mb-10"},c={class:"row"},d=Object(n["createStaticVNode"])('<div class="col-3 text-center text-white"><div class="bg-secondary rounded p-2"> STEP.1 <br> 確認購物清單 </div></div><div class="col-3 text-center text-white"><div class="bg-secondary rounded p-2"> STEP.2<br> 填寫訂購資料 </div></div><div class="col-3 text-center text-white"><div class="bg-secondary rounded p-2"> STEP.3<br> 確認訂單資料 </div></div>',3),s={class:"col-3 text-center text-white"},l=Object(n["createTextVNode"])(" STEP.4"),u=Object(n["createVNode"])("br",null,null,-1),f=Object(n["createTextVNode"])(" 完成訂單 "),b={class:"table cart-list-table align-middle mb-17"},p=Object(n["createVNode"])("thead",null,[Object(n["createVNode"])("tr",null,[Object(n["createVNode"])("th",{scope:"col"},"圖片"),Object(n["createVNode"])("th",{class:"text-left",scope:"col"},"商品名稱"),Object(n["createVNode"])("th",{width:"80"},"數量"),Object(n["createVNode"])("th",{width:"80",class:"text-right",scope:"col"},"小計")])],-1),m={class:"overflow-hidden rounded item-product-box"},v={class:"font-weight-bold text-3"},y={width:"80"},g={class:"input-group input-group-sm"},h={class:"text-end",width:"80"},w={class:"text-1 text-gray-200"},j=Object(n["createVNode"])("br",null,null,-1),O={class:"text-3"},k={class:"text-4"},x=Object(n["createVNode"])("td",null,null,-1),N=Object(n["createVNode"])("td",null,null,-1),V=Object(n["createVNode"])("td",{class:"text-end text-primary font-weight-bold"},"實付金額",-1),S={class:"text-right"},_={class:"my-5 row justify-content-center","data-aos":"fade-In","data-aos-duration":"1000"},D=Object(n["createVNode"])("div",{class:"bg-secondary text-white w-100 p-2 text-center"},"訂購資料",-1),E={class:"table text-left text-3"},M=Object(n["createVNode"])("td",{width:"150",class:"text-4 font-weight-bold"},"收件人",-1),T=Object(n["createVNode"])("td",{width:"150",class:"text-4 font-weight-bold"},"電子信箱",-1),z=Object(n["createVNode"])("td",{width:"150",class:"text-4 font-weight-bold"},"電話",-1),A=Object(n["createVNode"])("td",{width:"150",class:"text-4 font-weight-bold"},"地址",-1),B=Object(n["createVNode"])("td",{width:"150",class:"text-4 font-weight-bold"},"支付方式",-1),P=Object(n["createVNode"])("td",{width:"150",class:"text-4 font-weight-bold"},"備註",-1),q=Object(n["createVNode"])("td",{width:"150",class:"text-4 font-weight-bold"},"付款狀態",-1),$={key:0,class:"row w-100 mx-auto"},L={class:"col-12"},H={key:0,class:"fas fa-spinner fa-pulse"},I={key:1};function C(e,t,o,C,W,Y){const F=Object(n["resolveComponent"])("InnerBanner");return Object(n["openBlock"])(),Object(n["createBlock"])("div",r,[Object(n["createVNode"])(F,{msg:W.msg},null,8,["msg"]),Object(n["createVNode"])("div",a,[Object(n["createVNode"])("div",i,[Object(n["createVNode"])("div",c,[d,Object(n["createVNode"])("div",s,[Object(n["createVNode"])("div",{class:["rounded p-2",1==e.order.is_paid?"bg-secondary":"bg-gray-200"]},[l,u,f],2)])])]),Object(n["createVNode"])("table",b,[p,Object(n["createVNode"])("tbody",null,[(Object(n["openBlock"])(!0),Object(n["createBlock"])(n["Fragment"],null,Object(n["renderList"])(e.order.products,t=>(Object(n["openBlock"])(),Object(n["createBlock"])("tr",{key:t.id},[Object(n["createVNode"])("td",null,[Object(n["createVNode"])("div",m,[Object(n["createVNode"])("div",{class:"item-product-pic _sm",style:{backgroundImage:"url("+t.product.imageUrl+")"}},null,4)])]),Object(n["createVNode"])("td",null,[Object(n["createVNode"])("div",v,Object(n["toDisplayString"])(t.product.title),1)]),Object(n["createVNode"])("td",y,[Object(n["createVNode"])("div",g,Object(n["toDisplayString"])(t.qty)+" / "+Object(n["toDisplayString"])(t.product.unit),1)]),Object(n["createVNode"])("td",h,[Object(n["createVNode"])("del",w,Object(n["toDisplayString"])(e.$filters.currency(t.product.origin_price)),1),j,Object(n["createVNode"])("span",O,Object(n["toDisplayString"])(e.$filters.currency(t.product.price)),1),Object(n["createVNode"])("div",k,Object(n["toDisplayString"])(e.$filters.currency(t.final_total)),1)])]))),128))]),Object(n["createVNode"])("tfoot",null,[Object(n["createVNode"])("tr",null,[x,N,V,Object(n["createVNode"])("td",S,Object(n["toDisplayString"])(e.$filters.currency(e.order.total)),1)])])]),Object(n["createVNode"])("div",_,[D,Object(n["createVNode"])("table",E,[Object(n["createVNode"])("tbody",null,[Object(n["createVNode"])("tr",null,[M,Object(n["createVNode"])("td",null,Object(n["toDisplayString"])(e.order.user.name),1)]),Object(n["createVNode"])("tr",null,[T,Object(n["createVNode"])("td",null,Object(n["toDisplayString"])(e.order.user.email),1)]),Object(n["createVNode"])("tr",null,[z,Object(n["createVNode"])("td",null,Object(n["toDisplayString"])(e.order.user.tel),1)]),Object(n["createVNode"])("tr",null,[A,Object(n["createVNode"])("td",null,Object(n["toDisplayString"])(e.order.user.address),1)]),Object(n["createVNode"])("tr",null,[B,Object(n["createVNode"])("td",null,Object(n["toDisplayString"])(e.order.user.payment_method),1)]),Object(n["createVNode"])("tr",null,[P,Object(n["createVNode"])("td",null,Object(n["toDisplayString"])(e.order.message),1)]),Object(n["createVNode"])("tr",null,[q,Object(n["createVNode"])("td",null,Object(n["toDisplayString"])(e.order.is_paid),1)])])])]),e.order.is_paid?Object(n["createCommentVNode"])("",!0):(Object(n["openBlock"])(),Object(n["createBlock"])("div",$,[Object(n["createVNode"])("div",L,[Object(n["createVNode"])("button",{type:"submit",class:"btn btn-secondary w-100 text-white",disabled:e.spinner,onClick:t[1]||(t[1]=t=>e.$store.dispatch("frontend/fetchPayOrder",e.$route.params.id))},[e.spinner?(Object(n["openBlock"])(),Object(n["createBlock"])("i",H)):(Object(n["openBlock"])(),Object(n["createBlock"])("span",I,"結帳"))],8,["disabled"])])]))])])}var W=o("f5af"),Y=o.n(W),F=o("5502"),J=o("ac49"),G={components:{InnerBanner:J["a"]},data(){return{msg:"確認訂單資料"}},computed:{...Object(F["b"])({spinner:"all/spinner",order:"frontend/order"})},async created(){await this.$store.dispatch("frontend/fetchGetOrder",this.$route.params.id)},mounted(){this.$nextTick(()=>{Y.a.init()})}};G.render=C;t["default"]=G},f5af:function(e,t,o){!function(t,o){e.exports=o()}(0,(function(){return function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={exports:{},id:n,loaded:!1};return e[n].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var o={};return t.m=e,t.c=o,t.p="dist/",t(0)}([function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},a=o(1),i=(n(a),o(6)),c=n(i),d=o(7),s=n(d),l=o(8),u=n(l),f=o(9),b=n(f),p=o(10),m=n(p),v=o(11),y=n(v),g=o(14),h=n(g),w=[],j=!1,O={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},k=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&(j=!0),j)return w=(0,y.default)(w,O),(0,m.default)(w,O.once),w},x=function(){w=(0,h.default)(),k()},N=function(){w.forEach((function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")}))},V=function(e){return!0===e||"mobile"===e&&b.default.mobile()||"phone"===e&&b.default.phone()||"tablet"===e&&b.default.tablet()||"function"==typeof e&&!0===e()},S=function(e){O=r(O,e),w=(0,h.default)();var t=document.all&&!window.atob;return V(O.disable)||t?N():(O.disableMutationObserver||u.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),O.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",O.easing),document.querySelector("body").setAttribute("data-aos-duration",O.duration),document.querySelector("body").setAttribute("data-aos-delay",O.delay),"DOMContentLoaded"===O.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?k(!0):"load"===O.startEvent?window.addEventListener(O.startEvent,(function(){k(!0)})):document.addEventListener(O.startEvent,(function(){k(!0)})),window.addEventListener("resize",(0,s.default)(k,O.debounceDelay,!0)),window.addEventListener("orientationchange",(0,s.default)(k,O.debounceDelay,!0)),window.addEventListener("scroll",(0,c.default)((function(){(0,m.default)(w,O.once)}),O.throttleDelay)),O.disableMutationObserver||u.default.ready("[data-aos]",x),w)};e.exports={init:S,refresh:k,refreshHard:x}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function o(e,t,o){function n(t){var o=m,n=v;return m=v=void 0,j=t,g=e.apply(n,o)}function a(e){return j=e,h=setTimeout(l,t),N?n(e):g}function i(e){var o=e-w,n=e-j,r=t-o;return V?k(r,y-n):r}function d(e){var o=e-w,n=e-j;return void 0===w||o>=t||o<0||V&&n>=y}function l(){var e=x();return d(e)?u(e):void(h=setTimeout(l,i(e)))}function u(e){return h=void 0,S&&m?n(e):(m=v=void 0,g)}function f(){void 0!==h&&clearTimeout(h),j=0,m=w=v=h=void 0}function b(){return void 0===h?g:u(x())}function p(){var e=x(),o=d(e);if(m=arguments,v=this,w=e,o){if(void 0===h)return a(w);if(V)return h=setTimeout(l,t),n(w)}return void 0===h&&(h=setTimeout(l,t)),g}var m,v,y,g,h,w,j=0,N=!1,V=!1,S=!0;if("function"!=typeof e)throw new TypeError(s);return t=c(t)||0,r(o)&&(N=!!o.leading,V="maxWait"in o,y=V?O(c(o.maxWait)||0,t):y,S="trailing"in o?!!o.trailing:S),p.cancel=f,p.flush=b,p}function n(e,t,n){var a=!0,i=!0;if("function"!=typeof e)throw new TypeError(s);return r(n)&&(a="leading"in n?!!n.leading:a,i="trailing"in n?!!n.trailing:i),o(e,t,{leading:a,maxWait:t,trailing:i})}function r(e){var t="undefined"==typeof e?"undefined":d(e);return!!e&&("object"==t||"function"==t)}function a(e){return!!e&&"object"==("undefined"==typeof e?"undefined":d(e))}function i(e){return"symbol"==("undefined"==typeof e?"undefined":d(e))||a(e)&&j.call(e)==u}function c(e){if("number"==typeof e)return e;if(i(e))return l;if(r(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=r(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(f,"");var o=p.test(e);return o||m.test(e)?v(e.slice(2),o?2:8):b.test(e)?l:+e}var d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s="Expected a function",l=NaN,u="[object Symbol]",f=/^\s+|\s+$/g,b=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,m=/^0o[0-7]+$/i,v=parseInt,y="object"==("undefined"==typeof t?"undefined":d(t))&&t&&t.Object===Object&&t,g="object"==("undefined"==typeof self?"undefined":d(self))&&self&&self.Object===Object&&self,h=y||g||Function("return this")(),w=Object.prototype,j=w.toString,O=Math.max,k=Math.min,x=function(){return h.Date.now()};e.exports=n}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function o(e,t,o){function r(t){var o=m,n=v;return m=v=void 0,x=t,g=e.apply(n,o)}function a(e){return x=e,h=setTimeout(l,t),N?r(e):g}function c(e){var o=e-w,n=e-x,r=t-o;return V?O(r,y-n):r}function s(e){var o=e-w,n=e-x;return void 0===w||o>=t||o<0||V&&n>=y}function l(){var e=k();return s(e)?u(e):void(h=setTimeout(l,c(e)))}function u(e){return h=void 0,S&&m?r(e):(m=v=void 0,g)}function f(){void 0!==h&&clearTimeout(h),x=0,m=w=v=h=void 0}function b(){return void 0===h?g:u(k())}function p(){var e=k(),o=s(e);if(m=arguments,v=this,w=e,o){if(void 0===h)return a(w);if(V)return h=setTimeout(l,t),r(w)}return void 0===h&&(h=setTimeout(l,t)),g}var m,v,y,g,h,w,x=0,N=!1,V=!1,S=!0;if("function"!=typeof e)throw new TypeError(d);return t=i(t)||0,n(o)&&(N=!!o.leading,V="maxWait"in o,y=V?j(i(o.maxWait)||0,t):y,S="trailing"in o?!!o.trailing:S),p.cancel=f,p.flush=b,p}function n(e){var t="undefined"==typeof e?"undefined":c(e);return!!e&&("object"==t||"function"==t)}function r(e){return!!e&&"object"==("undefined"==typeof e?"undefined":c(e))}function a(e){return"symbol"==("undefined"==typeof e?"undefined":c(e))||r(e)&&w.call(e)==l}function i(e){if("number"==typeof e)return e;if(a(e))return s;if(n(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=n(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(u,"");var o=b.test(e);return o||p.test(e)?m(e.slice(2),o?2:8):f.test(e)?s:+e}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d="Expected a function",s=NaN,l="[object Symbol]",u=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,b=/^0b[01]+$/i,p=/^0o[0-7]+$/i,m=parseInt,v="object"==("undefined"==typeof t?"undefined":c(t))&&t&&t.Object===Object&&t,y="object"==("undefined"==typeof self?"undefined":c(self))&&self&&self.Object===Object&&self,g=v||y||Function("return this")(),h=Object.prototype,w=h.toString,j=Math.max,O=Math.min,k=function(){return g.Date.now()};e.exports=o}).call(t,function(){return this}())},function(e,t){"use strict";function o(e){var t=void 0,n=void 0;for(t=0;t<e.length;t+=1){if(n=e[t],n.dataset&&n.dataset.aos)return!0;if(n.children&&o(n.children))return!0}return!1}function n(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function r(){return!!n()}function a(e,t){var o=window.document,r=n(),a=new r(i);c=t,a.observe(o.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function i(e){e&&e.forEach((function(e){var t=Array.prototype.slice.call(e.addedNodes),n=Array.prototype.slice.call(e.removedNodes),r=t.concat(n);if(o(r))return c()}))}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){};t.default={isSupported:r,ready:a}},function(e,t){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),a=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,i=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,c=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,d=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,s=function(){function e(){o(this,e)}return r(e,[{key:"phone",value:function(){var e=n();return!(!a.test(e)&&!i.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=n();return!(!c.test(e)&&!d.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new s},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e,t,o){var n=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):"undefined"!=typeof n&&("false"===n||!o&&"true"!==n)&&e.node.classList.remove("aos-animate")},n=function(e,t){var n=window.pageYOffset,r=window.innerHeight;e.forEach((function(e,a){o(e,r+n,t)}))};t.default=n},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=o(12),a=n(r),i=function(e,t){return e.forEach((function(e,o){e.node.classList.add("aos-init"),e.position=(0,a.default)(e.node,t.offset)})),e};t.default=i},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=o(13),a=n(r),i=function(e,t){var o=0,n=0,r=window.innerHeight,i={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(i.offset&&!isNaN(i.offset)&&(n=parseInt(i.offset)),i.anchor&&document.querySelectorAll(i.anchor)&&(e=document.querySelectorAll(i.anchor)[0]),o=(0,a.default)(e).top,i.anchorPlacement){case"top-bottom":break;case"center-bottom":o+=e.offsetHeight/2;break;case"bottom-bottom":o+=e.offsetHeight;break;case"top-center":o+=r/2;break;case"bottom-center":o+=r/2+e.offsetHeight;break;case"center-center":o+=r/2+e.offsetHeight/2;break;case"top-top":o+=r;break;case"bottom-top":o+=e.offsetHeight+r;break;case"center-top":o+=e.offsetHeight/2+r}return i.anchorPlacement||i.offset||isNaN(t)||(n=t),o+n};t.default=i},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){for(var t=0,o=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),o+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:o,left:t}};t.default=o},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,(function(e){return{node:e}}))};t.default=o}])}))}}]);
//# sourceMappingURL=chunk-bf5dcf62.b94df84c.js.map