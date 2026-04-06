"use client";
import styles from "@/styles/page/privacyPolicy.module.css";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  const t = useTranslations("PrivacyPolicy");
  return (
    <main className={styles.mainContainer}>
      <section className={styles.titleContainer}>
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {t("title")}
        </motion.h1>
        <motion.span
          className={styles.update}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {t("update")}
        </motion.span>
      </section>
      {/* Contenu des sections */}
      <section className={styles.sectionsContainer}>
        <motion.section
          className={styles.section}
          id="intro"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className={styles.sectionTitle}>{t("section1.title")}</h2>

          <p className={styles.sectionText}>
            {t.rich("section1.p1", {
              strong: (chunks) => <strong>{chunks}</strong>,
            })}
          </p>

          <p className={styles.sectionText}>
            {t.rich("section1.p2", {
              strong: (chunks) => <strong>{chunks}</strong>,
            })}
          </p>

          <p className={styles.sectionText}>{t("section1.p3")}</p>
        </motion.section>

        <motion.div
          className={styles.separator}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        ></motion.div>

        <motion.section
          className={styles.section}
          id="personnalData"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className={styles.sectionTitle}>{t("section2.title")}</h2>

          <p className={styles.sectionText}>
            {t.rich("section2.p1", {
              strong: (chunks) => <strong>{chunks}</strong>,
              br: () => <br />,
            })}
          </p>

          <p className={styles.sectionText}>{t("section2.p2")}</p>
        </motion.section>

        <motion.div
          className={styles.separator}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        ></motion.div>

        <motion.section
          className={styles.section}
          id="finality"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className={styles.sectionTitle}>{t("section3.title")}</h2>

          <p className={styles.sectionText}>{t("section3.p1")}</p>

          <p className={styles.sectionText}>{t("section3.p2")}</p>

          <p className={styles.sectionText}>
            {t.rich("section3.p3", {
              email: (chunks) => (
                <Link
                  href="mailto:contact@haumana-bien-etre.com"
                  className={styles.link}
                >
                  {chunks}
                </Link>
              ),
            })}
          </p>
        </motion.section>

        <motion.div
          className={styles.separator}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        ></motion.div>

        <motion.section
          className={styles.section}
          id="finality"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className={styles.sectionTitle}>{t("section4.title")}</h2>

          <div className={styles.sectionText}>
            <p>{t("section4.intro")}</p>

            <ul>
              <li>{t("section4.li1")}</li>
              <li>{t("section4.li2")}</li>
              <li>{t("section4.li3")}</li>
              <li>{t("section4.li4")}</li>
              <li>{t("section4.li5")}</li>
              <li>{t("section4.li6")}</li>
              <li>{t("section4.li7")}</li>
              <li>{t("section4.li8")}</li>
            </ul>
          </div>

          <p className={styles.sectionText}>
            {t.rich("section4.p1", {
              email: (chunks) => (
                <Link
                  href="mailto:contact@haumana-bien-etre.com"
                  className={styles.link}
                >
                  {chunks}
                </Link>
              ),
            })}
          </p>

          <p className={styles.sectionText}>{t("section4.p2")}</p>
        </motion.section>

        <motion.div
          className={styles.separator}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        ></motion.div>

        <motion.section
          className={styles.section}
          id="cookies"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className={styles.sectionTitle}>{t("section5.title")}</h2>
          <p className={styles.sectionText}>{t("section5.p1")}</p>
        </motion.section>

        <motion.div className={styles.separator}></motion.div>

        <motion.section
          className={styles.section}
          id="conservation"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className={styles.sectionTitle}>{t("section6.title")}</h2>
          <p className={styles.sectionText}>{t("section6.p1")}</p>
        </motion.section>

        <motion.div
          className={styles.separator}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        ></motion.div>

        <motion.section
          className={styles.section}
          id="droits"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className={styles.sectionTitle}>{t("section7.title")}</h2>
          <p className={styles.sectionText}>{t("section7.p1")}</p>
        </motion.section>

        <motion.div
          className={styles.separator}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        ></motion.div>
        <motion.section
          className={styles.section}
          id="droits"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className={styles.sectionTitle}>{t("section8.title")}</h2>
          <p className={styles.sectionText}>{t("section8.p1")}</p>
        </motion.section>
        <motion.div
          className={styles.separator}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        ></motion.div>
        <motion.section
          className={styles.section}
          id="contact"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className={styles.sectionTitle}>{t("section9.title")}</h2>
          <p className={styles.sectionText}>
            {t.rich("section9.p1", {
              email: (chunks) => (
                <Link
                  href="mailto:contact@haumana-bien-etre.com"
                  className={styles.link}
                >
                  {chunks}
                </Link>
              ),
            })}
          </p>
        </motion.section>
      </section>
    </main>
  );
}
