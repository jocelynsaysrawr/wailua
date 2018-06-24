export default function(state = [-157.8088501, 21.3088723], action) {
  switch (action.type) {
    case "USER_FOUND":
      return action.payload;
  }

  return state;
}
