"use client";
import React from "react";
import { motion } from "framer-motion";
// ...existing code...
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Line, Doughnut } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export default function Overview() {
  // Attendance trend (example data)
  const attendanceLabels = ["Week 1", "Week 2", "Week 3", "Week 4"];
  const attendanceData = {
    labels: attendanceLabels,
    datasets: [
      {
        label: "Attendance %",
        data: [86, 88, 90, 89],
        borderColor: "rgba(99,102,241,1)", // indigo-500
        backgroundColor: "rgba(99,102,241,0.15)",
        tension: 0.3,
        fill: true,
        pointRadius: 4,
      },
    ],
  };

  const attendanceOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: false },
    },
    scales: {
      y: {
        min: 0,
        max: 100,
        ticks: { color: "#D1D5DB" }, // gray-300
        grid: { color: "rgba(255,255,255,0.04)" },
      },
      x: {
        ticks: { color: "#D1D5DB" },
        grid: { color: "transparent" },
      },
    },
  };

  // Submissions status breakdown (example data)
  const submissionsData = {
    labels: ["Checked", "Pending", "Late"],
    datasets: [
      {
        data: [45, 30, 5],
        backgroundColor: ["#10B981", "#F59E0B", "#EF4444"], // green, amber, red
        hoverOffset: 6,
      },
    ],
  };

  const submissionsOptions = {
    plugins: { legend: { position: "bottom", labels: { color: "#D1D5DB" } } },
    responsive: true,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-6 p-3"
    >
      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "Total Classes", value: "12" },
          { title: "Students", value: "120" },
          { title: "Attendance Rate", value: "89%" },
          { title: "Assignments Checked", value: "45" },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-2xl p-6 shadow-md"
          >
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-3xl font-bold mt-2">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Charts row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="col-span-2 bg-gray-900 rounded-2xl p-6 shadow-md">
          <h3 className="text-xl font-bold mb-4">Attendance Trend</h3>
          <div className="w-full h-64">
            <Line data={attendanceData} options={attendanceOptions} />
          </div>
        </div>

        <div className="bg-gray-900 rounded-2xl p-6 shadow-md">
          <h3 className="text-xl font-bold mb-4">Submissions Breakdown</h3>
          <div className="w-full h-64 flex items-center justify-center">
            <Doughnut data={submissionsData} options={submissionsOptions} />
          </div>
        </div>
      </div>

      {/* Upcoming Classes and Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gray-900 rounded-2xl p-6 shadow-md">
          <h3 className="text-xl font-bold mb-4">Upcoming Classes</h3>
          <ul className="space-y-3">
            {[
              { time: "09:00 AM", subject: "React JS - Batch A" },
              { time: "11:00 AM", subject: "Node.js - Batch B" },
              { time: "02:00 PM", subject: "Database Systems" },
            ].map((item, i) => (
              <li
                key={i}
                className="p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition"
              >
                <p className="font-semibold">{item.subject}</p>
                <p className="text-sm text-gray-400">{item.time}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gray-900 rounded-2xl p-6 shadow-md">
          <h3 className="text-xl font-bold mb-4">Recent Faculty Activities</h3>
          <ul className="space-y-3">
            {[
              "Marked attendance for React JS - Batch A",
              "Uploaded midterm results for Node.js",
              "Reviewed assignments for Database Systems",
            ].map((activity, i) => (
              <li
                key={i}
                className="p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition"
              >
                {activity}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}