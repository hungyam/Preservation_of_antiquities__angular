import {Component, OnInit} from '@angular/core';
import {User} from '../dataManage/userType';
import {Post} from '../dataManage/postType';
import {Router} from '@angular/router';
import {DataService} from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts!: Post[];
  user!: User;
  isAdmin!: boolean;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    if (!localStorage.getItem('username')) {
      this.router.navigate(['signin'])
        .then(() => alert('Please sign in or register fist!'));
    }
    this.posts = DataService.getPosts();
    this.user = new User(localStorage.getItem('username') as string);
    this.isAdmin = this.user.username === 'master';
    this.updateAuthor();
  }

  Hide(index: number): void {
    DataService.hidePost(index);
  }

  Restore(index: number): void {
    DataService.restorePost(index);
  }

  updateAuthor(): void {
    this.posts.forEach(post => {
      post.isAuthor = post.author === this.user.username;
    });
  }
}
