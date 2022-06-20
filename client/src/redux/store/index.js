import { legacy_createStore, applyMiddleware, compose } from "redux";
import reducer from "../reducer/index";
//import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
);

// const store = createStore(
//     Reducer,
//     composeWithDevTools(applyMiddleware(thunk))
//   );
