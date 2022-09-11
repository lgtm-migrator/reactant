"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5577],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),f=a,m=d["".concat(p,".").concat(f)]||d[f]||s[f]||o;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},932:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={id:"IRouterOptions",title:"Interface: IRouterOptions",sidebar_label:"IRouterOptions",sidebar_position:0,custom_edit_url:null},i=void 0,l={unversionedId:"api/reactant-router/interfaces/IRouterOptions",id:"api/reactant-router/interfaces/IRouterOptions",title:"Interface: IRouterOptions",description:"Properties",source:"@site/docs/api/reactant-router/interfaces/IRouterOptions.md",sourceDirName:"api/reactant-router/interfaces",slug:"/api/reactant-router/interfaces/IRouterOptions",permalink:"/docs/api/reactant-router/interfaces/IRouterOptions",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"IRouterOptions",title:"Interface: IRouterOptions",sidebar_label:"IRouterOptions",sidebar_position:0,custom_edit_url:null},sidebar:"api",previous:{title:"Router",permalink:"/docs/api/reactant-router/classes/Router"},next:{title:"Storage",permalink:"/docs/api/reactant-storage/classes/Storage"}},p={},u=[{value:"Properties",id:"properties",level:2},{value:"autoCreateHistory",id:"autocreatehistory",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"autoProvide",id:"autoprovide",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"createHistory",id:"createhistory",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Returns",id:"returns",level:5},{value:"Defined in",id:"defined-in-2",level:4}],c={toc:u};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"autocreatehistory"},"autoCreateHistory"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"autoCreateHistory"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"auto create history and handle middleware"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/unadlib/reactant/blob/94ce5c78/packages/reactant-router/src/router.tsx#L42"},"packages/reactant-router/src/router.tsx:42")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"autoprovide"},"autoProvide"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"autoProvide"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"Auto provider injection."),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/unadlib/reactant/blob/94ce5c78/packages/reactant-router/src/router.tsx#L38"},"packages/reactant-router/src/router.tsx:38")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"createhistory"},"createHistory"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"createHistory"),": () => ",(0,a.kt)("inlineCode",{parentName:"p"},"History"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"unknown"),">"),(0,a.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,a.kt)("p",null,"\u25b8 (): ",(0,a.kt)("inlineCode",{parentName:"p"},"History"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"unknown"),">"),(0,a.kt)("p",null,"create history for router, use ",(0,a.kt)("inlineCode",{parentName:"p"},"createHashHistory"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"createBrowserHistory"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"createMemoryHistory")),(0,a.kt)("h5",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"History"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"unknown"),">"),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/unadlib/reactant/blob/94ce5c78/packages/reactant-router/src/router.tsx#L34"},"packages/reactant-router/src/router.tsx:34")))}s.isMDXComponent=!0}}]);