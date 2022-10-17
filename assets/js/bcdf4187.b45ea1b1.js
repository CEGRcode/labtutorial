"use strict";(self.webpackChunklabtutorial=self.webpackChunklabtutorial||[]).push([[705],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=i,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5079:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(7462),i=(n(7294),n(3905));const r={id:"frontend-dev",title:"Frontend Deployment",sidebar_position:5},o=void 0,l={unversionedId:"frontend-dev",id:"frontend-dev",title:"Frontend Deployment",description:"Instructions to deploy web apps built using ReactJS on PSU's VM hosting servers.",source:"@site/docs/Frontend Deployment.md",sourceDirName:".",slug:"/frontend-dev",permalink:"/labtutorial/frontend-dev",draft:!1,tags:[],version:"current",lastUpdatedBy:"owlang",lastUpdatedAt:1666028224,formattedLastUpdatedAt:"Oct 17, 2022",sidebarPosition:5,frontMatter:{id:"frontend-dev",title:"Frontend Deployment",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Cornell's CAC server setup",permalink:"/labtutorial/cac"},next:{title:"Backend Deployment",permalink:"/labtutorial/backend-deployment"}},p={},s=[{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Deploying React Apps",id:"deploying-react-apps",level:2},{value:"Local App Development",id:"local-app-development",level:4},{value:"Generating a build to deploy the website on MARS with API on Pluto",id:"generating-a-build-to-deploy-the-website-on-mars-with-api-on-pluto",level:4},{value:"Apache WebAccess configuration",id:"apache-webaccess-configuration",level:2},{value:"Ignoring your Website from WebAccess",id:"ignoring-your-website-from-webaccess",level:2},{value:"Testing Website&#39;s performance",id:"testing-websites-performance",level:2},{value:"Docker &amp; Docker deployment",id:"docker--docker-deployment",level:2},{value:"Learn More",id:"learn-more",level:2}],c={toc:s};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Instructions to deploy web apps built using ",(0,i.kt)("inlineCode",{parentName:"p"},"ReactJS")," on PSU's VM hosting servers."),(0,i.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Install the latest stable release of ",(0,i.kt)("a",{parentName:"li",href:"https://nodejs.org/en/"},"Node.js"))),(0,i.kt)("h2",{id:"deploying-react-apps"},"Deploying React Apps"),(0,i.kt)("p",null,"All the react based projects were bootstrapped with ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebook/create-react-app"},"Create React App"),". This includes ",(0,i.kt)("a",{parentName:"p",href:"https://mars.vmhost.psu.edu/yep/"},"YEP"),", ",(0,i.kt)("a",{parentName:"p",href:"https://mars.vmhost.psu.edu/pcrp/"},"PCRP")," and any app created using the cookie-cutter template on github."),(0,i.kt)("h4",{id:"local-app-development"},"Local App Development"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# clone the project repo\ngit clone <project_repo>\n\n# change your directory\ncd <project_repo>\n\n# install dependencies\nnpm install\n\n# start a local development server.\nnpm start\n")),(0,i.kt)("p",null,"Above steps are sufficient to setup a working copy on your local machine to start extending the frontend applications. To deploy the app, we need to compile the application to generate a ",(0,i.kt)("inlineCode",{parentName:"p"},"build/")," directory."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://facebook.github.io/create-react-app/"},"Create React App")," comes with ",(0,i.kt)("a",{parentName:"p",href:"https://webpack.js.org/"},"webpack"),", a package bundler, pre-configured to generate the necessary files for deployment."),(0,i.kt)("p",null,"Below instructions are adapted from official deployment ",(0,i.kt)("a",{parentName:"p",href:"https://facebook.github.io/create-react-app/docs/deployment"},"docs")," and assumes you already have ",(0,i.kt)("inlineCode",{parentName:"p"},"Apache")," web server set up & configured on the server."),(0,i.kt)("h4",{id:"generating-a-build-to-deploy-the-website-on-mars-with-api-on-pluto"},"Generating a build to deploy the website on MARS with API on Pluto"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add below line into your ",(0,i.kt)("inlineCode",{parentName:"li"},"package.json")," file. ",(0,i.kt)("inlineCode",{parentName:"li"},"/yep")," is where your website will be deployed to on the server. you can choose any name based on your project. Make sure it is consistent with everything that follows.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'"homepage": "https://mars.vmhost.psu.edu/yep",\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Change your React app configuration in ",(0,i.kt)("inlineCode",{parentName:"li"},"Config.js")," , to contain settings similar as below. These settings change based on where you decide to host your backend  and frontend.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'const settings = {\n    "apiURL" : "https://pluto.vmhost.psu.edu:8081",\n    "appURL" : "https://mars.vmhost.psu.edu/yep",\n    "siteAvailability" : "private",\n    "samplesEndpoint" : "/reviewSamples",\n    "aliasesEndpoint" : "/aliases",\n    "sgdEndpoint" : "/sgdInfo",\n    "trackHubPrefix" : "http://genome.ucsc.edu/cgi-bin/hgTracks?db=sacCer3&hubUrl=http://www.bx.psu.edu/~giardine/yepHub/hub2/hub.txt&textSize=12&sgdGene=dense&hgt.labelWidth=25&centerLabels=off&position=chrI%3A0-230218"\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Inside ",(0,i.kt)("inlineCode",{parentName:"li"},"app.js"),", add the router configuration to use the ",(0,i.kt)("inlineCode",{parentName:"li"},"/yep")," as the project path. This is necessary so that the app can correctly resolve internal URLs and path.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},' <BrowserRouter basename="/yep">\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Make sure you have the ",(0,i.kt)("inlineCode",{parentName:"li"},".htaccess")," file inside the ",(0,i.kt)("inlineCode",{parentName:"li"},"public/")," folder of your project. Otherwise, create one and add below directives.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Options -MultiViews\nRewriteEngine On\nRewriteCond %{REQUEST_FILENAME} !-f\nRewriteRule ^ index.html [QSA,L]\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Compile the app to create the ",(0,i.kt)("inlineCode",{parentName:"li"},"build/")," folder using the below command.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'\x3c!-- generate a build --\x3e\nnpm run build\n\n\x3c!-- rename the directory --\x3e\n"build/" to "yep/"\n\n\x3c!-- Login to the server --\x3e\nssh mars.vmhost.psu.edu -p 1855\n\n\x3c!-- stop apache --\x3e\nsudo systemctl httpd stop\n\n\x3c!-- move the previous build to archive, if it exists --\x3e\ncd /var/www/html\nmv yep/ WEBSITE_ARCHIVE/yep_<YY_MM_DD>\n\n\x3c!-- copy your yep/ directory to MARS at `/var/www/html` --\x3e\nusing FileZilla or scp ( your choice.)\n\n\x3c!-- Restart apache --\x3e\nsudo systemctl httpd start\n\n')),(0,i.kt)("h2",{id:"apache-webaccess-configuration"},"Apache WebAccess configuration"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"All websites use ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ReactTraining/react-router"},"react-router"),", a Client-side routing library. Hence, requires some server configuration (for both apache and nginx) before deploying to production. Here is an explanation from ",(0,i.kt)("a",{parentName:"li",href:"https://create-react-app.dev/docs/deployment#serving-apps-with-client-side-routing"}," Official react deployment docs")),(0,i.kt)("li",{parentName:"ul"},"Apart from the above mentioned configuration, since ",(0,i.kt)("inlineCode",{parentName:"li"},"VMhost")," servers at ",(0,i.kt)("inlineCode",{parentName:"li"},"PSU")," enable ",(0,i.kt)("inlineCode",{parentName:"li"},"webaccess")," (sometimes by default ) and the way ",(0,i.kt)("inlineCode",{parentName:"li"},"apache")," is set up by default has some restrictions in using ",(0,i.kt)("inlineCode",{parentName:"li"},".htaccess")," file that is included with these websites."),(0,i.kt)("li",{parentName:"ul"},"Below are the steps to configure ",(0,i.kt)("inlineCode",{parentName:"li"},"apache")," on your ",(0,i.kt)("inlineCode",{parentName:"li"},"vm")," to make an exception for this website to use ",(0,i.kt)("inlineCode",{parentName:"li"},".htaccess")," files.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\x3c!-- stop the apache server --\x3e\nsudo service httpd stop\n\n\x3c!-- check the status of your apache server (to check if it is stopped) --\x3e\nsudo service httpd status\n\n\x3c!-- edit the httpd (apache's) configuration (usually located at below location) --\x3e\ncd /etc/httpd/conf/\nsudo nano httpd.conf\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Look for the lines such as below, in the ",(0,i.kt)("inlineCode",{parentName:"li"},"httpd.conf"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'# Further relax access to the default document root:\n<Directory "/var/www/html">\n    #\n    # Possible values for the Options directive are "None", "All",\n    # or any combination of:\n    #   Indexes Includes FollowSymLinks SymLinksifOwnerMatch ExecCGI MultiViews\n    #\n    # Note that "MultiViews" must be named *explicitly* --- "Options All"\n    # doesn\'t give it to you.\n    #\n    # The Options directive is both complicated and important.  Please see\n    # http://httpd.apache.org/docs/2.4/mod/core.html#options\n    # for more information.\n    #\n    Options Indexes MultiViews FollowSymLinks\n\n    #\n    # AllowOverride controls what directives may be placed in .htaccess files.\n    # It can be "All", "None", or any combination of the keywords:\n    #   Options FileInfo AuthConfig Limit\n    #\n    AllowOverride None\n\n    #\n    # Controls who can get stuff from this server.\n    #\n    Require all granted\n\n</Directory>\n\n')),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"What is happening in the above directive is that, ",(0,i.kt)("inlineCode",{parentName:"em"},".htaccess")," files are being suppressed within each subfolder in ",(0,i.kt)("inlineCode",{parentName:"em"},"apache"),"'s root directory. for example, in the apache root directory, which is ",(0,i.kt)("inlineCode",{parentName:"em"},"/var/www/html"),"  you have a folder called ",(0,i.kt)("inlineCode",{parentName:"em"},"my_website")," then the ",(0,i.kt)("inlineCode",{parentName:"em"},".htaccess")," file within this folder is being ignored.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Now add these directives into ",(0,i.kt)("inlineCode",{parentName:"li"},"httpd.conf")," ",(0,i.kt)("strong",{parentName:"li"},"AFTER")," the above directives, to allow apache to read ",(0,i.kt)("inlineCode",{parentName:"li"},".htaccess")," in our website's folder.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"<Directory /var/www/html/yep>\n    Options Indexes FollowSymLinks\n    AllowOverride All\n    Require all granted\n</Directory>\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Start the server and you should have your website up and running."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sudo service httpd start")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Website should be live at : ",(0,i.kt)("inlineCode",{parentName:"p"},"https://mars.vmhost.psu.edu/yep/")))),(0,i.kt)("h2",{id:"ignoring-your-website-from-webaccess"},"Ignoring your Website from WebAccess"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add these directives to ",(0,i.kt)("inlineCode",{parentName:"li"},"httpd.conf"),". Make sure you modify ",(0,i.kt)("inlineCode",{parentName:"li"},"/yep")," in the below directives based on the folder name you are trying to exclude from WebAccess.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"<Location /yep>\n    CosignProtected On\n    CosignAllowPublicAccess On\n    AuthType Cosign\n    #Require valid-user\n    Allow from all\n    Satisfy any\n</Location>\n")),(0,i.kt)("h2",{id:"testing-websites-performance"},"Testing Website's performance"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use Google's ",(0,i.kt)("a",{parentName:"li",href:"https://developers.google.com/web/tools/lighthouse"},"Lighthouse")," to improve quality of your web app."),(0,i.kt)("li",{parentName:"ul"},"Go to ",(0,i.kt)("a",{parentName:"li",href:"https://www.webpagetest.org/"},"WebPageTest")," and plug in the URL to run common performance tests."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://youtu.be/pOynMwTyRgQ"},"Chrome Developer video")," (8:14) for a demo of this tool in action.")),(0,i.kt)("h2",{id:"docker--docker-deployment"},"Docker & Docker deployment"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Building a Docker Image")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Before building an image, you need change the app configuration specific to Docker: ",(0,i.kt)("inlineCode",{parentName:"li"},"Config.js"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'const settings = {\n    "apiURL" : "http://localhost:8080",\n    "appURL" : "http://localhost:3000",\n    "siteAvailability" : "private",\n    "samplesEndpoint" : "/reviewSamples",\n    "aliasesEndpoint" : "/aliases",\n    "sgdEndpoint" : "/sgdInfo",\n    "trackHubPrefix" : "http://genome.ucsc.edu/cgi-bin/hgTracks?db=sacCer3&hubUrl=http://www.bx.psu.edu/~giardine/yepHub/hub2/hub.txt&textSize=12&sgdGene=dense&hgt.labelWidth=25&centerLabels=off&position=chrI%3A0-230218"\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Compile and create the ",(0,i.kt)("inlineCode",{parentName:"li"},"build/"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"npm run build")))),(0,i.kt)("li",{parentName:"ul"},"Once you have the app configured, build the image locally",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"docker build --tag=yepfrontend .")))),(0,i.kt)("li",{parentName:"ul"},"Tag the image before pushing it to ",(0,i.kt)("a",{parentName:"li",href:"https://hub.docker.com/"},(0,i.kt)("inlineCode",{parentName:"a"},"Dockerhub")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"docker tag <image-name> username/repository:versiontag")),(0,i.kt)("li",{parentName:"ul"},"example : ",(0,i.kt)("inlineCode",{parentName:"li"},"docker tag yepfrontend prashantkuntala/yepfrontend:v1.0")))),(0,i.kt)("li",{parentName:"ul"},"Login to Dockerhub",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"docker login")))),(0,i.kt)("li",{parentName:"ul"},"Push the Image",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"docker push username/repository:versiontag")),(0,i.kt)("li",{parentName:"ul"},"example : ",(0,i.kt)("inlineCode",{parentName:"li"},"docker push prashantkuntala/yepfrontend:v1.0"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Inspecting Docker Images that are available on Dockerhub")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Go to ",(0,i.kt)("a",{parentName:"li",href:"https://microbadger.com/"},"MicroBadger")," and paste any image name available on Dockerhub to inspect it.")),(0,i.kt)("h2",{id:"learn-more"},"Learn More"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://facebook.github.io/create-react-app/docs/getting-started"},"Create React App documentation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Code Splitting:")," ",(0,i.kt)("a",{parentName:"li",href:"https://facebook.github.io/create-react-app/docs/code-splitting"},"https://facebook.github.io/create-react-app/docs/code-splitting")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Analyzing the Bundle Size:")," ",(0,i.kt)("a",{parentName:"li",href:"https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size"},"https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Making a Progressive Web App:")," ",(0,i.kt)("a",{parentName:"li",href:"https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app"},"https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Advanced Configuration:")," ",(0,i.kt)("a",{parentName:"li",href:"https://facebook.github.io/create-react-app/docs/advanced-configuration"},"https://facebook.github.io/create-react-app/docs/advanced-configuration")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Deployment: "),(0,i.kt)("a",{parentName:"li",href:"https://facebook.github.io/create-react-app/docs/deployment"},"https://facebook.github.io/create-react-app/docs/deployment")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"npm run build")," fails to minify : ",(0,i.kt)("a",{parentName:"li",href:"https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify"},"https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify"))))}d.isMDXComponent=!0}}]);