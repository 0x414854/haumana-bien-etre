"use client";

import styles from "@/styles/content/gallery.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Gallery({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % images.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [images.length]);

  const tabletImages = [
    images[currentIndex],
    images[(currentIndex + 1) % images.length],
  ];

  return (
    <section className={styles.gallerySection}>
      {/* ========================================
          MOBILE
      ======================================== */}

      <div className={styles.mobileCarousel}>
        {images.map((image, index) => (
          <div
            key={image.src}
            className={`${styles.mobileCard} ${
              index === currentIndex ? styles.active : ""
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              priority={index === 0}
              className={styles.image}
              sizes="90vw"
            />
          </div>
        ))}

        <div className={styles.pagination}>
          {images.map((_, index) => (
            <span
              key={index}
              className={`${styles.dot} ${
                index === currentIndex ? styles.activeDot : ""
              }`}
            />
          ))}
        </div>
      </div>

      {/* ========================================
          TABLETTE
          768px → 1279px
      ======================================== */}

      <div className={styles.tabletCarousel}>
        {tabletImages.map((image) => (
          <div key={image.src} className={styles.tabletCard}>
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className={styles.tabletImage}
              sizes="45vw"
            />
          </div>
        ))}

        <div className={styles.pagination}>
          {images.map((_, index) => (
            <span
              key={index}
              className={`${styles.dot} ${
                index === currentIndex ? styles.activeDot : ""
              }`}
            />
          ))}
        </div>
      </div>

      {/* ========================================
          DESKTOP
          1280px+
      ======================================== */}

      <div className={styles.desktopCarousel}>
        {images.map((image) => (
          <div key={image.src} className={styles.card}>
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className={styles.image}
              sizes="20vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
