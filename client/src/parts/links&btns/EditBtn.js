import { Link } from "react-router-dom";
import React from "react";

const EditBtn = (props) => {
  const link = `/editComment/${props.comments_id}`;
  return (
    <>
      <Link className="editBtn" to={link}>
        編集
      </Link>
    </>
  );
};

export default EditBtn;
