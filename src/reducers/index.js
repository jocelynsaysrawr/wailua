import { combineReducers } from "redux";
import NavsReducer from "./reducer_nav_data";
import UserLocationReducer from "./reducer_user_location";

const rootReducer = combineReducers({
  navs: NavsReducer,
  UserLocation: UserLocationReducer
});

export default rootReducer;
