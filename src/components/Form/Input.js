import React from 'react';
import styles from './Input.module.scss';

const Input = ({ onChange, name, type, value }) => (
  <input onChange={onChange} name={name} type={type} value={value} className={styles.input} />
);

export default Input;
