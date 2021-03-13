import { Component, OnInit } from '@angular/core';
import {User} from '../dataManage/userType';
import {formType} from '../edit-post/formType';
import {DataService} from '../data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  user!: User;
  form!: formType;
  constructor(private router: Router) { }

  ngOnInit(): void {
    if (!localStorage.getItem('username')) {
      this.router.navigate(['signin'])
        .then(() => alert('Please sign in or register fist!'));
    }
    this.user = new User(localStorage.getItem('username') as string);
    this.form = new formType('', '');
  }

  onSubmit(): void {
    DataService.createPost(this.form.title, this.form.text);
    this.router.navigate(['/home']);
  }
}
