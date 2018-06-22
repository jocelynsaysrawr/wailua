export default function(state = "null", action) {
  switch (action.type) {
    case "USER_FOUND":
      return action.payload;
  }

  return state;
}
