import './App.css';
import { Component } from 'react';

class App extends Component {

  constructor() {
    super();

    this.state = {
      products: []
    };
  }

  componentDidMount() {
    fetch('https://assessment-edvora.herokuapp.com')
    .then(response => response.json())
    .then(users => this.setState({ products: users}))
  }

  render() {
  return (
    <div className="App">
      <div className="filter">
        <div className="filter-container">
          <h1>Filters</h1>
          <hr />
          <div className="dropdown-menu">
            <select className="drops">
            <option value="" disabled selected>Products</option>
              {this.state.products.map(user => 
              <option value="user.value">{user.product_name}
              </option>)}
              </select>
              <select className="drops">
              <option value="" disabled selected>State</option>
              {this.state.products.map(user => 
              <option value="user.value">{user.address.state}
              </option>)}
              </select>
              <select className="drops">
              <option value="" disabled selected>City</option>
              {this.state.products.map(user => 
              <option value="user.value">{user.address.city}
              </option>)}
              </select>
          </div>
        </div>
      </div>
      <div className="content">
        <h1>Edvora</h1>
        <h6>Products</h6>
        <p>Products Name</p>
        <hr/>
        <div className="product-container"></div>
        <p>Products Name</p>
        <hr/>
        <div className="product-container"></div>
      </div>
    </div>
  );
}
}

export default App;
