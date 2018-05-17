import React, { Component } from 'react';
import './App.css';
import ProductItem from './ProductItem';
import AddProduct 
from './AddProduct';

const products = [
  {
    name: 'iPad',
    price: 200
  },
  {
    name: 'iPhone',
    price: 650
  }
]

localStorage.setItem('products', JSON.stringify(products));

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: JSON.parse(localStorage.getItem('products'))
    };

    this.onAdd = this.onAdd.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
  }

  componentWillMount() {
    const products = this.getProducts();
    
    this.setState({ products });
  }

  getProducts() {
    return this.state.products;
  }

  onAdd(name, price) {

    const newProducts = this.getProducts().slice();

    newProducts.push({
      name,
      price
    });    

    console.log(newProducts);

    this.setState({ products: newProducts });
  }

  onEditSubmit(name, price, originalName) {
    let updatedProducts = this.getProducts().slice();

    updatedProducts = updatedProducts.map(product => {
      if (product.name === originalName) {
        product.name = name; 
        product.price = price;
      }

      return product;
    })

    this.setState({products: updatedProducts});
  }

  onDelete(name) {
    const products = this.getProducts();

    const filteredProducts = products.filter(product => {
      return product.name !== name;
    });
    console.log(filteredProducts);

    this.setState({ products: filteredProducts });
  }

  render() {
    return (
      <div className="App">
        <h1>Products Manager</h1>
        <AddProduct 
          onAdd={this.onAdd}
        />
        {
          this.state.products.map(product => {
            return (
              <ProductItem
                key={product.name}
                {...product}
                onDelete={this.onDelete}
                onEditSubmit={this.onEditSubmit}
              />)
          })
        }
      </div>
    );
  }
}

export default App;
