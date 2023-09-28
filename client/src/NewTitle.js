import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./main.css";
import axios from "axios";

const NewTitle = () => {
  const initialValues = {
    title: "",
    title_id: "",
    name: "",
    email: "",
    message: "",
    post_time: "",
    time: ""
  };  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value }); // e.targetで取ってきたname, valueをformValuesの空のプロパティと値にそれぞれ代入
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    // タイトル、日時情報の追加
    const date = new Date()
    const month = date.getMonth() + 1
    const week = ["日", "月", "火", "水", "木", "金", "土",]
    const mil = Math.round(date.getMilliseconds()/10)
    const a = date.getFullYear() + "/" + month + "/" + date.getDate() + "(" + week[date.getDay()] + ")"
    const b = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + "." + mil
    const time = `${a} ${b}`
    formValues.post_time = date.getTime()
    formValues.time = time
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      axios
        .post("http://localhost:3000/postTitle/comments", formValues)
        .catch((err) => console.log(err));
      axios
        .post("http://localhost:3000/postTitle/titles", formValues)
        .then((res) => navigate("/successPostTitle"))
        .catch((err) => console.log(err));
    }
    console.log(formValues)
  };
  const validate = (values) => {
    const errors = {};
    if (!values.title) {
      errors.title = "タイトルを入力してください。";
    }
    if (!values.name) {
      errors.name = "名前を入力してください。";
    }
    if (!values.message) {
      errors.message = "コメントを入力してください。";
    }
    return errors;
  };

  return (
      <div className="newTitle">
      <div className="formContainer">
        <form onSubmit={(e) => handleSubmit(e)}>
            <div className="uniForm">
            <div className="formField">
              <label htmlFor="タイトル">タイトル</label>
              <br />
              <input
                id="title"
                type="text"
                name="title"
                onChange={(e) => handleChange(e)}
              />
              <p className="errorMsg">{formErrors.title}</p>
            </div>
            <div className="newCommentFlex">
              <div className="formField formFieldA">
                <label htmlFor="名前">名前</label>
                <br />
                <input
                  id="name"
                  type="text"
                  name="name"
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

export default NewTitle;
