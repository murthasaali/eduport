"use client";
import React from "react";
import {
  ClipboardList,
  CheckCircle,
  Clock,
  BarChart3,
  PieChart,
} from "lucide-react";
import {
  BarChart,
  Bar,
  Pie,
  PieChart as RePieChart,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function OverviewTask() {
  // Stats summary
  const stats = [
    { label: "Total Tasks", value: 120, icon: ClipboardList, color: "text-blue-400", bg: "bg-blue-900/30" },
    { label: "Submitted", value: 85, icon: CheckCircle, color: "text-green-400", bg: "bg-green-900/30" },
    { label: "Pending", value: 25, icon: Clock, color: "text-yellow-400", bg: "bg-yellow-900/30" },
    { label: "In Review", value: 10, icon: BarChart3, color: "text-purple-400", bg: "bg-purple-900/30" },
  ];

  // Bar chart data
  const barData = [
    { name: "Week 1", Submitted: 15, Pending: 10 },
    { name: "Week 2", Submitted: 20, Pending: 5 },
    { name: "Week 3", Submitted: 25, Pending: 7 },
    { name: "Week 4", Submitted: 25, Pending: 3 },
  ];

  // Pie chart data
  const pieData = [
    { name: "Submitted", value: 85, color: "#22c55e" },
    { name: "Pending", value: 25, color: "#facc15" },
    { name: "In Review", value: 10, color: "#a855f7" },
  ];

  return (
    <div className="min-h-screen bg-black text-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-gray-900 border-b border-gray-800 px-8 py-5 flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-3">
          <ClipboardList className="text-blue-400" size={26} />
          <h1 className="text-2xl font-semibold">Task Overview</h1>
        </div>
        <p className="text-gray-400 text-sm">
          Faculty Dashboard / Submissions / Overview
        </p>
      </header>

      {/* Stats Cards */}
      <main className="flex-1 p-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`flex items-center justify-between rounded-xl border border-gray-800 p-5 ${item.bg} shadow-lg`}
              >
                <div>
                  <p className="text-gray-400 text-sm">{item.label}</p>
                  <h2 className="text-3xl font-semibold mt-1">{item.value}</h2>
                </div>
                <Icon size={30} className={item.color} />
              </div>
            );
          })}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Bar Chart */}
          <div className="bg-gradient-to-b from-gray-900 to-gray-950 border border-gray-800 rounded-2xl p-6 shadow-md">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <BarChart3 className="text-blue-400" size={20} />
              Weekly Task Summary
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={barData}>
                <XAxis dataKey="name" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1f2937",
                    border: "1px solid #374151",
                    color: "#f3f4f6",
                  }}
                />
                <Bar dataKey="Submitted" fill="#22c55e" radius={[4, 4, 0, 0]} />
                <Bar dataKey="Pending" fill="#facc15" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Pie Chart */}
          <div className="bg-gradient-to-b from-gray-900 to-gray-950 border border-gray-800 rounded-2xl p-6 shadow-md">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <PieChart className="text-blue-400" size={20} />
              Task Distribution
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <RePieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}`}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1f2937",
                    border: "1px solid #374151",
                    color: "#f3f4f6",
                  }}
                />
              </RePieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </main>
    </div>
  );
}
