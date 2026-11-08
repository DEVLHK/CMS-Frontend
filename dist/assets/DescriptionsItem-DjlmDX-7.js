import{S as e,V as t,Wt as n,d as r,f as i,h as a}from"./runtime-core.esm-bundler-B8bAGhjJ.js";import{At as o,Ct as s,D as c,Dt as l,Et as u,O as d,Ot as f,St as p,Tt as m,ft as h,it as g,kt as _,st as v}from"./Card-D1y5zSiq.js";import{A as y}from"./Popover-B9CZ_-d6.js";import{r as b}from"./cssr-D3CCCErG.js";import{t as x}from"./flatten-Df659l8I.js";import{t as S}from"./get-slot-6kXJmSMP.js";import{v as C}from"./index-y_ex5RzL.js";function w(e,t=`default`,n=[]){let{children:r}=e;if(typeof r==`object`&&r&&!Array.isArray(r)){let e=r[t];if(typeof e==`function`)return e()}return n}var T=p([s(`descriptions`,{fontSize:`var(--n-font-size)`},[s(`descriptions-separator`,`
 display: inline-block;
 margin: 0 8px 0 2px;
 `),s(`descriptions-table-wrapper`,[s(`descriptions-table`,[s(`descriptions-table-row`,[s(`descriptions-table-header`,{padding:`var(--n-th-padding)`}),s(`descriptions-table-content`,{padding:`var(--n-td-padding)`})])])]),l(`bordered`,[s(`descriptions-table-wrapper`,[s(`descriptions-table`,[s(`descriptions-table-row`,[p(`&:last-child`,[s(`descriptions-table-content`,{paddingBottom:0})])])])])]),u(`left-label-placement`,[s(`descriptions-table-content`,[p(`> *`,{verticalAlign:`top`})])]),u(`left-label-align`,[p(`th`,{textAlign:`left`})]),u(`center-label-align`,[p(`th`,{textAlign:`center`})]),u(`right-label-align`,[p(`th`,{textAlign:`right`})]),u(`bordered`,[s(`descriptions-table-wrapper`,`
 border-radius: var(--n-border-radius);
 overflow: hidden;
 background: var(--n-merged-td-color);
 border: 1px solid var(--n-merged-border-color);
 `,[s(`descriptions-table`,[s(`descriptions-table-row`,[p(`&:not(:last-child)`,[s(`descriptions-table-content`,{borderBottom:`1px solid var(--n-merged-border-color)`}),s(`descriptions-table-header`,{borderBottom:`1px solid var(--n-merged-border-color)`})]),s(`descriptions-table-header`,`
 font-weight: 400;
 background-clip: padding-box;
 background-color: var(--n-merged-th-color);
 `,[p(`&:not(:last-child)`,{borderRight:`1px solid var(--n-merged-border-color)`})]),s(`descriptions-table-content`,[p(`&:not(:last-child)`,{borderRight:`1px solid var(--n-merged-border-color)`})])])])])]),s(`descriptions-header`,`
 font-weight: var(--n-th-font-weight);
 font-size: 18px;
 transition: color .3s var(--n-bezier);
 line-height: var(--n-line-height);
 margin-bottom: 16px;
 color: var(--n-title-text-color);
 `),s(`descriptions-table-wrapper`,`
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[s(`descriptions-table`,`
 width: 100%;
 border-collapse: separate;
 border-spacing: 0;
 box-sizing: border-box;
 `,[s(`descriptions-table-row`,`
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `,[s(`descriptions-table-header`,`
 font-weight: var(--n-th-font-weight);
 line-height: var(--n-line-height);
 display: table-cell;
 box-sizing: border-box;
 color: var(--n-th-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),s(`descriptions-table-content`,`
 vertical-align: top;
 line-height: var(--n-line-height);
 display: table-cell;
 box-sizing: border-box;
 color: var(--n-td-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[m(`content`,`
 transition: color .3s var(--n-bezier);
 display: inline-block;
 color: var(--n-td-text-color);
 `)]),m(`label`,`
 font-weight: var(--n-th-font-weight);
 transition: color .3s var(--n-bezier);
 display: inline-block;
 margin-right: 14px;
 color: var(--n-th-text-color);
 `)])])])]),s(`descriptions-table-wrapper`,`
 --n-merged-th-color: var(--n-th-color);
 --n-merged-td-color: var(--n-td-color);
 --n-merged-border-color: var(--n-border-color);
 `),_(s(`descriptions-table-wrapper`,`
 --n-merged-th-color: var(--n-th-color-modal);
 --n-merged-td-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)),o(s(`descriptions-table-wrapper`,`
 --n-merged-th-color: var(--n-th-color-popover);
 --n-merged-td-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]),E=`DESCRIPTION_ITEM_FLAG`;function D(e){return typeof e==`object`&&e&&!Array.isArray(e)?e.type&&e.type.DESCRIPTION_ITEM_FLAG:!1}var O=[`colspan`],k=[`colspan`],A=[`colspan`],j=[`colspan`],M={...c.props,title:String,column:{type:Number,default:3},columns:Number,labelPlacement:{type:String,default:`top`},labelAlign:{type:String,default:`left`},separator:{type:String,default:`:`},size:String,bordered:Boolean,labelClass:String,labelStyle:[Object,String],contentClass:String,contentStyle:[Object,String]},N=e({name:`Descriptions`,props:M,slots:Object,setup(e){let{mergedClsPrefixRef:t,inlineThemeDisabled:n,mergedComponentPropsRef:i}=h(e),a=r(()=>e.size||i?.value?.Descriptions?.size||`medium`),o=c(`Descriptions`,`-descriptions`,T,C,e,t),s=r(()=>{let{bordered:t}=e,n=a.value,{common:{cubicBezierEaseInOut:r},self:{titleTextColor:i,thColor:s,thColorModal:c,thColorPopover:l,thTextColor:u,thFontWeight:d,tdTextColor:p,tdColor:m,tdColorModal:h,tdColorPopover:g,borderColor:_,borderColorModal:v,borderColorPopover:y,borderRadius:b,lineHeight:x,[f(`fontSize`,n)]:S,[f(t?`thPaddingBordered`:`thPadding`,n)]:C,[f(t?`tdPaddingBordered`:`tdPadding`,n)]:w}}=o.value;return{"--n-title-text-color":i,"--n-th-padding":C,"--n-td-padding":w,"--n-font-size":S,"--n-bezier":r,"--n-th-font-weight":d,"--n-line-height":x,"--n-th-text-color":u,"--n-td-text-color":p,"--n-th-color":s,"--n-th-color-modal":c,"--n-th-color-popover":l,"--n-td-color":m,"--n-td-color-modal":h,"--n-td-color-popover":g,"--n-border-radius":b,"--n-border-color":_,"--n-border-color-modal":v,"--n-border-color-popover":y}}),l=n?d(`descriptions`,r(()=>{let t=``,{bordered:n}=e;return n&&(t+=`a`),t+=a.value[0],t}),s,e):void 0;return{mergedClsPrefix:t,cssVars:n?void 0:s,themeClass:l?.themeClass,onRender:l?.onRender,compitableColumn:b(e,[`columns`,`column`]),inlineThemeDisabled:n,mergedSize:a}},render(){let e=this.$slots.default,r=e?x(e()):[];r.length;let{contentClass:o,labelClass:s,compitableColumn:c,labelPlacement:l,labelAlign:u,mergedSize:d,bordered:f,title:p,cssVars:m,mergedClsPrefix:h,separator:_,onRender:b}=this;b?.();let C=r.filter(e=>D(e)),T=C.reduce((e,r,u)=>{let d=r.props||{},p=C.length-1===u,m=[`label`in d?d.label:w(r,`label`)],y=[w(r)],b=d.span||1,x=e.span;e.span+=b;let S=d.labelStyle||d[`label-style`]||this.labelStyle,T=d.contentStyle||d[`content-style`]||this.contentStyle;if(l===`left`)f?e.row.push((t(),a(`th`,{key:1,class:g([`${h}-descriptions-table-header`,s]),colspan:1,style:n(S)},[v(()=>m)],6)),(t(),a(`td`,{key:2,class:g([`${h}-descriptions-table-content`,o]),colspan:p?(c-x)*2+1:b*2-1,style:n(T)},[v(()=>y)],14,O))):e.row.push((t(),a(`td`,{key:3,class:g(`${h}-descriptions-table-content`),colspan:p?(c-x)*2:b*2},[i(`span`,{class:g([`${h}-descriptions-table-content__label`,s]),style:n(S)},[v(()=>[...m,_&&(t(),a(`span`,{key:4,class:g(`${h}-descriptions-separator`)},[v(()=>_)],2))])],6),i(`span`,{class:g([`${h}-descriptions-table-content__content`,o]),style:n(T)},[v(()=>y)],6)],10,k)));else{let r=p?(c-x)*2:b*2;e.row.push((t(),a(`th`,{key:5,class:g([`${h}-descriptions-table-header`,s]),colspan:r,style:n(S)},[v(()=>m)],14,A))),e.secondRow.push((t(),a(`td`,{key:6,class:g([`${h}-descriptions-table-content`,o]),colspan:r,style:n(T)},[v(()=>y)],14,j)))}return(e.span>=c||p)&&(e.span=0,e.row.length&&(e.rows.push(e.row),e.row=[]),l!==`left`&&e.secondRow.length&&(e.rows.push(e.secondRow),e.secondRow=[])),e},{span:0,row:[],secondRow:[],rows:[]}).rows.map(e=>(t(),a(`tr`,{class:g(`${h}-descriptions-table-row`)},[v(()=>e)],2)));return t(),a(`div`,{style:n(m),class:g([`${h}-descriptions`,this.themeClass,`${h}-descriptions--${l}-label-placement`,`${h}-descriptions--${u}-label-align`,`${h}-descriptions--${d}-size`,f&&`${h}-descriptions--bordered`])},[p||this.$slots.header?(t(),a(`div`,{key:0,class:g(`${h}-descriptions-header`)},[v(()=>p||S(this,`header`))],2)):v(()=>null),i(`div`,{class:g(`${h}-descriptions-table-wrapper`)},[i(`table`,{class:g(`${h}-descriptions-table`)},[i(`tbody`,null,[v(()=>l===`top`&&(t(),a(`tr`,{class:g(`${h}-descriptions-table-row`),style:{visibility:`collapse`}},[v(()=>y(c*2,(t(),a(`td`))))],2))),v(()=>T)])],2)],2)],6)}}),P={label:String,span:{type:Number,default:1},labelClass:String,labelStyle:[Object,String],contentClass:String,contentStyle:[Object,String]},F=e({name:`DescriptionsItem`,[E]:!0,props:P,slots:Object,render(){return null}});export{N as n,F as t};