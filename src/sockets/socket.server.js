const { Server } = require("socket.io");

function initSocketServer(httpServer) {
  const io = new Server(httpServer, {});

  io.on("connection", (socket) => {
    
  });
}

module.exports = initSocketServer;
