import React, { useState } from 'react';
import ItemForm from './ItemForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

const Item = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (!todos) return;

  if (edit.id) {
    return <ItemForm edit={edit} onSubmit={submitUpdate} />;
  }

 return todos.map((todo, index) => (
   <div className="container" key={index}>
    <div key={index} className='row todo-row'>
      <div key={todo.id} className="col-7" >
        {todo.text}
      </div>
      <div className='col-5'>
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className='delete-icon'
        />
        <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className='edit-icon'
        />
      </div>
    </div>
  </div>
  ));
};

export default Item;