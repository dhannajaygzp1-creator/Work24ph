import React from 'react'
import Banner from '../web-development-services/WebAppComponents/Banner';
import { servicesOndemand, INDUSTRIESservices, ServiceSectioneINDUSTRIES } from '@/app/data/services';
import ServiceSection from '../web-development-services/WebAppComponents/ServiceSection';

import CTASection from '../components/HomeComponent/CTASection';
import { ClientTestimonial } from '../client-reviews/ClientTestimonial';
import WhyChoose from '../web-development-services/WebAppComponents/WhyChoose';
import { OndemandDevelopment , whyChooseSectionOndemand } from '../data/whyChoose';


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
      
      <ServiceSection data={servicesOndemand.overview} />
     
      
      <WhyChoose data={OndemandDevelopment} section={whyChooseSectionOndemand} />
 
     <ClientTestimonial/>
      <CTASection />



        </>
    )
}
export default page