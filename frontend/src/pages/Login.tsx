import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/blogs");
    }
  }, [navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      // console.log(response);

      if (!response.ok) {
        throw new Error("Invalid credentials");
      }

      const data = await response.json();
      console.log("Login successful:", data);
      localStorage.setItem("token", data.token);
      localStorage.setItem("userId", data._id);
      navigate("/blogs"); // Redirect to dashboard or another page
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="auth-container">
      <h2 className="text-3xl font-bold mb-4">Login</h2>
      <form className="flex flex-col gap-3 mt-8 mb-2 " onSubmit={handleLogin}>
        <div className="primary-box">
          <label className="label_field" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="input_field"
          />
        </div>
        <div className="primary-box">
          <label className="label_field" htmlFor="password">
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="input_field"
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button
          className="primary_btn mt-2 hover:bg-black hover:text-zinc-100 transition-colors duration-200 ease-in-out"
          type="submit"
        >
          Login
        </button>
      </form>
      <p className="text-sm text-gray-500 mt-4">
        Already have an account?{" "}
        <span
          className="text-blue-500 cursor-pointer hover:underline hover:text-blue-700 transition-colors duration-200 ease-in-out"
          onClick={() => navigate("/signup")}
        >
          Sign Up
        </span>
      </p>
    </div>
  );
};

export default Login;
