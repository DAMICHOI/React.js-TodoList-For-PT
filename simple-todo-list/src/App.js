import React, { useState, useRef, useCallback, useReducer } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

// init
const todoLists = [
  {
    id: 1,
    text: '화면설계서 그리기',
    checked: true,
  },
  {
    id: 2,
    text: 'html 버전 구현하기',
    checked: false,
  },
  {
    id: 3,
    text: '리액트로 구현하기',
    checked: false,
  },
];

const todoReducer = (todos, action) => {
  switch (action.type) {
    case 'INSERT':
      return todos.concat(action.todo);
    case 'REMOVE':
      return todos.filter(todo => todo.id !== action.id);
    case 'TOGGLE':
      return todos.map(todo =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,
      );
    default:
      return todos;
  }
};

const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, todoLists);
  // 고유값으로 사용될 id
  // ref를 사용하여 변수 담기
  const nextId = useRef(3);

  const onInsert = useCallback(text => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    dispatch({ type: 'INSERT', todo });
    nextId.current += 1;
  }, []);

  const onRemove = useCallback(id => {
    dispatch({ type: 'REMOVE', id });
  }, []);

  const onToggle = useCallback(id => {
    dispatch({ type: 'TOGGLE', id });
  }, []);

  return (
    <div>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </TodoTemplate>
    </div>
  );
};

export default App;
