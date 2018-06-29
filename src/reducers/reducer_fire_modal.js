import { MODAL_STATE } from "../actions/types";

export default function(state = false, action) {
  switch (action.type) {
    case MODAL_STATE:
      return action.payload;
    default:
      return state;
  }
}
