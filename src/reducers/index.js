import { combineReducers } from "redux";
import NavsReducer from "./reducer_nav_data";
import UserLocationReducer from "./reducer_user_location";
import PhotoReducer from "./reducer_photos";
import StoryReducer from "./reducer_story";
import LoadingReducer from "./reducer_loading";

const rootReducer = combineReducers({
  navs: NavsReducer,
  UserLocation: UserLocationReducer,
  photos: PhotoReducer,
  story: StoryReducer,
  loading: LoadingReducer
});

export default rootReducer;
