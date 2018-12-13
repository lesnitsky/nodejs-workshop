import React from 'react';
import { render } from 'react-dom';

import { TodoItem } from './components/TodoItem';

import { store } from '../redux/store';
import {
  createTodo, fetchTodos, deleteTodo, updateTodo,
} from '../redux/actions';

require('./style.css');

class App extends React.Component {
  state = {
    todoTitle: '',
    appState: store.getState(),
  };

  componentDidMount() {
    store.subscribe(() => {
      const appState = store.getState();

      this.setState({
        appState,
      });
    });

    store.dispatch(fetchTodos());
  }

  onInputChange = (e) => {
    this.setState({
      todoTitle: e.target.value,
    });
  };

  onKeyPress = (e) => {
    if (e.key !== 'Enter') {
      return;
    }

    this.setState({
      todoTitle: '',
    });

    store.dispatch(createTodo({ content: this.state.todoTitle }));
  };

  onTodoToggle = (id) => {
    const { isDone } = this.state.appState.todos.find(todo => todo.id === id);

    store.dispatch(updateTodo({ id, isDone: !isDone }));
  };

  onTodoRemoved = (id) => {
    store.dispatch(deleteTodo({ id }));
  };

  render() {
    return (
      <div>
        <header>Todo App</header>

        <input
          type="text"
          placeholder="What to do"
          value={this.state.todoTitle}
          onChange={this.onInputChange}
          onKeyPress={this.onKeyPress}
        />

        {this.state.appState.todos.map(todo => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            content={todo.content}
            isDone={todo.isDone}
            onTodoToggle={this.onTodoToggle}
            onTodoRemoved={this.onTodoRemoved}
          />
        ))}
      </div>
    );
  }
}

render(<App />, document.querySelector('.app-root'));
