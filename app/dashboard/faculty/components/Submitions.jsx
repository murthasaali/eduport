"use client";
import React, { useState } from "react";
import { FaFileAlt, FaImage, FaLink, FaSearch } from "react-icons/fa";

const initialSubmissions = [
  {
    id: 1,
    student: "Aarav Kumar",
    type: "document",
    title: "Assignment 1",
    link: "https://example.com/assignment1.pdf",
    status: "Pending",
    submittedAt: "2025-10-10 09:15 AM",
  },
  {
    id: 2,
    student: "Diya Patel",
    type: "image",
    title: "Project Screenshot",
    link: "https://randomuser.me/api/portraits/women/44.jpg",
    status: "Checked",
    submittedAt: "2025-10-10 10:30 AM",
  },
  {
    id: 3,
    student: "Aditya Sharma",
    type: "link",
    title: "GitHub Repo",
    link: "https://github.com/aditya/project",
    status: "Pending",
    submittedAt: "2025-10-10 11:05 AM",
  },
];

export default function StudentSubmition() {
  const [submissions, setSubmissions] = useState(initialSubmissions);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const handleToggleStatus = (id) => {
    setSubmissions((prev) =>
      prev.map((sub) =>
        sub.id === id
          ? {
              ...sub,
              status: sub.status === "Checked" ? "Pending" : "Checked",
            }
          : sub
      )
    );
  };

  // Filter and search logic
  const filteredSubmissions = submissions.filter((sub) => {
    const matchesSearch =
      sub.student.toLowerCase().includes(search.toLowerCase()) ||
      sub.title.toLowerCase().includes(search.toLowerCase());
    const matchesFilter =
      filter === "all" ? true : sub.type === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-white mb-6">Student Submissions</h1>
      {/* Search and Filter Bar */}
      <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
        <div className="relative w-full md:w-1/2">
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search by student or title..."
            className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none"
          />
          <FaSearch className="absolute right-3 top-3 text-gray-400" />
        </div>
        <select
          value={filter}
          onChange={e => setFilter(e.target.value)}
          className="px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none"
        >
          <option value="all">All</option>
          <option value="image">Images</option>
          <option value="document">Documents</option>
          <option value="link">Links</option>
        </select>
      </div>
      <div className="bg-gray-900 rounded-xl shadow-lg">
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="text-white pb-2">Student</th>
              <th className="text-white pb-2">Type</th>
              <th className="text-white pb-2">Title</th>
              <th className="text-white pb-2">Link</th>
              <th className="text-white pb-2">Submitted At</th>
              <th className="text-white pb-2">Status</th>
              <th className="text-white pb-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredSubmissions.length === 0 ? (
              <tr>
                <td colSpan={7} className="py-4 text-center text-gray-400">
                  No submissions found.
                </td>
              </tr>
            ) : (
              filteredSubmissions.map((sub) => (
                <tr key={sub.id} className="border-t border-gray-700">
                  <td className="py-2 text-gray-100">{sub.student}</td>
                  <td className="py-2 text-gray-100">
                    {sub.type === "document" && <FaFileAlt className="inline mr-1" />}
                    {sub.type === "image" && <FaImage className="inline mr-1" />}
                    {sub.type === "link" && <FaLink className="inline mr-1" />}
                    {sub.type.charAt(0).toUpperCase() + sub.type.slice(1)}
                  </td>
                  <td className="py-2 text-gray-100">{sub.title}</td>
                  <td className="py-2">
                    <a
                      href={sub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 underline"
                    >
                      View
                    </a>
                  </td>
                  <td className="py-2 text-gray-400">{sub.submittedAt}</td>
                  <td className="py-2">
                    <span
                      className={`px-2 py-1 rounded ${
                        sub.status === "Checked"
                          ? "bg-green-700 text-white"
                          : "bg-yellow-700 text-white"
                      }`}
                    >
                      {sub.status}
                    </span>
                  </td>
                  <td className="py-2">
                    <button
                      onClick={() => handleToggleStatus(sub.id)}
                      className={`px-3 py-1 rounded-lg font-semibold text-xs transition ${
                        sub.status === "Checked"
                          ? "bg-yellow-700 text-white hover:bg-yellow-600"
                          : "bg-green-700 text-white hover:bg-green-600"
                      }`}
                    >
                      Mark as {sub.status === "Checked" ? "Pending" : "Checked"}
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}