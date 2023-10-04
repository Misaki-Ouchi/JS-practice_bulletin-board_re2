import { Link } from "react-router-dom";
import React from "react";

const ReadAllLink = (props) => {
  const link = `/allThread/${props.title_id}`;

  return (
    <>
      <Link to={link}>全部読む({props.comment_count})</Link>
    </>
  );
};

export default ReadAllLink;
