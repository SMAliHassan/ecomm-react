import React from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({ title, items, openHandler, open, icon, activePage }) => {
  const itemsMarkup = items.map((el, i) => (
    <li
      className={`nav-menu-item ${
        activePage === el.page ? 'router-link-active' : ''
      }`}
      key={i}
    >
      <Link to={el.page}>{el.title}</Link>
    </li>
  ));

  const anyLinkActive = items.find(el => el.page === activePage);

  return (
    <li
      className={`nav-submenu ${open ? 'open is-opened' : ''} ${
        anyLinkActive ? 'active' : ''
      }`}
    >
      <div className="nav-submenu-title" onClick={openHandler}>
        <i className={`feather icon-${icon}`}></i>
        <span>{title}</span>
        <i className="nav-submenu-arrow nav-submenu-arrow-up"></i>
      </div>

      <ul className="nav-menu menu-collapse">{itemsMarkup}</ul>
    </li>
  );
};

export default Dropdown;
