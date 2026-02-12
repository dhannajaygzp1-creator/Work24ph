import React from "react";
import Image from "next/image";

const VideoTestimonials = () => {
  return (
    <section className="reviews-block pad-tb">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="common-heading ptag text-center">
              <span>Reviews</span>
              <h2>Video Testimonials</h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 mt30">
            <div className="reviews-card pr-shadow">
              <div className="review-video- mb20">
                <div
                  className="video-review"
                  data-tilt=""
                  data-tilt-max="5"
                  data-tilt-speed="1000"
                  style={{
                    willChange: "transform",
                    transform:
                      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
                  }}
                >
                  <a
                    className="video-link"
                    href="https://www.youtube.com/watch?v=SZEflIVnhH8?autoplay=1&amp;rel=0?autoplay=1&amp;rel=0"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/uploads/2024/11/client-pic-a.jpg"
                      alt="client"
                      width={400}
                      height={225}
                      className="img-fluid"
                    />
                    <div className="review-vid-details">
                      <div className="-vid-ico">
                        <span className="triangle-play2"></span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="-client-details-">
                <div className="reviewer-text">
                  <h4>Curt N. Call</h4>
                  <p>
                    Business Owner, <small>Jaipur</small>
                  </p>

                  <div className="star-rate">
                    <ul>
                      {[...Array(5)].map((_, i) => (
                        <li key={i}>
                          <span className={i < 4 ? "chked" : ""} aria-hidden="true">
                            <i className="fas fa-star"></i>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonials;