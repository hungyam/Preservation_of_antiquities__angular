import {Component, OnInit} from '@angular/core';
import {formType} from '../regist/formType';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  form!: formType;
  signin!: FormGroup;
  error = '';
  onSubmit(): void {
  }
  constructor() {
  }

  ngOnInit(): void {
    this.form = new formType('', '', '', '', '', '');
  }

}
