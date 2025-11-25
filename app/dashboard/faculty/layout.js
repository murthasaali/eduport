"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Users,
  Calendar,
  ClipboardCheck,
  LogOut,
  Bell,
  User,
  Home,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  PlusCircle,
  List,
  ChevronDown,
  ChevronUp,
  Eye,
  Edit,
  BarChart3,
  X,
  ClipboardList,
  Menu,
} from "lucide-react";

export default function FacultyLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [tabHistory, setTabHistory] = useState([]);

  useEffect(() => {
    if (!pathname) return;
    setTabHistory((prev) => {
      if (prev.includes(pathname)) return prev;
      return [...prev, pathname];
    });
  }, [pathname]);

  const handleCloseTab = (tab) => {
    setTabHistory((prev) => prev.filter((t) => t !== tab));
  };

  const menu = [
    { id: "overview", href: "/dashboard/faculty", label: "Dashboard", icon: <Home /> },
    {
      id: "attendance",
      label: "Attendance",
      icon: <ClipboardCheck />,
      subMenu: [
        { id: "view", label: "View Attendance", href: "/dashboard/faculty/attendance/viewAttendance", icon: <Eye size={16} /> },
        { id: "update", label: "Update Attendance", href: "/dashboard/faculty/attendance/updateAttendance", icon: <Edit size={16} /> },
        { id: "overview", label: "Attendance Overview", href: "/dashboard/faculty/attendance/overviewAttendance", icon: <BarChart3 size={16} /> },
      ],
    },
    { id: "schedule", href: "/dashboard/faculty?tab=schedule", label: "Schedule", icon: <Calendar /> },
    {
      id: "students",
      label: "My Students",
      icon: <Users />,
      subMenu: [
        { id: "add", label: "Add Student", href: "/dashboard/faculty/addStudent", icon: <PlusCircle size={16} /> },
        { id: "view", label: "View Students", href: "/dashboard/faculty?tab=students", icon: <List size={16} /> },
      ],
    },
    {
      id: "submissions",
      label: "Submissions",
      icon: <CheckCircle2 />,
      subMenu: [
        { id: "view", label: "View Submissions", href: "/dashboard/faculty/submissions/viewSubmission", icon: <Eye size={16} /> },
        { id: "assign", label: "Assign Tasks", href: "/dashboard/faculty/submissions/addTask", icon: <ClipboardList size={16} /> },
        { id: "overview", label: "Submission Overview", href: "/dashboard/faculty/submissions/overviewTask", icon: <BarChart3 size={16} /> },
      ],
    },
  ];

  return (
    <div
      className="min-h-screen flex text-white bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage:
          "url('https://a.d-cd.net/rrj0WWlXwkv8mzsDkZHEqJTBipc-1920.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-xs z-0"></div>

      {/* Sidebar */}
      <aside
        className={`fixed md:relative top-0 left-0 h-full z-50 bg-gradient-to-b from-gray-950/95 to-gray-900/95 transform transition-transform duration-300 ease-in-out overflow-y-auto
          ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"} 
          ${collapsed ? "md:w-20" : "md:w-64"} 
          md:translate-x-0`}
      >
        <div className="flex flex-col justify-between h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-white/10">
            <Image
              width={collapsed ? 40 : 150}
              height={40}
              src="https://kenmedigitalacademy.com/wp-content/uploads/2023/11/2.svg"
              alt="EduPortal Logo"
              className="transition-all duration-300"
            />
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCollapsed((s) => !s)}
                className="hidden md:flex p-1 rounded-md hover:bg-white/10 transition"
              >
                {collapsed ? <ChevronRight /> : <ChevronLeft />}
              </button>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="md:hidden p-1 rounded-md hover:bg-white/10 transition"
              >
                <X />
              </button>
            </div>
          </div>

          {/* Menu */}
          <nav className="flex flex-col p-4 gap-2">
            {menu.map((m) => (
              <div key={m.id} className="flex flex-col">
                {m.subMenu ? (
                  <>
                    <button
                      onClick={() => setOpenMenu(openMenu === m.id ? null : m.id)}
                      className={`flex items-center ${
                        collapsed ? "justify-center" : "justify-between"
                      } gap-3 px-3 py-2 rounded-lg hover:bg-white/10 transition`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-lg flex-shrink-0 w-6 flex items-center justify-center">
                          {m.icon}
                        </span>
                        <span
                          className={`text-sm font-medium transition-all duration-300 overflow-hidden whitespace-nowrap
                            ${collapsed ? "opacity-0 max-w-0" : "opacity-100 max-w-xs"}`}
                        >
                          {m.label}
                        </span>
                      </div>

                      {!collapsed && (
                        <span>
                          {openMenu === m.id ? (
                            <ChevronUp size={16} />
                          ) : (
                            <ChevronDown size={16} />
                          )}
                        </span>
                      )}
                    </button>

                    {openMenu === m.id && !collapsed && (
                      <div className="ml-10 mt-1 flex flex-col gap-1">
                        {m.subMenu.map((sub) => (
                          <Link
                            key={sub.id}
                            href={sub.href}
                            className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-white/10 transition text-sm"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {sub.icon}
                            <span>{sub.label}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={m.href}
                    className={`flex items-center ${
                      collapsed ? "justify-center" : "justify-start"
                    } gap-3 px-3 py-2 rounded-lg hover:bg-white/10 transition`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="text-lg flex-shrink-0 w-6 flex items-center justify-center">
                      {m.icon}
                    </span>
                    <span
                      className={`text-sm font-medium transition-all duration-300 overflow-hidden whitespace-nowrap
                      ${collapsed ? "opacity-0 max-w-0" : "opacity-100 max-w-xs"}`}
                    >
                      {m.label}
                    </span>
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Logout Button */}
          <div className="p-4">
            <Link
              href="/"
              className={`flex items-center gap-2 px-4 py-2 rounded hover:bg-white/10 transition
                ${collapsed ? "justify-center" : "justify-start"}`}
            >
              <span className="flex-shrink-0 w-6 flex items-center justify-center">
                <LogOut />
              </span>
              <span
                className={`transition-all duration-300 overflow-hidden whitespace-nowrap
                  ${collapsed ? "opacity-0 max-w-0" : "opacity-100 max-w-xs"}`}
              >
                Logout
              </span>
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="relative z-10 w-full overflow-y-scroll h-screen">
        {/* Sticky Top Bar */}
        <div className="sticky top-0 z-20 bg-gray-950/80 backdrop-blur-md border-b border-gray-800 flex justify-between items-center">
          <div className="flex items-center gap-2 p-3 md:hidden">
            {/* Hamburger for Mobile */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 rounded-md hover:bg-gray-800/70 transition"
            >
              <Menu />
            </button>
            <span className="text-lg font-semibold">Faculty Dashboard</span>
          </div>

          {/* Faculty Info + Notifications */}
          <div className="flex justify-end items-center gap-4 p-3 border-b border-gray-800 md:border-none">
            <Link href="/dashboard/faculty/notifications" className="relative p-2 rounded-full hover:bg-gray-800/70 transition">
              <Bell />
              <span className="absolute top-0 right-0 bg-white text-black text-xs rounded-full w-4 h-4 flex items-center justify-center">
                4
              </span>
            </Link>

            <Link
              href="/dashboard/faculty/user"
              className="flex items-center gap-2 bg-gray-900/80 p-2 rounded-lg hover:bg-gray-800/70 transition-all duration-300"
            >
              <User />
              <span className="hidden sm:block">Faculty</span>
            </Link>
          </div>
        </div>

        {/* Tab History */}
        <div className="hidden md:flex gap-2 px-3 py-2 bg-gray-900/70 border-b border-gray-800 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-700">
          {tabHistory.map((tab) => {
            const label = tab.split("/").pop() || "Dashboard";
            return (
              <div
                key={tab}
                className={`flex items-center gap-2 text-sm px-3 py-1 rounded-t-md border border-gray-700 cursor-pointer transition ${
                  pathname === tab
                    ? "bg-gray-700 text-white border-b-2 border-blue-400"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                <Link href={tab}>{label}</Link>
                <button
                  onClick={() => handleCloseTab(tab)}
                  className="text-gray-400 hover:text-white"
                >
                  <X size={14} />
                </button>
              </div>
            );
          })}
        </div>

        {/* Page Content */}
        <div className="relative z-10">{children}</div>
      </main>
    </div>
  );
}
