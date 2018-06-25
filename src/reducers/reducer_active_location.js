import { LOCATION_SELECTED } from "../actions/types";

export default function(state = "Wailua-River", action) {
  switch (action.type) {
    case LOCATION_SELECTED:
      return action.payload;
  }

  return state;
}
