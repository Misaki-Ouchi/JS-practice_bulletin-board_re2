import { useContext } from "react";
import { Link } from "react-router-dom";
import { Titles } from "./../../App";

function ThreadTitles() {
  const titles = useContext(Titles);
  titles.map((val) => {
    return (val.url = "/allThread/" + val.id);
  });

  return (
    <div className="threadTitles">
      {titles.map((val, index) => {
        return (
          <Link to={val.url} key={index}>
            {val.title}({val.count}),
          </Link>
        );
      })}
    </div>
  );
}
export default ThreadTitles;
