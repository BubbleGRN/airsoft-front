import{u as A,ak as C,al as q,o as P,j as T,g as l,aM as b,f as t,ap as V,h as e,aV as E,aU as i,an as R,ao as U,ar as B}from"./index-UR6t7LWQ.js";import{c as F,a as n,g as I,u as N,d as m,V as L}from"./index.esm-CeVDuEnI.js";import{v as w}from"./index-TVJRU2ft.js";import{b as x}from"./route-block-B_A1xBdJ.js";import{a as h,V as _}from"./VRow-C0F7vqWP.js";import{V as j}from"./VContainer-CTkW8SnP.js";import"./_commonjsHelpers-Cpj98o6Y.js";const D={class:"text-center"},G={class:"text-center",style:{"padding-top":"30px"}},O={__name:"register",setup(z){const{t:o}=A(),{api:y}=B(),v=C(),k=q(),S=F({account:n().required(o("api.userAccountRequired")).min(4,o("api.userAccountTooShort")).max(20,o("api.userAccountTooLong")).test("isAlphanumeric",o("api.userAccountInvalid"),a=>w.isAlphanumeric(a)),email:n().required(o("api.userEmailRequired")).test("isEmail",o("api.userEmailInvalid"),a=>w.isEmail(a)),password:n().required(o("api.userPasswordRequired")).min(4,o("api.userPasswordTooShort")).max(20,o("api.userPasswordTooLong")),passwordConfirm:n().oneOf([I("password")],o("api.userPasswordNotMatch"))}),{handleSubmit:$,isSubmitting:f}=N({validationSchema:S}),d=m("account"),p=m("email"),c=m("password"),g=m("passwordConfirm"),M=$(async a=>{var s,r;try{await y.post("/user",{account:a.account,email:a.email,password:a.password}),v({text:o("register.success"),snackbarProps:{color:"green"}}),k.push("/login")}catch(u){console.log(u),v({text:o("api."+(((r=(s=u==null?void 0:u.response)==null?void 0:s.data)==null?void 0:r.message)||"unknownError")),snackbarProps:{color:"red"}})}});return(a,s)=>(P(),T(j,{style:{"margin-left":"0px","margin-right":"0px","max-width":"1903px",height:"950px",position:"relative",top:"-80px"}},{default:l(()=>[s[4]||(s[4]=b("div",{class:"backgroundIMG"},null,-1)),t(_,{style:{position:"absolute",top:"220px",left:"680px",width:"600px",margin:"auto"}},{default:l(()=>[t(h,{cols:"12"},{default:l(()=>[b("h1",D,V(a.$t("nav.register")),1)]),_:1}),t(h,{cols:"12"},{default:l(()=>[t(L,{disabled:e(f),onSubmit:E(e(M),["prevent"])},{default:l(()=>[t(i,{modelValue:e(d).value.value,"onUpdate:modelValue":s[0]||(s[0]=r=>e(d).value.value=r),"error-messages":e(d).errorMessage.value,label:a.$t("user.account"),minlength:"4",maxlength:"20",counter:"",class:"custom-label"},null,8,["modelValue","error-messages","label"]),t(i,{modelValue:e(p).value.value,"onUpdate:modelValue":s[1]||(s[1]=r=>e(p).value.value=r),"error-messages":e(p).errorMessage.value,label:a.$t("user.email"),class:"custom-label"},null,8,["modelValue","error-messages","label"]),t(i,{modelValue:e(c).value.value,"onUpdate:modelValue":s[2]||(s[2]=r=>e(c).value.value=r),type:"password","error-messages":e(c).errorMessage.value,label:a.$t("user.password"),minlength:"4",maxlength:"20",counter:"",class:"custom-label"},null,8,["modelValue","error-messages","label"]),t(i,{modelValue:e(g).value.value,"onUpdate:modelValue":s[3]||(s[3]=r=>e(g).value.value=r),type:"password","error-messages":e(g).errorMessage.value,label:a.$t("user.passwordConfirm"),minlength:"4",maxlength:"20",counter:"",class:"custom-label"},null,8,["modelValue","error-messages","label"]),b("div",G,[t(R,{loading:e(f),type:"submit",color:"primary"},{default:l(()=>[U(V(a.$t("register.submit")),1)]),_:1},8,["loading"])])]),_:1},8,["disabled","onSubmit"])]),_:1})]),_:1})]),_:1}))}};typeof x=="function"&&x(O);export{O as default};
