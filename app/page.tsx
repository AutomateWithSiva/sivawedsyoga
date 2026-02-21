import Hero from "@/components/Hero";
import GoldenParticles from "@/components/GoldenParticles";
import MusicToggle from "@/components/MusicToggle";
import EventDetails from "@/components/EventDetails";
import Gallery from "@/components/Gallery";
import VenueMap from "@/components/VenueMap";
import GiftSection from "@/components/GiftSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden max-w-full">
      <section className="relative overflow-x-hidden max-w-full">
        <Hero />
        <GoldenParticles />
      </section>
      <MusicToggle />
      <EventDetails />
      <Gallery />
      <VenueMap />
      <GiftSection />
      <Footer />
    </main>
  );
}
