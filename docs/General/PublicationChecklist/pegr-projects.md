---
title: Create PEGR Projects
sidebar_label: PEGR Projects
sidebar_position: 2
---

PEGR projects allow you to conveniently group and track samples for conveniently finding datasets for both yourself and other members of lab in the future. It can be both a useful tracking tool while you perform your analyses and a critical record keeper for organizing your samples when it comes time to organize the compliance paperwork needed during submission.

:::caution
Your future self will thank you if you don't wait until the end to do this. It will reduce the amount of **busywork**, **submission paperwork**, and **errors** you make if you do this from the beginning!
:::

## Three project types
Olivia recommends organizing samples into three projects per manuscript such that

$$
\begin{equation}
Novel \cup Reanalyzed = Working
\end{equation}
$$
and
$$
\begin{equation}
Novel \cap Reanalyzed = \emptyset
\end{equation}
$$

...which means all of the samples in the **Novel** and **Reanalyzed** sets make up the entire **Working** set and there is **no redundancy** between the **Novel** and **Reanalyzed** samples.

### Working set
Help you to easily track all the PEGR samples that were analyzed (regardless of if they ultimately ended up in the manuscript). It is helpful to create this as early as possible (like when your first samples get processed).

:::tip
Create a "Working set" PEGR project **as soon as you start analyses**. Remember, you can add/remove samples as needed. The latter two projects should be created closer to publication as you finalize the samples that need to be included in the manuscript.
:::

### Novel Set
The set of previously UNPUBLISHED samples that will be submitted to GEO as novel sequencing data that need new accessions.

### Reanalyzed Set
The set of previously PUBLISHED samples that were reanalyzed for figures included in the manuscript. (may not be applicable)

## Naming your projects
Please follow convention when naming your projects so we can find them more easily in the future.

`<FirstAuthorLastName> <PublicationYear> - <JournalName> (<ProjectType>)`.

* [Example 1](https://vesta.cac.cornell.edu/pegr/project/show/1251) - `Badjatia 2021- Cell Reports (Novel Set)`
* [Example 2](https://vesta.cac.cornell.edu/pegr/project/show/1331) - `Krietenstein 2016 - Cell (Novel Set)`
* [Example 3](https://vesta.cac.cornell.edu/pegr/project/show/1332) - `Krietenstein 2016 - Cell (Working Set)`

## Add a description
This field should include the title of your manuscript and a short description with relevant keywords (think search-ability).

* [Example 1](https://vesta.cac.cornell.edu/pegr/project/show/1251) - `Novel published data from Nitika's paper on yeast peroxide stress. "Acute stress drives global repression through two independent RNA polymerase II stalling events in Saccharomyces."`
* [Example 2](https://vesta.cac.cornell.edu/pegr/project/show/1331) - `Novel published data from paper of SGD data. "Genomic Nucleosome Organization Reconstituted with Pure Proteins."`
* [Example 3](https://vesta.cac.cornell.edu/pegr/project/show/1332) - `Working set of all SGD-related MNase-ChIP samples`

## Add Linkouts
While you are editing a working set, you may leave most of these fields blank but by the time your manuscript is published, you should have updated all of these linkout fields:
- PMID
- PMCID
- GEO Dataseries accession (`GSEXXXXXX`)
- SRA accession (`SRPXXXXXX`)
- DOI
- Github

:::note
Some information may be missing when you create the project but this can be filled in later as it becomes available.
:::
