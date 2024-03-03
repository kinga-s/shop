import { createStore } from "redux";
import rootReducer from "./reducers";

// Creating the Redux store using the rootReducer
const store = createStore(rootReducer);
export default store;
