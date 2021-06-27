(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-11fe3354"],{1799:function(e,t,c){"use strict";var a=c("7a23");function o(e,t,c,o,l,r){return Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(c.totalPage,(t,o)=>(Object(a["openBlock"])(),Object(a["createBlock"])("li",{class:["page-item",t==c.currentPage?"active":""],key:o},[Object(a["createVNode"])("a",{class:"page-link",href:"#",onClick:Object(a["withModifiers"])(c=>e.$emit("changePage",t),["prevent"])},Object(a["toDisplayString"])(t),9,["onClick"])],2))),128)}var l={props:["currentPage","totalPage"]};l.render=o;t["a"]=l},"67e3":function(e,t,c){"use strict";c.r(t);var a=c("7a23");const o=Object(a["createVNode"])("h1",null,"後台訂單列表",-1),l={class:"table mt-4"},r=Object(a["createVNode"])("thead",null,[Object(a["createVNode"])("tr",null,[Object(a["createVNode"])("th",null,"購買時間"),Object(a["createVNode"])("th",null,"Email"),Object(a["createVNode"])("th",null,"購買款項"),Object(a["createVNode"])("th",null,"應付金額"),Object(a["createVNode"])("th",null,"是否付款"),Object(a["createVNode"])("th",null,"編輯")])],-1),d={class:"list-unstyled"},n={class:"text-right"},b={class:"form-check form-switch"},s={key:0},i={key:1},O={class:"btn-group"},j={class:"pagination justify-content-center"};function p(e,t,c,p,u,m){const N=Object(a["resolveComponent"])("loading"),V=Object(a["resolveComponent"])("Pagination"),k=Object(a["resolveComponent"])("OrderModal"),g=Object(a["resolveComponent"])("DelModal");return Object(a["openBlock"])(),Object(a["createBlock"])("div",null,[Object(a["createVNode"])(N,{active:e.loading,"onUpdate:active":t[1]||(t[1]=t=>e.loading=t),"can-cancel":!0,loader:"dots"},null,8,["active"]),o,Object(a["createVNode"])("button",{onClick:t[2]||(t[2]=t=>e.$store.dispatch("backend/fetchRemoveAllOrder"))},"刪除全部訂單"),Object(a["createVNode"])("table",l,[r,Object(a["createVNode"])("tbody",null,[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(e.orderLists,(t,c)=>(Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],{key:c},[e.orderLists.length?(Object(a["openBlock"])(),Object(a["createBlock"])("tr",{key:0,class:{"text-secondary":!t.is_paid}},[Object(a["createVNode"])("td",null,Object(a["toDisplayString"])(e.$filters.date(t.create_at)),1),Object(a["createVNode"])("td",null,[t.user?(Object(a["openBlock"])(),Object(a["createBlock"])("span",{key:0,textContent:Object(a["toDisplayString"])(t.user.email)},null,8,["textContent"])):Object(a["createCommentVNode"])("",!0)]),Object(a["createVNode"])("td",null,[Object(a["createVNode"])("ul",d,[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(t.products,(e,t)=>(Object(a["openBlock"])(),Object(a["createBlock"])("li",{key:t},Object(a["toDisplayString"])(e.product.title)+" 數量："+Object(a["toDisplayString"])(e.qty)+" "+Object(a["toDisplayString"])(e.product.unit),1))),128))])]),Object(a["createVNode"])("td",n,Object(a["toDisplayString"])(t.total),1),Object(a["createVNode"])("td",null,[Object(a["createVNode"])("div",b,[Object(a["withDirectives"])(Object(a["createVNode"])("input",{class:"form-check-input",type:"checkbox",id:"paidSwitch"+t.id,"onUpdate:modelValue":e=>t.is_paid=e,onChange:c=>e.updatePaid(t)},null,40,["id","onUpdate:modelValue","onChange"]),[[a["vModelCheckbox"],t.is_paid]]),Object(a["createVNode"])("label",{class:"form-check-label",for:"paidSwitch"+t.id},[t.is_paid?(Object(a["openBlock"])(),Object(a["createBlock"])("span",s,"已付款")):(Object(a["openBlock"])(),Object(a["createBlock"])("span",i,"未付款"))],8,["for"])])]),Object(a["createVNode"])("td",null,[Object(a["createVNode"])("div",O,[Object(a["createVNode"])("button",{class:"btn btn-outline-primary btn-sm",type:"button","data-bs-toggle":"modal","data-bs-target":"#orderProductModal",onClick:e=>m.getOrder(t)}," 檢視 ",8,["onClick"]),Object(a["createVNode"])("button",{class:"btn btn-outline-danger btn-sm",type:"button","data-bs-toggle":"modal","data-bs-target":"#delModal",onClick:e=>m.getOrder(t)}," 刪除 ",8,["onClick"])])])],2)):Object(a["createCommentVNode"])("",!0)],64))),128))])]),Object(a["createVNode"])("ul",j,[e.orderLists.length>1?(Object(a["openBlock"])(),Object(a["createBlock"])(V,{key:0,"current-page":e.pagination.current_page,"total-page":e.pagination.total_pages,onChangePage:m.changePage},null,8,["current-page","total-page","onChangePage"])):Object(a["createCommentVNode"])("",!0)]),Object(a["createVNode"])(k,{order:u.tempOrder,ref:"orderModal",onUpdatePaid:e.updatePaid},null,8,["order","onUpdatePaid"]),Object(a["createVNode"])(g,{item:u.tempOrder,onDelItem:m.delProduct,onCancel:e.cancel},null,8,["item","onDelItem","onCancel"])])}var u=c("e417");const m={class:"modal fade",id:"orderProductModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},N={class:"modal-dialog modal-xl",role:"document"},V={class:"modal-content border-0"},k=Object(a["createVNode"])("div",{class:"modal-header bg-dark text-white"},[Object(a["createVNode"])("h5",{class:"modal-title",id:"exampleModalLabel"},[Object(a["createVNode"])("span",null,"訂單細節")]),Object(a["createVNode"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),g={class:"modal-body"},h={class:"row"},y={class:"col-md-4"},f=Object(a["createVNode"])("h3",null,"用戶資料",-1),B={class:"table"},v={key:0},x=Object(a["createVNode"])("th",{style:{width:"100px"}},"姓名",-1),C=Object(a["createVNode"])("th",null,"Email",-1),D=Object(a["createVNode"])("th",null,"電話",-1),S=Object(a["createVNode"])("th",null,"地址",-1),P={class:"col-md-8"},w=Object(a["createVNode"])("h3",null,"訂單細節",-1),M={class:"table text-black"},_=Object(a["createVNode"])("th",{style:{width:"100px"}},"訂單編號",-1),L=Object(a["createVNode"])("th",null,"下單時間",-1),$=Object(a["createVNode"])("th",null,"付款時間",-1),U={key:0},J={key:1},F=Object(a["createVNode"])("th",null,"付款狀態",-1),I={key:0,class:"text-success"},q={key:1,class:"text-muted"},E=Object(a["createVNode"])("th",null,"總金額",-1),R=Object(a["createVNode"])("h3",null,"選購商品",-1),T={class:"table"},A=Object(a["createVNode"])("thead",null,[Object(a["createVNode"])("tr")],-1),G={class:"text-end"},z={class:"d-flex justify-content-end"},H={class:"form-check"},K={class:"form-check-label",for:"flexCheckDefault"},Q={key:0},W={key:1},X={class:"modal-footer"},Y=Object(a["createVNode"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function Z(e,t,c,o,l,r){return Object(a["openBlock"])(),Object(a["createBlock"])("div",m,[Object(a["createVNode"])("div",N,[Object(a["createVNode"])("div",V,[k,Object(a["createVNode"])("div",g,[Object(a["createVNode"])("div",h,[Object(a["createVNode"])("div",y,[f,Object(a["createVNode"])("table",B,[l.tempOrder.user?(Object(a["openBlock"])(),Object(a["createBlock"])("tbody",v,[Object(a["createVNode"])("tr",null,[x,Object(a["createVNode"])("td",null,Object(a["toDisplayString"])(l.tempOrder.user.name),1)]),Object(a["createVNode"])("tr",null,[C,Object(a["createVNode"])("td",null,Object(a["toDisplayString"])(l.tempOrder.user.email),1)]),Object(a["createVNode"])("tr",null,[D,Object(a["createVNode"])("td",null,Object(a["toDisplayString"])(l.tempOrder.user.tel),1)]),Object(a["createVNode"])("tr",null,[S,Object(a["createVNode"])("td",null,Object(a["toDisplayString"])(l.tempOrder.user.address),1)])])):Object(a["createCommentVNode"])("",!0)])]),Object(a["createVNode"])("div",P,[w,Object(a["createVNode"])("table",M,[Object(a["createVNode"])("tbody",null,[Object(a["createVNode"])("tr",null,[_,Object(a["createVNode"])("td",null,Object(a["toDisplayString"])(l.tempOrder.id),1)]),Object(a["createVNode"])("tr",null,[L,Object(a["createVNode"])("td",null,Object(a["toDisplayString"])(e.$filters.date(l.tempOrder.create_at)),1)]),Object(a["createVNode"])("tr",null,[$,Object(a["createVNode"])("td",null,[l.tempOrder.paid_date?(Object(a["openBlock"])(),Object(a["createBlock"])("span",U,Object(a["toDisplayString"])(l.tempOrder.paid_date),1)):(Object(a["openBlock"])(),Object(a["createBlock"])("span",J,"時間不正確"))])]),Object(a["createVNode"])("tr",null,[F,Object(a["createVNode"])("td",null,[l.tempOrder.is_paid?(Object(a["openBlock"])(),Object(a["createBlock"])("strong",I,"已付款")):(Object(a["openBlock"])(),Object(a["createBlock"])("span",q,"尚未付款"))])]),Object(a["createVNode"])("tr",null,[E,Object(a["createVNode"])("td",null,Object(a["toDisplayString"])(l.tempOrder.total),1)])])]),R,Object(a["createVNode"])("table",T,[A,Object(a["createVNode"])("tbody",null,[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(l.tempOrder.products,e=>(Object(a["openBlock"])(),Object(a["createBlock"])("tr",{key:e.id},[Object(a["createVNode"])("th",null,Object(a["toDisplayString"])(e.product.title),1),Object(a["createVNode"])("td",null,Object(a["toDisplayString"])(e.qty)+" / "+Object(a["toDisplayString"])(e.product.unit),1),Object(a["createVNode"])("td",G,Object(a["toDisplayString"])(e.final_total),1)]))),128))])]),Object(a["createVNode"])("div",z,[Object(a["createVNode"])("div",H,[Object(a["withDirectives"])(Object(a["createVNode"])("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault","onUpdate:modelValue":t[1]||(t[1]=e=>l.tempOrder.is_paid=e)},null,512),[[a["vModelCheckbox"],l.tempOrder.is_paid]]),Object(a["createVNode"])("label",K,[l.tempOrder.is_paid?(Object(a["openBlock"])(),Object(a["createBlock"])("span",Q,"已付款")):(Object(a["openBlock"])(),Object(a["createBlock"])("span",W,"未付款"))])])])])])]),Object(a["createVNode"])("div",X,[Y,Object(a["createVNode"])("button",{type:"button",class:"btn btn-primary","data-bs-dismiss":"modal",onClick:t[2]||(t[2]=t=>e.$store.dispatch("backend/fetchUpdateOrderPaid",l.tempOrder))}," 修改付款狀態 ")])])])])}var ee={props:["order"],data(){return{status:{},modal:"",isPaid:!1,tempOrder:{}}},watch:{order(){this.tempOrder=JSON.parse(JSON.stringify(this.order))}}};ee.render=Z;var te=ee,ce=c("1799"),ae=c("5502"),oe={data(){return{tempOrder:{}}},components:{Pagination:ce["a"],DelModal:u["a"],OrderModal:te},computed:{...Object(ae["b"])({loading:"all/loading",pagination:"backend/pagination",orderLists:"backend/orderLists"})},async created(){await this.$store.dispatch("backend/fetchGetOrders",1)},methods:{getOrder(e){this.tempOrder=JSON.parse(JSON.stringify(e))},async delProduct(e){this.$store.dispatch("backend/fetchRemoveOrder",e)},async changePage(e){await this.$store.dispatch("backend/fetchgetProductLists",e)}}};oe.render=p;t["default"]=oe},e417:function(e,t,c){"use strict";var a=c("7a23");const o={id:"delModal",ref:"delModal",class:"modal fade",tabindex:"-1","aria-labelledby":"delModalLabel","aria-hidden":"true"},l={class:"modal-dialog modal-dialog-centered"},r={class:"modal-content border-0"},d=Object(a["createVNode"])("div",{class:"modal-header text-black text-center"},[Object(a["createVNode"])("h5",{id:"delModalLabel",class:"modal-title font-weight-bold"},[Object(a["createVNode"])("span",null,"刪除提示")])],-1),n={class:"modal-body text-center"},b=Object(a["createVNode"])("i",{class:"fas fa-exclamation-triangle text-danger"},null,-1),s=Object(a["createVNode"])("br",null,null,-1),i=Object(a["createVNode"])("br",null,null,-1),O=Object(a["createTextVNode"])(" 是否刪除 "),j={class:"text-danger"},p=Object(a["createTextVNode"])(" (刪除後將無法恢復)。 "),u={class:"modal-footer"};function m(e,t,c,m,N,V){return Object(a["openBlock"])(),Object(a["createBlock"])("div",o,[Object(a["createVNode"])("div",l,[Object(a["createVNode"])("div",r,[d,Object(a["createVNode"])("div",n,[b,s,i,O,Object(a["createVNode"])("strong",j,Object(a["toDisplayString"])(c.item.title),1),p]),Object(a["createVNode"])("div",u,[Object(a["createVNode"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal",onClick:t[1]||(t[1]=t=>e.$emit("cancel"))}," 取消 "),Object(a["createVNode"])("button",{type:"button",class:"btn btn-danger","data-bs-dismiss":"modal","data-bs-toggle":"modal","data-bs-target":"#delModal",onClick:t[2]||(t[2]=t=>e.$emit("delItem",c.item.id))}," 確認刪除 ")])])])],512)}var N={props:["item"]};N.render=m;t["a"]=N}}]);
//# sourceMappingURL=chunk-11fe3354.70e024b7.js.map