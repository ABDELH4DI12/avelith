import PageChrome from "./components/sections/PageChrome";
import Header from "./components/sections/Header";
import Hero from "./components/sections/Hero";
import Intro from "./components/sections/Intro";
import ServiceChapter from "./components/sections/ServiceChapter";
import Process from "./components/sections/Process";
import Studio from "./components/sections/Studio";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import SiteEffects from "./components/effects/SiteEffects";
import { services } from "./data/services";

export default function HomePage() {
  return (
    <>
      <PageChrome />
      <Header />
      <main>
        <Hero />
        <Intro />
        {services.map((service) => (
          <ServiceChapter key={service.id} service={service} />
        ))}
        <Process />
        <Studio />
        <Contact />
      </main>
      <Footer />
      <SiteEffects />
    </>
  );
}
