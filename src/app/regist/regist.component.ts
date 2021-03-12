import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { formType } from './formType';
import { MustMatch } from './passwordMatch';
import { Router } from '@angular/router';
import { Users } from '../dataManage/Users';
import { User } from '../dataManage/userType';

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
    localStorage.setItem('username', <string> this.form.username );
    const registerUser: User = this.form;
    Users.push(registerUser);
    this.router.navigate(['/home']);
  }
  ngOnInit(): void {
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
