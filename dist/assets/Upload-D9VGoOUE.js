import{H as e,M as t,O as n,S as r,V as i,Wt as a,d as o,f as s,gt as c,h as l,i as u,j as d,nt as f,p,s as m,xt as h}from"./runtime-core.esm-bundler-B8bAGhjJ.js";import{Ct as g,D as _,Et as v,Mt as y,O as b,Ot as x,S,St as C,T as w,Tt as T,_t as E,at as D,ft as O,g as ee,ht as k,it as A,l as j,ot as M,rt as N,st as P,vt as F,y as I,yt as L}from"./Card-D1y5zSiq.js";import{$t as R,Qt as z,Zt as B,en as V}from"./router-HxjjpqyM.js";import{a as te}from"./Tabs-DQQBSizd.js";import{d as H,k as U}from"./Popover-B9CZ_-d6.js";import{n as ne,r as re,t as ie}from"./Image-DwfB8JQP.js";import{o as ae}from"./DataTable-DB0BM1Wp.js";import{a as oe}from"./Input-Ms8bfyrl.js";import{t as se}from"./use-memo-Bz-bI3IJ.js";import{t as ce}from"./use-merged-state-DzJRbVe1.js";import{a as le,i as ue,s as de}from"./browser-C5kocWKl.js";import{l as W,t as G}from"./Button-AFSoWKwt.js";import{t as fe}from"./is-browser-e-NGrvPW.js";import{E as K,a as pe,l as me}from"./index-CUZUr-ur.js";var he=[`id`],ge=[`stop-color`],_e=[`stop-color`],ve=[`viewBox`],ye=[`d`,`stroke-width`],be=[`d`,`stroke-width`],xe={success:(i(),p(z)),error:(i(),p(V)),warning:(i(),p(B)),info:(i(),p(R))},Se=r({name:`ProgressCircle`,props:{clsPrefix:{type:String,required:!0},status:{type:String,required:!0},strokeWidth:{type:Number,required:!0},fillColor:[String,Object],railColor:String,railStyle:[String,Object],percentage:{type:Number,default:0},offsetDegree:{type:Number,default:0},showIndicator:{type:Boolean,required:!0},indicatorTextColor:String,unit:String,viewBoxWidth:{type:Number,required:!0},gapDegree:{type:Number,required:!0},gapOffsetDegree:{type:Number,default:0}},setup(e,{slots:t}){let n=o(()=>{let t=`gradient`,{fillColor:n}=e;return typeof n==`object`?`${t}-${y(JSON.stringify(n))}`:t});function r(t,r,i,a){let{gapDegree:o,viewBoxWidth:s,strokeWidth:c}=e,l=50+c/2,u=`M ${l},${l} m 0,50
      a 50,50 0 1 1 0,-100
      a 50,50 0 1 1 0,100`,d=Math.PI*2*50;return{pathString:u,pathStyle:{stroke:a===`rail`?i:typeof e.fillColor==`object`?`url(#${n.value})`:i,strokeDasharray:`${Math.min(t,100)/100*(d-o)}px ${s*8}px`,strokeDashoffset:`-${o/2}px`,transformOrigin:r?`center`:void 0,transform:r?`rotate(${r}deg)`:void 0}}}let c=()=>{let t=typeof e.fillColor==`object`,r=t?e.fillColor.stops[0]:``,a=t?e.fillColor.stops[1]:``;return t&&(i(),l(`defs`,null,[s(`linearGradient`,{id:n.value,x1:`0%`,y1:`100%`,x2:`100%`,y2:`0%`},[s(`stop`,{offset:`0%`,"stop-color":r},null,8,ge),s(`stop`,{offset:`100%`,"stop-color":a},null,8,_e)],8,he)]))};return()=>{let{fillColor:n,railColor:o,strokeWidth:d,offsetDegree:f,status:m,percentage:h,showIndicator:g,indicatorTextColor:_,unit:v,gapOffsetDegree:y,clsPrefix:b}=e,{pathString:x,pathStyle:S}=r(100,0,o,`rail`),{pathString:C,pathStyle:T}=r(h,f,n,`fill`),E=100+d;return i(),l(`div`,{class:A(`${b}-progress-content`),role:`none`},[s(`div`,{class:A(`${b}-progress-graph`),"aria-hidden":!0},[s(`div`,{class:A(`${b}-progress-graph-circle`),style:a({transform:y?`rotate(${y}deg)`:void 0})},[(i(),l(`svg`,{viewBox:`0 0 ${E} ${E}`},[P(()=>c()),s(`g`,null,[s(`path`,{class:A(`${b}-progress-graph-circle-rail`),d:x,"stroke-width":d,"stroke-linecap":`round`,fill:`none`,style:a(S)},null,14,ye)]),s(`g`,null,[s(`path`,{class:A([`${b}-progress-graph-circle-fill`,h===0&&`${b}-progress-graph-circle-fill--empty`]),d:C,"stroke-width":d,"stroke-linecap":`round`,fill:`none`,style:a(T)},null,14,be)])],8,ve))],6)],2),g?(i(),l(`div`,{key:0},[t.default?(i(),l(`div`,{key:0,class:A(`${b}-progress-custom-content`),role:`none`},[P(()=>t.default())],2)):(i(),l(u,{key:1},[m==="default"?(i(),l(`div`,{key:1,class:A(`${b}-progress-text`),style:a({color:_}),role:`none`},[s(`span`,{class:A(`${b}-progress-text__percentage`)},[P(()=>h)],2),s(`span`,{class:A(`${b}-progress-text__unit`)},[P(()=>v)],2)],6)):(i(),l(`div`,{key:0,class:A(`${b}-progress-icon`),"aria-hidden":!0},[(i(),p(w,{clsPrefix:b},{default:()=>xe[m]},1032,[`clsPrefix`]))],2))],64))])):P(()=>null)],2)}}}),Ce={success:(i(),p(z)),error:(i(),p(V)),warning:(i(),p(B)),info:(i(),p(R))},we=r({name:`ProgressLine`,props:{clsPrefix:{type:String,required:!0},percentage:{type:Number,default:0},railColor:String,railStyle:[String,Object],fillColor:[String,Object],status:{type:String,required:!0},indicatorPlacement:{type:String,required:!0},indicatorTextColor:String,unit:{type:String,default:`%`},processing:{type:Boolean,required:!0},showIndicator:{type:Boolean,required:!0},height:[String,Number],railBorderRadius:[String,Number],fillBorderRadius:[String,Number]},setup(e,{slots:t}){let n=o(()=>H(e.height)),r=o(()=>typeof e.fillColor==`object`?`linear-gradient(to right, ${e.fillColor?.stops[0]} , ${e.fillColor?.stops[1]})`:e.fillColor),c=o(()=>e.railBorderRadius===void 0?e.height===void 0?``:H(e.height,{c:.5}):H(e.railBorderRadius)),d=o(()=>e.fillBorderRadius===void 0?e.railBorderRadius===void 0?e.height===void 0?``:H(e.height,{c:.5}):H(e.railBorderRadius):H(e.fillBorderRadius));return()=>{let{indicatorPlacement:o,railColor:f,railStyle:m,percentage:h,unit:g,indicatorTextColor:_,status:v,showIndicator:y,processing:b,clsPrefix:x}=e;return i(),l(`div`,{class:A(`${x}-progress-content`),role:`none`},[s(`div`,{class:A(`${x}-progress-graph`),"aria-hidden":!0},[s(`div`,{class:A([`${x}-progress-graph-line`,{[`${x}-progress-graph-line--indicator-${o}`]:!0}])},[s(`div`,{class:A(`${x}-progress-graph-line-rail`),style:a([{backgroundColor:f,height:n.value,borderRadius:c.value},m])},[s(`div`,{class:A([`${x}-progress-graph-line-fill`,b&&`${x}-progress-graph-line-fill--processing`]),style:a({maxWidth:`${e.percentage}%`,background:r.value,height:n.value,lineHeight:n.value,borderRadius:d.value})},[o===`inside`?(i(),l(`div`,{key:0,class:A(`${x}-progress-graph-line-indicator`),style:a({color:_})},[t.default?(i(),l(u,{key:0},[P(()=>t.default())],64)):(i(),l(u,{key:1},[P(()=>`${h}${g}`)],64))],6)):P(()=>null)],6)],6)],2)],2),y&&o===`outside`?(i(),l(`div`,{key:0},[t.default?(i(),l(`div`,{key:0,class:A(`${x}-progress-custom-content`),style:a({color:_}),role:`none`},[P(()=>t.default())],6)):(i(),l(u,{key:1},[v==="default"?(i(),l(`div`,{key:0,role:`none`,class:A(`${x}-progress-icon ${x}-progress-icon--as-text`),style:a({color:_})},[P(()=>h),P(()=>g)],6)):(i(),l(`div`,{key:1,class:A(`${x}-progress-icon`),"aria-hidden":!0},[(i(),p(w,{clsPrefix:x},{default:()=>Ce[v]},1032,[`clsPrefix`]))],2))],64))])):P(()=>null)],2)}}}),Te=[`id`],Ee=[`stop-color`],De=[`stop-color`],Oe=[`d`,`stroke-width`],ke=[`d`,`stroke-width`],Ae=[`viewBox`];function q(e,t,n=100){return`m ${n/2} ${n/2-e} a ${e} ${e} 0 1 1 0 ${2*e} a ${e} ${e} 0 1 1 0 -${2*e}`}var je=r({name:`ProgressMultipleCircle`,props:{clsPrefix:{type:String,required:!0},viewBoxWidth:{type:Number,required:!0},percentage:{type:Array,default:[0]},strokeWidth:{type:Number,required:!0},circleGap:{type:Number,required:!0},showIndicator:{type:Boolean,required:!0},fillColor:{type:Array,default:()=>[]},railColor:{type:Array,default:()=>[]},railStyle:{type:Array,default:()=>[]}},setup(e,{slots:t}){let n=o(()=>e.percentage.map((t,n)=>`${Math.PI*t/100*(e.viewBoxWidth/2-e.strokeWidth/2*(1+2*n)-e.circleGap*n)*2}, ${e.viewBoxWidth*8}`)),r=(t,n)=>{let r=e.fillColor[n],a=typeof r==`object`?r.stops[0]:``,o=typeof r==`object`?r.stops[1]:``;return typeof e.fillColor[n]==`object`&&(i(),l(`linearGradient`,{id:`gradient-${n}`,x1:`100%`,y1:`0%`,x2:`0%`,y2:`100%`},[s(`stop`,{offset:`0%`,"stop-color":a},null,8,Ee),s(`stop`,{offset:`100%`,"stop-color":o},null,8,De)],8,Te))};return()=>{let{viewBoxWidth:o,strokeWidth:c,circleGap:u,showIndicator:d,fillColor:f,railColor:p,railStyle:m,percentage:h,clsPrefix:g}=e;return i(),l(`div`,{class:A(`${g}-progress-content`),role:`none`},[s(`div`,{class:A(`${g}-progress-graph`),"aria-hidden":!0},[s(`div`,{class:A(`${g}-progress-graph-circle`)},[(i(),l(`svg`,{viewBox:`0 0 ${o} ${o}`},[s(`defs`,null,[P(()=>h.map((e,t)=>r(e,t)))]),P(()=>h.map((e,t)=>(i(),l(`g`,{key:t},[s(`path`,{class:A(`${g}-progress-graph-circle-rail`),d:q(o/2-c/2*(1+2*t)-u*t,c,o),"stroke-width":c,"stroke-linecap":`round`,fill:`none`,style:a([{strokeDashoffset:0,stroke:p[t]},m[t]])},null,14,Oe),s(`path`,{class:A([`${g}-progress-graph-circle-fill`,e===0&&`${g}-progress-graph-circle-fill--empty`]),d:q(o/2-c/2*(1+2*t)-u*t,c,o),"stroke-width":c,"stroke-linecap":`round`,fill:`none`,style:a({strokeDasharray:n.value[t],strokeDashoffset:0,stroke:typeof f[t]==`object`?`url(#gradient-${t})`:f[t]})},null,14,ke)]))))],8,Ae))],2)],2),d&&t.default?(i(),l(`div`,{key:0},[s(`div`,{class:A(`${g}-progress-text`)},[P(()=>t.default())],2)])):P(()=>null)],2)}}}),Me=C([g(`progress`,{display:`inline-block`},[g(`progress-icon`,`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 `),v(`line`,`
 width: 100%;
 display: block;
 `,[g(`progress-content`,`
 display: flex;
 align-items: center;
 `,[g(`progress-graph`,{flex:1})]),g(`progress-custom-content`,{marginLeft:`14px`}),g(`progress-icon`,`
 width: 30px;
 padding-left: 14px;
 height: var(--n-icon-size-line);
 line-height: var(--n-icon-size-line);
 font-size: var(--n-icon-size-line);
 `,[v(`as-text`,`
 color: var(--n-text-color-line-outer);
 text-align: center;
 width: 40px;
 font-size: var(--n-font-size);
 padding-left: 4px;
 transition: color .3s var(--n-bezier);
 `)])]),v(`circle, dashboard`,{width:`120px`},[g(`progress-custom-content`,`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `),g(`progress-text`,`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 color: inherit;
 font-size: var(--n-font-size-circle);
 color: var(--n-text-color-circle);
 font-weight: var(--n-font-weight-circle);
 transition: color .3s var(--n-bezier);
 white-space: nowrap;
 `),g(`progress-icon`,`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 color: var(--n-icon-color);
 font-size: var(--n-icon-size-circle);
 `)]),v(`multiple-circle`,`
 width: 200px;
 color: inherit;
 `,[g(`progress-text`,`
 font-weight: var(--n-font-weight-circle);
 color: var(--n-text-color-circle);
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 transition: color .3s var(--n-bezier);
 `)]),g(`progress-content`,{position:`relative`}),g(`progress-graph`,{position:`relative`},[g(`progress-graph-circle`,[C(`svg`,{verticalAlign:`bottom`}),g(`progress-graph-circle-fill`,`
 stroke: var(--n-fill-color);
 transition:
 opacity .3s var(--n-bezier),
 stroke .3s var(--n-bezier),
 stroke-dasharray .3s var(--n-bezier);
 `,[v(`empty`,{opacity:0})]),g(`progress-graph-circle-rail`,`
 transition: stroke .3s var(--n-bezier);
 overflow: hidden;
 stroke: var(--n-rail-color);
 `)]),g(`progress-graph-line`,[v(`indicator-inside`,[g(`progress-graph-line-rail`,`
 height: 16px;
 line-height: 16px;
 border-radius: 10px;
 `,[g(`progress-graph-line-fill`,`
 height: inherit;
 border-radius: 10px;
 `),g(`progress-graph-line-indicator`,`
 background: #0000;
 white-space: nowrap;
 text-align: right;
 margin-left: 14px;
 margin-right: 14px;
 height: inherit;
 font-size: 12px;
 color: var(--n-text-color-line-inner);
 transition: color .3s var(--n-bezier);
 `)])]),v(`indicator-inside-label`,`
 height: 16px;
 display: flex;
 align-items: center;
 `,[g(`progress-graph-line-rail`,`
 flex: 1;
 transition: background-color .3s var(--n-bezier);
 `),g(`progress-graph-line-indicator`,`
 background: var(--n-fill-color);
 font-size: 12px;
 transform: translateZ(0);
 display: flex;
 vertical-align: middle;
 height: 16px;
 line-height: 16px;
 padding: 0 10px;
 border-radius: 10px;
 position: absolute;
 white-space: nowrap;
 color: var(--n-text-color-line-inner);
 transition:
 right .2s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]),g(`progress-graph-line-rail`,`
 position: relative;
 overflow: hidden;
 height: var(--n-rail-height);
 border-radius: 5px;
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 `,[g(`progress-graph-line-fill`,`
 background: var(--n-fill-color);
 position: relative;
 border-radius: 5px;
 height: inherit;
 width: 100%;
 max-width: 0%;
 transition:
 background-color .3s var(--n-bezier),
 max-width .2s var(--n-bezier);
 `,[v(`processing`,[C(`&::after`,`
 content: "";
 background-image: var(--n-line-bg-processing);
 animation: progress-processing-animation 2s var(--n-bezier) infinite;
 `)])])])])])]),C(`@keyframes progress-processing-animation`,`
 0% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 100%;
 opacity: 1;
 }
 66% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 0;
 }
 100% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 0;
 }
 `)]),Ne=[`aria-valuenow`,`role`],Pe={..._.props,processing:Boolean,type:{type:String,default:`line`},gapDegree:Number,gapOffsetDegree:Number,status:{type:String,default:`default`},railColor:[String,Array],railStyle:[String,Array],color:[String,Array,Object],viewBoxWidth:{type:Number,default:100},strokeWidth:{type:Number,default:7},percentage:[Number,Array],unit:{type:String,default:`%`},showIndicator:{type:Boolean,default:!0},indicatorPosition:{type:String,default:`outside`},indicatorPlacement:{type:String,default:`outside`},indicatorTextColor:String,circleGap:{type:Number,default:1},height:Number,borderRadius:[String,Number],fillBorderRadius:[String,Number],offsetDegree:Number},Fe=r({name:`Progress`,props:Pe,setup(e){let t=o(()=>e.indicatorPlacement||e.indicatorPosition),n=o(()=>{if(e.gapDegree||e.gapDegree===0)return e.gapDegree;if(e.type===`dashboard`)return 75}),{mergedClsPrefixRef:r,inlineThemeDisabled:i}=O(e),a=_(`Progress`,`-progress`,Me,me,e,r),s=o(()=>{let{status:t}=e,{common:{cubicBezierEaseInOut:n},self:{fontSize:r,fontSizeCircle:i,railColor:o,railHeight:s,iconSizeCircle:c,iconSizeLine:l,textColorCircle:u,textColorLineInner:d,textColorLineOuter:f,lineBgProcessing:p,fontWeightCircle:m,[x(`iconColor`,t)]:h,[x(`fillColor`,t)]:g}}=a.value;return{"--n-bezier":n,"--n-fill-color":g,"--n-font-size":r,"--n-font-size-circle":i,"--n-font-weight-circle":m,"--n-icon-color":h,"--n-icon-size-circle":c,"--n-icon-size-line":l,"--n-line-bg-processing":p,"--n-rail-color":o,"--n-rail-height":s,"--n-text-color-circle":u,"--n-text-color-line-inner":d,"--n-text-color-line-outer":f}}),c=i?b(`progress`,o(()=>e.status[0]),s,e):void 0;return{mergedClsPrefix:r,mergedIndicatorPlacement:t,gapDeg:n,cssVars:i?void 0:s,themeClass:c?.themeClass,onRender:c?.onRender}},render(){let{type:e,cssVars:t,indicatorTextColor:n,showIndicator:r,status:o,railColor:s,railStyle:c,color:d,percentage:f,viewBoxWidth:m,strokeWidth:h,mergedIndicatorPlacement:g,unit:_,borderRadius:v,fillBorderRadius:y,height:b,processing:x,circleGap:S,mergedClsPrefix:C,gapDeg:w,gapOffsetDegree:T,themeClass:E,$slots:D,onRender:O}=this;return O?.(),i(),l(`div`,{class:A([E,`${C}-progress`,`${C}-progress--${e}`,`${C}-progress--${o}`]),style:a(t),"aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":f,role:e===`circle`||e===`line`||e===`dashboard`?`progressbar`:`none`},[e===`circle`||e===`dashboard`?(i(),p(Se,{key:0,clsPrefix:C,status:o,showIndicator:r,indicatorTextColor:n,railColor:s,fillColor:d,railStyle:c,offsetDegree:this.offsetDegree,percentage:f,viewBoxWidth:m,strokeWidth:h,gapDegree:w===void 0?e===`dashboard`?75:0:w,gapOffsetDegree:T,unit:_},M(D),1032,[`clsPrefix`,`status`,`showIndicator`,`indicatorTextColor`,`railColor`,`fillColor`,`railStyle`,`offsetDegree`,`percentage`,`viewBoxWidth`,`strokeWidth`,`gapDegree`,`gapOffsetDegree`,`unit`])):(i(),l(u,{key:1},[e===`line`?(i(),p(we,{key:0,clsPrefix:C,status:o,showIndicator:r,indicatorTextColor:n,railColor:s,fillColor:d,railStyle:c,percentage:f,processing:x,indicatorPlacement:g,unit:_,fillBorderRadius:y,railBorderRadius:v,height:b},M(D),1032,[`clsPrefix`,`status`,`showIndicator`,`indicatorTextColor`,`railColor`,`fillColor`,`railStyle`,`percentage`,`processing`,`indicatorPlacement`,`unit`,`fillBorderRadius`,`railBorderRadius`,`height`])):(i(),l(u,{key:1},[e===`multiple-circle`?(i(),p(je,{key:0,clsPrefix:C,strokeWidth:h,railColor:s,fillColor:d,railStyle:c,viewBoxWidth:m,percentage:f,showIndicator:r,circleGap:S},M(D),1032,[`clsPrefix`,`strokeWidth`,`railColor`,`fillColor`,`railStyle`,`viewBoxWidth`,`percentage`,`showIndicator`,`circleGap`])):P(()=>null)],64))],64))],14,Ne)}}),J=k(`n-upload`),Ie=r({name:`UploadDragger`,__UPLOAD_DRAGGER__:!0,setup(e,{slots:t}){let r=n(J,null);return r||F(`upload-dragger`,"`n-upload-dragger` must be placed inside `n-upload`."),()=>{let{mergedClsPrefixRef:{value:e},mergedDisabledRef:{value:n},maxReachedRef:{value:a}}=r;return i(),l(`div`,{class:A([`${e}-upload-dragger`,(n||a)&&`${e}-upload-dragger--disabled`])},[P(()=>t.default?.())],2)}}});function Y(e){return e.includes(`image/`)}function X(e=``){let t=e.split(`/`),n=t[t.length-1].split(/#|\?/)[0];return(/\.[^./\\]*$/.exec(n)||[``])[0]}var Z=/(webp|svg|png|gif|jpg|jpeg|jfif|bmp|dpg|ico)$/i,Le=e=>{if(e.type)return Y(e.type);let t=X(e.name||``);if(Z.test(t))return!0;let n=e.thumbnailUrl||e.url||``,r=X(n);return!!(/^data:image\//.test(n)||Z.test(r))};async function Re(e){return await new Promise(t=>{!e.type||!Y(e.type)?t(``):t(window.URL.createObjectURL(e))})}var ze=fe&&window.FileReader&&window.File;function Be(e){return e.isDirectory}function Ve(e){return e.isFile}async function He(e,t){let n=[];async function r(e){for(let i of e)if(i){if(t&&Be(i)){let e=i.createReader(),t=[],n;try{do n=await new Promise((t,n)=>{e.readEntries(t,n)}),t=t.concat(n);while(n.length>0)}catch(e){E(`upload`,`error happens when handling directory upload`,e)}await r(t)}else if(Ve(i))try{let e=await new Promise((e,t)=>{i.file(e,t)});n.push({file:e,entry:i,source:`dnd`})}catch(e){E(`upload`,`error happens when handling file upload`,e)}}}return await r(e),n}function Q(e){let{id:t,name:n,percentage:r,status:i,url:a,file:o,thumbnailUrl:s,type:c,fullPath:l,batchId:u}=e;return{id:t,name:n,percentage:r??null,status:i,url:a??null,file:o??null,thumbnailUrl:s??null,type:c??null,fullPath:l??null,batchId:u??null}}function Ue(e,t,n){return e=e.toLowerCase(),t=t.toLocaleLowerCase(),n=n.toLocaleLowerCase(),n.split(`,`).map(e=>e.trim()).filter(Boolean).some(n=>{if(n.startsWith(`.`)){if(e.endsWith(n))return!0}else if(n.includes(`/`)){let[e,r]=t.split(`/`),[i,a]=n.split(`/`);if((i===`*`||e&&i&&i===e)&&(a===`*`||r&&a&&a===r))return!0}else return!0;return!1})}var We=[`onClick`,`onDrop`,`onDragover`,`onDragenter`,`onDragleave`],Ge=r({name:`UploadTrigger`,props:{abstract:Boolean},slots:Object,setup(e,{slots:t}){let r=n(J,null);r||F(`upload-trigger`,"`n-upload-trigger` must be placed inside `n-upload`.");let{mergedClsPrefixRef:s,mergedDisabledRef:c,maxReachedRef:d,listTypeRef:f,dragOverRef:m,openOpenFileDialog:h,draggerInsideRef:g,handleFileAddition:_,mergedDirectoryDndRef:v,triggerClassRef:y,triggerStyleRef:b}=r,x=o(()=>f.value===`image-card`);function S(){c.value||d.value||h()}function C(e){e.preventDefault(),m.value=!0}function T(e){e.preventDefault(),m.value=!0}function E(e){e.preventDefault(),m.value=!1}function D(e){if(e.preventDefault(),!g.value||c.value||d.value){m.value=!1;return}let t=e.dataTransfer?.items;t?.length?He(Array.from(t).map(e=>e.webkitGetAsEntry()),v.value).then(e=>{_(e)}).finally(()=>{m.value=!1}):m.value=!1}return()=>{let{value:n}=s,r={handleClick:S,handleDrop:D,handleDragOver:C,handleDragEnter:T,handleDragLeave:E};return e.abstract?t.default?.(r):(i(),l(`div`,{key:1,class:A([`${n}-upload-trigger`,(c.value||d.value)&&`${n}-upload-trigger--disabled`,x.value&&`${n}-upload-trigger--image-card`,y.value]),style:a(b.value),onClick:S,onDrop:D,onDragover:C,onDragenter:T,onDragleave:E},[x.value?(i(),p(Ie,{key:0},{default:()=>I(t.default,r,()=>[(i(),p(w,{clsPrefix:n},{default:()=>(i(),p(te))},1032,[`clsPrefix`]))])},1024)):(i(),l(u,{key:1},[P(()=>t.default?.(r))],64))],46,We))}}}),Ke=j(`attach`,()=>(()=>{let e=N(`5efcd6da8c4f9f81`);return e[0]||=s(`svg`,{viewBox:`0 0 16 16`,version:`1.1`,xmlns:`http://www.w3.org/2000/svg`},[s(`g`,{stroke:`none`,"stroke-width":`1`,fill:`none`,"fill-rule":`evenodd`},[s(`g`,{fill:`currentColor`,"fill-rule":`nonzero`},[s(`path`,{d:`M3.25735931,8.70710678 L7.85355339,4.1109127 C8.82986412,3.13460197 10.4127766,3.13460197 11.3890873,4.1109127 C12.365398,5.08722343 12.365398,6.67013588 11.3890873,7.64644661 L6.08578644,12.9497475 C5.69526215,13.3402718 5.06209717,13.3402718 4.67157288,12.9497475 C4.28104858,12.5592232 4.28104858,11.9260582 4.67157288,11.5355339 L9.97487373,6.23223305 C10.1701359,6.0369709 10.1701359,5.72038841 9.97487373,5.52512627 C9.77961159,5.32986412 9.4630291,5.32986412 9.26776695,5.52512627 L3.96446609,10.8284271 C3.18341751,11.6094757 3.18341751,12.8758057 3.96446609,13.6568542 C4.74551468,14.4379028 6.01184464,14.4379028 6.79289322,13.6568542 L12.0961941,8.35355339 C13.4630291,6.98671837 13.4630291,4.77064094 12.0961941,3.40380592 C10.7293591,2.0369709 8.51328163,2.0369709 7.14644661,3.40380592 L2.55025253,8 C2.35499039,8.19526215 2.35499039,8.51184464 2.55025253,8.70710678 C2.74551468,8.90236893 3.06209717,8.90236893 3.25735931,8.70710678 Z`})])])],-1)})()),qe=j(`cancel`,()=>(()=>{let e=N(`32793e1b4a60bf1b`);return e[0]||=s(`svg`,{viewBox:`0 0 16 16`,version:`1.1`,xmlns:`http://www.w3.org/2000/svg`},[s(`g`,{stroke:`none`,"stroke-width":`1`,fill:`none`,"fill-rule":`evenodd`},[s(`g`,{fill:`currentColor`,"fill-rule":`nonzero`},[s(`path`,{d:`M2.58859116,2.7156945 L2.64644661,2.64644661 C2.82001296,2.47288026 3.08943736,2.45359511 3.2843055,2.58859116 L3.35355339,2.64644661 L8,7.293 L12.6464466,2.64644661 C12.8417088,2.45118446 13.1582912,2.45118446 13.3535534,2.64644661 C13.5488155,2.84170876 13.5488155,3.15829124 13.3535534,3.35355339 L8.707,8 L13.3535534,12.6464466 C13.5271197,12.820013 13.5464049,13.0894374 13.4114088,13.2843055 L13.3535534,13.3535534 C13.179987,13.5271197 12.9105626,13.5464049 12.7156945,13.4114088 L12.6464466,13.3535534 L8,8.707 L3.35355339,13.3535534 C3.15829124,13.5488155 2.84170876,13.5488155 2.64644661,13.3535534 C2.45118446,13.1582912 2.45118446,12.8417088 2.64644661,12.6464466 L7.293,8 L2.64644661,3.35355339 C2.47288026,3.17998704 2.45359511,2.91056264 2.58859116,2.7156945 L2.64644661,2.64644661 L2.58859116,2.7156945 Z`})])])],-1)})()),Je=j(`retry`,()=>(()=>{let e=N(`32d3a81cd807b3fd`);return e[0]||=s(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 512 512`},[s(`path`,{d:`M320,146s24.36-12-64-12A160,160,0,1,0,416,294`,style:`fill: none; stroke: currentcolor; stroke-linecap: round; stroke-miterlimit: 10; stroke-width: 32px;`}),s(`polyline`,{points:`256 58 336 138 256 218`,style:`fill: none; stroke: currentcolor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 32px;`})],-1)})()),Ye=j(`trash`,()=>(()=>{let e=N(`4bd1b3f5f0c823a2`);return e[0]||=s(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 512 512`},[s(`path`,{d:`M432,144,403.33,419.74A32,32,0,0,1,371.55,448H140.46a32,32,0,0,1-31.78-28.26L80,144`,style:`fill: none; stroke: currentcolor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 32px;`}),s(`rect`,{x:`32`,y:`64`,width:`448`,height:`80`,rx:`16`,ry:`16`,style:`fill: none; stroke: currentcolor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 32px;`}),s(`line`,{x1:`312`,y1:`240`,x2:`200`,y2:`352`,style:`fill: none; stroke: currentcolor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 32px;`}),s(`line`,{x1:`312`,y1:`352`,x2:`200`,y2:`240`,style:`fill: none; stroke: currentcolor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 32px;`})],-1)})());function Xe(){return(()=>{let e=N(`39989d0be5c9bff7`);return e[0]||=s(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 28 28`},[s(`g`,{fill:`none`},[s(`path`,{d:`M21.75 3A3.25 3.25 0 0 1 25 6.25v15.5A3.25 3.25 0 0 1 21.75 25H6.25A3.25 3.25 0 0 1 3 21.75V6.25A3.25 3.25 0 0 1 6.25 3h15.5zm.583 20.4l-7.807-7.68a.75.75 0 0 0-.968-.07l-.084.07l-7.808 7.68c.183.065.38.1.584.1h15.5c.204 0 .4-.035.583-.1l-7.807-7.68l7.807 7.68zM21.75 4.5H6.25A1.75 1.75 0 0 0 4.5 6.25v15.5c0 .208.036.408.103.593l7.82-7.692a2.25 2.25 0 0 1 3.026-.117l.129.117l7.82 7.692c.066-.185.102-.385.102-.593V6.25a1.75 1.75 0 0 0-1.75-1.75zm-3.25 3a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5zm0 1.5a1 1 0 1 0 0 2a1 1 0 0 0 0-2z`,fill:`currentColor`})])],-1)})()}function Ze(){return(()=>{let e=N(`c8e04259929228b8`);return e[0]||=s(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 28 28`},[s(`g`,{fill:`none`},[s(`path`,{d:`M6.4 2A2.4 2.4 0 0 0 4 4.4v19.2A2.4 2.4 0 0 0 6.4 26h15.2a2.4 2.4 0 0 0 2.4-2.4V11.578c0-.729-.29-1.428-.805-1.944l-6.931-6.931A2.4 2.4 0 0 0 14.567 2H6.4zm-.9 2.4a.9.9 0 0 1 .9-.9H14V10a2 2 0 0 0 2 2h6.5v11.6a.9.9 0 0 1-.9.9H6.4a.9.9 0 0 1-.9-.9V4.4zm16.44 6.1H16a.5.5 0 0 1-.5-.5V4.06l6.44 6.44z`,fill:`currentColor`})])],-1)})()}var Qe=r({name:`UploadProgress`,props:{show:Boolean,percentage:{type:Number,required:!0},status:{type:String,required:!0}},setup(){return{mergedTheme:n(J).mergedThemeRef}},render(){return i(),p(W,null,{_:1,default:D(()=>this.show?(i(),p(Fe,{key:1,type:`line`,showIndicator:!1,percentage:this.percentage,status:this.status,height:2,theme:this.mergedTheme.peers.Progress,themeOverrides:this.mergedTheme.peerOverrides.Progress},null,8,[`percentage`,`status`,`theme`,`themeOverrides`])):null)})}}),$e=[`href`,`onClick`],et=[`href`,`onClick`],tt=[`onClick`],$={paddingMedium:`0 3px`,heightMedium:`24px`,iconSizeMedium:`18px`},nt=r({name:`UploadFile`,props:{clsPrefix:{type:String,required:!0},file:{type:Object,required:!0},listType:{type:String,required:!0},index:{type:Number,required:!0}},setup(e){let t=n(J),r=c(null),i=c(``),a=o(()=>{let{file:t}=e;return t.status===`finished`?`success`:t.status===`error`?`error`:`info`}),s=o(()=>{let{file:t}=e;if(t.status===`error`)return`error`}),l=o(()=>{let{file:t}=e;return t.status===`uploading`}),u=o(()=>{if(!t.showCancelButtonRef.value)return!1;let{file:n}=e;return[`uploading`,`pending`,`error`].includes(n.status)}),d=o(()=>{if(!t.showRemoveButtonRef.value)return!1;let{file:n}=e;return[`finished`].includes(n.status)}),p=o(()=>{if(!t.showDownloadButtonRef.value)return!1;let{file:n}=e;return[`finished`].includes(n.status)}),m=o(()=>{if(!t.showRetryButtonRef.value)return!1;let{file:n}=e;return[`error`].includes(n.status)}),h=se(()=>i.value||e.file.thumbnailUrl||e.file.url),g=o(()=>{if(!t.showPreviewButtonRef.value)return!1;let{file:{status:n},listType:r}=e;return[`finished`].includes(n)&&h.value&&r===`image-card`});async function _(){let n=t.onRetryRef.value;n&&await n({file:e.file})===!1||t.submit({fileId:e.file.id})}function v(t){t.preventDefault();let{file:n}=e;[`finished`,`pending`,`error`].includes(n.status)?b(n):[`uploading`].includes(n.status)?S(n):L(`upload`,`The button clicked type is unknown.`)}function y(t){t.preventDefault(),x(e.file)}function b(n){let{xhrMap:r,doChange:i,onRemoveRef:{value:a},mergedFileListRef:{value:o}}=t;Promise.resolve(!a||a({file:Object.assign({},n),fileList:o,index:e.index})).then(e=>{if(e===!1)return;let t=Object.assign({},n,{status:`removed`});r.delete(n.id),i(t,void 0,{remove:!0})})}function x(e){let{onDownloadRef:{value:n},customDownloadRef:{value:r}}=t;Promise.resolve(!n||n(Object.assign({},e))).then(t=>{t!==!1&&(r?r(Object.assign({},e)):ae(e.url,e.name))})}function S(e){let{xhrMap:n}=t;n.get(e.id)?.abort(),b(Object.assign({},e))}function C(n){let{onPreviewRef:{value:i}}=t;if(i)i(e.file,{event:n});else if(e.listType===`image-card`){let{value:e}=r;if(!e)return;e.showPreview()}}let w=async()=>{let{listType:n}=e;(n===`image`||n===`image-card`)&&t.shouldUseThumbnailUrlRef.value(e.file)&&(i.value=await t.getFileThumbnailUrlResolver(e.file))};return f(()=>{w()}),{mergedTheme:t.mergedThemeRef,progressStatus:a,buttonType:s,showProgress:l,disabled:t.mergedDisabledRef,showCancelButton:u,showRemoveButton:d,showDownloadButton:p,showRetryButton:m,showPreviewButton:g,alwaysShowActions:t.alwaysShowActionsRef,mergedThumbnailUrl:h,shouldUseThumbnailUrl:t.shouldUseThumbnailUrlRef,renderIcon:t.renderIconRef,imageRef:r,handleRemoveOrCancelClick:v,handleDownloadClick:y,handleRetryClick:_,handlePreviewClick:C}},render(){let{clsPrefix:e,mergedTheme:t,listType:n,file:r,renderIcon:a}=this,o,c=n===`image`;o=c||n===`image-card`?!this.shouldUseThumbnailUrl(r)||!this.mergedThumbnailUrl?(i(),l(`span`,{key:1,class:A(`${e}-upload-file-info__thumbnail`)},[a?(i(),l(u,{key:0},[P(()=>a(r))],64)):(i(),l(u,{key:1},[Le(r)?(i(),p(w,{key:0,clsPrefix:e},{default:Xe},1032,[`clsPrefix`])):(i(),p(w,{key:1,clsPrefix:e},{default:Ze},1032,[`clsPrefix`]))],64))],2)):(i(),l(`a`,{key:2,rel:`noopener noreferer`,target:`_blank`,href:r.url||void 0,class:A(`${e}-upload-file-info__thumbnail`),onClick:this.handlePreviewClick},[n===`image-card`?(i(),p(ie,{key:0,src:this.mergedThumbnailUrl||void 0,previewSrc:r.url||void 0,alt:r.name,ref:`imageRef`},null,8,[`src`,`previewSrc`,`alt`])):(i(),l(`img`,{key:1,src:this.mergedThumbnailUrl||void 0,alt:r.name},null,8,[`src`,`alt`]))],10,$e)):(t=>(i(),l(`span`,{key:3,class:A(`${e}-upload-file-info__thumbnail`)},[a?(i(),l(u,{key:0},[P(()=>a(r))],64)):(i(),p(w,{key:1,clsPrefix:e},{default:()=>(i(),p(Ke))},1032,[`clsPrefix`]))],2)))(o);let d=(i(),p(Qe,{show:this.showProgress,percentage:r.percentage||0,status:this.progressStatus},null,8,[`show`,`percentage`,`status`])),f=n===`text`||n===`image`;return i(),l(`div`,{class:A([`${e}-upload-file`,`${e}-upload-file--${this.progressStatus}-status`,r.url&&r.status!==`error`&&n!==`image-card`&&`${e}-upload-file--with-url`,`${e}-upload-file--${n}-type`,this.alwaysShowActions&&`${e}-upload-file--always-show-actions`])},[s(`div`,{class:A(`${e}-upload-file-info`)},[P(()=>o),s(`div`,{class:A(`${e}-upload-file-info__name`)},[P(()=>f&&(r.url&&r.status!==`error`?(i(),l(`a`,{key:4,rel:`noopener noreferer`,target:`_blank`,href:r.url||void 0,onClick:this.handlePreviewClick},[P(()=>r.name)],8,et)):(i(),l(`span`,{key:5,onClick:this.handlePreviewClick},[P(()=>r.name)],8,tt)))),P(()=>c&&d)],2),s(`div`,{class:A([`${e}-upload-file-info__action`,`${e}-upload-file-info__action--${n}-type`,this.alwaysShowActions&&`${e}-upload-file-info__action--always-show`])},[this.showPreviewButton?(i(),p(G,{key:`preview`,quaternary:!0,type:this.buttonType,onClick:this.handlePreviewClick,theme:t.peers.Button,themeOverrides:t.peerOverrides.Button,builtinThemeOverrides:$},{icon:()=>(i(),p(w,{clsPrefix:e},{default:()=>(i(),p(oe))},1032,[`clsPrefix`]))},1032,[`type`,`onClick`,`theme`,`themeOverrides`,`builtinThemeOverrides`])):P(()=>null),P(()=>(this.showRemoveButton||this.showCancelButton)&&!this.disabled&&(i(),p(G,{key:`cancelOrTrash`,theme:t.peers.Button,themeOverrides:t.peerOverrides.Button,quaternary:!0,builtinThemeOverrides:$,type:this.buttonType,onClick:this.handleRemoveOrCancelClick},{icon:()=>(i(),p(le,null,{default:()=>this.showRemoveButton?(i(),p(w,{clsPrefix:e,key:`trash`},{default:()=>(i(),p(Ye))},1032,[`clsPrefix`])):(i(),p(w,{clsPrefix:e,key:`cancel`},{default:()=>(i(),p(qe))},1032,[`clsPrefix`]))},1024))},1032,[`theme`,`themeOverrides`,`builtinThemeOverrides`,`type`,`onClick`]))),P(()=>this.showRetryButton&&!this.disabled&&(i(),p(G,{key:`retry`,quaternary:!0,type:this.buttonType,onClick:this.handleRetryClick,theme:t.peers.Button,themeOverrides:t.peerOverrides.Button,builtinThemeOverrides:$},{icon:()=>(i(),p(w,{clsPrefix:e},{default:()=>(i(),p(Je))},1032,[`clsPrefix`]))},1032,[`type`,`onClick`,`theme`,`themeOverrides`,`builtinThemeOverrides`]))),this.showDownloadButton?(i(),p(G,{key:`download`,quaternary:!0,type:this.buttonType,onClick:this.handleDownloadClick,theme:t.peers.Button,themeOverrides:t.peerOverrides.Button,builtinThemeOverrides:$},{icon:()=>(i(),p(w,{clsPrefix:e},{default:()=>(i(),p(re))},1032,[`clsPrefix`]))},1032,[`type`,`onClick`,`theme`,`themeOverrides`,`builtinThemeOverrides`])):P(()=>null)],2)],2),P(()=>!c&&d)],2)}}),rt=r({name:`UploadFileList`,setup(e,{slots:t}){let r=n(J,null);r||F(`upload-file-list`,"`n-upload-file-list` must be placed inside `n-upload`.");let{abstractRef:s,mergedClsPrefixRef:c,listTypeRef:u,mergedFileListRef:f,fileListClassRef:m,fileListStyleRef:h,cssVarsRef:g,themeClassRef:_,maxReachedRef:v,showTriggerRef:y,imageGroupPropsRef:b}=r,x=o(()=>u.value===`image-card`),S=()=>f.value.map((e,t)=>(i(),p(nt,{clsPrefix:c.value,key:e.id,file:e,index:t,listType:u.value},null,8,[`clsPrefix`,`file`,`index`,`listType`]))),C=()=>x.value?(i(),p(ne,d({key:1},b.value),{default:S},1040)):(i(),p(W,{key:2,group:!0},{default:S},1024));return()=>{let{value:e}=c,{value:n}=s;return i(),l(`div`,{class:A([`${e}-upload-file-list`,x.value&&`${e}-upload-file-list--grid`,n?_?.value:void 0,m.value]),style:a([n&&g?g.value:``,h.value])},[P(()=>C()),P(()=>y.value&&!v.value&&x.value&&(i(),p(Ge,null,M(t),1024)))],6)}}}),it=C([g(`upload`,`width: 100%;`,[v(`dragger-inside`,[g(`upload-trigger`,`
 display: block;
 `)]),v(`drag-over`,[g(`upload-dragger`,`
 border: var(--n-dragger-border-hover);
 `)])]),g(`upload-dragger`,`
 cursor: pointer;
 box-sizing: border-box;
 width: 100%;
 text-align: center;
 border-radius: var(--n-border-radius);
 padding: 24px;
 opacity: 1;
 transition:
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-dragger-color);
 border: var(--n-dragger-border);
 `,[C(`&:hover`,`
 border: var(--n-dragger-border-hover);
 `),v(`disabled`,`
 cursor: not-allowed;
 `)]),g(`upload-trigger`,`
 display: inline-block;
 box-sizing: border-box;
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 `,[C(`+`,[g(`upload-file-list`,`margin-top: 8px;`)]),v(`disabled`,`
 opacity: var(--n-item-disabled-opacity);
 cursor: not-allowed;
 `),v(`image-card`,`
 width: 96px;
 height: 96px;
 `,[g(`base-icon`,`
 font-size: 24px;
 `),g(`upload-dragger`,`
 padding: 0;
 height: 100%;
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `)])]),g(`upload-file-list`,`
 line-height: var(--n-line-height);
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 `,[C(`a, img`,`outline: none;`),v(`disabled`,`
 opacity: var(--n-item-disabled-opacity);
 cursor: not-allowed;
 `,[g(`upload-file`,`cursor: not-allowed;`)]),v(`grid`,`
 display: grid;
 grid-template-columns: repeat(auto-fill, 96px);
 grid-gap: 8px;
 margin-top: 0;
 `),g(`upload-file`,`
 display: block;
 box-sizing: border-box;
 cursor: default;
 padding: 0px 12px 0 6px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `,[K(),g(`progress`,[K({foldPadding:!0})]),C(`&:hover`,`
 background-color: var(--n-item-color-hover);
 `,[g(`upload-file-info`,[T(`action`,`
 opacity: 1;
 `)])]),v(`image-type`,`
 border-radius: var(--n-border-radius);
 text-decoration: underline;
 text-decoration-color: #0000;
 `,[g(`upload-file-info`,`
 padding-top: 0px;
 padding-bottom: 0px;
 width: 100%;
 height: 100%;
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding: 6px 0;
 `,[g(`progress`,`
 padding: 2px 0;
 margin-bottom: 0;
 `),T(`name`,`
 padding: 0 8px;
 `),T(`thumbnail`,`
 width: 32px;
 height: 32px;
 font-size: 28px;
 display: flex;
 justify-content: center;
 align-items: center;
 `,[C(`img`,`
 width: 100%;
 `)])])]),v(`text-type`,[g(`progress`,`
 box-sizing: border-box;
 padding-bottom: 6px;
 margin-bottom: 6px;
 `)]),v(`image-card-type`,`
 position: relative;
 width: 96px;
 height: 96px;
 border: var(--n-item-border-image-card);
 border-radius: var(--n-border-radius);
 padding: 0;
 display: flex;
 align-items: center;
 justify-content: center;
 transition: border-color .3s var(--n-bezier), background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 overflow: hidden;
 `,[g(`progress`,`
 position: absolute;
 left: 8px;
 bottom: 8px;
 right: 8px;
 width: unset;
 `),g(`upload-file-info`,`
 padding: 0;
 width: 100%;
 height: 100%;
 `,[T(`thumbnail`,`
 width: 100%;
 height: 100%;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 font-size: 36px;
 `,[C(`img`,`
 width: 100%;
 `)])]),C(`&::before`,`
 position: absolute;
 z-index: 1;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 opacity: 0;
 transition: opacity .2s var(--n-bezier);
 content: "";
 `),C(`&:hover`,[C(`&::before`,`opacity: 1;`),g(`upload-file-info`,[T(`thumbnail`,`opacity: .12;`)])]),v(`always-show-actions`,[C(`&::before`,`opacity: 1;`),g(`upload-file-info`,[T(`thumbnail`,`opacity: .12;`)])])]),v(`error-status`,[C(`&:hover`,`
 background-color: var(--n-item-color-hover-error);
 `),g(`upload-file-info`,[T(`name`,`color: var(--n-item-text-color-error);`),T(`thumbnail`,`color: var(--n-item-text-color-error);`)]),v(`image-card-type`,`
 border: var(--n-item-border-image-card-error);
 `)]),v(`with-url`,`
 cursor: pointer;
 `,[g(`upload-file-info`,[T(`name`,`
 color: var(--n-item-text-color-success);
 text-decoration-color: var(--n-item-text-color-success);
 `,[C(`a`,`
 text-decoration: underline;
 `)])])]),g(`upload-file-info`,`
 position: relative;
 padding-top: 6px;
 padding-bottom: 6px;
 display: flex;
 flex-wrap: nowrap;
 `,[T(`thumbnail`,`
 font-size: 18px;
 opacity: 1;
 transition: opacity .2s var(--n-bezier);
 color: var(--n-item-icon-color);
 `,[g(`base-icon`,`
 margin-right: 2px;
 vertical-align: middle;
 transition: color .3s var(--n-bezier);
 `)]),T(`action`,`
 padding-top: inherit;
 padding-bottom: inherit;
 position: absolute;
 right: 0;
 top: 0;
 bottom: 0;
 width: 80px;
 display: flex;
 align-items: center;
 transition: opacity .2s var(--n-bezier);
 justify-content: flex-end;
 opacity: 0;
 `,[g(`button`,[C(`&:not(:last-child)`,{marginRight:`4px`}),g(`base-icon`,[C(`svg`,[ue()])])]),v(`image-type`,`
 position: relative;
 max-width: 80px;
 width: auto;
 `),v(`image-card-type`,`
 z-index: 2;
 position: absolute;
 width: 100%;
 height: 100%;
 left: 0;
 right: 0;
 bottom: 0;
 top: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 `),v(`always-show`,`
 opacity: 1;
 `)]),T(`name`,`
 color: var(--n-item-text-color);
 flex: 1;
 display: flex;
 justify-content: center;
 text-overflow: ellipsis;
 overflow: hidden;
 flex-direction: column;
 text-decoration-color: #0000;
 font-size: var(--n-font-size);
 transition:
 color .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier); 
 `,[C(`a`,`
 color: inherit;
 text-decoration: underline;
 `)])])])]),g(`upload-file-input`,`
 display: none;
 width: 0;
 height: 0;
 opacity: 0;
 `)]),at=[`accept`,`multiple`,`onChange`,`webkitdirectory`,`directory`];function ot(e,t,n){let{doChange:r,xhrMap:i}=e,a=0;function o(n){let o=Object.assign({},t,{status:`error`,percentage:a});i.delete(t.id),o=Q(e.onError?.({file:o,event:n})||o),r(o,n)}function s(s){if(e.isErrorState){if(e.isErrorState(n)){o(s);return}}else if(n.status<200||n.status>=300){o(s);return}let c=Object.assign({},t,{status:`finished`,percentage:a});i.delete(t.id),c=Q(e.onFinish?.({file:c,event:s})||c),r(c,s)}return{handleXHRLoad:s,handleXHRError:o,handleXHRAbort(e){let n=Object.assign({},t,{status:`removed`,file:null,percentage:a});i.delete(t.id),r(n,e)},handleXHRProgress(e){let n=Object.assign({},t,{status:`uploading`});if(e.lengthComputable){let t=Math.ceil(e.loaded/e.total*100);n.percentage=t,a=t}r(n,e)}}}function st(e){let{inst:t,file:n,data:r,headers:i,withCredentials:a,action:o,customRequest:s}=e,{doChange:c}=e.inst,l=0;s({file:n,data:r,headers:i,withCredentials:a,action:o,onProgress(e){let t=Object.assign({},n,{status:`uploading`}),r=e.percent;t.percentage=r,l=r,c(t)},onFinish(){let e=Object.assign({},n,{status:`finished`,percentage:l});e=Q(t.onFinish?.({file:e})||e),c(e)},onError(){let e=Object.assign({},n,{status:`error`,percentage:l});e=Q(t.onError?.({file:e})||e),c(e)}})}function ct(e,t,n){let r=ot(e,t,n);n.onabort=r.handleXHRAbort,n.onerror=r.handleXHRError,n.onload=r.handleXHRLoad,n.upload&&(n.upload.onprogress=r.handleXHRProgress)}function lt(e,t){return typeof e==`function`?e({file:t}):e||{}}function ut(e,t,n){let r=lt(t,n);r&&Object.keys(r).forEach(t=>{e.setRequestHeader(t,r[t])})}function dt(e,t,n){let r=lt(t,n);r&&Object.keys(r).forEach(t=>{e.append(t,r[t])})}function ft(e,t,n,{method:r,action:i,withCredentials:a,responseType:o,headers:s,data:c}){let l=new XMLHttpRequest;l.responseType=o,e.xhrMap.set(n.id,l),l.withCredentials=a;let u=new FormData;if(dt(u,c,n),n.file!==null&&u.append(t,n.file),ct(e,n,l),i!==void 0){l.open(r.toUpperCase(),i),ut(l,s,n),l.send(u);let t=Object.assign({},n,{status:`uploading`});e.doChange(t)}}var pt={..._.props,name:{type:String,default:`file`},accept:String,action:String,customRequest:Function,directory:Boolean,directoryDnd:{type:Boolean,default:void 0},method:{type:String,default:`POST`},multiple:Boolean,showFileList:{type:Boolean,default:!0},data:[Object,Function],headers:[Object,Function],withCredentials:Boolean,responseType:{type:String,default:``},disabled:{type:Boolean,default:void 0},onChange:Function,onRemove:Function,onFinish:Function,onError:Function,onRetry:Function,onBeforeUpload:Function,isErrorState:Function,onDownload:Function,customDownload:Function,defaultUpload:{type:Boolean,default:!0},fileList:Array,"onUpdate:fileList":[Function,Array],onUpdateFileList:[Function,Array],fileListClass:String,fileListStyle:[String,Object],defaultFileList:{type:Array,default:()=>[]},showCancelButton:{type:Boolean,default:!0},showRemoveButton:{type:Boolean,default:!0},showDownloadButton:Boolean,showRetryButton:{type:Boolean,default:!0},showPreviewButton:{type:Boolean,default:!0},alwaysShowActions:Boolean,listType:{type:String,default:`text`},onPreview:Function,shouldUseThumbnailUrl:{type:Function,default:e=>ze?Le(e):!1},createThumbnailUrl:Function,abstract:Boolean,max:Number,showTrigger:{type:Boolean,default:!0},imageGroupProps:Object,inputProps:Object,triggerClass:String,triggerStyle:[String,Object],renderIcon:Function},mt=r({name:`Upload`,props:pt,setup(n){n.abstract&&n.listType===`image-card`&&F(`upload`,`when the list-type is image-card, abstract is not supported.`);let{mergedClsPrefixRef:r,inlineThemeDisabled:i,mergedRtlRef:a}=O(n),s=_(`Upload`,`-upload`,it,pe,n,r),l=ee(`Upload`,a,r),u=de(n),d=c(n.defaultFileList),f=h(n,`fileList`),p=c(null),m={value:!1},g=c(!1),v=new Map,y=ce(f,d),x=o(()=>y.value.map(Q)),C=o(()=>{let{max:e}=n;return e!==void 0&&x.value.length>=e});function w(){p.value?.click()}function T(e){let t=e.target;M(t.files?Array.from(t.files).map(e=>({file:e,entry:null,source:`input`})):null,e),t.value=``}function E(e){let{"onUpdate:fileList":t,onUpdateFileList:r}=n;t&&S(t,e),r&&S(r,e),d.value=e}let D=o(()=>n.multiple||n.directory),k=(e,t,r={append:!1,remove:!1})=>{let{append:i,remove:a}=r,o=Array.from(x.value),s=o.findIndex(t=>t.id===e.id);if(i||a||~s){i?o.push(e):a?o.splice(s,1):o.splice(s,1,e);let{onChange:r}=n;r&&r({file:e,fileList:o,event:t}),E(o)}},A=Promise.resolve(),j=(e,n,r)=>{A=A.then(async()=>{await t(),k(e,n,r)})};function M(e,r){if(!e||e.length===0)return;let{onBeforeUpload:i}=n;e=D.value?e:[e[0]];let{max:a,accept:o}=n;e=e.filter(({file:e,source:t})=>t===`dnd`&&o?.trim()?Ue(e.name,e.type,o):!0),a&&(e=e.slice(0,a-x.value.length));let s=U();Promise.all(e.map(async({file:e,entry:t})=>{let n={id:U(),batchId:s,name:e.name,status:`pending`,percentage:0,file:e,url:null,type:e.type,thumbnailUrl:null,fullPath:t?.fullPath??`/${e.webkitRelativePath||e.name}`};return!i||await i({file:n,fileList:x.value})!==!1?n:null})).then(async e=>{let n=Promise.resolve();e.forEach(e=>{n=n.then(t).then(()=>{e&&k(e,r,{append:!0})})}),await n}).then(()=>{n.defaultUpload&&N()})}function N({fileId:e,retry:t=!1}={}){let{method:r,action:i,withCredentials:a,headers:o,data:s,name:c}=n,l=e===void 0?x.value:x.value.filter(t=>t.id===e),u=t||e!==void 0;l.forEach(e=>{let{status:t}=e;(t===`pending`||t===`error`&&u)&&(n.customRequest?st({inst:{doChange:j,xhrMap:v,onFinish:n.onFinish,onError:n.onError},file:e,action:i,withCredentials:a,headers:o,data:s,customRequest:n.customRequest}):ft({doChange:k,xhrMap:v,onFinish:n.onFinish,onError:n.onError,isErrorState:n.isErrorState},c,e,{method:r,action:i,withCredentials:a,responseType:n.responseType,headers:o,data:s}))})}function P(e){if(e.thumbnailUrl)return e.thumbnailUrl;let{createThumbnailUrl:t}=n;return t?t(e.file,e)??(e.url||``):e.url?e.url:e.file?Re(e.file):``}let I=o(()=>{let{common:{cubicBezierEaseInOut:e},self:{draggerColor:t,draggerBorder:n,draggerBorderHover:r,itemColorHover:i,itemColorHoverError:a,itemTextColorError:o,itemTextColorSuccess:c,itemTextColor:l,itemIconColor:u,itemDisabledOpacity:d,lineHeight:f,borderRadius:p,fontSize:m,itemBorderImageCardError:h,itemBorderImageCard:g}}=s.value;return{"--n-bezier":e,"--n-border-radius":p,"--n-dragger-border":n,"--n-dragger-border-hover":r,"--n-dragger-color":t,"--n-font-size":m,"--n-item-color-hover":i,"--n-item-color-hover-error":a,"--n-item-disabled-opacity":d,"--n-item-icon-color":u,"--n-item-text-color":l,"--n-item-text-color-error":o,"--n-item-text-color-success":c,"--n-line-height":f,"--n-item-border-image-card-error":h,"--n-item-border-image-card":g}}),L=i?b(`upload`,void 0,I,n):void 0;e(J,{mergedClsPrefixRef:r,mergedThemeRef:s,showCancelButtonRef:h(n,`showCancelButton`),showDownloadButtonRef:h(n,`showDownloadButton`),showRemoveButtonRef:h(n,`showRemoveButton`),showRetryButtonRef:h(n,`showRetryButton`),onRemoveRef:h(n,`onRemove`),onDownloadRef:h(n,`onDownload`),customDownloadRef:h(n,`customDownload`),mergedFileListRef:x,triggerClassRef:h(n,`triggerClass`),triggerStyleRef:h(n,`triggerStyle`),shouldUseThumbnailUrlRef:h(n,`shouldUseThumbnailUrl`),renderIconRef:h(n,`renderIcon`),xhrMap:v,submit:N,doChange:k,showPreviewButtonRef:h(n,`showPreviewButton`),alwaysShowActionsRef:h(n,`alwaysShowActions`),onPreviewRef:h(n,`onPreview`),getFileThumbnailUrlResolver:P,listTypeRef:h(n,`listType`),dragOverRef:g,openOpenFileDialog:w,draggerInsideRef:m,handleFileAddition:M,mergedDisabledRef:u.mergedDisabledRef,maxReachedRef:C,fileListClassRef:h(n,`fileListClass`),fileListStyleRef:h(n,`fileListStyle`),abstractRef:h(n,`abstract`),acceptRef:h(n,`accept`),cssVarsRef:i?void 0:I,themeClassRef:L?.themeClass,onRender:L?.onRender,showTriggerRef:h(n,`showTrigger`),imageGroupPropsRef:h(n,`imageGroupProps`),mergedDirectoryDndRef:o(()=>n.directoryDnd??n.directory),onRetryRef:h(n,`onRetry`)});let R={clear:()=>{d.value=[]},submit:N,openOpenFileDialog:w};return{mergedClsPrefix:r,draggerInsideRef:m,rtlEnabled:l,inputElRef:p,mergedTheme:s,dragOver:g,mergedMultiple:D,cssVars:i?void 0:I,themeClass:L?.themeClass,onRender:L?.onRender,handleFileInputChange:T,...R}},render(){let{draggerInsideRef:e,mergedClsPrefix:t,$slots:n,directory:r,onRender:o}=this;n.default&&!this.abstract&&n.default()[0]?.type?.__UPLOAD_DRAGGER__&&(e.value=!0);let s=(i(),l(`input`,d(this.inputProps,{ref:`inputElRef`,type:`file`,class:`${t}-upload-file-input`,accept:this.accept,multiple:this.mergedMultiple,onChange:this.handleFileInputChange,webkitdirectory:r||void 0,directory:r||void 0}),null,16,at));return this.abstract?(i(),l(u,{key:1},[P(()=>n.default?.()),(i(),p(m,{to:`body`},M(s),1024))],64)):(o?.(),i(),l(`div`,{class:A([`${t}-upload`,this.rtlEnabled&&`${t}-upload--rtl`,e.value&&`${t}-upload--dragger-inside`,this.dragOver&&`${t}-upload--drag-over`,this.themeClass]),style:a(this.cssVars)},[P(()=>s),P(()=>this.showTrigger&&this.listType!==`image-card`&&(i(),p(Ge,null,M(n),1024))),P(()=>this.showFileList&&(i(),p(rt,null,M(n),1024)))],6))}});export{mt as t};