import React from 'react';
import { TiThumbsUp} from 'react-icons/ti';

const Vote = ({ question, handleVote }) => {

    //console.log('vote - question', question);
    const items = question.options;
    //console.log('vote - question options', question.options);
    
    if (!items) return;

    const voteUp = id => {
      let i = [...items];
      let item = i.find(x => x.id === id);
    
      item.votes++;
  
      handleVote(question, id);
    };

  return items.map((item, index) => (
    <div
      className={item.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <div key={item.id} onClick={() => voteUp(item.id)}>
        <span className="badge rounded-pill bg-light text-dark mx-2 ">{item.votes}</span> 
        {item.text}
      </div>
      <div className='icons'>
         <span className=" mx-5 badge rounded-pill bg-light text-dark"  onClick={() => voteUp(item.id)}>
            
        <TiThumbsUp  />
        </span>
      
      </div>
    </div>
  ));
};

export default Vote;