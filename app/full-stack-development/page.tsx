import React from 'react'
import Banner from '../web-development-services/WebAppComponents/Banner';
import { statisticsData } from '@/app/data/Statistics';
import Statistics from '../web-development-services/WebAppComponents/Statistics';
import { Fullstackservices, servicesFullstack } from '../data/services';
import ServiceSection from '../web-development-services/WebAppComponents/ServiceSection';
import { technologyFullstack } from '@/app/data/technology';
import TechnologyUsed from '../components/TechnologyUsed';
import Services from '../web-development-services/WebAppComponents/Services';
import { ourbest , whyChooseSectionfullstack } from '../data/whyChoose';
import WhyChoose from '../web-development-services/WebAppComponents/WhyChoose';
import FeaturedProjects from '../web-development-services/WebAppComponents/FeaturedProjects';
import { ClientTestimonial } from '../client-reviews/ClientTestimonial';
import CTASection from '../components/HomeComponent/CTASection';
 


const page = () => {
  return (
    <>
         <Banner
        backgroundImage="/uploads/2024/12/dotnet-dev.jpg.webp"
        title="FULL STACK DEVELOPMENT COMPANY"
        subtitle="We have established ourselves as one of the top Full Stack development companies, through the support of our Full Stack developers, and our one of a kind client-centric approach."
        buttonText="Get Quote"
        buttonLink="/contact-us"
      />
      <Statistics stats={statisticsData} />
      <ServiceSection data={servicesFullstack.overview} />
      <TechnologyUsed data={technologyFullstack} />
      <Services data={Fullstackservices} />
      <WhyChoose data={ourbest} section={whyChooseSectionfullstack} />
      <FeaturedProjects />
      <ClientTestimonial/>
      <CTASection />
    </>
  )
}

export default page