---
id: reading-exercises
title: New Member Reading and Exercises
sidebar_label: Reading and Exercises
sidebar_position: 1
---

## Topics to familiarize yourself with

- Common bioinformatics **file formats**
  - BED, GFF3/GTF, FASTA, FASTQ, SAM/BAM
  - Look at "Read More" links in ScriptManager docs: https://pughlab.mbg.cornell.edu/scriptmanager-docs/docs/Guides/Getting-Started/file-formats
- Common genomics assays within our lab/field:
  - ChIP-exo vs ChIP-seq
  - ATAC-seq
  - RNA-seq
  - PRO-cap/PRO-seq/CoPRO (see John Lis’s lab for papers about these last few, he is our neighbor on this floor)
  - Enseqlopedia gives high-level summaries of what these assays measure: https://enseqlopedia.com/
- [Learn the basics of command line][command-line-basics]

## Recommended Reading
- _Rossi et al 2021_ - **Yeast Epigenome (YEP) paper**
  - https://github.com/CEGRcode/2021-Rossi_Nature/tree/master
- _Rossi et al 2018_ - **Simplified ChIP-exo paper**
  - https://www.nature.com/articles/s41467-018-05265-7
- _Arslan et al 2023_ - **Avidite sequencing (AVITI) paper**
  - https://www.nature.com/articles/s41587-023-01750-7
  - Animation of Avidite sequencing from Element Biosciences: https://www.youtube.com/watch?v=b_cC5wi2OYg
- _Noble et al 2009_ - **Organizing your bioinformatics projects**
  - https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1000424

## Exercises to work through

1. [ChIP-exo tutorial][tutorial]
    * An introduction to using ScriptManager's GUI and some core tools within the suite
1. Reproduce one of the [YEP paper (Rossi 2021)][rossi-2021] Fig 3 subpanels in plotter
    * Use data downloads from www.yeastepigenome.org
    * An introduction to using [plotter][plotter]
1. ["Linux for Biologists" workshop][linux-for-biologists]
    * An introduction to basic shell scripting
1. Learning Git
    * Using Github Desktop [video tutorial](https://www.youtube.com/watch?v=8Dd7KRpKeaE)
    * Understanding how branching and merging in git [interactive exercise][git-exercise]
    * It's also important you learn to write [good commit messages and titles](https://www.freecodecamp.org/news/how-to-write-better-git-commit-messages/)

### Optional bonus resources
1. [RSE Training](https://us-rse.org/wg/education_training/training/)
    - We recommend topics like Vim, Git, and the [INTERSECT materials](https://intersect-training.org/training-links/)
1. [PSU Biostars Bootcamp #day2](https://bootcamp.biostars.io/#day2)
    - Understanding Shell scripts, Markdown, Git and start using ACI clusters.
1. Beginner Web Development tutorials [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/Tutorials)
    - Web technologies at a glance.
    - [HTML](https://www.tutorialspoint.com/html5/)
    - [CSS](https://www.tutorialspoint.com/css/)
    - [Javascript](https://www.tutorialspoint.com/javascript)
1. Understanding React
    - [Why did they build React ?](https://reactjs.org/blog/2013/06/05/why-react.html)    
    - [Official React docs](https://reactjs.org/docs/getting-started.html)
1. Creating REST API with Node.js
    - [video tutorial](https://www.youtube.com/watch?v=0oXYLzuucwE&list=PL55RiY5tL51q4D-B63KBnygU6opNPFk_q)
1. Creating React Applications
    - [video tutorial](https://www.youtube.com/watch?v=OxIDLw0M-m0&list=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG)
1. [CULearn](https://culearn.cornell.edu/) has a broad variety of courses if you use your Cornell NetID login

[command-line-basics]:command-line-basics
[rossi-2021]:https://pubmed.ncbi.nlm.nih.gov/33692541/
[plotter]: https://github.com/CEGRcode/plotter
[linux-for-biologists]: https://biohpc.cornell.edu/ww/1/Default.aspx?wid=145
[tutorial]: https://pughlab.mbg.cornell.edu/scriptmanager-docs/docs/Guides/Tutorials/chipexo-tutorial
[github-desktop]:configure-mac-workstation#github-desktop
[git-exercise]:https://learngitbranching.js.org/?locale=en_US