import { Container, Row, Col, Button, ProgressBar, Card } from "react-bootstrap";
import { FaReact, FaNodeJs, FaHtml5, FaGraduationCap, FaBriefcase } from "react-icons/fa";
import { Link } from "react-router-dom";

import 'aos/dist/aos.css';
import '../styles/AboutMe.css'; // Assuming you have a CSS file for styles


import Lottie from 'lottie-react';
import avatarAnimation from '../assets/avatar.json'; // You need to provide this lottie JSON

export default function AboutMe() {
  return (
    <Container fluid className="about-section py-5" id="about">
      <Row className="gx-5 align-items-center mb-5">
        <Col md={6} data-aos="fade-right">
          <Card className="glass-card p-4">
            <h2 className="mb-3">About Me</h2>
            <p>
              I’m a passionate developer who loves building clean, scalable, and impactful web experiences.
              My focus is on delivering high-quality solutions and constantly improving my skillset.
            </p>
            <Button variant="primary"><Link className="nav-link" to="/projects">View Projects</Link></Button>
          </Card>
        </Col>

        <Col md={6} data-aos="fade-left">
          <Card className="glass-card p-4">
            <h3 className="mb-3">My Skills</h3>

            <div className="mb-3">
              <FaHtml5 className="me-2 text-danger" /> Java Script
              <ProgressBar now={90} label="90%" />
            </div>
            <div className="mb-3">
              <FaReact className="me-2 text-info" /> React
              <ProgressBar now={80} label="80%" />
            </div>
            <div className="mb-3">
              <FaNodeJs className="me-2 text-success" /> Node.js/Express
              <ProgressBar now={70} label="70%" />
            </div>
            <div className="mb-3">
              <FaNodeJs className="me-2 text-success" /> Flutter
              <ProgressBar now={70} label="80%" />
            </div>
            <div className="mb-3">
              <FaNodeJs className="me-2 text-success" /> Next Js
              <ProgressBar now={70} label="50%" />
            </div>
            <div className="mb-3">
              <FaNodeJs className="me-2 text-success" /> Python
              <ProgressBar now={70} label="80%" />
            </div>

            

          </Card>
        </Col>
      </Row>

      {/* Floating Avatar */}
      <Row className="justify-content-center mb-5" data-aos="zoom-in">
        <Col md={4} className="text-center">
          <div className="avatar-wrapper">
            <Lottie animationData={avatarAnimation} loop={true} />
            <h4 className="mt-3">Let’s Build Something Cool Together!</h4>
          </div>
        </Col>
      </Row>

      {/* Timeline Section */}
      <Row className="mb-5" data-aos="fade-up">
        <Col>
          <h3 className="text-center mb-4">Education & Experience</h3>
          <div className="timeline">
            <div className="timeline-item">
              <FaGraduationCap className="timeline-icon" />
              <div className="timeline-content">
                <h5>Software Engineering at Addis Ababa University</h5>
                <p>2023 - 2027</p>
              </div>
            </div>
            <div className="timeline-item">
              <FaBriefcase className="timeline-icon" />
              <div className="timeline-content">
                <h5>Fullstack Intern @ CodeAlpha</h5>
                <p>July,2025 - August,2025</p>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      {/* Fun Facts */}
      <Row data-aos="fade-up">
        <Col>
          <h3 className="text-center mb-4">Fun Facts About Me</h3>
          <div className="d-flex justify-content-around flex-wrap gap-4 text-center">
            =<Card className="fact-card glass-card p-3">
              <h5>😄 Chill but Driven</h5>
              <p>I’m the type of person who can joke around and still get things done with full focus.</p>
            </Card>

            <Card className="fact-card glass-card p-3">
              <h5>🎮 Casual Gamer</h5>
              <p>I relax by playing strategy or story games — it resets my brain better than coffee.</p>
            </Card>

            <Card className="fact-card glass-card p-3">
              <h5>🔥 Creative Mind</h5>
              <p>I love designing clean interfaces and turning ideas into something people can actually use.</p>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

