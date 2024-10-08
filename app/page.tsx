import MobileHero from "@/components/mobileHero";
import AboutMe from "@/components/about";
import WhatIDo from "@/components/whatIDo";
import MyWork from "@/components/myWork";
import Insights from "@/components/insights";
import RecentAwards from "@/components/awards";

export default function Home() {
  return (
    <>
      <div className="md:hidden">
        <MobileHero />
      </div>
      <section className="md:hidden bg-white mt-1">
        <AboutMe />
      </section>
      <section id="projects" className="md:hidden bg-white mt-1">
        <WhatIDo />
      </section>
      <section id="mywork" className="md:hidden bg-white mt-1">
        <MyWork />
      </section>
      <section id="blog" className="md:hidden bg-white">
        <Insights />
      </section>
      <section id="awards" className="md:hidden bg-white mt-1">
        <RecentAwards />
      </section>
      {/* <section id="contact" className="md:hidden bg-white mt-1">
        <Contact />
      </section> */}
      
    </>
  );
}
