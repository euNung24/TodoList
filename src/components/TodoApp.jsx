import React, { PureComponent } from 'react';
import configureStore from '../store/configureStore';
import { Provider } from 'react-redux';

// import TodoHead from './TodoHead';
// import TodoBody from './TodoBody';
import TodoHeadContainer from '../containers/TodoHeadContainer';

class TodoApp extends PureComponent {
  store = configureStore();

  render() {
    // const year = new Date().getFullYear();
    // const getMonth = Number(new Date().getMonth()) + 1;
    // const month = getMonth > 9 ? getMonth : '0' + getMonth;
    // const date =   new Date().getDate() > 9 ? new Date().getDate() : '0' + new Date().getDate();
    const date = new Date().toLocaleDateString()
    return (
      <Provider store={this.store}>
        <TodoHeadContainer date={date}/>
      </Provider>
    );
  }
}

export default TodoApp;