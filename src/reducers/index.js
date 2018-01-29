import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import auth from "./AuthReducer";

export default combineReducers({
	form: formReducer,
	auth
});
