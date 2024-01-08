import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  console.log(formData);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-neutral-200">
      <div className="bg-white p-8 rounded shadow-md w-3/4 md:w-1/2 lg:w-1/3">
        <h2 className="text-2xl text-red-500 font-semibold mb-6">Sign In</h2>
        <form>
          <div className="mb-4 flex flex-col gap-6">
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="p-2 w-full border rounded-md outline-none"
            />
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="p-2 w-full border rounded-md outline-none"
            />

            <button
              onClick={handleSignIn}
              className="bg-red-900 text-white rounded border mx-auto px-4 py-2 "
            >
              Sign In
            </button>
          </div>
        </form>

        <p className="text-center">
          Don't have an account?
          <Link to="/signup">
            <span className="ml-2 text-blue-600 cursor-pointer">Sign Up</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
