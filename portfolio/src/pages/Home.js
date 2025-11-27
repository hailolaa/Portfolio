
import { useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ParticlesBackground from '../components/ParticlesBackground';
import '../styles/Home.css'; // Assuming you have a CSS file for styles
import FeaturedCarousel from '../components/FeaturedCarousel';


const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <section className="home-section d-flex ">
      <ParticlesBackground />
      <Container>
        <Row className="align-items-center home-info ">
          <h1 className="home-title">
            Hey, I’m <span className="highlight">Hailemichael </span>
          </h1>
          <TypeAnimation
            sequence={[
              'Web Developer', 1500,
              'App Developer', 1500,
              'React Enthusiast', 1500,
              'MERN Stack Developer', 1500,
              'Flutter Developer', 1500,
            ]}
            wrapper="span"
            speed={50}
            className="typewriter"
            repeat={Infinity}
          />
          <p className="home-subtitle mt-3">
            I build interactive, accessible, and beautiful front-end experiences.
          </p>
          <div className="home-buttons mt-4 d-flex gap-3">
            <Button variant="primary"><Link className="nav-link" to="/projects">See My Work</Link></Button>
            <Button variant="outline-light" ><Link className="nav-link" to="/contact">Contact Me</Link></Button>
          </div>
            
          
        
        </Row>

        <FeaturedCarousel />


        
      </Container>
      

    </section>

  );
};

export default Home;
