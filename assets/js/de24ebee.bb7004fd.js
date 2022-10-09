"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7605],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=u(r),f=a,k=c["".concat(p,".").concat(f)]||c[f]||d[f]||i;return r?n.createElement(k,o(o({ref:t},s),{},{components:r})):n.createElement(k,o({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},6761:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const i={id:"router.IRouterOptions",title:"Interface: IRouterOptions",sidebar_label:"IRouterOptions",custom_edit_url:null},o=void 0,l={unversionedId:"api/reactant-share/interfaces/router.IRouterOptions",id:"api/reactant-share/interfaces/router.IRouterOptions",title:"Interface: IRouterOptions",description:"router.IRouterOptions",source:"@site/docs/api/reactant-share/interfaces/router.IRouterOptions.md",sourceDirName:"api/reactant-share/interfaces",slug:"/api/reactant-share/interfaces/router.IRouterOptions",permalink:"/docs/api/reactant-share/interfaces/router.IRouterOptions",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"router.IRouterOptions",title:"Interface: IRouterOptions",sidebar_label:"IRouterOptions",custom_edit_url:null},sidebar:"api",previous:{title:"Router",permalink:"/docs/api/reactant-share/classes/router.Router"},next:{title:"Storage",permalink:"/docs/api/reactant-share/classes/storage.Storage"}},p={},u=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"autoCreateHistory",id:"autocreatehistory",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"autoProvide",id:"autoprovide",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"createHistory",id:"createhistory",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Returns",id:"returns",level:5},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"defaultRoute",id:"defaultroute",level:3},{value:"Defined in",id:"defined-in-3",level:4}],s={toc:u};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api/reactant-share/modules/router"},"router"),".IRouterOptions"),(0,a.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"IRouterOptions")),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"IRouterOptions"))))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"autocreatehistory"},"autoCreateHistory"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"autoCreateHistory"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"auto create history and handle middleware"),(0,a.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,a.kt)("p",null,"IBaseRouterOptions.autoCreateHistory"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/unadlib/reactant/blob/58d171db/packages/reactant-router/src/router.tsx#L42"},"packages/reactant-router/src/router.tsx:42")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"autoprovide"},"autoProvide"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"autoProvide"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"Auto provider injection."),(0,a.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,a.kt)("p",null,"IBaseRouterOptions.autoProvide"),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/unadlib/reactant/blob/58d171db/packages/reactant-router/src/router.tsx#L38"},"packages/reactant-router/src/router.tsx:38")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"createhistory"},"createHistory"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"createHistory"),": () => ",(0,a.kt)("inlineCode",{parentName:"p"},"History"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"unknown"),">"),(0,a.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,a.kt)("p",null,"\u25b8 (): ",(0,a.kt)("inlineCode",{parentName:"p"},"History"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"unknown"),">"),(0,a.kt)("p",null,"create history for router, use ",(0,a.kt)("inlineCode",{parentName:"p"},"createHashHistory"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"createBrowserHistory"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"createMemoryHistory")),(0,a.kt)("h5",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"History"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"unknown"),">"),(0,a.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,a.kt)("p",null,"IBaseRouterOptions.createHistory"),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/unadlib/reactant/blob/58d171db/packages/reactant-router/src/router.tsx#L34"},"packages/reactant-router/src/router.tsx:34")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"defaultroute"},"defaultRoute"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"defaultRoute"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"default initial route"),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/unadlib/reactant/blob/58d171db/packages/reactant-share/src/router.ts#L30"},"packages/reactant-share/src/router.ts:30")))}d.isMDXComponent=!0}}]);