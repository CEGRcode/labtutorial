---
id: index
title: Software Introduction
sidebar_label: Introduction
sidebar_position: 1
---

This section contains installation guides to setup primary software packages and development infrastructure for the Pugh/Lai labs.

Every graduate student (WET AND DRY) in the lab will need to perform bioinformatic analysis at some point. Referencing these guides sooner rather than later can SAVE YOU AND THE DRY-BENCH MEMBERS OF THE LAB A LOT OF TIME.


## Infrastructure

The Pugh Lab, Lai Lab, and Epigenomics Core (EGC) are supported by an integrated infrastructure of software and tools that facilitates our research.

<br/>

![PughInfrastructure](images/PughInfrastructure.png)


* [PEGR][pegr] - Manage metadata associated with all sequencing runs for looking up samples and downloading processed datafiles (e.g. BAM formatted alignments).
* [Galaxy][galaxy] - Create data analysis & visualization pipelines for large-scale data processing. The workflow results from these intitial analyses are displayed on PEGR.
* **[ScriptManger][scriptmanager] - For day-to-day bioinformatics.** Generalized toolbox of scripts we use to perform both our standard ChIP-exo analyses and more customized analyses for most of our papers
* [GenoPipe][genopipe] - Quality check tool we use to confirm the genotypes of our samples which ultimately contributes to the reproducibility of our research.

## Computational resources

Galaxy is run on the [ACI-ICS](https://ics.psu.edu/about/) clusters and also leverages [ACCESS (fromerly XSEDE)](https://allocations.access-ci.org/) resources for compute requirements.

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


[pegr]:https://www.pegr.org
[galaxy]:https://galaxyproject.github.io/
[scriptmanager]:http://pughlab.mbg.cornell.edu/scriptmanager-docs/docs/
[genopipe]:https://pughlab.mbg.cornell.edu/GenoPipe-docs/
