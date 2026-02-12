import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import AboutSection from '../components/AboutComponent/AboutSection'
import WhyChooseUs from '../components/AboutComponent/WhyChooseUs'

export default function Page() {

  return (
    <>
      <Breadcrumb backgroundImage="/uploads/2024/11/9.jpg"/>

      <AboutSection
        tag="About Us"
        title="People + Tech + Philippines"
        description="<strong>People</strong>, <strong>Technology</strong>, and the <strong>Philippines</strong> presents a powerful narrative of innovation and community-driven progress."
        image="/uploads/2024/11/company-about.png"
        sections={[
          {
            heading: '1. People',
            points: [
              'The Philippines is known for its vibrant, skilled, and adaptive workforce.',
              'With a young and growing population, there’s an abundance of talent across tech and creative industries.',
              'Cultural values like “bayanihan” drive collaboration and teamwork.',
            ],
          },
          {
            heading: '2. Technology',
            points: [
              'Rapid growth in fintech, edtech, and e-commerce start-ups.',
              'BPO and KPO industries leverage modern technology globally.',
              'AI, automation, and cloud adoption are accelerating digital transformation.',
              'Government and private sectors invest in tech infrastructure.',
            ],
          },
          {
            heading: '3. Philippines',
            points: [
              'Geography drives creative tech solutions across 7,000+ islands.',
              'Government programs like “Start-up PH” support innovation.',
              'Strategic SEA location makes it a tech collaboration hub.',
            ],
          },
        ]}
      />

      <WhyChooseUs
        tag="We Are Awesome"
        title="Why Choose Us"
        items={[
          {
            icon: '/uploads/2024/12/research.svg',
            heading: 'Research and Analysis',
            description:
              'It involve gathering, interpreting, and synthesizing information to support informed decision-making processes.',
          },
          {
            icon: '/uploads/2024/12/chat.svg',
            heading: 'Negotiation and Power',
            description:
              'Negotiation and power involve leveraging influence, tactics, and authority to achieve mutually beneficial agreements.',
          },
          {
            icon: '/uploads/2024/12/monitor.svg',
            heading: 'Creative and Innovative Solutions',
            description:
              'Creative and innovative solutions involve thinking outside the box to design unique, effective approaches for challenges.',
          },
          {
            icon: '/uploads/2024/12/trasparency.svg',
            heading: 'Transparency and Ease of Work',
            description:
              'Transparency and ease of work foster open communication, trust, and streamlined processes for optimal productivity.',
          },
        ]}
      />
    </>
  )
}
