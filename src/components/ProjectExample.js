import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ProjectExample({ project }) {
  return (
    <div class={`p-3 project-example row project-${project.index} light-text`}>
      <div className="col-md-9">
        <div class="project-heading mb-3">
          <h3 class="shadow-text fs-4">{project.title}</h3>
          <div>{project.date}</div>
        </div>
        <div className="mb-3">
          {project.stack.map((tool) => {
            return <span className="badge bg-secondary me-1 mb-1">{tool}</span>;
          })}
        </div>
        <div class="project-description shadow-text">
          <div class="mb-3">{project.description}</div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <div className="d-lg-flex justify-content-center">
          <div className="mb-3 me-lg-3">
            <div class="link-section d-flex justify-content-start align-items-center project-link">
            {project.projectLink &&  <div className="me-3">
                <a class="fst-italic light-text link-item pe-1 " rel="noreferrer" target="_blank" href={project.projectLink}>
                  {project.title}
                </a>
              </div> }
              {!project.projectLink &&  <div className="me-3">
                
                  {project.title}
                
              </div> }
              <div className="">
                <span className="fa-icon">
                  <a className="fs-4 light-text link-icon" rel="noreferrer" target="_blank" href={project.githubLink}>
                    <FontAwesomeIcon icon={faGithubSquare} />
                  </a>
                </span>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <img class="project-image-desktop " src={project.imageDesktop} alt="Issue Tracker" />
            </div>
          </div>
          <div className="">
            <div class="link-section project-link d-none d-lg-block"></div>
            <div className="d-flex justify-content-centr">
              <img class="project-image-mobile" src={project.imageMobile} alt="Issue Tracker" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectExample;
