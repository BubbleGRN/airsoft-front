import{b as nt}from"./route-block-B_A1xBdJ.js";import{at as ut,p as z,t as dt,B as ft,D as kt,E,H as Tt,G as At,a4 as mt,au as Pt,R as M,c as h,s as K,j as F,av as It,d as s,an as G,U as W,aa as bt,aw as Dt,a1 as Rt,P as Z,i as zt,F as O,Y as Et,W as T,ax as Wt,h as Q,ay as $t,az as Lt,aA as vt,aB as Yt,aC as Xt,ab as Ut,a9 as Mt,$ as Gt,aD as Ot,X as C,aE as ct,aF as Ht,a5 as jt,aG as Ft,aH as Qt,aI as Nt,aJ as Jt,aK as qt,J as Kt,K as $,Q as Zt,T as _t,aL as tl,ah as ll,r as st,o as q,b as ot,w as r,f as el,aM as t,ao as n,aN as k,aO as nl,aP as U,aQ as j,ac as it,aR as rt,g as sl,ap as ol}from"./index-BptsUehH.js";import{V as L,a as S}from"./VRow-BdMs7bqC.js";import{V as il}from"./VToolbar-B5agx2aB.js";import{u as rl}from"./ssrBoot-Bss5gpZw.js";import{m as al,V as at}from"./VSlideGroup-CSEc6obY.js";import{V as ul}from"./VContainer-DLa4d2a4.js";const dl=e=>{const{touchstartX:l,touchendX:i,touchstartY:o,touchendY:u}=e,f=.5,a=16;e.offsetX=i-l,e.offsetY=u-o,Math.abs(e.offsetY)<f*Math.abs(e.offsetX)&&(e.left&&i<l-a&&e.left(e),e.right&&i>l+a&&e.right(e)),Math.abs(e.offsetX)<f*Math.abs(e.offsetY)&&(e.up&&u<o-a&&e.up(e),e.down&&u>o+a&&e.down(e))};function fl(e,l){var o;const i=e.changedTouches[0];l.touchstartX=i.clientX,l.touchstartY=i.clientY,(o=l.start)==null||o.call(l,{originalEvent:e,...l})}function ml(e,l){var o;const i=e.changedTouches[0];l.touchendX=i.clientX,l.touchendY=i.clientY,(o=l.end)==null||o.call(l,{originalEvent:e,...l}),dl(l)}function bl(e,l){var o;const i=e.changedTouches[0];l.touchmoveX=i.clientX,l.touchmoveY=i.clientY,(o=l.move)==null||o.call(l,{originalEvent:e,...l})}function vl(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const l={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:i=>fl(i,l),touchend:i=>ml(i,l),touchmove:i=>bl(i,l)}}function cl(e,l){var b;const i=l.value,o=i!=null&&i.parent?e.parentElement:e,u=(i==null?void 0:i.options)??{passive:!0},f=(b=l.instance)==null?void 0:b.$.uid;if(!o||!f)return;const a=vl(l.value);o._touchHandlers=o._touchHandlers??Object.create(null),o._touchHandlers[f]=a,ut(a).forEach(d=>{o.addEventListener(d,a[d],u)})}function gl(e,l){var f,a;const i=(f=l.value)!=null&&f.parent?e.parentElement:e,o=(a=l.instance)==null?void 0:a.$.uid;if(!(i!=null&&i._touchHandlers)||!o)return;const u=i._touchHandlers[o];ut(u).forEach(b=>{i.removeEventListener(b,u[b])}),delete i._touchHandlers[o]}const gt={mounted:cl,unmounted:gl},yt=Symbol.for("vuetify:v-window"),Bt=Symbol.for("vuetify:v-window-group"),_=z({continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||e==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{type:[Boolean,String],default:"force"},...dt(),...ft(),...kt()},"VWindow"),N=E()({name:"VWindow",directives:{Touch:gt},props:_(),emits:{"update:modelValue":e=>!0},setup(e,l){let{slots:i}=l;const{themeClasses:o}=Tt(e),{isRtl:u}=At(),{t:f}=mt(),a=Pt(e,Bt),b=M(),d=h(()=>u.value?!e.reverse:e.reverse),g=K(!1),x=h(()=>{const y=e.direction==="vertical"?"y":"x",V=(d.value?!g.value:g.value)?"-reverse":"";return`v-window-${y}${V}-transition`}),B=K(0),m=M(void 0),c=h(()=>a.items.value.findIndex(y=>a.selected.value.includes(y.id)));F(c,(y,p)=>{const V=a.items.value.length,A=V-1;V<=2?g.value=y<p:y===A&&p===0?g.value=!0:y===0&&p===A?g.value=!1:g.value=y<p}),It(yt,{transition:x,isReversed:g,transitionCount:B,transitionHeight:m,rootRef:b});const v=h(()=>e.continuous||c.value!==0),w=h(()=>e.continuous||c.value!==a.items.value.length-1);function Y(){v.value&&a.prev()}function H(){w.value&&a.next()}const P=h(()=>{const y=[],p={icon:u.value?e.nextIcon:e.prevIcon,class:`v-window__${d.value?"right":"left"}`,onClick:a.prev,"aria-label":f("$vuetify.carousel.prev")};y.push(v.value?i.prev?i.prev({props:p}):s(G,p,null):s("div",null,null));const V={icon:u.value?e.prevIcon:e.nextIcon,class:`v-window__${d.value?"left":"right"}`,onClick:a.next,"aria-label":f("$vuetify.carousel.next")};return y.push(w.value?i.next?i.next({props:V}):s(G,V,null):s("div",null,null)),y}),I=h(()=>e.touch===!1?e.touch:{...{left:()=>{d.value?Y():H()},right:()=>{d.value?H():Y()},start:p=>{let{originalEvent:V}=p;V.stopPropagation()}},...e.touch===!0?{}:e.touch});return W(()=>bt(s(e.tag,{ref:b,class:["v-window",{"v-window--show-arrows-on-hover":e.showArrows==="hover"},o.value,e.class],style:e.style},{default:()=>{var y,p;return[s("div",{class:"v-window__container",style:{height:m.value}},[(y=i.default)==null?void 0:y.call(i,{group:a}),e.showArrows!==!1&&s("div",{class:"v-window__controls"},[P.value])]),(p=i.additional)==null?void 0:p.call(i,{group:a})]}}),[[Dt("touch"),I.value]])),{group:a}}}),yl=z({color:String,cycle:Boolean,delimiterIcon:{type:Rt,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:e=>Number(e)>0},progress:[Boolean,String],verticalDelimiters:[Boolean,String],..._({continuous:!0,mandatory:"force",showArrows:!0})},"VCarousel"),Bl=E()({name:"VCarousel",props:yl(),emits:{"update:modelValue":e=>!0},setup(e,l){let{slots:i}=l;const o=Z(e,"modelValue"),{t:u}=mt(),f=M();let a=-1;F(o,d),F(()=>e.interval,d),F(()=>e.cycle,g=>{g?d():window.clearTimeout(a)}),zt(b);function b(){!e.cycle||!f.value||(a=window.setTimeout(f.value.group.next,+e.interval>0?+e.interval:6e3))}function d(){window.clearTimeout(a),window.requestAnimationFrame(b)}return W(()=>{const g=N.filterProps(e);return s(N,T({ref:f},g,{modelValue:o.value,"onUpdate:modelValue":x=>o.value=x,class:["v-carousel",{"v-carousel--hide-delimiter-background":e.hideDelimiterBackground,"v-carousel--vertical-delimiters":e.verticalDelimiters},e.class],style:[{height:Q(e.height)},e.style]}),{default:i.default,additional:x=>{let{group:B}=x;return s(O,null,[!e.hideDelimiters&&s("div",{class:"v-carousel__controls",style:{left:e.verticalDelimiters==="left"&&e.verticalDelimiters?0:"auto",right:e.verticalDelimiters==="right"?0:"auto"}},[B.items.value.length>0&&s(Et,{defaults:{VBtn:{color:e.color,icon:e.delimiterIcon,size:"x-small",variant:"text"}},scoped:!0},{default:()=>[B.items.value.map((m,c)=>{const v={id:`carousel-item-${m.id}`,"aria-label":u("$vuetify.carousel.ariaLabel.delimiter",c+1,B.items.value.length),class:["v-carousel__controls__item",B.isSelected(m.id)&&"v-btn--active"],onClick:()=>B.select(m.id,!0)};return i.item?i.item({props:v,item:m}):s(G,T(m,v),null)})]})]),e.progress&&s(Wt,{class:"v-carousel__progress",color:typeof e.progress=="string"?e.progress:void 0,modelValue:(B.getItemIndex(o.value)+1)/B.items.value.length*100},null)])},prev:i.prev,next:i.next})}),{}}}),tt=z({reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...dt(),...$t(),...Lt()},"VWindowItem"),J=E()({name:"VWindowItem",directives:{Touch:gt},props:tt(),emits:{"group:selected":e=>!0},setup(e,l){let{slots:i}=l;const o=vt(yt),u=Yt(e,Bt),{isBooted:f}=rl();if(!o||!u)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const a=K(!1),b=h(()=>f.value&&(o.isReversed.value?e.reverseTransition!==!1:e.transition!==!1));function d(){!a.value||!o||(a.value=!1,o.transitionCount.value>0&&(o.transitionCount.value-=1,o.transitionCount.value===0&&(o.transitionHeight.value=void 0)))}function g(){var v;a.value||!o||(a.value=!0,o.transitionCount.value===0&&(o.transitionHeight.value=Q((v=o.rootRef.value)==null?void 0:v.clientHeight)),o.transitionCount.value+=1)}function x(){d()}function B(v){a.value&&Gt(()=>{!b.value||!a.value||!o||(o.transitionHeight.value=Q(v.clientHeight))})}const m=h(()=>{const v=o.isReversed.value?e.reverseTransition:e.transition;return b.value?{name:typeof v!="string"?o.transition.value:v,onBeforeEnter:g,onAfterEnter:d,onEnterCancelled:x,onBeforeLeave:g,onAfterLeave:d,onLeaveCancelled:x,onEnter:B}:!1}),{hasContent:c}=Xt(e,u.isSelected);return W(()=>s(Mt,{transition:m.value,disabled:!f.value},{default:()=>{var v;return[bt(s("div",{class:["v-window-item",u.selectedClass.value,e.class],style:e.style},[c.value&&((v=i.default)==null?void 0:v.call(i))]),[[Ut,u.isSelected.value]])]}})),{groupItem:u}}}),pl=z({...Ot(),...tt()},"VCarouselItem"),hl=E()({name:"VCarouselItem",inheritAttrs:!1,props:pl(),setup(e,l){let{slots:i,attrs:o}=l;W(()=>{const u=C.filterProps(e),f=J.filterProps(e);return s(J,T({class:["v-carousel-item",e.class]},f),{default:()=>[s(C,T(o,u),i)]})})}}),lt=Symbol.for("vuetify:v-tabs"),xl=z({fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...ct(Ht({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},"VTab"),D=E()({name:"VTab",props:xl(),setup(e,l){let{slots:i,attrs:o}=l;const{textColorClasses:u,textColorStyles:f}=jt(e,"sliderColor"),a=M(),b=M(),d=h(()=>e.direction==="horizontal"),g=h(()=>{var B,m;return((m=(B=a.value)==null?void 0:B.group)==null?void 0:m.isSelected.value)??!1});function x(B){var c,v;let{value:m}=B;if(m){const w=(v=(c=a.value)==null?void 0:c.$el.parentElement)==null?void 0:v.querySelector(".v-tab--selected .v-tab__slider"),Y=b.value;if(!w||!Y)return;const H=getComputedStyle(w).color,P=w.getBoundingClientRect(),I=Y.getBoundingClientRect(),y=d.value?"x":"y",p=d.value?"X":"Y",V=d.value?"right":"bottom",A=d.value?"width":"height",xt=P[y],wt=I[y],X=xt>wt?P[V]-I[V]:P[y]-I[y],Vt=Math.sign(X)>0?d.value?"right":"bottom":Math.sign(X)<0?d.value?"left":"top":"center",Ct=(Math.abs(X)+(Math.sign(X)<0?P[A]:I[A]))/Math.max(P[A],I[A])||0,St=P[A]/I[A]||0,et=1.5;Qt(Y,{backgroundColor:[H,"currentcolor"],transform:[`translate${p}(${X}px) scale${p}(${St})`,`translate${p}(${X/et}px) scale${p}(${(Ct-1)/et+1})`,"none"],transformOrigin:Array(3).fill(Vt)},{duration:225,easing:Nt})}}return W(()=>{const B=G.filterProps(e);return s(G,T({symbol:lt,ref:a,class:["v-tab",e.class],style:e.style,tabindex:g.value?0:-1,role:"tab","aria-selected":String(g.value),active:!1},B,o,{block:e.fixed,maxWidth:e.fixed?300:void 0,"onGroup:selected":x}),{...i,default:()=>{var m;return s(O,null,[((m=i.default)==null?void 0:m.call(i))??e.text,!e.hideSlider&&s("div",{ref:b,class:["v-tab__slider",u.value],style:f.value},null)])}})}),Ft({},a)}}),wl=z({...ct(_(),["continuous","nextIcon","prevIcon","showArrows","touch","mandatory"])},"VTabsWindow"),pt=E()({name:"VTabsWindow",props:wl(),emits:{"update:modelValue":e=>!0},setup(e,l){let{slots:i}=l;const o=vt(lt,null),u=Z(e,"modelValue"),f=h({get(){var a;return u.value!=null||!o?u.value:(a=o.items.value.find(b=>o.selected.value.includes(b.id)))==null?void 0:a.value},set(a){u.value=a}});return W(()=>{const a=N.filterProps(e);return s(N,T({_as:"VTabsWindow"},a,{modelValue:f.value,"onUpdate:modelValue":b=>f.value=b,class:["v-tabs-window",e.class],style:e.style,mandatory:!1,touch:!1}),i)}),{}}}),Vl=z({...tt()},"VTabsWindowItem"),R=E()({name:"VTabsWindowItem",props:Vl(),setup(e,l){let{slots:i}=l;return W(()=>{const o=J.filterProps(e);return s(J,T({_as:"VTabsWindowItem"},o,{class:["v-tabs-window-item",e.class],style:e.style}),i)}),{}}});function Cl(e){return e?e.map(l=>tl(l)?l:{text:l,value:l}):[]}const Sl=z({alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...al({mandatory:"force",selectedClass:"v-tab-item--selected"}),...Jt(),...ft()},"VTabs"),kl=E()({name:"VTabs",props:Sl(),emits:{"update:modelValue":e=>!0},setup(e,l){let{attrs:i,slots:o}=l;const u=Z(e,"modelValue"),f=h(()=>Cl(e.items)),{densityClasses:a}=qt(e),{backgroundColorClasses:b,backgroundColorStyles:d}=Kt($(e,"bgColor")),{scopeId:g}=Zt();return _t({VTab:{color:$(e,"color"),direction:$(e,"direction"),stacked:$(e,"stacked"),fixed:$(e,"fixedTabs"),sliderColor:$(e,"sliderColor"),hideSlider:$(e,"hideSlider")}}),W(()=>{const x=at.filterProps(e),B=!!(o.window||e.items.length>0);return s(O,null,[s(at,T(x,{modelValue:u.value,"onUpdate:modelValue":m=>u.value=m,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},a.value,b.value,e.class],style:[{"--v-tabs-height":Q(e.height)},d.value,e.style],role:"tablist",symbol:lt},g,i),{default:()=>{var m;return[((m=o.default)==null?void 0:m.call(o))??f.value.map(c=>{var v;return((v=o.tab)==null?void 0:v.call(o,{item:c}))??s(D,T(c,{key:c.text,value:c.value}),{default:o[`tab.${c.value}`]?()=>{var w;return(w=o[`tab.${c.value}`])==null?void 0:w.call(o,{item:c})}:void 0})})]}}),B&&s(pt,T({modelValue:u.value,"onUpdate:modelValue":m=>u.value=m,key:"tabs-window"},g),{default:()=>{var m;return[f.value.map(c=>{var v;return((v=o.item)==null?void 0:v.call(o,{item:c}))??s(R,{value:c.value},{default:()=>{var w;return(w=o[`item.${c.value}`])==null?void 0:w.call(o,{item:c})}})}),(m=o.window)==null?void 0:m.call(o)]}})])}),{}}}),Tl=""+new URL("airsoft_gun-B64cUwse.gif",import.meta.url).href,Al=""+new URL("airsoft-gun-gas-BmeaC6eg.gif",import.meta.url).href,Pl=""+new URL("airsoft_vest-DyoabCrU.gif",import.meta.url).href,Il=""+new URL("airsoft_glasses-BPd7MsoY.gif",import.meta.url).href,Dl=""+new URL("pngegg-DRMI5zLB.png",import.meta.url).href,Rl=""+new URL("airsoft_backpack-Bflbgv3w.png",import.meta.url).href,zl=""+new URL("airsoft_helmet-D12Cen_I.png",import.meta.url).href,El=""+new URL("airsoft_helmet2-BOvJs__Y.png",import.meta.url).href,Wl=""+new URL("sniper-DO2odMRD.jpg",import.meta.url).href,$l=""+new URL("soldier2-BfZb8gZb.jpg",import.meta.url).href,ht={data(){return{colors:["indigo","warning","pink darken-2","red lighten-1","deep-purple accent-4"],items:[{src:"https://bookmestatic.net.nz/bookme-product-images/products/71967/71967_image1_fzQYhXxiaQ_AJGR_20240128_140907.jpg",text:"Survive the Game, Conquer the Odds"},{src:"https://www.abbeysupply.com/res/Airsoft-tactics.jpg",text:"Only the Strongest Will Endure"},{src:"https://www.xtremeparkadventures.com/wp-content/uploads/2019/05/Airsoft-Fields-in-Raleigh.jpg",text:"Play Smart, Stay Alive"},{src:"https://images.squarespace-cdn.com/content/v1/5ac9360aaa49a16d3b6ef162/1704673733296-7BXYQSGFXY5NJ4X8V93G/Untitled+design+%285%29.png?format=2500w",text:"Outlast. Outplay. Outlive"}],tab:"option-1"}}},Ll={id:"main-content"},Yl={class:"d-flex flex-row w-100"},Xl={style:{clear:"both"}},Ul={id:"main-content",style:{"margin-top":"750px"}},Ml={style:{"text-align":"center"}},Gl={style:{"text-align":"center"}};function Ol(e,l,i,o,u,f){const a=st("v-text"),b=st("v-subtitle");return q(),ot(O,null,[s(Bl,{id:"ava","show-arrows":!1,"hide-delimiters":"",cycle:"","hide-delimiter-background":"",style:{width:"100vw",height:"1020px"}},{default:r(()=>[(q(!0),ot(O,null,el(u.items,(d,g)=>(q(),sl(hl,{key:g,src:d.src,"reverse-transition":"scale-transition",transition:"scale-transition"},{default:r(()=>[s(a,{class:"my-animation custom-text",style:{"font-size":"5rem",position:"relative",top:"-30px",left:"20px"}},{default:r(()=>[n(ol(d.text),1)]),_:2},1024)]),_:2},1032,["src"]))),128))]),_:1}),t("div",Ll,[s(ul,{style:{padding:"0px",margin:"0px",position:"absolute",top:"150px"}},{default:r(()=>[s(L,null,{default:r(()=>[s(S,{cols:"12",style:{}})]),_:1}),s(L,null,{default:r(()=>[s(S,{cols:"12",class:"d-flex justify-center"},{default:r(()=>[s(a,{class:"custom-text",style:{color:"#2D4B2A"}},{default:r(()=>l[2]||(l[2]=[n("詳細資訊 Details")])),_:1})]),_:1})]),_:1}),s(L,null,{default:r(()=>[s(S,{cols:"12",md:"12",style:{"margin-left":"7rem"}},{default:r(()=>[s(k,{style:{width:"93%"}},{default:r(()=>[s(il,{color:"primary",class:"d-flex pt-5"},{default:r(()=>[s(nl),t("div",Yl,[s(kl,{modelValue:u.tab,"onUpdate:modelValue":l[0]||(l[0]=d=>u.tab=d),direction:"horizontal",class:"d-flex bg-primary justify-space-around full-width px-5",color:"white",dark:"",flat:"",style:{border:"1px solid #2D4B2A"}},{default:r(()=>[s(D,{text:"氣槍",value:"option-1",class:"tab-item custom-text",style:{"font-size":"20px"}}),s(D,{text:"護具",value:"option-2",class:"tab-item custom-text",style:{"font-size":"20px"}}),s(D,{text:"背包",value:"option-3",class:"tab-item custom-text",style:{"font-size":"20px"}}),s(D,{text:"頭盔",value:"option-4",class:"tab-item custom-text",style:{"font-size":"20px"}}),s(D,{text:"子彈",value:"option-5",class:"tab-item custom-text",style:{"font-size":"20px"}}),s(D,{text:"其他",value:"option-6",class:"tab-item custom-text",style:{"font-size":"20px"}}),s(D,{text:"租借",value:"option-7",class:"tab-item custom-text",style:{"font-size":"20px"}})]),_:1},8,["modelValue"])])]),_:1}),s(pt,{modelValue:u.tab,"onUpdate:modelValue":l[1]||(l[1]=d=>u.tab=d),style:{border:"20px solid #2D4B2A"}},{default:r(()=>[s(R,{value:"option-1"},{default:r(()=>[s(k,{flat:"",class:"pa-6"},{default:r(()=>[s(U,{style:{"text-align":"center"}},{default:r(()=>l[3]||(l[3]=[t("h3",{style:{"font-style":"italic",color:"#2D4B2A"}}," 氣槍是透過壓縮氣體發射BB彈等彈丸，模擬真實武器射擊，適用於生存遊戲、競技射擊等活動，安全且低傷害。 ",-1),t("br",null,null,-1)])),_:1}),s(L,null,{default:r(()=>[s(S,{cols:"6",class:"px-10",style:{"background-color":"#D1C18B"}},{default:r(()=>l[4]||(l[4]=[t("h2",null,"氣槍的特點：",-1),t("br",null,null,-1),t("p",{class:"mb-10",style:{"line-height":"40px"}},[n(" 動力系統：氣槍一般使用壓縮空氣、CO2或氮氣等氣體作為推動力。CO2氣瓶是最常見的選擇，因為它能提供穩定且持久的動力，讓氣槍的射擊體驗更加真實。"),t("br"),n(" 射擊方式：氣槍的射擊方式可以分為單發、連發或半自動。根據型號的不同，玩家可以選擇合適的射擊模式來進行遊戲。"),t("br"),n(" 彈藥：氣槍通常使用BB彈作為彈藥，BB彈是小型塑膠球，直徑大約為6mm。這種彈藥的優點是便宜、輕便且較為安全。"),t("br"),n(" 精度與射程：雖然氣槍的射程通常不及真實武器，但高品質的氣槍仍能提供相對精確的射擊。射程通常在30至50米之間，但也有一些高端型號能夠達到更遠的射程。"),t("br"),n(" 遊戲模式：氣槍常用於生存遊戲（例如Airsoft或Paintball），這些遊戲通常包括策略、合作與模擬戰鬥，玩家需要利用氣槍來進行對抗、執行任務或佔領區域。"),t("br"),n(" 安全性：雖然氣槍的彈丸速度較低，比起真實武器安全許多，但仍需要佩戴防護裝備，特別是眼睛和臉部防護，以避免受傷。"),t("br")],-1)])),_:1}),s(S,{cols:"6"},{default:r(()=>[s(C,{src:Tl,style:{width:"100%",height:"100%","object-fit":"cover"}})]),_:1})]),_:1}),s(L,null,{default:r(()=>[s(S,{cols:"6",class:"px-10"},{default:r(()=>[s(C,{src:Al,style:{width:"100%",height:"100%","object-fit":"cover"}})]),_:1}),s(S,{cols:"6",style:{"background-color":"#D1C18B"}},{default:r(()=>l[5]||(l[5]=[t("h2",null,"氣槍的應用：",-1),t("br",null,null,-1),t("p",{class:"mb-10",style:{"line-height":"40px"}},[n(" 生存遊戲（Airsoft）：氣槍在生存遊戲中是一個重要的道具，玩家通過這些氣槍模擬戰鬥，進行團隊合作或對抗。這些遊戲通常有不同的任務目標和規則，並且注重策略和戰術。"),t("br"),n(" 訓練工具：氣槍也可用作槍械訓練工具，幫助玩家練習瞄準和射擊技巧。它相對便宜且無需使用實彈，因此是一種較為安全的訓練選擇。"),t("br")],-1)])),_:1})]),_:1})]),_:1})]),_:1}),s(R,{value:"option-2"},{default:r(()=>[s(k,{flat:"",class:"pa-6"},{default:r(()=>[s(U,null,{default:r(()=>l[6]||(l[6]=[t("h3",{style:{"font-style":"italic",color:"#2D4B2A"}}," 生存遊戲中的護具增加角色生存機會，減少傷害風險。護具種類、效果和材質依遊戲設定不同，但有共同特徵，以下是常見類型： ",-1),t("br",null,null,-1)])),_:1}),t("div",null,[s(C,{width:500,height:"500",src:Pl,class:"float-end",style:{"margin-right":"200px"}}),l[7]||(l[7]=t("h2",null,"防彈背心/防護衣：",-1)),l[8]||(l[8]=t("br",null,null,-1)),l[9]||(l[9]=t("p",{class:"mb-10",style:{"line-height":"40px"}},[n(" 這類護具主要用來保護上半身，尤其是胸部和腹部，減少來自槍械或其他武器的傷害。"),t("br"),n(" 在一些遊戲中，防彈背心可能會提供額外的防護層數，增加承受多次攻擊的能力。"),t("br")],-1)),l[10]||(l[10]=t("h2",null,"護腿/護膝：",-1)),l[11]||(l[11]=t("br",null,null,-1)),l[12]||(l[12]=t("p",{class:"mb-10",style:{"line-height":"40px"}},[n(" 護腿或護膝主要用來保護下半身，特別是大腿和膝蓋部位，對於減少跌倒或被擊中後的傷害有一定效果。"),t("br"),n(" 一些遊戲中，護腿還能增加角色的移動速度或抗擊打能力。"),t("br")],-1)),l[13]||(l[13]=t("h2",null,"護手/手套：",-1)),l[14]||(l[14]=t("br",null,null,-1)),l[15]||(l[15]=t("p",{class:"mb-10",style:{"line-height":"40px"}},[n(" 護手或手套主要用來保護手部，避免在近戰攻擊中受到傷害。"),t("br"),n(" 在某些遊戲中，護手還可能提高角色的攀爬、挖掘或其他操作能力。"),t("br")],-1))]),t("div",Xl,[s(C,{width:700,cover:"",src:Il,class:"float-start mr-10"}),l[16]||(l[16]=t("h2",null,"護目鏡/面罩：",-1)),l[17]||(l[17]=t("br",null,null,-1)),l[18]||(l[18]=t("p",{class:"mb-10",style:{"line-height":"40px"}},[n(" 這些裝備用來保護角色的眼睛和面部，避免受到煙霧、沙塵、化學物質或敵人攻擊的傷害。"),t("br"),n(" 在一些遊戲中，護目鏡還能提供夜視或熱感應視覺等特殊功能。"),t("br")],-1)),l[19]||(l[19]=t("h2",null,"護甲：",-1)),l[20]||(l[20]=t("br",null,null,-1)),l[21]||(l[21]=t("p",{class:"mb-10",style:{"line-height":"40px"}},[n(" 護甲是全面性的防護裝備，通常由金屬、合成材料或其他堅固材質製成，能有效減少來自各種武器（如刀劍、槍械等）的傷害。"),t("br"),n(" 護甲的防禦能力可能會隨著材質的不同而有所差異，例如鋼鐵護甲比皮革護甲提供更高的防禦力。"),t("br")],-1)),l[22]||(l[22]=t("h2",null,"盾牌：",-1)),l[23]||(l[23]=t("br",null,null,-1)),l[24]||(l[24]=t("p",{class:"mb-10",style:{"line-height":"40px"}},[n(" 在一些生存遊戲中，盾牌是可攜帶的防禦裝備，可以用來擋住敵人的攻擊，減少傷害。"),t("br"),n(" 盾牌通常需要玩家手持並在戰鬥中進行操作。"),t("br")],-1))])]),_:1})]),_:1}),s(R,{value:"option-3"},{default:r(()=>[s(k,{flat:"",class:"pa-6"},{default:r(()=>[s(U,null,{default:r(()=>l[25]||(l[25]=[t("h3",{style:{"font-style":"italic",color:"#2D4B2A"}}," 生存遊戲中的背包用來存儲資源、工具、武器、藥品等物品，設計和功能根據遊戲不同而異，主要集中於物品管理和空間規劃。 ",-1),t("br",null,null,-1)])),_:1}),s(C,{width:600,height:"700",src:Dl,class:"float-end mr-10"}),l[26]||(l[26]=t("h2",null,"背包容量與格子系統",-1)),l[27]||(l[27]=t("br",null,null,-1)),l[28]||(l[28]=t("p",{class:"mb-10",style:{"line-height":"40px"}}," 大多數生存遊戲中的背包會有固定的容量，通常以格子來表示。例如，一個背包可能有 10x5 格（50 格）來放置物品。每個物品佔據一定的格子，且有些物品可能會佔用多格（例如大箱子或武器）。隨著遊戲進展，玩家可能會解鎖更大的背包或增加更多的格子，從而存儲更多的物品。 ",-1)),l[29]||(l[29]=t("h2",null,"背包分類",-1)),l[30]||(l[30]=t("br",null,null,-1)),l[31]||(l[31]=t("p",{class:"mb-10",style:{"line-height":"40px"}},[n(" 為了更方便管理物品，許多生存遊戲會提供物品分類功能，通常會根據物品的種類來自動或手動分類。例如： "),t("br"),n(" 1. 食物類：如罐頭、草藥、肉類等。"),t("br"),n(" 2. 工具類：如斧頭、鏟子、火把等。"),t("br"),n(" 3. 武器類：如槍、刀、弓箭等。"),t("br"),n(" 4. 醫療類：如急救包、藥品等。"),t("br"),n(" 5. 建材類：如木材、石塊、鐵礦等。"),t("br"),n(" 這些分類能幫助玩家更快捷地找到需要的物品，減少時間浪費。 ")],-1)),l[32]||(l[32]=t("h2",null,"背包的重量與耐力",-1)),l[33]||(l[33]=t("br",null,null,-1)),l[34]||(l[34]=t("p",{class:"mb-10",style:{"line-height":"40px"}}," 有些遊戲會加入背包的重量系統。每個物品會有不同的重量，當玩家的背包超過一定重量時，可能會影響角色的移動速度或耐力。在這種情況下，玩家需要考慮攜帶哪些物品，避免背包過重導致移動不便或體力下降。 ",-1)),s(C,{width:750,height:"800",src:Rl,class:"float-start mr-10"}),l[35]||(l[35]=t("h2",null,"背包管理與物品整理",-1)),l[36]||(l[36]=t("br",null,null,-1)),l[37]||(l[37]=t("p",{class:"mb-10",style:{"line-height":"40px"}}," 隨著遊戲進程，玩家可能會遇到需要大量管理物品的情況。這時，玩家需要定期整理背包，丟棄不需要的物品、分配物品的存放位置或在背包中進行交換。這樣的物品管理系統會讓遊戲變得更加挑戰性，要求玩家不僅要收集資源，還要合理地規劃和整理物品。 ",-1)),l[38]||(l[38]=t("h2",null,"背包升級與擴展",-1)),l[39]||(l[39]=t("br",null,null,-1)),l[40]||(l[40]=t("p",{class:"mb-10",style:{"line-height":"40px"}}," 很多生存遊戲會讓玩家通過升級或解鎖新的背包來擴展儲物空間。這些背包升級可能需要玩家製作特定的材料或達到某些遊戲成就。例如，在某些遊戲中，玩家可能需要製作一個更大的背包，才能攜帶更多資源。背包的升級過程可能伴隨著遊戲的探索和進步，提供更多的策略選擇。 ",-1)),l[41]||(l[41]=t("h2",null,"背包與裝備切換",-1)),l[42]||(l[42]=t("br",null,null,-1)),l[43]||(l[43]=t("p",{class:"mb-10",style:{"line-height":"40px"}}," 在某些生存遊戲中，背包不僅僅是物品存儲的地方，還可能涉及裝備管理。例如，玩家可以在背包中選擇攜帶的武器、工具、護具等裝備，並在需要時迅速切換。這樣的系統可以讓玩家根據當前情況選擇最合適的裝備，提高生存機會。 ",-1)),l[44]||(l[44]=t("h2",null,"背包與安全性",-1)),l[45]||(l[45]=t("br",null,null,-1)),l[46]||(l[46]=t("p",{class:"mb-10",style:{"line-height":"40px"}}," 某些遊戲中的背包可能與玩家的生存或安全性息息相關。例如，玩家可能需要選擇一個防水、耐磨的背包來應對極端的環境，或者背包中可能需要特定的物品來對抗某些敵人或環境挑戰。 ",-1)),l[47]||(l[47]=t("h2",null,"背包損壞或丟失",-1)),l[48]||(l[48]=t("br",null,null,-1)),l[49]||(l[49]=t("p",{class:"mb-10",style:{"line-height":"40px"}}," 在某些遊戲中，背包也有可能遭遇損壞或丟失。例如，玩家可能會因為某些原因（如跌落、遭到敵人襲擊或倉庫被入侵）而失去部分物品。這樣的設計增加了遊戲的風險和挑戰，要求玩家更加小心謹慎地管理自己的背包。 ",-1))]),_:1})]),_:1}),s(R,{value:"option-4"},{default:r(()=>[s(k,{flat:"",class:"pa-6"},{default:r(()=>[s(U,null,{default:r(()=>l[50]||(l[50]=[t("h3",{style:{"font-style":"italic",color:"#2D4B2A"}}," 在生存遊戲中，頭盔是常見的護具之一，主要用來保護角色的頭部，減少來自敵人攻擊或環境危險造成的傷害。頭盔的設計、效果以及功能根據遊戲的不同會有所不同，以下是有關頭盔的一些詳細介紹： ",-1),t("br",null,null,-1)])),_:1}),s(C,{width:700,height:"700",src:zl,class:"float-end ml-10"}),l[51]||(l[51]=t("h2",null,"頭盔的基本功能",-1)),l[52]||(l[52]=t("br",null,null,-1)),l[53]||(l[53]=t("p",{class:"mb-10",style:{"line-height":"40px"}}," 頭盔的基本功能是提供防護，尤其是防止來自槍擊、近戰武器、爆炸或其他環境危險對頭部的傷害。在許多生存遊戲中，頭部是受傷最致命的部位，因此擁有一個堅固的頭盔對提高生存機會至關重要。 ",-1)),l[54]||(l[54]=t("h2",null,"不同類型的頭盔",-1)),l[55]||(l[55]=t("br",null,null,-1)),l[56]||(l[56]=t("p",{class:"mb-10",style:{"line-height":"40px"}},[n(" 根據遊戲的不同，頭盔會有不同的類型與材質，每種頭盔提供的保護和效果也會不同： "),t("br"),n(" 1. 布料/皮革頭盔： 這類頭盔通常是遊戲初期可以獲得的護具，防護效果較弱，但重量輕，適合遊戲初期使用。"),t("br"),n(" 2. 鋼鐵/金屬頭盔： 這些頭盔通常提供更高的防護能力，能有效抵擋來自敵人武器（如槍械、弓箭等）的傷害。金屬頭盔在遊戲中往往需要更高的製作成本或更長的時間來解鎖。"),t("br"),n(" 3. 戰術頭盔： 戰術頭盔通常是專為軍事或極端環境設計，能有效保護頭部並提供額外的功能，如夜視、瞄準輔助等。在一些遊戲中，這類頭盔可能還附帶防爆設計或能承受更強烈的衝擊。"),t("br"),n(" 4. 防彈頭盔： 防彈頭盔專門用來對抗槍擊或爆炸衝擊，通常比普通的頭盔更為堅固，適合面對高危險的敵人或環境。"),t("br")],-1)),l[57]||(l[57]=t("h2",null,"頭盔的額外效果",-1)),l[58]||(l[58]=t("br",null,null,-1)),l[59]||(l[59]=t("p",{class:"mb-10",style:{"line-height":"40px"}},[n(" 在某些生存遊戲中，頭盔除了提供物理防護外，還可能提供其他特殊功能： "),t("br"),n(" 1. 增加視野範圍：例如，一些高科技頭盔會提供增強視野的功能（例如夜視模式、紅外線視覺等），讓玩家能在黑暗或隱蔽的環境中更容易發現敵人或物品。 "),t("br"),n(" 2. 提升精準度：有些頭盔會與其他裝備（如瞄準鏡）配合使用，提供更高的射擊精準度或增加瞄準輔助。 "),t("br"),n(" 3. 抗衝擊與防爆：某些頭盔會加強抗衝擊性，減少來自爆炸物的傷害，或降低環境危險（如化學氣體、沙塵等）的影響。 "),t("br")],-1)),s(C,{width:750,height:"700",src:El,class:"float-start mr-10"}),l[60]||(l[60]=t("h2",null,"耐久度與維修",-1)),l[61]||(l[61]=t("br",null,null,-1)),l[62]||(l[62]=t("p",{class:"mb-10",style:{"line-height":"40px"}}," 許多生存遊戲中，頭盔和其他護具一樣會有耐久度，隨著時間的推移或被攻擊時，頭盔會受到損壞。玩家需要定期檢查頭盔的狀況，並在必要時進行修理或更換。這會增加遊戲的挑戰性和策略性，玩家需要考慮如何管理裝備的耐用性。 ",-1)),l[63]||(l[63]=t("h2",null,"頭盔與移動速度",-1)),l[64]||(l[64]=t("br",null,null,-1)),l[65]||(l[65]=t("p",{class:"mb-10",style:{"line-height":"40px"}}," 在某些遊戲中，頭盔的類型可能會影響角色的移動速度。較重的金屬或防彈頭盔可能會使玩家的移動速度變慢，而輕便的頭盔則不會對移動速度造成太大影響。這意味著，玩家在選擇頭盔時需要考慮到防護與機動性之間的平衡。 ",-1)),l[66]||(l[66]=t("h2",null,"頭盔的搭配與選擇",-1)),l[67]||(l[67]=t("br",null,null,-1)),l[68]||(l[68]=t("p",{class:"mb-10",style:{"line-height":"40px"}}," 在生存遊戲中，選擇合適的頭盔往往取決於玩家的需求和遊戲的戰鬥方式。一般來說，玩家會根據所面對的敵人或環境選擇不同類型的頭盔。例如，在高風險的戰鬥中，防彈頭盔可能是必備的裝備，而在資源匱乏的情況下，輕便的頭盔可能是更實用的選擇。 ",-1))]),_:1})]),_:1}),s(R,{value:"option-5"},{default:r(()=>[s(k,{flat:""},{default:r(()=>[s(j,{class:"scrollable-card"},{default:r(()=>l[69]||(l[69]=[t("p",{style:{"font-size":"larger","font-style":"italic",color:"#2D4B2A"}}," 在生存遊戲中，彈藥主要是指那些由塑膠製成的小球（BB彈），通常是圓形的，並且可以通過不同的槍枝進行發射。除了 BB彈，還有一種被稱為 軟彈（或稱為 泡沫彈）的彈藥，這種彈藥的主要特點是外型和材質的不同，通常會由 泡沫 或 柔軟的材料 製成。下面是一些關於 生存遊戲 彈藥的基本介紹： ",-1),t("br",null,null,-1),t("h2",null,"軟彈在生存遊戲中的使用",-1),t("p",null,[n(" 軟彈 常見於 氣動彈射武器 或 彈簧彈射武器，並且主要是以 玩具 或 娛樂性質 為主的武器系統。雖然它們在某些生存遊戲中並不常見，但仍然有一些遊戲使用這類彈藥，特別是在 低強度射擊 或是 家庭娛樂 的情境下。"),t("br"),n(" 相比傳統的BB彈，軟彈在射擊威力和精度方面有所不足，但它提供了更多的安全性和娛樂性，尤其適合兒童或對射擊強度有較低要求的玩家。 "),t("br")],-1),t("h2",null,"BB彈的基本特徵",-1),t("p",null,[n(" 1. BB彈：這是 Airsoft 遊戲中最常見的彈藥，通常由塑膠製成，直徑為 6mm 或 8mm，大部分的 Airsoft 武器都使用6mm的BB彈。"),t("br"),n(" 2. 6mm BB彈：最常見的大小，適用於大多數的 Airsoft 武器。"),t("br"),n(" 3. 8mm BB彈：較少見，通常用於某些大型的 Airsoft 槍枝，這些彈藥比較重，飛行穩定性較好，但因為較大，因此其速度通常較慢。"),t("br")],-1),t("h2",null,"BB彈的材質",-1),t("p",null,[n(" 1. 標準塑膠BB彈：最常見的BB彈，使用普通的塑膠材質，通常是白色或黑色。這些彈藥是最便宜且最常見的選擇。"),t("br"),n(" 2. 高性能BB彈：這些BB彈可能會使用更高品質的塑料或合成材料，對於某些高精度的 Airsoft 玩家來說，這些BB彈的飛行穩定性和精度更好。常見品牌如 G&G 或 MadBull 等會製造這些較為精緻的BB彈。"),t("br"),n(" 3. 生物降解BB彈：為了保護環境，越來越多的 Airsoft 玩家選擇使用可降解的BB彈，這些BB彈在暴露於自然環境中時會分解，不會對環境造成污染。"),t("br")],-1),t("h2",null,"BB彈的重量",-1),t("p",null,[n(" BB彈的重量會影響其飛行軌跡和射程，較重的BB彈可以更穩定地飛行，並且不容易受風影響，但同時會降低射擊速度。常見的重量有： "),t("br"),n(" 1. 0.12g：這種輕型BB彈常用於入門級槍械，適合短距離射擊，但精度較低。 "),t("br"),n(" 2. 0.20g：這是最常見的中等重量BB彈，適用於大多數中低功率的 Airsoft 槍支，精度與射程比較平衡。 "),t("br"),n(" 3. 0.25g、0.28g、0.30g：這些較重的BB彈主要用於高性能槍支，尤其是對射程和精度有較高要求的玩家。 "),t("br"),n(" 4. 0.40g及以上：這些超重BB彈適用於高端的狙擊槍或高精度的射擊需求，通常用於長距離射擊，飛行穩定性非常高。 "),t("br")],-1),t("h2",null,"BB彈的顏色",-1),t("p",null,[n(" 1. 白色：最常見的顏色，視覺上較為明顯，便於觀察射擊軌跡，常見於大多數 Airsoft 遊戲中。 "),t("br"),n(" 2. 黑色：一些高端的BB彈，通常用於需要更高隱蔽性的環境中，這樣不容易被對方發現。黑色BB彈通常會在黑暗的環境中使用較多。 "),t("br"),n(" 3. 透明或其他顏色：也有一些特殊顏色的BB彈（例如藍色、紅色等），主要是為了區分品牌或特定用途，這些顏色的BB彈並不影響性能。"),t("br")],-1),t("h2",null,"BB彈的使用與選擇",-1),t("p",null,[n(" 在 Airsoft 遊戲中，選擇合適的BB彈對於射擊的精度、射程和遊戲表現有很大的影響。以下是一些選擇BB彈時需要注意的因素： "),t("br"),n(" 1. 槍械類型：不同的 Airsoft 槍支（例如 電動槍、氣動槍、彈簧槍）對BB彈的需求會有所不同。一般來說，電動槍和氣槍對BB彈的要求會更高，需要選擇較高品質的BB彈來保證穩定性和精度。 "),t("br"),n(" 2. 射擊距離與精度：若你偏好遠距離射擊，選擇較重的BB彈會有助於提高射程和精度。而如果是在近距離的激烈戰鬥中，輕型的BB彈可能更合適，因為它們射速更快。 "),t("br"),n(" 3. 遊戲環境：在室內的狹小空間或高密度區域，通常會選擇較輕的BB彈，以便快速射擊；在戶外較開闊的場地，則會使用較重的BB彈來應對風速等環境因素的影響。 "),t("br")],-1),t("h2",null,"BB彈的保養與存儲",-1),t("p",null,[n(" 1. 存儲：BB彈應保存在乾燥、陰涼的地方，避免潮濕或高溫，因為這樣可能會影響BB彈的品質或導致其變形。"),t("br"),n(" 2. 避免劣質BB彈：劣質的BB彈可能會有不規則的形狀或瑕疵，這會影響槍支的性能，甚至可能導致槍械故障。高品質的BB彈會更加平滑、圓形，從而提高射擊精度和穩定性。"),t("br")],-1),t("h2",null,"一些常見的BB彈品牌",-1),t("p",{class:"mb-10"}," G&G、MadBull、KWA、ASG、Elite Force 等品牌生產高品質的BB彈，這些品牌的BB彈在精度、穩定性和耐用性上都非常優秀，受到許多 Airsoft 玩家推崇。 ",-1)])),_:1})]),_:1})]),_:1}),s(R,{value:"option-6"},{default:r(()=>[s(k,{flat:""},{default:r(()=>[s(j,{class:"scrollable-card"},{default:r(()=>l[70]||(l[70]=[t("p",{style:{"font-size":"larger","font-style":"italic",color:"#2D4B2A"}}," 常見的額外裝備和物品 ",-1),t("br",null,null,-1),t("h2",null,"戰術服與衣物",-1),t("p",null,[n(" 1. 戰術服：這些衣物通常具有多口袋設計，用於攜帶額外的彈藥、工具和其他裝備。戰術服的材質通常是耐用且透氣的，適合長時間穿著。"),t("br"),n(" 常見品牌如 5.11 Tactical 和 Condor。"),t("br"),n(" 2. 迷彩服：為了在遊戲中更好地融入環境，許多玩家會穿著迷彩服。迷彩服有多種樣式，根據不同的地圖環境（如森林、沙漠等）選擇合適的迷彩樣式。"),t("br")],-1),t("h2",null,"戰術腰帶與掛包",-1),t("p",null,[n(" 1. 戰術腰帶：用來固定各種裝備和配件，如彈匣、手槍、急救包等。這些腰帶有助於提高攜帶物品的方便性。"),t("br"),n(" 2. 掛包：掛包通常會用來掛在腰帶或背包上，方便快速取用彈匣、工具或其他必需品。這些包包一般是專為 Airsoft 目的設計，並且多數有不同的容量和分隔，便於收納和快速存取。"),t("br")],-1),t("h2",null,"彈匣與彈匣帶",-1),t("p",null,[n(" 1. 額外彈匣：在遊戲中，擁有足夠的彈匣非常重要，尤其是在長時間的對抗中。不同的槍支會有不同型號的彈匣，因此玩家通常會準備多個備用彈匣。"),t("br"),n(" 2. 彈匣帶：這是一種可掛在腰部的裝置，可以讓玩家方便快速地取用彈匣，這樣在激烈的戰鬥中能快速換彈。"),t("br")],-1),t("h2",null,"戰術手套",-1),t("p",null," 手套：手套能提供額外的手部保護，避免因為摔倒或與物品碰撞而受傷。此外，手套還可以幫助提高抓握力，讓玩家在射擊、操作武器或攀爬時更為舒適。 ",-1),t("h2",null,"戰術眼鏡",-1),t("p",null,[n(" 1. 防護眼鏡：保護眼睛是 Airsoft 中最重要的安全措施之一，專業的 Airsoft 防護眼鏡可以有效防止BB彈或碎片傷害眼睛。通常會有透氣設計，避免起霧。 "),t("br"),n(" 2. 面罩：如果玩家不想僅僅依賴眼鏡保護面部，可以選擇佩戴全臉面罩來防護面部及下巴，這樣能夠有效保護整個面部不受撞擊。 "),t("br")],-1),t("h2",null,"耳機與對講機",-1),t("p",null,[n(" 1. 對講機：在大型的 Airsoft 遊戲中，隊伍之間的協調至關重要，對講機能讓隊員之間保持聯繫，即使在聲音很大的環境下也能溝通。 "),t("br"),n(" 2. 耳機：有些對講機會搭配耳機，這樣玩家可以在不露出耳朵的情況下聽到指令或隊友的聲音，並減少外界噪音的干擾。 "),t("br")],-1),t("h2",null,"射擊瞄具",-1),t("p",null,[n(" 1. 紅點瞄準器：這些瞄準器能幫助玩家快速定位目標，提高射擊精度，特別是在快速移動的目標上。"),t("br"),n(" 2. 望遠鏡瞄準器：通常用於狙擊槍上，可以提供高倍率的放大，幫助玩家在遠距離精確擊中目標。"),t("br")],-1),t("h2",null,"急救包",-1),t("p",null,[n(" 1. 急救包：生存遊戲中可能會遇到輕微的傷害或擦傷，擁有一個急救包能夠迅速處理這些小問題，避免因傷害而影響遊戲進行。急救包通常包括創可貼、繃帶、消毒液等基本物品。"),t("br")],-1),t("h2",null,"水壺與飲水系統",-1),t("p",null,[n(" 1. 水壺：生存遊戲通常需要長時間活動，保持水分非常重要。攜帶水壺可以確保隨時能夠補充水分，避免脫水。"),t("br"),n(" 2. 水袋/水袋背包：有些玩家選擇使用水袋背包（如 Camelbak），這種裝備可以讓玩家在不需要停下來的情況下，通過管子隨時喝水，非常方便。"),t("br")],-1),t("h2",null,"手電筒與照明設備",-1),t("p",null,[n(" 1. 手電筒：在暗光環境或夜間遊戲中，手電筒可以提供必要的照明，幫助玩家識別周圍的環境。"),t("br"),n(" 2. 頭燈：頭燈是一種更方便的照明設備，玩家可以將其佩戴在頭上，這樣雙手就可以自由操作武器。"),t("br")],-1),t("h2",null,"煙霧彈與閃光彈",-1),t("p",null,[n(" 1. 煙霧彈：煙霧彈常用於遮掩自己或隊伍的行蹤，為進攻或撤退創造機會。在一些 Airsoft 遊戲中，煙霧彈是很重要的戰術工具。"),t("br"),n(" 2. 閃光彈：閃光彈可以用來迷惑敵人，造成視覺和聽覺的干擾，讓敵人短時間內無法清楚觀察到周圍情況。"),t("br")],-1),t("h2",null,"環境偽裝與隱蔽裝備",-1),t("p",{class:"mb-10"},[n(" 1. 迷彩網：用於隱蔽或遮掩，特別是在叢林或森林等地形中，迷彩網可以幫助玩家更好地與環境融合。"),t("br"),n(" 2. 假面具/偽裝服：有些玩家會選擇穿戴特殊的偽裝服，這有助於提高隱蔽性，避免被對手輕易發現。"),t("br")],-1)])),_:1})]),_:1})]),_:1}),s(R,{value:"option-7"},{default:r(()=>[s(k,{flat:""},{default:r(()=>[s(j,null,{default:r(()=>l[71]||(l[71]=[t("p",{style:{"font-size":"larger","font-style":"italic",color:"#2D4B2A"}}," 租借裝備和武器時應該注意的一些要點： ",-1),t("br",null,null,-1),t("h2",null,"武器的選擇",-1),t("p",null,[n(" 1. 槍枝類型：不同的遊戲場地會提供不同類型的氣槍，你需要根據自己的遊戲風格選擇合適的武器。"),t("br"),n(" 2. 射擊模式：某些武器可能提供不同的射擊模式（如全自動、半自動等）。確認所選武器的射擊模式是否符合遊戲需求，並能夠在緊張的對抗中發揮最大效能。"),t("br")],-1),t("h2",null,"裝備的合適性",-1),t("p",null,[n(" 大小與舒適度：確保你租借的裝備（如 戰術服、護具、背包 等）與你的身形相符，穿戴舒適。穿著不合適的裝備會影響你的靈活性，並可能影響遊戲表現。"),t("br"),n(" 1. 護具：確保護具（如胸甲、背甲、膝墊等）能夠提供良好的保護，並不妨礙活動。"),t("br"),n(" 2. 背包：確認背包的容量是否足夠，是否能輕鬆攜帶所需的彈匣、水壺和其他個人物品。"),t("br")],-1),t("h2",null,"配件與備品",-1),t("p",null,[n(" 1. 額外彈匣：在長時間的對抗中，額外的彈匣是非常重要的。確認租借的裝備是否有額外彈匣可以提供，並了解如何快速更換彈匣。"),t("br"),n(" 2. BB彈：某些地點可能會提供 BB彈，但在一些場合你可能需要自備。確保你所使用的BB彈與所租借的武器匹配，並注意重量和尺寸的選擇，避免使用不合規格的彈藥。"),t("br"),n(" 3. 急救包：在任何活動中，擁有一個急救包都非常重要。雖然大多數的生存遊戲場地會有急救設施，但帶上一些基本的急救物品，如創可貼、消毒液等，依然是明智的選擇。"),t("br")],-1),t("h2",null,"裝備租借條款",-1),t("p",null,[n(" 1. 租借協議：大部分場地都會有裝備租借協議，明確規範租借期間的責任、損壞賠償、設備使用等條款。在租借裝備前，詳細閱讀協議內容，確保自己了解條款，避免出現不必要的糾紛。"),t("br"),n(" 2. 裝備歸還：了解租借裝備的歸還時間和要求，確保按時將裝備歸還。如果遺失或損壞了裝備，場地通常會要求賠償相應費用。"),t("br")],-1),t("h2",null,"保養與使用",-1),t("p",null,[n(" 1. 清潔與保養：如果租借的裝備在使用過程中出現問題（如氣槍不發射或卡彈），應該及時向場地工作人員報告。有些場地會提供基本的設備保養服務，或者在租借前會進行檢查，保證裝備在最佳狀態。 "),t("br"),n(" 2. 使用技巧：對於一些比較高級的裝備，如狙擊槍或帶瞄準鏡的步槍，建議事先了解如何使用這些設備，避免在遊戲中因操作不當而影響表現。 "),t("br")],-1),t("h2",null,"場地規範",-1),t("p",null,[n(" 1. 遊戲規則：不同的生存遊戲場地會有不同的遊戲規則，確保你了解所有遊戲規則和限制，這樣才能有效地運用租借的裝備。某些場地可能對使用的武器有射程、功率等限制。 "),t("br"),n(" 2. 使用規範：某些場地可能會對裝備的外觀、顏色或裝飾有要求。請在租借前確認是否有特別的規定，以避免租借不合規的裝備。 "),t("br")],-1),t("h2",null,"天氣與環境",-1),t("p",{class:"mb-10"},[n(" 1. 考慮天氣因素：在選擇裝備時，還需要考慮當天的天氣狀況。如果是在室外進行生存遊戲，天氣因素（如高溫、寒冷、下雨等）會對裝備的選擇有所影響。確保裝備具有適應各種天氣條件的能力（例如防水性或透氣性）。"),t("br")],-1)])),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),s(C,{src:Wl,cover:"",style:{width:"100vw",height:"100vh",position:"absolute",top:"2650px"}}),t("div",Ul,[s(a,{class:"custom-text",style:{"text-align":"center",position:"absolute",top:"220px",width:"100vw",color:"#2D4B2A"}},{default:r(()=>l[72]||(l[72]=[n("關於我們 About Us")])),_:1}),s(k,{style:{width:"90vw",height:"1300px",position:"absolute",top:"300px",right:"90px","background-color":"transparent",border:"none","box-shadow":"none"}},{default:r(()=>[s(j,null,{default:r(()=>[s(L,null,{default:r(()=>[s(S,{cols:"6"},{default:r(()=>[s(C,{src:$l}),l[74]||(l[74]=n()),s(b,{style:{color:"red"}},{default:r(()=>l[73]||(l[73]=[n("圖片僅供參考")])),_:1})]),_:1}),s(S,{cols:"6"},{default:r(()=>l[75]||(l[75]=[t("h2",{style:{"font-size":"20px"}},"Survivor's Quest 是一款結合生存冒險和策略劇情的遊戲，為玩家提供既具挑戰性又充滿故事性的體驗。在這裡，你不僅僅要面對自然的極限考驗，還要解開一個個謎題、識破隱藏在隊友中的敵人，並在充滿陰謀和驚險的環境中生存下來。",-1),t("br",null,null,-1),t("br",null,null,-1),t("h2",null,"我們的故事",-1),t("br",null,null,-1),n(" 在 Survivor's Quest 中，你將被置身於一個神秘的荒野，這裡充滿了危險和謎題。你必須利用各種生存技能來建造庇護所、尋找食物，並與其他玩家合作或對抗。然而，這場生存遊戲不僅僅是物理上的挑戰——每一個玩家都有自己的秘密，每個選擇背後都有深刻的故事和陰謀。像《狼人殺》一樣，你可能發現自己與身邊的隊友並不完全是一條船上的人，而是背後藏有各自的目的和動機。"),t("br",null,null,-1),t("br",null,null,-1),t("h2",null,"我們的玩法",-1),t("br",null,null,-1),n(" 在這款遊戲中，你將面臨兩個主要挑戰："),t("br",null,null,-1),t("br",null,null,-1),n(" 1. 生存挑戰：玩家需要在充滿資源限制和險惡環境的世界中生存下來。建造庇護所、尋找食物和水源、抵禦野生動物的襲擊——這些基本的生存技能將是你成功的關鍵。"),t("br",null,null,-1),t("br",null,null,-1),n(" 2. 策略與劇情：隨著遊戲進程的推進，玩家會被捲入一場錯綜複雜的陰謀與謎題當中。誰是隊中的間諜？誰在隱藏自己的真實身份？每一個選擇都可能改變你的命運。類似《狼人殺》的機制，讓每個玩家都處於緊張的心理博弈中，你是否能揭露真相，還是成為別人的犧牲品？"),t("br",null,null,-1),t("br",null,null,-1),t("h2",null,"我們的願景",-1),t("br",null,null,-1),n(" 我們希望 Survivor's Quest 不僅是一款生存遊戲，更是一個充滿互動與策略的劇情冒險平台。在這裡，玩家的選擇會影響故事的走向，每一場遊戲都是一次全新的冒險和挑戰。我們的目標是創造一個讓玩家不斷思考、探索和反轉局勢的環境，讓每一個遊戲體驗都充滿未知與驚喜。"),t("br",null,null,-1),t("br",null,null,-1),n(" 在未來，我們將持續更新遊戲內容，引入更多的角色故事、隱藏任務和全新的生存模式，為玩家帶來更加豐富和深刻的遊戲體驗。"),t("br",null,null,-1),t("br",null,null,-1),n(" 加入我們 Survivor's Quest 是為那些喜愛挑戰自己、探索複雜人性和解開神秘故事的玩家準備的遊戲。無論是策略、合作還是心理博弈，這裡都有你尋找的冒險。快來參與我們的世界，揭開這場生存與陰謀交織的旅程吧！"),t("br",null,null,-1),t("br",null,null,-1)])),_:1})]),_:1})]),_:1})]),_:1})]),s(k,{style:{background:"gray",position:"absolute",top:"5300px",width:"100vw"}},{default:r(()=>[s(U,{style:{"text-align":"center","padding-top":"150px","padding-bottom":"50px","font-size":"40px"}},{default:r(()=>l[76]||(l[76]=[n("生存遊戲影片")])),_:1}),s(L,null,{default:r(()=>[s(S,{cols:"6",style:{"padding-left":"50px"}},{default:r(()=>[t("div",Ml,[s(it,{style:{"font-size":"50px"}},{default:r(()=>l[77]||(l[77]=[n("mdi-hand-pointing-down")])),_:1}),s(a,{class:"custom-text"},{default:r(()=>l[78]||(l[78]=[n("From Silo Entertainment")])),_:1})]),s(rt,{"aspect-ratio":"16/9"},{default:r(()=>l[79]||(l[79]=[t("iframe",{src:"https://www.youtube.com/embed/OhiD1QJYsik?autoplay=1&si=4VYwLETiXH8L6qjO",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"",width:"100%",height:"800"},null,-1)])),_:1})]),_:1}),s(S,{cols:"6",style:{"padding-right":"60px"}},{default:r(()=>[s(rt,{"aspect-ratio":"16/9"},{default:r(()=>l[80]||(l[80]=[t("iframe",{src:"https://www.youtube.com/embed/iNSYzWCzKgw?autoplay=1&si=OeMHp4TRCzAhNVwb",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"",width:"100%",height:"800"},null,-1)])),_:1}),t("div",Gl,[s(it,{style:{"font-size":"50px"}},{default:r(()=>l[81]||(l[81]=[n("mdi-hand-pointing-up")])),_:1}),s(a,{class:"custom-text"},{default:r(()=>l[82]||(l[82]=[n("From Airsoft Alfonse")])),_:1})])]),_:1})]),_:1})]),_:1})],64)}typeof nt=="function"&&nt(ht);const Zl=ll(ht,[["render",Ol]]);export{Zl as default};
