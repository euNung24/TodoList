import createReducer from "../api-redux-pack/createReducer";

const apiReducers = createReducer("todolists");

export default {
  ...apiReducers,
};
