import React from "react";
import styles from "./artisans.module.css";

import { data } from "./data";
import ArtisansCard from "../../components/ArtisansCard/ArtisansCard";

const artisans = () => {
  return (
    <div className={styles.artisans}>
      <div className={styles.container}>
        {data.map((item) => (
          <ArtisansCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default artisans;
