import { Link } from "react-router-dom";
import React from "react";

const EditBtn = (props) => {
  const link = `/editComment/${props.title_id}`;
  const data = {
    comments: props.comments,
    title_id: props.title_id,
    title: props.title,
  };

  return (
    <>
      <Link to={link} state={data}>
        編集({props.comment_count})
      </Link>
    </>
  );
};

export default EditBtn;
