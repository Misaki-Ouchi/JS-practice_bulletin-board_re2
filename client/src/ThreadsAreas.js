import { useContext } from "react";
import { Titles } from "./App";
import { Comments } from "./App";
import ThreadTitle from "./ThreadTitle";
import ThreadComments from "./ThreadComments";
import ShowNewComments from "./ShowNewComments";
import AThreadsArea from "./AThreadsArea";

const ThreadsAreas = (props) => {
  const titles = useContext(Titles);
  const comments = useContext(Comments);
  const commentsList = [];

  // commentsListに{タイトルデータ：コメント一覧}を格納
  for (let i = 0; i < titles.length; i++) {
    commentsList[i] = { titleData: titles[i], comments: [] };
    for (let j = 0; j < comments.length; j++) {
      if (titles[i].id === comments[j].title_id) {
        commentsList[i].comments.push(comments[j]);
      }
    }
  }

  return (
    <div className="thread">
      <div className="threadWrap">
          {commentsList.map((value, index) => {
            return (
              <div key={index} className="threadsArea">
                {/* <ThreadTitle title={value.titleData.title} />
                <ThreadComments comments={value.comments} count={props.count} />
                <ShowNewComments
                  title_id={value.titleData.id}
                  title={value.titleData.title}
                /> */}
                <AThreadsArea
                  title={value.titleData.title}
                  comments={value.comments}
                  count={props.count}
                  title_id={value.titleData.id}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ThreadsAreas;
