(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e835253"],{1799:function(e,t,c){"use strict";var a=c("7a23");function o(e,t,c,o,n,r){return Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(c.totalPage,(t,o)=>(Object(a["openBlock"])(),Object(a["createBlock"])("li",{class:["page-item",t==c.currentPage?"active":""],key:o},[Object(a["createVNode"])("a",{class:"page-link",href:"#",onClick:Object(a["withModifiers"])(c=>e.$store.dispatch("getProductLists",t),["prevent"])},Object(a["toDisplayString"])(t),9,["onClick"])],2))),128)}var n={props:["currentPage","totalPage"]};n.render=o;t["a"]=n},e6dc:function(e,t,c){"use strict";c.r(t);var a=c("7a23");const o={class:"products"},n=Object(a["createVNode"])("h1",null,"產品列表頁面",-1),r={class:"table-box"},i={class:"table align-middle"},d=Object(a["createVNode"])("thead",null,[Object(a["createVNode"])("tr",null,[Object(a["createVNode"])("th",{width:"200"},"圖片"),Object(a["createVNode"])("th",{width:"400"},"商品名稱"),Object(a["createVNode"])("th",{width:"300"},"價格"),Object(a["createVNode"])("th",{width:"200"},"功能")])],-1),l={style:{width:"200px"}},s={width:"400"},b={width:"300"},p={class:"h6"},j={class:"h5"},u={width:"200"},O={class:"btn-group btn-group-sm"},g={class:"pagination justify-content-center"};function h(e,t,c,h,N,k){const V=Object(a["resolveComponent"])("Pagination"),w=Object(a["resolveComponent"])("loading");return Object(a["openBlock"])(),Object(a["createBlock"])("div",o,[n,Object(a["createVNode"])("div",r,[Object(a["createVNode"])("table",i,[d,Object(a["createVNode"])("tbody",null,[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(e.productLists,(t,c)=>(Object(a["openBlock"])(),Object(a["createBlock"])("tr",{key:c},[Object(a["createVNode"])("td",l,[""!=t.imageUrl?(Object(a["openBlock"])(),Object(a["createBlock"])("img",{key:0,width:"150",src:t.imageUrl,alt:""},null,8,["src"])):Object(a["createCommentVNode"])("",!0)]),Object(a["createVNode"])("td",s,Object(a["toDisplayString"])(t.title),1),Object(a["createVNode"])("td",b,[Object(a["createVNode"])("del",p,"原價 "+Object(a["toDisplayString"])(t.origin_price)+" 元",1),Object(a["createVNode"])("div",j,"現在只要 "+Object(a["toDisplayString"])(t.price)+" 元",1)]),Object(a["createVNode"])("td",u,[Object(a["createVNode"])("div",O,[Object(a["createVNode"])("button",{type:"button",class:"btn js-edit",onClick:e=>this.$router.push("/product/"+t.id)}," 查看更多 ",8,["onClick"]),Object(a["createVNode"])("button",{type:"button",class:"btn js-edit",onClick:e=>k.addToCart(t.id),disabled:e.spinner===t.id}," 加入購物車 ",8,["onClick","disabled"])])])]))),128))])]),Object(a["createVNode"])("ul",g,[Object(a["createVNode"])(V,{"current-page":e.pagination.current_page,"total-page":e.pagination.total_pages},null,8,["current-page","total-page"])])]),Object(a["createVNode"])(w,{active:e.loading,"onUpdate:active":t[1]||(t[1]=t=>e.loading=t),"can-cancel":!0,loader:"dots"},null,8,["active"])])}var N=c("1799"),k=c("5502"),V=c("9062"),w=c.n(V),m={components:{Pagination:N["a"],Loading:w.a},computed:{...Object(k["b"])({loading:"loading",product:"product",pagination:"pagination",productLists:"productLists",spinner:"spinner"})},async created(){await this.$store.dispatch("getProductLists")},methods:{async addToCart(e,t=1){await this.$store.commit("SAVE_SPINNER",e),await this.$store.dispatch("addToCart",{product_id:e,qty:t})}}};m.render=h;t["default"]=m}}]);
//# sourceMappingURL=chunk-7e835253.34803acd.js.map