import { useState} from "react";
import { fetchCommentsAction } from "./actions";
import axios from "axios";

export const fetchComments = () => {
  return async (dispatch) => {
    const [comments, setComments] = useState([]);

    const url = "http://localhost:3000/api/get/comments";
    axios
      .get(url)
      .then((res) => setComments(res.data))
      .catch((error) => console.log(error));

    dispatch(fetchCommentsAction(comments));
  };
};
