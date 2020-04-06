import React from 'react';
import List from '../../components/List/List';
import styles from './ListView.module.scss';

const ListView = () => (
  <div className={styles.wrapper}>
    <h1>This is your Shopping List!</h1>
    <List />
  </div>
);

export default ListView;
