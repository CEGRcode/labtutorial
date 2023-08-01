---
id: planemo
title: Planemo
sidebar_position: 3
---

_**Best Practices & Standards**_

- [Creating Galaxy tools](https://galaxy-iuc-standards.readthedocs.io/en/latest/best_practices.html)
- [Writing tool wrappers](https://galaxy-iuc-standards.readthedocs.io/en/latest/best_practices/tool_xml.html)

_**Tool Development**_

- [Galaxy XML Tags ](https://docs.galaxyproject.org/en/latest/dev/schema.html)
- [What is Planemo ?](https://planemo.readthedocs.io/en/latest/readme.html)
- [Building Galaxy Tools Using Planemo](https://planemo.readthedocs.io/en/latest/writing_standalone.html)
- [Galaxy Development Training Slides](https://galaxyproject.github.io/training-material/topics/dev/)

_**Publishing to GALAXY Toolshed**_

- [ToolShed Readiness Checklist](https://galaxy-iuc-standards.readthedocs.io/en/latest/best_practices/integration_checklist.html#testing-your-tool)
- [Publishing tools from Planemo](https://planemo.readthedocs.io/en/latest/publishing.html)


_Make sure you refer to the above links while writing tools and their xml wrappers. It will be easy to submit tools to `Intergalactic Utilities Commission `[IUC](https://github.com/galaxyproject/tools-iuc), if you followed the above standards. [emoji cheatsheet](https://www.webfx.com/tools/emoji-cheat-sheet/) reference used in this documentation._

# Install

- Follow the instructions in the [documentation](https://planemo.readthedocs.io/en/latest/installation.html) to install on your machine.

## Using Planemo

- Three step process that every tool need to go through :
    - `planemo lint <your_tool.xml>`
    - `planemo test  <your_tool.xml> --galaxy_root=[path to your local galaxy instance] --test_data [path to the directory containing your testdata]`
    - `planemo serve <your_tool.xml> --galaxy_root=[path to your local galaxy instance] `

- If you don't want to use (or) don't have your local galaxy for testing, `Planemo` will download & spin-up a standalone galaxy to test your wrappers. make sure you installed `Planemo` within a python environment as instructed in [installation](https://planemo.readthedocs.io/en/latest/readme.html) documentation for `Planemo`.

- Each of the above commands supports `--help` option. use it for the entire list of supported options.

- If `--no-xsd` option is used for `linting` the tool wrapper,`Planemo` finds errors and warnings within your wrappers by ignoring the validation of correct XML schema. (read the documentation for more info, you might generally want to avoid using this option)

- `planemo test` expects test data to be available in a folder named as `test-data`. you need to write tool specific tests and also provide test data for testing the wrapper, before running the command.

## Writing functional tests for Tool Wrappers

**References to writing proper tests**

- [Basic Tests](https://galaxyproject.org/admin/tools/writing-tests/)
- [Using `<tests></tests>` XML tag](https://docs.galaxyproject.org/en/latest/dev/schema.html#tool-tests)
- [Advanced Tests](https://planemo.readthedocs.io/en/latest/writing_advanced.html#test-driven-development)
- Using [`reStructuredText`](http://docutils.sourceforge.net/docs/ref/rst/restructuredtext.html) to format `help` section within the tool wrapper - [documentation](https://docs.galaxyproject.org/en/latest/dev/schema.html#tool-help)
- Use the online [restructedText editor](http://rst.ninjs.org/) to write and format your content under `<help> </help>` section for the wrapper.

- planemo creates a `tool_test_output.html` file to showing the errors and debugging information if tools fail otherwise, shows the test output.

- `planemo serve` lets you visualize the tools wrapper in GALAXY instance once it passes the tests.

**Flake8 & pycodestyle for python tools**

- Python scripts must conform to `pep8` standards and also pass `flake8`, so that your tools pass the `travisCI` tests done by `IUC`.
- `pycodestyle` is the utility to test your python scripts for pep8 coding standards

```
pycodestyle --show-pep8 --show-source --ignore=E501 <your_tool>.py
```

- For the case of submitting and testing the pep8 conformations, the IUC ignores some of the minor errors , such as E501, E201, E202. Refer the below issue on IUC, on what was actually proposed. [tools-iuc/issue/467](https://github.com/galaxyproject/tools-iuc/issues/467)

- I would install _flake8_ and _flake8-import-order_ to do a simple test to remove any errors that pop up after pep8. Below is the command to test the flake8 on the scripts within the current directory.

```
# installing flake8 and flake8-import-order
pip install flake8 flake8-import-order

# Testing for flake8 errors
flake8 --ignore=E201,E202,E501 --count .
```

- flake8 documentation : [here](http://flake8.pycqa.org/en/latest/)
- flake8-import-order : [here](https://github.com/PyCQA/flake8-import-order)
- pycodestyle documentation: [here](https://pycodestyle.readthedocs.io/en/latest/)
