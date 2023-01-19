import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import User from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getUser(id: number) {
    let user;
    this.http.get(this.apiUrl + '/users').subscribe({
      next: (users) => {
        user = (users as User[]).find((u) => u.id === id) as User;
      },
    });
    return user;
  }

  createUser = (user: User) => this.http.post(this.apiUrl + '/users', user)
}
