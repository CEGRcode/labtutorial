---
id: publication-checklist
title: Publication Checklist
sidebar_label: Publication Checklist
sidebar_position: 2
---

*last updated Oct 16, 2022 by Olivia for the Mittal et al, 2022 SAGA paper*

:::caution
DO NOT WAIT UNTIL SUBMISSION TO LOOK AT THIS CHECKLIST! Read this through before you start your analyses to save yourself time. There are lots of suggestions here that will make your life easier to do as you begin analyzing your data instead of combing through your work at the end.

This guide was written to save you time, ensure compliance with NIH/Grant funding requirements, and help with the reproducibility and reliability of your results.
:::

Before submitting a manuscript, make sure you have the PEGR project, Github repo, GEO submission, and STENCIL(optional) sections described below completed.

## PEGR projects
Create a "Working set" PEGR project as soon as you start analyses. Remember, you can add/remove samples as needed. The latter two projects should be created closer to publication.

**Name the projects** using the following convention: `<FirstAuthorLastName> <PublicationYear> - <JournalName> (<ProjectType>)`.


**Add a description:** to the project that includes the following information:
- Short description with relevant keywords
- Manuscript title
- Make sure you include relevant keywords in the project to improve search-ability for future PEGR users

**Add Linkouts**, some may be left blank at first
- PMID
- PMCID
- GEO Dataseries accession (`GSEXXXXXX`)
- SRA accession (`SRPXXXXXX`)
- DOI
- Github


### Three project types per manuscript

* **"Working set"** -- Help you to easily track all the PEGR samples that were analyzed (regardless of if they ultimately ended up in the manuscript). It is helpful to create this as early as possible (like when your first samples get processed).

* **"Novel set"** -- The set of previously UNPUBLISHED samples that will be submitted to GEO as novel sequencing data that need new accessions.

* **"Reanalyzed set"** -- The set of previously PUBLISHED samples that were reanalyzed for figures included in the manuscript. (may not be applicable)


### Example

**[Badjatia 2021- Cell Reports (Novel Set)](https://www.pegr.org/pegr/project/show/1251)**

`Description: Novel published data from Nitika's paper on yeast peroxide stress. Acute stress drives global repression through two independent RNA polymerase II stalling events in Saccharomyces Publication accessions: - PMID - 33472084 - PMCID - PMC7879390 - GEO series - GSE151348 - SRA - SRP265070 - DOI - https://doi.org/10.1016/j.celrep.2020.108640 - Github - https://github.com/CEGRcode/2020-Badjatia_peroxide_stress`

:::note
Some information may be missing when you create the project but this can be filled in later as it becomes available.
:::

## Github
For each publication, we make the analysis and reference files available on Github in a publication-specific repository to ensure the reproducibility of our findings.

**Please follow the naming convention of previous publication repos!!!** Once a repository is named, it is annoying to change.

### Organization of the Repo
You can reference [previous publication repos][mittal-repo] or use the [template repo][template-repo] as a starting point for how to organize your BED files and code. This should fit most needs but you may opt to adjust the directory structure to suit specific needs. READ THE TEMPLATE FILES--there are more details and instructions in the template.

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

## STENCIL
*Coming soon!*
Create a [STENCIL](https://pughlab.mbg.cornell.edu/stencil/) instance for each publication to organize and track supplementary analyses.


## GEO Submission
All data not subject to privacy restrictions (e.g. patient-protected samples) should be made publicly available at one of the national genomic data repositories. We submit through [Gene Expression Omnibus (GEO)](https://www.ncbi.nlm.nih.gov/geo/).

Follow the [GEO submission instructions](https://www.ncbi.nlm.nih.gov/geo/info/submission.html) for submitting the UNPUBLISHED datasets ("Novel Set") used in the manuscript. Almost all data we produce are "high-throughput sequencing data" if they are coming from PEGR.

Important: Previously published samples ("Reanalyzed set") that have been reanalyzed for this manuscript should NOT be included in the submission. These can be cited within the manuscript using their existing NCBI accession info.

1. Allow time for curators to process samples (and go back-and-forth to correct mistakes are made in the submission)
2. Build submission according to GEO documentation
    - Raw files: Use PEGR to pull the raw FASTQ sample files
    - Processed files: Samples may be "processed" differently depending on the data type. Use your judgement on what is appropriate for the purposes of the study. Consider referencing [this script](https://github.com/CEGRcode/2022-Mittal_SAGA/blob/main/03_Bulk_Processing/job/bulk_geo_tracks.pbs) for creating BigWig pileups of 5' Read1 coverage across the genome.
    - Metadata Spreadsheet: You may want to use [this script](https://github.com/CEGRcode/2022-Mittal_SAGA) for pulling some of the data from PEGR as a starting point for building the spreadsheet. **You will need to manually adjust the metadata output of this script to fit GEO specifications for the submission.** You may also want to reference previous submissions in Box.
3. Follow GEO instructions to organize files and submit through the FTP server
    - Regarding the date to make the data public, **start with at least a year out**. This can be changed later.
4. Look for an email from GEO with the newly created `GSEXXXXXX` and `GSMXXXXXX` accessions to include in the manuscript.
5. Update the manuscript with the GEO accessions
    - This typically means including the study (`GSEXXXXXX`) accession in the Methods or Data Access section and the specific samples (`GSMXXXXXX`) in the extended methods tables. The accessions of reanalyzed data from previously published samples should be similarly included.
6. Update Github repo with accession information
7. Update PEGR projects with accession information
8. When the paper is accepted and a publication date is set, you should notify GEO so they can coordinate with the journal to release the data with the manuscript.


## After publication (you think you're done?)
When you have a PMID for the new manuscript, go through and once more check...
- Github
  - [ ] PMID linked
  - [ ] `GSEXXXXXX` linked
- PEGR projects (all three)
  - [ ] PMID linked
  - [ ] `GSEXXXXXX` linked
  - [ ] all other accessions and info (SRA, DOI, PMC, ...)
- GEO Submission
  - [ ] Data is public
  - [ ] PMID is linked
  - [ ] test downloads are working
- Box
  - [ ] Clean up files and archive under appropriate directory (`03_Disclosures/4_Manuscripts/4_Published/...`)
- Advertise!
  - [ ] Fill in [Submit Data form](https://www.yeastgenome.org/submitData) on SGD's website (makes sure paper is prioritized in curation)
  - [ ] Consider writing a summary of the work for SGD to write a [Research Spotlight](https://www.yeastgenome.org/blog/category/research-spotlight) on the paper
  - [ ] Tweet about it [@ThePughLab](https://twitter.com/thepughlab?lang=en)
  - [ ] Update Frank/Will's [My Bibliography (NCBI)](https://www.ncbi.nlm.nih.gov/sites/myncbi/benjamin.pugh.1/bibliography/40517395/public/?sort=date&direction=descending)
  - [ ] Update [Lab Website](http://pughlab.mbg.cornell.edu/) as appropriate
  - [ ] Update YOUR links (NCBI My Bibliography, personal website, CV/Resume)

[mittal-repo]:https://github.com/CEGRcode/2022-Mittal_SAGA
[template-repo]:https://github.com/CEGRcode/20XX-LastName_Journal
