import{S as e,V as t,Wt as n,d as r,f as i,h as a,i as o}from"./runtime-core.esm-bundler-B8bAGhjJ.js";import{Ct as s,D as c,Dt as l,Et as u,O as d,Tt as f,ft as p,it as m,j as h,st as g}from"./Card-D1y5zSiq.js";function _(e){let{textColor1:t,dividerColor:n,fontWeightStrong:r}=e;return{textColor:t,color:n,fontWeight:r}}var v={name:`Divider`,common:h,self:_},y=s(`divider`,`
 position: relative;
 display: flex;
 width: 100%;
 box-sizing: border-box;
 font-size: 16px;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
`,[l(`vertical`,`
 margin-top: 24px;
 margin-bottom: 24px;
 `,[l(`no-title`,`
 display: flex;
 align-items: center;
 `)]),f(`title`,`
 display: flex;
 align-items: center;
 margin-left: 12px;
 margin-right: 12px;
 white-space: nowrap;
 font-weight: var(--n-font-weight);
 `),u(`title-position-left`,[f(`line`,[u(`left`,{width:`28px`})])]),u(`title-position-right`,[f(`line`,[u(`right`,{width:`28px`})])]),u(`dashed`,[f(`line`,`
 background-color: #0000;
 height: 0px;
 width: 100%;
 border-style: dashed;
 border-width: 1px 0 0;
 `)]),u(`vertical`,`
 display: inline-block;
 height: 1em;
 margin: 0 8px;
 vertical-align: middle;
 width: 1px;
 `),f(`line`,`
 border: none;
 transition: background-color .3s var(--n-bezier), border-color .3s var(--n-bezier);
 height: 1px;
 width: 100%;
 margin: 0;
 `),l(`dashed`,[f(`line`,{backgroundColor:`var(--n-color)`})]),u(`dashed`,[f(`line`,{borderColor:`var(--n-color)`})]),u(`vertical`,{backgroundColor:`var(--n-color)`})]),b={...c.props,titlePlacement:{type:String,default:`center`},dashed:Boolean,vertical:Boolean},x=e({name:`Divider`,props:b,setup(e){let{mergedClsPrefixRef:t,inlineThemeDisabled:n}=p(e),i=c(`Divider`,`-divider`,y,v,e,t),a=r(()=>{let{common:{cubicBezierEaseInOut:e},self:{color:t,textColor:n,fontWeight:r}}=i.value;return{"--n-bezier":e,"--n-color":t,"--n-text-color":n,"--n-font-weight":r}}),o=n?d(`divider`,void 0,a,e):void 0;return{mergedClsPrefix:t,cssVars:n?void 0:a,themeClass:o?.themeClass,onRender:o?.onRender}},render(){let{$slots:e,titlePlacement:r,vertical:s,dashed:c,cssVars:l,mergedClsPrefix:u}=this;return this.onRender?.(),t(),a(`div`,{role:`separator`,class:m([`${u}-divider`,this.themeClass,{[`${u}-divider--vertical`]:s,[`${u}-divider--no-title`]:!e.default,[`${u}-divider--dashed`]:c,[`${u}-divider--title-position-${r}`]:e.default&&r}]),style:n(l)},[s?g(()=>null):(t(),a(`div`,{key:0,class:m(`${u}-divider__line ${u}-divider__line--left`)},null,2)),!s&&e.default?(t(),a(o,{key:2},[i(`div`,{class:m(`${u}-divider__title`)},[g(()=>this.$slots.default?.())],2),i(`div`,{class:m(`${u}-divider__line ${u}-divider__line--right`)},null,2)],64)):g(()=>null)],6)}});export{_ as n,x as t};