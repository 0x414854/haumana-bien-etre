"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import styles from "@/styles/content/services.module.css";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Services() {
  const t = useTranslations("Benefits");

  const services = [
    {
      title: t("title_1"),
      description: t("description_1"),
      cta: t("cta_1"),
      image: "/images/services/services_1.png",
      alt: "Massage relaxant",
      href: "/massages/soins-femme",
    },
    {
      title: t("title_2"),
      description: t("description_2"),
      cta: t("cta_2"),
      image: "/images/services/services_2.png",
      alt: "Massage relaxant",
      href: "/massages/soins-femme",
    },
    {
      title: t("title_3"),
      description: t("description_3"),
      cta: t("cta_3"),
      image: "/images/services/services_3.png",
      alt: "Massage bébé",
      href: "/massages/soins-bebe-et-enfants",
    },
    {
      title: t("title_4"),
      description: t("description_4"),
      cta: t("cta_4"),
      image: "/images/services/services_4.png",
      alt: "Forfaits massage",
      href: "/massages/forfaits",
    },
    {
      title: t("title_5"),
      description: t("description_5"),
      cta: t("cta_5"),
      image: "/images/services/services_5.png",
      alt: "Maquillage",
      href: "/maquillage",
    },
  ];
  const sectionRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const updateCarousel = (newIndex) => {
    if (isAnimating) return;
    setIsAnimating(true);

    const normalizedIndex = (newIndex + services.length) % services.length;

    setCurrentIndex(normalizedIndex);

    setTimeout(() => {
      setIsAnimating(false);
    }, 800);
  };

  const handleSwipe = () => {
    const swipeThreshold = 50;
    const diff = touchStartX.current - touchEndX.current;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) updateCarousel(currentIndex + 1);
      else updateCarousel(currentIndex - 1);
    }
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].screenX;
    handleSwipe();
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") updateCarousel(currentIndex - 1);
      else if (e.key === "ArrowRight") updateCarousel(currentIndex + 1);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  // SCROLL
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.parentElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const totalScroll = rect.height - windowHeight;
      const progress = Math.min(Math.max(-rect.top / totalScroll, 0), 1);

      const index = Math.round(progress * (services.length - 1));

      setCurrentIndex(index);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={styles.scrollSection}>
      <section
        ref={sectionRef}
        className={styles.servicesSection}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className={styles.carouselContainer}>
          <button
            className={`${styles.navArrow} ${styles.left}`}
            onClick={() => updateCarousel(currentIndex - 1)}
          >
            ‹
          </button>

          <div className={styles.carouselTrack}>
            {services.map((service, i) => {
              const offset =
                (i - currentIndex + services.length) % services.length;

              let className = styles.card;

              if (offset === 0) className += ` ${styles.center}`;
              else if (offset === 1) className += ` ${styles["right-1"]}`;
              else if (offset === services.length - 1)
                className += ` ${styles["left-1"]}`;
              else className += ` ${styles.hidden}`;

              return (
                <div
                  key={i}
                  className={className}
                  onClick={() => updateCarousel(i)}
                >
                  <Image
                    src={service.image}
                    width={350}
                    height={450}
                    alt={service.alt}
                  />
                </div>
              );
            })}
          </div>

          <button
            className={`${styles.navArrow} ${styles.right}`}
            onClick={() => updateCarousel(currentIndex + 1)}
          >
            ›
          </button>
        </div>

        {/* Infos du service actif */}
        <div className={styles.serviceInfo}>
          <motion.h2
            key={services[currentIndex].title}
            className={styles.serviceTitle}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {services[currentIndex].title}
          </motion.h2>

          <motion.p
            key={services[currentIndex].description}
            className={styles.serviceDescription}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            {services[currentIndex].description}
          </motion.p>

          <motion.div
            key={services[currentIndex].cta}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <Link
              href={services[currentIndex].href}
              className={styles.ctaButton}
            >
              {services[currentIndex].cta}
            </Link>
          </motion.div>
        </div>
      </section>
    </section>
  );
}

// "use client";

// import styles from "@/styles/content/services.module.css";
// import Image from "next/image";
// import Link from "next/link";
// import { useTranslations } from "next-intl";
// import HeartSVG from "@/app/components/heartSVG";

// import { motion } from "framer-motion";
// import Hero from "./hero";

// export default function Services() {
//   const t = useTranslations("Benefits");

//   // tableau des bénéfices
//   const services = [
//     {
//       title: t("title_1"),
//       description: t("description_1"),
//       cta: t("cta_1"),
//       image: "/images/services_1.png",
//       alt: "test",
//       href: "/massages",
//     },
//     {
//       title: t("title_2"),
//       description: t("description_2"),
//       cta: t("cta_2"),
//       image: "/images/services_2.png",
//       alt: "test",
//       href: "/massages/baby-teen",
//     },
//     {
//       title: t("title_3"),
//       description: t("description_3"),
//       cta: t("cta_3"),
//       image: "/images/services_3.png",
//       alt: "test",
//       href: "/massages/packages",
//     },
//     {
//       title: t("title_4"),
//       description: t("description_4"),
//       cta: t("cta_4"),
//       image: "/images/services_4.png",
//       alt: "test",
//       href: "/makeup",
//     },
//   ];

//   return (
//     <section className={styles.servicesSection}>
//       {/* <div className={styles.introContainer}>
//         <p>{t("intro")}</p>
//       </div> */}
//       {/* <motion.div
//         className={styles.svg}
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true }}
//       >
//         <HeartSVG />
//       </motion.div> */}

//       <div className={styles.servicesContainer}>
//         {services.map((service, i) => (
//           <div key={i} className={styles.serviceCard}>
//             <div className={styles.imageWrapper}>
//               <Image
//                 src={service.image}
//                 alt={service.alt}
//                 fill
//                 className={styles.image}
//               />
//             </div>

//             <div className={styles.content}>
//               <h3 className={styles.title}>{service.title}</h3>

//               <p>{service.description}</p>
//               <button className={styles.ctaButton}>
//                 <Link href={service.href}>{service.cta}</Link>
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
