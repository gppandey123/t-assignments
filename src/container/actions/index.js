import axios from "axios";

const dataFetch = (data) => {
  return {
    type: "FETCH",
    payload: data,
    loading: true,
  };
};

export const apiCall = () => {
  return (dispatch) => {
    return axios("https://intense-tor-76305.herokuapp.com/merchants")
      .then((res) => {
        dispatch(dataFetch(res.data));
      })
      .catch((err) => console.log(err));
  };
};
