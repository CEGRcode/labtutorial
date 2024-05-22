---
id: configure-mac-workstation
title: Configure Local Workstation
sidebar_label: Configure Local Workstation
sidebar_position: 1
---

import Link from '@docusaurus/Link';

Reccommendations for installation by lab role

| Tasks                                                      | UG-Bio | UG-CB | GR-Rot | GR-Bio | GR-CB | Staff |
| ---------------------------------------------------------- | ------ | ----- | ------ | ------ | ----- | ----- |
| [Install Box Drive][box-drive]                             | ✔️      | ✔️     | ✔️      | ✔️      | ✔️     | ✔️     |
| [Install Slack Desktop App][slack]                         | ✔️      | ✔️     | ✔️      | ✔️      | ✔️     | ✔️     |
| [Install Github Desktop][github-desktop]                   |        | ✔️     |        | ✔️      | ✔️     | ✔️     |
| [Install VS Code][vs-code]                                 |        | ✔️     |        | ✔️      | ✔️     |       |
| [Install Anaconda][anaconda3-conda]                               |        | ✔️     |        | ✔️      | ✔️     |       |
| [Install Java (for ScriptManager)][java-for-scriptmanager] | ✔️      | ✔️     | ✔️      | ✔️      | ✔️     | ✔️     |
| [Set-up `ssh` shortcuts][set-up-ssh-shortcuts]             |        |       |        |        | ✔️     |       |

🥥 = partial access

### Box Drive

Facilitates navigating the shared Box directories without having to open your browser and login every time.

<Link
  className="button button--primary"
  href="https://support.box.com/hc/en-us/articles/360043697474-Installing-and-Updating-Box-Drive">
  Install Box Drive
</Link>

### Slack

Access Slack and get notifications without having to open your browser and login every time.

<Link
  className="button button--primary"
  href="https://slack.com/downloads/mac">
  Install Slack
</Link>

### Github Desktop

Our lab stores code in an organization-type Github account (https://github.com/CEGRcode/) which hosts the collection of repositories for tools, code, and websites we use around lab.

<Link
  className="button button--primary"
  href="https://desktop.github.com/">
  Install Github Desktop
</Link>

Use Github Desktop to clone repositories and stay up-to-date with the latest versions of our tools.

1. Download and Install
2. Authenticate w Github account associated with CEGRcode
3. Clone the following repositories:
   - [ ] CEGRcode/EGC_utility_scripts
   - [ ] CEGRcode/scriptmanager
   - [ ] CEGRcode/GenoPipe
   - [ ] ...and any other repositories you will be working on/using

### VS Code

Visual Studio Code or similar IDE needs to be installed if a user is doing any modification or editing of scripts (including shell/Bash/Slurm scripts).

<Link
  className="button button--primary"
  href="https://code.visualstudio.com/">
  Install VSCode
</Link>

### Anaconda3 ("Conda")
For organized package management and installation of third party tools and libraries.

<Link
  className="button button--primary"
  href="./condatutorial">
  Directions for setting-up Anaconda
</Link>

### Java for ScriptManager

Primarily used in this lab for running ScriptManager.

<Link
  className="button button--primary"
  href="https://pughlab.mbg.cornell.edu/scriptmanager-docs/docs/#-dependencies-just-java">
  Directions for installing Java
</Link>

### Set-up `ssh` shortcuts

This is an optional convenience for logging into Penn State computing resources.

<Link
  className="button button--primary"
  href="./configure-aci">
  Set-up login shortcuts to ACI
</Link>

[box-drive]: ./configure-mac-workstation#box-drive
[slack]: ./configure-mac-workstation#slack
[github-desktop]: ./configure-mac-workstation#github-desktop
[vs-code]: ./configure-mac-workstation#vs-code
[anaconda3-conda]: ./configure-mac-workstation#anaconda3-conda
[java-for-scriptmanager]: ./configure-mac-workstation#java-for-scriptmanager
[set-up-ssh-shortcuts]: ./configure-mac-workstation#set-up-ssh-shortcuts
