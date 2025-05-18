import GitLogo from "../../assets/git-end-game.png";
import myLogo from "../../assets/mylogo.png";
import "./style.css";

function Header() {
return (
<header className="header">
  <h2>GIT END GAME</h2>
  <div className="subheader">
    <div className="header-subsection--left">
      <h1>GIT END GAMES DESTRUCTION OF GIT ISSUES</h1>
      <p>
        A Practical guide to using Git and prepare you to be the wizard of
        your team
      </p>
      <div className="author">
        <div>
          <img src={myLogo} alt="author logo" />
        </div>
        <div className="author-info">
          <div className="name">Vrushabh Bayas</div>
          <div className="tagline">Web Developer</div>
        </div>
      </div>
    </div>

    <div className="header-subsection--right">
      <img src={GitLogo} alt="git logo" />
    </div>
  </div>
</header>
);
}

export default Header;
