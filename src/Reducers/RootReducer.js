import { combineReducers } from "redux";
import booksReducer from "./BooksReducer";
import bestsellersReducer from "./BestsellersReducer";

const rootReducer = combineReducers({
	books: booksReducer,
	bestsellers: bestsellersReducer,
});

export default rootReducer;