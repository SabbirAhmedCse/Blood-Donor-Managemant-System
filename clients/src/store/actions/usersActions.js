import axios from "axios";
import * as Types from "./Types";

export const getAllUsers = () => (dispatch) => {
  axios
    .get("/blood-donor/user")
    .then((response) => {
      dispatch({
        type: Types.ALL_USERS,
        payload: {
          users: response.data,
        },
      });
      console.log(dispatch.payload);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getSingleUser = (id) => (dispatch) => {
  console.log(id);
  axios
    .get(`/blood-donor/user/${id}`)
    .then((response) => {
      dispatch({
        type: Types.SINGLE_USER,
        payload: {
          user: response.data,
        },
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const removeUser = (id) => (dispatch) => {
  console.log(id);
  axios
    .delete(`/blood-donor/user/${id}`)
    .then((response) => {
      dispatch({
        type: Types.SINGLE_USER,
        payload: {
          users: response.data,
        },
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const updateUser = (id) => (dispatch) => {
  console.log(id);
  axios
    .patch(`/blood-donor/user/${id}`)
    .then((response) => {
      dispatch({
        type: Types.SINGLE_USER,
        payload: {
          users: response.data,
        },
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
