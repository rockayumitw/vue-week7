(function(e){function t(t){for(var o,c,i=t[0],r=t[1],l=t[2],d=0,u=[];d<i.length;d++)c=i[d],Object.prototype.hasOwnProperty.call(s,c)&&s[c]&&u.push(s[c][0]),s[c]=0;for(o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);p&&p(t);while(u.length)u.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],o=!0,c=1;c<a.length;c++){var i=a[c];0!==s[i]&&(o=!1)}o&&(n.splice(t--,1),e=r(r.s=a[0]))}return e}var o={},c={app:0},s={app:0},n=[];function i(e){return r.p+"js/"+({}[e]||e)+"."+{"chunk-077c7a8e":"6c9736f8","chunk-07a4fa50":"d3036d1e","chunk-18bb4ac6":"b39fe94e","chunk-2d20ef09":"48f55ebb","chunk-2d0aa5b8":"c32e7151","chunk-0368b62c":"6c3129c7","chunk-13202ee9":"202d36b3","chunk-4793037c":"d56f8a60","chunk-56923232":"ee31e305","chunk-a82f5d4e":"c58cd868","chunk-2d237543":"4835d08c","chunk-7e6c62dc":"0baaca5d","chunk-2d0ba577":"afcfc8a8","chunk-2d20e7ac":"dc598d2c","chunk-5ea64042":"dffad594","chunk-5ea7d5c8":"0b317c01","chunk-5ea88940":"29616c17","chunk-2d0e456b":"2682f0b6","chunk-083ba892":"933fa895"}[e]+".js"}function r(t){if(o[t])return o[t].exports;var a=o[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.e=function(e){var t=[],a={"chunk-083ba892":1};c[e]?t.push(c[e]):0!==c[e]&&a[e]&&t.push(c[e]=new Promise((function(t,a){for(var o="css/"+({}[e]||e)+"."+{"chunk-077c7a8e":"31d6cfe0","chunk-07a4fa50":"31d6cfe0","chunk-18bb4ac6":"31d6cfe0","chunk-2d20ef09":"31d6cfe0","chunk-2d0aa5b8":"31d6cfe0","chunk-0368b62c":"31d6cfe0","chunk-13202ee9":"31d6cfe0","chunk-4793037c":"31d6cfe0","chunk-56923232":"31d6cfe0","chunk-a82f5d4e":"31d6cfe0","chunk-2d237543":"31d6cfe0","chunk-7e6c62dc":"31d6cfe0","chunk-2d0ba577":"31d6cfe0","chunk-2d20e7ac":"31d6cfe0","chunk-5ea64042":"31d6cfe0","chunk-5ea7d5c8":"31d6cfe0","chunk-5ea88940":"31d6cfe0","chunk-2d0e456b":"31d6cfe0","chunk-083ba892":"9f1ae477"}[e]+".css",s=r.p+o,n=document.getElementsByTagName("link"),i=0;i<n.length;i++){var l=n[i],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===o||d===s))return t()}var u=document.getElementsByTagName("style");for(i=0;i<u.length;i++){l=u[i],d=l.getAttribute("data-href");if(d===o||d===s)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var o=t&&t.target&&t.target.src||s,n=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");n.code="CSS_CHUNK_LOAD_FAILED",n.request=o,delete c[e],p.parentNode.removeChild(p),a(n)},p.href=s;var h=document.getElementsByTagName("head")[0];h.appendChild(p)})).then((function(){c[e]=0})));var o=s[e];if(0!==o)if(o)t.push(o[2]);else{var n=new Promise((function(t,a){o=s[e]=[t,a]}));t.push(o[2]=n);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,r.nc&&d.setAttribute("nonce",r.nc),d.src=i(e);var u=new Error;l=function(t){d.onerror=d.onload=null,clearTimeout(p);var a=s[e];if(0!==a){if(a){var o=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+o+": "+c+")",u.name="ChunkLoadError",u.type=o,u.request=c,a[1](u)}s[e]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(t)},r.m=e,r.c=o,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(a,o,function(t){return e[t]}.bind(null,o));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var p=d;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0e18":function(e){e.exports=JSON.parse('{"title":"你好-中文","bye":"再見"}')},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("a79d");var o=a("7a23"),c=a("7bb1"),s=a("3aa8"),n=a("cbdf"),i=a("9457"),r=a("5886"),l=a("bc3a"),d=a.n(l),u=a("2106"),p=a.n(u),h=a("9062"),m=a.n(h),g=a("7b17"),f=a("3730"),A=a.n(f),S=a("ecee"),_=a("c074"),L=a("f2d1"),O=a("ad3d");a("5319");function E(e){const t=parseInt(e,10);return"$"+t.toFixed(0).replace(/./g,(e,t,a)=>t&&"."!==e&&(a.length-t)%3===0?(", "+e).replace(/\s/g,""):e)}function b(e){const t=new Date(1e3*e);return t.toLocaleDateString()}function v(e,t){const a=Object(o["resolveComponent"])("router-view");return Object(o["openBlock"])(),Object(o["createBlock"])("div",null,[Object(o["createVNode"])(a)])}const k={};k.render=v;var I=k,y=(a("ddb0"),a("6c02"));const w=[{path:"/",name:"Home",component:()=>a.e("chunk-077c7a8e").then(a.bind(null,"bb51")),children:[{path:"/Home",name:"Home",component:()=>Promise.all([a.e("chunk-2d0aa5b8"),a.e("chunk-18bb4ac6"),a.e("chunk-13202ee9")]).then(a.bind(null,"12be"))},{path:"/products",name:"Products",component:()=>Promise.all([a.e("chunk-2d0aa5b8"),a.e("chunk-0368b62c")]).then(a.bind(null,"2473"))},{path:"/product/:id",name:"Product",component:()=>Promise.all([a.e("chunk-18bb4ac6"),a.e("chunk-2d20ef09")]).then(a.bind(null,"b203"))},{path:"/cart",name:"Cart",component:()=>a.e("chunk-5ea64042").then(a.bind(null,"cfe1"))},{path:"/createOrder",name:"createOrder",component:()=>a.e("chunk-5ea88940").then(a.bind(null,"b7fa"))},{path:"/order/:id",name:"Order",component:()=>a.e("chunk-5ea7d5c8").then(a.bind(null,"c0cb"))},{path:"/news",name:"News",component:()=>Promise.all([a.e("chunk-2d0aa5b8"),a.e("chunk-56923232")]).then(a.bind(null,"8379"))},{path:"/new/:id",name:"New",component:()=>a.e("chunk-2d0ba577").then(a.bind(null,"3796"))},{path:"/login",name:"Login",component:()=>a.e("chunk-2d20e7ac").then(a.bind(null,"b019"))}]},{path:"/admin",component:()=>a.e("chunk-07a4fa50").then(a.bind(null,"7277")),children:[{path:"products",component:()=>Promise.all([a.e("chunk-2d0aa5b8"),a.e("chunk-a82f5d4e"),a.e("chunk-2d237543"),a.e("chunk-7e6c62dc")]).then(a.bind(null,"1fae"))},{path:"coupons",component:()=>Promise.all([a.e("chunk-a82f5d4e"),a.e("chunk-2d0e456b")]).then(a.bind(null,"9097"))},{path:"orders",component:()=>Promise.all([a.e("chunk-2d0aa5b8"),a.e("chunk-4793037c")]).then(a.bind(null,"67e3"))},{path:"news",component:()=>Promise.all([a.e("chunk-a82f5d4e"),a.e("chunk-2d237543"),a.e("chunk-083ba892")]).then(a.bind(null,"888d"))}]}],V=Object(y["a"])({history:Object(y["b"])(),routes:w});var N=V,P=a("5502");const G={namespaced:!0,state:()=>({loading:!1,lang:null,spinner:!1}),mutations:{SAVE_LOADING(e,t){e.loading=t},SAVE_LANGUAGE(e,t){e.lang=t},SAVE_SPINNER(e,t){e.spinner=t}},getters:{loading:e=>e.loading,lang:e=>e.lang,spinner:e=>e.spinner}};var D=G,C=(a("e01a"),a("3d20")),T=a.n(C);const x={namespaced:!0,state:()=>({product:{category:"",content:"",description:"",id:"",imageUrl:"",is_enabled:0,num:0,origin_price:0,price:0,title:"",unit:""},articleLists:[],orderLists:[],couponLists:[],productLists:[],pagination:{}}),mutations:{SAVE_ARTICLE(e,t){e.article=t},SAVE_ARTICLE_LISTS(e,t){e.articleLists=t},SAVE_PRODUCT(e,t){e.product=t},SAVE_PAGINATION(e,t){e.pagination=t},SAVE_PRODUCT_LISTS(e,t){e.productLists=t},SAVE_ORDERS_LISTS(e,t){e.orderLists=t},SAVE_COUPONS_LISTS(e,t){e.couponLists=t}},getters:{product:e=>e.product,article:e=>e.article,articleLists:e=>e.articleLists,productLists:e=>e.productLists,orderLists:e=>e.orderLists,couponLists:e=>e.couponLists,pagination:e=>e.pagination},actions:{async fetchGetOrders({commit:e},t){e("all/SAVE_LOADING",!0,{root:!0});const a="https://vue3-course-api.hexschool.io/api/traveltime1221/admin/orders?page="+t;console.log(a),await d.a.get(a).then(t=>{console.log(t),e("SAVE_ORDERS_LISTS",t.data.orders),e("SAVE_PAGINATION",t.data.pagination),e("all/SAVE_LOADING",!1,{root:!0})}).catch(e=>console.log(e.response))},async fetchRemoveOrder({state:e,commit:t,dispatch:a},o){const c="https://vue3-course-api.hexschool.io/api/traveltime1221/admin/order/"+o;console.log(c),t("all/SAVE_LOADING",!0,{root:!0}),await d.a.delete(c).then(t=>{a("fetchGetOrders",e.pagination.current_page),T.a.fire({position:"top-end",icon:"success",title:t.data.message,showConfirmButton:!1,timer:1500})}).catch(e=>console.log(e.response))},async fetchgetProductLists({commit:e},t){await e("all/SAVE_LOADING",!0,{root:!0}),console.log("取得後台產品列表");const a="https://vue3-course-api.hexschool.io/api/traveltime1221/admin/products?page="+t;await d.a.get(a).then(async t=>{console.log(t),t.data.success?(e("SAVE_PRODUCT_LISTS",t.data.products),e("SAVE_PAGINATION",t.data.pagination)):T.a.fire({icon:"error",title:t.data.message,text:""}),e("all/SAVE_LOADING",!1,{root:!0})}).catch(e=>console.log(e.response))},async fetchChangeProduct({state:e,dispatch:t},a){console.log(a.id);const o=void 0===a.id?"post":"put";let c="https://vue3-course-api.hexschool.io/api/traveltime1221/admin/product";const s={data:{...a}};c=void 0===a.id?c:c+="/"+a.id,console.log(o),await d.a[o](c,s).then(async a=>{console.log(a),a.data.success?(T.a.fire({icon:"success",title:a.data.message,text:""}),t("fetchgetProductLists",e.pagination.current_page)):T.a.fire({icon:"error",title:"Oops...",text:a.data.message})}).catch(e=>console.log(e))},async fetchRemoveProduct({dispatch:e},t){const a="https://vue3-course-api.hexschool.io/api/traveltime1221/admin/product/"+t;await d.a.delete(a).then(t=>{console.log(t),T.a.fire({position:"top-end",icon:"success",title:"已經刪除產品",showConfirmButton:!1,timer:1500}),e("fetchgetProductLists")}).catch(e=>{console.log(e.response)})},async fetchUpdateOrderPaid({state:e,commit:t,dispatch:a},o){t("all/SAVE_LOADING",!0,{root:!0});const c="https://vue3-course-api.hexschool.io/api/traveltime1221/admin/order/"+o.id;console.log(c);const s={is_paid:o.is_paid};await d.a.put(c,{data:s}).then(t=>{console.log(t.data.message),a("fetchGetOrders",e.pagination.current_page)}).catch(e=>console.log(e))},async fetchRemoveAllOrder({state:e,commit:t,dispatch:a}){const o="https://vue3-course-api.hexschool.io/api/traveltime1221/admin/orders/all";t("all/SAVE_LOADING",!0,{root:!0}),await d.a.delete(o).then(t=>{a("fetchGetOrders",e.pagination.current_page),T.a.fire({position:"top-end",icon:"success",title:t.data.message,showConfirmButton:!1,timer:1500})}).catch(e=>console.log(e.response))},async fetchGetCoupons({commit:e}){const t="https://vue3-course-api.hexschool.io/api/traveltime1221/admin/coupons";e("all/SAVE_LOADING",!0,{root:!0}),await d.a.get(t).then(t=>{console.log(t),e("SAVE_COUPONS_LISTS",t.data.coupons),e("all/SAVE_LOADING",!1,{root:!0})}).catch(e=>console.log(e))},async fetchChangeCoupons({commit:e,dispatch:t},a){console.log(a),e("all/SAVE_LOADING",!0,{root:!0}),console.log(a.id);const o=void 0===a.id?"https://vue3-course-api.hexschool.io/api/traveltime1221/admin/coupon":"https://vue3-course-api.hexschool.io/api/traveltime1221/admin/coupon/"+a.id,c=void 0===a.id?"post":"put";console.log(c),await d.a[c](o,{data:{...a}}).then(a=>{console.log(a),a.data.success?T.a.fire({position:"top-end",icon:"success",title:a.data.message,showConfirmButton:!1,timer:1500}):T.a.fire({position:"top-end",icon:"error",title:a.data.message,showConfirmButton:!1,timer:1500}),t("fetchGetCoupons"),e("all/SAVE_LOADING",!1,{root:!0})}).catch(e=>console.log(e))},async fetchRemoveSingleCoupon({commit:e,dispatch:t},a){console.log(a),e("all/SAVE_LOADING",!0,{root:!0});const o="https://vue3-course-api.hexschool.io/api/traveltime1221/admin/coupon/"+a;await d.a.delete(o).then(e=>{console.log(e),e.data.success?(T.a.fire({position:"top-end",icon:"success",title:e.data.message,showConfirmButton:!1,timer:1500}),t("fetchGetCoupons")):T.a.fire({position:"top-end",icon:"success",title:e.data.message,showConfirmButton:!1,timer:1500})})},async fetchGetArticles({commit:e},t){e("all/SAVE_LOADING",!0,{root:!0});const a="https://vue3-course-api.hexschool.io/api/traveltime1221/admin/articles?page="+t;console.log(a),await d.a.get(a).then(t=>{console.log(t),t.data.success&&(e("SAVE_ARTICLE_LISTS",t.data.articles),e("SAVE_PAGINATION",t.data.pagination),e("all/SAVE_LOADING",!1,{root:!0}))}).catch(e=>{console.log(e.message)})},async getAdminSingleArticles({commit:e},t){const a="https://vue3-course-api.hexschool.io/api/traveltime1221/admin/article/"+t;e("all/SAVE_LOADING",!0,{root:!0}),await d.a.get(a).then(t=>{t.data.success&&console.log(t.data),e("all/SAVE_LOADING",!1,{root:!0})}).catch(t=>{e("all/SAVE_LOADING",!1,{root:!0}),console.log(t.message)})},async fetchUpdateArticle({state:e,commit:t,dispatch:a},o){t("all/SAVE_LOADING",!0,{root:!0}),console.log(o.id);const c=void 0===o.id?"post":"put";let s="https://vue3-course-api.hexschool.io/api/traveltime1221/admin/article";const n=o;n.content=o.description;const i={data:{...n}};s=void 0===o.id?s:s+="/"+o.id,console.log(i),console.log(s),console.log(c),t("all/SAVE_LOADING",!1,{root:!0}),await d.a[c](s,i).then(async t=>{t.data.success?(T.a.fire({icon:"success",title:t.data.message,text:""}),await a("fetchGetArticles",e.pagination.current_page)):T.a.fire({icon:"error",title:"Oops...",text:t.data.message})}).catch(e=>console.log(e))},async fetchRemoveArticle({state:e,commit:t,dispatch:a},o){const c="https://vue3-course-api.hexschool.io/api/traveltime1221/admin/article/"+o;t("all/SAVE_LOADING",!0,{root:!0}),await d.a.delete(c).then(async o=>{o.data.success?(T.a.fire({position:"top-end",icon:"success",title:o.data.message,showConfirmButton:!1,timer:1500}),await a("fetchGetArticles",e.pagination.current_page)):T.a.fire({position:"top-end",icon:"success",title:o.data.message,showConfirmButton:!1,timer:1500}),t("all/SAVE_LOADING",!1,{root:!0})})}}};var R=x;const j={save(e){const t=JSON.stringify(e);localStorage.setItem("favorite",t)},get(){return JSON.parse(localStorage.getItem("favorite"))}},U={namespaced:!0,state:()=>({product:{category:"",content:"",description:"",id:"",imageUrl:"",is_enabled:0,num:0,origin_price:0,price:0,title:"",unit:""},article:{},articleLists:[],productLists:[],cartLists:[],cartAmount:0,pagination:{},order:{},recommendProducts:[],allPageProducts:[],bookmarkLists:j.get()||[]}),mutations:{SAVE_BOOKMARK_LISTS(e,t){e.bookmarkLists=t},SAVE_ALLPAGE_PRODUCTS(e,t){e.allPageProducts=t},SAVE_RECOMMEND_PRODUCTS(e,t){e.recommendProducts=t},SAVE_ORDER(e,t){e.order=t},SAVE_ARTICLE(e,t){e.article=t},SAVE_PRODUCT(e,t){e.product=t},SAVE_ARTICLE_LISTS(e,t){e.articleLists=t},SAVE_PRODUCT_LISTS(e,t){e.productLists=t},SAVE_CART_AMOUNT(e,t){e.cartAmount=t},SAVE_CART_LISTS(e,t){e.cartLists=t},SAVE_PAGINATION(e,t){e.pagination=t}},getters:{product:e=>e.product,article:e=>e.article,articleLists:e=>e.articleLists,productLists:e=>e.productLists,cartLists:e=>e.cartLists,cartAmount:e=>e.cartAmount,pagination:e=>e.pagination,order:e=>e.order,recommendProducts:e=>e.recommendProducts,allPageProducts:e=>e.allPageProducts,bookmarkLists:e=>e.bookmarkLists},actions:{async fetchBookmark({state:e,commit:t},a){let o=!1;const c=e.bookmarkLists;c.forEach(e=>{a.id===e.id&&(c.splice(0,1),o=!0)}),o||c.push(a),j.save(c),await t("SAVE_BOOKMARK_LISTS",c)},async fetchAllPageProductLists({state:e,commit:t}){t("all/SAVE_LOADING",!0,{root:!0});const a=[];for(let c=1;c<=e.pagination.total_pages;c++){const e="https://vue3-course-api.hexschool.io/api/traveltime1221/products?page="+c;a.push(d.a.get(e).then().catch(e=>console.log(e.response)))}const o=[];await Promise.all(a).then(async e=>{console.log(e),await e.forEach(async e=>{o.push(...e.data.products),await t("SAVE_ALLPAGE_PRODUCTS",o),await t("all/SAVE_LOADING",!1,{root:!0})})})},async fetchgetProductLists({commit:e},t=1){e("all/SAVE_LOADING",!0,{root:!0});const a="https://vue3-course-api.hexschool.io/api/traveltime1221/products?page="+t;await d.a.get(a).then(async t=>{t.data.success?(await e("SAVE_PRODUCT_LISTS",t.data.products),await e("SAVE_PAGINATION",t.data.pagination)):T.a.fire({icon:"success",title:t.data.message,text:""}),e("all/SAVE_LOADING",!1,{root:!0})}).catch(e=>console.log(e.response))},async fetchGetProductInfo({commit:e},t){e("all/SAVE_LOADING",!0,{root:!0});const a="https://vue3-course-api.hexschool.io/api/traveltime1221/product/"+t.id;await d.a.get(a).then(t=>{console.log(t),t.data.success?e("SAVE_PRODUCT",t.data.product):(console.log(t.data.message),T.a.fire({icon:"success",title:t.data.message,text:""})),e("all/SAVE_LOADING",!1,{root:!0})})},async fetchAddToCart({state:e,commit:t,dispatch:a},o){await t("all/SAVE_LOADING",!0,{root:!0});let c=null,s="",n="";await e.cartLists.carts.forEach(e=>{e.product.id===o.product_id&&(c="put",n=e.id)}),null==c&&(c="post"),s="put"===c?"https://vue3-course-api.hexschool.io/api/traveltime1221/cart/"+n:"https://vue3-course-api.hexschool.io/api/traveltime1221/cart";const i=o;await d.a[c](s,{data:i}).then(async e=>{e.data.success?("post"===c?(t("all/SAVE_SPINNER",!1,{root:!0}),T.a.fire({icon:"success",title:e.data.message,text:""})):(console.log("加入購物車"),t("all/SAVE_SPINNER",!1,{root:!0}),T.a.fire({icon:"success",title:e.data.message,text:""})),await a("fetchGetCartLists")):console.log(e.data.message)}).catch(e=>{T.a.fire({icon:"success",title:e.response,text:""})})},async fetchGetCartLists({commit:e}){await e("all/SAVE_LOADING",!0,{root:!0});const t="https://vue3-course-api.hexschool.io/api/traveltime1221/cart";await d.a.get(t).then(async t=>{await e("SAVE_CART_AMOUNT",t.data.data.carts.length),await e("SAVE_CART_LISTS",t.data.data),await e("all/SAVE_LOADING",!1,{root:!0})}).catch(e=>{console.log(e)})},async fetchRemoveSingleProduct({commit:e,dispatch:t},a){const o="https://vue3-course-api.hexschool.io/api/traveltime1221/cart/"+a;await d.a.delete(o).then(async a=>{a.data.message&&(T.a.fire({icon:"success",title:a.data.message,text:""}),await e("all/SAVE_SPINNER","",{root:!0}),await t("fetchGetCartLists"))}).catch(e=>console.log(e))},async fetchRemoveAllProduct({dispatch:e}){const t="https://vue3-course-api.hexschool.io/api/traveltime1221/carts";await d.a.delete(t).then(async t=>{T.a.fire({icon:"success",title:t.data.message,text:""}),await e("fetchGetCartLists")}).catch(e=>{console.log(e.response)})},async fetchGetArticle({commit:e},t){e("all/SAVE_LOADING",!0,{root:!0});const a="https://vue3-course-api.hexschool.io/api/traveltime1221/article/"+t;await d.a.get(a).then(t=>{console.log(t.data),t.data.success&&e("SAVE_ARTICLE",t.data.article),e("all/SAVE_LOADING",!1,{root:!0})}).catch(e=>console.log(e))},async fetchGetArticleLists({commit:e},t){e("all/SAVE_LOADING",!0,{root:!0});const a="https://vue3-course-api.hexschool.io/api/traveltime1221/articles?page="+t;await d.a.get(a).then(t=>{t.data.success&&(e("SAVE_ARTICLE_LISTS",t.data.articles),e("SAVE_PAGINATION",t.data.pagination)),e("all/SAVE_LOADING",!1,{root:!0})}).catch(e=>console.log(e))},async fetchGetOrder({commit:e},t){const a="https://vue3-course-api.hexschool.io/api/traveltime1221/order/"+t;await d.a.get(a).then(async t=>{t.data.success?await e("SAVE_ORDER",t.data.order):(console.log(t.data.message),T.a.fire({icon:"error",title:t.data.message,text:""}))}).catch(e=>console.log(e.response))},async fetchPayOrder({commit:e,dispatch:t},a){e("all/SAVE_LOADING",!0,{root:!0});const o="https://vue3-course-api.hexschool.io/api/traveltime1221/pay/"+a;await d.a.post(o).then(async o=>{o.data.success?(T.a.fire({icon:"success",title:o.data.message,text:""}),await t("fetchGetOrder",a)):(console.log(o.data.message),T.a.fire({icon:"error",title:o.data.message,text:""})),e("all/SAVE_LOADING",!1,{root:!0})}).catch(e=>console.log(e.response))},async fetchUseCoupon({commit:e,dispatch:t},a){const o="https://vue3-course-api.hexschool.io/api/traveltime1221/coupon";await d.a.post(o,{data:{code:a}}).then(async a=>{a.data.success?(T.a.fire({icon:"success",title:a.data.message,text:""}),await t("fetchGetCartLists")):(console.log(a.data.message),T.a.fire({icon:"error",title:a.data.message,text:""})),e("all/SAVE_LOADING",!1,{root:!0})}).catch(e=>console.log(e.response))},async getRecommendProducts({commit:e},t){const{category:a}=t.product,o=t.productLists.filter(e=>e.category===a),c=new Set([]),s=[];for(let n=0;c.size<4;n++){const e=Math.floor(Math.random()*o.length);c.add(e)}c.forEach(e=>{s.push(o[e])}),console.log(s),e("SAVE_RECOMMEND_PRODUCTS",s)}}};var B=U,M=Object(P["a"])({namespaced:!0,modules:{all:D,backend:R,frontend:B}}),J=a("47e2"),K=a("0e18"),F=a("e312");const H=Object(J["a"])({locale:K,messages:{tw:K,en:F}});var z=H;a("7e7d");Object.keys(s["a"]).forEach(e=>{Object(c["e"])(e,s["a"][e])}),Object(c["d"])({generateMessage:Object(n["a"])({zh_TW:i}),validateOnInput:!0}),Object(n["b"])("zh_TW"),S["c"].add(_["a"],L["c"],_["b"],L["f"],L["a"],L["d"],L["b"],L["g"],L["e"]);const q=Object(o["createApp"])(I);q.config.globalProperties.$filters={date:b,currency:E},q.use(M),q.use(z),q.use(N),q.use(g["default"]),q.use(p.a,d.a),q.use(r["a"]),q.use(m.a,{loader:"dots"}),q.use(A.a),q.component("Form",c["c"]),q.component("Field",c["b"]),q.component("ErrorMessage",c["a"]),q.component("Loading",m.a),q.component("font-awesome-icon",O["a"]),q.mount("#app")},"7e7d":function(e,t,a){},e312:function(e){e.exports=JSON.parse('{"title":"hello-英文","bye":"bye"}')}});
//# sourceMappingURL=app.8b11aad9.js.map