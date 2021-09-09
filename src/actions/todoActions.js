import createActions from "../api-redux-pack/createActions";

export const SET_TODOLIST = "todolist/SET_TODOLIST";
export const CREATE_TODOLIST = "todolist/CREATE_TODOLIST";

const { collection, create } = createActions("todolists");

export function setTodoList(params) {
  return collection({
    ...params,
  });
}

export function createTodoList(data) {
  return create(data);
}
