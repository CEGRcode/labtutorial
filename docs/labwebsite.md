# Pugh lab website at Cornell

The current lab website at Cornell is built using [jekyll](https://jekyllrb.com/) and hosted through [GitHub pages](https://pages.github.com/).

> Ask Gretta regarding domain name and dns related details.

#### What is jekyll ?

Jekyll is a static site generator. It takes text written in your favorite markup language and uses layouts to create a static website. You can tweak the site’s look and feel, URLs, the data displayed on the page, and more.

There are many static site generators available both free and paid. Each comes with its pros and cons. Choosing a particular generator is mostly based on user's technical knowledge, features, ease of deployment, programming (development) language and community support, used by large open-source projects, etc. Here are some other static site generators : [MkDocs](https://www.mkdocs.org/), [Docusaurus](https://docusaurus.io/), [more](https://jamstack.org/generators/)

#### Why jekyll ?

GitHub is built partly using [Ruby-on-Rails](https://rubyonrails.org/) web framework and Jekyll is natively supported by GitHub pages. The reason being both are based on [Ruby](https://www.ruby-lang.org/en/) programming language. Jekyll uses ruby under the hood to process and generate the final static website. **You don't need to learn `ruby` in order to use `jekyll`.**

#### Install Jekyll

Install jekyll using these [docs ](https://jekyllrb.com/docs/installation/). Highly recommend going through this [tutorial](https://jekyllrb.com/docs/step-by-step/01-setup/) before making any changes to the lab website. This tutorial is helpful to understand the folder structure. Be a good programmer and rely on the official documentation for all use-cases. Everything you need for reference on Jekyll is [here](https://jekyllrb.com/docs/)

#### Who you are ?
You are a grad student, postdoc or computational staff having basic knowledge on web technologies (HTML5, CSS3, JS), GitHub and markdown.

#### Making changes to the Pugh lab website

> you need to be part of the CEGRcode GitHub organization and have `git push` authorization to make any changes to the website.

- Clone the `cegrcode.github.io` repo.
- Make your changes to one or more pages. Here is [jekyll docs](https://jekyllrb.com/docs/)
- Commit your changes locally using `git add .` and then `git commit -m ` and add your commit message.
- push your changes to GitHub `master branch`. GitHub builds and deploys the changes.
- See the latest deployment under `Environments` section on the right side of the repo.

> GitHub repo for the lab website is configured to build and deploy the website automatically on git push to the master branch. There is no need of creating additional branches, merge-pull cycle for this repo.
