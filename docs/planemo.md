# Planemo

## Pre-Install

Install [anaconda](https://www.anaconda.com/download) (locally) on your machine.

Install wget:

* `$ brew install wget` - (mac)
* `$ sudo apt-get install wget` - (others)

Install virtual environment:

* `$ brew install virtualenv` - (mac)
* `$ sudo apt-get install virtualenv` - (others)

NOTE: make sure [local galaxy](https://galaxyproject.org/admin/get-galaxy/) is installed.
Couple of dependencies are installed and you should see the galaxy running at localhost:8080

Install pip:

* `$ brew install pip` - (mac)
* `$ sudo apt-get install pip` - (others)

## Install

Install planemo:

* `	$ virtualenv .venv; . .venv/bin/activate`
* `	$ pip install –-upgrade pip # Upgrade pip if needed.`
* `	$ pip install planemo`

Basic [tutorial](https://planemo.readthedocs.io/en/latest/installation.html)
## Usage

This guide assumes that you have already installed Planemo and have a directory with one or more Galaxy tool with input & output files.

### 1) Init

Create galaxy tool wrapper using the init command.

* `$ planemo init`

CONGRATULATIONS, YOU HAVE SUCCESSFULLY SET UP THE PLANEMO TOOL!

Example:

	$ planemo tool_init
					--id 'id' \
					--name 'Name of the file' \
					--description 'Description (optional)' \
					--requirement software_version@2.2 \
					--example_command 'input & output command' \
					--example_input input_file \
					--example_output output_file \
					--test_case \
					--cite_url 'https://url' \
					--help_from_command 'id'

NOTE: Planemo is unable to partially initialize, for example if your xml file is missing "citation" section during linting, in order to add it from the command line you need to initialize the entire wrapper. So it's really for creating a new wrapper not modifying an existing one.

### 2) Lint
Planemo can check review tool for XML validity, syntax errors, and compliance with IUC best practices using the lint (l) command.

* `$ planemo lint` # same as planemo lint
* `$ planemo lint --help`

You will also see the test-data directory generated for testing.

### 3) Test
The test command can be used to test the functionality of tool(s). In other words, it checks if the xml file works as supposed to.

* `$ planemo test` - test all the xml files in the current directory
* `$ planemo test --galaxy_root=../galaxy wrapper.xml` - with optional parameters and specify file(s) to run the test.

By default, planemo will search parent directories to see if any is a Galaxy instance.

Important note: if you specify --galaxy_root folder, reverting it back might be difficult since the  planemo virtual environment path is set up to the galaxy directory. You can try to force planemo to download a disposable instance with the --install_galaxy flag.

* Ex: `$ planemo test --install_galaxy wrapper.xml`

### 4) Serve
After passing the test we can open Galaxy with the serve (or with s).

	$ planemo s
	...
	serving on http://127.0.0.1:8086

## Example

### 1) Seqtk

Use conda to install Seqtk:

* `$ conda install --force --yes -c bioconda seqtk=1.2`
* `$ seqtk seq` - check if seqtk is installed

Download an example FASTQ file

*	`$ wget https://raw.githubusercontent.com/galaxyproject/galaxy-test-data/master/2.fastq`
*	`$ seqtk seq -A 2.fastq > 2.fasta`
*	`$ cat 2.fasta`

If you are unable to download or execute the wget command, simply copy & paste the text and save as both 2.fastq and 2.fasta and continue along the steps:

	>EAS54_6_R1_2_1_413_324
	CCCTTCTTGTCTTCAGCGTTTCTCC
	>EAS54_6_R1_2_1_540_792
	TTGGCAGGCCAAGGCCGATGGATCA
	>EAS54_6_R1_2_1_443_348
	GTTGCTTCTGGCGTGGGTGGGGGGG

Run the following command to generate seqtk_seq.xml file. These contain minimal requirements for the xml file.

	$ planemo tool_init --force \
                  --id 'seqtk_seq' \
                  --name 'Convert to FASTA (seqtk)' \
                  --requirement seqtk@1.2 \
                  --example_command 'seqtk seq -a 2.fastq > 2.fasta' \
                  --example_input 2.fastq \
                  --example_output 2.fasta \
                  --test_case \
                  --cite_url 'https://github.com/lh3/seqtk' \
                  --help_from_command 'seqtk seq'

Explanation of each command options (more [here](https://planemo.readthedocs.io/en/latest/commands.html)):

	id						Short identifier for new tool (no whitespace).
	force					Overwrite existing tool if present.
	name					Name for new tool.
	description				Short description for new tool.
	requirement 			Name of the package.  requirements will be set using Bioconda.
	example_command			Example to command with paths to build Cheetah template from. Must follow with --example_input and --example_output.
	example_input			Replace input file.
	example_output			Replace output file.
	test_case				Generate test-data directory with tool test cases from the supplied example.
	cite_url				Supply a URL for citation.
	help_from_command		Auto populate help from supplied command.

Type the following in the same directory where your seqtk.xml is located.

* `$ planemo lint seqtk.xml`

- Tip: Planemo lint command only checks if the syntax is correct, so if you are unable to pass the lint using planemo, check to make sure the above requirements are satisfied. If output says "Failed linting" at the end, see the current [github issues](https://github.com/galaxyproject/planemo/#issues).

Successful output [here](image/output.jpg)

Functionality test

	$ planemo t

Output:

	$ planemo t
	...
	All 1 test(s) executed passed.
	seqtk_seq[0]: passed

If error occurs, refer to the error report page on GitHub.

### 2) getRandomBed

Download getRandomBed.py tool:

Use the planemo commands to generate the xml file getRandomBed.xml

Solution:

	planemo tool_init --force \
                    --id 'getRandomBed' \
                    --name 'Random Bed' \
                    --requirement python@2.7.14 \
                    --example_command '$__tool_directory__/genRandomBed.py $inputBed' \
                    --example_input inputBed \
                    --example_output randomBed \
                    --test_case \
                    --cite_url 'http://www.pughlab.psu.edu/' \
                    --help_from_command 'getRandomBed'

### 3) toolExample.pl

Consider the following Perl script.

		#!/usr/bin/perl -w

		# usage : perl toolExample.pl <FASTA file> <output file>

		open (IN, "<$ARGV[0]");
		open (OUT, ">$ARGV[1]");
		while (<IN>) {
		    chop;
		    if (m/^>/) {
		        s/^>//;
		        if ($. > 1) {
		            print OUT sprintf("%.3f", $gc/$length) . "\n";
		        }
		        $gc = 0;
		        $length = 0;
		    } else {
		        ++$gc while m/[gc]/ig;
		        $length += length $_;
		    }
		}
		print OUT sprintf("%.3f", $gc/$length) . "\n";
		close( IN );
		close( OUT ); #__end__


Create an xml file for the script with an output as follows:

	<tool id="gc_content" name="Compute GC content">
	  <description>for each sequence in a file</description>
	  <command>perl $__tool_directory__/gc_content.pl $input output.tsv</command>
	  <inputs>
	    <param format="fasta" name="input" type="data" label="Source file"/>
	  </inputs>
	  <outputs>
	    <data format="tabular" name="output" from_work_dir="output.tsv" />
	  </outputs>
	  <help>
	This tool computes GC content from a FASTA file.
	  </help>
	</tool>

Solution:

	planemo tool_init --force \
						--id 'gc_content' \
						--name 'Compute GC content' \
						--description 'for each sequence in a file' \
						--example_command 'perl $__tool_directory__/gc_content.pl $input output.tsv' \
						--example_input input.fasta \
						--example_output output.tsv \
						--help 'This tool computes GC content from a FASTA file.'

Q: Will this pass the planemo lint test?

A: No it is missing the following parameters:

					test_case, requirement, citation, help_from_command
