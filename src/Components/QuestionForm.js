import React, { useState, useEffect, useRef } from 'react';

const QuestionForm = (props ) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
   // setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
    <div >
      {props.edit ? (
        <>
          <textarea
            placeholder='Enter your question dfafda'
            value={input}
            onChange={handleChange}
            name='textarea'
            rows="6"
            ref={inputRef}
            className='edit form-control'
          />
          <button onClick={handleSubmit} className='btn-lg btn btn-dark my-3 edit'>
            Update
          </button>
        </>
      ) : (
        <>
          <textarea
            placeholder='i.e What should I eat today? #flocks pizza, pasta, salad'
            value={input}
            onChange={handleChange}
            name='textarea'
            rows="6"
            className='form-control '
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='btn-lg btn btn-dark my-3'>
           Ask Question
          </button>
        </>
      )}
      </div>
    </form>
  );
}

export default QuestionForm;