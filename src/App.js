import React, { useState } from 'react';
import Todo from './Todo';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import './App.css';

function App() {
  const [todos, setTodos] = useState(['Doggg', 'Cattt']);
  const[input, setInput] = useState('');

  const addTodo = (event) =>{
    //this will fire of when we click the button
    event.preventDefault();//will stop the REFRESH
    setTodos([...todos, input]);
    setInput(''); //clear up the input after hitting submit
  }
  
  return (
    <div className="App">
      <h1>hello react!</h1>
      <form>
      

      <FormControl>
        <InputLabel>Write a Todo</InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value)}/>
      </FormControl>


      <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
         Add Todo
      </Button>
      
      </form>
      
      <ul>
        {todos.map(todo => (
          <Todo text={todo}/>
          // <li>{todo}</li>
        ))}
        <li>DOg</li>
        <li>Cat</li>
      </ul>
    </div>
  );
}

export default App;
