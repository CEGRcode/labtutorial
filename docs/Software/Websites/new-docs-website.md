---
id: new-docs-website
title: New Documentation Website
sidebar_label: New Website (docs)
---

For consistency, any new tools that need a website for documentation will be hosted on [Github Pages][github-pages] and powered by [Docusaurus][docusaurus] unless there is a specific reason not to. It is much easier to maintain these websites if they follow a standard structure.

## Github organization
Some rules when adding your website to Github:
* **Make a separate repo for the website**
  * Do not put your website source in the tool's repository. We are no longer doing that.
  * A shared repo makes the repo heavier to clone and users don't care about the website source code.
* **Repo naming convention** -- make a public repo named `ToolRepoName-docs`
  * See [scriptmanager-docs][gh-scriptmanager-docs] and [GenoPipe-docs][gh-genopipe-docs] for examples of this naming convention
  * Notice these repo names exactly matched the tool repo name in a **case-sensitive** manner
  * This helps search-ability in our organization's repo when documentation websites and the tool come up together
* **Repo must be public** to host on [Github Pages][github-pages]

:::note
If you create the website repo, you should have all the appropriate security permissions to deploy the website through Github Actions (via Docusaurus's deployment commands).

However, if someone else needs to deploy the website, you may need to upgrade their access permissions such that they can use Github Actions for the specific repo.
:::


## Getting started
Olivia likes to install Docusaurus's `nodejs` dependency using [conda][conda-tutorial] and then initializing a fresh website according to the [Docusaurus installation instructions][docusaurus-install].

```
conda create -n docusaurus -c conda-forge nodejs
conda activate docusaurus
npx create-docusaurus@latest MyTool-docs classic
```

## Docusaurus Website design

Feel free to recycle code from our current documentation websites, especially the `docusaurus.config.js` file.
* Use standard footer (configured in `docusaurus.config.js`)
  * Include the same "Community" and "Other Tools We Develop" linkouts and the Pugh Lab logo
  * This improves connectivity between our resources and is good branding practice
* Consider using the timestamp and authorship note feature in Docusaurus (configured in `docusaurus.config.js`)
  * https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs#showLastUpdateAuthor
* Create a logo for every tool (fun undergraduate student assignment)
* Github logo link in upper right (configured in `docusaurus.config.js` and `src/css/custom.css`)
  * See [scriptmanager-docs][gh-scriptmanager-docs] and [GenoPipe-docs][gh-genopipe-docs] for example
  * `src/css/custom.css` -- copy the `.header-github-link` and `.header-github-link` class definitions
  * `docusaurus.config.js` -- copy the Github link navbar element and update the `href` link
* If you want to use [FontAwesome][fontawesome] icons or LaTeX style equations (configured in `docusaurus.config.js`)
  * `docusaurus.config.js` -- copy the `stylesheets` list
  * may also need to do some `npm install` commands for the LaTeX style equations
  * [Example scriptmanager-docs LaTeX style equations][latex-style-eg]



[conda-tutorial]:/docs/Computational/condatutorial
[docusaurus-install]:https://docusaurus.io/docs/installation
[github-pages]:https://pages.github.com/
[docusaurus]:https://docusaurus.io/
[fontawesome]:https://fontawesome.com/search
[latex-style-eg]:http://pughlab.mbg.cornell.edu/scriptmanager-docs/docs/figure-generation/heatmap#details-of-color-scaling-strategy

[gh-genopipe-docs]:https://github.com/CEGRcode/GenoPipe-docs
[gh-scriptmanager-docs]:https://github.com/CEGRcode/scriptmanager-docs

[genopipe-docs]:https://pughlab.mbg.cornell.edu/GenoPipe-docs/
[labtutorial]:https://pughlab.mbg.cornell.edu/labtutorial/
[pughlab-website]:https://pughlab.mbg.cornell.edu
[scriptmanager-docs]:https://pughlab.mbg.cornell.edu/scriptmanager-docs/
[stencil-docs]:http://pughlab.mbg.cornell.edu/stencil/
