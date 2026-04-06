"use client";
import styles from "@/styles/page/massagesPageT.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { motion } from "framer-motion";

import PackagesIMG from "@/public/images/massages/forfaits.png";
import WomenIMG from "@/public/images/massages/femme.png";
import BabyIMG from "@/public/images/massages/bebe.png";

import IMGT from "@/public/images/category_2.png";

export default function MassagesPage() {
  const t = useTranslations("MassagesPage");

  const massages = [
    {
      id: 1,
      title: "Harmonie Durable",
      duration: t("time.package_4_1h"),
      price: "295€",
      category: ["forfaits"],
      text_category: "Forfait",
      image: PackagesIMG,
      slug: "/forfaits/harmonie-durable",
    },
    {
      id: 2,
      title: "Parenthèse Essentielle",
      duration: t("time.package_4_30"),
      price: "150€",
      category: ["forfaits"],
      text_category: "Forfait",
      image: PackagesIMG,
      slug: "/forfaits/parenthese-essentielle",
    },
    {
      id: 3,
      title: "L'Essentiel",
      duration: t("time.30min"),
      price: "45€",
      category: ["soins_femme"],
      text_category: "Soins femme",
      image: WomenIMG,
      slug: "/soins-femme/l-essentiel",
    },
    {
      id: 4,
      title: "Haumana",
      duration: t("time.1h"),
      price: "85€",
      category: ["soins_femme"],
      text_category: "Soins femme",
      image: WomenIMG,
      slug: "/soins-femme/haumana",
    },
    {
      id: 5,
      title: "Future maman",
      duration: t("time.1h"),
      price: "85€",
      category: ["soins_femme"],
      text_category: "Soins femme",
      image: WomenIMG,
      slug: "/soins-femme/future-maman",
    },
    {
      id: 6,
      title: "Mahana",
      duration: t("time.30min"),
      price: "45€",
      category: ["soins_bébé_enfants"],
      text_category: "Soins bébé & enfants",
      image: BabyIMG,
      slug: "/soins-bebe-et-enfants/mahana",
    },
    {
      id: 7,
      title: "Aroha",
      duration: t("time.45min"),
      price: "65€",
      category: ["soins_bébé_enfants"],
      text_category: "Soins bébé & enfants",
      image: BabyIMG,
      slug: "/soins-bebe-et-enfants/aroha",
    },
    {
      id: 8,
      title: "Atelier Massage Bébé",
      duration: t("time.package_3_45"),
      price: "190€",
      category: ["forfaits", "soins_bébé_enfants"],
      text_category: "Forfait",
      image: PackagesIMG,
      slug: "/forfaits/atelier-massage-bebe",
    },
  ];

  const [activeFilter, setActiveFilter] = useState("all");
  // Détecte si un filtre est actif (différent de "all")
  const isFiltered = activeFilter !== "all";

  const filters = [
    { slug: "all", label: "Tous" },
    { slug: "forfaits", label: "Forfaits" },
    { slug: "soins_femme", label: "Soins femme" },
    { slug: "soins_bébé_enfants", label: "Soins bébé & enfants" },
  ];

  const filteredMassages =
    activeFilter === "all"
      ? massages
      : massages.filter((massage) => massage.category.includes(activeFilter));
  return (
    <main className={styles.massagesPageContainer}>
      <div className={styles.titleContainer}>
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: -100, scale: 0 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
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
      <div className={styles.filterContainer}>
        {/* Version mobile */}
        <select
          className={`${styles.filterSelect} ${styles.mobileFilters}`}
          value={activeFilter}
          onChange={(e) => setActiveFilter(e.target.value)}
        >
          {filters.map((filter) => (
            <option
              key={filter.slug}
              value={filter.slug}
              className={styles.filterElement}
            >
              {filter.label}
            </option>
          ))}
        </select>

        {/* Version desktop */}
        <ul className={`${styles.filterList} ${styles.desktopFilters}`}>
          {filters.map((filter) => (
            <li
              key={filter.slug}
              className={`${styles.filterElement} ${
                activeFilter === filter.slug ? styles.activeFilter : ""
              }`}
              onClick={() => setActiveFilter(filter.slug)}
            >
              {filter.label}
            </li>
          ))}
        </ul>
      </div>
      <ul
        className={`${styles.massagesGrid} ${isFiltered ? styles.filtered : ""}`}
      >
        {filteredMassages.map((massage) => (
          <li
            key={massage.id}
            className={`${styles.massageCard} ${styles["massage" + massage.id]}`}
          >
            <Link
              href={`/massages/${massage.slug}?from=/massages`}
              className={styles.card}
            >
              <Image
                src={massage.image}
                alt={massage.title}
                className={styles.massageImage}
              />

              <div className={styles.overlay}>
                <span className={styles.category}>{massage.text_category}</span>
                <h3 className={styles.massageTitle}>{massage.title}</h3>
                <p className={styles.duration}>{massage.duration}</p>
                <strong className={styles.price}>{massage.price}</strong>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
