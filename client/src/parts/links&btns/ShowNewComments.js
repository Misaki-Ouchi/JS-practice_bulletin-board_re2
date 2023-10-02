import { useState } from "react";
import NewComments from "../forms/NewComments";

const ShowNewComments = (props) => {
  const [isClick, setIsClick] = useState(false);
  const handleClick = () => {
    setIsClick(!isClick);
  };
  return (
    <>
      <button onClick={() => handleClick()}>書き込む</button>
      {isClick && <NewComments title_id={props.title_id} title={props.title} />}
    </>
  );
};

export default ShowNewComments;
