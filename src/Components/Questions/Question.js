import React from 'react';
import QuestionForm from './QuestionForm';


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

  const canDelete = currentUserId === question.userId 
  const canReply = currentUserId === question.userId 
  const createdAt = new Date(question.createdAt).toLocaleDateString();
  const replyId = parentId ? parentId : question.id;
  console.log("replyId",replyId);
  const isReplying =
    activeQuestion &&
    activeQuestion.id === question.id &&
    activeQuestion.type === "replying";

  return (
     <div key={question.id} className="my-5 row border border-2 p-3 d-flex align-items-start flex-column" >       
        <div className="p-2"> 
            <div>{question.username}</div>
            <div>{createdAt}</div>
        </div>        
        <div className="p-2"> 
          {question.text}
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
          <div className="replies">
            {replies.map((reply) => (
              <Question
                comment={reply}
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