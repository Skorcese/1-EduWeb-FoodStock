import React from 'react';
import styles from './List.module.scss';
import AppContext from '../../context';
import ListItem from './ListItem';

const List = ({ sort, mode }) => (
  <AppContext.Consumer>
    {(context) => (
      <>
        {mode === 'stock' ? (
          <ul className={styles.wrapper}>
            <div className={styles.titles}>
              <h3>Photo</h3>
              <h3>Name</h3>
              <h3>Category</h3>
              <h3>Quantity</h3>
              <h3>Options</h3>
            </div>
            {context.item.map((item) => (
              <ListItem
                key={item.name}
                name={item.name}
                unit={item.unit}
                category={item.category}
                quantity={item.quantity}
                minQuantity={item.minQuantity}
                image={item.image}
              />
            ))}
          </ul>
        ) : (
          <ul className={styles.wrapper}>
            <div className={styles.titles}>
              <h3>Photo</h3>
              <h3>Name</h3>
              <h3>Category</h3>
              <h3>Quantity</h3>
              <h3>Options</h3>
            </div>
            {context.item.map((item) =>
              Number.parseInt(item.quantity) < Number.parseInt(item.minQuantity) ? (
                <ListItem
                  key={item.name}
                  name={item.name}
                  unit={item.unit}
                  category={item.category}
                  quantity={Number.parseInt(item.minQuantity) - Number.parseInt(item.quantity)}
                  // minQuantity={item.minQuantity}
                  image={item.image}
                />
              ) : null,
            )}
          </ul>
        )}
      </>
    )}
  </AppContext.Consumer>
);

export default List;
