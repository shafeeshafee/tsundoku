import setTopicApi from "../Services/NYTimesCategoryTopics";

export const SET_TOPIC = "SET_TOPIC";
export const SET_TOPIC_SUCCESS = "SET_TOPIC_SUCCESS";
export const SET_TOPIC_FAILURE = "SET_TOPIC_FAILURE";

export const setTopic = () => ({
  type: SET_TOPIC,
});

export const setTopicSuccess = (topic) => ({
  type: SET_TOPIC_SUCCESS,
  payload: topic,
});

export const setTopicFailure = () => ({
  type: SET_TOPIC_FAILURE,
});

export function changeTopicTo(topic) {
  return async (dispatch) => {
    dispatch(setTopic());
    try {
      const res = await setTopicApi(topic);
      dispatch(setTopicSuccess(res));
    } catch (e) {
      dispatch(setTopicFailure());
    }
  };
}
