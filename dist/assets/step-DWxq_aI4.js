import{Gt as e,H as t,O as n,S as r,V as i,Wt as a,b as o,d as s,f as c,gt as l,h as u,i as d,it as f,m as p,p as m,wt as h,xt as g,y as _}from"./runtime-core.esm-bundler-B8bAGhjJ.js";import{Ct as v,D as y,Dt as b,Et as x,O as S,Ot as C,S as w,St as T,T as E,Tt as D,b as O,c as k,ft as A,g as j,ht as M,it as N,st as P,v as F,vt as I}from"./Card-D1y5zSiq.js";import{t as L}from"./locales-B_CaX8_V.js";import{i as R,t as z}from"./form-CEkxbhlj.js";import{i as B,t as V}from"./ConfigProvider-COVfTda6.js";import{E as H}from"./preload-helper-Do7N05H8.js";import{a as U,i as W}from"./browser-C5kocWKl.js";import{t as G}from"./flatten-Df659l8I.js";import{t as K}from"./Button-AFSoWKwt.js";import{t as q}from"./get-slot-6kXJmSMP.js";import{t as J}from"./Flex-BCHISYqb.js";import{h as Y,n as X,s as Z}from"./index-CUZUr-ur.js";var Q=v(`steps`,`
 width: 100%;
 display: flex;
`,[v(`step`,`
 position: relative;
 display: flex;
 flex: 1;
 `,[x(`disabled`,`cursor: not-allowed`),x(`clickable`,`
 cursor: pointer;
 `),T(`&:last-child`,[v(`step-splitor`,`display: none;`)])]),v(`step-splitor`,`
 background-color: var(--n-splitor-color);
 margin-top: calc(var(--n-step-header-font-size) / 2);
 height: 1px;
 flex: 1;
 align-self: flex-start;
 margin-left: 12px;
 margin-right: 12px;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),v(`step-content`,`flex: 1;`,[v(`step-content-header`,`
 color: var(--n-header-text-color);
 margin-top: calc(var(--n-indicator-size) / 2 - var(--n-step-header-font-size) / 2);
 line-height: var(--n-step-header-font-size);
 font-size: var(--n-step-header-font-size);
 position: relative;
 display: flex;
 font-weight: var(--n-step-header-font-weight);
 margin-left: 9px;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[D(`title`,`
 white-space: nowrap;
 flex: 0;
 `)]),D(`description`,`
 color: var(--n-description-text-color);
 margin-top: 12px;
 margin-left: 9px;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]),v(`step-indicator`,`
 background-color: var(--n-indicator-color);
 box-shadow: 0 0 0 1px var(--n-indicator-border-color);
 height: var(--n-indicator-size);
 width: var(--n-indicator-size);
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `,[v(`step-indicator-slot`,`
 position: relative;
 width: var(--n-indicator-icon-size);
 height: var(--n-indicator-icon-size);
 font-size: var(--n-indicator-icon-size);
 line-height: var(--n-indicator-icon-size);
 `,[D(`index`,`
 display: inline-block;
 text-align: center;
 position: absolute;
 left: 0;
 top: 0;
 white-space: nowrap;
 font-size: var(--n-indicator-index-font-size);
 width: var(--n-indicator-icon-size);
 height: var(--n-indicator-icon-size);
 line-height: var(--n-indicator-icon-size);
 color: var(--n-indicator-text-color);
 transition: color .3s var(--n-bezier);
 `,[W()]),v(`icon`,`
 color: var(--n-indicator-text-color);
 transition: color .3s var(--n-bezier);
 `,[W()]),v(`base-icon`,`
 color: var(--n-indicator-text-color);
 transition: color .3s var(--n-bezier);
 `,[W()])])]),x(`vertical`,`flex-direction: column;`,[b(`show-description`,[T(`>`,[v(`step`,`padding-bottom: 8px;`)])]),T(`>`,[v(`step`,`margin-bottom: 16px;`,[T(`&:last-child`,`margin-bottom: 0;`),T(`>`,[v(`step-indicator`,[T(`>`,[v(`step-splitor`,`
 position: absolute;
 bottom: -8px;
 width: 1px;
 margin: 0 !important;
 left: calc(var(--n-indicator-size) / 2);
 height: calc(100% - var(--n-indicator-size));
 `)])]),v(`step-content`,[D(`description`,`margin-top: 8px;`)])])])])]),x(`content-bottom`,[b(`vertical`,[T(`>`,[v(`step`,`flex-direction: column`,[T(`>`,[v(`step-line`,`display: flex;`,[T(`>`,[v(`step-splitor`,`
 margin-top: 0;
 align-self: center;
 `)])])]),T(`>`,[v(`step-content`,`margin-top: calc(var(--n-indicator-size) / 2 - var(--n-step-header-font-size) / 2);`,[v(`step-content-header`,`
 margin-left: 0;
 `),v(`step-content__description`,`
 margin-left: 0;
 `)])])])])])])]);function ee(e,t){return typeof e!=`object`||!e||Array.isArray(e)?null:(e.props||={},e.props.internalIndex=t+1,e)}function te(e){return e.map((e,t)=>ee(e,t))}var ne={...y.props,current:Number,status:{type:String,default:`process`},size:{type:String,default:`medium`},vertical:Boolean,contentPlacement:{type:String,default:`right`},"onUpdate:current":[Function,Array],onUpdateCurrent:[Function,Array]},$=M(`n-steps`),re=r({name:`Steps`,props:ne,slots:Object,setup(e,{slots:n}){let{mergedClsPrefixRef:r,mergedRtlRef:i}=A(e),a=j(`Steps`,i,r),o=y(`Steps`,`-steps`,Q,Z,e,r);return t($,{props:e,mergedThemeRef:o,mergedClsPrefixRef:r,stepsSlots:n}),{mergedClsPrefix:r,rtlEnabled:a}},render(){let{mergedClsPrefix:e}=this;return i(),u(`div`,{class:N([`${e}-steps`,this.rtlEnabled&&`${e}-steps--rtl`,this.vertical&&`${e}-steps--vertical`,this.contentPlacement===`bottom`&&`${e}-steps--content-bottom`])},[P(()=>te(G(q(this))))],2)}}),ie=[`onClick`],ae=r({name:`Step`,props:{status:String,title:String,description:String,disabled:Boolean,internalIndex:{type:Number,default:0}},slots:Object,setup(e){let t=n($,null);t||I(`step`,"`n-step` must be placed inside `n-steps`.");let{inlineThemeDisabled:r}=A(),{props:i,mergedThemeRef:a,mergedClsPrefixRef:o,stepsSlots:c}=t,l=g(i,`vertical`),u=g(i,`contentPlacement`),d=s(()=>{let{status:t}=e;if(t)return t;{let{internalIndex:t}=e,{current:n}=i;if(n===void 0)return`process`;if(t<n)return`finish`;if(t===n)return i.status||`process`;if(t>n)return`wait`}return`process`}),f=s(()=>{let{value:e}=d,{size:t}=i,{common:{cubicBezierEaseInOut:n},self:{stepHeaderFontWeight:r,[C(`stepHeaderFontSize`,t)]:o,[C(`indicatorIndexFontSize`,t)]:s,[C(`indicatorSize`,t)]:c,[C(`indicatorIconSize`,t)]:l,[C(`indicatorTextColor`,e)]:u,[C(`indicatorBorderColor`,e)]:f,[C(`headerTextColor`,e)]:p,[C(`splitorColor`,e)]:m,[C(`indicatorColor`,e)]:h,[C(`descriptionTextColor`,e)]:g}}=a.value;return{"--n-bezier":n,"--n-description-text-color":g,"--n-header-text-color":p,"--n-indicator-border-color":f,"--n-indicator-color":h,"--n-indicator-icon-size":l,"--n-indicator-index-font-size":s,"--n-indicator-size":c,"--n-indicator-text-color":u,"--n-splitor-color":m,"--n-step-header-font-size":o,"--n-step-header-font-weight":r}}),p=r?S(`step`,s(()=>{let{value:e}=d,{size:t}=i;return`${e[0]}${t[0]}`}),f,i):void 0;return{stepsSlots:c,mergedClsPrefix:o,vertical:l,mergedStatus:d,handleStepClick:s(()=>{if(e.disabled)return;let{onUpdateCurrent:t,"onUpdate:current":n}=i;return t||n?()=>{t&&w(t,e.internalIndex),n&&w(n,e.internalIndex)}:void 0}),cssVars:r?void 0:f,themeClass:p?.themeClass,onRender:p?.onRender,contentPlacement:u}},render(){let{mergedClsPrefix:e,onRender:t,handleStepClick:n,disabled:r,contentPlacement:s,vertical:l}=this,f=O(this.$slots.default,t=>{let n=t||this.description;return n?(i(),u(`div`,{key:1,class:N(`${e}-step-content__description`)},[P(()=>n)],2)):null}),p=(i(),u(`div`,{class:N(`${e}-step-splitor`)},null,2)),h=(i(),u(`div`,{class:N(`${e}-step-indicator`),key:s},[c(`div`,{class:N(`${e}-step-indicator-slot`)},[o(U,null,{default:()=>O(this.$slots.icon,t=>{let{mergedStatus:n,stepsSlots:r}=this;return n!==`finish`&&n!==`error`?t||(i(),u(`div`,{key:this.internalIndex,class:N(`${e}-step-indicator-slot__index`)},[P(()=>this.internalIndex)],2)):n===`finish`?(i(),m(E,{clsPrefix:e,key:`finish`},{default:()=>F(r[`finish-icon`],()=>[(i(),m(H))])},1032,[`clsPrefix`])):n===`error`?(i(),m(E,{clsPrefix:e,key:`error`},{default:()=>F(r[`error-icon`],()=>[(i(),m(k))])},1032,[`clsPrefix`])):null})},1024)],2),l?(i(),u(d,{key:0},[P(()=>p)],64)):P(()=>null)],2)),g=(i(),u(`div`,{class:N(`${e}-step-content`)},[c(`div`,{class:N(`${e}-step-content-header`)},[c(`div`,{class:N(`${e}-step-content-header__title`)},[P(()=>F(this.$slots.title,()=>[this.title]))],2),!l&&s===`right`?(i(),u(d,{key:0},[P(()=>p)],64)):P(()=>null)],2),P(()=>f)],2)),_;return _=!l&&s===`bottom`?(t=>(i(),u(d,{key:5},[c(`div`,{class:N(`${e}-step-line`)},[P(()=>h),P(()=>p)],2),P(()=>g)],64)))(_):(e=>(i(),u(d,{key:6},[P(()=>h),P(()=>g)],64)))(_),t?.(),i(),u(`div`,{class:N([`${e}-step`,r&&`${e}-step--disabled`,!r&&n&&`${e}-step--clickable`,this.themeClass,f&&`${e}-step--show-description`,`${e}-step--${this.mergedStatus}-status`]),style:a(this.cssVars),onClick:n},[P(()=>_)],14,ie)}}),oe={class:`color-#fff`},se={class:`flex flex-col items-center justify-center`},ce=r({name:`pro-naive_form_step`,__name:`index`,setup(t){let n=l(1),r=l(!1),a=Y(),s=R(),u=R({onSubmit:async e=>{r.value=!0,await g(1e3),a.success(JSON.stringify({...s.values.value,...e})),r.value=!1}});function d(){s.validate()?.then(()=>{n.value+=1})}function g(e){return new Promise(t=>{setTimeout(t,e)})}return(t,a)=>{let l=ae,g=re,v=X,y=K,b=z,x=J,S=B;return i(),m(V,null,{default:f(()=>[c(`div`,oe,[o(S,{title:h(L)(`page.proNaive.form.step.title`),segmented:{content:!0},"show-collapse":!1},{default:f(()=>[c(`div`,se,[o(g,{current:n.value,class:`mb-50px ml-200px w-60%`},{default:f(()=>[o(l,{title:h(L)(`page.proNaive.form.step.step1.title`)},null,8,[`title`]),o(l,{title:h(L)(`page.proNaive.form.step.step2.title`)},null,8,[`title`])]),_:1},8,[`current`]),n.value===1?(i(),m(b,{key:0,form:h(s),"label-placement":`left`},{default:f(()=>[o(v,{title:h(L)(`page.proNaive.form.step.step1.field`),path:`form1Field`,required:``},null,8,[`title`]),o(y,{onClick:d},{default:f(()=>[_(e(h(L)(`page.proNaive.form.step.step1.nextStep`)),1)]),_:1})]),_:1},8,[`form`])):p(``,!0),n.value===2?(i(),m(b,{key:1,form:h(u),loading:r.value,"label-placement":`left`},{default:f(()=>[o(v,{title:h(L)(`page.proNaive.form.step.step2.field`),path:`form2Field`,required:``},null,8,[`title`]),o(x,null,{default:f(()=>[o(y,{disabled:r.value,onClick:a[0]||=e=>--n.value},{default:f(()=>[_(e(h(L)(`page.proNaive.form.step.step2.prevStep`)),1)]),_:1},8,[`disabled`]),o(y,{type:`primary`,"attr-type":`submit`,loading:r.value},{default:f(()=>[_(e(h(L)(`page.proNaive.form.step.step2.submit`)),1)]),_:1},8,[`loading`])]),_:1})]),_:1},8,[`form`,`loading`])):p(``,!0)])]),_:1},8,[`title`])])]),_:1})}}});export{ce as default};