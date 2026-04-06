"use client";
import styles from "@/styles/content/similarProduct.module.css";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations, useLocale } from "next-intl";

export default function SimilarProducts({ currentProduct, allProducts }) {
  const locale = useLocale();
  const t = useTranslations("SimilarServices");

  if (
    !currentProduct.similarProducts ||
    currentProduct.similarProducts.length === 0
  ) {
    return null; // rien à afficher si pas de similaires
  }

  //   const similarProducts = allProducts.filter((p) =>
  //     currentProduct.similarProducts.includes(p.id)
  //   );
  const similarProducts = currentProduct.similarProducts
    .map((id) => allProducts.find((p) => p.id === id))
    .filter(Boolean);

  return (
    <section className={styles.similarContainer}>
      <h2 className={styles.similarTitle}>{t("h2")}</h2>
      <div className={styles.similarProducts}>
        {similarProducts.map((p) => {
          const tr = p.translations[locale];
          return (
            <Link
              key={p.id}
              href={`/massages/${p.id}`}
              className={styles.similarCard}
            >
              <Image
                src={p.images[0]}
                alt={tr.name}
                width={180}
                height={180}
                className={styles.similarImage}
              />
              <div className={styles.infosContainer}>
                <div className={styles.infos}>
                  <p className={styles.similarName}>{tr.name}</p>
                  <p className={styles.similarTime}>{tr.time}</p>
                </div>
                <p className={styles.similarPrice}>{p.price}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
