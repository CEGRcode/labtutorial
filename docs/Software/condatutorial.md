---
id: condatutorial
title: Setting up conda for Pugh Lab
sidebar_label: Setting up conda for Pugh Lab
---

_Instructions for getting set up and going with Anaconda for non-programmers._

## Why Conda?

+ Standard install command for all tools
  + No need to dig around the installation documentation
  + No need to look up you specific OS
  + No need to lookup and install dependencies (conda installs dependencies together)
+ Avoids clashing between tools. Separate environments prevents version clashing
  + especially useful when it comes to Python2 v Python3 problems
+ multiple environments--one for each project!
  + easier to track versions when it comes time to write up methods section of publication



## Install Homebrew

Homebrew is a handy tool for installing tools on your workstation. I was using this before conda and I use it whenever conda fails me. This may seem roundabout but I find it handy to also have homebrew in my workspaces as a backup anyway. You're welcome to directly install conda without homebrew. I'll add directions to do this later.

```bash
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
(takes ~45min on Chitvan's lab workstation)


## Install Anaconda3 via Homebrew

Once Homebrew finishes installing, you can go ahead and install Anaconda with the following command.

```bash
brew cask install anaconda
```
(takes ~15min on Chitvan's lab workstation)

## Using conda

+ one project: one conda environment
+ build environments with a set of tools you use for the project
+ turn on or "activate" the environment when you're working on the project so you have access to the tools


## Creating Environments in Anaconda3


```bash

conda create -n my-env -c bioconda tool1 tool2 tool3

```

### What is a channel?

+ [Bioconda][bioconda]


### What environments are available?

To view all the environments you can activate, type the following into your terminal.
```
$ conda info --envs
# conda environments:
#
base                  *  /anaconda3
chexmix                  /anaconda3/envs/chexmix
old-sm                   /anaconda3/envs/old-sm
slam                     /anaconda3/envs/slam
sm-dev                   /anaconda3/envs/sm-dev
test                     /anaconda3/envs/test
tss                      /anaconda3/envs/tss

$
```

when none are activated, 'base' is \*'d. When you an activate another environment and execute the command, you will observe the command indicates which environment is active with the asterisk(\*).

## Activating and Deactivating Conda Environments
```bash
conda activate my-env
```

show change in prompt

```bash
source activate my-env
```

```bash
conda deactivate
```

## Installing additional packages to your Environments


```bash
conda install -n my-env -c bioconda newtool
```


## Looking at what is installed in your conda environments

```bash
conda list -n my-env
```

example:
```
$conda list -n slam
# packages in environment at /anaconda3/envs/slam:
#
# Name                    Version                   Build  Channel
bzip2                     1.0.8                h1de35cc_0  
ca-certificates           2020.7.22                     0  
certifi                   2020.6.20                py38_0  
curl                      7.69.1               ha441bb4_0  
cython                    0.29.21                  pypi_0    pypi
hisat2                    2.2.1                h4a8c4bd_2    bioconda
htslib                    1.9                  h3a161e8_7    bioconda
intervaltree              3.1.0                    pypi_0    pypi
joblib                    0.16.0                     py_0  
krb5                      1.17.1               hddcf347_0  
libcurl                   7.69.1               h051b688_0  
libcxx                    10.0.0                        1  
libdeflate                1.0                  h1de35cc_1    bioconda
libedit                   3.1.20181209         hb402a30_0  
libffi                    3.2.1                         1    bioconda
libssh2                   1.9.0                ha12b0ac_1  
ncurses                   6.1                  h0a44026_1  
nextgenmap                0.5.5                h470a237_2    bioconda
numpy                     1.19.2                   pypi_0    pypi
openjdk                   8.0.152              h1de35cc_3  
openssl                   1.1.1h               haf1e3a3_0  
pandas                    1.1.2                    pypi_0    pypi
perl                      5.26.2               h4e221da_0  
pip                       20.2.2                   py38_0  
pybedtools                0.8.1                    pypi_0    pypi
python                    3.8.1                h359304d_1  
python-dateutil           2.8.1                    pypi_0    pypi
readline                  7.0                  h1de35cc_5  
samtools                  1.9                 h8aa4d43_12    bioconda
seqtk                     1.3                  h2573ce8_2    bioconda
setuptools                49.6.0                   py38_0  
slamdunk                  0.4.3                    pypi_0    pypi
sortedcontainers          2.2.2                    pypi_0    pypi
sqlite                    3.31.1               ha441bb4_0  
tk                        8.6.10               hb0a8c7a_0  
varscan                   2.4.4                         0    bioconda
wheel                     0.35.1                     py_0  
xz                        5.2.5                h1de35cc_0  
zlib                      1.2.11               h1de35cc_3  
$
```


[bioconda]:https://bioconda.github.io/
[condafrombrew]:https://medium.com/ayuth/install-anaconda-on-macos-with-homebrew-c94437d63a37
[installbrew]:https://medium.com/ayuth/iterm2-zsh-oh-my-zsh-the-most-power-full-of-terminal-on-macos-bdb2823fb04c
