import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import ThreadTitle from "../threads/ThreadTitle";
import ThreadComments from "../threads/ThreadComments";
import EditComment from "../forms/EditComment";
import { DataList } from "../../Router";

const EditCommentPage = () => {
  const { id } = useParams();
  let dataList = useContext(DataList);
  let commentsList = dataList.map((val) => {
    return val.comments;
  });
  // 該当コメントデータ
  let editData = commentsList.flat(2).filter((val) => {
    return val.id === Number(id);
  });
  // 該当コメントのタイトル
  let editTitle = dataList.filter((val) => {
    return val.titleData.id === editData[0].title_id;
  });
  editTitle = editTitle[0];

  return (
    <>
      <div className="thread">
        <div className="threadWrap">
          <div className="threadsArea">
      <ThreadTitle
        title_id={editData[0].title_id}
        title={editTitle.titleData.title}
      />
            <ThreadComments
              comments={editData}
              count={editData[0].count}
              comment_count={editData[0].comment_count}
            />
            <EditComment
              title={editTitle.titleData.title}
              editData={editData[0]}
                   />
          </div>
        </div>
      </div>
    </>
  );
};

export default EditCommentPage;
