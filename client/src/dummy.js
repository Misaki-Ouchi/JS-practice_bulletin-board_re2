import React, { useEffect, createContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchComments } from "./redux/comments/operations";
import { getComments } from "./redux/comments/selectors";

export const Comments = createContext();
export const Titles = createContext();
export const Likes = createContext();

const Dummy = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state); // storeのstateを保存
  const comments1 = getComments(selector);

  // useEffect(() => {
  //   dispatch(fetchComments())
  // },[dispatch])

  return (
    <ul>
      list
      {comments1.length > 0 &&
        comments1.map((comment) => <li key={comment.id}>{comment.message}</li>)}
    </ul>
  );
};

export default Dummy;
