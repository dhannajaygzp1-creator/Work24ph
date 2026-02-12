"use client";

import React from "react";
import Banner from "./WebAppComponents/Banner";
import Statistics from "./WebAppComponents/Statistics";
import { statisticsData } from "@/app/data/Statistics";
import { servicesData } from "@/app/data/services";
import ServiceSection from "./WebAppComponents/ServiceSection";
import TechnologyUsed from "../components/TechnologyUsed";
import technologyData from "@/app/data/technology";
import Services from "./WebAppComponents/Services";
import WhyChoose from "./WebAppComponents/WhyChoose";
import FeaturedProjects from "./WebAppComponents/FeaturedProjects";
import { ClientTestimonial } from "../client-reviews/ClientTestimonial";
import CTASection from "../components/HomeComponent/CTASection";
 
 

const Page = () => {
  return (
    <>
      <Banner
        backgroundImage="/uploads/2024/12/6.jpg"
        title="WEB DEVELOPMENT SERVICES"
        subtitle="We deliver custom web solutions for businesses worldwide."
        buttonText="Contact Us"
        buttonLink="/contact-us"
      />

      <Statistics stats={statisticsData} />
      <ServiceSection data={servicesData.overview} />
      <TechnologyUsed data={technologyData} />
      <Services />
      <WhyChoose />
      <FeaturedProjects />
      <ClientTestimonial />
      <CTASection />
    </>
  );
};

export default Page;
