import React from "react";
import Card from "../Card/Card";
import "./featuredProducts.scss";
import { data } from "./data";

const FeaturedProducts = ({ type }) => {
  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
      </div>
      <div className="bottom">
        {data[type].map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
