"use client";

import styles from "@/styles/content/psycho/method.module.css";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import CheckIcon from "@/public/icons/check.svg";

export default function Method() {
  const t = useTranslations("PsychoPage.method");
  const DATA = [
    {
      title: t("1.title"),
      content: t("1.content"),
    },
    {
      title: t("2.title"),
      content: t("2.content"),
    },
    {
      title: t("3.title"),
      content: t("3.content"),
    },
    {
      title: t("4.title"),
      content: t("4.content"),
    },
    {
      title: t("5.title"),
      content: t("5.content"),
    },
    {
      title: t("1.title"),
      content: t("1.content"),
    },
    {
      title: t("2.title"),
      content: t("2.content"),
    },
    {
      title: t("3.title"),
      content: t("3.content"),
    },
    {
      title: t("4.title"),
      content: t("4.content"),
    },
    {
      title: t("5.title"),
      content: t("5.content"),
    },
  ];

  const N = DATA.length;

  return (
    <section className={styles.methodSection}>
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: -100, scale: 0 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <span className={styles.titleInner}>{t("title")}</span>
      </motion.h2>
      <motion.h3
        className={styles.p}
        initial={{ opacity: 0, y: -100, scale: 0 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {t("final_p")}
      </motion.h3>

      {/* <p className={styles.intro}>{t("intro")}</p> */}
      <div className={styles.scene}>
        <div className={styles.a3d} style={{ "--n": N }}>
          {DATA.map((item, i) => (
            <div key={i} className={styles.card} style={{ "--i": i }}>
              <Image
                src={CheckIcon}
                width={80}
                height={80}
                alt="Icon check - Haumana Bien-ètre - Présilly"
              />
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.text}>{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
