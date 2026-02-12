import Image from "next/image";
import Link from "next/link";

type TeamMember = {
  name: string;
  role: string;
  image: string;
  profileUrl: string;
};

const teamMembers: TeamMember[] = [
  {
    name: "Omar D. Regalado",
    role: "President & CEO",
    image:
      "/uploads/2024/12/DSC02740-scaled-e1733299438520.jpg",
    profileUrl: "/our-team/omar-d-regalado/",
  },
  {
    name: "Manilyn V. Regalado",
    role: "CMO",
    image:
      "/uploads/2024/11/client-pic.jpg",
    profileUrl: "/our-team/manilyn-v-regalado/",
  },
  {
    name: "Jitendra Dadhaniya",
    role: "Senior Tech Consultant (India)",
    image: "/uploads/2024/12/1.jpg",
    profileUrl: "/our-team/jitendra-dadhaniya/",
  },
  {
    name: "Shital Patel",
    role: "Senior Production Officer (India)",
    image: "/uploads/2024/12/Untitled-design-1.jpg",
    profileUrl: "/our-team/shital-patel/",
  },
];

export default function TeamSection() {
  return (
    <section className="team bg-gradient99 pad-tb">
      <div className="container">
        {/* Heading */}
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="common-heading ptag">
              <span>We Are Awesome</span>
              <h2>Our Managing Directors</h2>
              <p className="mb0"></p>
            </div>
          </div>
        </div>

        {/* Team Members */}
        <div className="row justify-content-center">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-lg-4 col-sm-6">
              <div className="full-image-card hover-scale">
                <div className="image-div">
                  <Link href={member.profileUrl}>
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={500} // adjust width
                      height={400} // adjust height
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="info-text-block">
                  <h4>
                    <Link href={member.profileUrl}>{member.name}</Link>
                  </h4>
                  <p>{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
