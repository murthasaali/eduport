'use client'; 
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./calendar-dark.css";
import toast from "react-hot-toast";

const Attendance = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedSlot, setSelectedSlot] = useState("Morning");

  const students = [
    { id: 1, name: "Aarav Kumar" },
    { id: 2, name: "Diya Patel" },
    { id: 3, name: "Aditya Sharma" },
    { id: 4, name: "Meera Nair" },
  ];

  const [attendance, setAttendance] = useState(
    students.reduce((acc, student) => {
      acc[student.id] = "Present";
      return acc;
    }, {})
  );

  const [attendanceRecords, setAttendanceRecords] = useState([]); // store all attendance history

  const handleAttendanceChange = (id, value) => {
    setAttendance({ ...attendance, [id]: value });
  };

  const handleSubmit = () => {
    const data = {
      date: selectedDate.toLocaleDateString(),
      slot: selectedSlot,
      attendance: { ...attendance },
    };

    setAttendanceRecords([...attendanceRecords, data]);
    toast.success("Attendance saved successfully!");
  };

  // ---------------- FILTER SECTION ----------------
  const [filterDate, setFilterDate] = useState("");
  const [filterSlot, setFilterSlot] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  const filteredRecords = attendanceRecords.filter((record) => {
    const dateMatch = filterDate ? record.date === filterDate : true;
    const slotMatch = filterSlot ? record.slot === filterSlot : true;

    // If filtering by status, ensure at least one student matches that status
    const statusMatch = filterStatus
      ? Object.values(record.attendance).includes(filterStatus)
      : true;

    return dateMatch && slotMatch && statusMatch;
  });

  // ------------------------------------------------

  return (
    <div className="min-h-screen p-2 bg-[#0a0a0a] text-gray-200 flex flex-col items-center">
      <div className="bg-[#1a1a1a] p-2 shadow-lg rounded-lg w-full border border-gray-700">
        <h2 className="text-3xl py-3 font-semibold text-start text-white">
          Attendance Management
        </h2>

        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          {/* Calendar Section */}
          <div className="bg-[#111] rounded-lg p-4 border border-gray-700">
            <h3 className="font-semibold mb-3 text-gray-300 text-center">
              Select Date
            </h3>
            <Calendar
              onChange={setSelectedDate}
              value={selectedDate}
              className="rounded-lg calendar-dark"
            />
          </div>

          {/* Right Section */}
          <div className="flex-2 bg-[#111] rounded-lg p-4 border border-gray-700">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold text-gray-300">
                Date: <span className="text-white">{selectedDate.toLocaleDateString()}</span>
              </h3>

              {/* Time Slot */}
              <div>
                <label className="font-medium text-gray-300 mr-2">
                  Time Slot:
                </label>
                <select
                  value={selectedSlot}
                  onChange={(e) => setSelectedSlot(e.target.value)}
                  className="bg-[#1f1f1f] text-gray-200 border border-gray-600 rounded px-3 py-2"
                >
                  <option>Morning</option>
                  <option>Afternoon</option>
                  <option>Full Day</option>
                </select>
              </div>
            </div>

            {/* Attendance Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-700 bg-[#1a1a1a] rounded-lg">
                <thead className="bg-[#222] text-gray-300">
                  <tr>
                    <th className="py-3 px-4 text-left">#</th>
                    <th className="py-3 px-4 text-left">Student Name</th>
                    <th className="py-3 px-4 text-center">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student, index) => (
                    <tr
                      key={student.id}
                      className="border-t border-gray-700 hover:bg-[#262626] transition"
                    >
                      <td className="py-3 px-4">{index + 1}</td>
                      <td className="py-3 px-4">{student.name}</td>
                      <td className="py-3 px-4 text-center">
                        <select
                          value={attendance[student.id]}
                          onChange={(e) =>
                            handleAttendanceChange(student.id, e.target.value)
                          }
                          className="bg-[#1f1f1f] text-gray-200 border border-gray-600 rounded px-2 py-1 focus:ring focus:ring-blue-600"
                        >
                          <option value="Present">✅ Present</option>
                          <option value="Absent">❌ Absent</option>
                          <option value="Late">⏰ Late</option>
                          <option value="Leave">📝 Leave</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Submit Button */}
            <div className="text-center mt-6">
              <button
                onClick={handleSubmit}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-2 rounded-md transition"
              >
                Submit Attendance
              </button>
            </div>
          </div>
        </div>

        {/* ---------- FILTER & VIEW SECTION ---------- */}
        <div className="mt-10 bg-[#111] p-5 rounded-lg border border-gray-700">
          <h3 className="text-xl font-semibold text-gray-200 mb-4">
            View Attendance Records
          </h3>

          <div className="flex flex-wrap gap-4 mb-5">
            <input
              type="text"
              placeholder="Filter by Date (e.g. 10/21/2025)"
              value={filterDate}
              onChange={(e) => setFilterDate(e.target.value)}
              className="bg-[#1f1f1f] text-gray-200 border border-gray-600 rounded px-3 py-2"
            />
            <select
              value={filterSlot}
              onChange={(e) => setFilterSlot(e.target.value)}
              className="bg-[#1f1f1f] text-gray-200 border border-gray-600 rounded px-3 py-2"
            >
              <option value="">All Slots</option>
              <option>Morning</option>
              <option>Afternoon</option>
              <option>Full Day</option>
            </select>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="bg-[#1f1f1f] text-gray-200 border border-gray-600 rounded px-3 py-2"
            >
              <option value="">All Status</option>
              <option value="Present">Present</option>
              <option value="Absent">Absent</option>
              <option value="Late">Late</option>
              <option value="Leave">Leave</option>
            </select>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-700 bg-[#1a1a1a] rounded-lg">
              <thead className="bg-[#222] text-gray-300">
                <tr>
                  <th className="py-3 px-4 text-left">Date</th>
                  <th className="py-3 px-4 text-left">Slot</th>
                  <th className="py-3 px-4 text-left">Student</th>
                  <th className="py-3 px-4 text-center">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredRecords.length === 0 ? (
                  <tr>
                    <td
                      colSpan="4"
                      className="text-center text-gray-400 py-4 italic"
                    >
                      No records found
                    </td>
                  </tr>
                ) : (
                  filteredRecords.map((record, index) =>
                    students.map((student) => (
                      <tr
                        key={`${record.date}-${student.id}-${index}`}
                        className="border-t border-gray-700 hover:bg-[#262626] transition"
                      >
                        <td className="py-3 px-4">{record.date}</td>
                        <td className="py-3 px-4">{record.slot}</td>
                        <td className="py-3 px-4">{student.name}</td>
                        <td className="py-3 px-4 text-center">
                          {record.attendance[student.id] || "-"}
                        </td>
                      </tr>
                    ))
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
