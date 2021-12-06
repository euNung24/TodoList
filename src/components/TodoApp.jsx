import React from 'react';
import configureStore from '../store/configureStore';
import { Provider } from 'react-redux';

// import TodoHead from './TodoHead';
// import TodoBody from './TodoBody';
import TodoHeadContainer from '../containers/TodoHeadContainer';
import TodoHead from './TodoHead';

const TodoApp = () => {
  const store = configureStore();
  const date = new Date().toLocaleDateString()
  return (
    <Provider store={store}>
      {/*  <TodoHeadContainer date={date}/> */}
      <TodoHead date={date} />
    </Provider>
  );
}

export default TodoApp;