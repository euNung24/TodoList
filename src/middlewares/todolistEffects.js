import { KEY, LIFECYCLE } from "redux-pack";
import { setTodoList } from "../actions/todoActions";
import { DELETE, UPDATE, CREATE } from "../api-redux-pack/createActions";

export default (store) => (nextRunner) => (action) => {
  const { type, meta } = action;
  const result = nextRunner(action);
  if (
    (type === UPDATE || type === DELETE || type === CREATE) &&
    meta[KEY.LIFECYCLE] === LIFECYCLE.SUCCESS
  ) {
    console.log(meta.date);
    store.dispatch(setTodoList({ ["date"]: meta.date }));
  }
  // } else if (meta && meta.notification) {
  //   const { success } = meta.notification;
  //   if (success && meta[KEY.LIFECYCLE] === LIFECYCLE.SUCCESS) {
  //     store.dispatch(setTodoList());
  //   }
  // }
  return result;
};
