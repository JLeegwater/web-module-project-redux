import { combineReducers } from "redux";

import movieReducer from "./movieReducer";
import favotiteReducer from "./favoritesReducer";

const rootReducer = combineReducers({ movieReducer, favotiteReducer });

export default rootReducer;
