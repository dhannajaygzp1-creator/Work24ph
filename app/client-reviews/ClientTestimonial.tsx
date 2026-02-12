import React from 'react'
import { reviews } from "../data/reviews";
import { FcRating } from "react-icons/fc";
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";
export const ClientTestimonial = () => {
    return (
        <>
          <section className="reviews-block bg-gradient5 pad-tb">
        <div className="container">
          {/* Heading */}
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="common-heading ptag text-center">
                <span>Reviews</span>
                <h2>Client Testimonials</h2>
                <p className="mb30">Check our customers success stories.</p>
              </div>
            </div>
          </div>

          {/* Reviews */}
          <div className="row">
            {reviews.map((review, idx) => (
              <div key={idx} className="col-md-4 mt30">
                <div className="reviews-card pr-shadow">
                  <div className="row v-center">
                    <div className="col">
                      <span className="revbx-lr">
                      <FaQuoteLeft />
                      </span>
                    </div>
                  </div>
                  <div className="review-text">
                    <p>{review.text}</p>
                  </div>
                  <div className="-client-details-">
                    <div className="-reviewr">
                      <Image
                        src={review.image}
                        alt={review.name}
                        width={98}
                        height={99}
                        className="img-fluid"
                      />
                    </div>
                    <div className="reviewer-text">
                      <h4>{review.name}</h4>
                      <p>
                        {review.role}
                        {review.company ? `, ${review.company}` : ""}
                        {review.location ? `, ${review.location}` : ""}
                      </p>
                      <div className="star-rate">
                        <ul>
                          {[...Array(5)].map((_, i) => (
                            <li key={i}>
                              <a
                                href="#"
                                className={i < review.rating ? "chked" : ""}
                              >
                               <FcRating />
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
        </>
    )
}
