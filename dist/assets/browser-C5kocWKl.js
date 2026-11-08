import{F as e,H as t,O as n,R as r,S as i,V as a,Wt as o,b as s,d as c,f as l,gt as u,h as d,ht as f,p,xt as m}from"./runtime-core.esm-bundler-B8bAGhjJ.js";import{Cn as h,Ct as g,St as _,Tt as v,ct as y,ht as b,it as x,ot as S,st as C,ut as w}from"./Card-D1y5zSiq.js";import{t as T}from"./is-browser-e-NGrvPW.js";function E(){let e=u(!1);return r(()=>{e.value=!0}),f(e)}var D=b(`n-form-item`);function O(r,{defaultSize:i=`medium`,mergedSize:a,mergedDisabled:o}={}){let s=n(D,null);t(D,null);let l=c(a?()=>a(s):()=>{let{size:e}=r;if(e)return e;if(s){let{mergedSize:e}=s;if(e.value!==void 0)return e.value}return i}),u=c(o?()=>o(s):()=>{let{disabled:e}=r;return e===void 0?s?s.disabled.value:!1:e}),d=c(()=>{let{status:e}=r;return e||s?.mergedValidationStatus.value});return e(()=>{s&&s.restoreValidation()}),{mergedSizeRef:l,mergedDisabledRef:u,mergedStatusRef:d,nTriggerFormBlur(){s&&s.handleContentBlur()},nTriggerFormChange(){s&&s.handleContentChange()},nTriggerFormFocus(){s&&s.handleContentFocus()},nTriggerFormInput(){s&&s.handleContentInput()}}}var k=i({name:`BaseIconSwitchTransition`,setup(e,{slots:t}){let n=E();return()=>(a(),p(h,{name:`icon-switch-transition`,appear:n.value},S(t),1032,[`appear`]))}}),{cubicBezierEaseInOut:A}=w;function j({originalTransform:e=``,left:t=0,top:n=0,transition:r=`all .3s ${A} !important`}={}){return[_(`&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to`,{transform:`${e} scale(0.75)`,left:t,top:n,opacity:0}),_(`&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from`,{transform:`scale(1) ${e}`,left:t,top:n,opacity:1}),_(`&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active`,{transformOrigin:`center`,position:`absolute`,left:t,top:n,transition:r})]}var M=_([_(`@keyframes rotator`,`
 0% {
 -webkit-transform: rotate(0deg);
 transform: rotate(0deg);
 }
 100% {
 -webkit-transform: rotate(360deg);
 transform: rotate(360deg);
 }`),g(`base-loading`,`
 position: relative;
 line-height: 0;
 width: 1em;
 height: 1em;
 `,[v(`transition-wrapper`,`
 position: absolute;
 width: 100%;
 height: 100%;
 `,[j()]),v(`placeholder`,`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[j({left:`50%`,top:`50%`,originalTransform:`translateX(-50%) translateY(-50%)`})]),v(`container`,`
 animation: rotator 3s linear infinite both;
 `,[v(`icon`,`
 height: 1em;
 width: 1em;
 `)])])]),N=[`viewBox`],P=[`values`,`dur`],F=[`stroke-width`,`cx`,`cy`,`r`,`stroke-dasharray`,`stroke-dashoffset`],I=[`values`,`dur`],L=[`values`,`dur`],R=`1.6s`,z={strokeWidth:{type:Number,default:28},stroke:{type:String,default:void 0},scale:{type:Number,default:1},radius:{type:Number,default:100}},B=i({name:`BaseLoading`,props:{clsPrefix:{type:String,required:!0},show:{type:Boolean,default:!0},...z},setup(e){y(`-base-loading`,M,m(e,`clsPrefix`))},render(){let{clsPrefix:e,radius:t,strokeWidth:n,stroke:r,scale:i}=this,c=t/i;return a(),d(`div`,{class:x(`${e}-base-loading`),role:`img`,"aria-label":`loading`},[s(k,null,{default:()=>this.show?(a(),d(`div`,{key:`icon`,class:x(`${e}-base-loading__transition-wrapper`)},[l(`div`,{class:x(`${e}-base-loading__container`)},[(a(),d(`svg`,{class:x(`${e}-base-loading__icon`),viewBox:`0 0 ${2*c} ${2*c}`,xmlns:`http://www.w3.org/2000/svg`,style:o({color:r})},[l(`g`,null,[l(`animateTransform`,{attributeName:`transform`,type:`rotate`,values:`0 ${c} ${c};270 ${c} ${c}`,begin:`0s`,dur:R,fill:`freeze`,repeatCount:`indefinite`},null,8,P),l(`circle`,{class:x(`${e}-base-loading__icon`),fill:`none`,stroke:`currentColor`,"stroke-width":n,"stroke-linecap":`round`,cx:c,cy:c,r:t-n/2,"stroke-dasharray":5.67*t,"stroke-dashoffset":18.48*t},[l(`animateTransform`,{attributeName:`transform`,type:`rotate`,values:`0 ${c} ${c};135 ${c} ${c};450 ${c} ${c}`,begin:`0s`,dur:R,fill:`freeze`,repeatCount:`indefinite`},null,8,I),l(`animate`,{attributeName:`stroke-dashoffset`,values:`${5.67*t};${1.42*t};${5.67*t}`,begin:`0s`,dur:R,fill:`freeze`,repeatCount:`indefinite`},null,8,L)],10,F)])],14,N))],2)],2)):(a(),d(`div`,{key:`placeholder`,class:x(`${e}-base-loading__placeholder`)},[C(()=>this.$slots.default?.())],2))},1024)],2)}}),V=T&&`chrome`in window;T&&navigator.userAgent.includes(`Firefox`);var H=T&&navigator.userAgent.includes(`Safari`)&&!V;export{k as a,E as c,j as i,B as n,D as o,z as r,O as s,H as t};