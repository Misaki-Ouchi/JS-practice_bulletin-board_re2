const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 3000;
const mysql = require("mysql2");

app.use(cors());
app.use(express.json());

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "rootroot",
  database: "bulletinBoard",
  multipleStatements: true,
});

app.get("/api/get/users", (req, res) => {
  const sql = "SELECT * FROM users";
  con.query(sql, function (err, result, fields) {
    if (err) {
      return res.json("Error");
    }
    return res.json(result);
  });
});
// タイトル一覧
app.get("/api/get/titles", (req, res) => {
  // 投稿日時新しい順 DESC: 降順、ASC: 昇順（デフォルト）
  const desc = "SELECT * FROM titles ORDER BY post_time DESC";
  con.query(desc, function (err, result, fields) {
    if (err) {
      return res.json("Error");
    }
    return res.json(result);
  });
});
// 全コメント
app.get("/api/get/comments", (req, res) => {
  // 投稿日時古い順 DESC: 降順、ASC: 昇順（デフォルト）
  const desc = "SELECT * FROM comments ORDER BY post_time ASC";
  con.query(desc, function (err, result, fields) {
    if (err) {
      return res.json("Error");
    }
    return res.json(result);
  });
});
app.get("/api/get/likes", (req, res) => {
  const sql = "SELECT * FROM likes";
  con.query(sql, function (err, result, fields) {
    if (err) {
      return res.json("Error");
    }
    return res.json(result);
  });
});

// 新規登録
// https://www.youtube.com/watch?v=F53MPHqOmYI
app.post("/users", (req, res) => {
  const sql =
    "INSERT INTO users( user_id, name, email, password ) VALUES (0, ?, ?, ?)";
  const values = [req.body.name, req.body.email, req.body.password];
  con.query(sql, values, function (err, result) {
    console.log(result);
    if (err) {
      return res.json("Error");
    }
    return res.json(result);
  });
});
// 新規登録 ユーザ名確認
app.post("/confirm/userName", (req, res) => {
  const sql = "SELECT * FROM users WHERE name = ?";
  const values = [req.body.name];
  con.query(sql, values, function (err, result) {
    if (err) {
      return res.json("Error");
    }
    if (result.length > 0) {
      return res.json("Failed");
    } else {
      return res.json(result);
    }
  });
});
// ログイン
app.post("/login", (req, res) => {
  const sql = "SELECT * FROM users WHERE name = ? AND password = ?";
  const values = [req.body.name, req.body.password];
  con.query(sql, values, function (err, result) {
    if (err) {
      return res.json("Error");
    }
    if (result.length > 0) {
      return res.json(result);
    } else {
      return res.json("Failed");
    }
    // if (result.length === 0) {
    //   return res.json("Failed");
    // } else {
    //   return res.json(result);
    // }
  });
});
// コメント編集
app.post("/editComment/comments/:id", (req, res) => {
  const sql = `UPDATE comments SET message = ? WHERE id = ${req.params.id}`;
  con.query(sql, [req.body.message], function (err, result) {
    console.log(result);
    if (err) {
      return res.json("Error");
    }
    return res.json(result);
  });
});

// コメント削除
app.post("/DeleteComment/:id", (req, res) => {
  const sql = `DELETE FROM comments WHERE id = ${req.params.id}`;
  con.query(sql, function (err, result) {
    console.log(req.params.id);
    console.log(result);
    if (err) {
      return res.json("Error");
    }
    return res.json(result);
  });
});
// コメント削除(タイトルデータ編集)
app.post("/DeleteComment/titles/:title_id", (req, res) => {
  const sql = `UPDATE titles SET count = count - 1 WHERE id = ${req.params.title_id}`;
  con.query(sql, function (err, result) {
    console.log(req.params.title_id);
    console.log(result);
    if (err) {
      return res.json("Error");
    }
    return res.json(result);
  });
});

// コメント投稿
app.post("/comments", (req, res) => {
  const sql =
    "INSERT INTO comments( id, title_id, name, email, message, post_time, time ) VALUES (0, ?, ?, ?, ?, ?, ?)";
  const values = [
    req.body.title_id,
    req.body.name,
    req.body.email,
    req.body.message,
    req.body.post_time,
    req.body.time,
  ];
  con.query(sql, values, function (err, result) {
    console.log(result);
    if (err) {
      return res.json("Error");
    }
    return res.json(result);
  });
});
// タイトルのcount, post_time更新
app.post("/postComment/titles/:id", (req, res) => {
  const sql = `UPDATE titles SET count = count + 1, post_time = ? WHERE id = ${req.params.id}`;
  con.query(sql, [req.body.post_time], function (err, result) {
    console.log(result);
    if (err) {
      return res.json("Error");
    }
    return res.json(result);
  });
});

// タイトル投稿
app.post("/postTitle/titles", (req, res) => {
  const sql = `INSERT INTO titles (id, title, count, post_time ) VALUES (?, ?, 1, ?)`;
  const values = [req.body.title_id, req.body.title, req.body.post_time];
  con.query(sql, values, function (err, result) {
    console.log(result);
    if (err) {
      return res.json("Error");
    }
    return res.json(result);
  });
});

// お気に入り登録確認
app.post("/likes/confirm", (req, res) => {
  const sql = "SELECT * FROM likes WHERE user_id = ? AND title_id = ?";
  const values = [req.body.user_id, req.body.title_id];
  con.query(sql, values, function (err, result) {
    console.log("result:", result);
    if (err) {
      return res.json("Error");
    }
    if (result.length > 0) {
      return res.json("already");
    } else {
      return res.json("yet");
    }
  });
});
// お気に入り登録
app.post("/likes/register", (req, res) => {
  const sql = "INSERT INTO likes (id, user_id, title_id ) VALUES (0, ?, ?)";
  const values = [req.body.user_id, req.body.title_id];
  con.query(sql, values, function (err, result) {
    console.log(result);
    if (err) {
      return res.json("Error");
    }
    return res.json(result);
  });
});
// お気に入り解除
app.post("/likes/delete", (req, res) => {
  const sql = "DELETE FROM likes WHERE user_id = ? AND title_id = ?";
  const values = [req.body.user_id, req.body.title_id];
  con.query(sql, values, function (err, result) {
    console.log(result);
    if (err) {
      return res.json("Error");
    }
    return res.json(result);
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
