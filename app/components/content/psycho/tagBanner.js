"use client";
import styles from "@/styles/content/psycho/tagBanner.module.css";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function TagBanner() {
  const t = useTranslations("PsychoPage.tagBanner");

  const tags = [
    { id: "women", label: t("tag.women") },
    { id: "mom", label: t("tag.mom") },
    { id: "pma", label: t("tag.pma") },
    { id: "postNatal", label: t("tag.born") },
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const offset = id === "women" ? 180 : 80;

    const top = el.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

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
        {tags.map((tag) => (
          <Link
            key={tag.id}
            href={`#${tag.id}`}
            className={styles.tag}
            onClick={(e) => {
              e.preventDefault();
              scrollTo(tag.id);
            }}
          >
            {tag.label}
          </Link>
        ))}
      </motion.div>
    </section>
  );
}
