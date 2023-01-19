import React, {useState} from 'react';
import QuestionModalDialog from './QuestionModalDialog';
import QuestionService from '../../Services/QuestionService'
import { useNavigate } from 'react-router-dom';

const TAG = "#flocks";

function QuestionAndPoll2({
    parentId = null,
}){

    const [todos, setTodos] = useState([]); 
    const [question, setQuestion] = useState([]);     
    const navigate = useNavigate();


    const addQuestion = (text) => {
          console.log('addQuestion triggered from question and poll 2', text);
          QuestionService.createQuestion(text).then((question) => {         
            // setBackendQuestions([question.text, ...backendQuestions]);
            // setActiveQuestion(null);
            console.log('addQuestion added question and poll', text);
            
            setQuestion(text);
            //redirect to main page
            navigate('/Main');            
          });
      };
    
      const addTodo = todo => {
        console.log('add Todo', todo);
        if (!todo.text || /^\s*$/.test(todo.text)) {
          return;
        }
    
        setTodos(todos => {  
          const newArray = [...todos]; 
          newArray.push(todo); 
          return newArray; 
        });
        console.log('add Todo after adding it', todo);
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

     


      const addPostOptionsFromQuestion = (question)  => {
        let v = question.text;
        if (!v || /^\s*$/.test(v)) {
          return;
        }

        //Setup Poll automatically with the files in #flocks
        let found = v.indexOf(TAG);

        //user has not entered the tag to automatically setup the poll
        if (found === -1) {
          alert('Your question does not contain any #flocks. i.e Should I take a shower today #flocks yes, no');
          return;
        }


        let list = v.substring(found + TAG.length);
        //user has not entered the tag with a list of itemes
        if (!list || /^\s*$/.test(list)) {
          return;
        }


        //user used comma as a delimiter
        let foundComma = list.indexOf(',');

        let index = [];
        if (foundComma > 0) {
          index = list.split(',');
        }

        if (typeof index === "undefined" && index === null && index.length == null && index.length === 0) {
          return;
        }
        
        console.log("index",index);
        for (let i in index) {
          addTodo({
            id: Math.floor(Math.random() * 10000),
            text: index[i].trim(),
            isComplete: true,
            votes: 0
          });
        }
        setQuestion(question);
      } 

      const handlePublishQuestion = e => {
        e.preventDefault();  
        question.options = todos;
        console.log("question from handlePublishQuestion", question);            
        addQuestion(question);
        alert('You question was added - good luck ( this is mock data for now - it will not show on the questions page');
        navigate('/Main');  
      }
    return(
        <>
        
           <div className="white-bg container border border-2 p-2 d-flex flex-column">
              <QuestionModalDialog  
                  addPostOptionsFromQuestion={addPostOptionsFromQuestion}   
                  handlePublishQuestion={handlePublishQuestion}                 
                  addTodo={addTodo}              
                  updateTodo={updateTodo}
                  removeTodo={removeTodo}                   
                  todos={todos}
                />
            </div>
        </>
    );
};
export default QuestionAndPoll2;