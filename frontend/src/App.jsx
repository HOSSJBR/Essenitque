import React, { useState } from "react";
import { useEffect } from "react";
import "./css/styles.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import New from "./components/New";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Bestseller from "./components/Bestseller";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Profile from "./components/profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Skincare from "./components/skincare";

const App = () => {
  const [loggedIn, isloogedin] = useState(false);
  useEffect(() => {
    const loggedInStatus = localStorage.getItem("loggedIn");
    if (loggedInStatus === "true") {
      isloogedin(true);
    }
  }, []);
  function loginchanger() {
    const newLoggedInState = !loggedIn;
    isloogedin(newLoggedInState);
    localStorage.setItem("loggedIn", newLoggedInState.toString());
  }

  // State to store cart items
  const [cartItems, setCartItems] = useState([]);

  // Load cart items from localStorage on component mount
  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartinfo");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  // Function to add items to the cart and update localStorage
  const addToCart = (item, index) => {
    const newpageitem = [item].map((data) => ({
      ...data,
      quantity: index,
    }));
    const newpageitems = newpageitem[0];
    setCartItems([...cartItems, newpageitems]);
    localStorage.setItem(
      "cartinfo",
      JSON.stringify([...cartItems, newpageitems])
    );
  };

  // Function to remove item from cart and update localStorage
  const removeFromCart = (index) => {
    const updatedCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCartItems);
    localStorage.setItem("cartinfo", JSON.stringify(updatedCartItems));
  };

  return (
    <div>
      <BrowserRouter>
        <Navbar
          loggedIn={loggedIn}
          isloogedin={isloogedin}
          cartItems={cartItems}
          removeFromCart={removeFromCart}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New addToCart={addToCart} />} />
          <Route
            path="/bestseller"
            element={<Bestseller addToCart={addToCart} />}
          />
          <Route path="/skincare" element={<Skincare />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/login"
            element={<Login loggedIn={loggedIn} loginchanger={loginchanger} />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/profile"
            element={<Profile loginchanger={loginchanger} />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
