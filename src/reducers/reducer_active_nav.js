import { NAV_SELECTED } from "../actions/types";

const defaultState = {
  type: "Feature",
  geometry: {
    type: "Point",
    coordinates: [-159.348612, 22.048136]
  },
  properties: {
    title: "Wailua River",
    icon: "circle-stroked",
    location: "Wailua-River"
  }
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case NAV_SELECTED:
      return action.payload;
  }

  return state;
}
