import{v as Y,r as H,s as _,c as f,a2 as oe,w as E,l as O,m as W,D as le,I as U,S as se,p as ne,U as re,N,W as F,f as i,Y as $,q as ie,a3 as ue,y as G,a4 as Q,E as X,G as K,H as J,a5 as ce,M as Z,Q as ee,a6 as de,a7 as ve,a8 as te,a9 as ae,aa as me,ab as ge,ac as he,ad as fe,ae as pe,x as ye,af as be,B as Se,ag as ke,K as xe,L as we,ah as Ce,O as Ve,ai as Be,aj as Ie,u as _e,a as Le,ak as Pe,al as Te,b as He,d as Ne,e as B,g as y,am as Ee,n as A,F as I,o as k,an as L,ao as P,i as R,j as D,ap as M,h as T,aq as z,ar as Ae}from"./index-UR6t7LWQ.js";import{m as Re,V as j}from"./VToolbar-C_ujljF1.js";import{u as De}from"./ssrBoot-DpYCysiW.js";import{V as Me}from"./VMain-CXfhzF71.js";import{V as ze}from"./VContainer-CTkW8SnP.js";import{V as Ye}from"./VMenu-CSA1IOhN.js";import{V as $e,a as Ue}from"./VList-C_ekoX4d.js";import"./VDivider-z7DtT3J7.js";const Fe=Y({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function je(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:a}=n;let p=0,c=0;const t=H(null),o=_(0),u=_(0),v=_(0),m=_(!1),l=_(!1),d=f(()=>Number(e.scrollThreshold)),w=f(()=>oe((d.value-o.value)/d.value||0)),S=()=>{const r=t.value;if(!r||a&&!a.value)return;p=o.value,o.value="window"in r?r.pageYOffset:r.scrollTop;const g=r instanceof Window?document.documentElement.scrollHeight:r.scrollHeight;if(c!==g){c=g;return}l.value=o.value<p,v.value=Math.abs(o.value-d.value)};return E(l,()=>{u.value=u.value||o.value}),E(m,()=>{u.value=0}),O(()=>{E(()=>e.scrollTarget,r=>{var x;const g=r?document.querySelector(r):window;g&&g!==t.value&&((x=t.value)==null||x.removeEventListener("scroll",S),t.value=g,t.value.addEventListener("scroll",S,{passive:!0}))},{immediate:!0})}),W(()=>{var r;(r=t.value)==null||r.removeEventListener("scroll",S)}),a&&E(a,S,{immediate:!0}),{scrollThreshold:d,currentScroll:o,currentThreshold:v,isScrollActive:m,scrollRatio:w,isScrollingUp:l,savedScroll:u}}const qe=Y({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...Re(),...le(),...Fe(),height:{type:[Number,String],default:64}},"VAppBar"),Oe=U()({name:"VAppBar",props:qe(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:a}=n;const p=H(),c=se(e,"modelValue"),t=f(()=>{var C;const s=new Set(((C=e.scrollBehavior)==null?void 0:C.split(" "))??[]);return{hide:s.has("hide"),fullyHide:s.has("fully-hide"),inverted:s.has("inverted"),collapse:s.has("collapse"),elevate:s.has("elevate"),fadeImage:s.has("fade-image")}}),o=f(()=>{const s=t.value;return s.hide||s.fullyHide||s.inverted||s.collapse||s.elevate||s.fadeImage||!c.value}),{currentScroll:u,scrollThreshold:v,isScrollingUp:m,scrollRatio:l}=je(e,{canScroll:o}),d=f(()=>t.value.hide||t.value.fullyHide),w=f(()=>e.collapse||t.value.collapse&&(t.value.inverted?l.value>0:l.value===0)),S=f(()=>e.flat||t.value.fullyHide&&!c.value||t.value.elevate&&(t.value.inverted?u.value>0:u.value===0)),r=f(()=>t.value.fadeImage?t.value.inverted?1-l.value:l.value:void 0),g=f(()=>{var V,h;if(t.value.hide&&t.value.inverted)return 0;const s=((V=p.value)==null?void 0:V.contentHeight)??0,C=((h=p.value)==null?void 0:h.extensionHeight)??0;return d.value?u.value<v.value||t.value.fullyHide?s+C:s:s+C});ne(f(()=>!!e.scrollBehavior),()=>{ie(()=>{d.value?t.value.inverted?c.value=u.value>v.value:c.value=m.value||u.value<v.value:c.value=!0})});const{ssrBootStyles:x}=De(),{layoutItemStyles:b}=re({id:e.name,order:f(()=>parseInt(e.order,10)),position:N(e,"location"),layoutSize:g,elementSize:_(void 0),active:c,absolute:N(e,"absolute")});return F(()=>{const s=j.filterProps(e);return i(j,$({ref:p,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...b.value,"--v-toolbar-image-opacity":r.value,height:void 0,...x.value},e.style]},s,{collapse:w.value,flat:S.value}),a)}),{}}}),We=Y({bordered:Boolean,color:String,content:[Number,String],dot:Boolean,floating:Boolean,icon:ue,inline:Boolean,label:{type:String,default:"$vuetify.badge"},max:[Number,String],modelValue:{type:Boolean,default:!0},offsetX:[Number,String],offsetY:[Number,String],textColor:String,...G(),...Q({location:"top end"}),...X(),...K(),...J(),...ce({transition:"scale-rotate-transition"})},"VBadge"),Ge=U()({name:"VBadge",inheritAttrs:!1,props:We(),setup(e,n){const{backgroundColorClasses:a,backgroundColorStyles:p}=Z(N(e,"color")),{roundedClasses:c}=ee(e),{t}=de(),{textColorClasses:o,textColorStyles:u}=ve(N(e,"textColor")),{themeClasses:v}=te(),{locationStyles:m}=ae(e,!0,l=>(e.floating?e.dot?2:4:e.dot?8:12)+(["top","bottom"].includes(l)?+(e.offsetY??0):["left","right"].includes(l)?+(e.offsetX??0):0));return F(()=>{const l=Number(e.content),d=!e.max||isNaN(l)?e.content:l<=+e.max?l:`${e.max}+`,[w,S]=me(n.attrs,["aria-atomic","aria-label","aria-live","role","title"]);return i(e.tag,$({class:["v-badge",{"v-badge--bordered":e.bordered,"v-badge--dot":e.dot,"v-badge--floating":e.floating,"v-badge--inline":e.inline},e.class]},S,{style:e.style}),{default:()=>{var r,g;return[i("div",{class:"v-badge__wrapper"},[(g=(r=n.slots).default)==null?void 0:g.call(r),i(ge,{transition:e.transition},{default:()=>{var x,b;return[he(i("span",$({class:["v-badge__badge",v.value,a.value,c.value,o.value],style:[p.value,u.value,e.inline?{}:m.value],"aria-atomic":"true","aria-label":t(e.label,l),"aria-live":"polite",role:"status"},w),[e.dot?void 0:n.slots.badge?(b=(x=n.slots).badge)==null?void 0:b.call(x):e.icon?i(pe,{icon:e.icon},null):d]),[[fe,e.modelValue]])]}})])]}})}),{}}}),Qe=Y({color:String,...ye(),...G(),...be(),...Se(),...Q(),...ke(),...X(),...K(),...J()},"VSheet"),q=U()({name:"VSheet",props:Qe(),setup(e,n){let{slots:a}=n;const{themeClasses:p}=xe(e),{backgroundColorClasses:c,backgroundColorStyles:t}=Z(N(e,"color")),{borderClasses:o}=we(e),{dimensionStyles:u}=Ce(e),{elevationClasses:v}=Ve(e),{locationStyles:m}=ae(e),{positionClasses:l}=Be(e),{roundedClasses:d}=ee(e);return F(()=>i(e.tag,{class:["v-sheet",p.value,c.value,o.value,v.value,l.value,d.value,e.class],style:[t.value,u.value,m.value,e.style]},a)),{}}}),Xe={__name:"default",setup(e){const{t:n}=_e(),a=Le(),{apiAuth:p}=Ae(),c=Pe(),t=Te(),o=He(),u=te(),v=H(80),m=H(!1),l=H("transparent-app-bar"),d=()=>{window.scrollY>100&&!m.value?(v.value=120,l.value="scrolled-app-bar",m.value=!0):window.scrollY<=100&&m.value&&(v.value=80,l.value="transparent-app-bar",m.value=!1)};O(()=>{window.addEventListener("scroll",d)}),W(()=>{window.removeEventListener("scroll",d)});const w=f(()=>[{to:"/register",text:n("nav.register"),icon:"mdi-account-plus",show:!a.isLoggedIn},{to:"/login",text:n("nav.login"),icon:"mdi-account-arrow-left",show:!a.isLoggedIn},{to:"/shop",text:n("nav.shop"),icon:"mdi-store",show:a.isLoggedIn},{to:"/activity",text:n("nav.activity"),icon:"mdi-account-multiple",show:a.isLoggedIn},{to:"/cart",text:n("nav.cart"),icon:"mdi-cart",show:a.isLoggedIn},{to:"/orders",text:n("nav.orders"),icon:"mdi-format-list-bulleted",show:a.isLoggedIn},{to:"/admin",text:n("nav.admin"),icon:"mdi-cog",show:a.isLoggedIn&&a.isAdmin}]),S=f(()=>o.path==="/"?"10px":o.path==="/shop"||o.path==="/cart"||o.path==="/orders"?"0px":o.path==="/InsideShop/InsideShop_Gun"||o.path==="/InsideShop/InsideShop_Vest"||o.path==="/InsideShop/InsideShop_Backpack"||o.path==="/InsideShop/InsideShop_Helmet"||o.path==="/InsideShop/InsideShop_BB"||o.path==="/InsideShop/InsideShop_Other"?"30px":o.path==="/activity"?"0px":"80px"),r=[{text:"繁體中文",value:"zhHant"},{text:"English",value:"en"}],g=async()=>{try{await p.delete("/user/logout")}catch(b){console.log(b)}a.logout(),c({text:n("logout.success"),snackbarProps:{color:"green"}}),t.push("/")};function x(){u.global.name.value=u.global.current.value.dark?"myCustomLightTheme":"myCustomDarkTheme"}return(b,s)=>{const C=Ne("router-view");return k(),B(I,null,[i(Oe,{class:Ee(l.value),app:"",style:A({height:v.value+"px"})},{default:y(()=>[i(ze,{class:"d-flex align-center justify-space-between",style:{"margin-left":"0px","margin-right":"0px","max-width":"1910px"}},{default:y(()=>[i(L,{to:"/",active:!1,class:"custom-text",style:A([{backgroundColor:b.backgroundColor},{height:"50px","font-size":"1.3rem",color:"#D1C18B"}])},{default:y(()=>s[0]||(s[0]=[P("Survivor‘s Quest")])),_:1},8,["style"]),(k(),B(I,null,R(1,V=>i(q,{key:V,class:"pa-2",style:{"margin-right":"50px","background-color":"transparent",color:"white"}},{default:y(()=>[(k(!0),B(I,null,R(w.value,h=>(k(),B(I,{key:h.to},[h.show?(k(),D(L,{key:0,to:h.to,"prepend-icon":h.icon},{default:y(()=>[P(M(h.text)+" ",1),h.to==="/cart"&&T(a).cart>0?(k(),D(Ge,{key:0,content:T(a).cart,floating:"",color:"red",style:A(T(a).cart>0?{}:{opacity:0})},null,8,["content","style"])):z("",!0)]),_:2},1032,["to","prepend-icon"])):z("",!0)],64))),128))]),_:2},1024)),64)),(k(),B(I,null,R(1,V=>i(q,{key:V,class:"ma-10 pa-2",style:{"background-color":"transparent",color:"white"}},{default:y(()=>[T(a).isLoggedIn?(k(),D(L,{key:0,"prepend-icon":"mdi-account-box",to:"/account"},{default:y(()=>[P(M(b.$t("nav.account")),1)]),_:1})):z("",!0),T(a).isLoggedIn?(k(),D(L,{key:1,"prepend-icon":"mdi-account-arrow-right",onClick:g},{default:y(()=>[P(M(b.$t("nav.logout")),1)]),_:1})):z("",!0),i(L,{"prepend-icon":"mdi-theme-light-dark",onClick:x}),i(Ye,null,{default:y(()=>[i($e,null,{default:y(()=>[(k(),B(I,null,R(r,h=>i(Ue,{key:h.value,onClick:Ke=>b.$i18n.locale=h.value},{default:y(()=>[P(M(h.text),1)]),_:2},1032,["onClick"])),64))]),_:1})]),_:1})]),_:2},1024)),64))]),_:1})]),_:1},8,["class","style"]),i(Me,{style:A([{position:"relative","--v-layout-top":"0px"},{top:S.value}])},{default:y(()=>[i(C)]),_:1},8,["style"])],64)}}},nt=Ie(Xe,[["__scopeId","data-v-cc2ee42f"]]);export{nt as default};
