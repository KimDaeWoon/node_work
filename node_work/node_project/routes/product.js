const express = require("express");
let router = express.Router();

// 전체 조회
router.get("/", (req, resp) => {
  console.log(req.query);
  let category = req.query.category;
  let price = req.query.price;

  resp.send(`전체 조회  카테고리 : ${category}, 가격 : ${price} `);
});
// 단건 조회
router.get("/:page", (req, resp) => {
  console.log(req.params);
  let page = req.params.page;
  resp.send(`단건 조회 ${page}`);
});
// 등록
router.post("/", (req, resp) => {
  console.log(req.body);
  const prodid = req.body.prodid;
  const prodname = req.body.prodname;
  const price = req.body.price;

  resp.send(
    `post json 형식 아이디 : ${prodid}, 이름 : ${prodname}, 가격 : ${price}`
  );
});

router.put("/:userid", (req, resp) => {
  console.log(req.params);
  let userid = req.params.userid;
  console.log(req.body);
  let prodname = req.body.prodname;
  let price = req.body.price;
  let data = req.body;
  let result = { ...data };
  resp.send(result);
});

router.delete("/:userid", (req, resp) => {
  const userid = req.params.userid;
  resp.send(`product 삭제 ${userid}`);
});

module.exports = router;
