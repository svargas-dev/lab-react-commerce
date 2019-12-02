import React from 'react';
import Heading from './components/Heading';
import Products from './components/Products';
import './App.css';

const products = require('./products.json');


function App() {
  return (
    <div className="App">
      <Heading />
      
      <div className="product d-flex flex-row flex-wrap justify-content-center m-3">
        {products.map(product => {
          const { image, name, colors, unitsLeft } = product;
          const price = product.price.value / 100;

          return <Products
            key={name}
            image={image}
            name={name}
            colors={colors}
            unitsLeft={unitsLeft}
            price={price}
            />
        })}
      </div>

    </div>
  );
}

export default App;
