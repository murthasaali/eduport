"use client";
import React from "react";
import { Bell, FileText, UserCheck, AlertCircle } from "lucide-react";

const notifications = [
  {
    id: 1,
    icon: <FileText className="text-blue-400" size={20} />,
    title: "New Assignment Uploaded",
    message: "Digital Marketing Module 2 assignment is now available.",
    time: "10 mins ago",
  },
  {
    id: 2,
    icon: <UserCheck className="text-green-400" size={20} />,
    title: "Attendance Updated",
    message: "Attendance for today’s class has been marked successfully.",
    time: "1 hr ago",
  },
  {
    id: 3,
    icon: <AlertCircle className="text-yellow-400" size={20} />,
    title: "Submission Deadline Approaching",
    message: "Task 'Social Media Strategy' submission closes in 2 hours.",
    time: "3 hrs ago",
  },
  {
    id: 4,
    icon: <Bell className="text-purple-400" size={20} />,
    title: "Faculty Announcement",
    message: "Guest lecture by Mr. Rajesh on Brand Strategy tomorrow.",
    time: "1 day ago",
  },
];

export default function Notification() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-2xl font-semibold mb-6 flex items-center gap-2">
        <Bell className="text-yellow-400" size={24} /> Notifications
      </h1>

      <div className="bg-gray-800 rounded-xl shadow-lg divide-y divide-gray-700">
        {notifications.map((note) => (
          <div
            key={note.id}
            className="flex items-start gap-4 p-4 hover:bg-gray-700 transition-all duration-200"
          >
            <div className="bg-gray-700 p-3 rounded-lg">{note.icon}</div>
            <div className="flex-1">
              <h2 className="text-lg font-medium text-gray-100">
                {note.title}
              </h2>
              <p className="text-gray-400 text-sm">{note.message}</p>
              <p className="text-gray-500 text-xs mt-1">{note.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
