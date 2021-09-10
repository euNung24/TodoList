import createActions from "../api-redux-pack/createActions";

export const SET_TODOLIST = "todolist/SET_TODOLIST";
export const CREATE_TODOLIST = "todolist/CREATE_TODOLIST";
export const UPDATE_TODOLIST = "todolist/UPDATE_TODOLIST";
export const DELETE_TODOLIST = "todolist/DELETE_TODOLIST";

const { collection, create, update, remove } = createActions("todolists");

export function setTodoList(params) {
  return collection({
    ...params,
  });
}

export function createTodoList(data, date) {
  const meta = {
    date: date,
  };
  return create(data, {}, meta);
}

export function updateTodoList(id, data) {
  const meta = {
    date: data["date"],
  };
  return update(id, data, {}, meta);
}

export function deleteTodoList(data, date) {
  const meta = {
    date: date,
  };
  return remove(data, meta);
}
