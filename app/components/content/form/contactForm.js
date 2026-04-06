"use client";
import styles from "@/styles/content/contactForm.module.css";
import { useTranslations } from "next-intl";
import { useState } from "react";
export default function ContactForm() {
  const t = useTranslations("ContactForm");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    service: "",
    message: "",
    acceptPolicy: false,
    recontact: false,
    website: "", // honeypot
  });

  const [errors, setErrors] = useState({});
  const [statusMessage, setStatusMessage] = useState(null);
  const [statusType, setStatusType] = useState(null); // "success" | "error"
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    {
      label: "Psychopracticienne",
      options: ["Transformation", "Éveil"],
    },
    {
      label: "Soins Femmes",
      options: [
        "Massage L'essentiel",
        "Massage Haumana",
        "Massage Future Maman",
      ],
    },
    {
      label: "Forfaits",
      options: [
        "Forfait Harmonie Durable",
        "Forfait La Parenthèse Essentielle",
      ],
    },
    {
      label: "Massage pour Bébé & Enfants",
      options: ["Massage Mahana", "Massage Aroha", "Atelier Massage Bébé"],
    },
    {
      label: "Massage en Entreprise",
      options: ["Massage en entreprise"],
    },
    {
      label: "Maquillage",
      options: ["Maquillage professionnel"],
    },
    {
      label: "Autre",
      options: ["Autre"],
    },
  ];

  // Validation live
  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "firstName":
      case "lastName":
        if (!value.trim()) error = t("errors.required");
        break;
      case "phone":
        if (!value.trim()) error = t("errors.required");
        else if (!/^\+?\d{9,15}$/.test(value)) error = t("errors.phone");
        break;
      case "email":
        if (!value.trim()) error = t("errors.required");
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          error = t("errors.email");
        break;
      case "service":
        if (!value) error = t("errors.required");
        break;
      case "acceptPolicy":
        if (!value) error = t("errors.acceptPolicy");
        break;
      case "recontact":
        if (!value) error = t("errors.recontact");
        break;
      default:
        break;
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;

    setFormData({ ...formData, [name]: fieldValue });

    // Validation live
    validateField(name, fieldValue);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    setStatusMessage(null);
    setStatusType(null);

    // Valider tous les champs
    const newErrors = {};
    Object.entries(formData).forEach(([key, value]) => {
      let error = "";
      switch (key) {
        case "firstName":
        case "lastName":
          if (!value.trim()) error = t("errors.required");
          break;
        case "phone":
          if (!value.trim()) error = t("errors.required");
          else if (!/^\+?\d{9,15}$/.test(value)) error = t("errors.phone");
          break;
        case "email":
          if (!value.trim()) error = t("errors.required");
          else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
            error = t("errors.email");
          break;
        case "service":
          if (!value) error = t("errors.required");
          break;
        case "acceptPolicy":
          if (!value) error = t("errors.acceptPolicy");
          break;
        case "recontact":
          if (!value) error = t("errors.recontact");
          break;
        default:
          break;
      }
      if (error) newErrors[key] = error;
    });

    setErrors(newErrors);

    // ❌ Si erreurs → stop ici
    if (Object.keys(newErrors).length > 0) {
      setIsSubmitting(false);
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setStatusMessage(t(`messages.${data.code}`));
        setStatusType("error");
        return;
      }
      // ✅ Succès
      setStatusMessage(t(`messages.${data.code}`));
      setStatusType("success");

      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        service: "",
        message: "",
        acceptPolicy: false,
        recontact: false,
      });

      setErrors({});
    } catch (error) {
      console.error("Erreur envoi :", error);

      // ❌ Erreur serveur
      setStatusMessage(t(`messages.${data.code}`));
      setStatusType("error");
    } finally {
      setIsSubmitting(false);

      // ⏳ Supprimer message après 5s
      setTimeout(() => {
        setStatusMessage(null);
        setStatusType(null);
      }, 5000);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      {/* Row: First & Last Name */}
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="firstName">{t("firstName")}</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Arthur"
            className={errors.firstName ? styles.errorInput : ""}
          />
          {errors.firstName && (
            <span className={styles.error}>{errors.firstName}</span>
          )}
        </div>

        <div className={styles.field}>
          <label htmlFor="lastName">{t("lastName")}</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Barraud"
            className={errors.lastName ? styles.errorInput : ""}
          />
          {errors.lastName && (
            <span className={styles.error}>{errors.lastName}</span>
          )}
        </div>
      </div>

      {/* Row: Phone & Email */}
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="phone">{t("phone")}</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="06xxxxxxxx"
            className={errors.phone ? styles.errorInput : ""}
          />
          {errors.phone && <span className={styles.error}>{errors.phone}</span>}
        </div>

        <div className={styles.field}>
          <label htmlFor="email">{t("email")}</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your.mail@gmail.com"
            className={errors.email ? styles.errorInput : ""}
          />
          {errors.email && <span className={styles.error}>{errors.email}</span>}
        </div>
      </div>

      {/* Service */}
      <div className={styles.field}>
        <label htmlFor="service">{t("service")}</label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className={errors.service ? styles.errorInput : ""}
        >
          <option value="">{t("selectService")}</option>
          {services.map((group, i) => (
            <optgroup key={i} label={group.label}>
              {group.options.map((option, j) => (
                <option key={j} value={option}>
                  {option}
                </option>
              ))}
            </optgroup>
          ))}
        </select>
        {errors.service && (
          <span className={styles.error}>{errors.service}</span>
        )}
      </div>

      {/* Message */}
      <div className={styles.field}>
        <label htmlFor="message">{t("message")}</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="8"
          placeholder="Votre demande..."
          className={errors.message ? styles.errorInput : ""}
        />
        {errors.message && (
          <span className={styles.error}>{errors.message}</span>
        )}
      </div>

      {/* Checkboxes */}
      <div className={styles.checkboxGroup}>
        <div className={styles.checkbox}>
          <label>
            <input
              type="checkbox"
              name="acceptPolicy"
              checked={formData.acceptPolicy}
              onChange={handleChange}
              className={errors.acceptPolicy ? styles.errorInput : ""}
            />
            {t("acceptPolicy")}
          </label>
          {errors.acceptPolicy && (
            <span className={styles.error}>{errors.acceptPolicy}</span>
          )}
        </div>
        <div className={styles.checkbox}>
          <label>
            <input
              type="checkbox"
              name="recontact"
              checked={formData.recontact}
              onChange={handleChange}
              className={errors.recontact ? styles.errorInput : ""}
            />
            {t("recontact")}
          </label>
          {errors.recontact && (
            <span className={styles.error}>{errors.recontact}</span>
          )}
        </div>
      </div>

      {/* Honeypot */}
      <div style={{ display: "none" }}>
        <label>
          Website
          <input
            type="text"
            name="website"
            tabIndex="-1"
            autoComplete="off"
            value={formData.website || ""}
            onChange={handleChange}
          />
        </label>
      </div>

      <button type="submit" className={styles.submit} disabled={isSubmitting}>
        {isSubmitting ? t("sending") : t("send")}
      </button>

      {statusMessage && (
        <div
          className={
            statusType === "success"
              ? styles.successMessage
              : styles.errorMessage
          }
        >
          {statusMessage}
        </div>
      )}
    </form>
  );
}
