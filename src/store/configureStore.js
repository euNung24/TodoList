import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "../reducers";
import { middleware as reduxMiddleware } from "redux-pack";
import todolistEffects from "../middlewares/todolistEffects";

export default (initStates) =>
  createStore(
    combineReducers(reducers),
    initStates,
    composeWithDevTools(applyMiddleware(reduxMiddleware, todolistEffects))
  );
