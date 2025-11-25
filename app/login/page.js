'use client'
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaUserCircle } from "react-icons/fa";

export default function Login() {
  const [role, setRole] = useState("student");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace this with your authentication logic
    if (role === "student") {
      router.push("/dashboard/student");
    } else if (role === "faculty") {
      router.push("/dashboard/faculty");
    } else if (role === "admin") {
      router.push("/dashboard/admin");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-black">
      <div className="bg-gray-900/80 backdrop-blur-xl rounded-2xl shadow-2xl p-10 w-full max-w-md border border-gray-700">
        <div className="flex flex-col items-center mb-6">
          <FaUserCircle className="text-6xl text-cyan-400 drop-shadow-[0_0_12px_#00ffff] mb-2 animate-pulse" />
          <h2 className="text-4xl font-extrabold text-white mb-2 tracking-wide">Welcome</h2>
          <p className="text-gray-400 text-lg">Sign in to your account</p>
        </div>
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <select
            value={role}
            onChange={e => setRole(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-700 bg-gray-800 text-gray-200 font-medium focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            <option value="student">Student</option>
            <option value="faculty">Faculty</option>
            <option value="admin">Admin</option>
          </select>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-700 bg-gray-800 text-gray-200 font-medium focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-gray-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-700 bg-gray-800 text-gray-200 font-medium focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-gray-500"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white py-2 rounded-lg font-bold shadow-lg hover:shadow-[0_0_20px_#00ffff] hover:scale-105 transition-all duration-200"
          >
            Login
          </button>
        </form>
        <div className="mt-6 text-center text-gray-400 text-sm">
          <a href="#" className="underline hover:text-cyan-400 transition">Forgot your password?</a>
        </div>
      </div>
    </div>
  );
}
