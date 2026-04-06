import styles from "@/styles/content/steps.module.css";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function Steps({ type }) {
  const t = useTranslations("StepsComponents");

  const steps = [1, 2, 3].map((id) => {
    const items = [1, 2, 3]
      .map((i) => {
        const key = `${type}.steps.list.item_${id}_${i}`;
        return t.has(key) ? t(key) : null;
      })
      .filter(Boolean);

    return {
      id,
      title: t(`${type}.steps.${id}`),
      items,
    };
  });

  return (
    <section className={styles.stepsSection}>
      <h2 className={styles.title}>{t(`${type}.title`)}</h2>

      <ul className={styles.steps}>
        {steps.map((step, index) => (
          <motion.li
            key={step.id}
            className={styles.step}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className={styles.numberWrap}>
              <div className={styles.number}>{step.id}</div>

              <div className={styles.coverWrap}>
                <div className={styles.numberCover}></div>
              </div>
            </div>

            <div className={styles.content}>
              <h3 className={styles.stepTitle}>{step.title}</h3>
            </div>

            <ul className={styles.stepContent}>
              {step.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
