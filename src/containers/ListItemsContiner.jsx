import { connect } from 'react-redux';
import ListItems from '../components/ListItems';
import { setTodoList, updateTodoList, deleteTodoList }  from '../actions/todoActions';

const mapStateToProps = (state) => {
  const { ids, entities } = state.todolists;
  const todolists = ids.map(id => entities[id]);
  return { todolists };
}

export default connect(mapStateToProps, { setTodoList, updateTodoList, deleteTodoList })(ListItems);