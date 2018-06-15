import { PHOTO_ACTION } from '../actions/types';

export default function (state = [], action) {
  switch (action.type) {
    case PHOTO_ACTION:
      return action.payload.Item.photo_url.SS;
    default: return state;
  }
}