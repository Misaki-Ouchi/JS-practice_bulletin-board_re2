const ThreadTitle = (props) => {
  return (
    <h2>
      <span className="threadTitleSpan">No{props.title_id}</span>
      {props.title}
    </h2>
  );
};
export default ThreadTitle;
