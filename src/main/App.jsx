import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Content from '../components/template/content';

function App() {

  return (
    <BrowserRouter >
      <div className={`wrapper`}>
          {/* <Header /> */}
          <Content />
      </div>
    </BrowserRouter>
  );
}

export default App;
