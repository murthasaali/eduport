"use client";
import React, { useState } from "react";
import { FaCalendarAlt, FaClock, FaChalkboardTeacher, FaDoorOpen } from "react-icons/fa";

const timetable = [
  {
    day: "Monday",
    slots: [
      { time: "9:00–10:00", subject: "Mathematics", faculty: "Dr. Meera", room: "B-204", type: "Lecture" },
      { time: "11:00–12:00", subject: "Physics", faculty: "Prof. Anand", room: "Lab 1", type: "Lab" },
    ],
  },
  {
    day: "Tuesday",
    slots: [
      { time: "10:00–11:00", subject: "Chemistry", faculty: "Dr. Kavya", room: "C-101", type: "Lecture" },
      { time: "1:00–2:00", subject: "Computer Science", faculty: "Mr. Arjun", room: "Lab 3", type: "Lab" },
    ],
  },
  {
    day: "Wednesday",
    slots: [
      { time: "9:00–10:00", subject: "Mathematics", faculty: "Dr. Meera", room: "B-204", type: "Lecture" },
      { time: "2:00–3:00", subject: "English", faculty: "Mrs. Divya", room: "A-302", type: "Tutorial" },
    ],
  },
  {
    day: "Thursday",
    slots: [
      { time: "11:00–12:00", subject: "Physics", faculty: "Prof. Anand", room: "Lab 2", type: "Lab" },
      { time: "3:00–4:00", subject: "History", faculty: "Dr. Ramesh", room: "C-210", type: "Lecture" },
    ],
  },
  {
    day: "Friday",
    slots: [
      { time: "10:00–11:00", subject: "Chemistry", faculty: "Dr. Kavya", room: "C-101", type: "Lecture" },
      { time: "1:00–2:00", subject: "Computer Science", faculty: "Mr. Arjun", room: "Lab 3", type: "Project" },
    ],
  },
];

const events = [
  { date: "Oct 12", title: "Staff Meeting", time: "3:00 PM", location: "Conference Hall", status: "Upcoming" },
  { date: "Oct 15", title: "Parent-Teacher Conference", time: "11:00 AM", location: "Auditorium", status: "Scheduled" },
  { date: "Oct 20", title: "Exam Duty", time: "9:00 AM", location: "Block A", status: "Assigned" },
  { date: "Oct 25", title: "Workshop on AI Tools", time: "2:00 PM", location: "Lab 4", status: "Upcoming" },
];

export default function Schedule() {
  const [weekView, setWeekView] = useState("current");

  return (
    <div className="min-h-screen p-4 text-gray-100">
      <h1 className="text-3xl font-semibold text-white text-center mb-8">Faculty Schedule</h1>

      {/* Toggle for Week */}
      <div className="flex justify-center mb-6">
        <div className="inline-flex rounded-full bg-gray-800 border border-gray-700">
          {["current", "next"].map((view) => (
            <button
              key={view}
              onClick={() => setWeekView(view)}
              className={`px-5 py-2 text-sm font-medium rounded-full focus:outline-none ${
                weekView === view
                  ? "bg-white text-gray-900"
                  : "text-gray-300 hover:bg-gray-700"
              }`}
            >
              {view} week
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Weekly Timetable */}
        <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
          <div className="flex items-center gap-3 mb-4">
            <FaCalendarAlt className="text-xl text-gray-200" />
            <h2 className="text-xl font-semibold text-white">Weekly Timetable</h2>
          </div>

          <div className="space-y-4">
            {timetable.map((day, index) => (
              <div key={index} className="rounded-md">
                <h3 className="text-lg font-medium text-gray-200 mb-2">{day.day}</h3>
                <ul className="space-y-2">
                  {day.slots.map((slot, idx) => (
                    <li
                      key={idx}
                      className="flex flex-col md:flex-row md:items-center justify-between bg-gray-800 rounded-md p-3 border border-gray-700"
                    >
                      <div>
                        <p className="text-sm font-semibold text-white">
                          {slot.time} • {slot.subject}
                        </p>
                        <p className="text-xs text-gray-300 flex items-center gap-2 mt-1">
                          <FaChalkboardTeacher className="text-gray-300" />
                          {slot.faculty}
                        </p>
                      </div>

                      <div className="flex items-center gap-4 mt-3 md:mt-0">
                        <span className="text-xs text-gray-300 flex items-center gap-1">
                          <FaDoorOpen className="text-gray-300" /> {slot.room}
                        </span>
                        <span
                          className={`text-xs px-2 py-1 rounded-full font-medium ${
                            slot.type === "Lecture"
                              ? "bg-indigo-700 text-indigo-100"
                              : slot.type === "Lab"
                              ? "bg-green-700 text-green-100"
                              : slot.type === "Tutorial"
                              ? "bg-yellow-700 text-yellow-100"
                              : "bg-pink-700 text-pink-100"
                          }`}
                        >
                          {slot.type}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
          <div className="flex items-center gap-3 mb-4">
            <FaClock className="text-xl text-gray-200" />
            <h2 className="text-xl font-semibold text-white">Upcoming Events</h2>
          </div>

          <ul className="space-y-4">
            {events.map((event, idx) => (
              <li key={idx} className="bg-gray-800 rounded-md p-3 border border-gray-700">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold text-indigo-200">{event.date}</span>
                  <span
                    className={`text-xs px-2 py-1 rounded-full font-medium ${
                      event.status === "Upcoming"
                        ? "bg-purple-700 text-purple-100"
                        : event.status === "Scheduled"
                        ? "bg-green-700 text-green-100"
                        : "bg-blue-700 text-blue-100"
                    }`}
                  >
                    {event.status}
                  </span>
                </div>

                <p className="text-white font-medium">{event.title}</p>
                <div className="flex justify-between text-sm text-gray-300 mt-1">
                  <span>{event.time}</span>
                  <span>{event.location}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}