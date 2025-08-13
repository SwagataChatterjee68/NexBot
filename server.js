const http=require("http")
const app = require("./src/app");

const connectToDatabase = require("./src/db/db");
const setupSocketServer = require("./src/sockets/socket.server")

const httpServer = http.createServer(app);

setupSocketServer(httpServer)

connectToDatabase();

httpServer.listen(3000, () => {
  console.log("Server Started");
});
