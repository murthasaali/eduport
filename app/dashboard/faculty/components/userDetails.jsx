"use client";
import React, { useState } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Edit,
  Lock,
  Bell,
  LogOut,
  Camera,
} from "lucide-react";

export default function FacultyDetails() {
  const [faculty, setFaculty] = useState({
    name: "Dr. Anjali Nair",
    email: "anjali.nair@academy.edu",
    phone: "+91 9876543210",
    department: "Digital Marketing",
    location: "Cochin, Kerala",
    image: `https://randomuser.me/api/portraits/women/${Math.floor(Math.random() * 90)}.jpg`,
  });

  const [editMode, setEditMode] = useState(false);

  const handleChange = (e) => {
    setFaculty({ ...faculty, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-6 space-y-8 text-gray-100 min-h-screen bg-black">
      {/* Header */}
      <h2 className="text-3xl font-semibold mb-2 text-white">Faculty Dashboard</h2>
      <p className="text-gray-400">Manage your personal details and settings</p>

      {/* Faculty Details Section */}
      <div className="bg-gray-900/80 backdrop-blur-md rounded-2xl shadow-lg p-6 border border-gray-800">
        {/* Top Section with Profile Picture */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-6">
          {/* Profile Picture */}
          <div className="relative">
            <img
              src={faculty.image}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-gray-700 shadow-lg"
            />
            <button
              onClick={() =>
                setFaculty({
                  ...faculty,
                  image: `https://randomuser.me/api/portraits/women/${Math.floor(
                    Math.random() * 90
                  )}.jpg`,
                })
              }
              className="absolute bottom-1 right-1 bg-blue-600 hover:bg-blue-700 p-2 rounded-full shadow-md"
            >
              <Camera size={16} className="text-white" />
            </button>
          </div>

          {/* Basic Info */}
          <div className="flex-1">
            <h3 className="text-2xl font-semibold text-white">{faculty.name}</h3>
            <p className="text-gray-400">{faculty.department}</p>
            <p className="text-gray-400">{faculty.location}</p>
          </div>

          {/* Edit Button */}
          <button
            onClick={() => setEditMode(!editMode)}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            <Edit size={18} />
            {editMode ? "Cancel" : "Edit"}
          </button>
        </div>

        {/* Detailed Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div className="flex items-center gap-3">
            <User className="text-blue-400" />
            {editMode ? (
              <input
                name="name"
                value={faculty.name}
                onChange={handleChange}
                className="bg-gray-800 border border-gray-700 rounded-md px-3 py-2 w-full text-gray-100 focus:outline-none focus:border-blue-500"
              />
            ) : (
              <p className="text-gray-200">{faculty.name}</p>
            )}
          </div>

          {/* Email */}
          <div className="flex items-center gap-3">
            <Mail className="text-blue-400" />
            {editMode ? (
              <input
                name="email"
                value={faculty.email}
                onChange={handleChange}
                className="bg-gray-800 border border-gray-700 rounded-md px-3 py-2 w-full text-gray-100 focus:outline-none focus:border-blue-500"
              />
            ) : (
              <p className="text-gray-200">{faculty.email}</p>
            )}
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3">
            <Phone className="text-blue-400" />
            {editMode ? (
              <input
                name="phone"
                value={faculty.phone}
                onChange={handleChange}
                className="bg-gray-800 border border-gray-700 rounded-md px-3 py-2 w-full text-gray-100 focus:outline-none focus:border-blue-500"
              />
            ) : (
              <p className="text-gray-200">{faculty.phone}</p>
            )}
          </div>

          {/* Location */}
          <div className="flex items-center gap-3">
            <MapPin className="text-blue-400" />
            {editMode ? (
              <input
                name="location"
                value={faculty.location}
                onChange={handleChange}
                className="bg-gray-800 border border-gray-700 rounded-md px-3 py-2 w-full text-gray-100 focus:outline-none focus:border-blue-500"
              />
            ) : (
              <p className="text-gray-200">{faculty.location}</p>
            )}
          </div>
        </div>
      </div>

      {/* Settings Section */}
      <div className="bg-gray-900/80 backdrop-blur-md rounded-2xl shadow-lg p-6 border border-gray-800">
        <h3 className="text-xl font-semibold text-white mb-4">Settings</h3>

        <div className="space-y-3">
          <button className="flex items-center gap-3 w-full px-4 py-3 rounded-md bg-gray-800 hover:bg-gray-700 transition">
            <Lock className="text-gray-300" /> Change Password
          </button>

          <button className="flex items-center gap-3 w-full px-4 py-3 rounded-md bg-gray-800 hover:bg-gray-700 transition">
            <Bell className="text-gray-300" /> Notification Preferences
          </button>

          <button className="flex items-center gap-3 w-full px-4 py-3 rounded-md bg-red-600 hover:bg-red-700 transition text-white">
            <LogOut className="text-white" /> Logout
          </button>
        </div>
      </div>
    </div>
  );
}
