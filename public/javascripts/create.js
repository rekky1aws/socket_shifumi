// CONSTANTS
const socket = io();

    // Elements
const newRoomBtn = document.querySelector('#new-room-btn');
const roomNameInput = document.querySelector('#room-name');

// VARIABLES

// FUNCTIONS
function createRoom (evt) {
  if (!roomNameInput.value) {
    throw new Error("Room Name can't be empty");
  }

  const room = {
    name: `${roomNameInput.value}`,
    game: "shifumi",
  }

  try {
    socket.emit('newRoom', room);
  } catch (err) {
    console.error(err);
  }

  document.location.href="/";
}

// EVENT LISTENERS
newRoomBtn.addEventListener('click', createRoom);

// MAIN