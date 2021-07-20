import axios from "axios";

export const singleDonor = (id) => {
  return axios
    .get(`blood-donor/user/${id}`)
    .then((response) => response.data)
    .catch((error) => console.log(error));
};
