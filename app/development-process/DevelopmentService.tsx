import Image from "next/image";

type ProcessStep = {
  step: number;
  title: string;
  points: string[];
  image: string;
  reverse?: boolean; // optional to swap image/text position
};

const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Discovery and Planning",
    points: [
      "Client Consultation: Work24 begins by understanding the client’s business objectives, target audience, and vision for the website.",
      "Research & Strategy: In-depth research is conducted on the market, competitors, and user preferences to inform the design strategy.",
      "Defining Scope: Key features, functionalities, and deliverables are outlined, ensuring a clear roadmap for the project."
    ],
    image: "/uploads/2024/12/process-1.jpg",
  },
  {
    step: 2,
    title: "Wireframing and Prototyping",
    points: [
      "Wireframes: Work24 creates wireframes (blueprints) to visualize the layout and structure of the website, ensuring a strong foundation for the design.",
      "Prototyping: Interactive prototypes are developed to give clients a tangible preview of the website’s flow and user interactions before development begins."
    ],
    image: "/uploads/2024/12/process-2.jpg",
    reverse: true,
  },
  {
    step: 3,
    title: "Design and Development",
    points: [
      "UI/UX Design: The team works on crafting a visually appealing, user-centric design that aligns with the client’s branding, ensuring intuitive navigation and a seamless user experience.",
      "Responsive Design: The website is designed to be fully responsive, ensuring it looks and works well on all devices, from desktops to mobile phones.",
      "Front-End & Back-End Development: The design is translated into code using best practices, while back-end development ensures robust functionality."
    ],
    image: "/uploads/2024/12/process-3.jpg",
  },
  {
    step: 4,
    title: "Content Integration",
    points: [
      "Content Strategy: The team works with the client to ensure that the website’s content is aligned with business objectives and optimized for search engines.",
      "Seamless Integration: Text, images, videos, and other elements are integrated, ensuring they fit perfectly into the design and enhance the user experience."
    ],
    image: "/uploads/2024/12/process-4.jpg",
    reverse: true,
  },
  {
    step: 5,
    title: "Testing and Quality Assurance",
    points: [
      "Cross-Browser Testing: Work24 conducts rigorous testing across various browsers and devices to ensure a flawless user experience.",
      "Performance Optimization: Site speed, security, and functionality are optimized, ensuring the website performs at its best."
    ],
    image: "/uploads/2024/12/download-3.jpeg",
  },
  {
    step: 6,
    title: "Continuous Improvement",
    points: [
      "Feedback and Updates: Work24 gathers feedback and works with the client on ongoing improvements to enhance functionality, user experience, and business results."
    ],
    image: "/uploads/2025/01/Continuous-Improvement.webp",
    reverse: true,
  },
];

export default function DevelopmentService() {
  return (
    <section className="service-block pad-tb">
      <div className="container">
        {/* Heading */}
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="common-heading ptag text-center">
              <span>Process</span>
              <h2>Our Web Design Process</h2>
              <p>
                At Work24, the web design process is carefully structured to
                ensure the creation of visually appealing, user-friendly, and
                functional websites that meet client goals. Here’s an overview
                of how the process typically unfolds
              </p>
            </div>
          </div>
        </div>

        {/* Process Steps */}
        {processSteps.map((step) => (
          <div
            key={step.step}
            className={`row upset justify-content-center mt60 ${
              step.reverse ? "flex-row-reverse" : ""
            }`}
          >
            <div className="col-lg-4 v-center">
              <div className="image-block1">
                <Image
                  src={step.image}
                  alt={step.title}
                  width={500}
                  height={400}
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-7 v-center">
              <div className="ps-block">
                <span>{step.step}</span>
                <h3>{step.title}</h3>
                <ul className="key-points">
                  {step.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
