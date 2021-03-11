export class User {
  public username: string;
  public id: string;
  public tel: string;
  public email: string;
  public key: string;

  public constructor(
    username: string,
    id: string,
    tel: string,
    email: string,
    key: string
  ) {
    this.username = username;
    this.id = id;
    this.tel = tel;
    this.email = email;
    this.key = key;
  }
}
