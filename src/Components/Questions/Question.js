import React from 'react';
import Vote from '../Votes/Vote';
import { FaCircleNotch , FaCircle} from 'react-icons/fa';
import Avatar from 'react-avatar';

function Question({ 
  question, 
  replies,
  setActiveQuestion,
  activeQuestion,
  deleteQuestion,
  updateQuestion,
  parentId = null,
  currentUserId,
 }) {

 if (!question) return;


 const formatDateAndTime = (date_input)  => {
  let date = new Date(date_input);
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return date.getMonth()+1 + "/" + date.getDate() + "/" + date.getFullYear() + " at " + strTime;
}

  const isAReply = question.parentId != null;
  const canDelete = currentUserId === question.userId  && !isAReply
  const canReply = currentUserId === question.userId && !isAReply
  const createdAt = formatDateAndTime(question.createdAt);
  const replyId = parentId ? parentId : question.id;
  const voteEnded = new Date() - new Date(question.voteEndAt) > 1;

  const isReplying =
    activeQuestion &&
    activeQuestion.id === question.id &&
    activeQuestion.type === "replying";

  return (
     <div key={question.id} className="my-5 container border border-2 p-3 d-flex  flex-column" >       
        <div className="p-2 row align-items-start"> 
            <div className="col-1"> <Avatar size="36" name="{question.name}" className="img-fluid img-profile rounded-circle mx-auto mb-0" alt="{question.name}" /></div>
            <div className="col-11">
              <div className="text-small lh-1"><span>{question.username} </span><span aria-hidden="true"> · </span> <span> {createdAt} </span></div>
              <div className="text-small">
                {!isAReply && voteEnded && (<span > Voting closed <FaCircle /> </span>)}
                {!isAReply && !voteEnded && (<span> Voting Open < FaCircleNotch /> until {formatDateAndTime(question.voteEndAt)}</span>)}
                {isAReply && (<span><FaCircle color="green"/> {question.sentiment}</span>)}
              </div>
              
            </div>
        </div>      
        <div className="p-2"> 
            {question.text} 
        </div>
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
          {/* {isReplying && (
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
          )} */}
          {replies && replies.length > 0 && (             
          <div className="replies alert alert-primary ">            
            {replies.map((reply) => (
              <Question
                question={reply}
                key={reply.id}
                setActiveQuestion={setActiveQuestion}
                activeQuestion={activeQuestion}
                updateQuestion={updateQuestion}
                deleteQuestion={deleteQuestion}          
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