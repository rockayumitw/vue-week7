(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20ef09"],{b203:function(e,t,c){"use strict";c.r(t);c("e01a");var a=c("7a23");const s={class:"inner-page bg-white"},o=Object(a["createVNode"])("div",{class:"inner-banner mb-5"},null,-1),r={class:"container position-relative w-100"},d={class:"product-info row position-relative top-xs-0 top-md-y-320"},i={class:"col-12 col-md-6"},n={class:"col-12 col-md-6 mt-md-17"},l={class:"d-flex justify-content-between pt-0 mt-0 pt-md-17 mt-md-17"},p={class:"text-5"},b={class:"text-xs-gray-300 text-md-white font-weight-bold mb-2"},m={class:"text-xs-gray-300 text-md-white"},u={class:"text-xs-gray-300 text-md-white"},x={class:"text-xs-gray-300 text-md-white"},j=Object(a["createVNode"])("div",null,[Object(a["createVNode"])("span",{class:"material-icons text-7 text-secondary"},"bookmark")],-1),O=Object(a["createStaticVNode"])('<div class="d-flex pt-0 mt-0 pt-md-15 mt-md-15"><div class="mr-2 w-100"><input type="number" min="0" class="form-control"></div><div class="w-100"><a href="javascript:;" class="btn btn-primary text-white w-100">加入購物車</a></div></div>',1),v={class:"d-flex pt-17"},f=Object(a["createStaticVNode"])('<div class="d-none d-md-flex flex-column tool-share"><span class="material-icons-outlined text-center text-7 mb-3">facebook</span><span class="material-icons-outlined text-center text-7 mb-3">facebook</span><span class="material-icons-outlined text-center text-7 mb-3">facebook</span><span class="back"><p class="mixed mt-4">SHARE</p><span class="material-icons-outlined text-center text-7 mb-3">reply</span></span></div>',1),N={class:"pl-0 pl-md-9"},V=Object(a["createVNode"])("span",{class:"badge rounded-pill bg-primary mr-1"},"測試分類",-1);function w(e,t,c,w,g,y){return Object(a["openBlock"])(),Object(a["createBlock"])("div",s,[o,Object(a["createVNode"])("div",r,[Object(a["createVNode"])("div",d,[Object(a["createVNode"])("div",i,[Object(a["createVNode"])("div",{class:"product-pic",style:{backgroundImage:"url("+e.product.imageUrl+")"}},null,4)]),Object(a["createVNode"])("div",n,[Object(a["createVNode"])("div",l,[Object(a["createVNode"])("div",p,[Object(a["createVNode"])("div",b,Object(a["toDisplayString"])(e.product.title),1),Object(a["createVNode"])("del",m,"$"+Object(a["toDisplayString"])(e.product.origin_price)+" /",1),Object(a["createVNode"])("span",u,"$"+Object(a["toDisplayString"])(e.product.price)+" /",1),Object(a["createVNode"])("span",x,Object(a["toDisplayString"])(e.product.unit),1)]),j]),O]),Object(a["createVNode"])("div",v,[f,Object(a["createVNode"])("div",N,[V,Object(a["createVNode"])("div",{innerHTML:e.product.description},null,8,["innerHTML"])])])])]),Object(a["createTextVNode"])(" "+Object(a["toDisplayString"])(e.product),1)])}var g=c("5502"),y={data(){return{}},computed:{...Object(g["b"])({product:"frontend/product"})},async created(){await this.$store.dispatch("frontend/fetchGetProductInfo",this.$route.params)},mounted(){console.log(this.product)}};y.render=w;t["default"]=y}}]);
//# sourceMappingURL=chunk-2d20ef09.9ae191c2.js.map