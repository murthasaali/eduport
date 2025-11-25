'use client'
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Attendance from "./components/attendance";
import Schedule from "./components/schedule";
import MyStudents from "./components/myStudents";
import StudentSubmition from "./components/Submitions";
import Overview from "./components/Overview";

export default function FacultyDashboard() {
  const search = useSearchParams();
  const tabParam = search.get("tab");
  const [activeTab, setActiveTab] = useState(tabParam ?? "overview");

  useEffect(() => {
    // update when URL changes
    setActiveTab(search.get("tab") ?? "overview");
  }, [search]);

  return (
    <div className="">
      {/* <h2 className="text-3xl font-bold capitalize">{activeTab}</h2> */}

      {activeTab === "overview" && <Overview />}
      {activeTab === "attendance" && <Attendance />}
      {activeTab === "schedule" && <Schedule />}
      {activeTab === "students" && <MyStudents />}
      {activeTab === "submissions" && <StudentSubmition />}
    </div>
  );
}