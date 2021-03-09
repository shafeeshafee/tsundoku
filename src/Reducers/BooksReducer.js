import * as actions from '../Actions/booksActions';

export  const initialState = {
    books: [],
    loading: false,
    hasErrors: false
}

export default function booksReducer(state = initialState, action) {
    switch(action.type) {
        case actions.GET_BOOKS:
            return{...state, loading: true}
        case actions.GET_BOOKS_SUCCESS:
            return {...state, books:action.payload, loading: false}
        case actions.GET_BOOKS_FAILURE:
            return {...state, hasErrors: true, loading: false}
        default:
            return state
    }
}