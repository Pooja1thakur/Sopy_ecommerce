import React from "react";
import Productdetail from "./productdetail";
import { IoIosCart } from "react-icons/io";
import { BsEye } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import "./product.css";
import { RxCross2 } from "react-icons/rx";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
const Product = ({
  product,
  setProduct,
  detail,
  view,
  close,
  setClose,
  addtocart,
}) => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const filtterproduct = (product) => {
    const update = Productdetail.filter((x) => {
      return x.Cat === product;
    });
    setProduct(update);
  };

  const AllProducts = () => {
    setProduct(Productdetail);
  };

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
      <div className="products">
        <h2># Products</h2>
        <p>Home - products</p>

        <div className="container">
          <div className="filter">
            <div className="categories">
              <h3>categories</h3>
              <ul>
                <li onClick={() => AllProducts()}>All Products</li>
                <li onClick={() => filtterproduct("Tablet")}>Tablet</li>
                <li onClick={() => filtterproduct("watch")}>Watch</li>
                <li onClick={() => filtterproduct("Headphones")}>Headphones</li>
                <li onClick={() => filtterproduct("camera")}>camera</li>
                <li onClick={() => filtterproduct("Gaming")}>Gaming</li>
              </ul>
            </div>
          </div>
          <div className="productbox">
            <div className="contant">
              {product.map((curElm) => {
                return (
                  <>
                    <div className="box" key={curElm.id}>
                      <div className="img_box">
                        <img src={curElm.Img} alt={curElm.Title}></img>
                        <div className="icon">
                          {isAuthenticated ? (
                            <li onClick={() => addtocart(curElm)}>
                              {" "}
                              <IoIosCart />
                            </li>
                          ) : (
                            // <li onClick={()=> addtocart(curElm)}> <IoIosCart/></li>
                            <li onClick={() => loginWithRedirect(curElm)}>
                              {" "}
                              <IoIosCart />
                            </li>
                          )}

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
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
