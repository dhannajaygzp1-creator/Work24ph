// "use client";

import Image from "next/image";

type TechnologySection = {
  tag: string;
  title: string;
};

type TechnologyIcon = {
  src: string;
  alt: string;
};

interface TechnologyUsedProps {
  data: {
    section: TechnologySection;
    icons: TechnologyIcon[];
  };
}

export default function TechnologyUsed({ data }: TechnologyUsedProps) {
  return (
    <section className="techonology-used- pad-tb" style={{ background: "#f9f9f9" }}>
      <div className="container">

        {/* HEADING */}
        <div className="row justify-content-center">
          <div className="col-lg-12 text-center">
            <span>{data.section.tag}</span>
            <h2>{data.section.title}</h2>
            <p>{data.section.des}</p>
          </div>
        </div>

        {/* ICON LIST */}
        <ul className="h-scroll tech-icons">
          {data.icons.map((icon: TechnologyIcon, index: number) => (
            <li
              key={index}
              data-wow-delay=".4s"
              className="wow fadeIn"
            >
              <a>
                <Image
                  src={icon.src}
                  alt={icon.alt}
                  width={80}
                  height={60}
                />
              </a>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}
