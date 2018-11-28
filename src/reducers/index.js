import { combineReducers } from "redux";
import NavsReducer from "./reducer_nav_data";
import UserLocationReducer from "./reducer_user_location";
import PhotoReducer from "./reducer_photos";
import GeofencesReducer from "./reducer_geofences";
import ActiveLocationReducer from "./reducer_active_location";
import ActiveNavReducer from "./reducer_active_nav";
import AuthenticationReducer from "./reducer_authentication";
import LoadGame from "./reducer_load_game";
import StoryReducer from "./reducer_story";
import SetImage from "./reducer_set_image";
import CenterZoomReducer from "./reducer_center_zoom";
import LoadingReducer from "./reducer_loading";
import Translation from "./reducer_translate";
import ModalReducer from "./reducer_fire_modal";
import ActiveGeoReducer from "./reducer_active_geo";

const rootReducer = combineReducers({
  navs: NavsReducer,
  photos: PhotoReducer,
  geofences: GeofencesReducer,
  userLocation: UserLocationReducer,
  activeLocation: ActiveLocationReducer,
  authenticated: AuthenticationReducer,
  hasImage: LoadGame,
  activeNav: ActiveNavReducer,
  story: StoryReducer,
  image: SetImage,
  centerZoom: CenterZoomReducer,
  loading: LoadingReducer,
  translation: Translation,
  modalOn: ModalReducer,
  activeGeo: ActiveGeoReducer
});

export default rootReducer;
