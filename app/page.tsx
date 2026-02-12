import Image from "next/image";
import HeroSection from "./components/HomeComponent/HeroSection";
import { MobilityAgency } from "./components/HomeComponent/MobilityAgency";
import { ServiceHome } from "./components/HomeComponent/ServiceHome"; 
import { StaticsHome } from "./components/HomeComponent/StaticsHome";
import WhyChooseHome from "./components/HomeComponent/whyChooseHome";
import Portfolio from "./components/HomeComponent/Portfolio";
import OurClients from "./components/HomeComponent/OurClients";
import DevelopmentPartner from "./components/HomeComponent/DevelopmentPartner";
import Businesses from "./components/HomeComponent/Businesses";
import Testimonials from "./components/HomeComponent/Testimonials";
import CTASection from "./components/HomeComponent/CTASection";
import { OurLocations } from "./components/HomeComponent/OurLocations";

export default function Home() {
  
  return (
   <>
    <HeroSection />
    <MobilityAgency />
    <ServiceHome />
    <StaticsHome />
    <WhyChooseHome />  
    <Portfolio />
    <OurClients />
    <DevelopmentPartner />
    <Businesses />  
    <Testimonials />
    <CTASection />
    <OurLocations />
   </>
  );
}
