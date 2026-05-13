"use client";

import styles from "@/styles/page/entreprise.module.css";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import CorporateImg from "@/public/images/corpo.png";
import IconRelax from "@/public/icons/iconRelax.svg";
import IconCoaching from "@/public/icons/iconCoaching.svg";
import IconEvent from "@/public/icons/iconEvent.svg";

import Img1 from "@/public/images/cta/cta_1.png";
import Img2 from "@/public/images/cta/cta_2.png";
import Img3 from "@/public/images/cta/cta_3.png";
import Img4 from "@/public/images/cta/cta_4.png";
import Img5 from "@/public/images/cta/cta_5.png";

export default function EntreprisePage() {
  const t = useTranslations("CorpoMassages");

  const images = [
    { id: 1, img: Img1, alt: "test" },
    { id: 2, img: Img2, alt: "test" },
    { id: 3, img: Img3, alt: "test" },
    { id: 4, img: Img4, alt: "test" },
    { id: 5, img: Img5, alt: "test" },
  ];

  return (
    <main className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: -100, scale: 0 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {t("title")}
          </motion.h1>
          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: -100, scale: 0 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {t("subtitle")}
          </motion.p>
          <motion.a
            href="/contact-et-horaire#form"
            className={styles.ctaBtn}
            initial={{ opacity: 0, opacity: 0 }}
            animate={{ opacity: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {t("ctaButton")}
          </motion.a>
        </div>
        <motion.div
          className={styles.heroImage}
          initial={{ opacity: 0, y: -100, scale: 0 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Image src={CorporateImg} alt="Bien-être entreprise" fill />
        </motion.div>
      </section>

      {/* Services / Avantages */}
      <section className={styles.features}>
        <h2 className={styles.sectionTitle}>{t("sectionTitle")}</h2>
        <div className={styles.cards}>
          <motion.div
            className={styles.card}
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Image src={IconRelax} alt="Relaxation" width={60} height={60} />
            <h3>{t("features.title_1")}</h3>
            <p>{t("features.description_1")}</p>
          </motion.div>
          <motion.div
            className={styles.card}
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Image src={IconCoaching} alt="Coaching" width={60} height={60} />
            <h3>{t("features.title_2")}</h3>
            <p>{t("features.description_2")}</p>
          </motion.div>
          <motion.div
            className={styles.card}
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Image src={IconEvent} alt="Événements" width={60} height={60} />
            <h3>{t("features.title_3")}</h3>
            <p>{t("features.description_3")}</p>
          </motion.div>
        </div>
      </section>

      {/* CTA final */}
      <motion.section
        className={styles.finalCTA}
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2>{t("cta.title")}</h2>
        <p>{t("cta.text")}</p>
        <Link href="/contact-et-horaire#form" className={styles.ctaBtn}>
          {t("cta.button")}
        </Link>
      </motion.section>
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
    </main>
  );
}
