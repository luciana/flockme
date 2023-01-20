import React, { useState, useRef } from 'react';

function ItemForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
      votes: 0
    });
    
    setInput('');
  };

  return (
   
    <form onSubmit={handleSubmit} className='todo-form'>
      {props.edit ? (
        <>
         <div class="input-group mb-3">
          <input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='form-control edit'
          />
          <button onClick={handleSubmit} className='btn btn-outline-secondary edit'>
            Update
          </button>
          </div>
        </>
      ) : (
        <>
        
      
        
        <div class="input-group mb-3">
          <input
            placeholder='Type available options'
            value={input}
            type="text"
            onChange={handleChange}
            name='text'
            className='form-control'
            ref={inputRef}
            aria-label="Question's options"
          /> 

          <button onClick={handleSubmit} className='btn btn-outline-secondary' type="button">
                  Add Option
                  </button>  
                  </div>

          
          
         
            
       </>
      )}
      
    </form>
  
  );
}

export default ItemForm;