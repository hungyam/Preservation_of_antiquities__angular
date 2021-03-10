import { Component, OnInit } from '@angular/core';
import {Post} from '../dataManage/postType';
import {User} from '../dataManage/userType';

@Component({
  selector: 'app-delete-post',
  templateUrl: './delete-post.component.html',
  styleUrls: ['./delete-post.component.css']
})
export class DeletePostComponent implements OnInit {
  post!: Post;
  user!: User;
  constructor() { }

  ngOnInit(): void {
  }

}
