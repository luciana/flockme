import React, { useState } from 'react';
import ItemForm from './ItemForm';
import Item from './Item';

function ItemList() {
  const [todos, setTodos] = useState([]);
  const [question, setQuestion] = useState([]);
  const [isActive, setActive] = useState(false);

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
    
     
      <h5 className={isActive ? 'd-block': 'd-block'}>Setup your poll</h5>  
      <Item
        todos={todos}
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