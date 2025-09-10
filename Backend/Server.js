import express from "express";
import cors from "cors";
import serverRoutes from "./routes/serverRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

// Use routes
app.use("/api/server", serverRoutes);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
});
