import { Component, OnInit } from '@angular/core';
import {Users} from '../dataManage/Users';
import {User} from '../dataManage/userType';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  user!: User;
  constructor() { }

  ngOnInit(): void {
    this.user = Users[0];
  }

}
