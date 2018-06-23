import { combineReducers } from "redux";
import NavsReducer from "./reducer_nav_data";
import UserLocationReducer from "./reducer_user_location";
import PhotoReducer from "./reducer_photos";
import GeofencesReducer from "./reducer_geofences";
import ActiveLocationReducer from "./reducer_active_location";
import ActiveNavReducer from "./reducer_active_nav";
import AuthenticationReducer from "./reducer_authentication";
import LoadGame from "./reducer_load_game";

const rootReducer = combineReducers({
  navs: NavsReducer,
  photos: PhotoReducer,
  geofences: GeofencesReducer,
  userLocation: UserLocationReducer,
  activeLocation: ActiveLocationReducer,
  userLocation: UserLocationReducer,
  activeNav: ActiveNavReducer,
  authenticated: AuthenticationReducer,
  isAuthenticating: LoadGame
});

export default rootReducer;
