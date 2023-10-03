import { Link } from "react-router-dom";
import React from "react";

const ReadAllLink = (props) => {
  const link = `/allThread/${props.title_id}`;
  const data = {
    comments: props.comments,
    title_id: props.title_id,
    title: props.title,
  };

  return (
    <>
      <Link to={link} state={data}>
        全部読む({props.comment_count})
      </Link>
    </>
  );
};

export default ReadAllLink;
