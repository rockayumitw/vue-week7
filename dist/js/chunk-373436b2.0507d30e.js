(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-373436b2"],{"888d":function(e,t,c){"use strict";c.r(t);c("e01a");var a=c("7a23");const l={class:"inner-banner mb-17"},o={class:"text-end mb-4"},r={class:"table-box"},i={class:"table"},d=Object(a["createStaticVNode"])('<div class="table-thead row text-white w-100 py-3 align-items-center gx-1"><div class="col-3 col-md-2">標題</div><div class="col-2 text-center"> 作者 </div><div class="col-2 text-center d-none d-md-block">描述</div><div class="col-3 col-md-2 text-center"> 建立時間 </div><div class="col-2 text-center">狀態</div><div class="col-2 text-center">編輯</div></div>',1),s={class:"col-3 col-md-2"},n={class:"col-2 text-center"},b={class:"col-2 text-left overflow-hidden d-none d-md-block"},m={class:"col-3 col-md-2 text-center"},p={class:"col-2 text-center"},O={key:0,class:"text-success"},j=Object(a["createVNode"])("span",{class:"material-icons"},"toggle_on",-1),u={key:1,class:"text-muted"},h=Object(a["createVNode"])("span",{class:"material-icons"},"toggle_on",-1),V={class:"col-2 text-center"},v={class:"btn-group p-0 p-md-1"},N=Object(a["createVNode"])("span",{class:"material-icons text-3"},"edit",-1),g=Object(a["createVNode"])("span",{class:"material-icons text-3"},"delete",-1);function k(e,t,c,k,f,x){const y=Object(a["resolveComponent"])("InnerBanner"),A=Object(a["resolveComponent"])("ArticleModal"),w=Object(a["resolveComponent"])("DelModal");return Object(a["openBlock"])(),Object(a["createBlock"])("div",null,[Object(a["createVNode"])("div",l,[Object(a["createVNode"])(y,{msg:f.msg},null,8,["msg"])]),Object(a["createVNode"])("div",o,[Object(a["createVNode"])("button",{class:"btn btn-secondary text-white",type:"button",onClick:t[1]||(t[1]=t=>e.$refs.articleModal.modal("show"))}," 建立新的頁面 ")]),Object(a["createVNode"])("div",r,[Object(a["createVNode"])("div",i,[d,(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(e.articleLists,t=>(Object(a["openBlock"])(),Object(a["createBlock"])("div",{class:"table-tr row text-white w-100 align-items-center py-3 align-items-center gx-1",key:t.id},[Object(a["createVNode"])("div",s,Object(a["toDisplayString"])(t.title),1),Object(a["createVNode"])("div",n,Object(a["toDisplayString"])(t.author),1),Object(a["createVNode"])("div",b,[Object(a["createVNode"])("div",{class:"ellipsis py-0",innerHTML:t.description},null,8,["innerHTML"])]),Object(a["createVNode"])("div",m,Object(a["toDisplayString"])(e.$filters.date(t.create_at)),1),Object(a["createVNode"])("div",p,[t.isPublic?(Object(a["openBlock"])(),Object(a["createBlock"])("span",O,[j])):(Object(a["openBlock"])(),Object(a["createBlock"])("span",u,[h]))]),Object(a["createVNode"])("div",V,[Object(a["createVNode"])("div",v,[Object(a["createVNode"])("button",{class:"btn btn-outline-primary btn-sm",type:"button",onClick:c=>{x.getArticle(t),e.$refs.articleModal.modal("show")}},[N],8,["onClick"]),Object(a["createVNode"])("button",{class:"btn btn-outline-danger btn-sm",type:"button","data-bs-toggle":"modal","data-bs-target":"#delModal",onClick:e=>x.getArticle(t)},[g],8,["onClick"])])])]))),128))])]),Object(a["createVNode"])(A,{ref:"articleModal",article:f.tempArticle,onUpdateArticle:x.updateArticle},null,8,["article","onUpdateArticle"]),Object(a["createVNode"])(w,{item:f.tempArticle,ref:"delModal",onDelItem:x.delArticle},null,8,["item","onDelItem"])])}var f=c("5502");const x={class:"modal fade",id:"articleModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"articleModal"},y={class:"modal-dialog modal-xl",role:"document"},A={class:"modal-content border-0"},w={class:"modal-header bg-dark text-white"},M={class:"modal-title font-weight-bold",id:"exampleModalLabel"},B={key:0},C={key:1},D=Object(a["createVNode"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),T={class:"modal-body"},_={class:"row needs-validation",novalidate:""},L={class:"col-md-4"},U={class:"mb-3"},S=Object(a["createVNode"])("label",{for:"title",class:"form-label"},[Object(a["createVNode"])("small",{class:"text-danger"},"*"),Object(a["createTextVNode"])(" 標題 ")],-1),$={class:"mb-3"},P=Object(a["createVNode"])("label",{for:"image",class:"form-label"},"輸入圖片網址",-1),q={class:"mb-3"},I=Object(a["createVNode"])("label",{for:"author",class:"form-label"},[Object(a["createVNode"])("small",{class:"text-danger"},"*"),Object(a["createTextVNode"])(" 作者 ")],-1),J={class:"mb-3"},E=Object(a["createVNode"])("label",{for:"create_at"},[Object(a["createVNode"])("small",{class:"text-danger"},"*"),Object(a["createTextVNode"])(" 文章建立日期 ")],-1),F={class:"col-md-8"},H=Object(a["createVNode"])("label",{for:"tag",class:"form-label"},"標籤",-1),G={class:"row gx-1 mb-3"},R={class:"input-group input-group-sm"},z=Object(a["createVNode"])("i",{class:"bi bi-x"},null,-1),K={key:0,class:"col-md-2 mb-1"},Q=Object(a["createVNode"])("label",{for:"content",class:"form-label"},[Object(a["createVNode"])("small",{class:"text-danger"},"*"),Object(a["createTextVNode"])(" 文章描述 ")],-1),W={class:"mb-3"},X={class:"mb-3"},Y={class:"form-check"},Z=Object(a["createVNode"])("label",{class:"form-check-label",for:"isPublic"},[Object(a["createVNode"])("small",{class:"text-danger"},"*"),Object(a["createTextVNode"])(" 是否公開 ")],-1),ee={class:"d-flex justify-content-end"},te=Object(a["createVNode"])("button",{type:"button",class:"btn btn-gray-100 mr-2","data-bs-dismiss":"modal"}," 取消 ",-1);function ce(e,t,c,l,o,r){const i=Object(a["resolveComponent"])("ckeditor");return Object(a["openBlock"])(),Object(a["createBlock"])("div",x,[Object(a["createVNode"])("div",y,[Object(a["createVNode"])("div",A,[Object(a["createVNode"])("div",w,[Object(a["createVNode"])("h4",M,[void 0==o.tempArticle.id?(Object(a["openBlock"])(),Object(a["createBlock"])("span",B,"新增貼文")):(Object(a["openBlock"])(),Object(a["createBlock"])("span",C,"編輯貼文"))]),D]),Object(a["createVNode"])("div",T,[Object(a["createVNode"])("form",_,[Object(a["createVNode"])("div",L,[Object(a["createVNode"])("div",U,[S,Object(a["withDirectives"])(Object(a["createVNode"])("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":t[1]||(t[1]=e=>o.tempArticle.title=e),placeholder:"請輸入標題",required:""},null,512),[[a["vModelText"],o.tempArticle.title]])]),Object(a["createVNode"])("div",$,[P,Object(a["withDirectives"])(Object(a["createVNode"])("input",{type:"text",class:"form-control",id:"image","onUpdate:modelValue":t[2]||(t[2]=e=>o.tempArticle.imageUrl=e),placeholder:"請輸入圖片連結"},null,512),[[a["vModelText"],o.tempArticle.imageUrl]])]),Object(a["createVNode"])("div",q,[I,Object(a["withDirectives"])(Object(a["createVNode"])("input",{type:"text",class:"form-control",id:"author","onUpdate:modelValue":t[3]||(t[3]=e=>o.tempArticle.author=e),placeholder:"請輸入標題",required:""},null,512),[[a["vModelText"],o.tempArticle.author]])]),Object(a["createVNode"])("div",J,[E,Object(a["withDirectives"])(Object(a["createVNode"])("input",{type:"date",class:"form-control",id:"create_at","onUpdate:modelValue":t[4]||(t[4]=e=>o.create_at=e),required:""},null,512),[[a["vModelText"],o.create_at]])])]),Object(a["createVNode"])("div",F,[H,Object(a["createVNode"])("div",G,[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(o.tempArticle.tag,(e,t)=>(Object(a["openBlock"])(),Object(a["createBlock"])("div",{class:"col-md-3 mb-1",key:t},[Object(a["createVNode"])("div",R,[Object(a["withDirectives"])(Object(a["createVNode"])("input",{type:"text",class:"form-control form-control",id:"tag","onUpdate:modelValue":e=>o.tempArticle.tag[t]=e,placeholder:"請輸入標籤"},null,8,["onUpdate:modelValue"]),[[a["vModelText"],o.tempArticle.tag[t]]]),Object(a["createVNode"])("button",{type:"button",class:"btn btn-outline-danger",onClick:e=>o.tempArticle.tag.splice(t,1)},[z],8,["onClick"])])]))),128)),o.tempArticle.tag[o.tempArticle.tag.length-1]||!o.tempArticle.tag.length?(Object(a["openBlock"])(),Object(a["createBlock"])("div",K,[Object(a["createVNode"])("button",{class:"btn btn-secondary btn-sm w-100 text-white",onClick:t[5]||(t[5]=e=>o.tempArticle.tag.push(""))}," 新增標籤 ")])):Object(a["createCommentVNode"])("",!0)]),Q,Object(a["createVNode"])("div",W,[Object(a["createVNode"])(i,{editor:o.editor,config:o.editorConfig,modelValue:o.tempArticle.description,"onUpdate:modelValue":t[6]||(t[6]=e=>o.tempArticle.description=e),required:""},null,8,["editor","config","modelValue"])]),Object(a["createVNode"])("div",X,[Object(a["createVNode"])("div",Y,[Object(a["withDirectives"])(Object(a["createVNode"])("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":t[7]||(t[7]=e=>o.tempArticle.isPublic=e),id:"isPublic",required:""},null,512),[[a["vModelCheckbox"],o.tempArticle.isPublic]]),Z])])]),Object(a["createVNode"])("div",ee,[te,Object(a["createVNode"])("button",{type:"submit",class:"btn btn-secondary text-white",onClick:t[8]||(t[8]=e=>r.updateArticle())}," 確認 ")])])])])])],512)}c("ddb0");var ae=c("fb3d"),le=c.n(ae),oe=c("7c2b"),re=c.n(oe),ie={props:{article:{type:Object,default(){return{articleModal:""}}}},data(){return{tempArticle:{tag:[""]},create_at:0,editor:le.a,editorConfig:{toolbar:["heading","typing","bold","italic","|","link"]}}},watch:{article(){this.tempArticle={...this.article,tag:this.article.tag||[],isPublic:this.article.isPublic||!1},[this.create_at]=new Date(1e3*this.tempArticle.create_at).toISOString().split("T")},create_at(){this.tempArticle.create_at=Math.floor(new Date(this.create_at)/1e3)}},mounted(){this.articleModal=new re.a(this.$refs.articleModal,{keyboard:!1,backdrop:"static"}),this.$refs.articleModal.addEventListener("hidden.bs.modal",()=>{this.init()})},methods:{init(){this.tempArticle={tag:[""]},this.create_at=0;const e=document.querySelector(".needs-validation");e.classList.remove("was-validated")},modal(e){switch(e){case"show":this.articleModal.show();break;case"hide":this.articleModal.hide();break;default:}},updateArticle(){let e=!1;const t=document.querySelectorAll(".needs-validation");console.log(t),Array.prototype.slice.call(t).forEach(t=>{console.log(t),t.addEventListener("submit",c=>{console.log(c),console.log(t.checkValidity()),t.checkValidity()?e=!0:(c.preventDefault(),c.stopPropagation(),e=!1),t.classList.add("was-validated")},!1)}),setTimeout(()=>{e&&(this.$emit("update-article",this.tempArticle),this.modal("hide"),this.init())})}}};c("fe6c");ie.render=ce;var de=ie,se=c("e417"),ne=c("ac49"),be={data(){return{msg:"文章管理",tempArticle:{}}},components:{DelModal:se["a"],ArticleModal:de,InnerBanner:ne["a"]},computed:{...Object(f["b"])({articleLists:"backend/articleLists"})},async created(){await this.$store.dispatch("backend/fetchGetArticles",1)},methods:{getArticle(e){this.tempArticle=JSON.parse(JSON.stringify(e))},async updateArticle(e){await this.$store.dispatch("backend/fetchUpdateArticle",e)},async delArticle(e){await this.$store.dispatch("backend/fetchRemoveArticle",e)}}};be.render=k;t["default"]=be},edce:function(e,t,c){},fe6c:function(e,t,c){"use strict";c("edce")}}]);
//# sourceMappingURL=chunk-373436b2.0507d30e.js.map