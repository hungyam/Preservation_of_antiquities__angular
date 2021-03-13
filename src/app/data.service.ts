import {Injectable} from '@angular/core';
import {Users} from './dataManage/Users';
import {Md5} from 'ts-md5';
import {Posts} from './dataManage/Posts';
import {Post} from './dataManage/postType';
import {Comment} from './dataManage/postType';
import {User} from './dataManage/userType';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() {
  }

  static findUser(username: string, password: string): boolean {
    const user = Users.find(obj => obj.username === username);
    if (user && user.key === Md5.hashStr(password)) {
      return true;
    }
    return false;
  }

  static checkUser(username: string): boolean {
    const user = Users.find(obj => obj.username === username);
    return user ? true : false;
  }

  static createUser(user: User): void {
    user.key = Md5.hashStr(user.key) as string;
    Users.push(user);
  }

  static getPosts(): Post[] {
    return Posts;
  }

  static getPost(index: number): Post {
    return Posts[index];
  }

  static editPost(index: number, title: string, text: string): void {
    Posts[index].title = title;
    Posts[index].text = text;
  }

  static createPost(title: string, text: string): void {
    const date = new Date().toLocaleDateString();
    const post = new Post(Posts.length, title, text, localStorage.getItem('username') as string, date, false, false, []);
    Posts.push(post);
  }

  static deletePost(index: number): void {
    Posts.splice(index, 1);
  }

  static hidePost(index: number): void {
    Posts[index].hide = true;
  }

  static restorePost(index: number): void {
    Posts[index].hide = false;
  }

  static addComment(index: number, text: string): void {
    const comment = new Comment(text, localStorage.getItem('username') as string, false, false);
    Posts[index].comments.push(comment);
  }

  static deleteComment(index: number, no: number): void {
    Posts[index].comments.splice(no, 1);
  }

  static hideComment(index: number, no: number): void {
    Posts[index].comments[no].hide = true;
  }

  static restoreComment(index: number, no: number): void {
    Posts[index].comments[no].hide = false;
  }
}
