import { combineReducers } from "redux";
import NavsReducer from "./reducer_nav_data";
import UserLocationReducer from "./reducer_user_location";
import PhotoReducer from "./reducer_photos";
import GeofencesReducer from "./reducer_geofences";
import ActiveLocationReducer from "./reducer_active_location";

const rootReducer = combineReducers({
  navs: NavsReducer,
  photos: PhotoReducer,
  geofences: GeofencesReducer,
  userLocation: UserLocationReducer,
  activeLocation: ActiveLocationReducer
});

export default rootReducer;
