import * as actions from '../Actions/bestsellersActions';

export  const initialState = {
    bestsellers: [],
    loading: false,
    hasErrors: false
}

export default function bestsellersReducer(state = initialState, action) {
    switch(action.type) {
        case actions.GET_BESTSELLERS:
            return{...state, loading: true}
        case actions.GET_BESTSELLERS_SUCCESS:
            return {...state, bestsellers:action.payload, loading: false}
        case actions.GET_BESTSELLERS_FAILURE:
            return {...state, hasErrors: true, loading: false}
        default:
            return state
    }
}