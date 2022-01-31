const http = require("http");

const application = require("./app");

http.createServer(application).listen(process.env.PORT || 8080);