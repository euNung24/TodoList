// import { KEY, LIFECYCLE } from "redux-pack";
// import { setTodoList, CREATE_TODOLIST } from "../actions/todoActions";

// export default (store) => (nextRunner) => (action) => {
//   const { type, meta } = action;
//   const result = nextRunner(action);
//   if (type === CREATE_TODOLIST && meta[KEY.LIFECYCLE] === LIFECYCLE.SUCCESS) {
//     store.dispatch(setTodoList());
//   }
//   return result;
// };
