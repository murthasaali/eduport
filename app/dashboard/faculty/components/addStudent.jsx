"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { ArrowLeft, Upload } from "lucide-react";

export default function AddStudent() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    rollNumber: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    department: "",
    course: "",
    grade: "",
    address: "",
    parentName: "",
    parentContact: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files && files[0]) {
      const imageURL = URL.createObjectURL(files[0]);
      setFormData((prev) => ({ ...prev, image: imageURL }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    const required = [
      "fullName",
      "rollNumber",
      "email",
      "phone",
      "dob",
      "gender",
      "department",
      "course",
    ];
    for (const field of required) {
      if (!formData[field]) {
        toast.error(`Please fill the ${field.replace(/([A-Z])/g, " $1")} field.`);
        return;
      }
    }

    console.log("New Student Added:", formData);
    toast.success("Student added successfully!");

    // Reset form
    setFormData({
      fullName: "",
      rollNumber: "",
      email: "",
      phone: "",
      dob: "",
      gender: "",
      department: "",
      course: "",
      grade: "",
      address: "",
      parentName: "",
      parentContact: "",
      image: "",
    });

    // Navigate back
    setTimeout(() => router.push("/dashboard/faculty/students"), 1200);
  };

  return (
    <div className="min-h-screen bgk text-gray-100 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <button
            onClick={() => router.back()}
            className="p-2 rounded-md bg-gray-800 hover:bg-gray-700 border border-gray-700 transition"
          >
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-3xl font-semibold">Add New Student</h1>
        </div>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className=" mx-auto bg-gray-900 p-8 rounded-2xl border border-gray-800 shadow-md"
      >
        {/* --- Basic Info --- */}
        <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
          Basic Information
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm mb-2 text-gray-300">Full Name *</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter full name"
              className="w-full px-3 py-2 rounded-md bg-gray-800 border border-gray-700 focus:ring focus:ring-blue-600"
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-gray-300">Roll Number *</label>
            <input
              type="text"
              name="rollNumber"
              value={formData.rollNumber}
              onChange={handleChange}
              placeholder="Enter roll number"
              className="w-full px-3 py-2 rounded-md bg-gray-800 border border-gray-700 focus:ring focus:ring-blue-600"
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-gray-300">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@student.edu"
              className="w-full px-3 py-2 rounded-md bg-gray-800 border border-gray-700 focus:ring focus:ring-blue-600"
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-gray-300">Phone *</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 9876543210"
              className="w-full px-3 py-2 rounded-md bg-gray-800 border border-gray-700 focus:ring focus:ring-blue-600"
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-gray-300">Date of Birth *</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-md bg-gray-800 border border-gray-700 focus:ring focus:ring-blue-600"
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-gray-300">Gender *</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-md bg-gray-800 border border-gray-700 focus:ring focus:ring-blue-600"
            >
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        {/* --- Academic Info --- */}
        <h2 className="text-xl font-semibold mt-8 mb-4 border-b border-gray-700 pb-2">
          Academic Details
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm mb-2 text-gray-300">Department *</label>
            <input
              type="text"
              name="department"
              value={formData.department}
              onChange={handleChange}
              placeholder="e.g. Computer Science"
              className="w-full px-3 py-2 rounded-md bg-gray-800 border border-gray-700 focus:ring focus:ring-blue-600"
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-gray-300">Course *</label>
            <input
              type="text"
              name="course"
              value={formData.course}
              onChange={handleChange}
              placeholder="e.g. B.Tech / MCA"
              className="w-full px-3 py-2 rounded-md bg-gray-800 border border-gray-700 focus:ring focus:ring-blue-600"
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-gray-300">Grade</label>
            <select
              name="grade"
              value={formData.grade}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-md bg-gray-800 border border-gray-700 focus:ring focus:ring-blue-600"
            >
              <option value="">Select Grade</option>
              <option>A+</option>
              <option>A</option>
              <option>B+</option>
              <option>B</option>
              <option>C</option>
            </select>
          </div>
        </div>

        {/* --- Address & Parent --- */}
        <h2 className="text-xl font-semibold mt-8 mb-4 border-b border-gray-700 pb-2">
          Contact Information
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm mb-2 text-gray-300">Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              rows={3}
              placeholder="Enter full address"
              className="w-full px-3 py-2 rounded-md bg-gray-800 border border-gray-700 focus:ring focus:ring-blue-600"
            ></textarea>
          </div>

          <div>
            <label className="block text-sm mb-2 text-gray-300">Parent / Guardian Name</label>
            <input
              type="text"
              name="parentName"
              value={formData.parentName}
              onChange={handleChange}
              placeholder="Parent name"
              className="w-full px-3 py-2 rounded-md bg-gray-800 border border-gray-700 focus:ring focus:ring-blue-600"
            />
            <label className="block text-sm mb-2 mt-4 text-gray-300">
              Parent Contact Number
            </label>
            <input
              type="tel"
              name="parentContact"
              value={formData.parentContact}
              onChange={handleChange}
              placeholder="+91 9876543210"
              className="w-full px-3 py-2 rounded-md bg-gray-800 border border-gray-700 focus:ring focus:ring-blue-600"
            />
          </div>
        </div>

        {/* --- Profile Image --- */}
        <h2 className="text-xl font-semibold mt-8 mb-4 border-b border-gray-700 pb-2">
          Profile Image
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="relative w-32 h-32 border-2 border-gray-700 rounded-full overflow-hidden">
            {formData.image ? (
              <img
                src={formData.image}
                alt="Profile Preview"
                className="object-cover w-full h-full"
              />
            ) : (
              <div className="flex items-center justify-center h-full text-gray-500">
                No Image
              </div>
            )}
          </div>
          <label className="flex items-center gap-3 px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg cursor-pointer transition">
            <Upload size={18} /> Upload Photo
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="hidden"
            />
          </label>
        </div>

        {/* --- Submit Button --- */}
        <button
          type="submit"
          className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
        >
          Save Student
        </button>
      </form>
    </div>
  );
}
