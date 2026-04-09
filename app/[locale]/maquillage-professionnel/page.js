"use client";
import styles from "@/styles/page/maquillageProfessionnel.module.css";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

import Steps from "@/app/components/content/steps";

export default function MakeUpPage() {
  const t = useTranslations("MakeUpPage");

  const makeups = [
    {
      type: "makeup",
      id: "maquillage-de-jour-et-de-soiree",
      name: t("daily.name"),
      time: t("daily.time"),
      intro: t("daily.description"),
      price: t("daily.price"),
      image: "/images/makeup/makeup.png",
      alt: "Image maquillage de soirée - Haumana Bien-être - Présilly",
    },
    {
      type: "makeup",
      id: "maquillage-mariage",
      name: t("wedding.name"),
      time: t("wedding.time"),
      tag: t("wedding.tag"),
      intro: t("wedding.description"),
      price: "150€",
      image: "/images/makeup/makeup.png",
      alt: "Image maquillage pour mariage - Haumana Bien-être - Présilly",
    },
    {
      type: "makeup",
      id: "maquillage-shooting-photo",
      name: t("shooting.name"),
      time: t("shooting.time"),
      intro: t("shooting.description"),
      price: "65€",
      image: "/images/makeup/makeup.png",
      alt: "Image maquillage shooting - Haumana Bien-être - Présilly",
    },
    {
      type: "note",
      image: "/logo/logoInstantBienNaitre.svg",
      alt: "Logo photographe partenaire Instant Bien Être - Haumana Bien-être - Présilly",
      tag: t("photoNote.tag"),
      text: t("photoNote.note"),
      link: "https://www.instantbiennaitrephotographie.com",
    },
  ];

  return (
    <main className={styles.makeUpPage}>
      <section className={styles.titleSection}>
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
        {/* <div className={styles.tagContainer}>
          <span className={styles.tag}>{t("tag.1")}</span>
          <span className={styles.tag}>{t("tag.2")}</span>
          <span className={styles.tag}>{t("tag.3")}</span>
        </div> */}
      </section>
      <Steps type="makeup" />
      <section className={styles.makeupContainer}>
        <ul className={styles.makeups}>
          {makeups.map((item, index) => {
            if (item.type === "note") {
              return (
                <motion.li
                  key={index}
                  className={styles.note}
                  initial={{ opacity: 0, y: -100, scale: 0 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={300}
                    height={200}
                    className={styles.logoImage}
                  />
                  {item.tag && <span className={styles.tag}>{item.tag}</span>}

                  <p className={styles.noteText}>{item.text}</p>
                  <Link
                    href={item.link}
                    className={styles.noteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.link}
                  </Link>
                </motion.li>
              );
            }

            return (
              <motion.li
                key={item.id}
                className={styles.makeup}
                initial={{ opacity: 0, y: -100, scale: 0 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className={styles.image}
                />

                <div className={styles.overlay}>
                  {item.tag && <span className={styles.tag}>{item.tag}</span>}

                  <h3 className={styles.name}>{item.name}</h3>

                  <p className={styles.time}>{item.time}</p>

                  <p className={styles.description}>{item.intro}</p>

                  <div className={styles.footer}>
                    <span className={styles.price}>{item.price}</span>

                    <a
                      href={`/maquillage-professionnel/${item.id}`}
                      className={styles.cta}
                    >
                      {t("discover")}
                    </a>
                  </div>
                </div>
              </motion.li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}
