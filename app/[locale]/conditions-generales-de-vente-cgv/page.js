"use client";
import styles from "@/styles/page/cgv.module.css";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function CGV() {
  const t = useTranslations("CGV");

  return (
    <main className={styles.mainContainer}>
      {/* HEADER */}
      <section className={styles.titleContainer}>
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t("title")}
        </motion.h1>

        <motion.span
          className={styles.update}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {t("update")}
        </motion.span>
      </section>

      {/* CONTENT */}
      <section className={styles.sectionsContainer}>
        {/* 1 */}
        <Section title={t("s1.title")}>
          <p>{t("s1.p1")}</p>
          <p>
            {t.rich("s1.p2", {
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
            })}
          </p>
          <p>
            {t.rich("s1.p3", {
              br: () => <br />,
            })}
          </p>
          <p>
            {t.rich("s1.p4", {
              br: () => <br />,
            })}
          </p>
          <p>
            {t.rich("s1.p5", {
              br: () => <br />,
            })}
          </p>
        </Section>

        <Separator />

        {/* 2 */}
        <Section title={t("s2.title")}>
          <p>{t("s2.p1")}</p>

          <ul className={styles.list}>
            <li>{t("s2.li1")}</li>
            <li>{t("s2.li2")}</li>
            <li>{t("s2.li3")}</li>
            <li>{t("s2.li4")}</li>
            <li>{t("s2.li5")}</li>
          </ul>

          <p>
            {t.rich("s2.p2", {
              strong: (chunks) => <strong>{chunks}</strong>,
            })}
          </p>

          <p className={styles.important}>
            {t.rich("s2.p3", {
              br: () => <br />,
            })}
          </p>

          <p>
            {t.rich("s2.p4", {
              br: () => <br />,
              strong: (chunks) => <strong>{chunks}</strong>,
            })}
          </p>
        </Section>

        <Separator />

        {/* 3 */}
        <Section title={t("s3.title")}>
          <p>{t("s3.p1")}</p>

          <ul className={styles.list}>
            <li>{t("s3.li1")}</li>
            <li>{t("s3.li2")}</li>
            <li>{t("s3.li3")}</li>
            <li>{t("s3.li4")}</li>
          </ul>

          <p>{t("s3.p2")}</p>

          <p className={styles.warning}>
            <br></br>
            {t("s3.warning")}
          </p>

          <p>
            <br></br>
            {t("s3.p3")}
          </p>

          <ul className={styles.list}>
            <li>{t("s3.li_1_1")}</li>
            <li>{t("s3.li_1_2")}</li>
            <li>{t("s3.li_1_3")}</li>
          </ul>

          <p>{t("s3.p4")}</p>

          <ul className={styles.list}>
            <li>{t("s3.li_2_1")}</li>
            <li>{t("s3.li_2_2")}</li>
            <li>{t("s3.li_2_3")}</li>
          </ul>

          <p className={styles.important}>{t("s3.p5")}</p>
        </Section>

        <Separator />

        {/* 4 */}
        <Section title={t("s4.title")}>
          <div className={styles.subSection}>
            <h3 className={styles.subTitle}>{t("s4.sub1.title")}</h3>
            <p>{t("s4.sub1.p1")}</p>
          </div>

          <div className={styles.subSection}>
            <h3 className={styles.subTitle}>{t("s4.sub2.title")}</h3>
            <p>{t("s4.sub2.p1")}</p>

            <ul>
              <li>{t("s4.sub2.li1")}</li>
              <li>{t("s4.sub2.li2")}</li>
            </ul>

            <p>{t("s4.sub2.p2")}</p>
          </div>

          <div className={styles.subSection}>
            <h3 className={styles.subTitle}>{t("s4.sub3.title")}</h3>
            <p>{t("s4.sub3.p1")}</p>

            <ul>
              <li>{t("s4.sub3.li1")}</li>
              <li>{t("s4.sub3.li2")}</li>
              <li>{t("s4.sub3.li3")}</li>
              <li>{t("s4.sub3.li4")}</li>
              <li>{t("s4.sub3.li5")}</li>
            </ul>
          </div>
          <p>{t("s4.sub3.p2")}</p>
        </Section>

        <Separator />

        {/* 5 */}
        <Section title={t("s5.title")}>
          <p>{t("s5.p1")}</p>

          <ul>
            <li>{t("s5.li1")}</li>
            <li>{t("s5.li2")}</li>
            <li>{t("s5.li3")}</li>
          </ul>

          <p>{t("s5.p2")}</p>

          <ul>
            <li>
              {t.rich("s5.li1_1", {
                br: () => <br />,
              })}
            </li>
            <li>{t("s5.li1_2")}</li>
          </ul>

          <p>{t("s5.p3")}</p>

          <ul>
            <li>{t("s5.li_2_1")}</li>
            <li>{t("s5.li_2_2")}</li>
            <li>{t("s5.li_2_3")}</li>
            <li>{t("s5.li_2_4")}</li>
          </ul>

          <p>{t("s5.p4")}</p>
        </Section>

        <Separator />

        {/* 6 */}
        <Section title={t("s6.title")}>
          <p>{t("s6.p1")}</p>
          <p>
            {t.rich("s6.p2", {
              br: () => <br />,
            })}
          </p>
          <p>
            {t.rich("s6.p3", {
              br: () => <br />,
            })}
          </p>
          <p>
            {t.rich("s6.p4", {
              br: () => <br />,
            })}
          </p>
        </Section>

        <Separator />

        {/* 7 */}
        <Section title={t("s7.title")}>
          <p>{t("s7.p1")}</p>

          {/* SUBSECTION 7.1 */}
          <div className={styles.subSection}>
            <h3 className={styles.subTitle}>{t("s7.sub1.title")}</h3>
            <p>{t("s7.sub1.p1")}</p>
            <ul>
              <li>{t("s7.sub1.li1")}</li>
              <li>{t("s7.sub1.li2")}</li>
              <li>{t("s7.sub1.li3")}</li>
            </ul>
            <p>{t("s7.sub1.p2")}</p>
            <p>{t.rich("s7.sub1.p3", { br: () => <br /> })}</p>
          </div>

          {/* SUBSECTION 7.2 */}
          <div className={styles.subSection}>
            <h3 className={styles.subTitle}>{t("s7.sub2.title")}</h3>
            <p>{t("s7.sub2.p1")}</p>
            <ul>
              <li>{t("s7.sub2.li1")}</li>
              <li>{t("s7.sub2.li2")}</li>
            </ul>
            <p>{t("s7.sub2.p2")}</p>
            <p>{t.rich("s7.sub2.p3", { br: () => <br /> })}</p>
            <p>{t("s7.sub2.p4")}</p>
            <p>{t.rich("s7.sub2.p5", { br: () => <br /> })}</p>
            <ul>
              <li>{t("s7.sub2.li1_1")}</li>
              <li>{t("s7.sub2.li1_2")}</li>
            </ul>
          </div>

          {/* SUBSECTION 7.3 */}
          <div className={styles.subSection}>
            <h3 className={styles.subTitle}>{t("s7.sub3.title")}</h3>
            <p>{t("s7.sub3.p1")}</p>
            <ul>
              <li>{t("s7.sub3.li1")}</li>
              <li>{t("s7.sub3.li2")}</li>
            </ul>
            <p>{t.rich("s7.sub3.p2", { br: () => <br /> })}</p>
            <p>{t.rich("s7.sub3.p3", { br: () => <br /> })}</p>
          </div>

          {/* SUBSECTION 7.4 */}
          <div className={styles.subSection}>
            <h3 className={styles.subTitle}>{t("s7.sub4.title")}</h3>
            <p>{t("s7.sub4.p1")}</p>
            <ul>
              <li>{t("s7.sub4.li1")}</li>
              <li>{t("s7.sub4.li2")}</li>
              <li>{t("s7.sub4.li3")}</li>
              <li>{t("s7.sub4.li14")}</li>
              <li>{t("s7.sub4.li5")}</li>
            </ul>
            <p>{t("s7.sub4.p2")}</p>
            <ul>
              <li>{t("s7.sub4.li1_1")}</li>
              <li>{t("s7.sub4.li1_2")}</li>
            </ul>
          </div>

          {/* SUBSECTION 7.5 */}
          <div className={styles.subSection}>
            <h3 className={styles.subTitle}>{t("s7.sub5.title")}</h3>
            <p>{t("s7.sub5.p1")}</p>
            <ul>
              <li>{t("s7.sub5.li1")}</li>
              <li>{t("s7.sub5.li2")}</li>
              <li>{t("s7.sub5.li3")}</li>
            </ul>
            <p>{t("s7.sub5.p2")}</p>
          </div>

          {/* SUBSECTION 7.6 */}
          <div className={styles.subSection}>
            <h3 className={styles.subTitle}>{t("s7.sub6.title")}</h3>
            <p>{t("s7.sub6.p1")}</p>
            <ul>
              <li>{t("s7.sub6.li1")}</li>
              <li>{t("s7.sub6.li2")}</li>
            </ul>
            <p>{t("s7.sub6.p2")}</p>
            <ul>
              <li>{t("s7.sub6.li1_1")}</li>
              <li>{t("s7.sub6.li1_2")}</li>
              <li>{t("s7.sub6.li1_3")}</li>
            </ul>
          </div>

          {/* SUBSECTION 7.7 */}
          <div className={styles.subSection}>
            <h3 className={styles.subTitle}>{t("s7.sub7.title")}</h3>
            <p>{t("s7.sub7.p1")}</p>
            <ul>
              <li>{t("s7.sub7.li1_1")}</li>
              <li>{t("s7.sub7.li1_2")}</li>
            </ul>
            <p>{t("s7.sub7.p2")}</p>
          </div>
        </Section>

        <Separator />

        {/* 8 */}
        <Section title={t("s8.title")}>
          <p>
            {t.rich("s8.p1", {
              law: (chunks) => (
                <Link
                  href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000032226842/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  {chunks}
                </Link>
              ),
            })}
          </p>

          <p>{t.rich("s8.p2", { br: () => <br /> })}</p>

          <ul>
            <li>{t("s8.li1")}</li>
            <li>{t("s8.li2")}</li>
          </ul>
        </Section>

        <Separator />

        {/* 9 */}
        <Section title={t("s9.title")}>
          {/* Annulation par le Client */}
          <p>
            {t.rich("s9.p1", { strong: (chunks) => <strong>{chunks}</strong> })}
          </p>
          <ul>
            <li>{t("s9.li1")}</li>
            <li>{t("s9.li2")}</li>
            <li>{t("s9.li3")}</li>
            <li>{t("s9.li4")}</li>
          </ul>

          {/* Retard */}
          <p>
            {t.rich("s9.p2", { strong: (chunks) => <strong>{chunks}</strong> })}
          </p>
          <p>{t.rich("s9.p3", { br: () => <br /> })}</p>
          <ul>
            <li>{t("s9.li_1_1")}</li>
            <li>{t("s9.li_1_2")}</li>
          </ul>

          {/* Annulation par le Prestataire */}
          <p>
            {t.rich("s9.p4", { strong: (chunks) => <strong>{chunks}</strong> })}
          </p>
          <p>{t.rich("s9.p5", { br: () => <br /> })}</p>
          <ul>
            <li>{t.rich("s9.li_2_1", { br: () => <br /> })}</li>
            <li>{t("s9.li_2_2")}</li>
          </ul>
        </Section>

        <Separator />

        {/* 10 */}
        <Section title={t("s10.title")}>
          <p>{t("s10.p1")}</p>

          <ul>
            <li>{t("s10.li1")}</li>
            <li>{t("s10.li2")}</li>
            <li>{t("s10.li3")}</li>
          </ul>

          <p>{t("s10.p2")}</p>

          <p>{t.rich("s10.p3", { br: () => <br /> })}</p>

          <ul>
            <li>{t("s10.li_1_1")}</li>
            <li>{t("s10.li_1_2")}</li>
            <li>{t("s10.li_1_3")}</li>
          </ul>
        </Section>

        <Separator />

        {/* 11 */}
        <Section title={t("s11.title")}>
          <p>{t("s11.p1")}</p>

          <ul>
            <li>{t("s11.li1")}</li>
            <li>{t("s11.li2")}</li>
            <li>{t("s11.li3")}</li>
            <li>{t("s11.li4")}</li>
            <li>{t("s11.li5")}</li>
          </ul>

          <p>{t("s11.p2")}</p>

          <p>{t.rich("s11.p3", { br: () => <br /> })}</p>
        </Section>

        <Separator />

        {/* 12 */}
        <Section title={t("s12.title")}>
          <p>{t("s12.p1")}</p>

          <p>
            <br></br>
            {t("s12.p2")}
          </p>

          <ul>
            <li>{t("s12.li1")}</li>
            <li>{t("s12.li2")}</li>
            <li>{t("s12.li3")}</li>
            <li>{t("s12.li4")}</li>
          </ul>

          <p>
            <br></br>
            {t("s12.p3")}
          </p>
          <p>
            <br></br>
            {t("s12.p4")}
          </p>
        </Section>

        <Separator />

        {/* 13 */}
        <Section title={t("s13.title")}>
          <p>{t("s13.p1")}</p>

          <p>
            <br></br>
            {t("s13.p2")}
          </p>
          <ul>
            <li>{t("s13.li1")}</li>
            <li>{t("s13.li2")}</li>
            <li>{t("s13.li3")}</li>
            <li>{t("s13.li4")}</li>
          </ul>

          <p>
            <br></br>
            {t("s13.p3")}
          </p>
          <ul>
            <li>{t("s13.li_1_1")}</li>
            <li>{t("s13.li_1_2")}</li>
            <li>{t("s13.li_1_3")}</li>
          </ul>

          <p>
            <br></br>
            {t("s13.p4")}
          </p>
        </Section>

        <Separator />

        {/* 14 */}
        <Section title={t("s14.title")}>
          <p>{t("s14.p1")}</p>

          <p>{t.rich("s14.p2", { br: () => <br /> })}</p>

          <ul>
            <li>{t("s14.li1")}</li>
            <li>{t("s14.li2")}</li>
            <li>{t("s14.li3")}</li>
          </ul>

          <p>
            <br></br>
            {t("s14.p3")}
          </p>

          <p>
            <br></br>
            {t.rich("s14.p5", {
              legal: (chunks) => (
                <Link href="/mentions-legales" className={styles.link}>
                  {chunks}
                </Link>
              ),
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
        </Section>

        <Separator />

        {/* 15 */}
        <Section title={t("s15.title")}>
          <p>{t("s15.p1")}</p>
          <p>
            <br></br>
            {t("s15.p2")}
          </p>
        </Section>

        <Separator />

        {/* 16 */}
        <Section title={t("s16.title")}>
          <p>{t("s16.p1")}</p>

          <ul>
            <li>{t("s16.li1")}</li>
            <li>{t("s16.li2")}</li>
            <li>{t("s16.li3")}</li>
            <li>{t("s16.li4")}</li>
            <li>{t("s16.li5")}</li>
            <li>{t("s16.li6")}</li>
          </ul>

          <p>{t("s16.p2")}</p>
        </Section>

        <Separator />

        {/* 17 */}
        <Section title={t("s17.title")}>
          <p>{t("s17.p1")}</p>

          <p>{t.rich("s17.p2", { br: () => <br /> })}</p>

          <ul>
            <li>{t("s17.li1")}</li>
            <li>{t("s17.li2")}</li>
            <li>{t("s17.li3")}</li>
          </ul>

          {/* 17.1 */}
          <div className={styles.subSection}>
            <h3 className={styles.subTitle}>{t("s17.sub1.title")}</h3>
            <p>{t("s17.sub1.p1")}</p>
            <p>{t.rich("s17.sub1.p2", { br: () => <br /> })}</p>
          </div>

          {/* 17.2 */}
          <div className={styles.subSection}>
            <h3 className={styles.subTitle}>{t("s17.sub2.title")}</h3>
            <p>{t("s17.sub2.p1")}</p>
          </div>

          {/* 17.3 */}
          <div className={styles.subSection}>
            <h3 className={styles.subTitle}>{t("s17.sub3.title")}</h3>
            <p>{t("s17.sub3.p1")}</p>
          </div>
        </Section>

        <Separator />

        {/* 18 */}
        <Section title={t("s18.title")}>
          {/* 18.1 */}
          <div className={styles.subSection}>
            <h3 className={styles.subTitle}>{t("s18.sub1.title")}</h3>
            <p>{t("s18.sub1.p1")}</p>
            <p>{t("s18.sub1.p2")}</p>

            <ul>
              <li>{t("s18.sub1.li1")}</li>
              <li>
                {t.rich("s18.sub1.li2", {
                  form: (chunks) => (
                    <Link
                      href="/contact-et-horaire#form"
                      className={styles.link}
                    >
                      {chunks}
                    </Link>
                  ),
                })}
              </li>
              <li>{t("s18.sub1.li3")}</li>
            </ul>

            <p>{t("s18.sub1.p3")}</p>
          </div>

          {/* 18.2 */}
          <div className={styles.subSection}>
            <h3 className={styles.subTitle}>{t("s18.sub2.title")}</h3>
            <p>{t("s18.sub2.p1")}</p>
            <p>{t("s18.sub2.p2")}</p>
          </div>

          {/* 18.3 */}
          <div className={styles.subSection}>
            <h3 className={styles.subTitle}>{t("s18.sub3.title")}</h3>
            <p>{t("s18.sub3.p1")}</p>
            <p>{t("s18.sub3.p2")}</p>

            <ul>
              <li>{t("s18.sub3.li1")}</li>
              <li>{t("s18.sub3.li2")}</li>
            </ul>
          </div>

          {/* 18.4 */}
          <div className={styles.subSection}>
            <h3 className={styles.subTitle}>{t("s18.sub4.title")}</h3>
            <p>{t("s18.sub4.p1")}</p>

            <ul>
              <li>{t("s18.sub4.li1")}</li>
              <li>{t("s18.sub4.li2")}</li>
              <li>{t("s18.sub4.li3")}</li>
              <li>{t("s18.sub4.li4")}</li>
            </ul>
          </div>
        </Section>

        <Separator />

        {/* 19 */}
        <Section title={t("19.title")}>
          <p>{t("19.p1")}</p>

          <ul>
            <li>{t("19.li1")}</li>
            <li>{t("19.li2")}</li>
            <li>{t("19.li3")}</li>
            <li>{t("19.li4")}</li>
          </ul>

          {/* 19.1 */}
          <div className={styles.subSection}>
            <h3 className={styles.subTitle}>{t("19.sub1.title")}</h3>
            <p>{t("19.sub1.p1")}</p>
            <p>{t("19.sub1.p2")}</p>

            <ul>
              <li>{t("19.sub1.li1")}</li>
              <li>{t("19.sub1.li2")}</li>
            </ul>
          </div>

          {/* 19.2 */}
          <div className={styles.subSection}>
            <h3 className={styles.subTitle}>{t("19.sub2.title")}</h3>
            <p>{t("19.sub2.p1")}</p>

            <ul>
              <li>{t("19.sub2.li1")}</li>
              <li>{t("19.sub2.li2")}</li>
              <li>{t("19.sub2.li3")}</li>
            </ul>

            <p>{t("19.sub2.p2")}</p>
          </div>

          {/* 19.3 */}
          <div className={styles.subSection}>
            <h3 className={styles.subTitle}>{t("19.sub3.title")}</h3>
            <p>{t("19.sub3.p1")}</p>
            <p>{t("19.sub3.p2")}</p>
            <p>{t("19.sub3.p3")}</p>
          </div>
        </Section>
      </section>
    </main>
  );
}

/* COMPONENTS */

function Section({ title, children }) {
  return (
    <motion.section
      className={styles.section}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div className={styles.sectionText}>{children}</div>
    </motion.section>
  );
}

function Separator() {
  return (
    <motion.div
      className={styles.separator}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    />
  );
}
