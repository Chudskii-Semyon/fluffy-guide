import React, { useEffect, useState } from 'react';
import { inject, observer, useObserver } from 'mobx-react';
import { Subject } from 'rxjs';
import useRootStore from '../hooks/useRootStore';

const TodoList = inject('TodoListStore')(observer(({ TodoListStore }) => {
  const [todoName, setTodoName] = useState('');

  // const todoList = useStore();
  const todoList = TodoListStore;

  // useEffect(() => {
  //   const onTodoNameChange = new Subject();
  //
  //   onTodoNameChange;
  // });

  // const handleTextChange = (event) => {
  //   const todoName = event.target.value;
  // };
  const handleTodoNameChange = (event) => {
    setTodoName(event.target.value);
  };
  // console.log(todoList);

  return useObserver(() => (
    <div>
      <p>Add new todo</p>
      <input type="text" onChange={handleTodoNameChange} value={todoName} />
      <button type="button" onClick={() => todoList.addTodo(todoName)}>Add new todo</button>
      <h1>Todos</h1>
      <h2>Finished todos: </h2>
      <ul>
        {todoList.finishedTodos.map((todo) => (
          <li key={todo.id}>
            <input type="checkbox" checked={todo.isDone} onChange={todo.toggleIsDone} />
            <p>{todo.text}</p>
          </li>
        ))}
      </ul>

      <h2>Open todos: </h2>
      <ul>
        {todoList.openTodos.map((todo) => (
          <li key={todo.id}>
            <input type="checkbox" checked={todo.isDone} onChange={todo.toggleIsDone} />
            <p>{todo.text}</p>
          </li>
        ))}
      </ul>
    </div>
  ));
}));

export default TodoList;
