import { PostController } from "./resources/post/post.controller";
import { PostRepository } from "./resources/post/post.repository";
import { PostService } from "./resources/post/post.service";

export const postRepository = new PostRepository();
export const postService = new PostService(postRepository);
export const postController = new PostController(postService);
