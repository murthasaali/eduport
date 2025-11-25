"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  FaEnvelope,
  FaGraduationCap,
  FaArrowLeft,
  FaPhone,
  FaCalendarAlt,
  FaUserGraduate,
  FaFileAlt,
  FaDownload,
  FaCheck,
  FaTimes,
} from "react-icons/fa";

const studentsData = [
  {
    id: 1,
    name: "Aarav Kumar",
    grade: "A",
    gpa: 3.9,
    email: "aarav.kumar@email.com",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    phone: "+91 98765 43210",
    parent: "Ramesh Kumar",
    enrollmentDate: "2023-06-12",
    studentId: "STU-1001",
    attendancePercent: 92,
    notes: "Strong performer. Needs to participate more in labs.",
    submissions: [
      {
        id: "s1",
        title: "Assignment 1",
        type: "document",
        link: "https://example.com/assignment1.pdf",
        size: "120KB",
        submittedAt: "2025-10-10 09:15 AM",
        status: "Pending",
      },
      {
        id: "s2",
        title: "Project Screenshot",
        type: "image",
        link: "https://randomuser.me/api/portraits/men/32.jpg",
        size: "450KB",
        submittedAt: "2025-10-11 02:30 PM",
        status: "Checked",
      },
    ],
  },
  // ...other students...
];

export default function StudentDetails({ id }) {
  const router = useRouter();
  const [student, setStudent] = useState(null);
  const [notes, setNotes] = useState("");
  const [atRisk, setAtRisk] = useState(false);

  useEffect(() => {
    const sid = Number(id);
    const found = studentsData.find((s) => s.id === sid);
    setStudent(found ?? null);
    if (found) {
      setNotes(found.notes || "");
      setAtRisk(false);
    }
  }, [id]);

  if (!student) {
    return (
      <div className="p-8 min-h-[300px]">
        <button
          onClick={() => router.back()}
          className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded bg-gray-800 text-gray-100"
        >
          <FaArrowLeft /> Back
        </button>
        <div className="text-gray-300">Student not found.</div>
      </div>
    );
  }

  const handleDownload = (link) => {
    window.open(link, "_blank");
  };

  const saveNotes = () => {
    // placeholder: persist notes to API/store
    setStudent((s) => ({ ...s, notes }));
  };

  return (
    <div className="p-8">
      <div className=" mx-auto bg-gray-900 rounded-lg p-6 border border-gray-800">
        <div className="flex items-start gap-6">
          <img
            src={student.image}
            alt={student.name}
            className="w-28 h-28 rounded-full object-cover border-2 border-gray-700"
          />
          <div className="flex-1">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-white">{student.name}</h2>
                <div className="text-sm text-gray-300 mt-1">{student.studentId} • Enrolled {student.enrollmentDate}</div>
                <div className="mt-2 flex items-center gap-4 text-sm text-gray-300">
                  <span className="flex items-center gap-2">
                    <FaGraduationCap /> Grade: <strong className="ml-1 text-gray-100">{student.grade}</strong>
                  </span>
                  <span className="flex items-center gap-2">
                    <FaUserGraduate /> GPA: <strong className="ml-1 text-gray-100">{student.gpa}</strong>
                  </span>
                  <span className="flex items-center gap-2">
                    <FaCalendarAlt /> Attendance: <strong className="ml-1 text-gray-100">{student.attendancePercent}%</strong>
                  </span>
                </div>
              </div>

              <div className="flex flex-col items-end gap-3">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => router.back()}
                    className="inline-flex items-center gap-2 px-3 py-2 bg-gray-800 text-white rounded border border-gray-700"
                  >
                    <FaArrowLeft /> Back
                  </button>
                  <Link
                    href={`/dashboard/faculty/students/${student.id}/`}
                    className="px-3 py-2 bg-green-600 text-white rounded"
                  >
                    View Submissions
                  </Link>
                </div>

                <div className="text-sm text-gray-300">
                  <div className="font-medium">Contact</div>
                  <div className="mt-1">{student.phone} • <a className="text-blue-400 underline" href={`mailto:${student.email}`}>{student.email}</a></div>
                  <div className="mt-1">Parent: {student.parent}</div>
                </div>
              </div>
            </div>

            {/* Academic / Attendance summary */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-800 p-3 rounded border border-gray-700">
                <div className="text-xs text-gray-400">Attendance</div>
                <div className="text-lg font-semibold mt-1">{student.attendancePercent}%</div>
                <div className="w-full bg-gray-700 h-2 rounded mt-2">
                  <div
                    className="h-2 rounded bg-indigo-500"
                    style={{ width: `${Math.min(student.attendancePercent, 100)}%` }}
                  />
                </div>
              </div>

              <div className="bg-gray-800 p-3 rounded border border-gray-700">
                <div className="text-xs text-gray-400">Recent Grade</div>
                <div className="text-lg font-semibold mt-1">{student.grade}</div>
                <div className="text-sm text-gray-400 mt-1">GPA {student.gpa}</div>
              </div>

              <div className="bg-gray-800 p-3 rounded border border-gray-700">
                <div className="text-xs text-gray-400">Flags</div>
                <div className="mt-2 flex items-center gap-2">
                  <button
                    onClick={() => setAtRisk((v) => !v)}
                    className={`px-2 py-1 rounded text-sm ${atRisk ? "bg-red-600 text-white" : "bg-gray-700 text-gray-100"}`}
                  >
                    {atRisk ? <span className="flex items-center gap-2"><FaTimes /> At Risk</span> : <span className="flex items-center gap-2"><FaCheck /> OK</span>}
                  </button>
                </div>
              </div>
            </div>

            {/* Notes */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-white">Faculty Notes</h3>
              <textarea
                rows={4}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full mt-2 p-3 bg-gray-800 text-gray-100 rounded border border-gray-700 focus:outline-none"
              />
              <div className="mt-3 flex gap-2">
                <button onClick={saveNotes} className="px-3 py-2 bg-indigo-600 text-white rounded">Save Notes</button>
                <button onClick={() => { setNotes(student.notes || ""); }} className="px-3 py-2 bg-gray-700 text-gray-100 rounded">Reset</button>
              </div>
            </div>

            {/* Recent Submissions */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-white mb-3">Recent Submissions</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="text-gray-300">
                      <th className="pb-2">Title</th>
                      <th className="pb-2">Type</th>
                      <th className="pb-2">Size</th>
                      <th className="pb-2">Submitted At</th>
                      <th className="pb-2">Status</th>
                      <th className="pb-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {student.submissions.map((sub) => (
                      <tr key={sub.id} className="border-t border-gray-800">
                        <td className="py-2">{sub.title}</td>
                        <td className="py-2 flex items-center gap-2 text-gray-100">
                          <FaFileAlt /> {sub.type}
                        </td>
                        <td className="py-2 text-gray-400">{sub.size}</td>
                        <td className="py-2 text-gray-400">{sub.submittedAt}</td>
                        <td className="py-2">
                          <span className={`px-2 py-1 rounded text-xs ${sub.status === "Checked" ? "bg-green-700 text-white" : "bg-yellow-700 text-white"}`}>
                            {sub.status}
                          </span>
                        </td>
                        <td className="py-2 flex gap-2">
                          <a href={sub.link} target="_blank" rel="noreferrer" className="px-2 py-1 bg-blue-700 text-white rounded text-xs">View</a>
                          <button onClick={() => handleDownload(sub.link)} className="px-2 py-1 bg-gray-700 text-gray-100 rounded text-xs flex items-center gap-1">
                            <FaDownload /> Download
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}