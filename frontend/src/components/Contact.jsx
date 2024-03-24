import React, { useRef } from "react";
import "../css/Contact.css";
import emailjs from "@emailjs/browser";
import Formanimation from "./Formanimation";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("", "", form.current, "").then(
      () => {
        alert("Your message has been submitted");
        form.current.reset();
      },
      (error) => {
        console.log("FAILED...", error);
      }
    );
  };

  return (
    <div>
      <section className="section-1-about">
        <div className="container">
          <h1 className="heading main_heading_contact">Contact Us</h1>
        </div>
      </section>

      {/* Section 3 Contact / Form */}
      <section className="section-3-contact">
        <div className="container">
          <div className="main-section-3-contact">
            <div className="form-image">
              <Formanimation />
            </div>
            <div className="form_cart">
              <div className="card-header">
                <div className="text-header">Register</div>
              </div>
              <div className="card-body">
                <form ref={form} onSubmit={sendEmail}>
                  <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                      required
                      className="form-control"
                      name="username"
                      id="username"
                      type="text"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                      required
                      className="form-control"
                      name="email_id"
                      id="email"
                      type="email"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject:</label>{" "}
                    {/* Corrected label htmlFor attribute */}
                    <input
                      required
                      className="form-control"
                      name="subject"
                      id="subject"
                      type="text"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea
                      name="message"
                      id="message"
                      cols="20"
                      rows="5"
                      required
                    ></textarea>
                  </div>
                  <input type="submit" className="btn" value="Submit" />{" "}
                  {/* Changed defaultValue to value */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section 4 Contact / Map */}
      <section className="section-map">
        <h2 className="find-us heading">How to find us</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.104063129309!2d-0.13399018795573686!3d51.51130681030055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604d248ad83b7%3A0x867d7d1b553a3c7e!2s5%20Lisle%20St%2C%20London%20WC2H%207BF!5e0!3m2!1sen!2suk!4v1686826899133!5m2!1sen!2suk"
          height={450}
          title="my-map"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </div>
  );
};

export default Contact;
