// import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
function Nav() {
  // const [username, setUsername] = useState("");

  // useEffect(() => {
  //   setUsername(localStorage.getItem("username"));
  // }, []);

  return (
    <div className="nav">
      <div className="nav-left">
        <h2>Ecommerce</h2>
      </div>
      <div className="nav-right">
        <Link className="text-decoration-none" to="/account">
          Account
        </Link>
        <Link className="text-decoration-none" to="/cart">
          Cart
        </Link>
        <div className="user-intro">Hi User</div>
        <div className="logout-btn">Logout</div>
      </div>
    </div>
  );
}

export default Nav;
