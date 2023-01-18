import React from 'react';
import { TiThumbsUp} from 'react-icons/ti';

const Vote = ({ question, handleVote, votedList, votedOptionsList }) => {
   

    const items = question.options;
  
    let alreadyVotedForQuestionList = votedList.filter(
      (vote) => vote.questionId === question.id
    );

    let alreadyVotedForQuestionListBool = alreadyVotedForQuestionList.length !== 0;
    console.log('filtered list alreadyVotedForQuestionList', alreadyVotedForQuestionList, question.id, alreadyVotedForQuestionListBool);

    if (!items) return;
   
    const voteUp = id => {
      let i = [...items];
      let item = i.find(x => x.id === id);
    
      item.votes++;
      handleVote(question, id);
    };


  return items.map((item, index) => (
    <div className='container px-4' key={index} >
          <div className="row ">            
              <div key={item.id} onClick={() => voteUp(item.id)} className={votedOptionsList.includes(item.id) ? 'col p-3 border-bottom bg-light ' : 'col p-3 border-bottom bg-light '}>
                <span className="badge rounded-pill bg-light text-dark mx-2 ">{item.votes}</span> 
                {item.text}
              </div>
            
            <div className="col p-3 border-bottom bg-light">
              <button className=" mx-5 badge rounded-pill bg-light text-dark"  disabled={(votedOptionsList.includes(item.id)|| alreadyVotedForQuestionListBool) ? true : false}  onClick={() => voteUp(item.id)}>
                <TiThumbsUp color={votedOptionsList.includes(item.id) ? 'green' : alreadyVotedForQuestionListBool ? 'gray' : 'black'} size={24}/>
              </button>     
            </div>
          </div>
          </div>
         
   
  ));
};

export default Vote;