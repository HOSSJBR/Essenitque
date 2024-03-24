import React, { useState } from "react";
import axios from "axios";
import "../css/signup.css";
import { Link } from "react-router-dom";
const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/signup", // Update the URL to point to the correct signup endpoint
        formData
      );
      console.log(response.data); // log response from the server

      if (response.status === 201) {
        alert("Sign Up successful");
      } else {
        alert("Sign Up failed. Please try again");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Sign Up failed. Please try again");
    }
  };

  return (
    <div>
      <div className="container">
        <div className="signup_main">
          <form onSubmit={handleSubmit}>
            <h1>Sign Up</h1>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              required
              placeholder="Username"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="Email"
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              placeholder="Password"
            />
            <p>
              Have a account? <Link to="/login">Sign In</Link>{" "}
            </p>
            <button type="submit" className="signup_btn">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
