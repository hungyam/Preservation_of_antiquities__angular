import { Component, OnInit } from '@angular/core';
import {formType} from './formType';

@Component({
  selector: 'app-regist',
  templateUrl: './regist.component.html',
  styleUrls: ['./regist.component.css']
})
export class RegistComponent implements OnInit {
  form!:formType;
  constructor() { }

  ngOnInit(): void {
  }

}
