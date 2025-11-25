"use client";
import React, { useState } from "react";
import { Calendar, Clock, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Attendance() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("Morning");
  const [attendance, setAttendance] = useState({});

  const students = [
    { id: 1, name: "Anjali Nair" },
    { id: 2, name: "Rahul Menon" },
    { id: 3, name: "Devika Krishnan" },
    { id: 4, name: "Arjun Kumar" },
    { id: 5, name: "Sneha Suresh" },
  ];

  const timeSlots = [
    "Morning (09:00 AM - 11:00 AM)",
    "Midday (11:30 AM - 01:30 PM)",
    "Afternoon (02:00 PM - 04:00 PM)",
  ];

  const handleAttendanceToggle = (studentId) => {
    setAttendance((prev) => ({
      ...prev,
      [studentId]: !prev[studentId],
    }));
  };

  const handleSubmit = () => {
    if (!selectedDate) return alert("Please select a date!");
    alert(
      `Attendance submitted for ${selectedDate} (${selectedSlot}) ✅`
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-gray-900 text-white rounded-2xl p-6 shadow-md space-y-6"
    >
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-gray-700 pb-3">
        <Calendar />
        <h2 className="text-2xl font-bold">Attendance Management</h2>
      </div>

      {/* Date and Time Slot Selection */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Date Picker */}
        <div>
          <label className="block mb-2 font-semibold text-gray-300">
            Select Date
          </label>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 focus:ring-2 focus:ring-gray-500 outline-none"
          />
        </div>

        {/* Time Slot */}
        <div>
          <label className="block mb-2 font-semibold text-gray-300">
            Select Time Slot
          </label>
          <div className="flex items-center gap-2 bg-gray-800 border border-gray-700 rounded-lg px-3 py-2">
            <Clock className="text-gray-400" />
            <select
              value={selectedSlot}
              onChange={(e) => setSelectedSlot(e.target.value)}
              className="w-full bg-gray-800 focus:outline-none"
            >
              {timeSlots.map((slot, index) => (
                <option key={index}>{slot}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Student Attendance Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-800 text-left">
              <th className="p-3">#</th>
              <th className="p-3">Student Name</th>
              <th className="p-3 text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr
                key={student.id}
                className="border-b border-gray-700 hover:bg-gray-800 transition"
              >
                <td className="p-3 font-semibold">{student.id}</td>
                <td className="p-3">{student.name}</td>
                <td className="p-3 text-center">
                  <button
                    onClick={() => handleAttendanceToggle(student.id)}
                    className={`px-4 py-2 rounded-lg font-semibold transition 
                      ${
                        attendance[student.id]
                          ? "bg-white text-black"
                          : "bg-gray-700 hover:bg-gray-600"
                      }`}
                  >
                    {attendance[student.id] ? "Present" : "Absent"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Submit Button */}
      <div className="flex justify-end">
        <button
          onClick={handleSubmit}
          className="bg-white text-black font-bold px-6 py-2 rounded-lg shadow-md hover:bg-gray-200 transition"
        >
          <CheckCircle2 className="inline-block mr-2" />
          Submit Attendance
        </button>
      </div>
    </motion.div>
  );
}
