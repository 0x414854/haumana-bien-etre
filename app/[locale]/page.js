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

export default function Home() {
  return (
    <main className={styles.homePage}>
      {/* <HeroVideo /> */}
      {/* <ScrollHero /> */}
      {/* <Banner />
      <Header /> */}
      <Hero />
      <Intro />
      <About />
      <Services />
      <Reviews />
      <Cta />
    </main>
  );
}
