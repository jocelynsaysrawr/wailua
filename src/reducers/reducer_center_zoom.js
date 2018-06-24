import { CENTERZOOM_SELECTED } from "../actions/types";

const defaultState = {
  center: [-157.43942474254015, 20.424075313742136],
  zoom: 5.5
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case CENTERZOOM_SELECTED:
      return action.payload;
  }

  return state;
}
