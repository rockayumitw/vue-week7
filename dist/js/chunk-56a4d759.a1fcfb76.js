(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-56a4d759"],{"08da":function(e,t,c){"use strict";c("e01a");var a=c("7a23");const n=Object(a["createVNode"])("div",{class:"col-12 col-md-4"},[Object(a["createVNode"])("div",{class:"item-new-image"},[Object(a["createVNode"])("img",{src:"/assets/image/product/1.jpg",class:"img-fluid"})])],-1),o={class:"col-12 col-md-8 text-left"},l={class:"item-new-content py-4 px-9"},r={class:"d-block text-gray-200 text-1"},i={class:"text-5 font-weight-bold"},s={class:"d-flex justify-content-between"},d={class:"d-block d-md-none"},b=Object(a["createVNode"])("small",null,"more",-1);function p(e,t,c,p,g,j){const O=Object(a["resolveComponent"])("router-link");return Object(a["openBlock"])(),Object(a["createBlock"])(O,{to:"/new/"+c.article.id,class:"item-new row bg-white g-0 mb-5"},{default:Object(a["withCtx"])(()=>[n,Object(a["createVNode"])("div",o,[Object(a["createVNode"])("div",l,[Object(a["createVNode"])("small",r,Object(a["toDisplayString"])(c.article.create_at),1),(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(c.article.tag,e=>(Object(a["openBlock"])(),Object(a["createBlock"])("span",{class:"badge rounded-pill bg-primary mr-1",key:e},Object(a["toDisplayString"])(e),1))),128)),Object(a["createVNode"])("div",i,Object(a["toDisplayString"])(c.article.title),1),Object(a["createVNode"])("div",{class:"text-gray-400 ellipsis",innerHTML:c.article.description},null,8,["innerHTML"]),Object(a["createVNode"])("div",s,[Object(a["createVNode"])("small",null,[Object(a["createVNode"])("span",d,Object(a["toDisplayString"])(c.article.create_at),1)]),b])])])]),_:1},8,["to"])}var g={props:["article"],mounted(){console.log(this.article)}};g.render=p;t["a"]=g},1799:function(e,t,c){"use strict";var a=c("7a23");function n(e,t,c,n,o,l){return Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(c.totalPage,(t,n)=>(Object(a["openBlock"])(),Object(a["createBlock"])("li",{class:["page-item",t==c.currentPage?"active":""],key:n},[Object(a["createVNode"])("a",{class:"page-link",href:"#",onClick:Object(a["withModifiers"])(c=>e.$emit("changePage",t),["prevent"])},Object(a["toDisplayString"])(t),9,["onClick"])],2))),128)}var o={props:["currentPage","totalPage"]};o.render=n;t["a"]=o},a2f9:function(e,t,c){"use strict";c.r(t);var a=c("7a23");const n={class:"inner-page"},o=Object(a["createVNode"])("div",{class:"inner-banner mb-17"},null,-1),l={class:"container"},r=Object(a["createStaticVNode"])('<h3 class="text-left text-white mb-9">最新消息列表</h3><div class="mb-5 clearfix mr-1 mb-9"><select class="form-select float-start w-40" aria-label="Default select example" disabled><option selected>選擇分類</option><option value="1">One</option><option value="2">Two</option><option value="3">Three</option></select><div class="mb-3 d-flex float-start w-40"><input type="text" class="form-control w-70 mr-1" placeholder="輸入關鍵字搜尋" disabled><button class="btn btn-primary" disabled>搜尋</button></div></div>',2),i={class:"pagination justify-content-center mb-17"};function s(e,t,c,s,d,b){const p=Object(a["resolveComponent"])("Loading"),g=Object(a["resolveComponent"])("NewCard"),j=Object(a["resolveComponent"])("Pagination");return Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],null,[Object(a["createVNode"])(p,{active:e.loading,"z-index":1060},null,8,["active"]),Object(a["createVNode"])("div",n,[o,Object(a["createVNode"])("div",l,[r,Object(a["createVNode"])("ul",null,[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(e.articleLists,e=>(Object(a["openBlock"])(),Object(a["createBlock"])("li",{class:"mb-9",key:e.id},[Object(a["createVNode"])(g,{article:e},null,8,["article"])]))),128))]),Object(a["createVNode"])("ul",i,[Object(a["createVNode"])(j,{"current-page":e.pagination.current_page,"total-page":e.pagination.total_pages,onChangePage:b.changePage},null,8,["current-page","total-page","onChangePage"])])])])],64)}var d=c("5502"),b=c("08da"),p=c("1799"),g={data(){return{tempArticle:{}}},components:{NewCard:b["a"],Pagination:p["a"]},computed:{...Object(d["b"])({articleLists:"frontend/articleLists",loading:"all/loading",pagination:"frontend/pagination"})},async created(){await this.$store.dispatch("frontend/fetchGetArticleLists",1)},methods:{async changePage(e){await this.$store.dispatch("frontend/fetchGetArticleLists",e)}}};g.render=s;t["default"]=g}}]);
//# sourceMappingURL=chunk-56a4d759.a1fcfb76.js.map