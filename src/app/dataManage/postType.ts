export class Comment {
  constructor(
    public text: string,
    public by: string,
    public isAuthor: boolean,
    public hide: boolean
  ) {
  }
}

export class Post {
  constructor(
    public id: number,
    public title: string,
    public text: string,
    public author: string,
    public date: string,
    public hide: boolean,
    public isAuthor: boolean,
    public comments: Comment[]
  ) {
  }

}
