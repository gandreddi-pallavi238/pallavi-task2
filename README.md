## 💬 Real-Time Chat Application


### 📌 **Task 2 - Full Stack Internship @ CodTech**

This is a real-time chat application developed using **Node.js**, **Express**, and **Socket.io**. It enables users to connect and chat with each other instantly, similar to applications like WhatsApp Web or Messenger (on a smaller scale).

---

### 🚀 Features

* 🔁 **Real-time communication** using WebSockets (Socket.io)
* 🧑‍🤝‍🧑 Multiple users can chat in a shared room
* 🌐 Fully functional backend using **Express.js**
* 💬 Dynamic frontend using **HTML, CSS, and JavaScript**
* ⚡ Messages broadcast to all connected users instantly
* 📱 Responsive design for mobile and desktop

---

### 🧰 Tech Stack

| Frontend          | Backend           | Real-Time | Deployment       |
| ----------------- | ----------------- | --------- | ---------------- |
| HTML5 + CSS3 + JS | Node.js + Express | Socket.io | GitHub or Render |

---

### 📁 Folder Structure

```
real-time-chat-app/
│
├── public/
│   ├── index.html
│   ├── style.css
│   └── client.js
│
├── server.js
├── package.json
└── README.md
```

---

### ⚙️ How It Works

1. User opens the chat page.
2. A WebSocket connection is established with the server using **Socket.io**.
3. Users can send messages.
4. Server receives the message and broadcasts it to all other users in real-time.

---

### 📦 How to Run Locally

#### ✅ Prerequisites:

* Node.js and npm installed

#### 🧪 Steps:

```bash
# Step 1: Clone the repository
git clone https://github.com/yourusername/real-time-chat-app.git
cd real-time-chat-app

# Step 2: Install dependencies
npm install

# Step 3: Start the server
node server.js

# Step 4: Open your browser
Visit http://localhost:3000
```

---

### 📸 Screenshots

> You can add screenshots of your chat UI here to show how it looks.

---

### 📝 Sample Code Snippet

#### server.js:

```javascript
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static('public'));

io.on('connection', socket => {
  console.log('A user connected');
  socket.on('chat message', msg => {
    io.emit('chat message', msg);
  });
});

http.listen(3000, () => {
  console.log('Server listening on port 3000');
});
```

---

### 🌐 Live Demo

If hosted online (e.g., on Render/Glitch/Heroku), include a link:

> 🔗 [https://your-live-chat-app-url.com](https://your-live-chat-app-url.com)

---

### 📜 License

This project is developed as part of the **CodTech Full Stack Internship**. Feel free to use and modify it for educational purposes.

---
