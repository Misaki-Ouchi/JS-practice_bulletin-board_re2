import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./main.css";
import axios from "axios";

const SignUpForm = () => {
  const initialValues = { name: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value }); // e.targetで取ってきたname, valueをformValuesの空のプロパティと値にそれぞれ代入
  };
  const handleSubmit = (e) => {
    e.preventDefault(); // 自動更新無効化
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      axios
        .post("http://localhost:3000/users", formValues)
        .then((res) => {
          navigate("/successSignUp");
        })
        .catch(err => console.log(err));
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
      errors.email = "ID（メールアドレス）を入力してください。";
    } else if (!regex.test(values.email)) {
      errors.email = "正しいメールアドレスを入力してください。";
    }
    if (!values.password) {
      errors.password = "パスワードを入力してください。";
    }
    return errors;
  };

  return (
    <div className="formContainer">
      <form onSubmit={(e) => handleSubmit(e)}>
        <h2>新規ユーザー登録</h2>
        <div className="uniForm">
          <div className="formField">
            <label htmlFor="名前">名前</label>
            <br />
            <input
              id="name"
              type="text"
              name="name"
              onChange={(e) => handleChange(e)}
            />
            <p className="errorMsg">{formErrors.name}</p>
          </div>
          <div className="formField">
            <label htmlFor="ID（メールアドレス）">ID（メールアドレス）</label>
            <br />
            <input
              id="email"
              type="text"
              name="email"
              onChange={(e) => handleChange(e)}
            />
            <p className="errorMsg">{formErrors.email}</p>
          </div>
          <div className="formField">
            <label htmlFor="パスワード">パスワード</label>
            <br />
            <input
              id="password"
              type="text"
              name="password"
              onChange={(e) => handleChange(e)}
            />
            <p className="errorMsg">{formErrors.password}</p>
          </div>
        </div>
        <button className="submitButton">登録</button>
      </form>
    </div>
  );
};

export default SignUpForm;
