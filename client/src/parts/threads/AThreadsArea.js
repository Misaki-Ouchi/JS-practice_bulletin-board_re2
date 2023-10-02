import ThreadTitle from "./ThreadTitle";
import ThreadComments from "./ThreadComments";
import ThreadBtnLinks from "../links&btns/ThreadBtnLinks";

const AThreadsArea = (props) => {
  return (
    <>
      <ThreadTitle title_id={props.title_id} title={props.title} />
      <ThreadComments
        comments={props.comments}
        count={props.count}
        comment_count={props.comment_count}
      />
      <ThreadBtnLinks
        title_id={props.title_id}
        comment_count={props.comment_count}
        title={props.title}
        readAll={props.readAll}
        login={props.login}
      />
    </>
  );
};

export default AThreadsArea;
