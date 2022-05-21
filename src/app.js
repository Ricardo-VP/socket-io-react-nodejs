const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const port = process.env.PORT || 4000;
const routes = require("./apis/routes");

const app = express();

app.use(routes);

const server = http.createServer(app);

const io = socketIo(server);

const getApiAndEmit = "TODO";
