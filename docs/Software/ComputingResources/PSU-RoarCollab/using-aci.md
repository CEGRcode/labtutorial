---
id: using-aci
title: Using Collab
sidebar_label: Using Collab
sidebar_position: 3
---

The sys admins running ROAR Collab have set-up the HPC with some useful tools that you can take advantage of. Below are some brief intros with links to the more extensive documentation that Penn State supplies about their systems. I encourage you to browse their documentation for more information to find other useful things you can do with their HPC.


## Where do I put my files? (Navigating the filesystem)

I like to work on scratch systems for rough drafts or extemely large scale analyses (see GenoPipe simulations) but because of the 1 month limit on files, most users around this lab will want to use the group storage space (`/storage/group/bfp2/default`). This is a great spot to share files with other members of the lab as well (just give them the path to the files you want to share).

To get started, make sure you are a member of the group:

```
groups
# check that bfp2_collab is in the returned list
```

Then make a directory for yourself in `/storage/group/bfp2/default` patterned off the other users (`mypsuid-FirstLast`). This is where you can store your project data and scripts. 

[Read more about file storage and quotas here][storage-rc-docs]


## What is `module`?

Module commands let you turn on/off pre-installed software that the IT/sysadmins set up for us. Use `load` to turn software “on” and `unload` to turn software “off”

Before installing Anaconda, Samtools, Bedtools, or BWA yourself, try using the Module system on ACI
```
module load anaconda3
module load samtools
module load bedtools
module load bwa
```

[Read more about module on Collab here][module-rc-docs]

[Read more about module in general here][module-docs]


## What is SLURM?

Roar Collab is a computing resource with a lot of users. If they are all trying to run their programs at the same time, the machines might get overloaded from running so many programs. As a result, many HPC sys admins install a job scheduler that receives compute requests from all the users with specifications on run time, CPUs/Memory needed, etc and determines a prioritization for these jobs and executes them as other programs finish and resources open up.

[SLURM][slurm-docs] is one type of job scheduler and runs similarly to other job schedulers you may have heard of like Portable Batch Scheduler (PBS) and Sun Grid Engines (SGE). It executes like a shell script but with a special header that tells the SLURM scheduler what kind of compute the script needs to execute. Below is some minimal info to get you started but reading the documentation for more options is highly encouraged. Our lab's publication git repo template ([`20XX-LastName_Journal`][template-repo]) leverages SLURM scripts to parallelize jobs.

[Read more about SLURM on Collab here][slurm-rc-docs]

[Read more about SLURM in general here][slurm-docs]


### Example

Take the below slurm script named `hello_world.sbatch`.

```
#!/bin/bash
#SBATCH -N 1
#SBATCH --mem=8gb
#SBATCH -t 00:01:00
#SBATCH -A open
#SBATCH -o hw.stdout
#SBATCH -e hw.stderr

# Print hello world
echo "Hello World!"
# Make a file named blah.txt
touch blah.txt
```

This script can be executed using regular shell with:
```
sh hello_world.sbatch
```
...which will output
```
Hello World!
```
to your terminal and create a new file called `blah.txt` in your current working directory.


It can also be submitted as a job to the SLURM scheduler and leverage more resources with the command
```
sbatch hello_world.sbatch
```
and you can check on its progress with
```
squeue -u mypsuusername
```
or cancel it before it finishes running using the jobid printed from the squeue command with
```
scancel <jobid>
```
or wait until it finishes and check that the `blah.txt` file was created and that `Hello World!` was printed to STDOUT by checking the STDOUT output filelocation specified in the SLURM header (`hw.stdout`).


You can even modify the script to run it a bunch of times in parallel using SLURM's job array feature:

```
#!/bin/bash
#SBATCH -N 1
#SBATCH --mem=8gb
#SBATCH -t 00:01:00
#SBATCH -A open
#SBATCH -o hw.stdout-%a
#SBATCH -e hw.stderr-%a
#SBATCH --array 1-3,5

# Print hello world
echo "Hello World! ($SLURM_ARRAY_TASK_ID)"
# Make a file named blah.txt
touch blah-$SLURM_ARRAY_TASK_ID.txt
```

which will result in the creation of five files:
```
blah-1.txt
blah-2.txt
blah-3.txt
blah-5.txt
```

and five files that contain the STDOUT from each of the five parallel jobs:
```
hw.stdout-1
hw.stdout-2
hw.stdout-3
hw.stdout-5
```




[template-repo]: https://github.com/CEGRcode/20XX-LastName_Journal

[module-rc-docs]: https://www.icds.psu.edu/using-software/
[slurm-rc-docs]: https://www.icds.psu.edu/using-slurm-on-roar-collab/
[storage-rc-docs]: https://docs.icds.psu.edu/file-system/file-storage/

[module-docs]: https://modules.readthedocs.io/en/latest/
[slurm-docs]: https://slurm.schedmd.com/quickstart.html