import { fetchTitlesAction } from "./actions";
import axios from "axios";

export const fetchTitles = () => {
  return (dispatch) => {
    const url = "http://localhost:3000/api/get/titles";
    axios
      .get(url)
      .then((res) => dispatch(fetchTitlesAction(res.data)))
      .catch((error) => console.log(error));
  };
};
