import React, { useState, useEffect } from "react";
import "../css/profile.css";
import "../css/styles.css";
import "../css/media.css";
import "../css/checkout.css";
import imgorder1 from "../images/newpagepics/2023-12-01-ORD-Groupshot-Mlt-Pptd-Eye-Pptd-HA-01-RL.webp";
import axios from "axios";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const Profile = ({ loginchanger }) => {
  const [userData, setUserData] = useState({}); // State to store user data
  const [loading, setLoading] = useState(true); // State to manage loading status
  const [cartItems, setCartItems] = useState([]); // State to store cart items
  const [totalPrice, setTotalPrice] = useState(0); // State to store total price

  // Function to fetch user data
  const fetchUserData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/user", {
        withCredentials: true, // Send cookies (including session ID) with the request
      });
      if (response.status === 200) {
        setUserData(response.data); // Set user data to state
      } else {
        console.error("Failed to fetch user data");
      }
    } catch (error) {
    } finally {
      setLoading(false); // Update loading status after fetching data
    }
  };

  useEffect(() => {
    fetchUserData(); // Fetch user data when component mounts

    // Retrieve cart info from localStorage
    const cartInfo = JSON.parse(localStorage.getItem("cartinfo"));
    if (cartInfo) {
      setCartItems(cartInfo); // Set cart items to state
      calculateTotalPrice(cartInfo); // Calculate total price
    }
  }, []);

  // Function to calculate total price
  const calculateTotalPrice = (items) => {
    const total = items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotalPrice(Math.floor(total));
  };

  // Function to remove an item from the cart
  const removeFromCart = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1); // Remove the item at the specified index
    setCartItems(updatedCartItems);
    localStorage.setItem("cartinfo", JSON.stringify(updatedCartItems)); // Update localStorage
    calculateTotalPrice(updatedCartItems); // Recalculate total price
  };

  const handleLogout = async () => {
    try {
      const response = await axios.post("http://localhost:5000/logout");

      if (response.status === 200) {
        alert("Logout successful");
        loginchanger(); // Assuming loginchanger updates the loggedIn state
        window.location.href = "/login"; // Redirect to login page
      } else {
        alert("Logout failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Logout failed. Please try again.");
    }
  };

  return (
    <div>
      <section className="section_profile">
        <div className="container">
          <div className="profile_user_flex">
            <div className="profile_user_flex_col1">
              <h1 className="profile_heading">Profile Page</h1>
              <h3 className="order_heading">Your order</h3>
              {cartItems.map((item, index) => (
                <div className="flex_profile_col_1" key={index}>
                  <div>
                    <img src={item.img} alt="cart images" />
                  </div>
                  <div className="final_prodcuts_desc">
                    <h3 className="product_name">{item.name}</h3>
                    <div className="quantity"> {item.quantity} item</div>
                    <div className="price">{item.price} CAD</div>
                    <div
                      className="close_payment"
                      onClick={() => removeFromCart(index)} // Call removeFromCart function onClick
                    >
                      X
                    </div>
                  </div>
                </div>
              ))}
              <div className="profile_total_flex">
                <Link to="/new"> &lang; Keep Browsing</Link>
                <div>Order Total: {totalPrice} CAD</div>
              </div>
            </div>
            <div className="profile_user_flex_col2">
              <form className="profile_form">
                <label htmlFor="card">Card Number:</label>
                <br />
                <input
                  type="text"
                  id="card"
                  name="card"
                  placeholder="Enter your card number"
                  pattern="(?:5[1-5][0-9]{14})"
                  required
                  title="Please enter a valid card number"
                />
                <br />
                <br />
                <label htmlFor="expiry">Expiration Date:</label>
                <br />
                <input
                  type="text"
                  id="expiry"
                  name="expiry"
                  placeholder="MM/YY"
                  pattern="^(0[1-9]|1[0-2])\/?([0-9]{2})$"
                  required
                  title="Please enter a valid expiration date in MM/YY format"
                />
                <br />
                <br />
                <label htmlFor="cvv">CVV:</label>
                <br />
                <input
                  type="text"
                  id="cvv"
                  name="cvv"
                  placeholder="CVV"
                  pattern="[0-9]{3,4}"
                  required
                  title="Please enter a valid CVV"
                />
                <br />
                <br />
                <div className="conteiner">
                  <div className="left-side">
                    <div className="card">
                      <div className="card-line"></div>
                      <div className="buttons"></div>
                    </div>
                    <div className="post">
                      <div className="post-line"></div>
                      <div className="screen">
                        <div className="dollar">$</div>
                      </div>
                      <div className="numbers"></div>
                      <div className="numbers-line2"></div>
                    </div>
                  </div>
                  <button className="visible_btn" type="submit"></button>
                  <div className="right-side">
                    <div className="new">Pay Now</div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="main_btn logout">
            <Link onClick={handleLogout}>Logout</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
