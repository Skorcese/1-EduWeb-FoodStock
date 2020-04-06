import React from 'react';
import AppContext from '../../context';
import styles from './SettingsCategories.module.scss';
import Button from '../Button/Button';
// import Input from '../Form/Input';

const SettingsCategories = () => (
  <AppContext.Consumer>
    {(context) => (
      <div className={styles.wrapper}>
        {context.category.map((c) => (
          <div key={c} className={styles.wrapper}>
            <p className={styles.category}>{c}</p>
            <Button text="Delete" onClick={() => context.deleteCat(c)} />
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

export default SettingsCategories;
