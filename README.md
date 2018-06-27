# lab_tutorial


This is a Penn State BMB lab IT tutorial page for Galaxy, Planemo, PEGR, and Grails Groovy.

You can find the live site on the github page: https://cegrcode.github.io/labtutorial/

Mkdocs version: 0.17.3
Last Modified: June 7, 2018

Steps to Build & Publish Mkdocs on GitHub Page:

1. Clone the repository:
    github clone __repository_github_url__

2. Checkout the master branch
    github checkout master

3. Make changes

4. Add content and push
    git add index.html
    git commit -a -m "First commit"
    git push origin master

5. Build the site
    mkdocs build

6. Run the site on your local host
    mkdocs serve # will run on http://127.0.0.1:8000/

    If you need to make further changes, repeat steps 3-6.

7. Deploy the site on GitHub
    mkdocs gh-deploy
