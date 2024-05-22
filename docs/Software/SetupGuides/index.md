---
id: index
title: Set-up Guides
sidebar_label: Set-up Guides
sidebar_position: 2
---


## Onboarding Checklist

Primarily creating accounts and getting added to resources.

| Tasks                                 | UG-Bio | UG-CB | GR-Rot | GR-Bio | GR-CB | Staff |
| -----                                 | ------ | ----- | ------ | ------ | ----- | ----- |
| Do [ScriptManager Tutorial][tutorial] | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |   |
| Slack account added to workspace      | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| Mac Workstation login                 |   | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| Access to shared BOX                  | 🥥 | 🥥 | 🥥 | ✔️ | ✔️ | ✔️ |
| Github CEGRcode org member            |   | ✔️ |   | ✔️ | ✔️ | ✔️ |
| PEGR login credentials                |   |   |   | ✔️ | ✔️ | ✔️ |
| PSU Sponsored account (Collab)        |   |   |   | ✔️ | ✔️ | ✔️ |
| JetStream allocation                  |   |   |   |   | ✔️ |   |

🥥 = partial access

## New Member Reading and Exercises

### Topics to familiarize yourself on

- Common bioinformatics file formats
  - BED, GFF3/GTF, FASTA, FASTQ, SAM/BAM
  - Look at "Read More" links in ScriptManager docs: https://pughlab.mbg.cornell.edu/scriptmanager-docs/docs/Guides/Getting-Started/file-formats
- Common genomics assays within our lab/field:
  - ChIP-exo vs ChIP-seq
  - ATAC-seq
  - RNA-seq
  - PRO-cap/PRO-seq/CoPRO (see John Lis’s lab for papers about these last few, he is our neighbor on this floor)
  - Enseqlopedia gives high-level summaries of what these assays measure: https://enseqlopedia.com/


### Exercises to work through

1. [ChIP-exo tutorial][tutorial] - introduction to using ScriptManager's GUI and some core tools within the suite
1. Pick one of the YEP paper (Rossi 2021) subpanels from Figure 3 and reproduce it using [plotter][plotter]
1. ["Linux for Biologists" workshop][linux-for-biologists] - introduction to basic shell scripting



### Recommended Reading
- _Rossi et al 2021_ - **Yeast Epigenome (YEP) paper**
  - https://github.com/CEGRcode/2021-Rossi_Nature/tree/master
- _Rossi et al 2018_ - **Simplified ChIP-exo paper**
  - https://www.nature.com/articles/s41467-018-05265-7
- _Arslan et al 2023_ - **Avidite sequencing (AVITI) paper**
  - https://www.nature.com/articles/s41587-023-01750-7
  - Animation of Avidite sequencing from Element Biosciences: https://www.youtube.com/watch?v=b_cC5wi2OYg
- _Noble et al 2009_ - **Organizing your bioinformatics projects**
  - https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1000424


[plotter]: https://github.com/CEGRcode/plotter
[linux-for-biologists]: https://biohpc.cornell.edu/ww/1/Default.aspx?wid=145
[tutorial]: https://pughlab.mbg.cornell.edu/scriptmanager-docs/docs/Guides/Tutorials/chipexo-tutorial