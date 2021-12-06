import { connect, useDispatch } from "react-redux";
import TodoHead from "../components/TodoHead";
import { setTodoList } from "../actions/todoActions";

// export default connect(null, { setTodoList })(TodoHead);
import React from 'react';

const TodoHeadContainer = () => {
  const dispatch = useDispatch();
  const onSetTodoList = () => dispatch(setTodoList());
  return (
    <TodoHead onSetTodoList={onSetTodoList} />
  );
};

export default TodoHeadContainer;