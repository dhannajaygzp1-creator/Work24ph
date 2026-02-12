import Image from "next/image";
import * as whyChooseData from "@/app/data/whyChoose";

type WhyChooseItem = {
  title: string;
  description: string;
  icon: string;
  delay: string;
};

interface WhyChooseSection {
  tag: string;
  title: string;
  description: string;
}

interface WhyChooseProps {
  data?: WhyChooseItem[];
  section?: WhyChooseSection;
}

const WhyChoose = ({
  data = whyChooseData.default,
  section = whyChooseData.whyChooseSection,
}: WhyChooseProps) => {
  return (
    <section className="service-block pad-tb bg-gradient7">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="common-heading ptag">
              <span>{section.tag}</span>
              <h2>{section.title}</h2>
              <p className="mb30">{section.description}</p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          {data.map((item, index) => (
            <div
              key={index}
              className="col-lg-4 col-sm-6 mt30 wow fadeIn"
              data-wow-delay={item.delay}
            >
              <div className="s-block wide-sblock">
                <div className="s-card-icon">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={60}
                    height={60}
                    className="img-fluid"
                  />
                </div>

                <div className="s-block-content">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="-cta-btn mt70">
          <div
            className="free-cta-title v-center wow zoomInDown"
            data-wow-delay="1.8s"
          >
            <p>
              Let's Start a <span>New Project</span> Together
            </p>
            <a href="/contact-us" className="btn-main bg-btn2 lnk">
              Inquire Now
              <i className="fas fa-chevron-right fa-icon"></i>
              <span className="circle"></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
