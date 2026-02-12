'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const ServiceHome = () => {
  return (
    <section className="service-section-prb pad-tb">
      <div className="container">
        <div className="row upset">

          {/* LEFT BIG CARD */}
          <div
            data-tilt
            data-tilt-max="5"
            data-tilt-speed="1000"
            className="col-lg-6-cus mt30- wow fadeInUp"
            data-wow-delay=".2s"
          >
            <div className="service-sec-brp srvc-bg-nx bg-gradient13 text-w">
              <h4 className="mb10">GROWTH DRIVER</h4>
              <p>
                Transform your digital paradigm with the right technology partner.
                We boost your mission with our expertise in technology and full-service
                development needs.
              </p>
              <Link href="/" className="mt20 link-prb">
                Learn More <i className="fas fa-chevron-right"></i>
              </Link>
            </div>
          </div>

          {/* WEB DEVELOPMENT */}
          <div
            data-tilt
            data-tilt-max="5"
            data-tilt-speed="1000"
            className="col-lg-3-cus mt30- wow fadeInUp"
            data-wow-delay=".4s"
          >
            <div className="service-sec-list srvc-bg-nx srcl1">
              <Image src="../../uploads/2024/11/development.svg" alt="service" width={60} height={60} />
              <h5 className="mb10">Web App Development</h5>
              <ul className="-service-list">
                <li><Link href="/">Php</Link></li>
                <li><Link href="/">.Net</Link></li>
                <li><Link href="/">Java</Link></li>
                <li><Link href="/">Joomla</Link></li>
              </ul>
              <p>
                We offer end-to-end web development solutions by strategically combining
                latest web technologies with mature project methodologies.
              </p>
            </div>
          </div>

          {/* ECOMMERCE */}
          <div
            data-tilt
            data-tilt-max="5"
            data-tilt-speed="1000"
            className="col-lg-3-cus mt30- wow fadeInUp"
            data-wow-delay=".4s"
          >
            <div className="service-sec-list srvc-bg-nx srcl2">
              <Image src="/uploads/2024/11/ecommerce.svg" alt="service" width={60} height={60} />
              <h5 className="mb10">Ecommerce Development</h5>
              <ul className="-service-list">
                <li><Link href="/">WP</Link></li>
                <li><Link href="/">Joomla</Link></li>
                <li><Link href="/">Magento</Link></li>
                <li><Link href="/">Shopify</Link></li>
              </ul>
              <p>
                We design & develop Ecommerce stores that deliver delightful shopping
                experiences and boost conversions.
              </p>
            </div>
          </div>

          {/* MOBILE APP */}
          <div
            data-tilt
            data-tilt-max="5"
            data-tilt-speed="1000"
            className="col-lg-3-cus mt30- wow fadeInUp"
            data-wow-delay=".4s"
          >
            <div className="service-sec-list srvc-bg-nx srcl3">
              <Image src="/uploads/2024/11/app.svg" alt="service" width={60} height={60} />
              <h5 className="mb10">Mobile App Development</h5>
              <ul className="-service-list">
                <li><Link href="/">iPhone</Link></li>
                <li><Link href="/">Android</Link></li>
                <li><Link href="/">Cross Platform</Link></li>
              </ul>
              <p>
                From strategy to deployment, we deliver enterprise mobility solutions
                for mobile-first businesses.
              </p>
            </div>
          </div>

          {/* TRENDING TECH */}
          <div
            data-tilt
            data-tilt-max="5"
            data-tilt-speed="1000"
            className="col-lg-3-cus mt30- wow fadeInUp"
            data-wow-delay=".4s"
          >
            <div className="service-sec-list srvc-bg-nx srcl4">
              <Image src="/uploads/2024/11/tech.svg" alt="service" width={60} height={60} />
              <h5 className="mb10">Trending Technologies</h5>
              <ul className="-service-list">
                <li><Link href="/">React.js</Link></li>
                <li><Link href="/">Node.js</Link></li>
                <li><Link href="/">Angular</Link></li>
                <li><Link href="/">AI</Link></li>
              </ul>
              <p>
                Build next-gen products using AI, AR, VR, Chatbots, and modern JS
                frameworks.
              </p>
            </div>
          </div>

          {/* 3D RENDERING */}
          <div
            data-tilt
            data-tilt-max="5"
            data-tilt-speed="1000"
            className="col-lg-3-cus mt30- wow fadeInUp"
            data-wow-delay=".4s"
          >
            <div className="service-sec-list srvc-bg-nx srcl5">
              <Image src="/uploads/2024/11/seo.svg" alt="service" width={60} height={60} />
              <h5 className="mb10">3D Rendering</h5>
              <ul className="-service-list">
                <li><Link href="/">NeRF</Link></li>
                <li><Link href="/">Gaussian Splatting</Link></li>
              </ul>
              <p>
                Next-generation 3D visualization techniques transforming digital
                product exploration.
              </p>
            </div>
          </div>

        </div>

        {/* CTA */}
        <div className="-cta-btn mt70">
          <div className="free-cta-title v-center zoomInDown wow" data-wow-delay="1.4s">
            <p>Hire a <span>Dedicated Developer</span></p>
            <Link href="/contact-us" className="btn-main bg-btn2 lnk">
              Contact Us <i className="fas fa-chevron-right fa-icon"></i>
              <span className="circle"></span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}
