import React, { useState } from 'react';
import ItemForm from './ItemForm';
import { TiThumbsUp, TiThumbsDown} from 'react-icons/ti';

const Vote = ({ items, voteUp, voteDown }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitVoteUp = value => {
    voteUp(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  return items.map((todo, index) => (
   <>
    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <div key={todo.id} onClick={() => voteUp(todo.id)}>
        <span className="badge rounded-pill bg-light text-dark mx-2 ">4</span> 
        {todo.text}
      </div>
      <div className='icons'>
        <TiThumbsUp
          onClick={() => voteUp(todo.id)}
          className='mx-5'
        />
        <TiThumbsDown
          onClick={() => voteDown(todo.id)}
          className='mx-3'
        />
      </div>
    </div>
  </>
  ));
};

export default Vote;