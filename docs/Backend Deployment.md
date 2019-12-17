# Backend Deployment

Instructions to deploy web apps built using `NodeJS` on PSU's VM hosting servers.

### Deploying the application
---
_Below instructions are for a server running `CentOS`. However, app related configuration is still valid for any linux distribution._

**Install dependencies on the Server**

- Install [`node`](https://nodejs.org/en/) (stable version) for `CentOS`, here is a [tutorial](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-a-centos-7-server).
- Install [`mongodb`](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-red-hat/) on the `CentOS` server.
- Install [`pm2`](https://www.npmjs.com/package/pm2) a production process manager for Node.js applications with a built-in load balancer.

**Server Specific Configuration**

- Create a `.env` file. Add and edit below fields to appropriate values :

```
DB_URL=""
DB_NAME=""
DATASETS_PATH=""
PUBLIC_ENDPOINT=""
IMAGE_URL=""
NODE_PORT=
```

- For example, a `.env` for a server `example.vmhost.psu.edu` by a user `bob` looks like below:

```
DB_URL="localhost"
DB_NAME="testDB"
DATASETS_PATH="/home/bob/imageAssets"
PUBLIC_ENDPOINT="https://example.vmhost.psu.edu:8081/samples/"
IMAGE_URL="https://example.vmhost.psu.edu:8081/images/"
NODE_PORT=8081
```

- Copy your files, images and other assets to the `DATASETS_PATH`.

- Once you have configured the backend, below command will create a daemon and keeps the app running & restarts on internal app crashes, [read more here](https://pm2.io/doc/en/runtime/overview/?utm_source=pm2&utm_medium=website&utm_campaign=rebranding).

```
<!-- go into the project folder -->
cd <project_directory>  

<!-- start the server using pm2 -->
pm2 start server.js --name APIServer
```

#### Serving the API on `HTTPS`
---

- To enable `HTTPS` during deployment, replace the entire code in `server.js` with below code:

```
// importing the app
const app = require("./app");

// requiring the https, fs (node standard modules)
const https = require("https");
const fs = require("fs");

// load configuration through environment variables from .env to process.env
require("dotenv").config();

// add the certificate for https
var options = {
  key: fs.readFileSync("<location_to_your_key_file>"),
  cert: fs.readFileSync("<location_to_your_cert_file>")
};

// start the server, listening at the configured port.
var server = https.createServer(options, app).listen(process.env.NODE_PORT || 8080, function() {
  console.log("Express server listening on port " + process.env.NODE_PORT || 8080);
});

```

- You need to update the `options` property in the above code with server specific certificate files, after requesting them from a certificate authority.
- Restart the app to apply changes.
- Read more about using certificates at [Node HTTPS docs](https://nodejs.org/api/https.html#https_https_createserver_options_requestlistener)


### Docker & Docker deployment
---

You can build an image for this app using the provided `Dockerfile`, but it is useless on its own, since this project requires a `MongoDB` database to connect & store data. To achieve this we need to use the `docker-compose.yml` in conjunction to the `Dockerfile`.

**Building a Docker Image**

- Before building a docker image, we need to update the `.env` file to contain configuration as below. This ensures proper communication between the mongodb instance and our app within a docker container.

```
DB_URL="mongo:27017"
DB_NAME="testDB"
PUBLIC_ENDPOINT="http://localhost:8081/samples/"
IMAGE_URL="http://localhost:8081/images/"
NODE_PORT=8081

```

- Change the dataset path within the `app.js`

```
<!-- Replace below line in app.js-->
app.use("/images", express.static("<some_example_path>"));

<!-- to below, before building the images -->
app.use("/images", express.static("/srv/app/images"));

```

- Build the image
    - `docker build --tag=demobackend .`

you can change the tag name from `demobackend` to anything you like, but make sure you also update the name in the `docker-compose.yml` file.

- To run the app use the command:
    - `docker-compose up`
- To insert example data use the `postData.py` script within the `utils` folder:
    - `cd ./sampleData`
    - `python postData.py example.json`

**Known issues**

- _When you stop and start the containerized app, the data that was inserted into the db will be lost, to solve this problem docker uses [volumes](https://docs.docker.com/storage/volumes/)._
- _MacOSX & mongodb-container volume [problem](https://stackoverflow.com/a/34903503) & [work around](https://docs.docker.com/storage/volumes/)._

### Updating dependencies
---

- To get a list of packages that are outdated, execute the below command from the project root directory
  - `npm outdated`
- From your project root directory, run the update command
  - `npm update`

> Updating dependencies sometimes breaks the app, which is expected and common software development. Refer the changelog for the packages that are updated to fix any issues.

More details on above command usage : [npm docs](https://docs.npmjs.com/updating-packages-downloaded-from-the-registry)

### Extending the app
---

- Recommend using [`Postman`](https://www.getpostman.com/) to develop, test and extend existing APIs.
