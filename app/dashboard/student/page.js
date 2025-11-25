'use client'
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { 
  BookOpen, 
  Calendar, 
  BarChart3, 
  LogOut, 
  Bell, 
  User, 
  Home 
} from "lucide-react";
import { motion } from "framer-motion";

export default function StudentDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const router = useRouter();

  const handleLogout = () => router.push("/");

  const menuItems = [
    { id: "overview", label: "Dashboard", icon: <Home /> },
    { id: "courses", label: "My Courses", icon: <BookOpen /> },
    { id: "progress", label: "Progress", icon: <BarChart3 /> },
    { id: "schedule", label: "Schedule", icon: <Calendar /> },
  ];

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-indigo-800 to-purple-700 text-white flex flex-col justify-between shadow-lg">
        <div>
          <h1 className="text-3xl font-bold p-6 border-b border-white/20">EduPortal</h1>
          <nav className="flex flex-col p-4 gap-2">
            {menuItems.map(item => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-3 px-4 py-2 rounded-lg transition 
                  ${activeTab === item.id ? "bg-white/20" : "hover:bg-white/10"}`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-4 py-3 m-4 rounded-lg bg-white/20 hover:bg-white/30 transition"
        >
          <LogOut />
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        {/* Top Navbar */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800 capitalize">{activeTab}</h2>
          <div className="flex items-center gap-4">
            <button className="relative p-2 rounded-full hover:bg-gray-200">
              <Bell />
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span>
            </button>
            <div className="flex items-center gap-2 bg-white p-2 rounded-lg shadow">
              <User className="text-indigo-700" />
              <span className="font-semibold">Student</span>
            </div>
          </div>
        </div>

        {/* Dashboard Overview */}
        {activeTab === "overview" && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.4 }}
            className="space-y-6"
          >
            {/* Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Total Courses", value: "6", color: "from-pink-500 to-rose-500" },
                { title: "Completed", value: "3", color: "from-indigo-500 to-blue-500" },
                { title: "Ongoing", value: "2", color: "from-purple-500 to-violet-500" },
                { title: "Attendance", value: "92%", color: "from-green-500 to-emerald-500" },
              ].map((item, i) => (
                <div key={i} className={`bg-gradient-to-r ${item.color} text-white rounded-2xl p-6 shadow-md`}>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-3xl font-bold mt-2">{item.value}</p>
                </div>
              ))}
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Course Progress */}
              <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-md">
                <h3 className="text-xl font-bold mb-4">Course Progress</h3>
                <div className="space-y-4">
                  {[
                    { name: "Web Development", progress: 80 },
                    { name: "Data Science", progress: 65 },
                    { name: "UI/UX Design", progress: 45 },
                  ].map((course, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-sm font-semibold mb-1">
                        <span>{course.name}</span>
                        <span>{course.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-indigo-600 h-2 rounded-full"
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Upcoming Schedule */}
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <h3 className="text-xl font-bold mb-4">Upcoming Schedule</h3>
                <ul className="space-y-3">
                  {[
                    { time: "10:00 AM", subject: "Mathematics Lecture" },
                    { time: "12:30 PM", subject: "React JS Workshop" },
                    { time: "3:00 PM", subject: "Database Assignment Review" },
                  ].map((item, i) => (
                    <li key={i} className="p-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition">
                      <p className="font-semibold">{item.subject}</p>
                      <p className="text-sm text-gray-500">{item.time}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Activity Feed */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-bold mb-4">Recent Activities</h3>
              <ul className="space-y-3">
                {[
                  "Completed Web Development Assignment",
                  "Scored 95% in Data Science Quiz",
                  "Attended React Workshop",
                ].map((activity, i) => (
                  <li key={i} className="p-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition">
                    {activity}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </main>
    </div>
  );
}
