import React from "react";
import { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import "./product.scss";

const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const images = [
    "https://lyricalcorp.com/assets/images/handcraftedheaven/Statue.png",
    "https://lyricalcorp.com/assets/images/handcraftedheaven/Statue.png",
    "https://lyricalcorp.com/assets/images/handcraftedheaven/Statue.png",
  ];

  return (
    <div className="product">
      <div className="left">
        <div className="images"></div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Statue</h1>
        <span className="price">$280</span>

        <div className="quantity">
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button className="add">
          <AddShoppingCartIcon /> ADD TO CART
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorderIcon /> ADD TO WISH LIST
          </div>
        </div>

        <div className="details">
          <span>DESCRIPTION</span>
          <p>
            'The statue is rendered in a warm, earthy tone that seems to glow
            with an inner light. The subtle texture of the material adds a
            tactile element to the piece, inviting the touch and evoking a sense
            of connection to the natural world.
          </p>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Product;
