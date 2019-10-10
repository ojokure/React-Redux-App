import * as types from "./actions";
import axios from "axios";

export const fetchData = () => dispatch => {
  dispatch({ type: types.FETCH_DATA });
  dispatch({ type: types.WAS_BUTTON_TOUCHED });
  axios
    .get("https://official-joke-api.appspot.com/jokes/programming/ten")
    .then(res => {
      dispatch({ type: types.FETCHED_SUCCESSFULLY, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: types.FETCH_FAILED, payload: err.response });
    });
};
