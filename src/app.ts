import bodyParser from "body-parser";
import express from "express";
import postRouter from "./resources/post/post.router";

const app = express();

app.use(bodyParser());

app.use("/post", postRouter);

app.listen(3000, () => {
  console.log(`
  ################################################
  🛡️  Server listening on port: 3000 🛡️
  ################################################
`);
});
