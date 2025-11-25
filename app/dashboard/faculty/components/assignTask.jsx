"use client";
import React, { useState } from "react";
import { ClipboardList, Send } from "lucide-react";
import toast from "react-hot-toast";

const AssignTask = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    dueDate: "",
    assignedTo: "",
  });

  const [students] = useState([
    "Aarav Kumar",
    "Diya Patel",
    "Riya Nair",
    "Aditya Menon",
    "Sneha Ramesh",
  ]);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!task.title || !task.description || !task.dueDate || !task.assignedTo) {
      toast.error("Please fill all fields!");
      return;
    }

    console.log("Task Assigned:", task);
    toast.success(`Task assigned to ${task.assignedTo}`);
    setTask({ title: "", description: "", dueDate: "", assignedTo: "" });
  };

  return (
    <div className="p-8 max- mx-auto bg-gradient-to-b from-gray-900 to-black rounded-2xl shadow-lg mt-10 border border-gray-800">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <ClipboardList className="text-blue-400" size={30} />
        <h2 className="text-2xl font-semibold text-gray-100">
          Assign New Task
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Task Title */}
        <div>
          <label className="block text-gray-400 mb-2">Task Title</label>
          <input
            type="text"
            name="title"
            value={task.title}
            onChange={handleChange}
            placeholder="Enter task title"
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-gray-400 mb-2">Description</label>
          <textarea
            name="description"
            value={task.description}
            onChange={handleChange}
            rows="4"
            placeholder="Describe the task..."
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        {/* Due Date */}
        <div>
          <label className="block text-gray-400 mb-2">Due Date</label>
          <input
            type="date"
            name="dueDate"
            value={task.dueDate}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Assign To */}
        <div>
          <label className="block text-gray-400 mb-2">Assign To</label>
          <select
            name="assignedTo"
            value={task.assignedTo}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Student</option>
            {students.map((student, idx) => (
              <option key={idx} value={student}>
                {student}
              </option>
            ))}
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-blue-500/30"
        >
          <Send size={18} />
          Assign Task
        </button>
      </form>
    </div>
  );
};

export default AssignTask;
