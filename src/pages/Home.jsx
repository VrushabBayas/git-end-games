// Home.jsx
import { Link } from 'react-router-dom';
import TableOfContent from '../components/common/TableContent';

import GitLogo from '../assets/git-end-game.png';
import myLogo from '../assets/mylogo.png';
import './style.css';
export default function Home() {
return (
<div className="home-header">
  <div className="subheader">
    <div className="header-subsection--left">
      <h1>GIT END GAMES DESTRUCTION OF GIT ISSUES</h1>
      <p>A Practical guide to using Git and prepare you to be the wizard of your team</p>
      <div className="author">
        <div>
          <img src={myLogo} alt="author logo" />
        </div>
        <div className="author-info">
          <p className="name">Vrushabh Bayas</p>
          <p className="tagline">Twitter : @Vrushabhayas</p>
          <p className="tagline">
            LinkedIn :{' '}
            <Link to={'https://www.linkedin.com/in/vrushabh-bayas-32ba8415b'}>
            Vrushabh Bayas
            </Link>
          </p>
        </div>
      </div>
    </div>

    <div className="header-subsection--right">
      <img src={GitLogo} alt="git logo" />
    </div>
  </div>
  <div className="container">
    <TableOfContent />
  </div>
</div>
);
}
