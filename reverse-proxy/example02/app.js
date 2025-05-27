// app.js
const http = require("http");
const WebSocket = require("ws");

const server = http.createServer((req, res) => {
  console.log("HTTP Request From IP:", req.headers['x-real-ip']);
  res.writeHead(200);
  res.end("Hello from Node.js server");
});

const wss = new WebSocket.Server({ server });

wss.on("connection", (ws, req) => {
  const ip = req.headers['x-real-ip'];
  console.log("New WebSocket connection from:", ip);
  ws.send("Welcome client from " + ip);
});

server.listen(3000, () => {
  console.log("Node.js app running on port 3000");
});
