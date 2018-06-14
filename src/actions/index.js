import { PHOTO_ACTION } from './types';
import axios from 'axios';

//Hi Jesse! This will be the place to change the photo url links with the mapbox points
const API_URL = 'Lydgate';
// const API_URL = 'Wailua-Beach';
// const API_URL = 'Wailua-River';
// const API_URL = 'Fern-Grotto';
// const API_URL = 'Opaekaa';

export function selectNav(nav) {
  return {
    type: "NAV_SELECTED",
    payload: nav
  };
}

export function photoAction() {
  return (dispatch) => {
    return axios.get(`https://du9n190sya.execute-api.us-west-2.amazonaws.com/dev/api/photos/Kauai/${API_URL}`)
      .then(res => {
        dispatch(getPhotosAsync(res.data));
      });
  }
}

export function getPhotosAsync(photos) {
  return {
    type: PHOTO_ACTION,
    payload: photos
  }
}