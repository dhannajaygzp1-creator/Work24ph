import React from "react";
import Breadcrumb from "../components/Breadcrumb";


import VideoTestimonials from "./VideoTestimonials";
import { ClientTestimonial } from "./ClientTestimonial";
import ExternalReviewLinks from "./ExternalReviewLinks";


const Page = () => {
    return (
        <>
            <Breadcrumb backgroundImage="/uploads/2024/12/2.jpg" />
            <ClientTestimonial />
            <VideoTestimonials />
            <ExternalReviewLinks />
        </>
    );
};

export default Page;
