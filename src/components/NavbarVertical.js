import { useState } from 'react';

function NavbarVertical() {

  const [currentIndex, setCurrentIndex] = useState(0);
  
  function setIndex(index) {
    setCurrentIndex(index);
    console.log(index);
  }
  return (
    <div>
      <div className="d-none d-md-block">
        <nav class="navbar side-nav navbar-dark nav-vertical top-0 align-items-start ">
          <div class="container-fluid d-flex flex-column justify-content-between p-3 ">
            <div className="menu-items">
              <div className="mb-5">
                <a class="navbar-brand mb-3 fs-5 brand-name" href="#">
                  David Jenn
                </a>
              </div>

              <ul id="menu-links" class="navbar-nav d-flex flex-column" data-active-index={currentIndex}>
                <li class="nav-item menu-item" onMouseOver={(evt) => setIndex(0)}>
                  <a class="nav-link mb-3" aria-current="page" href="#about-me">
                    About Me
                  </a>
                </li>
                <li class="nav-item menu-item mb-3 " onMouseOver={(evt) => setIndex(1)}>
                  <a class="nav-link" href="#skills">
                    Skills
                  </a>
                </li>
                <li class="nav-item menu-item mb-3" onMouseOver={(evt) => setIndex(2)}>
                  <a class="nav-link" href="#education">
                    Education
                  </a>
                </li>
                <li class="nav-item menu-item mb-3" onMouseOver={(evt) => setIndex(3)}>
                  <a class="nav-link" href="#projects">
                    Projects
                  </a>
                </li>
                
                <li class="nav-item menu-item mb-3" onMouseOver={(evt) => setIndex(4)}>
                  <a class="nav-link" href="#contact-me">
                    Contact Me
                  </a>
                </li>
                
                <div id="menu-background-pattern"></div>
              </ul>
              <div className="cover-div"></div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default NavbarVertical;
