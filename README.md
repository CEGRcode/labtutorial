# lab_tutorial


This is a Penn State BMB lab IT tutorial page for Galaxy, Planemo, PEGR, and Grails Groovy.
Mkdocs version: 0.17.3
Last Modified: June 7, 2018

Steps to Publish Mkdocs on GitHub Page:

1. Clone the repository:
github clone __repository_github_url__

1. Checkout the master branch
github checkout master

2. Build the site
mkdocs build

3. Add content and push

git add index.html
git commit -a -m "First commit"
git push origin master

3. Deploy the site on GitHub
mkdocs gh-deploy
