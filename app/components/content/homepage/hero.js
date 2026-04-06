"use client";
import styles from "@/styles/content/hero.module.css";
import Image from "next/image";
import Link from "next/link";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

import HeroImg from "@/public/images/hero.jpg";
export default function Hero() {
  const t = useTranslations("Hero");

  // const scrollToNextSection = () => {
  //   const nextSection = document.getElementById("intro");
  //   if (nextSection) {
  //     nextSection.scrollIntoView({
  //       behavior: "smooth",
  //       block: "start",
  //     });
  //   }
  // };

  return (
    <section className={styles.heroContainer}>
      {/* Contenu principal du hero */}
      <section className={styles.heroContent}>
        <motion.div
          className={styles.imageWrapper}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* <Image
            src={HeroImg}
            alt="Image de massage bien-être - Haumana Bien-être Présilly"
            fill
            // priority
            className={styles.img}
            loading="lazy"
          /> */}
          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {t("h1")}
          </motion.h1>
          <motion.div
            className={styles.ctaContainer}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Link className={styles.cta} href="/contact-et-horaire">
              {t("cta")}
            </Link>
          </motion.div>

          <motion.div
            className={styles.scrollContainer}
            initial={{ opacity: 0, x: -50, y: -100 }}
            animate={{ opacity: 1, x: -50, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className={styles.scrollText}>Scroll down</p>
            <span className={styles.scroll}></span>
          </motion.div>
        </motion.div>
      </section>
    </section>
  );
}
