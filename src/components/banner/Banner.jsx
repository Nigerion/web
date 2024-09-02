import React from "react";
import banner from "../../images/banner.png";
import styles from "../../styles/Home.module.css";
const Banner = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.left}>
        <p className={styles.content}>
          New year <span>Sale</span>
        </p>
        <button className={styles.more}>See more</button>
      </div>
      <div
        className={styles.right}
        style={{ backgroundImage: `url(${banner})` }}
      >
        <p className={styles.discount}>
          save up to <span>50%</span>of
        </p>
      </div>
    </section>
  );
};

export default Banner;
