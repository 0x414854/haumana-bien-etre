"use client";

import styles from "@/styles/page/entreprise.module.css";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";

import CorporateImg from "@/public/images/corporation.png";
import IconRelax from "@/public/icons/iconRelax.svg";
import IconCoaching from "@/public/icons/iconCoaching.svg";
import IconEvent from "@/public/icons/iconEvent.svg";

export default function EntreprisePage() {
  return (
    <main className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: -100, scale: 0 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            Solutions Bien-être pour votre Entreprise
          </motion.h1>
          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: -100, scale: 0 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            Offrez à vos collaborateurs des expériences uniques de détente et de
            performance durable.
          </motion.p>
          <motion.a
            href="/contact-et-horaire#form"
            className={styles.ctaBtn}
            initial={{ opacity: 0, opacity: 0 }}
            animate={{ opacity: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            Demandez un devis pour votre entreprise →
          </motion.a>
        </div>
        <motion.div
          className={styles.heroImage}
          initial={{ opacity: 0, y: -100, scale: 0 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Image src={CorporateImg} alt="Bien-être entreprise" fill />
        </motion.div>
      </section>

      {/* Services / Avantages */}
      <section className={styles.features}>
        <h2 className={styles.sectionTitle}>Nos Services Premium</h2>
        <div className={styles.cards}>
          <motion.div
            className={styles.card}
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Image src={IconRelax} alt="Relaxation" width={60} height={60} />
            <h3>Massage en entreprise</h3>
            <p>
              Des séances de relaxation directement au bureau pour réduire le
              stress et augmenter la productivité.
            </p>
          </motion.div>
          <motion.div
            className={styles.card}
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Image src={IconCoaching} alt="Coaching" width={60} height={60} />
            <h3>Ateliers & Coaching</h3>
            <p>
              Des ateliers personnalisés pour améliorer le bien-être et la
              cohésion de vos équipes.
            </p>
          </motion.div>
          <motion.div
            className={styles.card}
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Image src={IconEvent} alt="Événements" width={60} height={60} />
            <h3>Événements sur-mesure</h3>
            <p>
              Des expériences premium pour vos séminaires, team-building ou
              conférences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA final */}
      <motion.section
        className={styles.finalCTA}
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2>Prêt à offrir une expérience bien-être à vos équipes ?</h2>
        <p>
          Contactez-nous dès maintenant pour un accompagnement personnalisé.
        </p>
        <Link href="/contact-et-horaire#form" className={styles.ctaBtn}>
          Demandez un devis pour votre entreprise →
        </Link>
      </motion.section>
    </main>
  );
}
