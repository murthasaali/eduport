// ...existing code...
'use client'
import React, { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Attendance from "./components/attendance";
import Schedule from "./components/schedule";
import MyStudents from "./components/myStudents";
import StudentSubmition from "./components/Submitions";
import Overview from "./components/Overview";

function FacultyTabs() {
  const search = useSearchParams();
  const tabParam = search?.get("tab");
  const [activeTab, setActiveTab] = useState(tabParam ?? "overview");

  useEffect(() => {
    setActiveTab(search?.get("tab") ?? "overview");
  }, [search]);

  return (
    <div className="">
      {activeTab === "overview" && <Overview />}
      {activeTab === "attendance" && <Attendance />}
      {activeTab === "schedule" && <Schedule />}
      {activeTab === "students" && <MyStudents />}
      {activeTab === "submissions" && <StudentSubmition />}
    </div>
  );
}

export default function FacultyDashboard() {
  return (
    <Suspense fallback={<div className="p-4"><Overview /></div>}>
      <FacultyTabs />
    </Suspense>
  );
}
// ...existing code...