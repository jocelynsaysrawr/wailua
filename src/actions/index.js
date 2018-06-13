import { PHOTO_ACTION } from './types';
import axios from 'axios';

const API_URL = 'https://du9n190sya.execute-api.us-west-2.amazonaws.com/dev/api/photos/Kauai/Lydgate';

export function selectNav(nav) {
  return {
    type: "NAV_SELECTED",
    payload: nav
  };
}

export function photoAction() {
  return (dispatch) => {
    return axios.get(`${API_URL}`)
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

