# Welcome

## Introduction

This tutorial is updated as of June 20, 2018 by Hedgie Jo.
Originally written by Prashant Kuntala in 8th March, 2018.

This page was made using mkdocs, for more information visit [mkdocs.org](http://mkdocs.org).

## Quick Commands

List of main commands and their purpose.

Galaxy

* `sh run.sh` - run the local galaxy instance
* `grails` - install dependencies

Planemo

* `planemo tool_init --id 'wrap' --name 'Tool Wrapper'` - generate xml file
* `planemo l` - wrapper syntax check for the galaxy coding standard
* `planemo t` - test tool functionality
* `planemo s` - serve planemo on local host

PEGR

* `mysql.server start` - start the sql server, in this case the local pegr instance
* `grails run-app` - start the grails app

        mysql> Create database pegr; # create pegr database
        mysql> use pegr;             # set pegr as the database
        mysql> source pegrDB.sql     # use the sql server
        mysql> show tables;          # view tables

Grails

* `grails` - install local dependencies
* `grails run-app` - start the grails app

## Project layout

    mkdocs.yml      # The configuration file.
    docs/
        index.md    # The documentation homepage.
        galaxy.md   # Galaxy tutorial
        planemo.md  # Planemo tutorial
        pegr.md     # PEGR tutorial
        grails.md   # Grails Groovy tutorial
        debug.md    # Debugging help
        faq.md      # Frequently Asked Questions

## Navigation

Here are some tips on how to navigate through the site.

    - Navigation Bar: select any pages you want to view
    - Search: search any keyword on the site
    - Previous: Go back to the previous page
    - Next: Move forward to the next page
