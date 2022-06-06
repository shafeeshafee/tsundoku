import { combineReducers } from "redux";
import booksReducer from "./BooksReducer";
import bestsellersReducer from "./BestsellersReducer";
import categoriesReducer from "./CategoriesReducer";
import topicsReducer from "./CategoryTopicsReducer";

const rootReducer = combineReducers({
  books: booksReducer,
  bestsellers: bestsellersReducer,
  categories: categoriesReducer,
  topic: topicsReducer,
});

export default rootReducer;
