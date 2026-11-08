import{S as e,V as t,Wt as n,b as r,d as i,f as a,gt as o,h as s,nt as c,p as l}from"./runtime-core.esm-bundler-B8bAGhjJ.js";import{Cn as u,Ct as d,D as f,Et as p,O as m,Ot as h,St as g,ft as _,it as v,m as y,st as b,tt as x}from"./Card-D1y5zSiq.js";import{r as S}from"./cssr-D3CCCErG.js";import{n as C,r as w}from"./browser-C5kocWKl.js";import{c as T}from"./index-CUZUr-ur.js";var E=g([g(`@keyframes spin-rotate`,`
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `),d(`spin-container`,`
 position: relative;
 `,[d(`spin-body`,`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[y()])]),d(`spin-body`,`
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `),d(`spin`,`
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `,[p(`rotate`,`
 animation: spin-rotate 2s linear infinite;
 `)]),d(`spin-description`,`
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `),d(`spin-content`,`
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `,[p(`spinning`,`
 user-select: none;
 -webkit-user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]),D={small:20,medium:18,large:16},O={...f.props,contentClass:String,contentStyle:[Object,String],description:String,size:{type:[String,Number],default:`medium`},show:{type:Boolean,default:!0},rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0},delay:Number,...w,strokeWidth:Number},k=e({name:`Spin`,props:O,slots:Object,setup(e){let{mergedClsPrefixRef:t,inlineThemeDisabled:n}=_(e),r=f(`Spin`,`-spin`,E,T,e,t),a=i(()=>{let{size:t}=e,{common:{cubicBezierEaseInOut:n},self:i}=r.value,{opacitySpinning:a,color:o,textColor:s}=i;return{"--n-bezier":n,"--n-opacity-spinning":a,"--n-size":typeof t==`number`?x(t):i[h(`size`,t)],"--n-color":o,"--n-text-color":s}}),s=n?m(`spin`,i(()=>{let{size:t}=e;return typeof t==`number`?String(t):t[0]}),a,e):void 0,l=S(e,[`spinning`,`show`]),u=o(!1);return c(t=>{let n;if(l.value){let{delay:r}=e;if(r){n=window.setTimeout(()=>{u.value=!0},r),t(()=>{clearTimeout(n)});return}}u.value=l.value}),{mergedClsPrefix:t,active:u,mergedStrokeWidth:i(()=>{let{strokeWidth:t}=e;if(t!==void 0)return t;let{size:n}=e;return D[typeof n==`number`?`medium`:n]}),cssVars:n?void 0:a,themeClass:s?.themeClass,onRender:s?.onRender}},render(){let{$slots:e,mergedClsPrefix:i,description:o}=this,c=e.icon&&this.rotate,d=(o||e.description)&&(t(),s(`div`,{class:v(`${i}-spin-description`)},[b(()=>o||e.description?.())],2)),f=e.icon?(t(),s(`div`,{key:1,class:v([`${i}-spin-body`,this.themeClass])},[a(`div`,{class:v([`${i}-spin`,c&&`${i}-spin--rotate`]),style:n(e.default?``:this.cssVars)},[b(()=>e.icon())],6),b(()=>d)],2)):(t(),s(`div`,{key:2,class:v([`${i}-spin-body`,this.themeClass])},[(t(),l(C,{clsPrefix:i,style:n(e.default?``:this.cssVars),stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,radius:this.radius,scale:this.scale,class:v(`${i}-spin`)},null,8,[`clsPrefix`,`style`,`stroke`,`stroke-width`,`radius`,`scale`,`class`])),b(()=>d)],2));return this.onRender?.(),e.default?(t(),s(`div`,{key:3,class:v([`${i}-spin-container`,this.themeClass]),style:n(this.cssVars)},[a(`div`,{class:v([`${i}-spin-content`,this.active&&`${i}-spin-content--spinning`,this.contentClass]),style:n(this.contentStyle)},[b(()=>e.default?.())],6),r(u,{name:`fade-in-transition`},{default:()=>this.active?f:null},1024)],6)):f}});export{k as t};