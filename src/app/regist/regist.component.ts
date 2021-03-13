import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { formType } from './formType';
import { MustMatch } from './passwordMatch';
import { Router } from '@angular/router';
import {DataService} from '../data.service';

@Component({
  selector: 'app-regist',
  templateUrl: './regist.component.html',
  styleUrls: ['./regist.component.css']
})
export class RegistComponent implements OnInit {
  form!: formType;
  regist!: FormGroup;
  log!: string;
  constructor(private formBuilder: FormBuilder, private router: Router) { }
  onSubmit(): void {
    if (DataService.checkUser(this.form.username as string)){
      alert('This username has been registed!');
    }else {
      localStorage.setItem('username', this.form.username as string);
      DataService.createUser(this.form);
      this.router.navigate(['/home']);
    }
  }
  ngOnInit(): void {
    if (localStorage.getItem('username')){
      this.router.navigate(['/logout'])
        .then(() => alert('You must logout your account first!'));
    }
    this.form = new formType('', '', '', '', '', '');
    this.regist = this.formBuilder.group({
      username: ['', Validators.pattern(/^[a-zA-Z][a-zA-Z0-9_]{5,17}$/)],
      id: ['', Validators.pattern(/^[1-9]\d{7}$/)],
      tel: ['', Validators.pattern(/^[1-9]\d{10}$/)],
      email: ['', Validators.pattern(/^[a-zA-Z_\-]+@([a-zA-Z_\-]+\.)+[a-zA-Z]{2,4}$/)],
      password: ['', Validators.pattern(/^[a-zA-Z0-9_\-]{6,12}$/)],
      re_password: []
    }, {
      validator: MustMatch('password', 're_password')
    });
  }
  get check(): any {
    return this.regist.controls;
  }
}
