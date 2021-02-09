import React from 'react';
import './style.scss';
import gitHubLogo from 'assets/images/github-square-brands.svg';
import DayNightButton from './DayNightButton';

const Header = () => {
  const title = 'Portfolio de Maxime WONG';
  return (
    <div className="Header">
      <h1 className="Header__title">{title}</h1>
      <a href="https://github.com/Mtwod" className="Header__link">
        <img
          className="Header__image"
          src={gitHubLogo}
          alt="Github logo"
          title="Link to my GitHub account"
        />
      </a>
      <DayNightButton />
    </div>
  );
};

export default Header;
