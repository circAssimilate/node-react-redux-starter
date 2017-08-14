import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import * as todoActions from '../actions/todos'

window.axios = axios;

@connect((store) => {
  return {
    todos: store.todos,
  };
})
class App extends Component {
  constructor(props) {
    super(props)
    this.handleSmallList = this.handleSmallList.bind(this);
    this.handleResetList = this.handleResetList.bind(this);
    this.handleLargeList = this.handleLargeList.bind(this);
    this.handleListError = this.handleListError.bind(this);
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleNewTodoChange = this.handleNewTodoChange.bind(this);

    this.state = {
      newTodo: '',
    }
  }
  componentWillMount() {
    this.handleSmallList()
  }

  handleLargeList() {
    this.props.dispatch(todoActions.fetchTodos());
  }

  handleListError() {
    this.props.dispatch(todoActions.todoError());
  }

  handleSmallList() {
    this.props.dispatch(todoActions.replaceTodos([
      {
        userId: 1,
        id: 1,
        title: 'delectus aut autem',
        completed: false
      },
      {
        userId: 1,
        id: 2,
        title: 'quis ut nam facilis et officia qui',
        completed: false
      }
    ]));
  }

  handleResetList() {
    this.props.dispatch(todoActions.replaceTodos([]));
  }

  handleNewTodoChange(event) {
    this.setState({
      newTodo: event.target.value,
    });
  }

  handleAddTodo(event, todo) {
    event.preventDefault();
    if (this.state.newTodo) {
      this.props.dispatch(todoActions.addTodo({
        title: this.state.newTodo,
        completed: false
      }));
      this.setState({
        newTodo: '',
      });
    } else {
      alert('Please enter something')
    }
  }

  render() {
    return (
      <div className="app">
        <div className="app-header">
          <h1>Node, React & Redux Starter</h1>
          <button onClick={this.handleResetList}>Reset list</button>
          <button onClick={this.handleSmallList}>Short list</button>
          <button onClick={this.handleLargeList}>Long list</button>
          <button onClick={this.handleListError}>List error</button>
          <div>
            <form onSubmit={this.handleAddTodo}>
              <input
                type="text"
                placeholder="Your new todo here..."
                value={this.state.newTodo}
                onChange={this.handleNewTodoChange}
              />
              <button>Add todo</button>
            </form>
          </div>
        </div>
        <ul className="todo-list">
          { this.props.todos.map((todo, index) => {
            return (
              <li key={`todo-${index}`}>
                {todo.title}
              </li>
            );
          }) }
        </ul>
      </div>
    );
  }
}

export default App
