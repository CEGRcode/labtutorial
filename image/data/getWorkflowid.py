# Author: Prashant Kuntala
# date  : 8th March, 2018

# last modified: 8th March, 2018

# This script uses the bioblend API for galaxy to access your local or any galaxy instance and display all the workflows along with their ids.

#  reference to bioblend: https://bioblend.readthedocs.io/en/latest/api_docs/galaxy/docs.html

# usage: python getWorkflowid.py

from bioblend.galaxy import GalaxyInstance

# creating a new GalaxyInstance
# gi = GalaxyInstance(url='http://example.galaxy.url', key='your-API-key')

gi = GalaxyInstance(url='http://localhost:8090', key='a8bbc078ee5243fd056a8c6e00ca994c')
workflows = gi.workflows.get_workflows()

# iterating through all the workflows and printing the information.
for w in workflows:
    print "\n"
    for key, value in w.items():
        print "{} \t: {}".format(key,value)
