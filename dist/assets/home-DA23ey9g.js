import{Gt as e,H as t,M as n,N as r,O as i,R as a,S as o,V as s,W as c,Wt as l,_ as u,b as d,d as f,f as p,gt as m,h,i as g,it as _,m as v,p as y,q as b,tt as x,wt as S,xt as C,y as w}from"./runtime-core.esm-bundler-B8bAGhjJ.js";import{At as T,Ct as E,D,Et as O,O as ee,St as k,Tt as A,ft as te,g as j,ht as M,it as N,kt as ne,st as P,t as F,vt as I}from"./Card-D1y5zSiq.js";import{$ as L,d as R,et as z,n as B,p as V,wt as H}from"./router-HxjjpqyM.js";import{t as U}from"./locales-B_CaX8_V.js";import{E as W}from"./Popover-B9CZ_-d6.js";import{r as G,t as K}from"./Grid-CsfCjymU.js";import{t as q}from"./InfiniteScroll-ChThdjAb.js";import{t as J}from"./Spin-BCZw-UE9.js";import{t as Y}from"./svg-icon-BGPk798W.js";import{T as X,r as Z,t as re}from"./dist-OGeymzgn.js";import{f as ie}from"./index-CUZUr-ur.js";var ae=k([E(`list`,`
 --n-merged-border-color: var(--n-border-color);
 --n-merged-color: var(--n-color);
 --n-merged-color-hover: var(--n-color-hover);
 margin: 0;
 font-size: var(--n-font-size);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 padding: 0;
 list-style-type: none;
 color: var(--n-text-color);
 background-color: var(--n-merged-color);
 `,[O(`show-divider`,[E(`list-item`,[k(`&:not(:last-child)`,[A(`divider`,`
 background-color: var(--n-merged-border-color);
 `)])])]),O(`clickable`,[E(`list-item`,`
 cursor: pointer;
 `)]),O(`bordered`,`
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `),O(`hoverable`,[E(`list-item`,`
 border-radius: var(--n-border-radius);
 `,[k(`&:hover`,`
 background-color: var(--n-merged-color-hover);
 `,[A(`divider`,`
 background-color: transparent;
 `)])])]),O(`bordered, hoverable`,[E(`list-item`,`
 padding: 12px 20px;
 `),A(`header, footer`,`
 padding: 12px 20px;
 `)]),A(`header, footer`,`
 padding: 12px 0;
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `,[k(`&:not(:last-child)`,`
 border-bottom: 1px solid var(--n-merged-border-color);
 `)]),E(`list-item`,`
 position: relative;
 padding: 12px 0; 
 box-sizing: border-box;
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[A(`prefix`,`
 margin-right: 20px;
 flex: 0;
 `),A(`suffix`,`
 margin-left: 20px;
 flex: 0;
 `),A(`main`,`
 flex: 1;
 `),A(`divider`,`
 height: 1px;
 position: absolute;
 bottom: 0;
 left: 0;
 right: 0;
 background-color: transparent;
 transition: background-color .3s var(--n-bezier);
 pointer-events: none;
 `)])]),ne(E(`list`,`
 --n-merged-color-hover: var(--n-color-hover-modal);
 --n-merged-color: var(--n-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)),T(E(`list`,`
 --n-merged-color-hover: var(--n-color-hover-popover);
 --n-merged-color: var(--n-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]),oe={...D.props,size:{type:String,default:`medium`},bordered:Boolean,clickable:Boolean,hoverable:Boolean,showDivider:{type:Boolean,default:!0}},Q=M(`n-list`),se=o({name:`List`,props:oe,slots:Object,setup(e){let{mergedClsPrefixRef:n,inlineThemeDisabled:r,mergedRtlRef:i}=te(e),a=j(`List`,i,n),o=D(`List`,`-list`,ae,ie,e,n);t(Q,{showDividerRef:C(e,`showDivider`),mergedClsPrefixRef:n});let s=f(()=>{let{common:{cubicBezierEaseInOut:e},self:{fontSize:t,textColor:n,color:r,colorModal:i,colorPopover:a,borderColor:s,borderColorModal:c,borderColorPopover:l,borderRadius:u,colorHover:d,colorHoverModal:f,colorHoverPopover:p}}=o.value;return{"--n-font-size":t,"--n-bezier":e,"--n-text-color":n,"--n-color":r,"--n-border-radius":u,"--n-border-color":s,"--n-border-color-modal":c,"--n-border-color-popover":l,"--n-color-modal":i,"--n-color-popover":a,"--n-color-hover":d,"--n-color-hover-modal":f,"--n-color-hover-popover":p}}),c=r?ee(`list`,void 0,s,e):void 0;return{mergedClsPrefix:n,rtlEnabled:a,cssVars:r?void 0:s,themeClass:c?.themeClass,onRender:c?.onRender}},render(){let{$slots:e,mergedClsPrefix:t,onRender:n}=this;return n?.(),s(),h(`ul`,{class:N([`${t}-list`,this.rtlEnabled&&`${t}-list--rtl`,this.bordered&&`${t}-list--bordered`,this.showDivider&&`${t}-list--show-divider`,this.hoverable&&`${t}-list--hoverable`,this.clickable&&`${t}-list--clickable`,this.themeClass]),style:l(this.cssVars)},[e.header?(s(),h(`div`,{key:0,class:N(`${t}-list__header`)},[P(()=>e.header())],2)):P(()=>null),P(()=>e.default?.()),e.footer?(s(),h(`div`,{key:2,class:N(`${t}-list__footer`)},[P(()=>e.footer())],2)):P(()=>null)],6)}}),ce=o({name:`ListItem`,slots:Object,setup(){let e=i(Q,null);return e||I(`list-item`,"`n-list-item` must be placed in `n-list`."),{showDivider:e.showDividerRef,mergedClsPrefix:e.mergedClsPrefixRef}},render(){let{$slots:e,mergedClsPrefix:t}=this;return s(),h(`li`,{class:N(`${t}-list-item`)},[e.prefix?(s(),h(`div`,{key:0,class:N(`${t}-list-item__prefix`)},[P(()=>e.prefix())],2)):P(()=>null),e.default?(s(),h(`div`,{key:2,class:N(`${t}-list-item__main`)},[P(()=>e.default())],2)):P(()=>null),e.suffix?(s(),h(`div`,{key:4,class:N(`${t}-list-item__suffix`)},[P(()=>e.suffix())],2)):P(()=>null),P(()=>this.showDivider&&(s(),h(`div`,{class:N(`${t}-list-item__divider`)},null,2)))],2)}}),le=o({name:`CountTo`,__name:`count-to`,props:{startValue:{default:0},endValue:{default:2021},duration:{default:1500},autoplay:{type:Boolean,default:!0},decimals:{default:0},prefix:{default:``},suffix:{default:``},separator:{default:`,`},decimal:{default:`.`},useEasing:{type:Boolean,default:!0},transition:{default:`linear`}},setup(t){let r=t,i=m(r.startValue),a=f(()=>r.useEasing?re[r.transition]:void 0),o=X(i,{disabled:!1,duration:r.duration,transition:a.value}),c=f(()=>l(o.value));function l(e){let{decimals:t,decimal:n,separator:i,suffix:a,prefix:o}=r,s=e.toFixed(t);s=String(s);let c=s.split(`.`),l=c[0],u=c.length>1?n+c[1]:``,d=/(\d+)(\d{3})/;if(i)for(;d.test(l);)l=l.replace(d,`$1${i}$2`);return o+l+u+a}async function u(){await n(),i.value=r.endValue}return x([()=>r.startValue,()=>r.endValue],()=>{r.autoplay&&u()},{immediate:!0}),(t,n)=>(s(),h(`span`,null,e(c.value),1))}}),ue={class:`text-16px`},de={class:`flex justify-between pt-12px`},fe=o({name:`CardData`,__name:`card-data`,setup(t){let n=m(null);a(async()=>{let{data:e,error:t}=await z();!t&&e&&(n.value=e)});let r=f(()=>[{key:`contractCount`,title:U(`page.home.contractCount`),value:n.value?.contractCount??0,prefix:``,decimals:0,color:{start:`#ec4786`,end:`#b955a4`},icon:`ant-design:bar-chart-outlined`},{key:`contractAmount`,title:U(`page.home.contractAmount`),value:n.value?.totalContractAmount??0,prefix:`¥`,decimals:2,color:{start:`#865ec0`,end:`#5144b4`},icon:`ant-design:money-collect-outlined`},{key:`receiptAmount`,title:U(`page.home.receiptAmount`),value:n.value?.totalReceiptAmount??0,prefix:`¥`,decimals:2,color:{start:`#56cdf3`,end:`#719de3`},icon:`ant-design:pay-circle-outlined`},{key:`grossProfit`,title:U(`page.home.grossProfit`),value:n.value?.totalGrossProfit??0,prefix:`¥`,decimals:2,color:{start:`#fcbc25`,end:`#f68057`},icon:`ant-design:trademark-circle-outlined`}]),[i,o]=Z(),u=V();function v(e){return`linear-gradient(to bottom right, ${e.start}, ${e.end})`}return(t,n)=>{let a=Y,f=le,m=G,x=K,C=F;return s(),y(C,{bordered:!1,size:`small`,class:`card-wrapper`},{default:_(()=>[d(S(i),null,{default:_(({$slots:e,gradientColor:t})=>[p(`div`,{class:`px-16px pb-4px pt-8px text-white`,style:l({backgroundImage:t,borderRadius:S(u).themeRadius+`px`})},[(s(),y(b(e.default)))],4)]),_:1}),d(x,{cols:`s:1 m:2 l:4`,responsive:`screen`,"x-gap":16,"y-gap":16},{default:_(()=>[(s(!0),h(g,null,c(r.value,t=>(s(),y(m,{key:t.key},{default:_(()=>[d(S(o),{"gradient-color":v(t.color),class:`flex-1`},{default:_(()=>[p(`h3`,ue,e(t.title),1),p(`div`,de,[d(a,{icon:t.icon,class:`text-32px`},null,8,[`icon`]),d(f,{prefix:t.prefix,decimals:t.decimals,"start-value":1,"end-value":t.value,class:`text-30px text-white dark:text-dark`},null,8,[`prefix`,`decimals`,`end-value`])])]),_:2},1032,[`gradient-color`])]),_:2},1024))),128))]),_:1})]),_:1})}}}),pe=`/assets/soybean-JC38yUrs.jpg`,me={class:`flex-y-center`},he={class:`pl-12px`},ge={class:`text-18px font-semibold`},_e={class:`text-#999 leading-30px`},ve=o({name:`HeaderBanner`,__name:`header-banner`,setup(t){let n=R(),r=B(),i=f(()=>n.isMobile?0:16),a=f(()=>{let e=new Date().getHours(),t=r.userInfo.userName;return U(e>=0&&e<18?`page.home.greetingMorning`:`page.home.greetingEvening`,{userName:t})});return(t,n)=>{let r=G,o=K,c=F;return s(),y(c,{bordered:!1,class:`card-wrapper`},{default:_(()=>[d(o,{"x-gap":i.value,"y-gap":16,responsive:`screen`,"item-responsive":``},{default:_(()=>[d(r,{span:`24`},{default:_(()=>[p(`div`,me,[n[0]||=p(`div`,{class:`size-72px shrink-0 overflow-hidden rd-1/2`},[p(`img`,{src:pe,class:`size-full`})],-1),p(`div`,he,[p(`h3`,ge,e(a.value),1),p(`p`,_e,e(S(U)(`page.home.weatherDesc`)),1)])])]),_:1})]),_:1},8,[`x-gap`])]),_:1})}}}),ye={class:`relative inline-flex whitespace-nowrap`},be=[`title`],$={class:`flex-col gap-4px`},xe={class:`flex-y-center justify-between gap-12px`},Se=[`onClick`],Ce={class:`font-bold whitespace-nowrap`},we={class:`text-12px text-gray-500`},Te={class:`flex justify-center py-12px`},Ee={class:`py-8px text-center text-12px text-gray-400`},De=10,Oe=o({name:`ExpiringContractNews`,__name:`project-news`,setup(t){let n=H(),i=m([]),o=m(1),l=m(0),f=m(!1),b=m(!0),x=m(!1);function C(){i.value=[],o.value=1,l.value=0,b.value=!0,T()}async function T(){if(!f.value&&b.value){f.value=!0;try{let{data:e,error:t}=await L({current:o.value,pageSize:De});if(t||!e)return;i.value=[...i.value,...e.records],l.value=e.total,o.value+=1,b.value=i.value.length<e.total}finally{f.value=!1}}}function E(){T()}a(async()=>{await T(),x.value=!0}),r(()=>{x.value&&C()});function D(e){n.push({path:`/contract/basic-info`,query:{contractNo:e.contractNo}})}return(t,n)=>{let r=ce,a=se,o=W,m=J,x=q,C=F;return s(),y(C,{bordered:!1,size:`small`,segmented:``,class:`card-wrapper overflow-hidden`,"content-style":{height:`100%`,display:`flex`,flexDirection:`column`,overflow:`hidden`}},{header:_(()=>[p(`span`,ye,[w(e(S(U)(`page.home.expiringNews.title`))+` `,1),p(`span`,{class:`absolute -top-9px -right-16px flex-center min-w-18px rd-full bg-[#d03050] px-3px text-11px font-bold text-white`,title:S(U)(`page.home.expiringCount`)},e(l.value),9,be)])]),default:_(()=>[d(x,{class:`min-h-0 flex-1 overflow-hidden`,distance:10,onLoad:E},u({default:_(()=>[i.value.length?(s(),y(a,{key:0,bordered:!0},{default:_(()=>[(s(!0),h(g,null,c(i.value,t=>(s(),y(r,{key:t.id},{default:_(()=>[p(`div`,$,[p(`div`,xe,[p(`a`,{class:`cursor-pointer text-primary font-bold`,onClick:e=>D(t)},e(t.contractNo),9,Se),p(`span`,Ce,e(t.companyName),1)]),p(`span`,we,e(S(U)(`page.home.expiringNews.expireDate`))+`: `+e(t.expireDate),1)])]),_:2},1024))),128))]),_:1})):f.value?v(``,!0):(s(),y(o,{key:1,description:S(U)(`page.home.expiringNews.empty`),class:`pt-24px`},null,8,[`description`]))]),_:2},[f.value?{name:`footer`,fn:_(()=>[p(`div`,Te,[d(m,{size:`small`})])]),key:`0`}:!b.value&&i.value.length?{name:`footer`,fn:_(()=>[p(`div`,Ee,e(S(U)(`page.home.expiringNews.noMore`)),1)]),key:`1`}:void 0]),1024)]),_:1})}}}),ke={class:`h-full flex-col gap-16px overflow-hidden`},Ae=o({name:`home`,__name:`index`,setup(e){return(e,t)=>(s(),h(`div`,ke,[d(ve,{class:`flex-none`}),d(fe,{class:`flex-none`}),d(Oe,{class:`min-h-0 flex-1`})]))}});export{Ae as default};