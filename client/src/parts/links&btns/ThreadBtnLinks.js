import { useState } from "react";
import ShowNewComments from "../links&btns/ShowNewComments";
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
        <button onClick={() => handleClick()}>書き込む</button>
        {props.login && <LikesTitleBtn title_id={props.title_id} />}
        {/* {props.readAll && ( */}
          <ReadAllLink
            title_id={props.title_id}
          comment_count={props.comment_count}
          comments={props.comments}
          />
         {/* )} */}
      </div>
      {isClick && <NewComments title_id={props.title_id} title={props.title} />}
    </>
  );
};

export default ThreadBtnLinks;
