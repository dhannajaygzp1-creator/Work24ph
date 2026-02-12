"use client";

import Image from "next/image";

type ServiceOverview = {
  tag: string;
  title: string;
  image: string;
  description: string[];
};

interface ServiceSectionProps {
  data: ServiceOverview;
}

export default function ServiceSection({ data }: ServiceSectionProps) {
  return (
    <section className="service pad-tb">
      <div className="container">
        <div className="row">
          
          {/* IMAGE */}
          <div className="col-lg-4">
            <div className="image-block upset bg-shape wow fadeIn">
              <Image
                src={data.image}
                alt={data.title}
                width={400}
                height={400}
                className="img-fluid"
              />
            </div>
          </div>

          {/* CONTENT */}
          <div className="col-lg-8 block-1">
            <div className="common-heading text-l pl25">
              <span>{data.tag}</span>
              <h2>{data.title}</h2>

              {/* {data.description.map((text: string, index: number) => (
                <p key={index}>{text}</p>
              ))} */}
              {/* { data.description} */}
              {/* <div
                dangerouslySetInnerHTML={{
                  __html: data.description.join("")
                }}
              /> */}
              <div dangerouslySetInnerHTML={{ __html: data.description }} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
