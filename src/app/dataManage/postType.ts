interface Comment {
  text: string;
  by: string;
}

export interface Post {
  id: number;
  title: string;
  text: string;
  author: string;
  date: string;
  comments: Comment[];
}
