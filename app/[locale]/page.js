import styles from "@/styles/page/page.module.css";
import Hero from "@/app/components/content/homepage/hero";
import Intro from "@/app/components/content/homepage/intro";
import About from "@/app/components/content/homepage/about";
import Services from "@/app/components/content/homepage/services";
import Reviews from "@/app/components/content/homepage/reviews";
import Cta from "@/app/components/content/homepage/cta";

export default function Home() {
  return (
    <main className={styles.homePage}>
      <Hero />
      <Intro />
      <About />
      <Services />
      <Reviews />
      <Cta />
    </main>
  );
}
