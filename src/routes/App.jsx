import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Checkout from '../containers/Checkout';
import Home from '../containers/Home';
import Information from '../containers/Information';
import Success from '../containers/Success';
import Payment from '../containers/Payment';
import NotFound from './../containers/NotFound';
import Layout from './../components/Layout';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';

const App = () => {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/checkout" component={Checkout}></Route>
            <Route
              exact
              path="/checkout/information"
              component={Information}
            ></Route>
            <Route exact path="/checkout/payment" component={Payment}></Route>
            <Route exact path="/checkout/success" component={Success}></Route>
            <Route component={NotFound}></Route>
          </Switch>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
