
const path = require('path');;

// https://medium.com/swlh/node-js-express-angular-stack-d6e328cffe6b
// Use Express
const express = require("express");
// Use body-parser
const bodyParser = require("body-parser");
const { fn } = require('@angular/compiler/src/output/output_ast');

// Create new instance of the express server
const app = express();

// Define the JSON parser as a default way 
// to consume and produce data through the 
// exposed APIs
app.use(bodyParser.json());

// Create link to Angular build directory
// The `ng build` command will save the result
// under the `dist` folder.

app.use(express.static(path.join(__dirname, 'dist', 'cheese')));

// Init the server
var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
});

const io = require('socket.io')(server, {
    cors: {
        origins: ['http://localhost:4200']
    }
});

app.get('*', (req, res) => {
    return res.sendFile(path.join(__dirname, 'dist', 'cheese', 'index.html'));
});

io.on('connection', (socket) => {
    const userId = socket.id;

    socket.isHost = false;

    socket.leave(socket.id, () => {
    });

    socket.on('disconnect', () => {
        if (socket.lobbyId && !socket.isHost) {
            socket.to(socket.lobbyId).emit('remove player', (socket.id));
        } else if (socket.lobbyId && socket.isHost) {
            socket.to(socket.lobbyId).emit('host left');
        }
    });

    socket.on('check', async (lobbyId, fn) => {
        const sockets = await io.in(lobbyId).fetchSockets();
        numClients = sockets.length;

        if (numClients == 0 || numClients == null) {
            fn('empty');
        } else if (numClients >= 4) {
            fn('full');
        } else if ((io.to(lobbyId).adapter.inGame != null) && io.to(lobbyId).adapter.inGame) {
            fn('in game');
        } else {
            // can join
            fn('woot');
        }
    });

    socket.on('join game', async (id, name, lobbyId) => {
        socket.join(lobbyId, () => {
        });

        socket.to(lobbyId).emit('add player', name, id);

        socket.lobbyId = lobbyId;
    });

    socket.on('create game', (lobbyId) => {
        socket.isHost = true;
        socket.lobbyId = lobbyId;
        socket.join(lobbyId);
        io.to(lobbyId).adapter.inGame = false;
    });

    socket.on('claim turn', (spot, name, id, lobbyId) => {
        socket.to(lobbyId).emit('claim turn', spot, name, id);
    });

    socket.on('unclaim turn', (spot, lobbyId) => {
        socket.to(lobbyId).emit('unclaim turn', spot);
    });

    socket.on('update turns', (data, lobbyId) => {
        socket.to(lobbyId).emit('update turns', data);
    });

    socket.on('update players', (data, lobbyId) => {
        socket.to(lobbyId).emit('update players', data);
    });

    socket.on('get info', (lobbyId) => {
        socket.to(lobbyId).emit('get info');
    });

    // unused, used on disconnect
    socket.on('host left', (lobbyId) => {
        socket.to(lobbyId).emit('host left');
    });

    socket.on('start game', (lobbyId) => {
        socket.to(lobbyId).emit('start game');
        io.to(lobbyId).adapter.inGame = true;
    });

    socket.on('update game', (vars, oldPiece, newPiece, piecePiece, namePiece, sidePiece, playerPiece, lobbyId) => {
        socket.to(lobbyId).emit('update game', vars, oldPiece, newPiece, piecePiece, namePiece, sidePiece, playerPiece);
    });

    socket.on('end game', (data, lobbyId) => {
        if (data != 'leave') {
            socket.to(lobbyId).emit('end game', data);
        } else {
            io.to(lobbyId).emit('end game', data);
        }
        io.to(lobbyId).adapter.inGame = false;
    });


});
