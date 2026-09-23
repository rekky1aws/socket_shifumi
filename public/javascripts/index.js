// CONSTANTS
const socket = io();

  // Elements
const roomContainer = document.querySelector('#room-container');

// VARIABLES
let lclRooms = {};

// FUNCTIONS

// EVENT LISTENERS

// MAIN
socket.on('updateRooms', (rooms) => {
  roomContainer.innerHTML = "";
  for(let i = 0; i < rooms.length; i++) {
    const roomElt = document.createElement('a');
    const roomNameElt = document.createElement('div');
    const roomGameElt = document.createElement('div')
    const roomPlayersContainer = document.createElement('ul');

    for (let playerInd = 0; playerInd < rooms[i].players.length; playerInd++) {
      const roomPlayerElt = document.createElement('li');
      roomPlayerElt.textContent = rooms[i].players[playerInd];
      roomPlayersContainer.append(roomPlayerElt);
    }

    roomGameElt.textContent = rooms[i].game;

    roomElt.classList.add('room');
    roomElt.href = `/room/${i}`
    roomNameElt.textContent = rooms[i].name;

    roomElt.append(roomNameElt, roomGameElt, roomPlayersContainer);
    roomContainer.append(roomElt);
  }
});