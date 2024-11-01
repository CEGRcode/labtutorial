---
id: galaxy
title: "Galaxy Resources"
sidebar_label: "Galaxy Resources"
sidebar_position: 7
---

Useful links and resources for navigating our Galaxy sysems.

| Server Names |  |  |
| ---- | ---- | ---- |
|[vesta.cac.cornell.edu](http://vesta.cac.cornell.edu/) | PEGR | Production Server |
|[hyperion.cac.cornell.edu](http://hyperion.cac.cornell.edu/) | Galaxy | Production Server |
|[hestia.cac.cornell.edu](http://hestia.cac.cornell.edu/) | PEGR | Development Server |
|[shrike.cac.cornell.edu](http://shrike.cac.cornell.edu/) | Galaxy| Development Server |

:::danger
Please test your code on the development servers. Do not mess with the production servers!
:::


## Navigating of Galaxy-related repos

* [EpiGenomicsCode/ansible-egcGalaxy] - Ansible-ized Galaxy server deployment (generally this is more of Will’s problem than ours)
  * `ephemeris_tools/workflows`  I believe is where we keep the official pipeline `.ga` files used in the lab core pipeline. You might see workflows scattered across these other repos but this should be the correct one.
  * `ephemeris_tools/ephemeris_tools` lists out tools for the core pipeline that we import from the ToolShed
* [CEGRcode/ChIP_general-galaxy_tools] - Galaxy tools that we custom wrapped for the pipelines (ones that weren’t already in the toolshed)
* [CEGRcode/pegr-galaxy_tools][pegr-galaxy_tools] - Galaxy tools (XML wrappers of python scripts) that communicate with PEGR by sending POST requests following the execution of a pipeline step so PEGR can display a status update (Green box) and any statistics or figures for the report
* [CEGRcode/scriptmanager][scriptmanager-gh] - Under the `galaxy/wrappers` directory you can find Galaxy wrappers for the various ScriptManager tools

## Linkouts to Galaxy Training and Docs

* [Galaxy Server administration](https://training.galaxyproject.org/training-material/topics/admin/) highlights:
  * "Ansible" and "Galaxy Installation with Ansible"
  * "Galaxy Tool Management with Ephemeris"







[EpiGenomicsCode/ansible-egcGalaxy]: https://github.com/EpiGenomicsCode/ansible-egcGalaxy
[CEGRcode/ChIP_general-galaxy_tools]: https://github.com/CEGRcode/ChIP_general-galaxy_tools
[pegr-galaxy_tools]: https://github.com/CEGRcode/pegr-galaxy_tools
[scriptmanager-gh]: https://github.com/CEGRcode/scriptmanager