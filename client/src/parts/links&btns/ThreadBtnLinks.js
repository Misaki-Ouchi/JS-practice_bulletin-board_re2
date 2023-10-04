import { useState } from "react";
import NewComments from "../forms/NewComments";
import ReadAllLink from "../links&btns/ReadAllLink";
import LikesTitleBtn from "../links&btns/LikesTitleBtn";

const ThreadBtnLinks = (props) => {
  const [isClick, setIsClick] = useState(false);
  const handleClick = () => {
    setIsClick(!isClick);
  };

  return (
    <>
      <div className="threadBtnLinks">
        <button className="showNewCommentsBtn" onClick={() => handleClick()}>書き込む</button>
        <LikesTitleBtn
          title_id={props.title_id}
          disabled={props.login}
        />
        {props.readAll && (
          <ReadAllLink
            title_id={props.title_id}
            comment_count={props.comment_count}
            comments={props.comments}
          />
        )}
      </div>
      {isClick && <NewComments title_id={props.title_id} title={props.title} />}
    </>
  );
};

export default ThreadBtnLinks;
