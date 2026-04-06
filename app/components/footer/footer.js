"use client";

import styles from "@/styles/footer/footer.module.css";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Logo from "@/public/logo/logo_black.png";
import FacebookLogo from "@/public/icons/facebook.svg";
import FacebookLogoHover from "@/public/icons/facebook_hover.svg";
import InstaLogo from "@/public/icons/instagram.svg";
import InstaLogoHover from "@/public/icons/instagram_hover.svg";
import WhatsappLogo from "@/public/icons/whatsapp.svg";
import WhatsappLogoHover from "@/public/icons/whatsapp_hover.svg";

import Copyright from "@/app/components/footer/copyright";

export default function Footer() {
  const t = useTranslations("Footer");

  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function handleLocaleChange(newLocale) {
    router.replace(pathname, { locale: newLocale });
  }

  const openingHours = {
    0: null, // Dimanche fermé
    1: { open: { h: 9, m: 0 }, close: { h: 16, m: 0 } }, // Lundi
    2: { open: { h: 9, m: 0 }, close: { h: 16, m: 0 } },
    3: { open: { h: 9, m: 0 }, close: { h: 13, m: 0 } },
    4: { open: { h: 9, m: 0 }, close: { h: 16, m: 0 } },
    5: { open: { h: 9, m: 0 }, close: { h: 16, m: 0 } },
    6: null, // Samedi fermé
  };

  const [now, setNow] = useState(new Date());

  useEffect(() => {
    // Fonction qui met à jour le temps
    const tick = () => setNow(new Date());

    // Appel immédiat
    tick();

    // Calcul du délai jusqu'au début de la prochaine minute
    const msToNextMinute = (60 - new Date().getSeconds()) * 1000;

    // Timeout pour démarrer exactement au début de la minute
    const timeout = setTimeout(() => {
      tick();

      // Intervalle ensuite toutes les minutes pile
      const interval = setInterval(tick, 60000);

      // Nettoyage
      return () => clearInterval(interval);
    }, msToNextMinute);

    return () => clearTimeout(timeout);
  }, []);

  const today = now.getDay();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const todaySchedule = openingHours[today];

  let statusMessage = t("infos.status.closed");
  let hoursLabel = t("infos.status.closed_today");
  let statusColor = "red"; // par défaut

  const formatTime = (h, m) => `${h}h${m > 0 ? m : ""}`;

  if (todaySchedule) {
    const openMinutes = todaySchedule.open.h * 60 + todaySchedule.open.m;
    const closeMinutes = todaySchedule.close.h * 60 + todaySchedule.close.m;

    hoursLabel = `${formatTime(todaySchedule.open.h, todaySchedule.open.m)} - ${formatTime(todaySchedule.close.h, todaySchedule.close.m)}`;

    const minutesBeforeOpen = openMinutes - currentMinutes;
    const minutesBeforeClose = closeMinutes - currentMinutes;

    const isOpen =
      currentMinutes >= openMinutes && currentMinutes < closeMinutes;
    const isOpeningSoon =
      currentMinutes < openMinutes && minutesBeforeOpen <= 60;
    const isClosingSoon = isOpen && minutesBeforeClose <= 30;

    if (isOpen) {
      if (isClosingSoon) {
        statusMessage = t("infos.status.closingSoon", {
          minutes: minutesBeforeClose,
        });
        statusColor = "orange";
      } else {
        statusMessage = t("infos.status.open");
        statusColor = "green";
      }
    } else if (isOpeningSoon) {
      statusMessage = t("infos.status.openingSoon", {
        time: formatTime(todaySchedule.open.h, todaySchedule.open.m),
      });
      statusColor = "orange";
    } else {
      statusMessage = t("infos.status.closed");
      statusColor = "red";
    }
  }

  const dayName = now.toLocaleDateString(locale, { weekday: "long" });

  const socials = [
    {
      name: "Facebook",
      normal: FacebookLogo,
      hover: FacebookLogoHover,
      link: "https://www.facebook.com/profile.php?id=61553767333204",
      alt: "Logo Facebook Hauma Bien-être",
    },
    {
      name: "Instagram",
      normal: InstaLogo,
      hover: InstaLogoHover,
      link: "https://www.instagram.com/haumanabienetre/",
      alt: "Logo Instagram Hauma Bien-être",
    },
    {
      name: "WhatsApp",
      normal: WhatsappLogo,
      hover: WhatsappLogoHover,
      link: "https://wa.me/+33652693287",
      alt: "Logo WhatsApp Hauma Bien-être",
    },
  ];

  return (
    <footer className={styles.footer}>
      <section className={styles.sections}>
        <motion.div
          className={styles.brandContainer}
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className={styles.imageWrapper}>
            <Image
              src={Logo}
              width={280}
              height={70}
              alt="Logo Haumana Bien-être - Présilly"
            />
          </div>
          <div className={styles.container}>
            <p className={styles.description}>{t("brand.description")}</p>
            <ul className={styles.langs}>
              <li>
                <button
                  onClick={() => handleLocaleChange("fr")}
                  className={locale === "fr" ? styles.active : styles.lang}
                >
                  {t("brand.lang_1")}
                </button>
              </li>

              <li>
                <button
                  onClick={() => handleLocaleChange("en")}
                  className={locale === "en" ? styles.active : styles.lang}
                >
                  {t("brand.lang_2")}
                </button>
              </li>

              <li>
                <button
                  onClick={() => handleLocaleChange("it")}
                  className={locale === "it" ? styles.active : styles.lang}
                >
                  {t("brand.lang_3")}
                </button>
              </li>
            </ul>
          </div>
        </motion.div>
        <motion.div
          className={styles.servicesContainer}
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h3 className={styles.title}>{t("services.h3")}</h3>
          <ul className={styles.services}>
            <li className={styles.service}>
              <Link href="/psychopracticienne" className={styles.link}>
                {t("services.service_1")}
              </Link>
            </li>
            <li className={styles.service}>
              <Link href="/massages/soins-femme" className={styles.link}>
                {t("services.service_2")}
              </Link>
            </li>
            <li className={styles.service}>
              <Link
                href="/massages/soins-bebe-et-enfants"
                className={styles.link}
              >
                {t("services.service_3")}
              </Link>
            </li>
            <li className={styles.service}>
              <Link href="/massages/forfaits" className={styles.link}>
                {t("services.service_4")}
              </Link>
            </li>
            <li className={styles.service}>
              <Link href="/maquillage-professionnel" className={styles.link}>
                {t("services.service_5")}
              </Link>
            </li>
            <li className={styles.service}>
              <Link href="/massages/entreprise" className={styles.link}>
                {t("services.service_6")}
              </Link>
            </li>
          </ul>
        </motion.div>
        <motion.div
          className={styles.linksContainer}
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h3 className={styles.title}>{t("links.h3")}</h3>
          <ul className={styles.links}>
            <li className={styles.legalLink}>
              <Link href="/mentions-legales" className={styles.link}>
                {t("links.legal_notice")}
              </Link>
            </li>
            <li className={styles.legalLink}>
              <Link
                href="/politique-de-confidentialite"
                className={styles.link}
              >
                {t("links.privacy_policy")}
              </Link>
            </li>
            <li className={styles.legalLink}>
              <Link
                href="/conditions-generales-de-vente-cgv"
                className={styles.link}
              >
                {t("links.cgv")}
              </Link>
            </li>
          </ul>
        </motion.div>
        <motion.div
          className={styles.infosContainer}
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h3 className={styles.title}>{t("infos.h3")}</h3>
          <ul className={styles.infos}>
            <li className={styles.info}>
              <Link href="tel:+33652693287" className={styles.link}>
                {t("infos.phone")}
              </Link>
            </li>
            <li className={styles.info}>
              <Link
                href="mailto:contact@haumana-bien-etre.com"
                className={styles.link}
              >
                {t("infos.mail")}
              </Link>
            </li>
            <li className={styles.info}>
              {dayName} : {hoursLabel} —{" "}
              <span style={{ color: statusColor, fontWeight: 600 }}>
                {statusMessage}
              </span>
            </li>
          </ul>
          <ul className={styles.socials}>
            {socials.map((social) => {
              const [src, setSrc] = useState(social.normal);
              return (
                <li key={social.name} className={styles.social}>
                  <Link
                    href={social.link}
                    onMouseEnter={() => setSrc(social.hover)}
                    onMouseLeave={() => setSrc(social.normal)}
                    target="_blank"
                  >
                    <Image
                      className={styles.socialLogo}
                      src={src}
                      width={40}
                      height={40}
                      alt={social.name}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </motion.div>
      </section>
      <Copyright />
    </footer>
  );
}
