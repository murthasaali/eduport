"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Plus, Search } from "lucide-react";

const studentsData = [
  {
    id: 1,
    name: "Aarav Kumar",
    grade: "A",
    email: "aarav.kumar@email.com",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Diya Patel",
    grade: "B+",
    email: "diya.patel@email.com",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Aditya Sharma",
    grade: "A-",
    email: "aditya.sharma@email.com",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
  },
  {
    id: 4,
    name: "Meera Nair",
    grade: "B",
    email: "meera.nair@email.com",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

export default function MyStudents() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredStudents = studentsData.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen p-8 text-gray-100">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
        <h1 className="text-3xl font-semibold">My Students</h1>

        {/* Search Bar */}
        <div className="flex items-center bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 w-full sm:w-80">
          <Search className="text-gray-400 mr-2" size={18} />
          <input
            type="text"
            placeholder="Search by name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-transparent outline-none text-sm text-gray-200 w-full placeholder-gray-400"
          />
        </div>

        {/* Add Student Button */}
        <Link
          href="/dashboard/faculty/addStudent"
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition whitespace-nowrap"
        >
          <Plus size={18} />
          Add Student
        </Link>
      </div>

      {/* Students Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredStudents.length > 0 ? (
          filteredStudents.map((student) => (
            <div
              key={student.id}
              className="bg-gray-800 rounded-lg p-4 border border-gray-700 shadow-sm"
            >
              <div className="flex items-center gap-4">
                <img
                  src={student.image}
                  alt={student.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-gray-700"
                />
                <div>
                  <div className="text-lg font-medium text-white">
                    {student.name}
                  </div>
                  <div className="text-sm text-gray-300">
                    Grade: {student.grade}
                  </div>
                  <div className="text-sm text-gray-400">{student.email}</div>
                </div>
              </div>

              <div className="mt-4 flex gap-3">
                <Link
                  href={`/dashboard/faculty/students/${student.id}`}
                  className="flex-1 px-3 py-2 text-sm rounded-md bg-gray-700 text-white border border-gray-600 hover:bg-gray-600 transition text-center"
                >
                  View Profile
                </Link>
                <button className="px-3 py-2 text-sm rounded-md bg-transparent text-gray-300 border border-gray-700 hover:bg-gray-700 transition">
                  Message
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-400 text-center col-span-full">
            No students found.
          </p>
        )}
      </div>
    </div>
  );
}
