import React from 'react';
import Tooltip from '../commons/Tooltip';
import { Navigation } from './Navigation';
import SkipNav from './SkipNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

export const Header = ({ currentCity }) => {
  return (
    <header className="header">
      <Tooltip text="Home">
        <a href="/" className="homeButton">
          <FontAwesomeIcon icon={faHome} size="2x" />
        </a>
      </Tooltip>
      <SkipNav currentCity={currentCity} />
      <Navigation currentCity={currentCity} />
    </header>
  );
};
