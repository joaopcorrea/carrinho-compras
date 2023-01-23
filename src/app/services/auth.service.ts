import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import User from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedUser: User | undefined = localStorage.getItem('loggedUser')
    ? JSON.parse(localStorage.getItem('loggedUser')!)
    : null;

  constructor(private router: Router, private http: HttpClient) {}

  canActivate(route: ActivatedRouteSnapshot) {
    // Escrevemos uma função que retorne verdadeiro ou falso.
    // Retornando verdadeiro, a rota pode ser acessada.
    // Retornando falso, não.

    if (!this.loggedUser) {
      this.router.navigate(['/login']);
    }
  }

  persistLoggedUser(user: User) {
    localStorage.setItem('loggedUser', JSON.stringify(user));
    this.loggedUser = user;
  }

  getLoggedUser() {
    return this.loggedUser;
  }

  login =(email: string, password: string) => this.http.get('http://localhost:3000/users')

  logout() {
    localStorage.removeItem('loggedUser');
    this.loggedUser = undefined;
  }
}
