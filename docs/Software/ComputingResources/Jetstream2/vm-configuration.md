---
id: pegr
title: Configure your new VM
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Link from '@docusaurus/Link';


## Adding non-default users

We recommend adding a few users with sudo permissions on a VM for alternative access to the files if you are collaborating with others.

### Create new user

Besides your `rocky`/`ubuntu`/`centos` default user, you can add users to support login from different computers.
```
# Add user
adduser owl8
```

### Add password to user account

Make sure you add a password to the user. You can use a [password generator](https://www.lastpass.com/features/password-generator) to generate a strong one.
```
# Add password for user
psswd owl8
```

### Give user sudo permissions (optional)

To give a user elevated priveledges (so they can install some things that require higher access), you can give them `sudo` permissions.

<Tabs>
  <TabItem value="rocky" label="Rocky 8/9" default>

```
usermod -aG wheel owl8
```

  </TabItem>
  <TabItem value="ubuntu" label="Ubuntu">

```
usermod -aG sudo owl8
```

  </TabItem>
</Tabs>

### Make users ssh-able

Modify the `sshd_config` file to include the newly created users for ssh permissions.

```
sudo vi /etc/ssh/sshd_config
```

...and add the following lines to the bottom (Note that `AllowUsers` is tab-delimited):
```
PasswordAuthentication yes
AllowUsers	owl8	[user2	user3]
PermitRootLogin no
```

...and save the file. Then you need to restart the ssh service for the changes to take effect:

```
sudo systemctl restart sshd
```

Based on: https://ostechnix.com/allow-deny-ssh-access-particular-user-group-linux/

## Install software for getting started

### Recommended GNU basics


<Tabs>
  <TabItem value="rocky" label="Rocky 8/9" default>

```
# yum make
# update
```

  </TabItem>
  <TabItem value="ubuntu" label="Ubuntu">

```
# apt-get make
apt-get update
```

  </TabItem>
</Tabs>

### Basic bioinformatics installation

* samtools
* bedtools
* BWA or other alignment software
* python packages (pysam, pandas, matplotlib, etc)
* MEME and other motif packages

### Anaconda3
Be aware that the full anaconda3 install has a storage footprint of a minimum 30GB so this may not be the optimal software management solution for smaller JS VMs without mounted storage.

Check the installation guide: https://docs.anaconda.com/free/anaconda/install/linux/
