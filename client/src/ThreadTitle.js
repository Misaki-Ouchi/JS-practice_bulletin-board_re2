const ThreadCommentsTitle = (props) => {
  return (
    <h2>
      <span className="threadTitleSpan">No{props.num}</span>
      {props.title}
    </h2>
  );
};
export default ThreadCommentsTitle;
