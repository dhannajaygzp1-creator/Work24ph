"use client";

import Image from "next/image";
import Link from "next/link";
import { hero } from "../../data/slider";
import { FaChevronRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";

import { Autoplay } from "swiper/modules";

export default function HeroSection() {
  const { hero: heroData, services } = hero;

  return (
    <section className="hero-card-web bg-gradient12 shape-bg3">
      <div className="hero-main-rp container-fluid">
        <div className="row">

           {/* LEFT */}
          <div className="col-lg-5">
            <div className="hero-heading-sec">
            <h2 style={{ lineHeight: "1.1" }}>
  <span style={{ display: "block" }}>Web.</span>
  <span style={{ display: "block" }}>Mobile.</span>
  <span style={{ display: "block" }}>Hosting.</span>
</h2>

              <p>{heroData.paragraph}</p>

              <Link href={heroData.button_url1} className="btn-main bg-btn lnk">
                {heroData.button_name}
                <FaChevronRight />
                <span className="circle"></span>
              </Link>
<div
  className="awards-block-tt mx-auto mx-lg-0"
  style={{
    maxWidth: "450px",
  }}
>
  <Image
    src="/awards-logo.png"
    alt="Awards"
    width={450}
    height={70}
    style={{
      width: "100%",
      height: "auto",
    }}
    priority
  />
</div>


            </div>
          </div>

          {/* RIGHT */}
          <div className="col-lg-7">
            <div className="hero-content-sec">
              <div className="video-intro-pp">
                <a
                  className="video-link play-video"
                  href={`${heroData.video_url}?autoplay=1&rel=0`}
                >
                  <span className="triangle-play"></span>
                </a>
              </div>

              <div className="title-hero-oth">
  <p
    className="text-center text-lg-start"
    style={{ lineHeight: "1.25" }}
  >
    <span
      style={{
        color: "#ffffff",
        display: "block",
      }}
    >
      We design digital solutions
    </span>

    <span
      style={{
        color: "#f5c400",
        display: "block",
        fontWeight: "600",
      }}
    >
      for brands and companies
    </span>
  </p>
</div>

            </div>

            {/* SERVICES SLIDER */}
            <div className="hero-right-scmm" style={{ marginTop: "80px" }}>
              <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 2500 }}
                spaceBetween={20}
                slidesPerView={3}
                loop={true}
                breakpoints={{
                  0: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1200: { slidesPerView: 3 },
                }}
              >
                {services.map((service) => (
                  <SwiperSlide key={service.id}>
                    <Link href={`/service/${service.slug}`}>
                      <div className={`service-slide card-bg-${service.background}`}>
                        <div className="service-card-hh">
                          <div className="image-sr-mm">
                            <Image
                              src={service.image}
                              alt={service.title}
                              width={280}
                              height={270}
                            />
                          </div>
                          <div className="title-serv-c">
                            <span>{service.title}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}