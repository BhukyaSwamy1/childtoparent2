import React, { useState } from 'react'

const Search = (data) => {
    const [newTask,setNewTask]=useState("");

    const handleChange=(e)=>{
        setNewTask(e.target.value);
    }

    const handleSubmit=()=>{
        data.add(newTask);
        setNewTask("");
    }


  return (
    <div>
        <input value={newTask} onChange={handleChange} />
        <button onClick={handleSubmit} >Add new task</button>
    </div>
  )
}

export default Search;