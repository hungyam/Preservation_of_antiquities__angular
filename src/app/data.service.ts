import { Injectable } from '@angular/core';
import { Users } from './dataManage/Users';
import { Md5 } from 'ts-md5';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() { }
  static findUser(username:string, password:string){
    let user=Users.find(obj => obj.username==username);
    if(user && user.key==Md5.hashStr(password)){
      return true;
    }
    return false;
  }

}
