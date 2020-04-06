import React from 'react';
import AppContext from '../../context';
import styles from './Select.module.scss';

const Select = ({ onChange, name, value }) => (
  <AppContext.Consumer>
    {(context) => (
      <select onChange={onChange} name={name} value={value} className={styles.select}>
        {context[name].map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    )}
  </AppContext.Consumer>
);

export default Select;
