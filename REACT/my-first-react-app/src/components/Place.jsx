import './Place.css'
import { useState } from 'react';

function Place() {
    const [value,setTodo]=useState("");
  return (
    <div className='size'>
      <h1>To Do-App</h1>
      <p>{value}</p>
      <input type="text" name="" id="" placeholder='enter text' className='input' 
        onChange={function(e){
            setTodo(e.target.value);
        }}
      /> <br /><br />
      <button className='btn' onClick={function(){alert(value)}}>Submit</button>
    </div>
  );
}
export default Place;