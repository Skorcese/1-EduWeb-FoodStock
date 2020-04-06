import React from 'react';
import styles from './Button.module.scss';

const Button = ({onClick, text}) => (
    <button className={styles.button} onClick={onClick}>{text}</button>
)

export default Button;