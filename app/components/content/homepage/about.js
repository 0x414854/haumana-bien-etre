"use client";
import styles from "@/styles/content/about.module.css";
import Image from "next/image";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

import Who from "@/public/images/founder/about.png";
import QuoteImg from "@/public/icons/quote.png";
import Logo from "@/public/logo/logo.png";

export default function About() {
  const t = useTranslations("About");

  return (
    <section className={styles.aboutContainer} aria-labelledby="about-title">
      <motion.h2
        className={styles.name}
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {t("p")}
      </motion.h2>
      <section className={styles.mainContainer}>
        <div className={styles.container}>
          <Image
            className={styles.quoteImg}
            src={QuoteImg}
            width={20}
            height={20}
            alt="Image guillemet citation - Haumana Bien-être"
            loading="lazy"
          />
          <Image
            className={styles.quoteImgSecond}
            src={QuoteImg}
            width={20}
            height={20}
            alt="Image guillemet citation - Haumana Bien-être"
            loading="lazy"
          />
          <motion.p
            className={styles.note}
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {t("note")}
          </motion.p>
          <motion.p
            className={styles.owner}
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {t("owner")}
          </motion.p>
        </div>
        <section className={styles.imageContainer}>
          {/* <motion.div
          className={styles.image}
          initial={{ opacity: 0, zIndex: 2 }}
          whileInView={{ opacity: 1, zIndex: 2 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Image
            className={styles.logo}
            src={Logo}
            width={150}
            height={150}
            alt="Logo Haumana Bien-être"
            loading="lazy"
          />
        </motion.div> */}
          <motion.div
            className={styles.image}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Image
              src={Who}
              // width={320}
              // height={280}
              fill
              alt="Ambre, fondatrice, masseuse et psychopracticienne de Haumana Bien-être - Présilly"
              sizes="(min-width: 768px) 350px, 500px"
              loading="lazy"
              className={styles.img}
            />
            {/* <motion.div
        className={styles.flipCard}
        animate={{ rotateY: 360 }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear",
        }}
        <div className={`${styles.face}`}>
          <Image
            src={Logo}
            alt="Logo Haumana Bien-être"
            fill
            className={styles.logo}
          />
        </div>

        <div className={`${styles.face} ${styles.back}`}>
          <Image
            src={Who}
            alt="Ambre, fondatrice"
            fill
            className={styles.img}
          />
        </div>
      </motion.div> */}
          </motion.div>
        </section>
      </section>
    </section>
  );
}
