import styles from "@/styles/page/psycho.module.css";
import TagBanner from "@/app/components/content/psycho/tagBanner";
import Method from "@/app/components/content/psycho/method";
import Offer from "@/app/components/content/psycho/offers";
import Clients from "@/app/components/content/psycho/clients";
import Intro from "@/app/components/content/psycho/intro";
import FinalCta from "@/app/components/content/psycho/finalCta";

export default function PsychoPage() {
  return (
    <main className={styles.psychoPage}>
      <Intro />
      <TagBanner />
      <Method />
      <Offer />
      <Clients />
      <FinalCta />
    </main>
  );
}
