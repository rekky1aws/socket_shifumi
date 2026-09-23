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
    roomElt.classList.add('room');
    roomElt.href = `/room/${i}`
    roomElt.textContent = rooms[i].name;
    roomContainer.append(roomElt);
  }
});