import { useState, useEffect } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const COLORS = {
  Call: "#244d3f",
  Text: "#7c3aed",
  Video: "#16a34a",
};

const StatsPage = () => {
  const [timeline, setTimeline] = useState(() =>
    JSON.parse(localStorage.getItem("timeline") || "[]"),
  );

  useEffect(() => {
    const handleUpdate = () => {
      const updated = JSON.parse(localStorage.getItem("timeline") || "[]");
      setTimeline(updated);
    };

    window.addEventListener("timelineUpdated", handleUpdate);
    return () => window.removeEventListener("timelineUpdated", handleUpdate);
  }, []);

  const counts = timeline.reduce((acc, entry) => {
    acc[entry.type] = (acc[entry.type] || 0) + 1;
    return acc;
  }, {});

  const chartData = Object.entries(counts).map(([name, value]) => ({
    name,
    value,
  }));

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Friendship Analytics</h1>

      <div className="bg-white border rounded-xl p-6 shadow-sm">
        <p className="text-sm text-gray-500 mb-4">By Interaction Type</p>

        {chartData.length === 0 ? (
          <p className="text-gray-400 text-center py-10">
            No data yet. Log some check-ins first!
          </p>
        ) : (
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={110}
                paddingAngle={4}
                dataKey="value"
              >
                {chartData.map((entry) => (
                  <Cell key={entry.name} fill={COLORS[entry.name] || "#888"} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
};

export default StatsPage;
