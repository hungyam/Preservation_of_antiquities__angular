import { Component, OnInit } from '@angular/core';
import {Post} from '../dataManage/postType';
import {User} from '../dataManage/userType';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {Posts} from '../dataManage/Posts';
import {Users} from '../dataManage/Users';

@Component({
  selector: 'app-read-post',
  templateUrl: './read-post.component.html',
  styleUrls: ['./read-post.component.css']
})
export class ReadPostComponent implements OnInit {
  post!: Post;
  user!: User;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // @ts-ignore
    
    const id = + this.route.snapshot.paramMap.get('id');
    this.user = Users[0];
    this.post = Posts[id];
  }
}
