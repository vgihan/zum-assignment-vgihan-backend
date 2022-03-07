import QueryString from "qs";

export class GetPostDto {
  id?: number;
  title?: string;
  content?: string;
  writer?: string;
  constructor(query: QueryString.ParsedQs) {
    this.id = parseInt(query.id as string);
    this.title = query.title as string;
    this.content = query.content as string;
    this.writer = query.writer as string;
  }
}
