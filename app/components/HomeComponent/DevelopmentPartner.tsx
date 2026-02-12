'use client'

import React from 'react'

import Link from 'next/link';


const DevelopmentPartner = () => {
  return (
    <>
       <section className="badges-section bg-gradient5 pad-tb">
      <div className="container">

        {/* HEADING */}
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="common-heading w-tdxt">
              <span>We establish RELATIONSHIPS</span>
              <h2>Your TRUSTED Web &amp; App Development Partner</h2>
            </div>
          </div>
        </div>

        {/* (Empty row kept for layout consistency / future badges) */}
        <div className="row"></div>

        {/* CTA */}
        <div className="-cta-btn mt70">
          <div
            className="free-cta-title v-center wow fadeInUp"
            data-wow-delay="1s"
          >
            <p>
              We <span>Promise.</span> We <span>Deliver.</span>
            </p>

            <Link
              href="/contact-us"
              className="btn-main bg-btn2 lnk"
            >
              Let&apos;s Work Together
              <i className="fas fa-chevron-right fa-icon"></i>
              <span className="circle"></span>
            </Link>
          </div>
        </div>

      </div>
    </section>
    </>
  )
}

export default DevelopmentPartner