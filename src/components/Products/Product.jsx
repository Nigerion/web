import React, { useEffect, useState } from "react";
import styles from "../../styles/Product.module.css";
import { ROUTES } from "../../utils/routes";
const SIZES = [3, 4, 5, 6, 7];
const Product = ({ images, price, title, description }) => {
  const [currentImage, setCurrentImage] = useState();
  const [currentSize, setCurrentSize] = useState();
  useEffect(() => {
    if (!images.length) return;
    setCurrentImage(images[0]);
  }, [images]);
  return (
    <section className={styles.product}>
      <div className={styles.image}>
        <div
          className={styles.current}
          style={{ backgroundImage: `url(${currentImage})` }}
        ></div>
        <div className={styles["images-list"]}>
          {images.map((image, i) => (
            <div
              key={i}
              className={styles.image}
              styles={{ backgroundImage: `url(${image})` }}
              onClick={() => {}}
            ></div>
          ))}
        </div>
      </div>
      <div className={styles.info}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.price}>{price}$</div>
        <div className={styles.color}>
          <span>Color:</span>Green
        </div>
        <div className={styles.sizes}>
          <span>Sizes:</span>
          <div className={styles.list}></div>
          {SIZES.map((size) => (
            <div
              className={`${styles.size} ${
                currentSize === size ? styles.active : ""
              }`}
              onClick={() => setCurrentSize(size)}
            >
              {size}
            </div>
          ))}
        </div>
        <p className={styles.description}>{description}</p>
        <div className={styles.action}>
          <button className={styles.add} disabled={!currentSize}>
            Add to card
          </button>
          <button className={styles.favourite}>Add to favourites</button>
        </div>
        <div className={styles.bottom}>
          <div className={styles.purchase}>19 people purchased</div>
          <Link to={ROUTES.HOME}>Return to store</Link>
        </div>
      </div>
    </section>
  );
};

export default Product;
