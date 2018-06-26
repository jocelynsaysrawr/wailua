import { SET_IMAGE } from "../actions/types";

const INITIAL_STATE = false;

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_IMAGE:
      return action.payload;
    default:
      return state;
  }
}
