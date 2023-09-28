import { Link } from "react-router-dom";
import "./main.css";

function WriteNewTitle() {
  return (
    <div className="writeNewTitle">
      <Link to="newTitle">新規スレッドを書く</Link>
    </div>
  );
}

export default WriteNewTitle;
