/* eslint-disable no-plusplus */
import React from 'react';
import ProductForm from './ProductForm';
import Alert from 'react-native';
import ProductFormService from '../../services/ProductFormService';

const cardNumber = 4444;

class ProductFormContainer extends React.PureComponent<Props, State> {
  constructor() {
    super();
    this.state = {
      name: '',
      weight: '',
      size: '',
      madeIn: '',
      createBtnDisabled: false,
      editBtnDisabled: false,
      enabledFields: true
    };
  }
  onSubmit = () => {
    new ProductFormService()
      .saveItem()
      .then(Alert.alert(`Item  ${this.state.name} was Saved`));
    this.setState({
      createBtnDisabled: true,
      editBtnDisabled: false,
      enabledFields: true
    });
  };

  onEdit = () => {
    this.setState({
      enabledFields: true
    });
    Alert.alert('You can Edit Fields Not');
  };
  handleChangeName = name => {
    this.setState({name});
  };
  handleChangeWeight = weight => {
    this.setState({weight});
  };
  handleChangeSize = size => {
    this.setState({size});
  };
  handleChangeMadeIn = madeIn => {
    this.setState({madeIn});
  };
  render() {
    return (
      <ProductForm
        cardNumber={cardNumber}
        name={this.state.name}
        changeName={this.handleChangeName}
        changeWeight={this.handleChangeWeight}
        changeSize={this.handleChangeSize}
        handleChangeMadeIn={this.handleChangeMadeIn}
        weight={this.state.weight}
        size={this.state.size}
        madeIn={this.state.madeIn}
      />
    );
  }
}
export default ProductFormContainer;
