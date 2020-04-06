import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './HeaderNav.module.scss';

const HeaderNav = () => (
  <nav className={styles.wrapper}>
    <NavLink to="/" className={styles.link} exact activeClassName={styles.linkActive}>
      Food Levels
    </NavLink>
    <NavLink to="/list" className={styles.link} activeClassName={styles.linkActive}>
      Shopping List
    </NavLink>
  </nav>
);

export default HeaderNav;
