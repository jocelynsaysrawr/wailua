export default function(state = null, action) {
  switch (action.type) {
    case "NAV_SELECTED":
      return action.payload;
  }

  return state;
}
