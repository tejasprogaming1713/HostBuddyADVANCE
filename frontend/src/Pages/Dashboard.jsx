import React, { useEffect, useState } from "react";
import axios from "axios";
import StatsCard from "../components/StatsCard";

function Dashboard() {
  const [status, setStatus] = useState("loading...");
  const [cpu, setCpu] = useState("0%");
  const [ram, setRam] = useState("0 GB");

  const fetchStatus = async () => {
    try {
      const res = await axios.get("/api/server/status");
      setStatus(res.data.status);
      setCpu(res.data.cpu);
      setRam(res.data.ram);
    } catch (err) {
      setStatus("Error fetching status");
    }
  };

  const handleAction = async (action) => {
    try {
      await axios.post(`/api/server/${action}`);
      fetchStatus();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchStatus();
    const interval = setInterval(fetchStatus, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">📊 VPS Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatsCard title="Server Status" value={status} />
        <StatsCard title="CPU Usage" value={cpu} />
        <StatsCard title="RAM Usage" value={ram} />
      </div>

      <div className="mt-6 flex gap-4">
        <button
          onClick={() => handleAction("start")}
          className="px-4 py-2 bg-green-600 rounded-lg"
        >
          Start
        </button>
        <button
          onClick={() => handleAction("stop")}
          className="px-4 py-2 bg-red-600 rounded-lg"
        >
          Stop
        </button>
        <button
          onClick={() => handleAction("backup")}
          className="px-4 py-2 bg-blue-600 rounded-lg"
        >
          Backup
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
