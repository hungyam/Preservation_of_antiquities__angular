import { Component, OnInit } from '@angular/core';
import { Posts } from '../dataManage/Posts';
import { User } from '../dataManage/userType';
import { Post } from '../dataManage/postType';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts!: Post[];
  user!: User;
  constructor(private router:Router) { }

  ngOnInit(): void{
    if(!localStorage.getItem('username')){
      this.router.navigate(['signin']).then(()=>alert('Please sign in or register fist!'));
    }
    this.posts = Posts;
    this.user = new User(<string>localStorage.getItem('username'));
  }

}
