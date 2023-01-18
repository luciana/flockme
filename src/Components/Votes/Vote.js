import React from 'react';
import { FaCircle, FaRegCircle } from 'react-icons/fa';

const Vote = ({ question,
             handleVote,    
             votedList,     
             updateVotedList,      
             votedOptionsList,
             alreadyVotedForQuestionList,
             voteEnded }) => {
      
    //const [isHovered, setisHovered] = useState(false);
    const items = question.options;
   
    if (!items) return;

    // const toggleHover = () => {
    //   console.log('togglehover triggered');
    //   setisHovered(prevState => ({isHovered: !prevState.isHovered}));
    //   console.log('togglehover isHovered', isHovered);
    // }
   
  let alreadyVotedForQuestionListBool = alreadyVotedForQuestionList.length !== 0;

    const voteUp = id => {
      let i = [...items];
      let item = i.find(x => x.id === id);
    
      item.votes++;

      if (alreadyVotedForQuestionListBool) {
        return;
      }if (votedOptionsList.includes(id)){
        return;
      }else{        
        let item = {
          "id": Math.floor(Math.random() * 10000),
          "createdBbyUserId": 2,
          "optionId": id,
          "questionId": question.id,
          "createdAt": new Date().toISOString(),
          }
        updateVotedList(item);
        votedOptionsList.push(id);
      } 
      handleVote(question, id);
    };

    const iVotedForIt = ( id ) =>  {      
      return votedOptionsList.includes(id)
    }

    // console.log("votedList in Vote", votedList);
    // console.log("votedOptionsList in Vote", votedOptionsList);
    // console.log("alreadyVotedForQuestionList in Vote",alreadyVotedForQuestionList);


  return items.map((item, index) => (
    <div className='container p-3 border-bottom bg-light ' key={index} >
          <div className="row ">            
              <div key={item.id} onClick={() => voteUp(item.id)} className={iVotedForIt(item.id) ? 'col  ' : 'col  '}>
                <span className="badge rounded-pill bg-light text-dark mx-2 ">{item.votes}</span> 
                {item.text}
              </div>
            
            <div className="col ">                   
                <button className=" mx-5 badge border-0 bg-light"  
                  disabled={(voteEnded || alreadyVotedForQuestionListBool) ? true : false}                   
                  onClick={() => voteUp(item.id)}>                             
                  { (iVotedForIt(item.id) ) && (
                    <FaCircle color='green' size={24}/>
                  )}
                  { (!iVotedForIt(item.id) && voteEnded )&& (
                    <FaRegCircle color='gray' size={24}/>
                  )}
                  { (!iVotedForIt(item.id) && !voteEnded )&& (
                    <FaRegCircle color='black'  size={24}/>
                  )}                                 
                </button>                   
            </div>              
          </div>
          </div>
         
   
  ));
};

export default Vote;