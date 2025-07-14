import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { storeContext } from "../context/StoreContext";
const Navbar = ({setShowLogin}) => {
  const [menu,setMenu] = useState("home")
  const {getCartTotalAmount , token , setToken} = useContext(storeContext)
  return (
    <>
      <div className="navbar">
        <Link to="/"><img src={assets.logo} alt="" className="logo" /></Link>
        <ul className="navbar-menu">
          <Link to="/">Home</Link>
          <a href="#explore-menu">Menu</a>
          <a href="#app-download">Mobile-app</a>
          <a href="#footer">Contact us</a>
        </ul>
        <div className="navbar-right">
          <img src={assets.search_icon} alt="" />
          <div className="navbar-search-icon">
            <Link to="/cart"><img src={assets.basket_icon} alt="" /></Link>
            <div className="dot"></div>
          </div>
          {!token?<button onClick={()=>setShowLogin(true)}>sign in</button>:<div className="navbar-profile">
            <img src={assets.profile_icon} alt="" />
            <ul className="nav-profile-dropdown">
              <li><img src={assets.bag_icon} alt="" /></li>
              <hr />
              <li><img src={assets.logout_icon} alt="" /></li>
            </ul>
            </div>}
        </div>
      </div>
    </>
  );
};

export default Navbar;
