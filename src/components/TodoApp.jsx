import React, { PureComponent } from 'react';
import configureStore from '../store/configureStore';
import { Provider } from 'react-redux';

import TodoHead from './TodoHead';
import TodoBody from './TodoBody';

class TodoApp extends PureComponent {
  store = configureStore();
  render() {
    return (
      <Provider store={this.store}>
        <TodoHead />
        <TodoBody />
      </Provider>
    );
  }
}

export default TodoApp;