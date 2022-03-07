import { Router } from "express";
import { postController } from "../../factory";

const postRouter = Router();

postRouter.get("", postController.getPost);
postRouter.post("", postController.setPost);
postRouter.put("", postController.putPost);

export default postRouter;
