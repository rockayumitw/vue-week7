(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2086b7"],{a55b:function(e,t,o){"use strict";o.r(t);o("ddb0");var a=o("7a23");const s={class:"container mt-5"},c={class:"col-md-6"},r=Object(a["createVNode"])("h1",{class:"h3 mb-3 font-weight-normal"},"請先登入",-1),n={class:"mb-2"},d=Object(a["createVNode"])("label",{for:"inputEmail",class:"sr-only"},"Email address",-1),i={class:"mb-2"},l=Object(a["createVNode"])("label",{for:"inputPassword",class:"sr-only"},"Password",-1),u=Object(a["createVNode"])("div",{class:"text-end mt-4"},[Object(a["createVNode"])("button",{class:"btn btn-lg btn-primary btn-block",type:"submit"},"登入")],-1);function b(e,t,o,b,p,m){const h=Object(a["resolveComponent"])("loading");return Object(a["openBlock"])(),Object(a["createBlock"])("div",s,[Object(a["createVNode"])(h,{active:e.loading,"onUpdate:active":t[1]||(t[1]=t=>e.loading=t),"can-cancel":!0,loader:"dots"},null,8,["active"]),Object(a["createVNode"])("form",{class:"row justify-content-center",onSubmit:t[4]||(t[4]=Object(a["withModifiers"])((...e)=>m.login&&m.login(...e),["prevent"]))},[Object(a["createVNode"])("div",c,[r,Object(a["createVNode"])("div",n,[d,Object(a["withDirectives"])(Object(a["createVNode"])("input",{type:"email",id:"inputEmail",class:"form-control",placeholder:"Email address","onUpdate:modelValue":t[2]||(t[2]=e=>p.user.username=e),required:"",autofocus:""},null,512),[[a["vModelText"],p.user.username]])]),Object(a["createVNode"])("div",i,[l,Object(a["withDirectives"])(Object(a["createVNode"])("input",{type:"password",id:"inputPassword",class:"form-control","onUpdate:modelValue":t[3]||(t[3]=e=>p.user.password=e),placeholder:"Password",required:""},null,512),[[a["vModelText"],p.user.password]])]),u])],32)])}var p=o("5502"),m=o("9062"),h=o.n(m),w={data(){return{user:{username:"",password:""}}},components:{Loading:h.a},computed:{...Object(p["b"])({loading:"all/loading"})},methods:{async login(){this.$store.commit("all/SAVE_LOADING",!0);const e="https://vue3-course-api.hexschool.io/admin/signin";await this.axios.post(e,this.user).then(e=>{if(this.$store.commit("all/SAVE_LOADING",!1),e.data.success){const{token:t,expired:o}=e.data;document.cookie=`token=${t};expires=${new Date(o)};`,this.$router.push("/admin/products")}else alert(e.data.message)})}}};w.render=b;t["default"]=w}}]);
//# sourceMappingURL=chunk-2d2086b7.d921c195.js.map