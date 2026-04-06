"use client";

import styles from "@/styles/page/contact.module.css";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

import PhoneIcon from "@/public/icons/phone.svg";
import MailIcon from "@/public/icons/mail.svg";
import ClockIcon from "@/public/icons/clock.svg";

import FacebookLogo from "@/public/icons/facebook.svg";
import FacebookLogoHover from "@/public/icons/facebook_hover.svg";
import InstaLogo from "@/public/icons/instagram.svg";
import InstaLogoHover from "@/public/icons/instagram_hover.svg";
import WhatsappLogo from "@/public/icons/whatsapp.svg";
import WhatsappLogoHover from "@/public/icons/whatsapp_hover.svg";
import ContactForm from "@/app/components/content/form/contactForm";

export default function ContactPage() {
  const t = useTranslations("ContactPage");

  const infos = [
    {
      type: "phone",
      name: t("infos.list.phone"),
      img: PhoneIcon,
      value: "+33 6 52 69 32 87",
      alt: "Icone de téléphone - Haumana Bien-être",
    },
    {
      type: "mail",
      name: t("infos.list.mail"),
      value: "contact@haumana-bien-etre.com",
      img: MailIcon,
      alt: "Icone d'email - Haumana Bien-être",
    },
    {
      type: "hours",
      name: t("infos.list.opening_hours"),
      value: [
        {
          day: t("infos.list.hours.monday"),
          hours: t("infos.list.hours.monday_hours"),
        },
        {
          day: t("infos.list.hours.tuesday"),
          hours: t("infos.list.hours.tuesday_hours"),
        },
        {
          day: t("infos.list.hours.wednesday"),
          hours: t("infos.list.hours.wednesday_hours"),
        },
        {
          day: t("infos.list.hours.thursday"),
          hours: t("infos.list.hours.thursday_hours"),
        },
        {
          day: t("infos.list.hours.friday"),
          hours: t("infos.list.hours.friday_hours"),
        },
        {
          day: t("infos.list.hours.saturday"),
          hours: t("infos.list.hours.saturday_hours"),
        },
        {
          day: t("infos.list.hours.sunday"),
          hours: t("infos.list.hours.sunday_hours"),
        },
      ],
      img: ClockIcon,
      alt: "Icone d'horloge - Haumana Bien-être",
    },
  ];

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
    <main className={styles.contactPage}>
      <section className={styles.headerSection}>
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: -100, scale: 0 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {t("title")}
        </motion.h1>
        <motion.h2
          className={styles.subtitle}
          initial={{ opacity: 0, y: -100, scale: 0 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {t("subtitle")}
        </motion.h2>
      </section>
      <section className={styles.sections}>
        <section className={styles.infosContainer}>
          <motion.div
            className={styles.mapContainer}
            initial={{ opacity: 0, y: -100, scale: 0 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <figure>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2766.8236703963257!2d6.071459711871542!3d46.094492070970574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c793052fdb99f%3A0xc2d9d52bc692a293!2sHaumana%20Bien-%C3%AAtre!5e0!3m2!1sen!2sfr!4v1772118521494!5m2!1sen!2sfr"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </figure>
          </motion.div>
          <motion.div
            className={styles.infos}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 100, scale: 0 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {t("infos.title")}
            </motion.h2>
            <ul className={styles.contactRow}>
              {infos
                .filter((info) => info.type === "phone" || info.type === "mail")
                .map((info, index) => (
                  <li key={index} className={styles.card}>
                    <div className={styles.iconWrapper}>
                      <Image src={info.img} alt={info.alt} />
                    </div>
                    <div className={styles.content}>
                      <span className={styles.infoTitle}>{info.name}</span>
                      {info.type === "phone" && (
                        <Link
                          href={`tel:${info.value}`}
                          className={styles.link}
                        >
                          {info.value}
                        </Link>
                      )}
                      {info.type === "mail" && (
                        <Link
                          href={`mailto:${info.value}`}
                          className={styles.link}
                        >
                          {info.value}
                        </Link>
                      )}
                    </div>
                  </li>
                ))}
            </ul>
            <div className={styles.row}>
              <ul className={styles.list}>
                {infos
                  .filter((info) => info.type === "hours")
                  .map((info, index) => (
                    <li key={index} className={styles.card}>
                      <div className={styles.iconWrapper}>
                        <Image src={info.img} alt={info.alt} />
                      </div>
                      <div className={styles.content}>
                        <span className={styles.infoTitle}>{info.name}</span>
                        <ul className={styles.hoursList}>
                          {info.value.map((schedule, i) => (
                            <li key={i} className={styles.hoursItem}>
                              <span>{schedule.day}</span>
                              <span>{schedule.hours}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  ))}
              </ul>
              <div className={styles.socialsSection}>
                <h3 className={styles.socialsTitle}>
                  {t("infos.socials_title")}
                </h3>

                <div className={styles.socials}>
                  {socials.map((social, index) => (
                    <Link
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialLink}
                    >
                      <Image
                        src={social.normal}
                        alt={social.alt}
                        className={styles.socialIcon}
                      />
                      <Image
                        src={social.hover}
                        alt={social.alt}
                        className={`${styles.socialIcon} ${styles.socialIconHover}`}
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </section>
        <motion.section
          id="form"
          className={styles.formContainer}
          initial={{ opacity: 0, y: -100, scale: 0 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className={styles.titleContainer}>
            <h2 className={styles.formTitle}>{t("form.title")}</h2>
            <span className={styles.formSubtitle}>{t("form.subtitle")}</span>
          </div>
          <ContactForm />
        </motion.section>
      </section>
    </main>
  );
}
