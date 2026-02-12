import React from 'react'
import Banner from '../web-development-services/WebAppComponents/Banner';
import { statisticsData } from '@/app/data/Statistics';
import Statistics from '../web-development-services/WebAppComponents/Statistics';
import { servicesCMSDevelopment, cmsservices } from '@/app/data/services';
import ServiceSection from '../web-development-services/WebAppComponents/ServiceSection';
import { technologycmsdeveloper } from '@/app/data/technology';
import TechnologyUsed from '../components/TechnologyUsed';
import Services from '../web-development-services/WebAppComponents/Services';
import FeaturedProjects from '../web-development-services/WebAppComponents/FeaturedProjects';
import CTASection from '../components/HomeComponent/CTASection';
import { ClientTestimonial } from '../client-reviews/ClientTestimonial';
import WhyChoose from '../web-development-services/WebAppComponents/WhyChoose';
import { CMSDevelopment , whyChooseSectionfcms } from '../data/whyChoose';

export const page = () => {
    return (
        <>
           <Banner
        backgroundImage="/uploads/2024/12/dotnet-dev.jpg.webp"
        title="CMS Development"
        subtitle="In CMS development since 2008, work24ph competently delivers custom CMS solutions that combine responsive UI, rich functionality, strong data security, and high scalability."
        buttonText="Get Quote"
        buttonLink="/contact-us"
      />
      <Statistics stats={statisticsData} />
      <ServiceSection data={servicesCMSDevelopment.overview} />
      <TechnologyUsed data={technologycmsdeveloper} />
      <Services data={cmsservices} />
      <WhyChoose data={CMSDevelopment} section={whyChooseSectionfcms} />
      <FeaturedProjects />
      <ClientTestimonial/>
      <CTASection />



        </>
    )
}
export default page