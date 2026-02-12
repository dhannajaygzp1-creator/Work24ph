import React from 'react'
import Breadcrumb from '../components/Breadcrumb';
import WhyChooseWork24 from './WhyChooseWork24';
import whyChooseWork24Data from "../data/WhyChooseWork24";
import { Work24Ranked } from './Work24Ranked';
import { BadgesSection } from './BadgesSection';

const page = () => {
  return (
    <>
   <Breadcrumb backgroundImage="/uploads/2024/12/6.jpg"/>   
    <WhyChooseWork24 {...whyChooseWork24Data} />      
    <Work24Ranked />
    <BadgesSection />
    </>
  )
}

export default page