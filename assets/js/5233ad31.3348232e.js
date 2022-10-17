"use strict";(self.webpackChunklabtutorial=self.webpackChunklabtutorial||[]).push([[744],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>c});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=s(a),c=r,h=d["".concat(p,".").concat(c)]||d[c]||u[c]||o;return a?n.createElement(h,l(l({ref:t},m),{},{components:a})):n.createElement(h,l({ref:t},m))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1613:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const o={id:"planemo",title:"Planemo",sidebar_position:3},l=void 0,i={unversionedId:"planemo",id:"planemo",title:"Planemo",description:"**Best Practices & Standards**",source:"@site/docs/planemo.md",sourceDirName:".",slug:"/planemo",permalink:"/labtutorial/planemo",draft:!1,tags:[],version:"current",lastUpdatedBy:"owlang",lastUpdatedAt:1666028224,formattedLastUpdatedAt:"Oct 17, 2022",sidebarPosition:3,frontMatter:{id:"planemo",title:"Planemo",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Galaxy",permalink:"/labtutorial/galaxy"},next:{title:"Cornell's CAC server setup",permalink:"/labtutorial/cac"}},p={},s=[{value:"Using Planemo",id:"using-planemo",level:2},{value:"Writing functional tests for Tool Wrappers",id:"writing-functional-tests-for-tool-wrappers",level:2}],m={toc:s};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"Best Practices & Standards"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://galaxy-iuc-standards.readthedocs.io/en/latest/best_practices.html"},"Creating Galaxy tools")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://galaxy-iuc-standards.readthedocs.io/en/latest/best_practices/tool_xml.html"},"Writing tool wrappers"))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"Tool Development"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.galaxyproject.org/en/latest/dev/schema.html"},"Galaxy XML Tags ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://planemo.readthedocs.io/en/latest/readme.html"},"What is Planemo ?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://planemo.readthedocs.io/en/latest/writing_standalone.html"},"Building Galaxy Tools Using Planemo")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://galaxyproject.github.io/training-material/topics/dev/"},"Galaxy Development Training Slides"))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"Publishing to GALAXY Toolshed"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://galaxy-iuc-standards.readthedocs.io/en/latest/best_practices/integration_checklist.html#testing-your-tool"},"ToolShed Readiness Checklist")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://planemo.readthedocs.io/en/latest/publishing.html"},"Publishing tools from Planemo"))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Make sure you refer to the above links while writing tools and their xml wrappers. It will be easy to submit tools to ",(0,r.kt)("inlineCode",{parentName:"em"},"Intergalactic Utilities Commission "),(0,r.kt)("a",{parentName:"em",href:"https://github.com/galaxyproject/tools-iuc"},"IUC"),", if you followed the above standards. ",(0,r.kt)("a",{parentName:"em",href:"https://www.webfx.com/tools/emoji-cheat-sheet/"},"emoji cheatsheet")," reference used in this documentation.")),(0,r.kt)("h1",{id:"install"},"Install"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Follow the instructions in the ",(0,r.kt)("a",{parentName:"li",href:"https://planemo.readthedocs.io/en/latest/installation.html"},"documentation")," to install on your machine.")),(0,r.kt)("h2",{id:"using-planemo"},"Using Planemo"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Three step process that every tool need to go through :"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"planemo lint <your_tool.xml>")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"planemo test  <your_tool.xml> --galaxy_root=[path to your local galaxy instance] --test_data [path to the directory containing your testdata]")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"planemo serve <your_tool.xml> --galaxy_root=[path to your local galaxy instance] ")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If you don't want to use (or) don't have your local galaxy for testing, ",(0,r.kt)("inlineCode",{parentName:"p"},"Planemo")," will download & spin-up a standalone galaxy to test your wrappers. make sure you installed ",(0,r.kt)("inlineCode",{parentName:"p"},"Planemo")," within a python environment as instructed in ",(0,r.kt)("a",{parentName:"p",href:"https://planemo.readthedocs.io/en/latest/readme.html"},"installation")," documentation for ",(0,r.kt)("inlineCode",{parentName:"p"},"Planemo"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Each of the above commands supports ",(0,r.kt)("inlineCode",{parentName:"p"},"--help")," option. use it for the entire list of supported options.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If ",(0,r.kt)("inlineCode",{parentName:"p"},"--no-xsd")," option is used for ",(0,r.kt)("inlineCode",{parentName:"p"},"linting")," the tool wrapper,",(0,r.kt)("inlineCode",{parentName:"p"},"Planemo")," finds errors and warnings within your wrappers by ignoring the validation of correct XML schema. (read the documentation for more info, you might generally want to avoid using this option)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"planemo test")," expects test data to be available in a folder named as ",(0,r.kt)("inlineCode",{parentName:"p"},"test-data"),". you need to write tool specific tests and also provide test data for testing the wrapper, before running the command."))),(0,r.kt)("h2",{id:"writing-functional-tests-for-tool-wrappers"},"Writing functional tests for Tool Wrappers"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"References to writing proper tests")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://galaxyproject.org/admin/tools/writing-tests/"},"Basic Tests"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://docs.galaxyproject.org/en/latest/dev/schema.html#tool-tests"},"Using ",(0,r.kt)("inlineCode",{parentName:"a"},"<tests></tests>")," XML tag"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://planemo.readthedocs.io/en/latest/writing_advanced.html#test-driven-development"},"Advanced Tests"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Using ",(0,r.kt)("a",{parentName:"p",href:"http://docutils.sourceforge.net/docs/ref/rst/restructuredtext.html"},(0,r.kt)("inlineCode",{parentName:"a"},"reStructuredText"))," to format ",(0,r.kt)("inlineCode",{parentName:"p"},"help")," section within the tool wrapper - ",(0,r.kt)("a",{parentName:"p",href:"https://docs.galaxyproject.org/en/latest/dev/schema.html#tool-help"},"documentation"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Use the online ",(0,r.kt)("a",{parentName:"p",href:"http://rst.ninjs.org/"},"restructedText editor")," to write and format your content under ",(0,r.kt)("inlineCode",{parentName:"p"},"<help> </help>")," section for the wrapper.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"planemo creates a ",(0,r.kt)("inlineCode",{parentName:"p"},"tool_test_output.html")," file to showing the errors and debugging information if tools fail otherwise, shows the test output.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"planemo serve")," lets you visualize the tools wrapper in GALAXY instance once it passes the tests."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Flake8 & pycodestyle for python tools")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Python scripts must conform to ",(0,r.kt)("inlineCode",{parentName:"li"},"pep8")," standards and also pass ",(0,r.kt)("inlineCode",{parentName:"li"},"flake8"),", so that your tools pass the ",(0,r.kt)("inlineCode",{parentName:"li"},"travisCI")," tests done by ",(0,r.kt)("inlineCode",{parentName:"li"},"IUC"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pycodestyle")," is the utility to test your python scripts for pep8 coding standards")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"pycodestyle --show-pep8 --show-source --ignore=E501 <your_tool>.py\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For the case of submitting and testing the pep8 conformations, the IUC ignores some of the minor errors , such as E501, E201, E202. Refer the below issue on IUC, on what was actually proposed. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/galaxyproject/tools-iuc/issues/467"},"tools-iuc/issue/467"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"I would install ",(0,r.kt)("em",{parentName:"p"},"flake8")," and ",(0,r.kt)("em",{parentName:"p"},"flake8-import-order")," to do a simple test to remove any errors that pop up after pep8. Below is the command to test the flake8 on the scripts within the current directory."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# installing flake8 and flake8-import-order\npip install flake8 flake8-import-order\n\n# Testing for flake8 errors\nflake8 --ignore=E201,E202,E501 --count .\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"flake8 documentation : ",(0,r.kt)("a",{parentName:"li",href:"http://flake8.pycqa.org/en/latest/"},"here")),(0,r.kt)("li",{parentName:"ul"},"flake8-import-order : ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/PyCQA/flake8-import-order"},"here")),(0,r.kt)("li",{parentName:"ul"},"pycodestyle documentation: ",(0,r.kt)("a",{parentName:"li",href:"https://pycodestyle.readthedocs.io/en/latest/"},"here"))))}u.isMDXComponent=!0}}]);