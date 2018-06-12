import { TEST_ACTION } from '../actions/types';

export default function (state = [], action) {
  switch (action.type) {
    case TEST_ACTION:
      console.log("TEST_ACTION", action.payload);
      return action.payload;
    default: return state;
  }
}