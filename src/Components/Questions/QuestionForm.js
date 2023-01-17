import React, { useState, useRef } from 'react';

const QuestionForm = ({
  handleSubmit, 
  placeHolderText,
  submitLabel, 
  hasCancelButton = false,
  handleCancel,
  initialText = "",
 }) => {
  const [input, setInput] = useState(initialText);
  const inputRef = useRef(null);
  const isTextareaEmpty = input.length === 0;

  // useEffect(() => {
  //   inputRef.current.focus();
  // });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    console.log("handleSubmit(input);", input);
    handleSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
      parentId: null,
      userId: 2,
      username: "Luciana",
      name: "Luciana Bruscino",
      createdAt: new Date().toISOString(),
      voteEndAt: null,
      sentiment: "Positive",
      options:[],
    });
    //setInput('');
  }

  return (
    <form  className='todo-form'>
          <textarea
            placeholder={placeHolderText}
            value={input}
            onChange={handleChange}
            name='textarea'
            rows="4"
            maxLength="124"
            className='form-control '
            ref={inputRef}
          />
          <button onClick={onSubmit} disabled={isTextareaEmpty} className='btn-md btn btn-success my-3'>
           {submitLabel}
          </button>
          {hasCancelButton && (
            <button
              type="button"
              className="btn btn-md btn-dark"
              onClick={handleCancel}
            >
              Cancel
            </button>
          )}
    </form>
  );
};

export default QuestionForm;