import React, { useContext, useState, useEffect } from "react";
import "../styles/Navbar.css";
import searchicon from "../assets/searchimage.svg";
import { useNavigate } from "react-router-dom";
import carticon from "../assets/carticon.svg";
import navimage from "../assets/navimage.svg";
import notificationicon from "../assets/notificationicon.svg";
import dropdownicon from "../assets/dropdownicon.svg";
import usericon from "../assets/usericon.svg";
import CartContext from "../Hooks/CartContext";

const Navbar = () => {
  const { cartItem,loggedIn } = useContext(CartContext);
  const navigate = useNavigate();
  const [dropdown, setDropDown] = useState(false);
  // useEffect(()=>{
  //     window.addEventListener('click', ()=>{
  //         if(dropdownicon){
  //             setDropDown(true);
  //         } else{
  //             setDropDown(false);
  //         }
  //     })
  // })
  const dropped = () => {
    setDropDown(!dropdown);
  };
  // const signin = ()=>{
  //     setDropDown(false);
  // }
  // const signup = ()=>{
  //     setDropDown(false);
  // }
  return (
    <div className="nav-body">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <img
              src={navimage}
              alt=""
              className="img-fluid"
              onClick={() => {
                navigate("/");
              }}
            />
          </div>
          <div className="nav-input-body relative">
            <input
              type="search"
              placeholder="search products, brands and categories"
              className="nav-input"
            />
            <img src={searchicon} alt="" className="search-button" />
            <button className="btn button-search">search</button>
          </div>
          <div className="drop-body">
            <div className="d-flex gap-5">
              <div className="relative d-flex">
                <img
                  src={carticon}
                  alt=""
                  onClick={() => {
                    navigate("/Cart");
                  }}
                />
                <div>
                  <p>{cartItem.length >= 1 && <div>{cartItem.item}</div>}</p>
                </div>
              </div>
              <img src={notificationicon} alt="" />
              <div onClick={dropped}>
                <div className="d-flex">
                  <img src={usericon} alt="" />
                  <img src={dropdownicon} className="nav-dropdown" alt="" />
                </div>
                <div className="nav-dropdown-content">
                  {dropdown && (
                    <div className="bg-danger p-3 ">
                      <div>
                        <button
                          onClick={() => {
                            navigate("/Signin");
                          }}
                        >
                          Sign In
                        </button>
                        <div></div>{" "}
                        <button
                          onClick={() => {
                            navigate("/Signup");
                          }}
                        >
                          Sign Up
                        </button>
                      </div>{" "}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
