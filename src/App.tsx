import React, { useState } from 'react';

import Randomizer from './components/Randomizer';
import './App.css';

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <Randomizer />
      </header>
    </div>
  );
}

export default App;
