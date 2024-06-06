import React from "react";
import styles from "./categories.module.css";
import Link from "next/link";

const Categories = () => {
  return (
    <div className={styles.categories}>
      <div className={styles.col}>
        <div className={styles.row}>
          <img
            src="https://lyricalcorp.com/assets/images/handcraftedheaven/woodworking.png"
            alt="Woodworking"
          />
          <button>
            <Link href="#">
              <span className={styles.link}>Woodworking</span>
            </Link>
          </button>
        </div>
        <div className={styles.row}>
          <img
            src="https://lyricalcorp.com/assets/images/handcraftedheaven/embroidery.png"
            alt="Embroidery"
          />
          <button>
            <Link href="/products/embroidery">
              <span className={styles.link}>Embroidery</span>
            </Link>
          </button>
        </div>
      </div>
      <div className={styles.col}>
        <div className={styles.row}>
          <img
            src="https://lyricalcorp.com/assets/images/handcraftedheaven/jewelry.png"
            alt="Jewelry"
          />
          <button>
            <Link href="/products/jewelry">
              <span className={styles.link}>Jewelry</span>
            </Link>
          </button>
        </div>
      </div>
      <div className={styles.col}>
        <div className={styles.row}>
          <img
            src="https://lyricalcorp.com/assets/images/handcraftedheaven/potteryandceramics.png"
            alt="Pottery and Ceramics"
          />
          <button>
            <Link href="/products/ceramics">
              <span className={styles.link}>Pottery and Ceramics</span>
            </Link>
          </button>
        </div>
      </div>
      <div className={`${styles.col} ${styles.coll}`}>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.row}>
              <img
                src="https://lyricalcorp.com/assets/images/handcraftedheaven/papercrafts.png"
                alt="PaperCrafts"
              />
              <button>
                <Link href="/products/paperCrafts">
                  <span className={styles.link}>Paper Crafts</span>
                </Link>
              </button>
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.row}>
              <img
                src="https://lyricalcorp.com/assets/images/handcraftedheaven/accessories.png"
                alt="Accessories"
              />
              <button>
                <Link href="/products/acc">
                  <span className={styles.link}>Accessories</span>
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <img
            src="https://lyricalcorp.com/assets/images/handcraftedheaven/handcrafts.png"
            alt="HandCrafts"
          />
          <button>
            <Link href="/products/handCrafts">
              <span className={styles.link}>HandCrafts</span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
