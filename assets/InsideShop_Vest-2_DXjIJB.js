import{R as i,c,o as n,g as m,w as t,d as a,aU as h,ao as g,aq as k,b as w,f as C,F as b,an as L,W as B,ar as E}from"./index-B5GFQXZq.js";import{_ as A}from"./ProductCard-D2OLz2dP.js";import{a as u,V,b as _}from"./route-block-rW1XtWmZ.js";import{V as v}from"./VContainer-Cq7Q4N9Y.js";import{V as F}from"./VAlert-DSa1khuR.js";import{V as N}from"./VPagination-7at037Fj.js";const f=2,R={__name:"InsideShop_Vest",setup(T){const{api:y}=E(),s=i(1),P=c(()=>Math.ceil(x.value.length/f)),d=i([]),r=i(""),x=c(()=>d.value.filter(e=>e.category==="gun"&&e.name.toLowerCase().includes(r.value.toLowerCase()))),p=c(()=>d.value.filter(e=>e.category==="vest"&&e.name.toLowerCase().includes(r.value.toLowerCase())).slice((s.value-1)*f,s.value*f));return(async()=>{try{const{data:e}=await y.get("/product");d.value.push(...e.result)}catch(e){console.log(e)}})(),(e,o)=>(n(),m(v,{class:"position"},{default:t(()=>[a(V,null,{default:t(()=>[a(u,{cols:"12"},{default:t(()=>[a(h,{modelValue:r.value,"onUpdate:modelValue":o[0]||(o[0]=l=>r.value=l),"prepend-inner-icon":"mdi-magnify"},null,8,["modelValue"])]),_:1}),p.value.length===0?(n(),m(v,{key:0,class:"text-center"},{default:t(()=>[a(F,{type:"info",color:"grey lighten-4",class:"ma-4"},{default:t(()=>o[2]||(o[2]=[g(" 無資料，可至商城購買物品 ")])),_:1})]),_:1})):k("",!0),(n(!0),w(b,null,C(p.value,l=>(n(),m(u,{key:l._id,cols:"12",md:"6",lg:"3"},{default:t(()=>[a(A,B({ref_for:!0},l,{style:{height:"560px"}}),null,16)]),_:2},1024))),128)),a(u,{cols:"12"},{default:t(()=>[a(N,{modelValue:s.value,"onUpdate:modelValue":o[1]||(o[1]=l=>s.value=l),length:P.value},null,8,["modelValue","length"])]),_:1})]),_:1}),a(V,null,{default:t(()=>[a(u,{class:"text-right"},{default:t(()=>[a(L,{to:"/shop","prepend-icon":"mdi-keyboard-backspace"},{default:t(()=>o[3]||(o[3]=[g("返回上一頁")])),_:1})]),_:1})]),_:1})]),_:1}))}};typeof _=="function"&&_(R);export{R as default};
