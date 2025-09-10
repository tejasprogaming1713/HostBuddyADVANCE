import express from "express";

const router = express.Router();

let serverStatus = "stopped";

// ✅ Get server status
router.get("/status", (req, res) => {
  res.json({
    status: serverStatus,
    cpu: (Math.random() * 100).toFixed(2) + "%",
    ram: (Math.random() * 16).toFixed(2) + " GB"
  });
});

// ✅ Start server
router.post("/start", (req, res) => {
  serverStatus = "running";
  res.json({ message: "Server started ✅" });
});

// ✅ Stop server
router.post("/stop", (req, res) => {
  serverStatus = "stopped";
  res.json({ message: "Server stopped 🛑" });
});

// ✅ Backup (demo only)
router.post("/backup", (req, res) => {
  res.json({ message: "Backup created 💾" });
});

export default router;
