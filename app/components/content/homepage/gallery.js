"use client";

import styles from "@/styles/content/gallery.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTranslations } from "use-intl";

const images = [
  {
    src: "/images/mosaic/1.jpg",
    alt: "Cabinet de soins",
    width: 1536,
    height: 2040,
  },
  {
    src: "/images/mosaic/2.jpg",
    alt: "Espace détente",
    width: 416,
    height: 800,
  },
  {
    src: "/images/mosaic/3.jpg",
    alt: "Massage bien-être",
    width: 2048,
    height: 2720,
  },
  // {
  //   src: "/images/mosaic/4.jpg",
  //   alt: "Massage bien-être",
  //   width: 1200,
  //   height: 800,
  // },
];

export default function Gallery() {
  const t = useTranslations("Gallery");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % images.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  // Pour la tablette :
  // 1 + 2
  // 2 + 3
  // 3 + 4
  // 4 + 1
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
