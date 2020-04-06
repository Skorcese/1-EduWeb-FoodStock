import React from 'react';
import './index.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppContext from '../../context';

import Header from '../../components/Header/Header';
import StockView from '../StockView/StockView';
import EditView from '../EditView/EditView';
import ListView from '../ListView/ListView';
import Modal from '../../components/Modal/Modal';

const types = {
  item: 'item',
  unit: 'unit',
  category: 'category',
  settings: 'settings',
};

const units = ['---', 'kg', 'g', 'l', 'ml', 'bottle', 'pieces', 'packs', 'boxes'];

const categories = [
  '---',
  'Meat',
  'Diary',
  'Fruits',
  'Vegetables',
  'Beverages',
  'Condiments',
  'Spices',
  'Bread',
  'Sweets',
];

const localStorageItems = JSON.parse(localStorage.getItem(types.item)) || null;
const localStorageCategories = JSON.parse(localStorage.getItem(types.category)) || null;
const localStorageUnits = JSON.parse(localStorage.getItem(types.unit)) || null;

class Root extends React.Component {
  state = {
    isModalOpen: false,
    modalMode: 'add',
    item: localStorageItems || [],
    unit: localStorageUnits || [...units],
    category: localStorageCategories || [...categories],
    settings: ['Categories', 'Units'],
  };

  addItem = (e, newItem) => {
    e.preventDefault();

    // TODO
    // Input validation, empty newItem, etc...
    const index = this.state.item.findIndex((x) => x.name === newItem.name);
    console.log(index);

    if (index !== -1) {
      // UPDATE
      const items = [...this.state.item];

      items[index] = newItem;

      localStorage.setItem(types.item, JSON.stringify([...items]));

      this.setState({
        item: JSON.parse(localStorage.getItem(types.item)),
      });
    } else {
      // CREATE NEW
      this.setState((prevState) => ({
        item: [...prevState.item, newItem],
      }));

      if (this.state.item !== []) {
        localStorage.setItem(types.item, JSON.stringify([...this.state.item, newItem]));
      } else {
        localStorage.setItem(types.item, JSON.stringify(newItem));
      }
    }

    this.closeModal();
  };

  deleteItem = (name) => {
    const items = [...this.state.item].filter((item) => item.name !== name);

    localStorage.setItem(types.item, JSON.stringify([...items]));

    this.setState({
      item: JSON.parse(localStorage.getItem(types.item)),
    });
  };

  deleteCat = (cat) => {
    this.setState({
      category: this.state.category.filter((c) => c !== cat),
    });

    localStorage.setItem(types.category, JSON.stringify(this.state.category));
  };

  // addCat = (name) => { TODO};

  deleteUnit = (unit) => {
    this.setState({
      unit: this.state.unit.filter((u) => u !== unit),
    });

    //TODO
    //Last item not saving to localStorage
    localStorage.setItem(types.unit, JSON.stringify(this.state.unit));
  };

  // addUnit = (name) => { TODO};

  openModal = (mode) => {
    this.setState({
      isModalOpen: true,
      modalMode: mode,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  render() {
    const { isModalOpen } = this.state;
    const contextElements = {
      ...this.state,
      addItem: this.addItem,
      deleteItem: this.deleteItem,
      deleteCat: this.deleteCat,
      deleteUnit: this.deleteUnit,
    };

    return (
      <BrowserRouter>
        <AppContext.Provider value={contextElements}>
          <Header openModalFn={this.openModal} />
          <Switch>
            <Route exact path="/" component={StockView} />
            <Route path="/list" component={ListView} />
            <Route path="/:id" component={EditView} />
          </Switch>
          {isModalOpen && <Modal closeModalFn={this.closeModal} mode={this.state.modalMode} />}
        </AppContext.Provider>
      </BrowserRouter>
    );
  }
}

export default Root;
