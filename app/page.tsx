import MobileHero from "@/components/mobileHero";
import AboutMe from "@/components/about";
import WhatIDo from "@/components/whatIDo";

export default function Home() {
  return (
    <>
      <div className="md:hidden">
        <MobileHero />
      </div>
      <section className="md:hidden bg-white mt-1">
        <AboutMe />
      </section>
      <section className="md:hidden bg-white mt-1">
        <WhatIDo />
      </section>
    </>
  );
}
