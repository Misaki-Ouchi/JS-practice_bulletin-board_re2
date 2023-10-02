// props comments「コメント一覧」、count「1コメ以外のコメント数」
// 1コメと最新count個のコメントを表示

const ThreadComments = (props) => {
  let num = 0
  if (props.comment_count > 5) {
    num = props.comment_count - props.count - 2
  }
  return (
    <ul>
    {props.comments.map((val, index) => {
      return (
        index === 0 && (
          <li key={index}>
            <h3>
              1 名前：{val.name}：{val.time}
            </h3>
            <p>{val.message}</p>
          </li>
        )
      );
    })}
    {props.comments.map((val, index) => {
      num++
      return (
        index !== 0 &&
        index >= props.comment_count - props.count && (
          <li key={index}>
            <h3>
              {num} 名前：{val.name}：{val.time}
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
