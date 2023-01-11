export default class User {
  id: number;
  name: string;
  email: string;
  password: string;

  constructor(name: string, email: string, password: string) {
    this.id = this.getNewId();
    this.name = name;
    this.email = email;
    this.password = password;
  }

  private getNewId(): number {
    return Date.now();
  }
}
