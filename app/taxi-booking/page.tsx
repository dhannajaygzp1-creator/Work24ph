import React from 'react'
import Banner from '../web-development-services/WebAppComponents/Banner';

import { servicesTexiBooking, Taxibookingservices , ServiceSectioneTaxibooking, } from '@/app/data/services';
import ServiceSection from '../web-development-services/WebAppComponents/ServiceSection';
 import { technologytaxiboking } from "@/app/data/technology";
import Services from '../web-development-services/WebAppComponents/Services';

import CTASection from '../components/HomeComponent/CTASection';
import { ClientTestimonial } from '../client-reviews/ClientTestimonial';
import WhyChoose from '../web-development-services/WebAppComponents/WhyChoose';
import { TaxibookingDevelopment , whyChooseSectionTaxibooking } from '../data/whyChoose';
import FaqSection from '../components/FaqSection';
import { TaxibookingFAQ } from '../data/faqData';
import TechnologyUsed from '../components/TechnologyUsed';


export const page = () => {
    return (
        <>
           <Banner
        backgroundImage="/uploads/2024/12/taxi-booking.jpg"
        title="TAXI BOOKING"
        subtitle="We have variety of cabs available which include Innova, Innova Crysta, Honda City, Toyota Etios, Swift Dzire, Honda Amaze, Hyundai xcent, Tata Indigo, Mahindra xylo & tempo travelers. You can choose car as per your need and budget."
        buttonText="Get Quote"
        buttonLink="/contact-us"
      />
     
      <ServiceSection data={servicesTexiBooking.overview} />
      <TechnologyUsed data={technologytaxiboking} />
      <Services data={Taxibookingservices} section={ServiceSectioneTaxibooking}/>
      <WhyChoose data={TaxibookingDevelopment} section={whyChooseSectionTaxibooking} />
      
      <FaqSection
                          title="Frequently Asked Questions"
                          data={TaxibookingFAQ}
                        />
      <ClientTestimonial/>
      <CTASection />



        </>
    )
}
export default page