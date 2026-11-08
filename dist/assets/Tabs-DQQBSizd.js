import{E as e,H as t,M as n,O as r,R as i,S as a,V as o,Wt as s,at as c,d as l,f as u,gt as d,h as f,i as p,j as m,nt as h,p as g,tt as _,u as v,xt as y}from"./runtime-core.esm-bundler-B8bAGhjJ.js";import{Ct as b,D as x,Dt as S,E as C,Et as w,O as ee,Ot as T,S as E,Sn as D,St as O,T as k,Tt as A,b as j,et as M,f as N,ft as P,g as F,hn as I,ht as te,it as L,j as R,kn as ne,lt as re,ot as z,rt as B,s as ie,st as V,vn as H,vt as U,wn as W}from"./Card-D1y5zSiq.js";import{i as ae,n as oe,r as se,t as ce}from"./cssr-D3CCCErG.js";import{t as le}from"./use-merged-state-DzJRbVe1.js";import{t as ue}from"./flatten-Df659l8I.js";import{a as de,t as fe}from"./Button-AFSoWKwt.js";import{n as pe,t as me}from"./omit-oPWT41iD.js";var he=/\s/;function ge(e){for(var t=e.length;t--&&he.test(e.charAt(t)););return t}var _e=/^\s+/;function ve(e){return e&&e.slice(0,ge(e)+1).replace(_e,``)}var G=NaN,K=/^[-+]0x[0-9a-f]+$/i,q=/^0b[01]+$/i,ye=/^0o[0-7]+$/i,be=parseInt;function xe(e){if(typeof e==`number`)return e;if(H(e))return G;if(I(e)){var t=typeof e.valueOf==`function`?e.valueOf():e;e=I(t)?t+``:t}if(typeof e!=`string`)return e===0?e:+e;e=ve(e);var n=q.test(e);return n||ye.test(e)?be(e.slice(2),n?2:8):K.test(e)?G:+e}var J=function(){return D.Date.now()},Y=`Expected a function`,Se=Math.max,Ce=Math.min;function we(e,t,n){var r,i,a,o,s,c,l=0,u=!1,d=!1,f=!0;if(typeof e!=`function`)throw TypeError(Y);t=xe(t)||0,I(n)&&(u=!!n.leading,d=`maxWait`in n,a=d?Se(xe(n.maxWait)||0,t):a,f=`trailing`in n?!!n.trailing:f);function p(t){var n=r,a=i;return r=i=void 0,l=t,o=e.apply(a,n),o}function m(e){return l=e,s=setTimeout(_,t),u?p(e):o}function h(e){var n=e-c,r=e-l,i=t-n;return d?Ce(i,a-r):i}function g(e){var n=e-c,r=e-l;return c===void 0||n>=t||n<0||d&&r>=a}function _(){var e=J();if(g(e))return v(e);s=setTimeout(_,h(e))}function v(e){return s=void 0,f&&r?p(e):(r=i=void 0,o)}function y(){s!==void 0&&clearTimeout(s),l=0,r=c=i=s=void 0}function b(){return s===void 0?o:v(J())}function x(){var e=J(),n=g(e);if(r=arguments,i=this,c=e,n){if(s===void 0)return m(c);if(d)return clearTimeout(s),s=setTimeout(_,t),p(c)}return s===void 0&&(s=setTimeout(_,t)),o}return x.cancel=y,x.flush=b,x}var X=`Expected a function`;function Z(e,t,n){var r=!0,i=!0;if(typeof e!=`function`)throw TypeError(X);return I(n)&&(r=`leading`in n?!!n.leading:r,i=`trailing`in n?!!n.trailing:i),we(e,t,{leading:r,maxWait:t,trailing:i})}var Q=ce(`.v-x-scroll`,{overflow:`auto`,scrollbarWidth:`none`},[ce(`&::-webkit-scrollbar`,{width:0,height:0})]),Te=a({name:`XScroll`,props:{disabled:Boolean,onScroll:Function},setup(){let e=d(null);function t(e){e.currentTarget.offsetWidth<e.currentTarget.scrollWidth&&e.deltaY!==0&&(e.currentTarget.scrollLeft+=e.deltaY+e.deltaX,e.preventDefault())}let n=re();return Q.mount({id:`vueuc/x-scroll`,head:!0,anchorMetaName:oe,ssr:n}),Object.assign({selfRef:e,handleWheel:t},{scrollTo(...t){var n;(n=e.value)==null||n.scrollTo(...t)}})},render(){return e(`div`,{ref:`selfRef`,onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:`v-x-scroll`},this.$slots)}}),Ee=a({name:`ChevronLeft`,render(){return(()=>{let e=B(`dfe229c2639b2082`);return e[0]||=u(`svg`,{viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},[u(`path`,{d:`M10.3536 3.14645C10.5488 3.34171 10.5488 3.65829 10.3536 3.85355L6.20711 8L10.3536 12.1464C10.5488 12.3417 10.5488 12.6583 10.3536 12.8536C10.1583 13.0488 9.84171 13.0488 9.64645 12.8536L5.14645 8.35355C4.95118 8.15829 4.95118 7.84171 5.14645 7.64645L9.64645 3.14645C9.84171 2.95118 10.1583 2.95118 10.3536 3.14645Z`,fill:`currentColor`})],-1)})()}}),De=a({name:`ChevronRight`,render(){return(()=>{let e=B(`6ab04425f4fcb756`);return e[0]||=u(`svg`,{viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},[u(`path`,{d:`M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z`,fill:`currentColor`})],-1)})()}}),$=a({name:`Add`,render(){return(()=>{let e=B(`b30130fbba5c5b23`);return e[0]||=u(`svg`,{width:`512`,height:`512`,viewBox:`0 0 512 512`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},[u(`path`,{d:`M256 112V400M400 256H112`,stroke:`currentColor`,"stroke-width":`32`,"stroke-linecap":`round`,"stroke-linejoin":`round`})],-1)})()}}),Oe={tabFontSizeSmall:`14px`,tabFontSizeMedium:`14px`,tabFontSizeLarge:`16px`,tabGapSmallLine:`36px`,tabGapMediumLine:`36px`,tabGapLargeLine:`36px`,tabGapSmallLineVertical:`8px`,tabGapMediumLineVertical:`8px`,tabGapLargeLineVertical:`8px`,tabPaddingSmallLine:`6px 0`,tabPaddingMediumLine:`10px 0`,tabPaddingLargeLine:`14px 0`,tabPaddingVerticalSmallLine:`6px 12px`,tabPaddingVerticalMediumLine:`8px 16px`,tabPaddingVerticalLargeLine:`10px 20px`,tabGapSmallBar:`36px`,tabGapMediumBar:`36px`,tabGapLargeBar:`36px`,tabGapSmallBarVertical:`8px`,tabGapMediumBarVertical:`8px`,tabGapLargeBarVertical:`8px`,tabPaddingSmallBar:`4px 0`,tabPaddingMediumBar:`6px 0`,tabPaddingLargeBar:`10px 0`,tabPaddingVerticalSmallBar:`6px 12px`,tabPaddingVerticalMediumBar:`8px 16px`,tabPaddingVerticalLargeBar:`10px 20px`,tabGapSmallCard:`4px`,tabGapMediumCard:`4px`,tabGapLargeCard:`4px`,tabGapSmallCardVertical:`4px`,tabGapMediumCardVertical:`4px`,tabGapLargeCardVertical:`4px`,tabPaddingSmallCard:`8px 16px`,tabPaddingMediumCard:`10px 20px`,tabPaddingLargeCard:`12px 24px`,tabPaddingSmallSegment:`4px 0`,tabPaddingMediumSegment:`6px 0`,tabPaddingLargeSegment:`8px 0`,tabPaddingVerticalLargeSegment:`0 8px`,tabPaddingVerticalSmallCard:`8px 12px`,tabPaddingVerticalMediumCard:`10px 16px`,tabPaddingVerticalLargeCard:`12px 20px`,tabPaddingVerticalSmallSegment:`0 4px`,tabPaddingVerticalMediumSegment:`0 6px`,tabGapSmallSegment:`0`,tabGapMediumSegment:`0`,tabGapLargeSegment:`0`,tabGapSmallSegmentVertical:`0`,tabGapMediumSegmentVertical:`0`,tabGapLargeSegmentVertical:`0`,panePaddingSmall:`8px 0 0 0`,panePaddingMedium:`12px 0 0 0`,panePaddingLarge:`16px 0 0 0`,closeSize:`18px`,closeIconSize:`14px`};function ke(e){let{textColor2:t,primaryColor:n,textColorDisabled:r,closeIconColor:i,closeIconColorHover:a,closeIconColorPressed:o,closeColorHover:s,closeColorPressed:c,tabColor:l,baseColor:u,dividerColor:d,fontWeight:f,textColor1:p,borderRadius:m,fontSize:h,fontWeightStrong:g}=e;return{...Oe,colorSegment:l,tabFontSizeCard:h,tabTextColorLine:p,tabTextColorActiveLine:n,tabTextColorHoverLine:n,tabTextColorDisabledLine:r,tabTextColorSegment:p,tabTextColorActiveSegment:t,tabTextColorHoverSegment:t,tabTextColorDisabledSegment:r,tabTextColorBar:p,tabTextColorActiveBar:n,tabTextColorHoverBar:n,tabTextColorDisabledBar:r,tabTextColorCard:p,tabTextColorHoverCard:p,tabTextColorActiveCard:n,tabTextColorDisabledCard:r,barColor:n,closeIconColor:i,closeIconColorHover:a,closeIconColorPressed:o,closeColorHover:s,closeColorPressed:c,closeBorderRadius:m,tabColor:l,tabColorSegment:u,tabBorderColor:d,tabFontWeightActive:f,tabFontWeight:f,tabBorderRadius:m,paneTextColor:t,fontWeightStrong:g}}var Ae=C({name:`Tabs`,common:R,peers:{Button:de},self:ke}),je=te(`n-tabs`),Me={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:`if`},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},Ne=a({__TAB_PANE__:!0,name:`TabPane`,alias:[`TabPanel`],props:Me,slots:Object,setup(e){let t=r(je,null);return t||U(`tab-pane`,"`n-tab-pane` must be placed inside `n-tabs`."),{style:t.paneStyleRef,class:t.paneClassRef,mergedClsPrefix:t.mergedClsPrefixRef}},render(){return o(),f(`div`,{class:L([`${this.mergedClsPrefix}-tab-pane`,this.class]),style:s(this.style)},[V(()=>this.$slots.default?.())],6)}}),Pe=[`data-name`,`data-disabled`],Fe={internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean,...me(Me,[`displayDirective`])},Ie=a({__TAB__:!0,inheritAttrs:!1,name:`Tab`,props:Fe,setup(e){let{mergedClsPrefixRef:t,valueRef:n,typeRef:i,closableRef:a,tabStyleRef:o,addTabStyleRef:s,tabClassRef:c,addTabClassRef:u,tabChangeIdRef:d,onBeforeLeaveRef:f,triggerRef:p,handleAdd:m,activateTab:h,handleClose:g}=r(je);return{trigger:p,mergedClosable:l(()=>{if(e.internalAddable)return!1;let{closable:t}=e;return t===void 0?a.value:t}),style:o,addStyle:s,tabClass:c,addTabClass:u,clsPrefix:t,value:n,type:i,handleClose(t){t.stopPropagation(),!e.disabled&&g(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){m();return}let{name:t}=e,r=++d.id;if(t!==n.value){let{value:i}=f;i?Promise.resolve(i(e.name,n.value)).then(e=>{e&&d.id===r&&h(t)}):h(t)}}}},render(){let{internalAddable:e,clsPrefix:t,name:n,disabled:r,label:i,tab:a,value:s,mergedClosable:c,trigger:l,$slots:{default:d}}=this,h=i??a;return o(),f(`div`,{class:L(`${t}-tabs-tab-wrapper`)},[this.internalLeftPadded?(o(),f(`div`,{key:0,class:L(`${t}-tabs-tab-pad`)},null,2)):V(()=>null),(o(),f(`div`,m({key:n,"data-name":n,"data-disabled":r?!0:void 0},m({class:[`${t}-tabs-tab`,s===n&&`${t}-tabs-tab--active`,r&&`${t}-tabs-tab--disabled`,c&&`${t}-tabs-tab--closable`,e&&`${t}-tabs-tab--addable`,e?this.addTabClass:this.tabClass],onClick:l===`click`?this.activateTab:void 0,onMouseenter:l===`hover`?this.activateTab:void 0,style:e?this.addStyle:this.style},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),[u(`span`,{class:L(`${t}-tabs-tab__label`)},[e?(o(),f(p,{key:0},[u(`div`,{class:L(`${t}-tabs-tab__height-placeholder`)},`\xA0`,2),(o(),g(k,{clsPrefix:t},{default:()=>(o(),g($))},1032,[`clsPrefix`]))],64)):(o(),f(p,{key:1},[d?(o(),f(p,{key:0},[V(()=>d())],64)):(o(),f(p,{key:1},[typeof h==`object`?(o(),f(p,{key:0},[V(()=>h)],64)):(o(),f(p,{key:1},[V(()=>pe(h??n))],64))],64))],64))],2),c&&this.type===`card`?(o(),g(ie,{key:0,clsPrefix:t,class:L(`${t}-tabs-tab__close`),onClick:this.handleClose,disabled:r},null,8,[`clsPrefix`,`class`,`onClick`,`disabled`])):V(()=>null)],16,Pe))],2)}}),Le=b(`tabs`,`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[O(`&.transition-disabled`,[b(`tabs-tab`,`
 transition: none !important;
 `),b(`tabs-nav-scroll-content`,`
 transition: none !important;
 `),b(`tabs-tab-pad`,`
 transition: none !important;
 `)]),w(`segment-type`,[b(`tabs-rail`,[O(`&.transition-disabled`,[b(`tabs-capsule`,`
 transition: none;
 `)])])]),w(`top`,[b(`tab-pane`,`
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]),w(`left`,[b(`tab-pane`,`
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]),w(`left, right`,`
 flex-direction: row;
 `,[b(`tabs-bar`,`
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),b(`tabs-tab`,`
 padding: var(--n-tab-padding-vertical); 
 `)]),w(`right`,`
 flex-direction: row-reverse;
 `,[b(`tab-pane`,`
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `),b(`tabs-bar`,`
 left: 0;
 `)]),w(`bottom`,`
 flex-direction: column-reverse;
 justify-content: flex-end;
 `,[b(`tab-pane`,`
 padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);
 `),b(`tabs-bar`,`
 top: 0;
 `)]),b(`tabs-rail`,`
 position: relative;
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[b(`tabs-capsule`,`
 border-radius: var(--n-tab-border-radius);
 position: absolute;
 left: 0;
 top: 0;
 pointer-events: none;
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 transition: transform 0.3s var(--n-bezier);
 `),b(`tabs-tab-wrapper`,`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[b(`tabs-tab`,`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[w(`active`,`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 `),O(`&:hover`,`
 color: var(--n-tab-text-color-hover);
 `)])])]),w(`flex`,[b(`tabs-nav`,`
 width: 100%;
 position: relative;
 `,[b(`tabs-wrapper`,`
 width: 100%;
 `,[b(`tabs-tab`,`
 margin-right: 0;
 `)])])]),b(`tabs-nav`,`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[A(`prefix, suffix`,`
 display: flex;
 align-items: center;
 `),A(`prefix`,`padding-right: 16px;`),A(`suffix`,`padding-left: 16px;`)]),w(`top, bottom`,[O(`>`,[b(`tabs-nav`,[b(`tabs-nav-scroll-wrapper`,[O(`&::before`,`
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `),O(`&::after`,`
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `),w(`shadow-start`,[O(`&::before`,`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),w(`shadow-end`,[O(`&::after`,`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]),w(`left, right`,[b(`tabs-nav-scroll-content`,`
 flex-direction: column;
 `),O(`>`,[b(`tabs-nav`,[b(`tabs-nav-scroll-wrapper`,[O(`&::before`,`
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),O(`&::after`,`
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),w(`shadow-start`,[O(`&::before`,`
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]),w(`shadow-end`,[O(`&::after`,`
 box-shadow: inset 0 -10px 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]),b(`tabs-nav-scroll-wrapper`,`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[b(`tabs-nav-y-scroll`,`
 height: 100%;
 width: 100%;
 overflow-y: auto; 
 scrollbar-width: none;
 `,[O(`&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb`,`
 width: 0;
 height: 0;
 display: none;
 `)]),O(`&::before, &::after`,`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 z-index: 1;
 `),O(`&.transition-disabled`,[O(`&::before, &::after`,`
 transition: none;
 `)])]),b(`tabs-nav-scroll-content`,`
 display: flex;
 position: relative;
 min-width: 100%;
 min-height: 100%;
 width: fit-content;
 box-sizing: border-box;
 `),b(`tabs-wrapper`,`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),b(`tabs-tab-wrapper`,`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),b(`tabs-tab`,`
 cursor: pointer;
 white-space: nowrap;
 flex-wrap: nowrap;
 display: inline-flex;
 align-items: center;
 color: var(--n-tab-text-color);
 font-size: var(--n-tab-font-size);
 background-clip: padding-box;
 padding: var(--n-tab-padding);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[w(`disabled`,{cursor:`not-allowed`}),A(`close`,`
 margin-inline-start: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),A(`label`,`
 display: flex;
 align-items: center;
 z-index: 1;
 `)]),b(`tabs-bar`,`
 position: absolute;
 bottom: 0;
 height: 2px;
 border-radius: 1px;
 background-color: var(--n-bar-color);
 transition:
 left .2s var(--n-bezier),
 max-width .2s var(--n-bezier),
 opacity .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[O(`&.transition-disabled`,`
 transition: none;
 `),w(`disabled`,`
 background-color: var(--n-tab-text-color-disabled)
 `)]),b(`tabs-pane-wrapper`,`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),b(`tab-pane`,`
 color: var(--n-pane-text-color);
 width: 100%;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[O(`&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active`,`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),O(`&.next-transition-leave-active, &.prev-transition-leave-active`,`
 position: absolute;
 `),O(`&.next-transition-enter-from, &.prev-transition-leave-to`,`
 transform: translateX(32px);
 opacity: 0;
 `),O(`&.next-transition-leave-to, &.prev-transition-enter-from`,`
 transform: translateX(-32px);
 opacity: 0;
 `),O(`&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to`,`
 transform: translateX(0);
 opacity: 1;
 `)]),b(`tabs-tab-pad`,`
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),w(`line-type, bar-type`,[b(`tabs-tab`,`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[O(`&:hover`,{color:`var(--n-tab-text-color-hover)`}),w(`active`,`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),w(`disabled`,{color:`var(--n-tab-text-color-disabled)`})])]),b(`tabs-nav`,[A(`prefix, suffix`,`
 border-color: var(--n-tab-border-color);
 `),b(`tabs-nav-scroll-content`,`
 border-color: var(--n-tab-border-color);
 `),w(`line-type`,[w(`top`,[A(`prefix, suffix`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),b(`tabs-nav-scroll-content`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),b(`tabs-bar`,`
 bottom: -1px;
 `)]),w(`left`,[A(`prefix, suffix`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),b(`tabs-nav-scroll-content`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),b(`tabs-bar`,`
 right: -1px;
 `)]),w(`right`,[A(`prefix, suffix`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),b(`tabs-nav-scroll-content`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),b(`tabs-bar`,`
 left: -1px;
 `)]),w(`bottom`,[A(`prefix, suffix`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),b(`tabs-nav-scroll-content`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),b(`tabs-bar`,`
 top: -1px;
 `)]),A(`prefix, suffix`,`
 transition: border-color .3s var(--n-bezier);
 `),b(`tabs-nav-scroll-content`,`
 transition: border-color .3s var(--n-bezier);
 `),b(`tabs-bar`,`
 border-radius: 0;
 `)]),w(`card-type`,[A(`prefix, suffix`,`
 transition: border-color .3s var(--n-bezier);
 `),b(`tabs-pad`,`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 `),b(`tabs-tab-pad`,`
 transition: border-color .3s var(--n-bezier);
 `),b(`tabs-tab`,`
 font-weight: var(--n-tab-font-weight);
 border: 1px solid var(--n-tab-border-color);
 background-color: var(--n-tab-color);
 box-sizing: border-box;
 position: relative;
 vertical-align: bottom;
 display: flex;
 justify-content: space-between;
 font-size: var(--n-tab-font-size);
 color: var(--n-tab-text-color);
 `,[w(`addable`,`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 justify-content: center;
 `,[A(`height-placeholder`,`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),S(`disabled`,[O(`&:hover`,`
 color: var(--n-tab-text-color-hover);
 `)])]),w(`closable`,`padding-inline-end: 8px;`),w(`active`,`
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),w(`disabled`,`color: var(--n-tab-text-color-disabled);`)])]),w(`left, right`,`
 flex-direction: column; 
 `,[A(`prefix, suffix`,`
 padding: var(--n-tab-padding-vertical);
 `),b(`tabs-wrapper`,`
 flex-direction: column;
 `),b(`tabs-tab-wrapper`,`
 flex-direction: column;
 `,[b(`tabs-tab-pad`,`
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])]),w(`top`,[w(`card-type`,[b(`tabs-scroll-padding`,`border-bottom: 1px solid var(--n-tab-border-color);`),A(`prefix, suffix`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),b(`tabs-tab`,`
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `,[w(`active`,`
 border-bottom: 1px solid #0000;
 `)]),b(`tabs-tab-pad`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),b(`tabs-pad`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]),w(`left`,[w(`card-type`,[b(`tabs-scroll-padding`,`border-right: 1px solid var(--n-tab-border-color);`),A(`prefix, suffix`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),b(`tabs-tab`,`
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `,[w(`active`,`
 border-right: 1px solid #0000;
 `)]),b(`tabs-tab-pad`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),b(`tabs-pad`,`
 border-right: 1px solid var(--n-tab-border-color);
 `)])]),w(`right`,[w(`card-type`,[b(`tabs-scroll-padding`,`border-left: 1px solid var(--n-tab-border-color);`),A(`prefix, suffix`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),b(`tabs-tab`,`
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[w(`active`,`
 border-left: 1px solid #0000;
 `)]),b(`tabs-tab-pad`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),b(`tabs-pad`,`
 border-left: 1px solid var(--n-tab-border-color);
 `)])]),w(`bottom`,[w(`card-type`,[b(`tabs-scroll-padding`,`border-top: 1px solid var(--n-tab-border-color);`),A(`prefix, suffix`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),b(`tabs-tab`,`
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[w(`active`,`
 border-top: 1px solid #0000;
 `)]),b(`tabs-tab-pad`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),b(`tabs-pad`,`
 border-top: 1px solid var(--n-tab-border-color);
 `)])])]),b(`tabs-scroll-button`,[w(`start`,`
 padding-left: 10px;
 padding-right: 6px;
 `),w(`end`,`
 padding-right: 10px;
 padding-left: 6px;
 `),w(`up`,`
 padding-bottom: 10px;
 `),w(`down`,`
 padding-top: 10px;
 `)])]),Re=a({name:`TabsButton`,props:{type:{type:String,default:`next`},mergedClsPrefix:{type:String,required:!0},vertical:Boolean,disabled:Boolean,rtl:Boolean,theme:Object,themeOverrides:Object,onClick:Function},setup(e){return{handleClick:()=>{e.disabled||e.onClick?.(e.type)}}},render(){let{mergedClsPrefix:e,disabled:t,type:n,vertical:r,rtl:i,theme:a,themeOverrides:c,handleClick:l}=this,u=n===`next`,d=r?u:i?!u:u;return o(),g(fe,{text:!0,disabled:t,size:`small`,theme:a,themeOverrides:c,onClick:l,class:L([`${e}-tabs-scroll-button`,!r&&n===`prev`&&`${e}-tabs-scroll-button--start`,!r&&n===`next`&&`${e}-tabs-scroll-button--end`,r&&n===`prev`&&`${e}-tabs-scroll-button--up`,r&&n===`next`&&`${e}-tabs-scroll-button--down`])},{icon:()=>(o(),g(k,{clsPrefix:e,style:s(r?{transform:`rotate(90deg)`}:void 0)},{default:()=>d?(o(),g(De,{key:1})):(o(),g(Ee,{key:2}))},1032,[`clsPrefix`,`style`]))},1032,[`disabled`,`theme`,`themeOverrides`,`onClick`,`class`])}}),ze=Z,Be={...x.props,value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:`click`},type:{type:String,default:`bar`},closable:Boolean,justifyContent:String,size:String,placement:{type:String,default:`top`},tabStyle:[String,Object],tabClass:String,addTabStyle:[String,Object],addTabClass:String,barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array],showScrollButton:Boolean,centerActiveTab:Boolean},Ve=a({name:`Tabs`,props:Be,slots:Object,setup(e,{slots:r}){let{mergedClsPrefixRef:a,inlineThemeDisabled:o,mergedComponentPropsRef:s,mergedRtlRef:c}=P(e),u=F(`Tabs`,c,a),f=l(()=>{let{placement:t}=e;return t===`start`?u?.value?`right`:`left`:t===`end`?u?.value?`left`:`right`:t}),p=x(`Tabs`,`-tabs`,Le,Ae,e,a),m=d(null),g=d(null),v=d(null),b=d(null),S=d(null),C=d(null),w=d(null),D=d(!0),O=d(!0),k=se(e,[`labelSize`,`size`]),A=l(()=>k.value?k.value:s?.value?.Tabs?.size||`medium`),j=se(e,[`activeName`,`value`]),N=d(j.value??e.defaultValue??(r.default?ue(r.default())[0]?.props?.name:null)),I=le(j,N),te={id:0},L=l(()=>{if(e.justifyContent&&e.type!==`card`)return{display:`flex`,justifyContent:e.justifyContent}});_(I,()=>{te.id=0,B(),n(()=>{V()})});function R(){let{value:e}=I;return e===null?null:m.value?.querySelector(`[data-name="${e}"]`)}function ne(t){if(e.type===`card`)return;let{value:n}=v;if(!n)return;let r=n.style.opacity===`0`;if(t){let i=`${a.value}-tabs-bar--disabled`,{barWidth:o}=e,s=f.value;if(t.dataset.disabled===`true`?n.classList.add(i):n.classList.remove(i),[`top`,`bottom`].includes(s)){if(z([`top`,`maxHeight`,`height`]),typeof o==`number`&&t.offsetWidth>=o){let e=Math.floor((t.offsetWidth-o)/2)+t.offsetLeft;n.style.left=`${e}px`,n.style.maxWidth=`${o}px`}else n.style.left=`${t.offsetLeft}px`,n.style.maxWidth=`${t.offsetWidth}px`;n.style.width=`8192px`,r&&(n.style.transition=`none`),n.offsetWidth,r&&(n.style.transition=``,n.style.opacity=`1`)}else{if(z([`left`,`maxWidth`,`width`]),typeof o==`number`&&t.offsetHeight>=o){let e=Math.floor((t.offsetHeight-o)/2)+t.offsetTop;n.style.top=`${e}px`,n.style.maxHeight=`${o}px`}else n.style.top=`${t.offsetTop}px`,n.style.maxHeight=`${t.offsetHeight}px`;n.style.height=`8192px`,r&&(n.style.transition=`none`),n.offsetHeight,r&&(n.style.transition=``,n.style.opacity=`1`)}}}function re(){if(e.type===`card`)return;let{value:t}=v;t&&(t.style.opacity=`0`)}function z(e){let{value:t}=v;if(t)for(let n of e)t.style[n]=``}function B(){if(e.type===`card`)return;let t=R();t?ne(t):re()}function ie(e,t,n,r){let i=e.getBoundingClientRect(),a=t.getBoundingClientRect(),o=n?`left`:`top`,s=n?`right`:`bottom`,c=0;r?c=(a[o]+a[s])/2-(i[o]+i[s])/2:a[o]<i[o]?c=a[o]-i[o]:a[s]>i[s]&&(c=a[s]-i[s]),c!==0&&e.scrollBy({[o]:c,behavior:`smooth`})}function V(){let t=[`top`,`bottom`].includes(f.value),n=R();if(n){if(t){let r=C.value?.$el;if(!r)return;ie(r,n,t,e.centerActiveTab)}else{let{value:r}=w;if(!r)return;ie(r,n,t,e.centerActiveTab)}}}let H=d(null),U=0,W=null;function oe(e){let t=H.value;if(t){U=e.getBoundingClientRect().height;let n=`${U}px`,r=()=>{t.style.height=n,t.style.maxHeight=n};W?(r(),W(),W=null):W=r}}function ce(e){let t=H.value;if(t){let n=e.getBoundingClientRect().height,r=()=>{document.body.offsetHeight,t.style.maxHeight=`${n}px`,t.style.height=`${Math.max(U,n)}px`};W?(W(),W=null,r()):W=r}}function de(){let t=H.value;if(t){t.style.maxHeight=``,t.style.height=``;let{paneWrapperStyle:n}=e;if(typeof n==`string`)t.style.cssText=n;else if(n){let{maxHeight:e,height:r}=n;e!==void 0&&(t.style.maxHeight=e),r!==void 0&&(t.style.height=r)}}}let fe={value:[]},pe=d(`next`);function me(e){let t=I.value,n=`next`;for(let r of fe.value){if(r===t)break;if(r===e){n=`prev`;break}}pe.value=n,he(e)}function he(t){let{onActiveNameChange:n,onUpdateValue:r,"onUpdate:value":i}=e;n&&E(n,t),r&&E(r,t),i&&E(i,t),N.value=t}function ge(t){let{onClose:n}=e;n&&E(n,t)}function _e(e){if([`top`,`bottom`].includes(f.value)){let{value:t}=C;if(!t)return;let n=t.$el;if(!n)return;let r=n.offsetWidth,i=!!u?.value,a=e===`next`?r:-r;n.scrollBy({left:i?-a:a,behavior:`smooth`})}else{let{value:t}=w;if(!t)return;let n=t.offsetHeight,r=e===`next`?t.scrollTop+n:t.scrollTop-n;t.scrollTo({top:r,left:0,behavior:`smooth`})}}let ve=!0;function G(){let{value:e}=v;if(!e)return;ve&&=!1;let t=`transition-disabled`;e.classList.add(t),B(),e.classList.remove(t)}let K=d(null);function q({transitionDisabled:e}){let t=m.value;if(!t)return;e&&t.classList.add(`transition-disabled`);let n=R();n&&K.value&&(K.value.style.width=`${n.offsetWidth}px`,K.value.style.height=`${n.offsetHeight}px`,K.value.style.transform=`translate(${n.offsetLeft}px, ${n.offsetTop}px)`,e&&K.value.offsetWidth),e&&t.classList.remove(`transition-disabled`)}_([I],()=>{e.type===`segment`&&n(()=>{q({transitionDisabled:!1})})}),i(()=>{e.type===`segment`&&q({transitionDisabled:!0})});let ye=0;function be(t){if(t.contentRect.width===0&&t.contentRect.height===0||ye===t.contentRect.width)return;ye=t.contentRect.width;let{type:n}=e;(n===`line`||n===`bar`)&&(ve||e.justifyContent?.startsWith(`space`))&&G(),n!==`segment`&&Q(Z())}let xe=ze(be,64);function J(){let{type:t}=e;t===`line`||t===`bar`?G():t===`segment`&&q({transitionDisabled:!0})}_([()=>e.justifyContent,()=>e.size],()=>{n(()=>{(e.type===`line`||e.type===`bar`)&&G()})}),_([f,()=>u?.value],()=>{n(()=>{J(),Q(Z(),{instantly:!0})})}),_(()=>e.type,()=>{n(()=>{let e=g.value;e&&(e.classList.add(`transition-disabled`),J(),e.offsetWidth,e.classList.remove(`transition-disabled`))})});let Y=d(!1);function Se(e){let{target:t,contentRect:{width:n,height:r}}=e,i=t.parentElement.parentElement.offsetWidth,a=t.parentElement.parentElement.offsetHeight,o=f.value;if(!Y.value)o===`top`||o===`bottom`?i<n&&(Y.value=!0):a<r&&(Y.value=!0);else{let{value:e}=S;if(!e)return;o===`top`||o===`bottom`?i-n>e.$el.offsetWidth&&(Y.value=!1):a-r>e.$el.offsetHeight&&(Y.value=!1)}Q(C.value?.$el||null)}let Ce=ze(Se,64);function we(){let{onAdd:t}=e;t&&t()}let X=d(!1);function Z(){let e=f.value;return(e===`top`||e===`bottom`?C.value?.$el:w.value)||null}function Q(e,t={instantly:!1}){if(!e)return;let n=t.instantly?b.value:null;n&&n.classList.add(`transition-disabled`);let r=f.value;if(r===`top`||r===`bottom`){let{scrollLeft:t,scrollWidth:n,offsetWidth:r}=e,i=Math.abs(t);D.value=i<=1,O.value=i+r>=n-1,X.value=r<n-1}else{let{scrollTop:t,scrollHeight:n,offsetHeight:r}=e;D.value=t<=1,O.value=t+r>=n-1,X.value=r<n-1}n&&(n.offsetWidth,n.classList.remove(`transition-disabled`))}let Te=ze(e=>{Q(e.target)},64);t(je,{triggerRef:y(e,`trigger`),tabStyleRef:y(e,`tabStyle`),tabClassRef:y(e,`tabClass`),addTabStyleRef:y(e,`addTabStyle`),addTabClassRef:y(e,`addTabClass`),paneClassRef:y(e,`paneClass`),paneStyleRef:y(e,`paneStyle`),mergedClsPrefixRef:a,typeRef:y(e,`type`),closableRef:y(e,`closable`),valueRef:I,tabChangeIdRef:te,onBeforeLeaveRef:y(e,`onBeforeLeave`),activateTab:me,handleClose:ge,handleAdd:we}),ae(()=>{B(),V()}),h(()=>{let{value:e}=b;if(!e)return;let{value:t}=a,n=`${t}-tabs-nav-scroll-wrapper--shadow-start`,r=`${t}-tabs-nav-scroll-wrapper--shadow-end`;D.value?e.classList.remove(n):e.classList.add(n),O.value?e.classList.remove(r):e.classList.add(r)});let Ee={syncBarPosition:()=>{B()},scrollToCurrentTab:()=>{V()}},De=()=>{q({transitionDisabled:!0})},$=l(()=>{let{value:t}=A,{type:n}=e,r=`${t}${{card:`Card`,bar:`Bar`,line:`Line`,segment:`Segment`}[n]}`,{self:{barColor:i,closeIconColor:a,closeIconColorHover:o,closeIconColorPressed:s,tabColor:c,tabBorderColor:l,paneTextColor:u,tabFontWeight:d,tabBorderRadius:f,tabFontWeightActive:m,colorSegment:h,fontWeightStrong:g,tabColorSegment:_,closeSize:v,closeIconSize:y,closeColorHover:b,closeColorPressed:x,closeBorderRadius:S,[T(`panePadding`,t)]:C,[T(`tabPadding`,r)]:w,[T(`tabPaddingVertical`,r)]:ee,[T(`tabGap`,r)]:E,[T(`tabGap`,`${r}Vertical`)]:D,[T(`tabTextColor`,n)]:O,[T(`tabTextColorActive`,n)]:k,[T(`tabTextColorHover`,n)]:j,[T(`tabTextColorDisabled`,n)]:N,[T(`tabFontSize`,t)]:P},common:{cubicBezierEaseInOut:F}}=p.value;return{"--n-bezier":F,"--n-color-segment":h,"--n-bar-color":i,"--n-tab-font-size":P,"--n-tab-text-color":O,"--n-tab-text-color-active":k,"--n-tab-text-color-disabled":N,"--n-tab-text-color-hover":j,"--n-pane-text-color":u,"--n-tab-border-color":l,"--n-tab-border-radius":f,"--n-close-size":v,"--n-close-icon-size":y,"--n-close-color-hover":b,"--n-close-color-pressed":x,"--n-close-border-radius":S,"--n-close-icon-color":a,"--n-close-icon-color-hover":o,"--n-close-icon-color-pressed":s,"--n-tab-color":c,"--n-tab-font-weight":d,"--n-tab-font-weight-active":m,"--n-tab-padding":w,"--n-tab-padding-vertical":ee,"--n-tab-gap":E,"--n-tab-gap-vertical":D,"--n-pane-padding-left":M(C,`left`),"--n-pane-padding-right":M(C,`right`),"--n-pane-padding-top":M(C,`top`),"--n-pane-padding-bottom":M(C,`bottom`),"--n-font-weight-strong":g,"--n-tab-color-segment":_}}),Oe=o?ee(`tabs`,l(()=>`${A.value[0]}${e.type[0]}`),$,e):void 0;return{mergedClsPrefix:a,mergedValue:I,renderedNames:new Set,segmentCapsuleElRef:K,tabsPaneWrapperRef:H,tabsElRef:m,selfElRef:g,barElRef:v,addTabInstRef:S,xScrollInstRef:C,scrollWrapperElRef:b,addTabFixed:Y,tabWrapperStyle:L,handleNavResize:xe,mergedSize:A,handleScroll:Te,handleTabsResize:Ce,cssVars:o?void 0:$,themeClass:Oe?.themeClass,animationDirection:pe,renderNameListRef:fe,yScrollElRef:w,handleSegmentResize:De,onAnimationBeforeLeave:oe,onAnimationEnter:ce,onAnimationAfterEnter:de,onRender:Oe?.onRender,startReachedRef:D,endReachedRef:O,isOverflow:X,handleButtonClick:_e,mergedTheme:p,rtlEnabled:u,mergedPlacement:f,...Ee}},render(){let{mergedClsPrefix:e,type:t,mergedPlacement:n,addTabFixed:r,addable:i,mergedSize:a,renderNameListRef:c,onRender:l,paneWrapperClass:d,paneWrapperStyle:h,startReachedRef:_,endReachedRef:v,isOverflow:y,showScrollButton:b,handleButtonClick:x,mergedTheme:S,rtlEnabled:C,$slots:{default:w,prefix:ee,suffix:T}}=this;l?.();let E=w?ue(w()).filter(e=>e.type.__TAB_PANE__===!0):[],D=w?ue(w()).filter(e=>e.type.__TAB__===!0):[],O=!D.length,k=t===`card`,A=t===`segment`,M=!k&&!A&&this.justifyContent;c.value=[];let P=()=>{let t=(o(),f(`div`,{style:s(this.tabWrapperStyle),class:L(`${e}-tabs-wrapper`)},[M?V(()=>null):(o(),f(`div`,{key:1,class:L(`${e}-tabs-scroll-padding`),style:s(n===`top`||n===`bottom`?{width:`${this.tabsPadding}px`}:{height:`${this.tabsPadding}px`})},null,6)),O?(o(),f(p,{key:2},[V(()=>E.map((e,t)=>(c.value.push(e.props.name),Ge((o(),g(Ie,m(e.props,{internalCreatedByPane:!0,internalLeftPadded:t!==0&&(!M||M===`center`||M===`start`||M===`end`)}),z(e.children?{default:e.children.tab}:void 0),1040,[`internalLeftPadded`]))))))],64)):(o(),f(p,{key:3},[V(()=>D.map((e,t)=>(c.value.push(e.props.name),Ge(t!==0&&!M?We(e):e))))],64)),!r&&i&&k?(o(),f(p,{key:4},[V(()=>Ue(i,(O?E.length:D.length)!==0))],64)):V(()=>null),M?V(()=>null):(o(),f(`div`,{key:7,class:L(`${e}-tabs-scroll-padding`),style:s({width:`${this.tabsPadding}px`})},null,6)),k?V(()=>null):(o(),f(`div`,{key:9,ref:`barElRef`,class:L(`${e}-tabs-bar`)},null,2))],6));return o(),f(`div`,{ref:`tabsElRef`,class:L(`${e}-tabs-nav-scroll-content`)},[k&&i?(o(),g(N,{key:0,onResize:this.handleTabsResize},{default:()=>t},1032,[`onResize`])):(o(),f(p,{key:1},[V(()=>t)],64)),k?(o(),f(`div`,{key:2,class:L(`${e}-tabs-pad`)},null,2)):V(()=>null)],2)},F=A?`top`:n;return o(),f(`div`,{ref:`selfElRef`,class:L([`${e}-tabs`,this.themeClass,`${e}-tabs--${t}-type`,`${e}-tabs--${a}-size`,M&&`${e}-tabs--flex`,`${e}-tabs--${F}`,C&&`${e}-tabs--rtl`]),style:s(this.cssVars)},[u(`div`,{class:L([`${e}-tabs-nav--${t}-type`,`${e}-tabs-nav--${F}`,`${e}-tabs-nav`])},[V(()=>j(ee,t=>t&&(o(),f(`div`,{class:L(`${e}-tabs-nav__prefix`)},[V(()=>t)],2)))),A?(o(),g(N,{key:0,onResize:this.handleSegmentResize},{default:()=>(o(),f(`div`,{class:L(`${e}-tabs-rail`),ref:`tabsElRef`},[u(`div`,{class:L(`${e}-tabs-capsule`),ref:`segmentCapsuleElRef`},[u(`div`,{class:L(`${e}-tabs-wrapper`)},[u(`div`,{class:L(`${e}-tabs-tab`)},null,2)],2)],2),O?(o(),f(p,{key:0},[V(()=>E.map((e,t)=>(c.value.push(e.props.name),o(),g(Ie,m(e.props,{internalCreatedByPane:!0,internalLeftPadded:t!==0}),z(e.children?{default:e.children.tab}:void 0),1040,[`internalLeftPadded`]))))],64)):(o(),f(p,{key:1},[V(()=>D.map((e,t)=>(c.value.push(e.props.name),t===0?e:We(e))))],64))],2))},1032,[`onResize`])):(o(),f(p,{key:1},[V(()=>b&&y&&(o(),g(Re,{mergedClsPrefix:e,type:`prev`,vertical:F===`left`||F===`right`,disabled:_,rtl:!!C,theme:S.peers.Button,themeOverrides:S.peerOverrides.Button,onClick:x},null,8,[`mergedClsPrefix`,`vertical`,`disabled`,`rtl`,`theme`,`themeOverrides`,`onClick`]))),(o(),g(N,{onResize:this.handleNavResize},{default:()=>(o(),f(`div`,{class:L(`${e}-tabs-nav-scroll-wrapper`),ref:`scrollWrapperElRef`},[[`top`,`bottom`].includes(F)?(o(),g(Te,{key:0,ref:`xScrollInstRef`,onScroll:this.handleScroll},{default:P},1032,[`onScroll`])):(o(),f(`div`,{key:1,class:L(`${e}-tabs-nav-y-scroll`),onScroll:this.handleScroll,ref:`yScrollElRef`},[V(()=>P())],42,[`onScroll`]))],2))},1032,[`onResize`])),V(()=>b&&y&&(o(),g(Re,{mergedClsPrefix:e,type:`next`,vertical:F===`left`||F===`right`,disabled:v,rtl:!!C,theme:S.peers.Button,themeOverrides:S.peerOverrides.Button,onClick:x},null,8,[`mergedClsPrefix`,`vertical`,`disabled`,`rtl`,`theme`,`themeOverrides`,`onClick`])))],64)),r&&i&&k?(o(),f(p,{key:2},[V(()=>Ue(i,!0))],64)):V(()=>null),V(()=>j(T,t=>t&&(o(),f(`div`,{class:L(`${e}-tabs-nav__suffix`)},[V(()=>t)],2))))],2),V(()=>O&&(this.animated&&(F===`top`||F===`bottom`)?(o(),f(`div`,{key:1,ref:`tabsPaneWrapperRef`,style:s(h),class:L([`${e}-tabs-pane-wrapper`,d])},[V(()=>He(E,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection))],6)):He(E,this.mergedValue,this.renderedNames)))],6)}});function He(e,t,n,r,i,a,s){let l=[];return e.forEach(e=>{let{name:r,displayDirective:i,"display-directive":a}=e.props,o=e=>i===e||a===e,s=t===r;if(e.key!==void 0&&(e.key=r),s||o(`show`)||o(`show:lazy`)&&n.has(r)){n.has(r)||n.add(r);let t=!o(`if`);l.push(t?c(e,[[ne,s]]):e)}}),s?(o(),g(W,{name:`${s}-transition`,onBeforeLeave:r,onEnter:i,onAfterEnter:a},{default:()=>l},1032,[`name`,`onBeforeLeave`,`onEnter`,`onAfterEnter`])):l}function Ue(e,t){return o(),g(Ie,{ref:`addTabInstRef`,key:`__addable`,name:`__addable`,internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:t,disabled:typeof e==`object`&&e.disabled},null,8,[`internalLeftPadded`,`disabled`])}function We(e){let t=v(e);return t.props?t.props.internalLeftPadded=!0:t.props={internalLeftPadded:!0},t}function Ge(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes(`internalLeftPadded`)||e.dynamicProps.push(`internalLeftPadded`):e.dynamicProps=[`internalLeftPadded`],e}export{$ as a,Z as c,ke as i,we as l,Ie as n,De as o,Ne as r,Ee as s,Ve as t};