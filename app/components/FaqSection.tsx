"use client";

import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

type FAQ = {
  id: number;
  question: string;
  answer: string;
};

type Props = {
  data: FAQ[];
  title?: string;
};

export default function FaqSection({ data, title = "FAQS" }: Props) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section container py-5">

      {/* Dynamic Heading */}
      <h2 className="text-center mb-4">{title}</h2>

      <div className="accordion">
        {data.map((faq, index) => (
          <div className="card-1 mb-3" key={faq.id}>
            <button
              className={`faq-btn ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>

              <span>
                {activeIndex === index ? (
                  <FaMinus size={14} />
                ) : (
                  <FaPlus size={14} />
                )}
              </span>
            </button>

            {activeIndex === index && (
              <div className="card-body">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}