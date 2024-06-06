import React from "react";
import styles from "./about.module.css";
import Link from "next/link";

const About = () => {
  return (
    <div className={styles.about}>
  <div className={styles.container}>
    <div className={styles.header}>
      <div className={styles["bg-about"]}></div>
      <div className={styles.details}>
        <h1>About Us</h1>
        <p>The project aims to develop a web application that allows artisans and crafters to display and sell their products.</p>
        <p>It serves as a virtual marketplace that bridges the gap between creators and customers.</p>
      </div>
    </div>

    <div className={styles.middle}>
      <div className={styles["upper-row"]}>
        <div className={styles["left-col"]}>
          <h1>Our Mission</h1>
          <p>Handcrafted Haven is designed to nurture a sense of community, support local artisans, and advocate for sustainable consumption.</p>
          <p>We seek to transform how handcrafted items are found, valued, and purchased.</p>
        </div>
      </div>
    </div>

    <div className={styles.middle}>
      <div className={styles["upper-row"]}>
        <div className={styles["left-col"]}>
          <h1>Values</h1>
          <ul>
            <li>Community Interaction</li>
            <li>Sustainable Consumption</li>
            <li>Secure E-commerce</li>
            <li>Quality Products</li>
          </ul>
        </div>
      </div>
    </div>

    <div className={styles.middle}>
      <div className={styles["upper-row"]}>
        <div className={styles["left-col"]}>
          <h1>Social Media</h1>
          <div className={styles.contactIconsContainer}>
            <Link href="https://mail.google.com/mail/u/0/?ogbl#inbox?compose=CllgCJZcRDzZkmCzCtpDqhBNlglXcPWgwhxQNLWqZNdMbjvDBWRbxDQFXprVKCgqnWmhJSfdRvq">
              <img className={styles.contactIcon} src="/email.png" alt="Email" />
            </Link>
            <Link href="https://www.instagram.com/">
              <img className={styles.contactIcon} src="/instagram.png" alt="Instagram" />
            </Link>
            <Link href="https://www.facebook.com/">
              <img className={styles.contactIcon} src="/facebook.png" alt="Facebook" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default About;
