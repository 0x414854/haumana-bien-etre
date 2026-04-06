"use client";

import styles from "@/styles/header/header.module.css";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useRouter, usePathname } from "@/i18n/navigation";
import { useCart } from "@/context/cartContext";
import { useState, useEffect } from "react";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

import Logo from "@/public/logo/logo_white.png";
import LogoBlack from "@/public/logo/logo_black.png";
import CartIconBlack from "@/public/icons/cartBlack.png";
import CartIconWhite from "@/public/icons/cartWhite.png";
import MenuIcon from "@/public/icons/menu_black.svg";
import MenuIconWhite from "@/public/icons/menu_white.svg";
import CrossIconWhite from "@/public/icons/cross_white.svg";
import CrossIconBlack from "@/public/icons/cross_black.svg";

import InstagramIcon from "@/public/icons/instagram.svg";
import FacebookIcon from "@/public/icons/facebook.svg";
import WhatsAppIcon from "@/public/icons/whatsapp.svg";

export default function Header() {
  const t = useTranslations("Navbar");

  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const { cart = [] } = useCart() || {};

  const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [massageOpen, setMassageOpen] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);
  const [subMenuAnimateOut, setSubMenuAnimateOut] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  function toggleMenu() {
    if (menuOpen) {
      setAnimateOut(true);
      setMassageOpen(false); // on ferme aussi le sous-menu Massages
      setTimeout(() => {
        setMenuOpen(false);
        setAnimateOut(false);
      }, 400);
    } else {
      setMenuOpen(true);
    }
  }
  const closeMassageSubMenu = () => {
    setSubMenuAnimateOut(true); // déclenche l'animation
    setTimeout(() => {
      setMassageOpen(false); // retire le sous-menu du DOM après l'animation
      setSubMenuAnimateOut(false);
    }, 400); // durée de l'animation en ms
  };

  function toggleDropdown() {
    setDropdownOpen(!dropdownOpen);
  }

  function closeDropdown() {
    setDropdownOpen(false);
  }

  function handleLocaleChange(e) {
    const newLocale = e.target.value;
    router.replace(pathname, { locale: newLocale });
  }

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${styles.navbarContainer} ${scrolled ? styles.navScrolled : ""}`}
    >
      {/* Logo */}
      <motion.div
        className={styles.navLeft}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Link href="/">
          <Image
            src={scrolled ? LogoBlack : Logo}
            width={200}
            height={50}
            alt="Logo Haumana Bien-Etre - Présilly"
            sizes="(min-width: 1200px) 300px, 200px"
            loading="lazy"
            className={styles.logo}
          />
        </Link>
      </motion.div>

      {/* Desktop nav */}
      <nav className={styles.desktopNav}>
        <ul className={styles.navContainer}>
          <motion.li
            className={styles.navElement}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Link
              href="/psychopracticienne"
              className={styles.navbarlink}
              aria-selected={
                pathname === "/psychopracticienne" ? "true" : "false"
              }
            >
              {t("psycho")}
            </Link>
          </motion.li>
          {/* Massages avec dropdown */}
          <motion.li
            className={styles.navElement}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <span
              className={styles.navbarDropdown}
              onClick={toggleDropdown}
              aria-selected={dropdownOpen ? "true" : "false"}
            >
              {t("massage")}
            </span>
            <div
              className={
                scrolled
                  ? styles.dropdownWrapperScrolled
                  : styles.dropdownWrapper
              }
            >
              <ul
                className={`${styles.dropdown} ${
                  dropdownOpen ? styles.dropdownOpen : ""
                }`}
                onMouseLeave={closeDropdown} // ferme si on sort de la zone
              >
                <motion.li
                  className={styles.dropdownItem}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <Link href="/massages">{t("massageSub.all")}</Link>
                </motion.li>
                <li className={styles.dropdownItem}>
                  <Link href="/massages/forfaits">
                    {t("massageSub.package")}
                  </Link>
                </li>
                <li className={styles.dropdownItem}>
                  <Link href="/massages/soins-femme">
                    {t("massageSub.women")}
                  </Link>
                </li>
                <li className={styles.dropdownItem}>
                  <Link href="/massages/soins-bebe-et-enfants">
                    {t("massageSub.children")}
                  </Link>
                </li>
                <li className={styles.dropdownItem}>
                  <Link href="/massages/entreprise">
                    {t("massageSub.corporate")}
                  </Link>
                </li>
              </ul>
            </div>
          </motion.li>

          <motion.li
            className={styles.navElement}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Link
              href="/maquillage-professionnel"
              className={styles.navbarlink}
              aria-selected={
                pathname === "/maquillage-professionnel" ? "true" : "false"
              }
            >
              {t("makeup")}
            </Link>
          </motion.li>
          <motion.li
            className={styles.navElement}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Link
              href="/contact-et-horaire"
              className={styles.navbarlink}
              aria-selected={
                pathname === "/contact-et-horaire" ? "true" : "false"
              }
            >
              {t("schedule")}
            </Link>
          </motion.li>
          <motion.li
            className={styles.langDropdown}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <select
              className={styles.langSelect}
              onChange={handleLocaleChange}
              value={locale}
            >
              <option value="fr">{t("langs.fr")}</option>
              <option value="en">{t("langs.en")}</option>
              <option value="it">{t("langs.it")}</option>
            </select>
          </motion.li>

          {/* Panier */}
          <motion.li
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Link href="/panier" className={styles.cartLink}>
              <Image
                src={scrolled ? CartIconBlack : CartIconWhite}
                width={24}
                height={24}
                alt="Icone de panier - Haumana Bien-être"
              />
              {totalItems > 0 && (
                <span className={styles.cartBadge}>{totalItems}</span>
              )}
            </Link>
          </motion.li>
          {/* <motion.li
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Link
              href="https://wa.me/+33652693287"
              className={styles.whatsappLink}
            >
              <Image
                src={scrolled ? WhatsAppIcon : WhatsAppIcon}
                width={24}
                height={24}
                alt="Panier"
              />
              {totalItems > 0 && (
                <span className={styles.cartBadge}>{totalItems}</span>
              )}
            </Link>
          </motion.li> */}
        </ul>
      </nav>

      {/* Mobile icons */}
      <div className={styles.mobileIcons}>
        <motion.button
          onClick={toggleMenu}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Image
            src={
              menuOpen ? CrossIconWhite : scrolled ? MenuIcon : MenuIconWhite
            }
            width={30}
            height={30}
            alt="Icone de Menu - Haumana Bien-être"
          />
        </motion.button>
        <motion.a
          href="/panier"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Image
            src={scrolled ? CartIconBlack : CartIconWhite}
            width={24}
            height={24}
            alt="Icone Panier - Haumana Bien-être"
          />
          {totalItems > 0 && (
            <span className={styles.cartBadgeMobile}>{totalItems}</span>
          )}
        </motion.a>
      </div>

      {menuOpen && (
        <div className={styles.overlay} onClick={toggleMenu}>
          <div
            className={`${massageOpen ? styles.mobileNavOpen : styles.mobileNav} ${
              animateOut ? styles.slideLeft : styles.slideRight
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {massageOpen ? (
              <>
                <motion.span
                  className={styles.backButton}
                  onClick={closeMassageSubMenu}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  ←
                </motion.span>

                {/* Sous-menu */}

                <motion.button
                  className={styles.closeButton}
                  onClick={toggleMenu}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  X
                  {/* <Image
                    src={CrossIconBlack}
                    width={40}
                    height={40}
                    alt="Croix pour quitter le menu"
                  /> */}
                </motion.button>
                <ul
                  className={`${styles.mobileSubMenu} ${
                    subMenuAnimateOut ? styles.slideLeft : styles.slideRight
                  }`}
                >
                  <li>
                    <Link href="/massages" onClick={toggleMenu}>
                      {t("massageSub.all")}
                    </Link>
                  </li>
                  <li>
                    <Link href="/massages/forfaits" onClick={toggleMenu}>
                      {t("massageSub.package")}
                    </Link>
                  </li>
                  <li>
                    <Link href="/massages/soins-femme" onClick={toggleMenu}>
                      {t("massageSub.women")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/massages/soins-bebe-et-enfants"
                      onClick={toggleMenu}
                    >
                      {t("massageSub.children")}
                    </Link>
                  </li>
                  <li>
                    <Link href="/massages/entreprise" onClick={toggleMenu}>
                      {t("massageSub.corporate")}
                    </Link>
                  </li>
                </ul>
              </>
            ) : (
              // Menu principal normal
              <>
                <div className={styles.overlayHeader}>
                  <Link href="/">
                    <Image
                      src={LogoBlack}
                      width={250}
                      height={70}
                      alt="Logo Haumana Bien-Etre - Présilly"
                      sizes="(min-width: 768px) 350px, 250px"
                    />
                  </Link>
                </div>

                <ul className={styles.mobileNavContainer}>
                  <li className={styles.navElement}>
                    <Link href="/psychopracticienne" onClick={toggleMenu}>
                      {t("psycho")}
                    </Link>
                  </li>
                  {/* Massages */}
                  <li className={styles.navElement}>
                    <span
                      className={styles.mobileMenuToggle}
                      onClick={() => setMassageOpen(true)}
                    >
                      {t("massage")}
                    </span>
                  </li>

                  <li className={styles.navElement}>
                    <Link href="/maquillage-professionnel" onClick={toggleMenu}>
                      {t("makeup")}
                    </Link>
                  </li>
                  {/* <li className={styles.navElement}>
                    <Link href="/holisens" onClick={toggleMenu}>
                      {t("holisens")}
                    </Link>
                  </li> */}
                  <li className={styles.navElement}>
                    <Link href="/contact-et-horaire" onClick={toggleMenu}>
                      {t("schedule")}
                    </Link>
                  </li>
                  {/* <li className={styles.navElement}>
                    <Link href="/quote" onClick={toggleMenu}>
                      {t("quote")}
                    </Link>
                  </li> */}
                </ul>

                <div className={styles.menuSeparator}></div>

                <ul className={styles.langSelectMobile}>
                  {[
                    { code: "fr", label: t("langs.fr") },
                    { code: "en", label: t("langs.en") },
                    { code: "it", label: t("langs.it") },
                  ].map((lang) => (
                    <li
                      key={lang.code}
                      className={locale === lang.code ? styles.active : ""}
                      onClick={() =>
                        router.replace(pathname, { locale: lang.code })
                      }
                    >
                      {lang.label}
                    </li>
                  ))}
                </ul>

                <div className={styles.menuSeparator}></div>

                <ul className={styles.socialContainer}>
                  <li className={styles.socialMedia}>
                    <Link
                      href="https://www.facebook.com/profile.php?id=61553767333204"
                      target="_blank"
                    >
                      <Image
                        src={FacebookIcon}
                        width={30}
                        height={30}
                        alt="Logo Facebook Hauma Bien-être"
                      />
                    </Link>
                  </li>
                  <li className={styles.socialMedia}>
                    <Link
                      href="https://www.instagram.com/haumanabienetre/"
                      target="_blank"
                    >
                      <Image
                        src={InstagramIcon}
                        width={30}
                        height={30}
                        alt="Logo Instagram Hauma Bien-être"
                      />
                    </Link>
                  </li>
                  <li className={styles.socialMedia}>
                    <Link href="https://wa.me/33624793214" target="_blank">
                      <Image
                        src={WhatsAppIcon}
                        width={30}
                        height={30}
                        alt="Logo WhatsApp Hauma Bien-être"
                      />
                    </Link>
                  </li>
                </ul>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
