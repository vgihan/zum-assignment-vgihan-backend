import { Post } from "../../types/post";
import { getCustomTime } from "../../utils/getCustomTime";
import { GetPostDto } from "./dto/get-post.dto";
import { PutPostDto } from "./dto/put-post.dto";
import { SetPostDto } from "./dto/set-post.dto";

export class PostRepository {
  posts: Post[];
  idx: number;
  constructor() {
    this.posts = [];
    this.idx = 0;
  }
  find(getPostDto: GetPostDto) {
    const { id, title, content, writer } = getPostDto;
    return this.posts.filter((post) => {
      if (id && id != post.id) return false;
      if (title && !title.includes(post.title)) return false;
      if (content && !content.includes(post.content)) return false;
      if (writer && !writer.includes(post.writer)) return false;
      return true;
    });
  }
  create(setPostDto: SetPostDto) {
    const newPost = {
      ...setPostDto,
      id: this.idx++,
      date: getCustomTime(new Date()),
    };
    this.posts.push(newPost);
    return newPost;
  }
  modify(putPostDto: PutPostDto) {
    const targetIndex = this.posts.findIndex(
      (post) => post.id === putPostDto.id
    );
    this.posts.splice(targetIndex, 1, {
      ...putPostDto,
      date: getCustomTime(new Date()),
    });
    return this.posts;
  }
}
