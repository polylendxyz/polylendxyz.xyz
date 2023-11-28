"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[223],{64288:function(e,t,n){n.d(t,{Z:function(){return w}});var i=n(63366),r=n(87462),s=n(67294),a=n(86010),o=n(28320),c=n(34867),x=n(94780),l=n(29628),d=n(13264),u=n(66500),p=n(85893);const m=["className","component","disableGutters","fixed","maxWidth","classes"],f=(0,u.Z)(),h=(0,d.Z)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`maxWidth${(0,o.Z)(String(n.maxWidth))}`],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),b=e=>(0,l.Z)({props:e,name:"MuiContainer",defaultTheme:f});var g=n(36622),v=n(81719),j=n(78884);const Z=function(e={}){const{createStyledComponent:t=h,useThemeProps:n=b,componentName:l="MuiContainer"}=e,d=t((({theme:e,ownerState:t})=>(0,r.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!t.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}})),(({theme:e,ownerState:t})=>t.fixed&&Object.keys(e.breakpoints.values).reduce(((t,n)=>{const i=n,r=e.breakpoints.values[i];return 0!==r&&(t[e.breakpoints.up(i)]={maxWidth:`${r}${e.breakpoints.unit}`}),t}),{})),(({theme:e,ownerState:t})=>(0,r.Z)({},"xs"===t.maxWidth&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},t.maxWidth&&"xs"!==t.maxWidth&&{[e.breakpoints.up(t.maxWidth)]:{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`}}))),u=s.forwardRef((function(e,t){const s=n(e),{className:u,component:f="div",disableGutters:h=!1,fixed:b=!1,maxWidth:g="lg"}=s,v=(0,i.Z)(s,m),j=(0,r.Z)({},s,{component:f,disableGutters:h,fixed:b,maxWidth:g}),Z=((e,t)=>{const{classes:n,fixed:i,disableGutters:r,maxWidth:s}=e,a={root:["root",s&&`maxWidth${(0,o.Z)(String(s))}`,i&&"fixed",r&&"disableGutters"]};return(0,x.Z)(a,(e=>(0,c.Z)(t,e)),n)})(j,l);return(0,p.jsx)(d,(0,r.Z)({as:f,ownerState:j,className:(0,a.default)(Z.root,u),ref:t},v))}));return u}({createStyledComponent:(0,v.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`maxWidth${(0,g.Z)(String(n.maxWidth))}`],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),useThemeProps:e=>(0,j.Z)({props:e,name:"MuiContainer"})});var w=Z},13264:function(e,t,n){const i=(0,n(70182).ZP)();t.Z=i},15446:function(e,t,n){n.d(t,{O:function(){return a}});var i=n(61953),r=n(64288),s=n(85893),a=function(e){var t=e.children;return(0,s.jsx)(i.Z,{sx:{display:"flex",flexDirection:"column",zIndex:1,flex:1,mt:{xs:"-32px",lg:"-46px",xl:"-44px",xxl:"-48px"}},children:(0,s.jsx)(r.Z,{children:t})})}},25563:function(e,t,n){n.d(t,{hu:function(){return c},St:function(){return x},gO:function(){return l}});n(49501);var i=n(61953),r=n(72389),s=(n(67294),n(71675),n(57609),n(46930),n(25298)),a=(n(34637),n(59379),n(85893));var o,c=function(e){var t=s.ei[e];return{market:t,network:s.m5[t.chainId]}},x=function(e){var t=["G\xf6rli","Ropsten","Mumbai","Sepolia","Fuji","Testnet","Kovan","Rinkeby"],n=e.split(" "),i=n.filter((function(e){return t.indexOf(e)>-1}));return{name:n.filter((function(e){return!i.includes(e)})).join(" "),testChainName:i[0]}},l=function(e){var t=e.size,n=e.logo,s=e.testChainName;return(0,a.jsxs)(i.Z,{sx:{mr:2,width:t,height:t,position:"relative"},children:[(0,a.jsx)("img",{src:n,alt:"",width:"100%",height:"100%"}),s&&(0,a.jsx)(r.Z,{title:s,arrow:!0,children:(0,a.jsx)(i.Z,{sx:{bgcolor:"#29B6F6",width:"16px",height:"16px",borderRadius:"50%",color:"common.white",fontSize:"12px",lineHeight:"16px",display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",right:"-2px",bottom:"-2px"},children:s.split("")[0]})})]})};!function(e){e[e.V2=0]="V2",e[e.V3=1]="V3"}(o||(o={}))},40535:function(e,t,n){n.d(t,{V:function(){return c}});var i=n(62097),r=n(61225),s=n(61953),a=n(29630),o=n(85893),c=function(e){var t=e.pageTitle,n=e.pageDescription,c=(0,i.Z)(),x=(0,r.Z)(c.breakpoints.up("lg")),l=(0,r.Z)(c.breakpoints.down("xsm"));return(0,o.jsxs)(s.Z,{sx:{display:"flex",alignItems:"flex-start",mb:t?4:0,flexDirection:"column"},children:[t&&(0,o.jsx)(s.Z,{sx:{display:"flex",alignItems:"flex-start"},children:(0,o.jsx)(a.Z,{variant:l?"h2":x?"display1":"h1",sx:{color:"text.white",mr:{xs:5,xsm:3},mb:{xs:1,xsm:0}},children:t})}),n&&(0,o.jsx)(s.Z,{sx:{display:"flex",alignItems:"flex-start",maxWidth:750},children:(0,o.jsx)(a.Z,{variant:"description",sx:{color:"text.muted",mr:{xs:5,xsm:3},mb:{xs:1,xsm:0}},children:n})})]})}},74815:function(e,t,n){n.d(t,{f:function(){return l}});var i=n(59499),r=n(61953),s=n(64288),a=n(40535),o=n(85893);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l=function(e){var t=e.pageTitle,n=e.pageDescription,i=e.titleComponent,c=e.withMarketSwitcher,l=e.withMigrateButton,d=e.bridge,u=e.children,p=e.containerProps,m=void 0===p?{}:p;return(0,o.jsxs)(r.Z,{className:"animated-bg",sx:{pt:{xs:10,md:12},pb:{xs:18,md:20,lg:"94px",xl:"92px",xxl:"96px"},color:"#F1F1F3"},children:[(0,o.jsx)("div",{className:"animated-bg-cover"}),(0,o.jsx)(s.Z,x(x({},m),{},{sx:x(x({},m.sx),{},{pb:0,zIndex:2}),children:(0,o.jsxs)(r.Z,{sx:{px:{xs:4,xsm:6},zIndex:1},children:[!i&&(0,o.jsx)(a.V,{pageDescription:n,pageTitle:t,withMarketSwitcher:c,withMigrateButton:l,bridge:d}),i&&i,(0,o.jsx)(r.Z,{sx:{display:"flex",alignItems:"flex-start",gap:{xs:3,xsm:8},flexWrap:"wrap",width:"100%"},children:u})]})}))]})}},3765:function(e,t,n){n.d(t,{p:function(){return l}});var i=n(49501),r=n(75084),s=n(26074),a=n(71675),o=n(57609),c=n(58294),x=n(85893),l=function(e){var t=e.funnel,n=(0,s.q)().setWalletModalOpen,l=(0,a.Yh)((function(e){return e.trackEvent}));return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(r.Z,{variant:"gradient",onClick:function(){l(o.Bp.CONNECT_WALLET,{funnel:t}),n(!0)},children:(0,x.jsx)(i.cC,{id:"Connect wallet"})}),(0,x.jsx)(c.x,{})]})}}}]);