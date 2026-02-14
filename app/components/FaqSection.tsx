"use client";
import { useState } from "react";
import { faqData } from "@/app/data/faqData";
import { FaPlus, FaMinus } from "react-icons/fa";


export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (

    <section className="pad-tb">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="common-heading">
              <h2 className="mb0 text-center">FAQS</h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 mt60">
            <div className="accordion">
              {faqData.map((faq, index) => (
                <div className="card-1 mb-3" key={faq.id}>
                  <div className="card-header">
                    <button
                    className={`faq-btn ${activeIndex === index ? "active" : ""}`}
                    onClick={() => toggleFAQ(index)}
                  >
                    <span>{faq.question}</span>

                    <span className="faq-icon">
                      {activeIndex === index ? <FaMinus size={14} /> : <FaPlus size={14} />}
                    </span>
                  </button>
                   
                  </div>

                  {activeIndex === index && (
                    <div className="card-body">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
