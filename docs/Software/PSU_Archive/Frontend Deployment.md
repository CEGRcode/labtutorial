---
id: frontend-dev
title: Frontend Deployment
sidebar_position: 5
---

:::warning
This page includes the outdated instructions for deploying STENCIL instances on the Penn State University systems.
:::

Instructions to deploy web apps built using `ReactJS` on PSU's VM hosting servers.

## Pre-requisites

- Install the latest stable release of [Node.js](https://nodejs.org/en/)

## Deploying React Apps

All the react based projects were bootstrapped with [Create React App](https://github.com/facebook/create-react-app). This includes [YEP](https://mars.vmhost.psu.edu/yep/), [PCRP](https://mars.vmhost.psu.edu/pcrp/) and any app created using the cookie-cutter template on github.

#### Local App Development

```
# clone the project repo
git clone <project_repo>

# change your directory
cd <project_repo>

# install dependencies
npm install

# start a local development server.
npm start
```

Above steps are sufficient to setup a working copy on your local machine to start extending the frontend applications. To deploy the app, we need to compile the application to generate a `build/` directory.

[Create React App](https://facebook.github.io/create-react-app/) comes with [webpack](https://webpack.js.org/), a package bundler, pre-configured to generate the necessary files for deployment.

Below instructions are adapted from official deployment [docs](https://facebook.github.io/create-react-app/docs/deployment) and assumes you already have `Apache` web server set up & configured on the server.

#### Generating a build to deploy the website on MARS with API on Pluto

- Add below line into your `package.json` file. `/yep` is where your website will be deployed to on the server. you can choose any name based on your project. Make sure it is consistent with everything that follows.

```
"homepage": "https://mars.vmhost.psu.edu/yep",
```

- Change your React app configuration in `Config.js` , to contain settings similar as below. These settings change based on where you decide to host your backend  and frontend.

```
const settings = {
    "apiURL" : "https://pluto.vmhost.psu.edu:8081",
    "appURL" : "https://mars.vmhost.psu.edu/yep",
    "siteAvailability" : "private",
    "samplesEndpoint" : "/reviewSamples",
    "aliasesEndpoint" : "/aliases",
    "sgdEndpoint" : "/sgdInfo",
    "trackHubPrefix" : "http://genome.ucsc.edu/cgi-bin/hgTracks?db=sacCer3&hubUrl=http://www.bx.psu.edu/~giardine/yepHub/hub2/hub.txt&textSize=12&sgdGene=dense&hgt.labelWidth=25&centerLabels=off&position=chrI%3A0-230218"
}
```

- Inside `app.js`, add the router configuration to use the `/yep` as the project path. This is necessary so that the app can correctly resolve internal URLs and path.

```
 <BrowserRouter basename="/yep">
```

- Make sure you have the `.htaccess` file inside the `public/` folder of your project. Otherwise, create one and add below directives.

```
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QSA,L]
```

- Compile the app to create the `build/` folder using the below command.

```
<!-- generate a build -->
npm run build

<!-- rename the directory -->
"build/" to "yep/"

<!-- Login to the server -->
ssh mars.vmhost.psu.edu -p 1855

<!-- stop apache -->
sudo systemctl httpd stop

<!-- move the previous build to archive, if it exists -->
cd /var/www/html
mv yep/ WEBSITE_ARCHIVE/yep_<YY_MM_DD>

<!-- copy your yep/ directory to MARS at `/var/www/html` -->
using FileZilla or scp ( your choice.)

<!-- Restart apache -->
sudo systemctl httpd start

```

## Apache WebAccess configuration

- All websites use [react-router](https://github.com/ReactTraining/react-router), a Client-side routing library. Hence, requires some server configuration (for both apache and nginx) before deploying to production. Here is an explanation from [ Official react deployment docs](https://create-react-app.dev/docs/deployment#serving-apps-with-client-side-routing)
- Apart from the above mentioned configuration, since `VMhost` servers at `PSU` enable `webaccess` (sometimes by default ) and the way `apache` is set up by default has some restrictions in using `.htaccess` file that is included with these websites.
- Below are the steps to configure `apache` on your `vm` to make an exception for this website to use `.htaccess` files.

```
<!-- stop the apache server -->
sudo service httpd stop

<!-- check the status of your apache server (to check if it is stopped) -->
sudo service httpd status

<!-- edit the httpd (apache's) configuration (usually located at below location) -->
cd /etc/httpd/conf/
sudo nano httpd.conf
```

- Look for the lines such as below, in the `httpd.conf`

```
# Further relax access to the default document root:
<Directory "/var/www/html">
    #
    # Possible values for the Options directive are "None", "All",
    # or any combination of:
    #   Indexes Includes FollowSymLinks SymLinksifOwnerMatch ExecCGI MultiViews
    #
    # Note that "MultiViews" must be named *explicitly* --- "Options All"
    # doesn't give it to you.
    #
    # The Options directive is both complicated and important.  Please see
    # http://httpd.apache.org/docs/2.4/mod/core.html#options
    # for more information.
    #
    Options Indexes MultiViews FollowSymLinks

    #
    # AllowOverride controls what directives may be placed in .htaccess files.
    # It can be "All", "None", or any combination of the keywords:
    #   Options FileInfo AuthConfig Limit
    #
    AllowOverride None

    #
    # Controls who can get stuff from this server.
    #
    Require all granted

</Directory>

```

*What is happening in the above directive is that, `.htaccess` files are being suppressed within each subfolder in `apache`'s root directory. for example, in the apache root directory, which is `/var/www/html`  you have a folder called `my_website` then the `.htaccess` file within this folder is being ignored.*

- Now add these directives into `httpd.conf` **AFTER** the above directives, to allow apache to read `.htaccess` in our website's folder.

```
<Directory /var/www/html/yep>
    Options Indexes FollowSymLinks
    AllowOverride All
    Require all granted
</Directory>
```

- Start the server and you should have your website up and running.
    - `sudo service httpd start`

- Website should be live at : `https://mars.vmhost.psu.edu/yep/`

## Ignoring your Website from WebAccess

- Add these directives to `httpd.conf`. Make sure you modify `/yep` in the below directives based on the folder name you are trying to exclude from WebAccess.

```
<Location /yep>
    CosignProtected On
    CosignAllowPublicAccess On
    AuthType Cosign
    #Require valid-user
    Allow from all
    Satisfy any
</Location>
```

## Testing Website's performance

- Use Google's [Lighthouse](https://developers.google.com/web/tools/lighthouse) to improve quality of your web app.
- Go to [WebPageTest](https://www.webpagetest.org/) and plug in the URL to run common performance tests.
- [Chrome Developer video](https://youtu.be/pOynMwTyRgQ) (8:14) for a demo of this tool in action.

## Docker & Docker deployment

**Building a Docker Image**

- Before building an image, you need change the app configuration specific to Docker: `Config.js`

```
const settings = {
    "apiURL" : "http://localhost:8080",
    "appURL" : "http://localhost:3000",
    "siteAvailability" : "private",
    "samplesEndpoint" : "/reviewSamples",
    "aliasesEndpoint" : "/aliases",
    "sgdEndpoint" : "/sgdInfo",
    "trackHubPrefix" : "http://genome.ucsc.edu/cgi-bin/hgTracks?db=sacCer3&hubUrl=http://www.bx.psu.edu/~giardine/yepHub/hub2/hub.txt&textSize=12&sgdGene=dense&hgt.labelWidth=25&centerLabels=off&position=chrI%3A0-230218"
}
```

- Compile and create the `build/`
    - `npm run build`
- Once you have the app configured, build the image locally
    - `docker build --tag=yepfrontend .`
- Tag the image before pushing it to [`Dockerhub`](https://hub.docker.com/)
    - `docker tag <image-name> username/repository:versiontag`
    - example : `docker tag yepfrontend prashantkuntala/yepfrontend:v1.0`
- Login to Dockerhub
    - `docker login`
- Push the Image
    - `docker push username/repository:versiontag`
    - example : `docker push prashantkuntala/yepfrontend:v1.0`

**Inspecting Docker Images that are available on Dockerhub**

- Go to [MicroBadger](https://microbadger.com/) and paste any image name available on Dockerhub to inspect it.

## Learn More

- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- `Code Splitting:` https://facebook.github.io/create-react-app/docs/code-splitting
- `Analyzing the Bundle Size:` https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size
- `Making a Progressive Web App:` https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app
- `Advanced Configuration:` https://facebook.github.io/create-react-app/docs/advanced-configuration
- `Deployment: `https://facebook.github.io/create-react-app/docs/deployment
- `npm run build` fails to minify : https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
