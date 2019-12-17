# FAQ

Frequently Asked Questions

### Installation

#### Can planemo_init add additional features without generating the whole wrapper using the command line?

No. You must use planemo_init with all the options included, you cannot add additional cases to an already existing wrapper (xml file).

### Test

#### Does planemo t not work if you don't include all the input and output test files in the same directory?
Yes. you must include all the input and output files in order to test. You can also select specific wrappers for testing, such as planemo t your.xml then you only need to include the test files for your.xml wrapper.

### Debug

#### Where can I get help with debugging?
You can search for open planemo issues and get help here: https://github.com/galaxyproject/planemo/issues.

#### It says 'internet not reachable' when I am connected to the internet. What can I do?
You need to set the curl connect timeout and curl max time in the config file which is allocated in the following path:

  * `$ cd ~`
  * `$ cd .sdkman/etc`
  * `$ ls`

Open the config file and change the following:

sdkman_curl_connect_timeout=20
sdkman_curl_max_time=0

It might be that the internet service provider is blocking the connection. You can resolve this by either using a different internet or by using a VPN. See the [link](https://stackoverflow.com/questions/37189001/getting-internet-not-reachable-with-sdkman) for more details on this bug.

---

# Debug

This guide outlines some of the common warning messages and errors during the planemo installation & testing procedures.

## Common Warnings

Example:

    .. WARNING: No tests found, most tools should define test cases.
    .. WARNING: No valid test(s) found.

This indicates that there are no test cases written in the wrapper(.xml file).

## Common Errors

- dbkey error: https://github.com/galaxyproject/planemo/issues/746
- Cannot locate xUnit report: https://github.com/galaxyproject/planemo/issues/724
- planemo couldn't find a target test-data directory: This means that there is no test-data directory created for planemo testing.
  Fix the issue by simply checking planemo l or create a test-data directory manually and copy all input & output files.

## Version Conflicts

A lot of troubles with the initial setup comes from the version conflict of multiple tools and dependencies. One can find the list of compatible versions below:

Python 3.6.5
Planemo 0.53.0
Galaxy
