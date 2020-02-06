import React from 'react';
import './App.css';

import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/Burgerbuilder';
import Checkout from './containers/Checkout/Checkout';

import {Route} from 'react-router-dom';
import ContactInfo from './containers/Contact-Info/Contact-Info';

function App() {
  return (
    <div>
        <Layout>
            <Route path="/" component={BurgerBuilder} exact></Route>
            <Route path="/checkout" component={Checkout}></Route>
        </Layout>
    </div>
  );
}

export default App;
