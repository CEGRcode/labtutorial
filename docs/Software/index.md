---
id: index
title: Dry Bench Introduction
sidebar_label: Dry Bench Introduction
sidebar_position: 1
---

This section contains installation guides to setup primary software packages and development infrastructure for the Pugh/Lai labs.

Every graduate student (WET AND DRY) in the lab will need to perform bioinformatic analysis at some point. Referencing these guides sooner rather than later can SAVE YOU AND THE DRY-BENCH MEMBERS OF THE LAB A LOT OF TIME.


## For wet-bench scientists

We have built infrastructure and tools in the lab to help you with analyzing your genomic datasets. Please reference the following links
- What is Galaxy?
- What is PEGR?
- Install Hombrew & Anaconda3
-

|Project | Wet-bench scientist | Dry-bench scientist | Undergraduate Researcher |
| ---- | ---- | ---- | ---- |
| Galaxy | user | user/dev | - |
| PEGR | user | user/dev | - |


#### Who you are ?
You are a grad student, postdoc or computational staff having basic knowledge on web technologies (HTML5, CSS3, JS), GitHub and markdown.

## Infrastructure Details

The lab takes advantage of [GALAXY](https://galaxyproject.github.io/) to create data analysis & visualization pipelines for large-scale data processing on the [ACI-ICS](https://ics.psu.edu/about/) clusters and also leverages [ACCESS (fromerly XSEDE)](https://allocations.access-ci.org/) resources for compute requirements.

For day to day bioinformatics, install & start using [ScriptManager.](http://pughlab.mbg.cornell.edu/scriptmanager/)

|ICS-ACI Resource URL|
|----|
|[Account Setup](https://ics.psu.edu/computing-services/account-setup/) |
|[User's Guide](https://ics.psu.edu/computing-services/ics-aci-user-guide/)|

_Make sure you are added to the PughLab ACI allocations and relevant group space once you get an ACI account._

## Software Stacks

Below are some the Web development stacks being used in the lab.

|Project | Abbreviation | Stack |
|----|----|----|
| [Yeast Epigenome Project](http://www.yeastepigenome.org/) | YEP | MERN |
| [Protein Capture Reagent Program Validation](http://www.pcrpvalidation.org/) | PCRP | MERN |
| [Platform for Epigenetic and Genomic Research](http://www.pegr.org) | PEGR | [MySql](https://www.mysql.com/), [Grails](https://grails.org/), [Groovy](https://groovy-lang.org/) |

- MERN Stack is made up of [MongoDB](https://www.mongodb.com/), [Express](https://expressjs.com/), [React](https://reactjs.org/), [NodeJS](https://nodejs.org/en/)

- For more project repositories, go to PughLab's [GitHub](https://github.com/CEGRcode)

#### Development Tools

- Install the missing package manager for macOS : [`Homebrew`](https://brew.sh/)
- Command line tools using Xcode, paste this command in a terminal :  `xcode-select --install`
- For `Python3` & `Python2.x` development, download & install [Anaconda](https://www.anaconda.com/)
- Install `Java8.x` and `Java JDK` before you download the latest release of [ScriptManager](https://github.com/CEGRcode/scriptmanager/releases)

## Tutorials & Reading Material

- Understanding Shell scripts, Markdown, Git and start using ACI clusters.
    - [PSU Biostars Bootcamp #day2](https://bootcamp.biostars.io/#day2)
- Beginner Web Development tutorials [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/Tutorials)
    - Web technologies at a glance.
        - [HTML](https://www.tutorialspoint.com/html5/)
        - [CSS](https://www.tutorialspoint.com/css/)
        - [Javascript](https://www.tutorialspoint.com/javascript)    
- Understanding React
    - [Why did they build React ?](https://reactjs.org/blog/2013/06/05/why-react.html)    
    - [Official React docs](https://reactjs.org/docs/getting-started.html)
- Creating REST API with Node.js
    - [video tutorial](https://www.youtube.com/watch?v=0oXYLzuucwE&list=PL55RiY5tL51q4D-B63KBnygU6opNPFk_q)
- Creating React Applications
    - [video tutorial](https://www.youtube.com/watch?v=OxIDLw0M-m0&list=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG)


    ## Contributors

    |Name | Lab Position|
    |----|----|
    | Prashant Kumar Kuntala | Computational Scientist |
    | Hedgie Jo | Undergraduate Researcher |
    | Pierce Chaffin | Undergraduate Researcher |
