const WebSocket = require("ws");
const http = require("http");

// Create an HTTP server to work with Heroku
const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end("WebSocket server is running.");
});
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
    if (data.type === "claimTeam") {
      const { lobbyId, teamNumber, userName } = data;
      const lobby = lobbies[lobbyId];
      if (!lobby) {
        ws.send(JSON.stringify({ type: "lobbyNotFound" }));
        return;
      }
    
      if (teamNumber === 1 && !lobby.team1) {
        lobby.team1 = userName;
      } else if (teamNumber === 2 && !lobby.team2) {
        lobby.team2 = userName;
      } else {
        ws.send(JSON.stringify({ type: "teamAlreadyClaimed", teamNumber }));
        return;
      }
    
      // Notify all members of the claim
      lobby.members.forEach(member => {
        member.send(JSON.stringify({
          type: "teamClaimed",
          teamNumber,
          userName
        }));
      });
    }
    if (lobbies[lobbyId]) {}
      else {
        ws.send(JSON.stringify({ type: "lobbyNotFound" }));
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
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

