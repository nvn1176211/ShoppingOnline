import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductsContainer from './containers/ProductsContainer';
import CartContainer from './containers/CartContainer';
import MessageContainer from './containers/MessageContainer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <main className="ms-1">
          <ProductsContainer />
          <MessageContainer />
          <CartContainer />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
