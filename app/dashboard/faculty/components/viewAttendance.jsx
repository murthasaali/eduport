"use client";
import React, { useState } from "react";
import {
  Search,
  Calendar,
  Users,
  CheckCircle2,
  XCircle,
  Filter,
} from "lucide-react";

const studentsData = [
  { id: 1, name: "Aarav Kumar", class: "A", date: "2025-10-24", status: "Present" },
  { id: 2, name: "Diya Patel", class: "A", date: "2025-10-24", status: "Absent" },
  { id: 3, name: "Rahul Nair", class: "B", date: "2025-10-24", status: "Present" },
  { id: 4, name: "Meera Das", class: "B", date: "2025-10-25", status: "Present" },
  { id: 5, name: "Vikram Singh", class: "C", date: "2025-10-25", status: "Absent" },
  { id: 6, name: "Aisha Rahman", class: "C", date: "2025-10-24", status: "Present" },
];

export default function ViewAttendance() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedClass, setSelectedClass] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredStudents = studentsData.filter((student) => {
    const matchesName = student.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesClass = selectedClass === "All" || student.class === selectedClass;
    const matchesStatus = statusFilter === "All" || student.status === statusFilter;
    const matchesDate = !selectedDate || student.date === selectedDate;
    return matchesName && matchesClass && matchesStatus && matchesDate;
  });

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-semibold flex items-center gap-2">
            <Calendar className="text-yellow-400" /> Attendance Overview
          </h1>
          <p className="text-gray-400 text-sm">
            Filter attendance by student, class, date, or status
          </p>
        </div>
      </div>

      {/* Filters Section */}
      <div className="bg-gray-800/80 backdrop-blur-md p-4 rounded-xl border border-gray-700 shadow-lg mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Search */}
          <div className="flex items-center bg-gray-900 rounded-lg px-3 py-2 border border-gray-700">
            <Search size={18} className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search by student name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-transparent text-gray-200 w-full outline-none placeholder-gray-500"
            />
          </div>

          {/* Class Filter */}
          <div className="flex items-center bg-gray-900 rounded-lg px-3 py-2 border border-gray-700">
            <Users size={18} className="text-gray-400 mr-2" />
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="bg-transparent w-full text-gray-200 outline-none"
            >
              <option value="All">All Classes</option>
              <option value="A">Class A</option>
              <option value="B">Class B</option>
              <option value="C">Class C</option>
            </select>
          </div>

          {/* Date Filter */}
          <div className="flex items-center bg-gray-900 rounded-lg px-3 py-2 border border-gray-700">
            <Calendar size={18} className="text-gray-400 mr-2" />
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="bg-transparent w-full text-gray-200 outline-none [color-scheme:dark]"
            />
          </div>

          {/* Status Filter */}
          <div className="flex items-center bg-gray-900 rounded-lg px-3 py-2 border border-gray-700">
            <Filter size={18} className="text-gray-400 mr-2" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="bg-transparent w-full text-gray-200 outline-none"
            >
              <option value="All">All Status</option>
              <option value="Present">Present</option>
              <option value="Absent">Absent</option>
            </select>
          </div>
        </div>
      </div>

      {/* Attendance Table */}
      <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-700">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-700 text-gray-300">
            <tr>
              <th className="p-4 font-medium">#</th>
              <th className="p-4 font-medium">Student Name</th>
              <th className="p-4 font-medium">Class</th>
              <th className="p-4 font-medium">Date</th>
              <th className="p-4 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.length > 0 ? (
              filteredStudents.map((student, index) => (
                <tr
                  key={student.id}
                  className="hover:bg-gray-700 transition-all duration-200"
                >
                  <td className="p-4 text-gray-400">{index + 1}</td>
                  <td className="p-4 text-gray-100 font-medium">{student.name}</td>
                  <td className="p-4 text-gray-300">{student.class}</td>
                  <td className="p-4 text-gray-300">{student.date}</td>
                  <td className="p-4">
                    {student.status === "Present" ? (
                      <span className="flex items-center gap-1 text-green-400">
                        <CheckCircle2 size={16} /> Present
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-red-400">
                        <XCircle size={16} /> Absent
                      </span>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="text-center text-gray-400 py-6 italic"
                >
                  No matching records found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
