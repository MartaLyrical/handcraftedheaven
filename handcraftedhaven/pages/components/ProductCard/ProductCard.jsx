import React from "react";
import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";
import styles from "./productCard.module.css";
import StarHalf from "@mui/icons-material/StarHalf";

const ProductCard = ({ item }) => {
  return (
    <div className={styles.productCard}>
      <div className={styles["product-card"]}>
        <div className={styles["product-card__images"]}>
          <div className={styles["product-card__img"]}>
            <img className={styles["img-1"]} src={item.img1} alt="" />
          </div>

          {item.img2 && (
            <div className={styles["product-card__img--hidden"]}>
              <img className={styles["img-2"]} src={item.img2} alt="" />
            </div>
          )}

          <label className={styles["product-card__like"]}>
            <FavoriteIcon />
          </label>

          <button className={styles["product-card__btn"]}>See more</button>
        </div>

        <div className={styles["product-card__info"]}>
          <h3 className={styles["product-card__name"]}>{item.title}</h3>

          <div className={styles["product-card__price"]}>
            <span>${item.newPrice}</span>
            <span className={styles["product-card__promo"]}>${item.oldPrice}</span>
          </div>

          <div className={styles["product-card__stars"]}>
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarHalf />
            <span className={styles["product-card__review-count"]}>({item.review})</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
