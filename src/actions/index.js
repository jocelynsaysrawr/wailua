import {
  PHOTO_ACTION,
  CHANGE_AUTH,
  LOAD_GAME,
  STORY_ACTION,
  NAV_SELECTED,
  LOCATION_SELECTED,
  USER_FOUND,
  CENTERZOOM_SELECTED,
  LOADING_ACTION
} from "./types";
import axios from "axios";
import { Auth } from "aws-amplify";

let locationName = "Wailua-River";

export function selectNav(nav) {
  return {
    type: NAV_SELECTED,
    payload: nav
  };
}

export function selectLocation(location) {
  locationName = location;
  return {
    type: LOCATION_SELECTED,
    payload: location
  };
}

export function setCenterZoom(center, zoom) {
  const payload = { center, zoom };
  return {
    type: CENTERZOOM_SELECTED,
    payload: payload
  };
}

export function findUser(coords) {
  return {
    type: USER_FOUND,
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

export function storyAction() {
  return dispatch => {
    return axios
      .get(
        `https://du9n190sya.execute-api.us-west-2.amazonaws.com/dev/api/stories/Kauai/${locationName}`
      )
      .then(res => {
        dispatch(getStoryAsync(res.data));
      });
  };
}

export function getStoryAsync(story) {
  return {
    type: STORY_ACTION,
    payload: story
  };
}

export function loadingAction(loading) {
  return {
    type: LOADING_ACTION,
    payload: loading
  };
}
