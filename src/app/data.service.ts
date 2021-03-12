import { Injectable } from '@angular/core';
import { Users } from './dataManage/Users';
import { Md5 } from 'ts-md5';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() { }
  findUser(username:string, password:string){
    Md5.hashStr()
  }
}
