import React from "react";

import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useState } from "react";
import Cart from "../Cart/Cart";
import "./navbar.scss";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  // const logoUrl = require("https://lyricalcorp.com/assets/images/handcraftedheaven/Handcrafted%20Haven%20Logo1.png");

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <Link className="link" to="/artisans/">
              Artisans
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/handCrafts">
              HandCrafts
            </Link>
          </div>
        </div>

        <div className="center">
          <Link className="link" to="/">
            {/*<img src={logoUrl} width="30px" height="30px" alt="logo" /> */}
            HandCrafted Heaven
          </Link>
        </div>

        <div className="right">
          <div className="item">
            <Link className="link" to="/">
              Home
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/about">
              About
            </Link>
          </div>
          <div className="item">
            <HashLink
              className="link"
              to="/contact"
              smooth={true}
              duration={500}
            >
              Contact
            </HashLink>
          </div>

          <div className="icons">
            <Link to="/login" className="link">
              <PersonOutlineOutlinedIcon />
            </Link>
            <Link to="/wishlist" className="link">
              <FavoriteBorderOutlinedIcon />
            </Link>
            <div className="cartIcon" onClick={() => setOpen(!open)}>
              <ShoppingCartOutlinedIcon />
              <span>2</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
};

export default Navbar;
