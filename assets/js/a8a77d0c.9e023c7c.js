"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9589],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),h=r,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||i;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3216:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={title:"How to make Web application support multiple browser windows",author:"unadlib",tags:["reactant"]},o=void 0,l={permalink:"/blog/2021/10/03/how-to-make-web-application-support-multiple-browser-windows",editUrl:"https://github.com/unadlib/reactant/tree/master/website/blog/blog/2021-10-03-how-to-make-web-application-support-multiple-browser-windows/index.md",source:"@site/blog/2021-10-03-how-to-make-web-application-support-multiple-browser-windows/index.md",title:"How to make Web application support multiple browser windows",description:"Motivation",date:"2021-10-03T00:00:00.000Z",formattedDate:"October 3, 2021",tags:[{label:"reactant",permalink:"/blog/tags/reactant"}],readingTime:14.01,hasTruncateMarker:!1,authors:[{name:"unadlib"}],frontMatter:{title:"How to make Web application support multiple browser windows",author:"unadlib",tags:["reactant"]},nextItem:{title:"Reactant - A framework for building React web applications",permalink:"/blog/2020/08/09/reactant-a-framework-for-building-react-web-applications"}},s={authorsImageUrls:[void 0]},p=[{value:"Motivation",id:"motivation",level:2},{value:"Shared Web Apps",id:"shared-web-apps",level:2},{value:"reactant-share - A framework for building Shared Web Apps",id:"reactant-share---a-framework-for-building-shared-web-apps",level:2},{value:"How it works",id:"how-it-works",level:2},{value:"Example",id:"example",level:3},{value:"reactant-share Framework",id:"reactant-share-framework",level:2},{value:"Multiple modes",id:"multiple-modes",level:3},{value:"User Experience",id:"user-experience",level:3},{value:"Development Experience",id:"development-experience",level:3},{value:"Service Discovery / Communications",id:"service-discovery--communications",level:3},{value:"Tracking/Debugging",id:"trackingdebugging",level:3},{value:"Fault Tolerance / Data Consistency",id:"fault-tolerance--data-consistency",level:3},{value:"Isolation",id:"isolation",level:3},{value:"Configuration",id:"configuration",level:3},{value:"Transport/Performance",id:"transportperformance",level:3},{value:"Complexity",id:"complexity",level:3},{value:"Security",id:"security",level:3},{value:"Testing",id:"testing",level:3},{value:"APIs",id:"apis",level:2},{value:"Q&amp;A",id:"qa",level:2},{value:"Conclusion",id:"conclusion",level:2}],c={toc:p};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"motivation"},"Motivation"),(0,r.kt)("p",null,"When we develop a Single-Page Application, we usually only define its behavior in a single browser window, and even if the same application is opened on multiple browser windows, in most cases it is only synchronized with the local storage, and the state of each application in each window is not synchronized in real time (unless the server synchronizes), they run in isolation and are relatively independent."),(0,r.kt)("p",null,"However, this means that more browser windows will generate more and more independent application instances, which may have different UI states and often inevitably have the same network requests or WebSocket connections, which may also mean a bad user experience (as users may have become accustomed to) and excessive usage of server resources."),(0,r.kt)("p",null,"So what does it mean to have applications that supports multiple browser windows?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Application instance sharing: code sharing, local storage sharing, state sharing, and more"),(0,r.kt)("li",{parentName:"ul"},"Lower server resource usage"),(0,r.kt)("li",{parentName:"ul"},"Better user consistency experience"),(0,r.kt)("li",{parentName:"ul"},"Smoother web applications")),(0,r.kt)("p",null,"But it's not easy to keep large Web applications running smoothly."),(0,r.kt)("p",null,"Web applications are still primarily built in JavaScript, which is a single-threaded programming language, and slow JavaScript code can prevent the browser\u2019s rendering. The good news is that mainstream browsers are gradually supporting more different types of workers, especially Service Workers, which are used to implement PWAs (Progressive Web Apps) that greatly enhance the user experience. And the latest modern browsers also provide Web Worker, Shared Worker. With IE becoming deprecated this year, there is ",(0,r.kt)("a",{parentName:"p",href:"https://caniuse.com/?search=worker"},"good support for these workers"),". Currently, only ",(0,r.kt)("a",{parentName:"p",href:"https://bugs.webkit.org/show_bug.cgi?id=149850"},"Safari lacks support for Shared Worker")," among modern browsers."),(0,r.kt)("p",null,'So what does it mean for Web applications to be "multi-threaded" with Worker?'),(0,r.kt)("p",null,'"',(0,r.kt)("a",{parentName:"p",href:"https://www.smashingmagazine.com/2021/06/web-workers-2021/"},"The State Of Web Workers In 2021"),'" post covers a number of unpredictable performance issues. With these browser workers we will likely be better able to deal with computationally complex and slow-running JS code to keep web applications smooth.'),(0,r.kt)("p",null,"It's time to rethink why we can't make web applications support multiple browser windows and improve the performance of web applications. New architectural requirements bring new framework requirements, and such applications we call it ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Shared Web Apps")),"."),(0,r.kt)("h2",{id:"shared-web-apps"},"Shared Web Apps"),(0,r.kt)("p",null,"Even though we want users to open as few application windows as possible, the fact remains that many users will open the same application in multiple browser windows."),(0,r.kt)("p",null,"Shared Web Apps supports running web applications in multiple browser windows."),(0,r.kt)("p",null,"It has a unique Server thread to share the Shared Web Apps, whether it's code sharing, local storage sharing, state sharing, and so on. No matter how many browser windows are opened, Shared Web Apps always has only one server app instance for multiple client apps sharing. We all know that DOM operations are expensive. In Shared Web Apps, the client app instance is only responsible for rendering, and except for state sync the client app will become very lightweight and almost all business logic will run in the server app."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The client app only renders UI, making better use of the device's multiple cores to ensure that the client app is smooth"),(0,r.kt)("li",{parentName:"ul"},"Solve the problems caused by multiple browser windows"),(0,r.kt)("li",{parentName:"ul"},"Better separation of concerns")),(0,r.kt)("h2",{id:"reactant-share---a-framework-for-building-shared-web-apps"},"reactant-share - A framework for building Shared Web Apps"),(0,r.kt)("p",null,"To build such Shared Web Apps, ",(0,r.kt)("inlineCode",{parentName:"p"},"reactant-share")," was created. reactant-share is based on the ",(0,r.kt)("inlineCode",{parentName:"p"},"reactant")," framework and ",(0,r.kt)("inlineCode",{parentName:"p"},"react")," library, which supports the following features."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Dependency injection"),(0,r.kt)("li",{parentName:"ul"},"Immutable state management"),(0,r.kt)("li",{parentName:"ul"},"View module"),(0,r.kt)("li",{parentName:"ul"},"Redux plug-in module"),(0,r.kt)("li",{parentName:"ul"},"Test bed for unit testing and integration testing"),(0,r.kt)("li",{parentName:"ul"},"Routing module"),(0,r.kt)("li",{parentName:"ul"},"Persistence module"),(0,r.kt)("li",{parentName:"ul"},"Module dynamics"),(0,r.kt)("li",{parentName:"ul"},"Shared web app support multiple browser windows",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Shared tab"),(0,r.kt)("li",{parentName:"ul"},"SharedWorker"),(0,r.kt)("li",{parentName:"ul"},"Detached window"),(0,r.kt)("li",{parentName:"ul"},"iframe")))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"reactant-share")," is very easy to use, you can use it to quickly build a Shared Web Apps. it greatly reduces the complexity of supporting multi-browser window application architecture."),(0,r.kt)("h2",{id:"how-it-works"},"How it works"),(0,r.kt)("p",null,"When reactant-share starts, it creates a server app instance and multiple client app instances (one per browser window) in the browser, but the only instance that is really running in full is the server app instance, which is responsible for almost all of the application's logic, and multiple client app instances simply synchronize state and render. The state model of reactant-share uses immutable state, and reactant is based on Redux, so we trigger state sync from server app to client app via Redux's ",(0,r.kt)("inlineCode",{parentName:"p"},"dispatch"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"workflow",src:a(7007).Z,width:"1646",height:"852"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The user triggers the client app proxy method through DOM events"),(0,r.kt)("li",{parentName:"ol"},"This proxy method is executed on the server app."),(0,r.kt)("li",{parentName:"ol"},"The server app state is synchronized back to the client app.")),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,"The overall workflow of the reactant-share is shown in the figure below. Here is an example of a shared-worker type counter app."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"First, we define a counter app module and view module in ",(0,r.kt)("inlineCode",{parentName:"li"},"app.view.tsx"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport {\n  ViewModule,\n  createApp,\n  injectable,\n  useConnector,\n  action,\n  state,\n  spawn,\n} from "reactant-share";\n\n@injectable({ name: "counter" })\nclass Counter {\n  @state\n  count = 0;\n\n  @action\n  increase() {\n    this.count += 1;\n  }\n}\n\n@injectable()\nexport class AppView extends ViewModule {\n  constructor(public counter: Counter) {\n    super();\n  }\n\n  component() {\n    const count = useConnector(() => this.counter.count);\n    return (\n      <button type="button" onClick={() => spawn(this.counter, "increase", [])}>\n        {count}\n      </button>\n    );\n  }\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Next, we use ",(0,r.kt)("inlineCode",{parentName:"li"},"createSharedApp()")," to create the client app, whose options must contain ",(0,r.kt)("inlineCode",{parentName:"li"},"workerURL"),", the worker url that will create a shared worker (if it hasn't been created yet).")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { render } from "reactant-web";\nimport { createSharedApp } from "reactant-share";\nimport { AppView } from "./app.view";\n\ncreateSharedApp({\n  modules: [],\n  main: AppView,\n  render,\n  share: {\n    name: "SharedWorkerApp",\n    port: "client",\n    type: "SharedWorker",\n    workerURL: "worker.bundle.js",\n  },\n}).then((app) => {\n  // render only\n  app.bootstrap(document.getElementById("app"));\n});\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Finally, we just create the worker file ",(0,r.kt)("inlineCode",{parentName:"li"},"worker.tsx")," and build it as ",(0,r.kt)("inlineCode",{parentName:"li"},"worker.bundle.js")," for the ",(0,r.kt)("inlineCode",{parentName:"li"},"workerURL")," option.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { createSharedApp } from "reactant-share";\nimport { AppView } from "./app.view";\n\ncreateSharedApp({\n  modules: [],\n  main: AppView,\n  render: () => {\n    //\n  },\n  share: {\n    name: "SharedWorkerApp",\n    port: "server",\n    type: "SharedWorker",\n  },\n}).then((app) => {\n  // render less\n});\n')),(0,r.kt)("p",null,"The specific workflow of ",(0,r.kt)("inlineCode",{parentName:"p"},"increase")," looks like this."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The user clicks the button in client app."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},'spawn(this.counter, "increase", [])')," will be executed, which passes the parameters about the proxy execution to the server app."),(0,r.kt)("li",{parentName:"ol"},"The server app will execute ",(0,r.kt)("inlineCode",{parentName:"li"},"this.counter.increase()"),", and sync the updated state back to each client apps.")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"spawn()")," in reactant-share is inspired by the ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Actor_model"},"actor model"),"."),(0,r.kt)("h2",{id:"reactant-share-framework"},"reactant-share Framework"),(0,r.kt)("h3",{id:"multiple-modes"},"Multiple modes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Shared tab - It is suitable for running in browsers that do not support SharedWorker. The server app is an instance with rendering that also runs in a browser window. In multiple browser windows, there is also only one server app, and after it is closed or refreshed, one instance of the other client apps will be converted to a server app."),(0,r.kt)("li",{parentName:"ul"},"SharedWorker - If there is no ",(0,r.kt)("a",{parentName:"li",href:"https://caniuse.com/?search=sharedworker"},"browser compatibility")," requirement, reactant-share is highly recommended to use this mode, and reactant-share also does a graceful degradation, so if the browser does not support SharedWorker then the app will run in Shared-Tab mode."),(0,r.kt)("li",{parentName:"ul"},"Detached window - reactant-share allows sub-applications to run as Detached windows or to be quickly merged into a more complete application."),(0,r.kt)("li",{parentName:"ul"},"iframe - reactant-share allows each child application to run on an iframe.")),(0,r.kt)("p",null,"Example repo: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/unadlib/reactant/tree/master/examples/reactant-share-sharedworker"},"SharedWorker/Detached window/iframe")),(0,r.kt)("h3",{id:"user-experience"},"User Experience"),(0,r.kt)("p",null,"Since reactant-share's multiple instances are logic-sharing and state-sharing, when a user opens the same reactant-share application in multiple browser windows, the only instance that is actually running in full is the server app."),(0,r.kt)("p",null,"The rendering-only client app will be so smooth that it will almost never freeze due to JS code, and the consistent application state will allow users to switch between multiple browser windows without any worries."),(0,r.kt)("h3",{id:"development-experience"},"Development Experience"),(0,r.kt)("p",null,"reactant-share provides CLI and full support for Typescript, as well as support for Shared-Tab, SharedWorker, and other different types of runtime modes out of the box. Built-in testbed for module testing, Routing and Persistence modules, and module dynamics support for lazy loading of reactant-share applications."),(0,r.kt)("h3",{id:"service-discovery--communications"},"Service Discovery / Communications"),(0,r.kt)("p",null,"Since reactant-share uses ",(0,r.kt)("a",{parentName:"p",href:"http://github.com/unadlib/data-transport"},"data-transport"),", reactant-share supports almost all the transports supported by data-transport.The client app and the server app, whichever is loaded first, the client app will wait for the server app to finish starting and get all the initial application state from it."),(0,r.kt)("p",null,"Using the actor model in the client app to design spawn(), we can do ",(0,r.kt)("inlineCode",{parentName:"p"},"spawn(counterModule, 'increase', [])")," to let the server app proxy the execution of the module method and respond and sync both the state and the result back to the client app."),(0,r.kt)("p",null,"But if we need direct communication between the client app and the server app, then we need to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"PortDetector")," module."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'class Counter {\n  constructor(public portDetector: PortDetector) {\n    this.portDetector.onServer(async (transport) => {\n      const result = await transport.emit("test", 42);\n      // result should be `hello, 42`\n    });\n    this.portDetector.onClient((transport) => {\n      transport.listen("test", (num) => `hello, ${num}`);\n    });\n  }\n}\n')),(0,r.kt)("h3",{id:"trackingdebugging"},"Tracking/Debugging"),(0,r.kt)("p",null,"Since reactant-share is based on Redux, it fully supports Redux DevTools, and the immutable time travel that Redux brings will make debugging easy."),(0,r.kt)("h3",{id:"fault-tolerance--data-consistency"},"Fault Tolerance / Data Consistency"),(0,r.kt)("p",null,"Since state synchronization after the client app uses ",(0,r.kt)("inlineCode",{parentName:"p"},"spawn()")," to get the server app proxy to execute each time may cause it to be out of order in edge cases for various reasons, reactant-share integrates ",(0,r.kt)("inlineCode",{parentName:"p"},"reactant-last-action"),", which provides sequence markers to keep If the client app receives a synchronized action that checks for an exception in the sequence, the client app will launch a full state synchronization to correct the action sequence."),(0,r.kt)("p",null,"In addition, when the browser does not support the Worker API, reactant-share will perform a graceful degradation (e.g. SharedWorker mode -> Shared-Tab mode -> SPA mode)."),(0,r.kt)("h3",{id:"isolation"},"Isolation"),(0,r.kt)("p",null,"Regardless of modes such as Shared-Tab, SharedWorker, each application instance runs in isolation and their basic interactions can only be triggered by ",(0,r.kt)("inlineCode",{parentName:"p"},"spawn()")," to synchronize state."),(0,r.kt)("h3",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"reactant-share provides CLI, you just need to run ",(0,r.kt)("inlineCode",{parentName:"p"},"npx reactant-cli init shared-worker-example -t shared-worker")," to get a project of reactant-share with SharedWorker mode. If you want to change its mode, you just need to change the configuration of ",(0,r.kt)("inlineCode",{parentName:"p"},"createSharedApp()"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"createSharedApp({\n  modules: [],\n  main: AppView,\n  render,\n  share: {\n    name: 'ReactantExampleApp',\n    port: 'client',\n-   port: 'client',\n-   type: 'SharedWorker',\n-   workerURL: 'worker.bundle.js',\n+   type: 'SharedTab',\n    workerURL: 'worker.bundle.js',\n  },\n}).then((app) => {\n  app.bootstrap(document.getElementById('app'));\n});\n")),(0,r.kt)("p",null,"With that, we can quickly turn SharedWorker mode into SharedTab mode."),(0,r.kt)("h3",{id:"transportperformance"},"Transport/Performance"),(0,r.kt)("p",null,"Since the client app only renders and receives synchronized state. So the client app keeps running smoothly when the size of each dispatch update state does not exceed 50M. reactant uses ",(0,r.kt)("a",{parentName:"p",href:"https://immerjs.github.io/immer/patches/"},"Immer patch")," to update, usually this patch will be very small and reactant also does DEV checking for patch minimization updates. In fact, in most scenarios, the patch will not be that large."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Update state size"),(0,r.kt)("th",{parentName:"tr",align:null},"Volume of data"),(0,r.kt)("th",{parentName:"tr",align:null},"Deserialization"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"30 Array ","*"," 1,000 items"),(0,r.kt)("td",{parentName:"tr",align:null},"1.4 M"),(0,r.kt)("td",{parentName:"tr",align:null},"14 ms")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"30 Array ","*"," 1,0000 items"),(0,r.kt)("td",{parentName:"tr",align:null},"14 M"),(0,r.kt)("td",{parentName:"tr",align:null},"130 ms")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1000 Array ","*"," 1,000 items"),(0,r.kt)("td",{parentName:"tr",align:null},"46 M"),(0,r.kt)("td",{parentName:"tr",align:null},"380 ms")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Notebook: 1 GHz Intel Core M / 8 GB 1600 MHz DDR3")),(0,r.kt)("p",null,"benchmarking of the reactant-share module with ",(0,r.kt)("a",{parentName:"p",href:"#"},"derived data cache")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Number of modules and states"),(0,r.kt)("th",{parentName:"tr",align:null},"Total number of states"),(0,r.kt)("th",{parentName:"tr",align:null},"Each state update"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"100 modules ","*"," 20 states"),(0,r.kt)("td",{parentName:"tr",align:null},"2,000"),(0,r.kt)("td",{parentName:"tr",align:null},"3 ms")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"200 modules ","*"," 30 states"),(0,r.kt)("td",{parentName:"tr",align:null},"6,000"),(0,r.kt)("td",{parentName:"tr",align:null},"9 ms")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"300 modules ","*"," 100 states"),(0,r.kt)("td",{parentName:"tr",align:null},"30,000"),(0,r.kt)("td",{parentName:"tr",align:null},"44 ms")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Notebook: 1 GHz Intel Core M / 8 GB 1600 MHz DDR3")),(0,r.kt)("p",null,"Therefore, reactant-share still performs well in large projects."),(0,r.kt)("h3",{id:"complexity"},"Complexity"),(0,r.kt)("p",null,"Whether it's practicing ",(0,r.kt)("a",{parentName:"p",href:"https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html"},"clean architecture"),", ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Domain-driven_design"},"DDD"),", OOP or even FP, reactant-share has more openness to architect highly complex projects at will. reactant-share provides a few optional features, but the only one that shouldn't be missed is DI. reactant-share's DI is inspired by Angular, and it is very similar to Angular's DI. The complexity of coding that comes with architectural design is often determined by the final specification of the practice, but reactant-share hopes to help with such complex architectural design at the framework level."),(0,r.kt)("h3",{id:"security"},"Security"),(0,r.kt)("p",null,"For reactant-share applications, the communication between server/client only serializes and deserializes state and parameters, so it is almost impossible to cause framework-level security issues. Of course, enabling https and using",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/Security/Subresource_Integrity"},"Subresource Integrity")," are both necessary for any project that values front-end security, and we should also be concerned about ",(0,r.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/dom-elements.html#style"},"XSS security")," in React documentation."),(0,r.kt)("h3",{id:"testing"},"Testing"),(0,r.kt)("p",null,"reactant-share provides ",(0,r.kt)("inlineCode",{parentName:"p"},"testBed()")," to facilitate module testing. For example,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const { instance } = testBed({\n  main: Counter,\n  modules: [],\n});\n")),(0,r.kt)("p",null,"For integration testing of server app/client app interactions, reactant-share also provides ",(0,r.kt)("inlineCode",{parentName:"p"},"mockPairTransports()")," for mock transport."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const transports = mockPairTransports();\n\ncreateSharedApp({\n  modules: [],\n  main: AppView,\n  render,\n  share: {\n    name: "SharedWorkerApp",\n    port: "client",\n    type: "SharedWorker",\n    transports: {\n      client: transports[0],\n    },\n  },\n}).then((app) => {\n  const clientApp = app;\n  // render only\n  app.bootstrap(document.getElementById("app"));\n});\n\ncreateSharedApp({\n  modules: [],\n  main: AppView,\n  render: () => {\n    //\n  },\n  share: {\n    name: "SharedWorkerApp",\n    port: "server",\n    type: "SharedWorker",\n    transports: {\n      client: transports[1],\n    },\n  },\n}).then((app) => {\n  const serverApp = app;\n  // render less\n});\n')),(0,r.kt)("p",null,"After mocking transport like this, ",(0,r.kt)("inlineCode",{parentName:"p"},"clientApp")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"serverApp")," can be easily tested for integration."),(0,r.kt)("h2",{id:"apis"},"APIs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@injectable()"))),(0,r.kt)("p",null,"You can use ",(0,r.kt)("inlineCode",{parentName:"p"},"@injectable()")," to decorate a module that can be injected and then use the ",(0,r.kt)("inlineCode",{parentName:"p"},"emitDecoratorMetadata")," using TypeScript, or ",(0,r.kt)("inlineCode",{parentName:"p"},"@inject()")," to inject the dependency."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@state"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"@state")," is used to decorate a class property that will create a reducer for Redux."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@action"))),(0,r.kt)("p",null,"It updates the redux state with mutations via the class method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"class Todo {\n  @state\n  list: { text: string }[] = [];\n\n  @action\n  addTodo(text: string) {\n    this.list.push({ text });\n  }\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ViewModule"),"/",(0,r.kt)("inlineCode",{parentName:"li"},"useConnector()"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ViewModule")," is a view module with a component, which is completely different from React class component. The component of ",(0,r.kt)("inlineCode",{parentName:"p"},"ViewModule")," is a function component that is used for the state connection between the module and the UI (using ",(0,r.kt)("inlineCode",{parentName:"p"},"useConnector()"),") and for the application view bootstrap."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"spawn()"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"spawn()")," transfers class methods execution from the client app to the server app and synchronizes the state to all client apps. It is inspired by the Actor model, but unlike other actor models, reactant-share's ",(0,r.kt)("inlineCode",{parentName:"p"},"spawn()")," does not create new threads."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"createSharedApp()"))),(0,r.kt)("p",null,"reactant-share supports multiple modes, and you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"createSharedApp()")," to create multiple different Shared Web Apps that interact with each other via transport APIs."),(0,r.kt)("h2",{id:"qa"},"Q&A"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Can reactant-share completely solve the complexity of the architecture?")),(0,r.kt)("p",null,"Although reactant-share tries to reduce some complexity at the framework level, the complexity of large applications does not depend entirely on the framework itself, so even using reactant-share to architect a large project does not completely guarantee that it is absolutely clean, efficient, and maintainable. It involves testing strategy, code specification, CI/CD, development process, module design, and many other point."),(0,r.kt)("p",null,"But in terms of module model and shared model, reactant-share already provides as clean a design as possible. If you are interested in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/unadlib/reactant/tree/master/packages/reactant-share"},"reactant-share"),", you can try it quickly."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Does reactant-share have no cons at all? Are there any limitations to using it?")),(0,r.kt)("p",null,'reactant-share is a framework for building Shared Web Apps. But such a model is not free, and it will face performance issues with data transfer (The high maintenance cost of the SharedArrayBuffer has forced us to abandon it for now as well. In fact this is a problem caused by the fact that JS "multithreading" does not share memory efficiently).'),(0,r.kt)("p",null,"Although Shared Web Apps lets the client App run in a render-only client thread, it introduces the additional overhead of synchronous state transfer. We must ensure that it is lightweight and efficient enough. While reactant-share does state patch based on Immer, it is always difficult to ensure that each patch is minimally updated."),(0,r.kt)("p",null,"reactant-share provides a development option ",(0,r.kt)("inlineCode",{parentName:"p"},"enablePatchesChecker"),". In development mode, it is enabled by default. Any mutation operation that is not a valid mutation will be alerted, usually eliminating the alert, and reactant-share will try to keep the update size as minimal as possible."),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"Front-end frameworks and architectures are always evolving. With full Worker support in modern browsers and an increasing number of multi-core CPU devices, we have reached a mature stage in our exploration of some multi-threaded running Web Apps. We have reasons to believe that the future Web App will be designed with lower complexity and run smoothly with multiple threads. It can fully utilize the user's device resources and give the user a good experience, and the developer does not need to have too many multi-threaded programming burden."),(0,r.kt)("p",null,"This is what reactant-share wants to try and work on."),(0,r.kt)("p",null,"If you think reactant-share is interesting, feel free to give it a star."),(0,r.kt)("p",null,"Repo: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/unadlib/reactant"},"reactant")))}u.isMDXComponent=!0},7007:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/workflow-353252399cd592670ef857f7f4d38ad6.jpg"}}]);