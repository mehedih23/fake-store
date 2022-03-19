import './App.css';
import MenuBar from './Components/MenuBar/MenuBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Products from './Components/Products/Products';

function App() {
  const [productNumber, setProductNumber] = useState(0);
  const updateProductNumber = () => setProductNumber(productNumber + 1)
  return (
    <div className="App">
      <MenuBar productNumber={productNumber}></MenuBar>
      <h1 className='my-4'>All Products</h1>
      <Products updateProductNumber={updateProductNumber}></Products>
    </div>
  );
}

export default App;
