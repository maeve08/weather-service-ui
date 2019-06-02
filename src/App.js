import React from 'react';
import './App.css';
import Cities from "./component/cities/Cities";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Cities name={'MELBOURNE'}/>
      </header>
    </div>
  );
}

export default App;
