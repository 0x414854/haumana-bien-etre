"use client";

import styles from "@/styles/content/description.module.css";
import { useTranslations } from "next-intl";

export default function Description() {
  const t = useTranslations("Description");

  // tableau de données pour les items
  const items = [
    { step: 1, h3: t("h3_1"), p: t("p_1") },
    { step: 2, h3: t("h3_2"), p: t("p_2") },
    { step: 3, h3: t("h3_3"), p: t("p_3") },
  ];

  return (
    <section className={styles.descriptonSection}>
      {/* <h2 className={styles.titleSection}>{t("h2")}</h2> */}

      <ul className={styles.list}>
        {items.map((item, i) => (
          <li key={i} className={styles.item} style={{ "--i": i }}>
            <div className={styles.stepBox}>
              <span>{item.step}</span>
            </div>
            <div className={styles.stepText}>
              <h3>{item.h3}</h3>
              <p>{item.p}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
