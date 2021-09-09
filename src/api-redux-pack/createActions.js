import axios from "axios";
import Api from "../Api";

export const CREATE = "api-reudx-pack/CREATE";
export const FETCH = "api-reudx-pack/FETCH";
export const FETCH_LIST = "api-reudx-pack/FETCH_LIST";
export const UPDATE = "api-reudx-pack/UPDATE";
export const RESET = "api-reudx-pack/RESET";

export default (resourceName, key = "id") => ({
  collection: (params = {}, meta = {}) => ({
    type: FETCH_LIST,
    promise: axios.get(`http://localhost:4000/${resourceName}`, { params }),
    meta: {
      ...meta,
      resourceName,
      key,
    },
  }),
  member: (id, params = {}, meta = {}) => ({
    type: FETCH,
    promise: Api.get(`${resourceName}/${id}`, { params }),
    meta: {
      ...meta,
      resourceName,
      key,
    },
  }),
  create: (data, params = {}, meta = {}) => ({
    type: CREATE,
    promise: Api.post(resourceName, data, { params }),
    meta: {
      ...meta,
      resourceName,
      key,
    },
  }),
  update: (id, data, params = {}, meta = {}) => ({
    type: UPDATE,
    promise: Api.put(`${resourceName}/${id}`, data, { params }),
    meta: {
      ...meta,
      resourceName,
      key,
    },
  }),
  reset: () => ({
    type: RESET,
    meta: { resourceName },
  }),
});
