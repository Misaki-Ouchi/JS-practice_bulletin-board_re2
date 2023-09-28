// props comments「コメント一覧」、count「1コメ以外のコメント数」
// 1コメと最新count個のコメントを表示

const ThreadComments = (props) => {
  return (
    <ul>
    {props.comments.map((val, index) => {
      return (
        index === 1 && (
          <li key={index}>
            <h3>
              {val.comment_count} 名前：{val.name}：{val.time}
            </h3>
            <p>{val.message}</p>
          </li>
        )
      );
    })}
    {props.comments.map((val, index) => {
      return (
        index !== 1 &&
        index >= props.comments.length - props.count && (
          <li key={index}>
            <h3>
              {val.comment_count} 名前：{val.name}：{val.time}
            </h3>
            <p>{val.message}</p>
          </li>
        )
      );
    })}
  </ul>
  );
};

export default ThreadComments;
