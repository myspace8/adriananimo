import MobileHero from "@/components/ui/mobileHero";

export default function Home() {
  return (
    <>
      <div className="md:hidden">
        <MobileHero />
      </div>
    </>
  );
}
