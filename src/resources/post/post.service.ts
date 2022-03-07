import { GetPostDto } from "./dto/get-post.dto";
import { PutPostDto } from "./dto/put-post.dto";
import { SetPostDto } from "./dto/set-post.dto";
import { PostRepository } from "./post.repository";

export class PostService {
  constructor(private postRepository: PostRepository) {}

  getPost(getPostDto: GetPostDto) {
    return this.postRepository.find(getPostDto);
  }
  setPost(setPostDto: SetPostDto) {
    return this.postRepository.create(setPostDto);
  }
  putPost(putPostDto: PutPostDto) {
    return this.postRepository.modify(putPostDto);
  }
}
