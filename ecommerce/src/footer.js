import React from "react";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import "./footer.css";
import { Link } from "react-router-dom";
const footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="about">
            <div className="logo">
              <img src="./assets/logoshopy.jpg" alt="" />
            </div>
            <div className="detail">
              <p>
                We are a team of designers and developers that create high
                quality wordPress
              </p>

              <div className="icon">
                <li>
                  <FaFacebook />
                </li>
                <li>
                  <RiInstagramFill />
                </li>
                <li>
                  <FaSquareTwitter />
                </li>
                <li>
                  <FaYoutube />
                </li>
              </div>
            </div>
          </div>

          {/* <div className='account'>

                
                <h3>My Account</h3>
                
                <ul>
                    <li>Account</li>
                    <li>Order</li>
                    <li>Cart</li>
                    <li>Shipping</li>
                    <li>Return</li>
                </ul>
                
                
            </div> */}
          <div className="page">
            <h3>Pages</h3>
            <ul>
              <li>
                <Link to="/" className="link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="link">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="link">
                  Contact
                </Link>
              </li>

              <li>Terms & Condition</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default footer;
