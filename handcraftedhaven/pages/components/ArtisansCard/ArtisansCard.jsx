import React from "react";
import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";
import styles from "./artisansCard.module.css";
import StarHalf from "@mui/icons-material/StarHalf";

const ArtisansCard = ({ item }) => {
  return (
    <div className={styles.artisansCard}>
  <div className={styles["artisans-card"]}>
    <div className={styles["artisans-card__images"]}>
      <div className={styles["artisans-card__img"]}>
        <img className={styles["img-1"]} src={item.img1} alt="" />
      </div>

      {item.img2 && (
        <div className={styles["artisans-card__img--hidden"]}>
          <img className={styles["img-2"]} src={item.img2} alt="" />
        </div>
      )}

      <label className={styles["artisans-card__like"]}>
        <FavoriteIcon />
      </label>

      <button className={styles["artisans-card__btn"]}>Profile</button>
    </div>

    <div className={styles["artisans-card__info"]}>
      <h3 className={styles["artisans-card__name"]}>{item.title}</h3>
      <p>Small Description</p>

      <div className={styles["artisans-card__stars"]}>
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarHalf />
        <span className={styles["artisans-card__review-count"]}>({item.review})</span>
      </div>
    </div>
  </div>
</div>

  );
};

export default ArtisansCard;
