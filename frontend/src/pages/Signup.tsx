import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup: React.FC = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      // Simulate API call for signup
      console.log("User signed up:", formData);
      navigate("/login"); // Redirect to login page
    } catch (err) {
      setError("Failed to sign up. Please try again.");
    }
  };

  return (
    <div className="auth-container">
      <h1 className="text-3xl font-bold mb-4">Sign Up</h1>
      <form className="flex flex-col gap-3 mt-8 mb-2 " onSubmit={handleSubmit}>
        <div className="primary-box">
          <label className="label_field" htmlFor="username">
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="input_field"
            required
          />
        </div>
        <div className="primary-box">
          <label className="label_field" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input_field"
            required
          />
        </div>
        <div className="primary-box">
          <label className="label_field" htmlFor="password">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="input_field"
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button
          className="primary_btn mt-2 hover:bg-black hover:text-zinc-100 transition-colors duration-200 ease-in-out"
          type="submit"
        >
          Sign Up
        </button>
      </form>
      <p className="text-sm text-gray-500 mt-4">
        Already signed up?{" "}
        <span
          className="text-blue-500 cursor-pointer hover:underline hover:text-blue-700 transition-colors duration-200 ease-in-out"
          onClick={() => navigate("/login")}
        >
          Log in
        </span>
      </p>
    </div>
  );
};

export default Signup;
