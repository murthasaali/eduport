"use client";
import React from "react";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import {
  AlertTriangle,
  UserCheck,
  UserX,
  CalendarDays,
  ClipboardCheck,
  Activity,
} from "lucide-react";

export default function OverviewAttendance() {
  const attendanceSummary = [
    { name: "Present", value: 78 },
    { name: "Absent", value: 22 },
  ];

  const COLORS = ["#22c55e", "#ef4444"];

  const classWiseAttendance = [
    { class: "Class A", attendance: 90 },
    { class: "Class B", attendance: 85 },
    { class: "Class C", attendance: 72 },
    { class: "Class D", attendance: 65 },
  ];

  const dangerZoneStudents = [
    { id: 1, name: "Aarav Kumar", class: "C", attendance: 62 },
    { id: 2, name: "Diya Patel", class: "D", attendance: 58 },
    { id: 3, name: "Riya Nair", class: "C", attendance: 49 },
    { id: 4, name: "Vikram Singh", class: "B", attendance: 55 },
  ];

  const actionsNeeded = [
    "Schedule parent meeting for low-attendance students.",
    "Send attendance warning emails.",
    "Plan extra sessions for absent students.",
    "Monitor improvement over next week.",
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-semibold flex items-center gap-2">
            <ClipboardCheck className="text-blue-500" /> Attendance Overview
          </h1>
          <p className="text-gray-400 text-sm">
            Comprehensive summary of attendance performance
          </p>
        </div>
        <div className="flex items-center gap-3">
          <CalendarDays className="text-yellow-400" />
          <span className="text-gray-300">October 2025</span>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-lg flex items-center gap-4">
          <UserCheck size={32} className="text-green-400" />
          <div>
            <p className="text-gray-400 text-sm">Present</p>
            <h3 className="text-2xl font-bold">78%</h3>
          </div>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-lg flex items-center gap-4">
          <UserX size={32} className="text-red-400" />
          <div>
            <p className="text-gray-400 text-sm">Absent</p>
            <h3 className="text-2xl font-bold">22%</h3>
          </div>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-lg flex items-center gap-4">
          <Activity size={32} className="text-blue-400" />
          <div>
            <p className="text-gray-400 text-sm">Overall Health</p>
            <h3 className="text-2xl font-bold">Good</h3>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Pie Chart */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Attendance Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={attendanceSummary}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={100}
                dataKey="value"
              >
                {attendanceSummary.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1f2937",
                  border: "none",
                  borderRadius: "8px",
                }}
                itemStyle={{ color: "#f3f4f6" }}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Class-wise Attendance</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={classWiseAttendance}>
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1f2937",
                  border: "none",
                  borderRadius: "8px",
                }}
                itemStyle={{ color: "#f3f4f6" }}
              />
              <Bar dataKey="attendance" fill="#3b82f6" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Danger Zone Students */}
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-lg mb-8">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-red-400">
          <AlertTriangle /> Danger Zone Students
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead className="bg-gray-800 text-gray-400 text-sm">
              <tr>
                <th className="p-3 text-left">#</th>
                <th className="p-3 text-left">Student Name</th>
                <th className="p-3 text-left">Class</th>
                <th className="p-3 text-left">Attendance %</th>
              </tr>
            </thead>
            <tbody>
              {dangerZoneStudents.map((student, index) => (
                <tr
                  key={student.id}
                  className="hover:bg-gray-800/60 transition-all duration-200"
                >
                  <td className="p-3 text-gray-500">{index + 1}</td>
                  <td className="p-3 text-gray-100 font-medium">{student.name}</td>
                  <td className="p-3 text-gray-300">{student.class}</td>
                  <td className="p-3 text-red-400 font-semibold">
                    {student.attendance}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Actions Needed */}
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-yellow-400 flex items-center gap-2">
          <AlertTriangle /> Actions Needed
        </h2>
        <ul className="list-disc ml-6 space-y-2 text-gray-300">
          {actionsNeeded.map((action, index) => (
            <li key={index}>{action}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
