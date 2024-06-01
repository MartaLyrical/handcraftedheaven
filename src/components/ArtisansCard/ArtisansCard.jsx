import React from "react";
import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./artisansCard.scss";
import StarHalf from "@mui/icons-material/StarHalf";

const ArtisansCard = ({ item }) => {
  return (
    <div className="artisansCard">
      <div class="artisans-card">
        <div class="artisans-card__images">
          <div class="artisans-card__img">
            <img class="img-1" src={item.img1} alt="" />
          </div>

          {item.img2 && (
            <div class="artisans-card__img--hidden">
              <img class="img-2" src={item.img2} alt="" />
            </div>
          )}

          <label class="artisans-card__like">
            <FavoriteIcon />
          </label>

          <button class="artisans-card__btn">Profile</button>
        </div>

        <div class="artisans-card__info">
          <h3 class="artisans-card__name">{item.title}</h3>
          <p>Small Description</p>

          <div class="artisans-card__stars">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarHalf />
            <span class="artisans-card__review-count">({item.review})</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtisansCard;
