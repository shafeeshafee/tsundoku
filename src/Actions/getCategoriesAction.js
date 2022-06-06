import fetchCategoriesApi from "../Services/NYTimesCategoriesAPI";

export const GET_CATEGORIES = "GET_CATEGORIES";
export const GET_CATEGORIES_SUCCESS = "GET_CATEGORIES_SUCCESS";
export const GET_CATEGORIES_FAILURE = "GET_CATEGORIES_FAILURE";

export const getCategories = () => ({
  type: GET_CATEGORIES,
});

export const getCategoriesSuccess = (categories) => ({
  type: GET_CATEGORIES_SUCCESS,
  payload: categories,
});

export const getCategoriesFailure = () => ({
  type: GET_CATEGORIES_FAILURE,
});

export function fetchCategories() {
  return async (dispatch) => {
    dispatch(getCategories());
    try {
      const res = await fetchCategoriesApi();
      dispatch(getCategoriesSuccess(res));
    } catch (e) {
      dispatch(getCategoriesFailure());
    }
  };
}
