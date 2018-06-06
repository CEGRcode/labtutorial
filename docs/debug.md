# Debug

This guide outlines some of the common warning messages and errors during the planemo installation & testing procedures.

## Common Warnings

Example:

    .. WARNING: No tests found, most tools should define test cases.
    .. WARNING: No valid test(s) found.

This indicates that there are no test cases written in the wrapper(.xml file).
Including any test, for an example:


## Common Errors

- dbkey error: https://github.com/galaxyproject/planemo/issues/746
- Cannot locate xUnit report: https://github.com/galaxyproject/planemo/issues/724
- planemo couldn't find a target test-data directory: This means that there is no test-data directory created for planemo testing.
  Fix the issue by simply checking planemo l or create a test-data directory manually and copy all input & output files.
