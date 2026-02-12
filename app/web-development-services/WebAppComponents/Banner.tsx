import React from "react";
import Link from "next/link";

interface BannerProps {
  backgroundImage: string;
  title: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
}

const Banner: React.FC<BannerProps> = ({
  backgroundImage,
  title,
  subtitle,
  buttonText = "Get Quote",
  buttonLink = "/contact-us/",
}) => {
  return (
    <section
      className="breadcrumb-area banner-5"
      style={{ backgroundImage: `url("${backgroundImage}")` }}
      data-background={backgroundImage}
    >
      <div className="text-block">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="bread-titlev2">
                <h1
                  className="wow fadeInUp"
                  data-wow-delay=".2s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.2s",
                    animationName: "fadeInUp",
                  }}
                >
                  {title}
                </h1>
                {subtitle && (
                  <p
                    className="mt20 wow fadeInUp"
                    data-wow-delay=".4s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.4s",
                      animationName: "fadeInUp",
                    }}
                  >
                    {subtitle}
                  </p>
                )}
                {buttonText && buttonLink && (
                  <Link href={buttonLink}
                      className="btn-main bg-btn2 lnk mt20 wow zoomInDown"
                      data-wow-delay=".6s"
                      style={{
                        visibility: "visible",
                        animationDelay: "0.6s",
                        animationName: "zoomInDown",
                      }}
                    >
                      {buttonText} <i className="fas fa-chevron-right fa-icon"></i>
                      <span className="circle"></span>
                     
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
