import React, {useState} from 'react';
import '../../Components/Items/Item.css';
import './../pages.css';
import './../profile-nav.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemForm from '../../Components/Items/ItemForm';
import Item from '../../Components/Items/Item';
import QuestionForm from '../../Components/Questions/QuestionForm';
import SideNav from '../../Components/Shared/SideNav';
import { FaRegHandPaper, FaBuffer } from 'react-icons/fa';
import Questions from '../../Components/Questions/Questions';



const TAG = "#flocks";

function Profile() {
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
    console.log("found", found);

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
    
    console.log("index after flocks", index);

    if (typeof index === "undefined" && index === null && index.length == null && index.length === 0) {
          return;
    }

    for ( let i in index){
      console.log("about to add", index[i]);
      addTodo({
        id: Math.floor(Math.random() * 10000),
        text: index[i].trim()
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

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handlePublishQuestion = id =>{
    console.log('publish question');
  }
  return (
    <div className="App profile container">
        <SideNav name="Luciana Bruscino" />
        <div className="container-fluid p-0">
            <section className="resume-section" id="question-form">
                <div className="resume-section-content">
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
                              completeTodo={completeTodo}
                              removeTodo={removeTodo}
                              updateTodo={updateTodo}
                            />
                            <ItemForm onSubmit={addTodo} />
                            </div>
                          </div>
                    </div>
                    <button onClick={handlePublishQuestion} className='btn btn-success btn-lg disabled my-3'>
                      Publish Question & Poll
                    </button>
                </div>
            </section>
            <hr className="m-0"></hr>  
            <section className="resume-section" id="stats">
                <div className="resume-section-content">
                 
                <Questions
                    questionsUrl="http://localhost:3000/questions"
                    currentUserId="2"
                  />
                </div>
            </section>          
        </div>
    </div>
  );
}

export default Profile;
