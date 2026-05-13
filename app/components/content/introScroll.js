"use client";

import { useEffect, useRef } from "react";
import styles from "@/styles/content/introScroll.module.css";

export default function ScrollHero() {
  const sectionRef = useRef(null);

  useEffect(() => {
    let cleanups = [];

    import("motion").then(({ animate, scroll, cubicBezier }) => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReducedMotion) return;

      const section = sectionRef.current;
      const image = section.querySelector(`.${styles.scaler} img`);
      const firstSection = section.querySelector("section");
      const layers = section.querySelectorAll(`.${styles.layer}`);

      if (!image || !firstSection) return;

      // -----------------------------
      // 1. IMAGE SCALE (full screen → natural)
      // -----------------------------
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      const naturalWidth = image.offsetWidth;
      const naturalHeight = image.offsetHeight;

      cleanups.push(
        scroll(
          animate(
            image,
            {
              width: [viewportWidth, naturalWidth],
              height: [viewportHeight, naturalHeight],
            },
            {
              width: cubicBezier(0.65, 0, 0.35, 1),
              height: cubicBezier(0.42, 0, 0.58, 1),
            },
          ),
          {
            target: firstSection,
            offset: ["start start", "80% end"],
          },
        ),
      );

      // -----------------------------
      // 2. LAYERS ANIMATION
      // -----------------------------
      const scaleEasings = [
        cubicBezier(0.42, 0, 0.58, 1),
        cubicBezier(0.76, 0, 0.24, 1),
        cubicBezier(0.87, 0, 0.13, 1),
      ];

      layers.forEach((layer, index) => {
        const endOffset = `${1 - index * 0.05} end`;

        // opacity
        cleanups.push(
          scroll(
            animate(
              layer,
              {
                opacity: [0, 0, 1],
              },
              {
                offset: [0, 0.55, 1],
                easing: cubicBezier(0.61, 1, 0.88, 1),
              },
            ),
            {
              target: firstSection,
              offset: ["start start", endOffset],
            },
          ),
        );

        // scale
        cleanups.push(
          scroll(
            animate(
              layer,
              {
                scale: [0, 0, 1],
              },
              {
                offset: [0, 0.3, 1],
                easing: scaleEasings[index],
              },
            ),
            {
              target: firstSection,
              offset: ["start start", endOffset],
            },
          ),
        );
      });
    });

    return () => cleanups.forEach((c) => c?.cancel?.());
  }, []);

  return (
    <div ref={sectionRef} className={styles.contentWrap}>
      <header className={styles.header}>
        <h1 className={styles.fluid}>
          let's
          <br />
          scroll.
        </h1>
      </header>

      <main>
        <section>
          <div className={styles.content}>
            <div className={styles.grid}>
              {/* LAYER 1 */}
              <div className={styles.layer}>
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i}>
                    <img src="/images/category_1.png" alt="" />
                  </div>
                ))}
              </div>

              {/* LAYER 2 */}
              <div className={styles.layer}>
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i}>
                    <img src="/images/category_1.png" alt="" />
                  </div>
                ))}
              </div>

              {/* LAYER 3 */}
              <div className={styles.layer}>
                {Array.from({ length: 2 }).map((_, i) => (
                  <div key={i}>
                    <img src="/images/category_1.png" alt="" />
                  </div>
                ))}
              </div>

              {/* CENTER IMAGE */}
              <div className={styles.scaler}>
                <video src="/video/hero.mp4" alt="" />
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className={styles.fluid}>fin.</h2>
        </section>
      </main>
    </div>
  );
}
