import JumboTron from './JumboTron';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Education from './Education';
import Projects from './Projects';
import ContactMe from './ContactMe';

function Main() {
  return (
    <main className="mt-5 mt-md-0">
      <JumboTron />
      <div class="middle-section row">
        <AboutMe />
        <div id="skills-education-wrapper">
          <Skills />
          <Education />
        </div>
        <Projects  />
        <ContactMe />
      </div>
    </main>
  );
}

export default Main;
