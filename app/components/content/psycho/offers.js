"use client";
import styles from "@/styles/content/psycho/offer.module.css";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function Offer() {
  const t = useTranslations("PsychoPage.offer");

  const offers = [
    {
      id: 1,
      slug: "transformation",
      name: t("1.name"),
      price: t("1.price"),
      description: t("1.description"),
      tag: t("1.tag"),
      list: [
        t("1.list.1"),
        t("1.list.2"),
        t("1.list.3"),
        t("1.list.4"),
        t("1.list.5"),
      ],
      image: "/images/psycho/psycho.png",
    },
    {
      id: 2,
      slug: "eveil",
      name: t("2.name"),
      price: t("2.price"),
      description: t("2.description"),
      list: [t("2.list.1"), t("2.list.2"), t("2.list.3")],
      image: "/images/psycho/psycho.png",
    },
  ];

  return (
    <section
      className={styles.offerSection}
      aria-labelledby="offers-title"
      id="offers"
    >
      <motion.h2
        id="offers-title"
        className={styles.title}
        initial={{ opacity: 0, y: -100, scale: 0 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {t("title")}
      </motion.h2>

      <div className={styles.offerList}>
        {offers.map((offer) => (
          <motion.article
            key={offer.id}
            className={styles.card}
            initial={{ opacity: 0, y: -100, scale: 0 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Image de fond */}

            {/* Badge */}
            <div className={styles.content}>
              {offer.tag && <span className={styles.tag}>{offer.tag}</span>}

              {/* Header */}
              <header className={styles.header}>
                <h3 className={styles.name}>{offer.name}</h3>
                <p className={styles.price}>{offer.price}</p>
              </header>
              <Image
                src={offer.image}
                alt={offer.name}
                width={200}
                height={200}
                className={styles.bgImage}
              />

              {/* Description */}
              <p className={styles.description}>{offer.description}</p>

              {/* Liste */}
              <ul className={styles.list}>
                {offer.list.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              {/* Actions */}
              <div className={styles.actions}>
                <Link
                  href="https://www.sumupbookings.com/haumana-bien-etre"
                  className={styles.primary}
                >
                  {t("buy")}
                </Link>
                <Link
                  href={`/psychopracticienne/${offer.slug}`}
                  className={styles.secondary}
                >
                  {t("discover")}
                </Link>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
