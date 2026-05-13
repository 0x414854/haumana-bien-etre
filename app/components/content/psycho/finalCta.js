"use client";

import styles from "@/styles/content/psycho/finalCta.module.css";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

import Img1 from "@/public/images/cta/cta_1.png";
import Img2 from "@/public/images/cta/cta_2.png";
import Img3 from "@/public/images/cta/cta_3.png";
import Img4 from "@/public/images/cta/cta_4.png";
import Img5 from "@/public/images/cta/cta_5.png";

export default function FinalCta() {
  const t = useTranslations("PsychoPage.finalCta");

  const images = [
    { id: 1, img: Img1, alt: "test" },
    { id: 2, img: Img2, alt: "test" },
    { id: 3, img: Img3, alt: "test" },
    { id: 4, img: Img4, alt: "test" },
    { id: 5, img: Img5, alt: "test" },
  ];
  return (
    <section className={styles.finalCtaContainer}>
      <motion.div
        className={styles.finalCta}
        initial={{ opacity: 0, y: -100, scale: 0 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.42 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className={styles.title}>{t("title")}</h2>
        <p className={styles.description}>{t("description")}</p>
        <Link href="/contact-et-horaire#form" className={styles.cta}>
          {t("cta")}
        </Link>
      </motion.div>
      <ul className={styles.imgContainer}>
        {images.map((image, index) => {
          return (
            <motion.li
              key={image.id}
              className={styles.imgCard}
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <Image
                src={image.img}
                className={styles.img}
                alt={image.alt}
                width={60}
                height={60}
              />
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
}
