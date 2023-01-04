import React, {useState} from 'react';
import { FaKiss } from "react-icons/fa";
import '../../Components/Item.css';
import './../pages.css';
import './profile-nav.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemForm from '../../Components/ItemForm';
import Item from '../../Components/Item';
import QuestionForm from '../../Components/QuestionForm';


const TAG = "#flocks";

function Profile() {
  const [todos, setTodos] = useState([]);
  const [question, setQuestion] = useState([]);
  
  const addQuestion = question => {
    let v = question.text;
    if (!v || /^\s*$/.test(v)) {
      return;
    }

    setQuestion(question);
    console.log("added new question", question);

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
    console.log("foundComma", foundComma);

    //user used OR as a delimiter
    let foundOR = list.indexOf('or');
    console.log("foundOR", foundOR);

    let indexComma =[];
    if (foundComma >0){
      indexComma = list.split(',');
    }
    
    let indexOr = [];
    if (foundOR >0 ){
      indexOr = list.split('or');
    }
  
    console.log("indexComma after flocks", indexComma);
    console.log("indexOr after flocks", indexOr);

    const index = [...indexComma, ...indexOr];
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
    <div className="App profile">
       <nav className="navbar navbar-expand-lg navbar-dark bg-warning fixed-top" id="sideNav">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">
                <span className="d-block d-lg-none">Luciana Bruscino @ FlockMe</span>
                <span className="d-none d-lg-block">
                    <FaKiss  alt="Luciana Bruscino"/>
                </span>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav">
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/">Home</a></li>                    
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#question-form">New Question</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#question-poll">Question Poll</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#questions">All Questions</a></li>                   
                </ul>
            </div>
        </nav>
        <div className="container-fluid p-0">
            <section className="resume-section" id="question-form">
                <div className="resume-section-content">
                  <div className="subheading">How can we help you ?</div>
                  <QuestionForm        
                    onSubmit={addQuestion}/>
                  <div className="d-block subheading">Setup your poll</div>
                  <Item
                    todos={todos}
                    completeTodo={completeTodo}
                    removeTodo={removeTodo}
                    updateTodo={updateTodo}
                  />
                  <ItemForm onSubmit={addTodo} />

                  <button onClick={handlePublishQuestion} className='btn btn-success btn-lg my-3'>
                    Publish Question & Poll
                  </button>
                </div>
            </section>
            <hr className="m-0"></hr>
            <section className='' id="question-poll">             
         
            </section>
            <hr className="m-0"></hr>
            <section className='' id="questions">
              all questions
            </section>
        </div>
    </div>
  );
}

export default Profile;
