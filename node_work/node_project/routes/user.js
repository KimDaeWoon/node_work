let express = require("express");
let router = express.Router();

// 전체 조회
//http://localhost/member?page=1&search=choi
router.get("/", (req, res) => {
  const page = req.query.page;
  const search = req.query.search;
  const data = req.query;
  //console.log(data);
  res.send(`user query: 페이지 : ${page} 찾기 : ${search}`);
});

// 단건조회
router.get("/:username", (req, res) => {
  let username = req.params.username;
  //console.log(username);
  res.send("hello get!" + username);
});

router.post("/", (req, res) => {
  //console.log(req.body); // 자체가 객체
  const username = req.body.username;
  const addr = req.body.addr;
  const hobby = req.body.hobby;
  const gender = req.body.gender;
  const level = req.body.level;

  res.send(
    `user post 유저 이름 : ${username}, 주소 : ${addr}, 취미 : ${hobby}, 성별 : ${gender}, 레벨 : ${level}`
  );
});

router.put("/:userid", (req, res) => {
  const userid = req.params.userid;
  const result = { ...req.body, userid };
  res.send(result);
});

router.delete("/:userid", (req, res) => {
  const userid = req.params.userid;

  res.send(`member 삭제 ${userid}`);
});

module.exports = router;
