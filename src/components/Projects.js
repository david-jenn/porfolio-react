import ProjectExample from './ProjectExample';

import issueTrackerDesktop from '../images/projects/issueTrackerDesktop.PNG';
import issueTrackerMobile from '../images/projects/issueTrackerMobile.PNG';
import talkRoomsDesktop from '../images/projects/talkRoomDesktop.PNG';
import talkRoomsMobile from '../images/projects/talkRoomMobile.PNG';
import gameLibraryDesktop from '../images/projects/gameLibDesktopCrop.PNG'
import gameLibraryMobile from '../images/projects/gameLibMobileCrop.PNG'

const talkRooms = {
  index: 0,
  title: 'Talk Rooms',
  date: '07/2022 - 10/2022',
  stack: ['React.js', 'Node.js', 'Express.js', 'MongoDb', 'Socket.io'],
  description: 'This project is a real time chat application with friends lists and preserved messages.',
  projectLink: 'https://talk-rooms-david-jenn.herokuapp.com',
  githubLink: 'https://github.com/david-jenn/talk-rooms-client',
  imageDesktop: talkRoomsDesktop,
  imageMobile: talkRoomsMobile,
};

const gameLibrary = {
  index: 2,
  title: 'Game Library',
  date: '01/2022 - 04/2022',
  stack: ['Android SDK', 'Java', 'Firebase'],
  description: 'This Android application simulates a video game store where users can add games to a wish list or library and see relevant listings on eBay.',
  githubLink: 'https://github.com/david-jenn/game-library',
  imageDesktop: gameLibraryDesktop,
  imageMobile: gameLibraryMobile,
}

const issueTracker = {
  index: 1,
  title: 'Issue Tracker',
  date: '10/2021 - 12/2021',
  stack: ['React.js', 'Node.js', 'Express.js', 'MongoDb'],
  description: 'This project allows users with configurable roles to log and track bugs and issues in a system.',
  projectLink: 'https://issue-tracker-react-david-jenn.herokuapp.com',
  githubLink: 'https://github.com/david-jenn/issue-tracker-react.git',
  imageDesktop: issueTrackerDesktop,
  imageMobile: issueTrackerMobile,
};

function Projects() {
  return (
    <div id="projects" class="mb-3">
      <div className="row picture-spacer-sm d-flex align-items-center p-3">
        <h2 class=" shadow-text text-dark">Projects</h2>
      </div>

      <div class="">
        <ProjectExample project={talkRooms} />
        <div className="picture-spacer-sm row"></div>
        <ProjectExample project={gameLibrary} />
        <div className="picture-spacer-sm row"></div>
        <ProjectExample project={issueTracker} />
      </div>
    </div>
  );
}

export default Projects;
