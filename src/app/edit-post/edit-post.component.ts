import { Component, OnInit } from '@angular/core';
import {Post} from '../dataManage/postType';
import {User} from '../dataManage/userType';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  post!: Post;
  user!: User;
  constructor() { }

  ngOnInit(): void {
  }

}
