<<<<<<< HEAD
import { combineReducers } from 'redux'

const rootReducers = combineReducers({

});

export default rootReducers
=======
import { combineReducers } from "redux";
import authReducer from "./authReducer";
import usersReducers from "./usersReducers";
import userReducer from "./userReducer";

const rootReducers = combineReducers({
  auth: authReducer,
  users: usersReducers,
  user: userReducer,
});

export default rootReducers;
>>>>>>> 931daff (BDMS Update)
