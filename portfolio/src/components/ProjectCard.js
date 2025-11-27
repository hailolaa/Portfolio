import React from "react";
import "../styles/Projects.css"; // Add styles separately

const ProjectCard = ({ title, description, image, link }) => {
  return (
    <div className="project-card h-100">
      <a href={link} target="_blank" rel="noopener noreferrer"  className="card-link">
        <div className="card project-glass-card h-100 shadow-sm">
          <img
            src={image}
            className="card-img-top project-img"
            alt={title}
          />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title fw-semibold ">{title}</h5>
            <p className="card-text text-muted">{description}</p>
            <span className="mt-auto text-primary fw-medium">View Project →</span>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
