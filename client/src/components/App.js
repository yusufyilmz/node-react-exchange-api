import React, { Component } from "react";
import ExchangeProductSelect from "containers/ExchangeProductSelect";
import ProductList from "containers/ProductPriceList";
import ExchangeError from "containers/ExchangeError";
import ExchangeLoader from 'containers/ExchangeLoader';
import WelcomeMessage from 'components/WelcomeMessage';

class App extends React.Component {

  render() {
    return (
      <div className="container-fluid">
        <center>
          <WelcomeMessage message="Welcome to the Exchange Store"/>
          <ExchangeProductSelect />
          <ProductList />
          <ExchangeError />
          <ExchangeLoader />
        </center>
      </div>
    );
  }
}

export default App;