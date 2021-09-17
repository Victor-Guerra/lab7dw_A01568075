import React from 'react';
import './App.css';
import ProductDetail from './containers/ProductDetail';
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  return (
    <React.Fragment>
      <CssBaseline/>
      <ProductDetail/>
    </React.Fragment>
  );
}

export default App;