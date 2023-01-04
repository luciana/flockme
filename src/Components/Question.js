import React from 'react';

function Question({ question, isActive, completeTodo, removeTodo, updateTodo }) {

  return (
     <div className={isActive ? 'd-block': 'd-block'} >       
        <div className="text-dark question-row p4" key={question.id} onClick={() => completeTodo(question.id)}>
            {question.text}
        </div>     
    </div>
  );
}
export default Question;