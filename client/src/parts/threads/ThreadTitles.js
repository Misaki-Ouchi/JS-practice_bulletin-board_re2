import { useState, useCallback } from "react";
import { Link } from "react-router-dom";

function ThreadTitles({ titles, count }) {
  let isDotShow = false
  let newTitles = [];
  if (titles.length > count - 1) {
    for (let i = 0; i < count; i++) {
      newTitles.push(titles[i]);
    }
    isDotShow = true
  } else {
    for (let i = 0; i < titles.length - 1; i++) {
      newTitles.push(titles[i]);
    }
  }
  let lastTitle = titles[titles.length - 1];


  return (
    <div className="threadTitles">
      {newTitles.map((val, index) => {
        return (
          <Link to={val.url} key={index}>
            {val.title}({val.count}),
          </Link>
        );
      })}
      <Link to={lastTitle.url}>
        {lastTitle.title}({lastTitle.count})
      </Link>
      {isDotShow && <span>...</span>}
    </div>
  );
}
export default ThreadTitles;
