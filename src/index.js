import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Header/Header';
import "./css/style.css";
import Counter from './Components/Counter/Counter';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='container-fluid'>
      <Header />
      <Counter />
  </div>
);

