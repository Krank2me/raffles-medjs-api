const express = require("express");
const http = require("http");

const configExpress = require("./config/express");
const routes = require("./routes");

const app = express();
const server = http.Server(app);

configExpress(app);
routes(app);

module.exports = { app, server };
