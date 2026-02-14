import React from 'react'
import Banner from '../web-development-services/WebAppComponents/Banner';
import { statisticsData } from '@/app/data/Statistics';
import Statistics from '../web-development-services/WebAppComponents/Statistics';
import { servicesAndroid, Addroidservices ,ServiceSectioneAndroid } from '@/app/data/services';
import ServiceSection from '../web-development-services/WebAppComponents/ServiceSection';
import { technologyAndroid } from '@/app/data/technology';
import TechnologyUsed from '../components/TechnologyUsed';
import Services from '../web-development-services/WebAppComponents/Services';
import FeaturedProjects from '../web-development-services/WebAppComponents/FeaturedProjects';
import CTASection from '../components/HomeComponent/CTASection';
import { ClientTestimonial } from '../client-reviews/ClientTestimonial';
import WhyChoose from '../web-development-services/WebAppComponents/WhyChoose';
import { AndroidDevelopment , whyChooseSectionAndroid } from '../data/whyChoose';

export const page = () => {
    return (
        <>
           <Banner
        backgroundImage="/uploads/2024/12/android-app.webp"
        title="AN ANDROID APP SOLUTION FOR YOUR BUSINESS"
        subtitle="Are you looking for an illustrious and user-friendly website to represent your business?"
        buttonText="Get Quote"
        buttonLink="/contact-us"
      />
      <Statistics stats={statisticsData} />
      <ServiceSection data={servicesAndroid.overview} />
      <TechnologyUsed data={technologyAndroid} />
      <Services data={Addroidservices} section={ServiceSectioneAndroid}/>
      <WhyChoose data={AndroidDevelopment} section={whyChooseSectionAndroid} />
      <FeaturedProjects />
      <ClientTestimonial/>
      <CTASection />



        </>
    )
}
export default page