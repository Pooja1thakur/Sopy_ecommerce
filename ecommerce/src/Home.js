import React from "react";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import { FaTruckMoving } from "react-icons/fa";
import { BsCurrencyDollar } from "react-icons/bs";
import { CiPercent } from "react-icons/ci";
import { BiHeadphone } from "react-icons/bi";
import Homeproduct from "./homeproduct";
import { IoIosCart } from "react-icons/io";
import { BsEye } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";

import "./Home.css";
const Home = ({ detail, view, close, setClose, addtocart }) => {
  return (
    <>
      {close ? (
        <div className="product_detail">
          <div className="container">
            <button onClick={() => setClose(false)} className="closebtn">
              <RxCross2 />
            </button>
            {detail.map((curElm) => {
              return (
                <div className="productbox">
                  <div className="img_box">
                    <img src={curElm.Img} alt={curElm.Title} />
                  </div>
                  <div className="detail">
                    <h4>{curElm.Title}</h4>
                    <h2>{curElm.Cat}</h2>
                    <h3>{curElm.price}</h3>
                    <button>Add To CART</button>
                  </div>
                </div>
              );
            })}
            <div className="productbox"></div>
          </div>
        </div>
      ) : null}

      <div className="top_banner">
        <div className="container">
          <div className="detail">
            <h2>The Best Note Book Collection 2023</h2>

            <Link to="/product" className="link">
              Shop Now <GoArrowRight />
            </Link>
          </div>
          <div className="img_box">
            <img src="./assets/tablet-removebg-preview.png" alt="img" />
          </div>
        </div>
      </div>
      <div className="product_type">
        <div className="container">
          <div className="box">
            <div className="img_box">
              <img
                src="./assets/mobile-removebg-preview.png"
                alt="p1_product"
              />
            </div>
            <div className="detail">
              <p>23 products</p>
            </div>
          </div>

          <div className="box">
            <div className="img_box">
              <img src="./assets/watch-removebg-preview.png" alt="i2_product" />
            </div>
            <div className="detail">
              <p>52 products</p>
            </div>
          </div>

          <div className="box">
            <div className="img_box">
              <img
                src="./assets/[removal.ai]_71218f5a-1ffe-43c8-97ca-3955aec3124f-sound-speaker.png "
                alt="i2_product"
              />
            </div>
            <div className="detail">
              <p>63 products</p>
            </div>
          </div>

          <div className="box">
            <div className="img_box">
              <img
                src="./assets/[removal.ai]_d77a3503-bd8c-4e78-9d2e-fd542ca1a67d-h1.png"
                alt="headphone"
              />
            </div>
            <div className="detail">
              <p>23 products</p>
            </div>
          </div>
        </div>
      </div>

      <div className="about">
        <div className="container">
          <div className="box">
            <div className="icon">
              <FaTruckMoving />
            </div>
            <div className="detail">
              <h3>Free shipping</h3>
              <p>Order above $1000</p>
            </div>
          </div>

          <div className="box">
            <div className="icon">
              <BsCurrencyDollar />
            </div>
            <div className="detail">
              <h3>Return & Refund</h3>
              <p>Monay back Gaurenty</p>
            </div>
          </div>

          <div className="box">
            <div className="icon">
              <CiPercent />
            </div>
            <div className="detail">
              <h3>Member Discount</h3>
              <p>On every Order</p>
            </div>
          </div>

          <div className="box">
            <div className="icon">
              <BiHeadphone />
            </div>
            <div className="detail">
              <h3>Customer support</h3>
              <p>every time Call Support</p>
            </div>
          </div>
        </div>
      </div>

      <div className="product">
        <h2>Top Products</h2>
        <div className="container">
          {Homeproduct.map((curElm) => {
            return (
              <div className="box" key={curElm.id}>
                <div className="img_box">
                  <img src={curElm.Img} alt={curElm.Title}></img>
                  <div className="icon">
                    <li onClick={() => addtocart(curElm)}>
                      {" "}
                      <IoIosCart />
                    </li>
                    <li onClick={() => view(curElm)}>
                      {" "}
                      <BsEye />
                    </li>
                    <li>
                      {" "}
                      <Link to="/">
                        <CiHeart />
                      </Link>
                    </li>
                  </div>
                </div>

                <div className="detail">
                  <p>{curElm.Cat}</p>
                  <h3>{curElm.Title}</h3>
                  <h4>${curElm.price}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="banner">
        <div className="container">
          <div className="detail">
            <h4>LATEST TECHNOLOGY ADDED</h4>
            <h3>Apple iPad 10.2 9th Gen - 2021</h3>
            <p>$ 986</p>
            <Link to="/product" className="link">
              Shop Now <GoArrowRight />
            </Link>
          </div>
          <div className="img_box">
            <img src="./assets/exclusive_image.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
