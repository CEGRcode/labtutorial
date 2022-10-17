"use strict";(self.webpackChunklabtutorial=self.webpackChunklabtutorial||[]).push([[971],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>d});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),s=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),c=s(a),d=n,k=c["".concat(p,".").concat(d)]||c[d]||m[d]||l;return a?r.createElement(k,i(i({ref:e},u),{},{components:a})):r.createElement(k,i({ref:e},u))}));function d(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:n,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},1269:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=a(7462),n=(a(7294),a(3905));const l={id:"index",title:"Home",sidebar_position:1,slug:"/"},i=void 0,o={unversionedId:"index",id:"index",title:"Home",description:"Introduction",source:"@site/docs/index.md",sourceDirName:".",slug:"/",permalink:"/labtutorial/",draft:!1,tags:[],version:"current",lastUpdatedBy:"owlang",lastUpdatedAt:1666028224,formattedLastUpdatedAt:"Oct 17, 2022",sidebarPosition:1,frontMatter:{id:"index",title:"Home",sidebar_position:1,slug:"/"},sidebar:"tutorialSidebar",next:{title:"Galaxy",permalink:"/labtutorial/galaxy"}},p={},s=[{value:"Introduction",id:"introduction",level:2},{value:"Infrastructure Details",id:"infrastructure-details",level:2},{value:"Software Stacks",id:"software-stacks",level:2},{value:"Development Tools",id:"development-tools",level:4},{value:"Tutorials &amp; Reading Material",id:"tutorials--reading-material",level:2},{value:"Contributors",id:"contributors",level:2}],u={toc:s};function m(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"This website contains installation guides to setup primary software packages and development infrastructure for ",(0,n.kt)("strong",{parentName:"p"},"Mac")," Workstations. Maintained and Curated by ",(0,n.kt)("a",{parentName:"p",href:"https://pughlab.mbg.cornell.edu/"},"PughLab"),"."),(0,n.kt)("h2",{id:"infrastructure-details"},"Infrastructure Details"),(0,n.kt)("p",null,"The lab takes advantage of ",(0,n.kt)("a",{parentName:"p",href:"https://galaxyproject.github.io/"},"GALAXY")," to create data analysis & visualization pipelines for large-scale data processing on the ",(0,n.kt)("a",{parentName:"p",href:"https://ics.psu.edu/about/"},"ACI-ICS")," clusters and also leverages ",(0,n.kt)("a",{parentName:"p",href:"https://allocations.access-ci.org/"},"ACCESS (fromerly XSEDE)")," resources for compute requirements."),(0,n.kt)("p",null,"For day to day bioinformatics, install & start using ",(0,n.kt)("a",{parentName:"p",href:"http://pughlab.mbg.cornell.edu/scriptmanager/"},"ScriptManager.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"ICS-ACI Resource URL"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://ics.psu.edu/computing-services/account-setup/"},"Account Setup"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://ics.psu.edu/computing-services/ics-aci-user-guide/"},"User's Guide"))))),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Make sure you are added to the PughLab ACI allocations and relevant group space once you get an ACI account.")),(0,n.kt)("h2",{id:"software-stacks"},"Software Stacks"),(0,n.kt)("p",null,"Below are some the Web development stacks being used in the lab."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Project"),(0,n.kt)("th",{parentName:"tr",align:null},"Abbreviation"),(0,n.kt)("th",{parentName:"tr",align:null},"Stack"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"http://www.yeastepigenome.org/"},"Yeast Epigenome Project")),(0,n.kt)("td",{parentName:"tr",align:null},"YEP"),(0,n.kt)("td",{parentName:"tr",align:null},"MERN")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"http://www.pcrpvalidation.org/"},"Protein Capture Reagent Program Validation")),(0,n.kt)("td",{parentName:"tr",align:null},"PCRP"),(0,n.kt)("td",{parentName:"tr",align:null},"MERN")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"http://www.pegr.org"},"Platform for Epigenetic and Genomic Research")),(0,n.kt)("td",{parentName:"tr",align:null},"PEGR"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.mysql.com/"},"MySql"),", ",(0,n.kt)("a",{parentName:"td",href:"https://grails.org/"},"Grails"),", ",(0,n.kt)("a",{parentName:"td",href:"https://groovy-lang.org/"},"Groovy"))))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"MERN Stack is made up of ",(0,n.kt)("a",{parentName:"p",href:"https://www.mongodb.com/"},"MongoDB"),", ",(0,n.kt)("a",{parentName:"p",href:"https://expressjs.com/"},"Express"),", ",(0,n.kt)("a",{parentName:"p",href:"https://reactjs.org/"},"React"),", ",(0,n.kt)("a",{parentName:"p",href:"https://nodejs.org/en/"},"NodeJS"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"For more project repositories, go to PughLab's ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/CEGRcode"},"GitHub")))),(0,n.kt)("h4",{id:"development-tools"},"Development Tools"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Install the missing package manager for macOS : ",(0,n.kt)("a",{parentName:"li",href:"https://brew.sh/"},(0,n.kt)("inlineCode",{parentName:"a"},"Homebrew"))),(0,n.kt)("li",{parentName:"ul"},"Command line tools using Xcode, paste this command in a terminal :  ",(0,n.kt)("inlineCode",{parentName:"li"},"xcode-select --install")),(0,n.kt)("li",{parentName:"ul"},"For ",(0,n.kt)("inlineCode",{parentName:"li"},"Python3")," & ",(0,n.kt)("inlineCode",{parentName:"li"},"Python2.x")," development, download & install ",(0,n.kt)("a",{parentName:"li",href:"https://www.anaconda.com/"},"Anaconda")),(0,n.kt)("li",{parentName:"ul"},"Install ",(0,n.kt)("inlineCode",{parentName:"li"},"Java8.x")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"Java JDK")," before you download the latest release of ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/CEGRcode/scriptmanager/releases"},"ScriptManager"))),(0,n.kt)("h2",{id:"tutorials--reading-material"},"Tutorials & Reading Material"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Understanding Shell scripts, Markdown, Git and start using ACI clusters.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://bootcamp.biostars.io/#day2"},"PSU Biostars Bootcamp #day2")))),(0,n.kt)("li",{parentName:"ul"},"Beginner Web Development tutorials ",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/Tutorials"},"MDN Web Docs"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Web technologies at a glance.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.tutorialspoint.com/html5/"},"HTML")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.tutorialspoint.com/css/"},"CSS")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.tutorialspoint.com/javascript"},"Javascript"),"    "))))),(0,n.kt)("li",{parentName:"ul"},"Understanding React",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://reactjs.org/blog/2013/06/05/why-react.html"},"Why did they build React ?"),"    "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/getting-started.html"},"Official React docs")))),(0,n.kt)("li",{parentName:"ul"},"Creating REST API with Node.js",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=0oXYLzuucwE&list=PL55RiY5tL51q4D-B63KBnygU6opNPFk_q"},"video tutorial")))),(0,n.kt)("li",{parentName:"ul"},"Creating React Applications",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=OxIDLw0M-m0&list=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG"},"video tutorial")))),(0,n.kt)("li",{parentName:"ul"},'"Adobe Illustrator for Scientists"',(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=z2bcqyRxFrI&list=PLhKpKEPEAauYIsyjnIN2YXztNo7BrZVxQ"},"video tutorials")),(0,n.kt)("li",{parentName:"ul"},"very quick (7-15min) and relevant for both making conceptual diagrams and aligning figure charts"),(0,n.kt)("li",{parentName:"ul"},"useful for both wet and dry lab memebers")))),(0,n.kt)("h2",{id:"contributors"},"Contributors"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Lab Position"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Prashant Kumar Kuntala"),(0,n.kt)("td",{parentName:"tr",align:null},"Computational Scientist")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Hedgie Jo"),(0,n.kt)("td",{parentName:"tr",align:null},"Undergraduate Researcher")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Pierce Chaffin"),(0,n.kt)("td",{parentName:"tr",align:null},"Undergraduate Researcher")))))}m.isMDXComponent=!0}}]);