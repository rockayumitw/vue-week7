(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-12015ec0"],{1799:function(e,t,c){"use strict";var o=c("7a23");function a(e,t,c,a,d,r){return Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(c.totalPage,(t,a)=>(Object(o["openBlock"])(),Object(o["createBlock"])("li",{class:["page-item",t==c.currentPage?"active":""],key:a},[Object(o["createVNode"])("a",{class:"page-link",href:"#",onClick:Object(o["withModifiers"])(c=>(r.goTop(),e.$emit("changePage",t)),["prevent"])},Object(o["toDisplayString"])(t),9,["onClick"])],2))),128)}var d=c("1157"),r=c.n(d),l={props:["currentPage","totalPage"],data(){return{}},methods:{goTop(){console.log("in0"),r()("html, body").animate({scrollTop:r()(".container").offset().top-0},"fast")}}};l.render=a;t["a"]=l},"1fae":function(e,t,c){"use strict";c.r(t);var o=c("7a23");const a={class:"inner-page"},d={class:"container"},r=Object(o["createVNode"])("h1",{class:"h3 pt-4 text-white font-weight-bold text-center"},"Product List",-1),l=Object(o["createVNode"])("div",{class:"btn-area text-end mt-4"},[Object(o["createVNode"])("button",{class:"btn btn-primary font-weight-bold mr-5","data-bs-toggle":"modal","data-bs-target":"#productModal"}," ADD NEW PRODUCT ")],-1),i={class:"table-box"},n={class:"table mt-4"},s=Object(o["createVNode"])("thead",null,[Object(o["createVNode"])("tr",null,[Object(o["createVNode"])("th",{class:"text-left",width:"150"},"CATEGORY"),Object(o["createVNode"])("th",null,"PRODUCTNAME"),Object(o["createVNode"])("th",{class:"text-right",width:"150"},"ORIGINPRICE"),Object(o["createVNode"])("th",{class:"text-right",width:"150"},"PRICE"),Object(o["createVNode"])("th",{class:"text-center",width:"120"},"ENABLE")])],-1),b={id:"productList",class:"js-productList"},p={class:"text-left",width:"150"},u={class:"text-end",width:"150"},m={class:"text-end",width:"150"},O={class:"text-center",width:"120"},j={key:0,class:"text-center"},g={key:1,class:"text-center"},h={width:"120",class:"text-center"},V={class:"btn-group"},N={class:"pagination justify-content-center"};function f(e,t,c,f,v,k){const P=Object(o["resolveComponent"])("Pagination"),y=Object(o["resolveComponent"])("loading"),w=Object(o["resolveComponent"])("DelModal"),x=Object(o["resolveComponent"])("ProdcutInfo");return Object(o["openBlock"])(),Object(o["createBlock"])("div",a,[Object(o["createVNode"])("div",d,[r,l,Object(o["createVNode"])("div",i,[Object(o["createVNode"])("table",n,[s,Object(o["createVNode"])("tbody",b,[(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(e.productLists,(e,t)=>(Object(o["openBlock"])(),Object(o["createBlock"])("tr",{key:t},[Object(o["createVNode"])("td",p,Object(o["toDisplayString"])(e.category),1),Object(o["createVNode"])("td",null,[Object(o["createVNode"])("div",null,Object(o["toDisplayString"])(e.title),1),""!=e.imageUrl?(Object(o["openBlock"])(),Object(o["createBlock"])("img",{key:0,width:"150",src:e.imageUrl,alt:""},null,8,["src"])):Object(o["createCommentVNode"])("",!0)]),Object(o["createVNode"])("td",u,Object(o["toDisplayString"])(e.origin_price),1),Object(o["createVNode"])("td",m,Object(o["toDisplayString"])(e.price),1),Object(o["createVNode"])("td",O,[e.is_enabled?(Object(o["openBlock"])(),Object(o["createBlock"])("span",j,"啟用")):(Object(o["openBlock"])(),Object(o["createBlock"])("span",g,"未啟用"))]),Object(o["createVNode"])("td",h,[Object(o["createVNode"])("div",V,[Object(o["createVNode"])("button",{type:"button",class:"btn btn-sm js-edit",onClick:t=>k.getProduct(e),"data-bs-toggle":"modal","data-bs-target":"#productModal"}," 編輯 ",8,["onClick"]),Object(o["createVNode"])("button",{type:"button",class:"btn btn-sm js-del","data-bs-toggle":"modal","data-bs-target":"#delModal",onClick:t=>k.getProduct(e)}," 刪除 ",8,["onClick"])])])]))),128))])]),Object(o["createVNode"])("ul",N,[e.productLists.length>1?(Object(o["openBlock"])(),Object(o["createBlock"])(P,{key:0,"current-page":e.pagination.current_page,"total-page":e.pagination.total_pages,onChangePage:k.changePage},null,8,["current-page","total-page","onChangePage"])):Object(o["createCommentVNode"])("",!0)])]),Object(o["createVNode"])(y,{active:e.loading,"onUpdate:active":t[1]||(t[1]=t=>e.loading=t),"can-cancel":!0,loader:"dots"},null,8,["active"]),Object(o["createVNode"])(w,{item:v.tempProduct,onDelItem:k.delProduct,onCancel:e.cancel},null,8,["item","onDelItem","onCancel"]),Object(o["createVNode"])(x,{onChangeProducts:k.changeProducts,product:v.tempProduct},null,8,["onChangeProducts","product"])])])}var v=c("1799"),k=c("5502"),P=c("9062"),y=c.n(P),w=c("e417");c("ddb0"),c("e01a");const x={id:"productModal",ref:"productModal",class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true","data-bs-target":"#productModal"},C={class:"modal-dialog modal-xl modal-dialog-centered"},B={class:"modal-content border-0"},D={class:"modal-header"},M={id:"productModalLabel",class:"modal-title text-black font-weight-bold"},U={key:0},L={key:1},I={class:"modal-body"},T={class:"row"},$={class:"col-sm-12 col-lg-4"},_={class:"mb-1"},S={class:"form-group"},R=Object(o["createVNode"])("label",{for:"imageUrl"},"輸入圖片網址",-1),E={class:"col-sm-12 col-lg-8"},A={class:"form-group"},J=Object(o["createVNode"])("label",{for:"title"},"標題",-1),F={class:"row"},G={class:"form-group col-md-6"},W=Object(o["createVNode"])("label",{for:"category"},"分類",-1),Y={class:"form-group col-md-6"},q=Object(o["createVNode"])("label",{for:"unit"},"單位",-1),z={class:"row"},H={class:"form-group col-md-6"},K=Object(o["createVNode"])("label",{for:"origin_price"},"原價",-1),Q={class:"form-group col-md-6"},X=Object(o["createVNode"])("label",{for:"price"},"售價",-1),Z=Object(o["createVNode"])("hr",null,null,-1),ee={class:"form-group"},te=Object(o["createVNode"])("label",{for:"description"},"產品描述",-1),ce={class:"form-group"},oe=Object(o["createVNode"])("label",{for:"content"},"說明內容",-1),ae={class:"form-group"},de={class:"form-check"},re=Object(o["createVNode"])("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1),le={class:"modal-footer"},ie=Object(o["createVNode"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function ne(e,t,c,a,d,r){return Object(o["openBlock"])(),Object(o["createBlock"])("div",x,[Object(o["createVNode"])("div",C,[Object(o["createVNode"])("div",B,[Object(o["createVNode"])("div",D,[Object(o["createVNode"])("h5",M,[""==c.product.id?(Object(o["openBlock"])(),Object(o["createBlock"])("span",U,"新增產品 "+Object(o["toDisplayString"])(c.product.id),1)):(Object(o["openBlock"])(),Object(o["createBlock"])("span",L,"新增產品"))])]),Object(o["createVNode"])("div",I,[Object(o["createVNode"])("div",T,[Object(o["createVNode"])("div",$,[Object(o["createVNode"])("div",_,[Object(o["createVNode"])("div",S,[R,Object(o["withDirectives"])(Object(o["createVNode"])("input",{id:"imageUrl",type:"text",class:"form-control",placeholder:"請輸入圖片連結","onUpdate:modelValue":t[1]||(t[1]=e=>d.tempProduct.imageUrl=e)},null,512),[[o["vModelText"],d.tempProduct.imageUrl]])]),Object(o["createVNode"])("img",{class:"img-fluid",src:d.image,alt:""},null,8,["src"])]),Object(o["createVNode"])("div",null,[Object(o["createVNode"])("input",{type:"file",ref:"uploadImage",class:"form-control js-uploadImage",name:"file-to-upload",id:"file",placeholder:"請輸入圖片連結",onChange:t[2]||(t[2]=(...e)=>r.uploadImage&&r.uploadImage(...e)),accept:"image/*",hidden:""},null,544),Object(o["createVNode"])("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:t[3]||(t[3]=(...e)=>r.uploadImage&&r.uploadImage(...e))}," 新增圖片 ")]),Object(o["createVNode"])("div",null,[Object(o["createVNode"])("button",{class:"btn btn-outline-danger btn-sm d-block w-100",onClick:t[4]||(t[4]=t=>e.$emit("removeImage"))}," 刪除圖片 ")])]),Object(o["createVNode"])("div",E,[Object(o["createVNode"])("div",A,[J,Object(o["withDirectives"])(Object(o["createVNode"])("input",{id:"title",type:"text",class:"form-control",placeholder:"請輸入標題","onUpdate:modelValue":t[5]||(t[5]=e=>d.tempProduct.title=e)},null,512),[[o["vModelText"],d.tempProduct.title]])]),Object(o["createVNode"])("div",F,[Object(o["createVNode"])("div",G,[W,Object(o["withDirectives"])(Object(o["createVNode"])("input",{id:"category",type:"text",class:"form-control",placeholder:"請輸入分類","onUpdate:modelValue":t[6]||(t[6]=e=>d.tempProduct.category=e)},null,512),[[o["vModelText"],d.tempProduct.category]])]),Object(o["createVNode"])("div",Y,[q,Object(o["withDirectives"])(Object(o["createVNode"])("input",{id:"unit",type:"text",class:"form-control",placeholder:"請輸入單位","onUpdate:modelValue":t[7]||(t[7]=e=>d.tempProduct.unit=e)},null,512),[[o["vModelText"],d.tempProduct.unit]])])]),Object(o["createVNode"])("div",z,[Object(o["createVNode"])("div",H,[K,Object(o["withDirectives"])(Object(o["createVNode"])("input",{id:"origin_price",type:"number",min:"0",class:"form-control",placeholder:"請輸入原價","onUpdate:modelValue":t[8]||(t[8]=e=>d.tempProduct.origin_price=e)},null,512),[[o["vModelText"],d.tempProduct.origin_price,void 0,{number:!0}]])]),Object(o["createVNode"])("div",Q,[X,Object(o["withDirectives"])(Object(o["createVNode"])("input",{id:"price",type:"number",min:"0",class:"form-control",placeholder:"請輸入售價","onUpdate:modelValue":t[9]||(t[9]=e=>d.tempProduct.price=e)},null,512),[[o["vModelText"],d.tempProduct.price,void 0,{number:!0}]])])]),Z,Object(o["createVNode"])("div",ee,[te,Object(o["withDirectives"])(Object(o["createVNode"])("textarea",{id:"description",type:"text",class:"form-control",placeholder:"請輸入產品描述","onUpdate:modelValue":t[10]||(t[10]=e=>d.tempProduct.description=e)},"\n                ",512),[[o["vModelText"],d.tempProduct.description]])]),Object(o["createVNode"])("div",ce,[oe,Object(o["withDirectives"])(Object(o["createVNode"])("textarea",{id:"content",type:"text",class:"form-control",placeholder:"請輸入說明內容","onUpdate:modelValue":t[11]||(t[11]=e=>d.tempProduct.content=e)},"\n                ",512),[[o["vModelText"],d.tempProduct.content]])]),Object(o["createVNode"])("div",ae,[Object(o["createVNode"])("div",de,[Object(o["withDirectives"])(Object(o["createVNode"])("input",{id:"is_enabled",class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,"onUpdate:modelValue":t[12]||(t[12]=e=>d.tempProduct.is_enabled=e)},null,512),[[o["vModelCheckbox"],d.tempProduct.is_enabled]]),re])])])])]),Object(o["createVNode"])("div",le,[ie,Object(o["createVNode"])("button",{type:"button",class:"btn btn-primary","data-bs-dismiss":"modal",onClick:t[13]||(t[13]=t=>e.$emit("changeProducts",d.tempProduct))}," 確認 ")])])])],512)}var se={props:["product"],data(){return{tempProduct:{},image:""}},watch:{product(){this.tempProduct=JSON.parse(JSON.stringify(this.product)),this.image=this.product.imageUrl}},computed:{},mounted(){this.$refs.productModal.addEventListener("hidden.bs.modal",()=>{this.tempProduct={},this.due_date=0})},methods:{async uploadImage(e){this.$refs.uploadImage.click(),this.tempProduct.imageUrl=[],this.image="";const t=this;if(void 0===e.target.files)return;const c=e.target.files[0],o=new FileReader;o.onload=function(e){t.image=e.target.result},o.readAsDataURL(c);const a=new FormData;a.append("file-to-upload",c),await this.axios.post("https://vue3-course-api.hexschool.io/api/traveltime1221/admin/upload",a).then(e=>{e.data.success?(this.tempProduct.imageUrl=e.data.imageUrl,this.$swal.fire({position:"top-end",icon:"success",title:"上傳成功",showConfirmButton:!1,timer:1500})):this.$swal.fire({icon:"error",title:"Oops...",text:e.data.message})}).catch(e=>{this.$swal.fire({icon:"error",title:"Oops...",text:e.data.message})})}}};se.render=ne;var be=se,pe={props:["token"],components:{Pagination:v["a"],Loading:y.a,DelModal:w["a"],ProdcutInfo:be},computed:{...Object(k["b"])({loading:"all/loading",product:"backend/product",pagination:"backend/pagination",productLists:"backend/productLists"})},watch:{product(){this.tempProduct=JSON.parse(JSON.stringify(this.product))}},data(){return{tempProduct:{},image:""}},async created(){await this.$store.dispatch("backend/fetchgetProductLists",1)},mounted(){},methods:{async getProduct(e){await this.$store.commit("backend/SAVE_PRODUCT",e)},async delProduct(e){this.$store.dispatch("backend/fetchRemoveProduct",e)},async changeProducts(e){console.log(e),await this.$store.dispatch("backend/fetchChangeProduct",e)},async changePage(e){await this.$store.dispatch("backend/fetchgetProductLists",e)}}};pe.render=f;t["default"]=pe},e417:function(e,t,c){"use strict";var o=c("7a23");const a={id:"delModal",ref:"delModal",class:"modal fade",tabindex:"-1","aria-labelledby":"delModalLabel","aria-hidden":"true"},d={class:"modal-dialog modal-dialog-centered"},r={class:"modal-content border-0"},l=Object(o["createVNode"])("div",{class:"modal-header text-black text-center"},[Object(o["createVNode"])("h5",{id:"delModalLabel",class:"modal-title font-weight-bold"},[Object(o["createVNode"])("span",null,"刪除提示")])],-1),i={class:"modal-body text-center"},n=Object(o["createVNode"])("i",{class:"fas fa-exclamation-triangle text-danger"},null,-1),s=Object(o["createVNode"])("br",null,null,-1),b=Object(o["createVNode"])("br",null,null,-1),p=Object(o["createTextVNode"])(" 是否刪除 "),u={class:"text-danger"},m=Object(o["createTextVNode"])(" (刪除後將無法恢復)。 "),O={class:"modal-footer"};function j(e,t,c,j,g,h){return Object(o["openBlock"])(),Object(o["createBlock"])("div",a,[Object(o["createVNode"])("div",d,[Object(o["createVNode"])("div",r,[l,Object(o["createVNode"])("div",i,[n,s,b,p,Object(o["createVNode"])("strong",u,Object(o["toDisplayString"])(c.item.title),1),m]),Object(o["createVNode"])("div",O,[Object(o["createVNode"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal",onClick:t[1]||(t[1]=t=>e.$emit("cancel"))}," 取消 "),Object(o["createVNode"])("button",{type:"button",class:"btn btn-danger","data-bs-dismiss":"modal","data-bs-toggle":"modal","data-bs-target":"#delModal",onClick:t[2]||(t[2]=t=>e.$emit("delItem",c.item.id))}," 確認刪除 ")])])])],512)}var g={props:["item"]};g.render=j;t["a"]=g}}]);
//# sourceMappingURL=chunk-12015ec0.6efec9d0.js.map