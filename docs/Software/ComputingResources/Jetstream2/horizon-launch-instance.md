---
id: horizon-launch-instance
title: Launch instance (Horizon)
sidebar_position: 1
---

## Add a Key Pair

You only need to add a key pair if your computer doesn't have a key pair already saved on Horizon

### 1. Check that your computer doesn't already have a key pair

### 2. 

[See Jetstream2 documentation for details][horizion-ssh-keys]


## Launch Instance

### Select VM options for configuring your instance


* Details
  * Name - your choice
* Source
  * your choice. May affect set-up instructions (Justin likes Ubuntu, Olivia does Rocky)
* Flavor
  * your choice. Don't worry about storage so much as you can add volumes
* Network
  * add `provider`
* Network Ports
  * default
* Security Groups
  * add `exosphere`
* Key pair
  * pick the key pair for the computer you want to login for the first time from
* Configuration, Server Groups, Scheduler Hints, Metadata - default

Click "Launch" to start the instance. You will need to wait a bit before logging in to allow the instance to finish executing the spin up.

### Logging into the VM

1. Wait for instance to spin up.

Look at the progress bar in the Horizon interface and when it disappears, you may still need to wait a bit for the final processes to finish executing.

2. Check the VM's address and copy it down

<screenshot />

3. Update your `~/.ssh/config` file to include latest VM



<Tabs>
  <TabItem value="rocky" label="Rocky 8/9" default>

```
Host my-vm-name XXX.XX.XX.XXX
  HostName XXX.XX.XX.XXX
  User rocky
  IdentityFile ~/.ssh/js2_key.pub
```

  </TabItem>
  <TabItem value="ubuntu" label="Ubuntu">

```
Host my-vm-name XXX.XX.XX.XXX
  HostName XXX.XX.XX.XXX
  User ubuntu
  IdentityFile ~/.ssh/js2_key.pub
```

  </TabItem>
  <TabItem value="centos" label="CentOS">

```
Host my-vm-name XXX.XX.XX.XXX
  HostName XXX.XX.XX.XXX
  User centos
  IdentityFile ~/.ssh/js2_key.pub
```

  </TabItem>
</Tabs>


[horizon-ssh-keys]: https://docs.jetstream-cloud.org/ui/horizon/ssh_keys/