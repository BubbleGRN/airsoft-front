import{c7 as i,bG as u,p as m,t as C,B as S,E as k,c as N,c8 as j}from"./index-B5GFQXZq.js";const V=i.reduce((t,s)=>(t[s]={type:[Boolean,String,Number],default:!1},t),{}),v=i.reduce((t,s)=>{const e="offset"+u(s);return t[e]={type:[String,Number],default:null},t},{}),L=i.reduce((t,s)=>{const e="order"+u(s);return t[e]={type:[String,Number],default:null},t},{}),y={col:Object.keys(V),offset:Object.keys(v),order:Object.keys(L)};function O(t,s,e){let a=t;if(!(e==null||e===!1)){if(s){const n=s.replace(t,"");a+=`-${n}`}return t==="col"&&(a="v-"+a),t==="col"&&(e===""||e===!0)||(a+=`-${e}`),a.toLowerCase()}}const _=["auto","start","end","center","baseline","stretch"],B=m({cols:{type:[Boolean,String,Number],default:!1},...V,offset:{type:[String,Number],default:null},...v,order:{type:[String,Number],default:null},...L,alignSelf:{type:String,default:null,validator:t=>_.includes(t)},...C(),...S()},"VCol"),x=k()({name:"VCol",props:B(),setup(t,s){let{slots:e}=s;const a=N(()=>{const n=[];let l;for(l in y)y[l].forEach(o=>{const c=t[o],g=O(l,o,c);g&&n.push(g)});const r=n.some(o=>o.startsWith("v-col-"));return n.push({"v-col":!r||!t.cols,[`v-col-${t.cols}`]:t.cols,[`offset-${t.offset}`]:t.offset,[`order-${t.order}`]:t.order,[`align-self-${t.alignSelf}`]:t.alignSelf}),n});return()=>{var n;return j(t.tag,{class:[a.value,t.class],style:t.style},(n=e.default)==null?void 0:n.call(e))}}}),f=["start","end","center"],$=["space-between","space-around","space-evenly"];function d(t,s){return i.reduce((e,a)=>{const n=t+u(a);return e[n]=s(),e},{})}const I=[...f,"baseline","stretch"],h=t=>I.includes(t),w=d("align",()=>({type:String,default:null,validator:h})),R=[...f,...$],P=t=>R.includes(t),E=d("justify",()=>({type:String,default:null,validator:P})),T=[...f,...$,"stretch"],A=t=>T.includes(t),G=d("alignContent",()=>({type:String,default:null,validator:A})),b={align:Object.keys(w),justify:Object.keys(E),alignContent:Object.keys(G)},U={align:"align",justify:"justify",alignContent:"align-content"};function M(t,s,e){let a=U[t];if(e!=null){if(s){const n=s.replace(t,"");a+=`-${n}`}return a+=`-${e}`,a.toLowerCase()}}const F=m({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:h},...w,justify:{type:String,default:null,validator:P},...E,alignContent:{type:String,default:null,validator:A},...G,...C(),...S()},"VRow"),z=k()({name:"VRow",props:F(),setup(t,s){let{slots:e}=s;const a=N(()=>{const n=[];let l;for(l in b)b[l].forEach(r=>{const o=t[r],c=M(l,r,o);c&&n.push(c)});return n.push({"v-row--no-gutters":t.noGutters,"v-row--dense":t.dense,[`align-${t.align}`]:t.align,[`justify-${t.justify}`]:t.justify,[`align-content-${t.alignContent}`]:t.alignContent}),n});return()=>{var n;return j(t.tag,{class:["v-row",a.value,t.class],style:t.style},(n=e.default)==null?void 0:n.call(e))}}}),J={};export{z as V,x as a,J as b};
