import React, { useState } from 'react';
import ItemForm from './ItemForm';
import Item from './Item';
import QuestionForm from '../Questions/QuestionForm';
import Question from '../Questions/Question';


const TAG = "#flocks";

function ItemList() {
  const [todos, setTodos] = useState([]);
  const [question, setQuestion] = useState([]);
  const [isActive, setActive] = useState(false);
  
  console.log('todos',todos);
  function toggleClass() {
    console.log("toggleClass",toggleClass);
    setActive(!isActive);
    return;
  };

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

  return (
    <>
      <h1>How can we help you ?</h1>
     
             
      <h5 className={isActive ? 'd-block': 'd-block'}>Setup your poll</h5>  
      <Item
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
       <ItemForm onSubmit={addTodo} />


   
       <Vote
        items={items}
        voteUp={completeTodo}
        voteDown={removeTodo}
      />
    </>
  );
}

export default ItemList;