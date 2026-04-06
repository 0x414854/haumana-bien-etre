"use client";
import styles from "@/styles/content/psycho/tagBanner.module.css";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function TagBanner() {
  const t = useTranslations("PsychoPage.tagBanner");
  return (
    <section className={styles.bannerSection}>
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: -100, scale: 0 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {t("title")}
      </motion.h2>
      <motion.div
        className={styles.tags}
        initial={{ opacity: 0, y: -100, scale: 0 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Link href="#women" className={styles.tag}>
          {t("tag.women")}
        </Link>
        <Link href="#mom" className={styles.tag}>
          {t("tag.mom")}
        </Link>
        <Link href="#pma" className={styles.tag}>
          {t("tag.pma")}
        </Link>
        <Link href="#postNatal" className={styles.tag}>
          {t("tag.born")}
        </Link>
      </motion.div>
    </section>
  );
}
