import { PHOTO_ACTION } from './types';
import { STORY_ACTION } from './types';
import axios from 'axios';

//Hi Jesse! This will be the place to change the photo url links with the mapbox points
// const location = 'Lydgate';
const location = 'Wailua-Beach';
// const location = 'Wailua-River';
// const location = 'Fern-Grotto';
// const location = 'Opaekaa';

export function selectNav(nav) {
  return {
    type: "NAV_SELECTED",
    payload: nav
  };
}

export function photoAction() {
  return (dispatch) => {
    return axios.get(`https://du9n190sya.execute-api.us-west-2.amazonaws.com/dev/api/photos/Kauai/${location}`)
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

export function storyAction() {
  return (dispatch) => {
    return axios.get(`https://du9n190sya.execute-api.us-west-2.amazonaws.com/dev/api/stories/Kauai/${location}`)
      .then(res => {
        console.log("storyAction", res.data);
        dispatch(getStoryAsync(res.data));
      });
  }
}

export function getStoryAsync(story) {
  return {
    type: STORY_ACTION,
    payload: story
  }
}