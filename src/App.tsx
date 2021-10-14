import React from 'react';
import logo from './logo.svg';
import './App.css';

type appProps = {
  headerText: string,
  subtitle?:string
}
function App({headerText, subtitle = "default text"}: appProps) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>{headerText}</h1>
        {subtitle && <h2>{subtitle}</h2>}
      </header>
    </div>
  );
}

export default App;
