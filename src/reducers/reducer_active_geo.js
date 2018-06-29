import { GEO_SELECTED } from "../actions/types";

const defaultState = {
  type: "Feature",
  geometry: {
    type: "Polygon",
    coordinates: [
      [
        [-157.808688, 21.309219],
        [-157.808829, 21.309133],
        [-157.808609, 21.308838],
        [-157.808448, 21.308923],
        [-157.808717, 21.308783],
        [-157.808943, 21.309061],
        [-157.808688, 21.309219]
      ]
    ]
  },
  properties: {
    title: "MIC"
  }
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case GEO_SELECTED:
      return action.payload;
    default:
      return state;
  }
}
