import React from "react";
import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./productCard.scss";
import StarHalf from "@mui/icons-material/StarHalf";

const ProductCard = ({ item }) => {
  return (
    <div className="productCard">
      <div class="product-card">
        <div class="product-card__images">
          <div class="product-card__img">
            <img class="img-1" src={item.img1} alt="" />
          </div>

          {item.img2 && (
            <div class="product-card__img--hidden">
              <img class="img-2" src={item.img2} alt="" />
            </div>
          )}

          <label class="product-card__like">
            <FavoriteIcon />
          </label>

          <button class="product-card__btn">See more</button>
        </div>

        <div class="product-card__info">
          <h3 class="product-card__name">{item.title}</h3>

          <div class="product-card__price">
            <span>${item.newPrice}</span>
            <span class="product-card__promo">${item.oldPrice}</span>
          </div>

          <div class="product-card__stars">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarHalf />
            <span class="product-card__review-count">({item.review})</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
