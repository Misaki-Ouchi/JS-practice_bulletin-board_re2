import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const DeleteBtn = (props) => {
  const navigate = useNavigate();
  const deleteFunc = () => {
    axios
      .post(`http://localhost:3000/DeleteComment/${props.comment_id}`)
      .catch((err) => console.log(err))
      .then((res) => navigate("/"))
  };
  if (props.clicked) {
    deleteFunc();
  }
  return <>投稿を削除</>;
};

export default DeleteBtn;
