"use client";
import styles from "@/styles/content/reviews.module.css";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function Reviews() {
  const t = useTranslations("Reviews");
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("/api/reviews")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setReviews(data.reviews);
      });
  }, []);

  const getWeeksAgo = (dateString) => {
    const reviewDate = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - reviewDate.getTime();
    return Math.floor(diffMs / (1000 * 60 * 60 * 24 * 7));
  };

  return (
    <section className={styles.reviewsSection}>
      <section className={styles.titleContainer}>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 100, scale: 0 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {t("h2")}
        </motion.h2>
        <motion.h3
          className={styles.subtitle}
          initial={{ opacity: 0, y: 100, scale: 0 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {t("h3")}
        </motion.h3>
      </section>
      <ul className={styles.reviewsContainer}>
        {reviews.map((review, index) => {
          const weeksAgo = getWeeksAgo(review.review_date);
          return (
            <motion.li
              key={review.id}
              className={styles.reviewCard}
              initial={{ opacity: 0, x: -50, y: -100 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className={styles.reviewHeader}>
                <div className={styles.header}>
                  <span className={styles.author}>{review.author_name}</span>
                  <time className={styles.date}>
                    il y a {weeksAgo} {weeksAgo > 1 ? "semaines" : "semaine"}
                  </time>
                </div>
                <div
                  className={styles.ratingCircle}
                  style={{
                    "--rating": review.rating,
                  }}
                >
                  <span className={styles.ratingValue}>{review.rating}</span>
                </div>{" "}
              </div>
              <p className={styles.comment}>{review.comment}</p>
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
}
