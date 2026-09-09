"use client";

import styles from "@/styles/page/success.module.css";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function SuccessPage() {
  const searchParams = useSearchParams();

  const sessionId = searchParams.get("session_id");

  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getOrder() {
      try {
        if (!sessionId) {
          throw new Error("Session de paiement introuvable");
        }

        const response = await fetch(
          `/api/checkout/session?session_id=${sessionId}`,
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Impossible de récupérer la commande");
        }

        setOrder(data);
      } catch (error) {
        console.error(error);

        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    getOrder();
  }, [sessionId]);

  /* =========================
VÉRIFICATION DU PAIEMENT
========================= */

  if (loading) {
    return (
      <Suspense fallback={<p>Vérification de votre paiement...</p>}>
        <main className={styles.successPage}>
          {" "}
          <section className={styles.stateContainer}>
            {" "}
            <div className={styles.loader} />
            <h1>Vérification du paiement</h1>
            <p>Nous vérifions la confirmation de votre paiement.</p>
            <span className={styles.loadingText}>Veuillez patienter...</span>
          </section>
        </main>
      </Suspense>
    );
  }

  /* =========================
ERREUR
========================= */

  if (error) {
    return (
      <Suspense fallback={<p>Vérification de votre paiement...</p>}>
        <main className={styles.successPage}>
          <section className={`${styles.stateContainer} ${styles.errorState}`}>
            {" "}
            <div className={styles.errorIcon}>!</div>
            <h1>Une erreur est survenue</h1>
            <p>
              Nous n'avons pas pu récupérer les informations de votre commande.
            </p>
            <div className={styles.errorMessage}>{error}</div>
            <a href="/" className={styles.backButton}>
              Retour à l'accueil
            </a>
          </section>
        </main>
      </Suspense>
    );
  }

  /* =========================
SUCCÈS
========================= */

  return (
    <Suspense fallback={<p>Vérification de votre paiement...</p>}>
      <main className={styles.successPage}>
        {" "}
        <div className={styles.container}>
          {" "}
          <section className={styles.confirmation}>
            {" "}
            <div className={styles.successIcon}>✓</div>
            <h1>Paiement confirmé</h1>
            <p className={styles.subtitle}>
              Merci {order.customer?.name || ""} !
              <br />
              Votre paiement a bien été reçu.
            </p>
          </section>
          {/* =========================
        INFORMATIONS COMMANDE
    ========================= */}
          <section className={styles.card}>
            <div className={styles.cardHeader}>
              <h2>Informations de la commande</h2>

              <span className={styles.status}>{order.paymentStatus}</span>
            </div>

            <div className={styles.orderInfo}>
              <div>
                <span>Numéro de commande</span>

                <strong className={styles.orderId}>{order.sessionId}</strong>
              </div>

              <div>
                <span>Total</span>

                <strong>{(order.amountTotal / 100).toFixed(2)} €</strong>
              </div>
            </div>
          </section>
          {/* =========================
        PRODUITS
    ========================= */}
          <section className={styles.card}>
            <h2>Votre commande</h2>

            <div className={styles.products}>
              {order.items?.map((item) => (
                <article className={styles.product} key={item.id}>
                  {item.image && <img src={item.image} alt={item.name} />}

                  <div className={styles.productInfo}>
                    <h3>{item.name}</h3>

                    <span>Quantité : {item.quantity}</span>
                  </div>

                  <strong className={styles.price}>
                    {(item.amountTotal / 100).toFixed(2)} €
                  </strong>
                </article>
              ))}
            </div>
          </section>
          {/* =========================
        CLIENT
    ========================= */}
          <section className={styles.card}>
            <h2>Informations client</h2>

            <div className={styles.customerInfo}>
              <div>
                <span>Nom</span>

                <strong>{order.customer?.name}</strong>
              </div>

              <div>
                <span>Email</span>

                <strong>{order.customer?.email}</strong>
              </div>

              {order.customer?.phone && (
                <div>
                  <span>Téléphone</span>

                  <strong>{order.customer.phone}</strong>
                </div>
              )}
            </div>
          </section>
        </div>
      </main>
    </Suspense>
  );
}
