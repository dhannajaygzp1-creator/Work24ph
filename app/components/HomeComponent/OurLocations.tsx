import React from "react";
import Image from "next/image";
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import Link from "next/link";

export const OurLocations = () => {
  return (
    <section className="our-office pad-tb">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="common-heading">
              <span>Our Locations</span>
              <h2>Our Office</h2>
            </div>
          </div>
        </div>

        <div className="row justify-content-center upset shape-numm">
          <div
            className="col-lg-4 col-sm-6 shape-loc wow fadeInUp"
            data-wow-delay=".2s"
          >
            <div className="office-card">
              <div
                className="skyline-img"
                data-tilt
                data-tilt-max="4"
                data-tilt-speed="1000"
              >
                <Image
                  src="/uploads/2024/11/newyork.png"
                  alt="city"
                  width={400}
                  height={300}
                  className="img-fluid"
                />
              </div>

              <div className="office-text">
                <h4>Cainta, Rizal 1900</h4>

                <Link
                  href="https://www.facebook.com/work24philippines"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline rount-btn"
                >
                  <FaFacebook />
                </Link>

                <Link
                  href="https://www.linkedin.com/company/work24ph-opc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline rount-btn"
                >
                  <FaLinkedin />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
