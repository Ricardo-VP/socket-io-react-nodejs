const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors");

const port = process.env.PORT || 4000;
const routes = require("./apis/routes");

const app = express();

app.use(cors());
app.use(routes);

const server = http.createServer(app);

/**
 * Socket IO - Configuration
 */

const io = socketIo(server, {
  cors: {
    origin: "*",
  },
});

let interval;

io.on("connection", (socket) => {
  console.log("New client connected");
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => getApiAndEmit(socket), 1000);
  socket.on("disconnected", () => {
    console.log("Client disconnected");
    clearInterval(interval);
  });
});

const getApiAndEmit = (socket) => {
  const response =
    new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString();
  // Emitting a new message. Will be consumed by the client
  socket.emit("FromAPI", response);
};

server.listen(port, () => console.log(`Listening on port ${port}`));
