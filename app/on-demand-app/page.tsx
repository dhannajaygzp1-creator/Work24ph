import React from 'react'
import Banner from '../web-development-services/WebAppComponents/Banner';
import { servicespwa, PWAservices , ServiceSectionePWA, INDUSTRIESservices, ServiceSectioneINDUSTRIES } from '@/app/data/services';
import ServiceSection from '../web-development-services/WebAppComponents/ServiceSection';
 
import Services from '../web-development-services/WebAppComponents/Services';
import FeaturedProjects from '../web-development-services/WebAppComponents/FeaturedProjects';
import CTASection from '../components/HomeComponent/CTASection';
import { ClientTestimonial } from '../client-reviews/ClientTestimonial';
import WhyChoose from '../web-development-services/WebAppComponents/WhyChoose';
import { iOSDevelopment , whyChooseSectionios } from '../data/whyChoose';
import FaqSection from '../components/FaqSection';
import { faqData } from '../data/faqData';

export const page = () => {
    return (
        <>
           <Banner
        backgroundImage="/uploads/2024/12/6.jpg"
        title="ON DEMAND APP"
        subtitle="On-demand apps are popular because they: Offer instant satisfaction, Provide better choices and prices, and Are suitable for a wide range of industries."
        buttonText="Get Quote"
        buttonLink="/contact-us"
      />
      
      <ServiceSection data={servicespwa.overview} />
     
      <Services data={PWAservices} section={ServiceSectionePWA}/>
      <WhyChoose data={iOSDevelopment} section={whyChooseSectionios} />
      <FeaturedProjects />
      <Services data={INDUSTRIESservices} section={ServiceSectioneINDUSTRIES}/>
      <FaqSection
                    title=" FAQs"
                    data={faqData}
                  />
      <ClientTestimonial/>
      <CTASection />



        </>
    )
}
export default page