import { combineReducers } from "redux";
import booksReducer from "./BooksReducer";

const rootReducer = combineReducers({
  books: booksReducer,
});

export default rootReducer;
