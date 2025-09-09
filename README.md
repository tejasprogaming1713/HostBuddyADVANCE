# HostBuddyADVANCE
Friendly names, emphasizes 

# 🚀 VPS Manager (Mobile-Friendly)

A lightweight, **mobile-first VPS control panel** for gamers and developers.  
Built with **React + Tailwind CSS** (frontend) and **Node.js + Express** (backend).  

Easily manage your VPS servers (Minecraft, Roblox, FiveM, etc.) from **your phone** with a clean and modern UI.

---

## ✨ Features
- ✅ Start / Stop / Restart server (API-ready)
- 📊 Real-time CPU & RAM monitoring
- 💾 One-click backup (demo)
- 📱 Mobile-friendly responsive dashboard
- 🔐 Simple, lightweight setup

---

## 📂 Project Structure
```
vps-manager/
│
├── backend/               # Node.js + Express backend
│   ├── server.js
│   ├── package.json
│   └── routes/
│
├── frontend/              # React + Tailwind frontend
│   ├── package.json
│   ├── vite.config.js
│   ├── index.html
│   └── src/
│       ├── App.jsx
│       ├── main.jsx
│       ├── pages/
│       │   └── Dashboard.jsx
│       └── components/
│           ├── StatsCard.jsx
│           └── Navbar.jsx
│
└── README.md
```

---

## 🛠️ Setup

### 1. Clone the Repo
```bash
git clone https://github.com/YOUR-USERNAME/vps-manager.git
cd vps-manager
```

### 2. Backend Setup
```bash
cd backend
npm install
npm start
```
Runs on: `http://localhost:4000`

### 3. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
Runs on: `http://localhost:5173`

---

## 📸 Preview (Demo UI)

![Dashboard Screenshot](https://dummyimage.com/800x400/111827/ffffff&text=VPS+Manager+Dashboard)

---

## 🚧 Roadmap
- [ ] Add real **server control** (systemctl / docker commands)
- [ ] Add **authentication system** (login)
- [ ] Add **disk & network monitoring**
- [ ] Add **file manager + backup download**

---

## 🤝 Contributing
Pull requests are welcome!  
For major changes, please open an issue first to discuss what you’d like to change.

---

## 📜 License
This project is open-source under the **MIT License**.
