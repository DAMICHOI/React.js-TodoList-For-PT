import React, { Component } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

class App extends Component {
  render() {
    return (
      <div>
        <TodoTemplate>
          <TodoInsert />
          <TodoList />
        </TodoTemplate>
      </div>
    );
  }
}

export default App;
