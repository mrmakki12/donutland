import React, { useState } from 'react';
import { Scene } from '../features/Scene/Scene';
import { About } from '../features/About/About';
import { Inventory } from '../features/Inventory/Inventory';
import { Cart } from '../features/Cart/Cart';
import { Popup } from '../features/Pop-up/Popup';
import './App.css';

function App() {

  const [display, setDisplay] = useState('none')

  return (
    <div className="App">
      <div className='cursor'></div>
      <Scene />
      <About />
      <Inventory />
      <Cart setDisplay={setDisplay}/>
      <Popup display={display} setDisplay={setDisplay}/>
    </div>
  );
}

export default App;
