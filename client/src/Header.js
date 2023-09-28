import { Link } from "react-router-dom";
import "./main.css";

function header() {
  return (
    <header>
      <Link to="/">
        <h1>なんでも掲示板</h1>
      </Link>
    </header>
  );
}

export default header;
