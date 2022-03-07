import { Request, RequestHandler, Response } from "express";
import { GetPostDto } from "./dto/get-post.dto";
import { SetPostDto } from "./dto/set-post.dto";
import { PutPostDto } from "./dto/put-post.dto";
import { PostService } from "./post.service";

export class PostController {
  constructor(private postService: PostService) {}
  getPost(req: Request, res: Response) {
    const getPostDto: GetPostDto = new GetPostDto(req.query);
    res.send(this.postService.getPost(getPostDto));
  }
  setPost(req: Request, res: Response) {
    const setPostDto: SetPostDto = new SetPostDto(req.query);
    res.send(this.postService.setPost(setPostDto));
  }
  putPost(req: Request, res: Response) {
    const putPostDto: PutPostDto = new PutPostDto(req.query);
    res.send(this.postService.putPost(putPostDto));
  }
}
