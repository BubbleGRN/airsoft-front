import{u as y,ak as g,r as x,c as h,o as i,j as V,g as a,f as o,aM as d,ap as n,e as p,i as b,F as v,ar as A}from"./index-UR6t7LWQ.js";import{b as u}from"./route-block-B_A1xBdJ.js";import{a as m,V as w}from"./VRow-C0F7vqWP.js";import{V as D}from"./VDivider-z7DtT3J7.js";import{V as B}from"./VDataTable-BuLwBBVI.js";import{V as C}from"./VContainer-CTkW8SnP.js";import"./VPagination-B0wVlwFX.js";import"./VList-C_ekoX4d.js";import"./ssrBoot-DpYCysiW.js";import"./VMenu-CSA1IOhN.js";import"./VSlideGroup-6vR-rC_Y.js";const E={class:"text-center"},I={__name:"orders",setup(S){const{apiAuth:f}=A(),{t:s}=y(),_=g(),l=x([]),k=h(()=>[{title:"ID",key:"_id"},{title:s("order.createdAt"),key:"createdAt",value:t=>new Date(t.createdAt).toLocaleString()},{title:s("order.cart"),key:"cart",sortable:!1},{title:s("order.price"),key:"price",value:t=>t.cart.reduce((r,e)=>r+e.product.price*e.quantity,0)}]);return(async()=>{var t,r;try{const{data:e}=await f.get("/order");l.value=e.result}catch(e){console.log(e),_({text:s("api."+(((r=(t=e==null?void 0:e.response)==null?void 0:t.data)==null?void 0:r.message)||"unknownError")),snackbarProps:{color:"red"}})}})(),(t,r)=>(i(),V(C,{class:"backgroundIMG",style:{"margin-left":"0px","margin-right":"0px","max-width":"1903px"}},{default:a(()=>[o(w,{style:{position:"relative",top:"80px"}},{default:a(()=>[o(m,{cols:"12"},{default:a(()=>[d("h1",E,n(t.$t("nav.orders")),1)]),_:1}),o(D),o(m,{cols:"12"},{default:a(()=>[o(B,{items:l.value,headers:k.value,style:{border:"5px solid #7A9A5E"}},{"item.cart":a(e=>[d("ul",null,[(i(!0),p(v,null,b(e.item.cart,c=>(i(),p("li",{key:c._id},n(c.product.name)+" x "+n(c.quantity),1))),128))])]),_:2},1032,["items","headers"])]),_:1})]),_:1})]),_:1}))}};typeof u=="function"&&u(I);export{I as default};
