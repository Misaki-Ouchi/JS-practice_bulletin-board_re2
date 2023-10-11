import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const NewComments = (props) => {
  // ユーザー情報取得
  const userValue = localStorage.getItem("loginUser");

  const initialValues = {
    title_id: props.title_id,
    name: "",
    email: "",
    message: "",
    post_time: "",
    time: "",
  };
  if (userValue) {
    const userName = JSON.parse(userValue).name;
    const userEmail = JSON.parse(userValue).email;
    initialValues.name = userName;
    initialValues.email = userEmail;
  }
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    // タイトル、日時情報の追加
    const date = new Date();
    const month = date.getMonth() + 1;
    const week = ["日", "月", "火", "水", "木", "金", "土"];
    let min = date.getMinutes();
    if (min < 10) {
      min = min + "0";
    }
    let mil = Math.round(date.getMilliseconds() / 10);
    if (mil < 10) {
      mil = mil + "0";
    }
    const a =
      date.getFullYear() +
      "/" +
      month +
      "/" +
      date.getDate() +
      "(" +
      week[date.getDay()] +
      ")";
    const b = date.getHours() + ":" + min + ":" + date.getSeconds() + "." + mil;
    const time = `${a} ${b}`;
    formValues.post_time = date.getTime();
    formValues.time = time;
    // データ送信
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      // コメント追加
      axios
        .post("http://localhost:3000/comments", formValues)
        .catch((err) => console.log(err));
      // タイトル編集
      axios
        .post(
          `http://localhost:3000/postComment/titles/${props.title_id}`,
          formValues
        )
        .catch((err) => console.log(err))
        .then(setFormValues(initialValues)) // フォームクリア
        .then((res) => navigate(`/allThread/${formValues.title_id}`))
        .catch((err) => console.log(err));
    }
  };
  const validate = (values) => {
    const errors = {};
    const regex =
      /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
    if (!values.name) {
      errors.name = "名前を入力してください。";
    }
    if (!values.email) {
      errors.email = "メールアドレスを入力してください。";
    } else if (!regex.test(values.email)) {
      errors.email = "正しいメールアドレスを入力してください。";
    }
    if (!values.message) {
      errors.message = "コメントを入力してください。";
    }
    return errors;
  };

  return (
    <div className="newComment">
      <div className="formContainer">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="uniForm">
            <div className="newCommentFlex">
              <div className="formField formFieldA">
                <label htmlFor="名前">名前</label>
                <br />
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formValues.name}
                  onChange={(e) => handleChange(e)}
                />
                <br />
                <span className="errorMsg">{formErrors.name}</span>
              </div>
              <div className="formField formFieldA">
                <label htmlFor="email">email</label>
                <br />
                <input
                  id="email"
                  type="text"
                  name="email"
                  value={formValues.email}
                  onChange={(e) => handleChange(e)}
                />
                <p className="errorMsg">{formErrors.email}</p>
              </div>
            </div>
            <div className="formField">
              <label htmlFor="コメント">コメント</label>
              <br />
              <textarea
                id="message"
                type="text"
                name="message"
                value={formValues.message}
                rows="10"
                onChange={(e) => handleChange(e)}
              />
              <p className="errorMsg">{formErrors.message}</p>
            </div>
          </div>
          <button className="submitButton">書き込む</button>
        </form>
      </div>
    </div>
  );
};

export default NewComments;
