import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

let middleware = applyMiddleware(thunk);
// @ts-ignore
if (process.env.NODE_ENV === "development") {
  middleware = composeWithDevTools(middleware);
}
export default createStore(reducers, middleware);
