import { fetchLikesAction } from "./actions";
import axios from "axios";

export const fetchLikes = () => {
  return (dispatch) => {
    const url = "http://localhost:3000/api/get/likes";
    axios
      .get(url)
      .then((res) => dispatch(fetchLikesAction(res.data)))
      .catch((error) => console.log(error));
  };
};
