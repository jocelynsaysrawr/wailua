import { PHOTO_ACTION } from "./types";
import axios from "axios";
import { flyAndZoom } from "../components/map";

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
