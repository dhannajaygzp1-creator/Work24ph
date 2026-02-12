'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const WhyChooseHome = () => {
  return (
    <section className="why-choos-lg pad-tb deep-dark">
      <div className="container">
        <div className="row">

          {/* LEFT CONTENT */}
          <div className="col-lg-6">
            <div className="common-heading text-l">
              <span>Why Choose Us</span>

              <h2 className="mb20">
                Work24 Philippines{' '}
                <span className="text-second text-bold">Cross-Border</span>{' '}
                Collaboration Between the Philippines, India, and Southeast Asia.
              </h2>

              <p>
                There is an unwritten rule in the IT industry. If a client likes your
                work, he/she will come back to you. We at Work24 Philippines are ready
                to make our first impression long-lasting in the minds of our customers.
                We aim to overachieve for clients.
              </p>

              <div className="itm-media-object mt40 tilt-3d">

                {/* ITEM 1 */}
                <div className="media mt40">
                  <div
                    className="img-ab- base"
                    data-tilt
                    data-tilt-max="20"
                    data-tilt-speed="1000"
                  >
                    <Image
                      src="/uploads/2024/11/worker.svg"
                      alt="Dedicated Team"
                      width={60}
                      height={60}
                      className="layer"
                    />
                  </div>

                  <div className="media-body">
                    <h4>A Dedicated Team of Experts</h4>
                    <p>
                      We strive to perform the tasks efficiently and meet deadlines
                      with our experts’ sound knowledge into the development of
                      customer-oriented projects.
                    </p>
                  </div>
                </div>

                {/* ITEM 2 */}
                <div className="media mt40">
                  <div
                    className="img-ab- base"
                    data-tilt
                    data-tilt-max="20"
                    data-tilt-speed="1000"
                  >
                    <Image
                      src="/uploads/2024/11/deal.svg"
                      alt="On Time Delivery"
                      width={60}
                      height={60}
                      className="layer"
                    />
                  </div>

                  <div className="media-body">
                    <h4>Completion of Project Within the Project Timeline</h4>
                    <p>
                      In-depth expertise, time-tested processes and tech excellence
                      allow us to deliver optimal output. We implement proven
                      methodologies to deliver software on time.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-lg-6">
            <div
              data-tilt
              data-tilt-max="5"
              data-tilt-speed="1000"
              className="single-image bg-shape-dez wow fadeIn"
              data-wow-duration="2s"
            >
              <Image
                src="/uploads/2024/11/about-company.jpg"
                alt="About Company"
                width={600}
                height={500}
                className="img-fluid"
              />
            </div>

            <div className="cta-card mt60 text-center">
              <h3 className="mb20">
                People + Tech +{' '}
                <span className="text-second text-bold">Philippines</span>
              </h3>

              <p>
                People, Technology, and the Philippines present a powerful narrative
                of innovation and community-driven progress.
              </p>

              <Link
                href="/about-us"
                className="btn-outline lnk mt30"
              >
                About Us
                <i className="fas fa-chevron-right fa-icon"></i>
                <span className="circle"></span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default WhyChooseHome
