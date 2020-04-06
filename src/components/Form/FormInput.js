import React from 'react';
import styles from './FormInput.module.scss';
import Input from './Input';
import Select from './Select';

const FormInput = ({ onChange, name, type, placeholder, value }) => (
  <div className={styles.wrapper}>
    <label className={styles.label}>{placeholder}</label>
    {type === 'select' ? (
      <Select onChange={onChange} name={name} className={styles.FormInput} value={value} />
    ) : (
      <Input
        onChange={onChange}
        name={name}
        type={type}
        className={styles.FormInput}
        value={value}
      />
    )}
  </div>
);

export default FormInput;
