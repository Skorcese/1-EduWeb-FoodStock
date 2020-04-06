import React from 'react';
import styles from './Form.module.scss';
import AppContext from '../../context';
import FormInput from './FormInput';
import Button from '../Button/Button';

class Form extends React.Component {
  state = {
    name: '',
    image: '',
    unit: '',
    category: '',
    quantity: '',
    minQuantity: '',
    edit: false,
  };

  componentDidMount() {
    if (this.props.edit) {
      this.setState(this.props.edit);

      this.setState({
        edit: true,
      });
    }
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { name, image, unit, category, quantity, minQuantity, edit } = this.state;

    return (
      <AppContext.Consumer>
        {(context) => (
          <div className={styles.wrapper}>
            <h1>{edit ? `Edit the ${name}` : 'Add new item!'}</h1>
            <form
              autoComplete="off"
              className={styles.form}
              onSubmit={(e) => context.addItem(e, this.state)}
            >
              <FormInput
                className={styles.formItem}
                onChange={this.handleInputChange}
                type="text"
                name="name"
                placeholder="Product"
                value={name}
              />
              <FormInput
                className={styles.formItem}
                onChange={this.handleInputChange}
                type="text"
                name="image"
                placeholder="Image Link"
                value={image}
              />
              <FormInput
                className={styles.formItem}
                onChange={this.handleInputChange}
                type="number"
                name="quantity"
                placeholder="Quantity"
                value={quantity}
              />
              <FormInput
                className={styles.formItem}
                onChange={this.handleInputChange}
                type="number"
                name="minQuantity"
                placeholder="Minimum Quantity"
                value={minQuantity}
              />
              <FormInput
                className={styles.formItem}
                onChange={this.handleInputChange}
                type="select"
                name="unit"
                placeholder="Unit"
                value={unit}
              />
              <FormInput
                className={styles.formItem}
                onChange={this.handleInputChange}
                type="select"
                name="category"
                placeholder="Category"
                value={category}
              />

              <Button text={edit ? 'Edit' : 'Add'} />
            </form>
          </div>
        )}
      </AppContext.Consumer>
    );
  }
}

export default Form;
