---
id: download-pegr-samples-aci
title: Downloading Data from PEGR
sidebar_label: PEGR Data Download
sidebar_position: 4
---

There are many ways to get your genomic data from PEGR.

## Download through the browser

:::caution
Note to Olivia: Add screenshots for downloading files from PEGR here
:::

## Bulk sample download

### 1. Clone `CEGRcode/EGC_utility_scripts`

Get the Github scripts for downloading data files from PEGR/Galaxy. We recommend using Github Desktop for this.

### 2. Install Dependencies

Check the [README.md](https://github.com/CEGRcode/EGC_utility_scripts) for the conda-style installation.

### 3. Get your credentials
You can get your `PEGR_API_KEY` by logging into www.pegr.org and going to your Account Profile page (linked in top right of screen).

![PEGR profile](./images/PEGR-website-profile.png)

Make sure you also know what email PEGR uses for your account (if you login with your Cornell NetID, then your `PEGR_EMAIL` is `<mynetid>@cornell.edu`)

You can even add these to your `~/.bashrc`/`~/.bash_profile`/`~/.zshrc` file for convenience.

```
export PEGR_API_KEY=ABCDEFGHIJKLMNO12345789      # paste PEGR API Key here
export USER_EMAIL=mypsuusername@psu.edu          # paste email here
```

### 4. Get the list of samples you want to download

For example, you may have a file called `mysamples.txt` that contains the sample ids like this:
```
12141
21173
```

As long as the PEGR sample ids are in the first tab-delimited column, you can give these scripts any kind of flat text file:

```
12141	OtherMetadata1
21173	Whatever you want: and however you want
```

### 5. Execute any of the scripts from the `EGC_utility_scripts` directory

If you're not sure how to execute them, you can have them print usage statements using the help flag (`-h`):

```
python generate_FQ_file_from_PEGR.py -h
```

...or check the README.md for the full list of usage statements.

Make sure you are in the `EGC_utility_scripts` directory.


:::caution
If you are downloading human or other data with a several genome build options in PEGR, it is critical that you include the genome build information (`-b`) (does not apply to downloading FASTQ files which is genome build-independent).
:::
