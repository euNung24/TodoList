import { connect } from "react-redux";
import ListInput from "../components/ListInput";
import { createTodoList } from "../actions/todoActions";

// export default connect(null, { createTodoList })(ListInput);
import React from 'react';
import { useDispatch } from "react-redux";

const ListInputContainer = ({date}) => {
  const dispatch = useDispatch();
  const onCreateTodoList = () => dispatch(createTodoList());
  return (
    <ListInput onCreateTodoList={onCreateTodoList} date={date}/>
  );
};

export default ListInputContainer;