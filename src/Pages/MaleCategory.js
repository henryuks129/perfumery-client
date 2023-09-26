import React, { useContext, useState, useEffect } from "react";
import useFetch from "../Hooks/useFetch";
import ClipLoader from "react-spinners/ClipLoader";
import starticon from "../assets/staricon.svg";
import cart from "../assets/cart.svg";
import arrow from "../assets/Arrow.svg";
import "../styles/MaleCategory.css";
import hearticon from "../assets/hearticon.svg";
import { Link } from "react-router-dom";
import heartcircle from "../assets/heartcircle.svg";
import favouriteicon from '../assets/favouriteicon.svg';
import nairasign from "../assets/nairasign.svg";
import CartContext from "../Hooks/CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MaleCategory = () => {
  const { handleAddToCart,cartItem } = useContext(CartContext);
  // const cartItemAmount = cartItem[_id];
  const {
    data: data1,
    loading: loading1,
    error: error1,
  } = useFetch("https://perfumery-server.onrender.com/stores/category/Male");
  const notify = () => {
    toast("An item has been added to cart", {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  return (
    <div className="mt-5">
      <div className="bg-white rounded combo-body">
        <div className="d-flex justify-content-between border-bottom border-2 p-4">
          <h4>Male</h4>
          <div className="d-flex">
            <p>View more</p>
            <img src={arrow} alt="" />
          </div>
        </div>
        {loading1 && <ClipLoader color={"teal"} size={"150"} />}
        {error1 && <h2>{error1.message}</h2>}
        <div className="mapped-data-container shadow p-4">
          {data1.map((datum) => {
            const { _id, title, description, category, price, label, image } =
              datum;
            return (
              <div key={_id} className="shadow border border-2 rounded">
                <div className="relative">
                  <img src={image} alt="" className="w-100 img-fluid" />
                  <img src={favouriteicon} alt="" className="heart-icon" />
                </div>
                <div>
                  <h4>{title}</h4>
                  <p>{label}</p>
                  <div className="d-flex gap-2">
                    <img src={nairasign} alt="" />
                    <h4>{price}</h4>
                  </div>
                  <div className="d-flex gap-5">
                    <img src={starticon} alt="" />
                    <p>50 Reviews</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <button
                      onClick={() => {
                        handleAddToCart(datum);
                        notify();
                      }}
                      className="btn rounded-pill buy-btn"
                    >
                      Buy Now
                    </button>
                    <ToastContainer />
                    <img src={cart} alt="" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MaleCategory;
