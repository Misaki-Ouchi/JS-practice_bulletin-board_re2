import ThreadTitle from "./ThreadTitle";
import ThreadComments from "./ThreadComments";
import ShowNewComments from "./ShowNewComments";

const AThreadsArea = (props) => {
  return (
    <>
      <ThreadTitle title={props.title} />
      <ThreadComments comments={props.comments} count={props.count} />
      <ShowNewComments
        title_id={props.title_id}
        title={props.title}
      />
    </>
  );
};

export default AThreadsArea;
