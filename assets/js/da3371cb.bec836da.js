"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9742],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,g=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(g,l(l({ref:t},s),{},{components:n})):a.createElement(g,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6128:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:1},l="Reactant CLI",o={unversionedId:"tooling/cli",id:"tooling/cli",title:"Reactant CLI",description:"We recommend you install reactant-cli globally to use it.",source:"@site/docs/tooling/cli.md",sourceDirName:"tooling",slug:"/tooling/cli",permalink:"/docs/tooling/cli",draft:!1,editUrl:"https://github.com/unadlib/reactant/tree/master/website/docs/docs/tooling/cli.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Tooling",permalink:"/docs/category/tooling"},next:{title:"Dev Tools",permalink:"/docs/tooling/dev-tools"}},p={},c=[{value:"Create a Reactant project",id:"create-a-reactant-project",level:2},{value:"Generate files",id:"generate-files",level:2},{value:"Generate a service file",id:"generate-a-service-file",level:3},{value:"Generate a view file",id:"generate-a-view-file",level:3}],s={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"reactant-cli"},"Reactant CLI"),(0,r.kt)("p",null,"We recommend you install ",(0,r.kt)("inlineCode",{parentName:"p"},"reactant-cli")," globally to use it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g reactant-cli\n")),(0,r.kt)("p",null,"or you can install ",(0,r.kt)("inlineCode",{parentName:"p"},"reactant-cli")," to your project."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add -D reactant-cli\n")),(0,r.kt)("h2",{id:"create-a-reactant-project"},"Create a Reactant project"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx reactant-cli init my-app\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"-l <language>"),"or ",(0,r.kt)("inlineCode",{parentName:"p"},"--language <language>")," for specifying a language, support ",(0,r.kt)("inlineCode",{parentName:"p"},"js"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ts"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"javascript"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"typescript"),", the default is ",(0,r.kt)("inlineCode",{parentName:"p"},"typescript"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"-t <type>"),"or ",(0,r.kt)("inlineCode",{parentName:"p"},"--type <type>")," for specifying a type app, support ",(0,r.kt)("inlineCode",{parentName:"p"},"web"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"shared-tab"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"shared-worker"),", the default is ",(0,r.kt)("inlineCode",{parentName:"p"},"web"),"."))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"shared-tab")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"shared-worker")," are shared App project templates based on ",(0,r.kt)("inlineCode",{parentName:"p"},"reactant-share"),".")),(0,r.kt)("h2",{id:"generate-files"},"Generate files"),(0,r.kt)("h3",{id:"generate-a-service-file"},"Generate a service file"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx reactant-cli generate service FooBar\n# or alias\nnpx reactant-cli g s FooBar\n")),(0,r.kt)("h3",{id:"generate-a-view-file"},"Generate a view file"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx reactant-cli generate view FooBarView\n# or alias\nnpx reactant-cli g v FooBarView\n")),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use ",(0,r.kt)("inlineCode",{parentName:"li"},"-l <language>"),"or ",(0,r.kt)("inlineCode",{parentName:"li"},"--language <language>")," for specifying a language, support ",(0,r.kt)("inlineCode",{parentName:"li"},"js"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"ts"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"javascript"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"typescript"),", the default is ",(0,r.kt)("inlineCode",{parentName:"li"},"typescript"),"."),(0,r.kt)("li",{parentName:"ul"},"Use ",(0,r.kt)("inlineCode",{parentName:"li"},"-w")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"--withTests")," for creating tests files, the default is not creating tests files."),(0,r.kt)("li",{parentName:"ul"},"Use ",(0,r.kt)("inlineCode",{parentName:"li"},"-s <src>")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"--src <src>")," for specifying source files path in your project root path, the default is ",(0,r.kt)("inlineCode",{parentName:"li"},"src"),".")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"It supports creating multiple files in any directory in the project using this command")))}u.isMDXComponent=!0}}]);