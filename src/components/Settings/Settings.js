import React from 'react';
import styles from './Settings.module.scss';
import AppContext from '../../context';
// import Button from '../Button/Button';
import SettingsCategories from './SettingsCategories';
import SettingsUnits from './SettingsUnits';

const Settings = () => (
  <AppContext.Consumer>
    {(context) => (
      <div className={styles.wrapper}>
        <h1>Settings</h1>
        {context.settings.map((item) => (
          <div key={item} className={styles.setting}>
            {item}
            {item === 'Categories' ? <SettingsCategories /> : <SettingsUnits />}
          </div>
        ))}
      </div>
    )}
  </AppContext.Consumer>
);

export default Settings;
