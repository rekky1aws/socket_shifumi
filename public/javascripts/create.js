// CONSTANTS
const socket = io();

    // Elements
const newRoomBtn = document.querySelector('#new-room-btn');
const roomNameInput = document.querySelector('#room-name');

// VARIABLES
let room = {};

// FUNCTIONS
function createRoom (evt) {
  if (!roomNameInput.value) {
    throw new Error("Room Name can't be empty");
  }

  room = {
    name: `${roomNameInput.value}`,
    game: "shifumi",
  }

  try {
    socket.emit('newRoom', room);
  } catch (err) {
    console.error(err);
  }
}

// EVENT LISTENERS
newRoomBtn.addEventListener('click', createRoom);

// MAIN
socket.on('updateRooms', (rooms) => {
  if (!room) {
    return false;
  }

  for(let i=0; i<rooms.length; i++) {
    if (rooms[i].name == room.name) {
      document.location.href=`/room/${i}`;
    }
  }
});