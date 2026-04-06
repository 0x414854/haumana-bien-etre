"use client";
import styles from "@/styles/content/banner/banner.module.css";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function Banner() {
  const t = useTranslations("Banner");

  return (
    <section className={styles.bannerContainer}>
      <motion.p
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {t("p")}
      </motion.p>
    </section>
  );
}
