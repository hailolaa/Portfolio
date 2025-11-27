import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/Projects.css";

const FeaturedCarousel = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    fetch("http://localhost:5000/api/projects")
      .then((res) => res.json())
      .then((data) => {
        const sorted = data
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .slice(0, 3);
        setProjects(sorted);
      })
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);

  return (
    <div className="container py-5" data-aos="zoom-in">
      <h2 className="text-center mb-4 display-5 fw-bold">Project Highlights</h2>
      <p className="text-center text-muted mb-5">
        Here are some of the things I’ve worked on recently. I’m always building and learning.
      </p>

      <div
        id="projectCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        <div className="carousel-inner">
          {projects.map((project, idx) => (
            <div
              className={`carousel-item ${idx === 0 ? "active" : ""}`}
              key={idx}
            >
              <div className="d-flex justify-content-center">
                <div className="project-glass-card p-4 text-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="img-fluid rounded mb-3 project-img"
                    style={{ maxHeight: "250px", objectFit: "cover" }}
                  />
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>

                  <div className="d-flex justify-content-center flex-wrap gap-2 mt-3">
                    {project.techStack?.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="badge rounded-pill bg-primary-subtle text-light border border-light"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#projectCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" />
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#projectCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" />
        </button>
      </div>
    </div>
  );
};

export default FeaturedCarousel;
