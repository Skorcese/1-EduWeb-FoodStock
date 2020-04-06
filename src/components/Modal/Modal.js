import React from 'react';
import styles from './Modal.module.scss';
import Form from '../Form/Form';
import Settings from '../Settings/Settings';

const Modal = ({ closeModalFn, mode }) => (
  <div className={styles.wrapper}>
    <button className={styles.closeButton} onClick={closeModalFn} />
    {mode === 'add' ? <Form /> : <Settings />}
  </div>
);

export default Modal;
