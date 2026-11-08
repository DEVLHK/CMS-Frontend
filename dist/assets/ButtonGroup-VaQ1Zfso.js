import{H as e,S as t,V as n,h as r}from"./runtime-core.esm-bundler-B8bAGhjJ.js";import{Ct as i,Dt as a,Et as o,St as s,Tt as c,ct as l,ft as u,g as d,it as f,st as p}from"./Card-D1y5zSiq.js";import{i as m}from"./Button-AFSoWKwt.js";var h=`0!important`,g=`-1px!important`;function _(e){return o(`${e}-type`,[s(`& +`,[i(`button`,{},[o(`${e}-type`,[c(`border`,{borderLeftWidth:h}),c(`state-border`,{left:g})])])])])}function v(e){return o(`${e}-type`,[s(`& +`,[i(`button`,[o(`${e}-type`,[c(`border`,{borderTopWidth:h}),c(`state-border`,{top:g})])])])])}var y=i(`button-group`,`
 flex-wrap: nowrap;
 display: inline-flex;
 position: relative;
`,[a(`vertical`,{flexDirection:`row`},[a(`rtl`,[i(`button`,[s(`&:first-child:not(:last-child)`,`
 margin-right: ${h};
 border-top-right-radius: ${h};
 border-bottom-right-radius: ${h};
 `),s(`&:last-child:not(:first-child)`,`
 margin-left: ${h};
 border-top-left-radius: ${h};
 border-bottom-left-radius: ${h};
 `),s(`&:not(:first-child):not(:last-child)`,`
 margin-left: ${h};
 margin-right: ${h};
 border-radius: ${h};
 `),_(`default`),o(`ghost`,[_(`primary`),_(`info`),_(`success`),_(`warning`),_(`error`)])])])]),o(`vertical`,{flexDirection:`column`},[i(`button`,[s(`&:first-child:not(:last-child)`,`
 margin-bottom: ${h};
 margin-left: ${h};
 margin-right: ${h};
 border-bottom-left-radius: ${h};
 border-bottom-right-radius: ${h};
 `),s(`&:last-child:not(:first-child)`,`
 margin-top: ${h};
 margin-left: ${h};
 margin-right: ${h};
 border-top-left-radius: ${h};
 border-top-right-radius: ${h};
 `),s(`&:not(:first-child):not(:last-child)`,`
 margin: ${h};
 border-radius: ${h};
 `),v(`default`),o(`ghost`,[v(`primary`),v(`info`),v(`success`),v(`warning`),v(`error`)])])])]),b=t({name:`ButtonGroup`,props:{size:String,vertical:Boolean},setup(t){let{mergedClsPrefixRef:n,mergedRtlRef:r}=u(t);return l(`-button-group`,y,n),e(m,t),{rtlEnabled:d(`ButtonGroup`,r,n),mergedClsPrefix:n}},render(){let{mergedClsPrefix:e}=this;return n(),r(`div`,{class:f([`${e}-button-group`,this.rtlEnabled&&`${e}-button-group--rtl`,this.vertical&&`${e}-button-group--vertical`]),role:`group`},[p(()=>this.$slots.default?.())],2)}});export{b as t};