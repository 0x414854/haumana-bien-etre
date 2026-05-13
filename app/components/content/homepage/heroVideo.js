"use client";
import { useEffect, useRef } from "react";
import styles from "@/styles/content/HeroVideo.module.css";

export default function HeroVideo() {
  const heroRef = useRef(null);
  const videoRef = useRef(null);
  const overlayRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const rect = heroRef.current.getBoundingClientRect();
      const progress = Math.min(Math.max(-rect.top / window.innerHeight, 0), 1);

      const scale = 1 + progress * 0.3;
      videoRef.current.style.transform = `scale(${scale})`;

      overlayRef.current.style.opacity = 0.4 - progress * 0.4;
      textRef.current.style.opacity = 1 - progress * 1.2;
      videoRef.current.style.opacity = 1 - progress * 1.2;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={heroRef} className={styles.hero}>
      <div className={styles.videoContainer}>
        <video
          ref={videoRef}
          className={styles.video}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/video/hero.mp4" type="video/mp4" />
        </video>

        <div ref={overlayRef} className={styles.overlay}></div>

        <div ref={textRef} className={styles.text}>
          <h1>Bienvenue</h1>
          <p>Votre message ici</p>
        </div>
      </div>
    </section>
  );
}
