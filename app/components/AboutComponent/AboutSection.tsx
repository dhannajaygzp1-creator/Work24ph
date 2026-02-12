type AboutSectionProps = {
    tag: string
    title: string
    description: string
    image: string
    sections: {
      heading: string
      points: string[]
    }[]
  }
  import { FaCheck } from "react-icons/fa";


  const AboutSection = ({
    tag,
    title,
    description,
    image,
    sections,
  }: AboutSectionProps) => {
    return (
      <section className="about-agency pad-tb block-1">
        <div className="container">
          <div className="row">
  
            {/* Image */}
            <div className="col-lg-6 v-center">
              <div className="about-image">
                <img
                  src={image}
                  alt={tag}
                  className="img-fluid"
                />
              </div>
            </div>
  
            {/* Content */}
            <div className="col-lg-6">
              <div className="common-heading text-l">
                <span>{tag}</span>
                <h2>{title}</h2>
                <p dangerouslySetInnerHTML={{ __html: description }} />
  
                {sections.map((section, index) => (
                  <div key={index}>
                    <h4>{section.heading}</h4>
                    <ul className="list-ul check-icon"> {section.points.map((point, i) => (
                       <li key={i}>
                       <FaCheck />
                       {point}
                     </li>
                       
                       ))} </ul>
                  </div>
                ))}
  
              </div>
            </div>
  
          </div>
        </div>
      </section>
    )
  }
  
  export default AboutSection
  