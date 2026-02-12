'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

const videoTestimonials = [
  {
    name: 'Cina Cleaves',
    img: '/uploads/2024/11/client-pic.jpg',
    video: 'https://www.youtube.com/watch?v=8ULKpQmh-dc',
  },
  {
    name: 'Mr Omar',
    img: '/uploads/2024/11/client-pic-a.jpg',
    video: 'https://www.youtube.com/watch?v=8ULKpQmh-dc',
  },
]

const testimonials = [
  {
    text:
      'Since last 3 years WORK24 team working with my dream project MyAvin all in one app for Indonesia...',
    name: 'Vinod',
    role: 'MD, (MyAvin.com), Indonesia',
  },
  {
    text:
      'Jitendra Dadhaniya is a very passionate & talented IT professional!',
    name: 'Reginald Go',
    role: 'Chairman (Cocotel), Philippines',
  },
  {
    text:
      'We have started 1 year back with 2 developer from WORK24 and now my team reach to 25...',
    name: 'Mathilda Burns',
    role: 'Bakery Shop, Tronto, Italy',
  },
]

const Testimonials = () => {
  return (
    <section className="testinomial-section bg-none pad-tb">
      <div className="container">

        {/* HEADING */}
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="common-heading">
              <span>What our clients say about Work24 Philippines.</span>
              <h2>Over 1200+ Satisfied Clients and Growing</h2>
            </div>
          </div>
        </div>

        <div className="row">

          {/* VIDEO SLIDER */}
          <div className="col-lg-6">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={2}
              autoplay={{ delay: 3000 }}
              breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
              }}
              className="video-testimonials"
            >
              {videoTestimonials.map((item, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="video-review"
                    data-tilt
                    data-tilt-max="5"
                    data-tilt-speed="1000"
                  >
                    <a className="video-link" href={item.video} target="_blank">
                      <Image
                        src={item.img}
                        alt={item.name}
                        width={500}
                        height={350}
                        className="img-fluid"
                      />
                      <div className="review-vid-details">
                        <div className="-vid-ico">
                          <span className="triangle-play2"></span>
                        </div>
                        <p>{item.name}</p>
                      </div>
                    </a>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* TEXT SLIDER */}
          <div className="col-lg-6">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{ delay: 4000 }}
              pagination={{ clickable: true }}
              className="testimonial-card-a pl25"
            >
              {testimonials.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="testimonial-card">
                    <div className="t-text">
                      <p>{item.text}</p>
                    </div>

                    <div className="client-thumbs mt30">
                      <div className="media v-center">
                        <div className="user-image bdr-radius">
                          <Image
                            src="/uploads/2024/11/client-user.png"
                            alt={item.name}
                            width={98}
                            height={99}
                          />
                        </div>
                        <div className="media-body user-info v-center">
                          <h5>{item.name}</h5>
                          <p>{item.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>

        {/* REVIEW ICONS */}
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="review-ref mt100">
              <div className="review-title-ref">
                <h4>Read More Reviews</h4>
                <p>Read our reviews from all over world.</p>
              </div>

              <div className="review-icons">
                {[
                  'reviews-icon-1.png',
                  'reviews-icon-2.png',
                  'awhover-03.svg',
                  'reviews-icon-3.png',
                ].map((icon, index) => (
                  <Link key={index} href="#">
                    <Image
                      src={`/uploads/2024/11/${icon}`}
                      alt="review"
                      width={120}
                      height={60}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    
    </section>
  )
}

export default Testimonials
