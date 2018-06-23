import { PHOTO_ACTION, CHANGE_AUTH, LOAD_GAME } from "./types";
import axios from "axios";
import { Auth } from "aws-amplify";

//Hi Jesse! This will be the place to change the photo url links with the mapbox points
// const location = 'Lydgate';
// const location = 'Wailua-Beach';
// const location = "Wailua-River";
// const location = 'Fern-Grotto';
// const location = 'Opaekaa';

let locationName = "Wailua-River";

export function selectNav(nav) {
  return {
    type: "NAV_SELECTED",
    payload: nav
  };
}

export function selectLocation(location) {
  locationName = location;
  return {
    type: "LOCATION_SELECTED",
    payload: location
  };
}

export function findUser(coords) {
  return {
    type: "USER_FOUND",
    payload: coords
  };
}

export function photoAction() {
  return dispatch => {
    return axios
      .get(
        `https://du9n190sya.execute-api.us-west-2.amazonaws.com/dev/api/photos/Kauai/${locationName}`
      )
      .then(res => {
        dispatch(getPhotosAsync(res.data));
      });
  };
}

export function getPhotosAsync(photos) {
  return {
    type: PHOTO_ACTION,
    payload: photos
  };
}

export function authenticate(isLoggedIn) {
  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn
  };
}

export function loadGame(isAuthenticating) {
  return {
    type: LOAD_GAME,
    payload: isAuthenticating
  };
}

export function signout() {
  Auth.signOut();
  return {
    type: CHANGE_AUTH,
    payload: false
  };
}
