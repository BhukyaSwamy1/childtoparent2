import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Search from './Search';

function App() {
    const [todo,setTodo]=useState([]);

    const addNew=(task)=>{
      setTodo([...todo,task])
    }

  return (
   <>
    <Search add={addNew}></Search>
    <ul>
      {
        todo.map((data)=>( <li>{data}</li>)
         
        )
      }
    </ul>
   </>
  );
}

export default App;
