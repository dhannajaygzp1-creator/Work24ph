'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const CTASection = () => {
  return (
    <section className="cta-area pad-tb">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="common-heading">
              <span>Let's work together</span>
              <h2>We&apos;d Love to Listen to Your Requirements</h2>

              <Link href="/contact-us/" className="btn-outline">
                Contact Us <i className="fas fa-chevron-right fa-icon"></i>
              </Link>

              <p className="cta-call">
                Or call us now{' '}
                <a href="tel:+639178044284">
                  <i className="fas fa-phone-alt"></i> +639178044284
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SHAPES */}
      <div className="shape shape-a1">
        <Image src="/images/shape/shape-3.svg" alt="shape" width={120} height={120} />
      </div>
      <div className="shape shape-a2">
        <Image src="/images/shape/shape-4.svg" alt="shape" width={120} height={120} />
      </div>
      <div className="shape shape-a3">
        <Image src="/images/shape/shape-13.svg" alt="shape" width={120} height={120} />
      </div>
      <div className="shape shape-a4">
        <Image src="/images/shape/shape-11.svg" alt="shape" width={120} height={120} />
      </div>
    </section>
  )
}

export default CTASection
