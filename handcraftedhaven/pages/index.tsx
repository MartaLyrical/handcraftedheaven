import type { NextPage } from "next";
import FeaturedProducts from "./components/FeaturedProducts/FeaturedProducts";
import Categories from "./components/Categories/Categories";
import styles from "./home.module.css";

const HomeLinkcommon: NextPage = () => {
  return (
    <div className={styles.home}>
      <div className={styles.header}>
        <div className={styles.bgHome}></div>
        <div className={styles.details}>
          <h1>
            LARGE CERAMIC <br />
            COFFEE CUP
          </h1>
          <p>
            <button className={styles.button}>Shop Now</button>
          </p>
        </div>
      </div>

      <FeaturedProducts type="trending" />
      <Categories />
    </div>
  );
};

export default HomeLinkcommon;
