import * as types from "./actions";

const intialState = {
  apiData: [],
  isLoading: false,
  error: "",
  isButtonTouched: false,
};

export function dataReducer(state = intialState, action) {
  switch (action.type) {
    case types.FETCH_DATA:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
      case types.FETCH_DATA:
      return {
        ...state,
        isButtonTouched: true,
        error: ""
      };
    case types.FETCHED_SUCCESSFULLY:
      return {
        ...state,
        isLoading: false,
        apiData: action.payload
      };
    case types.FETCH_FAILED:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}
