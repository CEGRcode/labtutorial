---
id: cac
title: Cornell's CAC server setup
sidebar_position: 4
---

Instructions to manually setup Cornell's CAC VM hosting servers.

|Server Names| Category|
|----|----|
|[odin.cac.cornell.edu](http://odin.cac.cornell.edu/) | Web Production Server |
|[artemis.cac.cornell.edu](http://artemis.cac.cornell.edu/)| Web Development Server |

### Enable the EPEL repository

EPEL repository consists of packages for tools such as `htop` and more.

To add the EPEL repository for tool lookup, run:

```
dnf install https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm
dnf update
dnf install htop
```

### Install nodejs

```
# checking available nodejs versions
$ sudo dnf module list nodejs

# disable defaults
$ sudo dnf module disable nodejs:10

# pick the Latest LTS version
$ sudo dnf module enable nodejs:12

# install and verify version
$ sudo dnf install nodejs
$ node --version
```

> reference : [https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-centos-8](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-centos-8)

### Install mongodb

```
$ sudo nano /etc/yum.repos.d/mongodb-org-4.2.repo

# copy below text into the file

[mongodb-org-4.2]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/4.2/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-4.2.asc

```

```
# Install and start the mongod service.
$ sudo yum install -y mongodb-org
$ sudo service mongod start

# Checking installation by bringing up the mongodb prompt.
$ mongo

# You can verify that the mongod process has started successfully
# by checking the contents of the log file at `/var/log/mongodb/mongod.log`
$ sudo less /var/log/mongodb/mongod.log

```

> reference: [https://docs.mongodb.com/manual/tutorial/install-mongodb-on-red-hat/
](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-red-hat/
)

### Install apache


```
$ sudo yum install httpd
$ sudo systemctl start httpd

```

- CentOS 8 has lot of firewall restrictions built in, so to open up ports use the `firewall-cmd` command.


```
sudo firewall-cmd --zone=public --permanent --add-port 8081/tcp
sudo firewall-cmd --reload

sudo firewall-cmd --zone=public --permanent --add-port 3000/tcp
sudo firewall-cmd --reload
```

> Apache reference :[https://linuxize.com/post/how-to-install-apache-on-centos-8/
](https://linuxize.com/post/how-to-install-apache-on-centos-8/
)

> Firewall reference: [https://linuxconfig.org/redhat-8-open-and-close-ports
](https://linuxconfig.org/redhat-8-open-and-close-ports
)

- Apache needs to read the `.htaccess` files within the frontend deployment folders available at `/var/www/html/<project-folder>`.
This is required for resolving routes on the client's side. you can read more [here](https://create-react-app.dev/docs/deployment/#serving-apps-with-client-side-routing). Below are the steps to enable this.

```
# stop the apache server
$ sudo service httpd stop

# check the status of your apache server (to check if it is stopped)
$ sudo service httpd status

# edit the httpd (apache's) configuration (usually located at below default install location)
$ cd /etc/httpd/conf/
$ sudo nano httpd.conf
```

- Look for the lines below within the configuration file.

```
# Further relax access to the default document root:
<Directory "/var/www/html">
    #
    # Possible values for the Options directive are "None", "All",
    # or any combination of:
    #   Indexes Includes FollowSymLinks SymLinksifOwnerMatch ExecCGI MultiViews
    #
    # Note that "MultiViews" must be named *explicitly* --- "Options All"
    # doesn't give it to you.
    #
    # The Options directive is both complicated and important.  Please see
    # http://httpd.apache.org/docs/2.4/mod/core.html#options
    # for more information.
    #
    Options Indexes MultiViews FollowSymLinks

    #
    # AllowOverride controls what directives may be placed in .htaccess files.
    # It can be "All", "None", or any combination of the keywords:
    #   Options FileInfo AuthConfig Limit
    #
    AllowOverride None

    #
    # Controls who can get stuff from this server.
    #
    Require all granted

</Directory>

```

- Now add these directives into `httpd.conf` **AFTER** the above directives, to allow apache to read `.htaccess` in our website's folder. These lines needs to be added for each website you are deploying (for those that are built on react).

```
<Directory /var/www/html/yep>
    Options Indexes FollowSymLinks
    AllowOverride All
    Require all granted
</Directory>
```

- start the server, your websites now route correctly on the client.

```
sudo service httpd start
```

### Requesting SSL certificates for the VMs

- Generate a **key** and **csr** file for your server.
```
openssl req -nodes -newkey rsa:2048 -keyout artemis_ssl.key -out artemis_ssl.csr
```
- you will be prompted with a questionnaire. below are **EXAMPLE** answers.

```
Generating a RSA private key
.............................................+++++......+++++

writing new private key to 'artemis_ssl.key'
-----
You are about to be asked to enter information that will be incorporated
into your certificate request.
What you are about to enter is what is called a Distinguished Name or a DN.
There are quite a few fields but you can leave some blank
For some fields there will be a default value,
If you enter '.', the field will be left blank.
-----

Country Name (2 letter code) [XX]:US
State or Province Name (full name) []:New York
Locality Name (eg, city) [Default City]:Ithaca
Organization Name (eg, company) [Default Company Ltd]:Cornell University
Organizational Unit Name (eg, section) []:Center for Advanced Computing
Common Name (eg, your name or your server's hostname) []: artemis.cac.cornell.edu
Email Address []:cac-systems@cornell.edu

Please enter the following 'extra' attributes
to be sent with your certificate request
A challenge password []:
An optional company name []:
```

- email the resulting `myserver.csr` file to `cac-help@cornell.edu`. After a couple of hours or the next day you should receive an ssl cert from them.


### Useful commands

- Exporting collections (tables in mongoDB) in a databases as JSON

```
mongoexport --collection=samples --db=yepDB --out=yepSamples-2020-01-01.json
```

- Change Ownership recursively for image assets being served by the API BACKEND. _Should be owned by root and set to public access._

```
$ sudo chown -R user:group folder
$ sudo chown -R root:root yepImages

# have access to all for the images to show up on the website.
$ sudo chmod -R 755 yepImages
```
