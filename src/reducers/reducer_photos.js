import { PHOTO_ACTION } from '../actions/types';

export default function (state = [], action) {
  switch (action.type) {
    case PHOTO_ACTION:
      return action.payload.Item.photos.L.map(photo => photo.M);
  

    default: return state;
  }
}