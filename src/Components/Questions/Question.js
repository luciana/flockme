import React from 'react';
import QuestionForm from './QuestionForm';
import Vote from '../Votes/Vote';
import { FaCircleNotch , FaCircle} from 'react-icons/fa';
import Avatar from 'react-avatar';
import QuestionAndPoll from './QuestionAndPoll';

function Question({ 
  question, 
  replies,
  setActiveQuestion,
  activeQuestion,
  addQuestion,
  deleteQuestion,
  updateQuestion,
  parentId = null,
  currentUserId,
 }) {

 if (!question) return;

  const isAReply = question.parentId != null;
  const canDelete = currentUserId === question.userId  && !isAReply
  const canReply = currentUserId === question.userId && !isAReply
  const createdAt = new Date(question.createdAt).toLocaleDateString();
  const replyId = parentId ? parentId : question.id;
  const voteEnded = new Date() - new Date(question.voteEndAt) > 1;

  const isReplying =
    activeQuestion &&
    activeQuestion.id === question.id &&
    activeQuestion.type === "replying";

  return (
     <div key={question.id} className="my-5 row border border-2 p-3 d-flex align-items-start flex-column" >       
        <div className="p-2"> 
            <div> <Avatar name="{question.name}" className="img-fluid img-profile rounded-circle mx-auto mb-0" alt="{question.name}" /></div>
            <div>{question.username}</div>
            <div>{createdAt}</div>
        </div>      
        <div className="p-2"> 
            {question.text} 
        </div>
        {!isAReply && voteEnded && (
          <div> 
            <p > Voting closed <FaCircle /> on {question.voteEndAt} </p>
           
          </div>         
        )}
         {!isAReply && !voteEnded && (
          <div> 
        

          
            <p > Voting Open < FaCircleNotch /> until {question.voteEndAt}</p>
          </div>         
        )}
        {isAReply && (
            <div> 
              <FaCircle color="green"/> {question.sentiment}                  
            </div>
          )}
        <div className="p-2">
          <Vote question={question} 
                handleVote={updateQuestion} />    
        </div>
        <div className="p-2">
          {canReply && (
            <button className="btn btn-sm btn-primary mx-2" onClick={()=> setActiveQuestion({id: question.id, type:"replying"})}>Reply</button>
          )}
          {canDelete && (
            <button className="btn btn-sm btn-danger mx-2"  onClick={()=> deleteQuestion(question.id)}>Delete</button>
          )}
          </div>
          {isReplying && (
            <QuestionForm
              submitLabel="Reply"
              placeHolderText="tell us if the suggestion worked out"   
              handleSubmit={(text) => addQuestion({
                id: Math.floor(Math.random() * 10000),
                text: text,
                parentId: replyId,
                userId: "2",
                username: "Luciana",
                createdAt: new Date().toISOString(),
                options:[],
              })}
            />
          )}
          {replies.length > 0 && (             
          <div className="replies alert alert-primary ">            
            {replies.map((reply) => (
              <Question
                question={reply}
                key={reply.id}
                setActiveQuestion={setActiveQuestion}
                activeQuestion={activeQuestion}
                updateQuestion={updateQuestion}
                deleteQuestion={deleteQuestion}
                addQuestion={addQuestion}
                parentId={question.id}
                replies={[]}
                currentUserId={currentUserId}
              />
            ))}
          </div>
        )}
      </div>
  );
}
export default Question;