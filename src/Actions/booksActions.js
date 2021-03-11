import fetchBooksApi from "../Services/GoogleBooksAPI"

export const GET_BOOKS = "GET_BOOKS";
export const GET_BOOKS_SUCCESS = "GET_BOOKS_SUCCESS";
export const GET_BOOKS_FAILURE = "GET_BOOKS_FAILURE";

export const getBooks = () => ({
    type: GET_BOOKS
})

export const getBooksSuccess = (books) => ({
    type: GET_BOOKS_SUCCESS,
    payload: books
})

export const getBooksFailure = () => ({
    type: GET_BOOKS_FAILURE
})

export function fetchBooks(q) {
    return async (dispatch) => {
        dispatch(getBooks())
        try{
            const res = await fetchBooksApi(q);
            dispatch(getBooksSuccess(res))
        }
        catch(e) {
            dispatch(getBooksFailure())
        }
    }
}