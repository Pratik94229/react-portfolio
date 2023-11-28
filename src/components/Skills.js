import React from 'react';
import meter1 from "../assets/img/PYTHON.svg";
import meter2 from "../assets/img/PANDAS2ND.svg";
import meter3 from "../assets/img/NUMPY.svg";
import meter4 from "../assets/img/MACHINE_LEARNING.svg";
import meter5 from "../assets/img/NLP.svg";
import meter6 from "../assets/img/AWS.svg";
import meter7 from "../assets/img/STATISTICS.svg";
import meter8 from "../assets/img/WEB_SCRAPPING.svg";
import meter9 from "../assets/img/VERSION_CONTROL.svg";
import meter10 from "../assets/img/icons8-mysql.svg";
import meter11 from "../assets/img/STATISTICS.svg";
import meter12 from "../assets/img/DOCKER.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>I've extensively covered the essential aspects of data science, including data manipulation with libraries like Pandas and NumPy. Collaborative programming and version control have been a crucial part of my workflow with GitHub. In addition, I've developed a deep understanding of the mathematical foundations behind machine learning algorithms, enabling me to apply them effectively.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                            <img src={meter1} alt="" />
                                <h5>Python(OOPs)</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="" />
                                <h5>Pandas</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="" />
                                <h5>Numpy</h5>
                            </div>
                            <div className="item">
                                <img src={meter4} alt="" />
                                <h5>Machine Learning Understanding</h5>
                            </div>
                            <div className="item">
                                <img src={meter5} alt="" />
                                <h5>NLP</h5>
                            </div>
                            <div className="item">
                                <img src={meter7} alt="" />
                                <h5>Statistics</h5>
                            </div>
                            <div className="item">
                                <img src={meter8} alt="" />
                                <h5>Web Scrapping</h5>
                            </div>
                            <div className="item">
                                <img src={meter9} alt="" />
                                <h5>Version Control</h5>
                            </div>
                            <div className="item">
                                <img src={meter12} alt="" />
                                <h5>Docker</h5>
                            </div>
                            <div className="item">
                                <img src={meter10} alt="" />
                                <h5>MySQL</h5>
                            </div>
                            <div className="item">
                                <img src={meter6} alt="" />
                                <h5>AWS</h5>
                            </div>
                            <div className="item">
                                <img src={meter11} alt="" />
                                <h5>Communication</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  )
}