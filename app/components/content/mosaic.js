import styles from "@/styles/content/mosaic.module.css";
import Image from "next/image";

export default function MosaicImage() {
  const images = Array.from(
    { length: 12 },
    (_, i) => `/images/mosaic/${i + 1}.JPG`,
  );
  const layout = images.map((img, i) => ({
    src: img,
    x: `${Math.random() * 40 - 20}px`, // overlap horizontal
    y: `${Math.random() * 40 - 20}px`, // overlap vertical
    r: `${Math.random() * 10 - 5}deg`, // rotation légère
    z: i,
  }));

  return (
    <footer className={styles.footer}>
      <div className={styles.background}>
        {layout.map((item, i) => (
          <div
            key={i}
            className={styles.photo}
            style={{
              "--delay": `${i * 0.18}s`,
              "--x": item.x,
              "--y": item.y,
              "--r": item.r,
              "--z": item.z,
            }}
          >
            <Image src={item.src} alt="" fill style={{ objectFit: "cover" }} />
          </div>
        ))}
      </div>

      <div className={styles.overlay} />

      <div className={styles.videoWrapper}>
        <video
          className={styles.video}
          src="/videos/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
    </footer>
  );
}
