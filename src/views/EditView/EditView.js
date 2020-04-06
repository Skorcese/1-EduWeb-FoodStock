import React from 'react';
import Form from '../../components/Form/Form';
import styles from './EditView.module.scss';

class EditView extends React.Component {
  render() {
    const edittedName = this.props.match.params.id;
    const items = JSON.parse(localStorage.getItem('item'));
    const edittedItem = items.find(({ name }) => name === edittedName);

    return (
      <div className={styles.wrapper}>
        {/* <h1>This is Edit View</h1> */}
        <Form mode="edit" edit={edittedItem} />
      </div>
    );
  }
}

export default EditView;
