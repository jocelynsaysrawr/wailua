export default function(state = null, action) {
  switch (action.type) {
    case "MARKER_SELECTED":
      return action.payload;
  }

  return state;
}
