import{ak as z,aj as G,u as H,a as J,ai as K,R as P,o as Y,b as Z,d as e,w as t,aM as V,ap as s,an as y,ao as p,X as ee,e as r,aV as k,aU as S,bR as ae,aN as te,aP as le,aQ as re,aW as ue,aX as oe,F as ne,ar as se}from"./index-B5GFQXZq.js";import{c as F,b as de,u as N,d as C,a as Q,f as B,V as q}from"./index.esm-WlsNqJoh.js";import{V as D,a as d,b as T}from"./route-block-rW1XtWmZ.js";import{V as ie}from"./VDivider-D-fT6S-2.js";import{V as me}from"./VContainer-Cq7Q4N9Y.js";import"./_commonjsHelpers-Cpj98o6Y.js";const ce={class:"text-center"},pe={__name:"[id]",setup(ve){const{api:j,apiAuth:M}=se(),x=z(),R=G(),{t:o}=H(),i=J(),$=K(),n=P({_id:"",name:"",price:0,description:"",image:"",sell:!0,category:"gun"});(async()=>{try{const{data:a}=await j.get("/product/"+x.params.id);n.value=a.result,document.title=n.value.name+" | 購物網站"}catch(a){console.log(a),R.push("/")}})();const A=F({quantity:de().typeError(o("product.addCartQuantityInvalid")).required(o("product.addCartQuantityInvalid")).positive(o("product.addCartQuantityInvalid")).integer(o("product.addCartQuantityInvalid"))}),{handleSubmit:L,isSubmitting:U}=N({validationSchema:A,initialValues:{quantity:1}}),w=C("quantity"),_=L(async a=>{var l,u;if(!i.isLoggedIn){R.push("/login");return}try{const{data:c}=await M.patch("/user/cart",{product:n.value._id,quantity:a.quantity});i.cart=c.result,$({text:o("product.addCartSuccess"),snackbarProps:{color:"green"}})}catch(c){console.log(c),$({text:o("api."+(((u=(l=c==null?void 0:c.response)==null?void 0:l.data)==null?void 0:u.message)||"unknownError")),snackbarProps:{color:"red"}})}}),O=F({name:Q().required(o("product.nameRequired")),rentdate:B().required(o("product.rentDateRequired")).typeError(o("product.rentDateInvalid")),returndate:B().required(o("product.returnDateRequired")).typeError(o("product.returnDateInvalid")),location:Q().required(o("product.locationRequired"))}),{handleSubmit:X,isSubmitting:I}=N({validationSchema:O,initialValues:{name:"",rentdate:"",returndate:"",location:""}}),v=C("name"),g=C("rentdate"),b=C("returndate"),f=C("location"),h=X(async()=>{var a,l;if(!i.isLoggedIn){R.push("/login");return}try{const{data:u}=await M.patch("/user/rent",{product:n.value._id,name:v.value.value,rentdate:g.value.value,returndate:b.value.value,location:f.value.value});i.rent=u.result,console.log(typeof i.rent,i.rent),$({text:o("product.addRentSuccess"),snackbarProps:{color:"green"}}),E()}catch(u){$({text:o("api."+(((l=(a=u==null?void 0:u.response)==null?void 0:a.data)==null?void 0:l.message)||"unknownError")),snackbarProps:{color:"red"}})}}),m=P({open:!1,id:""}),W=a=>{a&&(m.value.id=a._id,v.value.value=a.name,g.value.value="",b.value.value="",f.value.value=""),m.value.open=!0},E=()=>{m.value.id="",m.value.open=!1};return(a,l)=>(Y(),Z(ne,null,[e(me,null,{default:t(()=>[e(D,null,{default:t(()=>[e(d,{cols:"11",class:"d-flex justify-center",style:{"padding-left":"130px"}},{default:t(()=>[V("h1",null,s(n.value.name),1)]),_:1}),e(d,{cols:"1",class:"text-right"},{default:t(()=>[e(y,{"prepend-icon":"mdi-keyboard-backspace",onClick:l[0]||(l[0]=u=>a.$router.go(-1))},{default:t(()=>l[8]||(l[8]=[p("返回上一頁")])),_:1})]),_:1}),e(ie),e(d,{cols:"12",md:"6"},{default:t(()=>[e(ee,{src:n.value.image},null,8,["src"])]),_:1}),e(d,{cols:"12",md:"6"},{default:t(()=>[V("p",null,s(a.$t("productCategory."+n.value.category)),1),V("p",null,s(n.value.price),1),V("p",null,s(n.value.description),1),e(D,{align:"center"},{default:t(()=>[e(d,{cols:"auto",class:"pt-8"},{default:t(()=>[e(q,{disabled:r(U),onSubmit:k(r(_),["prevent"])},{default:t(()=>[e(S,{modelValue:r(w).value.value,"onUpdate:modelValue":l[1]||(l[1]=u=>r(w).value.value=u),modelModifiers:{number:!0},type:"number","error-messages":r(w).errorMessage.value,label:"數量"},null,8,["modelValue","error-messages"])]),_:1},8,["disabled","onSubmit"])]),_:1}),e(d,{cols:"auto"},{default:t(()=>[e(q,{disabled:r(U),onSubmit:k(r(_),["prevent"])},{default:t(()=>[e(y,{type:"submit","prepend-icon":"mdi-cart",loading:a.isSubmitting},{default:t(()=>[p(s(a.$t("product.addCart")),1)]),_:1},8,["loading"])]),_:1},8,["disabled","onSubmit"])]),_:1})]),_:1}),e(D,{align:"center"},{default:t(()=>[e(d,{cols:"auto"},{default:t(()=>[e(q,{disabled:a.isRentSubmitting,onSubmit:k(r(h),["prevent"])},{default:t(()=>[e(y,{type:"submit","prepend-icon":"mdi-send",loading:r(I),onClick:l[2]||(l[2]=u=>W(n.value))},{default:t(()=>[p(s(a.$t("product.addRent")),1)]),_:1},8,["loading"])]),_:1},8,["disabled","onSubmit"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(ae,{"model-value":!n.value.sell,class:"align-center justify-center",scrim:"black",opacity:"0.8",persistent:""},{default:t(()=>[V("h1",ce,s(a.$t("api.productNotOnSell")),1)]),_:1},8,["model-value"]),e(oe,{modelValue:m.value.open,"onUpdate:modelValue":l[7]||(l[7]=u=>m.value.open=u),persistent:"","max-width":"600px"},{default:t(()=>[e(q,{disabled:r(I),onSubmit:k(r(h),["prevent"])},{default:t(()=>[e(te,null,{default:t(()=>[e(le,null,{default:t(()=>[p(s(a.$t("product.rent")),1)]),_:1}),e(re,null,{default:t(()=>[e(S,{modelValue:r(v).value.value,"onUpdate:modelValue":l[3]||(l[3]=u=>r(v).value.value=u),label:a.$t("product.name"),"error-messages":r(v).errorMessage.value},null,8,["modelValue","label","error-messages"]),e(S,{modelValue:r(g).value.value,"onUpdate:modelValue":l[4]||(l[4]=u=>r(g).value.value=u),label:a.$t("event.rentdate"),"error-messages":r(g).errorMessage.value,type:"date"},null,8,["modelValue","label","error-messages"]),e(S,{modelValue:r(b).value.value,"onUpdate:modelValue":l[5]||(l[5]=u=>r(b).value.value=u),label:a.$t("event.returndate"),"error-messages":r(b).errorMessage.value,type:"date"},null,8,["modelValue","label","error-messages"]),e(S,{modelValue:r(f).value.value,"onUpdate:modelValue":l[6]||(l[6]=u=>r(f).value.value=u),label:a.$t("event.location"),"error-messages":r(f).errorMessage.value},null,8,["modelValue","label","error-messages"])]),_:1}),e(ue,null,{default:t(()=>[e(y,{onClick:E},{default:t(()=>[p(s(a.$t("adminEvent.cancel")),1)]),_:1}),e(y,{type:"submit",loading:r(I)},{default:t(()=>[p(s(a.$t("product.rentSubmit")),1)]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1},8,["disabled","onSubmit"])]),_:1},8,["modelValue"])],64))}};typeof T=="function"&&T(pe);export{pe as default};
