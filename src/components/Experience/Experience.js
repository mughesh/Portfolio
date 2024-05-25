import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

function Experience() {
  const experiences = [
    {
      year: "2024",
      title: "XR Developer",
      company: "MYRACLE - STEM learning powered with XR",
      description:
        "Leading the content development process from concept research to implementation. Managed the creation of over 30+ STEM learning experiences. Conducted game design workshops with over 300+ happy students. Core member of the product development since the beginning of Myracle.",
      period: "January 2024 - Present",
    },
    {
      year: "2022",
      title: "XR Designer",
      company: "MYRACLE - STEM learning powered with XR",
      description:
        "Started as a spatial design intern in December 2021, then became a full-time XR designer in June 2022. Leading the content development process from concept research to implementation. Managed the creation of over 30+ STEM learning experiences.",
      period: "June 2022 - Present",
    },
    {
      year: "2021",
      title: "Spatial Design Intern",
      company: "MYRACLE - STEM learning powered with XR",
      description:
        "Started as a spatial design intern in December 2021, then became a full-time XR designer in June 2022. Managed the creation of over 30+ STEM learning experiences.",
      period: "December 2021 - May 2022",
    },
    {
      year: "2021",
      title: "Research & Development Intern",
      company: "Vayusastra - IIT Madras Aerospace Startup",
      description:
        "Collaborated on a research project under DRDO to create a telemetry device for army personnel in extremely cold regions. Published a research paper to DRDO.",
      period: "May 2021 - October 2021",
    },
    {
      year: "2021",
      title: "3D Design Visualizer",
      company: "My Furnish Store - AR-based Furniture and Home Decor Firm",
      description:
        "Worked as a 3D design visualizer, creating augmented reality experiences for furniture and home decor.",
      period: "May 2021 - July 2021",
    },
  ];

  return (
    <Container fluid className="experience-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Work <strong className="purple">Experience</strong>
        </h1>
        <Row className="timeline">
          {experiences.map((exp, idx) => (
            <Col key={idx} md={12} className="timeline-item">
              <div className="timeline-content">
                <h3 className="timeline-year">{exp.year}</h3>
                <h4 className="timeline-title">{exp.title}</h4>
                <h5 className="timeline-company">{exp.company}</h5>
                <p className="timeline-period">{exp.period}</p>
                <p className="timeline-description">{exp.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;
