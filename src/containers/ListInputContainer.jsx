import { connect } from "react-redux";
import ListInput from "../components/ListInput";
import { createTodoList } from "../actions/todoActions";

export default connect(null, { createTodoList })(ListInput)