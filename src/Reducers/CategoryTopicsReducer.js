import * as actions from "../Actions/setTopicAction";

export const initialState = {
  topic: [],
  loading: false,
  hasErrors: false,
};

export default function topicsReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_TOPIC:
      return { ...state, loading: true };
    case actions.SET_TOPIC_SUCCESS:
      return { ...state, topic: action.payload, loading: false };
    case actions.SET_TOPIC_FAILURE:
      return { ...state, hasErrors: true, loading: false };
    default:
      return state;
  }
}
