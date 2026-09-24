const express = require('express');
const app = express();

// Socket.io setup
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);

const port = 3000;

let rooms = [];
// Fixture Data
rooms = [
  {
    name: 'test',
    owner: 'x8qjgxaiMyr--_tbAAAE',
    createdAt: new Date(),
    game: 'shifumi',
    players: [ 'x8qjgxaiMyr--_tbAAAE', '_FywN_5NkTReEUHTAAAF' ],
    maxPlayer: 2,
  },
  {
    name: 'test2',
    owner: '_FywN_5NkTReEUHTAAAF',
    createdAt: new Date(),
    game: 'shifumi',
    players: ['_FywN_5NkTReEUHTAAAF' ],
    maxPlayer: 2,
  }
];

const users = {
  online: {},
  offline: {}
};

app.use(express.static('public'));

// ROUTES
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/create', (req, res) => {
  res.sendFile(__dirname + '/public/create.html');
});

app.get('/room/:id', (req, res) => {
  if(!rooms[req.params.id]) {
    return res.redirect('/');
  }
  res.sendFile(__dirname + '/public/room.html');
});

io.on('connection', (socket) => {
  console.log('user connected');

  socket.emit('updateUsers', users); // Emit to only the person who just connected
  socket.emit('updateRooms', rooms); // Emit to only the person who just connected

  // Listening to events emitted by clients
  socket.on('newUser', (username) => {
    // Adding user
    users.online[socket.id] = {
      name: username
    }

    // Send new user to everyone
    io.emit('updateUsers', users);
  });

  socket.on('disconnect', (reason) => {
    // console.log(`An user has disconnected (${users.online[socket.id].name}) for this reason : ${reason}`); // DEBUG
    
    users.offline[socket.id] = users.online[socket.id];
    delete users.online[socket.id];
    
    io.emit('updateUsers', users);
  });

  socket.on('newRoom', (room) => {
    rooms.push({
      name: room.name,
      owner: socket.id,
      createdAt: new Date(),
      game: room.game,
      players: [socket.id],
      maxPlayer: room.maxPlayer
    });

    console.log(rooms); // DEBUG
    io.emit('updateRooms', rooms);
  });
});

server.listen(port, () => {
  console.log(`Shifumi app running on port : ${port}`); // DEBUG
});