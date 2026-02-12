"use client";

import DOMPurify from "dompurify";

import Image from "next/image";
import { services } from "@/app/data/services";
// import DOMPurify from "dompurify";
type ServiceItem = {
  title: string;
  description: string;
  icon: string;
  delay: string;
};

type ServicesProps = {
  data?: ServiceItem[];
};
 

const Services = ({ data = services }: ServicesProps) => {
  return (
    <section className="service-block bg-gradient6 pad-tb">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="common-heading ptag">
              <span>Services </span>
              <h2>Our Services</h2>
              <p className="mb30">
                We think big and have hands in all leading technology platforms to
                provide you a wide array of services.
              </p>
            </div>
          </div>
        </div>

        <div className="row upset link-hover">
          {data.map((service, index) => (
            <div
              key={index}
              className="col-lg-4 col-sm-6 mt30 wow fadeInUp"
              data-wow-delay={service.delay}
            >
              <div className="s-block">
                <div className="s-card-icon">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={90}
                    height={70}
                    className="img-fluid"
                  />
                </div>

                <h4>{service.title}</h4>
                <div dangerouslySetInnerHTML={{ __html: service.description }} />
              </div>
            </div>
          ))}
        </div>

        <div className="-cta-btn mt70">
          <div className="free-cta-title v-center wow zoomInDown" data-wow-delay="1.3s">
            <p>
              Hire a <span>Dedicated Developer</span>
            </p>
            <a href="/contact-us" className="btn-main bg-btn2 lnk">
              Contact Now
              <i className="fas fa-chevron-right fa-icon"></i>
              <span className="circle"></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
