import React from 'react'
import Banner from '../web-development-services/WebAppComponents/Banner';
import { statisticsData } from '@/app/data/Statistics';
import Statistics from '../web-development-services/WebAppComponents/Statistics';
import { ecommerceservices, servicesecommerce ,ServiceSectionecommerce} from '../data/services';
import ServiceSection from '../web-development-services/WebAppComponents/ServiceSection';
import { technologyEcommerce } from '@/app/data/technology';
import TechnologyUsed from '../components/TechnologyUsed';
import Services from '../web-development-services/WebAppComponents/Services';
import { ECOMMERCEDevelopment , whyChooseSectionECOMMERCE } from '../data/whyChoose';
import WhyChoose from '../web-development-services/WebAppComponents/WhyChoose';
import FeaturedProjects from '../web-development-services/WebAppComponents/FeaturedProjects';
import { ClientTestimonial } from '../client-reviews/ClientTestimonial';
import CTASection from '../components/HomeComponent/CTASection';
 


const page = () => {
  return (
    <>
         <Banner
        backgroundImage="/uploads/2024/12/dotnet-dev.jpg.webp"
        title="Ecommerce Development"
        subtitle="Are you looking to take your business online and mark your digital presence? Hire the best eCommerce web developer, who can help blend innovation, and creativity, to your e-store and help market your business digitally."
        buttonText="Get Quote"
        buttonLink="/contact-us"
      />
      <Statistics stats={statisticsData} />
      <ServiceSection data={servicesecommerce.overview} />
      <TechnologyUsed data={technologyEcommerce} />
      <Services data={ecommerceservices}  section={ServiceSectionecommerce}/>
      <WhyChoose data={ECOMMERCEDevelopment} section={whyChooseSectionECOMMERCE} />
      <FeaturedProjects />
      <ClientTestimonial/>
      <CTASection /> 
    </>
  )
}

export default page