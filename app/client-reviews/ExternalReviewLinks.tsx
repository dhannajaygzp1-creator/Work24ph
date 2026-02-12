import React from "react";

const ExternalReviewLinks = () => {
  return (
    <section className="reviews-block bg-gradient5 pad-tb">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="common-heading ptag">
              <span>Reviews</span>
              <h2>External Review Link</h2>
              <p className="mb30">Check our customers success stories.</p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="review-ref mt60">
              <div className="review-title-ref">
                <h4>Read More Reviews</h4>
                <p>Read our reviews from all over world.</p>
              </div>
              <div className="review-icons">
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="wow fadeIn"
                  data-wow-delay=".2s"
                  style={{ visibility: "visible", animationDelay: "0.2s", animationName: "fadeIn" }}
                >
                  <img
                    src="/uploads/2024/11/reviews-icon-1.png"
                    alt="review"
                    className="img-fluid"
                  />
                </a>

                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="wow fadeIn"
                  data-wow-delay=".2s"
                  style={{ visibility: "visible", animationDelay: "0.2s", animationName: "fadeIn" }}
                >
                  <img
                    src="/uploads/2024/11/reviews-icon-3.png"
                    alt="review"
                    className="img-fluid"
                  />
                </a>

                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="wow fadeIn"
                  data-wow-delay=".2s"
                  style={{ visibility: "visible", animationDelay: "0.2s", animationName: "fadeIn" }}
                >
                  <img
                    src="/uploads/2024/11/reviews-icon-2.png"
                    alt="review"
                    className="img-fluid"
                  />
                </a>

                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="wow fadeIn"
                  data-wow-delay=".2s"
                  style={{ visibility: "visible", animationDelay: "0.2s", animationName: "fadeIn" }}
                >
                  <img
                    src="/uploads/2024/11/awhover-03.svg"
                    alt="review"
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExternalReviewLinks;
