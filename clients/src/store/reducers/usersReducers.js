import * as Types from "../actions/Types";

const usersReducers = (state = [], action) => {
  switch (action.type) {
    case Types.ALL_USERS: {
      return action.payload.users.user;
    }
    case Types.SINGLE_USER: {
      let { users } = this.state;
      return users.map((use) => {
        if (users._id === action.payload.users._id) {
          return action.payload.users.user;
        }
        return use;
      });
    }
    case Types.UPDATE_USER: {
      let { users } = this.state;
      return users.map((use) => {
        if (users._id === action.payload.users._id) {
          return action.payload.users.user;
        }
        return use;
      });
    }
    case Types.DELETE_USER: {
      let { users } = this.state;
      return users.map((use) => {
        if (users._id === action.payload.users._id) {
          return action.payload.users.user;
        }
        return use;
      });
    }
    default:
      return state;
  }
};

export default usersReducers;
