import fetchBestsellersApi from "../Services/NYTimesAPI";

export const GET_BESTSELLERS = "GET_BESTSELLERS";
export const GET_BESTSELLERS_SUCCESS = "GET_BESTSELLERS_SUCCESS";
export const GET_BESTSELLERS_FAILURE = "GET_BESTSELLERS_FAILURE";

export const getBestsellers = () => ({
    type: GET_BESTSELLERS
})

export const getBestsellersSuccess = (bestsellers) => ({
    type: GET_BESTSELLERS_SUCCESS,
    payload: bestsellers
})

export const getBestsellersFailure = () => ({
    type: GET_BESTSELLERS_FAILURE
})

export function fetchBestsellers() {
    return async (dispatch) => {
        dispatch(getBestsellers())
        try {
            const res = await fetchBestsellersApi();
            dispatch(getBestsellersSuccess(res))
        }
        catch(e) {
            dispatch(getBestsellersFailure())
        }
    }
}