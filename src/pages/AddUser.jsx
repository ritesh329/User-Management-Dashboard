// src/pages/AddUser.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddUser() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.company.trim()) newErrors.company = "Company is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Get existing users from localStorage
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Add the new user
    const updatedUsers = [...existingUsers, formData];

    // Store in localStorage
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    console.log("✅ New User Added:", formData);

    // Reset form
    setFormData({ name: "", email: "", company: "", phone: "" });
    setErrors({});

    // Navigate to home
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Add New User</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {["name", "email", "company", "phone"].map((field) => (
            <div key={field}>
              <label className="block font-medium mb-1 capitalize">
                {field}
              </label>
              <input
                type="text"
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              {errors[field] && (
                <p className="text-red-500 text-sm mt-1">{errors[field]}</p>
              )}
            </div>
          ))}

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Add User
          </button>
        </form>

        <button
          onClick={() => navigate("/")}
          className="mt-4 w-full text-blue-500 hover:underline"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default AddUser;
