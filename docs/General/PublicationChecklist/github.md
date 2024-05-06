---
title: Github Repository
sidebar_label: Github repo
sidebar_position: 3
---

For each publication, we make the analysis and reference files available on Github in a publication-specific repository to ensure the reproducibility of our findings. Bench scientists starting out should read through the instructions below before starting their analysis.

:::tip
Please start your repo before you even begin analyzing your data. We have structured things to help you with your exploratory analysis so you can save yourself some time by working within our framework from the get-go.
:::

## Intialize your repo
As you set-up and manage your repo, you should make sure you have a tool like [Github Desktop][install-ghdesktop] installed for managing your commits. I also reccommend setting up [VS Code][install-vscode] or a similar IDE.

### Using the template
We have provided a [template repo][template-repo] to help with the download, preprocessing, and exploratory analysis of your project. It includes Slurm-style bulk processing scripts that can help parallelize your jobs and speed up your analysis as well as help organize your files for more easily finding what you need. Please check the `README.md` files throughout the template for more explanation on how to organize data and scripts.

### Naming your repo
Please follow the naming convention of previous publication repos. Once a repository is named, it is annoying to change (but still doable).

## Organization of the Repo
You can reference [previous publication repos][mittal-repo] for ideas on how to organize your BED files and code. This should fit most needs but you may opt to adjust the directory structure to suit specific needs. READ THE TEMPLATE FILES--there are more details and instructions in the template.

## Before submission
It is critical that your repo includes a `README.md` file in the root level formatted to be consistent with the other publication repos. This includes:
- [ ] Title of manuscript
- [ ] Author list
- [ ] Affiliations
- [ ] Correspondence
- [ ] Resources (e.g. STENCIL instance) w/ links
- [ ] PMID accession w/ link
- [ ] GEO accession w/ link
- [ ] Abstract
- [ ] Brief description of directory structure

The link to your Github repo should also be included in the Methods/Data Accession/Software Availability sections of your manuscript.


[install-ghdesktop]:/Software/SetupGuides/configure-mac-workstation#github-desktop
[install-vscode]:/Software/SetupGuides/configure-mac-workstation#vs-code

[mittal-repo]:https://github.com/CEGRcode/2022-Mittal_SAGA
[template-repo]:https://github.com/CEGRcode/20XX-LastName_Journal
