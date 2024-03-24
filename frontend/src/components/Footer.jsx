import React from "react";
import "../css/footer.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InstagramIcon from "@mui/icons-material/Instagram";
import paumentimgs from "../images/paymentimages-removebg-preview.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
const Footer = () => {
  return (
    <div>
      <div className="container">
        <footer>
          <div>
            <h1>COMPANY</h1>
            <ul>
              <li>About Us</li>
              <li>Join Us</li>
            </ul>
            <h1>OUR COMMITMENTS</h1>
            <ul>
              <li>Accessibility</li>
              <li>Sustainability</li>
              <li>Change is the Journey</li>
              <li>Everything Is Chemicals</li>
            </ul>
            <h1>Location</h1>
            <ul>
              <li>
                <p>
                  <LocationOnIcon style={{ fontSize: "25px" }} />
                  Canada
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h1>CUSTOMER CARE</h1>
            <ul>
              <li>FAQ</li>
              <li>Disposal Instructions</li>
              <li>Return Policy</li>
              <li>Promotional Offer Terms</li>
            </ul>
          </div>
          <div>
            <h1>CONTACT US</h1>
            <h1>TRACK ORDER</h1>
            <h1>SIGN IN</h1>
            <h1>STORE LOCATOR</h1>
          </div>
          <div>
            <h1>Subscribe to our newsletter.</h1>
            <ul>
              <li>
                <input placeholder="Email Address" type="email" required />
              </li>
              <li>
                <p>
                  {" "}
                  *By checking the above box you are agreeing to receive email
                  communications from DECIEM Inc., it affiliates, brands (The
                  Ordinary and NIOD) and/or marketing partners. This can be
                  changed at any time. Please refer to our{" "}
                  <span>Privacy Policy</span> and <span>Terms of Use</span> for
                  more details or <span>Contact Us</span>
                </p>
              </li>
              <li className="social_links">
                {" "}
                <YouTubeIcon style={{ fontSize: "40px" }} />{" "}
                <FacebookIcon style={{ fontSize: "35px" }}></FacebookIcon>{" "}
                <InstagramIcon style={{ fontSize: "35px" }} />{" "}
                <LinkedInIcon style={{ fontSize: "35px" }} />
              </li>
              <li className="payment_links">
                <img src={paumentimgs} alt="paymentimages" />
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
