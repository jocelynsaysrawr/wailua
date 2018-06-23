import { LOAD_GAME } from "../actions/types";

export default function(state = true, action) {
  switch (action.type) {
    case LOAD_GAME:
      return action.payload;
    default:
      return state;
  }
}
