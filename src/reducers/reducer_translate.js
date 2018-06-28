import { GET_TRANSLATION } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case GET_TRANSLATION:
      return [action.payload.data, ...state];
    default:
      return state;
  }
}
