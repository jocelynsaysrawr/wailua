import {
  PHOTO_ACTION,
  CHANGE_AUTH,
  LOAD_GAME,
  STORY_ACTION,
  SET_IMAGE,
  NAV_SELECTED,
  LOCATION_SELECTED,
  USER_FOUND,
  CENTERZOOM_SELECTED,
  LOADING_ACTION,
  GET_TRANSLATION,
  MODAL_STATE,
  GEO_SELECTED
} from "./types";
import axios from "axios";
import { Auth } from "aws-amplify";

export function selectNav(nav) {
  return {
    type: NAV_SELECTED,
    payload: nav
  };
}

export function selectLocation(location) {
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

export function photoAction(location) {
  return dispatch => {
    return axios
      .get(
        `https://du9n190sya.execute-api.us-west-2.amazonaws.com/dev/api/photos/Kauai/${location}`
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

export function storyAction(location) {
  return dispatch => {
    return axios
      .get(
        `https://du9n190sya.execute-api.us-west-2.amazonaws.com/dev/api/stories/Kauai/${location}`
      )
      .then(res => {
        console.log("story action data: ", res.data);
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

export function setImage(image) {
  return {
    type: SET_IMAGE,
    payload: image
  };
}

export function loadingAction(loading) {
  return {
    type: LOADING_ACTION,
    payload: loading
  };
}

export function getTranslation(word) {
  const request = axios.get(
    `https://du9n190sya.execute-api.us-west-2.amazonaws.com/dev/api/hawaiian-dictionary/${word}`
  );

  return {
    type: GET_TRANSLATION,
    payload: request
  };
}

export function fireModal(bool) {
  return {
    type: MODAL_STATE,
    payload: bool
  };
}

export function selectGeo(geo) {
  return {
    type: GEO_SELECTED,
    payload: geo
  };
}
