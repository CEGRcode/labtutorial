# Galaxy

## Pre-Install

Install samtools (locally) on your machine if it is not already installed.

* `$ brew install samtools` # (mac)
* `http://samtools.sourceforge.net/-Install` # (other)

Install yarn on your machine, if not already installed.

* `$ brew install yarn` # (mac)
* `https://yarnpkg.com/en/docs/install` # (other)

## Install Local Galaxy

- Go to the tutorial link:  [galaxyproject.org/admin/#get-galaxy](https://galaxyproject.org/admin/get-galaxy/)
- Clone the galaxy somewhere lower in the directory structure to avoid conda issues and problems. BEST CHOICE: clone it to your ~/Desktop
* `$ git clone -b release_17.09 https://github.com/galaxyproject/galaxy.git`
* `$ git branch –a` # optional
* `$ git checkout master` # optional

- Go into the directory “galaxy”
  * `sh run.sh` # run galaxy server
  - Couple of dependencies are installed and you should see the galaxy running at localhost:8080

Basic starting point tutorials:

* [galaxyproject.org/#learn](https://galaxyproject.org/learn/)
* [github.com/galaxyproject/#dagobah-training](https://github.com/galaxyproject/dagobah-training)

## Install sacCer3_cegr Genome build into your Local Galaxy

- Run the galaxy on http://127.0.0.1:8080.
- Register by click on User -> register
  * Use the following credentials
  * `Username: cegr@psu.edu` # username should be same to make the api calls work
  * `Password: your_password` # create a password of your choice
- Create a copy of “galaxy.ini.sample” in Config folder and rename it to “galaxy.ini”.

This makes sure that galaxy takes your configurations rather than the default ones.
- Open the galaxy.ini file and search for “admin_users” and add the username to have admin access.

- Install the below tools from your admin toolshed. (usually install those with the “Owner” being “iuc” or “devteam”), because the other “Owners” can have their own version for the tool in the Toolshed.
* data_manager_bwa_mem_index_builderodata_manager_fetch_genome_dbkeys_all_fastaodata_manager_sam_fasta_index_builderodata_manager_twobit_builder

- Upload the “sacCer3_cegr. fa” fasta file into the galaxy using the “upload button” on the left pane top right corner.
(available in the data folder, provided along with this documentation).
- Once you have uploaded, you should see the file appear in the “history pane” on your right.

- Go to Admin portal. Under the “data” section. Click on localdata.
- You need to run the following “data managers tools” that we just installed in the exact order as below:

* `CreateDBkey and reference geneomeoTwoBitoBWA-MEM`
* `SAM Fasta`

-Below is a screenshot for each of the steps, in the same order of execution.
-Once you click on the “Create DBkey and Reference Genome”
-Fill out the information as below and click “Execute”.
-You can specify sequence name to be “SacCer3_cegr” and leave everything as default in all the tools.

- Once you have run all the tools, you need to check couple of things populate in the internal databases of galaxy. You can check that information from your “Admin” page.
- Go to Admin -> View Tool Data Table Entries -> __dbkeys__
- Similarly check “all_fasta”,”twobit”,”bwa_mem_indexes” (all the ones that are bold in the below image, should contain an entry for sacCer3_cegr)

- Above are the screenshots for three of the database tables, in your local galaxy.
- If you have those entries in the respective tables, then you are good to go.

## Installing the Galaxy / ChIP-exo Workflow into your local instance
- Go to https://chipexo-gw.aci.ics.psu.edu/,

Log in with the correct credentials
* `Username: username`
* `Password: password`
- You should see the below page.

## Installing RepeatMasker on mac [optional]
- If you want to use it, not required for YEPQC pipeline

-	Go to the website http://www.repeatmasker.org/RMDownload.html
-	You need to install the prerequisites first.
-	Our choice of Sequence Search engine is RMBlast.
*	Install RMBlast from http://www.repeatmasker.org/RMBlast.html
*	You can just download all the binaries from these two locations based on your machine (mac, linux)
*	ftp://ftp.ncbi.nlm.nih.gov/blast/executables/rmblast/2.2.28/
*	ftp://ftp.ncbi.nlm.nih.gov/blast/executables/blast+/2.2.28/
*	extract them and copy all the binaries into “/usr/local/bin/” so that all users can use them.

-	Once you have RMBlast setup , check whether you have “rmblastn“ binary in /usr/local/bin/
-	If you don’t then follow the steps in the RMBLAST installation website above.

-	Install TFR
-	Download your copy from this website: http://tandem.bu.edu/trf/trf.download.html
-	Now follow the rest of the instructions on http://www.repeatmasker.org/RMDownload.html

-	Under the Installation section
*	Download the RepeatMasker.tar.gz
*	Uncompress and copy it to /usr/local/
*	cd /usr/local/RepeatMasker and sudo perl ./configure
*	It prompts for various paths for the executables which we just installed.
*	Specify the paths in correctly and add the path to RepeatMasker to your $PATH

## Adding the cegr galaxy output statistics for the core pipeline.

- Reference to add new tools into galaxy: https://galaxyproject.org/admin/tools/add-tool-tutorial/
- Download the tools from seqcode
* https://github.com/seqcode/cegr-galaxy.git-extract and copy the cegr_statistics folder into your “tools” folder in galaxy.
- Please remember that below lines make your galaxy run on port 8090 and local pegr run on port 8080.
- Configure the port for galaxy in “galaxy.ini” file.
- You need to generate an apikey in your local galaxy so that it can communicate with the local PEGR.
- On “Admin/UserManagement” click on “API keys”. Click on “Generate a new key now”. Use that key in the below steps. (make sure you don’t generate keys for the same user twice, it can lead to errors.)
- create a copy of “stats_config.ini.sample” and rename it to “cegr_config.ini.sample”
- add the below lines into the file.

- Now you need to make galaxy know how to use these tools.
- Go to your “config” folder and make a copy of “tools_conf.xml.main” and rename it to “tools_conf.xml”
- Add below lines at the end of the file within the </toolbox>

- Save and restart galaxy.
- You can edit the pipeline to remove “Repeat masker” in the paired_002” workflow.
- Below images show removal of “Repeat masker” and rearranging the workflow.

## Adding your workflow id into your Local PEGR DB
- Each workflow in galaxy has a unique id that is assigned internally.
- We use bioblend framework (python) to access galaxy and retrieve your workflow id.
- Documentation: https://bioblend.readthedocs.io/en/latest/api_docs/galaxy/docs.html-You can use the “getWorkflowid.py” python script to get the workflow id.
Make sure you replace your galaxy instance url and apikey from your local instance.(script is available in the data folder, provided along with this documentation). Make sure that your galaxy is running before you use the script.
- Your output from the script looks like below.

  CONGRATULATIONS, YOU HAVE SUCCESSFULLY SET UP THE LOCAL GALAXY!
