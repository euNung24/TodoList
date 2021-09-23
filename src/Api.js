import axios from "axios";
// import { firestore } from "./firebase";

// const isDev = process.env.NODE_ENV === "development";

const Api = axios.create({
  // baseURL: isDev ? "http://localhost:4000/" : firestore,
  baseURL: "http://localhost:4000/",
});

export default Api;
