import { Injectable } from '@angular/core';
import User from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  login(user: User): boolean {
    return true;
  }

  logoff(): boolean {
    return true;
  }
}
