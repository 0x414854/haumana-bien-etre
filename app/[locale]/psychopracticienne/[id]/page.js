"use client";

import styles from "@/styles/page/id.module.css";
import Image from "next/image";
import { useState } from "react";
import { notFound, useParams } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useCart } from "@/context/cartContext";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";

import products from "@/lib/data/products.json";
import BackArrow from "@/public/icons/backArrow.png";
import SimilarProducts from "@/app/components/content/similarProduct";

export default function PageID() {
  const t = useTranslations("ID");

  const params = useParams();
  const { id } = params;

  const product = products.find((p) => p.id === id);

  const { addToCart } = useCart();

  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) return notFound();

  const tr = t.raw(id);

  const increase = () => setQty(qty + 1);
  const decrease = () => setQty(qty > 1 ? qty - 1 : 1);

  const handleClick = () => {
    addToCart(product, qty);
    setAdded(true);

    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <main className={styles.pageIdContainer}>
      <motion.div
        className={styles.backLink}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <Link href="/psychopracticienne">
          <Image src={BackArrow} alt="Back" width={22} height={22} />
          <span>{t("backPsycho")}</span>
        </Link>
      </motion.div>

      <motion.section
        className={styles.massageCard}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className={styles.imageWrapper}>
          <motion.img
            src={product.images[0]}
            alt={tr.name}
            className={styles.massageImage}
          />

          <div className={styles.content}>
            <h1 className={styles.massageTitle}>{tr.name}</h1>

            {tr.time && <p className={styles.massageTime}>{tr.time}</p>}
          </div>
        </div>
        <div className={styles.massageContent}>
          <h2 className={styles.titleOffer}>{tr.title}</h2>

          {Array.isArray(tr.description) ? (
            tr.description.map((paragraph, i) => (
              <p key={i} className={styles.massageDescription}>
                {paragraph}
              </p>
            ))
          ) : (
            <p className={styles.massageDescription}>{tr.description}</p>
          )}
          {tr.recommendation && (
            <p className={styles.massageRecommendation}>{tr.recommendation}</p>
          )}
          <ul className={styles.list}>
            {Object.values(tr.list).map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <div className={styles.footer}>
            <span className={styles.price}>{product.price}</span>

            <div className={styles.quantityControl}>
              <button className={styles.qtyBtn} onClick={decrease}>
                −
              </button>

              <input
                className={styles.qtyInput}
                type="number"
                min="1"
                value={qty}
                onChange={(e) => setQty(Number(e.target.value))}
              />

              <button className={styles.qtyBtn} onClick={increase}>
                +
              </button>
            </div>
          </div>
          <div className={styles.buttons}>
            <button onClick={handleClick} className={styles.addToCartBtn}>
              {added ? t("addedToCart") : t("addToCart")}
            </button>
            <a
              href="https://www.sumupbookings.com/haumana-bien-etre"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.buttonRes}
            >
              {t("reservation")}
            </a>
          </div>
        </div>
      </motion.section>

      <SimilarProducts currentProduct={product} allProducts={products} />
    </main>
  );
}
