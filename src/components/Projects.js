import React from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import blogImg1 from '../assets/img/clustering_algorithms.jpg';
import blogImg2 from '../assets/img/gradient_boosting.png';
import blogImg3 from '../assets/img/inferential_stat.png';
import colorSharp2 from '../assets/img/color-sharp2.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';



export const Projects = () => {
  const projects = [
    {
      title: 'Clustering algorithms',
      description: 'From Evolution to Implementation',
      imgUrl: blogImg1,
      blogLink:
        'https://www.linkedin.com/pulse/unraveling-clustering-algorithms-from-evolution-pratik-thorat/?trackingId=obFzPxBCRZijmeaKrU6luQ%3D%3D',
    },
    {
      title: 'Mastering Gradient Boosting in Machine Learning',
      description: 'A Comprehensive Guide!',
      imgUrl: blogImg2,
      blogLink:
        'https://www.linkedin.com/pulse/mastering-gradient-boosting-machine-learning-guide-pratik-thorat/?trackingId=obFzPxBCRZijmeaKrU6luQ%3D%3D',
    },
    {
      title: 'Demystifying Inferential Statistics',
      description:
        "Unlocking Insights from Data",
      imgUrl: blogImg3,
      blogLink:
        'https://www.linkedin.com/pulse/demystifying-inferential-statistics-unlocking-insights-pratik-thorat/?trackingId=obFzPxBCRZijmeaKrU6luQ%3D%3D',
    },
  ];

  
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible
                      ? 'animate__animated animate__fadeIn'
                      : ''
                  }
                >
                  <h2>Projects</h2>
                  <p>
                  I have successfully executed diverse projects leveraging Machine Learning, Power BI, Natural Language Processing (NLP), 
                  and Computer Vision technologies. These encompass predictive modeling, data visualization dashboards, sentiment analysis, 
                  image classification, and object detection, showcasing my proficiency in these cutting-edge domains.
                  </p>
                  <Row>
                    {projects.map((project, index) => (
                      <ProjectCard
                        key={index}
                        {...project}
                      />
                    ))}
                  </Row>
                  {/* Links outside BlogCard */}
                  <div className="blog-links d-flex justify-content-around mt-3">
                    {projects.map((project, index) => (
                      <a
                        key={index}
                        href={project.blogLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub Link
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        alt="background"
        src={colorSharp2}
      ></img>
    </section>
  );
};