import { USER_FOUND } from "../actions/types";

export default function(state = [-157.8088501, 18], action) {
  switch (action.type) {
    case USER_FOUND:
      return action.payload;
  }

  return state;
}
