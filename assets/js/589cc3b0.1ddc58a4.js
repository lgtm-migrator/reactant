"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8621],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>c});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),p=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),m=p(a),c=n,u=m["".concat(o,".").concat(c)]||m[c]||k[c]||i;return a?r.createElement(u,l(l({ref:t},s),{},{components:a})):r.createElement(u,l({ref:t},s))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=m;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d.mdxType="string"==typeof e?e:n,l[1]=d;for(var p=2;p<i;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8962:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>d,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const i={id:"storage.Storage",title:"Class: Storage",sidebar_label:"Storage",custom_edit_url:null},l=void 0,d={unversionedId:"api/reactant-share/classes/storage.Storage",id:"api/reactant-share/classes/storage.Storage",title:"Class: Storage",description:"storage.Storage",source:"@site/docs/api/reactant-share/classes/storage.Storage.md",sourceDirName:"api/reactant-share/classes",slug:"/api/reactant-share/classes/storage.Storage",permalink:"/docs/api/reactant-share/classes/storage.Storage",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"storage.Storage",title:"Class: Storage",sidebar_label:"Storage",custom_edit_url:null},sidebar:"api",previous:{title:"IRouterOptions",permalink:"/docs/api/reactant-share/interfaces/router.IRouterOptions"},next:{title:"IStorageOptions",permalink:"/docs/api/reactant-share/interfaces/storage.IStorageOptions"}},o={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"storeKey",id:"storekey",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"blacklist",id:"blacklist",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"enhancer",id:"enhancer",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"manualPersist",id:"manualpersist",level:3},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"middleware",id:"middleware",level:3},{value:"Inherited from",id:"inherited-from-4",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"options",id:"options",level:3},{value:"Inherited from",id:"inherited-from-5",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"paused",id:"paused",level:3},{value:"Inherited from",id:"inherited-from-6",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"persistConfig",id:"persistconfig",level:3},{value:"Inherited from",id:"inherited-from-7",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"persistRootConfig",id:"persistrootconfig",level:3},{value:"Inherited from",id:"inherited-from-8",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"persistor",id:"persistor",level:3},{value:"Inherited from",id:"inherited-from-9",level:4},{value:"Defined in",id:"defined-in-10",level:4},{value:"portDetector",id:"portdetector",level:3},{value:"Defined in",id:"defined-in-11",level:4},{value:"rehydrateCallbackSet",id:"rehydratecallbackset",level:3},{value:"Inherited from",id:"inherited-from-10",level:4},{value:"Defined in",id:"defined-in-12",level:4},{value:"rehydrated",id:"rehydrated",level:3},{value:"Inherited from",id:"inherited-from-11",level:4},{value:"Defined in",id:"defined-in-13",level:4},{value:"Methods",id:"methods",level:2},{value:"_onRehydrated",id:"_onrehydrated",level:3},{value:"Returns",id:"returns",level:4},{value:"Inherited from",id:"inherited-from-12",level:4},{value:"Defined in",id:"defined-in-14",level:4},{value:"afterCombineRootReducers",id:"aftercombinerootreducers",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Inherited from",id:"inherited-from-13",level:4},{value:"Defined in",id:"defined-in-15",level:4},{value:"afterCreateStore",id:"aftercreatestore",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Inherited from",id:"inherited-from-14",level:4},{value:"Defined in",id:"defined-in-16",level:4},{value:"beforeCombineRootReducers",id:"beforecombinerootreducers",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Inherited from",id:"inherited-from-15",level:4},{value:"Defined in",id:"defined-in-17",level:4},{value:"getRehydrated",id:"getrehydrated",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Inherited from",id:"inherited-from-16",level:4},{value:"Defined in",id:"defined-in-18",level:4},{value:"onRehydrated",id:"onrehydrated",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Inherited from",id:"inherited-from-17",level:4},{value:"Defined in",id:"defined-in-19",level:4},{value:"preloadedStateHandler",id:"preloadedstatehandler",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Inherited from",id:"inherited-from-18",level:4},{value:"Defined in",id:"defined-in-20",level:4},{value:"provider",id:"provider",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"Returns",id:"returns-7",level:4},{value:"Inherited from",id:"inherited-from-19",level:4},{value:"Defined in",id:"defined-in-21",level:4},{value:"setStorage",id:"setstorage",level:3},{value:"Type parameters",id:"type-parameters",level:4},{value:"Parameters",id:"parameters-8",level:4},{value:"Returns",id:"returns-8",level:4},{value:"Inherited from",id:"inherited-from-20",level:4},{value:"Defined in",id:"defined-in-22",level:4}],s={toc:p};function k(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/api/reactant-share/modules/storage"},"storage"),".Storage"),(0,n.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"ReactantStorage")),(0,n.kt)("p",{parentName:"li"},"\u21b3 ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Storage"))))),(0,n.kt)("h2",{id:"constructors"},"Constructors"),(0,n.kt)("h3",{id:"constructor"},"constructor"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"new Storage"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"portDetector"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"options"),")"),(0,n.kt)("h4",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"portDetector")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs/api/reactant-share/classes/portDetector.PortDetector"},(0,n.kt)("inlineCode",{parentName:"a"},"PortDetector")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"options")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs/api/reactant-share/interfaces/storage.IStorageOptions"},(0,n.kt)("inlineCode",{parentName:"a"},"IStorageOptions")))))),(0,n.kt)("h4",{id:"overrides"},"Overrides"),(0,n.kt)("p",null,"BaseReactantStorage.constructor"),(0,n.kt)("h4",{id:"defined-in"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/unadlib/reactant/blob/94ce5c78/packages/reactant-share/src/storage.ts#L20"},"packages/reactant-share/src/storage.ts:20")),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("h3",{id:"storekey"},"[storeKey]"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,n.kt)("strong",{parentName:"p"},"[storeKey]"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"Store"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"AnyAction"),">"),(0,n.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,n.kt)("p",null,"BaseReactantStorage.","_","_","@storeKey@151541"),(0,n.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/unadlib/reactant/blob/94ce5c78/packages/reactant-module/src/core/plugin.ts#L15"},"packages/reactant-module/src/core/plugin.ts:15")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"blacklist"},"blacklist"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,n.kt)("strong",{parentName:"p"},"blacklist"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,n.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,n.kt)("p",null,"BaseReactantStorage.blacklist"),(0,n.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/unadlib/reactant/blob/94ce5c78/packages/reactant-storage/src/storage.tsx#L52"},"packages/reactant-storage/src/storage.tsx:52")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"enhancer"},"enhancer"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"enhancer"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"Function")),(0,n.kt)("p",null,"inject enhancer for Redux"),(0,n.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,n.kt)("p",null,"BaseReactantStorage.enhancer"),(0,n.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/unadlib/reactant/blob/94ce5c78/packages/reactant-module/src/core/plugin.ts#L32"},"packages/reactant-module/src/core/plugin.ts:32")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"manualpersist"},"manualPersist"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"manualPersist"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"boolean")," = ",(0,n.kt)("inlineCode",{parentName:"p"},"false")),(0,n.kt)("p",null,"manual persist"),(0,n.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,n.kt)("p",null,"BaseReactantStorage.manualPersist"),(0,n.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/unadlib/reactant/blob/94ce5c78/packages/reactant-storage/src/storage.tsx#L180"},"packages/reactant-storage/src/storage.tsx:180")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"middleware"},"middleware"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"middleware"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"Middleware"),"<{}, ",(0,n.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Dispatch"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"AnyAction"),">",">"),(0,n.kt)("p",null,"inject middleware for Redux"),(0,n.kt)("h4",{id:"inherited-from-4"},"Inherited from"),(0,n.kt)("p",null,"BaseReactantStorage.middleware"),(0,n.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/unadlib/reactant/blob/94ce5c78/packages/reactant-module/src/core/plugin.ts#L27"},"packages/reactant-module/src/core/plugin.ts:27")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"options"},"options"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"options"),": ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/reactant-share/interfaces/storage.IStorageOptions"},(0,n.kt)("inlineCode",{parentName:"a"},"IStorageOptions"))),(0,n.kt)("h4",{id:"inherited-from-5"},"Inherited from"),(0,n.kt)("p",null,"BaseReactantStorage.options"),(0,n.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/unadlib/reactant/blob/94ce5c78/packages/reactant-share/src/storage.ts#L22"},"packages/reactant-share/src/storage.ts:22")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"paused"},"paused"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"paused"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"boolean")," = ",(0,n.kt)("inlineCode",{parentName:"p"},"false")),(0,n.kt)("p",null,"persistence paused"),(0,n.kt)("h4",{id:"inherited-from-6"},"Inherited from"),(0,n.kt)("p",null,"BaseReactantStorage.paused"),(0,n.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/unadlib/reactant/blob/94ce5c78/packages/reactant-storage/src/storage.tsx#L185"},"packages/reactant-storage/src/storage.tsx:185")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"persistconfig"},"persistConfig"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,n.kt)("strong",{parentName:"p"},"persistConfig"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"Record"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"PersistConfig"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"any"),">",">"," = ",(0,n.kt)("inlineCode",{parentName:"p"},"{}")),(0,n.kt)("h4",{id:"inherited-from-7"},"Inherited from"),(0,n.kt)("p",null,"BaseReactantStorage.persistConfig"),(0,n.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/unadlib/reactant/blob/94ce5c78/packages/reactant-storage/src/storage.tsx#L70"},"packages/reactant-storage/src/storage.tsx:70")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"persistrootconfig"},"persistRootConfig"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,n.kt)("strong",{parentName:"p"},"persistRootConfig"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"Pick"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"IStorageOptions"),", ",(0,n.kt)("inlineCode",{parentName:"p"},'"version"')," ","|"," ",(0,n.kt)("inlineCode",{parentName:"p"},'"serialize"')," ","|"," ",(0,n.kt)("inlineCode",{parentName:"p"},'"timeout"')," ","|"," ",(0,n.kt)("inlineCode",{parentName:"p"},'"storage"')," ","|"," ",(0,n.kt)("inlineCode",{parentName:"p"},'"keyPrefix"')," ","|"," ",(0,n.kt)("inlineCode",{parentName:"p"},'"blacklist"')," ","|"," ",(0,n.kt)("inlineCode",{parentName:"p"},'"whitelist"')," ","|"," ",(0,n.kt)("inlineCode",{parentName:"p"},'"transforms"')," ","|"," ",(0,n.kt)("inlineCode",{parentName:"p"},'"throttle"')," ","|"," ",(0,n.kt)("inlineCode",{parentName:"p"},'"migrate"')," ","|"," ",(0,n.kt)("inlineCode",{parentName:"p"},'"stateReconciler"')," ","|"," ",(0,n.kt)("inlineCode",{parentName:"p"},'"getStoredState"')," ","|"," ",(0,n.kt)("inlineCode",{parentName:"p"},'"debug"')," ","|"," ",(0,n.kt)("inlineCode",{parentName:"p"},'"writeFailHandler"')," ","|"," ",(0,n.kt)("inlineCode",{parentName:"p"},'"loading"'),">"," & { ",(0,n.kt)("inlineCode",{parentName:"p"},"key"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"string"),"  }"),(0,n.kt)("h4",{id:"inherited-from-8"},"Inherited from"),(0,n.kt)("p",null,"BaseReactantStorage.persistRootConfig"),(0,n.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/unadlib/reactant/blob/94ce5c78/packages/reactant-storage/src/storage.tsx#L72"},"packages/reactant-storage/src/storage.tsx:72")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"persistor"},"persistor"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"persistor"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"Persistor")),(0,n.kt)("h4",{id:"inherited-from-9"},"Inherited from"),(0,n.kt)("p",null,"BaseReactantStorage.persistor"),(0,n.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/unadlib/reactant/blob/94ce5c78/packages/reactant-storage/src/storage.tsx#L54"},"packages/reactant-storage/src/storage.tsx:54")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"portdetector"},"portDetector"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,n.kt)("strong",{parentName:"p"},"portDetector"),": ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/reactant-share/classes/portDetector.PortDetector"},(0,n.kt)("inlineCode",{parentName:"a"},"PortDetector"))),(0,n.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/unadlib/reactant/blob/94ce5c78/packages/reactant-share/src/storage.ts#L21"},"packages/reactant-share/src/storage.ts:21")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"rehydratecallbackset"},"rehydrateCallbackSet"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,n.kt)("strong",{parentName:"p"},"rehydrateCallbackSet"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"Set"),"<() => ",(0,n.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,n.kt)("h4",{id:"inherited-from-10"},"Inherited from"),(0,n.kt)("p",null,"BaseReactantStorage.rehydrateCallbackSet"),(0,n.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/unadlib/reactant/blob/94ce5c78/packages/reactant-storage/src/storage.tsx#L243"},"packages/reactant-storage/src/storage.tsx:243")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"rehydrated"},"rehydrated"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"rehydrated"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"boolean")," = ",(0,n.kt)("inlineCode",{parentName:"p"},"false")),(0,n.kt)("h4",{id:"inherited-from-11"},"Inherited from"),(0,n.kt)("p",null,"BaseReactantStorage.rehydrated"),(0,n.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/unadlib/reactant/blob/94ce5c78/packages/reactant-storage/src/storage.tsx#L56"},"packages/reactant-storage/src/storage.tsx:56")),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("h3",{id:"_onrehydrated"},"_","onRehydrated"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,n.kt)("strong",{parentName:"p"},"_onRehydrated"),"(): ",(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("h4",{id:"returns"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("h4",{id:"inherited-from-12"},"Inherited from"),(0,n.kt)("p",null,"BaseReactantStorage.","_","onRehydrated"),(0,n.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/unadlib/reactant/blob/94ce5c78/packages/reactant-storage/src/storage.tsx#L245"},"packages/reactant-storage/src/storage.tsx:245")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"aftercombinerootreducers"},"afterCombineRootReducers"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"afterCombineRootReducers"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"rootReducer"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"Reducer"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"AnyAction"),">"),(0,n.kt)("h4",{id:"parameters-1"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"rootReducer")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Reducer"),"<",(0,n.kt)("inlineCode",{parentName:"td"},"any"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"AnyAction"),">")))),(0,n.kt)("h4",{id:"returns-1"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Reducer"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"AnyAction"),">"),(0,n.kt)("h4",{id:"inherited-from-13"},"Inherited from"),(0,n.kt)("p",null,"BaseReactantStorage.afterCombineRootReducers"),(0,n.kt)("h4",{id:"defined-in-15"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/unadlib/reactant/blob/94ce5c78/packages/reactant-storage/src/storage.tsx#L167"},"packages/reactant-storage/src/storage.tsx:167")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"aftercreatestore"},"afterCreateStore"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"afterCreateStore"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"store"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"Store"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"AnyAction"),">"),(0,n.kt)("h4",{id:"parameters-2"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"store")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Store"),"<",(0,n.kt)("inlineCode",{parentName:"td"},"any"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"AnyAction"),">")))),(0,n.kt)("h4",{id:"returns-2"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Store"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"AnyAction"),">"),(0,n.kt)("h4",{id:"inherited-from-14"},"Inherited from"),(0,n.kt)("p",null,"BaseReactantStorage.afterCreateStore"),(0,n.kt)("h4",{id:"defined-in-16"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/unadlib/reactant/blob/94ce5c78/packages/reactant-storage/src/storage.tsx#L187"},"packages/reactant-storage/src/storage.tsx:187")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"beforecombinerootreducers"},"beforeCombineRootReducers"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"beforeCombineRootReducers"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"reducers"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"ReducersMapObject"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Action"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"any"),">",">"),(0,n.kt)("h4",{id:"parameters-3"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"reducers")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"ReducersMapObject"),"<",(0,n.kt)("inlineCode",{parentName:"td"},"any"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"Action"),"<",(0,n.kt)("inlineCode",{parentName:"td"},"any"),">",">")))),(0,n.kt)("h4",{id:"returns-3"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"ReducersMapObject"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Action"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"any"),">",">"),(0,n.kt)("h4",{id:"inherited-from-15"},"Inherited from"),(0,n.kt)("p",null,"BaseReactantStorage.beforeCombineRootReducers"),(0,n.kt)("h4",{id:"defined-in-17"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/unadlib/reactant/blob/94ce5c78/packages/reactant-storage/src/storage.tsx#L131"},"packages/reactant-storage/src/storage.tsx:131")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"getrehydrated"},"getRehydrated"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"getRehydrated"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"target"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"any")),(0,n.kt)("p",null,"get every module rehydrated"),(0,n.kt)("h4",{id:"parameters-4"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"target")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"object"))))),(0,n.kt)("h4",{id:"returns-4"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"any")),(0,n.kt)("h4",{id:"inherited-from-16"},"Inherited from"),(0,n.kt)("p",null,"BaseReactantStorage.getRehydrated"),(0,n.kt)("h4",{id:"defined-in-18"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/unadlib/reactant/blob/94ce5c78/packages/reactant-storage/src/storage.tsx#L120"},"packages/reactant-storage/src/storage.tsx:120")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"onrehydrated"},"onRehydrated"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"onRehydrated"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"callback"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("p",null,"onRehydrated"),(0,n.kt)("p",null,"callback function will be called after rehydration is finished."),(0,n.kt)("h4",{id:"parameters-5"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"callback")),(0,n.kt)("td",{parentName:"tr",align:"left"},"() => ",(0,n.kt)("inlineCode",{parentName:"td"},"void"))))),(0,n.kt)("h4",{id:"returns-5"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("h4",{id:"inherited-from-17"},"Inherited from"),(0,n.kt)("p",null,"BaseReactantStorage.onRehydrated"),(0,n.kt)("h4",{id:"defined-in-19"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/unadlib/reactant/blob/94ce5c78/packages/reactant-storage/src/storage.tsx#L259"},"packages/reactant-storage/src/storage.tsx:259")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"preloadedstatehandler"},"preloadedStateHandler"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"preloadedStateHandler"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"preloadedState"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"Object")),(0,n.kt)("p",null,"preloaded state handler for Redux"),(0,n.kt)("h4",{id:"parameters-6"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"preloadedState")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Object"))))),(0,n.kt)("h4",{id:"returns-6"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Object")),(0,n.kt)("h4",{id:"inherited-from-18"},"Inherited from"),(0,n.kt)("p",null,"BaseReactantStorage.preloadedStateHandler"),(0,n.kt)("h4",{id:"defined-in-20"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/unadlib/reactant/blob/94ce5c78/packages/reactant-module/src/core/plugin.ts#L20"},"packages/reactant-module/src/core/plugin.ts:20")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"provider"},"provider"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"provider"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"props"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"Element")),(0,n.kt)("h4",{id:"parameters-7"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"props")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Object"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"props.children?")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"ReactNode"))))),(0,n.kt)("h4",{id:"returns-7"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Element")),(0,n.kt)("h4",{id:"inherited-from-19"},"Inherited from"),(0,n.kt)("p",null,"BaseReactantStorage.provider"),(0,n.kt)("h4",{id:"defined-in-21"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/unadlib/reactant/blob/94ce5c78/packages/reactant-storage/src/storage.tsx#L267"},"packages/reactant-storage/src/storage.tsx:267")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"setstorage"},"setStorage"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"setStorage"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"T"),">","(",(0,n.kt)("inlineCode",{parentName:"p"},"target"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"options"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("p",null,"set module to storage persistent"),(0,n.kt)("h4",{id:"type-parameters"},"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"T")),(0,n.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,n.kt)("inlineCode",{parentName:"td"},"object"))))),(0,n.kt)("h4",{id:"parameters-8"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"target")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"T"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"options")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs/api/reactant-share/modules/storage#setstorageoptions"},(0,n.kt)("inlineCode",{parentName:"a"},"SetStorageOptions")),"<",(0,n.kt)("inlineCode",{parentName:"td"},"T"),">")))),(0,n.kt)("h4",{id:"returns-8"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("h4",{id:"inherited-from-20"},"Inherited from"),(0,n.kt)("p",null,"BaseReactantStorage.setStorage"),(0,n.kt)("h4",{id:"defined-in-22"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/unadlib/reactant/blob/94ce5c78/packages/reactant-storage/src/storage.tsx#L86"},"packages/reactant-storage/src/storage.tsx:86")))}k.isMDXComponent=!0}}]);