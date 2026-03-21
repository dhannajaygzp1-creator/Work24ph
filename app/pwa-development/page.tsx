import React from 'react'
import Banner from '../web-development-services/WebAppComponents/Banner';
import { statisticsData } from '@/app/data/Statistics';
import Statistics from '../web-development-services/WebAppComponents/Statistics';
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
        title="PWA Development"
        subtitle="Progressive web apps have taken over the apps in desktop and mobile app stores in every possible way, they are fast, engaging, and a must-have, if your business niche requires a web application."
        buttonText="Get Quote"
        buttonLink="/contact-us"
      />
      <Statistics stats={statisticsData} />
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