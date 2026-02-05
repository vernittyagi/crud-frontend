import React, { useState } from "react";
import { fetchClient } from "../api/fetchClient";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetchClient("/auth/register", {
        method: "POST",
        body: JSON.stringify({ name, email, password }),
      });

      alert(res.message || "Registration successful !");
      navigate("/login");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-white p-8 rounded-lg shadow-md space-y-5"
      >
        {/* Heading */}
        <h2 className="text-3xl font-semibold text-gray-800">
          Create an account
        </h2>

        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Name
          </label>
          <input
            type="text"
            placeholder="Your name"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Email
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Password
          </label>
          <input
            type="password"
            placeholder="Create a password"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-2 rounded bg-green-600 text-white hover:bg-green-700 cursor-pointer"
        >
          Register
        </button>

        {/* Divider */}
        <div className="h-px bg-gray-300" />

        {/* Login redirect */}
        <p className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <button
            type="button"
            className="text-blue-600 font-medium hover:cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </p>
      </form>
    </div>
  );
};

export default Register;
