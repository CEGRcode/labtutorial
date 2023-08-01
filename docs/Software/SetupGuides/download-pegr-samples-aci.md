---
id: download-pegr-samples-aci
title: Downloading PEGR data on ACI (ROAR)
sidebar_label: PEGR sample download
sidebar_position: 4
---

Besides using the browser, you can set-up your ROAR-ACI account to bulk download files if you have a list of PEGR sample IDs.

Keep in mind that these download scripts only work on ACI-ROAR, and not other systems, including your Mac workstation.

### 1. Clone `CEGRcode/EGC_utility_scripts`

Get the Github scripts for downloading data files from PEGR/Galaxy. There are a variety of ways to do this but we recommend logging into ACI-ROAR and cloning the repo to your home directory.

```
ssh aci
# authenticate
# ...

```


### 2. Install Bioblend (Galaxy API)

The Galaxy API python library needs to be installed on ACI. Make sure you're logged into ACI and run

```
pip install bioblend
```

You may opt to do this from the OpenOnDemand Terminal with the same effect.

### 3. Set-up shortcut
You have the capacity to run the scripts at this stage but this step will make it more convenient to download samples if you will be doing this a lot throughout your research.


#### a. Start by creating a file `~/shortcuts.sh` if it doesn't already exist
...and add the following lines to the file. Make sure to replace the API key values and your user email.
```
function creds() {
  GALAXY_API_KEY=ABCDEFGHIJKLMNO12345789    # paste Galaxy API Key here
  PEGR_API_KEY=ABCDEFGHIJKLMNO12345789      # paste PEGR API Key here
  USER_EMAIL=mypsuusername@psu.edu          # paste email here
}
function download-pegr() {
  python3 ~/EGC_utility_scripts/download_datasets_from_PEGR-Galaxy_curl.py -g $GALAXY_API_KEY -p $PEGR_API_KEY -u $USER_EMAIL -f $1 $2 $3
}
function sym-bam() {
  python3 ~/EGC_utility_scripts/generate_BAM_file_from_PEGR.py -g $GALAXY_API_KEY -p $PEGR_API_KEY -u $USER_EMAIL -f $1 $2 $3
}
function sym-fq() {
  python3 ~/EGC_utility_scripts/generate_FQ_file_from_PEGR.py -g $GALAXY_API_KEY -p $PEGR_API_KEY -u $USER_EMAIL -f $1
}
function sym-meme() {
  python3 ~/EGC_utility_scripts/generate_MEME_file_from_PEGR.py -g $GALAXY_API_KEY -p $PEGR_API_KEY -u $USER_EMAIL -f $1 $2 $3
}
function sym-fimo() {
  python3 ~/EGC_utility_scripts/generate_FIMO_GFF_from_PEGR.py -g $GALAXY_API_KEY -p $PEGR_API_KEY -u $USER_EMAIL -f $1 $2 $3
}
```

You can get your `PEGR_API_KEY` by logging into www.pegr.org and going to your Account Profile page (linked in top right of screen).

![PEGR profile](./images/PEGR-website-profile.png)

#### b. Create your `~/.bashrc` file if it doesn't already exist
...and add the following lines to the file, as is.
```
creds
source ~/shortcuts.sh
```

#### c. Download data files from PEGR

Given some text file of `samples.txt` with PEGR sample ids in the first tab-delimited column, you can create symlinks different kinds of files from PEGR.

```
sym-bam samples.txt
sym-fq samples.txt
sym-meme samples.txt
sym-fimo samples.txt
```

Symlinks are like shortcuts and can be generated much faster than downloading files from PEGR (involves copying and more I/O).

If you wish to create hard-copies, you can simply copy the symlinked files or run the following to download a collection of files for each sample.
```
download-pegr samples.txt
```

:::caution
If you are downloading human or other data with a several genome build options in PEGR, it is critical that you include the genome build information (`-b`) (does not apply for `sym-fq` which is genome build-independent).

Example:
```
sym-bam samples.txt -b hg19
```
:::
