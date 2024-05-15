---
title: Github Repository
sidebar_label: Github repo
sidebar_position: 3
---

For each publication, we make the analysis and reference files available on Github in a publication-specific repository to ensure the reproducibility of our findings. Bench scientists starting out should read through the instructions below before starting their analysis.

:::tip
Please start your repo before you even begin analyzing your data. We have structured things to help you with your exploratory analysis so you can save yourself some time by working within our framework from the get-go.
:::

## Installation
While not strictly necessary to set-up and manage your repo, we recommend installing [Github Desktop][install-ghdesktop] and [VS Code][install-vscode] or a similar IDE to help you make changes and add to your repo.

## Intialize your repo
Please consider initializing a repo for your manuscript via the internet browser from the [CEGRcode organization page](https://www.github.com/CEGRcode). Navigate to the "Repositories" section and select the green "New" button. Make sure you are logged in and a member of the `CEGRcode` organization.

<div class="tutorial-img-flow-container">
  <img src={require('./image/Github-CEGRcode-NewRepo.png').default} style={{width:100+'%',border:'solid 1px'}} />
</div>

### Using the template
We have provided a [template repo][template-repo] to help with the download, preprocessing, and exploratory analysis of your project. It includes Slurm-style bulk processing scripts that can help parallelize your jobs and speed up your analysis as well as help organize your files for more easily finding what you need.

<div class="tutorial-img-flow-container">
  <img src={require('./image/Github-RepoTemplateSelection.png').default} style={{width:50+'%',border:'solid 1px'}} />
</div>

You can check the `README.md` files throughout the template for more explanation on how to organize data and scripts.

### Naming your repo
Please follow the naming convention of previous publication repos (`<Year>-<LastName>_<Journal>`). Once a repository is named, it is annoying to change (but still doable).

### Permissions (Private/Public)
Keep your repo private to start. You can always make your repo public but you can't make it private again.

<div class="tutorial-img-flow-container">
  <img src={require('./image/Github-InitializeNewRepo.png').default} style={{width:80+'%',border:'solid 1px'}} />
</div>

## Organization
You can reference [previous publication repos][krebs-repo] for ideas on how to organize your BED files and scripts. This should fit most needs but you may opt to adjust the directory structure to suit specific needs. 

:::info
READ THE TEMPLATE FILES--there are more details and instructions in the template for how to use your repo organization
:::

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

The link to your Github repo should also be included in the Methods, Data Accession, or Software Availability sections of your manuscript.


[install-ghdesktop]:/Software/SetupGuides/configure-mac-workstation#github-desktop
[install-vscode]:/Software/SetupGuides/configure-mac-workstation#vs-code

[mittal-repo]:https://github.com/CEGRcode/2022-Mittal_SAGA
[krebs-repo]:https://github.com/CEGRcode/2023-Krebs_BenzonaseSeq
[template-repo]:https://github.com/CEGRcode/20XX-LastName_Journal
