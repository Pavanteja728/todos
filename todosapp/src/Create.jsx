import React, { useState } from 'react';
import axios from 'axios';

function Create() {
  const [task, setTask] = useState('');

  const handleAdd = () => {
    axios.post("http://localhost:3010/add", { task: task })
      .then(result => {
        location.reload()
      })
      .catch(error => console.log(error));
  };

  return (
    <div className='inputs-cont'>
      <input type="text" className='input' value={task} onChange={(e) => setTask(e.target.value)} />
      <button type="button" className='btn btn-primary' onClick={handleAdd}>Add</button>
    </div>
  );
}

export default Create