const socket = io();
const chatBox = document.getElementById("chat-box");
const messageInput = document.getElementById("message");

function sendMessage() {
  const message = messageInput.value;
  if (message) {
    socket.emit("chat message", message);
    messageInput.value = "";
  }
}

socket.on("chat message", (msg) => {
  const p = document.createElement("p");
  p.textContent = msg;
  chatBox.appendChild(p);
  chatBox.scrollTop = chatBox.scrollHeight;
});
