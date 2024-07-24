const express = require("express");
const userRouter = require("./routes/user.js");
const productRouter = require("./routes/product.js");
const cors = require("cors");

const morgan = require("morgan");

const session = require("express-session");
const fileStore = require("session-file-store")(session);

const app = express();
const port = 3000;

//session 설정
//app.use(cookieParser());
app.use(
  session({
    secret: "secret key",
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      //secure: true,
      maxAge: 60000,
    },
    store: new fileStore(),
  })
);

// 정적 컨텐츠 파일 불러 오기
app.use(cors());
app.use(express.static("public"));

// 위치 중요 (라우팅 하기전)
// form 형식 읽기
app.use(express.urlencoded({ extended: false }));
// body json 타입 읽기
app.use(express.json());

//app.use(morgan("combined"));
app.use(morgan(":date[clf] :method :url"));
// 라우팅
app.get("/", (req, res) => {
  res.send("hello world!");
});

app.use("/member", userRouter);
app.use("/product", productRouter);

app.listen(port, () => {
  console.log(`server runing http://localhost:${port}`);
});
