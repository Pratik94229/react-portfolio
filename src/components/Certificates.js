import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { CertificateCard } from './CertificateCard';
import blogImg1 from '../assets/img/clustering_algorithms.jpg';
import blogImg2 from '../assets/img/gradient_boosting.png';
import blogImg3 from '../assets/img/inferential_stat.png';
import colorSharp2 from '../assets/img/color-sharp2.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Certificates = () => {
  const Certificates = [
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
                  <h2>Awards and Certificates</h2>
                  <p>
                  Certified in advanced Data Science courses, covering machine learning, statistical analysis, 
                  and data visualization. Proficient in Python for Data Science, Pandas Data Analysis, and Applied Machine Learning,
                   enabling adept handling of complex datasets.
                  </p>
                  <Row>
                    {Certificates.map((certificate, index) => (
                      <CertificateCard
                        key={index}
                        {...certificate}
                      />
                    ))}
                  </Row>
                  {/* Links outside BlogCard */}
                  <div className="blog-links d-flex justify-content-around mt-3">
                    {Certificates.map((certificate, index) => (
                      <a
                        key={index}
                        href={certificate.blogLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Link
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
