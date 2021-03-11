import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {formType} from './formType';
import {MustMatch} from './passwordMatch';

@Component({
  selector: 'app-regist',
  templateUrl: './regist.component.html',
  styleUrls: ['./regist.component.css']
})
export class RegistComponent implements OnInit {
  form!:formType;
  regist!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }
  onSubmit():void { }
  ngOnInit(): void {
    this.form = new formType('','','','','','');
    this.regist = this.formBuilder.group({
      username: ['',Validators.pattern(/^[a-zA-Z][a-zA-Z0-9_]{5,17}$/)],
      id: ['',Validators.pattern(/^[1-9]\d{7}$/)],
      tel: ['',Validators.pattern(/^[1-9]\d{10}$/)],
      email: ['',Validators.pattern(/^[a-zA-Z_\-]+@([a-zA-Z_\-]+\.)+[a-zA-Z]{2,4}$/)],
      password: ['',Validators.pattern(/^[a-zA-Z0-9_\-]{6,12}$/)],
      re_password: []
    },{
      validator: MustMatch('password','re_password')
    })
  }
  get check() {
    return this.regist.controls;
  }
}
