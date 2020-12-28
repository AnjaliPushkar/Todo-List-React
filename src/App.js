import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <h1>hello react!</h1>
      <input/>
      <button>todo</button>
      <ul>
        <li>DOg</li>
        <li>Cat</li>
      </ul>
    </div>
  );
}

export default App;
