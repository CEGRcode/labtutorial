---
id: configure-aci
title: Configuring environment on Collab resources
sidebar_label: PSU Collab configuration
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Login through Terminal
The following are the Secure Shell (`ssh`) login commands to access ROAR-Collab resources. Just replace `mypsuusername` with your PSU username.

```
ssh mypsuusername@submit.hpc.psu.edu
# Type PSU password when prompted
# DUO authenticate
```

Logout with Ctrl-D

### Set-up login shortcut

Configure ssh to include the ACI-ROAR alias for logging in.

Start by creating an `ssh` config file, `~/.ssh/config` if it doesn't exist. Then append the following to the file, replacing `myusername` with your PSU username.


<Tabs>
  <TabItem value="aci-roar" label="ACI-ROAR" default>

```
Host aci submit.aci.ics.psu.edu
  HostName submit.aci.ics.psu.edu
  User mypsuusername
  HostbasedAuthentication no
```

You can now login to ACI from terminal by typing
```
ssh aci
```

  </TabItem>
  <TabItem value="roar-collab" label="ROAR-Collab">

```
Host collab submit.hpc.psu.edu
  HostName submit.hpc.psu.edu
  User mypsuusername
  HostbasedAuthentication no
```

You can now login to ACI from terminal by typing
```
ssh collab
```

  </TabItem>
</Tabs>


### Configure `ssh` to skip password prompt (RSA key pair)

Follow the instructions posted here: https://www.ibm.com/support/pages/configuring-ssh-login-without-password


## What is `module`?

Module commands let you turn on/off pre-installed software that the IT/sysadmins set up for us. Use `load` to turn software “on” and `unload` to turn software “off”

Before installing Anaconda, Samtools, Bedtools, or BWA yourself, try using the Module system on ACI
```
module load anaconda3
module load samtools
module load bedtools
module load bwa
```

[Read more here][module-docs]


[module-docs]:https://modules.readthedocs.io/en/latest/
