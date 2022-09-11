"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6383],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=p(n),u=r,k=s["".concat(d,".").concat(u)]||s[u]||m[u]||i;return n?a.createElement(k,l(l({ref:t},c),{},{components:n})):a.createElement(k,l({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=s;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},4262:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={id:"decorators_lazy",title:"Module: decorators/lazy",sidebar_label:"decorators/lazy",sidebar_position:0,custom_edit_url:null},l=void 0,o={unversionedId:"api/reactant-di/modules/decorators_lazy",id:"api/reactant-di/modules/decorators_lazy",title:"Module: decorators/lazy",description:"Functions",source:"@site/docs/api/reactant-di/modules/decorators_lazy.md",sourceDirName:"api/reactant-di/modules",slug:"/api/reactant-di/modules/decorators_lazy",permalink:"/docs/api/reactant-di/modules/decorators_lazy",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"decorators_lazy",title:"Module: decorators/lazy",sidebar_label:"decorators/lazy",sidebar_position:0,custom_edit_url:null}},d={},p=[{value:"Functions",id:"functions",level:2},{value:"getLazyDecorator",id:"getlazydecorator",level:3},{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Parameters",id:"parameters-1",level:5},{value:"Returns",id:"returns-1",level:5},{value:"Parameters",id:"parameters-2",level:5},{value:"Returns",id:"returns-2",level:5},{value:"Defined in",id:"defined-in",level:4}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("h3",{id:"getlazydecorator"},"getLazyDecorator"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getLazyDecorator"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"getService"),"): (",(0,r.kt)("inlineCode",{parentName:"p"},"serviceIdentifier"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"ServiceIdentifier"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"unknown"),">",", ",(0,r.kt)("inlineCode",{parentName:"p"},"enableCache"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),") => (",(0,r.kt)("inlineCode",{parentName:"p"},"target"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"object"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"key"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"symbol"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"any")),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"You can get a decorator ",(0,r.kt)("inlineCode",{parentName:"p"},"@lazy(serviceIdentifier)")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"getLazyDecorator((serviceIdentifier) => container.get(serviceIdentifier))"),",\nand use it on any one dependency property that you need to lazily get."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"let container: Container;\nconst lazy = getLazyDecorator((serviceIdentifier) =>\n  container.get(serviceIdentifier)\n);\n\n@injectable()\nclass Foo {\n  public get test() {\n    return 'test';\n  }\n}\n\n@injectable()\nclass Bar {\n  @lazy('foo')\n  foo?: Foo;\n}\n\ncontainer = createContainer({\n  ServiceIdentifiers: new Map(),\n});\n\nconst bar = container.get(Bar);\n\ncontainer.bind('foo').to(Foo);\nexpect(bar.foo?.test).toBe('test');\n")),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"getService")),(0,r.kt)("td",{parentName:"tr",align:"left"},"(",(0,r.kt)("inlineCode",{parentName:"td"},"serviceIdentifier"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"ServiceIdentifier"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),">",", ",(0,r.kt)("inlineCode",{parentName:"td"},"target?"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"object"),") => ",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"))))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"fn")),(0,r.kt)("p",null,"\u25b8 (",(0,r.kt)("inlineCode",{parentName:"p"},"serviceIdentifier"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"enableCache?"),"): (",(0,r.kt)("inlineCode",{parentName:"p"},"target"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"object"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"key"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"symbol"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"any")),(0,r.kt)("h5",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"serviceIdentifier")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ServiceIdentifier"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),">"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"enableCache")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"true"))))),(0,r.kt)("h5",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"fn")),(0,r.kt)("p",null,"\u25b8 (",(0,r.kt)("inlineCode",{parentName:"p"},"target"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"key"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"any")),(0,r.kt)("h5",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"target")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"object"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"key")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"symbol"))))),(0,r.kt)("h5",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"any")),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/unadlib/reactant/blob/94ce5c78/packages/reactant-di/src/decorators/lazy.ts#L41"},"packages/reactant-di/src/decorators/lazy.ts:41")))}m.isMDXComponent=!0}}]);