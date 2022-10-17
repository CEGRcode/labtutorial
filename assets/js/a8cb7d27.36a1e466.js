"use strict";(self.webpackChunklabtutorial=self.webpackChunklabtutorial||[]).push([[135],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},l=Object.keys(e);for(i=0;i<l.length;i++)a=l[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)a=l[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=i.createContext({}),p=function(e){var t=i.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return i.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),m=p(a),d=n,h=m["".concat(o,".").concat(d)]||m[d]||u[d]||l;return a?i.createElement(h,s(s({ref:t},c),{},{components:a})):i.createElement(h,s({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,s=new Array(l);s[0]=m;var r={};for(var o in t)hasOwnProperty.call(t,o)&&(r[o]=t[o]);r.originalType=e,r.mdxType="string"==typeof e?e:n,s[1]=r;for(var p=2;p<l;p++)s[p]=a[p];return i.createElement.apply(null,s)}return i.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4094:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>p});var i=a(7462),n=(a(7294),a(3905));const l={id:"publication-checklist",title:"Publication Checklist",sidebar_position:9},s=void 0,r={unversionedId:"publication-checklist",id:"publication-checklist",title:"Publication Checklist",description:"last updated Oct 16, 2022 by Olivia for the Mittal et al, 2022 SAGA paper",source:"@site/docs/PublicationChecklist.md",sourceDirName:".",slug:"/publication-checklist",permalink:"/labtutorial/publication-checklist",draft:!1,tags:[],version:"current",lastUpdatedBy:"owlang",lastUpdatedAt:1666028224,formattedLastUpdatedAt:"Oct 17, 2022",sidebarPosition:9,frontMatter:{id:"publication-checklist",title:"Publication Checklist",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Lab Website @Cornell",permalink:"/labtutorial/labwebsite"},next:{title:"FAQ",permalink:"/labtutorial/faq"}},o={},p=[{value:"PEGR projects",id:"pegr-projects",level:2},{value:"GEO Submission",id:"geo-submission",level:2},{value:"Github",id:"github",level:2},{value:"Organization of the Repo",id:"organization-of-the-repo",level:3},{value:"STENCIL",id:"stencil",level:2},{value:"After publication",id:"after-publication",level:2}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"last updated Oct 16, 2022 by Olivia for the Mittal et al, 2022 SAGA paper")),(0,n.kt)("h2",{id:"pegr-projects"},"PEGR projects"),(0,n.kt)("p",null,'It helps to start the "Working set" PEGR project early in your analysis. The latter two projects should be created closer to publication.'),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'"Working set" - help you to easily track all the PEGR samples that were analyzed (regardless of if they ultimately ended up in the manuscript)'),(0,n.kt)("li",{parentName:"ul"},'"Novel set" - the set of previously UNPUBLISHED samples that will be submitted to GEO as novel sequencing data that need new accessions.'),(0,n.kt)("li",{parentName:"ul"},'"Reanalyzed set" - the set of previously PUBLISHED samples that were reanalyzed for figures included in the manuscript.')),(0,n.kt)("p",null,"Make sure you include relevant keywords, accessions, and identifiers in the project to improve search-ability for future PEGR users."),(0,n.kt)("p",null,"Name the projects using the following convention: ",(0,n.kt)("inlineCode",{parentName:"p"},"<FirstAuthorLastName> <PublicationYear> - <JournalName> (<ProjectType>)"),". Please also include the following information in the description:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Short description with relevant keywords"),(0,n.kt)("li",{parentName:"ul"},"Manuscript title"),(0,n.kt)("li",{parentName:"ul"},"PMID"),(0,n.kt)("li",{parentName:"ul"},"PMCID"),(0,n.kt)("li",{parentName:"ul"},"GEO Dataseries accession (",(0,n.kt)("inlineCode",{parentName:"li"},"GSEXXXXXX"),")"),(0,n.kt)("li",{parentName:"ul"},"SRA accession (",(0,n.kt)("inlineCode",{parentName:"li"},"SRPXXXXXX"),")"),(0,n.kt)("li",{parentName:"ul"},"DOI"),(0,n.kt)("li",{parentName:"ul"},"Github")),(0,n.kt)("p",null,"E.g."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://thanos.vmhost.psu.edu/pegr/project/show/1251"},"Badjatia 2021- Cell Reports (Novel Set)"))),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Description: Novel published data from Nitika's paper on yeast peroxide stress. Acute stress drives global repression through two independent RNA polymerase II stalling events in Saccharomyces Publication accessions: - PMID - 33472084 - PMCID - PMC7879390 - GEO series - GSE151348 - SRA - SRP265070 - DOI - https://doi.org/10.1016/j.celrep.2020.108640 - Github - https://github.com/CEGRcode/2020-Badjatia_peroxide_stress")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Some information may be missing when you create the project but this can be filled in later as it becomes available.")),(0,n.kt)("h2",{id:"geo-submission"},"GEO Submission"),(0,n.kt)("p",null,"All data not subject to privacy restrictions (e.g. patient-protected samples) should be made publicly available at one of the national genomic data repositories. We submit through ",(0,n.kt)("a",{parentName:"p",href:"https://www.ncbi.nlm.nih.gov/geo/"},"Gene Expression Omnibus (GEO)"),"."),(0,n.kt)("p",null,"Follow the ",(0,n.kt)("a",{parentName:"p",href:"https://www.ncbi.nlm.nih.gov/geo/info/submission.html"},"GEO submission instructions"),' for submitting the UNPUBLISHED datasets ("Novel Set") used in the manuscript. Almost all data we produce are "high-throughput sequencing data" if they are coming from PEGR.'),(0,n.kt)("p",null,'Important: Previously published samples ("Reanalyzed set") that have been reanalyzed for this manuscript should NOT be included in the submission. These can be cited within the manuscript using their existing NCBI accession info.'),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Allow time for curators to process samples (and go back-and-forth to correct mistakes are made in the submission)"),(0,n.kt)("li",{parentName:"ol"},"Build submission according to GEO documentation",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Raw files: Use PEGR to pull the raw FASTQ sample files"),(0,n.kt)("li",{parentName:"ul"},'Processed files: Samples may be "processed" differently depending on the data type. Use your judgement on what is appropriate for the purposes of the study. Consider referencing ',(0,n.kt)("a",{parentName:"li",href:"https://github.com/CEGRcode/2022-Mittal_SAGA/blob/main/03_Bulk_Processing/job/bulk_geo_tracks.pbs"},"this script")," for creating BigWig pileups of 5' Read1 coverage across the genome."),(0,n.kt)("li",{parentName:"ul"},"Metadata Spreadsheet: You may want to use ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/CEGRcode/2022-Mittal_SAGA"},"this script")," for pulling some of the data from PEGR as a starting point for building the spreadsheet. ",(0,n.kt)("strong",{parentName:"li"},"You will need to manually adjust the metadata output of this script to fit GEO specifications for the submission.")," You may also want to reference previous submissions in Box."))),(0,n.kt)("li",{parentName:"ol"},"Follow GEO instructions to organize files and submit through the FTP server",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Regarding the date to make the data public, ",(0,n.kt)("strong",{parentName:"li"},"start with at least a year out"),". This can be changed later."))),(0,n.kt)("li",{parentName:"ol"},"Look for an email from GEO with the newly created ",(0,n.kt)("inlineCode",{parentName:"li"},"GSEXXXXXX")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"GSMXXXXXX")," accessions to include in the manuscript."),(0,n.kt)("li",{parentName:"ol"},"Update the manuscript with the GEO accessions",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"This typically means including the study (",(0,n.kt)("inlineCode",{parentName:"li"},"GSEXXXXXX"),") accession in the Methods or Data Access section and the specific samples (",(0,n.kt)("inlineCode",{parentName:"li"},"GSMXXXXXX"),") in the extended methods tables. The accessions of reanalyzed data from previously published samples should be similarly included."))),(0,n.kt)("li",{parentName:"ol"},"Update Github repo with accession information"),(0,n.kt)("li",{parentName:"ol"},"Update PEGR projects with accession information"),(0,n.kt)("li",{parentName:"ol"},"When the paper is accepted and a publication date is set, you should notify GEO so they can coordinate with the journal to release the data with the manuscript.")),(0,n.kt)("h2",{id:"github"},"Github"),(0,n.kt)("p",null,"For each publication, we make the analysis and reference files available on Github in a publication-specific repository to ensure the reproducibility of our findings."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Please follow the naming convention of previous publication repos!!!")," Once a repository is named, it is difficult to change."),(0,n.kt)("h3",{id:"organization-of-the-repo"},"Organization of the Repo"),(0,n.kt)("p",null,"You can reference ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/CEGRcode/2022-Mittal_SAGA"},"previous publication repos")," as a starting point for how to organize your BED files and code. This should fit most needs but you may opt to adjust the directory structure to suit specific needs."),(0,n.kt)("p",null,"It is critical that your repo includes a ",(0,n.kt)("inlineCode",{parentName:"p"},"README.md")," file in the root level formatted to be consistent with the other publication repos. This includes:"),(0,n.kt)("ul",{className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Title of manuscript"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Author list"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Affiliations"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Correspondence"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Resources (e.g. STENCIL instance) w/ links"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","PMID accession w/ link"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","GEO accession w/ link"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Abstract"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Brief description of directory structure")),(0,n.kt)("h2",{id:"stencil"},"STENCIL"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Coming soon!"),"\nCreate a ",(0,n.kt)("a",{parentName:"p",href:"https://pughlab.mbg.cornell.edu/stencil/"},"STENCIL")," instance for each publication to organize and track supplementary analyses."),(0,n.kt)("h2",{id:"after-publication"},"After publication"),(0,n.kt)("p",null,"When you have a PMID for the new manuscript, go through and once more check..."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Github",(0,n.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","PMID linked"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,n.kt)("inlineCode",{parentName:"li"},"GSEXXXXXX")," linked"))),(0,n.kt)("li",{parentName:"ul"},"PEGR projects (all three)",(0,n.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","PMID linked"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,n.kt)("inlineCode",{parentName:"li"},"GSEXXXXXX")," linked"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","all other accessions and info (SRA, DOI, PMC, ...)"))),(0,n.kt)("li",{parentName:"ul"},"GEO Submission",(0,n.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Data is public"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","PMID is linked"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","test downloads are working"))),(0,n.kt)("li",{parentName:"ul"},"Box",(0,n.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Clean up files and archive under appropriate directory (",(0,n.kt)("inlineCode",{parentName:"li"},"03_Disclosures/4_Manuscripts/4_Published/..."),")"))),(0,n.kt)("li",{parentName:"ul"},"Advertise!",(0,n.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Fill in ",(0,n.kt)("a",{parentName:"li",href:"https://www.yeastgenome.org/submitData"},"Submit Data form")," on SGD's website (makes sure paper is prioritized in curation)"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Consider writing a summary of the work for SGD to write a ",(0,n.kt)("a",{parentName:"li",href:"https://www.yeastgenome.org/blog/category/research-spotlight"},"Research Spotlight")," on the paper"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Tweet about it ",(0,n.kt)("a",{parentName:"li",href:"https://twitter.com/thepughlab?lang=en"},"@ThePughLab")),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Update Frank/Will's ",(0,n.kt)("a",{parentName:"li",href:"https://www.ncbi.nlm.nih.gov/sites/myncbi/benjamin.pugh.1/bibliography/40517395/public/?sort=date&direction=descending"},"My Bibliography")),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Update ",(0,n.kt)("a",{parentName:"li",href:"http://pughlab.mbg.cornell.edu/"},"Lab Website")," as appropriate")))))}u.isMDXComponent=!0}}]);