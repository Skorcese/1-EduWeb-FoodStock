import React from 'react';
import HeaderNav from './HeaderNav';
import styles from './Header.module.scss';
import Button from '../Button/Button';

const Header = ({ openModalFn }) => (
  <header className={styles.wrapper}>
    <h1>>FoodStock.</h1>
    <HeaderNav />
    <div>
      <Button onClick={() => openModalFn('add')} text={'New Item'} />
      <Button onClick={() => openModalFn('settings')} text={'Settings'} />
    </div>
  </header>
);

export default Header;
