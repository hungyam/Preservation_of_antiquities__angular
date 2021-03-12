import {Component, OnInit} from '@angular/core';
import { formType } from './formType';
import {DataService} from '../data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  form!: formType;
  error = '';
  constructor(private router:Router) { }
  onSubmit(): void {
    if (DataService.findUser(<string> this.form.username,<string> this.form.key)){
      localStorage.setItem('username',<string> this.form.username);
      this.router.navigate(['home']).then(() => alert('Success!'));
    }else{
      this.error = 'Error!';
    }
  }
  ngOnInit(): void {
    this.form = new formType('','');
  }

}
