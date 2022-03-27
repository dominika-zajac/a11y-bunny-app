import React from 'react';
import './header.css';

const MenuItemComponent = ({ name, currentCity }) => {
  const isCurrent = currentCity === name ? 'page' : false;
  return (
    <li>
      <a
        href={`/?city=${name}`}
        aria-current={isCurrent ? 'page' : false}
        className={isCurrent ? 'currentMenuItem' : 'menuItem'}
      >
        {name}
      </a>
    </li>
  );
};

export const Navigation = ({ currentCity }) => (
  <nav aria-label="Page navigation">
    <ul>
      <MenuItemComponent currentCity={currentCity} name={'Cracow'} />
      <MenuItemComponent currentCity={currentCity} name={'London'} />
      <MenuItemComponent currentCity={currentCity} name={'Paris'} />
    </ul>
  </nav>
);
