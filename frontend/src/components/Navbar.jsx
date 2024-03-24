import React, { useState, useEffect } from "react";
import "../css/navbar.css";
import PersonIcon from "@mui/icons-material/Person";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import "../css/media.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import axios from "axios";

const Navbar = ({ cartItems, removeFromCart, loggedIn }) => {
  const [navshow, setnavshow] = useState(false);
  const [cart, setcart] = useState(false);
  const [cartItemsState, setCartItemsState] = useState(cartItems);
  const [totalPrice, setTotalPrice] = useState(0);

  const carthandler = () => {
    calculateTotal();
    setcart(!cart);
  };
  const handleCheckout = async () => {
    try {
      // Log the items before sending the request
      console.log("Items to be sent for checkout:", cartItemsState);

      const response = await axios.post("http://localhost:5000/checkout", {
        items: cartItemsState, // Send the current cart items to the backend
      });
      if (response.status === 200) {
        alert("Checkout successful");
        // Optionally, clear the cart items after successful checkout
        // removeFromCart(-1); // Assuming you have a function to clear cart items
        setcart(false); // Close the cart after successful checkout
      } else {
        alert("Checkout failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Checkout failed. Please try again.");
    }
  };
  useEffect(() => {
    setCartItemsState(cartItems);
    calculateTotal(); // Initialize totalPrice when cartItems change
  }, [cartItems]);

  useEffect(() => {
    calculateTotal(); // Initialize totalPrice when component mounts
  }, []);

  const navhandler = () => {
    setnavshow(!navshow);
  };
  const handleQuantityChange = (index, quantity) => {
    const updatedCartItems = [...cartItemsState];
    updatedCartItems[index].quantity = parseInt(quantity, 10); // Convert quantity to an integer
    setCartItemsState(updatedCartItems);
    calculateTotal();
  };

  // Function to calculate the total price of items in the cart
  const calculateTotal = () => {
    let total = 0;
    cartItemsState.forEach((item) => {
      total += item.price * item.quantity;
    });
    setTotalPrice(Math.floor(total));
  };

  let addnumberofitems = 0;
  if (cartItems.length !== 0) {
    const numberofitems = cartItems.map((item) => item.quantity);
    addnumberofitems = numberofitems.reduce((item, acc) => item + acc);
  }
  return (
    <div className="nav_main">
      <nav className="container">
        <div className="navbar">
          <div className="nav_logo">
            <Link to="/">
              <svg
                width="180"
                viewBox="0 0 369.8723404255319 62.35683907924285"
                className="looka-1j8o68f"
              >
                <defs id="SvgjsDefs1011"></defs>
                <g
                  id="SvgjsG1012"
                  featurekey="symbolFeature-0"
                  transform="matrix(0.6928493037963385,0,0,0.6928493037963385,-8.413387788307498,-3.3242911921997425)"
                  fill="white"
                >
                  <g xmlns="http://www.w3.org/2000/svg">
                    <path d="M53.481,56.337c-5.654-8.991-13.889-15.425-21.916-22.087c-5.396-4.48-10.948-8.855-13.137-16.075   c-0.632-2.086,0.397-4.364-1.055-6.241c-1.513,5.682-0.817,11.314,0.715,16.828c0.616,2.215,0.638,3.916-1.694,5.715   c0.856-0.353,1.492-0.503,1.96-0.503c1.562,0,1.259,1.666,1.014,3.003c-0.887,4.859-3.459,8.988-6.123,13.025   c-1.374,2.083-2.003,3.575,1.415,3.829c1.38,0.103,2.472,0.907,3.275,2.067c2.025,2.925,1.27,6.936,4.246,9.748   c0.948,0.896,0.637,3.623,2.845,4.631c1.003,0.458,1.16,1.774,1.148,2.905c-0.023,2.055-0.041,4.111-0.085,6.165   c-0.091,4.215,1.214,6.205,4.256,6.205c0.91,0,1.976-0.178,3.206-0.529c3.269-0.931,6.259-2.526,9.317-3.965   c3.591-1.69,5.704-2.681,7.254-2.681c2.213,0,3.282,2.019,5.87,6.907C60.787,75.148,59.269,65.539,53.481,56.337z M54.538,75.753   c-1.202-0.976-2.602-1.515-4.416-1.515c-2.482,0-4.942,1.157-9.018,3.075c-0.597,0.281-1.192,0.568-1.786,0.855   c-2.367,1.142-4.602,2.22-6.902,2.874c-1.042,0.297-1.68,0.366-2.039,0.37c-0.079-0.324-0.171-0.935-0.149-1.975   c0.038-1.747,0.057-3.495,0.075-5.242l0.01-0.966c0.043-3.903-1.659-5.713-3.231-6.551l-0.206-0.643   c-0.294-0.973-0.697-2.306-1.852-3.397c-0.768-0.725-1.048-1.757-1.477-3.518c-0.401-1.643-0.899-3.687-2.208-5.578   c-0.945-1.364-2.131-2.4-3.47-3.054c2.505-3.924,4.693-7.952,5.572-12.766c0.253-1.387,0.666-3.643-0.654-5.602   c1.801,1.73,3.687,3.292,5.492,4.787l0.64,0.53l1.907,1.578c7.351,6.073,14.294,11.809,19.148,19.527   C53.68,64.431,55.196,70.118,54.538,75.753z"></path>
                    <path d="M25.42,5.857c0.093,5.122,2.456,9.276,5.661,13.029c3.232,3.785,7.194,6.746,11.231,9.599   c6.601,4.664,13.342,9.118,19.235,14.732c15.683,14.937,9.871,34.327-2.919,44.073c-3.783,2.883-7.871,5.262-12.36,6.888   c-0.977,0.354-1.958,0.918-3.236,0.431c4.604-2.77,8.791-5.944,12.716-9.449c10.866-9.702,12.331-23.312,3.842-35.168   c-3.767-5.262-8.546-9.456-13.746-13.237c-3.521-2.56-7.091-5.081-10.393-7.906c-5.981-5.118-10.212-11.334-11.02-19.436   C25.151,8.335,24.01,6.741,25.42,5.857z"></path>
                    <path d="M70.647,87.117c1.561-1.927,3.237-3.774,4.665-5.795c9.052-12.813,8.853-26.566-0.368-39.878   c-6-8.661-14.323-14.532-23.207-19.771c-4.745-2.798-9.545-5.517-13.746-9.123c-2.475-2.125-4.588-4.55-5.698-7.752   c10.232,9.438,23.778,13.39,34.832,21.414c8.733,6.34,15.789,13.883,18.935,24.53c4.103,13.884-1.62,29.198-13.563,36.027   c-0.48,0.274-0.99,0.495-1.486,0.741C70.889,87.379,70.768,87.248,70.647,87.117z"></path>
                  </g>
                </g>
                <g
                  id="SvgjsG1013"
                  featurekey="vMvB0T-0"
                  transform="matrix(2.645402703926253,0,0,2.645402703926253,66.7091945921475,-7.343338710195406)"
                  fill="white"
                >
                  <path d="M2 20 l0 -14 l9.1 0 l0 0.9 l-0.4 0.4 l-7.2 0 l0 4.9 l5.7 0 l0 1.3 l-5.7 0 l0 5.2 l7.6 0 l0 1.3 l-9.1 0 z M12.8 9.9 l0 -0.6 c0 -1.9 1.4 -3.3 3.5 -3.3 l5.5 0 l0 0.9 l-0.4 0.4 l-5.1 0 c-1.1 0 -2 0.9 -2 2 l0 0.6 c0 1.1 0.6 1.68 1.6 1.9 l3.7 0.8 c1.4 0.3 2.5 1.4 2.5 3.2 l0 0.9 c0 1.9 -1.4 3.3 -3.5 3.3 l-6 0 l0 -1.3 l6 0 c1.1 0 2 -0.9 2 -2 l0 -0.9 c0 -1.1 -0.6 -1.68 -1.6 -1.9 l-3.7 -0.8 c-1.4 -0.3 -2.5 -1.4 -2.5 -3.2 z  M23.900000000000002 9.9 l0 -0.6 c0 -1.9 1.4 -3.3 3.5 -3.3 l5.5 0 l0 0.9 l-0.4 0.4 l-5.1 0 c-1.1 0 -2 0.9 -2 2 l0 0.6 c0 1.1 0.6 1.68 1.6 1.9 l3.7 0.8 c1.4 0.3 2.5 1.4 2.5 3.2 l0 0.9 c0 1.9 -1.4 3.3 -3.5 3.3 l-6 0 l0 -1.3 l6 0 c1.1 0 2 -0.9 2 -2 l0 -0.9 c0 -1.1 -0.6 -1.68 -1.6 -1.9 l-3.7 -0.8 c-1.4 -0.3 -2.5 -1.4 -2.5 -3.2 z  M36.1 20 l0 -14 l9.1 0 l0 0.9 l-0.4 0.4 l-7.2 0 l0 4.9 l5.7 0 l0 1.3 l-5.7 0 l0 5.2 l7.6 0 l0 1.3 l-9.1 0 z M56 20 l-6.8 -11.5 l-0.1 0 l0.2 2.6 l0 8.9 l-1.5 0 l0 -14 l1.6 0 l6.8 11.5 l0.1 0 l-0.2 -2.6 l0 -8.9 l1.5 0 l0 14 l-1.6 0 z M65.7 7.300000000000001 l0 12.7 l-1.5 0 l0 -12.7 l-4.4 0 l0 -1.3 l10.3 0 l0 0.9 l-0.4 0.4 l-4 0 z M73.80000000000001 20 l-1.5 0 l0 -14 l1.5 0 l0 14 z M87.9 9.1 l0 7.8 c0 1.9 -1.4 3.3 -3.5 3.3 l-1 0 l1.8 2.4 l0 0.6 l-1.5 0 l-1.8 -3 l-1 0 c-2.1 0 -3.5 -1.4 -3.5 -3.3 l0 -7.8 c0 -1.9 1.4 -3.3 3.5 -3.3 l3.5 0 c2.1 0 3.5 1.4 3.5 3.3 z M78.9 16.9 c0 1.1 0.9 2 2 2 l3.5 0 c1.1 0 2 -0.9 2 -2 l0 -7.8 c0 -1.1 -0.9 -2 -2 -2 l-3.5 0 c-1.1 0 -2 0.9 -2 2 l0 7.8 z M98.00000000000001 20.2 l-3 0 c-2.1 0 -3.5 -1.4 -3.5 -3.3 l0 -10.9 l1.5 0 l0 10.9 c0 1.1 0.9 2 2 2 l3 0 c1.1 0 2 -0.9 2 -2 l0 -10.9 l1.5 0 l0 10.9 c0 1.9 -1.4 3.3 -3.5 3.3 z M105.50000000000001 20 l0 -14 l9.1 0 l0 0.9 l-0.4 0.4 l-7.2 0 l0 4.9 l5.7 0 l0 1.3 l-5.7 0 l0 5.2 l7.6 0 l0 1.3 l-9.1 0 z"></path>
                </g>
              </svg>
            </Link>
          </div>
          <div className={`nav_links ${navshow ? "show" : " "}`}>
            <Link onClick={navhandler} to="new">
              New
            </Link>
            <Link onClick={navhandler} to="bestseller">
              BestSellers
            </Link>
            <Link onClick={navhandler} to="skincare">
              Skincare
            </Link>
            <Link onClick={navhandler} to="contact">
              Contact Us
            </Link>
          </div>
          <div>
            {loggedIn ? (
              <Link to="/profile">
                <PersonIcon className="login_logo" />
              </Link>
            ) : (
              <Link to="/login">
                {" "}
                <PersonIcon className="login_logo" />
              </Link>
            )}

            <span className="mall_main_div" onClick={carthandler}>
              {" "}
              <LocalMallIcon className="cart_logo" />
              <span className="itemslength">{addnumberofitems}</span>
            </span>
            <span onClick={navhandler}>
              <MenuIcon className={`menu_logo ${navshow ? "black" : " "}`} />
            </span>
          </div>
        </div>
      </nav>

      <div className={`wrapper ${cart ? "showwrapper" : " "}`}>
        <div className={`add_cart_section ${cart ? "show_cart" : " "} `}>
          <span onClick={carthandler} className="cross_cart_section">
            X
          </span>
          <h1 className="small_heading cartheading">My Cart</h1>

          {cartItems.length === 0 ? (
            <div className="empty-cart-message">
              <p className="para">No items in cart</p>
              <Link onClick={carthandler} className="main_btn" to="new">
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="cart_items_main">
              {cartItems.map((item, index) => (
                <div key={index} className="main_grid_cart_Section">
                  <div className="cart_column">
                    <div>
                      <img src={item.img} alt="products Images " />
                    </div>
                    <div>
                      <h1 className="small_heading">{item.name}</h1>
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) =>
                          handleQuantityChange(index, e.target.value)
                        }
                      />
                      <div
                        className="remove_Cart_btn"
                        onClick={() => removeFromCart(index)}
                      >
                        Remove
                      </div>
                    </div>
                    <div className="cart_item_price"> {item.price} CAD</div>
                  </div>
                </div>
              ))}
              <div className="cart_total">
                <div className="cart_total_content">
                  <h1 className="small_heading">Subtotal</h1>
                  <div className="subtotal">{`${totalPrice} CAD`}</div>
                </div>

                {loggedIn ? (
                  <Link
                    onClick={handleCheckout}
                    className="main_btn"
                    to="profile"
                  >
                    Checkout
                  </Link>
                ) : (
                  <Link className="main_btn" to="login">
                    Checkout
                  </Link>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
