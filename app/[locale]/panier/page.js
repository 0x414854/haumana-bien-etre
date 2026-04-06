"use client";

import styles from "@/styles/page/cartPage.module.css";
import { useCart } from "@/context/cartContext";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function CartPage() {
  const t = useTranslations("CartPage");
  const tMassage = useTranslations("ID");
  const { cart, removeFromCart, updateCartItemQty } = useCart();
  const locale = useLocale();

  // ✅ total général du panier
  const total = cart.reduce(
    (acc, item) => acc + item.priceStripe * item.qty,
    0,
  );

  const checkout = async () => {
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cart, locale }),
    });
    const data = await res.json();
    window.location.href = data.url; // redirection Stripe
  };

  if (cart.length === 0)
    return (
      <main className={styles.EmptyCartContainer}>
        <h1 className={styles.title}>{t("h1")}</h1>
        <p className={styles.emptyCart}>{t("empty_p")}</p>
      </main>
    );

  return (
    <main className={styles.cartContainer}>
      <h1 className={styles.title}>{t("h1")}</h1>
      {/* <h1>Votre panier</h1> */}
      <div className={styles.container}>
        <ul className={styles.items}>
          {cart.map((item) => (
            <li key={item.id} className={styles.item}>
              <Link
                href={`/massages/${item.category}/${item.id}`} // ← ou l’URL réelle de ton produit
                className={styles.itemLink}
              >
                <img
                  src={item.images[0]}
                  alt={tMassage(`${item.id}.name`)}
                  className={styles.itemImage}
                />

                <div className={styles.infosContainer}>
                  <div className={styles.infos}>
                    <div className={styles.name}>
                      <h2>{tMassage(`${item.id}.name`)}</h2>
                    </div>

                    <div className={styles.qtyContainer}>
                      <div className={styles.qty}>
                        <button
                          className={styles.qtyButton}
                          onClick={(e) => {
                            e.preventDefault(); // empêche le clic d’ouvrir la page
                            updateCartItemQty(
                              item.id,
                              Math.max(1, item.qty - 1),
                            );
                          }}
                          aria-label="Réduire la quantité"
                        >
                          −
                        </button>
                        <span className={styles.qtyValue}>{item.qty}</span>
                        <button
                          className={styles.qtyButton}
                          onClick={(e) => {
                            e.preventDefault();
                            updateCartItemQty(item.id, item.qty + 1);
                          }}
                          aria-label="Augmenter la quantité"
                        >
                          +
                        </button>
                      </div>

                      <div className={styles.priceContainer}>
                        {" × "}
                        {(item.price / 100).toFixed(2)} € ={" "}
                        <strong className={styles.price}>
                          {((item.price * item.qty) / 100).toFixed(2)} €
                        </strong>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={(e) => {
                      e.preventDefault(); // évite la redirection
                      removeFromCart(item.id);
                    }}
                    className={styles.removeArticle}
                  >
                    Retirer
                  </button>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        {/* ✅ total général */}
        <div className={styles.totalContainer}>
          <h2>Total : {(total / 100).toFixed(2)} €</h2>

          <button onClick={checkout}>Payer</button>
        </div>
      </div>
    </main>
  );
}
