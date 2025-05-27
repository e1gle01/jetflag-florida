const WebSocket = require("ws");
const http = require("http");

// Create HTTP server
const server = http.createServer();
const wss = new WebSocket.Server({ server });

const lobbies = {};

wss.on("connection", (ws) => {
  console.log("New client connected");

  ws.on("message", (message) => {
    let data;
    try {
      data = JSON.parse(message);
    } catch (err) {
      console.error("Invalid JSON:", err);
      return;
    }

    console.log("Message received:", data);

    if (data.type === "createLobby") {
      const { lobbyId } = data;
      if (!lobbies[lobbyId]) {
        lobbies[lobbyId] = { team1: null, team2: null, members: [] };
        console.log(`Lobby created: ${lobbyId}`);
      }
      ws.lobbyId = lobbyId;
      lobbies[lobbyId].members.push(ws);

      ws.send(JSON.stringify({
        type: "updateMembers",
        memberCount: lobbies[lobbyId].members.length
      }));
    }

    if (data.type === "joinLobby") {
      const { lobbyId } = data;
      if (lobbies[lobbyId]) {
        ws.lobbyId = lobbyId;
        lobbies[lobbyId].members.push(ws);

        lobbies[lobbyId].members.forEach((member) => {
          member.send(JSON.stringify({
            type: "updateMembers",
            memberCount: lobbies[lobbyId].members.length
          }));
        });
      }
    }

    if (data.type === "startGame") {
      const { lobbyId } = data;
      if (lobbies[lobbyId]) {
        console.log(`Game starting for lobby: ${lobbyId}`);
        lobbies[lobbyId].members.forEach((member) => {
          member.send(JSON.stringify({ type: "gameStarted" }));
        });
      } else {
        console.log(`Lobby not found: ${lobbyId}`);
      }
    }
  });

  ws.on("close", () => {
    console.log("Client disconnected");

    const lobbyId = ws.lobbyId;
    const lobby = lobbies[lobbyId];

    if (lobby) {
      lobby.members = lobby.members.filter((member) => member !== ws);

      if (lobby.members.length === 0) {
        delete lobbies[lobbyId];
        console.log(`Lobby ${lobbyId} deleted because it became empty.`);
      } else {
        lobby.members.forEach((member) => {
          member.send(JSON.stringify({
            type: "updateMembers",
            memberCount: lobby.members.length
          }));
        });
      }
    }
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
