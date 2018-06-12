import { combineReducers } from "redux";
import NavsReducer from "./reducer_nav_data";
import UserLocationReducer from "./reducer_user_location";
import PhotoReducer from "./reducer_photos";

const rootReducer = combineReducers({
  navs: NavsReducer,
  UserLocation: UserLocationReducer,
  photos: PhotoReducer
});

export default rootReducer;
