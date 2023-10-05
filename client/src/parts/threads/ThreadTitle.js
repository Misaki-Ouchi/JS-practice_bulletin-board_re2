const ThreadTitle = (props) => {
  return (
    <h3>
      <span className="threadTitleSpan">No{props.title_id}</span>
      {props.title}
    </h3>
  );
};
export default ThreadTitle;
