import * as types from "./actions";

const intialState = {
  Data: [],
  isLoading: false,
  error: ""
};

export function dataReducer(state = intialState, action) {
  switch (action.type) {
    case types.FETCH_DATA:
      return {};
    case types.FETCHED_SUCCESSFULLY:
      return {};
    case types.FETCH_FAILED:
      return {};
    default:
      return state;
  }
}
