import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Create from './Create';
import {BsCircleFill, BsFillCheckCircleFill} from "react-icons/bs"
import {BsFillTrashFill} from "react-icons/bs"

function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3010/get')
      .then(response => {
        setTodos(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  const handleEdit=(id)=>{
    axios.put('http://localhost:3010/update/'+id)
    .then(response => {
      location.reload()
    })
    .catch(error => console.log(error));


  }

  const handleDelete=(id)=>{
    axios.delete('http://localhost:3010/delete/'+id)
    .then(response => {
      location.reload()
    })
    .catch(error => console.log(error));

  }

  return (
    <div className='home'>
      <h1>TodoList</h1>
      <Create />
      {todos.length === 0 ? (
        <div><h2>No Records</h2></div>
      ) : (
        todos.map(todo => (
          <div key={todo._id} className='todo-item'>
            <div className='start' onClick={()=>handleEdit(todo._id)}>
              {todo.done? <BsFillCheckCircleFill></BsFillCheckCircleFill>:<BsCircleFill/>}
              
            <p className={todo.done?"line-through":""}>{todo.task}</p>
            </div>
            <span><BsFillTrashFill onClick={()=>handleDelete(todo._id)}/></span>
          </div>
        ))
      )}
    </div>
  );
}

export default Home
