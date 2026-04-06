"use client";
import styles from "@/styles/page/legalNotice.module.css";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function LegalNotices() {
  const t = useTranslations("LegalNotices");
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
        {/* Éditeur */}
        <motion.section
          className={styles.section}
          id="editeur"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className={styles.sectionTitle}>{t("section1.title")}</h2>

          <p className={styles.sectionText}>
            {t.rich("section1.p1", {
              law: (chunks) => (
                <Link
                  href="https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000049577522"
                  className={styles.link}
                  target="_blank"
                >
                  {chunks}
                </Link>
              ),
              site: (chunks) => <strong>{chunks}</strong>,
            })}
          </p>

          <p className={styles.sectionText}>
            {t.rich("section1.p2", {
              strong: (chunks) => <strong>{chunks}</strong>,
              infos: (chunks) => <span className={styles.infos}>{chunks}</span>,
              br: () => <br />,
              email: (chunks) => (
                <Link
                  href="mailto:contact@haumana-bien-etre.com"
                  className={styles.link}
                >
                  {chunks}
                </Link>
              ),
              phone: (chunks) => (
                <Link href="tel:+33652693287" className={styles.link}>
                  {chunks}
                </Link>
              ),
              webmaster: (chunks) => (
                <Link
                  href="https://www.arthurbarraud.me"
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
        {/* Hébergeur */}
        <motion.section
          className={styles.section}
          id="hebergeur"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className={styles.sectionTitle}>{t("section2.title")}</h2>
          <p className={styles.sectionText}>
            Vercel Inc. <br />
            340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis <br />
            {t("section2.website")} :{" "}
            <Link
              href="https://vercel.com"
              className={styles.link}
              target="_blank"
            >
              https://vercel.com
            </Link>
          </p>
        </motion.section>
        <motion.div
          className={styles.separator}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        ></motion.div>

        {/* Propriété intellectuelle */}
        <motion.section
          className={styles.section}
          id="propriete-intellectuelle"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className={styles.sectionTitle}>{t("section3.title")}</h2>
          <p className={styles.sectionText}>
            {t.rich("section3.text", {
              strong: (chunks) => <strong>{chunks}</strong>,
              br: () => <br />,
            })}
          </p>
        </motion.section>
        <div className={styles.separator}></div>

        {/* RGPD */}
        <motion.section
          className={styles.section}
          id="rgpd"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className={styles.sectionTitle}>{t("section4.title")}</h2>

          <p className={styles.sectionText}>
            {t.rich("section4.p1", {
              strong: (chunks) => <strong>{chunks}</strong>,
            })}
          </p>

          <p className={styles.sectionText}>{t("section4.p2")}</p>

          <p className={styles.sectionText}>
            {t.rich("section4.p3", {
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

          <p className={styles.sectionText}>
            {t.rich("section4.p4", {
              privacy: (chunks) => (
                <Link
                  href="/politique-de-confidentialite"
                  className={styles.link}
                >
                  {chunks}
                </Link>
              ),
            })}
          </p>

          <p className={styles.sectionText}>{t("section4.p5")}</p>
        </motion.section>

        <motion.div
          className={styles.separator}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        ></motion.div>

        {/* COOKIES */}
        <motion.section
          className={styles.section}
          id="cookies"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className={styles.sectionTitle}>{t("section5.title")}</h2>

          <p className={styles.sectionText}>
            {t.rich("section5.p1", {
              website: (chunks) => (
                <span className={styles.website}>{chunks}</span>
              ),
            })}
          </p>

          <p className={styles.sectionText}>{t("section5.p2")}</p>

          <div className={styles.sectionText}>
            <p>{t("section5.introList")}</p>

            <ul>
              <li>
                {t.rich("section5.cookie1", {
                  strong: (chunks) => <strong>{chunks}</strong>,
                })}
              </li>

              <li>
                {t.rich("section5.cookie2", {
                  strong: (chunks) => <strong>{chunks}</strong>,
                })}
              </li>

              <li>
                {t.rich("section5.cookie3", {
                  strong: (chunks) => <strong>{chunks}</strong>,
                })}
              </li>
            </ul>
          </div>

          <p className={styles.sectionText}>{t("section5.p3")}</p>

          <p className={styles.sectionText}>{t("section5.p4")}</p>

          <p className={styles.sectionText}>
            {t.rich("section5.p5", {
              privacy: (chunks) => (
                <Link
                  href="/politique-de-confidentialite"
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

        {/* Données personnelles */}
        <motion.section
          className={styles.section}
          id="responsabilité"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className={styles.sectionTitle}>{t("section6.title")}</h2>

          <p className={styles.sectionText}>
            {t.rich("section6.p1", {
              strong: (chunks) => <strong>{chunks}</strong>,
              website: (chunks) => (
                <span className={styles.website}>{chunks}</span>
              ),
            })}
          </p>

          <p className={styles.sectionText}>
            {t.rich("section6.p2", {
              strong: (chunks) => <strong>{chunks}</strong>,
            })}
          </p>

          <p className={styles.sectionText}>
            {t.rich("section6.p3", {
              strong: (chunks) => <strong>{chunks}</strong>,
            })}
          </p>

          <div className={styles.sectionText}>
            <p>
              {t.rich("section6.introList", {
                strong: (chunks) => <strong>{chunks}</strong>,
              })}
            </p>

            <ul>
              <li>{t("section6.li1")}</li>
              <li>{t("section6.li2")}</li>
              <li>{t("section6.li3")}</li>
              <li>{t("section6.li4")}</li>
            </ul>
          </div>

          <p className={styles.sectionText}>
            {t.rich("section6.p4", {
              strong: (chunks) => <strong>{chunks}</strong>,
            })}
          </p>

          <p className={styles.sectionText}>
            {t.rich("section6.p5", {
              strong: (chunks) => <strong>{chunks}</strong>,
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

        {/* Cookies */}
        <motion.section
          className={styles.section}
          id="lien-externes"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className={styles.sectionTitle}>{t("section7.title")}</h2>

          <p className={styles.sectionText}>
            {t.rich("section7.p1", {
              website: (chunks) => (
                <span className={styles.website}>{chunks}</span>
              ),
            })}
          </p>

          <p className={styles.sectionText}>
            {t.rich("section7.p2", {
              strong: (chunks) => <strong>{chunks}</strong>,
            })}
          </p>

          <p className={styles.sectionText}>
            {t.rich("section7.p3", {
              strong: (chunks) => <strong>{chunks}</strong>,
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

        {/* Droit applicable */}
        <motion.section
          className={styles.section}
          id="droit"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className={styles.sectionTitle}>{t("section8.title")}</h2>
          <p className={styles.sectionText}>{t("section8.text")}</p>
        </motion.section>
      </section>
    </main>
  );
}
