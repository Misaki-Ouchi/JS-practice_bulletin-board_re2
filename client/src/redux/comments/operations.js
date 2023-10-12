import { fetchCommentsAction } from "./actions";
import axios from "axios";

export const fetchComments = () => {
  return (dispatch) => {
    const url = "http://localhost:3000/api/get/comments";
    axios
      .get(url)
      .then((res) => dispatch(fetchCommentsAction(res.data)))
      .catch((error) => console.log(error));
  };
};
