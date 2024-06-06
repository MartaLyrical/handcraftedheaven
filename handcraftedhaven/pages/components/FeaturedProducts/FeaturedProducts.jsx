import React from "react";
import Card from "../Card/Card";
import styles from "./featuredProducts.module.css";
import { data } from "./data";

const FeaturedProducts = ({ type }) => {
  return (
    <div className={styles.featuredProducts}> {/* Use styles.featuredProducts */}
      <div className={styles.top}> {/* Use styles.top */}
        <h1>{type} products</h1>
      </div>
      <div className={styles.bottom}> {/* Use styles.bottom */}
        {data[type].map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
