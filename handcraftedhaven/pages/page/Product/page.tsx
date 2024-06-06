import React from "react";
import { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import styles from "./product.module.css";

const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const images = [
    "https://lyricalcorp.com/assets/images/handcraftedheaven/bracelets.png",
    "https://lyricalcorp.com/assets/images/handcraftedheaven/bracelets.png",
    "https://lyricalcorp.com/assets/images/handcraftedheaven/bracelets.png",
  ];

  return (
    <div className={styles.product}>
      <div className={styles.left}>
        <div className={styles.images}>
          <img src={images[0]} alt="" onClick={(e) => setSelectedImg(0)} />
          <img src={images[1]} alt="" onClick={(e) => setSelectedImg(1)} />
          <img src={images[2]} alt="" onClick={(e) => setSelectedImg(2)} />
        </div>
        <div className={styles.mainImg}>
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className={styles.right}>
        <h1>Lorem Ipusm</h1>
        <span className={styles.price}>$250</span>

        <div className={styles.quantity}>
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button className={styles.add}>
          <AddShoppingCartIcon /> ADD TO CART
        </button>
        <div className={styles.links}>
          <div className={styles.item}>
            <FavoriteBorderIcon /> ADD TO WISH LIST
          </div>
        </div>

        <div className={styles.details}>
          <span>DESCRIPTION</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic soluta
            nesciunt, fuga veniam ducimus quos dolor velit ipsa numquam ut culpa
            perferendis mollitia illo tempore, consectetur ex recusandae
            expedita voluptatem.
          </p>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Product;
