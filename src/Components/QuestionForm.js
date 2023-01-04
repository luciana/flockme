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
    <div className="p-4">
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
          <button onClick={handleSubmit} className='btn-lg btn btn-warning my-3 edit'>
            Update
          </button>
        </>
      ) : (
        <>
          <textarea
            placeholder='Type your question'
            value={input}
            onChange={handleChange}
            name='textarea'
            rows="6"
            className='form-control '
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='btn-lg btn btn-warning my-3'>
           Ask Question
          </button>
        </>
      )}
     
      <div className="text-muted fs-6 fw-light">
        Type in your question. For the poll options prefix it with # flocks and it will automatically setup your poll.
      </div>
      </div>
    </form>
  );
}

export default QuestionForm;