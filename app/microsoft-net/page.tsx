import React from 'react';
import Banner from '../web-development-services/WebAppComponents/Banner';
import { statisticsData } from '@/app/data/Statistics';
import Statistics from '../web-development-services/WebAppComponents/Statistics';
import { servicesDotNet, microsoftservices } from '@/app/data/services';
import ServiceSection from '../web-development-services/WebAppComponents/ServiceSection';
import { technologyDotNet } from '@/app/data/technology';
import TechnologyUsed from '../components/TechnologyUsed';
import Services from '../web-development-services/WebAppComponents/Services';
import FeaturedProjects from '../web-development-services/WebAppComponents/FeaturedProjects';
import Testimonials from '../components/HomeComponent/Testimonials';
import CTASection from '../components/HomeComponent/CTASection';

const Page = () => {
  return (
    <>
      <Banner
        backgroundImage="/uploads/2024/12/Microsoft-.NET_.webp"
        title="Microsoft .Net"
        buttonText="Get Quote"
        buttonLink="/contact-us"
      />
      <Statistics stats={statisticsData} />
      <ServiceSection data={servicesDotNet.overview} />
      <TechnologyUsed data={technologyDotNet} />
      <Services data={microsoftservices} />
      <FeaturedProjects />
      <Testimonials />
      <CTASection />
    </>
  );
};

export default Page;