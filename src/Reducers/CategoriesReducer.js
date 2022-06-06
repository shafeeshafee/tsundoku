import * as actions from "../Actions/getCategoriesAction";

export const initialState = {
  categories: [],
  loading: false,
  hasErrors: false,
};

export default function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_CATEGORIES:
      return { ...state, loading: true };
    case actions.GET_CATEGORIES_SUCCESS:
      return { ...state, categories: action.payload, loading: false };
    case actions.GET_CATEGORIES_FAILURE:
      return { ...state, hasErrors: true, loading: false };
    default:
      return state;
  }
}
