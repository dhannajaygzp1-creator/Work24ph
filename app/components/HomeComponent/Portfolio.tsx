'use client'

import React from 'react'
import Image from 'next/image'

const Portfolio = () => {
  return (
   <>

    <section className="portfolio-section pad-tb">
      <div className="container">

        {/* HEADING */}
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="common-heading">
              <span>Our Professional Work</span>
              <h2 className="mb0">Our Latest Creative Work</h2>
            </div>
          </div>
        </div>

        {/* PORTFOLIO GRID */}
        <div className="row">

          {/* ITEM 1 */}
          <div
            className="col-lg-8 col-sm-8 mt60 wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <div className="isotope_item hover-scale">
              <div
                className="item-image"
                data-tilt
                data-tilt-max="2"
                data-tilt-speed="1000"
              >
                <Image
                  src="/uploads/2024/11/image-d.jpg"
                  alt="Ecommerce Development"
                  width={800}
                  height={500}
                  className="img-fluid"
                />
              </div>
              <div className="item-info">
                <h4>Ecommerce Development</h4>
              </div>
            </div>
          </div>

          {/* ITEM 2 */}
          <div
            className="col-lg-4 col-sm-4 mt60 wow fadeInUp"
            data-wow-delay="0.4s"
          >
            <div className="isotope_item hover-scale">
              <div
                className="item-image"
                data-tilt
                data-tilt-max="2"
                data-tilt-speed="1000"
              >
                <Image
                  src="/uploads/2024/11/image-1.jpg"
                  alt="Web Application"
                  width={500}
                  height={500}
                  className="img-fluid"
                />
              </div>
              <div className="item-info">
                <h4>Web Application</h4>
              </div>
            </div>
          </div>

          {/* ITEM 3 */}
          <div
            className="col-lg-4 col-sm-4 mt60 wow fadeInUp"
            data-wow-delay="0.6s"
          >
            <div className="isotope_item hover-scale">
              <div
                className="item-image"
                data-tilt
                data-tilt-max="2"
                data-tilt-speed="1000"
              >
                <Image
                  src="/uploads/2024/11/image-6.jpg"
                  alt="Digital Design"
                  width={500}
                  height={500}
                  className="img-fluid"
                />
              </div>
              <div className="item-info">
                <h4>Digital Design</h4>
              </div>
            </div>
          </div>

          {/* ITEM 4 */}
          <div
            className="col-lg-8 col-sm-8 mt60 wow fadeInUp"
            data-wow-delay="0.8s"
          >
            <div className="isotope_item hover-scale">
              <div
                className="item-image"
                data-tilt
                data-tilt-max="2"
                data-tilt-speed="1000"
              >
                <Image
                  src="/uploads/2024/11/image-c.jpg"
                  alt="Mobile Application"
                  width={800}
                  height={500}
                  className="img-fluid"
                />
              </div>
              <div className="item-info">
                <h4>Mobile Application</h4>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  

   </>
  )
}

export default Portfolio