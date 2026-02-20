---
id: configure-aci
title: Accessing Collab
sidebar_label: Accessing Collab
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Creating an Account

Instructions for setting up an account are on Box
* `/Box/00_Operations/1_Onboarding/2_LabOrientation/RoarCollab - Instructions to obtain PSU+ICS+Globus Acct (240904 update).docx`
* Make sure you are added to the PughLab ACI allocations and relevant group space once you get an ACI account.

## Accessing resources (Logging in)

There are a variety of ways to access computing resources on Collab.

<Tabs>
  <TabItem value="terminal" label="Terminal">


The following are the Secure Shell (`ssh`) login commands to access ROAR-Collab resources. Just open a terminal window type the following except with `mypsuusername` replaced with your PSU username.

```
ssh mypsuusername@submit.hpc.psu.edu
# Type PSU password when prompted
# MFA authenticate (e.g. Microsoft Authenticator app on your phone)
# Happy coding!
```

Logout when you are done with Ctrl-D

  </TabItem>
  <TabItem value="openondemand" label="OpenOnDemand" default>

1. Open a browser window and go to https://portal.hpc.psu.edu/

2. Select "Penn State" as the Identity Provider through CILogon and login with your PSU id

<div class="tutorial-img-flow-container">
  <img src={require('./img/CILogon.png').default} style={{width:40+'%',}} />
  <img src={require('./img/PSULogin.png').default} style={{width:40+'%',}} />
</div>

3. Navigate to the "Interactive Desktop" section and fill out the job submission form with your preferred settings. For example, if you plan to be working for longer than 4 hours, you can specify more hours.

<div class="tutorial-img-flow-container">
  <img src={require('./img/portal-home.png').default} style={{width:40+'%',}} />
  <img src={require('./img/portal-interactive-desktop-submit.png').default} style={{width:40+'%',}} />
</div>

4. Once submited, the job status will be displayed as "queued" until the status updates to "starting" as the job spins up the OpenOnDemand instance and then finally "running" when you can start working.

<div class="tutorial-img-flow-container">
  <img src={require('./img/portal-interactive-queue.png').default} style={{width:30+'%',}} />
  <img src={require('./img/portal-interactive-starting.png').default} style={{width:30+'%',}} />
  <img src={require('./img/portal-interactive-running.png').default} style={{width:30+'%',}} />
</div>

5. Click "Launch Interactive Desktop" and a new tab will open that displays the interactive desktop. Happy coding!

<div class="tutorial-img-flow-container">
  <img src={require('./img/interactive-desktop.png').default} style={{width:60+'%',}} />
</div>

  </TabItem>
</Tabs>



## Bonus: Quality of life tricks

### Set-up login shortcut

The above terminal login command is tedious to type. Configure ssh to include the ACI-ROAR alias for logging in (for convenience, not necessry to access Collab).

Start by creating an `ssh` config file, `~/.ssh/config` if it doesn't exist. Then append the following to the file, replacing `myusername` with your PSU username.

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

### Configure `ssh` to skip password prompt (RSA key pair)

Typing in your password everytime is also tedious. Configure the machines to login with RSA key pair (for convenience, not necessry to access Collab).

Follow the instructions posted here: https://www.ibm.com/support/pages/configuring-ssh-login-without-password

