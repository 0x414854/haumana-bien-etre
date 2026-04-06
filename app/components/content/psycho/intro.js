"use client";

import styles from "@/styles/content/psycho/intro.module.css";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Intro() {
  const t = useTranslations("PsychoPage.intro");
  return (
    <section className={styles.introSection}>
      <div className={styles.titleContainer}>
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: -100, scale: 0 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {t("title")}
        </motion.h1>
        <motion.h2
          className={styles.subtitle}
          initial={{ opacity: 0, y: -100, scale: 0 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {t("subtitle")}
        </motion.h2>
      </div>
      <div className={styles.introContainer}>
        {/* BLOCK 1 */}
        <motion.div
          className={styles.block}
          initial={{ opacity: 0, y: -100, scale: 0 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <p>{t("block1.p1")}</p>
          <p>{t("block1.p2")}</p>
        </motion.div>

        {/* BLOCK 2 */}
        <motion.div
          className={styles.block}
          initial={{ opacity: 0, y: -100, scale: 0 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <p>{t("block2.p1")}</p>
          <p>{t("block2.p2")}</p>
        </motion.div>

        {/* BLOCK 3 */}
        <motion.div
          className={styles.blockHighlight}
          initial={{ opacity: 0, y: -100, scale: 0 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <p>{t("block3.p1")}</p>
          <p>{t("block3.p2")}</p>

          <ul className={styles.benefits}>
            <li>{t("benefits.1")}</li>
            <li>{t("benefits.2")}</li>
            <li>{t("benefits.3")}</li>
            <li>{t("benefits.4")}</li>
          </ul>

          <p className={styles.conclusion}>{t("conclusion")}</p>

          <Link href="#offers" className={styles.cta}>
            {t("cta")}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
