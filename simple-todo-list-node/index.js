const path = require("path");
const express = require("express");
const app = express();

app.set("views", path.join(__dirname, "views")); // 기본 html 폴더를 지정
app.set("view engine", "ejs"); // view engine을 ejs 사용 설정
app.engine("html", require("ejs").renderFile); // ejs에 html file 사용 허용 설정
app.use("/", express.static(path.join(__dirname, "/contents")));

app.get("/", function(req, res) {
  const lists = [
    {
      id: 1,
      text: "화면설계서 그리기",
      checked: true
    },
    {
      id: 2,
      text: "html 버전 구현하기",
      checked: false
    },
    {
      id: 3,
      text: "리액트로 구현하기",
      checked: false
    }
  ];
  res.render("todoList.html", { todoLists: lists });
});

app.listen(3000);
