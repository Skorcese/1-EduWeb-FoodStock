import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ListItem.module.scss';
import Button from '../Button/Button';
import AppContext from '../../context';

const ListItem = ({ name, image, unit, category, quantity, minQuantity }) => (
  <AppContext.Consumer>
    {(context) => (
      <li className={styles.item}>
        <img className={styles.image} src={image} alt={name} />
        <Link to={`/${name}`} className={styles.name}>
          {name}
        </Link>
        <p className={styles.category}>{category}</p>
        <div>
          <p className={styles.quantity}>{quantity + ' ' + unit}</p>
          {minQuantity ? <p className={styles.minQuantity}>{minQuantity + ' ' + unit}</p> : null}
        </div>
        <Button onClick={() => context.deleteItem(name)} text="Delete" />
      </li>
    )}
  </AppContext.Consumer>
);

export default ListItem;
