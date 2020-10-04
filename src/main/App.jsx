import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/template/header';

function App() {
  return (
    <BrowserRouter >
      <div className={`wrapper`}>
          <Header />
      </div>
    </BrowserRouter>
  );
}

export default App;
