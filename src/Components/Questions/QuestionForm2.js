import React, { useState, useRef } from 'react';
import {RiTimeLine} from 'react-icons/ri';

const QuestionForm2 = ({
  handleSubmit, 
  placeHolderText,
  submitLabel, 
  hasCancelButton = false,
  handleCancel,
  votePeriod,
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
          <div>
          <div className="row g-3 align-items-center">
              <div className="col-auto">
                <label htmlFor="expertTag" className="col-form-label"><RiTimeLine size={24}/></label>
              </div>
              <div className="col-auto">
                <div className="form-check form-check-inline">
                    <input type="radio" onChange={handleChange} className="form-check-input" id="10" name="votePeriod" value="10" checked={votePeriod === "10"} /><label className="form-check-label text-small "  htmlFor="10">10 min</label>
                </div>
                <div className="form-check form-check-inline">
                    <input type="radio" onChange={handleChange} className="form-check-input" id="120" name="votePeriod" value="120" checked={votePeriod === "120"}/><label className="form-check-label text-small " htmlFor="120">2 hours</label>
                </div>
                <div className="form-check form-check-inline">
                  <input type="radio" onChange={handleChange} className="form-check-input" id="480" name="votePeriod" value="480" checked={votePeriod === "480"} /><label className="form-check-label text-small " htmlFor="480">8 hours</label>
                </div>
              </div>             
            </div>           
          </div>
          <div>          
            <div className="row g-3 align-items-center">
              <div className="col-auto">
                <label htmlFor="expertTag" className="col-form-label text-small " data-bs-toggle="tooltip" data-bs-placement="top" title=" an expert opinion will weigh more">Expert Tag</label>
              </div>
              <div className="col-auto">
                <input type="expertTag" id="expertTag" className="form-control lh-1" placeholder="i.e #designer" value="" />
              </div>         
            </div>
          </div>

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

export default QuestionForm2;