import React from 'react'
import Banner from '../web-development-services/WebAppComponents/Banner';
import { statisticsData } from '@/app/data/Statistics';
import Statistics from '../web-development-services/WebAppComponents/Statistics';
import { servicesCROSS, CROSSservices , ServiceSectioneCROSS } from '@/app/data/services';
import ServiceSection from '../web-development-services/WebAppComponents/ServiceSection';
import { technologyCross } from '@/app/data/technology';
import TechnologyUsed from '../components/TechnologyUsed';
import Services from '../web-development-services/WebAppComponents/Services';
import CTASection from '../components/HomeComponent/CTASection';
import { ClientTestimonial } from '../client-reviews/ClientTestimonial';
import WhyChoose from '../web-development-services/WebAppComponents/WhyChoose';
import { CROSSDevelopment , whyChooseSectionCROSS } from '../data/whyChoose';


export const page = () => {
    return (
        <>
           <Banner
        backgroundImage="/uploads/2024/12/dotnet-dev.jpg.webp"
        title="CROSS PLATFORM DEVELOPMENT COMPANY"
        subtitle="Are you looking for an illustrious and user-friendly website to represent your business?"
        buttonText="Get Quote"
        buttonLink="/contact-us"
      />
      <Statistics stats={statisticsData} />
      <ServiceSection data={servicesCROSS.overview} />
  
      <Services data={CROSSservices} section={ServiceSectioneCROSS}/>
      <WhyChoose data={CROSSDevelopment} section={whyChooseSectionCROSS} />
          <TechnologyUsed data={technologyCross} />
      <ClientTestimonial/>
      <CTASection />



        </>
    )
}
export default page