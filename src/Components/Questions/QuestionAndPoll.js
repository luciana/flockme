import React, {useState} from 'react';
import QuestionForm from './QuestionForm';
import ItemForm from '../Items/ItemForm';
import Item from '../Items/Item';
import { FaRegHandPaper, FaBuffer } from 'react-icons/fa';

const TAG = "#flocks";

function QuestionAndPoll({
    addQuestion,
    parentId = null
}){

    const [todos, setTodos] = useState([]);
    const [question, setQuestion] = useState([]);
    const addQuestionAndPoll = question => {
        console.log("addQuestionAndPoll", question);
        let v = question.text;
        if (!v || /^\s*$/.test(v)) {
          return;
        }
        console.log("added new question", question);
        setQuestion(question);
        
    
        //Setup Poll automatically with the files in #flocks
        let found = v.indexOf(TAG);
    
        //user has entered the tag to automatically setup the poll
        if (found === -1 ){
          return;
        }
    
        let list = v.substring(found + TAG.length);
        if (!list || /^\s*$/.test(list)) {
          return;
        }
        console.log("list", list);
    
        //user used comma as a delimiter
        let foundComma = list.indexOf(',');
    
        let index =[];
        if (foundComma >0){
          index = list.split(',');
        }
    
        if (typeof index === "undefined" && index === null && index.length == null && index.length === 0) {
              return;
        }
    
        for ( let i in index){        
          addTodo({
            id: Math.floor(Math.random() * 10000),
            text: index[i].trim(),
            votes: 0
          });
        }
      };
    
      const addTodo = todo => {
        console.log('add Todo', todo);
        if (!todo.text || /^\s*$/.test(todo.text)) {
          return;
        }
    
        setTodos(todos => {
          console.log("I should be printed once and I am printed once", todos);
          const newArray = [...todos];
          newArray.push(todo);
          return newArray;
        });
      };
      const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
          return;
        }
    
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
      };
    
      const removeTodo = id => {
        const removedArr = [...todos].filter(todo => todo.id !== id);
    
        setTodos(removedArr);
      };

      const handlePublishQuestion = e => {
        question.options = todos;
        e.preventDefault();
        addQuestion(question);
      }

    return(
        <>
         <h1 className="text-dark">Question <FaRegHandPaper /> </h1>
        <QuestionForm  
        submitLabel="Ask"
        placeHolderText="i.e What should I eat today? #flocks pizza, pasta, salad"                   
        handleSubmit={addQuestionAndPoll}
        />
        <div className="container">
          <div className="d-block subheading">Setup your poll <FaBuffer/></div>
            <div className="my-2 row"> 
              <div className="col border border-2 p-3 d-flex align-items-start flex-column">           
                <div className="mb-auto p-2"> 
                  Set up your poll ! Add poll options to help folks assist with your decision.
                  If you typed '#flocks' and a list of items in your question, the poll will be created for you.
                  Once your question and poll are setup. Publish it with the green button below for others to see it.                  
                </div>
              </div>     
              <div className="col col-md-auto">
              <Item
                todos={todos}           
                removeTodo={removeTodo}
                updateTodo={updateTodo}
              />
              <ItemForm onSubmit={addTodo} />
              </div>
            </div>
        </div>
         <button onClick={handlePublishQuestion} className='btn btn-success btn-lg my-3'>
            Publish Question & Poll
        </button>
      </>
    );
};
export default QuestionAndPoll;