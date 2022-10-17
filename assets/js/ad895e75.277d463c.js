"use strict";(self.webpackChunklabtutorial=self.webpackChunklabtutorial||[]).push([[288],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),h=i,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||o;return n?a.createElement(m,r(r({ref:t},c),{},{components:n})):a.createElement(m,r({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var u=2;u<o;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3581:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(7462),i=(n(7294),n(3905));const o={id:"faq",title:"FAQ",sidebar_position:10},r=void 0,l={unversionedId:"faq",id:"faq",title:"FAQ",description:"Frequently Asked Questions",source:"@site/docs/FAQ.md",sourceDirName:".",slug:"/faq",permalink:"/labtutorial/faq",draft:!1,tags:[],version:"current",lastUpdatedBy:"owlang",lastUpdatedAt:1666028224,formattedLastUpdatedAt:"Oct 17, 2022",sidebarPosition:10,frontMatter:{id:"faq",title:"FAQ",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Publication Checklist",permalink:"/labtutorial/publication-checklist"}},s={},u=[{value:"Installation",id:"installation",level:3},{value:"Can planemo_init add additional features without generating the whole wrapper using the command line?",id:"can-planemo_init-add-additional-features-without-generating-the-whole-wrapper-using-the-command-line",level:4},{value:"Test",id:"test",level:3},{value:"Does planemo t not work if you don&#39;t include all the input and output test files in the same directory?",id:"does-planemo-t-not-work-if-you-dont-include-all-the-input-and-output-test-files-in-the-same-directory",level:4},{value:"Debug",id:"debug",level:3},{value:"Where can I get help with debugging?",id:"where-can-i-get-help-with-debugging",level:4},{value:"It says &#39;internet not reachable&#39; when I am connected to the internet. What can I do?",id:"it-says-internet-not-reachable-when-i-am-connected-to-the-internet-what-can-i-do",level:4},{value:"Common Warnings",id:"common-warnings",level:2},{value:"Common Errors",id:"common-errors",level:2},{value:"Version Conflicts",id:"version-conflicts",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Frequently Asked Questions"),(0,i.kt)("h3",{id:"installation"},"Installation"),(0,i.kt)("h4",{id:"can-planemo_init-add-additional-features-without-generating-the-whole-wrapper-using-the-command-line"},"Can planemo_init add additional features without generating the whole wrapper using the command line?"),(0,i.kt)("p",null,"No. You must use planemo_init with all the options included, you cannot add additional cases to an already existing wrapper (xml file)."),(0,i.kt)("h3",{id:"test"},"Test"),(0,i.kt)("h4",{id:"does-planemo-t-not-work-if-you-dont-include-all-the-input-and-output-test-files-in-the-same-directory"},"Does planemo t not work if you don't include all the input and output test files in the same directory?"),(0,i.kt)("p",null,"Yes. you must include all the input and output files in order to test. You can also select specific wrappers for testing, such as planemo t your.xml then you only need to include the test files for your.xml wrapper."),(0,i.kt)("h3",{id:"debug"},"Debug"),(0,i.kt)("h4",{id:"where-can-i-get-help-with-debugging"},"Where can I get help with debugging?"),(0,i.kt)("p",null,"You can search for open planemo issues and get help here: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/galaxyproject/planemo/issues"},"https://github.com/galaxyproject/planemo/issues"),"."),(0,i.kt)("h4",{id:"it-says-internet-not-reachable-when-i-am-connected-to-the-internet-what-can-i-do"},"It says 'internet not reachable' when I am connected to the internet. What can I do?"),(0,i.kt)("p",null,"You need to set the curl connect timeout and curl max time in the config file which is allocated in the following path:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"$ cd ~")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"$ cd .sdkman/etc")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"$ ls"))),(0,i.kt)("p",null,"Open the config file and change the following:"),(0,i.kt)("p",null,"sdkman_curl_connect_timeout=20\nsdkman_curl_max_time=0"),(0,i.kt)("p",null,"It might be that the internet service provider is blocking the connection. You can resolve this by either using a different internet or by using a VPN. See the ",(0,i.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/37189001/getting-internet-not-reachable-with-sdkman"},"link")," for more details on this bug."),(0,i.kt)("hr",null),(0,i.kt)("h1",{id:"debug-1"},"Debug"),(0,i.kt)("p",null,"This guide outlines some of the common warning messages and errors during the planemo installation & testing procedures."),(0,i.kt)("h2",{id:"common-warnings"},"Common Warnings"),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},".. WARNING: No tests found, most tools should define test cases.\n.. WARNING: No valid test(s) found.\n")),(0,i.kt)("p",null,"This indicates that there are no test cases written in the wrapper(.xml file)."),(0,i.kt)("h2",{id:"common-errors"},"Common Errors"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"dbkey error: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/galaxyproject/planemo/issues/746"},"https://github.com/galaxyproject/planemo/issues/746")),(0,i.kt)("li",{parentName:"ul"},"Cannot locate xUnit report: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/galaxyproject/planemo/issues/724"},"https://github.com/galaxyproject/planemo/issues/724")),(0,i.kt)("li",{parentName:"ul"},"planemo couldn't find a target test-data directory: This means that there is no test-data directory created for planemo testing.\nFix the issue by simply checking planemo l or create a test-data directory manually and copy all input & output files.")),(0,i.kt)("h2",{id:"version-conflicts"},"Version Conflicts"),(0,i.kt)("p",null,"A lot of troubles with the initial setup comes from the version conflict of multiple tools and dependencies. One can find the list of compatible versions below:"),(0,i.kt)("p",null,"Python 3.6.5\nPlanemo 0.53.0\nGalaxy"))}p.isMDXComponent=!0}}]);