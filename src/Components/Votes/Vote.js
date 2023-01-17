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
    <div className={item.isComplete ? 'container px-4 todo-row complete' : 'container px-4 todo-row'} key={index} >

        
          <div className="row ">
            
              <div key={item.id} onClick={() => voteUp(item.id)} className="col p-3 border-bottom bg-light">
                <span className="badge rounded-pill bg-light text-dark mx-2 ">{item.votes}</span> 
                {item.text}
              </div>
            
            <div className="col p-3 border-bottom bg-light">
              <span className=" mx-5 badge rounded-pill bg-light text-dark"  onClick={() => voteUp(item.id)}>
                <TiThumbsUp size={24}/>
              </span>     
            </div>
          </div>
          </div>
         
   
  ));
};

export default Vote;