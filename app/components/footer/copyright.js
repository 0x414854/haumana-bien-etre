"use client";
import styles from "@/styles/footer/copyright.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Copyright() {
  return (
    <section className={styles.copyrightContainer}>
      <motion.div
        className={styles.copyright}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <p>© 2026</p>
        <span>Haumana Bien-être</span>
      </motion.div>
      <motion.div
        className={styles.creator}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Powered with 🖤 by{" "}
        <Link
          href="https://www.arthurbarraud.me"
          target="_blank"
          rel="noopener noreferrer"
        >
          Arthur Barraud
        </Link>
      </motion.div>
    </section>
  );
}
