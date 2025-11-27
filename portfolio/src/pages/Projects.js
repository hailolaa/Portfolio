import ProjectCard from "../components/ProjectCard";
import "../styles/Projects.css";
import FeaturedCarousel from "../components/FeaturedCarousel";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);

  return (
    <div className="projects-page">
      

      <div className="container py-5">
        <h2 className="text-center fw-bold mb-5" data-aos="fade-down">My Projects</h2>

        <div className="row gy-5 gx-4 justify-content-center">
          {projects.map((project, idx) => (
            <div
              className="col-md-6 col-lg-4"
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 150}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

        <div className="text-center mt-5" data-aos="fade-up" data-aos-delay="500">
          <Button variant="primary"><Link className="nav-link" to="/contact">
            Want something like this? Contact Me!</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
