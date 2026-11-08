import{S as e,V as t,d as n,f as r,gt as i,h as a,j as o,p as s}from"./runtime-core.esm-bundler-B8bAGhjJ.js";import{Ct as c,D as l,Et as u,M as d,N as f,O as p,Ot as m,St as h,T as g,Tt as _,b as v,et as y,ft as b,g as x,it as S,j as C,s as w,st as T,v as E}from"./Card-D1y5zSiq.js";import{Bt as D,Rt as O,Vt as k,zt as A}from"./router-gAJriO_J.js";import{l as j}from"./Button-AFSoWKwt.js";import{A as M,k as N}from"./index-y_ex5RzL.js";function P(e){let{lineHeight:t,borderRadius:n,fontWeightStrong:r,baseColor:i,dividerColor:a,actionColor:o,textColor1:s,textColor2:c,closeColorHover:l,closeColorPressed:u,closeIconColor:p,closeIconColorHover:m,closeIconColorPressed:h,infoColor:g,successColor:_,warningColor:v,errorColor:y,fontSize:b}=e;return{...M,fontSize:b,lineHeight:t,titleFontWeight:r,borderRadius:n,border:`1px solid ${a}`,color:o,titleTextColor:s,iconColor:c,contentTextColor:c,closeBorderRadius:n,closeColorHover:l,closeColorPressed:u,closeIconColor:p,closeIconColorHover:m,closeIconColorPressed:h,borderInfo:`1px solid ${f(i,d(g,{alpha:.25}))}`,colorInfo:f(i,d(g,{alpha:.08})),titleTextColorInfo:s,iconColorInfo:g,contentTextColorInfo:c,closeColorHoverInfo:l,closeColorPressedInfo:u,closeIconColorInfo:p,closeIconColorHoverInfo:m,closeIconColorPressedInfo:h,borderSuccess:`1px solid ${f(i,d(_,{alpha:.25}))}`,colorSuccess:f(i,d(_,{alpha:.08})),titleTextColorSuccess:s,iconColorSuccess:_,contentTextColorSuccess:c,closeColorHoverSuccess:l,closeColorPressedSuccess:u,closeIconColorSuccess:p,closeIconColorHoverSuccess:m,closeIconColorPressedSuccess:h,borderWarning:`1px solid ${f(i,d(v,{alpha:.33}))}`,colorWarning:f(i,d(v,{alpha:.08})),titleTextColorWarning:s,iconColorWarning:v,contentTextColorWarning:c,closeColorHoverWarning:l,closeColorPressedWarning:u,closeIconColorWarning:p,closeIconColorHoverWarning:m,closeIconColorPressedWarning:h,borderError:`1px solid ${f(i,d(y,{alpha:.25}))}`,colorError:f(i,d(y,{alpha:.08})),titleTextColorError:s,iconColorError:y,contentTextColorError:c,closeColorHoverError:l,closeColorPressedError:u,closeIconColorError:p,closeIconColorHoverError:m,closeIconColorPressedError:h}}var F={name:`Alert`,common:C,self:P},I=c(`alert`,`
 line-height: var(--n-line-height);
 border-radius: var(--n-border-radius);
 position: relative;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 text-align: start;
 word-break: break-word;
`,[_(`border`,`
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 transition: border-color .3s var(--n-bezier);
 border: var(--n-border);
 pointer-events: none;
 `),u(`closable`,[c(`alert-body`,[_(`title`,`
 padding-right: 24px;
 `)])]),_(`icon`,{color:`var(--n-icon-color)`}),c(`alert-body`,{padding:`var(--n-padding)`},[_(`title`,{color:`var(--n-title-text-color)`}),_(`content`,{color:`var(--n-content-text-color)`})]),N({originalTransition:`transform .3s var(--n-bezier)`,enterToProps:{transform:`scale(1)`},leaveToProps:{transform:`scale(0.9)`}}),_(`icon`,`
 position: absolute;
 left: 0;
 top: 0;
 align-items: center;
 justify-content: center;
 display: flex;
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 margin: var(--n-icon-margin);
 `),_(`close`,`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 `),u(`show-icon`,[c(`alert-body`,{paddingLeft:`calc(var(--n-icon-margin-left) + var(--n-icon-size) + var(--n-icon-margin-right))`})]),u(`right-adjust`,[c(`alert-body`,{paddingRight:`calc(var(--n-close-size) + var(--n-padding) + 2px)`})]),c(`alert-body`,`
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 `,[_(`title`,`
 transition: color .3s var(--n-bezier);
 font-size: 16px;
 line-height: 19px;
 font-weight: var(--n-title-font-weight);
 `,[h(`& +`,[_(`content`,{marginTop:`9px`})])]),_(`content`,{transition:`color .3s var(--n-bezier)`,fontSize:`var(--n-font-size)`})]),_(`icon`,{transition:`color .3s var(--n-bezier)`})]),L={...l.props,title:String,showIcon:{type:Boolean,default:!0},type:{type:String,default:`default`},bordered:{type:Boolean,default:!0},closable:Boolean,onClose:Function,onAfterLeave:Function,onAfterHide:Function},R=e({name:`Alert`,inheritAttrs:!1,props:L,slots:Object,setup(e){let{mergedClsPrefixRef:t,mergedBorderedRef:r,inlineThemeDisabled:a,mergedRtlRef:o}=b(e),s=l(`Alert`,`-alert`,I,F,e,t),c=x(`Alert`,o,t),u=n(()=>{let{common:{cubicBezierEaseInOut:t},self:n}=s.value,{fontSize:r,borderRadius:i,titleFontWeight:a,lineHeight:o,iconSize:c,iconMargin:l,iconMarginRtl:u,closeIconSize:d,closeBorderRadius:f,closeSize:p,closeMargin:h,closeMarginRtl:g,padding:_}=n,{type:v}=e,{left:b,right:x}=y(l);return{"--n-bezier":t,"--n-color":n[m(`color`,v)],"--n-close-icon-size":d,"--n-close-border-radius":f,"--n-close-color-hover":n[m(`closeColorHover`,v)],"--n-close-color-pressed":n[m(`closeColorPressed`,v)],"--n-close-icon-color":n[m(`closeIconColor`,v)],"--n-close-icon-color-hover":n[m(`closeIconColorHover`,v)],"--n-close-icon-color-pressed":n[m(`closeIconColorPressed`,v)],"--n-icon-color":n[m(`iconColor`,v)],"--n-border":n[m(`border`,v)],"--n-title-text-color":n[m(`titleTextColor`,v)],"--n-content-text-color":n[m(`contentTextColor`,v)],"--n-line-height":o,"--n-border-radius":i,"--n-font-size":r,"--n-title-font-weight":a,"--n-icon-size":c,"--n-icon-margin":l,"--n-icon-margin-rtl":u,"--n-close-size":p,"--n-close-margin":h,"--n-close-margin-rtl":g,"--n-padding":_,"--n-icon-margin-left":b,"--n-icon-margin-right":x}}),d=a?p(`alert`,n(()=>e.type[0]),u,e):void 0,f=i(!0),h=()=>{let{onAfterLeave:t,onAfterHide:n}=e;t&&t(),n&&n()};return{rtlEnabled:c,mergedClsPrefix:t,mergedBordered:r,visible:f,handleCloseClick:()=>{Promise.resolve(e.onClose?.()).then(e=>{e!==!1&&(f.value=!1)})},handleAfterLeave:()=>{h()},mergedTheme:s,cssVars:a?void 0:u,themeClass:d?.themeClass,onRender:d?.onRender}},render(){return this.onRender?.(),t(),s(j,{onAfterLeave:this.handleAfterLeave},{default:()=>{let{mergedClsPrefix:e,$slots:n}=this,i={class:[`${e}-alert`,this.themeClass,this.closable&&`${e}-alert--closable`,this.showIcon&&`${e}-alert--show-icon`,!this.title&&this.closable&&`${e}-alert--right-adjust`,this.rtlEnabled&&`${e}-alert--rtl`],style:this.cssVars,role:`alert`};return this.visible?(t(),a(`div`,o({key:1},o(this.$attrs,i)),[T(()=>this.closable&&(t(),s(w,{clsPrefix:e,class:S(`${e}-alert__close`),onClick:this.handleCloseClick},null,8,[`clsPrefix`,`class`,`onClick`]))),T(()=>this.bordered&&(t(),a(`div`,{class:S(`${e}-alert__border`)},null,2))),T(()=>this.showIcon&&(t(),a(`div`,{class:S(`${e}-alert__icon`),"aria-hidden":`true`},[T(()=>E(n.icon,()=>[(t(),s(g,{clsPrefix:e},{default:()=>{switch(this.type){case`success`:return t(),s(A,{key:3});case`info`:return t(),s(D,{key:4});case`warning`:return t(),s(O,{key:5});case`error`:return t(),s(k,{key:6});default:return null}}},1032,[`clsPrefix`]))]))],2))),r(`div`,{class:S([`${e}-alert-body`,this.mergedBordered&&`${e}-alert-body--bordered`])},[T(()=>v(n.header,n=>{let r=n||this.title;return r?(t(),a(`div`,{key:2,class:S(`${e}-alert-body__title`)},[T(()=>r)],2)):null})),T(()=>n.default&&(t(),a(`div`,{class:S(`${e}-alert-body__content`)},[T(()=>n.default())],2)))],2)],16)):null}},1032,[`onAfterLeave`])}});export{R as t};