"use client";
import styles from "@/styles/content/cta.module.css";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import Img1 from "@/public/images/cta/cta_1.png";
import Img2 from "@/public/images/cta/cta_2.png";
import Img3 from "@/public/images/cta/cta_3.png";
import Img4 from "@/public/images/cta/cta_4.png";
import Img5 from "@/public/images/cta/cta_5.png";

export default function Cta() {
  const t = useTranslations("Cta");

  const images = [
    { id: 1, img: Img1, alt: "test" },
    { id: 2, img: Img2, alt: "test" },
    { id: 3, img: Img3, alt: "test" },
    { id: 4, img: Img4, alt: "test" },
    { id: 5, img: Img5, alt: "test" },
  ];
  return (
    <section className={styles.ctaSection}>
      <motion.div
        className={styles.ctaContainer}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          {t("h2")}
        </motion.h2>
        <motion.p
          className={styles.text}
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          {t("p")}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <Link
            href="https://www.sumupbookings.com/haumana-bien-etre"
            className={styles.link}
            rel="noopener noreferrer"
          >
            {t("button")}
          </Link>
        </motion.div>
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
