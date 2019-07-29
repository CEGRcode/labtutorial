## Dependencies

- Assuming you have installed the required [development tools for Mac OS](http://127.0.0.1:8000/#development-tools)
- Install [samtools](http://samtools.sourceforge.net/-Install).
    - `brew install samtools`
- Install [yarn](https://yarnpkg.com/en/docs/install).
    - `brew install yarn`

----

## Installing Galaxy

_It is recommended that you clone galaxy to your `~/Desktop`, so that GALAXY's internal paths are shorter and avoid conda throwing any errors that your path exceeds the maximum characters for tool install paths_

_here we are going to work with `17.09` release of GALAXY._

- Open a `terminal` and clone GALAXY to your `~/Desktop`.

```
cd ~/Desktop
git clone -b release_17.09 https://github.com/galaxyproject/galaxy.git
```

- Start GALAXY

```
cd galaxy
sh run.sh
```

_Note that when you are starting galaxy for the first time, it takes some time to install required internal dependencies and setup its internal database. Once its gone through it, you should be able to see the start up page._

- Congratulations you have successfully installed GALAXY on your local machine.

|Useful resources & tutorials|
|---|
|[Get galaxy](https://galaxyproject.org/admin/get-galaxy/)|
|[Learn galaxy](https://galaxyproject.org/learn/)|
|[Dagobah training](https://github.com/galaxyproject/dagobah-training)|

-----

## Configuring Galaxy

**Setting up an Admin**

`galaxy.ini` file contains most of the configurations to your local galaxy. It has some predefined defaults which you might want to re-think before changing anything.

_We will be using `cegr@psu.edu` as the default admin, so that it can be used to integrate with PEGR in the PEGR tutorial, where we use our local galaxy to send out information to PEGR_

- Make sure your Galaxy is not online, before making any changes to configuration.
- Open your galaxy folder in `Finder` on your mac. you should see a `config/` folder.
- Inside the `config/`, you will find a `galaxy.ini.sample` file.
- Copy the `galaxy.ini.sample` within the same folder and rename the copied file to `galaxy.ini`
- Open the `galaxy.ini` in a text editor of your choice.
- Search for the line that starts with `admin_users` and add `cegr@psu.edu`

![Galaxy Admin config Image](./image/localgalaxy_23.png)

_Above image shows the change. make sure you have edited `~/Desktop/galaxy/config/galaxy.ini`_

- Start your Galaxy now, `sh run.sh`
- Click on `User` menu and then click `register`
- You should see a registration page as below

![Galaxy register page](./image/register.png)

- Enter `cegr@psu.edu` as the email address and choose a `password`, `public name` of your choice.
- Once you login, you should now have the `Admin` menu show up on the menu bar on the top.

![Galaxy Admin option](./image/adminmenu.png)

- When you click on the `Admin` tab, you should see the below page.

![Galaxy Admin page](./image/adminpage.png)

-----

## Adding Custom Genomes

_`sacCer3_cegr` is the customized yeast genome we are using within the lab. Though the differences are few (to the best of my knowledge), but are very important to keep in mind while performing general data analysis. This genome deviates from the UCSC recommendations_

_`sacCer3_cegr` contains `2-micron` regions & chromosome naming is using `decimal number` instead of `roman numerals.` This causes some disadvantages to use tools like bedGraphToBigWig, etc._

- Click on `Admin` tab, then under `Tools and Tool Shed` section, click on `Search Tool Shed`

![Galaxy ToolShed](./image/galaxy_toolshed.png)

- Click on `Galaxy Main Tool Shed`

![Galaxy ToolShed Categories](./image/toolshed_categories.png)

- Search & Install below tools. you can copy and paste below tool names into the search box.

|Tool Name |
|-----|
|`data_manager_bwa_mem_index_builder`|
|`data_manager_fetch_genome_dbkeys_all_fasta`|
|`data_manager_sam_fasta_index_builder`|
|`data_manager_twobit_builder`|

- Below images previews the steps for installing a tool.

![Tool Install ex1](./image/install_ex1.png)

![Tool Install ex2](./image/install_ex2.png)

![Tool Install ex3](./image/install_ex3.png)

- Once you have installed all the above tools, You can verify the installation at `Admin > Tools and Tool shed > Manage installed tools`

![Manage installed tools](./image/localgalaxy_1.png)

- Download the `sacCer3_cegr` genome from [here](./image/data/sacCer3_cegr.fa)
- Upload the file you downloaded above into galaxy, using the `upload button` located on the tools menu, as shown in the image below.

![Upload button location](./image/upload_button.png)

- Once you have uploaded, you should see the file appear in the “history pane” on your right.
- Go to `Admin` tab, under `Data` section, Click on `Local data` to get `Data manager`

![Data Manager](./image/localgalaxy_2.png)

- We need to run below tools one after the other in the exact order mentioned below:

| Tool | Order |
|----|------|
|Create DBkey and reference geneome| #1|
| TwoBit| #2|
| BWA-MEM | #3|
| SAM Fasta| #4|

_All these tools are available from the `Admin > Data > Local data` section. Below are images for step-by-step execution of above tools in the same order. use them to fill out any default information that is required and follow along_

- You can specify sequence name to be `sacCer3_cegr` and leave everything as default in all the tools.

![Step 1](./image/localgalaxy_3.png)
![Step 2](./image/localgalaxy_4.png)
![Step 3](./image/localgalaxy_5.png)
![Step 4](./image/localgalaxy_6.png)
![Step 5](./image/localgalaxy_7.png)

- Once you have run all the tools, you need to check couple of things that populate in the internal database of galaxy. You can check that information from your `Admin` page.
- Go to `Admin > Data > Local data` section, under `View Tool Data Table Entries`. Click on `__dbkeys__` you should see something like below.

![viewtools data table entries](./image/localgalaxy_11.png)

![Step 6](./image/localgalaxy_8.png)

- Similarly check `all_fasta`,`twobit`, `bwa_mem_indexes`. All of them should contain an entry for `sacCer3_cegr`. Path could be different in your case.

![Step 7](./image/localgalaxy_9.png)
![Step 8](./image/localgalaxy_10.png)
![Step 9](./image/localgalaxy_12.png)

- If your able to see similar results as above images. `Congratulations!` you have successfully added a custom genome build into your galaxy.

-----

## Importing ChIP-exo Workflow

_We will install the core-sequencing workflow that the lab uses to analyze all the samples that are sequenced. This pipeline is run to create BAM files, peak calling using genetrack and MEME motif analysis._

- Download the workflow file [here.](./image/data/Galaxy-Workflow-paired_002.ga)
- Once you have downloaded the workflow. You can `import` it into your local galaxy from the `Workflow` tab using the `upload or import workflow` button located beside the search bar. _(see image below)._

![Workflow upload](./image/localgalaxy_16.png)

![Workflow import menu](./image/localgalaxy_17.png)

- Once you have selected the workflow file and clicked `import`. You might see some errors such as below. Nothing to worry, the error messages is caused by tools that are not yet installed & are important for the workflow to run in your galaxy.

![Workflow import errors](./image/localgalaxy_18.png)

- Click on `edit` option under the workflow drop-down menu. To find out the missing tools.
- You need to install each tool manually from toolshed. Go to `Admin > Tools and Tool Shed > Search toolShed` to search and install each tool that is missing.

_Few tools have their toolnames in the workflow that end with `output_statistics`. These are the tools that are not available on `Galaxy toolshed` and need to be side-loaded separately, which we will do in the next section. so for now, you can ignore installing these tools and their errors._

----

## Integrating CEGR _`output_statistics`_

_This section is similar to adding custom tools into Galaxy, here is a  ([tutorial](https://galaxyproject.org/admin/tools/add-tool-tutorial/)). `cegr-galaxy` repo contains other important scripts that are used to run the core-sequencing pipeline on production galaxy. The repo has a `README` file detailing the usage of each script._

- Clone the repository containing the CEGR tools from [seqcode/cegr-galaxy](https://github.com/seqcode/cegr-galaxy)
    - `git clone https://github.com/seqcode/cegr-galaxy.git`

- Copy the entire `cegr_statistics` folder to this location `galaxy/tools/` within your local galaxy.
- Open `galaxy/config/tool_conf.xml` in a text editor of your choice.

_If the above file doesn't exist, there should be a file in the same config directory called `tool_conf.xml.main`, copy and rename the file to `tool_conf.xml`_

- Add below lines at the end of file, within the `</toolbox>` tag.

```
<section id="cegr_tools" name="CEGR">
    <tool file="cegr_statistics/bam_to_scidx_output_stats.xml" />
    <tool file="cegr_statistics/bedtools_intersectbed_output_stats.xml" />
    <tool file="cegr_statistics/bwa_mem_output_stats_single.xml" />
    <tool file="cegr_statistics/cwpair2_output_stats.xml" />
    <tool file="cegr_statistics/extract_genomic_dna_output_stats.xml" />
    <tool file="cegr_statistics/extract_genomic_dna_output_stats2.xml" />
    <tool file="cegr_statistics/extract_genomic_dna_output_stats3.xml" />
    <tool file="cegr_statistics/fasta_nucleotide_color_plot_output_stats.xml" />
    <tool file="cegr_statistics/fastqc_output_stats.xml" />
    <tool file="cegr_statistics/fastqc_output_stats2.xml" />
    <tool file="cegr_statistics/genetrack_output_stats.xml" />
    <tool file="cegr_statistics/input_dataset_r1_output_stats.xml" />
    <tool file="cegr_statistics/input_dataset_r2_output_stats.xml" />
    <tool file="cegr_statistics/mark_duplicates_bam_output_stats.xml" />
    <tool file="cegr_statistics/meme_fimo_output_stats.xml" />
    <tool file="cegr_statistics/meme_meme_output_stats.xml" />
    <tool file="cegr_statistics/pe_histogram_output_stats.xml" />
    <tool file="cegr_statistics/repeatmasker_wrapper_output_stats.xml" />
    <tool file="cegr_statistics/repeatmasker_wrapper_output_stats2.xml" />
    <tool file="cegr_statistics/samtool_filter2_output_stats.xml" />
    <tool file="cegr_statistics/tag_pileup_frequency_output_stats.xml" />
  </section>

```

_The above lines informs GALAXY, where it can find the tools and corresponding toolwrappers_

- The file `galaxy/config/tool_config.xml` should look something like below:

![Adding CEGR tools](./image/addingcegrtools.png)

- Save the file and restart Galaxy. You should now see these tools appear under `Tools` menu within galaxy's `Analyze Data` tab similar to below.

![CEGR tools view](./image/cegr_tools.png)

- `Congratulations!` you have successfully installed `output_statistics` tools into your galaxy.
