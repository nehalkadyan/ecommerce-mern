import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  console.log(formData);

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      setLoading(false);
      if (!formData.username || !formData.username || !formData.password) {
        return alert("All fields are required to be filled!");
      } else {
        navigate("/signin");
      }
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-neutral-200">
      <div className="bg-white p-8 rounded shadow-md w-3/4 md:w-1/2 lg:w-1/3">
        <h2 className="text-2xl text-red-500 font-semibold mb-6">Sign Up</h2>
        <form onSubmit={handleSignup}>
          <div className="mb-4 flex flex-col gap-6">
            <input
              type="text"
              id="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="p-2 w-full border rounded-md outline-none"
            />
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

            <button className="bg-red-900 text-white rounded border mx-auto px-4 py-2 ">
              {loading ? "Loading" : "Sign Up"}
            </button>
          </div>
        </form>

        <p className="text-center">
          Already have an account?
          <Link to="/signin">
            <span className="ml-2 text-blue-600 cursor-pointer">Sign In</span>
          </Link>
        </p>

        {error && <p>{error}</p>}
      </div>
    </div>
  );
};

export default Signup;
