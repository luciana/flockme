import React from 'react';
import { TiThumbsUp, TiThumbsDown} from 'react-icons/ti';

const Vote = ({ items, voteUp, voteDown }) => {


  return items.map((item, index) => (
   <>
    <div
      className={item.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <div key={item.id} onClick={() => voteUp(item.id)}>
        <span className="badge rounded-pill bg-light text-dark mx-2 ">{item.votes}</span> 
        {item.text}
      </div>
      <div className='icons'>
        <TiThumbsUp
          onClick={() => voteUp(item.id)}
          className='mx-5'
        />
        <TiThumbsDown
          onClick={() => voteDown(item.id)}
          className='mx-3'
        />
      </div>
    </div>
  </>
  ));
};

export default Vote;