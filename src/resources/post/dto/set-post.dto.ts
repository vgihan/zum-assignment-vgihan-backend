import QueryString from "qs";

export class SetPostDto {
  title!: string;
  content!: string;
  writer!: string;
  constructor(query: QueryString.ParsedQs) {
    this.title = query.title as string;
    this.content = query.content as string;
    this.writer = query.writer as string;
  }
}
