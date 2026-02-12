'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const workCategories = [
  {
    title: 'Development Services',
    href: '/development-services/',
    img: '/uploads/2024/11/icon-1.png',
    delay: '.2s',
    card: 'cd1',
  },
  {
    title: 'CTO-as-a-Service',
    href: '/cto-as-a-service-revolutionizing-tech-leadership-for-startups-and-smbs/',
    img: '/uploads/2024/11/icon-2.png',
    delay: '.4s',
    card: 'cd2',
  },
  {
    title: 'Marketing Database',
    href: '/marketing-database-the-backbone-of-data-driven-campaigns/',
    img: '/uploads/2024/11/icon-3.png',
    delay: '.6s',
    card: 'cd3',
  },
  {
    title: '3D Rendering',
    href: '/3d-rendering-transforming-ideas-into-visual-reality/',
    img: '/uploads/2024/11/icon-4.png',
    delay: '.8s',
    card: 'cd4',
  },
  {
    title: 'Enterprise Service',
    href: '/enterprise-service-enhancing-business-efficiency-through-scalable-solutions/',
    img: '/uploads/2024/11/icon-6.png',
    delay: '1.2s',
    card: 'cd5',
  },
  {
    title: 'Learning Management System',
    href: '/learning-management-system/',
    img: '/uploads/2024/11/icon-7.png',
    delay: '1.4s',
    card: 'cd6',
  },
  {
    title: 'Event & Ticketing System',
    href: '/event-ticketing-system/',
    img: '/uploads/2024/11/icon-10.png',
    delay: '2s',
    card: 'cd7',
  },
  {
    title: 'Restaurant Management System',
    href: '/restaurant-management-system/',
    img: '/uploads/2024/11/icon-11.png',
    delay: '2.2s',
    card: 'cd8',
  },
]

const Businesses = () => {
  return (
    <section className="work-category pad-tb">
      <div className="container">
        <div className="row">

          {/* LEFT CONTENT */}
          <div className="col-lg-4 v-center">
            <div className="common-heading text-l">
              <span>Industries we work with</span>
              <h2>Helping Businesses with different solutions</h2>
              <p>
                Our team of experts has a multitude of experience in catering
                to various requirements of businesses.
              </p>
            </div>
          </div>

          {/* RIGHT CARDS */}
          <div className="col-lg-8">
            <div className="work-card-set">

              {workCategories.map((item) => (
                <Link key={item.title} href={item.href}>
                  <div
                    className="icon-set wow fadeIn"
                    data-wow-delay={item.delay}
                  >
                    <div className={`work-card ${item.card}`}>
                      <div className="icon-bg">
                        <Image
                          src={item.img}
                          alt={item.title}
                          width={60}
                          height={60}
                        />
                      </div>
                      <p>{item.title}</p>
                    </div>
                  </div>
                </Link>
              ))}

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Businesses

