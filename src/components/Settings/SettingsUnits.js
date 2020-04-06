import React from 'react';
import AppContext from '../../context';
import styles from './SettingsUnits.module.scss';
import Button from '../Button/Button';
// import Input from '../Form/Input';

const SettingsUnits = () => (
  <AppContext.Consumer>
    {(context) => (
      <div className={styles.wrapper}>
        {context.unit.map((u) => (
          <div key={u} className={styles.wrapper}>
            <p className={styles.unit}>{u}</p>
            <Button text="Delete" onClick={() => context.deleteUnit(u)} />
          </div>
        ))}
        {/* TODO */}
        {/* <form onSubmit={context.addCat} className={styles.wrapper}>
          <input name="newCat" type="text" placeholder="New Category" />
          <Button text="Add" />
        </form> */}
      </div>
    )}
  </AppContext.Consumer>
);

export default SettingsUnits;
