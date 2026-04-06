"use client";

import styles from "@/styles/content/psycho/finalCta.module.css";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function FinalCta() {
  const t = useTranslations("PsychoPage.finalCta");
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
    </section>
  );
}
