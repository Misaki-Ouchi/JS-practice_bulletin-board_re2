import { useContext } from "react";
import { Link } from "react-router-dom";
// import { Titles } from "./../../App";

function ThreadTitles(props) {

  return (
    <div className="threadTitles">
      {props.titles.map((val, index) => {
        return (
          <Link to={val.url} key={index}>
            {val.title}({val.count}),
          </Link>
        );
      })}
      <span>...</span>
    </div>
  );
}
export default ThreadTitles;
