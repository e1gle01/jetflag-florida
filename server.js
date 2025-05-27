const WebSocket = require("ws");
const http = require("http");

// Create an HTTP server to work with Heroku
const server = http.createServer();
const wss = new WebSocket.Server({ server });

const lobbies = {};

wss.on("connection", (ws) => {
  console.log("New client connected");

  ws.on("message", (message) => {
    const data = JSON.parse(message);
    console.log("Message received:", data); // Debugging log

    if (data.type === "createLobby") {
      const { lobbyId } = data;
      if (!lobbies[lobbyId]) {
        lobbies[lobbyId] = { team1: null, team2: null, members: [] };
        console.log(`Lobby created: ${lobbyId}`);
      }
      ws.lobbyId = lobbyId;
      lobbies[lobbyId].members.push(ws);

      // Notify the creator about the initial member count
      ws.send(JSON.stringify({ type: "updateMembers", memberCount: lobbies[lobbyId].members.length }));
    }

    if (data.type === "joinLobby") {
      const { lobbyId } = data;
      if (lobbies[lobbyId]) {
        ws.lobbyId = lobbyId;
        lobbies[lobbyId].members.push(ws);

        // Notify all members about the updated member count
        lobbies[lobbyId].members.forEach((member) => {
          member.send(JSON.stringify({ type: "updateMembers", memberCount: lobbies[lobbyId].members.length }));
        });
      }
    }

    if (data.type === "startGame") {
      const { lobbyId } = data;
      if (lobbies[lobbyId]) {
        console.log(`Game starting for lobby: ${lobbyId}`); // Debugging log
        lobbies[lobbyId].members.forEach((member) => {
          member.send(JSON.stringify({ type: "gameStarted" }));
        });
      } else {
        console.log(`Lobby not found: ${lobbyId}`); // Debugging log
      }
    }
  });

  ws.on("close", () => {
    console.log("Client disconnected");
    if (ws.lobbyId && lobbies[ws.lobbyId]) {
      lobbies[ws.lobbyId].members = lobbies[ws.lobbyId].members.filter((member) => member !== ws);

      // Notify remaining members about the updated member count
      lobbies[ws.lobbyId].members.forEach((member) => {
        member.send(JSON.stringify({ type: "updateMembers", memberCount: lobbies[ws.lobbyId].members.length }));
      });
    }
  });
});