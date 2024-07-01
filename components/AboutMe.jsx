import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import AboutMePic from '../src/assets/About Me.svg'
import '../styles/AboutMe.css'

const About = () => {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="about-me-section" id='about'>
      <Container>
        <Row className="align-items-center">
          {isMobileView ? (
            <>
              <Col xs={12} className="mb-3">
                <h2 className="about-me-heading hero">About Me</h2>
              </Col>
              <Col xs={12} className="mb-3">
                <img src={AboutMePic} alt="About Me" className="img-fluid about-me-image" />
              </Col>
              <Col xs={12}>
                <p className="about-me-text">
                  {showMoreInfo 
                    ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac adipiscing velit non nulla in amet pellentesque. Sit turpis pretium eget maecenas. Vestibulum dolor mattis consectetur eget commodo vitae. Amet pellentesque sit pulvinar lorem mi a, euismod risus r."
                    : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis."
                  }
                </p>
                <Button onClick={() => setShowMoreInfo(!showMoreInfo)} className="read-more-button">
                  {showMoreInfo ? 'Read Less' : 'Read More'}
                </Button>
              </Col>
            </>
          ) : (
            <>
              <Col md={6}>
                <img src={AboutMePic} alt="About Me" className="img-fluid about-me-image" />
              </Col>
              <Col md={6}>
                <p className="small-about-text">About</p>
                <h2 className="about-me-heading">About Me</h2>
                <p className="about-me-text hero2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac adipiscing velit non nulla in amet pellentesque. Sit turpis pretium eget maecenas. Vestibulum dolor mattis consectetur eget commodo vitae. Amet pellentesque sit pulvinar lorem mi a, euismod risus r.
                </p>
              </Col>
            </>
          )}
        </Row>
      </Container>
    </section>
  );
};

export default About;