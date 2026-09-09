import styles from "@/styles/page/page.module.css";
import Banner from "@/app/components/content/banner/banner";
import Header from "@/app/components/header/header";
import Hero from "@/app/components/content/homepage/hero";
import Intro from "@/app/components/content/homepage/intro";
import About from "@/app/components/content/homepage/about";
import Services from "@/app/components/content/homepage/services";
import Reviews from "@/app/components/content/homepage/reviews";
import Cta from "@/app/components/content/homepage/cta";
import HeroVideo from "@/app/components/content/homepage/heroVideo";
import ScrollHero from "../components/content/introScroll";

import MosaicImage from "../components/content/mosaic";

// Ajouter page success ppur payment
// Ajouter Logo SoinDispo avec le lien qui renvoie vers le site
export default function Home() {
  return (
    <main className={styles.homePage}>
      <Hero />
      {/* <iframe
        src="https://soindispo.com/praticien?slug=ambre-chiarinelli"
        width="100%"
        height="720"
        styles="border:1px solid #e1e8ed;border-radius:12px"
        title="Réserver avec Ambre Chiarinelli"
      ></iframe> */}
      {/* <MosaicImage /> */}
      <Intro />
      <About />
      <Services />
      <Reviews />
      <Cta />
    </main>
  );
}
