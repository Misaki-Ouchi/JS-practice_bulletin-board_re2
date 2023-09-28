import { useContext } from "react";
import { Titles } from "./App";
import "./main.css";

function ThreadTitles() {
  const titles = useContext(Titles);

  return (
    <div className="threadTitles">
      {titles.map((val, index) => {
        return (
          <span key={index}>
            {val.title}({val.count}),
          </span>
        );
      })}
    </div>
  );
}
export default ThreadTitles;
