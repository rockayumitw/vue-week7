(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e835253"],{1799:function(e,t,a){"use strict";var c=a("7a23");function o(e,t,a,o,n,r){return Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(a.totalPage,(t,o)=>(Object(c["openBlock"])(),Object(c["createBlock"])("li",{class:["page-item",t==a.currentPage?"active":""],key:o},[Object(c["createVNode"])("a",{class:"page-link",href:"#",onClick:Object(c["withModifiers"])(a=>(r.goTop(),e.$emit("changePage",t)),["prevent"])},Object(c["toDisplayString"])(t),9,["onClick"])],2))),128)}var n=a("1157"),r=a.n(n),i={props:["currentPage","totalPage"],data(){return{}},methods:{goTop(){console.log("in0"),r()("html, body").animate({scrollTop:r()(".container").offset().top-0},"fast")}}};i.render=o;t["a"]=i},e6dc:function(e,t,a){"use strict";a.r(t);var c=a("7a23");const o={class:"inner-page products"},n=Object(c["createVNode"])("div",{class:"inner-banner mb-17"},null,-1),r={class:"container"},i=Object(c["createStaticVNode"])('<div class="mb-5 text-center"><button class="btn btn-secondary mr-1 text-white">全部商品</button><button class="btn btn-secondary mr-1 text-white">依價格排序</button><div class="btn-group mr-1"><button type="button" class="btn btn-secondary dropdown-toggle text-white" data-bs-toggle="dropdown" aria-expanded="false"> 商品分類 </button><ul class="dropdown-menu"><li><a class="dropdown-item" href="#">Action</a></li><li><a class="dropdown-item" href="#">Another action</a></li><li><a class="dropdown-item" href="#">Something else here</a></li><li><hr class="dropdown-divider"></li><li><a class="dropdown-item" href="#">Separated link</a></li></ul></div></div>',1),d={class:""},s={class:"product-list row"},l={class:"card mb-5 border-0"},p={class:"overflow-hidden"},b={class:"card-body"},g={class:"card-title text-right text-white font-weight-bold"},u={class:"card-text text-right text-white"},j=Object(c["createTextVNode"])(" | "),h=Object(c["createTextVNode"])(" / "),O={class:"body-footer"},m={class:"pagination justify-content-center"};function f(e,t,a,f,w,v){const N=Object(c["resolveComponent"])("Pagination"),k=Object(c["resolveComponent"])("loading");return Object(c["openBlock"])(),Object(c["createBlock"])("div",o,[n,Object(c["createVNode"])("div",r,[i,Object(c["createVNode"])("div",d,[Object(c["createVNode"])("ul",s,[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(e.productLists,t=>(Object(c["openBlock"])(),Object(c["createBlock"])("li",{class:"item-product col-6 col-sm-6 col-md-4 col-lg-3",key:t},[Object(c["createVNode"])("div",l,[Object(c["createVNode"])("a",{onClick:e=>this.$router.push("/product/"+t.id),href:"javascript:;",class:"card border-0 rounded-0"},[Object(c["createVNode"])("div",p,[Object(c["createVNode"])("div",{class:"item-product-pic _lg",style:{backgroundImage:"url("+t.imageUrl+")"}},null,4)]),Object(c["createVNode"])("div",b,[Object(c["createVNode"])("h5",g,Object(c["toDisplayString"])(t.title),1),Object(c["createVNode"])("p",u,[Object(c["createVNode"])("del",null,Object(c["toDisplayString"])(t.origin_price),1),j,Object(c["createVNode"])("span",null,Object(c["toDisplayString"])(t.price),1),h,Object(c["createVNode"])("span",null,Object(c["toDisplayString"])(t.unit),1)])])],8,["onClick"]),Object(c["createVNode"])("div",O,[Object(c["createVNode"])("a",{href:"javascript:;",class:"btn btn-secondary rounded-0 text-white w-100",onClick:Object(c["withModifiers"])(e=>v.addToCart(t.id),["prevent"]),disabled:e.spinner===t.id},"加入購物車",8,["onClick","disabled"])])])]))),128))]),Object(c["createVNode"])("ul",m,[Object(c["createVNode"])(N,{"current-page":e.pagination.current_page,"total-page":e.pagination.total_pages,onChangePage:v.changePage},null,8,["current-page","total-page","onChangePage"])])])]),Object(c["createVNode"])(k,{active:e.loading,"onUpdate:active":t[1]||(t[1]=t=>e.loading=t),"can-cancel":!0,loader:"dots"},null,8,["active"])])}var w=a("1799"),v=a("5502"),N=a("9062"),k=a.n(N),V={components:{Pagination:w["a"],Loading:k.a},computed:{...Object(v["b"])({loading:"all/loading",spinner:"all/spinner",product:"frontend/product",pagination:"frontend/pagination",productLists:"frontend/productLists"})},async created(){await this.$store.dispatch("frontend/fetchgetProductLists")},mounted(){console.log(this.productLists)},methods:{async addToCart(e,t=1){await this.$store.commit("all/SAVE_SPINNER",e),await this.$store.dispatch("frontend/fetchAddToCart",{product_id:e,qty:t})},async changePage(e){await this.$store.dispatch("frontend/fetchgetProductLists",e)}}};V.render=f;t["default"]=V}}]);
//# sourceMappingURL=chunk-7e835253.0d4acf02.js.map