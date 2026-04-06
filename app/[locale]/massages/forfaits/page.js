"use client";
import styles from "@/styles/page/forfaits.module.css";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Steps from "@/app/components/content/steps";

export default function PackagesPage() {
  const t = useTranslations("PackagesPage");

  const steps = [
    {
      id: 1,
      title: t("description.steps.1"),
      list_item_1: t("description.steps.list.item_1_1"),
      list_item_2: t("description.steps.list.item_1_2"),
    },
    {
      id: 2,
      title: t("description.steps.2"),
      list_item_1: t("description.steps.list.item_2_1"),
      list_item_2: t("description.steps.list.item_2_2"),
      list_item_3: t("description.steps.list.item_2_3"),
    },
    {
      id: 3,
      title: t("description.steps.3"),
      list_item_1: t("description.steps.list.item_3_1"),
      list_item_2: t("description.steps.list.item_3_2"),
    },
  ];

  const packages = [
    {
      id: "harmonie-durable",
      name: t("package_name_1"),
      time: t("package_time_1"),
      intro: t("package_description_1"),
      description: t("package_description_1_2"),
      discover: t("discover"),
      image: "/images/massages/forfaits.png",
      alt: "Forfait 1 mois 4 x 30 minutes - Haumana Bien-être",
    },
    {
      id: "parenthese-essentielle",
      name: t("package_name_2"),
      time: t("package_time_2"),
      intro: t("package_description_2"),
      description: t("package_description_2_2"),
      discover: t("discover"),
      image: "/images/massages/forfaits.png",
      alt: "Massages du monde L'Essentiel - Haumana Bien-être",
    },
    {
      id: "atelier-massage-bebe",
      name: t("package_name_3"),
      time: t("package_time_3"),
      intro: t("package_description_3"),
      description: t("package_description_3_2"),
      discover: t("discover"),
      image: "/images/massages/forfaits.png",
      alt: "Massages du monde L'Essentiel - Haumana Bien-être",
    },
  ];

  return (
    <main className={styles.pageSection}>
      <section className={styles.packagesSection}>
        <section className={styles.mainContainer}>
          <div className={styles.descriptionContainer}>
            <motion.h1
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
              {t("description.subtitle")}
            </motion.h2>

            {/* <div className={styles.container}>
              <h2 className={styles.title}>{t("description.title")}</h2>
              <h2 className={styles.subtitle}>{t("description.subtitle")}</h2>
            </div> */}
          </div>
          <Steps type="descriptionPackages" />
        </section>
        <section className={styles.packagesSection}>
          <div className={styles.packages}>
            {packages.map((pack) => (
              <article key={pack.id} className={styles.packageCard}>
                <div className={styles.imageWrapper}>
                  <section className={styles.packageHeader}>
                    <h2>{pack.name}</h2>
                    <span className={styles.time}>{pack.time}</span>
                  </section>
                  <Image
                    src={pack.image}
                    alt={pack.alt}
                    width={280}
                    height={280}
                    className={styles.packageImage}
                  />
                </div>

                <div className={styles.packageContent}>
                  <p className={styles.intro}>{pack.intro}</p>
                  <p className={styles.description}>{pack.description}</p>
                  <Link
                    href={`/massages/forfaits/${pack.id}?from=/massages/forfaits`}
                    className={styles.discoverBtn}
                  >
                    {pack.discover} →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
