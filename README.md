# ⚡ NexBot  

![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js)  
![Express](https://img.shields.io/badge/Express.js-black?logo=express)  
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb)  
![Pinecone](https://img.shields.io/badge/Pinecone-AI-blue)  
![React](https://img.shields.io/badge/React.js-61DAFB?logo=react)  
![Socket.IO](https://img.shields.io/badge/Socket.IO-010101?logo=socket.io)  

> **NexBot** is a real-time conversational AI system inspired by ChatGPT.  
> It combines **short-term memory** (MongoDB) with **long-term memory** (Pinecone) to create context-aware, intelligent, and dynamic chat experiences.  

---

## ✨ Features  

- ⚡ **Real-Time Chat** with Socket.IO  
- 🧠 **Memory System**  
  - Short-term memory → MongoDB  
  - Long-term memory → Pinecone (vector embeddings)  
- 👤 **User, Chat, and Message Models** in MongoDB  
- 🎨 **Modern UI** with React.js  
- 🔌 **Backend APIs** with Node.js + Express.js  
- 📡 **Context-aware Conversations** like ChatGPT  

---

## 🛠️ Tech Stack  

**Frontend**  
- React.js  

**Backend**  
- Node.js  
- Express.js  
- Socket.IO  

**Database & Memory**  
- MongoDB → short-term memory, user & chat data  
- Pinecone → vector embeddings for long-term memory  

---

## 📂 Project Structure  

```bash
NexBot/
│── backend/
│   ├── models/        # User, Chat, Message schemas
│   ├── routes/        # API routes
│   ├── controllers/   # Business logic
│   ├── socket/        # Socket.IO events
│   └── server.js      # Backend entry
│
│── frontend/
│   ├── src/
│   │   ├── components/  # UI Components
│   │   ├── pages/       # Pages
│   │   └── App.js
│   └── package.json
│
│── README.md


⚙️ Installation & Setup
1. Clone Repository
git clone https://github.com/yourusername/nexbot.git
cd nexbot

2. Backend Setup
cd backend
npm install


Create .env file in backend/:

MONGO_URI=your_mongodb_connection
PINECONE_API_KEY=your_pinecone_api_key
PINECONE_ENV=your_pinecone_environment
PORT=5000


Run backend:

npm start

3. Frontend Setup
cd frontend
npm install
npm start

📡 Workflow

User sends message → Socket.IO transmits in real-time

Message stored in MongoDB (short-term memory)

Embeddings stored/retrieved from Pinecone (long-term memory)

NexBot generates context-aware reply

Reply broadcasted to frontend instantly

🎥 Demo

📌 Roadmap

 JWT Authentication

 Multi-room chat

 Message history pagination

 AI fine-tuning with custom datasets

 Deployment (Vercel + Render/Heroku)
