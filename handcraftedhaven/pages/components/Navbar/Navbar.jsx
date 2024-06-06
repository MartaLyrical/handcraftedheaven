import React, { useState } from "react";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Link from "next/link";
import Cart from "../Cart/Cart";
import styles from "./navbar.module.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.navbar}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.item}>
            <Link href="page/Artisans/page" className={styles.link}>
              Artisans
            </Link>
          </div>
          <div className={styles.item}>
            <Link href="/page/Products/page" className={styles.link}>
              HandCrafts
            </Link>
          </div>
        </div>

        <div className={styles.center}>
          <Link href="/" className={styles.link}>
            HandCrafted Heaven
          </Link>
        </div>

        <div className={styles.right}>
          <div className={styles.item}>
            <Link href="/" className={styles.link}>
              Home
            </Link>
          </div>
          <div className={styles.item}>
            <Link href="/page/About/page" className={styles.link}>
              About
            </Link>
          </div>
          <div className={styles.item}>
            <Link href="/page/Contact/page" className={styles.link} smooth={true} duration={500}>
              Contact
            </Link>
          </div>

          <div className={styles.icons}>
            <Link href="/Login/page" className={styles.link}>
              <PersonOutlineOutlinedIcon />
            </Link>
            <Link href="/page/Wishlist/page" className={styles.link}>
              <FavoriteBorderOutlinedIcon />
            </Link>
            <div className={styles.cartIcon} onClick={() => setOpen(!open)}>
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
