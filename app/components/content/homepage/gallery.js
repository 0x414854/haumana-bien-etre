"use client";

import styles from "@/styles/content/gallery.module.css";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "use-intl";

const images = [
  {
    src: "/images/mosaic/1.jpg",
    alt: "Cabinet de soins",
  },
  {
    src: "/images/mosaic/2.jpg",
    alt: "Espace détente",
  },
  {
    src: "/images/mosaic/3.jpg",
    alt: "Massage bien-être",
  },
];

export default function Gallery() {
  const t = useTranslations("Gallery");
  return (
    <section className={styles.gallerySection}>
      <section className={styles.titleContainer}>
        <h1 className={styles.title}>{t("title")}</h1>
        <h2 className={styles.subtitle}>{t("subtitle")}</h2>
      </section>
      <div className={styles.carousel}>
        {images.map((image, index) => (
          <div key={index} className={styles.card}>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className={styles.image}
            />
          </div>
        ))}
      </div>

      <Link href="/galerie" className={styles.button}>
        {t("cta")}
      </Link>
    </section>
  );
}
