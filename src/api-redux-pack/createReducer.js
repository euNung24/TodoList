import { handle } from "redux-pack";
import { CREATE, FETCH, FETCH_LIST, RESET, UPDATE } from "./createActions";

export default (...reducerNames) => {
  return reducerNames.reduce((apiReducers, name) => {
    const initState = {
      ids: [],
      entities: {},
    };

    apiReducers[name] = (state = initState, action) => {
      const { type, meta, payload } = action;
      const { resourceName, key } = meta || {};

      if (resourceName !== name) {
        return state;
      }

      switch (type) {
        case CREATE:
        case UPDATE:
        case FETCH:
        case FETCH_LIST: {
          return handle(state, action, {
            start: (prevState) => ({
              ...prevState,
            }),
            success: (prevState) => {
              const { data } = payload;
              if (type === FETCH_LIST) {
                const ids = data.map((entity) => entity[key]);
                const entities = data.reduce(
                  (finalEntities, entity) => ({
                    ...finalEntities,
                    [entity[key]]: entity,
                  }),
                  {}
                );
                return {
                  ...prevState,
                  ids,
                  entities: { ...prevState.entities, ...entities },
                };
              } else {
                const id = data[key];
                return {
                  ...prevState,
                  id,
                  entities: { ...prevState.entities, [id]: data },
                };
              }
            },
            failure: (prevState) => {
              const errorMessage = "에러 발생";
              return {
                ...prevState,
                errorMessage,
              };
            },
          });
        }
        case RESET:
          return initState;
        default:
          return state;
      }
    };
    return apiReducers;
  }, {});
};
