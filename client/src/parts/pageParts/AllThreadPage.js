import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import AThreadsArea from "../threads/AThreadsArea";
import { DataList } from "../../Router";

const AllThreadPage = (props) => {
  let dataList = useContext(DataList);
  const {id} = useParams();
  // 指定タイトルのコメントのみ絞り込み
  dataList = dataList.filter((val) => {
    return val.titleData.id === Number(id)
  })

  return (
    <>
    <div className="thread">
      <div className="threadWrap">
          {dataList.map((value, index) => {
            return (
              <div key={index} className="threadsArea" >
                <AThreadsArea
                  title={value.titleData.title}
                  comments={value.comments}
                  count={value.comments.length - 1}
                  comment_count={value.titleData.count}
                  title_id={value.titleData.id}
                  readAll={false}
                />
              </div>
            );
          })}
      </div>
    </div>
    </>
  );
};

export default AllThreadPage;
