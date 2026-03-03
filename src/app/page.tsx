import LandingHero from "@/components/landing/LaningHero";
import LandingContact from "@/components/landing/LandingContact";
import LandingServices from "@/components/landing/LandingServices";
import LandingTechStack from "@/components/landing/LandingTechStack";
export default function Home() {
  return (
    <>
      <main>
        <LandingHero />
        <LandingTechStack />
        <LandingServices />
        <LandingContact />
      </main>
    </>
  );
}
