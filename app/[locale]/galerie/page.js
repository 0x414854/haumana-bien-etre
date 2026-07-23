"use client";

import styles from "@/styles/page/gallery.module.css";
import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "use-intl";

const images = [
  "/images/mosaic/1.jpg",
  "/images/mosaic/2.jpg",
  "/images/mosaic/3.jpg",
  "/images/mosaic/4.jpg",
  "/images/mosaic/5.jpg",
  "/images/mosaic/6.jpg",
  "/images/mosaic/7.jpg",
  "/images/mosaic/8.jpg",
  "/images/mosaic/9.jpg",
  "/images/mosaic/10.jpg",
  "/images/mosaic/11.jpg",
  "/images/mosaic/12.jpg",
];

export default function Gallery() {
  const t = useTranslations("GaleryPage");
  const [selected, setSelected] = useState(null);

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.overlay} />

        <div className={styles.heroContent}>
          <h1>{t("title")}</h1>
          <p>{t("subtitle")}</p>
        </div>
      </section>

      <section className={styles.gallerySection}>
        <div className={styles.gallery}>
          {images.map((src, index) => (
            <div
              key={index}
              className={styles.card}
              onClick={() => setSelected(src)}
            >
              <Image
                src={src}
                alt={`Photo ${index + 1}`}
                fill
                className={styles.image}
              />
            </div>
          ))}
        </div>
      </section>

      {selected && (
        <div className={styles.lightbox} onClick={() => setSelected(null)}>
          <div className={styles.lightboxImage}>
            <Image src={selected} alt="" fill className={styles.fullImage} />
          </div>
        </div>
      )}
    </>
  );
}
