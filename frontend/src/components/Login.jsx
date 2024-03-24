import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import * as Components from "./Components";
import "../css/login.css";

const Login = ({ loginchanger }) => {
  const [signIn, toggle] = useState(true);
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/signup",
        userData
      );

      if (response.status === 201) {
        alert("Sign Up successful");
        window.location.href = "/login";
      } else {
        alert("Sign Up failed. Please try again");
      }
    } catch (error) {
      alert("Sign Up failed. Please try again");
      console.error("Error:", error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/login",
        userData
      );

      if (response.status === 200) {
        alert("Login successful");
        loginchanger();
        window.location.href = "/"; // Set loggedIn state to true upon successful login
      } else {
        alert("Login failed. Please check your credentials and try again.");
      }
    } catch (error) {
      alert("Login failed. Please check your credentials and try again.");
      console.error("Error:", error);
    }
  };

  return (
    <section className="login_signup">
      <Components.Container>
        <Components.SignUpContainer signingIn={signIn}>
          <Components.Form onSubmit={handleSignup}>
            <Components.Title>Create Account</Components.Title>
            <Components.Input
              type="text"
              name="username"
              value={userData.username}
              onChange={handleInputChange}
              required
              placeholder="Name"
            />
            <Components.Input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleInputChange}
              required
              placeholder="Email"
            />
            <Components.Input
              type="password"
              name="password"
              value={userData.password}
              onChange={handleInputChange}
              required
              placeholder="Password"
            />
            <Components.Button type="submit">Sign Up</Components.Button>
          </Components.Form>
        </Components.SignUpContainer>
        <Components.SignInContainer signingIn={signIn}>
          <Components.Form onSubmit={handleLogin}>
            <Components.Title>Sign in</Components.Title>
            <Components.Input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleInputChange}
              required
              placeholder="Email"
            />
            <Components.Input
              type="password"
              name="password"
              value={userData.password}
              onChange={handleInputChange}
              required
              placeholder="Password"
            />
            <Components.Anchor href="#">
              Forgot your password?
            </Components.Anchor>
            <Components.Button type="submit">Sign In</Components.Button>
          </Components.Form>
        </Components.SignInContainer>
        <Components.OverlayContainer signingIn={signIn}>
          <Components.Overlay signingIn={signIn}>
            <Components.LeftOverlayPanel signingIn={signIn}>
              <Components.Title>Welcome Back!</Components.Title>
              <Components.Paragraph>
                To keep connected with us please login with your personal info
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(true)}>
                Sign In
              </Components.GhostButton>
            </Components.LeftOverlayPanel>
            <Components.RightOverlayPanel signingIn={signIn}>
              <Components.Title>Hello, Friend!</Components.Title>
              <Components.Paragraph>
                Enter your personal details and start journey with us
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(false)}>
                Sign Up
              </Components.GhostButton>
            </Components.RightOverlayPanel>
          </Components.Overlay>
        </Components.OverlayContainer>
      </Components.Container>

      {/* for small screen  */}
      <div>
        <div className="container">
          <div className="signin_main">
            <form onSubmit={handleLogin}>
              <h1>Sign In</h1>
              <input
                type="email"
                name="email"
                value={userData.email}
                onChange={handleInputChange}
                required
                placeholder="Email"
              />
              <input
                type="password"
                name="password"
                value={userData.password}
                onChange={handleInputChange}
                required
                placeholder="Password"
              />
              <p>
                Don't have an account? <Link to="/signup">Sign Up</Link>{" "}
              </p>
              <button type="submit" className="signin_btn">
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
