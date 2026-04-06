"use client";
import styles from "@/styles/content/intro.module.css";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Description from "@/app/components/content/homepage/description";

export default function Intro() {
  const t = useTranslations("Hero");
  return (
    <section className={styles.introContainer} id="intro">
      <section className={styles.introContent}>
        <motion.p
          className={styles.intro}
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {t("p_1")}
        </motion.p>
        <motion.p
          className={styles.intro}
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {t("p_2")}
        </motion.p>
        <motion.p
          className={styles.intro}
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {t("p_3")}
        </motion.p>
        <motion.p
          className={styles.intro}
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {t("p_4")}
        </motion.p>
        <motion.p
          className={styles.intro}
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {t("p_5")}
        </motion.p>
        <motion.p
          className={styles.intro}
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {t("p_6")}
        </motion.p>
        <motion.p
          className={styles.intro}
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {t("p_7")}
        </motion.p>
        <motion.span
          className={styles.note}
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {t("span")}
        </motion.span>
      </section>
      <div className={styles.descriptionWrapper}>
        <Description />
      </div>
    </section>
  );
}
