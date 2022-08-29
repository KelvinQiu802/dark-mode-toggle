import './App.css';
import React from 'react';

function App() {
  const [mode, setMode] = React.useState('light');

  const handleClick = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className='App' color-mode={mode}>
      <button onClick={handleClick}>Toggle</button>
      <div className='container'>
        <div className='item item1'></div>
        <div className='item item2'></div>
        <div className='item item3'></div>
      </div>
    </div>
  );
}

export default App;
