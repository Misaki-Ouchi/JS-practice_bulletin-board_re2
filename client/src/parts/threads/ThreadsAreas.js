import { useContext } from "react";
import { DataList } from "../../MainPage";
import AThreadsArea from "./AThreadsArea";

const ThreadsAreas = (props) => {
  const dataList = useContext(DataList);
  return (
    <div className="thread">
      <div className="threadWrap">
          {dataList.map((value, index) => {
            return (
              <div key={index} className="threadsArea">
                <AThreadsArea
                  title={value.titleData.title}
                  comments={value.comments}
                  count={props.count}
                  comment_count={value.titleData.count}
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
