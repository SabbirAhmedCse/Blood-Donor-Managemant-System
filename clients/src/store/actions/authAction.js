import jwtdecode from "jwt-decode";
import Axios from "axios";
import * as Types from "./Types";

export const signUp = (user, history) => (dispatch) => {
  Axios.post("/blood-donor/user/signup/", user)
    .then((res) => {
      dispatch({
        type: Types.USERS_ERROR,
        payload: {
          error: {},
        },
      });
      console.log(res);
      console.log(dispatch.payload);
    })
    .catch((error) => {
      dispatch({
        type: Types.USERS_ERROR,
        payload: {
          error: error.response.data,
        },
      });
    });
};

export const signIn = (user, history) => (dispatch) => {
  Axios.post("/blood-donor/user/signin/", user)
    .then((res) => {
      console.log(res);
      const token = res.data.token;
      localStorage.setItem("auth_token", token);
      let decode = jwtdecode(token);
      console.log(decode);
      dispatch({
        type: Types.SET_USER,
        payload: {
          user: decode,
        },
      });
      history.push("/");
    })
    .catch((error) => {
      console.log(error.response.data);
      dispatch({
        type: Types.USERS_ERROR,
        payload: {
          error: error.response.data,
        },
      });
    });
};
