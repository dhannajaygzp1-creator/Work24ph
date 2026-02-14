import React from 'react'
import Banner from '../web-development-services/WebAppComponents/Banner';
import { statisticsData } from '@/app/data/Statistics';
import Statistics from '../web-development-services/WebAppComponents/Statistics';
import { servicesios, iosservices , ServiceSectioneios, INDUSTRIESservices, ServiceSectioneINDUSTRIES } from '@/app/data/services';
import ServiceSection from '../web-development-services/WebAppComponents/ServiceSection';
import { technologyAndroid } from '@/app/data/technology';
import TechnologyUsed from '../components/TechnologyUsed';
import Services from '../web-development-services/WebAppComponents/Services';
import FeaturedProjects from '../web-development-services/WebAppComponents/FeaturedProjects';
import CTASection from '../components/HomeComponent/CTASection';
import { ClientTestimonial } from '../client-reviews/ClientTestimonial';
import WhyChoose from '../web-development-services/WebAppComponents/WhyChoose';
import { iOSDevelopment , whyChooseSectionios } from '../data/whyChoose';
import FaqSection from '../components/FaqSection';

export const page = () => {
    return (
        <>
           <Banner
        backgroundImage="/uploads/2024/12/iOS-14-App-Icon-Template.webp"
        title="iOS APPLICATION DEVELOPMENT COMPANY"
        subtitle="iOS apps made to fit Apple’s environment perfectly, you can be assured about all of your potential iPhone users will fall for the app we create for your business."
        buttonText="Get Quote"
        buttonLink="/contact-us"
      />
      <Statistics stats={statisticsData} />
      <ServiceSection data={servicesios.overview} />
      <TechnologyUsed data={technologyAndroid} />
      <Services data={iosservices} section={ServiceSectioneios}/>
      <WhyChoose data={iOSDevelopment} section={whyChooseSectionios} />
      <FeaturedProjects />
      <Services data={INDUSTRIESservices} section={ServiceSectioneINDUSTRIES}/>
      <FaqSection/>
      <ClientTestimonial/>
      <CTASection />



        </>
    )
}
export default page