import Image from "next/image";
import Link from "next/link";
import projects from "@/app/data/projects";

const FeaturedProjects = () => {
  return (
    <section className="featured-project pad-tb">
      <div className="container">
        
        {/* Heading */}
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="common-heading ptag text-center">
              <span>Our Projects</span>
              <h2>Some of Our Works</h2>
              <p className="mb0">
                We give a holistic approach to Recruitment, HR and IT services.
                The W24 practice provides cross-border recruitment, Human Resource
                Management.
              </p>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className="row">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="col-lg-4 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="isotope_item hover-scale">
                <div className="item-image">
                  <Link href={project.link}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="img-fluid"
                    />
                  </Link>
                </div>

                <div className="item-info">
                  <h4>{project.title}</h4>
                  {project.category && <p>{project.category}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedProjects;
