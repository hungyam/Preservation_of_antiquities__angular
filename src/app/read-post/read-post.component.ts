import {Component, OnInit} from '@angular/core';
import {Post} from '../dataManage/postType';
import {User} from '../dataManage/userType';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {DataService} from '../data.service';

@Component({
  selector: 'app-read-post',
  templateUrl: './read-post.component.html',
  styleUrls: ['./read-post.component.css']
})
export class ReadPostComponent implements OnInit {
  post!: Post;
  user!: User;
  id!: number;
  text!: string;
  isAdmin!: boolean;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.user = new User(localStorage.getItem('username') as string);
    this.post = DataService.getPost(this.id);
    this.isAdmin = this.user.username === 'master';
    this.updateAuthor();
  }

  onSubmit(): void {
    DataService.addComment(this.id, this.text);
    this.updateAuthor();
  }

  delete(index: number): void {
    DataService.deleteComment(this.id, index);
  }

  Hide(index: number): void {
    DataService.hideComment(this.id, index);
  }

  Restore(index: number): void {
    DataService.restoreComment(this.id, index);
  }

  updateAuthor(): void {
    this.post.comments.forEach(comment => {
      comment.isAuthor = comment.by === this.user.username;
    });
  }

}
