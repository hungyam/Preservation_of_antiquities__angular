export class User {
  public username: string;
  public id: number;
  public tel: number;
  public email: string;
  public key: string;
  public constructor(
    username:string,
    id:number,
    tel:number,
    email:string,
    key:string
  )
  { this.username=username;
    this.id=id;
    this.tel=tel;
    this.email=email;
    this.key=key;
  }
}
