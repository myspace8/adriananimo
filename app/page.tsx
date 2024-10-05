import MobileHero from "@/components/mobileHero";
import AboutMe from "@/components/about";

export default function Home() {
  return (
    <>
      <div className="md:hidden">
        <MobileHero />
      </div>
      <section className="md:hidden bg-white mt-1">
        <AboutMe />
      </section>
    </>
  );
}
