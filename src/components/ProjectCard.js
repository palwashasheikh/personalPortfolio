import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link, tags = [] }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} className="project-image" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          {tags.length > 0 && (
            <div className="project-tags">
              {tags.map((tag, idx) => (
                <span key={idx} className="proj-tag-badge">{tag}</span>
              ))}
            </div>
          )}
          <a href={link} target="_blank" rel="noopener noreferrer" className="project-link-btn">
            View Project
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16" style={{ marginLeft: "8px", verticalAlign: "middle" }}>
              <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
              <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
            </svg>
          </a>
        </div>
      </div>
    </Col>
  )
}
