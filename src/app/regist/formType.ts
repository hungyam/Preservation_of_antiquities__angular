import {User} from '../dataManage/userType';

export class formType extends User {
  public re_key:string;
  constructor(
    username:string,
    id:string,
    tel:string,
    email:string,
    key:string,
    re_key:string
  ) {
    super(username,id,tel,email,key);
    this.re_key=re_key;
  }
}
