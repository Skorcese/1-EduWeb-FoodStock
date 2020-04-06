import React from 'react';
import List from '../../components/List/List';
import styles from './StockView.module.scss';

const StockView = () => (
  <div className={styles.wrapper}>
    <h1>These are your FoodStocks!</h1>
    <List mode="stock" />
  </div>
);

export default StockView;
