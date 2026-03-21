import React from 'react'
import Banner from '../web-development-services/WebAppComponents/Banner';

import { servicesSchoolMgm, Schoolmgntservices , ServiceSectioneSchoolmgnt, } from '@/app/data/services';
import ServiceSection from '../web-development-services/WebAppComponents/ServiceSection';

import Services from '../web-development-services/WebAppComponents/Services';

import CTASection from '../components/HomeComponent/CTASection';
import { ClientTestimonial } from '../client-reviews/ClientTestimonial';
import WhyChoose from '../web-development-services/WebAppComponents/WhyChoose';
import { SchoolmgntDevelopment  , whyChooseSectionSchoolmgt } from '../data/whyChoose';



export const page = () => {
    return (
        <>
           <Banner
        backgroundImage="/uploads/2024/12/OIP-1.jpeg"
        title="School College Management"
        subtitle="Complete All-In-One Solution for School and College Management"
        buttonText="Get Quote"
        buttonLink="/contact-us"
      />
     
      <ServiceSection data={servicesSchoolMgm.overview} />
    
      <Services data={Schoolmgntservices} section={ServiceSectioneSchoolmgnt}/>
      <WhyChoose data={SchoolmgntDevelopment } section={whyChooseSectionSchoolmgt} />
      <ClientTestimonial style={{ backgroundColor: '#e9fefb' }} />
      <CTASection />



        </>
    )
}
export default page