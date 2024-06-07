import React from "react";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import "./cart.scss";

const Cart = () => {
  const data = [
    {
      id: 1,
      img: "https://lyricalcorp.com/assets/images/handcraftedheaven/bracelets.png",
      title: "Indian Bracelet",
      desc: " Handcrafted with precision and care, these bangles are a perfect blend of traditional Indian craftsmanship and modern style.",
      price: 80,
    },
    {
      id: 2,
      img: "https://lyricalcorp.com/assets/images/handcraftedheaven/Diamond%20Ring.png",
      title: "Diamond Ring",
      desc: "This exquisite handcrafted diamond ring is a true masterpiece of jewelry-making. Each detail, from the carefully selected diamond to the intricate design, has been meticulously crafted to create a one-of-a-kind piece that exudes elegance and sophistication.",
      isNew: true,
      price: 2080,
    },
  ];

  return (
    <div className="cart">
      <h1>Products in Your Cart</h1>
      {data.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc.substring(0, 100)}...</p>
            <div className="price">1 x ${item.price}</div>
          </div>
          <DeleteOutlinedIcon className="delete" />
        </div>
      ))}
      <div className="total">
        <span>SubTotalL</span>
        <span>:</span>
        <span>$2160</span>
      </div>
      <button>CHECKOUT</button>
      <span className="reset">Reset Cart</span>
    </div>
  );
};

export default Cart;
