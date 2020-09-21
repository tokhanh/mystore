import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Details from './components/Details';
import Default from './components/Default';
import Navbar from './components/Navbar';
import Modal from './components/Modal';

function App() {
  
  
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/cart" component={Cart} />
        <Route path="/details" component={Details} />
        <Route component={Default} />
      </Switch>
      <Modal />
    </Router>
  );
}

export default App;
