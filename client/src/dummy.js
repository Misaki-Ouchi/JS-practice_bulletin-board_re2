import React, { createContext } from "react";
import { useSelector } from "react-redux";
import { getComments } from "./redux/comments/selectors";

export const Comments = createContext();
export const Titles = createContext();
export const Likes = createContext();

const Dummy = () => {
  const selector = useSelector((state) => state); // storeのstateを保存
  const comments1 = getComments(selector);

  return (
    <ul>
      list
      {comments1.length > 0 &&
        comments1.map((comment) => <li key={comment.id}>{comment.message}</li>)}
    </ul>
  );
};

export default Dummy;
