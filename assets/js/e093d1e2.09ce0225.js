"use strict";(self.webpackChunklabtutorial=self.webpackChunklabtutorial||[]).push([[860],{5680:(e,t,a)=>{a.d(t,{xA:()=>m,yg:()=>y});var r=a(6540);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),g=p(a),u=i,y=g["".concat(s,".").concat(u)]||g[u]||c[u]||n;return a?r.createElement(y,l(l({ref:t},m),{},{components:a})):r.createElement(y,l({ref:t},m))}));function y(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,l=new Array(n);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[g]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<n;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9104:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>n,metadata:()=>o,toc:()=>p});var r=a(8168),i=(a(6540),a(5680));const n={id:"reading-exercises",title:"New Member Reading and Exercises",sidebar_label:"Reading and Exercises",sidebar_position:1},l=void 0,o={unversionedId:"Software/NewMembers/reading-exercises",id:"Software/NewMembers/reading-exercises",title:"New Member Reading and Exercises",description:"Topics to familiarize yourself with",source:"@site/docs/Software/NewMembers/reading-exercises.md",sourceDirName:"Software/NewMembers",slug:"/Software/NewMembers/reading-exercises",permalink:"/labtutorial/Software/NewMembers/reading-exercises",draft:!1,tags:[],version:"current",lastUpdatedBy:"Olivia Wen-Mei Lang",lastUpdatedAt:1725566481,formattedLastUpdatedAt:"Sep 5, 2024",sidebarPosition:1,frontMatter:{id:"reading-exercises",title:"New Member Reading and Exercises",sidebar_label:"Reading and Exercises",sidebar_position:1},sidebar:"softwareSidebar",previous:{title:"New Members",permalink:"/labtutorial/Software/NewMembers/"},next:{title:"Command Line Basics",permalink:"/labtutorial/Software/NewMembers/command-line-basics"}},s={},p=[{value:"Topics to familiarize yourself with",id:"topics-to-familiarize-yourself-with",level:2},{value:"Recommended Reading",id:"recommended-reading",level:2},{value:"Exercises to work through",id:"exercises-to-work-through",level:2},{value:"Optional bonus resources",id:"optional-bonus-resources",level:3}],m={toc:p},g="wrapper";function c(e){let{components:t,...a}=e;return(0,i.yg)(g,(0,r.A)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"topics-to-familiarize-yourself-with"},"Topics to familiarize yourself with"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Common bioinformatics ",(0,i.yg)("strong",{parentName:"li"},"file formats"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"BED, GFF3/GTF, FASTA, FASTQ, SAM/BAM"),(0,i.yg)("li",{parentName:"ul"},'Look at "Read More" links in ScriptManager docs: ',(0,i.yg)("a",{parentName:"li",href:"https://pughlab.mbg.cornell.edu/scriptmanager-docs/docs/Guides/Getting-Started/file-formats"},"https://pughlab.mbg.cornell.edu/scriptmanager-docs/docs/Guides/Getting-Started/file-formats")))),(0,i.yg)("li",{parentName:"ul"},"Common genomics assays within our lab/field:",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"ChIP-exo vs ChIP-seq"),(0,i.yg)("li",{parentName:"ul"},"ATAC-seq"),(0,i.yg)("li",{parentName:"ul"},"RNA-seq"),(0,i.yg)("li",{parentName:"ul"},"PRO-cap/PRO-seq/CoPRO (see John Lis\u2019s lab for papers about these last few, he is our neighbor on this floor)"),(0,i.yg)("li",{parentName:"ul"},"Enseqlopedia gives high-level summaries of what these assays measure: ",(0,i.yg)("a",{parentName:"li",href:"https://enseqlopedia.com/"},"https://enseqlopedia.com/")))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"command-line-basics"},"Learn the basics of command line"))),(0,i.yg)("h2",{id:"recommended-reading"},"Recommended Reading"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("em",{parentName:"li"},"Rossi et al 2021")," - ",(0,i.yg)("strong",{parentName:"li"},"Yeast Epigenome (YEP) paper"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/CEGRcode/2021-Rossi_Nature/tree/master"},"https://github.com/CEGRcode/2021-Rossi_Nature/tree/master")))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("em",{parentName:"li"},"Rossi et al 2018")," - ",(0,i.yg)("strong",{parentName:"li"},"Simplified ChIP-exo paper"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://www.nature.com/articles/s41467-018-05265-7"},"https://www.nature.com/articles/s41467-018-05265-7")))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("em",{parentName:"li"},"Arslan et al 2023")," - ",(0,i.yg)("strong",{parentName:"li"},"Avidite sequencing (AVITI) paper"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://www.nature.com/articles/s41587-023-01750-7"},"https://www.nature.com/articles/s41587-023-01750-7")),(0,i.yg)("li",{parentName:"ul"},"Animation of Avidite sequencing from Element Biosciences: ",(0,i.yg)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=b_cC5wi2OYg"},"https://www.youtube.com/watch?v=b_cC5wi2OYg")))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("em",{parentName:"li"},"Noble et al 2009")," - ",(0,i.yg)("strong",{parentName:"li"},"Organizing your bioinformatics projects"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1000424"},"https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1000424"))))),(0,i.yg)("h2",{id:"exercises-to-work-through"},"Exercises to work through"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("a",{parentName:"li",href:"https://pughlab.mbg.cornell.edu/scriptmanager-docs/docs/Guides/Tutorials/chipexo-tutorial"},"ChIP-exo tutorial"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"An introduction to using ScriptManager's GUI and some core tools within the suite"))),(0,i.yg)("li",{parentName:"ol"},"Reproduce one of the ",(0,i.yg)("a",{parentName:"li",href:"https://pubmed.ncbi.nlm.nih.gov/33692541/"},"YEP paper (Rossi 2021)")," Fig 3 subpanels in plotter",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Use data downloads from ",(0,i.yg)("a",{parentName:"li",href:"http://www.yeastepigenome.org"},"www.yeastepigenome.org")),(0,i.yg)("li",{parentName:"ul"},"An introduction to using ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/CEGRcode/plotter"},"plotter")))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("a",{parentName:"li",href:"https://biohpc.cornell.edu/ww/1/Default.aspx?wid=145"},'"Linux for Biologists" workshop'),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"An introduction to basic shell scripting"))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("a",{parentName:"li",href:"https://learngitbranching.js.org/?locale=en_US"},"Learning Git"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Understanding how branching and merging in git")))),(0,i.yg)("h3",{id:"optional-bonus-resources"},"Optional bonus resources"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("a",{parentName:"li",href:"https://us-rse.org/wg/education_training/training/"},"RSE Training"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"We recommend topics like Vim, Git, and the ",(0,i.yg)("a",{parentName:"li",href:"https://intersect-training.org/training-links/"},"INTERSECT materials")))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("a",{parentName:"li",href:"https://bootcamp.biostars.io/#day2"},"PSU Biostars Bootcamp #day2"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Understanding Shell scripts, Markdown, Git and start using ACI clusters."))),(0,i.yg)("li",{parentName:"ol"},"Beginner Web Development tutorials ",(0,i.yg)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/Tutorials"},"MDN Web Docs"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Web technologies at a glance."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://www.tutorialspoint.com/html5/"},"HTML")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://www.tutorialspoint.com/css/"},"CSS")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://www.tutorialspoint.com/javascript"},"Javascript")))),(0,i.yg)("li",{parentName:"ol"},"Understanding React",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://reactjs.org/blog/2013/06/05/why-react.html"},"Why did they build React ?"),"    "),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://reactjs.org/docs/getting-started.html"},"Official React docs")))),(0,i.yg)("li",{parentName:"ol"},"Creating REST API with Node.js",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=0oXYLzuucwE&list=PL55RiY5tL51q4D-B63KBnygU6opNPFk_q"},"video tutorial")))),(0,i.yg)("li",{parentName:"ol"},"Creating React Applications",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=OxIDLw0M-m0&list=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG"},"video tutorial")))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("a",{parentName:"li",href:"https://culearn.cornell.edu/"},"CULearn")," has a broad variety of courses if you use your Cornell NetID login")))}c.isMDXComponent=!0}}]);