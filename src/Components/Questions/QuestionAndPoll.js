import React, {useState} from 'react';
import QuestionForm from './QuestionForm';
import ItemForm from '../Items/ItemForm';
import Item from '../Items/Item';
import { FaRegHandPaper } from 'react-icons/fa';

const TAG = "#flocks";

function QuestionAndPoll({
    addQuestion,
    parentId = null
}){

    const [todos, setTodos] = useState([]);
    const [votePeriod, setVotePeriod] = useState(10);
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

      const handleChange = e => {       
        console.log("onchange radio buttonj" ,e.currentTarget.value);
        setVotePeriod(e.currentTarget.value);

      }
      const handlePublishQuestion = e => {
        e.preventDefault();
        const createdDate = new Date(question.createdAt);
        const newDate = addMinutes(createdDate, parseFloat(votePeriod));
        question.voteEndAt = newDate;
        question.options = todos;
       
        addQuestion(question);
      }

      const addMinutes = (date, minutes)  => {
        date.setMinutes(date.getMinutes() + minutes);
      
        return date;
      }

    return(
        <>
         <h1 className="text-dark">Question <FaRegHandPaper /> </h1>
         <small className="text-start m-0 text-black-50"><strong>Pro Tip:</strong> Type '#flocks' followed by a list of items in your question, the poll will be created for you.</small>    
        <QuestionForm  
        submitLabel="Ask"
        placeHolderText="i.e What should I eat today? #flocks pizza, pasta, salad"                   
        handleSubmit={addQuestionAndPoll}
        />
        
        <Item
          todos={todos}           
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />
        <ItemForm onSubmit={addTodo} />

        <span>How Long the Pool will remain open? </span>
          <div className="form-check form-check-inline">
              <input type="radio" onChange={handleChange} className="form-check-input" id="10" name="votePeriod" value="10" checked={votePeriod === "10"} /><label className="form-check-label"  htmlFor="10">10 min</label>
          </div>
          <div className="form-check form-check-inline">
              <input type="radio" onChange={handleChange} className="form-check-input" id="120" name="votePeriod" value="120" checked={votePeriod === "120"}/><label className="form-check-label" htmlFor="120">2 hours</label>
          </div>
          <div className="form-check form-check-inline">
            <input type="radio" onChange={handleChange} className="form-check-input" id="480" name="votePeriod" value="480" checked={votePeriod === "480"} /><label className="form-check-label" htmlFor="480">8 hours</label>
          </div>
          <div>
          <button onClick={handlePublishQuestion} className='btn btn-success btn-lg my-3'>
              Publish Question & Poll
          </button>
         </div>
      </>
    );
};
export default QuestionAndPoll;