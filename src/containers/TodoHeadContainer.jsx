import { connect } from "react-redux";
import TodoHead from "../components/TodoHead";
import { setTodoList } from "../actions/todoActions";

export default connect(null, { setTodoList })(TodoHead);