import React from "react";
import "./contact.css";
const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <div className="contant">
          <h2># contact us</h2>
          <div className="form">
            <form method="POST">
              <input
                type="text"
                name="Name"
                value=""
                placeholder="Enter Your Full Name"
                required
                autoComplete="off"
              ></input>
              <input
                type="email"
                name="Email"
                value=""
                placeholder="Enter Your Email"
                required
                autoComplete="off"
              ></input>
              <input
                type="text"
                name="Subject"
                value=""
                placeholder="Enter Your Subject"
                required
                autoComplete="off"
              ></input>
              <textarea
                name="Message"
                value=""
                placeholder="Your Message"
                required
              ></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
