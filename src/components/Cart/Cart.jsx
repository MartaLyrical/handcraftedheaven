import React from "react";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import "./cart.scss";

const Cart = () => {
  const data = [
    {
      id: 1,
      img: "https://lyricalcorp.com/assets/images/handcraftedheaven/bracelets.png",
      title: "Lorem Ipsum",
      desc: "Lorem IpsumLorem ipsum dolor sit amet, consectetur adipisicing elit. Hic soluta nesciunt, fuga veniamtrue",
      price: 1100,
    },
    {
      id: 2,
      img: "https://lyricalcorp.com/assets/images/handcraftedheaven/bracelets.png",
      title: "Lorem Ipsum",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic soluta nesciunt, fuga veniam.",
      isNew: true,
      price: 500,
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
        <span>$1050</span>
      </div>
      <button>CHECKOUT</button>
      <span className="reset">Reset Cart</span>
    </div>
  );
};

export default Cart;
