# Grails

## Grails Tutorial

•	Tutorial link reference: http://grails.asia/

### Introduction
What is Grails?

Grails is an open source web application framework that uses the Apache Groovy programming language (based on Java). It is intended to be a high-productivity framework by following the "coding by convention" paradigm, providing a stand-alone development environment and hiding much of the configuration detail from the developer.

G2One - The Groovy Grails Company - was acquired by SpringSource in November 2008,[2] and it was later acquired by VMware.[3]

### Benefits

1. Convention over configuration ushers in abundant productivity for the developers.
2. Grails enables you to write DRY code. If you have any existing Java code, reusing it in Grails should be no problem.
3. Developers don’t need to write all the plumbing/boilerplate code with Grails.
Here, developers have a big relief as they can concentrate more on turning your ideas into applications instead of chasing after configuring the framework components.
4. As it is free of XML configuration, the Groovy on Grails can help you to develop the application in real time.
5. Grails supports scaffolding. This helps developers to create applications with CRUD functionalities- Create, Read, Update and delete.
6. Simple and easy to maintain code

### Migration

Grails 3.0 is a complete ground up rewrite of Grails and introduces new concepts and components for many parts of the framework.
When upgrading an application or plugin from Grails 3.0 there are many areas to consider including:

The migration of Grails app version 2 to 3 can be done with helpful [links](https://www.youtube.com/watch?v=IhehO9aM5bk).

To summarize the video, there are three main changes:

  * Different file directories
  * Merged files
  * Deleted files

There are also more changes as follows:

  Removal of dynamic scaffolding from Grails 3.0.0 till 3.0.4 when it was re-introduced
  Removal of before and after interceptors
  Project structure differences
  File location differences
  Configuration differences
  Package name differences
  Legacy Gant Scripts
  Gradle Build System
  Changes to Plugins
  Source vs Binary Plugins

The biggest suggestion from the video is installing a fresh, new grails 3 app and migrating from the original grails 2 app instead of trying to make the changes in the original app. This will create a clean migration platform.

After the migration, you must test intensively to catch any unexpected errors.
