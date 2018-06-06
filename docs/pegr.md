# PEGR

Here are the list of tools we will install prior to installing local PEGR:

  - Sdkman
  - Grails
  - Groovy
  - Java

## Pre-Install

Install curl (For Windows, use Git Bash)

Install sdkman ([tutorial](http://sdkman.io/install.html)):

  * `$ curl -s "https://get.sdkman.io" | bash`
  * `$ source "$HOME/.sdkman/bin/sdkman-init.sh"`
  * `$ sdk version` # check your sdkman version

Install Grails:

* `$ sdk install grails 2.5.4`
* `$ sdk list grails`      # check your installation of grails
* `$ sdk use grails 2.5.4` # change your default grails to version 2.5.4

-	Now close the terminal and quit the terminal in your dashboard. [Important!]

Install Groovy:

* `$ sdk install groovy 2.4.4`
* `$ sdk list groovy` # check your current version of groovy

Install Java:

* `$ sdk install java 7u141-zulu` # install Java (specific version needed for current PEGR)
* `$ sdk install java 8u141-zulu` # alternate version that is also compatible
* `$ sdk list java` # Check your current version of java

-	Now Close your terminal and quit the terminal on the dashboard.[Need to do above step, if you want to run pegr locally ;)]

* `$ grails` # Make Grails install necessary dependencies
* Press ctrl+C to exit the prompt.

## PEGR Install

•	Go to any directory of your choice and clone the PEGR git repo.

* `$ git clone https://github.com/seqcode/pegr.git` # clone "pegr" in your directory

•	Navigate to pegr/pegr/grails-app/conf/BuildConfig.groovy and edit these lines

    grails.project.target.level = 1.6 -> grails.project.target.level = 1.7
    grails.project.source.level = 1.6 -> grails.project.source.level = 1.7

Download the [MySQL file](https://psu.app.box.com/file/175943271869) and rename it to pegrDB.sql

* `Go to System Preferences->MySql Icon` -(other) click to start the SQL server.
* `$ mysql.server start` -(mac) if you have installed using homebrew

-	Open the terminal and navigate to the same directory as the pegrDB.sql file
* `$ mysql -u root -p` # Connect to your server

This will prompt you for that password it gave you. [ if you installed MySQL using the .dmg file] otherwise, in the case of homebrew, there is no password set for root. You should be able to see the prompt mysql>

After successfully connected to the MySQL, set the password for root

	mysql> ALTER USER ‘root’@’localhost’ IDENTIFIED BY ‘<your new password> ‘;

•	Create and switch to the new database:

	mysql> Create database pegr;
	mysql> use pegr;
	mysql> source pegrDB.sql
	mysql> show tables;

  •	Successful output:
![Screenshot](image/pegr/pegr12.png)

Create a new user to access your “pegr” database

    mysql> create user ‘your_ username’@’localhost’ identified by ‘your_password’;
    mysql> grant all privileges on *.* to ‘your_username’@’localhost’;

For an example,

    mysql> create user hedgiejo@localhost identified by mypassword12;
    mysql> grant all privileges on *.* to hedgiejo@localhost;

Modify an existing account to gain a login credentials (need a valid non-WebAccess account)
Within your pegrDB, locate the user "labadmin" and replace the password value:

    UPDATE user
    set password="password"
    where username="labadmin";

Open the BuildConfig.groovy file at pegr/grails-app/conf/BuildConfig.groovy and check the plugins block and verify that the build for the tomcat is appropiate to your version and add the below lines within the plugin block

    compile ":spring-security-core:2.0.0"
    compile "org.grails.plugins:quartz:1.0.1"
    compile "org.grails.plugins:mail:1.0.7"

Also, within the dependencies block, uncomment runtime 'mysql' 	[if it is commented]

Now open DataSource.groovy at the pegr/grails-app/conf/DataSource.groovy and edit the datasource block to look like this:

    environments {
        development {
            dataSource {
                dbCreate = "update" // one of 'create', 'create-drop', 'update', 'validate', ''
                url = "jdbc:mysql://localhost:3306/pegr"
    			username=" your_username "
    			password="YOURPASSWORDHERE"
            }
        }
    }

Now go into the pegr folder and run pegr
  * `$ grails run-app`

This will successfully start and provide with you an url (http://localhost:8081/pegr)
- usually which directs you to the login screen of PEGR.

Login using the following labadmin credentials:

    Username: labadmin
    Password: passcode