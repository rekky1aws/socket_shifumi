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
  Object.keys(rooms).forEach( (room) => {
    const roomElt = document.createElement('div');
    roomElt.classList.add('room');
    roomElt.textContent = room;
    roomContainer.append(roomElt);
  });
});