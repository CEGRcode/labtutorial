---
id: index
title: Introduction
sidebar_label: Introduction
sidebar_position: 1
---

# Figure-making checklist

## Heatmap plot styling checklist

Use ScriptManager's [heatmap labeler][label-heatmap] for convenient and bulk-style labeling of heatmaps with the following info

- [ ] PNG is bordered
- [ ] x-axis label
  - axis label (RefPT) for feature being aligned to (peaks, motifs, annnotations)
  - include range labels for the left-bound, mid bound, and right-bound limits (e.g. -500, 0, +500)
  - Example: **Reb1 motif (bp)** ⚫ **-500**, **0**, **+500**
  - Example: **Sua7 peak (Kb)** ⚫ **-1**, **0**, **+1**
- [ ] y-axis label
  - axis label (info on filters, groups, sort, and include n sites)
  - Example: **Sort by Reb1 Occupancy (500 sites)**
  - Example: **Sort by Gene Expression (5,378 genes)**
- [ ] Title
  - per-dataset descriptive title for signal being plotted (include PEGR id for lab presentations)
  - Example: **Reb1 ChIP-exo (12141)**
  - Example: **Sua7 PIP-seq (28576)**

## Composite plot styling checklist

Use [plotter][plotter] to create SVG-style composite figures for presentations and publications. Don't forget to save it as JSON too for your records!

- [ ] legend: label datasets with descriptive names to show which color indicates which
- [ ] title
- [ ] x-axis: axis label (RefPT) and range (left, mid, and right bounds)
- [ ] y-axis: axis label (units, usually "AU" for "Arbitrary units") and range
  - range is automatically taken care of if you use plotter
  - A common label is "Occupancy (AU)"
- [ ] n sites (N=XXXXX) summarized by composite
  - i.e. how many BED coordinates are these composites averaging from (lines in BED file)
- [ ] normalization label
  - indicate normalization strategy used (NCIS, Total Tag, NFR strategy)
- [ ] IgG if appropriate (if not sure, just include it)
- [ ] check for optimal layer order
  - make sure composites aren't hiding behind each other so you can see them all

[plotter]: https://github.com/CEGRcode/plotter
[label-heatmap]: https://pughlab.mbg.cornell.edu/scriptmanager-docs/docs/Tools/figure-generation/heatmap-labeler
