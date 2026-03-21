import Banner from "../web-development-services/WebAppComponents/Banner";
import { Hostingservices, ServiceSectioneHosting, servicesHosting } from "../data/services";
import ServiceSection from "../web-development-services/WebAppComponents/ServiceSection";
import { technologyhosting } from "@/app/data/technology";
import TechnologyUsed from "../components/TechnologyUsed";
import Services from "../web-development-services/WebAppComponents/Services";
import { ClientTestimonial } from "../client-reviews/ClientTestimonial";
import CTASection from "../components/HomeComponent/CTASection";
import FaqSection from "../components/FaqSection";
import { faqData2 } from "@/app/data/faqData";

export default function Page() {
  return (
    <>
      <Banner
        backgroundImage="/uploads/2024/12/Web_hosting1560413676163-scaled.avif"
        title="HOSTING"
        subtitle="Guarantee reliability for websites, apps or servers."
        buttonText="Get Quote"
        buttonLink="/contact-us"
      />

      <ServiceSection data={servicesHosting.overview} />

      <TechnologyUsed data={technologyhosting} />

      <Services data={Hostingservices} section={ServiceSectioneHosting} />

      {/* FAQ Section */}
      <FaqSection
        title="Hosting FAQs"
        data={faqData2}
      />

      <ClientTestimonial />

      <CTASection />
    </>
  );
}