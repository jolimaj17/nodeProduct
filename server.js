const http = require("http");
const application = require("./app");

const port = process.env.PORT || 8080;

const server = http.createServer(application);

server.listen(port);
