import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Fake stats (demo)
let serverStatus = "stopped";

// API: get server status
app.get("/status", (req, res) => {
  res.json({
    status: serverStatus,
    cpu: (Math.random() * 100).toFixed(2) + "%",
    ram: (Math.random() * 16).toFixed(2) + " GB"
  });
});

// API: start server
app.post("/start", (req, res) => {
  serverStatus = "running";
  res.json({ message: "Server started ✅" });
});

// API: stop server
app.post("/stop", (req, res) => {
  serverStatus = "stopped";
  res.json({ message: "Server stopped 🛑" });
});

// API: backup (fake)
app.post("/backup", (req, res) => {
  res.json({ message: "Backup created 💾" });
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
});
