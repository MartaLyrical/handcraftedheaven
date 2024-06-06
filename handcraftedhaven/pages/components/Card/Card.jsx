import React from "react";
import styles from './card.module.css';
import Link from "next/link";

const Card = ({ item }) => {
  return (
    <Link className={styles.link} href={`/product/${item.id}`}>
      <div className={styles.link}> {/* Use styles.link for the link */}
        <div className={styles.card}> {/* Use styles.card for the card */}
          <div className={styles.image}> {/* Use styles.image for the image */}
            {item.isNew && <span className={styles.new}>New Arrivals</span>} {/* Use styles.new for the new span */}
            <img src={item.img} alt="" className={styles.mainImg} /> {/* Use styles.mainImg for the main image */}
            <img src={item.img2} alt="" className={styles.secondImg} /> {/* Use styles.secondImg for the second image */}
          </div>
          <h2>{item.title}</h2>
          <div className={styles.prices}> {/* Use styles.prices for the prices */}
            <h3>${item.oldPrice}</h3>
            <h3>${item.newPrice}</h3>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
