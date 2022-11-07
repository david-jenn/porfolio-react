import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import profilePicture from '../images/updatedProfilePicEdit.jpg';

function JumboTron() {
  return (
    <div class="jumbotron p-3 light-text row">
      <div class="jumbo-flex-section mb-3">
        <div class="brand">
          <h1>David Jenn</h1>
        </div>
        <div class="mb-3">
          <img id="profile-picture" src={profilePicture} />
        </div>
        <div className=" fs-4 mb-3 light-text">Web Developer</div>
        <div className="d-flex justify-content-center">
          <div class=" fs-4 github-link mb-3">
            <a href="https://github.com/david-jenn" target="_blank">
              <span className="fs-1 me-3 ">
                <a className="link-icon" href="https://github.com/david-jenn" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faGithubSquare} />
                </a>
              </span>
            </a>
          </div>

          <div class="fs-4 mb-3">
            <span className="me-2  fs-1">
              <a
                className="link-icon"
                href="https://www.linkedin.com/in/david-jenn-3b831a231?trk=people-guest_people_search-card"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JumboTron;
