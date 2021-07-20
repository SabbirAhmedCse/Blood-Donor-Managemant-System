import * as Types from "../actions/Types";

const userReducer = (state = "", action) => {
  switch (action.type) {
    case Types.SINGLE_USER: {
      return action.payload.users.user;
    }
    default:
      return state;
  }
};

export default userReducer;
