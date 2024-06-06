import React, { useState } from "react";
import List from "../../components/List/List";
// import { useParams } from "react-router-dom";
import { categ, headers } from "./data";
import styles from "./products.module.css";

const Products = () => {
  // const { catId } = useParams().id;
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);

  // Remove the useParams() hook and get the catId from somewhere else if needed

  return (
    <div className={styles.products}>
      <div className={styles.left}>
        <div className={styles.filterItem}>
          <h2>Product Categories</h2>
          {/* {categ[catId].map((item) => (
            <div className={styles.inputItem} key={item.id}>
              <input type="checkbox" id={item.id} value={item.id} />
              <label htmlFor={item.id}>{item.name}</label>
            </div>
          ))} */}
        </div>

        <div className={styles.filterItem}>
          <h2>Sort by</h2>
          <div className={styles.inputItem}>
            <input
              type="radio"
              name="price"
              id="asc"
              value="asc"
              // onChange={(e) => setSort("asc")}
            />
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className={styles.inputItem}>
            <input
              type="radio"
              name="price"
              id="desc"
              value="desc"
              // onChange={(e) => setSort("desc")}
            />
            <label htmlFor="desc">Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        {/* <div className={styles.catImg}>{headers[catId]}</div>
        <List catId={catId} maxPrice={maxPrice} sort={sort} /> */}
      </div>
    </div>
  );
};

export default Products;
