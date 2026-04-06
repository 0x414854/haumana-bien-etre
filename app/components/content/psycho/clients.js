"use client";

import { Link } from "@/i18n/navigation";
import styles from "@/styles/content/psycho/clients.module.css";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function Clients() {
  const t = useTranslations("PsychoPage.clients");
  const cards = [
    {
      id: "1",
      slug: "women",
      title: t("women.name"),
      subtitle: t("women.title"),
      intro: t("women.intro"),
      points: t.raw("women.points"),
      text: t("women.text"),
      result: t("women.result"),
      cta: t("women.cta"),
    },
    {
      id: "2",
      slug: "mom",
      title: t("mom.name"),
      subtitle: t("mom.title"),
      intro: t("mom.intro"),
      points: t.raw("mom.points"),
      text: t("mom.text"),
      result: t("mom.result"),
      cta: t("mom.cta"),
    },
    {
      id: "3",
      slug: "pma",
      title: t("pma.name"),
      subtitle: t("pma.title"),
      intro: t("pma.intro"),
      points: t.raw("pma.points"),
      text: t("pma.text"),
      result: t("pma.result"),
      cta: t("pma.cta"),
    },
    {
      id: "4",
      slug: "postNatal",
      title: t("postNatal.name"),
      subtitle: t("postNatal.title"),
      intro: t("postNatal.intro"),
      points: t.raw("postNatal.points"),
      text: t("postNatal.text"),
      result: t("postNatal.result"),
      cta: t("postNatal.cta"),
    },

    // 👉 tu ajoutes tes 3 autres cartes ici
  ];
  return (
    <section className={styles.clientsSection}>
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: -100, scale: 0 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {t("title")}
      </motion.h2>
      <ul className={styles.cards}>
        {cards.map((card, index) => (
          <li key={index} className={styles.card} id={card.slug}>
            <div className={styles.content}>
              {/* <span className={styles.number}>{card.id}</span> */}

              <h3>{card.title}</h3>
              <h4>{card.subtitle}</h4>

              <p className={styles.intro}>{card.intro}</p>

              <ul className={styles.list}>
                {card.points.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>

              <p>{card.text}</p>
              <p className={styles.result}>{card.result}</p>

              <Link href="#offers" className={styles.cta}>
                {card.cta}
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
