### Viewing this website

Go to http://pughlab.mbg.cornell.edu/labtutorial/

### Updating this website

Add new *.md files to the `docs/` directory when you want to add a new page. Most Docusaurus syntax is rendered by Github flavor markdown so you can try editing files in the github.com browser using the "Preview" option to check syntax.

However, to confirm the changes render properly and to deploy the changes to the live website, you should clone the repository and follow the instructions below.
- Local Deployment - quick development and fast local rendering of website at http://localhost:3000/labtutorial/
- Build - must be run before deploying, creates static files under `build/` directory
- Serve - test the static build files before deployment
- Deploy - update the live website with this latest build

---

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ npm install
```

### Local Development

```
$ npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Serve

```
$ npm run serve
```

This command serves the static content from the `build` directory and can be used to check that the site renders properly before deployment.


### Deployment

```
$ USE_SSH=true
$ GIT_USER=<Your GitHub username> GIT_PASS=<Your GitHub personal access token> npm run deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
